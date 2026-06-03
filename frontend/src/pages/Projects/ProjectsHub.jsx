import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";
import CTASection from "../../components/CTASection/CTASection";

// Import images
import gbg1 from '../../assets/gallery_real_estate.png';
import gbg2 from '../../assets/gallery_hotels.png';
import gbg3 from '../../assets/gallery_hospitals.png';
import gbg4 from '../../assets/gallery_education.png';
import gbg5 from '../../assets/gallery_smart_city.png';

const developers = [
  { 
    id: "lodha", 
    name: "Lodha Group", 
    segment: "lodha", 
    image: gbg1, 
    tagline: "Townships Nationwide", 
    metrics: "420+ Benches & Planters cladded in FSC WPC & stainless steel.",
    details: "FSC WPC & Marine SS-304 Cladding",
    projectsCount: "12 Sites"
  },
  { 
    id: "adani", 
    name: "Adani Realty", 
    segment: "adani", 
    image: gbg5, 
    tagline: "Residential Infrastructure", 
    metrics: "Complete site outdoor supply: benches, trashbins, planters boxes, car ports.",
    details: "Benches, trashbins, planters, car shelters",
    projectsCount: "8 Sites"
  },
  { 
    id: "oberoi", 
    name: "Oberoi Realty", 
    segment: "oberoi", 
    image: gbg2, 
    tagline: "Luxury & Hospitality", 
    metrics: "Premium handcrafted wicker furniture, cabanas, and sunscape lounge chairs.",
    details: "Sunscape lounge chairs & premium wicker",
    projectsCount: "6 Sites"
  }
];

const cities = [
  { id: "mumbai", name: "Mumbai Region", segment: "mumbai", count: 24, description: "Coastal-grade WPC furniture & smart shelters" },
  { id: "delhi", name: "Delhi NCR", segment: "delhi", count: 18, description: "High-density transit & corporate park benches" },
  { id: "bangalore", name: "Bangalore", segment: "bangalore", count: 15, description: "LEED certified eco-resort outdoor dining sets" },
  { id: "pune", name: "Pune", segment: "pune", count: 12, description: "Pedestrian corridors & anti-corrosion benches" }
];

const stats = [
  { value: "50+", label: "Smart Cities Supplied" },
  { value: "80+", label: "Developer Partnerships" },
  { value: "5000+", label: "Units Installed" },
  { value: "100%", label: "Recyclable Materials" }
];

