import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../lib/wp";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { id: "all", name: "All products", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )},
  { id: "benches", name: "Benches", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 9h16M4 15h16M4 9v6M20 9v6M8 15v4M16 15v4" />
    </svg>
  )},
  { id: "bench-planters", name: "Bench Planters", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v13M3 12h18M12 3L3 12h18zM6 21h12" />
    </svg>
  )},
  { id: "planters", name: "Planters", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3a9 9 0 000 18v-9a3 3 0 000-6V3z" />
    </svg>
  )},
  { id: "dustbins", name: "Dustbins", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  )},
  { id: "bus-shelters", name: "Bus Shelters", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 21h18M4 21V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13M8 10h8M8 14h8" />
    </svg>
  )},
  { id: "car-shelters", name: "Car Shelters", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 10V6a2 2 0 012-2h10a2 2 0 012 2v4M2 17h20M7 17a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  )},
  { id: "canteen-tables", name: "Canteen Tables", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 9h16M4 15h16M4 9v6M20 9v6M8 15v4M16 15v4" />
    </svg>
  )},
  { id: "pergolas", name: "Pergolas", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v13M3 12h18M12 3L3 12h18zM6 21h12" />
    </svg>
  )},
  { id: "gazebos", name: "Gazebos", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l9-9 9 9M5 12v8a2 2 0 002 2h10a2 2 0 002-2v-8" />
    </svg>
  )},
  { id: "cabanas", name: "Cabanas", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v13M3 12h18M12 3L3 12h18zM6 21h12" />
    </svg>
  )},
  { id: "pre-fab-homes", name: "Pre Fab Homes", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l9-9 9 9M5 12v8a2 2 0 002 2h10a2 2 0 002-2v-8" />
    </svg>
  )},
  { id: "poolside-loungers", name: "Poolside Loungers", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 12c4-4 8 4 12 0s8-4 8 0M2 16c4-4 8 4 12 0s8-4 8 0" />
    </svg>
  )},
  { id: "wicker-living-sets", name: "Wicker Living", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9V6a2 2 0 00-2-2H7a2 2 0 00-2 2v3M3 11v5a2 2 0 002 2h14a2 2 0 002-2v-5a2 2 0 00-4 0v2H7v-2a2 2 0 00-4 0z" />
    </svg>
  )},
  { id: "wicker-dining-sets", name: "Wicker Dining", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9V6a2 2 0 00-2-2H7a2 2 0 00-2 2v3M3 11v5a2 2 0 002 2h14a2 2 0 002-2v-5a2 2 0 00-4 0v2H7v-2a2 2 0 00-4 0z" />
    </svg>
  )}
];

const getPremiumOverlayText = (id) => {
  const mapping = {
    "bench-planters": "Double-Walled GFRC",
    "benches": "FSC® Hardwood",
    "bus-shelters": "Solar-Ready Roof",
    "cabanas": "Premium Bed Slats",
    "canteen-tables": "Durable HPL Slats",
    "car-shelters": "EV-Charger Ready",
    "dustbins": "Galvanized Liners",
    "gazebos": "Concealed Conduits",
    "pergolas": "High-Tension Tensile",
    "planters": "Architectural Concrete",
    "poolside-loungers": "HDPE Wicker Weave",
    "pre-fab-homes": "Double Insulation",
    "wicker-dining-sets": "Tempered Glass Top",
    "wicker-living-sets": "Sunbrella® Cushions"
  };
  return mapping[id] || "Architectural Grade";
};

