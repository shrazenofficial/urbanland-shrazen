// Import product images (JPEG format)
import benchPlantersImg from "../assets/products/Product Images/Bench Planter/Make_it_8k_resolution_image_202605170101.jpeg";
import benchPlantersUgc from "../assets/products/Product Images/Bench Planter/UGC_Bench_Planter.jpeg";

import benchesImg from "../assets/products/Product Images/Benches/Create_a_clean,_premium,_professional_202605162312.jpeg";
import benchesUgc from "../assets/products/Product Images/Benches/UGC_Benches.jpeg";

import busSheltersImg from "../assets/products/Product Images/Bus Shelters/Create_a_clean,_premium,_professional_202605170115.jpeg";
import busSheltersUgc from "../assets/products/Product Images/Bus Shed/Hyper-realistic_8K_ultra_high_resolution_202605281655.jpeg";
import busSheltersRealUgc from "../assets/products/Product Images/Bus Shed/UGC_Bus_Shelters.jpeg";

import cabanasImg from "../assets/products/Product Images/Cabanas/Create_a_clean,_premium,_professional_202605170136.jpeg";
import cabanasUgc from "../assets/products/Product Images/Cabanas/UGC_Cabanas.jpeg";

import canteenTablesImg from "../assets/products/Product Images/Canteen Table/Create_a_clean,_premium,_professional_202605170053.jpeg";
import canteenTablesUgc from "../assets/products/Product Images/Canteen Table/UGC_Canteen_Table.jpeg";

import carSheltersImg from "../assets/products/Product Images/Car Shed/Create_a_clean,_premium,_professional_202605170216.jpeg";
import carSheltersUgc from "../assets/products/Product Images/Car Shed/UGC_Car_Shelter.jpeg";

import dustbinsImg from "../assets/products/Product Images/Dustbins/Create_a_clean,_premium,_professional_202605170106.jpeg";
import dustbinsUgc from "../assets/products/Product Images/Dustbins/UGC_Dustbins.jpeg";

import gazebosImg from "../assets/products/Product Images/Gazebos/Gazebos.jpeg";
import gazebosUgc from "../assets/products/Product Images/Gazebos/UGC_Gazebos.jpeg";

import pergolasImg from "../assets/products/Product Images/Pergolas/Pergolas.jpeg";
import pergolasUgc from "../assets/products/Product Images/Pergolas/UGC_Pergolas.jpeg";

import plantersImg from "../assets/products/Product Images/Planters Box/Create_a_clean,_premium,_professional_202605170111.jpeg";
import plantersUgc from "../assets/products/Product Images/Planters Box/UGC_Planters_Box.jpeg";

import poolsideLoungersImg from "../assets/products/Product Images/Poolside Loungers/Create_a_clean,_premium,_professional_202605170154.jpeg";
import poolsideLoungersUgc from "../assets/products/Product Images/Poolside Loungers/UGC_Poolside_Loungers.jpeg";

import preFabHomesImg from "../assets/products/Product Images/Pre Fab Homes/prefabhomes.jpeg";
import preFabHomesUgc from "../assets/products/Product Images/Pre Fab Homes/UGC_Prefabhomes.jpeg";

import wickerDiningImg from "../assets/products/Product Images/Wicker Dining/wicker_dining.jpeg";
import wickerDiningUgc from "../assets/products/Product Images/Wicker Dining/UGC_wicker_dining.jpeg";

import wickerLivingImg from "../assets/products/Product Images/Wicker Living/Wicker_Living.jpeg";
import wickerLivingUgc from "../assets/products/Product Images/Wicker Living/UGC_Wicker_Living.jpeg";

// Import showcase gallery assets
import gbg1 from '../assets/gallery_real_estate.png';
import gbg2 from '../assets/gallery_hotels.png';
import gbg3 from '../assets/gallery_hospitals.png';
import gbg4 from '../assets/gallery_education.png';
import gbg5 from '../assets/gallery_smart_city.png';

// Import welcome assets
import welcome1 from '../assets/welcome-1.png';
import welcome2 from '../assets/welcome-2.png';

// Import hero assets
import benchHero from '../assets/Bench.jpeg';
import benchPlanterHero from '../assets/Bench_Planter.jpeg';
import busSheltersHero from '../assets/Bus_Shelters.jpeg';
import canteenTablesHero from '../assets/Canteen_Tables.jpeg';
import carShelterHero from '../assets/Car_Shelter.jpeg';
import dustbinsHero from '../assets/Dustbins.jpeg';
import plantersBoxHero from '../assets/Planters_Box.jpeg';
import wickerFurnitureHero from '../assets/Wicker_Furniture.jpeg';

