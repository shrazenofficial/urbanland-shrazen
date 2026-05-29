import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";
import { products } from "../../constants/productsData";

const divisions = [
  { id: "benches", name: "Outdoor Benches", count: 18, tagline: "WPC, Aluminium, & GFRC architectural benches.", path: "/products/benches" },
  { id: "bench-planters", name: "Bench Planters", count: 8, tagline: "Integrated WPC seating and concrete planter boxes.", path: "/products/bench-planters" },
  { id: "planters", name: "Planters Boxes", count: 12, tagline: "GFRC cultivation islands and planters boxes.", path: "/products/planters" },
  { id: "dustbins", name: "Litter & Recycling Bins", count: 8, tagline: "Anti-vandalism dual litter recycling receptacles.", path: "/products/dustbins" },
  { id: "bus-shelters", name: "Smart Bus Shelters", count: 6, tagline: "MS/SS intelligent municipal bus stop canopies.", path: "/products/bus-shelters" },
  { id: "car-shelters", name: "Premium Car Shelters", count: 4, tagline: "High-tensile modular vehicle shading parking canopies.", path: "/products/car-shelters" },
  { id: "canteen-tables", name: "Canteen Tables & Sets", count: 5, tagline: "Heavy-duty outdoor corporate dining furniture.", path: "/products/canteen-tables" },
  { id: "pergolas", name: "Architectural Pergolas", count: 6, tagline: "Modern tensioned shading sail and louver structures.", path: "/products/pergolas" },
  { id: "gazebos", name: "Elegant Gazebos", count: 5, tagline: "Pre-engineered luxury timber pavilions.", path: "/products/gazebos" },
  { id: "cabanas", name: "Luxury Cabanas", count: 3, tagline: "Premium daybed shade structures for hotels & pools.", path: "/products/cabanas" },
  { id: "pre-fab-homes", name: "Pre Fab Homes", count: 4, tagline: "Modular residential structures and garden cabins.", path: "/products/pre-fab-homes" },
  { id: "poolside-loungers", name: "Poolside Loungers", count: 6, tagline: "Ergonomic weather-proof poolside lounge beds.", path: "/products/poolside-loungers" },
  { id: "wicker-living-sets", name: "Wicker Living Sets", count: 14, tagline: "High-density premium polyethylene wicker sofas.", path: "/products/wicker-living-sets" },
  { id: "wicker-dining-sets", name: "Wicker Dining Sets", count: 10, tagline: "Luxury synthetic wicker dining tables and chairs.", path: "/products/wicker-dining-sets" }
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
        <p className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3">— Collection Directories</p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none text-[#1A1A1A] max-w-5xl">
          Engineered for <br/>
          <span className="text-[#C9A84C]">Vibrant Environments.</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-[#2D2D2D]/70 max-w-2xl leading-relaxed mt-6">
          We manufacture premium street furniture, shelter systems, and outdoor wicker furniture utilizing hot-dip galvanized steel, GFRC, and FSC-certified timbers. Select a division to explore models.
        </p>
      </section>

      {/* Grid Directory Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisions.map((div) => {
            const matchedProd = products.find(p => p.category === div.id);
            const image = matchedProd ? matchedProd.image : "";
            
            return (
              <Link
                key={div.id}
                to={div.path}
                className="bg-white rounded-[2.5rem] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between aspect-[16/14] cursor-pointer group no-underline"
              >
                <div>
                  <div className="flex justify-between items-center w-full mb-4 select-none">
                    <span className="text-[8px] font-black uppercase tracking-widest text-[#C9A84C] bg-[#C9A84C]/10 px-3 py-1 rounded-full">
                      {div.count} Models
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-black/35 group-hover:text-[#2C5F2E] transition-colors">
                      Explore →
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight uppercase text-[#1A1A1A] group-hover:text-[#2C5F2E] transition-colors leading-none mb-2">
                    {div.name}
                  </h3>
                  <p className="text-xs text-[#2D2D2D]/60 leading-relaxed max-w-[90%]">
                    {div.tagline}
                  </p>
                </div>
                
                {/* Card visual showcase */}
                <div className="w-full h-[50%] rounded-2xl overflow-hidden bg-black/5 relative mt-4 select-none">
                  {image && (
                    <img 
                      src={image} 
                      alt={div.name}
                      className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-700 ease-out"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
