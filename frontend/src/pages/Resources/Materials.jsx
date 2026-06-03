import React, { useState, useEffect } from "react";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

// Import premium images
import materialsShowcase from "../../assets/materials_showcase.png";
import wpcTexture from "../../assets/wpc_texture.png";
import nfcTexture from "../../assets/nfc_texture.png";
import aluminiumTexture from "../../assets/aluminium_texture.png";
import mildSteelTexture from "../../assets/mild_steel_texture.png";
import stainlessSteelTexture from "../../assets/stainless_steel_texture.png";

import galvanizationSpec from "../../assets/galvanization_spec.png";
import concreteSpec from "../../assets/concrete_spec.png";
import wickerSpec from "../../assets/wicker_spec.png";

const materialsList = [
  {
    id: "wpc",
    name: "WPC (Wood-Plastic Composite)",
    lifespan: "12–15 Years",
    maintenance: "Very Low (No painting/staining)",
    sustainability: "Excellent (Made from recycled plastics & wood fibers)",
    sustainabilityScore: "9.2/10",
    bestFor: "Gardens, balconies, premium residential walkways",
    costFactor: "1.6–2.0×",
    description: "Formulated from 60% reclaimed wood fibers and 40% recycled high-density polymers. WPC delivers the warm organic texture and visual profile of timber but with complete immunity to moisture decay, splitting, insect invasion, and rotting. Highly circular and zero-maintenance.",
    image: wpcTexture
  },
  {
    id: "nfc",
    name: "NFC Wood (Natural Fiber Composite)",
    lifespan: "15–20+ Years",
    maintenance: "Very Low (Advanced color shielding)",
    sustainability: "Excellent (Uses post-consumer rice husk fibers & circular polymers)",
    sustainabilityScore: "9.8/10",
    bestFor: "High-end commercial landscapes, heavy public decks",
    costFactor: "2.0–2.8×",
    description: "An advanced, second-generation biopolymer composite utilizing agricultural rice husks (60%) and circular polymers. Offers superior flexural strength (18-22 MPa) and a unique premium matte finish. It expands and contracts significantly less than standard wood or WPC, ensuring absolute structural flatness.",
    image: nfcTexture
  },
  {
    id: "aluminium",
    name: "Architectural Aluminium",
    lifespan: "15–20+ Years",
    maintenance: "Minimal (Occasional clean)",
    sustainability: "Very Good (100% recyclable, energy-efficient extrusion)",
    sustainabilityScore: "8.5/10",
    bestFor: "Coastal properties, marine walkways, rooftop terraces",
    costFactor: "2.2–2.8×",
    description: "Premium-grade structural aluminium alloy extrusions. Because it is naturally rust-proof and exceptionally lightweight, it is perfect for structural components, poolside loungers, and high-salinity marine environments. Finished with architectural-grade thermoset powder coatings.",
    image: aluminiumTexture
  },
  {
    id: "mild-steel",
    name: "Mild Steel (Powder Coated)",
    lifespan: "8–12 Years",
    maintenance: "Low (Rust inspection every 2 years)",
    sustainability: "Good (Fully recyclable material loop)",
    sustainabilityScore: "7.8/10",
    bestFor: "Municipal transit shelters, public parks, high-traffic bins",
    costFactor: "Base (1.0×)",
    description: "Heavy structural carbon steel components. All mild steel assemblies undergo an absolute multi-stage preparation process: complete hot-dip galvanization conforming to ISO 1461, zinc-rich epoxy priming, and an architectural-grade polyester powder-coating finish.",
    image: mildSteelTexture
  },
  {
    id: "stainless-steel",
    name: "Grade 304/316 Stainless Steel",
    lifespan: "15–20+ Years",
    maintenance: "Very Low (Anti-fingerprint/acid wash)",
    sustainability: "Very Good (Highly recyclable structural content)",
    sustainabilityScore: "8.8/10",
    bestFor: "Luxury gated communities, high-traffic commercial entries",
    costFactor: "2.5–3.0×",
    description: "High-chromium marine-grade stainless steel. Delivers peerless structural strength and ultimate corrosion resistance in the most punishing weather exposures. Polished to a premium satin finish, making it the preferred choice for elite corporate landscapes.",
    image: stainlessSteelTexture
  }
];

