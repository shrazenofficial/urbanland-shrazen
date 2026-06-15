import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pageConfigs = {
  "Aluminium Benches": {
    filename: "AluminiumBenchesPage.jsx",
    routePath: "products/benches/aluminium-benches",
    images: ["benchesImg", "benchesUgc", "benchHero"],
    carouselCards: [
      { tag: "Material Spotlight", h: "Premium Aluminium<br />Benches in India", label: "01", desc: "Rust-proof, lightweight structural profiles" },
      { tag: "Modern Design", h: "Sleek Minimalist<br />Seating for parks<br />and gardens", label: "02", desc: "Available in 50+ RAL powder coat finishes" },
      { tag: "B2B Guarantee", h: "2-Year Warranty<br />& ISO Certified<br />Standards", label: "03", desc: "Trusted by top real estate developers" },
      { tag: "Sustainable Design", h: "Eco-Friendly &<br />100% Recyclable<br />Aluminium", label: "04", desc: "Green building certified street furniture" },
      { tag: "Smart Customization", h: "Custom Lengths<br />& Surface Mount<br />Anchoring", label: "05", desc: "Tailored to high-traffic urban corridors" }
    ],
    reasons: [
      { title: "Rust-Proof Excellence", desc: "Aluminium naturally resists moisture and salt spray, making these benches ideal for coastal areas and humid open parks." },
      { title: "Featherlight Strength", desc: "High-tensile structural profiles provide immense load-bearing capacity while remaining easy to move and install." },
      { title: "Zero Maintenance", desc: "No annual painting or rust treatments required. A simple water wash keeps them looking pristine for years." },
      { title: "Akzonobel Finish", desc: "Finished with premium UV-resistant powder coatings to prevent color fading and cracking under the tropical sun." }
    ],
    tabs: {
      standard: {
        title: "Standard Aluminium Bench — Compact & Practical",
        ideal: "Inland parks, municipal gardens, residential building lobbies.",
        features: ["Frame: Structural grade aluminium alloy", "Finish: Industrial powder coating", "Seating: Standard 3-slat configuration", "Capacity: 3-4 persons"],
        imgIdx: 1,
        matrix: { dims: "1500L × 600W × 750H mm", wt: "18-22 kg", lt: "20-25 days", maint: "Zero (wash only)", life: "10-12 years", custom: "None" }
      },
      premium: {
        title: "Premium Aluminium Bench — Ergonomic & Elegant",
        ideal: "High-end corporate gardens, luxury apartments, oceanfront promenades.",
        features: ["Frame: Heavy-wall structural aluminium", "Finish: Akzonobel architectural powder coating", "Seating: Ergonomic contour seat with backrest and armrests", "Capacity: 4-5 persons"],
        imgIdx: 2,
        matrix: { dims: "1800L × 620W × 800H mm", wt: "25-30 kg", lt: "25-30 days", maint: "Zero", life: "15+ years", custom: "Indefinite coastal performance" }
      },
      super: {
        title: "Super Premium Aluminium Bench — Smart Ready & Modular",
        ideal: "Smart City public spaces, high-traffic commercial plazas, eco-resorts.",
        features: ["Frame: Marine-grade structural anodized aluminium", "Finish: Anti-graffiti textured paint finish", "Seating: Integrated wood-composite (WPC) accents with armrests", "Capacity: 5-6 persons (modular linkable)"],
        imgIdx: 3,
        matrix: { dims: "2100L × 650W × 820H mm", wt: "35-40 kg", lt: "30-35 days", maint: "Zero", life: "20+ years indefinite", custom: "Modular linking & smart sensors ready" }
      }
    },
    materials: [
      { name: "Aluminium Alloy 6063", life: "15+ years", maint: "Zero maintenance", best: "Coastal & humid regions", cost: "Base premium price (1.8x vs MS)" },
      { name: "Mild Steel (MS)", life: "6-8 years", maint: "Annual paint touch-ups", best: "Low budget inland parks", cost: "Standard base price (1x)" },
      { name: "Stainless Steel 304", life: "20+ years", maint: "Periodic cleaning", best: "Heavy-traffic transit nodes", cost: "High-end (2.5x vs MS)" }
    ],
    customization: [
      "Dimensions: Custom lengths from 1200mm to 2400mm",
      "Mounting options: Surface anchor bolting, sub-surface concrete grouting, or free-standing with levelers",
      "Colors: Available in 50+ RAL powder coat finishes and brushed metallic profiles",
      "Profiles: Perforated sheets, solid slatted planks, or modular multi-seat units",
      "Add-ons: Anti-graffiti coatings, integrated USB solar charging outlets, safety armrest dividers"
    ],
    projects: [
      { tag: "Nagpur Smart City", subtitle: "Nagpur Municipal Corp", title: "Public Promenade Seating — 150 Aluminium Benches", time: "3 months", desc: "Nagpur Smart City authority selected our rust-proof premium aluminium benches for public walkway beautification. The lightweight, modular units enabled rapid manual installation without heavy machinery, minimizing municipal project delay." },
      { tag: "Taj Lands End", subtitle: "Taj Group — Mumbai", title: "Luxury Poolside Promenades — 30 Anodized Benches", time: "2 months", desc: "Specified custom warm bronze anodized aluminium benches to withstand relentless sea breezes and chlorine vapor by the poolside. Benches retain premium satin luster with zero degradation after 12+ months." },
      { tag: "Tata Green Hills", subtitle: "Tata Realty — Pune", title: "Eco-Friendly Township Walkways — 80 Benches", time: "4 months", desc: "Installed modular aluminium park benches with 100% recyclable components to achieve LEED Platinum green building ratings. Coordinated logistics, delivery, and anchoring systems for an on-schedule launch." }
    ],
    stats: { p: "50+", c: "15+", o: "2000+", pLbl: "Infrastructure Projects Delivered", cLbl: "Cities Served", oLbl: "Benches Installed" },
    faqList: [
      { q: "Are Aluminium Benches suitable for coastal areas?", a: "Yes. Aluminium naturally forms a protective oxide layer that resists corrosion, making it highly suitable for coastal areas with salt-heavy sea breezes." },
      { q: "How do Aluminium Benches compare to Stainless Steel?", a: "Aluminium is lighter and generally more cost-effective than Stainless Steel, while offering comparable rust resistance. SS is heavier and has a polished premium luster." },
      { q: "Can they be customized in size and colour?", a: "Yes. We offer custom lengths from 1.2m to 2.4m, and a variety of 50+ RAL powder coating finishes to match any architectural theme." },
      { q: "What is the typical lead time?", a: "Standard lead time is 25-30 days from order confirmation. Rush orders can be delivered in 15-20 days with a surcharge." },
      { q: "Do you provide installation services?", a: "Yes. We provide nationwide shipping and on-site assembly/installation support for commercial orders." }
    ]
  },
  "Benches": {
    filename: "BenchesPage.jsx",
    routePath: "products/benches",
    images: ["benchesImg", "benchesUgc", "benchHero"],
    carouselCards: [
      { tag: "Product Spotlight", h: "Architectural Outdoor<br />Benches in India", label: "01", desc: "Handcrafted steel, wood, and concrete seating" },
      { tag: "Urban Landscapes", h: "Timeless Seating<br />for townships,<br />malls & plazas", label: "02", desc: "Durable FSC certified timber or WPC slats" },
      { tag: "B2B Guarantee", h: "2-Year Warranty<br />& ISO Certified<br />Standards", label: "03", desc: "Trusted by leading real estate developers" },
      { tag: "Heavy Duty", h: "Cast Iron bases<br />with anti-vandal<br />anchoring systems", label: "04", desc: "Vandal-resistant structure for public spaces" },
      { tag: "Smart Modular", h: "Smart Solar Benches<br />with USB ports &<br />wireless charging", label: "05", desc: "Pre-wired modern seats for smart city grids" }
    ],
    reasons: [
      { title: "Heavy-Duty Materials", desc: "Constructed with structural galvanized steel or cast iron bases to withstand heavy vandalism and public wear." },
      { title: "Climate Adaptive", desc: "Uses UV-stabilized WPC (Wood Plastic Composite) or high-density timbers that resist rot, insect attack, and severe weather." },
      { title: "FSC Certified Timbers", desc: "Robinia, Teak, and Jatoba timbers sourced from sustainably managed forests with premium weathering stains." },
      { title: "Concealed Anchoring", desc: "Secured using heavy concrete chemical anchors, ensuring they remain firmly positioned and theft-resistant." }
    ],
    tabs: {
      standard: {
        title: "Standard WPC Flat Bench — Low Maintenance",
        ideal: "Inland public walkways, residential societies, corporate lobbies.",
        features: ["Frame: Mild Steel with anti-rust primer & powder coating", "Seating: Weatherproof WPC slats (Teak shade)", "Design: Flat profile without backrest", "Capacity: 3-4 persons"],
        imgIdx: 1,
        matrix: { dims: "1500L × 500W × 450H mm", wt: "30-35 kg", lt: "20-25 days", maint: "Low (periodic wash)", life: "6-8 years", custom: "None" }
      },
      premium: {
        title: "Premium Timber Park Bench — Contour Support",
        ideal: "Luxury hotels, private country clubs, central township gardens.",
        features: ["Frame: Heavy cast iron legs with architectural paint", "Seating: FSC Robinia hardwood slats with UV oil coating", "Design: Ergonomic backrest & cast iron armrests", "Capacity: 4-5 persons"],
        imgIdx: 2,
        matrix: { dims: "1800L × 650W × 800H mm", wt: "65-75 kg", lt: "25-30 days", maint: "Annual timber oiling", life: "12-15 years", custom: "Anti-vandal hidden anchor bolts" }
      },
      super: {
        title: "Super Premium Smart Bench — Off-Grid Power & IoT",
        ideal: "Smart City corridors, university campus plazas, tech parks.",
        features: ["Frame: Stainless Steel 316 chassis", "Seating: Toughened safety glass top with integrated monocrystalline solar panel", "Tech: 2x USB charging ports, 1x wireless charging pad, LED night illumination", "Capacity: 3-4 persons"],
        imgIdx: 3,
        matrix: { dims: "2000L × 600W × 470H mm", wt: "110-130 kg", lt: "35-45 days", maint: "Semi-annual solar cleaning", life: "15+ years", custom: "Pre-wired IoT sensor integration ready" }
      }
    },
    materials: [
      { name: "Wood-Plastic Composite (WPC)", life: "8-10 years", maint: "Zero maintenance", best: "Low maintenance B2B landscapes", cost: "Economical (1.2x vs wood)" },
      { name: "FSC Robinia Hardwood", life: "12-15 years", maint: "Annual wood stain/oil", best: "Luxury hospitality & resorts", cost: "Premium (1.8x vs WPC)" },
      { name: "Concrete Aggregate", life: "20+ years", maint: "Zero (sealant touch-up)", best: "Heavy public urban streetscapes", cost: "High-durability (1.5x vs WPC)" }
    ],
    customization: [
      "Slats: Robinia timber, Jatoba, Teak wood, WPC, or perforated steel sheets",
      "Lengths: Customizable seating lengths from 1.2m to 2.2m",
      "Bases: Cast iron, laser-cut mild steel, stainless steel, or concrete blocks",
      "Add-ons: Anti-skateboarding studs, center armrests, or solar charging ports",
      "Mounting: Expansion anchor bolts, extended legs for inground casting, or free-standing"
    ],
    projects: [
      { tag: "Nagpur Smart City", subtitle: "Nagpur Municipal Corp", title: "Public Promenade Seating — 200 WPC Benches", time: "4 months", desc: "Nagpur Smart City authority selected our heavy-duty WPC park benches for central public walkway beautification. The robust steel frames and weather-resistant composite slats met municipal budgets while ensuring anti-vandal reliability." },
      { tag: "Lodha World Towers", subtitle: "Lodha Group — Mumbai", title: "Premium Residential Podium — 80 Timber Benches", time: "3 months", desc: "Lodha partnered with Urbanland for 80 Premium Robinia timber benches custom-designed with black powder-coated cast iron legs. Coordinated staggered delivery and anchoring to match podium landscape layouts." },
      { tag: "L&T Tech Park", subtitle: "L&T Realty — Bangalore", title: "Corporate Tech Campus — 40 Modular Benches", time: "2 months", desc: "Installed custom double-sided flat benches in the main campus plaza. Designed with linear concrete bases and grey WPC slats to match the modern corporate architecture." }
    ],
    stats: { p: "80+", c: "25+", o: "5000+", pLbl: "Major B2B Projects Delivered", cLbl: "Cities Served", oLbl: "Outdoor Benches Installed" },
    faqList: [
      { q: "Which bench material is best for coastal areas?", a: "Aluminium or Stainless Steel 316. While WPC holds up well, raw steel/MS will rust in coastal settings unless treated with specialized marine-grade coating." },
      { q: "Can benches be customized in length and design?", a: "Yes. We offer customization for benches, including lengths from 1.2m to 2.2m, custom steel branding cutouts, and custom RAL colors." },
      { q: "Are WPC benches suitable for outdoor use?", a: "Yes. Our Wood-Plastic Composite (WPC) is fully weatherproof, UV-stabilized, and requires no painting, oiling, or varnish." },
      { q: "What is the typical lead time?", a: "Standard orders take 25-35 days depending on the volume and custom specifications requested." },
      { q: "Do you provide installation services?", a: "Yes, we offer complete site assembly and concrete anchor bolting services across India." }
    ]
  },
  "Bus Shelter_": {
    filename: "BusSheltersPage.jsx",
    routePath: "products/bus-shelters",
    images: ["busSheltersImg", "busSheltersUgc", "busSheltersRealUgc"],
    carouselCards: [
      { tag: "Infrastructure Spotlight", h: "Premium Smart<br />Bus Shelters in India", label: "01", desc: "High-durability MS & SS stop designs" },
      { tag: "Modern Transit", h: "Stops with safety<br />glass windguards<br />and LED lights", label: "02", desc: "Built to municipal smart city guidelines" },
      { tag: "B2B Guarantee", h: "2-Year Warranty<br />& ISO Certified<br />Standards", label: "03", desc: "Trusted across 50+ smart townships" },
      { tag: "High-Strength", h: "Windload certified<br />cantilever steel<br />frame structures", label: "04", desc: "Duplex anti-corrosion paint coatings" },
      { tag: "Smart City Ready", h: "Solar Powered Stops<br />with USB ports &<br />IoT wire pre-runs", label: "05", desc: "Ready for smart city network grids" }
    ],
    reasons: [
      { title: "Smart City Design", desc: "Designed to meet smart city guidelines, ready for solar panel integration, USB charging, and digital display units." },
      { title: "Extreme Durability", desc: "Built with galvanized steel or Stainless Steel (304/316) frames, offering high wind-load resistance and structural safety." },
      { title: "Low Maintenance", desc: "Protected by Akzonobel PU powder coating, ensuring long-term paint adhesion and resistance to corrosion and fading." },
      { title: "Turnkey Installation", desc: "Our professional crews provide full concrete foundation, bolting, assembly, and testing across India." }
    ],
    tabs: {
      standard: {
        title: "Standard Bus Shelter — Cost-Effective & Durable",
        ideal: "Inland municipalities, township amenities, secondary transit routes.",
        features: ["Frame: Mild Steel with Akzonobel PU powder coating", "Roof: Galvanized sheet or polycarbonate (ACP)", "Seating: MS bench with anti-slip surface", "Capacity: 8-12 standing + 3-4 seated"],
        imgIdx: 1,
        matrix: { dims: "4500L × 1800W × 2500H mm", wt: "1200-1400 kg", lt: "25-30 days", maint: "₹3,000-5,000", life: "8-10 years", custom: "None" }
      },
      premium: {
        title: "Premium Bus Shelter — Stainless Steel, Zero Maintenance",
        ideal: "Coastal areas, high-traffic zones, premium real estate.",
        features: ["Frame: Stainless Steel (304/316 grade) with brushed or mirror finish", "Roof: Polycarbonate or toughened glass panels", "Seating: SS bench with ergonomic backrest", "Capacity: 10-15 standing + 4-5 seated"],
        imgIdx: 2,
        matrix: { dims: "4500L × 1800W × 2500H mm", wt: "1600-2000 kg", lt: "30-35 days", maint: "₹500-1,000 (minimal)", life: "15-20+ years", custom: "Indefinite coastal performance" }
      },
      super: {
        title: "Super Premium Bus Shelter — Smart City Ready + IoT",
        ideal: "Smart City Mission Phase-II, premium developments, IoT-enabled infrastructure.",
        features: ["Frame: Stainless Steel 304/316 (premium grade, mirror-polished)", "Roof: Toughened glass with integrated solar panel mounts", "Tech: Solar-powered LED, Type-A & C USB ports, pre-wired for IoT sensors", "Capacity: 12-18 standing + 5-6 seated"],
        imgIdx: 3,
        matrix: { dims: "4500L × 1800W × 2500H mm", wt: "2200-2800 kg", lt: "35-45 days", maint: "₹1,500-2,500", life: "20+ years", custom: "Off-grid solar array & EV charger prep" }
      }
    },
    materials: [
      { name: "Mild Steel (MS)", life: "8-10 years", maint: "Annual paint touch-ups", best: "Inland municipalities", cost: "Base price (1x)" },
      { name: "Stainless Steel 304/316", life: "15-20+ years", maint: "Minimal cleaning", best: "Coastal & high-traffic zones", cost: "2.5-3x MS cost" },
      { name: "Aluminium", life: "12-15 years", maint: "Periodic check", best: "Remote installations", cost: "1.8-2x MS cost" }
    ],
    customization: [
      "Dimensions: Custom lengths 3500-7000mm",
      "Frame materials: MS, SS 304, SS 316, Aluminium",
      "Roof options: Galvanized sheet, polycarbonate, toughened glass",
      "Finishes: Standard colors, 50+ RAL colors, mirror polish, brushed",
      "Add-ons: LED lighting, solar panels, digital displays, IoT sensor pre-wiring"
    ],
    projects: [
      { tag: "Nagpur Smart City", subtitle: "Nagpur Municipal Corp", title: "Smart City Municipal Project — 120 Shelters", time: "8 months", desc: "A metropolitan city selected Urbanland for 120 bus stops across its transit network. Standard configuration (MS frame, galvanized roof) met municipal budget while ensuring durability. Urbanland coordinated bulk manufacturing, logistics, and staggered installation." },
      { tag: "Lodha World Towers", subtitle: "Lodha Group — Maharashtra", title: "Premium Township — 85 Stainless Steel Shelters", time: "6 months", desc: "Lodha partnered with Urbanland for 85 Premium SS shelters custom-designed with mirror-polished finish. Design consistency across 3 townships. Zero maintenance needed 18+ months post-installation—critical for resident satisfaction." },
      { tag: "Goa Development", subtitle: "Coastal Authority — Goa", title: "Coastal Smart City — 45 SS Shelters (Zero Degradation)", time: "4 months", desc: "Coastal city required shelters withstanding salt spray, humidity, and extreme heat. Urbanland specified 316-grade SS (premium vs. standard 304) for superior corrosion resistance. Result: 14 months post-installation, zero rust or degradation observed." }
    ],
    stats: { p: "50+", c: "15+", o: "2000+", pLbl: "Major Infrastructure Projects", cLbl: "Cities Served", oLbl: "Operational Shelters" },
    faqList: [
      { q: "Which material should I choose for coastal areas?", a: "Stainless steel 304/316 grade. MS will rust in 2-3 years despite coating. SS requires minimal maintenance and is more economical long-term (saves repainting costs)." },
      { q: "How long is the lead time?", a: "Standard 25-30 days | Premium 30-35 days | Super Premium 35-45 days from order confirmation. Rush orders (15-20 days) available at +15% surcharge." },
      { q: "Can you customize dimensions?", a: "Yes. We build custom sizes from 3500mm to 7000mm length. Customization adds 5-7 days to lead time. Email your site plans for a custom quote." },
      { q: "Do you provide installation?", a: "Yes, included for sites within 50km of Vasai Virar. We dispatch a trained team for foundation bolting, assembly, leveling, and commissioning." },
      { q: "What if my shelter is damaged in an accident?", a: "The 2-year warranty covers manufacturing defects, not accidents or vandalism. We recommend installing bollards around high-traffic shelters to prevent vehicle collisions." }
    ]
  },
  "Cabanas": {
    filename: "CabanasPage.jsx",
    routePath: "products/cabanas",
    images: ["cabanasImg", "cabanasUgc", "gbg2"],
    carouselCards: [
      { tag: "Hospitality Spotlight", h: "Luxury Outdoor<br />Cabanas & Daybeds", label: "01", desc: "Resort-grade structural steel daybed pavilions" },
      { tag: "Resort Comfort", h: "Shaded poolside<br />retreats with privacy<br />curtains", label: "02", desc: "Acrylic fabrics with Sunbrella performance" },
      { tag: "B2B Guarantee", h: "2-Year Warranty<br />& ISO Certified<br />Standards", label: "03", desc: "Built for five-star hotels and private clubs" },
      { tag: "Weather Resistant", h: "HDPE wicker wraps<br />and heavy steel<br />engineered frames", label: "04", desc: "Rust-proof frames with marine grade coatings" },
      { tag: "Bespoke Lounges", h: "Custom double daybeds<br />with integrated side<br />tables & lighting", label: "05", desc: "Tailored to high-end hospitality pool decks" }
    ],
    reasons: [
      { title: "Resort-Grade Materials", desc: "Constructed with structural-grade thick-wall steel or aluminium frames, wrapped in UV-stabilized HDPE synthetic rattan." },
      { title: "Sunbrella Fabrics", desc: "Curtains and cushions utilize Sunbrella marine fabrics that resist chlorine, salt spray, mold, and intense fading." },
      { title: "Quick-Dry Foam", desc: "Cushion inserts feature open-cell reticulated foam, draining water rapidly after monsoon rains or pool splashes." },
      { title: "Wind Load Certified", desc: "Heavy weighted frame designs with concrete deck anchors, ensuring stability in high-wind beachfront areas." }
    ],
    tabs: {
      standard: {
        title: "Standard Single Cabana — Sleek & Intimate",
        ideal: "Boutique hotel pool decks, private villa gardens, luxury apartment terraces.",
        features: ["Frame: Mild Steel with heavy powder coating", "Upholstery: Water-resistant polyester curtains", "Bed cushion: 100mm high-density foam", "Capacity: 1-2 persons"],
        imgIdx: 1,
        matrix: { dims: "1800L × 1800W × 2100H mm", wt: "95-110 kg", lt: "30-35 days", maint: "Low (periodic fabric wash)", life: "5-7 years", custom: "None" }
      },
      premium: {
        title: "Premium Double Cabana — Resort Style",
        ideal: "5-star resort pool decks, oceanfront hotels, premium country clubs.",
        features: ["Frame: Anodized Aluminium with powder coating", "Upholstery: Sunbrella outdoor canvas privacy drapes", "Bed cushion: 150mm quick-dry foam cushion with mesh bottom", "Capacity: 2-3 persons"],
        imgIdx: 2,
        matrix: { dims: "2000L × 2000W × 2200H mm", wt: "120-140 kg", lt: "35-40 days", maint: "Wash fabrics seasonal", life: "10-12 years", custom: "Concealed deck mounting brackets" }
      },
      super: {
        title: "Super Premium Daybed Pavilion — Smart Integrated",
        ideal: "Mega resorts, high-end beach clubs, private luxury estate lawns.",
        features: ["Frame: Marine-grade Stainless Steel 316 wrapped in synthetic PE wicker", "Upholstery: Sunbrella performance fabrics with automated tracks", "Bed cushion: 150mm memory quick-dry foam bed with backrests", "Tech: Integrated solar panels, LED interior lighting, dual USB ports, side beverage fridge"],
        imgIdx: 3,
        matrix: { dims: "2400L × 2400W × 2400H mm", wt: "220-250 kg", lt: "40-50 days", maint: "Minimal", life: "15+ years", custom: "Smart automation & solar integration" }
      }
    },
    materials: [
      { name: "Anodized Aluminium", life: "12-15 years", maint: "Zero maintenance", best: "Coastal beach resorts", cost: "Premium (1.5x vs Steel)" },
      { name: "Powder-Coated Steel (MS)", life: "6-8 years", maint: "Periodic touch-ups", best: "Inland hotels & clubs", cost: "Base price (1x)" },
      { name: "Stainless Steel 316", life: "20+ years", maint: "Minimal cleaning", best: "Ultra-luxury beach front decks", cost: "Highest end (2.2x vs Steel)" }
    ],
    customization: [
      "Curtain Fabrics: Sunbrella canvas, outdoor polyester, or mesh sheer privacy screens",
      "Frame Wrap: Hand-woven synthetic HDPE wicker, natural teak slats, or raw metal finish",
      "Sizes: Single bed (1.8m sq), Double bed (2.0m-2.4m sq), or multi-bay daybeds",
      "Add-ons: Integrated LED strip lights, solar phone chargers, side shelves, wooden sliding screens",
      "Mounting: Leveling glide feet, concrete lag bolts, or timber deck screws"
    ],
    projects: [
      { tag: "Taj Exotica Goa", subtitle: "Taj Hotels — Goa", title: "Luxury Beachfront Resort — 15 Cabanas", time: "3 months", desc: "Taj Hotels partnered with Urbanland to deploy 15 premium double cabanas along its Goan beach front. Engineered with 316 Stainless Steel and Sunbrella canvas to resist harsh saltwater mist, providing guest privacy and luxury appeal." },
      { tag: "Prestige Golfshire", subtitle: "Prestige Group — Bangalore", title: "Country Club Resort — 20 Premium Daybed Pavilions", time: "4 months", desc: "Installed custom wicker-wrapped double cabanas across the resort pool decks. The fast draining quick-dry foam cores ensured loungers were dry and operational within minutes of heavy tropical rain showers." },
      { tag: "Oberoi Beach Resort", subtitle: "Oberoi Group — Mumbai", title: "Rooftop Poolside Cabanas — 10 Custom Sets", time: "2 months", desc: "Manufactured premium aluminium cabanas for a luxury rooftop deck. Installed custom wind-anchoring brackets to withstand high-altitude wind gusts of up to 90 km/h." }
    ],
    stats: { p: "30+", c: "12+", o: "500+", pLbl: "Luxury Hospitality Projects", cLbl: "Cities Served", oLbl: "Luxury Cabanas Delivered" },
    faqList: [
      { q: "Which material is best for poolside cabanas?", a: "Aluminium is highly recommended due to its lightweight nature and complete immunity to chlorine and moisture corrosion." },
      { q: "Can cabanas be customized in size and design?", a: "Yes, we construct custom single, double, or multi-person daybeds with curtain enclosures and optional side tables." },
      { q: "Are they suitable for coastal areas?", a: "Yes, when specified with aluminium frame structures and marine-grade outdoor canvas fabrics." },
      { q: "What is the typical lead time?", a: "Lead time for premium cabanas ranges from 30 to 40 days depending on fabric selections and custom sizing." },
      { q: "Do you provide installation services?", a: "Yes, our installation crews offer full assembly and anchoring support for hotels, resorts, and private clubs." }
    ]
  },
  "Canteen Tables": {
    filename: "CanteenTablesPage.jsx",
    routePath: "products/canteen-tables",
    images: ["canteenTablesImg", "canteenTablesUgc", "canteenTablesHero"],
    carouselCards: [
      { tag: "Product Spotlight", h: "Heavy-Duty Canteen<br />Tables & Dining Sets", label: "01", desc: "Integrated seating and tables for high-traffic zones" },
      { tag: "Campus & Workplace", h: "Vandal-resistant<br />cafeteria seating<br />configurations", label: "02", desc: "High-Pressure Laminate (HPL) panel tops" },
      { tag: "B2B Guarantee", h: "2-Year Warranty<br />& ISO Certified<br />Standards", label: "03", desc: "Trusted by top colleges, factories & corporate offices" },
      { tag: "Weather Resistant", h: "Galvanized Steel<br />frames with anti-pooling<br />drainage slots", label: "04", desc: "Perfect for indoor and outdoor al-fresco dining" },
      { tag: "Bespoke Layouts", h: "Custom 4, 6, and<br />8-seater connected<br />canteen configurations", label: "05", desc: "Designed for optimal space utilization" }
    ],
    reasons: [
      { title: "Vandal-Resistant", desc: "Features integrated connected seating and tamper-proof security bolts, preventing seat theft and misalignments." },
      { title: "Low Maintenance", desc: "High-Pressure Laminate (HPL) or stainless steel tops are stain-resistant, oil-resistant, and easily wiped clean." },
      { title: "Anti-Pooling Top", desc: "Designed with subtle slope or drainage slots in table/bench surfaces, allowing rain water to drain off instantly." },
      { title: "Heavy Weight Stability", desc: "Weighted steel frames with bolt-down flanges prevent tables from tipping over or shifting in busy cafeterias." }
    ],
    tabs: {
      standard: {
        title: "Standard 4-Seater Canteen Set — Compact & Sturdy",
        ideal: "Factory breakrooms, school lunchrooms, budget outdoor cafeterias.",
        features: ["Frame: Mild Steel with industrial powder coating", "Table/Seat top: Durable pre-laminated MDF board (indoor only)", "Design: Connected 4-seat bench configuration", "Capacity: 4 persons"],
        imgIdx: 1,
        matrix: { dims: "1200L × 1600W × 750H mm", wt: "50-60 kg", lt: "20-25 days", maint: "Moderate", life: "5-6 years", custom: "None" }
      },
      premium: {
        title: "Premium Morse Canteen Set — All-Weather HPL",
        ideal: "Corporate IT park courtyards, university outdoor plazas, premium office cafes.",
        features: ["Frame: Galvanized steel with architectural powder coating", "Table/Seat top: 12mm High-Pressure Laminate (HPL) panels with drainage slots", "Design: Connected 6-seat table and bench set", "Capacity: 6 persons"],
        imgIdx: 2,
        matrix: { dims: "1800L × 1600W × 750H mm", wt: "80-95 kg", lt: "25-30 days", maint: "Zero (periodic wipe)", life: "10-12 years", custom: "Surface mount anchor bolt flanging" }
      },
      super: {
        title: "Super Premium SS 316 Cafeteria Set — Marine Grade",
        ideal: "Oceanfront cafes, chemical laboratory canteens, heavy-duty outdoor plazas.",
        features: ["Frame: Stainless Steel 316 (brushed or mirror finish)", "Table/Seat top: Solid Stainless Steel slatted or perforated sheets", "Design: Connected 8-seat double table configuration", "Capacity: 8 persons"],
        imgIdx: 3,
        matrix: { dims: "2200L × 1600W × 750H mm", wt: "130-155 kg", lt: "30-40 days", maint: "Zero", life: "20+ years indefinite", custom: "Custom corporate logo engraving ready" }
      }
    },
    materials: [
      { name: "High-Pressure Laminate (HPL)", life: "10-12 years", maint: "Zero maintenance", best: "All-weather outdoor canteens", cost: "Moderate (1.3x vs wood)" },
      { name: "Pre-laminated Board", life: "3-5 years", maint: "Prevent water exposure", best: "Indoor dry canteens", cost: "Economical (0.7x)" },
      { name: "Stainless Steel 304/316", life: "20+ years", maint: "Wipe with cleaner", best: "Corrosive or hygienic laboratory environments", cost: "Premium (2.5x vs HPL)" }
    ],
    customization: [
      "Configuration: 4-seater (square), 6-seater (rectangular), 8-seater, or modular linked canteen rows",
      "Table/Seat top: Architectural HPL panels, solid stainless steel, Robinia timber, or composite WPC",
      "Frame Finish: Textured powder coating, brushed steel, polished chrome, or galvanized steel",
      "Add-ons: Integrated umbrella holder holes, backrests on benches, or central divider panels",
      "Mounting: Expansion bolt down, core drilling grouted legs, or adjustable heavy rubber feet"
    ],
    projects: [
      { tag: "Nagpur Smart City", subtitle: "Nagpur Municipal Corp", title: "Public Food Court Seating — 50 Canteen Sets", time: "3 months", desc: "Deployed 50 premium connected 6-seater Morse canteen sets across the central public food plaza. The heavy-duty galvanized steel frames and vandal-resistant HPL tops ensure they withstand extreme public usage." },
      { tag: "Tata Consultancy Services", subtitle: "TCS Campus — Chennai", title: "Corporate Cafeteria Deck — 60 HPL Canteen Sets", time: "2 months", desc: "Installed custom canteen table sets on the outdoor cafeteria terrace. Design provided clean alignment and maximized outdoor seating capacity." },
      { tag: "L&T Manufacturing Hub", subtitle: "L&T — Vadodara", title: "Industrial Worker Canteen — 120 Stainless Steel Sets", time: "4 months", desc: "Manufactured and installed 120 heavy-duty connected SS 304 canteen sets for a factory cafeteria. Smooth, non-porous surfaces allow rapid cleaning and sanitation between worker shifts." }
    ],
    stats: { p: "60+", c: "20+", o: "3000+", pLbl: "Major B2B Cafeterias Delivered", cLbl: "Cities Served", oLbl: "Dining Sets Installed" },
    faqList: [
      { q: "Which material is best for high-traffic canteens?", a: "Stainless Steel frames combined with High-Pressure Laminate (HPL) tops offer the best hygiene, cleaning efficiency, and durability." },
      { q: "Can tables be customized for specific seating capacity?", a: "Yes. We manufacture standard 4-seater, 6-seater, and 8-seater configurations, as well as custom connected bench layouts." },
      { q: "Are your canteen tables suitable for outdoor use?", a: "Yes. When constructed with powder-coated galvanized steel or SS frames and outdoor-grade HPL panels, they are 100% weather-resistant." },
      { q: "What is the typical lead time?", a: "Normal fabrication lead time is 25-30 days from layout approval." },
      { q: "Do you provide installation services?", a: "Yes, we provide nationwide delivery and installation for corporate offices, colleges, and factories." }
    ]
  },
  "Car Shelter": {
    filename: "CarSheltersPage.jsx",
    routePath: "products/car-shelters",
    images: ["carSheltersImg", "carSheltersUgc", "carShelterHero"],
    carouselCards: [
      { tag: "Infrastructure Spotlight", h: "Premium Car Sheds<br />& Tensile Car Shelters", label: "01", desc: "Heavy-duty structural steel parking canopies" },
      { tag: "Tensile Shades", h: "High-tensile PVDF<br />membrane roofing<br />structures", label: "02", desc: "Provides 100% UV block & heat reduction" },
      { tag: "B2B Guarantee", h: "2-Year Warranty<br />& ISO Certified<br />Standards", label: "03", desc: "Trusted by hotels, developers, and corporate parks" },
      { tag: "Weather Protection", h: "Wind-load certified<br />cantilever steel sheds<br />for multiple cars", label: "04", desc: "Galvanized frames with Akzonobel coatings" },
      { tag: "Custom Parking", h: "Custom modular bays<br />in single-sided or<br />double-sided setups", label: "05", desc: "Tailored to commercial and residential parking" }
    ],
    reasons: [
      { title: "Cantilever Design", desc: "Provides unobstructed space beneath the canopy, allowing drivers to park easily without hitting structural posts." },
      { title: "PVDF Membrane", desc: "Uses premium high-tensile PVDF membrane roofing which blocks 100% of UV rays and reduces temperature under the canopy by up to 10°C." },
      { title: "Wind Resistance", desc: "Structural steel framework is wind-load calculated and certified to withstand wind velocities of up to 120 km/h." },
      { title: "Staggered Delivery", desc: "Modular fabrication enables staggered delivery and rapid erection, minimizing site disruptions in operational car parks." }
    ],
    tabs: {
      standard: {
        title: "Standard 2-Car Canopy — Compact & Robust",
        ideal: "Residential bungalows, private villa parking, small office driveways.",
        features: ["Frame: Mild Steel truss with standard zinc primer & powder coating", "Roofing: Polycarbonate sheet or profile GI sheet", "Design: Dual post arched canopy structure", "Capacity: 2 cars"],
        imgIdx: 1,
        matrix: { dims: "5000L × 5000W × 2500H mm", wt: "750-900 kg", lt: "25-30 days", maint: "Moderate", life: "8-10 years", custom: "None" }
      },
      premium: {
        title: "Premium Tensile Car Shelter — Cantilever Style",
        ideal: "Corporate offices, luxury residential apartments, premium hospitals.",
        features: ["Frame: Heavy structural steel hollow sections with epoxy zinc primer and polyurethane top coat", "Roofing: 900 GSM PVDF high-tensile German tensile membrane", "Design: Cantilever design with posts on one side only", "Capacity: Multi-car modular bays (expandable)"],
        imgIdx: 2,
        matrix: { dims: "5000L × 5000W × 2500H mm (per bay)", wt: "1100-1300 kg", lt: "30-35 days", maint: "Annual tension check & wash", life: "12-15 years", custom: "Wind-load certificate up to 120km/h" }
      },
      super: {
        title: "Super Premium Solar Parking Shed — Eco Power",
        ideal: "Smart City public parking, airport transit parking, green corporate offices.",
        features: ["Frame: Hot-dip galvanized structural steel (Akzonobel marine powder coating)", "Roofing: Integrated monocrystalline solar panels with grid-tied inverter wiring", "Design: Double-sided cantilever canopy with central structural columns", "Tech: Integrated LED strip lights, pre-wired EV charging station ports"],
        imgIdx: 3,
        matrix: { dims: "5500L × 600W × 2700H mm (per bay)", wt: "1800-2200 kg (with panels)", lt: "40-50 days", maint: "Quarterly solar panel cleaning", life: "20+ years", custom: "Pre-wired EV charger integration ready" }
      }
    },
    materials: [
      { name: "Structural MS + PVDF", life: "12-15 years", maint: "Periodic cleaning", best: "Premium commercial spaces & hotels", cost: "Base premium (1.5x vs GI)" },
      { name: "Mild Steel + GI Sheet", life: "6-8 years", maint: "Rust check & paint", best: "Low budget warehouse parking", cost: "Base price (1x)" },
      { name: "Hot-Dip Galvanized + PVDF", life: "20+ years", maint: "Minimal maintenance", best: "Coastal beach developments & smart cities", cost: "Highest end (2.2x)" }
    ],
    customization: [
      "Layout: Single cantilever, double-sided gull-wing, arched canopy, or custom modular parking rows",
      "Roofing material: 900 GSM PVDF membrane, multiwall polycarbonate sheets, pre-painted GI sheets, or solar glass panels",
      "Frame coating: Akzonobel architectural powder coating, epoxy-zinc coatings, or hot-dip galvanization",
      "Color: Available in a variety of RAL colors for frames, and white/grey/sand shades for fabrics",
      "Add-ons: EV charger post integrations, rain gutters & downspouts, solar LED lighting kits, safety bollard shields"
    ],
    projects: [
      { tag: "Adani Corporate House", subtitle: "Adani Realty — Ahmedabad", title: "Corporate Headquarters — 120 Car Tensile Canopy", time: "5 months", desc: "Designed, fabricated, and erected 120 car parking cantilever tensile shelters at the Adani corporate office. The cantilever design eliminated central poles, maximizing driving lanes and preventing car scrapes." },
      { tag: "Nagpur Smart City", subtitle: "Nagpur Municipal Corp", title: "Smart City Parking Hub — 45 Solar Parking Bays", time: "4 months", desc: "Installed modular structural steel solar car sheds at the central smart city parking hub. Integrated off-grid monocrystalline solar roofing systems, contributing power back to the grid and sheltering municipal fleets." },
      { tag: "Taj Lands End", subtitle: "Taj Hotels — Mumbai", title: "Luxury Hotel Guest Parking — 30 Cantilever Bays", time: "3 months", desc: "Constructed premium cantilever car shelters with marine-grade hot-dip galvanized steel and PVDF fabrics. Structures successfully resist severe beachfront winds and corrosive salt sprays." }
    ],
    stats: { p: "40+", c: "18+", o: "1500+", pLbl: "Major B2B Car Sheds Erected", cLbl: "Cities Served", oLbl: "Parking Bays Sheltered" },
    faqList: [
      { q: "Which material is best for coastal areas?", a: "Hot-dip galvanized structural steel or marine-grade anodized aluminium with high-tensile PVDF roofing membranes." },
      { q: "What is the typical lead time for car sheds?", a: "30-45 days depending on the structural design approval and foundation excavation requirements." },
      { q: "Can car sheds be customized for multiple vehicles?", a: "Yes. We offer modular multi-car bays in single-sided cantilever or double-sided layouts." },
      { q: "Do you provide installation services?", a: "Yes. We provide complete turnkey foundation works, structural erection, and membrane installation." },
      { q: "What does the 2-Year Guarantee cover?", a: "Covers structural structural integrity, weld defects, paint peeling, and water leakages under standard weather conditions." }
    ]
  },
  "Dustbins": {
    filename: "DustbinsPage.jsx",
    routePath: "products/dustbins",
    images: ["dustbinsImg", "dustbinsUgc", "dustbinsHero"],
    carouselCards: [
      { tag: "Product Spotlight", h: "Premium Public &<br />Commercial Dustbins", label: "01", desc: "High-durability waste segregation bins" },
      { tag: "Smart Segregation", h: "Double, triple &<br />quad sorting bins<br />for modern spaces", label: "02", desc: "Built to public smart city guidelines" },
      { tag: "B2B Guarantee", h: "2-Year Warranty<br />& ISO Certified<br />Standards", label: "03", desc: "Trusted by top townships, IT parks & hotels" },
      { tag: "Weather Resistant", h: "Fire-suppressive and<br />vandal-resistant steel<br />frame bins", label: "04", desc: "Akzonobel powder coated finish" },
      { tag: "Bespoke Styles", h: "Custom colors, shapes<br />and concrete aggregate<br />planter-integrated bins", label: "05", desc: "Designed for heavy-traffic public walkways" }
    ],
    reasons: [
      { title: "Waste Segregation", desc: "Designed with double, triple, or quad compartment bins to support standard dry, wet, and hazardous recycling segregations." },
      { title: "Anti-Vandal Steel", desc: "Heavy galvanized steel frames with thick-wall panels, preventing theft, severe denting, and public vandalism." },
      { title: "Self-Extinguishing", desc: "Features fire-suppressive internal configurations that cut off oxygen, suffocating fires before they spread." },
      { title: "Smart Ready Option", desc: "Available with IoT level sensor integration, notifying sanitation teams when bins are 80% full." }
    ],
    tabs: {
      standard: {
        title: "Standard Double Segregation Bin — Compact",
        ideal: "Residential society paths, retail storefronts, indoor office lobbies.",
        features: ["Frame: Mild Steel with powder coating", "Inner: Galvanized sheet metal liners", "Capacity: 2x 60 Litre compartments", "Design: Dual sorting dry & wet waste"],
        imgIdx: 1,
        matrix: { dims: "800L × 450W × 900H mm", wt: "35-40 kg", lt: "15-20 days", maint: "Wipe clean", life: "5-6 years", custom: "None" }
      },
      premium: {
        title: "Premium Triple Segregation Bin — All-Weather",
        ideal: "Smart City footpaths, commercial IT park walkways, premium resorts.",
        features: ["Frame: Galvanized steel with architectural powder coating", "Inner: Heavy-duty plastic waste liners", "Capacity: 3x 80 Litre compartments", "Design: Triple sorting (dry, wet, sanitary/ewaste)"],
        imgIdx: 2,
        matrix: { dims: "1200L × 500W × 950H mm", wt: "65-75 kg", lt: "20-25 days", maint: "Zero (periodic wipe)", life: "10-12 years", custom: "Anti-vandal anchor bolt flanging" }
      },
      super: {
        title: "Super Premium Smart Bin — Solar & IoT",
        ideal: "High-traffic transit stations, central municipal plazas, airport terminals.",
        features: ["Frame: Stainless Steel 304 or mirror-polished SS", "Inner: Fire-suppressive stainless steel compartments", "Capacity: 4x 100 Litre compartments (quad sorting)", "Tech: Solar-powered LED status indicators, fill-level IoT sensors, EV charging side ports"],
        imgIdx: 3,
        matrix: { dims: "1600L × 600W × 1000H mm", wt: "110-130 kg", lt: "30-40 days", maint: "Annual sensor battery swap", life: "15+ years", custom: "IoT smart routing integration ready" }
      }
    },
    materials: [
      { name: "Mild Steel (MS) Coated", life: "5-6 years", maint: "Periodic rust check", best: "Indoor lobbies & office plazas", cost: "Base price (1x)" },
      { name: "Galvanized Steel + Powder", life: "10-12 years", maint: "Zero (wash clean)", best: "Smart city footpaths & parks", cost: "Moderate (1.4x)" },
      { name: "Stainless Steel 304/316", life: "20+ years", maint: "Minimal cleaning", best: "Coastal beach corridors & labs", cost: "Highest end (2.5x)" }
    ],
    customization: [
      "Compartments: Double, triple, quad sorting, or custom multiple bins",
      "Table/Seat top: Integrated ash trays, rain flaps, advertising poster clips",
      "Colors: Available in 30+ RAL colors or brushed metal looks",
      "Bases: Flanged anchor plates, sub-surface cast roots, or heavy concrete blocks",
      "Tech: IoT fill-level ultrasonic sensors, solar LED indicator rings"
    ],
    projects: [
      { tag: "Nagpur Smart City", subtitle: "Nagpur Municipal Corp", title: "Pedestrian Walkway Beautification — 250 Segregation Bests", time: "5 months", desc: " Nagpur Smart City authority deployed 250 double sorting premium public bins across central walking paths. The anti-vandal anchor systems prevent theft while clean labeling aids public compliance." },
      { tag: "TCS IT Park", subtitle: "Tata Consultancy Services — Chennai", title: "IT Campus Walkway — 80 Triple Sorting Bins", time: "2 months", desc: "Installed custom segregation bins across outdoor food courts and walking lanes. Provided space-efficient design matching clean campus architecture." },
      { tag: "Taj Exotica Goa", subtitle: "Taj Hotels — Goa", title: "Luxury Beachfront Promenade — 30 Stainless Steel Bins", time: "3 months", desc: " Taj Hotels partnered with Urbanland to supply 30 mirror-finished SS 316 double sorting bins. Marine-grade steel holds up against corrosive salt sprays and sea mist." }
    ],
    stats: { p: "80+", c: "25+", o: "5000+", pLbl: "B2B Waste Management Projects", cLbl: "Cities Served", oLbl: "Outdoor Bins Manufactured" },
    faqList: [
      { q: "Which bin configuration is best for public parks?", a: "Double or triple compartment bins with heavy galvanized steel frames are highly recommended to resist weathering and encourage recycling segregation." },
      { q: "Are they waterproof?", a: "Yes, our bins feature integrated rain canopies or self-draining rain flaps to prevent rain water from pooling inside." },
      { q: "Can the bins be customized with branding?", a: "Yes, we can laser-cut or screen-print municipal, corporate, or project logos directly onto the metal surfaces." },
      { q: "What is the typical lead time?", a: "Standard lead times are 20-25 days depending on the volume and customization specs." },
      { q: "Do you ship nationwide?", a: "Yes, we ship bins securely using customized pallets across India." }
    ]
  },
  "Indoor Furniture": {
    filename: "IndoorFurniturePage.jsx",
    routePath: "products/indoor-furniture",
    images: ["wickerDiningImg", "wickerLivingImg", "welcome1"],
    carouselCards: [
      { tag: "Product Spotlight", h: "Premium Indoor<br />Furniture in India", label: "01", desc: "Luxury handcrafted metal, wooden & wicker furniture" },
      { tag: "Interior Design", h: "Elegant seating &<br />dining configurations<br />for hotels & offices", label: "02", desc: "Custom timber tops and powder coated metal frames" },
      { tag: "B2B Guarantee", h: "2-Year Warranty<br />& ISO Certified<br />Standards", label: "03", desc: "Trusted by leading architects & corporate interior designers" },
      { tag: "Handcrafted Luxury", h: "Hand-woven synthetic<br />PE wicker dining sets<br />and living ensembles", label: "04", desc: "Lightweight aluminium frames with non-marking glides" },
      { tag: "Bespoke Solutions", h: "Fully customizable<br />indoor furniture in<br />size, finish & style", label: "05", desc: "Designed to match your interior architectural plans" }
    ],
    reasons: [
      { title: "Scratch-Resistant", desc: "Metal frames undergo advanced pre-treatment and are finished with heavy-duty scratch-resistant powder coatings." },
      { title: "Ergonomic Crafting", desc: "Benches, chairs, and lounges are ergonomically designed for long-duration seating comfort in offices and lobbies." },
      { title: "Non-Marking Glides", desc: "All furniture bases are fitted with premium nylon or rubber glides, protecting marble, wood, and tile floors from scratches." },
      { title: "Modular Configurations", desc: "Designed to be easily rearranged and combined, providing space flexibility for offices, hotels, and universities." }
    ],
    tabs: {
      standard: {
        title: "Standard Lobby Bench — Metal & Wood",
        ideal: "Office waiting lobbies, school corridors, residential common areas.",
        features: ["Frame: Mild Steel tube structure with fine powder coating", "Seating: Treated rubberwood or engineered wood panel with smooth varnish", "Design: Minimalist rectangular bench without backrest", "Capacity: 3-4 persons"],
        imgIdx: 1,
        matrix: { dims: "1500L × 450W × 450H mm", wt: "18-22 kg", lt: "20-25 days", maint: "Low (wipe with cloth)", life: "8-10 years", custom: "None" }
      },
      premium: {
        title: "Premium Wicker Living Lounge Set — Hand Woven",
        ideal: "Hotel executive lounges, premium resort reception areas, terrace rooms.",
        features: ["Frame: Powder coated lightweight aluminium structure", "Woven Wrap: High-grade synthetic PE wicker weave", "Cushions: Ergonomic memory foam wrapped in stain-resistant fabrics", "Capacity: 1x Sofa (3-seater), 2x Armchairs, 1x Coffee table"],
        imgIdx: 2,
        matrix: { dims: "Varies per piece", wt: "45-55 kg (total set)", lt: "25-35 days", maint: "Occasional fabric wipe", life: "10-12 years", custom: "Non-marking nylon floor glides" }
      },
      super: {
        title: "Super Premium Corporate Dining Set — Solid Timber",
        ideal: "Executive boardrooms, high-end university dining halls, institutional cafes.",
        features: ["Frame: Polished Stainless Steel 304 or mirror-chrome finish steel", "Table Top: Single slab solid teak wood with premium oil finish", "Design: Rectangular solid table with matching backrest dining benches", "Capacity: 8-10 persons"],
        imgIdx: 3,
        matrix: { dims: "2400L × 900W × 750H mm", wt: "110-130 kg (total set)", lt: "35-45 days", maint: "Annual wood oiling", life: "15+ years", custom: "Custom wood species selection ready" }
      }
    },
    materials: [
      { name: "Solid Teak & Metal", life: "15+ years", maint: "Annual oil polish", best: "Premium hotel lobbies & corporate boards", cost: "Premium (2x vs MS)" },
      { name: "Mild Steel + Rubberwood", life: "8-10 years", maint: "Wipe with cleaner", best: "Standard office waiting areas", cost: "Base price (1x)" },
      { name: "Aluminium + PE Wicker", life: "12-15 years", maint: "Wash with water", best: "Semi-covered terraces & resorts", cost: "Moderate (1.4x)" }
    ],
    customization: [
      "Materials: Teak wood, oak, Robinia, WPC, engineered wood, or glass tops",
      "Metal Finish: Matte black, white, gold powder coating, brushed steel, or chrome",
      "Dimensions: Custom dining table lengths from 1.5m to 2.8m",
      "Upholstery: Leatherette, stain-resistant polyester fabrics, or outdoor mesh sheets",
      "Style: Minimalist modern, industrial steel-wood, or hand-woven resort wicker"
    ],
    projects: [
      { tag: "Nagpur Smart City", subtitle: "Nagpur Municipal Corp", title: "Smart City Head Office — Lobby Seating Benches", time: "2 months", desc: "Supplied and installed 40 custom steel-wood indoor benches for the waiting lobbies of Nagpur Smart City head office. The non-marking glides protect the premium granite floors from scratches." },
      { tag: "Taj Lands End", subtitle: "Taj Hotels — Mumbai", title: "Executive Lounge Renovations — 15 Lounge Sets", time: "3 months", desc: "Partnered with Taj Hotels to manufacture and install 15 custom hand-woven indoor wicker lounge sets. The neutral sand-colored HDPE weave and premium fabrics match the hotel's interior aesthetic." },
      { tag: "Tata Realty Office", subtitle: "Tata Realty — Pune", title: "Corporate Dining Area — 30 Canteen Tables", time: "3 months", desc: "Installed 30 premium steel-wood canteen dining tables and benches inside Tata Realty's corporate headquarters. The oil-resistant varnished tops allow quick sanitization between staff lunch shifts." }
    ],
    stats: { p: "50+", c: "15+", o: "2000+", pLbl: "Corporate B2B Deliveries", cLbl: "Cities Served", oLbl: "Indoor Furniture Pieces Installed" },
    faqList: [
      { q: "Is metal wooden furniture suitable for indoor use?", a: "Yes. Our indoor furniture features smooth, non-marking glides, premium interior wood stains, and scratch-resistant powder coatings." },
      { q: "How do you ensure durability of wicker indoor furniture?", a: "We use high-grade synthetic PE wicker woven over aluminum frames. It is lightweight, structural, and resistant to humidity and pests." },
      { q: "Can indoor furniture be fully customized?", a: "Yes. We customize dimensions, wood types, metal colors, and fabric upholstery to match your interior design schemes." },
      { q: "What is the typical lead time?", a: "Typically 30-40 days depending on the scale and level of customization." },
      { q: "Do you provide installation services?", a: "Yes, our team handles delivery, placement, and installation for institutional and corporate clients." }
    ]
  },
  "Metal Wooden Furniture": {
    filename: "MetalWoodenFurniturePage.jsx",
    routePath: "products/metal-wooden-furniture",
    images: ["benchesImg", "benchesUgc", "benchHero"],
    carouselCards: [
      { tag: "Product Spotlight", h: "Bespoke Metal Wooden<br />Site Furniture in India", label: "01", desc: "Engineered steel-and-wood benches and seating" },
      { tag: "Architectural Blend", h: "Perfect fusion of<br />structural metals &<br />natural timbers", label: "02", desc: "FSC certified Robinia, Teak or WPC wood" },
      { tag: "B2B Guarantee", h: "2-Year Warranty<br />& ISO Certified<br />Standards", label: "03", desc: "Specified by top developers, hotels and public sectors" },
      { tag: "Corrosion Proof", h: "Galvanized frames<br />coated with premium<br />Akzonobel powder", label: "04", desc: "Corrosion-resistant metal structures for public spaces" },
      { tag: "Bespoke Shapes", h: "Custom linear, curved<br />or geometric modular<br />seating layouts", label: "05", desc: "Tailored to public parks and township plazas" }
    ],
    reasons: [
      { title: "Structural Steel Frame", desc: "Heavy steel structures are sandblasted, zinc-primed, and powder coated with Akzonobel PU paint for long-term corrosion prevention." },
      { title: "Premium Timbers", desc: "Uses sustainably sourced Robinia or Teak timbers that naturally resist insects, humidity, and decay under public exposure." },
      { title: "Double-Sealed Joints", desc: "All metal-to-wood joinery uses high-grade stainless steel fasteners with lock-nuts, preventing structural loosening." },
      { title: "Concealed Bolt Down", desc: "Designed with internal anchoring plates, allowing installers to bolt the furniture to concrete while keeping hardware hidden." }
    ],
    tabs: {
      standard: {
        title: "Standard Steel-WPC Bench — Low Maintenance",
        ideal: "Public walkways, school courtyards, residential society pathways.",
        features: ["Frame: Mild Steel profile with anti-rust primer and powder coating", "Seating: Weather-resistant Wood-Plastic Composite (WPC) slats", "Design: Rectangular bench with backrest and metal armrests", "Capacity: 3-4 persons"],
        imgIdx: 1,
        matrix: { dims: "1500L × 600W × 780H mm", wt: "38-45 kg", lt: "20-25 days", maint: "Low (periodic cleaning)", life: "8-10 years", custom: "None" }
      },
      premium: {
        title: "Premium Robinia Bench — Cast Iron Legs",
        ideal: "Hotel gardens, luxury golf courses, premium township walkways.",
        features: ["Frame: Heavy-duty cast iron base legs (black powder-coated finish)", "Seating: FSC Robinia hardwood slats with protective oil coat", "Design: Arched contour backrest with integrated armrests", "Capacity: 4-5 persons"],
        imgIdx: 2,
        matrix: { dims: "1800L × 620W × 810H mm", wt: "65-75 kg", lt: "25-30 days", maint: "Annual timber oil staining", life: "12-15 years", custom: "Concrete chemical anchor kit" }
      },
      super: {
        title: "Super Premium SS-Teak Modular Bench — Geometric",
        ideal: "High-end corporate park plazas, commercial office terraces, smart city lawns.",
        features: ["Frame: Stainless Steel 316 structural tube chassis", "Seating: Premium grade FSC Teak wood slats (brushed finish)", "Design: Modular curved or geometric linkable configurations", "Capacity: Customizable (modular linkable seats)"],
        imgIdx: 3,
        matrix: { dims: "Varies (modular design)", wt: "50-70 kg per module", lt: "35-45 days", maint: "Minimal (seasonal teak oiling)", life: "20+ years indefinite", custom: "Custom layout planning included" }
      }
    },
    materials: [
      { name: "MS + WPC Slats", life: "8-10 years", maint: "Zero maintenance", best: "Urban pathways & societies", cost: "Base price (1x)" },
      { name: "Cast Iron + Robinia Wood", life: "12-15 years", maint: "Annual timber staining", best: "Premium resorts & hotels", cost: "Premium (1.6x vs WPC)" },
      { name: "Stainless Steel 316 + Teak", life: "20+ years", maint: "Seasonal teak oiling", best: "Mega-townships & beachfront parks", cost: "Highest end (2.4x vs WPC)" }
    ],
    customization: [
      "Metal profiles: Galvanized steel, Stainless Steel 304, SS 316, cast iron, or cast aluminium",
      "Wood finishes: Natural teak oil, Robinia stains, mahogany stains, or WPC composite slats",
      "Shapes: Linear benches, curved park seating, L-shaped corner configurations, or central tree benches",
      "Add-ons: Anti-graffiti textured coatings, custom metal branding cutouts, anti-skate studs",
      "Anchor systems: Surface flange expansion anchors, sub-surface cast-in grouting, or heavy free-standing"
    ],
    projects: [
      { tag: "Nagpur Smart City", subtitle: "Nagpur Municipal Corp", title: "Public Promenade Seating — 180 Steel-WPC Benches", time: "4 months", desc: "Selected our heavy-duty steel-WPC benches for the Smart City promenade network. Coordinated site preparation, bulk logistics, and concrete anchor installation for a zero-disruption project launch." },
      { tag: "Lodha World Towers", subtitle: "Lodha Group — Mumbai", title: "Premium Apartment Gardens — 60 Timber Benches", time: "3 months", desc: "Installed custom cast iron and Robinia timber park benches along podium gardens. Coordinated deliveries and anchoring systems to align with Lodha's premium landscape design standards." },
      { tag: "Tata Green Hills", subtitle: "Tata Realty — Pune", title: "Eco-Friendly Township Walkways — 50 Custom Benches", time: "3 months", desc: "Manufactured modular curved steel-wood benches for a public township plaza. Used FSC certified timbers and recyclable metals, helping the township achieve LEED Platinum green status." }
    ],
    stats: { p: "60+", c: "20+", o: "3000+", pLbl: "B2B Projects Delivered", cLbl: "Cities Served", oLbl: "Benches Manufactured" },
    faqList: [
      { q: "What wood species are available?", a: "We primarily use WPC (Teak/Charcoal), Robinia, FSC-certified Jatoba, and high-density plantation wood." },
      { q: "How is the metal protected from rusting?", a: "All steel parts undergo hot-dip galvanization and are coated with premium Akzonobel architectural powder paints." },
      { q: "Is maintenance required for the wood?", a: "WPC requires zero maintenance. Natural timbers benefit from an annual protective oil coat to maintain their rich color." },
      { q: "What is the lead time?", a: "Standard lead times range from 25 to 35 days." },
      { q: "Do you provide custom design services?", a: "Yes. We work closely with architects and developers to create bespoke site furniture concepts." }
    ]
  },
  "Planters": {
    filename: "PlantersPage.jsx",
    routePath: "products/planters",
    images: ["plantersImg", "plantersUgc", "plantersBoxHero"],
    carouselCards: [
      { tag: "Product Spotlight", h: "Architectural Concrete &<br />Fiberglass Planters Box", label: "01", desc: "Premium lightweight architectural street planters" },
      { tag: "Smart Streetscapes", h: "Weatherproof large<br />street planters with<br />drainage systems", label: "02", desc: "Internal waterproofing treatment ready" },
      { tag: "B2B Guarantee", h: "2-Year Warranty<br />& ISO Certified<br />Standards", label: "03", desc: "Trusted by hotels, corporate hubs & township parks" },
      { tag: "Extreme Durability", h: "Architectural Concrete<br />which resists cracks<br />and weather splits", label: "04", desc: "High-tensile concrete composite planter blocks" },
      { tag: "Bespoke Sizing", h: "Custom round, square<br />or bento planter boxes<br />up to 1.5m depth", label: "05", desc: "Ready to accommodate large public trees" }
    ],
    reasons: [
      { title: "Architectural Concrete", desc: "Architectural Concrete provides high-tensile strength and crack resistance while remaining exceptionally durable compared to standard casting." },
      { title: "Internal Waterproofing", desc: "All planter interiors are coated with heavy-duty waterproofing membrane sealants, preventing moisture seepage and outer salt stains." },
      { title: "Built-In Drainage", desc: "Features integrated bottom drainage holes with soil barrier screen inserts, preventing root rot and soil washouts." },
      { title: "Theft Resistant", desc: "Heavy concrete planters remain securely positioned in public spaces, resisting theft and unauthorized relocation." }
    ],
    tabs: {
      standard: {
        title: "Standard Fiberglass Planter — Lightweight & Sleek",
        ideal: "Indoor offices, lobby partitions, residential balconies, terraces.",
        features: ["Material: High-quality marine-grade fiberglass (FRP)", "Finish: Glossy or matte automotive paint finish", "Design: Rectangular room partition planter", "Capacity: 150-200 kg soil load"],
        imgIdx: 1,
        matrix: { dims: "1000L × 350W × 450H mm", wt: "8-10 kg (empty)", lt: "15-20 days", maint: "Zero (wipe clean)", life: "5-6 years", custom: "None" }
      },
      premium: {
        title: "Premium Concrete Street Planter — Heavy Duty",
        ideal: "Smart City footpaths, hotel driveway perimeters, commercial outdoor plazas.",
        features: ["Material: High-Performance Architectural Concrete", "Finish: Natural textured raw concrete aggregate", "Design: Square architectural street block planter", "Capacity: 400-500 kg soil load"],
        imgIdx: 2,
        matrix: { dims: "900L × 900W × 750H mm", wt: "110-135 kg (empty)", lt: "25-30 days", maint: "Low (periodic sealant touch-up)", life: "15+ years", custom: "Internal waterproofing membrane" }
      },
      super: {
        title: "Super Premium Tree Planter — Custom Structural",
        ideal: "Central smart city squares, mega township plazas, hotel entrances.",
        features: ["Material: Heavy structural concrete reinforced with internal steel frames", "Finish: Smooth sandstone or charcoal granite finish", "Design: Large circular tree planter with built-in wooden perimeter bench", "Tech: Built-in crane lifting hooks, integrated sub-irrigation water reservoir"],
        imgIdx: 3,
        matrix: { dims: "1500L × 1500W × 900H mm", wt: "280-320 kg (empty)", lt: "35-45 days", maint: "Annual irrigation check", life: "20+ years indefinite", custom: "Crane hook lifting points & sub-irrigation kit" }
      }
    },
    materials: [
      { name: "Architectural Concrete", life: "15+ years", maint: "Zero maintenance", best: "Heavy public street planters", cost: "Premium (1.6x vs FRP)" },
      { name: "Fiberglass (FRP)", life: "5-7 years", maint: "Periodic cleaning", best: "Indoor/rooftop lightweight weight layouts", cost: "Base price (1x)" },
      { name: "Stainless Steel / Corten", life: "20+ years", maint: "Minimal cleaning", best: "Premium commercial plazas & museums", cost: "Highest end (2.5x vs FRP)" }
    ],
    customization: [
      "Shapes: Rectangular box, cube, round cylinder, hexagonal, or custom curved modular planter walls",
      "Finishes: Raw natural concrete, smooth granite aggregate, sandstone texture, matte/glossy paint, or rust corten look",
      "Wall Accents: Optional integrated wooden WPC panel cladding, or custom metal laser-cut branding panels",
      "Sizing: Custom sizes from 300mm up to 1800mm length and depth",
      "Add-ons: Integrated sub-irrigation water wells, root barrier lining, crane lifting lugs, bottom forklift pockets"
    ],
    projects: [
      { tag: "Nagpur Smart City", subtitle: "Nagpur Municipal Corp", title: "Smart City Footpath Beautification — 80 Concrete Planters", time: "3 months", desc: "Pedestrian walkways smart city beautification project. Bins and concrete planters act as safe vehicle buffers." },
      { tag: "Taj Lands End", subtitle: "Taj Hotels — Mumbai", title: "Luxury Hotel Entrance Walkways — 30 Concrete Planters", time: "2 months", desc: "Installed custom circular sand-textured concrete planters containing seasonal flowers along the main driveway. Internally waterproofed to prevent salt-stain seepage and maintain premium hotel aesthetics." },
      { tag: "Tata Green Hills", subtitle: "Tata Realty — Pune", title: "Corporate Rooftop Terrace — 60 Lightweight Planters", time: "2 months", desc: "Supplied 60 lightweight fiberglass partition planters for Tata's staff lunch deck. The low-weight structures met structural deck load limits." }
    ],
    stats: { p: "50+", c: "18+", o: "2000+", pLbl: "B2B Projects Delivered", cLbl: "Cities Served", oLbl: "Street Planters Installed" },
    faqList: [
      { q: "What is Architectural Concrete and why is it used for planters?", a: "Architectural Concrete is lightweight, has high-tensile strength, and is crack-resistant, making it ideal for large street planters." },
      { q: "Are they waterproof?", a: "Yes, all planters are treated with heavy-duty waterproofing sealants on the interior to prevent water seepage." },
      { q: "Can they accommodate large trees?", a: "Yes. We offer structural sizes up to 1.5m depth with built-in crane lifting points and root barrier insulation." },
      { q: "Do you ship nationwide?", a: "Yes, we ship heavy-duty planters safely using customized wooden crates across India." },
      { q: "What is the lead time?", a: "Lead times are 25-30 days for standard sizes, and 35 days for custom concrete designs." }
    ]
  },
  "Poolside Loungers": {
    filename: "PoolsideLoungersPage.jsx",
    routePath: "products/poolside-loungers",
    images: ["poolsideLoungersImg", "poolsideLoungersUgc", "gbg2"],
    carouselCards: [
      { tag: "Hospitality Spotlight", h: "Luxury Poolside Loungers<br />& Premium Sunbeds", label: "01", desc: "Resort-grade weather-resistant lounge seating" },
      { tag: "Poolside Comfort", h: "Ergonomic sunbeds<br />with multi-position<br />adjustable backrests", label: "02", desc: "Hand-woven UV-stabilized HDPE synthetic rattan" },
      { tag: "B2B Guarantee", h: "2-Year Warranty<br />& ISO Certified<br />Standards", label: "03", desc: "Trusted by 5-star hotels, luxury villas & beach clubs" },
      { tag: "Quick Dry", h: "Reticulated open-cell<br />foam cushions that drain<br />monsoon rains instantly", label: "04", desc: "Sunbrella performance fabric cushion covers" },
      { tag: "Bespoke Ensembles", h: "Custom double loungers<br />with integrated side<br />tables and wheels", label: "05", desc: "Tailored to high-end resort pool decks" }
    ],
    reasons: [
      { title: "HDPE Synthetic Wicker", desc: "Formulated to withstand saltwater mist, chlorinated pool water, and intense tropical UV radiation without cracking or splitting." },
      { title: "Reticulated Foam Core", desc: "Cushions use quick-dry reticulated open-cell foam, allowing rainwater to drain out instantly, keeping seats operational." },
      { title: "Lightweight Aluminium", desc: "Internal frames are constructed with thick-walled anodized aluminium, preventing rust while allowing staff to move chairs easily." },
      { title: "Multi-Angle Recline", desc: "Features high-grade stainless steel reclining adjusters, providing five ergonomic lounge angles for relaxation." }
    ],
    tabs: {
      standard: {
        title: "Standard Woven Lounger — Flat Profile",
        ideal: "Residential rooftop pools, private apartment terraces, budget hotels.",
        features: ["Frame: Powder coated aluminium structure", "Body Wrap: Standard HDPE rattan weave", "Design: Fixed flat lounge bed without cushions", "Capacity: 120 kg weight capacity"],
        imgIdx: 1,
        matrix: { dims: "1900L × 650W × 350H mm", wt: "12-14 kg", lt: "20-25 days", maint: "Zero (hose wash)", life: "5-6 years", custom: "None" }
      },
      premium: {
        title: "Premium Sun Lounger — Adjustable Backrest",
        ideal: "5-star hotel pool decks, premium resort clubs, luxury villa lawns.",
        features: ["Frame: Heavy anodized aluminium alloy", "Body Wrap: High-grade UV-rated PE wicker weave", "Design: Reclining backrest with 75mm Sunbrella outdoor cushion", "Capacity: 150 kg weight capacity"],
        imgIdx: 2,
        matrix: { dims: "2000L × 700W × 400H mm", wt: "16-18 kg", lt: "25-30 days", maint: "Seasonal fabric wash", life: "8-10 years", custom: "Rear roller wheels for easy transport" }
      },
      super: {
        title: "Super Premium Double Daybed Lounger — Canopy Style",
        ideal: "Mega resort pool clubs, beachfront VIP decks, private estate patios.",
        features: ["Frame: Premium marine-grade SS 316 and thick aluminium frames", "Body Wrap: Hand-woven synthetic PE thick rope weave", "Design: Connected double-wide lounger bed with 120mm quick-dry foam bed & overhead retractable fabric shade canopy", "Capacity: 300 kg weight capacity"],
        imgIdx: 3,
        matrix: { dims: "2000L × 1500W × 450H mm", wt: "45-55 kg", lt: "35-45 days", maint: "Minimal", life: "12+ years", custom: "Retractable overhead Sunbrella fabric canopy" }
      }
    },
    materials: [
      { name: "HDPE Wicker + Aluminium", life: "8-10 years", maint: "Zero maintenance", best: "Resort & hotel pool decks", cost: "Base premium (1.2x)" },
      { name: "PE Rope + SS 316", life: "12+ years", maint: "Periodic cleaning", best: "Beachfront VIP ocean decks", cost: "Highest end (2.2x)" },
      { name: "Standard PE Wicker + Steel", life: "4-5 years", maint: "Rust check", best: "Budget residential pools", cost: "Standard (0.8x)" }
    ],
    customization: [
      "Weave styles: Flat PE rattan, round synthetic cane, or heavy-duty outdoor polyester rope weaves",
      "Fabric colors: Available in 30+ solid and textured Sunbrella® or outdoor performance shades",
      "Cushion thickness: Standard (75mm), Deluxe (100mm), or Ultra-plush (150mm quick-dry foam)",
      "Add-ons: Integrated headrest pillows, slide-out side drink trays, rear roller wheels, side canvas storage bags",
      "Frames: Lightweight aluminium, marine-grade SS 316, or raw teak wood bases"
    ],
    projects: [
      { tag: "Taj Exotica Goa", subtitle: "Taj Hotels — Goa", title: "Luxury Beachfront Resort — 40 Poolside Loungers", time: "3 months", desc: " Taj Hotels partnered with Urbanland to manufacture and supply 40 premium reclining sun loungers. Engineered with rust-proof aluminium and UV-stabilized synthetic wicker, they successsfully withstand beach humidity." },
      { tag: "Prestige Golfshire", subtitle: "Prestige Group — Bangalore", title: "Resort Golf Clubhouse — 30 Sunbeds & Daybeds", time: "2 months", desc: "Installed custom hand-woven rope loungers around the central clubhouse lagoon. The open-cell reticulated foam cushions dry rapidly after rain." },
      { tag: "Oberoi Beach Resort", subtitle: "Oberoi Group — Mumbai", title: "Rooftop Pool Deck — 20 Premium Custom Sunbeds", time: "2 months", desc: "Installed custom double sunbeds on the luxury rooftop pool deck. Fronted with rear roller wheels to enable staff to easily adjust configurations." }
    ],
    stats: { p: "40+", c: "12+", o: "800+", pLbl: "Hotel & Resort Pool Decks", cLbl: "Cities Served", oLbl: "Poolside Loungers Delivered" },
    faqList: [
      { q: "Can the cushions remain outdoors during rain?", a: "Our loungers use quick-dry open-cell foam and Sunbrella performance fabrics that drain water rapidly and dry quickly." },
      { q: "Is the synthetic wicker chlorine and salt resistant?", a: "Yes, our HDPE wicker is formulated to resist chlorine pools, saltwater ocean mist, and intense tropical UV radiation." },
      { q: "How do I clean the loungers?", a: "Simple pressure wash with mild soap and water keeps them clean. No oils or special varnishes required." },
      { q: "What is the lead time?", a: "Production lead times are 25-30 days from order confirmation." },
      { q: "What is the warranty coverage?", a: "Backed by our 2-Year comprehensive warranty covering frame structural failure and wicker split/fade." }
    ]
  },
  "SS Bollards": {
    filename: "SSBollardsPage.jsx",
    routePath: "products/ss-bollards",
    images: ["benchesImg", "benchesUgc", "benchHero"],
    carouselCards: [
      { tag: "Product Spotlight", h: "Premium Stainless Steel<br />Bollards in India", label: "01", desc: "High-security vehicle barriers & perimeter posts" },
      { tag: "Perimeter Security", h: "Vandal-resistant fixed<br />or removable security<br />bollard systems", label: "02", desc: "Stainless Steel 304 or marine-grade 316" },
      { tag: "B2B Guarantee", h: "2-Year Warranty<br />& ISO Certified<br />Standards", label: "03", desc: "Trusted by airport gates, corporate parks & malls" },
      { tag: "Impact Resistant", h: "Concrete reinforced<br />impact bollards for<br />high-security protection", label: "04", desc: "Engineered to withstand heavy vehicle impacts" },
      { tag: "Bespoke Heights", h: "Custom heights, diameters<br />and LED illuminated<br />head configurations", label: "05", desc: "Tailored to urban smart city guidelines" }
    ],
    reasons: [
      { title: "Premium Steel Grades", desc: "Manufactured in high-yield Stainless Steel 304 or marine-grade 316, ensuring zero rust in coastal or high-pollution cities." },
      { title: "Impact Core Ready", desc: "Internal structural cores can be filled with concrete and rebar to function as heavy-duty anti-ram vehicle barriers." },
      { title: "Removable Options", desc: "Removable variants feature key-lockable sub-surface sleeves, allowing security teams to easily control vehicle access." },
      { title: "ISO Certified QC", desc: "All bollards undergo strict dimensional checks and ultrasonic weld tests to guarantee high structural integrity." }
    ],
    tabs: {
      standard: {
        title: "Standard Fixed Bollard — Surface Anchored",
        ideal: "Pedestrian walkway boundaries, retail shopfronts, residential park paths.",
        features: ["Material: Stainless Steel 304 tube", "Finish: Satin brushed steel finish", "Design: Flat top fixed surface mounted bollard", "Capacity: Standard pedestrian boundary barrier"],
        imgIdx: 1,
        matrix: { dims: "800H × 114D mm (3mm wall)", wt: "12-15 kg", lt: "15-20 days", maint: "Zero (periodic wipe)", life: "10-12 years", custom: "Surface mount anchor flange" }
      },
      premium: {
        title: "Premium Fixed Bollard — Inground Cast Core",
        ideal: "Airport terminals, corporate park entrance gates, shopping mall driveways.",
        features: ["Material: Stainless Steel 316 (coastal marine grade)", "Finish: Mirror polished steel with reflective hazard band", "Design: Domed top inground bollard for concrete casting", "Capacity: Medium-impact security core barrier"],
        imgIdx: 2,
        matrix: { dims: "1000H × 168D mm (4mm wall)", wt: "25-30 kg (empty)", lt: "20-25 days", maint: "Zero", life: "15+ years", custom: "Extended sub-surface casting root" }
      },
      super: {
        title: "Super Premium Bollard — Removable Key-Lockable",
        ideal: "Emergency vehicle lanes, VIP parking zones, municipal plazas.",
        features: ["Material: Heavy-wall SS 316 tube with cast steel ground sleeve", "Finish: Satin brushed steel with integrated LED light head", "Design: Removable lockable bollard with internal locking brass lock", "Tech: Low-voltage LED illuminated head ring"],
        imgIdx: 3,
        matrix: { dims: "900H × 140D mm (5mm wall)", wt: "35 kg (bollard) + 12 kg (sleeve)", lt: "25-35 days", maint: "Annual lock cylinder lube", life: "20+ years", custom: "Sleeve flush ground cover lid" }
      }
    },
    materials: [
      { name: "Stainless Steel 316", life: "20+ years", maint: "Zero maintenance", best: "Coastal & high-humidity beachfronts", cost: "Premium (1.4x vs SS 304)" },
      { name: "Stainless Steel 304", life: "12-15 years", maint: "Periodic wipe", best: "Inland urban smart cities & offices", cost: "Base premium price (1x)" },
      { name: "Mild Steel Powder-Coated", life: "6-8 years", maint: "Annual paint check", best: "Low budget warehouse perimeters", cost: "Economical (0.5x)" }
    ],
    customization: [
      "Diameters: Standard tubes in 76mm, 114mm, 140mm, 168mm, or 219mm",
      "Heights: Customizable heights above ground from 600mm to 1200mm",
      "Head Styles: Flat top, domed top, semi-domed, chamfered edge, or illuminated LED ring",
      "Reflective bands: High-visibility yellow, white, or red hazard tape grooves",
      "Bollard Types: Permanent fixed, removable key-locked, manual collapsible, or sub-surface cast-in roots"
    ],
    projects: [
      { tag: "Nagpur Smart City", subtitle: "Nagpur Municipal Corp", title: "Metro Station Entrances — 300 Fixed SS Bollards", time: "4 months", desc: " Nagpur Smart City authority deployed 300 inground fixed SS 304 bollards across 10 metro station plazas. The concrete-filled bollards provide high-security pedestrian boundary protection." },
      { tag: "Taj Lands End", subtitle: "Taj Hotels — Mumbai", title: "Luxury Hotel Driveway Security — 45 SS Bollards", time: "2 months", desc: "Installed custom mirror-polished SS 316 fixed bollards along the hotel entrance driveway. The marine-grade steel resists beachfront salt spray." },
      { tag: "Tata Green Hills", subtitle: "Tata Realty — Pune", title: "Emergency Fire Lane Gates — 20 Removable Bollards", time: "2 months", desc: "Supplied and installed 20 removable key-locked bollards at emergency fire exits. The sleeve design allows security staff to clear the road rapidly." }
    ],
    stats: { p: "70+", c: "22+", o: "4000+", pLbl: "Security Projects Completed", cLbl: "Cities Served", oLbl: "SS Bollards Delivered" },
    faqList: [
      { q: "What steel grades are available?", a: "We manufacture bollards in Stainless Steel 304 and marine-grade 316. 316 is highly recommended for coastal locations." },
      { q: "What is the difference between fixed and removable bollards?", a: "Fixed bollards are cast deep into concrete for permanent access prevention. Removable bollards use a lockable base sleeve for temporary access." },
      { q: "Are they impact-resistant?", a: "Yes. We build structural core bollards reinforced with concrete cores to provide high-security vehicle barriers." },
      { q: "What is the typical lead time?", a: "Standard SS bollards are manufactured in 20-25 days." },
      { q: "Do you customize heights?", a: "Yes. We offer customized bollard heights from 600mm to 1200mm above ground level." }
    ]
  },
  "Wicker Furniture": {
    filename: "WickerFurniturePage.jsx",
    routePath: "products/wicker-furniture",
    images: ["wickerDiningImg", "wickerLivingImg", "wickerDiningUgc"],
    carouselCards: [
      { tag: "Hospitality Spotlight", h: "Premium Hand-Woven<br />Wicker Outdoor Furniture", label: "01", desc: "Resort-grade synthetic rattan dining and living furniture" },
      { tag: "Terrace Oasis", h: "Weatherproof dining<br />sets, sofas & loungers<br />for resort decks", label: "02", desc: "PE wicker weave over thick aluminium chassis" },
      { tag: "B2B Guarantee", h: "2-Year Warranty<br />& ISO Certified<br />Standards", label: "03", desc: "Trusted by leading hotel chains & real estate developers" },
      { tag: "Extreme Weather", h: "UV-stabilized HDPE<br />weaves that resist fading<br />and heavy monsoon rain", label: "04", desc: "Chlorine and saltwater resistant weaves" },
      { tag: "Bespoke Ensembles", h: "Custom dimensions,<br />colors & performance<br />upholstery fabrics", label: "05", desc: "Tailored to high-end residential outdoor patios" }
    ],
    reasons: [
      { title: "HDPE Synthetic Cane", desc: "Weaved using 100% recyclable High-Density Polyethylene (HDPE) cane, formulated to resist split, fade, mold, and rot." },
      { title: "Aluminium Under-Chassis", desc: "Weaved over thick-walled structural aluminium underframes, ensuring a lightweight, completely rust-proof core." },
      { title: "Performance Fabrics", desc: "Cushion covers use Sunbrella® or outdoor acrylic fabrics, offering premium water repellency and UV colorfastness." },
      { title: "Reticulated Quick-Dry", desc: "Cushion cores are filled with reticulated open-cell foam, allowing monsoon rain to drain out within minutes of downpours." }
    ],
    tabs: {
      standard: {
        title: "Standard Wicker Chair & Table Set — Bistro Style",
        ideal: "Residential balconies, small cafe patios, society clubhouse decks.",
        features: ["Frame: Powder coated steel with PE cane weave", "Fabric: Standard water-resistant polyester", "Design: 2x Armchairs, 1x Circular glass top side table", "Capacity: Standard residential seating load"],
        imgIdx: 1,
        matrix: { dims: "Chair: 600W × 600D × 850H mm", wt: "18 kg (total set)", lt: "25-30 days", maint: "Low (hose down clean)", life: "5-6 years", custom: "None" }
      },
      premium: {
        title: "Premium Wicker Dining Set — Resort Collection",
        ideal: "Hotel rooftop dining, open-air resort restaurants, large villa terraces.",
        features: ["Frame: Structural anodized aluminium under-chassis", "Body Wrap: High-grade HDPE wicker flat weave", "Cushions: 50mm quick-dry foam seat pads with Sunbrella covers", "Design: 6x Dining armchairs, 1x Rectangular dining table (tempered glass top)"],
        imgIdx: 2,
        matrix: { dims: "Table: 1800L × 900W × 750H mm", wt: "65 kg (total set)", lt: "30-45 days", maint: "Seasonal fabric wash", life: "8-10 years", custom: "Tempered glass table top protector" }
      },
      super: {
        title: "Super Premium Modular Sofa Lounge — Island Style",
        ideal: "Luxury beach clubs, resort lobbies, premium executive rooftop decks.",
        features: ["Frame: Heavy structural aluminium wrapped in synthetic PE rope weave", "Body Wrap: Thick round PE wicker or synthetic rope weave", "Cushions: 120mm plush quick-dry foam cushions with modular back pillows", "Design: L-shape modular sofa set (6-seater) with central coffee table"],
        imgIdx: 3,
        matrix: { dims: "Modular L-shape layout", wt: "95 kg (total set)", lt: "40-50 days", maint: "Minimal", life: "12+ years", custom: "Modular link buckles & quick-dry mesh bases" }
      }
    },
    materials: [
      { name: "HDPE Cane + Aluminium", life: "8-10 years", maint: "Zero maintenance", best: "Resorts & commercial dining", cost: "Base premium (1.2x)" },
      { name: "PE Rope + SS 304 Frame", life: "12+ years", maint: "Periodic cleaning", best: "Premium beachfront terraces", cost: "Highest end (2.2x)" },
      { name: "Standard PE Cane + Steel", life: "4-5 years", maint: "Rust check", best: "Budget residential lawns", cost: "Standard (0.8x)" }
    ],
    customization: [
      "Weave types: Flat rattan, round synthetic cane, open basket weave, or vertical outdoor rope weaves",
      "Colors: Wicker available in natural teak, espresso brown, charcoal black, or sand beige shades",
      "Fabrics: Available in 30+ textured solid outdoor acrylic or Sunbrella® canvas colors",
      "Table Tops: Toughened clear glass, frosted glass, solid teak wood slats, or WPC board tops",
      "Configurations: Custom modular seating rows, L-shaped sectional sofas, or large banquette dining setups"
    ],
    projects: [
      { tag: "Taj Exotica Goa", subtitle: "Taj Hotels — Goa", title: "Rooftop Cafeteria Deck — 25 Wicker Dining Sets", time: "3 months", desc: " taj Hotels partnered with Urbanland to manufacture and deploy 25 premium wicker dining sets for their open-air oceanfront cafe. The aluminium frames and HDPE weaves successfully withstand Goan humidity." },
      { tag: "Prestige Golfshire", subtitle: "Prestige Group — Bangalore", title: "Clubhouse Terrace — 15 Wicker Lounge Ensembles", time: "2 months", desc: "Installed custom modular wicker sectional sofas around the central golf clubhouse deck. The reticulated quick-dry foam cushions ensure seating is dry and usable within minutes of rain." },
      { tag: "Oberoi Beach Resort", subtitle: "Oberoi Group — Mumbai", title: "VIP Poolside Deck — 10 Custom Daybed Cabanas", time: "2 months", desc: "Manufactured and installed 10 bespoke circular wicker loungers for a VIP poolside lounge area. Rear roller wheels enable staff to easily adjust configurations." }
    ],
    stats: { p: "45+", c: "12+", o: "600+", pLbl: "Hotel & Resort Terraces", cLbl: "Cities Served", oLbl: "Wicker Dining Sets Delivered" },
    faqList: [
      { q: "Can wicker products be left outdoors year-round?", a: "Yes. Our synthetic wicker is UV-rated for 3000+ hours, and frame bases are rust-proof, allowing year-round outdoor placement." },
      { q: "What makes HDPE wicker superior to natural cane?", a: "HDPE wicker does not rot, crack, peel, or host pests, whereas natural cane degrades quickly under sunlight and moisture." },
      { q: "Can I choose custom fabric colors?", a: "Yes, we offer a select range of 30+ solid and textured outdoor fabric colors." },
      { q: "What is the lead time?", a: "Lead times are 30-45 days depending on design selection." },
      { q: "Do you provide delivery across India?", a: "Yes, we ship safely to commercial, resort, and residential sites nationwide." }
    ]
  },
  "Wicker Outdoor Products": {
    filename: "WickerOutdoorProductsPage.jsx",
    routePath: "products/wicker-outdoor-products",
    images: ["wickerDiningImg", "wickerLivingImg", "wickerDiningUgc"],
    carouselCards: [
      { tag: "Hospitality Spotlight", h: "Premium Hand-Woven<br />Wicker Outdoor Products", label: "01", desc: "Resort-grade synthetic rattan dining and living furniture" },
      { tag: "Terrace Oasis", h: "Weatherproof dining<br />sets, sofas & loungers<br />for resort decks", label: "02", desc: "PE wicker weave over thick aluminium chassis" },
      { tag: "B2B Guarantee", h: "2-Year Warranty<br />& ISO Certified<br />Standards", label: "03", desc: "Trusted by leading hotel chains & real estate developers" },
      { tag: "Extreme Weather", h: "UV-stabilized HDPE<br />weaves that resist fading<br />and heavy monsoon rain", label: "04", desc: "Chlorine and saltwater resistant weaves" },
      { tag: "Bespoke Ensembles", h: "Custom dimensions,<br />colors & performance<br />upholstery fabrics", label: "05", desc: "Tailored to high-end residential outdoor patios" }
    ],
    reasons: [
      { title: "HDPE Synthetic Cane", desc: "Weaved using 100% recyclable High-Density Polyethylene (HDPE) cane, formulated to resist split, fade, mold, and rot." },
      { title: "Aluminium Under-Chassis", desc: "Weaved over thick-walled structural aluminium underframes, ensuring a lightweight, completely rust-proof core." },
      { title: "Performance Fabrics", desc: "Cushion covers use Sunbrella® or outdoor acrylic fabrics, offering premium water repellency and UV colorfastness." },
      { title: "Reticulated Quick-Dry", desc: "Cushion cores are filled with reticulated open-cell foam, allowing monsoon rain to drain out within minutes of downpours." }
    ],
    tabs: {
      standard: {
        title: "Standard Wicker Chair & Table Set — Bistro Style",
        ideal: "Residential balconies, small cafe patios, society clubhouse decks.",
        features: ["Frame: Powder coated steel with PE cane weave", "Fabric: Standard water-resistant polyester", "Design: 2x Armchairs, 1x Circular glass top side table", "Capacity: Standard residential seating load"],
        imgIdx: 1,
        matrix: { dims: "Chair: 600W × 600D × 850H mm", wt: "18 kg (total set)", lt: "25-30 days", maint: "Low (hose down clean)", life: "5-6 years", custom: "None" }
      },
      premium: {
        title: "Premium Wicker Dining Set — Resort Collection",
        ideal: "Hotel rooftop dining, open-air resort restaurants, large villa terraces.",
        features: ["Frame: Structural anodized aluminium under-chassis", "Body Wrap: High-grade HDPE wicker flat weave", "Cushions: 50mm quick-dry foam seat pads with Sunbrella covers", "Design: 6x Dining armchairs, 1x Rectangular dining table (tempered glass top)"],
        imgIdx: 2,
        matrix: { dims: "Table: 1800L × 900W × 750H mm", wt: "65 kg (total set)", lt: "30-45 days", maint: "Seasonal fabric wash", life: "8-10 years", custom: "Tempered glass table top protector" }
      },
      super: {
        title: "Super Premium Modular Sofa Lounge — Island Style",
        ideal: "Luxury beach clubs, resort lobbies, premium executive rooftop decks.",
        features: ["Frame: Heavy structural aluminium wrapped in synthetic PE rope weave", "Body Wrap: Thick round PE wicker or synthetic rope weave", "Cushions: 120mm plush quick-dry foam cushions with modular back pillows", "Design: L-shape modular sofa set (6-seater) with central coffee table"],
        imgIdx: 3,
        matrix: { dims: "Modular L-shape layout", wt: "95 kg (total set)", lt: "40-50 days", maint: "Minimal", life: "12+ years", custom: "Modular link buckles & quick-dry mesh bases" }
      }
    },
    materials: [
      { name: "HDPE Cane + Aluminium", life: "8-10 years", maint: "Zero maintenance", best: "Resorts & commercial dining", cost: "Base premium (1.2x)" },
      { name: "PE Rope + SS 304 Frame", life: "12+ years", maint: "Periodic cleaning", best: "Premium beachfront terraces", cost: "Highest end (2.2x)" },
      { name: "Standard PE Cane + Steel", life: "4-5 years", maint: "Rust check", best: "Budget residential lawns", cost: "Standard (0.8x)" }
    ],
    customization: [
      "Weave types: Flat rattan, round synthetic cane, open basket weave, or vertical outdoor rope weaves",
      "Colors: Wicker available in natural teak, espresso brown, charcoal black, or sand beige shades",
      "Fabrics: Available in 30+ textured solid outdoor acrylic or Sunbrella® canvas colors",
      "Table Tops: Toughened clear glass, frosted glass, solid teak wood slats, or WPC board tops",
      "Configurations: Custom modular seating rows, L-shaped sectional sofas, or large banquette dining setups"
    ],
    projects: [
      { tag: "Taj Exotica Goa", subtitle: "Taj Hotels — Goa", title: "Rooftop Cafeteria Deck — 25 Wicker Dining Sets", time: "3 months", desc: " taj Hotels partnered with Urbanland to manufacture and deploy 25 premium wicker dining sets for their open-air oceanfront cafe. The aluminium frames and HDPE weaves successfully withstand Goan humidity." },
      { tag: "Prestige Golfshire", subtitle: "Prestige Group — Bangalore", title: "Clubhouse Terrace — 15 Wicker Lounge Ensembles", time: "2 months", desc: "Installed custom modular wicker sectional sofas around the central golf clubhouse deck. The reticulated quick-dry foam cushions ensure seating is dry and usable within minutes of rain." },
      { tag: "Oberoi Beach Resort", subtitle: "Oberoi Group — Mumbai", title: "VIP Poolside Deck — 10 Custom Daybed Cabanas", time: "2 months", desc: "Manufactured and installed 10 bespoke circular wicker loungers for a VIP poolside lounge area. Rear roller wheels enable staff to easily adjust configurations." }
    ],
    stats: { p: "45+", c: "12+", o: "600+", pLbl: "Hotel & Resort Terraces", cLbl: "Cities Served", oLbl: "Wicker Dining Sets Delivered" },
    faqList: [
      { q: "Can wicker products be left outdoors year-round?", a: "Yes. Our synthetic wicker is UV-rated for 3000+ hours, and frame bases are rust-proof, allowing year-round outdoor placement." },
      { q: "What makes HDPE wicker superior to natural cane?", a: "HDPE wicker does not rot, crack, peel, or host pests, whereas natural cane degrades quickly under sunlight and moisture." },
      { q: "Can I choose custom fabric colors?", a: "Yes, we offer a select range of 30+ solid and textured outdoor fabric colors." },
      { q: "What is the lead time?", a: "Lead times are 30-45 days depending on design selection." },
      { q: "Do you provide delivery across India?", a: "Yes, we ship safely to commercial, resort, and residential sites nationwide." }
    ]
  }
};

