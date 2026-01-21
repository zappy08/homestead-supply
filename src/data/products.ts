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
    "asin": "B001E1PF18",
    "title": "Justrite Hazardous Storage Cabinets",
    "description": "Quality Hazardous Storage Cabinets from Justrite. Available with fast shipping.",
    "price": "$1324.35",
    "image": "https://m.media-amazon.com/images/I/41vCKjzLd4L.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B001E1PF18",
    "featured": true
  },
  {
    "id": "2",
    "asin": "B004NHMOJ6",
    "title": "Watts Industrial Pressure Regulators",
    "description": "Quality Industrial Pressure Regulators from Watts. Available with fast shipping.",
    "price": "$1189.91",
    "image": "https://m.media-amazon.com/images/I/41MjBhST5KL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B004NHMOJ6",
    "featured": true
  },
  {
    "id": "3",
    "asin": "B004NHMOHI",
    "title": "Watts Industrial Pressure Regulators",
    "description": "Quality Industrial Pressure Regulators from Watts. Available with fast shipping.",
    "price": "$898.40",
    "image": "https://m.media-amazon.com/images/I/514y4LBHtlL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B004NHMOHI",
    "featured": true
  },
  {
    "id": "4",
    "asin": "B07L1L94D3",
    "title": "American Standard Two-Piece Toilets",
    "description": "Quality Two-Piece Toilets from American Standard. Available with fast shipping.",
    "price": "$606.56",
    "image": "https://m.media-amazon.com/images/I/31Gf7pybgpL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B07L1L94D3",
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
    "asin": "B00C0X1T4Q",
    "title": "ASA Electronics RV Air Conditioners",
    "description": "Quality RV Air Conditioners from ASA Electronics. Available with fast shipping.",
    "price": "$925.46",
    "image": "https://m.media-amazon.com/images/I/41U2aXAODPL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B00C0X1T4Q",
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
    "id": "10",
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
    "id": "11",
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
    "id": "12",
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
    "id": "13",
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
    "id": "14",
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
    "id": "15",
    "asin": "B00NRDHTVA",
    "title": "Dometic RV Air Conditioners",
    "description": "Quality RV Air Conditioners from Dometic. Available with fast shipping.",
    "price": "$1593.57",
    "image": "https://m.media-amazon.com/images/I/2172SHDIjLL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B00NRDHTVA",
    "featured": false
  },
  {
    "id": "16",
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
    "id": "17",
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
    "id": "18",
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
    "id": "19",
    "asin": "B00F5BEC8U",
    "title": "SCHLAGE Door Levers",
    "description": "Quality Door Levers from SCHLAGE. Available with fast shipping.",
    "price": "$502.58",
    "image": "https://m.media-amazon.com/images/I/41tOGEOcZBL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B00F5BEC8U",
    "featured": false
  },
  {
    "id": "20",
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
    "id": "21",
    "asin": "B0BZT3RFLG",
    "title": "Davis Instruments Weather Stations",
    "description": "Quality Weather Stations from Davis Instruments. Available with fast shipping.",
    "price": "$995.00",
    "image": "https://m.media-amazon.com/images/I/41L018An20L.jpg",
    "category": "outdoor",
    "amazonUrl": "https://www.amazon.com/dp/B0BZT3RFLG",
    "featured": false
  },
  {
    "id": "22",
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
    "id": "23",
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
    "id": "24",
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
    "id": "25",
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
    "id": "26",
    "asin": "B00EZH68XC",
    "title": "Tjernlund Household Ventilation Fans",
    "description": "Quality Household Ventilation Fans from Tjernlund. Available with fast shipping.",
    "price": "$1605.36",
    "image": "https://m.media-amazon.com/images/I/41GmxsT94mL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B00EZH68XC",
    "featured": false
  },
  {
    "id": "27",
    "asin": "B006P1NRZS",
    "title": "AO Smith Electric Fan Motors",
    "description": "Quality Electric Fan Motors from AO Smith. Available with fast shipping.",
    "price": "$149.96",
    "image": "https://m.media-amazon.com/images/I/51jpViau4EL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B006P1NRZS",
    "featured": false
  },
  {
    "id": "28",
    "asin": "B07X5YRQ6S",
    "title": "GROHE Touch On Kitchen Sink Faucets",
    "description": "Quality Touch On Kitchen Sink Faucets from GROHE. Available with fast shipping.",
    "price": "$480.90",
    "image": "https://m.media-amazon.com/images/I/31AsHX06BOL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B07X5YRQ6S",
    "featured": false
  },
  {
    "id": "29",
    "asin": "B09Z7BCB43",
    "title": "Keter Storage Sheds",
    "description": "Quality Storage Sheds from Keter. Available with fast shipping.",
    "price": "$233.26",
    "image": "https://m.media-amazon.com/images/I/315QQZych2L.jpg",
    "category": "outdoor",
    "amazonUrl": "https://www.amazon.com/dp/B09Z7BCB43",
    "featured": false
  },
  {
    "id": "30",
    "asin": "B000PJ48CM",
    "title": "Filtrete Furnace Filters",
    "description": "Quality Furnace Filters from Filtrete. Available with fast shipping.",
    "price": "$104.22",
    "image": "https://m.media-amazon.com/images/I/41LFPjlSs+L.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B000PJ48CM",
    "featured": false
  },
  {
    "id": "31",
    "asin": "B004YKDQAS",
    "title": "American Standard Urinals",
    "description": "Quality Urinals from American Standard. Available with fast shipping.",
    "price": "$387.26",
    "image": "https://m.media-amazon.com/images/I/318i4gaCVzL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B004YKDQAS",
    "featured": false
  },
  {
    "id": "32",
    "asin": "B004YKDUMM",
    "title": "American Standard Toilet Flush Valves",
    "description": "Quality Toilet Flush Valves from American Standard. Available with fast shipping.",
    "price": "$321.85",
    "image": "https://m.media-amazon.com/images/I/31+Nx0t6gWL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B004YKDUMM",
    "featured": false
  },
  {
    "id": "33",
    "asin": "B076QLC84N",
    "title": "Milwaukee Tool Boxes",
    "description": "Quality Tool Boxes from Milwaukee. Available with fast shipping.",
    "price": "$241.19",
    "image": "https://m.media-amazon.com/images/I/31QE69r7zFL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B076QLC84N",
    "featured": false
  },
  {
    "id": "34",
    "asin": "B09YXGPKDL",
    "title": "DEWALT Power Tool Combo Kits",
    "description": "Quality Power Tool Combo Kits from DEWALT. Available with fast shipping.",
    "price": "$427.43",
    "image": "https://m.media-amazon.com/images/I/41wHbXzdwpL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B09YXGPKDL",
    "featured": false
  },
  {
    "id": "35",
    "asin": "B01H41SDGU",
    "title": "DEWALT Power Tool Battery Chargers",
    "description": "Quality Power Tool Battery Chargers from DEWALT. Available with fast shipping.",
    "price": "$557.26",
    "image": "https://m.media-amazon.com/images/I/410tBsJ3emL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B01H41SDGU",
    "featured": false
  },
  {
    "id": "36",
    "asin": "B0DJRKLJ94",
    "title": "Mayhew Tool Sets",
    "description": "Quality Tool Sets from Mayhew. Available with fast shipping.",
    "price": "$333.06",
    "image": "https://m.media-amazon.com/images/I/41Rw3YGfw-L.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B0DJRKLJ94",
    "featured": false
  },
  {
    "id": "37",
    "asin": "B09NCLWLN4",
    "title": "Agri-Fab Lawn Tractor Attachments",
    "description": "Quality Lawn Tractor Attachments from Agri-Fab. Available with fast shipping.",
    "price": "$429.99",
    "image": "https://m.media-amazon.com/images/I/31SzecHKb2L.jpg",
    "category": "outdoor",
    "amazonUrl": "https://www.amazon.com/dp/B09NCLWLN4",
    "featured": false
  },
  {
    "id": "38",
    "asin": "B00UT6M45O",
    "title": "Sloan Touchless Bathroom Sink Faucets",
    "description": "Quality Touchless Bathroom Sink Faucets from Sloan. Available with fast shipping.",
    "price": "$489.75",
    "image": "https://m.media-amazon.com/images/I/21Cv1APgl5L.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B00UT6M45O",
    "featured": false
  },
  {
    "id": "39",
    "asin": "B07BQ8MTPN",
    "title": "Sunex Tools Tool Sets",
    "description": "Quality Tool Sets from Sunex Tools. Available with fast shipping.",
    "price": "$102.94",
    "image": "https://m.media-amazon.com/images/I/51yLiLZgAvL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B07BQ8MTPN",
    "featured": false
  },
  {
    "id": "40",
    "asin": "B084G8PKNG",
    "title": "American Standard Recessed Bathtubs",
    "description": "Quality Recessed Bathtubs from American Standard. Available with fast shipping.",
    "price": "$672.10",
    "image": "https://m.media-amazon.com/images/I/21COarma1-L.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B084G8PKNG",
    "featured": false
  },
  {
    "id": "41",
    "asin": "B00DIXAC5Y",
    "title": "Alarm Lock Door Lock Replacement Parts",
    "description": "Quality Door Lock Replacement Parts from Alarm Lock. Available with fast shipping.",
    "price": "$409.71",
    "image": "https://m.media-amazon.com/images/I/41EijMRAh1L.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B00DIXAC5Y",
    "featured": false
  },
  {
    "id": "42",
    "asin": "B0892T3VVG",
    "title": "AIRCAT Power Impact Wrenches",
    "description": "Quality Power Impact Wrenches from AIRCAT. Available with fast shipping.",
    "price": "$709.74",
    "image": "https://m.media-amazon.com/images/I/31vJdIqVHaL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B0892T3VVG",
    "featured": false
  },
  {
    "id": "43",
    "asin": "B09J2Z8HV1",
    "title": "NBK Motors Furnace Replacement Motors",
    "description": "Quality Furnace Replacement Motors from NBK Motors. Available with fast shipping.",
    "price": "$186.63",
    "image": "https://m.media-amazon.com/images/I/41j+dedgTFL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B09J2Z8HV1",
    "featured": false
  },
  {
    "id": "44",
    "asin": "B0CQRY5QHX",
    "title": "Milwaukee Job Site & Security Lighting",
    "description": "Quality Job Site & Security Lighting from Milwaukee. Available with fast shipping.",
    "price": "$99.97",
    "image": "https://m.media-amazon.com/images/I/21V3AVOmurL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B0CQRY5QHX",
    "featured": false
  },
  {
    "id": "45",
    "asin": "B08W8M6PD4",
    "title": "Pittman Outdoors Air Mattresses",
    "description": "Quality Air Mattresses from Pittman Outdoors. Available with fast shipping.",
    "price": "$231.42",
    "image": "https://m.media-amazon.com/images/I/41sU2rQLv7L.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B08W8M6PD4",
    "featured": false
  },
  {
    "id": "46",
    "asin": "B008HQ3GMI",
    "title": "Honeywell Home Programmable Thermostats",
    "description": "Quality Home Programmable Thermostats from Honeywell. Available with fast shipping.",
    "price": "$176.52",
    "image": "https://m.media-amazon.com/images/I/31lyz7boa3L.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B008HQ3GMI",
    "featured": false
  },
  {
    "id": "47",
    "asin": "B006H41ZHU",
    "title": "Gecko Pool Pump Replacement Parts & Accessories",
    "description": "Quality Pool Pump Replacement Parts & Accessories from Gecko. Available with fast shipping.",
    "price": "$386.58",
    "image": "https://m.media-amazon.com/images/I/41rdID6b7aL.jpg",
    "category": "outdoor",
    "amazonUrl": "https://www.amazon.com/dp/B006H41ZHU",
    "featured": false
  },
  {
    "id": "48",
    "asin": "B00IYPRLH8",
    "title": "POOL BLASTER Handheld Pool Vacuums",
    "description": "Quality Handheld Pool Vacuums from POOL BLASTER. Available with fast shipping.",
    "price": "$104.98",
    "image": "https://m.media-amazon.com/images/I/41K5vbAxJ0L.jpg",
    "category": "outdoor",
    "amazonUrl": "https://www.amazon.com/dp/B00IYPRLH8",
    "featured": false
  },
  {
    "id": "49",
    "asin": "B08W9WQ3R5",
    "title": "Pittman Outdoors Camping Air Mattresses",
    "description": "Quality Camping Air Mattresses from Pittman Outdoors. Available with fast shipping.",
    "price": "$299.99",
    "image": "https://m.media-amazon.com/images/I/41n5os25zBL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B08W9WQ3R5",
    "featured": false
  },
  {
    "id": "50",
    "asin": "B01H9BM0NW",
    "title": "DEWALT Table Saws",
    "description": "Quality Table Saws from DEWALT. Available with fast shipping.",
    "price": "$759.55",
    "image": "https://m.media-amazon.com/images/I/51q9xsN7VdL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B01H9BM0NW",
    "featured": false
  },
  {
    "id": "51",
    "asin": "B08CMH64CC",
    "title": "Summit Appliance Beverage Refrigerators",
    "description": "Quality Beverage Refrigerators from Summit Appliance. Available with fast shipping.",
    "price": "$1444.98",
    "image": "https://m.media-amazon.com/images/I/415MkLuVVVL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B08CMH64CC",
    "featured": false
  },
  {
    "id": "52",
    "asin": "B0FHH4PNN9",
    "title": "Milwaukee Power Random Orbit Sanders",
    "description": "Quality Power Random Orbit Sanders from Milwaukee. Available with fast shipping.",
    "price": "$329.00",
    "image": "https://m.media-amazon.com/images/I/41ZgEp-F41L.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B0FHH4PNN9",
    "featured": false
  },
  {
    "id": "53",
    "asin": "B001XUQID4",
    "title": "Eagle Hazardous Storage Cans",
    "description": "Quality Hazardous Storage Cans from Eagle. Available with fast shipping.",
    "price": "$90.59",
    "image": "https://m.media-amazon.com/images/I/41k9iTxc-hL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B001XUQID4",
    "featured": false
  },
  {
    "id": "54",
    "asin": "B08VX2XYRJ",
    "title": "Milwaukee Oscillating Power Tools",
    "description": "Quality Oscillating Power Tools from Milwaukee. Available with fast shipping.",
    "price": "$249.00",
    "image": "https://m.media-amazon.com/images/I/31iSeCs0JUL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B08VX2XYRJ",
    "featured": false
  },
  {
    "id": "55",
    "asin": "B0794M4MGK",
    "title": "BLANCO Double Bowl Kitchen Sinks",
    "description": "Quality Double Bowl Kitchen Sinks from BLANCO. Available with fast shipping.",
    "price": "$629.20",
    "image": "https://m.media-amazon.com/images/I/314ds2uiSjL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B0794M4MGK",
    "featured": false
  },
  {
    "id": "56",
    "asin": "B0DB69MJLS",
    "title": "DreamLine Shower Bases & Pans",
    "description": "Quality Shower Bases & Pans from DreamLine. Available with fast shipping.",
    "price": "$469.99",
    "image": "https://m.media-amazon.com/images/I/11uYMJoUjlL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B0DB69MJLS",
    "featured": false
  },
  {
    "id": "57",
    "asin": "B004M9CNBY",
    "title": "Nordyne HVAC Controls",
    "description": "Quality HVAC Controls from Nordyne. Available with fast shipping.",
    "price": "$153.13",
    "image": "https://m.media-amazon.com/images/I/51NcgtumfAL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B004M9CNBY",
    "featured": false
  },
  {
    "id": "58",
    "asin": "B0D3SHJS45",
    "title": "Samsung Range Accessories",
    "description": "Quality Range Accessories from Samsung. Available with fast shipping.",
    "price": "$422.09",
    "image": "https://m.media-amazon.com/images/I/31vxHo8Bh1L.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B0D3SHJS45",
    "featured": false
  },
  {
    "id": "59",
    "asin": "B0CNS7JY5M",
    "title": "Watts Check Valves",
    "description": "Quality Check Valves from Watts. Available with fast shipping.",
    "price": "$731.38",
    "image": "https://m.media-amazon.com/images/I/31Vw+7EaPZL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B0CNS7JY5M",
    "featured": false
  },
  {
    "id": "60",
    "asin": "B07WJYT9ZP",
    "title": "Perception Kayaks",
    "description": "Quality Kayaks from Perception. Available with fast shipping.",
    "price": "$746.02",
    "image": "https://m.media-amazon.com/images/I/31PMl6HY0oL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B07WJYT9ZP",
    "featured": false
  },
  {
    "id": "61",
    "asin": "B081MDPS2Z",
    "title": "LG In-Refrigerator Water Filters",
    "description": "Quality In-Refrigerator Water Filters from LG. Available with fast shipping.",
    "price": "$68.00",
    "image": "https://m.media-amazon.com/images/I/31-vmjLlX6L.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B081MDPS2Z",
    "featured": false
  },
  {
    "id": "62",
    "asin": "B07YKWM32C",
    "title": "Milwaukee Torque Wrenches",
    "description": "Quality Torque Wrenches from Milwaukee. Available with fast shipping.",
    "price": "$857.54",
    "image": "https://m.media-amazon.com/images/I/31fN40iwSML.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B07YKWM32C",
    "featured": false
  },
  {
    "id": "63",
    "asin": "B0DB658SJD",
    "title": "DreamLine Shower Bases & Pans",
    "description": "Quality Shower Bases & Pans from DreamLine. Available with fast shipping.",
    "price": "$509.99",
    "image": "https://m.media-amazon.com/images/I/11bzWHf8bGL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B0DB658SJD",
    "featured": false
  },
  {
    "id": "64",
    "asin": "B005HOP0A4",
    "title": "Little Giant Water Garden & Pond Pumps",
    "description": "Quality Water Garden & Pond Pumps from Little Giant. Available with fast shipping.",
    "price": "$279.53",
    "image": "https://m.media-amazon.com/images/I/41CeIo3+ZHL.jpg",
    "category": "outdoor",
    "amazonUrl": "https://www.amazon.com/dp/B005HOP0A4",
    "featured": false
  },
  {
    "id": "65",
    "asin": "B0019KFQ2C",
    "title": "Honeywell HVAC Controls",
    "description": "Quality HVAC Controls from Honeywell. Available with fast shipping.",
    "price": "$255.34",
    "image": "https://m.media-amazon.com/images/I/41tbREHRy5L.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B0019KFQ2C",
    "featured": false
  },
  {
    "id": "66",
    "asin": "B0195M38CK",
    "title": "Milwaukee Power Tool Combo Kits",
    "description": "Quality Power Tool Combo Kits from Milwaukee. Available with fast shipping.",
    "price": "$504.14",
    "image": "https://m.media-amazon.com/images/I/31FBD2ueNpL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B0195M38CK",
    "featured": false
  },
  {
    "id": "67",
    "asin": "B08Z8JLFTP",
    "title": "GROHE Bathtub & Shower Trim Systems",
    "description": "Quality Bathtub & Shower Trim Systems from GROHE. Available with fast shipping.",
    "price": "$771.40",
    "image": "https://m.media-amazon.com/images/I/3117mIPy8TL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B08Z8JLFTP",
    "featured": false
  },
  {
    "id": "68",
    "asin": "B01EYGACYY",
    "title": "DreamLine Shower Bases & Pans",
    "description": "Quality Shower Bases & Pans from DreamLine. Available with fast shipping.",
    "price": "$453.99",
    "image": "https://m.media-amazon.com/images/I/4151txhc6tL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B01EYGACYY",
    "featured": false
  },
  {
    "id": "69",
    "asin": "B01MTNXCP7",
    "title": "Blodgett Temperature Controllers",
    "description": "Quality Temperature Controllers from Blodgett. Available with fast shipping.",
    "price": "$652.90",
    "image": "https://m.media-amazon.com/images/I/31ZrHJkMsOL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B01MTNXCP7",
    "featured": false
  },
  {
    "id": "70",
    "asin": "B01EYGAF64",
    "title": "DreamLine Shower Bases & Pans",
    "description": "Quality Shower Bases & Pans from DreamLine. Available with fast shipping.",
    "price": "$619.99",
    "image": "https://m.media-amazon.com/images/I/31TRGv3J4zL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B01EYGAF64",
    "featured": false
  },
  {
    "id": "71",
    "asin": "B0DVLZM9WW",
    "title": "Dometic Outdoor Refrigerators",
    "description": "Quality Outdoor Refrigerators from Dometic. Available with fast shipping.",
    "price": "$1364.99",
    "image": "https://m.media-amazon.com/images/I/31D3-mD463L.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B0DVLZM9WW",
    "featured": false
  },
  {
    "id": "72",
    "asin": "B00AU6NIV2",
    "title": "Kershaw Tactical Knives",
    "description": "Quality Tactical Knives from Kershaw. Available with fast shipping.",
    "price": "$77.72",
    "image": "https://m.media-amazon.com/images/I/31qjcxz41wL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B00AU6NIV2",
    "featured": false
  },
  {
    "id": "73",
    "asin": "B006535WJA",
    "title": "Zep Commercial All-Purpose Cleaners",
    "description": "Quality Commercial All-Purpose Cleaners from Zep. Available with fast shipping.",
    "price": "$328.19",
    "image": "https://m.media-amazon.com/images/I/51ST9M5SV5L.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B006535WJA",
    "featured": false
  },
  {
    "id": "74",
    "asin": "B004L1UD4M",
    "title": "SCHLAGE Deadbolts",
    "description": "Quality Deadbolts from SCHLAGE. Available with fast shipping.",
    "price": "$78.55",
    "image": "https://m.media-amazon.com/images/I/4106CxNlybL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B004L1UD4M",
    "featured": false
  },
  {
    "id": "75",
    "asin": "B00C2GWPYE",
    "title": "Robinair Air Conditioning Line Repair Tools",
    "description": "Quality Air Conditioning Line Repair Tools from Robinair. Available with fast shipping.",
    "price": "$52.96",
    "image": "https://m.media-amazon.com/images/I/41h4lWNEjVL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B00C2GWPYE",
    "featured": false
  },
  {
    "id": "76",
    "asin": "B00AFSMZLO",
    "title": "LG In-Refrigerator Water Filters",
    "description": "Quality In-Refrigerator Water Filters from LG. Available with fast shipping.",
    "price": "$29.47",
    "image": "https://m.media-amazon.com/images/I/31Ep1B8BOoL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B00AFSMZLO",
    "featured": false
  },
  {
    "id": "77",
    "asin": "B09XJKSSTV",
    "title": "LG Clothes Washer Replacement Drain Pumps",
    "description": "Quality Clothes Washer Replacement Drain Pumps from LG. Available with fast shipping.",
    "price": "$247.48",
    "image": "https://m.media-amazon.com/images/I/41zdn22B2tL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B09XJKSSTV",
    "featured": false
  },
  {
    "id": "78",
    "asin": "B0D54SHZQQ",
    "title": "Mighty Mule Gate Openers",
    "description": "Quality Gate Openers from Mighty Mule. Available with fast shipping.",
    "price": "$626.98",
    "image": "https://m.media-amazon.com/images/I/41viwz6XATL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B0D54SHZQQ",
    "featured": false
  },
  {
    "id": "79",
    "asin": "B004Y4QW1O",
    "title": "Speakman Fixed Showerheads",
    "description": "Quality Fixed Showerheads from Speakman. Available with fast shipping.",
    "price": "$154.34",
    "image": "https://m.media-amazon.com/images/I/41De-xpn-PL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B004Y4QW1O",
    "featured": false
  },
  {
    "id": "80",
    "asin": "B0FH34JV9K",
    "title": "Lisle Lockout Kits",
    "description": "Quality Lockout Kits from Lisle. Available with fast shipping.",
    "price": "$116.39",
    "image": "https://m.media-amazon.com/images/I/412F9m5ZNAL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B0FH34JV9K",
    "featured": false
  },
  {
    "id": "81",
    "asin": "B06WRND7TB",
    "title": "American Standard Toilet Flush Valves",
    "description": "Quality Toilet Flush Valves from American Standard. Available with fast shipping.",
    "price": "$429.58",
    "image": "https://m.media-amazon.com/images/I/31+s82iFWlL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B06WRND7TB",
    "featured": false
  },
  {
    "id": "82",
    "asin": "B016Y8VWOO",
    "title": "Asco Solenoid Valves",
    "description": "Quality Solenoid Valves from Asco. Available with fast shipping.",
    "price": "$181.42",
    "image": "https://m.media-amazon.com/images/I/41lsLid8oDL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B016Y8VWOO",
    "featured": false
  },
  {
    "id": "83",
    "asin": "B074V31TBJ",
    "title": "DEWALT Power Angle Grinders",
    "description": "Quality Power Angle Grinders from DEWALT. Available with fast shipping.",
    "price": "$469.00",
    "image": "https://m.media-amazon.com/images/I/31fsscZrE1L.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B074V31TBJ",
    "featured": false
  },
  {
    "id": "84",
    "asin": "B09DHQC327",
    "title": "ESCO Bottle Jacks",
    "description": "Quality Bottle Jacks from ESCO. Available with fast shipping.",
    "price": "$249.98",
    "image": "https://m.media-amazon.com/images/I/31evHiGZNCL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B09DHQC327",
    "featured": false
  },
  {
    "id": "85",
    "asin": "B07MTZNHD5",
    "title": "Milwaukee Tool Boxes",
    "description": "Quality Tool Boxes from Milwaukee. Available with fast shipping.",
    "price": "$241.19",
    "image": "https://m.media-amazon.com/images/I/31qcUY9ZTxL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B07MTZNHD5",
    "featured": false
  },
  {
    "id": "86",
    "asin": "B008YXZ74E",
    "title": "Intermatic Wall Timer Switches",
    "description": "Quality Wall Timer Switches from Intermatic. Available with fast shipping.",
    "price": "$160.03",
    "image": "https://m.media-amazon.com/images/I/515-wlCfQQL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B008YXZ74E",
    "featured": false
  },
  {
    "id": "87",
    "asin": "B01CA0TFQ2",
    "title": "Ingersoll Rand Power Right Angle Drills",
    "description": "Quality Power Right Angle Drills from Ingersoll Rand. Available with fast shipping.",
    "price": "$502.41",
    "image": "https://m.media-amazon.com/images/I/41FWjdHkucL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B01CA0TFQ2",
    "featured": false
  },
  {
    "id": "88",
    "asin": "B00AAS4GS4",
    "title": "DreamLine Shower Bases & Pans",
    "description": "Quality Shower Bases & Pans from DreamLine. Available with fast shipping.",
    "price": "$226.99",
    "image": "https://m.media-amazon.com/images/I/41mDp75m0nL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B00AAS4GS4",
    "featured": false
  },
  {
    "id": "89",
    "asin": "B017XL8HW6",
    "title": "DreamLine Shower Bases & Pans",
    "description": "Quality Shower Bases & Pans from DreamLine. Available with fast shipping.",
    "price": "$351.84",
    "image": "https://m.media-amazon.com/images/I/31w75yELb9L.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B017XL8HW6",
    "featured": false
  },
  {
    "id": "90",
    "asin": "B087Z1VMSY",
    "title": "Pfister Touch On Kitchen Sink Faucets",
    "description": "Quality Touch On Kitchen Sink Faucets from Pfister. Available with fast shipping.",
    "price": "$666.86",
    "image": "https://m.media-amazon.com/images/I/31dafhesTrL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B087Z1VMSY",
    "featured": false
  },
  {
    "id": "91",
    "asin": "B0043XX87W",
    "title": "DEWALT Power Drill Drivers",
    "description": "Quality Power Drill Drivers from DEWALT. Available with fast shipping.",
    "price": "$156.48",
    "image": "https://m.media-amazon.com/images/I/41xgCj7A8WL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B0043XX87W",
    "featured": false
  },
  {
    "id": "92",
    "asin": "B07KVHTNM2",
    "title": "DreamLine Shower Bases & Pans",
    "description": "Quality Shower Bases & Pans from DreamLine. Available with fast shipping.",
    "price": "$544.79",
    "image": "https://m.media-amazon.com/images/I/31eyEALSQlL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B07KVHTNM2",
    "featured": false
  },
  {
    "id": "93",
    "asin": "B000EI0VX4",
    "title": "Buck Knives Camping Folding Knives",
    "description": "Quality Camping Folding Knives from Buck Knives. Available with fast shipping.",
    "price": "$44.05",
    "image": "https://m.media-amazon.com/images/I/21JcMglniBL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B000EI0VX4",
    "featured": false
  },
  {
    "id": "94",
    "asin": "B0F2ND1DRB",
    "title": "Coleman-Mach RV Air Conditioners",
    "description": "Quality RV Air Conditioners from Coleman-Mach. Available with fast shipping.",
    "price": "$1523.95",
    "image": "https://m.media-amazon.com/images/I/21isXXHbtIL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B0F2ND1DRB",
    "featured": false
  },
  {
    "id": "95",
    "asin": "B00LO3K0XY",
    "title": "Watts Ball Valves",
    "description": "Quality Ball Valves from Watts. Available with fast shipping.",
    "price": "$182.43",
    "image": "https://m.media-amazon.com/images/I/418HgSF5xkL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B00LO3K0XY",
    "featured": false
  },
  {
    "id": "96",
    "asin": "B07N7YV5GN",
    "title": "OEMTOOLS Garage & Shop Fluid Evacuators",
    "description": "Quality Garage & Shop Fluid Evacuators from OEMTOOLS. Available with fast shipping.",
    "price": "$96.36",
    "image": "https://m.media-amazon.com/images/I/41g965oQZ9L.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B07N7YV5GN",
    "featured": false
  },
  {
    "id": "97",
    "asin": "B00062Z8F4",
    "title": "Comp Cams Automotive Replacement Engine Cam & Lifter Kits",
    "description": "Quality Automotive Replacement Engine Cam & Lifter Kits from Comp Cams. Available with fast shipping.",
    "price": "$588.45",
    "image": "https://m.media-amazon.com/images/I/31hBVQVR9LL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B00062Z8F4",
    "featured": false
  },
  {
    "id": "98",
    "asin": "B000CSN4VC",
    "title": "SCHLAGE Door Lock Replacement Parts",
    "description": "Quality Door Lock Replacement Parts from SCHLAGE. Available with fast shipping.",
    "price": "$165.27",
    "image": "https://m.media-amazon.com/images/I/516mVZLhCIL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B000CSN4VC",
    "featured": false
  },
  {
    "id": "99",
    "asin": "B01EYGAAZ0",
    "title": "DreamLine Shower Bases & Pans",
    "description": "Quality Shower Bases & Pans from DreamLine. Available with fast shipping.",
    "price": "$479.99",
    "image": "https://m.media-amazon.com/images/I/31TRGv3J4zL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B01EYGAAZ0",
    "featured": false
  },
  {
    "id": "100",
    "asin": "B07TFLXCX6",
    "title": "GEARWRENCH Torque Wrenches",
    "description": "Quality Torque Wrenches from GEARWRENCH. Available with fast shipping.",
    "price": "$259.00",
    "image": "https://m.media-amazon.com/images/I/31kLgjdFqLL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B07TFLXCX6",
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
