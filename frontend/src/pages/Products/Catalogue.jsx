import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";
import { products } from "../../constants/productsData";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductInquiryModal from "../../components/ProductInquiryModal/ProductInquiryModal";

gsap.registerPlugin(ScrollTrigger);

// Standard layout and design tokens
const categoriesConfig = [
  { id: "all", name: "All Products" },
    { id: "benches", name: "Outdoor Benches" },
  { id: "bus-shelters", name: "Bus Shelters" },
  { id: "cabanas", name: "Cabanas" },
  { id: "canteen-tables", name: "Canteen Tables" },
  { id: "car-shelters", name: "Car Sheds" },
  { id: "dustbins", name: "Dustbins" },
  { id: "gazebos", name: "Gazebos" },
  { id: "pergolas", name: "Pergolas" },
  { id: "planters", name: "Planters" },
  { id: "poolside-loungers", name: "Poolside Loungers" },
  { id: "pre-fab-homes", name: "Pre Fab Homes" },
  { id: "wicker-dining-sets", name: "Wicker Dining" },
  { id: "wicker-living-sets", name: "Wicker Living" },
  { id: "ss-bollards", name: "SS Bollards" },
  { id: "metal-wooden-furniture", name: "Metal & Wooden" }
];

const Catalogue = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState({});
  const pillsRef = useRef(null);
  const containerRef = useRef(null);

  // Dynamic skeleton loading transition
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, [activeCategory, searchTerm]);

  // Set page SEO on mount
  useEffect(() => {
    updatePageSEO({
      title: "Complete Product Catalogue | Urbanland Street Furniture",
      description: "Browse the full collection of Urbanland street furniture, benches, planters, bus shelters, canopies, and wicker outdoor seating. Filter by categories and find matching models.",
      og_type: "website"
    });
    return () => cleanPageSEO();
  }, []);

  // Compute category item counts dynamically from database
  const categoryCounts = useMemo(() => {
    const counts = { all: products.length };
    products.forEach((p) => {
      const cat = p.category;
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter products based on search term and category
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = activeCategory === "all" || p.category === activeCategory;
      const cleanSearch = searchTerm.toLowerCase().trim();
      const matchesSearch =
        !cleanSearch ||
        (p.title || "").toLowerCase().includes(cleanSearch) ||
        (p.line || "").toLowerCase().includes(cleanSearch) ||
        (p.description || "").toLowerCase().includes(cleanSearch) ||
        (p.category || "").toLowerCase().includes(cleanSearch) ||
        (p.id || "").toLowerCase().includes(cleanSearch);
      
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  // Categories slider drag to scroll behavior
  useEffect(() => {
    const el = pillsRef.current;
    if (!el) return;

    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });

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

  // Trigger GSAP entries
  useGSAP(() => {
    gsap.fromTo(
      ".catalogue-card",
      { scale: 0.96, opacity: 0, y: 30 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out",
        overwrite: "auto"
      }
    );
  }, { scope: containerRef, dependencies: [filteredProducts] });

  const scrollPills = (direction) => {
    if (pillsRef.current) {
      const scrollAmount = direction === "left" ? -250 : 250;
      pillsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div ref={containerRef} className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-32">
      {/* Header section */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 mb-12">
        <p className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mb-3">— Comprehensive Archive</p>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none text-[#1A1A1A]">
              Product <br/>
              <span className="text-[#C9A84C]">Catalogue.</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#2D2D2D]/70 max-w-xl leading-relaxed mt-6">
              Search and filter our complete database of high-performance architectural street furniture, shelters, planters, safety elements, and custom wicker outdoor collections.
            </p>
          </div>
          
          {/* Elegant Search Input */}
          <div className="w-full lg:max-w-md relative mt-4 lg:mt-0">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[#2C5F2E]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search by model, code, or material..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-full bg-white border border-[#2D2D2D]/15 text-[#1A1A1A] font-semibold text-sm placeholder-[#2D2D2D]/45 focus:outline-none focus:border-[#2C5F2E] focus:ring-1 focus:ring-[#2C5F2E] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.015)]"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-[#2D2D2D]/50 hover:text-black font-semibold text-xs cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Category Selection Filter Bar */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 mb-12">
        <div className="w-full flex items-center justify-between pb-4 border-b border-[#2D2D2D]/10 relative overflow-hidden">
          
          {/* Left arrow pill button */}
          <button
            onClick={() => scrollPills("left")}
            className="w-9 h-9 rounded-full bg-[#EAE5DB] text-[#2D2D2D] hover:bg-[#EAE5DB]/85 flex justify-center items-center transition-all cursor-pointer shrink-0 mr-3 shadow-sm active:scale-95"
            aria-label="Scroll left"
          >
            <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Navigation Pills list */}
          <div ref={pillsRef} className="flex-1 overflow-x-auto scrollbar-none flex items-center gap-2.5 py-1 pr-4 scroll-smooth">
            {categoriesConfig.map((cat) => {
              const count = categoryCounts[cat.id] || 0;
              const isActive = activeCategory === cat.id;

              // Hide empty categories dynamically
              if (count === 0 && cat.id !== "all") return null;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-normal uppercase tracking-wider transition-all duration-300 cursor-pointer shrink-0 border ${
                    isActive
                      ? "bg-[#2C5F2E] text-[#F7F4EF] border-[#2C5F2E] shadow-sm"
                      : "bg-[#2D2D2D]/5 text-[#2D2D2D] border-[#2D2D2D]/10 hover:bg-[#2D2D2D]/10"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`text-[0.6rem] font-extrabold px-1.5 py-0.5 rounded-full ${
                    isActive ? "bg-white/20 text-[#F7F4EF]" : "bg-black/10 text-black/55"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right arrow pill button */}
          <button
            onClick={() => scrollPills("right")}
            className="w-9 h-9 rounded-full bg-[#2C5F2E] text-[#F7F4EF] hover:bg-[#2C5F2E]/90 flex justify-center items-center shadow-md transition-all cursor-pointer shrink-0 ml-3 active:scale-95"
            aria-label="Scroll right"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>
      </section>

      {/* Grid of Catalogue Cards */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[37.5px] p-6 flex flex-col justify-between items-stretch shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-black/[0.02] aspect-[4/5] animate-pulse"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="h-6 w-28 bg-black/10 rounded-lg" />
                  <div className="h-4 w-12 bg-black/10 rounded-full" />
                </div>
                <div className="flex-1 my-4 flex justify-center items-center overflow-hidden relative w-full h-[180px] bg-[#F7F4EF]/45 rounded-2xl">
                  <div className="w-[80%] h-[80%] bg-black/5 rounded-xl" />
                </div>
                <div className="flex justify-between items-end gap-3 pt-2">
                  <div className="h-3 w-2/3 bg-black/10 rounded-md" />
                  <div className="h-8 w-20 bg-[#2C5F2E]/10 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.map((p) => {
              const secondImage = p.gallery && p.gallery[1] ? p.gallery[1] : "";
              const isImageLoaded = loadedImages[p.id];

              return (
                <div
                  key={p.id}
                  onClick={() => setSelectedProduct(p)}
                  className="catalogue-card bg-white rounded-[37.5px] p-6 flex flex-col justify-between items-stretch shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-black/[0.02] transition-all duration-500 group cursor-pointer aspect-[4/5] hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.05)]"
                >
                  {/* Header info with badge overlays */}
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-lg font-light text-[#1A1A1A] tracking-tight leading-tight group-hover:text-black transition-colors duration-300">
                      {p.title}
                    </h3>
                    <div className="flex flex-col gap-1 items-end">
                      {p.badges?.slice(0, 2).map((badge, idx) => (
                        <span
                          key={idx}
                          className={`text-[0.55rem] font-light uppercase tracking-wider rounded-full px-2 py-0.5 whitespace-nowrap ${
                            badge.toLowerCase() === "new"
                              ? "bg-[#2C5F2E] text-white"
                              : "bg-[#C9A84C]/10 text-[#C9A84C]"
                          }`}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Rendering with hover overlay */}
                  <div className="flex-1 my-4 flex justify-center items-center overflow-hidden relative w-full h-[180px] bg-[#F7F4EF]/45 rounded-2xl">
                    {!isImageLoaded && (
                      <div className="absolute inset-0 bg-black/[0.02] animate-pulse rounded-2xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#2C5F2E]/25 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                        </svg>
                      </div>
                    )}
                    <img
                      src={p.image}
                      alt={`${p.title} street furniture`}
                      loading="lazy"
                      decoding="async"
                      onLoad={() => setLoadedImages(prev => ({ ...prev, [p.id]: true }))}
                      className={`absolute inset-0 max-h-[92%] max-w-[92%] m-auto object-contain select-none transition-all duration-500 ease-in-out ${
                        isImageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                      } ${secondImage ? "group-hover:opacity-0" : ""}`}
                      style={{ mixBlendMode: "multiply", filter: "brightness(1.12) contrast(1.05)" }}
                    />
                    {secondImage && (
                      <img
                        src={secondImage}
                        alt={`${p.title} installation`}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover rounded-2xl select-none opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                      />
                    )}
                  </div>

                  {/* Bottom tagline and routing indicator */}
                  <div className="flex justify-between items-end gap-3 pt-2">
                    <span className="text-[0.7rem] font-semibold text-[#1A1A1A]/60 line-clamp-2 max-w-[65%] leading-snug">
                      {p.line}
                    </span>
                    <span className="text-[0.65rem] uppercase tracking-wider text-[#2C5F2E] font-bold bg-[#2C5F2E]/5 px-3 py-2 rounded-full group-hover:bg-[#2C5F2E] group-hover:text-[#F7F4EF] transition-all duration-300 whitespace-nowrap">
                      Details →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Premium Empty State details */
          <div className="w-full py-24 flex flex-col justify-center items-center text-center bg-white rounded-[37.5px] border border-black/[0.02] px-8 max-w-2xl mx-auto shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#2D2D2D]/5 flex justify-center items-center text-[#2D2D2D]/40 mb-6 animate-pulse">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold uppercase text-[#1A1A1A] mb-2">No Matching Products</h3>
            <p className="text-sm text-[#2D2D2D]/60 max-w-sm mb-8 leading-relaxed">
              We couldn't find any models matching "{searchTerm}" under the selected category. Try checking your spelling or selecting another filter.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("all");
              }}
              className="px-6 py-3 bg-[#2C5F2E] hover:bg-black text-[#F7F4EF] rounded-full font-bold uppercase tracking-wider text-[10px] transition-colors duration-300 cursor-pointer shadow-md"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
      {selectedProduct && (
        <ProductInquiryModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
};

export default Catalogue;
