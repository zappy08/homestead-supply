#!/usr/bin/env node

/**
 * Import Products from SmartScout CSV Export
 * Filters for B2B/professional products only
 */

const fs = require('fs');
const path = require('path');

// Categories to EXCLUDE
const EXCLUDED_CATEGORIES = [
  'beauty',
  'personal care',
  'fragrance',
  'perfume',
  'cologne',
  'toys',
  'games',
  'teddy',
  'stuffed',
  'baby',
  'jewelry',
  'fashion',
  'clothing',
  'apparel',
  'camera',
  'photo',
  'webcam',
  'projector',
  'ebook',
  'reading light',
  'computer',
  'monitor',
  'hard drive',
  'solid state',
  'router',
  'surveillance',
  'dome camera',
  'tv',
  'television',
  'phone',
  'tablet',
  'watch',
  'headphone',
  'speaker',
  'audio',
  'gloves',
  'medical',
  'exam',
  'bilge pump',
  'boat',
  'marine',
  'earmuff',
  'hunting',
  'shooting',
  'knife',
  'knives',
  'tactical',
  'folding knife',
  'kayak',
  'air mattress',
  'camping',
];

// Categories to INCLUDE (Tools, HVAC, Plumbing, Home Improvement)
const INCLUDED_CATEGORIES = [
  'tools',
  'home improvement',
  'industrial',
  'hvac',
  'plumbing',
  'electrical',
  'hardware',
  'heater',
  'air condition',
  'thermostat',
  'refrigerant',
  'pipe',
  'valve',
  'faucet',
  'toilet',
  'sink',
  'drill',
  'saw',
  'wrench',
  'socket',
  'hammer',
  'screwdriver',
  'level',
  'laser',
  'concrete',
  'mixer',
  'nibbler',
  'impact',
  'grinder',
  'sander',
  'compressor',
  'generator',
  'welder',
  'jack',
  'lift',
  'tool box',
  'tool bag',
  'work light',
  'job site',
  'safety',
  'cabinet',
  'storage',
  'shelf',
  'rack',
  'ladder',
  'scaffold',
  'paint',
  'drywall',
  'insulation',
  'roofing',
  'flooring',
  'tile',
  'trim',
  'molding',
  'door',
  'window',
  'lock',
  'hinge',
  'outdoor oven',
  'grill',
  'hedge trimmer',
  'lawn',
  'mower',
  'blower',
  'chainsaw',
  'pressure washer',
];

// Category mapping
const CATEGORY_MAP = {
  'tools & home improvement': 'tools',
  'automotive': 'tools',
  'industrial & scientific': 'tools',
  'appliances': 'home-goods',
  'electronics': 'home-goods',
  'patio, lawn & garden': 'outdoor',
  'office products': 'home-goods',
};

function shouldIncludeProduct(category, subcategory, brand) {
  const text = `${category} ${subcategory} ${brand}`.toLowerCase();

  // Exclude beauty, toys, etc.
  for (const excluded of EXCLUDED_CATEGORIES) {
    if (text.includes(excluded)) {
      return false;
    }
  }

  // Must match at least one included category
  for (const included of INCLUDED_CATEGORIES) {
    if (text.includes(included)) {
      return true;
    }
  }

  return false;
}

function detectCategory(amazonCategory) {
  const cat = (amazonCategory || '').toLowerCase();
  for (const [key, value] of Object.entries(CATEGORY_MAP)) {
    if (cat.includes(key.split(' ')[0])) {
      return value;
    }
  }
  return 'home-goods';
}

function parseCSV(content) {
  const lines = content.split('\n');
  const products = [];

  for (let i = 1; i < lines.length && products.length < 100; i++) {
    const line = lines[i];
    if (!line.trim()) continue;

    // Parse CSV with quotes
    const fields = [];
    let current = '';
    let inQuotes = false;

    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        fields.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    fields.push(current.trim());

    // Fields: "", Image, ASIN, Est Revenue, Buy Box %, Brand, Category, Rank, Subcategory, FBA, Offer Price
    const imageFile = fields[1] || '';
    const asin = fields[2] || '';
    const revenue = parseFloat(fields[3]) || 0;
    const brand = fields[5] || '';
    const category = fields[6] || '';
    const subcategory = fields[8] || '';
    const price = parseFloat(fields[10]) || 0;

    // Skip invalid or non-B2B items (allow higher prices for B2B)
    if (!asin || price <= 0 || price > 2000) continue;
    if (!shouldIncludeProduct(category, subcategory, brand)) continue;

    // Build Amazon image URL
    const imageUrl = imageFile
      ? `https://m.media-amazon.com/images/I/${imageFile}`
      : `https://placehold.co/400x400/1e3a5f/ffffff?text=Product`;

    // Create title from subcategory and brand
    let title = subcategory || category;
    if (brand && !title.toLowerCase().includes(brand.toLowerCase())) {
      title = `${brand} ${title}`;
    }
    if (title.length > 60) {
      title = title.substring(0, 57) + '...';
    }

    products.push({
      id: String(products.length + 1),
      asin: asin,
      title: title,
      description: `Quality ${subcategory || category} from ${brand || 'a trusted brand'}. Available with fast shipping.`,
      price: `$${price.toFixed(2)}`,
      image: imageUrl,
      category: detectCategory(category),
      amazonUrl: `https://www.amazon.com/dp/${asin}`,
      featured: products.length < 6,
    });
  }

  return products;
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

// Products imported from SmartScout - B2B/Professional products only
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
const csvPath = process.argv[2] || '/Users/igalrubinshtein/Desktop/SmartScout - Homestead Supply & More ✅ - Offers (2026-01-20 10_45).csv';

console.log(`Reading ${csvPath}...`);
const content = fs.readFileSync(csvPath, 'utf-8');

console.log('Parsing products (B2B only, excluding beauty/toys)...');
const products = parseCSV(content);

console.log(`Found ${products.length} B2B products`);

const outputPath = path.join(__dirname, '..', 'src', 'data', 'products.ts');
fs.writeFileSync(outputPath, generateTypescript(products));

console.log(`✓ Wrote ${products.length} products to ${outputPath}`);
console.log('\nCategory breakdown:');
const categoryCounts = {};
products.forEach(p => {
  categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
});
Object.entries(categoryCounts).forEach(([cat, count]) => {
  console.log(`  ${cat}: ${count} products`);
});

console.log('\nProducts:');
products.forEach(p => {
  console.log(`  - ${p.title} (${p.asin}) - ${p.price}`);
});
