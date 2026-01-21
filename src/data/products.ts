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
    "asin": "B0B8X6GGQM",
    "title": "Midea Slide-In Ranges",
    "description": "Quality Slide-In Ranges from Midea. Available with fast shipping.",
    "price": "$1499.00",
    "image": "https://m.media-amazon.com/images/I/41bfO73t-mL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B0B8X6GGQM",
    "featured": true
  },
  {
    "id": "3",
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
    "id": "4",
    "asin": "B07GWT1MCC",
    "title": "Video Projectors",
    "description": "Quality Video Projectors from a trusted brand. Available with fast shipping.",
    "price": "$1038.11",
    "image": "https://m.media-amazon.com/images/I/316tRgmErzL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B07GWT1MCC",
    "featured": true
  },
  {
    "id": "5",
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
    "id": "6",
    "asin": "B089KRZYQZ",
    "title": "OWC Internal Solid State Drives",
    "description": "Quality Internal Solid State Drives from OWC. Available with fast shipping.",
    "price": "$733.49",
    "image": "https://m.media-amazon.com/images/I/31V9tqPD-GL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B089KRZYQZ",
    "featured": true
  },
  {
    "id": "7",
    "asin": "B004NHMOJ6",
    "title": "Watts Industrial Pressure Regulators",
    "description": "Quality Industrial Pressure Regulators from Watts. Available with fast shipping.",
    "price": "$1189.91",
    "image": "https://m.media-amazon.com/images/I/41MjBhST5KL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B004NHMOJ6",
    "featured": false
  },
  {
    "id": "8",
    "asin": "B0CS83QJHQ",
    "title": "Summit Appliance Refrigerators",
    "description": "Quality Refrigerators from Summit Appliance. Available with fast shipping.",
    "price": "$1257.89",
    "image": "https://m.media-amazon.com/images/I/21TUYytWX+L.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B0CS83QJHQ",
    "featured": false
  },
  {
    "id": "9",
    "asin": "B0BL91Z13W",
    "title": "acer Computer Monitors",
    "description": "Quality Computer Monitors from acer. Available with fast shipping.",
    "price": "$412.21",
    "image": "https://m.media-amazon.com/images/I/41eyJMOZkiL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B0BL91Z13W",
    "featured": false
  },
  {
    "id": "10",
    "asin": "B004NHMOHI",
    "title": "Watts Industrial Pressure Regulators",
    "description": "Quality Industrial Pressure Regulators from Watts. Available with fast shipping.",
    "price": "$898.40",
    "image": "https://m.media-amazon.com/images/I/514y4LBHtlL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B004NHMOHI",
    "featured": false
  },
  {
    "id": "11",
    "asin": "B0785FF944",
    "title": "Underwater Continuous Lights",
    "description": "Quality Underwater Continuous Lights from a trusted brand. Available with fast shipping.",
    "price": "$413.99",
    "image": "https://m.media-amazon.com/images/I/4137U-IQQ2L.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B0785FF944",
    "featured": false
  },
  {
    "id": "12",
    "asin": "B07L1L94D3",
    "title": "American Standard Two-Piece Toilets",
    "description": "Quality Two-Piece Toilets from American Standard. Available with fast shipping.",
    "price": "$606.56",
    "image": "https://m.media-amazon.com/images/I/31Gf7pybgpL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B07L1L94D3",
    "featured": false
  },
  {
    "id": "13",
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
    "id": "14",
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
    "id": "15",
    "asin": "B0D96GNBJZ",
    "title": "Dome Surveillance Cameras",
    "description": "Quality Dome Surveillance Cameras from a trusted brand. Available with fast shipping.",
    "price": "$1358.10",
    "image": "https://m.media-amazon.com/images/I/41zx3MzjVzL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B0D96GNBJZ",
    "featured": false
  },
  {
    "id": "16",
    "asin": "B0CDMG3FFV",
    "title": "Dome Surveillance Cameras",
    "description": "Quality Dome Surveillance Cameras from a trusted brand. Available with fast shipping.",
    "price": "$1358.10",
    "image": "https://m.media-amazon.com/images/I/31-1spMoAUL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B0CDMG3FFV",
    "featured": false
  },
  {
    "id": "17",
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
    "id": "18",
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
    "id": "19",
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
    "id": "20",
    "asin": "B08RVKC2X8",
    "title": "Summit Appliance Refrigerators",
    "description": "Quality Refrigerators from Summit Appliance. Available with fast shipping.",
    "price": "$1653.61",
    "image": "https://m.media-amazon.com/images/I/31-RxTuwmeL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B08RVKC2X8",
    "featured": false
  },
  {
    "id": "21",
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
    "id": "22",
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
    "id": "23",
    "asin": "B07SGG81RR",
    "title": "WARN Towing Winches",
    "description": "Quality Towing Winches from WARN. Available with fast shipping.",
    "price": "$1030.19",
    "image": "https://m.media-amazon.com/images/I/412OegsBbNL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B07SGG81RR",
    "featured": false
  },
  {
    "id": "24",
    "asin": "B08D32F5HZ",
    "title": "ACCUCOLD Refrigerators",
    "description": "Quality Refrigerators from ACCUCOLD. Available with fast shipping.",
    "price": "$1662.13",
    "image": "https://m.media-amazon.com/images/I/31JYZkbf7oL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B08D32F5HZ",
    "featured": false
  },
  {
    "id": "25",
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
    "id": "26",
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
    "id": "27",
    "asin": "B0D96H8JCC",
    "title": "Dome Surveillance Cameras",
    "description": "Quality Dome Surveillance Cameras from a trusted brand. Available with fast shipping.",
    "price": "$1221.54",
    "image": "https://m.media-amazon.com/images/I/51B6HmoeNVL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B0D96H8JCC",
    "featured": false
  },
  {
    "id": "28",
    "asin": "B0D96J1J4V",
    "title": "Dome Surveillance Cameras",
    "description": "Quality Dome Surveillance Cameras from a trusted brand. Available with fast shipping.",
    "price": "$1221.54",
    "image": "https://m.media-amazon.com/images/I/41vWfTTJ9ZL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B0D96J1J4V",
    "featured": false
  },
  {
    "id": "29",
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
    "id": "30",
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
    "id": "31",
    "asin": "B07SKL475F",
    "title": "WARN Towing Winches",
    "description": "Quality Towing Winches from WARN. Available with fast shipping.",
    "price": "$625.97",
    "image": "https://m.media-amazon.com/images/I/419V-aPuavL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B07SKL475F",
    "featured": false
  },
  {
    "id": "32",
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
    "id": "33",
    "asin": "B003VATROG",
    "title": "Roadmaster Tow Bars",
    "description": "Quality Tow Bars from Roadmaster. Available with fast shipping.",
    "price": "$828.63",
    "image": "https://m.media-amazon.com/images/I/31pAVn2g3mL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B003VATROG",
    "featured": false
  },
  {
    "id": "34",
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
    "id": "35",
    "asin": "B0D687QKTD",
    "title": "WARN Towing Winches",
    "description": "Quality Towing Winches from WARN. Available with fast shipping.",
    "price": "$1778.39",
    "image": "https://m.media-amazon.com/images/I/415rRd53mrL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B0D687QKTD",
    "featured": false
  },
  {
    "id": "36",
    "asin": "B0BG3C7TQT",
    "title": "Weigh Safe Towing Weight Distributing Hitches",
    "description": "Quality Towing Weight Distributing Hitches from Weigh Safe. Available with fast shipping.",
    "price": "$878.98",
    "image": "https://m.media-amazon.com/images/I/21Jkivei6mL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B0BG3C7TQT",
    "featured": false
  },
  {
    "id": "37",
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
    "id": "38",
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
    "id": "39",
    "asin": "B08LZSBMNN",
    "title": "Humminbird Fish Finders & Depth Finders",
    "description": "Quality Fish Finders & Depth Finders from Humminbird. Available with fast shipping.",
    "price": "$1635.75",
    "image": "https://m.media-amazon.com/images/I/41FDK0BmzYL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B08LZSBMNN",
    "featured": false
  },
  {
    "id": "40",
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
    "id": "41",
    "asin": "B0DCX9XRBY",
    "title": "Summit Appliance Freestanding Ranges",
    "description": "Quality Freestanding Ranges from Summit Appliance. Available with fast shipping.",
    "price": "$1667.23",
    "image": "https://m.media-amazon.com/images/I/31pguNySYVL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B0DCX9XRBY",
    "featured": false
  },
  {
    "id": "42",
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
    "id": "43",
    "asin": "B0D96HVQG6",
    "title": "Dome Surveillance Cameras",
    "description": "Quality Dome Surveillance Cameras from a trusted brand. Available with fast shipping.",
    "price": "$1221.68",
    "image": "https://m.media-amazon.com/images/I/41R3-4xZ0cL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B0D96HVQG6",
    "featured": false
  },
  {
    "id": "44",
    "asin": "B0D96HZS6Z",
    "title": "Dome Surveillance Cameras",
    "description": "Quality Dome Surveillance Cameras from a trusted brand. Available with fast shipping.",
    "price": "$1221.54",
    "image": "https://m.media-amazon.com/images/I/51MXE3tOUbL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B0D96HZS6Z",
    "featured": false
  },
  {
    "id": "45",
    "asin": "B00NZCRFRQ",
    "title": "AIMS Power Power Inverters",
    "description": "Quality Power Inverters from AIMS Power. Available with fast shipping.",
    "price": "$1089.52",
    "image": "https://m.media-amazon.com/images/I/41h+sAM353L.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B00NZCRFRQ",
    "featured": false
  },
  {
    "id": "46",
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
    "id": "47",
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
    "id": "48",
    "asin": "B0BMB587ZG",
    "title": "Webcams",
    "description": "Quality Webcams from a trusted brand. Available with fast shipping.",
    "price": "$1810.68",
    "image": "https://m.media-amazon.com/images/I/3105I8B7maL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B0BMB587ZG",
    "featured": false
  },
  {
    "id": "49",
    "asin": "B0D96GWK7Q",
    "title": "Dome Surveillance Cameras",
    "description": "Quality Dome Surveillance Cameras from a trusted brand. Available with fast shipping.",
    "price": "$1349.00",
    "image": "https://m.media-amazon.com/images/I/51Uq-9YVAML.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B0D96GWK7Q",
    "featured": false
  },
  {
    "id": "50",
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
    "id": "51",
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
    "id": "52",
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
    "id": "53",
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
    "id": "54",
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
    "id": "55",
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
    "id": "56",
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
    "id": "57",
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
    "id": "58",
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
    "id": "59",
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
    "id": "60",
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
    "id": "61",
    "asin": "B0CPQ8PBLY",
    "title": "Computer Routers",
    "description": "Quality Computer Routers from a trusted brand. Available with fast shipping.",
    "price": "$499.00",
    "image": "https://m.media-amazon.com/images/I/21eMob5LQ7L.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B0CPQ8PBLY",
    "featured": false
  },
  {
    "id": "62",
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
    "id": "63",
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
    "id": "64",
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
    "id": "65",
    "asin": "B01LFDEK88",
    "title": "Ansell Medical Exam Gloves",
    "description": "Quality Medical Exam Gloves from Ansell. Available with fast shipping.",
    "price": "$142.26",
    "image": "https://m.media-amazon.com/images/I/31Dq0mOTeHL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B01LFDEK88",
    "featured": false
  },
  {
    "id": "66",
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
    "id": "67",
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
    "id": "68",
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
    "id": "69",
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
    "id": "70",
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
    "id": "71",
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
    "id": "72",
    "asin": "B0CMJQC2M3",
    "title": "Summit Appliance Refrigerators",
    "description": "Quality Refrigerators from Summit Appliance. Available with fast shipping.",
    "price": "$1287.76",
    "image": "https://m.media-amazon.com/images/I/216CCwa5bJL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B0CMJQC2M3",
    "featured": false
  },
  {
    "id": "73",
    "asin": "B000JFJLOM",
    "title": "Clore Automotive Jump Starters",
    "description": "Quality Jump Starters from Clore Automotive. Available with fast shipping.",
    "price": "$113.91",
    "image": "https://m.media-amazon.com/images/I/41gD3Lfiv+L.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B000JFJLOM",
    "featured": false
  },
  {
    "id": "74",
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
    "id": "75",
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
    "id": "76",
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
    "id": "77",
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
    "id": "78",
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
    "id": "79",
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
    "id": "80",
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
    "id": "81",
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
    "id": "82",
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
    "id": "83",
    "asin": "B08J16G6RG",
    "title": "Garmin Fish Finders & Depth Finders",
    "description": "Quality Fish Finders & Depth Finders from Garmin. Available with fast shipping.",
    "price": "$95.90",
    "image": "https://m.media-amazon.com/images/I/113TaVyJPGL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B08J16G6RG",
    "featured": false
  },
  {
    "id": "84",
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
    "id": "85",
    "asin": "B0BG3C921M",
    "title": "Weigh Safe Towing Weight Distributing Hitches",
    "description": "Quality Towing Weight Distributing Hitches from Weigh Safe. Available with fast shipping.",
    "price": "$880.20",
    "image": "https://m.media-amazon.com/images/I/21Jkivei6mL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B0BG3C921M",
    "featured": false
  },
  {
    "id": "86",
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
    "id": "87",
    "asin": "B000BFR6TM",
    "title": "Maxx Air Automotive Fan Shrouds",
    "description": "Quality Automotive Fan Shrouds from Maxx Air. Available with fast shipping.",
    "price": "$183.97",
    "image": "https://m.media-amazon.com/images/I/41fsv8WtGlL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B000BFR6TM",
    "featured": false
  },
  {
    "id": "88",
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
    "id": "89",
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
    "id": "90",
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
    "id": "91",
    "asin": "B0DB6CP7KD",
    "title": "REDARC Trailer Brake Controls",
    "description": "Quality Trailer Brake Controls from REDARC. Available with fast shipping.",
    "price": "$308.50",
    "image": "https://m.media-amazon.com/images/I/41XJBBk8+OL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B0DB6CP7KD",
    "featured": false
  },
  {
    "id": "92",
    "asin": "B000VAQO90",
    "title": "Bosch Automotive Replacement Oxygen Sensors",
    "description": "Quality Automotive Replacement Oxygen Sensors from Bosch. Available with fast shipping.",
    "price": "$109.21",
    "image": "https://m.media-amazon.com/images/I/41hnYqYCIeL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B000VAQO90",
    "featured": false
  },
  {
    "id": "93",
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
    "id": "94",
    "asin": "B07T69FYRJ",
    "title": "Broan-NuTone Range Hoods",
    "description": "Quality Range Hoods from Broan-NuTone. Available with fast shipping.",
    "price": "$134.00",
    "image": "https://m.media-amazon.com/images/I/21lTqBnILeL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B07T69FYRJ",
    "featured": false
  },
  {
    "id": "95",
    "asin": "B01MTQH7VV",
    "title": "Summit Appliance Refrigerators",
    "description": "Quality Refrigerators from Summit Appliance. Available with fast shipping.",
    "price": "$1571.83",
    "image": "https://m.media-amazon.com/images/I/41ZAnWiPYwL.jpg",
    "category": "home-goods",
    "amazonUrl": "https://www.amazon.com/dp/B01MTQH7VV",
    "featured": false
  },
  {
    "id": "96",
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
    "id": "97",
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
    "id": "98",
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
    "id": "99",
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
    "id": "100",
    "asin": "B004M9CNBY",
    "title": "Nordyne HVAC Controls",
    "description": "Quality HVAC Controls from Nordyne. Available with fast shipping.",
    "price": "$153.13",
    "image": "https://m.media-amazon.com/images/I/51NcgtumfAL.jpg",
    "category": "tools",
    "amazonUrl": "https://www.amazon.com/dp/B004M9CNBY",
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
