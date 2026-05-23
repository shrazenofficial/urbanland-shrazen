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
  { id: "parklets", name: "Parklets", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v18M3 12h18M6 6l12 12M6 18L18 6" />
    </svg>
  )},
  { id: "children", name: "Children", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 12m-9 0a9 9 0 1 1 18 0a9 9 0 1 1 -18 0 M9 10a1.5 1.5 0 1 1 3 0 M12 10a1.5 1.5 0 1 1 3 0 M9 15c1 1.5 3 2.5 5 0" />
    </svg>
  )},
  { id: "seating", name: "Park benches & seating", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 9h16M4 15h16M4 9v6M20 9v6M8 15v4M16 15v4M6 5h12v4H6z" />
    </svg>
  )},
  { id: "shelters", name: "Bus shelters", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 21h18M4 21V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13M8 10h8M8 14h8" />
    </svg>
  )},
  { id: "bins", name: "Litter & recycling bins", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  )},
  { id: "outdoor-furniture", name: "Outdoor furniture", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3a9 9 0 000 18v-9a3 3 0 000-6V3z" />
    </svg>
  )}
];

const ProductsCatalog = ({ showTitle = true }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

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
    ? productsList.filter(p => ["platform", "morse", "kubus", "cube-planter"].includes(p.id))
    : activeCategory === "Nature—Care"
    ? productsList.filter(p => ["platform", "cube-planter", "cane-double", "cane-set"].includes(p.id))
    : activeCategory === "Smart"
    ? productsList.filter(p => ["aero-shelter", "car-port"].includes(p.id))
    : activeCategory === "Privacy"
    ? productsList.filter(p => ["cane-double", "cane-set", "sunscape", "car-port"].includes(p.id))
    : activeCategory === "Spacious"
    ? productsList.filter(p => ["platform", "morse", "linfa", "cane-set"].includes(p.id))
    : activeCategory === "Glassed-in"
    ? productsList.filter(p => ["aero-shelter", "car-port"].includes(p.id))
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

      {/* NEW INTEGRATED CATEGORY SPLIT LAYOUT */}
      <div className="w-full flex flex-col lg:flex-row gap-10 items-stretch catalog-pills-row">
        
        {/* Left column: Principles and Active Tag Filters */}
        <div className="w-full lg:w-[32%] shrink-0 flex flex-col justify-between p-5 sm:p-6 lg:p-6 xl:p-8 bg-[#F7F4EF]/60 rounded-[2.5rem] border border-[#2D2D2D]/5 shadow-[0_10px_35px_rgba(0,0,0,0.01)] select-none">
          <div>
            <span className="text-[0.75rem] font-bold uppercase tracking-wider text-[#2D2D2D]/70 leading-relaxed mb-6 block">
              All Urbanland® products are designed and built on the same principles:
            </span>
            
            {/* Principles Tag Grid */}
            <div className="flex flex-wrap gap-2.5 mt-4">
              {[
                { name: "Sustainable", type: "green" },
                { name: "Nature—Care", type: "gold" },
                { name: "Smart", type: "green" },
                { name: "Privacy", type: "gold" },
                { name: "Spacious", type: "green" },
                { name: "Glassed-in", type: "gold" }
              ].map((pill) => {
                const isActive = activeCategory === pill.name;
                const isGreen = pill.type === "green";
                
                return (
                  <button
                    key={pill.name}
                    onClick={() => setActiveCategory(isActive ? "all" : pill.name)}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide border-[1.5px] transition-all duration-300 cursor-pointer ${
                      isGreen
                        ? isActive
                          ? "bg-[#2C5F2E] text-[#F7F4EF] border-[#2C5F2E] shadow-sm scale-95"
                          : "border-[#2C5F2E] text-[#2C5F2E] hover:bg-[#2C5F2E]/5"
                        : isActive
                          ? "bg-[#C9A84C] text-[#F7F4EF] border-[#C9A84C] shadow-sm scale-95"
                          : "border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C]/5"
                    }`}
                  >
                    {pill.name}
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Bottom row: All Products + * + Navigation */}
          <div className="mt-10 flex items-center justify-between border-t border-[#2D2D2D]/10 pt-6 w-full gap-2 flex-wrap sm:flex-nowrap">
            
            {/* Left side group: All Products + Asterisk */}
            <div className="flex items-center gap-2 shrink-0 flex-nowrap">
              {/* All Products Pill Button */}
              <button
                onClick={() => setActiveCategory("all")}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCategory === "all"
                    ? "bg-[#2C5F2E] text-[#F7F4EF] shadow-md border border-[#2C5F2E] scale-95"
                    : "bg-[#2D2D2D]/5 text-[#2D2D2D] border border-[#2D2D2D]/10 hover:bg-[#2D2D2D]/10"
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                All products
              </button>
              
              {/* Custom Asterisk Button */}
              <button
                onClick={() => {
                  const principles = ["Sustainable", "Nature—Care", "Smart", "Privacy", "Spacious", "Glassed-in"];
                  const rand = principles[Math.floor(Math.random() * principles.length)];
                  setActiveCategory(rand);
                }}
                className="w-10 h-10 rounded-full bg-[#EAE5DB] text-[#2D2D2D] hover:bg-[#EAE5DB]/80 flex justify-center items-center text-lg font-bold transition-all cursor-pointer shrink-0"
                title="Surprise Me (Random Principle)"
              >
                ✳
              </button>
            </div>
            
            {/* Right side group: Navigation Arrows */}
            <div className="flex items-center gap-2 flex-nowrap shrink-0 ml-auto sm:ml-0">
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
        </div>
        
        {/* Right column: Slider container */}
        <div className="flex-1 min-w-0">
          <div 
            ref={sliderRef}
            className="w-full overflow-x-auto scrollbar-none flex gap-6 pb-6 snap-x snap-mandatory scroll-smooth"
          >
            {loading ? (
              Array.from({ length: 4 }).map((_, idx) => (
                <div
                  key={idx}
                  className="min-w-[280px] sm:min-w-[340px] md:min-w-[380px] lg:min-w-[420px] aspect-[4/5] bg-white rounded-[2rem] p-8 flex flex-col justify-between items-stretch snap-start shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-black/[0.02] animate-pulse select-none"
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
                  to={`/product/${product.id}`}
                  className="catalog-card min-w-[280px] sm:min-w-[340px] md:min-w-[380px] lg:min-w-[420px] aspect-[4/5] bg-white rounded-[2rem] p-8 flex flex-col justify-between items-stretch snap-start shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-black/[0.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 group cursor-pointer no-underline block"
                >
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
                  <div className="flex-1 my-6 flex justify-center items-center overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-h-[85%] max-w-[85%] object-contain select-none transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Bottom info */}
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-bold tracking-[0.15em] text-[#1a1a1a]">
                      {product.line}
                    </span>
                    <span className="text-[0.7rem] uppercase tracking-wider text-[#2C5F2E] font-semibold bg-[#2C5F2E]/5 px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Details
                    </span>
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
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductsCatalog;
