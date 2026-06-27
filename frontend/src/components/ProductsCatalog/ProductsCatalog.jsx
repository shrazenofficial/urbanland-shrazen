import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../lib/wp";
import ProductInquiryModal from "../ProductInquiryModal/ProductInquiryModal";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { id: "all", name: "All products", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  )},
  { id: "benches", name: "Benches", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M4 6h16M4 9h16" strokeLinecap="round" />
      <path d="M3 13h18M3 15h18" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 6v9m16-9v9M5 15l-1 5m16-5l1 5M8 15v4m8-4v4" strokeLinecap="round" />
    </svg>
  )},
    { id: "planters", name: "Planters", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M6 13l1.5 7h9l1.5-7H6z" strokeLinejoin="round" />
      <path d="M5 13h14" strokeLinecap="round" />
      <path d="M12 13c0-5 2.5-7 2.5-7s2.5 2 2.5 7M12 13c0-6-2.5-8-2.5-8S7 7 7 13" strokeLinecap="round" />
      <path d="M12 13c0-4 1-5.5 1-5.5s1 1.5 1 5.5" strokeLinecap="round" />
    </svg>
  )},
  { id: "dustbins", name: "Dustbins", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect x="4" y="6" width="7" height="14" rx="1.5" />
      <rect x="13" y="6" width="7" height="14" rx="1.5" />
      <path d="M3 6h9M12 6h9" strokeLinecap="round" />
      <circle cx="7.5" cy="10" r="1.5" />
      <path d="M15 10h3" strokeLinecap="round" />
    </svg>
  )},
  { id: "bus-shelters", name: "Bus Shelters", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      {/* Modern angled shelter roof */}
      <path d="M3 6h15l3 3H6L3 6z" strokeLinejoin="round" strokeLinecap="round" />
      {/* Support structures */}
      <path d="M6 9v10M18 9v10" strokeLinecap="round" />
      {/* Glass back panel horizontal line */}
      <path d="M6 13h12" strokeLinecap="round" strokeDasharray="3 3" />
      {/* Integrated bench */}
      <path d="M8 14h8M9 14v4M15 14v4" strokeLinecap="round" strokeLinejoin="round" />
      {/* Side info schedule board */}
      <rect x="18" y="10" width="3" height="8" rx="0.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )},
  { id: "car-shelters", name: "Car Shelters", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      {/* Cantilever support structure */}
      <path d="M4 18V5" strokeLinecap="round" />
      <path d="M4 6l13 3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 9.5l6 1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Tensile canopy membrane */}
      <path d="M2.5 7.5c5.5-3.5 12.5-3.5 18 0l.5-1.5c-6-4-13.5-4-19 0l.5 1.5z" strokeLinejoin="round" />
      {/* Minimalist modern car outline */}
      <path d="M6.5 16.5v-2h1.5l1.2-1.8h3.6l1.2 1.8h1.5v2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="16.5" r="1.5" />
      <circle cx="14" cy="16.5" r="1.5" />
      {/* Ground line */}
      <path d="M2 18h20" strokeLinecap="round" />
    </svg>
  )},
  { id: "canteen-tables", name: "Canteen Tables", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M5 9h14M5 11h14" strokeLinecap="round" />
      <path d="M8 11v6m8-6v6" strokeLinecap="round" />
      <path d="M2 14h3M19 14h3" strokeLinecap="round" strokeWidth="2" />
      <path d="M3.5 14v4M20.5 14v4" strokeLinecap="round" />
      <path d="M3.5 16.5h17" strokeLinecap="round" strokeDasharray="1 1" />
    </svg>
  )},
  { id: "pergolas", name: "Pergolas", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M5 7v13M19 7v13" strokeLinecap="round" />
      <path d="M3 7h18M3 9h18" strokeLinecap="round" />
      <path d="M6 5v2M9 5v2M12 5v2M15 5v2M18 5v2" strokeLinecap="round" />
    </svg>
  )},
  { id: "gazebos", name: "Gazebos", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M12 3L3 9h18L12 3z" strokeLinejoin="round" />
      <path d="M12 3v6" strokeLinecap="round" />
      <path d="M5 9v11M12 9v11M19 9v11" strokeLinecap="round" />
      <path d="M5 16h14" strokeLinecap="round" />
      <path d="M5 18h14" strokeLinecap="round" strokeDasharray="2 2" />
    </svg>
  )},
  { id: "cabanas", name: "Cabanas", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect x="4" y="4" width="16" height="16" rx="1.5" />
      <path d="M4 4c2 2 2 6 0 12M20 4c-2 2-2 6 0 12" strokeLinecap="round" />
      <path d="M4 11h1.5M18.5 11h1.5" strokeLinecap="round" />
      <path d="M6 16h12v2.5H6V16z" strokeLinejoin="round" />
      <path d="M6.5 16c1-1.5 2-1.5 2 0" strokeLinecap="round" />
    </svg>
  )},
  { id: "pre-fab-homes", name: "Pre Fab Homes", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M3 8l15-2 3 2v11a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" strokeLinejoin="round" />
      <rect x="5" y="12" width="4" height="7" rx="0.5" />
      <rect x="11" y="9" width="7" height="6" rx="0.5" />
      <path d="M14.5 9v6M11 12h7" strokeLinecap="round" strokeDasharray="1 1" />
    </svg>
  )},
  { id: "poolside-loungers", name: "Poolside Loungers", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      {/* The Lounger Bed (Angled backrest, flat middle, curved footrest) */}
      <path d="M3 10l3.5 3h9.5l3 4.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Lounger Legs */}
      <path d="M6.5 13v4.5M14 13v4.5" strokeLinecap="round" />
      {/* Pool Waves */}
      <path d="M3 19.5c1.2 0 1.8-.8 3-.8s1.8.8 3 .8 1.8-.8 3-.8 1.8.8 3 .8 1.8-.8 3-.8 1.8.8 3 .8" strokeLinecap="round" />
      {/* Sun */}
      <circle cx="18" cy="6" r="2.5" strokeLinecap="round" />
      <path d="M18 2.5v1M18 8.5v1M14.5 6h1M20.5 6h1" strokeLinecap="round" />
    </svg>
  )},
  { id: "wicker-living-sets", name: "Wicker Living", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M4 8v6c0 2 2 3 5 3h6c3 0 5-1 5-3V8" strokeLinecap="round" />
      <rect x="4.5" y="11.5" width="15" height="3" rx="1.5" />
      <path d="M6 8c2-3 10-3 12 0" strokeLinecap="round" />
      <path d="M8 15v3M12 15v3M16 15v3" strokeLinecap="round" strokeDasharray="1.5 1.5" />
    </svg>
  )},
  { id: "wicker-dining-sets", name: "Wicker Dining", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect x="6" y="8" width="12" height="4" rx="1" />
      <path d="M8 12v6M16 12v6" strokeLinecap="round" />
      <path d="M3 11v7h2v-7" strokeLinecap="round" />
      <path d="M19 11v7h2v-7" strokeLinecap="round" />
      <path d="M3 11c0-2.5 1.5-2.5 2 0M19 11c0-2.5 1.5-2.5 2 0" strokeLinecap="round" />
    </svg>
  )},
  { id: "ss-bollards", name: "SS Bollards", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect x="5" y="4" width="3" height="16" rx="0.5" />
      <rect x="11" y="4" width="3" height="16" rx="0.5" />
      <rect x="17" y="4" width="3" height="16" rx="0.5" />
      <path d="M5 8h3M11 8h3M17 8h3" strokeLinecap="round" />
      <path d="M2 20h20" strokeLinecap="round" />
    </svg>
  )},
  { id: "metal-wooden-furniture", name: "Metal & Wooden", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect x="4" y="6" width="16" height="12" rx="1" />
      <path d="M4 10h16M4 14h16" strokeLinecap="round" />
      <path d="M8 6v12M12 6v12M16 6v12" strokeLinecap="round" />
    </svg>
  )}
];