const getProductStats = (id) => {
  const stats = {
    "bench-planters": [
      { text: "Integrated seating", icon: "🪑" },
      { text: "Concrete planter", icon: "🧱" },
      { text: "Drainage channel", icon: "💧" }
    ],
    "benches": [
      { text: "FSC® Hardwood", icon: "🪵" },
      { text: "Ergonomic Angle", icon: "📐" },
      { text: "Anti-Skate", icon: "🛡" }
    ],
    "bus-shelters": [
      { text: "Galvanized MS/SS", icon: "🏗" },
      { text: "Solar-Ready", icon: "☀" },
      { text: "Modular Length", icon: "📏" }
    ],
    "cabanas": [
      { text: "Sunscape Bed", icon: "🛌" },
      { text: "Pergola shading", icon: "⛺" },
      { text: "Device shelves", icon: "📱" }
    ],
    "canteen-tables": [
      { text: "Morse Series", icon: "🪑" },
      { text: "Solid HPL Slats", icon: "🪵" },
      { text: "6-8 Seater", icon: "👥" }
    ],
    "car-shelters": [
      { text: "Double vehicle", icon: "🚗" },
      { text: "EV-Charger Ready", icon: "🔌" },
      { text: "Concealed Drainage", icon: "🌧" }
    ],
    "dustbins": [
      { text: "75L-225L Sorting", icon: "🗑" },
      { text: "Galvanized Liners", icon: "📦" },
      { text: "Vandal-Resist Lock", icon: "🔒" }
    ],
    "gazebos": [
      { text: "FSC certified wood", icon: "🪵" },
      { text: "Louvered wood", icon: "🪟" },
      { text: "Concealed conduits", icon: "⚡" }
    ],
    "pergolas": [
      { text: "Tensile Polymer", icon: "🎐" },
      { text: "Parabolic Curve", icon: "〽" },
      { text: "Custom Height", icon: "📐" }
    ],
    "planters": [
      { text: "GFRC Concrete", icon: "🧱" },
      { text: "Double-Walled", icon: "🛡" },
      { text: "Self-Watering", icon: "💧" }
    ],
    "poolside-loungers": [
      { text: "HDPE Wicker Weave", icon: "🌴" },
      { text: "Quick-Dry Foam", icon: "🧼" },
      { text: "Anti-Rust Frame", icon: "🏗" }
    ],
    "pre-fab-homes": [
      { text: "25 sqm base", icon: "🏡" },
      { text: "48-Hour Setup", icon: "⚡" },
      { text: "Eco WPC Panel", icon: "🌱" }
    ],
    "wicker-dining-sets": [
      { text: "Tempered Glass", icon: "🥛" },
      { text: "Rust-free Frame", icon: "🏗" },
      { text: "Sunbrella® Fabric", icon: "🧵" }
    ],
    "wicker-living-sets": [
      { text: "Sunbrella® Fabric", icon: "🧵" },
      { text: "UV-Stable strands", icon: "☀" },
      { text: "Modular seating", icon: "🧩" }
    ]
  };
  return stats[id] || [
    { text: "Architectural", icon: "✦" },
    { text: "Sustainable", icon: "🌱" },
    { text: "Premium Finish", icon: "★" }
  ];
};

