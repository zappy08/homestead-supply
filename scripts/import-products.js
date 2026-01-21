#!/usr/bin/env node

/**
 * Import Products from Amazon Seller Central CSV Export
 *
 * Usage: node scripts/import-products.js path/to/your-export.csv
 *
 * This script converts an Amazon Seller Central inventory export to
 * the products.ts format used by the website.
 */

const fs = require('fs');
const path = require('path');

// Category mapping - customize based on your products
const CATEGORY_KEYWORDS = {
  'home-goods': ['storage', 'organizer', 'kitchen', 'home', 'drawer', 'shelf', 'rack', 'bin', 'container', 'basket', 'decor'],
  'tools': ['tool', 'drill', 'wrench', 'screwdriver', 'hammer', 'saw', 'level', 'measure', 'plier', 'socket', 'work light'],
  'outdoor': ['garden', 'outdoor', 'lawn', 'plant', 'hose', 'solar', 'patio', 'grill', 'yard', 'landscape']
};

function detectCategory(title, description = '') {
  const text = `${title} ${description}`.toLowerCase();

  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    for (const keyword of keywords) {
      if (text.includes(keyword)) {
        return category;
      }
    }
  }
  return 'home-goods'; // default
}

function parseCSV(content) {
  const lines = content.split('\n');
  if (lines.length < 2) {
    throw new Error('CSV file appears to be empty');
  }

  // Parse header
  const header = parseCSVLine(lines[0]);

  // Find column indices (Seller Central export column names)
  const columns = {
    sku: findColumn(header, ['seller-sku', 'sku', 'Seller SKU']),
    asin: findColumn(header, ['asin1', 'asin', 'ASIN']),
    title: findColumn(header, ['item-name', 'product-name', 'title', 'Item Name', 'Product Name']),
    description: findColumn(header, ['item-description', 'description', 'Item Description']),
    price: findColumn(header, ['price', 'your-price', 'Price', 'Your Price']),
    quantity: findColumn(header, ['quantity', 'quantity-available', 'Quantity']),
    imageUrl: findColumn(header, ['image-url', 'main-image-url', 'Image URL']),
  };

  console.log('Found columns:', columns);

  // Parse data rows
  const products = [];
  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;

    const row = parseCSVLine(lines[i]);
    const title = row[columns.title] || '';
    const asin = row[columns.asin] || '';

    if (!title || !asin) continue;

    const product = {
      id: String(products.length + 1),
      asin: asin,
      title: title.substring(0, 100), // Truncate long titles
      description: (row[columns.description] || title).substring(0, 200),
      price: formatPrice(row[columns.price]),
      image: row[columns.imageUrl] || `https://via.placeholder.com/400x400/1e3a5f/ffffff?text=${encodeURIComponent(title.substring(0, 20))}`,
      category: detectCategory(title, row[columns.description]),
      amazonUrl: `https://www.amazon.com/dp/${asin}`,
      featured: products.length < 6, // First 6 products are featured
    };

    products.push(product);
  }

  return products;
}

function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      inQuotes = !inQuotes;
    } else if ((char === ',' || char === '\t') && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());

  return result;
}

function findColumn(header, possibleNames) {
  for (const name of possibleNames) {
    const index = header.findIndex(h =>
      h.toLowerCase().replace(/[^a-z0-9]/g, '') === name.toLowerCase().replace(/[^a-z0-9]/g, '')
    );
    if (index !== -1) return index;
  }
  return -1;
}

function formatPrice(price) {
  if (!price) return '$0.00';
  const num = parseFloat(price.replace(/[^0-9.]/g, ''));
  if (isNaN(num)) return '$0.00';
  return `$${num.toFixed(2)}`;
}

function generateTypescript(products) {
  return `export interface Product {
  id: string;
  asin: string;
  title: string;
  description: string;
  price: string;
  image: string;
  category: Category;
  amazonUrl: string;
  featured?: boolean;
}

export type Category = 'home-goods' | 'tools' | 'outdoor' | 'all';

export const categories: { id: Category; name: string; description: string }[] = [
  { id: 'all', name: 'All Products', description: 'Browse our complete catalog' },
  { id: 'home-goods', name: 'Home Goods', description: 'Quality products for your home' },
  { id: 'tools', name: 'Tools & Hardware', description: 'Reliable tools for every project' },
  { id: 'outdoor', name: 'Outdoor & Garden', description: 'Everything for your outdoor space' },
];

export const products: Product[] = ${JSON.stringify(products, null, 2)};

export function getProductsByCategory(category: Category): Product[] {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured);
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
`;
}

// Main
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log(`
╔══════════════════════════════════════════════════════════════╗
║     Homestead Supply - Product Import Script                 ║
╚══════════════════════════════════════════════════════════════╝

Usage: node scripts/import-products.js <csv-file>

This script imports products from an Amazon Seller Central export.

How to export from Seller Central:
1. Go to sellercentral.amazon.com
2. Navigate to: Reports → Inventory → Inventory Reports
3. Select "Active Listings Report"
4. Click "Request Report"
5. Download the generated file
6. Run: node scripts/import-products.js ~/Downloads/your-file.txt

The script will generate src/data/products.ts with your products.
  `);
  process.exit(0);
}

const csvPath = args[0];

if (!fs.existsSync(csvPath)) {
  console.error(`Error: File not found: ${csvPath}`);
  process.exit(1);
}

console.log(`Reading ${csvPath}...`);
const content = fs.readFileSync(csvPath, 'utf-8');

console.log('Parsing products...');
const products = parseCSV(content);

console.log(`Found ${products.length} products`);
console.log(`Categories: ${[...new Set(products.map(p => p.category))].join(', ')}`);

const outputPath = path.join(__dirname, '..', 'src', 'data', 'products.ts');
const typescript = generateTypescript(products);

fs.writeFileSync(outputPath, typescript);
console.log(`\n✓ Wrote ${products.length} products to ${outputPath}`);
console.log('\nCategory breakdown:');
const categoryCounts = {};
products.forEach(p => {
  categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
});
Object.entries(categoryCounts).forEach(([cat, count]) => {
  console.log(`  ${cat}: ${count} products`);
});
`;
