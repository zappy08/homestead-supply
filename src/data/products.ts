export interface Product {
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

// Sample products - replace with your actual Seller Central export data
export const products: Product[] = [
  {
    id: '1',
    asin: 'B0EXAMPLE01',
    title: 'Heavy-Duty Storage Bins (Set of 6)',
    description: 'Durable plastic storage containers perfect for organizing your garage, basement, or closet. Stackable design with secure lids.',
    price: '$34.99',
    image: 'https://via.placeholder.com/400x400/1e3a5f/ffffff?text=Storage+Bins',
    category: 'home-goods',
    amazonUrl: 'https://www.amazon.com/dp/B0EXAMPLE01',
    featured: true,
  },
  {
    id: '2',
    asin: 'B0EXAMPLE02',
    title: 'Professional 18V Cordless Drill Kit',
    description: 'Powerful cordless drill with 2 batteries, charger, and carrying case. Perfect for DIY projects and home repairs.',
    price: '$89.99',
    image: 'https://via.placeholder.com/400x400/1e3a5f/ffffff?text=Cordless+Drill',
    category: 'tools',
    amazonUrl: 'https://www.amazon.com/dp/B0EXAMPLE02',
    featured: true,
  },
  {
    id: '3',
    asin: 'B0EXAMPLE03',
    title: 'Garden Tool Set (10-Piece)',
    description: 'Complete garden tool set including trowel, cultivator, weeder, and more. Ergonomic handles for comfortable use.',
    price: '$45.99',
    image: 'https://via.placeholder.com/400x400/1e3a5f/ffffff?text=Garden+Tools',
    category: 'outdoor',
    amazonUrl: 'https://www.amazon.com/dp/B0EXAMPLE03',
    featured: true,
  },
  {
    id: '4',
    asin: 'B0EXAMPLE04',
    title: 'Stainless Steel Kitchen Organizer',
    description: 'Multi-tier kitchen organizer for countertops. Holds spices, utensils, and more. Rust-resistant stainless steel construction.',
    price: '$29.99',
    image: 'https://via.placeholder.com/400x400/1e3a5f/ffffff?text=Kitchen+Organizer',
    category: 'home-goods',
    amazonUrl: 'https://www.amazon.com/dp/B0EXAMPLE04',
  },
  {
    id: '5',
    asin: 'B0EXAMPLE05',
    title: '150-Piece Mechanics Tool Set',
    description: 'Comprehensive tool set with sockets, wrenches, screwdrivers, and pliers. Chrome vanadium steel for durability.',
    price: '$149.99',
    image: 'https://via.placeholder.com/400x400/1e3a5f/ffffff?text=Tool+Set',
    category: 'tools',
    amazonUrl: 'https://www.amazon.com/dp/B0EXAMPLE05',
    featured: true,
  },
  {
    id: '6',
    asin: 'B0EXAMPLE06',
    title: 'Solar-Powered Garden Lights (8 Pack)',
    description: 'Weatherproof LED pathway lights. Auto on at dusk, off at dawn. Easy stake installation, no wiring needed.',
    price: '$39.99',
    image: 'https://via.placeholder.com/400x400/1e3a5f/ffffff?text=Garden+Lights',
    category: 'outdoor',
    amazonUrl: 'https://www.amazon.com/dp/B0EXAMPLE06',
  },
  {
    id: '7',
    asin: 'B0EXAMPLE07',
    title: 'Bamboo Drawer Organizers (Set of 5)',
    description: 'Expandable bamboo dividers for drawers. Eco-friendly and adjustable to fit any drawer size.',
    price: '$24.99',
    image: 'https://via.placeholder.com/400x400/1e3a5f/ffffff?text=Drawer+Organizers',
    category: 'home-goods',
    amazonUrl: 'https://www.amazon.com/dp/B0EXAMPLE07',
  },
  {
    id: '8',
    asin: 'B0EXAMPLE08',
    title: 'Digital Laser Level',
    description: 'Self-leveling laser with horizontal and vertical lines. Includes magnetic bracket and carrying pouch.',
    price: '$54.99',
    image: 'https://via.placeholder.com/400x400/1e3a5f/ffffff?text=Laser+Level',
    category: 'tools',
    amazonUrl: 'https://www.amazon.com/dp/B0EXAMPLE08',
  },
  {
    id: '9',
    asin: 'B0EXAMPLE09',
    title: 'Expandable Garden Hose (100ft)',
    description: 'Lightweight, kink-free expandable hose. Includes 8-pattern spray nozzle. Contracts for easy storage.',
    price: '$49.99',
    image: 'https://via.placeholder.com/400x400/1e3a5f/ffffff?text=Garden+Hose',
    category: 'outdoor',
    amazonUrl: 'https://www.amazon.com/dp/B0EXAMPLE09',
    featured: true,
  },
  {
    id: '10',
    asin: 'B0EXAMPLE10',
    title: 'Wall-Mounted Coat Rack',
    description: 'Modern entryway organizer with hooks and shelf. Easy installation, holds up to 50 lbs.',
    price: '$34.99',
    image: 'https://via.placeholder.com/400x400/1e3a5f/ffffff?text=Coat+Rack',
    category: 'home-goods',
    amazonUrl: 'https://www.amazon.com/dp/B0EXAMPLE10',
  },
  {
    id: '11',
    asin: 'B0EXAMPLE11',
    title: 'Rechargeable LED Work Light',
    description: '1000 lumens portable work light with magnetic base. 3 brightness levels, USB rechargeable.',
    price: '$29.99',
    image: 'https://via.placeholder.com/400x400/1e3a5f/ffffff?text=Work+Light',
    category: 'tools',
    amazonUrl: 'https://www.amazon.com/dp/B0EXAMPLE11',
  },
  {
    id: '12',
    asin: 'B0EXAMPLE12',
    title: 'Raised Garden Bed (4x4ft)',
    description: 'Cedar wood raised planter box. Pre-drilled for easy assembly. Perfect for vegetables and flowers.',
    price: '$79.99',
    image: 'https://via.placeholder.com/400x400/1e3a5f/ffffff?text=Garden+Bed',
    category: 'outdoor',
    amazonUrl: 'https://www.amazon.com/dp/B0EXAMPLE12',
    featured: true,
  },
];

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
