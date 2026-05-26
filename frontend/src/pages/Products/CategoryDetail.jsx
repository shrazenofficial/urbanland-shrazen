import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProducts } from "../../lib/wp";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import images for banners
import colimg1 from "../../assets/Bench_Planter.png";
import colimg2 from "../../assets/Car_Shelter.png";
import colimg3 from "../../assets/Wicker_Furniture.png";
import colimg4 from "../../assets/Bus_Shelters.png";

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
  "bus-shelters": {
    title: "Bus Shelters",
    tagline: "Smart transit solutions for modern urban municipalities.",
    description: "Our MS and SS bus shelters are engineered with hot-dip galvanized steel framing, tempered glass or polycarbonate wind barriers, and self-contained solar-powered lighting systems. Ideal for smart cities.",
    image: colimg4,
    materials: "Hot-dip galvanized steel, Grade 304/316 Stainless Steel, 8mm Toughened Glass panels.",
    durability: "Class C5 corrosion protection coating with 20+ years service life.",
    installation: "Cast-in-place anchor bolts with drainage integration."
  },
  "car-parking-sheds": {
    title: "Car Parking Sheds",
    tagline: "High-tensile architectural sheds and tensile canopies.",
    description: "Modular, high-tensile cantilever parking shelters designed to withstand heavy wind loads and block UV radiation. Clean architectural spans provide maximum clearance.",
    image: colimg2,
    materials: "Structural steel tubes, PVDF-coated tensile membranes (950 gsm), powder-coated hardware.",
    durability: "100% rust-free frame; PVDF fabric with self-cleaning lacquer and 15-year warranty.",
    installation: "Reinforced concrete footing pads with high-strength chemical anchors."
  },
  "canteen-furniture": {
    title: "Canteen Tables & Benches",
    tagline: "Extreme-durability campus dining setups.",
    description: "Integrated outdoor tables and benches crafted for educational, corporate, and public campuses. Low-maintenance structures cladded in HPL or weather-resistant slats.",
    image: colimg1,
    materials: "Laser-cut powder-coated steel chassis, high-pressure laminate (HPL) or Robinia slats.",
    durability: "Anti-vandalism fastening; rust-proof powder coat finish.",
    installation: "Bolt-down base flange anchoring or free-standing layouts."
  },
  "planters": {
    title: "GFRC & Concrete Planters",
    tagline: "Bio-diverse cultivation islands for plazas and parklets.",
    description: "Architectural glass-fiber reinforced concrete (GFRC) and solid wood planters designed to integrate lush plant life directly into municipal walkways and public sitting spaces.",
    image: colimg1,
    materials: "High-strength GFRC concrete mix, FSC-certified tropical Jatoba cladding.",
    durability: "Frost resistant, internally sealed waterproof layers.",
    installation: "Free-standing layout on integrated structural leveling pads."
  },
  "outdoor-dustbins": {
    title: "Outdoor Dustbins",
    tagline: "Durable municipal receptacles for smart waste management.",
    description: "Dual-compartment litter and recycling bins designed for heavy urban foot traffic. Stainless steel hardware prevents corrosion under monsoons and high humidity.",
    image: colimg1,
    materials: "Galvanized powder-coated sheet steel, Grade 304 Stainless Steel liners.",
    durability: "Anti-graffiti finish, fire-safe internal ash receptacles.",
    installation: "Chemical expansion anchoring onto concrete surfaces."
  },
  "wpc-benches": {
    title: "WPC & Aluminium Benches",
    tagline: "High-comfort seating cladded in premium timbers.",
    description: "Linear and modular public benches designed for parks, commercial courtyards, and premium residential spaces. Engineered ergonomics meet timeless material warmth.",
    image: colimg1,
    materials: "Galvanized steel frames, FSC Jatoba, Robinia, or high-performance WPC slats.",
    durability: "Extreme humidity and UV resistance, natural untreated timber silver patina aging.",
    installation: "Sub-surface ground cast, or concrete surface flanged anchoring."
  },
  "poolside-furniture": {
    title: "Poolside Loungers & Cabanas",
    tagline: "Resort-grade architectural shade modules and sunbeds.",
    description: "Premium sunshade modules, gazebos, and sun loungers designed for poolside decks and wellness spas, combining aluminium frames with high-density synthetic wicker or PE weave.",
    image: colimg3,
    materials: "Structural aluminium alloys, powder-coated fasteners, HDPE synthetic wicker, UV-stable fabrics.",
    durability: "Saltwater mist and chlorine resistant, quick-dry padding.",
    installation: "Free-standing movable or deck-bolted layouts."
  },
  "swings": {
    title: "Wicker & Cane Swings",
    tagline: "Bespoke handcrafted swing systems.",
    description: "Luxury swings combining premium powder-coated hanging frames with high-density synthetic wicker or cane weaves. Adds elegance to poolside decks and private balconies.",
    image: colimg3,
    materials: "Heavy-duty steel support arches, PE synthetic wicker or natural cane weaves.",
    durability: "Weatherproof wicker core; structural frame with 10-year load guarantee.",
    installation: "Free-standing heavy steel arches or concrete ceiling anchor hooks."
  },
  "wicker-furniture": {
    title: "Wicker Furniture",
    tagline: "Premium synthetic wicker dining and lounging ensembles.",
    description: "Hand-woven synthetic wicker dining chairs, tables, and lounge sectionals crafted with weather-resistant internal cushions. Made to withstand heavy monsoons and UV exposures.",
    image: colimg3,
    materials: "Lightweight rust-free aluminium internal frames, high-density PE wicker fibers.",
    durability: "UV test certified to 3000 hours, water-repellent cushions.",
    installation: "Free-standing premium furniture elements with adjustable feet."
  },
  "metal-wooden-furniture": {
    title: "Metal Wooden Furniture",
    tagline: "Industrial meets organic warmth.",
    description: "Custom municipal furniture combining heavy structural steel elements with warm Robinia or Jatoba timber slats, bringing custom styling to commercial streets.",
    image: colimg1,
    materials: "Powder-coated MS sheet framing, sustainable solid hardwood cladding.",
    durability: "Double-layer zinc priming for superior corrosion isolation.",
    installation: "Chemical anchors or surface flange mounts."
  },
  "ss-bollards": {
    title: "Stainless Steel Bollards",
    tagline: "Crash-rated safety barriers for traffic management.",
    description: "Heavy-duty safety and decorative bollards in Grade 304 and 316 Stainless Steel. Designed to secure pedestrian avenues, building perimeters, and plazas.",
    image: colimg4,
    materials: "Grade 304/316 Stainless Steel, optional internal concrete cores.",
    durability: "Brushed architectural finish; high impact energy resistance.",
    installation: "Fixed concrete-embedded cores, or removable locking base sleeves."
  },
  "indoor-furniture": {
    title: "Indoor Lobby Seating",
    tagline: "Premium indoor corporate reception seating.",
    description: "Low-priority indoor seating systems combining custom upholstery with steel frames for premium commercial lobbys and luxury residential clubhouses.",
    image: colimg1,
    materials: "Cold-rolled steel frames, commercial performance upholstery fabrics.",
    durability: "Flame-retardant foam, heavy-duty double-stitched piping seams.",
    installation: "Free-standing luxury seating layouts."
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
  const category = rawCategory === "dustbins" ? "outdoor-dustbins" : rawCategory;
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

      {/* FEATURED SIGNATURE DUSTBINS BENTO GRID (Visible only when category is 'outdoor-dustbins') */}
      {category === "outdoor-dustbins" && (
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
          {category === "outdoor-dustbins" ? "Other Standard Models in this Division:" : "Available Models in this Division:"}
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
                <div className="flex-1 my-4 flex justify-center items-center overflow-hidden relative select-none">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-[80%] max-w-[80%] object-contain select-none transform group-hover:scale-104 transition-transform duration-700 ease-out"
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
