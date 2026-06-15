import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";
import { products } from "../../constants/productsData";

const divisions = [
  { id: "benches", name: "Outdoor Benches", tagline: "WPC, Aluminium, & Concrete architectural benches.", path: "/products/benches", specs: ["FSC Robinia", "Concrete", "HDG Steel"] },
  { id: "aluminium-benches", name: "Aluminium Benches", tagline: "Premium lightweight rust-proof benches.", path: "/products/benches/aluminium-benches", specs: ["Al-Mg-Si Alloy", "Rust Proof", "Akzonobel Coating"] },
  { id: "planters", name: "Planters Boxes", tagline: "Concrete cultivation islands and planters boxes.", path: "/products/planters", specs: ["Lightweight Concrete", "Double-Walled", "Root Protection"] },
  { id: "dustbins", name: "Litter & Recycling Bins", tagline: "Anti-vandalism dual litter recycling receptacles.", path: "/products/dustbins", specs: ["Vandal Resistant", "Segregation Lids", "Casing Locks"] },
  { id: "bus-shelters", name: "Smart Bus Shelters", tagline: "MS/SS intelligent municipal bus stop canopies.", path: "/products/bus-shelters", specs: ["Structural Steel", "Safety Laminated Glass", "Solar Roofing Option"] },
  { id: "car-shelters", name: "Premium Car Shelters", tagline: "High-tensile modular vehicle shading parking canopies.", path: "/products/car-shelters", specs: ["PVDF Tensile Roof", "Cantilever Columns", "EV Ready"] },
  { id: "canteen-tables", name: "Canteen Tables & Sets", tagline: "Heavy-duty outdoor corporate dining furniture.", path: "/products/canteen-tables", specs: ["HPL Panel Slats", "Morse Frame Series", "Corporate Grade"] },
  { id: "cabanas", name: "Luxury Cabanas", tagline: "Premium daybed shade structures for hotels & pools.", path: "/products/cabanas", specs: ["Sunbrella® Fabric", "Powder Coated Steel", "Beverage Racks"] },
  { id: "poolside-loungers", name: "Poolside Loungers", tagline: "Ergonomic weather-proof poolside lounge beds.", path: "/products/poolside-loungers", specs: ["HDPE Synthetic Wicker", "Rustless Aluminium", "Quick-Dry Core"] },
  { id: "wicker-furniture", name: "Wicker Furniture", tagline: "Premium weatherproof outdoor wicker furniture ensembles.", path: "/products/wicker-furniture", specs: ["UV-Resistant HDPE", "Aluminium Frame", "2-Year Guarantee"] },
  { id: "wicker-outdoor-products", name: "Wicker Outdoor Products", tagline: "Premium cabanas, poolside loungers, and wicker living/dining sets.", path: "/products/wicker-furniture/wicker-outdoor-products", specs: ["UV-Resistant HDPE", "Aluminium Frame", "2-Year Guarantee"] },
  { id: "wicker-living-sets", name: "Wicker Living Sets", tagline: "High-density premium polyethylene wicker sofas.", path: "/products/wicker-living-sets", specs: ["UV-Blocked Weave", "Modular Sofa Sections", "Performance Canvas"] },
  { id: "wicker-dining-sets", name: "Wicker Dining Sets", tagline: "Luxury synthetic wicker dining tables and chairs.", path: "/products/wicker-dining-sets", specs: ["Tempered Glass Top", "High-Density Weave", "Leveler Glides"] },
  { id: "indoor-furniture", name: "Indoor Furniture", tagline: "Modern luxury indoor dining and accent furniture.", path: "/products/indoor-furniture", specs: ["Modern Luxury Dining", "Timeless Silhouettes", "Architectural Accents"] },
  { id: "metal-wooden-furniture", name: "Metal & Wooden Furniture", tagline: "Premium architectural steel and timber furniture.", path: "/products/metal-wooden-furniture", specs: ["Structural Timber", "Premium Carbon Steel", "Laser-Cut Joins"] },
  { id: "ss-bollards", name: "SS Bollards", tagline: "High-durability stainless steel safety bollards.", path: "/products/ss-bollards", specs: ["High-Impact SS304/316", "Safety Reflector Rings", "Cast In-Place"] },
  { id: "pergolas", name: "Architectural Pergolas", tagline: "Modern tensioned shading sail and louver structures.", path: "/products/pergolas", specs: ["HDPE Polymer Sails", "High-Tension Rigging", "Severe Weather Proof"] },
  { id: "gazebos", name: "Elegant Gazebos", tagline: "Pre-engineered luxury timber pavilions.", path: "/products/gazebos", specs: ["FSC Teak Pavilions", "Concealed Wiring", "Louver Privacy"] },
  { id: "pre-fab-homes", name: "Pre Fab Homes", tagline: "Modular residential structures and garden cabins.", path: "/products/pre-fab-homes", specs: ["Insulated Chassis", "Eco WPC Cladding", "48h Rapid Install"] }
];

