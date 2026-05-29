import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProducts } from "../../lib/wp";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import static products list to dynamically fetch category images
import { products as staticProducts } from "../../constants/productsData";

// Premium Dustbins Generated Studio Images
import nanukNextImg from "../../assets/products/Product Images/Dustbins/nanuk_next.png";
import skylineImg from "../../assets/products/Product Images/Dustbins/skyline.png";
import tleskImg from "../../assets/products/Product Images/Dustbins/tlesk.png";
import sortCorrugatedImg from "../../assets/products/Product Images/Dustbins/sort_corrugated.png";
import ribbedConcreteImg from "../../assets/products/Product Images/Dustbins/ribbed_concrete.png";
import greenSleekColumnImg from "../../assets/products/Product Images/Dustbins/green_sleek_column.png";
import charcoalTripleSortingImg from "../../assets/products/Product Images/Dustbins/charcoal_triple_sorting.png";

gsap.registerPlugin(ScrollTrigger);

// Metadata specifications for dynamic catalog templates
const categoriesMeta = {
  "bench-planters": {
    title: "Bench Planters",
    tagline: "Integrated WPC seating & concrete planter boxes.",
    description: "Designed to combine architectural seating with built-in planter islands. Perfect for shopping mall corridors, municipal streetscapes, and university plazas where public space is premium.",
    materials: "FSC certified WPC wood slats, GFRC concrete mix, stainless steel frame.",
    durability: "Class C4 corrosion protection coating, waterproof sealant layers.",
    installation: "Surface flanged concrete anchoring, or free-standing placement."
  },
  "benches": {
    title: "Outdoor Benches",
    tagline: "Ergonomic and highly durable outdoor seating systems.",
    description: "Sleek outdoor benches featuring cast iron or structural steel frames cladded in organic timber or WPC slats. Engineered for extreme outdoor conditions, comfort, and longevity.",
    materials: "Galvanized steel frames, FSC Robinia, Jatoba, or WPC slats.",
    durability: "Anti-corrosion powder coatings, UV-resistant wood/WPC protection.",
    installation: "Sub-surface anchoring or surface concrete bolt-down."
  },
  "bus-shelters": {
    title: "Bus Shelters",
    tagline: "Smart transit stop canopies with premium structural finishes.",
    description: "Hot-dip galvanized steel structures with safety glass panels, solar capabilities, and comfortable integrated seating. Engineered for high wind loads and public durability.",
    materials: "Structural steel column chassis, Toughened Safety Glass wind guards.",
    durability: "Class C5 marine-grade protection, 20+ years service life.",
    installation: "Sub-surface concrete embedding with heavy anchor cage hooks."
  },
  "cabanas": {
    title: "Luxury Cabanas",
    tagline: "Shaded luxury outdoor daybeds for premium resorts.",
    description: "Features durable steel structure wrapped with outdoor cushions and curtains. Provides intimate, private relaxation spaces for luxury hospitality decks and rooftops.",
    materials: "Powder coated steel framing, FSC timber slats, Sunbrella® outdoor fabrics.",
    durability: "Saltwater mist and chlorine resistant, quick-dry padding.",
    installation: "Free-standing or deck-bolted layout configurations."
  },
  "canteen-tables": {
    title: "Canteen Tables & Sets",
    tagline: "Integrated table and bench configurations for high-traffic zones.",
    description: "The Morse series provides extreme structural durability using galvanized powder-coated frames and low-maintenance HPL slats. Perfect for corporate cafes and school courtyards.",
    materials: "Laser-cut galvanized steel chassis, 12mm exterior grade HPL slats.",
    durability: "Vandal-resistant assembly, double powder coating protection.",
    installation: "Surface concrete expansion bolts, or free-standing layouts."
  },
  "car-shelters": {
    title: "Car Shelters",
    tagline: "Cantilever structural steel shelters for premium vehicle coverage.",
    description: "Engineered to shield vehicles from heavy sun, rain, and hail. Standard double-car bays feature PVDF-coated fabrics or metal decking, ready for solar and EV charger integration.",
    materials: "Heavy structural H-beams, high-tensile PVDF membranes or metal decks.",
    durability: "High wind-load engineering, UV-resistant self-cleaning membranes.",
    installation: "Reinforced concrete footing cages with chemical anchors."
  },
  "dustbins": {
    title: "Litter & Recycling Bins",
    tagline: "Robust waste segregation containers for public spaces.",
    description: "Galvanized steel and WPC timber dustbins with distinct locks, labels, and rain hoods. Ideal for smart cities, corporate lawns, and parks.",
    materials: "Textured powder coated steel, Grade 304/316 Stainless Steel lids.",
    durability: "Anti-vandalism cylinder locks, fire-safe internal liners.",
    installation: "Internal flange anchoring to concrete pathways."
  },
  "gazebos": {
    title: "Premium Gazebos",
    tagline: "Pre-engineered wooden pavilions for luxury gardens.",
    description: "FSC certified hardwood framing combined with premium metal joints. Perfect for residential farmhouses, resort lawns, and outdoor dining patios.",
    materials: "FSC Robinia or Teak framing, high-strength structural steel joints.",
    durability: "Anti-fungal and moisture-resistant wood treatments.",
    installation: "Surface mounted bracket flanges onto patio decks or slabs."
  },
  "pergolas": {
    title: "Architectural Pergolas",
    tagline: "High-tension structural shade pergolas.",
    description: "Sculptural tensioned sail and louvered structures designed to create visually striking shaded pathways and plazas. UV-stable polymer sail material.",
    materials: "HDPE polymer shade cloth, hot-dip galvanized steel columns.",
    durability: "UV test certified to 3000+ hours, extreme tension resistance.",
    installation: "Deep foundation chemical concrete anchor bolting."
  },
  "planters": {
    title: "GFRC Planters",
    tagline: "Architectural concrete planting pots for public spaces.",
    description: "Double-walled insulated concrete container systems designed to nurture large trees and shrubs in urban environments. Easy relocation slots.",
    materials: "GFRC concrete mix, waterproof interior sealants, foam insulation core.",
    durability: "Frost resistant, internally sealed waterproof layers.",
    installation: "Free-standing layout on integrated leveling pads."
  },
  "poolside-loungers": {
    title: "Poolside Loungers",
    tagline: "Resort-grade synthetic wicker sun loungers.",
    description: "Rust-free aluminum frames wrapped in hand-woven HDPE weather-proof wicker. Quick-dry foam cushions ensure premium comfort by the pool.",
    materials: "Aluminum tube framing, HDPE synthetic wicker weave, quick-dry foam.",
    durability: "UV and chlorine proof, saltwater mist resistant.",
    installation: "Free-standing layout with non-marking glides."
  },
  "pre-fab-homes": {
    title: "Pre Fab Homes",
    tagline: "Eco-friendly premium pre-fabricated modular rooms.",
    description: "Thermally insulated structural steel chassis cladded in WPC composites. Installs in under 48 hours for resort cottages, home offices, and eco-sensitive zones.",
    materials: "Galvanized structural steel, premium Eco WPC paneling.",
    durability: "Severe weather insulated framing, fire-resistant materials.",
    installation: "Helical pile anchors or simple concrete slab foundations."
  },
  "wicker-dining-sets": {
    title: "Wicker Dining Sets",
    tagline: "Luxury dining sets engineered for outdoor durability.",
    description: "Premium outdoor dining configurations made of hand-woven synthetic wicker strands. Resistant to chlorine, water, and sun, with Sunbrella® fabrics.",
    materials: "Extruded aluminum frames, HDPE wicker strands, tempered safety glass.",
    durability: "100% rust-free, colorfast weather-proof fibers.",
    installation: "Free-standing layout with adjustable leg levelers."
  },
  "wicker-living-sets": {
    title: "Wicker Living Sets",
    tagline: "Cinematic outdoor wicker seating & lounge configurations.",
    description: "Beautifully crafted wicker modular sofas and armchairs. High-density foam cushions covered with weather-proof, water-repellent performance upholstery.",
    materials: "HDPE synthetic wicker weave, aluminum frames, Sunbrella® canvas.",
    durability: "Water-repellent cushions, 10+ years UV protection weave.",
    installation: "Free-standing layout with modular connector clips."
  }
};