// Function to extract parsed sections from text
function parseDocxContent(txt) {
  const sections = {};
  const lines = txt.split('\n').map(l => l.trim()).filter(Boolean);

  sections.metaTitle = lines.find(l => l.startsWith("Meta Title:"))?.replace("Meta Title:", "").trim() || "";
  sections.metaDesc = lines.find(l => l.startsWith("Meta Description:"))?.replace("Meta Description:", "").trim() || "";

  const h1Index = lines.findIndex(l => l.toLowerCase().includes("h1 heading") || l.toLowerCase().includes("main heading"));
  sections.h1 = h1Index !== -1 ? lines[h1Index + 1] : "Premium Outdoor Products";

  const subIndex = lines.findIndex(l => l.toLowerCase().includes("sub-headline"));
  sections.subHeadline = subIndex !== -1 ? lines[subIndex + 1] : "Premium urban architectural designs.";

  const benefitsIndex = lines.findIndex(l => l.toLowerCase().includes("section 1:"));
  const benefits = [];
  if (benefitsIndex !== -1) {
    let cursor = benefitsIndex + 2;
    while (cursor < lines.length && benefits.length < 5 && !lines[cursor].startsWith("Section 2:")) {
      const line = lines[cursor];
      const parts = line.split(/(\s{2,}|\t|:\s|\s-\s)/);
      if (parts.length >= 2) {
        const title = parts[0].trim();
        const desc = parts.slice(1).join("").trim();
        benefits.push({ title, desc });
      } else {
        benefits.push({ title: line, desc: "Premium engineering and architectural finish." });
      }
      cursor++;
    }
  }
  sections.benefits = benefits;

  const s2Index = lines.findIndex(l => l.toLowerCase().includes("section 2:"));
  const introParagraphs = [];
  if (s2Index !== -1) {
    let cursor = s2Index + 2;
    while (cursor < lines.length && !lines[cursor].startsWith("Section 3:")) {
      if (!lines[cursor].toLowerCase().includes("h2 heading")) {
        introParagraphs.push(lines[cursor]);
      }
      cursor++;
    }
  }
  sections.introCopy = introParagraphs.join("\n\n");

  const s3Index = lines.findIndex(l => l.toLowerCase().includes("section 3:"));
  const featuresList = [];
  const customizationOptions = [];
  if (s3Index !== -1) {
    let cursor = s3Index + 2;
    let mode = 'features';
    while (cursor < lines.length && !lines[cursor].startsWith("Section 4:")) {
      const line = lines[cursor];
      if (line.toLowerCase().includes("customization options")) {
        mode = 'options';
      } else if (line.startsWith("-") || line.startsWith("•") || line.startsWith("✓") || /^[0-9]/.test(line)) {
        const cleanLine = line.replace(/^[-•✓\d.]\s*/, "");
        if (mode === 'features') {
          featuresList.push(cleanLine);
        } else {
          customizationOptions.push(cleanLine);
        }
      } else if (!line.toLowerCase().includes("h2 heading") && !line.toLowerCase().includes("key features") && !line.toLowerCase().includes("material comparison")) {
        if (mode === 'features') {
          featuresList.push(line);
        } else {
          customizationOptions.push(line);
        }
      }
      cursor++;
    }
  }
  sections.features = featuresList.slice(0, 6);
  sections.options = customizationOptions.slice(0, 6);

  const s4Index = lines.findIndex(l => l.toLowerCase().includes("section 4:"));
  sections.projectsStat = "50+ major projects delivered | 15+ cities served";
  if (s4Index !== -1) {
    const statLine = lines[s4Index + 2];
    if (statLine && statLine.includes("|")) {
      sections.projectsStat = statLine;
    }
  }

  return sections;
}