export const products = [
  {
    id: "bench-planters",
    title: "Bench Planters",
    line: "Integrated WPC seating & concrete planter boxes.",
    category: "bench-planters",
    url: "/products/bench-planters",
    image: benchPlantersImg,
    gallery: [benchPlantersImg, benchPlantersUgc, benchPlanterHero],
    badges: ["New", "Popular"],
    tagline: "Seamless integration of modern seating with living greenery.",
    description: "Designed to combine architectural seating with built-in planter islands. Perfect for shopping mall corridors, municipal streetscapes, and university plazas where public space is premium.",
    features: [
      "High-durability WPC seating slats with weather treatment",
      "Glass-Fiber Reinforced Concrete (GFRC) soil container mix",
      "Internal water drainage channels with soil barrier screens",
      "Modular linking configurations for custom public layouts"
    ],
    specifications: {
      materials: "FSC certified WPC wood slats; lightweight GFRC concrete container structure; stainless steel support framework.",
      dimensions: "Standard module: 2200 mm length, 800 mm planter width, 450 mm bench seat height.",
      installation: "Surface mounted directly on pavement or secured using concealed expansion concrete anchors.",
      sustainability: "Optimizes urban green spaces; uses organic recycled timber fibers and low-impact GFRC aggregates."
    },
    options: {
      wood: ["WPC teak finish slats", "Natural Jatoba timber finish", "Acacia slats"],
      metal: ["Smooth Sandstone GFRC", "Charcoal Grey Concrete", "White Granite Concrete finish"],
      modules: ["Linear Single Planter Set", "L-shaped Dual Planter Set", "Hexagonal Central Planter Set"]
    }
  },
  {
    id: "benches",
    title: "Outdoor Benches",
    line: "Premium weather-resistant public seating benches.",
    category: "benches",
    url: "/products/benches",
    image: benchesImg,
    gallery: [benchesImg, benchesUgc, benchHero],
    badges: ["Best Seller"],
    tagline: "Ergonomic and highly durable outdoor seating systems.",
    description: "Sleek outdoor benches featuring cast iron or structural steel frames cladded in organic timber or WPC slats. Engineered for extreme outdoor conditions, comfort, and longevity.",
    features: [
      "Ergonomic back support angles for relaxed public resting",
      "Sustainably sourced timber or low-maintenance WPC slats",
      "Heavy-duty cast iron or laser-cut steel base supports",
      "Anti-skateboarding studs integrated by default for public safety"
    ],
    specifications: {
      materials: "Galvanized steel sides with high-yield strength; premium weather-resistant powder coatings; stainless steel hardware.",
      dimensions: "Length: 1800 mm; Depth: 620 mm; Height: 810 mm; Seat height: 450 mm.",
      installation: "Surface flanged anchoring with four high-strength chemical concrete bolts.",
      sustainability: "Duplex anti-corrosion coating prevents rust; wood elements use FSC certified materials."
    },
    options: {
      wood: ["Robinia timber slats", "Jatoba FSC® organic timber", "HPL composite panels"],
      metal: ["Anthracite Grey (RAL 7016)", "Corten Texture paint finish", "Jet Black (RAL 9005)"],
      modules: ["Bench with backrest and armrests", "Flat Bench without backrest", "Double-sided park bench set"]
    }
  },
  {
    id: "bus-shelters",
    title: "Bus Shelters",
    line: "Robust steel bus shelters for smart cities.",
    category: "bus-shelters",
    url: "/products/bus-shelters",
    image: busSheltersImg,
    gallery: [busSheltersImg, busSheltersUgc, busSheltersRealUgc],
    badges: ["Popular"],
    tagline: "Modern transit stop canopies with premium structural finishes.",
    description: "Hot-dip galvanized steel structures with safety glass panels, solar capabilities, and comfortable integrated seating. Engineered for high wind loads and public durability.",
    features: [
      "Modular bay extensions to accommodate varying transit traffic",
      "8mm toughened safety glass wind guards with frit patterns",
      "Integrated solar roofing kit for off-grid lighting",
      "Concealed wiring conduit runs for clean visual lines"
    ],
    specifications: {
      materials: "Structural steel column chassis; Akzonobel powder coating; laminated glass; FSC seating slats.",
      dimensions: "Standard 3-bay model: 4200 mm width, 1600 mm depth, 2500 mm clearance height.",
      installation: "Sub-surface concrete foundation anchoring with high-tensile threaded rods.",
      sustainability: "Integrated low-power LED systems powered by optional PV solar panels; fully recyclable glass and steel."
    },
    options: {
      wood: ["Robinia seat slats", "HPL seating panels", "FSC Jatoba slats"],
      metal: ["Silver Metallic (RAL 9006)", "Anthracite Grey (RAL 7016)", "Slate Blue (RAL 5008)"],
      modules: ["Standard 3-bay stop", "Extended 5-bay stop", "Digital E-paper screen integration kit"]
    }
  },
  {
    id: "cabanas",
    title: "Luxury Cabanas",
    line: "Resort-style poolside daybed pavilions.",
    category: "cabanas",
    url: "/products/cabanas",
    image: cabanasImg,
    gallery: [cabanasImg, cabanasUgc, gbg2],
    badges: ["New"],
    tagline: "Shaded luxury outdoor daybeds for premium resorts.",
    description: "Features durable steel structure wrapped with outdoor cushions and curtains. Provides intimate, private relaxation spaces for luxury hospitality decks and rooftops.",
    features: [
      "Heavy structural steel framework with weatherproofing",
      "UV-protected quick-dry foam cushions",
      "Side privacy drapes in Sunbrella® high-performance fabric",
      "Integrated side beverage shelving and device pockets"
    ],
    specifications: {
      materials: "Powder coated structural steel tubes; FSC timber decking; weather-resistant canvas fabric sheets.",
      dimensions: "Footprint: 2000 mm x 2000 mm; Clearance Height: 2200 mm; Bed platform: 450 mm height.",
      installation: "Free-standing layout with non-marking leveling feet, or deck-anchored flange brackets.",
      sustainability: "Durable textile fibers and corrosion-resistant metal framework ensure a long service life."
    },
    options: {
      wood: ["Teak wood frame detailing", "Acacia slats", "Synthetic WPC frame accents"],
      metal: ["Warm Sand (RAL 1013)", "Corten Brown texture", "Charcoal Grey"],
      modules: ["Standard Single Daybed Set", "Double Daybed Set with central table", "Privacy shutter screen add-on"]
    }
  },
  {
    id: "canteen-tables",
    title: "Canteen Tables & Sets",
    line: "Heavy-duty campus & workplace dining sets.",
    category: "canteen-tables",
    url: "/products/canteen-tables",
    image: canteenTablesImg,
    gallery: [canteenTablesImg, canteenTablesUgc, canteenTablesHero],
    badges: ["Popular"],
    tagline: "Integrated table and bench configurations for high-traffic zones.",
    description: "The Morse series provides extreme structural durability using galvanized powder-coated frames and low-maintenance HPL slats. Perfect for corporate cafes and school courtyards.",
    features: [
      "Integrated table and bench design for permanent alignment",
      "Vandal-resistant assembly screws and fastening systems",
      "Low maintenance High-Pressure Laminate (HPL) panel tops",
      "Anti-pooling table surface drainage slots"
    ],
    specifications: {
      materials: "Laser-cut galvanized steel frame chassis; 12mm exterior grade HPL slats; stainless steel hardware.",
      dimensions: "Overall footprint: 2200 mm width, 1800 mm depth, 750 mm table height, 450 mm seat height.",
      installation: "Surface concrete expansion bolts, or optional free-standing heavy base plates.",
      sustainability: "Recyclable metal framing; HPL consists of organic fibers and non-toxic resins."
    },
    options: {
      wood: ["Robinia timber slats", "Thermo-Pine slats", "Charcoal HPL panels"],
      metal: ["Corten Texture finish", "Slate Grey (RAL 7015)", "Anthracite Grey (RAL 7016)"],
      modules: ["Standard 6-seater dining set", "Extended 8-seater dining set", "Integrated parasol shade mount"]
    }
  },
  {
    id: "car-shelters",
    title: "Car Shelters",
    line: "High-tensile modular car parking structures.",
    category: "car-shelters",
    url: "/products/car-shelters",
    image: carSheltersImg,
    gallery: [carSheltersImg, carSheltersUgc, carShelterHero],
    badges: ["Featured"],
    tagline: "Cantilever structural steel shelters for premium vehicle coverage.",
    description: "Engineered to shield vehicles from heavy sun, rain, and hail. Standard double-car bays feature PVDF-coated fabrics or metal decking, ready for solar and EV charger integration.",
    features: [
      "Cantilever column support structure for unimpeded parking entry",
      "High-tensile structural steel framework for severe weather loads",
      "Concealed downspouts inside structural columns",
      "Optimized roof pitch to allow direct solar PV retrofitting"
    ],
    specifications: {
      materials: "Heavy structural H-beams; duplex polyurethane paint finish; PVDF tensioned fabric membrane.",
      dimensions: "Double bay standard: 5500 mm width, 5000 mm depth, 2700 mm clearance height.",
      installation: "Deep anchor cage embedded in reinforced concrete footing blocks.",
      sustainability: "Designed to host overhead clean energy generation and EV charging points."
    },
    options: {
      wood: ["No timber trim", "Robinia wrap detailing on columns"],
      metal: ["Anthracite Grey (RAL 7016)", "Slate Grey (RAL 7015)", "Galvanized Industrial finish"],
      modules: ["Double Car Cantilever bay", "Quad Car Bay module", "EV Charger mounting plate bundle"]
    }
  },
  {
    id: "dustbins",
    title: "Litter & Recycling Bins",
    line: "Segregated municipal waste sorting bins.",
    category: "dustbins",
    url: "/products/dustbins",
    image: dustbinsImg,
    gallery: [dustbinsImg, dustbinsUgc, dustbinsHero],
    badges: ["Popular"],
    tagline: "Robust waste segregation containers for public spaces.",
    description: "Galvanized steel and WPC timber dustbins with distinct locks, labels, and rain hoods. Ideal for smart cities, corporate lawns, and parks.",
    features: [
      "Dual and triple waste segregation sorting channels",
      "Easy-pull inner galvanized liners with ergonomic handles",
      "Heavy-duty cylinder locks to prevent unauthorized opening",
      "Anti-rain hood lids with optional integrated ashtrays"
    ],
    specifications: {
      materials: "Textured powder-coated sheet steel casing; Grade 304 stainless steel lid; galvanized metal inner buckets.",
      dimensions: "Triple sorting module: 1500 mm width, 500 mm depth, 950 mm height. Capacity: 225L.",
      installation: "Flange plates bolted from the inside of the casing onto concrete pathways.",
      sustainability: "Encourages segregated garbage collection; uses highly durable and recyclable metals."
    },
    options: {
      wood: ["No timber cladding", "Robinia wood front cladding", "Jatoba FSC® front cladding"],
      metal: ["Corten Texture finish", "Forest Green (RAL 6009)", "Anthracite Grey (RAL 7016)"],
      modules: ["Single Litter Bin (75L)", "Double Sorting Bin (150L)", "Triple Recycling Station (225L)"]
    }
  },
  {
    id: "gazebos",
    title: "Premium Gazebos",
    line: "Elegant timber garden structures.",
    category: "gazebos",
    url: "/products/gazebos",
    image: gazebosImg,
    gallery: [gazebosImg, gazebosUgc, wickerFurnitureHero],
    badges: ["New"],
    tagline: "Pre-engineered wooden pavilions for luxury gardens.",
    description: "FSC certified hardwood framing combined with premium metal joints. Perfect for residential farmhouses, resort lawns, and outdoor dining patios.",
    features: [
      "Pressure-treated premium timber posts against moisture and insects",
      "Heavy-gauge powder coated connector joints for easy alignment",
      "Routed column tracks for hidden outdoor wiring feeds",
      "Modular side shutter panels for privacy control"
    ],
    specifications: {
      materials: "FSC tropical Robinia or Teak framing columns; architectural steel joints; stainless steel screws.",
      dimensions: "Standard pavilion size: 3600 mm x 3600 mm x 2700 mm height. Fully customizable dimensions.",
      installation: "Surface bracket flanges secured to concrete deck slabs or patios.",
      sustainability: "Utilizes renewable and responsibly harvested forest timbers."
    },
    options: {
      wood: ["Robinia framework", "FSC Teak framework", "Premium Acacia structure"],
      metal: ["Jet Black powder joints", "Bronze Metallic joints", "Corten Texture joints"],
      modules: ["Standard open structure", "Structure with louvered privacy walls", "LED uplighting bundle kit"]
    }
  },
  {
    id: "pergolas",
    title: "Architectural Pergolas",
    line: "Modern shading structures.",
    category: "pergolas",
    url: "/products/pergolas",
    image: pergolasImg,
    gallery: [pergolasImg, pergolasUgc, benchPlanterHero],
    badges: ["New"],
    tagline: "High-tension structural shade pergolas.",
    description: "Sculptural tensioned sail and louvered structures designed to create visually striking shaded pathways and plazas. UV-stable polymer sail material.",
    features: [
      "High-tension microporous sail cloth blocking 95% UV rays",
      "Structural steel columns with hidden cable tension bolts",
      "Optimized water shedding curves to prevent pooling",
      "Minimalist columns to ensure maximum clear space underneath"
    ],
    specifications: {
      materials: "HDPE polymer shade cloth; structural galvanized steel posts; stainless steel tensioning rigs.",
      dimensions: "Typical layout span: 5000 mm x 5000 mm. Heights tailored to site specifications.",
      installation: "Heavy concrete footing anchors to secure high-tension loads.",
      sustainability: "High-grade polymer sails with 10+ year lifespan reduce frequent replacements."
    },
    options: {
      wood: ["No timber accents", "WPC details on columns"],
      metal: ["Anthracite Grey columns", "Corten Texture paint", "Warm Bronze finish"],
      modules: ["Single sail configuration", "Overlapping dual-sail system", "LED mast lighting integration"]
    }
  },
  {
    id: "planters",
    title: "GFRC Planters",
    line: "Lightweight GFRC and concrete planters.",
    category: "planters",
    url: "/products/planters",
    image: plantersImg,
    gallery: [plantersImg, plantersUgc, plantersBoxHero],
    badges: ["Popular"],
    tagline: "Architectural concrete planting pots for public spaces.",
    description: "Double-walled insulated concrete container systems designed to nurture large trees and shrubs in urban environments. Easy relocation slots.",
    features: [
      "GFRC composition offering extreme durability at half concrete weight",
      "Double-walled interior cavity to protect roots from extreme temperatures",
      "Built-in overflow drainage pipes with filtering screens",
      "Integrated sub-base forklift pockets for easy relocation"
    ],
    specifications: {
      materials: "Glass-Fiber Reinforced Concrete mix; waterproof inner sealant layer; internal foam insulation core.",
      dimensions: "Rectangular planter: 1500 mm length, 750 mm width, 800 mm height. Standard cube: 1000 mm x 1000 mm x 800 mm.",
      installation: "Placed directly on floor or patio; leveling pads compensate for slopes.",
      sustainability: "Insulated walls minimize water usage; uses natural sand and local cement aggregates."
    },
    options: {
      wood: ["No timber trim", "Top-edge timber trim slats"],
      metal: ["Smooth Sandstone finish", "Textured Granite finish", "Corten steel effect"],
      modules: ["Standard Rectangular box", "Square planter cube", "Planter box with clip-on WPC bench seat"]
    }
  },
  {
    id: "poolside-loungers",
    title: "Poolside Loungers",
    line: "Premium loungers & deck daybeds.",
    category: "poolside-loungers",
    url: "/products/poolside-loungers",
    image: poolsideLoungersImg,
    gallery: [poolsideLoungersImg, poolsideLoungersUgc, welcome2],
    badges: ["Best Seller"],
    tagline: "Resort-grade synthetic wicker sun loungers.",
    description: "Rust-free aluminum frames wrapped in hand-woven HDPE weather-proof wicker. Quick-dry foam cushions ensure premium comfort by the pool.",
    features: [
      "Handcrafted weave patterns using heavy-duty weather-proof fibers",
      "Lightweight, rust-free powder coated aluminum frame structure",
      "Quick-dry foam padding resistant to mold and mildew",
      "Multi-position reclining backrest mechanism"
    ],
    specifications: {
      materials: "Aluminum tube framing; HDPE synthetic wicker strands; quick-dry foam; Sunbrella® fabrics.",
      dimensions: "Single lounger: 2000 mm length, 700 mm width, 350 mm platform height.",
      installation: "Free-standing layout with non-marking adjustable floor levelers.",
      sustainability: "HDPE wicker strands are 100% recyclable; cushions use CFC-free foam components."
    },
    options: {
      wood: ["No wood trim", "Teak leg accents"],
      metal: ["Natural Tan wicker", "Charcoal Grey wicker", "Warm Off-White wicker"],
      modules: ["Single Poolside Lounger", "Lounger Pair with matching side table", "Double Poolside Lounger Bed"]
    }
  },
  {
    id: "pre-fab-homes",
    title: "Pre Fab Homes",
    line: "Modular off-grid residential structures.",
    category: "pre-fab-homes",
    url: "/products/pre-fab-homes",
    image: preFabHomesImg,
    gallery: [preFabHomesImg, preFabHomesUgc, welcome1],
    badges: ["New"],
    tagline: "Eco-friendly premium pre-fabricated modular rooms.",
    description: "Thermally insulated structural steel chassis cladded in WPC composites. Installs in under 48 hours for resort cottages, home offices, and eco-sensitive zones.",
    features: [
      "Complete assembly on site in under 48 hours",
      "Double-walled thermal insulation boards for energy savings",
      "Helical ground pile footing interface for minimal foundation impact",
      "Pre-routed channels for electrical grids, plumbing, and solar PV"
    ],
    specifications: {
      materials: "Galvanized structural steel chassis; WPC composite external panels; polyurethane insulation cores.",
      dimensions: "Base layout module: 25 square meters; clearance interior height: 2800 mm.",
      installation: "Assembled directly over ground pile anchors or concrete pads.",
      sustainability: "High insulation properties minimize AC loads; 90% recyclable components."
    },
    options: {
      wood: ["WPC organic look cladding", "Robinia timber cladding panels"],
      metal: ["Charcoal Grey panels", "Warm Bronze cladding accents"],
      modules: ["Base living cabin", "Cabin with front patio deck", "Cabin with rooftop solar PV array"]
    }
  },
  {
    id: "wicker-dining-sets",
    title: "Wicker Dining Sets",
    line: "Hand-woven wicker dining tables & chairs.",
    category: "wicker-dining-sets",
    url: "/products/wicker-dining-sets",
    image: wickerDiningImg,
    gallery: [wickerDiningImg, wickerDiningUgc, gbg2],
    badges: ["New", "Popular"],
    tagline: "Luxury dining sets engineered for outdoor durability.",
    description: "Premium outdoor dining configurations made of hand-woven synthetic wicker strands. Resistant to chlorine, water, and sun, with Sunbrella® fabrics.",
    features: [
      "HDPE weather-proof synthetic wicker weave",
      "Rust-free internal structural aluminum support frame",
      "Tempered safety glass dining tabletop with non-slip mounts",
      "Water-repellent cushions cladded in UV-resistant Sunbrella® fabrics"
    ],
    specifications: {
      materials: "Extruded aluminum framing; HDPE wicker strands; tempered safety glass top; outdoor performance fabrics.",
      dimensions: "6-seater table: 1800 mm length, 900 mm width, 750 mm height. Armchair: 600 mm x 600 mm x 850 mm.",
      installation: "Free-standing dining configurations; adjustable leg glides protect pavers.",
      sustainability: "Durable HDPE wicker offers 10+ years UV protection; frame uses recycled aluminum elements."
    },
    options: {
      wood: ["Tempered Glass table top", "Natural Teak wood table top"],
      metal: ["Natural Tan wicker", "Warm Charcoal wicker", "Polar White wicker"],
      modules: ["4-seater dining set", "6-seater dining set", "8-seater dining set"]
    }
  },
  {
    id: "wicker-living-sets",
    title: "Wicker Living Sets",
    line: "Luxury wicker sofas & lounge configurations.",
    category: "wicker-living-sets",
    url: "/products/wicker-living-sets",
    image: wickerLivingImg,
    gallery: [wickerLivingImg, wickerLivingUgc, welcome1],
    badges: ["Popular"],
    tagline: "Cinematic outdoor wicker seating & lounge configurations.",
    description: "Beautifully crafted wicker modular sofas and armchairs. High-density foam cushions covered with weather-proof, water-repellent performance upholstery.",
    features: [
      "High-density polyethylene synthetic wicker strands with UV blockers",
      "Stately ergonomic curved backs and deep seating comfort",
      "Modular components to set up customizable deck layouts",
      "Cushions with quick-dry core foam technology"
    ],
    specifications: {
      materials: "HDPE synthetic wicker weave; aluminum structural frames; quick-dry foam cushions; Sunbrella® acrylic fabric.",
      dimensions: "Modular Sofa section: 900 mm width, 900 mm depth, 780 mm height. Coffee table: 900 mm diameter, 400 mm height.",
      installation: "Free-standing layout; modular connector clips secure seating blocks together.",
      sustainability: "Highly resistant to rot, mold, and weathering, minimizing carbon footprint over time."
    },
    options: {
      wood: ["No timber trim", "Teak feet accents on sofa framework"],
      metal: ["Natural Tan wicker", "Charcoal Grey wicker", "Warm Off-White wicker"],
      modules: ["3-seater sofa", "L-shaped modular corner sofa set", "Swivel lounge armchair"]
    }
  }
];