// Spiky New Badge component
const SpikyNewBadge = ({ text = "NEW" }) => (
  <div className="absolute top-6 right-6 w-11 h-11 select-none animate-pulse z-10">
    <svg viewBox="0 0 100 100" className="w-full h-full fill-[#FF5722] drop-shadow-md">
      <path d="M50 0 L58 35 L93 15 L70 45 L100 50 L70 55 L93 85 L58 65 L50 100 L42 65 L7 85 L30 55 L0 50 L30 45 L7 15 L42 35 Z" />
      <text x="50" y="56" textAnchor="middle" fill="white" fontSize="16" fontWeight="900" fontFamily="Outfit">
        {text}
      </text>
    </svg>
  </div>
);

// 7 Premium Dustbin Models
const premiumDustbins = [
  {
    id: "nanuk-next",
    title: "NANUK NEXT",
    description: "Sleek wooden waste bin cladded in warm vertical WPC wood slats with a lockable black steel lid. Includes a vibrant red companion, combining structural warmth with contemporary minimalist styling.",
    image: nanukNextImg,
    badge: "NEW",
    size: "md:col-span-1",
    url: "/get-quote/?product=nanuk-next"
  },
  {
    id: "skyline",
    title: "SKYLINE",
    description: "Architectural sorting station cladded in premium Robinia timber with a warm yellow powder-coated frame. Paired with a double perforated sorting bin with distinct lids.",
    image: skylineImg,
    badge: "NEW",
    size: "md:col-span-2",
    url: "/get-quote/?product=skyline"
  },
  {
    id: "tlesk",
    title: "TLESK",
    description: "Vibrant yellow and electric blue wireframe cage litter bins with integrated cylindrical liners, bringing playful artistic curves and structural transparency to urban plazas.",
    image: tleskImg,
    badge: "NEW",
    size: "md:col-span-1",
    url: "/get-quote/?product=tlesk"
  },
  {
    id: "korton-triple",
    title: "KORTON TRIPLE",
    description: "Heavy-gauge three-compartment sorting station featuring corrugated steel sheets and distinct color-coded collection ports for optimized municipal recycling.",
    image: sortCorrugatedImg,
    badge: "POPULAR",
    size: "md:col-span-2",
    url: "/get-quote/?product=korton-triple"
  },
  {
    id: "ribbed-circular",
    title: "RIBBED CIRCULAR",
    description: "Round public litter bin featuring a ribbed steel and concrete casing, accented with warm vertical timber slats and a polished stainless steel crown.",
    image: ribbedConcreteImg,
    badge: "POPULAR",
    size: "md:col-span-2",
    url: "/get-quote/?product=ribbed-circular"
  },
  {
    id: "ecologo-column",
    title: "ECOLOGO COLUMN",
    description: "Sleek, slimline steel sorting column with a vibrant green accent panel and circular anti-rain disposal aperture.",
    image: greenSleekColumnImg,
    badge: null,
    size: "md:col-span-1",
    url: "/get-quote/?product=ecologo-column"
  },
  {
    id: "sigma-triple",
    title: "SIGMA TRIPLE",
    description: "Minimalist dark charcoal stainless steel sorting bin with color-coded labels (plastic, paper, other) for corporate parks.",
    image: charcoalTripleSortingImg,
    badge: "NEW",
    size: "md:col-span-2",
    url: "/get-quote/?product=sigma-triple"
  }
];

