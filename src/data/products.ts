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

// Products imported from SmartScout - B2B/Professional products only
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
    "id": "3",
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
    "id": "4",
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
    "id": "5",
    "asin": "B0BJNHPYC4",
    "title": "Milwaukee Power Nibblers",
    "description": "Quality Power Nibblers from Milwaukee. Available with fast shipping.",
    "price": "$273.32",
    "image": "https://m.media-amazon.com/images/I/31r2UGLUMxL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B0BJNHPYC4",
    "featured": true
  },
  {
    "id": "6",
    "asin": "B00PM8T4NY",
    "title": "Goodman Heaters & Heater Accessories",
    "description": "Quality Heaters & Heater Accessories from Goodman. Available with fast shipping.",
    "price": "$150.00",
    "image": "https://m.media-amazon.com/images/I/51leb6ksQaL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B00PM8T4NY",
    "featured": true
  },
  {
    "id": "7",
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
    "id": "8",
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
    "id": "9",
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
    "id": "10",
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
    "id": "11",
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
    "id": "12",
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
    "id": "13",
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
    "id": "14",
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
    "id": "15",
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
    "id": "16",
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
    "id": "17",
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
    "id": "18",
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
    "id": "19",
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
    "id": "20",
    "asin": "B0CMBQ7WRG",
    "title": "Milwaukee Tool Boxes",
    "description": "Quality Tool Boxes from Milwaukee. Available with fast shipping.",
    "price": "$199.43",
    "image": "https://m.media-amazon.com/images/I/41ODgU71N0L.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B0CMBQ7WRG",
    "featured": false
  },
  {
    "id": "21",
    "asin": "B0D3SNF7YK",
    "title": "Samsung Range Accessories",
    "description": "Quality Range Accessories from Samsung. Available with fast shipping.",
    "price": "$128.70",
    "image": "https://m.media-amazon.com/images/I/31KXPiNPVAL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B0D3SNF7YK",
    "featured": false
  },
  {
    "id": "22",
    "asin": "B00AAS4KIU",
    "title": "DreamLine Shower Bases & Pans",
    "description": "Quality Shower Bases & Pans from DreamLine. Available with fast shipping.",
    "price": "$437.64",
    "image": "https://m.media-amazon.com/images/I/41Wz83CpB-L.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B00AAS4KIU",
    "featured": false
  },
  {
    "id": "23",
    "asin": "B0000EI9AW",
    "title": "IRWIN Tap & Die Sets",
    "description": "Quality Tap & Die Sets from IRWIN. Available with fast shipping.",
    "price": "$331.77",
    "image": "https://m.media-amazon.com/images/I/51tpQ25yw-L.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B0000EI9AW",
    "featured": false
  },
  {
    "id": "24",
    "asin": "B01ECA646W",
    "title": "WD-40 Power Tool Lubricants",
    "description": "Quality Power Tool Lubricants from WD-40. Available with fast shipping.",
    "price": "$187.99",
    "image": "https://m.media-amazon.com/images/I/41X1NpqPVcL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B01ECA646W",
    "featured": false
  },
  {
    "id": "25",
    "asin": "B01MDSE6AI",
    "title": "Honeywell Home Programmable Thermostats",
    "description": "Quality Home Programmable Thermostats from Honeywell. Available with fast shipping.",
    "price": "$91.76",
    "image": "https://m.media-amazon.com/images/I/51uTexlXhgL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B01MDSE6AI",
    "featured": false
  },
  {
    "id": "26",
    "asin": "B0BV48S1X9",
    "title": "Milwaukee Power Impact Wrenches",
    "description": "Quality Power Impact Wrenches from Milwaukee. Available with fast shipping.",
    "price": "$449.00",
    "image": "https://m.media-amazon.com/images/I/41wzg7fXAWL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B0BV48S1X9",
    "featured": false
  },
  {
    "id": "27",
    "asin": "B01BRKA67I",
    "title": "Samsung Refrigerators",
    "description": "Quality Refrigerators from Samsung. Available with fast shipping.",
    "price": "$177.93",
    "image": "https://m.media-amazon.com/images/I/41IPFi6OFoL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B01BRKA67I",
    "featured": false
  },
  {
    "id": "28",
    "asin": "B00GODGN9E",
    "title": "CTEK Battery Chargers",
    "description": "Quality Battery Chargers from CTEK. Available with fast shipping.",
    "price": "$133.58",
    "image": "https://m.media-amazon.com/images/I/41ub63O1ZpS.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B00GODGN9E",
    "featured": false
  },
  {
    "id": "29",
    "asin": "B09ZF35CR8",
    "title": "DEWALT Tool Bags",
    "description": "Quality Tool Bags from DEWALT. Available with fast shipping.",
    "price": "$156.38",
    "image": "https://m.media-amazon.com/images/I/41wk29+XBJL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B09ZF35CR8",
    "featured": false
  },
  {
    "id": "30",
    "asin": "B0CPQ8PBLY",
    "title": "Computer Routers",
    "description": "Quality Computer Routers from a trusted brand. Available with fast shipping.",
    "price": "$499.00",
    "image": "https://m.media-amazon.com/images/I/21eMob5LQ7L.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B0CPQ8PBLY",
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