const ProductsHub = () => {
  useEffect(() => {
    updatePageSEO({
      title: "Urban Furniture Divisions Catalog | Urbanland Products",
      description: "Explore Urbanland's extensive catalog of premium street furniture including benches, shelters, sheds, planters, wicker lounge, and steel/aluminum furniture in India.",
      og_type: "website"
    });
    return () => cleanPageSEO();
  }, []);

  return (
    <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-32">
      {/* Editorial Header */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16">
        <p className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mb-3">— Collection Directories</p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none text-[#1A1A1A] max-w-5xl">
          Engineered for <br/>
          <span className="text-[#C9A84C]">Vibrant Environments.</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-[#2D2D2D]/70 max-w-2xl leading-relaxed mt-6">
          We manufacture premium street furniture, shelter systems, and outdoor wicker furniture utilizing hot-dip galvanized steel, Concrete, and FSC-certified timbers. Select a division to explore models.
        </p>
      </section>

      {/* Grid Directory Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisions.map((div) => {
            let lookupId = div.id;
            if (div.id === "aluminium-benches") lookupId = "benches";
            if (div.id === "wicker-furniture") lookupId = "wicker-living-sets";
            let matchedProd = products.find(p => {
              if (div.id === "aluminium-benches") {
                return p.category === "benches" && 
                  ((p.description || "").toLowerCase().includes("aluminium") || 
                   (p.specifications?.materials || "").toLowerCase().includes("aluminium") || 
                   (p.title || "").toLowerCase().includes("aluminium"));
              }
              return p.category === lookupId;
            });
            if (!matchedProd) {
              matchedProd = products.find(p => p.category === "canteen-tables");
            }
            const image = matchedProd ? matchedProd.image : "";
            const secondImage = matchedProd && matchedProd.gallery && matchedProd.gallery[1] ? matchedProd.gallery[1] : "";
            
            const modelCount = (() => {
              if (div.id === "aluminium-benches") {
                return products.filter(p => p.category === "benches" && 
                  ((p.description || "").toLowerCase().includes("aluminium") || 
                   (p.specifications?.materials || "").toLowerCase().includes("aluminium") || 
                   (p.title || "").toLowerCase().includes("aluminium"))
                ).length;
              }
              if (div.id === "wicker-furniture" || div.id === "wicker-outdoor-products") {
                return products.filter(p => p.category === "wicker-living-sets" || p.category === "wicker-dining-sets").length;
              }
              return products.filter(p => p.category === div.id).length;
            })();
            
            return (
              <Link
                key={div.id}
                to={div.path}
                className="catalog-card bg-white rounded-[37.5px] p-6 sm:p-8 flex flex-col justify-between items-stretch shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-black/[0.03] transition-all duration-500 group cursor-pointer no-underline block aspect-[4/5] hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.06)]"
              >
                {/* Header info */}
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-xl md:text-2xl font-light text-[#1a1a1a] tracking-tight leading-tight group-hover:text-black transition-colors duration-300">
                    {div.name}
                  </h3>
                  
                  {/* Model Count Badge matching home page style */}
                  <div className="flex gap-1.5 shrink-0 pt-1">
                    <span className="text-[0.65rem] font-bold uppercase tracking-wider rounded-full px-3 py-1.5 bg-[#C9A84C]/10 text-[#C9A84C]">
                      {modelCount} Models
                    </span>
                  </div>
                </div>

                {/* Middle: Product rendering with dual hover transition */}
                <div className="flex-1 my-6 flex justify-center items-center overflow-hidden relative w-full h-[220px] bg-[#F7F4EF]/60 rounded-2xl">
                  {/* First image */}
                  {image && (
                    <img
                      src={image}
                      alt={`${div.name} manufacturer India — Urbanland Products`}
                      className={`absolute inset-0 max-h-[92%] max-w-[92%] m-auto object-contain select-none transition-opacity duration-700 ease-in-out ${
                        secondImage ? 'group-hover:opacity-0' : ''
                      }`}
                      style={{ mixBlendMode: 'multiply', filter: 'brightness(1.12) contrast(1.05)' }}
                    />
                  )}
                  {/* Second image (UGC installation) */}
                  {secondImage && (
                    <img
                      src={secondImage}
                      alt={`${div.name} installation`}
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl select-none opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
                    />
                  )}
                </div>

                {/* Bottom info */}
                <div className="flex justify-between items-end gap-4">
                  <span className="text-xs sm:text-sm font-medium text-[#1a1a1a]/70 leading-relaxed max-w-[62%] line-clamp-2">
                    {div.tagline}
                  </span>
                  <span className="text-[0.7rem] uppercase tracking-wider text-[#2C5F2E] font-semibold bg-[#2C5F2E]/5 px-4 py-2.5 rounded-full group-hover:bg-[#2C5F2E] group-hover:text-[#F7F4EF] transition-all duration-300 shrink-0 whitespace-nowrap">
                    View Models
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ProductsHub;
