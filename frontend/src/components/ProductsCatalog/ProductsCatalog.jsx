import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import product images
import benchPlanterImg from "../../assets/products/Product Images/Bench Planter/Make_it_8k_resolution_image_202605170101.jpeg";
import benchesImg from "../../assets/products/Product Images/Benches/Create_a_clean,_premium,_professional_202605162312.jpeg";
import busSheltersImg from "../../assets/products/Product Images/Bus Shelters/Create_a_clean,_premium,_professional_202605170115.jpeg";
import cabanasImg from "../../assets/products/Product Images/Cabanas/Create_a_clean,_premium,_professional_202605170136.jpeg";
import caneFurniture2Img from "../../assets/products/Product Images/Cane Furniture/2 Items.jpeg";
import caneFurniture3Img from "../../assets/products/Product Images/Cane Furniture/3 Items.jpeg";
import canteenTableImg from "../../assets/products/Product Images/Canteen Table/Create_a_clean,_premium,_professional_202605170053.jpeg";
import carShelterImg from "../../assets/products/Product Images/Car Shelter/Create_a_clean,_premium,_professional_202605170216.jpeg";
import dustbinsImg from "../../assets/products/Product Images/Dustbins/Create_a_clean,_premium,_professional_202605170106.jpeg";
import plantersBoxImg from "../../assets/products/Product Images/Planters Box/Create_a_clean,_premium,_professional_202605170111.jpeg";
import poolsideLoungersImg from "../../assets/products/Product Images/Poolside Loungers/Create_a_clean,_premium,_professional_202605170154.jpeg";

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

const products = [
  {
    id: "platform",
    title: "Cultivation Island",
    line: "PLATFORM",
    category: "parklets",
    image: benchPlanterImg,
    badges: ["modular", "new"]
  },
  {
    id: "morse",
    title: "Message for the future",
    line: "MORSE",
    category: "seating",
    image: canteenTableImg,
    badges: ["modular", "new"]
  },
  {
    id: "morse-dot",
    title: "Morse Dot: A Random Turn for a Random Encounter",
    line: "MORSE DOT",
    category: "seating",
    image: poolsideLoungersImg,
    badges: ["modular", "new"]
  },
  {
    id: "linfa",
    title: "Visually Light, Exceptionally Strong",
    line: "LINFA",
    category: "seating",
    image: benchesImg,
    badges: ["new"]
  },
  {
    id: "aero-shelter",
    title: "Transit Shelter System",
    line: "AERO",
    category: "shelters",
    image: busSheltersImg,
    badges: ["smart"]
  },
  {
    id: "kubus",
    title: "Litter & Recycling Bin System",
    line: "KUBUS",
    category: "bins",
    image: dustbinsImg,
    badges: ["essential"]
  },
  {
    id: "cube-planter",
    title: "Green Oasis Modular Planter",
    line: "CUBE PLANTER",
    category: "parklets",
    image: plantersBoxImg,
    badges: ["modular"]
  },
  {
    id: "sunscape",
    title: "Private Oasis in the Warm Sun",
    line: "SUNSCAPE",
    category: "outdoor-furniture",
    image: cabanasImg,
    badges: ["premium", "new"]
  },
  {
    id: "car-port",
    title: "Solar-Ready Protection for Vehicles",
    line: "CAR PORT",
    category: "shelters",
    image: carShelterImg,
    badges: ["eco", "new"]
  },
  {
    id: "cane-double",
    title: "Wicker Harmony Double Seater",
    line: "CANE DOUBLE",
    category: "outdoor-furniture",
    image: caneFurniture2Img,
    badges: ["handcrafted"]
  },
  {
    id: "cane-set",
    title: "Wicker Harmony Lounge Set",
    line: "CANE SET",
    category: "children",
    image: caneFurniture3Img,
    badges: ["handcrafted", "new"]
  }
];

const ProductsCatalog = ({ showTitle = true }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  // Filter products based on selected category
  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter(p => p.category === activeCategory);

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
          : "mt-12"
      }`}
    >
      {/* Title block */}
      {showTitle && (
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8 catalog-title">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-[#0a7c41] mb-2">Our Collection</p>
            <h2 className="text-4xl lg:text-6xl font-medium tracking-tight text-[#f4efe7]">
              Urban furniture that connects.
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#b1a696] max-w-sm">
            Discover modular designs built to blend natural aesthetics with sustainable, smart urban living.
          </p>
        </div>
      )}

      {/* Navigation and Category pills */}
      <div className="w-full flex justify-between items-center gap-4 catalog-pills-row">
        {/* Pills container */}
        <div className="flex-1 overflow-x-auto scrollbar-none flex items-center gap-3 pr-4 py-1">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium tracking-wide whitespace-nowrap cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black shadow-md border border-white"
                    : "bg-white/5 text-[#b1a696] border border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Scroll Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border border-white/10 flex justify-center items-center bg-white/5 text-white hover:bg-white/10 transition-all cursor-pointer"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full bg-white text-black flex justify-center items-center hover:bg-white/90 transition-all cursor-pointer shadow-md"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Slider Carousel Container */}
      <div 
        ref={sliderRef}
        className="w-full overflow-x-auto scrollbar-none flex gap-6 pb-6 snap-x snap-mandatory scroll-smooth"
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="catalog-card min-w-[280px] sm:min-w-[340px] md:min-w-[380px] lg:min-w-[420px] aspect-[4/5] bg-white rounded-[2rem] p-8 flex flex-col justify-between items-stretch snap-start shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-black/[0.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 group"
          >
            {/* Header info */}
            <div className="flex justify-between items-start gap-4">
              <h3 className="text-xl md:text-2xl font-light text-[#1c1a19] tracking-tight leading-tight group-hover:text-black transition-colors duration-300">
                {product.title}
              </h3>
              
              {/* Badges */}
              <div className="flex gap-1.5 shrink-0 pt-1">
                {product.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className={`text-[0.65rem] font-bold uppercase tracking-wider rounded-full px-2.5 py-1 ${
                      badge === "new"
                        ? "bg-[#ff5a1f] text-white"
                        : "bg-[#7c756b]/10 text-[#524f4c]"
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
              <span className="text-sm font-bold tracking-[0.15em] text-[#1c1a19]">
                {product.line}
              </span>
              <span className="text-[0.7rem] uppercase tracking-wider text-[#0a7c41] font-semibold bg-[#0a7c41]/5 px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Details
              </span>
            </div>
          </div>
        ))}

        {filteredProducts.length === 0 && (
          <div className="w-full py-20 flex flex-col justify-center items-center text-center">
            <svg className="w-12 h-12 text-[#7c756b]/40 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <p className="text-[#524f4c]">No products currently in this category.</p>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default ProductsCatalog;