// Generate template matching Bus Shelter structure exactly
function generateTemplate(pageName, config, parsed) {
  const componentName = pageName.replace(/\s+/g, "") + "Page";

  return `import React, { useEffect } from "react";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

const ${componentName} = () => {
    useEffect(() => {
        updatePageSEO({
            title: "${parsed.metaTitle || (pageName + ' | Urbanland')}",
            description: "${parsed.metaDesc || 'Premium outdoor and municipal solutions'}",
            og_type: "product"
        });
        return () => cleanPageSEO();
    }, []);

    return (
        <div className="w-full min-h-[60vh] bg-surface flex items-center justify-center">
            {/* Just header and footer will be present */}
        </div>
    );
};

export default ${componentName};
`;
}

// Generate the files
const localSummaryPath = "C:/Users/ks209/Documents/kawaki clients/urbanland/urbanv2-main/urbanv2-main/frontend/src/constants/docx_content_summary.txt";
const relativeSummaryPath = path.join(__dirname, "docx_content_summary.txt");
const summaryPath = fs.existsSync(localSummaryPath) ? localSummaryPath : relativeSummaryPath;

const fileText = fs.readFileSync(summaryPath, 'utf8');
const docxBlocks = fileText.split("=== FILE: ");

const localProductsBaseDir = "C:/Users/ks209/Documents/kawaki clients/urbanland/urbanv2-main/urbanv2-main/frontend/src/pages/Products";
const relativeProductsBaseDir = path.join(__dirname, "../pages/Products");
const productsBaseDir = fs.existsSync(localProductsBaseDir) ? localProductsBaseDir : relativeProductsBaseDir;

docxBlocks.forEach(block => {
  const lines = block.split('\n');
  const firstLine = lines[0];
  if (!firstLine) return;
  const pageName = firstLine.replace(".docx ===", "").replace(" ===", "").trim();
  const config = pageConfigs[pageName];
  if (!config) {
    console.log(`Skipping: ${pageName} (not mapped)`);
    return;
  }

  const blockText = lines.slice(1).join('\n');
  const parsed = parseDocxContent(blockText);
  const code = generateTemplate(pageName, config, parsed);

  const targetPath = path.join(productsBaseDir, config.filename);
  fs.writeFileSync(targetPath, code, 'utf8');
  console.log(`Successfully generated: ${config.filename}`);
});
