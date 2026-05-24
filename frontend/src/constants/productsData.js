// Import product images
import benchPlanterImg from "../assets/products/Product Images/Bench Planter/Make_it_8k_resolution_image_202605170101.png";
import benchesImg from "../assets/products/Product Images/Benches/Create_a_clean,_premium,_professional_202605162312.png";
import busSheltersImg from "../assets/products/Product Images/Bus Shelters/Create_a_clean,_premium,_professional_202605170115.png";
import cabanasImg from "../assets/products/Product Images/Cabanas/Create_a_clean,_premium,_professional_202605170136.png";
import caneFurniture2Img from "../assets/products/Product Images/Cane Furniture/2 Items.png";
import caneFurniture3Img from "../assets/products/Product Images/Cane Furniture/3 Items.png";
import canteenTableImg from "../assets/products/Product Images/Canteen Table/Create_a_clean,_premium,_professional_202605170053.png";
import carShelterImg from "../assets/products/Product Images/Car Shelter/Create_a_clean,_premium,_professional_202605170216.png";
import dustbinsImg from "../assets/products/Product Images/Dustbins/Create_a_clean,_premium,_professional_202605170106.png";
import plantersBoxImg from "../assets/products/Product Images/Planters Box/Create_a_clean,_premium,_professional_202605170111.png";
import poolsideLoungersImg from "../assets/products/Product Images/Poolside Loungers/Create_a_clean,_premium,_professional_202605170154.png";

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
    id: "bus-shelters",
    title: "Bus Shelters",
    line: "Robust MS/SS bus shelters for townships, campuses & smart cities — custom sizes available.",
    category: "bus-shelters",
    url: "/products/bus-shelters",
    image: busSheltersImg,
    gallery: [busSheltersImg, gbg5, busSheltersHero],
    badges: ["Popular"],
    tagline: "Robust MS/SS bus shelters for townships, campuses & smart cities.",
    description: "Our MS and SS bus shelters are engineered with hot-dip galvanized steel framing, tempered glass or polycarbonate wind barriers, and self-contained solar-powered lighting systems. Specified extensively for India's Smart City Mission projects, educational campuses, and large private townships.",
    features: [
      "Modular length expansion to fit high-traffic stops",
      "Toughened safety glass panels with decorative frit patterns",
      "Optional solar roof and integrated LED smart lighting",
      "Concealed chemical anchoring for high wind-loads"
    ],
    specifications: {
      materials: "Structural steel tube columns with anti-corrosion duplex paint finish; laminated safety glass rear/side walls; aluminum roof frame; thermo-wood bench seat.",
      dimensions: "Standard 3-bay model: 4200 mm wide, 1600 mm deep, 2500 mm high. Modularly expandable in 1400 mm increments.",
      installation: "Heavy anchor base plates bolted to structural concrete foundations below pavement level, concealed by paving stones.",
      sustainability: "Energy-efficient LED lighting powered by optional overhead PV solar panels; 100% recyclable structural steel and glass."
    },
    options: {
      wood: ["Jatoba FSC® Seat Slats", "Robinia Seat Slats", "HPL Composite Slat Seat"],
      metal: ["Anthracite Grey (RAL 7016)", "Slate Blue (RAL 5008)", "Silver Metallic (RAL 9006)"],
      modules: ["3-Bay Shelter with Back Wall", "4-Bay Extended Shelter", "Integrated Solar PV Roof Kit", "Digital Transit E-Paper Display"]
    }
  },
  {
    id: "wpc-benches",
    title: "WPC & Aluminium Benches",
    line: "Weather-resistant WPC and aluminium outdoor benches — India's most-specified park bench material.",
    category: "wpc-benches",
    url: "/products/wpc-benches",
    image: benchesImg,
    gallery: [benchesImg, gbg1, benchHero],
    badges: ["Best Seller"],
    tagline: "Weather-resistant and durable outdoor benches.",
    description: "Premium outdoor benches designed to redefine comfort in public parks, corporate offices, and private residential townships. Fabricated with corrosion-resistant metal side legs and sustainably sourced tropical hardwood or high-durability WPC composite slats.",
    features: [
      "Ergonomic seating angles with optional structural armrests",
      "Sustainably sourced FSC certified timber or organic WPC slats",
      "Heavy-duty cast iron or laser-cut steel framing support",
      "Anti-skateboarding modules integrated by default"
    ],
    specifications: {
      materials: "High-yield structural steel sheet sides with weather-resistant powder coating; close-spaced Jatoba or Robinia wood slats; stainless steel hardware.",
      dimensions: "Length: 1800 mm; Depth: 620 mm; Height: 810 mm. Seat height: 450 mm.",
      installation: "Surface anchored with four chemical anchor bolts into sub-surface concrete slabs.",
      sustainability: "FSC Jatoba wood uses biological preservation treatments; minimal metal thickness reduces resource consumption while maintaining load ratings."
    },
    options: {
      wood: ["Jatoba FSC® (Natural Oil finish)", "Robinia Slats", "Acacia Thermo-wood"],
      metal: ["Corten Fine Texture", "Anthracite Grey (RAL 7016)", "Jet Black (RAL 9005)"],
      modules: ["Standard Bench without Backrest", "Standard Bench with Backrest", "Integrated Steel Armrest"]
    }
  },
  {
    id: "outdoor-dustbins",
    title: "Outdoor Dustbins",
    line: "Stainless steel and composite dustbins for parks, roadsides, campuses, and smart city zones.",
    category: "outdoor-dustbins",
    url: "/products/outdoor-dustbins",
    image: dustbinsImg,
    gallery: [dustbinsImg, gbg3, dustbinsHero],
    badges: ["Popular"],
    tagline: "Stainless steel and composite dustbins for smart city zones.",
    description: "KUBUS is an elegant, modular litter and recycling bin system designed to fit cleanly into modern street layouts. Offering single, double, or triple sorting configurations, it combines high durability with simple collection workflows.",
    features: [
      "Modular sorting configurations (trash, plastic, paper)",
      "Vandal-resistant locks and hinge mechanisms",
      "Integrated rain protection lid with optional ashtray",
      "Inner galvanized steel liners with easy-pull handles"
    ],
    specifications: {
      materials: "Galvanized steel casing with premium textured powder coating; optional front wood panel cladding; hot-dip galvanized inner sheet steel liners.",
      dimensions: "Single Bin capacity: 75L (500 x 500 x 950 mm). Double Bin: 150L (1000 x 500 x 950 mm). Triple Bin: 225L (1500 x 500 x 950 mm).",
      installation: "Surface mounted and anchored with inner floor flange bolts, or cast directly into concrete footing.",
      sustainability: "Promotes on-site waste segregation; built with highly durable, weather-resistant materials to ensure a long service life with minimal replacements."
    },
    options: {
      wood: ["Robinia front slats", "Jatoba FSC® front slats", "Full Metal Casing (no wood cladding)"],
      metal: ["Anthracite Grey (RAL 7016)", "Corten Texture", "Forest Green (RAL 6009)"],
      modules: ["Single Waste Bin (75L)", "Double Recycling Bin (150L)", "Triple Recycling Bin (225L)", "Integrated Ashtray Lid"]
    }
  },
  {
    id: "planters",
    title: "GFRC & Concrete Planters",
    line: "Lightweight GFRC and concrete planters — custom shapes, sizes & finishes for townships and hotels.",
    category: "planters",
    url: "/products/planters",
    image: plantersBoxImg,
    gallery: [plantersBoxImg, gbg1, plantersBoxHero],
    badges: ["Popular"],
    tagline: "Lightweight GFRC and concrete planters.",
    description: "Architectural large-scale greenery containers and planter boxes designed for commercial townships, hotels, and luxury garden landscapes. Built with double-walled insulation to optimize soil moisture levels and encourage natural root growth.",
    features: [
      "Reinforced double-walled structure with integrated insulation",
      "Self-watering reservoir and sub-surface drainage holes",
      "Integrated forklift pockets for seasonal public relocations",
      "Compatible with clip-on wooden bench seating modules"
    ],
    specifications: {
      materials: "GFRC (Glass-Fiber Reinforced Concrete) or heavy-gauge powder-coated structural steel sheets; internal geo-textile liner; insulation board.",
      dimensions: "Standard Cube: 1000 x 1000 x 800 mm. Rectangular Planter: 1500 x 750 x 800 mm. Heights customizable upon request.",
      installation: "Placed directly on paving using adjustable leveling feet, or anchored to concrete slabs; easily movable via forklift slots.",
      sustainability: "Insulated walls reduce water evaporation; GFRC concrete uses recycled glass fibers and local aggregates for low impact."
    },
    options: {
      wood: ["No wood trim", "Robinia top-edge trim slats", "Jatoba FSC® top-edge trim slats"],
      metal: ["Smooth Sandstone GFRC", "Anthracite Grey Steel", "Corten Textured Steel"],
      modules: ["Standard Square Planter", "Extended Rectangular Planter", "Clip-On 2-Sided Wooden Bench"]
    }
  },
  {
    id: "canteen-furniture",
    title: "Canteen Tables & Benches",
    line: "Heavy-duty canteen sets built for schools, hospitals, factories & corporate campuses.",
    category: "canteen-furniture",
    url: "/products/canteen-furniture",
    image: canteenTableImg,
    gallery: [canteenTableImg, gbg4, canteenTablesHero],
    badges: ["Popular"],
    tagline: "Heavy-duty canteen sets built for schools, hospitals, factories & corporate campuses.",
    description: "The MORSE series is an integrated table and seating system that offers clean, geometric aesthetics for public break spaces. Designed to withstand extreme weather, it serves as a central hub for dining, meetings, and shared encounters.",
    features: [
      "Heavy-gauge steel frame with architectural coating",
      "Anti-vandalism mounting hardware",
      "Ergonomically spaced benches and tabletop",
      "Low maintenance timber or HPL slats"
    ],
    specifications: {
      materials: "Laser-cut sheet steel frame, galvanized and powder-coated; high-density HPL or durable thermo-wood slats; stainless steel assembly bolts.",
      dimensions: "Total footprint: 2200 x 1800 mm. Tabletop height: 750 mm; Bench seat height: 450 mm. Custom configurations available.",
      installation: "Surface mounted with heavy-duty anchoring bolts or surface anchored on leveling feet; optional free-standing layout with weighted base.",
      sustainability: "HPL panels are composed of paper fibers and thermosetting resins for extreme lifespan; steel frame is fully recyclable."
    },
    options: {
      wood: ["Robinia Slat Panels", "Thermo-Pine Slats", "Charcoal HPL (High-Pressure Laminate)"],
      metal: ["Anthracite Grey (RAL 7016)", "Slate Grey (RAL 7015)", "Corten Texture"],
      modules: ["Standard 6-Seater Table", "Extended 8-Seater Table", "Integrated USB Power Port"]
    }
  },
  {
    id: "car-parking-sheds",
    title: "Car Parking Sheds",
    line: "Powder-coated steel car parking sheds — modular, durable, fast to install for residential projects.",
    category: "car-parking-sheds",
    url: "/products/car-parking-sheds",
    image: carShelterImg,
    gallery: [carShelterImg, gbg5, carShelterHero],
    badges: ["Featured"],
    tagline: "Powder-coated steel car parking sheds.",
    description: "Heavy-duty structural vehicle sheds designed to provide shelter and protection from sun, rain, and hail. Cantilever steel frames allow for seamless parking maneuvering and can support heavy overhead commercial solar PV panels.",
    features: [
      "Heavy-duty cantilever steel support frames for easy parking access",
      "Optimized roof pitch for maximum solar panel performance",
      "Concealed internal wire runs and drainage downspouts",
      "Built-in LED underside parking illumination"
    ],
    specifications: {
      materials: "Heavy hot-dip galvanized structural H-beams with industrial powder coating; steel trapezoidal roof decking; stainless steel fittings.",
      dimensions: "Double vehicle bay: 5500 mm wide, 5000 mm deep, 2700 mm front clearance height. Expandable modularly for large fleets.",
      installation: "Bolted onto reinforced concrete footings designed to withstand heavy wind loads (engineered calculation drawings supplied).",
      sustainability: "Supports green micro-generation; structural components are highly durable, minimizing replacement lifecycles."
    },
    options: {
      wood: ["No wood trim", "Robinia support column wrapping", "Jatoba FSC® column wrapping"],
      metal: ["Anthracite Grey (RAL 7016)", "Slate Grey (RAL 7015)", "Galvanized Steel Finish"],
      modules: ["Double Car Bay Canopy", "Quad Car Bay Canopy", "EV Charger Mounting Bracket Pack"]
    }
  },
  {
    id: "poolside-furniture",
    title: "Poolside Loungers & Cabanas",
    line: "Premium aluminium and wicker loungers for hotel pools, resort decks & residential amenities.",
    category: "poolside-furniture",
    url: "/products/poolside-furniture",
    image: poolsideLoungersImg,
    gallery: [poolsideLoungersImg, gbg2, welcome2],
    badges: ["Popular"],
    tagline: "Premium poolside loungers and cabanas.",
    description: "Handcrafted outdoor deck loungers designed for five-star hotels, luxury residential poolsides, and beachfront decks. Combining anti-rust aluminum framing with hand-woven, UV-stabilized synthetic wicker fibers to withstand chlorine and saltwater environments.",
    features: [
      "Handcrafted weave patterns using heavy-duty weather-proof fibers",
      "Modular components to set up customizable layouts",
      "Premium, water-repellent quick-dry foam cushions",
      "Non-marking adjustable floor levelers"
    ],
    specifications: {
      materials: "Anti-rust aluminum core tube framing; HDPE synthetic wicker weave; quick-dry polyurethane foam padding; high-performance outdoor fabric.",
      dimensions: "Single Chair: 850 x 820 x 780 mm. Table: 900 mm diameter, 400 mm height. Cushions: 120 mm thickness.",
      installation: "Free-standing layout; adjustable non-marking glides allow for easy leveling on irregular paving surfaces.",
      sustainability: "Durable HDPE wicker offers 10+ years UV protection; foam cushions are free of ozone-depleting CFCs."
    },
    options: {
      wood: ["No wood elements", "Natural Teak wood table-top", "Acacia wood table-top"],
      metal: ["Charcoal Grey Wicker Pack", "Natural Tan Wicker Pack", "White Ash Wicker Pack"],
      modules: ["Full Set (2 Chairs, 1 Sofa, 1 Table)", "Chairs Only Pack (2 Chairs)", "Table Only (1 Table)"]
    }
  },
  {
    id: "wicker-furniture",
    title: "Wicker Furniture",
    line: "Hand-woven synthetic wicker sets for luxury hospitality, outdoor dining & resort spaces.",
    category: "wicker-furniture",
    url: "/products/wicker-furniture",
    image: caneFurniture2Img,
    gallery: [caneFurniture2Img, gbg2, wickerFurnitureHero],
    badges: ["Popular"],
    tagline: "Luxury hand-woven wicker dining sets and lounge chairs.",
    description: "Luxury synthetic wicker seating systems handcrafted for outdoor hospitality terraces and resort garden lounges. Utilizes UV-stable, non-fading polymer strands wrapped tightly over high-strength powder-coated structural frames.",
    features: [
      "Hand-woven synthetic wicker fibers resistant to chlorine and UV",
      "Lightweight, rust-free powder-coated aluminum structural frame",
      "Quick-dry outdoor seat cushions wrapped in Sunbrella® fabric",
      "Stately, ergonomic curves for relaxing lounge sessions"
    ],
    specifications: {
      materials: "Extruded aluminum tube framing; high-density polyethylene (HDPE) synthetic wicker; stainless steel hardware; Sunbrella® acrylic cushion fabric.",
      dimensions: "Width: 1500 mm; Depth: 820 mm; Height: 780 mm. Seat height (including cushion): 420 mm.",
      installation: "Placed directly on terraces or lawns (free-standing); features heavy-duty plastic floor glides to protect pavers.",
      sustainability: "Synthetic wicker fibers are recyclable; aluminum frame uses recycled post-consumer metal; highly resistant to mold and rot."
    },
    options: {
      wood: ["No wood slats", "Teak wood leg details", "Acacia leg details"],
      metal: ["Natural Tan Wicker", "Charcoal Grey Wicker", "Warm White Wicker"],
      modules: ["Double Seater Bench", "Single Seater Lounge Chair", "Matching Circular Coffee Table"]
    }
  },
  {
    id: "pre-fab-homes",
    title: "Pre Fab Homes",
    line: "Modular residential structures",
    category: "Sheds",
    image: caneFurniture3Img,
    gallery: [caneFurniture3Img, gbg4, welcome1],
    badges: ["New"],
    tagline: "Premium modular homes for quick deployment.",
    description: "Precision-engineered modular structural housing and office units designed for instant deployment in eco-sensitive zones, private resorts, and luxury farm estates. Features optimal thermal insulation and double-walled thermal efficiency.",
    features: [
      "Pre-fabricated structural layouts assembled in under 48 hours",
      "Double-walled thermal insulation with integrated climate venting",
      "Helical pile foundation interface for minimal soil disturbance",
      "Pre-wired conduits for solar PV batteries and off-grid routing"
    ],
    specifications: {
      materials: "Structural hot-dip galvanized steel framing chassis with eco-efficient WPC composite external paneling.",
      dimensions: "Base module starting from 25 sqm layout. High wall clearance of 2800 mm.",
      installation: "Assembled directly over ground pile anchors or thin concrete floor foundations.",
      sustainability: "High insulation properties minimize seasonal heating/cooling grid loads; built using 90% recyclable components."
    },
    options: {
      wood: ["Premium Eco WPC Panel", "Natural FSC Robinia Planking"],
      metal: ["Charcoal Textured Steel", "Corten Finish Details"],
      modules: ["Base Home Module", "Front Deck Patio Add-On", "Rooftop Solar PV Battery Kit"]
    }
  },
  {
    id: "parabola",
    title: "Parabola",
    line: "Modern shading structures",
    category: "Sheds",
    image: benchPlanterImg,
    gallery: [benchPlanterImg, gbg1, benchPlanterHero],
    badges: ["New"],
    tagline: "Architectural parabolic shading for outdoor spaces.",
    description: "Tensioned sculptural shade structures designed to provide shade and visual elegance to plazas, swimming decks, and resort paths. Highly protective against intense solar rays with minimal footprint.",
    features: [
      "High-tension commercial polymer sail fabrics",
      "Minimalist structural masts with hidden cable tensioners",
      "Parabolic curves engineered to spill heavy rainwater",
      "Fully customized height distributions and shapes"
    ],
    specifications: {
      materials: "Tensioned HDPE micro-porous polymer sail fabric; structural galvanized steel masts with Akzonobel PU paint.",
      dimensions: "Base modular sizing starts from 5000 x 5000 mm coverage spans. Heights custom-tailored.",
      installation: "Deep foundation chemical bolting with reinforced anchor rods into sub-grade concrete slabs.",
      sustainability: "Highly resilient polymers avoid frequent replacements; masts are fully recyclable steel."
    },
    options: {
      wood: ["No wood trim"],
      metal: ["Anthracite Grey Masts", "Corten Textured Paint", "Bronze Metallic"],
      modules: ["Single Sail Shade", "Dual Overlapping Shade Pack", "LED Mast Uplight Kit"]
    }
  },
  {
    id: "gazebo",
    title: "Gazebo",
    line: "Elegant garden structures",
    category: "Sheds",
    image: cabanasImg,
    gallery: [cabanasImg, gbg1, wickerFurnitureHero],
    badges: ["New"],
    tagline: "Premium gazebos tailored for luxury outdoor relaxation.",
    description: "Elegant outdoor pavilions crafted to provide sheltered seating areas for corporate break parks, upscale hotels, and residential lawns. Employs precision structural connectors to guarantee simple setup and premium architectural longevity.",
    features: [
      "FSC premium class wood framing with chemical anti-fungal treatment",
      "Heavy-duty galvanized connector brackets for extreme wind resistance",
      "Louvered wooden privacy shutters option",
      "Pre-routed columns for electrical wiring and lighting fixtures"
    ],
    specifications: {
      materials: "FSC certified tropical wood framing structure combined with high-grade powder coated steel joints.",
      dimensions: "Standard pavilion size: 3600 x 3600 x 2700 mm high. Sizing fully customizable.",
      installation: "Secured directly onto patios, paved lawns, or deck structures using heavy bracket flanges.",
      sustainability: "FSC certified wood ensures responsible forestry; high longevity framing reduces overall lifecycle footprint."
    },
    options: {
      wood: ["FSC Teak Structure", "Robinia Structure", "Acacia Structure"],
      metal: ["Jet Black Brackets", "Textured Corten Brackets", "Polished Aluminum Brackets"],
      modules: ["Standard Pavilion Frame", "Side Louvered Privacy Wall Kit", "Overhead Dimmable LED Kit"]
    }
  },
  {
    id: "cabanas",
    title: "Cabanas",
    line: "Poolside comfort",
    category: "Cabanas",
    image: cabanasImg,
    gallery: [cabanasImg, gbg2, welcome1],
    badges: ["New"],
    tagline: "Resort-style cabanas for luxury private seating.",
    description: "SUNSCAPE combines high-end comfort with public durability. Featuring integrated shading slats and premium lounging decks, it creates a cozy, luxury retreat for hotel poolsides, corporate rooftops, and high-end public spaces.",
    features: [
      "Sturdy architectural pergola frame with overhead shading slats",
      "Premium, weather-proof lounging platforms",
      "Modular side privacy screens in timber or fabric",
      "Integrated cup holders and device shelving"
    ],
    specifications: {
      materials: "Structural steel tubes, powder-coated; FSC Jatoba or Robinia wood lounger slats; stainless steel joints; acrylic weather-proof fabric options.",
      dimensions: "Total footprint: 2000 x 2000 mm. Pergola Height: 2200 mm. Lounger platform height: 450 mm.",
      installation: "Surface mounted on wooden decks, tiled terraces, or concrete slabs using concealed floor anchoring brackets.",
      sustainability: "Timber sourced from sustainably managed FSC-certified forests; structural steel is fully recyclable; durable fabrics resist UV degrading."
    },
    options: {
      wood: ["Jatoba FSC® Slats", "Robinia Slats", "Acacia Thermo-wood"],
      metal: ["Corten Brown (Fine Texture)", "Anthracite Grey (RAL 7016)", "Warm Sand (RAL 1013)"],
      modules: ["Single Cabana Bed", "Double Cabana Bed", "Add-On Side Timber Slats Privacy Screen", "Add-On Fabric Curtains"]
    }
  }
];
