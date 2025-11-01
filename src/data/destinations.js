//DOMESTIC image
import gujaratImg from "../assets/domestic/Gujrat/Statue of Unity - Gujarat, India.jfif"
import himachalImg from "../assets/domestic/Himachal/himachal.jfif"
import karnatakaImg from "../assets/domestic/Karnataka/Mysore Palace_.jfif"
import kashmirImg from "../assets/domestic/Kashmir/kashmir.jfif"
import keralaImg from "../assets/domestic/Kerala/Allapy Houseboat.jfif"
import rajasthanImg from "../assets/domestic/Rajasthan/Jaisalmer.jfif"


//INTERNATIONAL imgage
import baliImg from "../assets/international/Bali/Bali.jfif"
import dubaiImg from "../assets/international/Dubai/Burj Khalifa.jfif"
import malaysiaImg from "../assets/international/Malaysia/Malaysia.jfif"
import nepalImg from "../assets/international/Nepal/Nepal.jfif"
import singaporeImg from "../assets/international/Singapore/Gerden by the bay.jfif"
import srilankaImg from "../assets/international/srilanka/Srilanka.jfif"
import thailandImg from "../assets/international/Thailand/Phuket.jfif"
import vietnamImg from "../assets/international/Vietnam/Halong Bay.jfif"


