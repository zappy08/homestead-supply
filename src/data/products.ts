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

// Products imported from SmartScout export
export const products: Product[] = [
  {
    "id": "1",
    "asin": "B079KSFNB2",
    "title": "External Hard Drives",
    "description": "Quality External Hard Drives from a trusted brand. Available with fast shipping.",
    "price": "$467.86",
    "image": "https://m.media-amazon.com/images/I/31c-4BoWx2L.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B079KSFNB2",
    "featured": true
  },
  {
    "id": "2",
    "asin": "B077XK7PC6",
    "title": "Lumitec Underwater Continuous Lights",
    "description": "Quality Underwater Continuous Lights from Lumitec. Available with fast shipping.",
    "price": "$443.39",
    "image": "https://m.media-amazon.com/images/I/51crK-9BxHL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B077XK7PC6",
    "featured": true
  },
  {
    "id": "3",
    "asin": "B000GOYMAE",
    "title": "eBook Reading Lights",
    "description": "Quality eBook Reading Lights from a trusted brand. Available with fast shipping.",
    "price": "$17.05",
    "image": "https://m.media-amazon.com/images/I/310mmmgNAlL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B000GOYMAE",
    "featured": true
  },
  {
    "id": "4",
    "asin": "B0BL91Z13W",
    "title": "acer Computer Monitors",
    "description": "Quality Computer Monitors from acer. Available with fast shipping.",
    "price": "$412.21",
    "image": "https://m.media-amazon.com/images/I/41eyJMOZkiL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B0BL91Z13W",
    "featured": true
  },
  {
    "id": "5",
    "asin": "B004EHKI9S",
    "title": "Jo Malone Perfumes & Fragrances",
    "description": "Quality Perfumes & Fragrances from Jo Malone. Available with fast shipping.",
    "price": "$70.71",
    "image": "https://m.media-amazon.com/images/I/21hdmczNdKL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B004EHKI9S",
    "featured": true
  },
  {
    "id": "6",
    "asin": "B0785FF944",
    "title": "Underwater Continuous Lights",
    "description": "Quality Underwater Continuous Lights from a trusted brand. Available with fast shipping.",
    "price": "$413.99",
    "image": "https://m.media-amazon.com/images/I/4137U-IQQ2L.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B0785FF944",
    "featured": true
  },
  {
    "id": "7",
    "asin": "B074DTN6MS",
    "title": "ARAMIS Men's Eau de Toilette",
    "description": "Quality Men's Eau de Toilette from ARAMIS. Available with fast shipping.",
    "price": "$50.17",
    "image": "https://m.media-amazon.com/images/I/41ANj2kYi1L.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B074DTN6MS",
    "featured": false
  },
  {
    "id": "8",
    "asin": "B08FBQHY35",
    "title": "Jean Paul Gaultier Men's Eau de Parfum",
    "description": "Quality Men's Eau de Parfum from Jean Paul Gaultier. Available with fast shipping.",
    "price": "$89.38",
    "image": "https://m.media-amazon.com/images/I/41uTEuhpJ8L.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B08FBQHY35",
    "featured": false
  },
  {
    "id": "9",
    "asin": "B0BJNHPYC4",
    "title": "Milwaukee Power Nibblers",
    "description": "Quality Power Nibblers from Milwaukee. Available with fast shipping.",
    "price": "$273.32",
    "image": "https://m.media-amazon.com/images/I/31r2UGLUMxL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B0BJNHPYC4",
    "featured": false
  },
  {
    "id": "10",
    "asin": "B00PM8T4NY",
    "title": "Goodman Heaters & Heater Accessories",
    "description": "Quality Heaters & Heater Accessories from Goodman. Available with fast shipping.",
    "price": "$150.00",
    "image": "https://m.media-amazon.com/images/I/51leb6ksQaL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B00PM8T4NY",
    "featured": false
  },
  {
    "id": "11",
    "asin": "B08GBY9QXX",
    "title": "Jean Paul Gaultier Men's Eau de Parfum",
    "description": "Quality Men's Eau de Parfum from Jean Paul Gaultier. Available with fast shipping.",
    "price": "$139.24",
    "image": "https://m.media-amazon.com/images/I/41FB87Tvl4L.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B08GBY9QXX",
    "featured": false
  },
  {
    "id": "12",
    "asin": "B002WQCR9C",
    "title": "Ansell Medical Exam Gloves",
    "description": "Quality Medical Exam Gloves from Ansell. Available with fast shipping.",
    "price": "$142.26",
    "image": "https://m.media-amazon.com/images/I/414iWIn7WwL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B002WQCR9C",
    "featured": false
  },
  {
    "id": "13",
    "asin": "B07JNL7FN2",
    "title": "DEWALT Job Site & Security Lighting",
    "description": "Quality Job Site & Security Lighting from DEWALT. Available with fast shipping.",
    "price": "$219.00",
    "image": "https://m.media-amazon.com/images/I/41aVWtPItlL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B07JNL7FN2",
    "featured": false
  },
  {
    "id": "14",
    "asin": "B0F3L9P1X2",
    "title": "Milwaukee Automotive Consoles & Organizers",
    "description": "Quality Automotive Consoles & Organizers from Milwaukee. Available with fast shipping.",
    "price": "$329.00",
    "image": "https://m.media-amazon.com/images/I/4119eTPTZhL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B0F3L9P1X2",
    "featured": false
  },
  {
    "id": "15",
    "asin": "B00EP1FEYW",
    "title": "Jo Malone Women's Cologne",
    "description": "Quality Women's Cologne from Jo Malone. Available with fast shipping.",
    "price": "$130.00",
    "image": "https://m.media-amazon.com/images/I/41B8VVP+JiL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B00EP1FEYW",
    "featured": false
  },
  {
    "id": "16",
    "asin": "B0F1L151VJ",
    "title": "Milwaukee Automotive Consoles & Organizers",
    "description": "Quality Automotive Consoles & Organizers from Milwaukee. Available with fast shipping.",
    "price": "$488.65",
    "image": "https://m.media-amazon.com/images/I/2174lKbPeML.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B0F1L151VJ",
    "featured": false
  },
  {
    "id": "17",
    "asin": "B0CX842PQ7",
    "title": "warmies Stuffed Animals & Teddy Bears",
    "description": "Quality Stuffed Animals & Teddy Bears from warmies. Available with fast shipping.",
    "price": "$34.78",
    "image": "https://m.media-amazon.com/images/I/41cqyIM4-eL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B0CX842PQ7",
    "featured": false
  },
  {
    "id": "18",
    "asin": "B00L1ZCN0I",
    "title": "Sunex Tools Floor Jacks",
    "description": "Quality Floor Jacks from Sunex Tools. Available with fast shipping.",
    "price": "$373.99",
    "image": "https://m.media-amazon.com/images/I/41ZEFoZ9c9L.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B00L1ZCN0I",
    "featured": false
  },
  {
    "id": "19",
    "asin": "B0CRBLW5GF",
    "title": "BLACKSTONE Outdoor Ovens",
    "description": "Quality Outdoor Ovens from BLACKSTONE. Available with fast shipping.",
    "price": "$367.16",
    "image": "https://m.media-amazon.com/images/I/31DpFoPrXCL.jpg",
    "category": "outdoor",
    "amazonUrl": "https://www.amazon.com/dp/B0CRBLW5GF",
    "featured": false
  },
  {
    "id": "20",
    "asin": "B07QBKKWVB",
    "title": "DEWALT Power Concrete Mixers",
    "description": "Quality Power Concrete Mixers from DEWALT. Available with fast shipping.",
    "price": "$449.00",
    "image": "https://m.media-amazon.com/images/I/51it4XSZmIL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B07QBKKWVB",
    "featured": false
  },
  {
    "id": "21",
    "asin": "B0C43HT5P8",
    "title": "Internal Solid State Drives",
    "description": "Quality Internal Solid State Drives from a trusted brand. Available with fast shipping.",
    "price": "$143.56",
    "image": "https://m.media-amazon.com/images/I/31yArZoOmKL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B0C43HT5P8",
    "featured": false
  },
  {
    "id": "22",
    "asin": "B005MVB3S0",
    "title": "Power Probe Electrical System Tools",
    "description": "Quality Electrical System Tools from Power Probe. Available with fast shipping.",
    "price": "$189.51",
    "image": "https://m.media-amazon.com/images/I/51m6wAZTOYL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B005MVB3S0",
    "featured": false
  },
  {
    "id": "23",
    "asin": "B084ZHJPYT",
    "title": "warmies Microwavable Heat Pads",
    "description": "Quality Microwavable Heat Pads from warmies. Available with fast shipping.",
    "price": "$35.25",
    "image": "https://m.media-amazon.com/images/I/41QzgvrGr2L.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B084ZHJPYT",
    "featured": false
  },
  {
    "id": "24",
    "asin": "B0CKKK3CK1",
    "title": "Bosch Line Lasers",
    "description": "Quality Line Lasers from Bosch. Available with fast shipping.",
    "price": "$87.42",
    "image": "https://m.media-amazon.com/images/I/31RPkq7V0-L.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B0CKKK3CK1",
    "featured": false
  },
  {
    "id": "25",
    "asin": "B0BS88SY7N",
    "title": "Surveillance Housing & Mounting Brackets",
    "description": "Quality Surveillance Housing & Mounting Brackets from a trusted brand. Available with fast shipping.",
    "price": "$42.43",
    "image": "https://m.media-amazon.com/images/I/31s5BeVsXkL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B0BS88SY7N",
    "featured": false
  },
  {
    "id": "26",
    "asin": "B01BSURQXO",
    "title": "DEWALT Power Hedge Trimmers",
    "description": "Quality Power Hedge Trimmers from DEWALT. Available with fast shipping.",
    "price": "$219.15",
    "image": "https://m.media-amazon.com/images/I/317WvD2uLCL.jpg",
    "category": "outdoor",
    "amazonUrl": "https://www.amazon.com/dp/B01BSURQXO",
    "featured": false
  },
  {
    "id": "27",
    "asin": "B00AA1741C",
    "title": "Bosch Automotive Replacement Mass Air Flow Sensors",
    "description": "Quality Automotive Replacement Mass Air Flow Sensors from Bosch. Available with fast shipping.",
    "price": "$312.50",
    "image": "https://m.media-amazon.com/images/I/41lw6Xv83+L.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B00AA1741C",
    "featured": false
  },
  {
    "id": "28",
    "asin": "B087SCJJQM",
    "title": "Walker's Hunting & Shooting Earmuffs",
    "description": "Quality Hunting & Shooting Earmuffs from Walker's. Available with fast shipping.",
    "price": "$164.64",
    "image": "https://m.media-amazon.com/images/I/31lUm4q0JtL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B087SCJJQM",
    "featured": false
  },
  {
    "id": "29",
    "asin": "B000XBH2D4",
    "title": "Dometic Boat Bilge Pumps",
    "description": "Quality Boat Bilge Pumps from Dometic. Available with fast shipping.",
    "price": "$382.78",
    "image": "https://m.media-amazon.com/images/I/31x6iKXg9oL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B000XBH2D4",
    "featured": false
  },
  {
    "id": "30",
    "asin": "B0CMBQ7WRG",
    "title": "Milwaukee Tool Boxes",
    "description": "Quality Tool Boxes from Milwaukee. Available with fast shipping.",
    "price": "$199.43",
    "image": "https://m.media-amazon.com/images/I/41ODgU71N0L.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B0CMBQ7WRG",
    "featured": false
  }
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