const CategoryDetail = () => {
  const { category: rawCategory, subcategory } = useParams();
  
  // Normalize category ID to one of the 14 new identifiers
  const category = rawCategory === "outdoor-dustbins" || rawCategory === "dustbins" ? "dustbins"
                 : rawCategory === "wpc-benches" ? "benches"
                 : rawCategory === "canteen-furniture" ? "canteen-tables"
                 : rawCategory === "car-parking-sheds" || rawCategory === "car-sheds" ? "car-shelters"
                 : rawCategory === "poolside-furniture" ? "poolside-loungers"
                 : rawCategory === "gazebo" ? "gazebos"
                 : rawCategory === "parabola" ? "pergolas"
                 : rawCategory === "wicker-furniture" ? "wicker-living-sets"
                 : rawCategory;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  // Fallback metadata for undefined parameters
  const meta = categoriesMeta[category] || {
    title: category ? category.charAt(0).toUpperCase() + category.slice(1) : "Collection Detail",
    tagline: "Premium urban architecture solutions.",
    description: "Discover our high-durability street furniture components designed to elevate community interactions and stand the test of time.",
    image: colimg1,
    materials: "Structural Grade Galvanized Steel, FSC Timbers.",
    durability: "Engineered for high-traffic public exposure.",
    installation: "Concealed chemical anchoring components."
  };

  useEffect(() => {
    let active = true;
    const loadCategoryProducts = async () => {
      setLoading(true);
      try {
        const allProds = await fetchProducts();
        
        // Filter by Category
        let filtered = allProds.filter((p) => p.category === category);
        
        // Filter by Subcategory if provided
        if (subcategory) {
          const materialKeyword = subcategory.split("-")[0]; // e.g. "wpc", "aluminium", "gfrc", "wicker", "cane"
          filtered = filtered.filter((p) => {
            const desc = (p.description || "").toLowerCase();
            const mat = (p.specifications?.materials || "").toLowerCase();
            const ttl = (p.title || "").toLowerCase();
            return desc.includes(materialKeyword) || mat.includes(materialKeyword) || ttl.includes(materialKeyword);
          });
        }

        // If category is "benches" but WooCommerce returned empty list, fall back manually
        if (filtered.length === 0) {
          filtered = allProds.filter((p) => {
            const catLower = category.replace("-", " ");
            const pCat = (p.category || "").toLowerCase();
            const pTtl = (p.title || "").toLowerCase();
            return pCat.includes(catLower) || pTtl.includes(catLower) || pTtl.includes(category.slice(0, -1));
          });
        }

        if (active) {
          setProducts(filtered);
        }
      } catch (err) {
        console.error("Error loading category products:", err);
      } finally {
        if (active) setLoading(false);
      }
    };

    loadCategoryProducts();
    
    // Set SEO
    const pageTitle = subcategory
      ? `${subcategory.replace("-", " ").toUpperCase()} | ${meta.title} Division`
      : `${meta.title} Division | Premium Street Furniture`;
    updatePageSEO({
      title: `${pageTitle} | Urbanland Products`,
      description: meta.description,
      og_image: meta.image
    });

    return () => {
      active = false;
      cleanPageSEO();
    };
  }, [category, subcategory, meta]);

  // Google Font Outfit dynamic loading
  useEffect(() => {
    let fontLink = document.getElementById("google-font-outfit");
    if (!fontLink) {
        fontLink = document.createElement("link");
        fontLink.id = "google-font-outfit";
        fontLink.rel = "preconnect";
        fontLink.href = "https://fonts.googleapis.com";
        document.head.appendChild(fontLink);

        const fontLink2 = document.createElement("link");
        fontLink2.rel = "stylesheet";
        fontLink2.href = "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap";
        document.head.appendChild(fontLink2);
    }
  }, []);

  // GSAP animation reveal trigger
  useGSAP(() => {
    if (products.length > 0) {
      gsap.fromTo(
        ".catalog-card",
        { scale: 0.95, opacity: 0, y: 40 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".products-grid-container",
            start: "top 80%",
          }
        }
      );
    }
  }, { scope: containerRef, dependencies: [products] });

  return (
    <div ref={containerRef} className="w-full bg-[#F7F4EF] text-[#1A1A1A] pb-24 overflow-x-hidden pt-32 font-outfit">
      
      {/* Dynamic Font Styling Overrides */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
        .font-outfit {
          font-family: 'Outfit', sans-serif !important;
        }
      `}} />

      {/* Breadcrumb path */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-4 flex items-center select-none text-[10px] font-bold uppercase tracking-widest text-[#2D2D2D]/55 font-outfit">
        <Link to="/" className="hover:text-[#2C5F2E] transition-colors">Home</Link>
        <span className="mx-1.5">/</span>
        <Link to="/products" className="hover:text-[#2C5F2E] transition-colors">Products</Link>
        <span className="mx-1.5">/</span>
        <span className="text-[#2D2D2D]/85">{meta.title}</span>
        {subcategory && (
          <>
            <span className="mx-1.5">/</span>
            <span className="text-[#2C5F2E]">{subcategory.replace("-", " ")}</span>
          </>
        )}
      </section>

      {/* Hero Banner Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16">
        <div className="w-full aspect-[21/9] md:aspect-[24/9] rounded-[2.5rem] overflow-hidden bg-black/5 relative shadow-xl border border-[#C9A84C]/15">
          <img
            src={meta.image}
            alt={meta.title}
            className="w-full h-full object-cover select-none brightness-95 transform hover:scale-[1.01] transition-transform duration-[10s]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/45 flex flex-col justify-end p-8 md:p-12 text-white">
            <span className="text-[9px] font-black uppercase tracking-wider bg-[#C9A84C] text-[#232120] px-3.5 py-1.5 rounded-full w-fit mb-3">
              {subcategory ? subcategory.replace("-", " ").toUpperCase() : "Active Division"}
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase leading-none tracking-tight max-w-4xl font-outfit">
              {meta.title}
            </h1>
            <p className="text-xs sm:text-sm font-medium tracking-wide text-white/80 mt-3 max-w-2xl leading-relaxed font-outfit">
              {meta.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Division Description and Engineering Specs Split */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 font-outfit">
        <div>
          <h2 className="text-sm font-black uppercase tracking-widest text-[#2C5F2E] mb-4 font-outfit">— DIVISION OVERVIEW</h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#2D2D2D]/85 font-medium">
            {meta.description}
          </p>
        </div>
        
        {/* Specs Box Card */}
        <div className="bg-white rounded-[2rem] border border-[#C9A84C]/25 p-8 flex flex-col gap-5 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h3 className="text-xs font-black uppercase tracking-widest text-[#2C5F2E] mb-2 font-outfit">— ENGINEERING SPECIFICATIONS</h3>
          
          <div className="flex flex-col gap-1 pb-3 border-b border-black/[0.05]">
            <span className="text-[9px] font-bold uppercase tracking-wider text-black/45">Core Materials</span>
            <span className="text-xs sm:text-sm font-bold text-black/85">{meta.materials}</span>
          </div>
          <div className="flex flex-col gap-1 pb-3 border-b border-black/[0.05]">
            <span className="text-[9px] font-bold uppercase tracking-wider text-black/45">Lifespan & Protection</span>
            <span className="text-xs sm:text-sm font-bold text-black/85">{meta.durability}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[9px] font-bold uppercase tracking-wider text-black/45">Installation Framework</span>
            <span className="text-xs sm:text-sm font-bold text-black/85">{meta.installation}</span>
          </div>
        </div>
      </section>

      {/* FEATURED SIGNATURE DUSTBINS BENTO GRID (Visible only when category is 'dustbins') */}
      {category === "dustbins" && (
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24 font-outfit">
          <div className="text-left mb-12 border-b border-[#2D2D2D]/10 pb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-2 block">— SIGNATURE DESIGN</span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#1A1A1A] leading-none">
                Featured Masterpieces
              </h2>
              <p className="text-sm text-[#2D2D2D]/75 mt-3 max-w-2xl leading-relaxed">
                Redefining smart waste sorting with architectural beauty. Explore our most-specified litter bin models featuring sustainably sourced FSC® tropical timber, premium Akzonobel coatings, and modular compartments.
              </p>
            </div>
            <Link 
              to="/get-quote/?product=litter-bins"
              className="px-6 py-3.5 bg-[#2C5F2E] hover:bg-black text-white rounded-full font-black uppercase tracking-wider text-[10px] shadow-lg transition-all shrink-0 w-full sm:w-auto text-center"
            >
              Request Bulk Proposal →
            </Link>
          </div>

          {/* 4-Column Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {premiumDustbins.map((bin) => (
              <div
                key={bin.id}
                className={`${bin.size} bg-white rounded-[2.5rem] p-8 border border-black/[0.03] shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:-translate-y-1.5 transition-all duration-500 relative flex flex-col justify-between overflow-hidden group min-h-[480px]`}
              >
                {/* Spiky starburst badge */}
                {bin.badge && <SpikyNewBadge text={bin.badge} />}

                {/* Product Image Panel */}
                <div className="flex-1 w-full flex justify-center items-center overflow-hidden relative select-none min-h-[220px]">
                  <img
                    src={bin.image}
                    alt={bin.title}
                    className="max-h-[85%] max-w-[85%] object-contain select-none transform group-hover:scale-104 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Text Panel */}
                <div className="mt-6 border-t border-black/[0.04] pt-6 flex flex-col justify-between z-10 bg-white">
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tight text-[#1A1A1A] leading-tight mb-2 font-outfit">
                      {bin.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#2D2D2D]/70 leading-relaxed mb-6 font-medium">
                      {bin.description}
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center select-none pt-2">
                    <Link
                      to={bin.url}
                      className="text-[10px] font-black uppercase tracking-wider text-[#2C5F2E] hover:text-black transition-colors block border-b border-[#2C5F2E]/20 pb-0.5"
                    >
                      Request Custom Quote →
                    </Link>
                    
                    <span className="text-[9px] uppercase tracking-wider text-black/40 font-bold bg-[#F7F4EF] px-3 py-1.5 rounded-full select-none">
                      Outfit Specs Included
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Dynamic Products Grid Section (Other Available Models) */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 products-grid-container font-outfit">
        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#1A1A1A] mb-8 border-b border-[#2D2D2D]/10 pb-4 select-none font-outfit">
          {category === "dustbins" ? "Other Standard Models in this Division:" : "Available Models in this Division:"}
        </h2>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="aspect-[4/5] bg-white rounded-[2rem] p-8 flex flex-col justify-between items-stretch animate-pulse shadow-sm border border-black/[0.02]">
                <div className="h-6 w-32 bg-black/10 rounded-md" />
                <div className="flex-1 my-6 bg-black/[0.03] rounded-2xl" />
                <div className="h-5 w-24 bg-black/10 rounded-md" />
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="w-full py-20 flex flex-col justify-center items-center text-center bg-white rounded-[2.5rem] border border-black/[0.03] p-8 shadow-sm">
            <svg className="w-12 h-12 text-[#2D2D2D]/40 mb-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <p className="text-sm font-semibold text-[#2D2D2D]/60 max-w-sm">No specific models registered under this exact category parameters yet.</p>
            <Link to="/products" className="px-5 py-2.5 bg-[#2C5F2E] text-white rounded-full font-bold uppercase tracking-wider text-[10px] mt-6 hover:bg-[#2D2D2D] transition-colors">
              Browse Directory
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="catalog-card bg-white rounded-[2rem] p-8 flex flex-col justify-between items-stretch aspect-[4/5] border border-black/[0.03] shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:-translate-y-1 transition-all duration-500 group cursor-pointer no-underline block w-full max-w-[350px]"
              >
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-xl sm:text-2xl font-light text-[#1A1A1A] tracking-tight group-hover:text-black transition-colors leading-tight">
                    {product.title}
                  </h3>
                  <div className="flex gap-1 shrink-0 pt-0.5 select-none">
                    {product.badges?.slice(0, 1).map((badge, idx) => (
                      <span
                        key={idx}
                        className={`text-[0.6rem] font-bold uppercase tracking-wider rounded-full px-2.5 py-1 ${
                          badge === "new"
                            ? "bg-[#2C5F2E] text-white"
                            : "bg-[#C9A84C]/10 text-[#C9A84C]"
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Rendering image container */}
                <div className="flex-1 my-4 flex justify-center items-center overflow-hidden relative select-none w-full h-[180px]">
                  {/* First image: White background */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="absolute inset-0 max-h-[80%] max-w-[80%] m-auto object-contain select-none transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-95"
                  />
                  {/* Second image: UGC background */}
                  <img
                    src={product.gallery && product.gallery[1] ? product.gallery[1] : product.image}
                    alt={`${product.title} installation`}
                    className="absolute inset-0 w-full h-full object-cover rounded-[20px] select-none opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 scale-105 group-hover:scale-100"
                  />
                </div>

                <div className="flex justify-between items-end select-none">
                  <span className="text-xs font-bold tracking-[0.15em] text-[#1A1A1A]">
                    {product.line}
                  </span>
                  <span className="text-[0.7rem] uppercase tracking-wider text-[#2C5F2E] font-semibold bg-[#2C5F2E]/5 px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Details
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default CategoryDetail;