const ProjectsHub = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    updatePageSEO({
      title: "Completed Urban Projects | Urbanland Products",
      description: "Explore Urbanland's completed furniture supplies and architectural site showcases for Lodha, Adani, and Oberoi across major Indian metros.",
      og_image: gbg1
    });
    return () => cleanPageSEO();
  }, []);

  return (
    <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-0">
      {/* Hero Section */}
      <section className="relative w-full h-[100vh] md:h-dvh bg-[#1A2E1C] text-white overflow-hidden select-none border-b border-black/10 flex items-center">
        {/* Subtle grid layout overlays */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none" 
             style={{ 
               backgroundImage: "radial-gradient(circle, #C9A84C 1px, transparent 1px)", 
               backgroundSize: "24px 24px" 
             }} 
        />
        <div className="absolute -left-32 -top-32 w-96 h-96 bg-[#2C5F2E] rounded-full blur-[100px] opacity-40 pointer-events-none" />
        <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-[#C9A84C] rounded-full blur-[100px] opacity-35 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="w-full lg:w-[55%] text-left">
            <span className="text-[9px] sm:text-xs font-black uppercase tracking-[0.25em] text-[#C9A84C] bg-[#C9A84C]/10 px-4 py-2 rounded-full mb-6 inline-block border border-[#C9A84C]/25 shadow-sm">
              ★ Architectural Footprint
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7.5xl font-black tracking-tight uppercase leading-[0.9] text-white">
              Completed <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A84C] to-[#E5C76B]">Projects.</span>
            </h1>
            <p className="text-xs sm:text-sm text-white/70 max-w-xl leading-relaxed mt-6">
              We engineer, manufacture, and deliver site amenity infrastructure for India's landmark developments. Exploring our portfolios of scale, quality, and environmental compliance.
            </p>
          </div>

          <div className="w-full lg:w-[40%] grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md rounded-[1.75rem] p-6 border border-white/10 hover:border-[#C9A84C]/45 hover:bg-white/10 transition-all duration-300 group shadow-lg">
                <span className="block text-3xl md:text-4xl font-black uppercase text-[#C9A84C] group-hover:scale-103 transition-transform">{stat.value}</span>
                <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-white/55 mt-2 block leading-snug">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mt-16 mb-8 text-center sm:text-left select-none">
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-black/[0.06] pb-6">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-1.5 block">— Filter Showcases</span>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#1A1A1A]">Select Project Class</h2>
          </div>
          
          <div className="flex bg-[#EAE5DB]/40 p-1.5 rounded-full border border-black/[0.04]">
            <button 
              onClick={() => setActiveFilter("all")} 
              className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${activeFilter === "all" ? "bg-[#2C5F2E] text-white shadow-sm" : "text-[#2D2D2D]/60 hover:text-black"}`}
            >
              All Showcases
            </button>
            <button 
              onClick={() => setActiveFilter("developers")} 
              className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${activeFilter === "developers" ? "bg-[#2C5F2E] text-white shadow-sm" : "text-[#2D2D2D]/60 hover:text-black"}`}
            >
              Developers
            </button>
            <button 
              onClick={() => setActiveFilter("cities")} 
              className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${activeFilter === "cities" ? "bg-[#2C5F2E] text-white shadow-sm" : "text-[#2D2D2D]/60 hover:text-black"}`}
            >
              Metro Areas
            </button>
          </div>
        </div>
      </section>

      {/* Developer Segment list */}
      {(activeFilter === "all" || activeFilter === "developers") && (
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 animate-fadeIn">
          {activeFilter === "all" && (
            <h2 className="text-lg font-black uppercase tracking-tight text-[#1A1A1A] mb-8 border-b border-[#2D2D2D]/10 pb-4 select-none">
              Client Developers Portfolios:
            </h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {developers.map((dev) => (
              <Link
                key={dev.id}
                to={`/projects/${dev.segment}`}
                className="group relative bg-[#2D2D2D] rounded-[2.5rem] overflow-hidden aspect-[16/15] flex flex-col justify-end p-8 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer no-underline border border-black/5"
              >
                {/* Background cover image */}
                <div className="absolute inset-0 z-0 transition-transform duration-700 ease-out transform group-hover:scale-105">
                  <img src={dev.image} alt={dev.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-45 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />
                </div>

                {/* Content over image */}
                <div className="relative z-10 w-full text-left">
                  <div className="flex justify-between items-center w-full mb-4">
                    <span className="text-[8px] font-black uppercase tracking-widest text-[#C9A84C] bg-[#C9A84C]/10 border border-[#C9A84C]/35 px-3 py-1.5 rounded-full">
                      {dev.projectsCount}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-wider text-white/50 group-hover:text-[#C9A84C] group-hover:translate-x-1.5 transition-all">
                      View Case →
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3.5xl font-black tracking-tight uppercase text-white group-hover:text-[#C9A84C] transition-colors leading-none mb-2">
                    {dev.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-wider font-mono">
                    {dev.tagline}
                  </p>
                  
                  {/* Glassmorphic Slide-up Drawer */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-28 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden mt-2 border-t border-white/10 pt-3">
                    <p className="text-[11px] text-white/80 leading-relaxed font-medium">
                      {dev.metrics}
                    </p>
                    <p className="text-[10px] text-white/50 font-bold uppercase tracking-wider mt-1.5">
                      Spec: {dev.details}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Cities Segment List */}
      {(activeFilter === "all" || activeFilter === "cities") && (
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 animate-fadeIn">
          {activeFilter === "all" && (
            <h2 className="text-lg font-black uppercase tracking-tight text-[#1A1A1A] mb-8 border-b border-[#2D2D2D]/10 pb-4 select-none">
              Metro Area Showcases:
            </h2>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {cities.map((city) => (
              <Link
                key={city.id}
                to={`/projects/${city.segment}`}
                className="relative bg-white rounded-[2rem] border border-black/[0.04] p-8 shadow-sm hover:shadow-xl hover:border-[#2C5F2E]/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between aspect-square group no-underline text-[#1A1A1A] overflow-hidden"
              >
                {/* Decorative blueprint grids */}
                <div className="absolute -right-8 -bottom-8 w-24 h-24 border-t border-l border-[#2C5F2E]/5 rounded-tl-full pointer-events-none z-0 group-hover:border-[#2C5F2E]/20 transition-colors duration-300" />
                
                <div className="relative z-10 w-full text-left">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#2C5F2E] bg-[#2C5F2E]/5 border border-[#2C5F2E]/10 px-3 py-1.5 rounded-full inline-block mb-4">
                    {city.count} installations
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight group-hover:text-[#2C5F2E] transition-colors">
                    {city.name}
                  </h4>
                  <p className="text-[11px] text-[#2D2D2D]/60 mt-3 leading-relaxed font-semibold max-h-0 opacity-0 group-hover:max-h-16 group-hover:opacity-100 transition-all duration-300">
                    {city.description}
                  </p>
                </div>
                
                <span className="relative z-10 text-[10px] font-black uppercase tracking-wider text-black/35 group-hover:text-[#2C5F2E] transition-colors mt-6 block">
                  Explore City →
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Reusable CTA Section */}
      <CTASection 
        title="Ready to Specify Urbanland Products for Your Project?"
        description="Partner with India's leading manufacturer of sustainable outdoor furniture. Get customized CAD drawings and quotation packages within 24 hours."
        tagText="Collaborate with Urbanland"
        primaryText="Initiate Quote Builder →"
        primaryLink="/contact"
        secondaryText="View Case Studies PDF ↓"
        secondaryLink="/resources/downloads"
      />
    </div>
  );
};

export default ProjectsHub;