const ProductsCatalog = ({ showTitle = true }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
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

  const scrollPills = (direction) => {
    if (pillsRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      pillsRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  };

  useGSAP(() => {
    if (loading) return;

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
  }, { scope: containerRef, dependencies: [loading] });

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
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-4 catalog-title">
          <div className="space-y-4 text-left">
            <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
              Our Collection
            </span>
            <h2 className="font-headline-lg text-headline-lg text-deep-ink max-w-xl leading-tight">
              Outdoor Furniture &amp; Urban Solutions
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
          </div>
          <Link 
            to="/products"
            className="inline-flex items-center gap-1.5 text-[#2C5F2E] hover:text-[#C9A84C] font-semibold text-xs sm:text-sm uppercase tracking-wider transition-colors group no-underline pb-1 border-b-2 border-transparent hover:border-[#C9A84C]/30"
          >
            <span>Explore all products</span>
            <span className="material-symbols-outlined text-sm sm:text-base transition-transform group-hover:translate-x-1.5">
              arrow_forward
            </span>
          </Link>
        </div>
      )}

      {/* FULL WIDTH CATEGORY EXPLORER LAYOUT */}
      <div className="w-full flex flex-col gap-8 catalog-pills-row">
        
        {/* Horizontal Navigation Grid */}
        <div className="w-full flex items-center justify-between pb-6 border-b border-[#2D2D2D]/10">
          
          {/* Pills Wrapper with Left and Right scroll buttons flanking them */}
          <div className="flex-1 flex items-center relative w-full overflow-hidden">
            
            {/* Left Category Scroll Button */}
            <button
              onClick={() => scrollPills("left")}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#EAE5DB] text-[#2D2D2D] hover:bg-[#EAE5DB]/80 flex justify-center items-center transition-all cursor-pointer shrink-0 mr-3 shadow-sm active:scale-95"
              aria-label="Scroll categories left"
            >
              <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Categories Pill list */}
            <div ref={pillsRef} className="flex-1 overflow-x-auto scrollbar-none flex items-center gap-2.5 py-1 pr-4 scroll-smooth">
              
              {/* All Products Pill Button */}
              <button
                onClick={() => setActiveCategory("all")}
                className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-normal uppercase tracking-wider transition-all duration-300 cursor-pointer shrink-0 ${
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
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-normal tracking-wide border transition-all duration-300 cursor-pointer shrink-0 ${
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

            {/* Right Pill Scroll Button */}
            <button
              onClick={() => scrollPills("right")}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#2C5F2E] text-[#F7F4EF] hover:bg-[#2C5F2E]/90 flex justify-center items-center shadow-md transition-all cursor-pointer shrink-0 ml-3 active:scale-95"
              aria-label="Scroll categories right"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>
        </div>

        {/* Bottom row: Slider container */}
        <div className="w-full relative">
          
          {/* Left Arrow (Visible on all screens) */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 md:left-4 top-[38%] md:top-[42%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#EAE5DB]/90 backdrop-blur-md text-[#2D2D2D] hover:bg-[#EAE5DB] flex justify-center items-center transition-all cursor-pointer shadow-md active:scale-95"
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
                  className="min-w-[360px] sm:min-w-[420px] md:min-w-[500px] aspect-[4/5] bg-white rounded-[37.5px] p-8 flex flex-col justify-between items-stretch snap-start shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-black/[0.02] animate-pulse select-none"
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
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className={`catalog-card bg-white rounded-[37.5px] p-4 md:p-8 flex flex-col justify-between items-stretch snap-start shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-black/[0.03] transition-all duration-500 group cursor-pointer block aspect-auto md:aspect-[4/5] ${
                    filteredProducts.length === 1 
                      ? 'w-[360px] sm:w-[420px] md:w-[500px] shrink-0' 
                      : 'min-w-[360px] sm:min-w-[420px] md:min-w-[500px]'
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
                            className={`text-[0.65rem] font-normal uppercase tracking-wider rounded-full px-2.5 py-1 ${
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
                        loading="lazy"
                        decoding="async"
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
                          loading="lazy"
                          decoding="async"
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
                </div>
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

          {/* Right Arrow (Visible on all screens) */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 md:right-4 top-[38%] md:top-[42%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#2C5F2E]/90 backdrop-blur-md text-[#F7F4EF] hover:bg-[#2C5F2E] flex justify-center items-center shadow-lg transition-all cursor-pointer active:scale-95"
            aria-label="Scroll right"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      {selectedProduct && (
        <ProductInquiryModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </Wrapper>
  );
};

export default ProductsCatalog;