export const destinations = [
  // --- DOMESTIC DESTINATIONS (only the required 6) ---
  {
    id: "dom-gujarat-6d4f2b19",
    name: "Gujarat",
    imgUrl:gujaratImg,
    description:
      "Gujarat, the land of legends, is known for its vibrant culture, ancient temples, white desert, and heritage cities.",
    packages: [
      { name: "Gujarat", price: "₹27,999* PP" },
    ],
    detailedDescription:
      "Gujarat offers a mix of spirituality, heritage, and natural beauty. From the white sands of the Rann of Kutch to the temples of Somnath and Dwarka, it is a land where culture meets history. The Gir National Park is also home to the majestic Asiatic lions.",
    bestTimeToVisit: "November to February",
    highlights: [
      "Rann of Kutch",
      "Somnath & Dwarka temples",
      "Gir National Park",
      "Statue of Unity",
    ],
    services: [
      "Holiday Packages", "Corporate Travel", "Honeymoon Packages", "Group Tours",
      "Hotels", "Flights", "Visa", "Cabs"
    ],
    type: "domestic",
  },
  {
    id: "dom-himachal-5e1a6c44",
    name: "Himachal Pradesh",
    imgUrl:himachalImg,
    description:
      "Himachal Pradesh is known for its snow-capped mountains, hill stations, and adventure sports.",
    packages: [
      { name: "Himachal Pradesh", price: "₹20,999* PP" },
    ],
    detailedDescription:
      "Himachal Pradesh, nestled in the western Himalayas, is a popular destination for its picturesque hill stations and adventure activities.",
    bestTimeToVisit:
      "March to June (for summer), December to February (for snow)",
    highlights: [
      "Snow adventures",
      "Scenic hill stations",
      "Toy train rides",
      "Ancient temples",
    ],
    services: [
      "Holiday Packages", "Corporate Travel", "Honeymoon Packages", "Group Tours",
      "Hotels", "Flights", "Visa", "Cabs"
    ],
    type: "domestic",
  },
  {
    id: "dom-karnataka-7b9c3f18",
    name: "Karnataka",
    imgUrl:karnatakaImg,
    description:
      "Karnataka is known for its heritage cities, temples, coffee plantations, and stunning waterfalls.",
    packages: [
      { name: "Karnataka", price: "₹25,999* PP" },
    ],
    detailedDescription:
      "Karnataka offers an incredible blend of natural beauty, heritage, and adventure. Visit the royal city of Mysore, explore Hampi’s ancient ruins, and relax in the lush coffee estates of Coorg and Chikmagalur.",
    bestTimeToVisit: "October to March",
    highlights: [
      "Mysore Palace",
      "Hampi ruins",
      "Coorg coffee estates",
      "Jog Falls",
    ],
    services: [
      "Holiday Packages", "Corporate Travel", "Honeymoon Packages", "Group Tours",
      "Hotels", "Flights", "Visa", "Cabs"
    ],
    type: "domestic",
  },
  {
    id: "dom-kashmir-7d3f8a19",
    name: "Kashmir",
    imgUrl:kashmirImg,
    description:
      "Kashmir is known as 'Paradise on Earth', offering snow, shikaras, and breathtaking valleys.",
    packages: [
      { name: "Kashmir", price: "₹29,999* PP" },
    ],
    detailedDescription:
      "Jammu and Kashmir, often called 'Paradise on Earth', is renowned for its stunning natural beauty, lakes, and valleys.",
    bestTimeToVisit:
      "April to October (for sightseeing), December to February (for snow sports)",
    highlights: [
      "Shikara ride on Dal Lake",
      "Gulmarg skiing",
      "Mughal Gardens",
      "Pahalgam valleys",
    ],
    services: [
      "Holiday Packages", "Corporate Travel", "Honeymoon Packages", "Group Tours",
      "Hotels", "Flights", "Visa", "Cabs"
    ],
    type: "domestic",
  },
  {
    id: "dom-kerala-9a7c4e19",
    name: "Kerala",
    imgUrl:keralaImg,
    description:
      "Kerala, known as 'God's Own Country', offers houseboats, backwaters, and lush green landscapes.",
    packages: [
      { name: "Kerala", price: "₹25,999* PP" },
    ],
    detailedDescription:
      "Kerala, located on India's tropical Malabar Coast, is known for its palm-lined beaches, backwaters, and lush hill stations.",
    bestTimeToVisit: "September to March",
    highlights: [
      "Backwater houseboat cruise",
      "Tea plantations in Munnar",
      "Ayurvedic treatments",
      "Kathakali dance performances",
    ],
    services: [
      "Holiday Packages", "Corporate Travel", "Honeymoon Packages", "Group Tours",
      "Hotels", "Flights", "Visa", "Cabs"
    ],
    type: "domestic",
  },
  {
    id: "dom-rajasthan-6c9f7b25",
    name: "Rajasthan",
    imgUrl:rajasthanImg,
    description:
      "Rajasthan, the land of kings, is famous for its majestic forts, palaces, and vibrant culture.",
    packages: [
      { name: "Rajasthan", price: "₹21,999* PP" },
    ],
    detailedDescription:
      "Rajasthan, the 'Land of Kings', is a state in northern India known for its royal heritage, magnificent forts, and vibrant culture.",
    bestTimeToVisit: "October to March",
    highlights: [
      "Majestic forts and palaces",
      "Thar Desert safari",
      "Traditional Rajasthani cuisine",
      "Colorful festivals",
    ],
    services: [
      "Holiday Packages", "Corporate Travel", "Honeymoon Packages", "Group Tours",
      "Hotels", "Flights", "Visa", "Cabs"
    ],
    type: "domestic",
  },

  // --- INTERNATIONAL DESTINATIONS (unchanged from last version) ---
  {
    id: "intl-bali-8f2c7b13",
    name: "Bali, Indonesia",
    imgUrl:baliImg,
    description:
      "Bali is a dream destination with rice terraces, temples, beaches, and vibrant nightlife.",
    packages: [
      { name: "Bali, Indonesia", price: "₹34,999* PP" },
    ],
    detailedDescription:
      "Bali, Indonesia’s most iconic island, is a tropical paradise known for its lush rice terraces, serene temples, and beautiful beaches.",
    bestTimeToVisit: "April to October",
    highlights: [
      "Tegalalang Rice Terraces",
      "Uluwatu Temple",
      "Balinese culture & dance",
      "Beach clubs and surfing",
    ],
    services: [
      "Holiday Packages", "Corporate Travel", "Honeymoon Packages", "Group Tours",
      "Hotels", "Flights", "Visa", "Cabs"
    ],
    type: "international",
  },
  {
    id: "intl-dubai-12a94e0f",
    name: "Dubai, UAE",
    imgUrl:dubaiImg,
    description:
      "Dubai is a city of luxury, known for its skyscrapers, shopping malls, and desert adventures.",
    packages: [
      { name: "Dubai, UAE", price: "₹44,999* PP" },
    ],
    detailedDescription:
      "Dubai is a global hub for luxury, adventure, and culture. Known for the Burj Khalifa, desert safaris, and world-class shopping.",
    bestTimeToVisit: "November to March",
    highlights: [
      "Burj Khalifa",
      "Desert Safari",
      "Dubai Marina Cruise",
      "Luxury shopping & nightlife",
    ],
    services: [
      "Holiday Packages", "Corporate Travel", "Honeymoon Packages", "Group Tours",
      "Hotels", "Flights", "Visa", "Cabs"
    ],
    type: "international",
  },
  {
    id: "intl-malaysia-2e5b9f24",
    name: "Malaysia",
    imgUrl:malaysiaImg,
    description:
      "Malaysia offers tropical beaches, rainforests, and a fusion of modern cities and cultural heritage.",
    packages: [
      { name: "Malaysia", price: "₹39,999* PP" },
    ],
    detailedDescription:
      "Malaysia is a diverse Southeast Asian destination known for its mix of cultures, cuisines, and landscapes.",
    bestTimeToVisit: "December to February (West) | May to September (East)",
    highlights: [
      "Petronas Twin Towers",
      "Langkawi Islands",
      "Street food in Penang",
      "Cameron Highlands tea plantations",
    ],
    services: [
      "Holiday Packages", "Corporate Travel", "Honeymoon Packages", "Group Tours",
      "Hotels", "Flights", "Visa", "Cabs"
    ],
    type: "international",
  },
  {
    id: "intl-nepal-3b8c7d91",
    name: "Nepal",
    imgUrl:nepalImg,
    description:
      "Nepal, home to the Himalayas, offers trekking, spiritual temples, and breathtaking mountain views.",
    packages: [
      { name: "Nepal", price: "₹29,999* PP" },
    ],
    detailedDescription:
      "Nepal is a land of towering peaks, vibrant culture, and serene spirituality.",
    bestTimeToVisit: "October to November & March to April",
    highlights: [
      "Mount Everest & Annapurna",
      "Kathmandu’s ancient temples",
      "Pokhara’s lakeside views",
      "Himalayan trekking routes",
    ],
    type: "international",
  },
  {
    id: "intl-singapore-9a6f5e8b",
    name: "Singapore",
    imgUrl:singaporeImg,
    description:
      "Singapore is a modern city-state offering iconic landmarks, futuristic gardens, and vibrant nightlife.",
    packages: [
      { name: "Singapore", price: "₹42,999* PP" },
    ],
    detailedDescription:
      "Singapore blends futuristic cityscapes with lush green spaces and diverse cultural influences.",
    bestTimeToVisit: "February to April",
    highlights: [
      "Marina Bay Sands",
      "Gardens by the Bay",
      "Sentosa Island",
      "Hawker centers & nightlife",
    ],
    type: "international",
  },
  {
    id: "intl-srilanka-6f1c3a5e",
    name: "Sri Lanka",
    imgUrl:srilankaImg,
    description:
      "Sri Lanka offers golden beaches, lush tea gardens, wildlife safaris, and ancient ruins.",
    packages: [
      { name: "Sri Lanka", price: "₹36,999* PP" },
    ],
    detailedDescription:
      "Sri Lanka, the 'Pearl of the Indian Ocean', is known for its cultural heritage, tropical beaches, and scenic highlands.",
    bestTimeToVisit: "December to April (West & South) | May to September (East)",
    highlights: [
      "Sigiriya Rock Fortress",
      "Tea plantations",
      "Golden beaches",
      "Wildlife safaris",
    ],
    type: "international",
  },
  {
    id: "intl-thailand-7e4d8a2b",
    name: "Thailand",
    imgUrl:thailandImg,
    description:
      "Thailand, the Land of Smiles, is famous for its beaches, temples, and buzzing street markets.",
    packages: [
      { name: "Thailand", price: "₹39,999* PP" },
    ],
    detailedDescription:
      "Thailand offers a beautiful blend of culture, beaches, and cuisine.",
    bestTimeToVisit: "November to February",
    highlights: [
      "Grand Palace in Bangkok",
      "Phuket beaches",
      "Chiang Mai temples",
      "Thai street food",
    ],
    type: "international",
  },
  {
    id: "intl-vietnam-5d9f3b7e",
    name: "Vietnam",
    imgUrl:vietnamImg,
    description:
      "Vietnam combines stunning natural beauty with rich history, delicious cuisine, and warm hospitality.",
    packages: [
      { name: "Vietnam", price: "₹38,999* PP" },
    ],
    detailedDescription:
      "Vietnam is a land of contrasts—bustling cities, peaceful countryside, and breathtaking seascapes.",
    bestTimeToVisit: "November to April",
    highlights: [
      "Ha Long Bay cruise",
      "Hoi An Ancient Town",
      "Vietnamese cuisine",
      "Cu Chi Tunnels & Mekong Delta",
    ],
    type: "international",
  },
];