const Materials = () => {
  const [selectedMaterial, setSelectedMaterial] = useState("wpc");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", material: "WPC", details: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    updatePageSEO({
      title: "Sustainable Materials Guide | WPC, NFC & Metals | Urbanland Products",
      description: "Complete comparison of sustainable outdoor furniture materials – WPC, NFC Wood, Aluminium, Mild Steel and Stainless Steel. Lifespan, maintenance, sustainability, and technical specs for commercial projects."
    });
    return () => cleanPageSEO();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.company) {
      setSubmitted(true);
    }
  };

  const activeMaterialData = materialsList.find(m => m.id === selectedMaterial) || materialsList[0];

  return (
    <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-32">
      {/* Hero Header */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16">
        <p className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mb-3">— Material Engineering Guide</p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none text-[#1A1A1A] max-w-5xl">
          Sustainable <br/>
          <span className="text-[#C9A84C]">Materials & Science.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#2D2D2D]/70 max-w-2xl leading-relaxed mt-6">
          Choosing the right material is critical for long-lasting, beautiful and eco-friendly outdoor layouts. Every Urbanland product is engineered utilizing circular, highly-recyclable, and weather-stabilized materials optimized for severe tropical exposures.
        </p>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap gap-y-2 gap-x-4 text-xs font-semibold text-[#2C5F2E] bg-[#EAE5DB]/40 px-5 py-3 rounded-full border border-black/[0.04] w-fit">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>WPC & NFC – Reclaiming Natural Fibers</span>
          </span>
          <span className="opacity-30">|</span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>ISO 9001:2015 Structural Auditing</span>
          </span>
          <span className="opacity-30">|</span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>2-Year Comprehensive Material Guarantee</span>
          </span>
        </div>
      </section>

      {/* Split Showcase: Brand Image & Materials Logic */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E]">— Engineered For Longevity</span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black leading-tight">
            Why Traditional Timber is Increasingly Replaced
          </h2>
          <p className="text-xs sm:text-sm text-[#2D2D2D]/70 leading-relaxed">
            In India's diverse climate, outdoor furniture faces intense solar heat, heavy monsoon deluges, and aggressive pests. Traditional hardwoods like teak, acacia, and sheesham are prone to biological rot, structural warping, splitting, and require expensive annual re-oiling and maintenance.
          </p>
          <p className="text-xs sm:text-sm text-[#2D2D2D]/70 leading-relaxed">
            Our next-generation WPC and NFC Wood materials solve these problems completely. By combining agricultural post-consumer fibers with recycled polymers, they offer unmatched durability, 100% moisture immunity, and zero structural painting or staining maintenance—while contributing directly to <strong>IGBC, GRIHA, and LEED</strong> green building credits.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <a href="#materials-comparison" className="inline-block px-7 py-4 bg-[#2C5F2E] text-white rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#2D2D2D] transition-colors shadow-md no-underline">
              Compare Materials ↓
            </a>
            <a href="#sample-request" className="inline-block px-7 py-4 bg-[#2D2D2D] text-white rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#C9A84C] transition-colors shadow-md no-underline">
              Request Samples →
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl relative bg-black/5">
          <img
            src={materialsShowcase}
            alt="Urbanland premium composite materials and powder-coated steel close-up showcase"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </section>

      {/* Materials Comparison Matrix */}
      <section id="materials-comparison" className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
        <div className="mb-10 text-center md:text-left">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C] block mb-2">— Comparison Matrix</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#1A1A1A]">
            Materials Performance Matrix
          </h2>
          <p className="text-xs sm:text-sm text-black/55 mt-2">
            Click on any material row in the table below to inspect its detailed specifications, engineering details, and applications.
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="overflow-x-auto bg-white rounded-[2.5rem] border border-black/[0.04] p-4 md:p-8 shadow-[0_12px_45px_rgba(0,0,0,0.015)]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-black/[0.06] text-[10px] font-black uppercase tracking-widest text-black/50">
                <th className="py-4 px-4">Material</th>
                <th className="py-4 px-4">Lifespan</th>
                <th className="py-4 px-4">Maintenance</th>
                <th className="py-4 px-4">Sustainability Score</th>
                <th className="py-4 px-4">Cost vs Mild Steel</th>
                <th className="py-4 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="text-xs font-semibold text-black/85">
              {materialsList.map((m) => {
                const isActive = selectedMaterial === m.id;
                return (
                  <tr 
                    key={m.id}
                    onClick={() => setSelectedMaterial(m.id)}
                    className={`border-b border-black/[0.03] transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? "bg-[#2C5F2E]/5 text-[#2C5F2E]" 
                        : "hover:bg-[#F7F4EF]/50"
                    }`}
                  >
                    <td className="py-6 px-4 font-black uppercase tracking-tight flex items-center gap-3.5">
                      <img src={m.image} alt={m.name} className="w-8 h-8 rounded-lg object-cover border border-black/10 shrink-0" />
                      <span>{m.name}</span>
                    </td>
                    <td className="py-6 px-4">{m.lifespan}</td>
                    <td className="py-6 px-4">{m.maintenance}</td>
                    <td className="py-6 px-4">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 bg-[#2C5F2E] rounded-full" />
                        <strong>{m.sustainabilityScore}</strong>
                      </div>
                    </td>
                    <td className="py-6 px-4 font-mono font-bold text-black/60">{m.costFactor}</td>
                    <td className="py-6 px-4 text-right">
                      <span className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-wider transition-colors ${
                        isActive ? "bg-[#2C5F2E] text-white" : "bg-black/5 text-[#2D2D2D] hover:bg-[#2C5F2E] hover:text-white"
                      }`}>
                        {isActive ? "Viewing Specs" : "Inspect"}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Selected Material Details Display (Synced with Table) */}
        <div className="mt-8 bg-white border border-black/[0.04] rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.01)] transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C] mb-3 block">— Material Deep-Dive</span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-black flex items-center gap-3.5">
                <img src={activeMaterialData.image} alt={activeMaterialData.name} className="w-10 h-10 rounded-xl object-cover border border-black/10 shrink-0" />
                <span>{activeMaterialData.name}</span>
              </h3>
              <p className="text-xs sm:text-sm text-black/65 leading-relaxed mt-4">
                {activeMaterialData.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-[#F7F4EF]/60 rounded-2xl p-4 border border-black/[0.03]">
                  <span className="text-[9px] font-black uppercase tracking-wider text-black/45 block mb-1">Recommended Applications</span>
                  <span className="text-xs font-bold text-black/75">{activeMaterialData.bestFor}</span>
                </div>
                <div className="bg-[#F7F4EF]/60 rounded-2xl p-4 border border-black/[0.03]">
                  <span className="text-[9px] font-black uppercase tracking-wider text-black/45 block mb-1">Environmental Impact & Certs</span>
                  <span className="text-xs font-bold text-[#2C5F2E]">{activeMaterialData.sustainability}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#F7F4EF]/40 rounded-[2rem] border border-black/[0.03] p-6 md:p-8 flex flex-col gap-4">
              <span className="text-[9px] font-black uppercase tracking-widest text-black/40 block">— Structural Parameters</span>
              <div className="flex justify-between border-b border-black/[0.05] pb-2">
                <span className="text-[10px] font-bold text-black/50">Lifespan Rating</span>
                <span className="text-xs font-black uppercase text-[#2C5F2E]">{activeMaterialData.lifespan}</span>
              </div>
              <div className="flex justify-between border-b border-black/[0.05] pb-2">
                <span className="text-[10px] font-bold text-black/50">Maintenance Index</span>
                <span className="text-xs font-black text-black/70">{activeMaterialData.maintenance}</span>
              </div>
              <div className="flex justify-between border-b border-black/[0.05] pb-2">
                <span className="text-[10px] font-bold text-black/50">Eco Circular Score</span>
                <span className="text-xs font-mono font-bold text-black">{activeMaterialData.sustainabilityScore}</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="text-[10px] font-bold text-black/50">Relative Price Tier</span>
                <span className="text-xs font-mono font-bold text-black/70">{activeMaterialData.costFactor}</span>
              </div>
              <a 
                href="#sample-request"
                onClick={() => setFormData({ ...formData, material: activeMaterialData.name })}
                className="w-full text-center py-3 bg-[#2C5F2E] hover:bg-[#2D2D2D] text-white rounded-full font-bold uppercase tracking-wider text-[10px] transition-colors mt-4 no-underline inline-block"
              >
                Request Swatch Sample
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering specifications grid */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1A1A1A] mb-8 border-b border-[#2D2D2D]/10 pb-4">
          Rigorous Engineering Parameters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-[2rem] border border-black/[0.03] overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.005)] flex flex-col">
            <img src={galvanizationSpec} alt="Galvanization Thickness Spec" className="w-full aspect-[16/10] object-cover" />
            <div className="p-8 md:p-10 flex flex-col flex-1">
              <h3 className="text-sm font-black uppercase tracking-wider text-[#C9A84C] mb-3">Galvanization Thickness</h3>
              <p className="text-xs text-[#2D2D2D]/60 leading-relaxed">
                All structural mild steel components undergo complete immersion hot-dip galvanization conforming strictly to <strong>ISO 1461</strong> standards. This establishes a minimum metallurgical zinc layer thickness of <strong>85 micrometers (μm)</strong>, providing an absolute double-layer shield against oxidation in coastal environments.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] border border-black/[0.03] overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.005)] flex flex-col">
            <img src={concreteSpec} alt="Concrete Mix Design Formula" className="w-full aspect-[16/10] object-cover" />
            <div className="p-8 md:p-10 flex flex-col flex-1">
              <h3 className="text-sm font-black uppercase tracking-wider text-[#C9A84C] mb-3">Concrete Mix Design Formula</h3>
              <p className="text-xs text-[#2D2D2D]/60 leading-relaxed">
                Our Architectural Concrete structures incorporate premium white Portland cement, selected silica sands, and high-performance structural aggregates. This custom mix achieves exceptionally high flexural strength and surface hardness, preventing surface micro-cracks and weathering splits in extreme tropical conditions.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] border border-black/[0.03] overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.005)] flex flex-col">
            <img src={wickerSpec} alt="PE Wicker UV weathering" className="w-full aspect-[16/10] object-cover" />
            <div className="p-8 md:p-10 flex flex-col flex-1">
              <h3 className="text-sm font-black uppercase tracking-wider text-[#C9A84C] mb-3">PE Wicker UV weathering</h3>
              <p className="text-xs text-[#2D2D2D]/60 leading-relaxed">
                Synthetic wicker weaves are crafted with premium **Polyethylene (PE)** compound additives. Tested under accelerated UV weathering to <strong>3,000 hours (ISO 4892-2)</strong>, they show zero color fading, rotting, or embrittlement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Green & Circular Commitment Banner */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
        <div className="bg-[#2D2D2D] rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(44,95,46,0.15),transparent_60%)] pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C] mb-3 block">— Sustainability Standards</span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight leading-none mb-6">
                Our Strong Focus on <br />
                Green & Sustainable Materials
              </h2>
              <ul className="text-xs sm:text-sm text-white/70 space-y-4 max-w-xl">
                <li className="flex items-start gap-3">
                  <span className="text-[#2C5F2E] flex items-center justify-center shrink-0 w-5 h-5 rounded-full bg-[#2C5F2E]/10 select-none mt-0.5">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><strong>Deforestation Prevention:</strong> WPC and NFC Wood composites completely substitute natural timber, protecting forests.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#2C5F2E] flex items-center justify-center shrink-0 w-5 h-5 rounded-full bg-[#2C5F2E]/10 select-none mt-0.5">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><strong>Circular Polymers:</strong> We utilize post-consumer agricultural waste and recycled plastics, reducing municipal landfill loads.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#2C5F2E] flex items-center justify-center shrink-0 w-5 h-5 rounded-full bg-[#2C5F2E]/10 select-none mt-0.5">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><strong>Green Building Points:</strong> Help projects earn certified IGBC, GRIHA, and LEED credits via product recycling and low embodied energy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#2C5F2E] flex items-center justify-center shrink-0 w-5 h-5 rounded-full bg-[#2C5F2E]/10 select-none mt-0.5">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><strong>Zero-VOC Coatings:</strong> Dry thermoset powder coatings release zero volatile organic compounds during applications.</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-[2.5rem] p-8 text-center backdrop-blur-md">
              <h3 className="text-xl font-black uppercase tracking-tight text-[#C9A84C] mb-3">Green Certificates</h3>
              <p className="text-xs text-white/60 leading-relaxed mb-6">
                Download our technical dossier including structural loading parameters, certification matrices, and green building sheets.
              </p>
              <a 
                href="/resources/downloads"
                className="w-full text-center py-4 bg-[#2C5F2E] hover:bg-[#3d7a40] text-white rounded-full font-bold uppercase tracking-wider text-xs transition-colors shadow-md no-underline inline-block"
              >
                Download Technical Guide (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Sample RFP Request Form */}
      <section id="sample-request" className="max-w-[1000px] mx-auto px-6">
        <div className="bg-white rounded-[3rem] border border-black/[0.04] p-8 md:p-16 shadow-[0_15px_50px_rgba(0,0,0,0.02)]">
          {submitted ? (
            <div className="text-center py-10 flex flex-col justify-center items-center">
              <span className="w-16 h-16 rounded-full bg-[#2C5F2E]/10 text-[#2C5F2E] flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-3">Sample Request Received!</h3>
              <p className="text-xs sm:text-sm text-black/60 max-w-md leading-relaxed mb-6">
                Thank you, <strong>{formData.name}</strong>. We have registered your material sample request for <strong>{formData.material}</strong>. Our project advisor will contact you at <strong>{formData.email}</strong> within 24 hours to verify shipping coordinates.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 bg-[#2C5F2E] hover:bg-[#2D2D2D] text-white rounded-full font-bold uppercase tracking-wider text-[10px] transition-colors"
              >
                Request Another Swatch
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
              <div className="text-center max-w-xl mx-auto mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C] mb-2 block">— Physical Samples</span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">Request Material Samples</h3>
                <p className="text-xs text-black/50 leading-relaxed mt-2">
                  Landscape architects and developers can request a physical swatch folder containing high-res cuts of WPC, NFC, Aluminium swatches, and powder-coated steel finishes.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-black uppercase tracking-wider text-black/50">Contact Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Aditya Roy"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#F7F4EF]/60 border border-black/10 rounded-full px-5 py-3.5 text-xs text-black focus:outline-none focus:border-[#2C5F2E] font-medium"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-black uppercase tracking-wider text-black/50">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="aditya@architects.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#F7F4EF]/60 border border-black/10 rounded-full px-5 py-3.5 text-xs text-black focus:outline-none focus:border-[#2C5F2E] font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-black uppercase tracking-wider text-black/50">Company / Studio *</label>
                  <input
                    type="text"
                    required
                    placeholder="AR Studio Mumbai"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#F7F4EF]/60 border border-black/10 rounded-full px-5 py-3.5 text-xs text-black focus:outline-none focus:border-[#2C5F2E] font-medium"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-black uppercase tracking-wider text-black/50">Selected Swatch Material</label>
                  <select
                    value={formData.material}
                    onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                    className="w-full bg-[#F7F4EF]/60 border border-black/10 rounded-full px-5 py-3.5 text-xs text-black focus:outline-none focus:border-[#2C5F2E] font-medium"
                  >
                    <option value="WPC (Wood-Plastic Composite)">WPC Swatch (Warm Wood Grain)</option>
                    <option value="NFC Wood (Natural Fiber Composite)">NFC Wood Swatch (Matte Rice Husk)</option>
                    <option value="Architectural Aluminium">Architectural Aluminium Slat</option>
                    <option value="Mild Steel (Powder Coated)">Mild Steel Swatch (RAL Coated)</option>
                    <option value="Grade 304/316 Stainless Steel">Stainless Steel (Satin Swatch)</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] font-black uppercase tracking-wider text-black/50">Project Location & Details</label>
                <textarea
                  rows="3"
                  placeholder="e.g. 'Need samples for 120 villa landscape decks in Bangalore township.'"
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full bg-[#F7F4EF]/60 border border-black/10 rounded-[1.5rem] px-5 py-4 text-xs text-black focus:outline-none focus:border-[#2C5F2E] font-medium resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#2C5F2E] text-white rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#2D2D2D] transition-colors cursor-pointer mt-2 shadow-md"
              >
                Submit Sample Swatch Request
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Materials;