const ProductsCatalog = ({ showTitle = true }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const pillsRef = useRef(null);

  // Enable horizontal wheel scroll + drag-to-scroll on category pills
  useEffect(() => {
    const el = pillsRef.current;
    if (!el) return;

    // Mouse wheel → horizontal scroll
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });

    // Drag-to-scroll
    let isDown = false, startX, scrollLeft;
    const onMouseDown = (e) => {
      isDown = true;
      el.style.cursor = "grabbing";
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };
    const onMouseLeave = () => { isDown = false; el.style.cursor = "grab"; };
    const onMouseUp = () => { isDown = false; el.style.cursor = "grab"; };
    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      el.scrollLeft = scrollLeft - (x - startX) * 1.5;
    };

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mousemove", onMouseMove);

    el.style.cursor = "grab";

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  // Fetch dynamic products on mount
  useEffect(() => {
    let active = true;
    const loadCatalogData = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts();
        if (active) {
          setProductsList(data);
        }
      } catch (err) {
        console.error("Failed to load catalog products:", err);
      } finally {
        if (active) setLoading(false);
      }
    };
    loadCatalogData();
    return () => {
      active = false;
    };
  }, []);

  // Filter products based on selected category or active design principle
  const filteredProducts = activeCategory === "all"
    ? productsList
    : activeCategory === "Sustainable"
    ? productsList.filter(p => ["benches", "dustbins", "planters", "pre-fab-homes"].includes(p.id))
    : activeCategory === "Nature—Care"
    ? productsList.filter(p => ["benches", "planters", "wicker-living-sets", "poolside-loungers"].includes(p.id))
    : activeCategory === "Smart"
    ? productsList.filter(p => ["bus-shelters", "car-shelters", "pre-fab-homes"].includes(p.id))
    : activeCategory === "Privacy"
    ? productsList.filter(p => ["cabanas", "gazebos", "car-shelters", "pre-fab-homes"].includes(p.id))
    : activeCategory === "Spacious"
    ? productsList.filter(p => ["bus-shelters", "canteen-tables", "pergolas", "gazebos"].includes(p.id))
    : activeCategory === "Glassed-in"
    ? productsList.filter(p => ["bus-shelters", "cabanas", "gazebos"].includes(p.id))
    : productsList.filter(p => p.category === activeCategory);

  // Scroll functions
  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  };

  useGSAP(() => {
    if (showTitle) {
      // Reveal section title
      gsap.fromTo(
        ".catalog-title",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );
    }

    // Reveal category list
    gsap.fromTo(
      ".catalog-pills-row",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: showTitle ? 0.2 : 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: showTitle ? "top 80%" : "top 90%",
        }
      }
    );

    // Stagger reveal of cards
    gsap.fromTo(
      ".catalog-card",
      { scale: 0.95, opacity: 0, y: 50 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: showTitle ? 0.4 : 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: showTitle ? "top 70%" : "top 80%",
        }
      }
    );
  }, { scope: containerRef });

  const Wrapper = showTitle ? "section" : "div";

  return (
    <Wrapper 
      ref={containerRef}
      className={`w-full overflow-hidden flex flex-col justify-start items-start gap-10 ${
        showTitle 
          ? "bg-transparent py-20 px-8 lg:px-16" 
          : "mt-4"
      }`}
    >
      {/* Title block */}
      {showTitle && (
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#2D2D2D]/10 pb-8 catalog-title">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-[#2C5F2E] mb-2">Our Collection</p>
            <h2 className="text-4xl lg:text-6xl font-medium tracking-tight text-[#1A1A1A]">
              Urban furniture that connects.
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#2D2D2D]/80 max-w-sm">
            Discover modular designs built to blend natural aesthetics with sustainable, smart urban living.
          </p>
        </div>
      )}

      {/* FULL WIDTH CATEGORY EXPLORER LAYOUT */}
      <div className="w-full flex flex-col gap-8 catalog-pills-row">
        
        {/* Horizontal Navigation Grid */}
        <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#2D2D2D]/10">
          
          {/* Categories Pill list */}
          <div ref={pillsRef} className="flex-1 overflow-x-auto scrollbar-none flex items-center gap-2.5 py-1 pr-4">
            
            {/* All Products Pill Button */}
            <button
              onClick={() => setActiveCategory("all")}
              className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shrink-0 ${
                activeCategory === "all"
                  ? "bg-[#2C5F2E] text-[#F7F4EF] shadow-sm border border-[#2C5F2E] scale-95"
                  : "bg-[#2D2D2D]/5 text-[#2D2D2D] border border-[#2D2D2D]/10 hover:bg-[#2D2D2D]/10"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span>All products</span>
            </button>

            {/* Category pills */}
            {categories.filter(cat => cat.id !== "all").map((cat) => {
              const isActive = activeCategory === cat.id;
              
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(isActive ? "all" : cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 cursor-pointer shrink-0 ${
                    isActive
                      ? "bg-[#2D2D2D] text-[#F7F4EF] border-[#2D2D2D] shadow-sm scale-95"
                      : "border-[#2D2D2D]/20 text-[#2D2D2D]/85 hover:bg-[#2D2D2D]/5"
                  }`}
                >
                  {cat.icon}
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
          
          {/* Slider Navigation Arrows on the right */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0 ml-auto md:ml-0">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-[#EAE5DB] text-[#2D2D2D] hover:bg-[#EAE5DB]/80 flex justify-center items-center transition-all cursor-pointer shrink-0"
              aria-label="Scroll left"
            >
              <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-[#2C5F2E] text-[#F7F4EF] hover:bg-[#2C5F2E]/90 flex justify-center items-center shadow-md transition-all cursor-pointer shrink-0"
              aria-label="Scroll right"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom row: Slider container */}
        <div className="w-full relative">
          
          {/* Left Arrow (Visible on Mobile) */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-[38%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#EAE5DB]/90 backdrop-blur-md text-[#2D2D2D] hover:bg-[#EAE5DB] flex justify-center items-center transition-all cursor-pointer shadow-md active:scale-95 md:hidden"
            aria-label="Scroll left"
          >
            <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div 
            ref={sliderRef}
            className="w-full overflow-x-auto scrollbar-none flex gap-6 pb-6 snap-x snap-mandatory scroll-smooth"
          >
            {loading ? (
              Array.from({ length: 4 }).map((_, idx) => (
                <div
                  key={idx}
                  className="min-w-[310px] sm:min-w-[380px] md:min-w-[450px] aspect-[4/5] bg-white rounded-[37.5px] p-8 flex flex-col justify-between items-stretch snap-start shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-black/[0.02] animate-pulse select-none"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="h-6 w-32 bg-black/10 rounded-md" />
                    <div className="h-5 w-12 bg-black/10 rounded-full" />
                  </div>
                  <div className="flex-1 my-6 flex justify-center items-center">
                    <div className="w-[65%] h-[65%] bg-black/[0.04] rounded-2xl" />
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="h-5 w-20 bg-black/10 rounded-md" />
                    <div className="h-5 w-24 bg-black/5 rounded-full" />
                  </div>
                </div>
              ))
            ) : (
              filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={product.url || `/product/${product.id}`}
                  className={`catalog-card bg-white rounded-[37.5px] p-4 md:p-8 flex flex-col justify-between items-stretch snap-start shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-black/[0.03] transition-all duration-500 group cursor-pointer no-underline block aspect-auto md:aspect-[4/5] ${
                    filteredProducts.length === 1 
                      ? 'w-[310px] sm:w-[350px] md:w-[450px] shrink-0' 
                      : 'min-w-[310px] sm:min-w-[380px] md:min-w-[450px]'
                  }`}
                >
                  {/* DESKTOP CARD LAYOUT */}
                  <div className="hidden md:flex flex-col justify-between h-full w-full">
                    {/* Header info */}
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-xl md:text-2xl font-light text-[#1a1a1a] tracking-tight leading-tight group-hover:text-black transition-colors duration-300">
                        {product.title}
                      </h3>
                      
                      {/* Badges */}
                      <div className="flex gap-1.5 shrink-0 pt-1">
                        {product.badges.map((badge, idx) => (
                          <span
                            key={idx}
                            className={`text-[0.65rem] font-bold uppercase tracking-wider rounded-full px-2.5 py-1 ${
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
   
                    {/* Middle: Product rendering */}
                    <div className="flex-1 my-6 flex justify-center items-center overflow-hidden relative w-full h-[220px] bg-white rounded-2xl">
                      {/* First image: White background */}
                      <img
                        src={product.image}
                        alt={`${product.title} manufacturer India — Urbanland Products`}
                        className={`absolute inset-0 max-h-[92%] max-w-[92%] m-auto object-contain select-none transition-opacity duration-700 ease-in-out ${
                          product.gallery && product.gallery[1] ? 'group-hover:opacity-0' : ''
                        }`}
                        style={{ mixBlendMode: 'multiply', filter: 'brightness(1.12) contrast(1.05)' }}
                      />
                      {/* Second image: UGC background */}
                      {product.gallery && product.gallery[1] && (
                        <img
                          src={product.gallery[1]}
                          alt={`${product.title} installation`}
                          className="absolute inset-0 w-full h-full object-cover rounded-2xl select-none opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
                        />
                      )}
                    </div>
   
                    {/* Bottom info */}
                    <div className="flex justify-between items-end gap-4">
                      <span className="hidden md:block text-sm font-medium text-[#1a1a1a] leading-relaxed max-w-[62%]">
                        {product.line}
                      </span>
                      <span className="text-[0.7rem] uppercase tracking-wider text-[#2C5F2E] font-semibold bg-[#2C5F2E]/5 px-4 py-2.5 rounded-full opacity-100 group-hover:bg-[#2C5F2E] group-hover:text-[#F7F4EF] transition-all duration-300 ml-auto md:ml-0 shrink-0 whitespace-nowrap">
                        View & Get Quote
                      </span>
                    </div>
                  </div>

                  {/* MOBILE CARD LAYOUT (Mockup-inspired Premium Aesthetics) */}
                  <div className="flex md:hidden flex-col justify-start items-stretch w-full select-none">
                    {/* Top Section: Portrait 4:5 Image Frame Block with increased height and 37.5px border radius */}
                    <div 
                      className="relative w-full aspect-[4/5] bg-white rounded-[37.5px] overflow-hidden border border-black/[0.02] flex items-center justify-center p-4"
                    >
                      
                      {/* Product Image (First: Clean render) */}
                      <img
                        src={product.image}
                        alt={`${product.title} manufacturer India`}
                        className={`max-h-[92%] max-w-[92%] object-contain select-none transition-opacity duration-700 ease-in-out z-1 ${
                          product.gallery && product.gallery[1] ? 'group-hover:opacity-0' : ''
                        }`}
                        style={{ mixBlendMode: 'multiply', filter: 'brightness(1.12) contrast(1.05)' }}
                      />

                      {/* Hover Image (Second: UGC background) */}
                      {product.gallery && product.gallery[1] && (
                        <img
                          src={product.gallery[1]}
                          alt={`${product.title} installation`}
                          className="absolute inset-0 w-full h-full object-cover select-none opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 z-1"
                        />
                      )}

                      {/* Left Side: Overlapping circular gallery previews - styled larger with overlapping margin */}
                      <div className="absolute bottom-4 left-4 flex -space-x-3.5 items-center z-10">
                        {product.gallery?.slice(0, 3).map((imgUrl, idx) => (
                          <div key={idx} className="relative w-10 h-10 rounded-[37px] border-2 border-white overflow-hidden bg-white shadow-md">
                            <img src={imgUrl} className="w-full h-full object-cover" alt="gallery preview" style={{ borderRadius: '37px' }} />
                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#C9A84C] rounded-full flex items-center justify-center text-[0.5rem] text-white shadow-sm border border-white/50">
                              ★
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pagination Dots indicator */}
                    <div className="w-full flex justify-center items-center gap-1.5 mt-3 mb-1">
                      <div className="w-3.5 h-1 rounded-full bg-[#2C5F2E]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#EAE5DB]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#EAE5DB]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#EAE5DB]" />
                    </div>

                    {/* Text Details Block */}
                    <div className="w-full flex flex-col items-center text-center mt-1">
                      <h3 className="text-base font-semibold text-[#1a1a1a] tracking-tight leading-tight group-hover:text-black transition-colors duration-300">
                        {product.title}
                      </h3>
                      <p className="text-[0.65rem] font-bold text-[#C9A84C] uppercase tracking-widest mt-1">
                        {product.category.replace("-", " ")}
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            )}

            {!loading && filteredProducts.length === 0 && (
              <div className="w-full py-20 flex flex-col justify-center items-center text-center bg-white rounded-[2rem] border border-black/[0.03] px-8">
                <svg className="w-12 h-12 text-[#7c756b]/40 mb-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <p className="text-[#524f4c] font-medium">No products match this design principle currently.</p>
              </div>
            )}
          </div>

          {/* Right Arrow (Visible on Mobile) */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-[38%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#2C5F2E]/90 backdrop-blur-md text-[#F7F4EF] hover:bg-[#2C5F2E] flex justify-center items-center shadow-lg transition-all cursor-pointer active:scale-95 md:hidden"
            aria-label="Scroll right"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductsCatalog;
