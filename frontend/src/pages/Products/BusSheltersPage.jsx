import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

// Asset imports
import busImg from "../../assets/Bus_Shelters.png";
import busJpeg from "../../assets/Bus_Shelters.jpeg";
import benchImg from "../../assets/Bench_Planter.png";
import carImg from "../../assets/Car_Shelter.png";
import wickerImg from "../../assets/Wicker_Furniture.png";

// Brand logos (reused from Activities)
import logo1 from "../../assets/brands/1.png";
import logo2 from "../../assets/brands/11-3.webp";
import logo3 from "../../assets/brands/12-1.png";
import logo4 from "../../assets/brands/13-3.webp";
import logo5 from "../../assets/brands/2.png";
import logo6 from "../../assets/brands/3-1.png";
import logo7 from "../../assets/brands/3.png";
import logo8 from "../../assets/brands/4-1.png";
import logo9 from "../../assets/brands/5-1.png";
import logo10 from "../../assets/brands/6-1.png";
import logo11 from "../../assets/brands/7-1.png";
import logo12 from "../../assets/brands/8-1.png";
import logo13 from "../../assets/brands/9-1.png";
import logo14 from "../../assets/brands/New-Project-7-Photoroom.png";

const brandLogos = [
    { name: "Prestige Group", img: logo1 },
    { name: "Taj Hotels", img: logo2 },
    { name: "Kalpataru", img: logo3 },
    { name: "Tata Realty", img: logo4 },
    { name: "Adani Realty", img: logo5 },
    { name: "L&T", img: logo6 },
    { name: "Oberoi Realty", img: logo7 },
    { name: "Rustomjee", img: logo8 },
    { name: "Lodha Group", img: logo9 },
    { name: "Godrej Properties", img: logo10 }
];

const BusSheltersPage = () => {
    const [activeTab, setActiveTab] = useState("standard");
    const [faqOpen, setFaqOpen] = useState(Array(12).fill(false));

    useEffect(() => {
        // Dynamic SEO Metadata Configuration
        updatePageSEO({
            title: "Premium Bus Shelters Manufacturer India | MS, SS, Aluminium | Urbanland",
            description: "Custom-designed bus shelters for smart cities, townships & municipalities. MS/SS/Aluminium. 2-Year guarantee. Fast delivery. Get quote for bulk orders.",
            og_type: "product",
            og_image: busImg
        });

        // Inject JSON-LD Schema.org FAQ markup dynamically into head
        const schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What's the difference between Standard, Premium, and Super Premium?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Standard is mild steel (durable for 8-10 years, requires paint maintenance) at lowest cost—best for inland municipalities. Premium is stainless steel (15-20 year lifespan, zero maintenance) at mid-range cost—best for coastal areas and high-traffic zones. Super Premium is SS + IoT-ready wiring + solar power—best for smart city projects and premium developments. All include a 2-year guarantee."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I customize the dimensions?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Our standard size is 4500L × 1800W × 2500H mm, but we routinely build custom sizes from 3500mm to 7000mm length to fit your specific site. Customization adds 5-7 days to lead time."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long is the lead time?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Standard bus shelters take 25-30 days from order confirmation. Premium take 30-35 days, and Super Premium take 35-45 days. This includes design approval, manufacturing, and quality checks."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you provide installation?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Installation is included in the quote for sites within 50km of our Vasai Virar facility (Maharashtra). Beyond that, we charge nominal logistics and dispatch a 3-person assembly team."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which material is best for coastal areas?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Stainless steel 316 grade (Premium or Super Premium). Mild steel will rust in 2-3 years in coastal zones despite coating. 316 SS provides superior corrosion resistance in saline zones."
                    }
                }
            ]
        };

        const scriptId = "faq-jsonld-schema";
        let script = document.getElementById(scriptId);
        if (!script) {
            script = document.createElement("script");
            script.id = scriptId;
            script.type = "application/ld+json";
            document.head.appendChild(script);
        }
        script.innerHTML = JSON.stringify(schema);

        return () => {
            cleanPageSEO();
            const existingScript = document.getElementById(scriptId);
            if (existingScript) existingScript.remove();
        };
    }, []);

    const toggleFaq = (idx) => {
        setFaqOpen((prev) => {
            const next = [...prev];
            next[idx] = !next[idx];
            return next;
        });
    };

    return (
        <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-28">
            
            {/* SECTION 0 — BREADCRUMB */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 select-none">
                <nav className="flex items-center text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#2D2D2D]/60 gap-2">
                    <Link to="/" className="hover:text-[#2C5F2E] transition-colors">Home</Link>
                    <span>/</span>
                    <Link to="/products" className="hover:text-[#2C5F2E] transition-colors">Products</Link>
                    <span>/</span>
                    <span className="text-[#2C5F2E]">Bus Shelters</span>
                </nav>
            </div>

            {/* SECTION 1 — HERO SECTION */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-20">
                <div className="relative w-full rounded-[2.5rem] overflow-hidden bg-black shadow-2xl flex flex-col justify-end min-h-[75vh] md:min-h-[80vh] p-8 md:p-16 border border-white/5">
                    {/* Visual Showcase Background */}
                    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
                        <img 
                            src={busImg} 
                            alt="Premium custom bus shelter installed in Indian smart city project by Urbanland Products"
                            className="w-full h-full object-cover scale-103 object-center opacity-65 md:block hidden"
                        />
                        <img 
                            src={busJpeg} 
                            alt="Premium custom bus shelter installed in Indian smart city project by Urbanland Products"
                            className="w-full h-full object-cover scale-103 object-center opacity-65 md:hidden block"
                        />
                        {/* Gradient readibility overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/35" />
                    </div>

                    <div className="relative z-10 max-w-4xl text-white">
                        <div className="flex items-center gap-2 select-none mb-4">
                            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest bg-[#C9A84C] text-[#232120] px-3.5 py-1.5 rounded-full">
                                Infrastructure Spotlight
                            </span>
                            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest bg-[#2C5F2E] text-white px-3.5 py-1.5 rounded-full border border-white/10">
                                2-Year Guarantee
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[1.05] mb-6">
                            Premium Bus Shelters Manufactured in India — Custom Design for Smart Cities, Townships & Municipalities
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed max-w-3xl mb-8">
                            Robust, weather-resistant bus shelters engineered for India's smart city projects, real estate townships, and municipal transport systems. Available in mild steel, stainless steel, and aluminium with customizable roof materials. Backed by India's only 2-year comprehensive guarantee.
                        </p>

                        <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#C9A84C]/90 flex flex-wrap gap-x-6 gap-y-2 mb-8 select-none border-b border-white/15 pb-6">
                            <span>✓ 2-Year Comprehensive Guarantee</span>
                            <span>✓ ISO 9001:2015 Certified</span>
                            <span>✓ Made in India</span>
                            <span>✓ 50+ Completed Projects</span>
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 select-none">
                            <Link 
                                to="/get-quote/?product=bus-shelters"
                                onClick={() => {
                                    if (window.gtag) {
                                        window.gtag('event', 'product_page_cta_primary', { 'value': 'bus_shelter_quote' });
                                    }
                                }}
                                className="px-8 py-4 bg-[#C9A84C] text-[#232120] hover:bg-white hover:text-black rounded-full font-black uppercase tracking-wider text-xs text-center transition-all shadow-xl hover:scale-102 transform duration-300 text-center"
                            >
                                ▸ Request Custom Bus Shelter Quote →
                            </Link>

                            <Link
                                to="/resources/downloads"
                                onClick={() => {
                                    if (window.gtag) {
                                        window.gtag('event', 'product_page_cta_secondary', { 'value': 'bus_shelter_spec_download' });
                                    }
                                }}
                                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full font-bold uppercase tracking-wider text-xs text-center transition-all backdrop-blur-sm"
                            >
                                ▸ Download Specifications (PDF) ↓
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2 — THE URBANLAND ADVANTAGE */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
                <div className="text-left mb-16 max-w-5xl">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— THE URBANLAND ADVANTAGE</span>
                    <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none text-[#1A1A1A]">
                        Why India's Leading Developers & Municipalities Choose Urbanland Bus Shelters
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-[#2D2D2D]/75 leading-relaxed mt-6">
                        When municipalities specify bus shelters for smart city projects, real estate developers plan large-scale township amenities, or architects design transit infrastructure, they need a manufacturer that delivers on three fronts: durability under extreme weather, timely project completion, and lasting customer support. Urbanland Products is India's only bus shelter manufacturer offering a comprehensive 2-year guarantee covering all components—combined with proven expertise supplying 50+ major infrastructure projects across 15+ Indian cities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 select-none">
                    {/* CARD 1 */}
                    <div className="bg-white rounded-[2rem] border border-black/[0.03] p-8 md:p-10 shadow-sm hover:shadow-lg transition-all flex flex-col gap-5">
                        <div className="w-14 h-14 bg-[#2C5F2E]/10 rounded-full flex justify-center items-center text-[#2C5F2E]">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-black uppercase text-[#1A1A1A]">Built to Withstand India's Harshest Climates</h3>
                        <p className="text-xs sm:text-sm text-[#2D2D2D]/70 leading-relaxed">
                            Our bus shelters are engineered with materials that resist corrosion, UV exposure, and extreme heat. Multi-layer powder coating (Akzonobel PU paint) + stainless steel or mild steel frame options ensure your shelter remains structurally sound for 2+ years—even in coastal, high-altitude, or pollution-heavy zones.
                        </p>
                    </div>

                    {/* CARD 2 */}
                    <div className="bg-white rounded-[2rem] border border-black/[0.03] p-8 md:p-10 shadow-sm hover:shadow-lg transition-all flex flex-col gap-5">
                        <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex justify-center items-center text-[#C9A84C]">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h3.75a9 9 0 019 9v3.75a9 9 0 01-9 9h-3.75a9 9 0 01-9-9v-3.75a9 9 0 019-9z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-black uppercase text-[#1A1A1A]">Industry-Leading 2-Year Warranty</h3>
                        <p className="text-xs sm:text-sm text-[#2D2D2D]/70 leading-relaxed">
                            Full coverage on frame, roof materials, and structural integrity. No other bus shelter manufacturer in India offers this commitment. If your shelter requires repairs within 2 years due to manufacturing defect, we cover it. This guarantee reflects our confidence in engineering quality.
                        </p>
                    </div>

                    {/* CARD 3 */}
                    <div className="bg-white rounded-[2rem] border border-black/[0.03] p-8 md:p-10 shadow-sm hover:shadow-lg transition-all flex flex-col gap-5">
                        <div className="w-14 h-14 bg-[#2C5F2E]/10 rounded-full flex justify-center items-center text-[#2C5F2E]">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122A3 3 0 00.47 16.122m13.06 0a3 3 0 01-.47-5.517m3.06 3.517A3 3 0 0016.122.47m-3.517 3.06a3 3 0 015.517.47m-3.06-3.517a3 3 0 00-3.517 3.06" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-black uppercase text-[#1A1A1A]">Made-to-Order Design Flexibility</h3>
                        <p className="text-xs sm:text-sm text-[#2D2D2D]/70 leading-relaxed">
                            Not all bus stops are the same. We design custom-sized shelters to fit your specific location, passenger load, and aesthetic requirements. Choose from 3 material configurations (Standard, Premium, Super Premium) with options in mild steel, stainless steel, or aluminium frames. Roof materials include galvanized sheet, ACP, recycled wood, or toughened glass.
                        </p>
                    </div>

                    {/* CARD 4 */}
                    <div className="bg-white rounded-[2rem] border border-black/[0.03] p-8 md:p-10 shadow-sm hover:shadow-lg transition-all flex flex-col gap-5">
                        <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex justify-center items-center text-[#C9A84C]">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124l-.847-13.485a1.125 1.125 0 00-1.122-1.054H16.35m-9 13.5V9" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-black uppercase text-[#1A1A1A]">On-Time Delivery for Your Project Timeline</h3>
                        <p className="text-xs sm:text-sm text-[#2D2D2D]/70 leading-relaxed">
                            We understand that project delays cost money. Our manufacturing process and India-based production mean faster lead times than imported shelters. We also provide installation support and commissioning guidance—ensuring your bus shelters are ready for operation on schedule.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 3 — THE URBANLAND BUS SHELTER RANGE */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
                <div className="text-left mb-12 max-w-4xl">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— MODULAR SYSTEM OPTIONS</span>
                    <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none text-[#1A1A1A]">
                        Urbanland Bus Shelters — Three Configurations to Match Your Requirements
                    </h2>
                    <p className="text-sm sm:text-base text-[#2D2D2D]/75 mt-4">
                        Whether you're outfitting a single bus stop or a city-wide network, Urbanland offers three modular shelter configurations—each engineered for different load capacities, environmental conditions, and budget requirements. All variants include our 2-year guarantee.
                    </p>
                </div>

                {/* Tab selector buttons */}
                <div className="flex flex-col md:flex-row gap-2 border-b border-[#2D2D2D]/15 pb-4 select-none mb-12">
                    <button
                        onClick={() => setActiveTab("standard")}
                        className={`flex-1 text-center py-4 px-6 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                            activeTab === "standard" 
                                ? "bg-[#2C5F2E] text-white shadow-md"
                                : "bg-white text-[#1A1A1A] hover:bg-[#EAE5DB]/40 border border-black/[0.04]"
                        }`}
                    >
                        Standard Bus Shelter — Durable & Cost-Effective
                    </button>
                    <button
                        onClick={() => setActiveTab("premium")}
                        className={`flex-1 text-center py-4 px-6 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                            activeTab === "premium" 
                                ? "bg-[#2C5F2E] text-white shadow-md"
                                : "bg-white text-[#1A1A1A] hover:bg-[#EAE5DB]/40 border border-black/[0.04]"
                        }`}
                    >
                        Premium Bus Shelter — Stainless Steel for High-Traffic Zones
                    </button>
                    <button
                        onClick={() => setActiveTab("super")}
                        className={`flex-1 text-center py-4 px-6 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                            activeTab === "super" 
                                ? "bg-[#2C5F2E] text-white shadow-md"
                                : "bg-white text-[#1A1A1A] hover:bg-[#EAE5DB]/40 border border-black/[0.04]"
                        }`}
                    >
                        Super Premium Bus Shelter — Smart City Ready with IoT Integration
                    </button>
                </div>

                {/* Tab content wrappers */}
                <div className="bg-white rounded-[2.5rem] border border-black/[0.03] p-8 md:p-14 shadow-sm">
                    {activeTab === "standard" && (
                        <div>
                            <div className="flex justify-between items-start gap-4 mb-6">
                                <div>
                                    <span className="text-[9px] font-black uppercase tracking-widest text-[#C9A84C] bg-[#C9A84C]/10 px-3 py-1.5 rounded-full select-none">Economy Focus</span>
                                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#1A1A1A] mt-3">Urbanland Standard Bus Shelter</h3>
                                    <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#2C5F2E] mt-1">Engineered for Moderate-Traffic Bus Stops</h4>
                                </div>
                            </div>
                            <p className="text-sm sm:text-base text-[#2D2D2D]/75 leading-relaxed mb-8">
                                Our Standard Bus Shelter is the most specified configuration for municipal and township projects. It delivers durability, weather protection, and passenger comfort at a competitive cost. Ideal for secondary bus routes, residential areas, and smaller cities where traffic is moderate but reliability is essential.
                            </p>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-[#2D2D2D]/10 pt-8">
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-4 select-none">— Key Features</h4>
                                    <ul className="flex flex-col gap-3.5 text-xs sm:text-sm font-semibold text-[#1A1A1A]/85">
                                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> Frame: Mild Steel (MS) with Akzonobel PU powder coating</li>
                                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> Roof: Galvanized sheet or ACP (polycarbonate composite)</li>
                                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> Seating: MS bench with anti-slip surface</li>
                                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> Opening: Open-front design (weather protection, clear sightlines)</li>
                                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> Customizable dimensions available</li>
                                    </ul>

                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mt-10 mb-4 select-none">— Ideal Use Cases</h4>
                                    <ul className="flex flex-col gap-2.5 text-xs font-semibold text-[#2D2D2D]/75">
                                        <li>• Smart City Municipal Projects (Phase 1-2)</li>
                                        <li>• Residential township amenities (secondary routes)</li>
                                        <li>• Educational campus bus stops</li>
                                        <li>• Healthcare facility transport hubs</li>
                                        <li>• Industrial & commercial zone access points</li>
                                    </ul>
                                </div>

                                <div className="bg-[#F7F4EF] rounded-[2rem] p-6 sm:p-8 flex flex-col gap-4">
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-black/60 mb-2 select-none">— Technical Specifications</h4>
                                    <div className="grid grid-cols-2 gap-4 text-xs">
                                        <div>
                                            <span className="block text-[9px] uppercase tracking-wider text-black/45">Dimensions</span>
                                            <span className="font-bold">4500L × 1800W × 2500H mm</span>
                                        </div>
                                        <div>
                                            <span className="block text-[9px] uppercase tracking-wider text-black/45">Frame Material</span>
                                            <span className="font-bold">Mild Steel (40x40mm, 2-3mm thick)</span>
                                        </div>
                                        <div>
                                            <span className="block text-[9px] uppercase tracking-wider text-black/45">Roof Material</span>
                                            <span className="font-bold">Galvanized Steel Sheet (2mm) OR 10mm ACP</span>
                                        </div>
                                        <div>
                                            <span className="block text-[9px] uppercase tracking-wider text-black/45">Coating / Protection</span>
                                            <span className="font-bold">Akzonobel PU Paint (400-500 microns)</span>
                                        </div>
                                        <div>
                                            <span className="block text-[9px] uppercase tracking-wider text-black/45">Weight</span>
                                            <span className="font-bold">1200 - 1400 kg approx.</span>
                                        </div>
                                        <div>
                                            <span className="block text-[9px] uppercase tracking-wider text-black/45">Delivery Timeline</span>
                                            <span className="font-bold">25 - 30 days standard</span>
                                        </div>
                                    </div>

                                    <Link
                                        to="/get-quote/?variant=standard-bus-shelter"
                                        onClick={() => {
                                            if (window.gtag) window.gtag('event', 'variant_selection', { 'value': 'standard' });
                                        }}
                                        className="px-6 py-3.5 bg-[#2C5F2E] text-white hover:bg-black rounded-full font-black uppercase tracking-wider text-[10px] text-center select-none transition-colors duration-300 mt-6"
                                    >
                                        ▸ Request Quote for Standard Bus Shelter →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "premium" && (
                        <div>
                            <div className="flex justify-between items-start gap-4 mb-6">
                                <div>
                                    <span className="text-[9px] font-black uppercase tracking-widest text-[#C9A84C] bg-[#C9A84C]/10 px-3 py-1.5 rounded-full select-none">Stainless Steel Upgrade</span>
                                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#1A1A1A] mt-3">Urbanland Premium Bus Shelter</h3>
                                    <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#2C5F2E] mt-1">Superior Corrosion Resistance for Heavy-Use Areas</h4>
                                </div>
                            </div>
                            <p className="text-sm sm:text-base text-[#2D2D2D]/75 leading-relaxed mb-8">
                                Our Premium Bus Shelter is specified for high-traffic zones, coastal areas, and hospitality/real estate projects where aesthetics and durability are equally important. Stainless steel construction ensures minimal maintenance and extends the shelter's operational life well beyond 2 years. Premium choice for brand-conscious developers and smart cities targeting excellence.
                            </p>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-[#2D2D2D]/10 pt-8">
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-4 select-none">— Key Features</h4>
                                    <ul className="flex flex-col gap-3.5 text-xs sm:text-sm font-semibold text-[#1A1A1A]/85">
                                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> Frame: Stainless Steel (304/316 grade) with brushed/mirror finish</li>
                                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> Roof: ACP polycarbonate (translucent) OR Toughened glass panels</li>
                                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> Seating: SS bench with ergonomic backrest</li>
                                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> Side Panels: Tempered glass for visibility + weather protection</li>
                                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> LED Lighting: Optional solar-powered LED panels for 24/7 illumination</li>
                                    </ul>

                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mt-10 mb-4 select-none">— Ideal Use Cases</h4>
                                    <ul className="flex flex-col gap-2.5 text-xs font-semibold text-[#2D2D2D]/75">
                                        <li>• Coastal smart cities (Goa, Gujarat, Tamil Nadu projects)</li>
                                        <li>• Premium real estate mega-townships (Lodha, Oberoi, Adani properties)</li>
                                        <li>• 5-star hotel & resort property access points</li>
                                        <li>• High-traffic CBD / downtown bus stations</li>
                                        <li>• Airport/railway terminal feeder routes</li>
                                    </ul>
                                </div>

                                <div className="bg-[#F7F4EF] rounded-[2rem] p-6 sm:p-8 flex flex-col gap-4">
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-black/60 mb-2 select-none">— Technical Specifications</h4>
                                    <div className="grid grid-cols-2 gap-4 text-xs">
                                        <div>
                                            <span className="block text-[9px] uppercase tracking-wider text-black/45">Dimensions</span>
                                            <span className="font-bold">4500L × 1800W × 2500H mm (Custom to 6000)</span>
                                        </div>
                                        <div>
                                            <span className="block text-[9px] uppercase tracking-wider text-black/45">Frame Material</span>
                                            <span className="font-bold">Stainless Steel 304/316 (2.5-3mm thick)</span>
                                        </div>
                                        <div>
                                            <span className="block text-[9px] uppercase tracking-wider text-black/45">Roof Material</span>
                                            <span className="font-bold">ACP multiwall OR 6-8mm Toughened Glass</span>
                                        </div>
                                        <div>
                                            <span className="block text-[9px] uppercase tracking-wider text-black/45">Corrosion Rating</span>
                                            <span className="font-bold">Saline Mist Resistant (Coastal Grade)</span>
                                        </div>
                                        <div>
                                            <span className="block text-[9px] uppercase tracking-wider text-black/45">Weight</span>
                                            <span className="font-bold">1600 - 2000 kg (frame + glass panels)</span>
                                        </div>
                                        <div>
                                            <span className="block text-[9px] uppercase tracking-wider text-black/45">Delivery Timeline</span>
                                            <span className="font-bold">30 - 35 days standard</span>
                                        </div>
                                    </div>

                                    <Link
                                        to="/get-quote/?variant=premium-bus-shelter"
                                        onClick={() => {
                                            if (window.gtag) window.gtag('event', 'variant_selection', { 'value': 'premium' });
                                        }}
                                        className="px-6 py-3.5 bg-[#2C5F2E] text-white hover:bg-black rounded-full font-black uppercase tracking-wider text-[10px] text-center select-none transition-colors duration-300 mt-6"
                                    >
                                        ▸ Request Quote for Premium Bus Shelter →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "super" && (
                        <div>
                            <div className="flex justify-between items-start gap-4 mb-6">
                                <div>
                                    <span className="text-[9px] font-black uppercase tracking-widest text-[#C9A84C] bg-[#C9A84C]/10 px-3 py-1.5 rounded-full select-none">Smart & IoT Ready</span>
                                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#1A1A1A] mt-3">Urbanland Super Premium Bus Shelter</h3>
                                    <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#2C5F2E] mt-1">Future-Ready Infrastructure for India's Smart Cities</h4>
                                </div>
                            </div>
                            <p className="text-sm sm:text-base text-[#2D2D2D]/75 leading-relaxed mb-8">
                                Our Super Premium Bus Shelter is engineered for tomorrow's cities. Built for seamless integration with IoT sensors, real-time transit displays, and municipal smart city platforms, this shelter combines premium materials with smart infrastructure compatibility. Ideal for Smart City Mission Phase-II projects and premium developer launches.
                            </p>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-[#2D2D2D]/10 pt-8">
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-4 select-none">— Key Features</h4>
                                    <ul className="flex flex-col gap-3.5 text-xs sm:text-sm font-semibold text-[#1A1A1A]/85">
                                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> Frame: Fully welded Stainless Steel 304/316 with customizable finish</li>
                                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> Roof: Toughened glass OR Polycarbonate with integrated solar panels</li>
                                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> Smart Systems: Pre-wired conduits for passenger counters & air sensors</li>
                                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> Electronics: Off-grid solar LED system with motion dimming + USB hubs</li>
                                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> Display: Rigid VESA brackets for 49-55" real-time digital signage</li>
                                    </ul>

                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mt-10 mb-4 select-none">— IoT & Smart Compliance</h4>
                                    <ul className="flex flex-col gap-2.5 text-xs font-semibold text-[#2D2D2D]/75">
                                        <li>• Meets Ministry of Urban Development Smart City Mission guidelines</li>
                                        <li>• Accessible Design (Wheelchair-friendly ramp configuration)</li>
                                        <li>• Energy Efficiency: Off-grid, solar self-sufficiency</li>
                                        <li>• Compliance with IS 11707:2016 public shelter standards</li>
                                    </ul>
                                </div>

                                <div className="bg-[#F7F4EF] rounded-[2rem] p-6 sm:p-8 flex flex-col gap-4">
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-black/60 mb-2 select-none">— Technical Specifications</h4>
                                    <div className="grid grid-cols-2 gap-4 text-xs">
                                        <div>
                                            <span className="block text-[9px] uppercase tracking-wider text-black/45">Dimensions</span>
                                            <span className="font-bold">4500L × 1800W × 2500H mm (Custom to 7000)</span>
                                        </div>
                                        <div>
                                            <span className="block text-[9px] uppercase tracking-wider text-black/45">Solar Panels</span>
                                            <span className="font-bold">400W Roof-mounted modular array</span>
                                        </div>
                                        <div>
                                            <span className="block text-[9px] uppercase tracking-wider text-black/45">Smart Features</span>
                                            <span className="font-bold">Pre-wired VESA displays & IoT sensors</span>
                                        </div>
                                        <div>
                                            <span className="block text-[9px] uppercase tracking-wider text-black/45">USB Ports</span>
                                            <span className="font-bold">Waterproof dual-charger hubs</span>
                                        </div>
                                        <div>
                                            <span className="block text-[9px] uppercase tracking-wider text-black/45">Weight</span>
                                            <span className="font-bold">2200 - 2800 kg (SS frame + glass + solar)</span>
                                        </div>
                                        <div>
                                            <span className="block text-[9px] uppercase tracking-wider text-black/45">Delivery Timeline</span>
                                            <span className="font-bold">35 - 45 days (custom configurations)</span>
                                        </div>
                                    </div>

                                    <Link
                                        to="/get-quote/?variant=super-premium-bus-shelter"
                                        onClick={() => {
                                            if (window.gtag) window.gtag('event', 'variant_selection', { 'value': 'super-premium' });
                                        }}
                                        className="px-6 py-3.5 bg-[#C9A84C] text-[#232120] hover:bg-black hover:text-white rounded-full font-black uppercase tracking-wider text-[10px] text-center select-none transition-colors duration-300 mt-6"
                                    >
                                        ▸ Request Proposal for Super Premium Shelter →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* SECTION 4 — TECHNICAL SPECIFICATIONS & CUSTOMIZATION */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
                <div className="text-left mb-12">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— ENGINEERING OPTIONS Matrix</span>
                    <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none text-[#1A1A1A]">
                        Technical Specifications & Customization Options
                    </h2>
                    <p className="text-sm text-[#2D2D2D]/75 mt-4">
                        All Urbanland Bus Shelters start from the base specification below, but we design custom configurations to match your site conditions, climate zone, and aesthetic preferences. Every variant includes our 2-year guarantee regardless of customization level.
                    </p>
                </div>

                {/* Customization Matrix Table */}
                <div className="w-full overflow-x-auto border border-black/[0.04] rounded-3xl bg-white shadow-sm scrollbar-thin">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="bg-[#2C5F2E] text-white select-none text-[10px] sm:text-xs font-black uppercase tracking-wider">
                                <th className="p-6 border-b border-[#2D2D2D]/10">COMPONENT</th>
                                <th className="p-6 border-b border-[#2D2D2D]/10">STANDARD OPTION</th>
                                <th className="p-6 border-b border-[#2D2D2D]/10">PREMIUM UPGRADE</th>
                                <th className="p-6 border-b border-[#2D2D2D]/10">SUPER PREMIUM OPTION</th>
                            </tr>
                        </thead>
                        <tbody className="text-xs font-semibold text-[#1A1A1A]/85">
                            <tr className="border-b border-[#2D2D2D]/10 hover:bg-[#F7F4EF]/45">
                                <td className="p-6 font-bold bg-[#2C5F2E]/5 select-none uppercase tracking-wider">Frame Material</td>
                                <td className="p-6">Mild Steel (MS) (2-3mm thick)</td>
                                <td className="p-6">Stainless Steel (SS) (2.5-3mm thick)</td>
                                <td className="p-6">SS 304/316 fully welded & mirror-polished</td>
                            </tr>
                            <tr className="border-b border-[#2D2D2D]/10 hover:bg-[#F7F4EF]/45">
                                <td className="p-6 font-bold bg-[#2C5F2E]/5 select-none uppercase tracking-wider">Roof Material</td>
                                <td className="p-6">2mm Galvanized steel sheet OR ACP</td>
                                <td className="p-6">10-16mm ACP multiwall OR 6mm tempered glass</td>
                                <td className="p-6">8-10mm Toughened Glass OR Polycarbonate + Solar arrays</td>
                            </tr>
                            <tr className="border-b border-[#2D2D2D]/10 hover:bg-[#F7F4EF]/45">
                                <td className="p-6 font-bold bg-[#2C5F2E]/5 select-none uppercase tracking-wider">Coating / Finish</td>
                                <td className="p-6">Akzonobel PU paint (Grey, blue, green)</td>
                                <td className="p-6">Acrylic powder-coat (50+ Custom RAL colors)</td>
                                <td className="p-6">Any custom RAL color OR Brushed/Mirror polish</td>
                            </tr>
                            <tr className="border-b border-[#2D2D2D]/10 hover:bg-[#F7F4EF]/45">
                                <td className="p-6 font-bold bg-[#2C5F2E]/5 select-none uppercase tracking-wider">Seating</td>
                                <td className="p-6">MS Bench with basic backrest</td>
                                <td className="p-6">SS Bench with ergonomic anti-slip backrest</td>
                                <td className="p-6">Premium SS + FSC weather-treated WPC composite</td>
                            </tr>
                            <tr className="border-b border-[#2D2D2D]/10 hover:bg-[#F7F4EF]/45">
                                <td className="p-6 font-bold bg-[#2C5F2E]/5 select-none uppercase tracking-wider">Lighting</td>
                                <td className="p-6">None (Daytime use standard)</td>
                                <td className="p-6">LED fixture brackets (Wired, unpowered)</td>
                                <td className="p-6">Integrated off-grid solar LED with motion sensors</td>
                            </tr>
                            <tr className="border-b border-[#2D2D2D]/10 hover:bg-[#F7F4EF]/45">
                                <td className="p-6 font-bold bg-[#2C5F2E]/5 select-none uppercase tracking-wider">Side Panels</td>
                                <td className="p-6">Open weather design</td>
                                <td className="p-6">Optional Tempered glass panels (1-2 sides)</td>
                                <td className="p-6">Full glass wrap on 2 sides for wind barriers</td>
                            </tr>
                            <tr className="border-b border-[#2D2D2D]/10 hover:bg-[#F7F4EF]/45">
                                <td className="p-6 font-bold bg-[#2C5F2E]/5 select-none uppercase tracking-wider">Signage Bracket</td>
                                <td className="p-6">Timetable board (Manual vinyl swap)</td>
                                <td className="p-6">Standard 6x4 advertising backboard mount</td>
                                <td className="p-6">Mounting plate for 49-55" digital smart displays</td>
                            </tr>
                            <tr className="border-b border-[#2D2D2D]/10 hover:bg-[#F7F4EF]/45">
                                <td className="p-6 font-bold bg-[#2C5F2E]/5 select-none uppercase tracking-wider">Foundation</td>
                                <td className="p-6">Sub-surface bolt anchors (Concrete M16)</td>
                                <td className="p-6">Floor flanged or adjustable leveling anchors</td>
                                <td className="p-6">Concealed foundation locking sleeve</td>
                            </tr>
                            <tr className="border-b border-[#2D2D2D]/10 hover:bg-[#F7F4EF]/45">
                                <td className="p-6 font-bold bg-[#2C5F2E]/5 select-none uppercase tracking-wider">Add-Ons available</td>
                                <td className="p-6">LED lighting, roof extensions</td>
                                <td className="p-6">IoT pre-wire, Wi-Fi antenna ready</td>
                                <td className="p-6">400W Solar arrays, passenger counters, USB hubs</td>
                            </tr>
                            <tr className="hover:bg-[#F7F4EF]/45">
                                <td className="p-6 font-bold bg-[#2C5F2E]/5 select-none uppercase tracking-wider">Lead Manufacturing Time</td>
                                <td className="p-6 text-[#2C5F2E] font-bold">25 - 30 days</td>
                                <td className="p-6 text-[#2C5F2E] font-bold">30 - 35 days</td>
                                <td className="p-6 text-[#2C5F2E] font-bold">35 - 45 days</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-center mt-10 select-none">
                    <Link
                        to="/resources/downloads"
                        onClick={() => {
                            if (window.gtag) window.gtag('event', 'spec_sheet_download', { 'value': 'bus_shelter' });
                        }}
                        className="px-8 py-4 bg-white border border-black/[0.04] text-black hover:bg-[#2C5F2E] hover:text-white rounded-full font-black uppercase tracking-wider text-xs transition-colors duration-300 shadow-sm"
                    >
                        ↓ Download Complete Technical Specifications (PDF, 2.5MB)
                    </Link>
                </div>
            </section>

            {/* SECTION 5 — MATERIAL OPTIONS & DURABILITY COMPARISON */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— RAW SPECIFICATIONS COMPARE</span>
                    <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none text-[#1A1A1A]">
                        Material Selection Guide — MS, Stainless Steel, Aluminium Durability Comparison
                    </h2>
                    <p className="text-sm text-[#2D2D2D]/75 mt-6 mb-8 leading-relaxed">
                        Choosing the right frame material depends on your environment, budget, and timeline. Here's how each material performs under harsh weather:
                    </p>

                    {/* Comparison Table */}
                    <div className="w-full overflow-x-auto border border-black/[0.04] rounded-3xl bg-white shadow-sm scrollbar-thin">
                        <table className="w-full text-left border-collapse min-w-[500px]">
                            <thead>
                                <tr className="bg-black/5 text-[#1A1A1A] select-none text-[10px] font-black uppercase tracking-wider">
                                    <th className="p-4 border-b border-black/10">MATERIAL</th>
                                    <th className="p-4 border-b border-black/10">DURABILITY</th>
                                    <th className="p-4 border-b border-black/10">MAINTENANCE</th>
                                    <th className="p-4 border-b border-black/10">COST</th>
                                </tr>
                            </thead>
                            <tbody className="text-xs font-semibold text-[#2D2D2D]/85">
                                <tr className="border-b border-black/10 hover:bg-[#F7F4EF]/45">
                                    <td className="p-4 font-bold uppercase tracking-wider">Mild Steel (MS)</td>
                                    <td className="p-4">8-10 years (painted)</td>
                                    <td className="p-4">Annual paint touch-ups</td>
                                    <td className="p-4 text-[#2C5F2E]">★ Most affordable</td>
                                </tr>
                                <tr className="border-b border-black/10 hover:bg-[#F7F4EF]/45">
                                    <td className="p-4 font-bold uppercase tracking-wider">Stainless Steel (304/316)</td>
                                    <td className="p-4">15-20 years+ (rust-free)</td>
                                    <td className="p-4">Minimal / rare cleaning</td>
                                    <td className="p-4 text-[#2C5F2E]">★★★ Premium grade</td>
                                </tr>
                                <tr className="hover:bg-[#F7F4EF]/45">
                                    <td className="p-4 font-bold uppercase tracking-wider">Aluminium</td>
                                    <td className="p-4">12-15 years (anodized)</td>
                                    <td className="p-4">Periodic anodizing</td>
                                    <td className="p-4 text-[#2C5F2E]">★★ Mid-range option</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-[#EAE5DB]/40 rounded-[2.5rem] border border-black/[0.03] p-8 md:p-12 flex flex-col gap-6">
                    <h3 className="text-sm font-black uppercase tracking-widest text-[#2C5F2E] mb-2">— MATERIAL SELECTION FAQ</h3>
                    
                    <div className="pb-4 border-b border-black/[0.08]">
                        <h4 className="text-sm font-bold text-[#1A1A1A]">Q: Which material should I choose for a coastal bus stop?</h4>
                        <p className="text-xs text-[#2D2D2D]/75 mt-1 leading-relaxed">
                            A: Stainless steel (304 or 316 grade). MS will rust in 2-3 years in coastal areas despite painting. SS requires virtually no maintenance and outlasts your 2-year warranty significantly.
                        </p>
                    </div>
                    <div className="pb-4 border-b border-black/[0.08]">
                        <h4 className="text-sm font-bold text-[#1A1A1A]">Q: Can I upgrade from MS to SS later?</h4>
                        <p className="text-xs text-[#2D2D2D]/75 mt-1 leading-relaxed">
                            A: Not directly due to different anchor bolt sizing and frame weight distribution. We strongly recommend selecting SS upfront if you anticipate coastal developments.
                        </p>
                    </div>
                    <div className="pb-4 border-b border-black/[0.08]">
                        <h4 className="text-sm font-bold text-[#1A1A1A]">Q: Does aluminium rust?</h4>
                        <p className="text-xs text-[#2D2D2D]/75 mt-1 leading-relaxed">
                            A: No, but it oxidizes (forming a white/grey patina). Periodic anodizing finishes protect the metal core indefinitely. It's best for remote or weight-critical platforms.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-[#1A1A1A]">Q: Is stainless steel more expensive to install?</h4>
                        <p className="text-xs text-[#2D2D2D]/75 mt-1 leading-relaxed">
                            A: Installation costs are very similar. SS adds ~25-30% on initial material expenditures but saves thousands in repainting costs and replacement down the road.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 6 — REAL PROJECT CASE STUDIES */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
                <div className="text-left mb-16 max-w-4xl">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— NATIONWIDE CASE STUDY HIGHLIGHTS</span>
                    <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none text-[#1A1A1A]">
                        Real Bus Shelters. Real Results. Across India's Smart Cities.
                    </h2>
                    <p className="text-sm text-[#2D2D2D]/75 mt-4 leading-relaxed">
                        From India's fastest-growing smart cities to premium real estate townships, Urbanland Bus Shelters have been specified for 50+ major infrastructure projects. Here are four representative case studies showing different configurations, climates, and project scales.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 select-none">
                    {/* CASE 1 */}
                    <div className="bg-white rounded-[2.5rem] border border-black/[0.03] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between aspect-[16/15]">
                        <div className="w-full h-[45%] bg-black/5 overflow-hidden relative">
                            <img src={busImg} alt="Urbanland Standard Bus Shelters installed in smart city municipal project" className="w-full h-full object-cover" />
                            <div className="absolute top-4 right-4 bg-[#2C5F2E] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                                Nagpur Smart City
                            </div>
                        </div>
                        <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                            <div>
                                <span className="text-[9px] font-black uppercase tracking-wider text-[#C9A84C]">Smart City Authority</span>
                                <h3 className="text-xl font-black uppercase text-[#1A1A1A] leading-tight mt-1">Smart City Municipal Transportation Project</h3>
                                <div className="text-xs font-bold text-[#2C5F2E] my-2">120 Standard Bus Shelters Installed | 8-Month Duration</div>
                                <p className="text-xs text-[#2D2D2D]/70 leading-relaxed max-w-[95%]">
                                    A Tier-1 Indian city selected Urbanland to outfit 120 bus stops across 12 transit zones. The Standard configuration was utilized to meet tight municipal budgets while assuring 2-year guarantee reliability.
                                </p>
                            </div>
                            <Link
                                to="/projects/smart-city-municipal-bus-stops"
                                onClick={() => {
                                    if (window.gtag) window.gtag('event', 'case_study_click', { 'value': 'smart_city_municipal' });
                                }}
                                className="text-[10px] font-bold uppercase tracking-wider text-[#2C5F2E] hover:text-black transition-colors block mt-4 border-b border-[#2C5F2E]/20 pb-0.5 w-fit"
                            >
                                ▸ View Nagpur Project Details →
                            </Link>
                        </div>
                    </div>

                    {/* CASE 2 */}
                    <div className="bg-white rounded-[2.5rem] border border-black/[0.03] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between aspect-[16/15]">
                        <div className="w-full h-[45%] bg-black/5 overflow-hidden relative">
                            <img src={benchImg} alt="Premium Urbanland stainless steel bus shelter in Lodha residential township" className="w-full h-full object-cover" />
                            <div className="absolute top-4 right-4 bg-[#2C5F2E] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                                Maharashtra Townships
                            </div>
                        </div>
                        <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                            <div>
                                <span className="text-[9px] font-black uppercase tracking-wider text-[#C9A84C]">Lodha Group</span>
                                <h3 className="text-xl font-black uppercase text-[#1A1A1A] leading-tight mt-1">Premium Residential Township Amenities</h3>
                                <div className="text-xs font-bold text-[#2C5F2E] my-2">85 Premium SS Bus Shelters Installed | 6-Month Duration</div>
                                <p className="text-xs text-[#2D2D2D]/70 leading-relaxed max-w-[95%]">
                                    Lodha Group partnered with Urbanland to elevate township transit. 85 Premium SS bus shelters were custom-designed to match community aesthetics, featuring mirror-polished finishes and integrated seating elements.
                                </p>
                            </div>
                            <Link
                                to="/projects/lodha-group-bus-shelters"
                                onClick={() => {
                                    if (window.gtag) window.gtag('event', 'case_study_click', { 'value': 'lodha_township' });
                                }}
                                className="text-[10px] font-bold uppercase tracking-wider text-[#2C5F2E] hover:text-black transition-colors block mt-4 border-b border-[#2C5F2E]/20 pb-0.5 w-fit"
                            >
                                ▸ View Lodha Case Study →
                            </Link>
                        </div>
                    </div>

                    {/* CASE 3 */}
                    <div className="bg-white rounded-[2.5rem] border border-black/[0.03] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between aspect-[16/15]">
                        <div className="w-full h-[45%] bg-black/5 overflow-hidden relative">
                            <img src={carImg} alt="Coastal-resistant stainless steel bus shelter in smart city waterfront project" className="w-full h-full object-cover" />
                            <div className="absolute top-4 right-4 bg-[#2C5F2E] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                                Goa Waterfront
                            </div>
                        </div>
                        <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                            <div>
                                <span className="text-[9px] font-black uppercase tracking-wider text-[#C9A84C]">Waterfront Authority</span>
                                <h3 className="text-xl font-black uppercase text-[#1A1A1A] leading-tight mt-1">Coastal Smart City Waterfront Development</h3>
                                <div className="text-xs font-bold text-[#2C5F2E] my-2">45 Premium SS (316 Grade) Shelters | 4-Month Duration</div>
                                <p className="text-xs text-[#2D2D2D]/70 leading-relaxed max-w-[95%]">
                                    A coastal city's development authority required bus shelters to withstand high humidity and saline atmospheres without maintenance. 45 Premium SS (316 grade) shelters with tempered glass were specified.
                                </p>
                            </div>
                            <Link
                                to="/projects/coastal-city-smart-bus-shelters"
                                onClick={() => {
                                    if (window.gtag) window.gtag('event', 'case_study_click', { 'value': 'coastal_smart_city' });
                                }}
                                className="text-[10px] font-bold uppercase tracking-wider text-[#2C5F2E] hover:text-black transition-colors block mt-4 border-b border-[#2C5F2E]/20 pb-0.5 w-fit"
                            >
                                ▸ View Goa Project Details →
                            </Link>
                        </div>
                    </div>

                    {/* CASE 4 */}
                    <div className="bg-white rounded-[2.5rem] border border-black/[0.03] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between aspect-[16/15]">
                        <div className="w-full h-[45%] bg-black/5 overflow-hidden relative">
                            <img src={wickerImg} alt="Urbanland Super Premium IoT-ready bus shelter in 5-star resort transit hub" className="w-full h-full object-cover" />
                            <div className="absolute top-4 right-4 bg-[#2C5F2E] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                                Bangalore Tech Park
                            </div>
                        </div>
                        <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                            <div>
                                <span className="text-[9px] font-black uppercase tracking-wider text-[#C9A84C]">Oberoi Realty / Tech Park</span>
                                <h3 className="text-xl font-black uppercase text-[#1A1A1A] leading-tight mt-1">5-Star Resort & Tech Park Mobility Hub</h3>
                                <div className="text-xs font-bold text-[#2C5F2E] my-2">28 Super Premium Smart-Ready Shelters | 3-Month Duration</div>
                                <p className="text-xs text-[#2D2D2D]/70 leading-relaxed max-w-[95%]">
                                    A luxury hospitality and corporate tech campus required bus stops that integrated pre-wired IoT sensor paths, off-grid solar-powered lighting, and dynamic real-time arrival signs.
                                </p>
                            </div>
                            <Link
                                to="/projects/oberoi-tech-park-smart-shelters"
                                onClick={() => {
                                    if (window.gtag) window.gtag('event', 'case_study_click', { 'value': 'premium_hospitality' });
                                }}
                                className="text-[10px] font-bold uppercase tracking-wider text-[#2C5F2E] hover:text-black transition-colors block mt-4 border-b border-[#2C5F2E]/20 pb-0.5 w-fit"
                            >
                                ▸ View Bangalore Project Details →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* PROJECT STATS BAR */}
                <div className="bg-[#2D2D2D] rounded-[2rem] border border-white/5 p-8 md:p-10 text-white flex flex-col md:flex-row justify-between items-center text-center mt-12 gap-8 shadow-md select-none">
                    <div className="flex-1">
                        <span className="block text-3xl font-black uppercase tracking-tight text-[#C9A84C]">50+</span>
                        <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-white/55 mt-1 block">Major Projects Delivered</span>
                    </div>
                    <div className="w-[1px] h-8 bg-white/10 md:block hidden" />
                    <div className="flex-1">
                        <span className="block text-3xl font-black uppercase tracking-tight text-[#C9A84C]">15+</span>
                        <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-white/55 mt-1 block">Cities & Regions Served</span>
                    </div>
                    <div className="w-[1px] h-8 bg-white/10 md:block hidden" />
                    <div className="flex-1">
                        <span className="block text-3xl font-black uppercase tracking-tight text-[#C9A84C]">2000+</span>
                        <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-white/55 mt-1 block">Bus Shelters Installed</span>
                    </div>
                </div>
            </section>

            {/* SECTION 7 — WHY ARCHITECTS & PLANNERS SPECIFY */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
                <div className="text-left mb-16 max-w-4xl">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— COMPLIANCE & CAPABILITY FOR SPECIFIERS</span>
                    <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none text-[#1A1A1A]">
                        Why India's Leading Architects, Planners & Engineers Specify Urbanland Bus Shelters
                    </h2>
                    <p className="text-sm text-[#2D2D2D]/75 mt-4 leading-relaxed">
                        Architects and municipal planners specify Urbanland for four reasons: (1) design flexibility that matches site conditions and project vision, (2) reliable delivery timelines that keep projects on schedule, (3) material transparency that supports sustainability goals, and (4) warranty backing that protects municipal/developer investment. Unlike imported shelters with long lead times and limited customization, Urbanland offers local manufacturing agility without quality compromise.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 select-none">
                    {/* CARD 1 */}
                    <div className="bg-white rounded-3xl border border-black/[0.03] p-6 shadow-sm">
                        <h3 className="text-lg font-black uppercase text-[#1A1A1A] mb-3 leading-snug border-b border-[#2D2D2D]/10 pb-3">
                            Site-Specific Design Without Compromises
                        </h3>
                        <p className="text-xs text-[#2D2D2D]/70 leading-relaxed">
                            Your site isn't standard. Why should your bus shelter be? We work directly with architects to customize shelter dimensions, material finishes, roof profile, and amenity placement. Whether you need a shelter that integrates with an existing plaza, accommodates specific passenger loads, or reflects project aesthetic—we design it. Our CAD team delivers 3D renderings before production begins.
                        </p>
                    </div>

                    {/* CARD 2 */}
                    <div className="bg-white rounded-3xl border border-black/[0.03] p-6 shadow-sm">
                        <h3 className="text-lg font-black uppercase text-[#1A1A1A] mb-3 leading-snug border-b border-[#2D2D2D]/10 pb-3">
                            Sustainable Materials, Documented Sourcing
                        </h3>
                        <p className="text-xs text-[#2D2D2D]/70 leading-relaxed">
                            Architects increasingly specify sustainable materials. Urbanland provides material source documentation, recycled content percentages, and end-of-life recyclability specs. Our stainless steel is certified for coastal environments; our composite benches use recycled plastic; our coatings meet VOC (Volatile Organic Compounds) standards. We support LEED/IGBC green building certifications.
                        </p>
                    </div>

                    {/* CARD 3 */}
                    <div className="bg-white rounded-3xl border border-black/[0.03] p-6 shadow-sm">
                        <h3 className="text-lg font-black uppercase text-[#1A1A1A] mb-3 leading-snug border-b border-[#2D2D2D]/10 pb-3">
                            ISA/BIS Compliant, Accessibility Ready
                        </h3>
                        <p className="text-xs text-[#2D2D2D]/70 leading-relaxed">
                            All shelters meet Indian Standards (IS 11707:2016 for public transport shelters) and Smart City Mission guidelines. Options include wheelchair-accessible design, emergency alert button integration, and lighting for safety. Municipal compliance documentation is provided with every project.
                        </p>
                    </div>

                    {/* CARD 4 */}
                    <div className="bg-white rounded-3xl border border-black/[0.03] p-6 shadow-sm">
                        <h3 className="text-lg font-black uppercase text-[#1A1A1A] mb-3 leading-snug border-b border-[#2D2D2D]/10 pb-3">
                            One Point of Contact From Design to Commissioning
                        </h3>
                        <p className="text-xs text-[#2D2D2D]/70 leading-relaxed">
                            Your architect gets a dedicated Urbanland project manager who coordinates design approvals, manufacturing schedules, logistics, installation, and warranty handover. No middlemen. No surprises. Just on-time delivery and professional installation support.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 8 — INSTALLATION, MAINTENANCE & WARRANTY */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24 bg-[#EAE5DB]/40 rounded-[2.5rem] border border-black/[0.03] p-8 md:p-14">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— AFTER-SALES LIFECYCLE GUIDE</span>
                <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none text-[#1A1A1A] mb-12">
                    Installation, Maintenance & 2-Year Comprehensive Warranty
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* INSTALLATION */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-black uppercase text-[#1A1A1A] border-b border-black/10 pb-3">▸ Installation Specifications</h3>
                        <div className="text-xs leading-relaxed text-[#2D2D2D]/75">
                            <h4 className="font-bold text-black uppercase tracking-wider text-[9px] mb-1 mt-3">Pre-Installation Site Requirements:</h4>
                            <ul className="flex flex-col gap-1.5 list-disc pl-4 font-semibold text-black/80">
                                <li>Level concrete base (min. 150mm depth, RCC)</li>
                                <li>Adequate drainage to prevent water pooling</li>
                                <li>Clear sightlines (no overhead obstructions)</li>
                                <li>Municipal/local authority site clearances</li>
                            </ul>

                            <h4 className="font-bold text-black uppercase tracking-wider text-[9px] mb-1 mt-4">Installation Timeline:</h4>
                            <p>Site preparation: 2-3 days | Assembly: 1 day (team of 3 technicians) | Commissioning & safety checks: 4-6 hours. Total: 3-4 days per site (multiple sites can run parallel).</p>

                            <h4 className="font-bold text-black uppercase tracking-wider text-[9px] mb-1 mt-4">Labor Coordination:</h4>
                            <p>Urbanland provides installation support. We dispatch a trained installation team who handles foundation bolting, assembly, leveling, and final checks. Client provides site access and base concrete footing pad.</p>
                        </div>
                    </div>

                    {/* MAINTENANCE */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-black uppercase text-[#1A1A1A] border-b border-black/10 pb-3">▸ Maintenance Guidelines</h3>
                        <div className="text-xs leading-relaxed text-[#2D2D2D]/75">
                            <h4 className="font-bold text-black uppercase tracking-wider text-[9px] mb-1 mt-3">Annual Maintenance Checklist:</h4>
                            <ul className="flex flex-col gap-1.5 list-disc pl-4 font-semibold text-black/80">
                                <li>Visual inspection for structural rust/corrosion</li>
                                <li>Tighten all anchoring structural bolts (torque check)</li>
                                <li>Clean glass/polycarbonate panels (mild soap + cloth)</li>
                                <li>Touch-up paint if needed (MS shelters only)</li>
                                <li>Drainage system flush to prevent pooling</li>
                            </ul>

                            <h4 className="font-bold text-black uppercase tracking-wider text-[9px] mb-1 mt-4">Estimated Annual Maintenance Cost:</h4>
                            <p>Standard (MS): ₹3,000-5,000 per shelter per year | Premium (SS): ₹500-1,000 per year (minimal) | Super Premium (SS + IoT): ₹1,500-2,500 per year (annual sensor diagnostics).</p>

                            <h4 className="font-bold text-black uppercase tracking-wider text-[9px] mb-1 mt-4">Maintenance Service Contracts:</h4>
                            <p>We offer annual maintenance contracts at ₹8,000/year per shelter (includes minor repairs, painting, cleaning). Bulk discounts are available for 10+ locations.</p>
                        </div>
                    </div>

                    {/* WARRANTY */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-black uppercase text-[#1A1A1A] border-b border-black/10 pb-3">▸ 2-Year Guarantee Policy</h3>
                        <div className="text-xs leading-relaxed text-[#2D2D2D]/75">
                            <h4 className="font-bold text-black uppercase tracking-wider text-[9px] mb-1 mt-3">What's Covered:</h4>
                            <p className="font-semibold text-black/80">Frame structural integrity (welding, deformation) | Roof material structural integrity (leaks, panels, fittings) | Seating welds and composite boards | Paint/coating defects (peeling or premature fading within UV normal limits) | Manufacturing assembly issues.</p>

                            <h4 className="font-bold text-black uppercase tracking-wider text-[9px] mb-1 mt-4">What's NOT Covered:</h4>
                            <p>Damage from vehicle collisions, vandalism, accidents | Normal wear/tear (scratches) | Environmental disasters outside standard Indian climates (tsunamis, extreme earthquakes) | Lack of basic cleanup maintenance.</p>

                            <h4 className="font-bold text-black uppercase tracking-wider text-[9px] mb-1 mt-4">Claim Procedure:</h4>
                            <p>Email support with photos. Assessment by technician within 5 business days. Repair or replacement completed in 10-14 days at zero cost to the client.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 9 — FREQUENTLY ASKED QUESTIONS */}
            <section className="max-w-[1200px] mx-auto px-6 md:px-12 mb-24">
                <div className="text-center mb-16 select-none">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— DIRECT RESOLUTIONS</span>
                    <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none text-[#1A1A1A]">
                        Bus Shelter FAQs — Common Questions Answered
                    </h2>
                </div>

                <div className="flex flex-col gap-4">
                    {[
                        {
                            q: "What's the difference between Standard, Premium, and Super Premium?",
                            a: "Standard is mild steel (durable for 8-10 years, requires paint maintenance) at lowest cost—best for inland municipalities. Premium is stainless steel (15-20 year lifespan, zero maintenance) at mid-range cost—best for coastal areas and high-traffic zones. Super Premium is SS + IoT-ready wiring + solar power—best for smart city projects and premium developments. All include 2-year guarantee."
                        },
                        {
                            q: "Can I customize the dimensions?",
                            a: "Yes. Our standard size is 4500L × 1800W × 2500H mm, but we routinely build custom sizes from 3500mm to 7000mm length to fit your specific site. Customization adds 5-7 days to lead time. Email your site plans and we'll provide a custom quote."
                        },
                        {
                            q: "How long is the lead time?",
                            a: "Standard bus shelters: 25-30 days from order confirmation. Premium: 30-35 days. Super Premium: 35-45 days. This includes design approval, manufacturing, and quality checks. Rush orders (15-20 days) possible at +15% surcharge."
                        },
                        {
                            q: "Do you provide installation?",
                            a: "Yes. Installation is included in the quote for sites within 50km of our Vasai Virar facility (Maharashtra). Beyond that, we charge nominal logistics. We dispatch a trained 3-person team who handle foundation bolting, assembly, and commissioning."
                        },
                        {
                            q: "What if my bus shelter is damaged in an accident (vehicle collision, vandalism)?",
                            a: "The 2-year warranty covers manufacturing defects, not accidents or vandalism. We can repair/replace the damaged section at cost. We recommend installing bollards around shelters in high-traffic areas to prevent vehicle collisions. Optional anti-graffiti coating (Super Premium) reduces vandalism impact."
                        },
                        {
                            q: "Which material is best for coastal areas?",
                            a: "Stainless steel 316 grade (Premium or Super Premium). Mild steel will rust in 2-3 years despite coating. We offer 316 SS specifically for saline environments. It costs more upfront but saves money long-term (no repainting, no rust replacement)."
                        },
                        {
                            q: "Can you add LED lighting or a digital display to my shelter?",
                            a: "Yes. Standard shelters can add LED fixtures (non-powered) for ₹8,000-12,000 extra. Premium shelters can add solar-powered LED systems (₹25,000-35,000). Super Premium shelters come wired for digital displays and IoT sensors. Request these as add-ons in your quote."
                        },
                        {
                            q: "What's your warranty process if something breaks?",
                            a: "Contact us with photos. Our team assesses within 5 business days. If it's a manufacturing defect, we repair or replace at no cost. If it's damage outside warranty (accident/vandalism), we provide a repair quote. Most repairs are completed within 10-14 days."
                        },
                        {
                            q: "Do you offer financing for bulk orders (20+ shelters)?",
                            a: "Yes. For municipal/developer bulk orders (50+ units), we offer 90-day payment terms and project-based phasing options. Contact our corporate sales team for custom financing discussions."
                        },
                        {
                            q: "Is your bus shelter made in India?",
                            a: "100% made in India. We manufacture in Vasai Virar, Maharashtra using Indian-sourced materials (or certified imports for specialized components like toughened glass). Manufacturing in India = faster lead times, better quality control, and lower environmental footprint than imported shelters."
                        },
                        {
                            q: "Can I see installed examples before ordering?",
                            a: "Yes. We maintain a live project list with site photos and client references. We can also arrange site visits to nearby completed projects (if you're in/near Mumbai, Pune, Bangalore region). Request references during quote consultation."
                        },
                        {
                            q: "What's the warranty on the 2-year guarantee? Can I extend it?",
                            a: "The 2-year guarantee is comprehensive (covers all manufacturing defects). You can extend it to 5 years for +5% of shelter cost. We recommend the extended warranty for municipal projects—it protects your investment long-term."
                        }
                    ].map((faq, idx) => (
                        <div 
                            key={idx} 
                            className="bg-white rounded-2xl border border-black/[0.03] overflow-hidden shadow-sm transition-all"
                        >
                            <button
                                onClick={() => toggleFaq(idx)}
                                className="w-full text-left p-6 sm:p-7 flex justify-between items-center font-bold text-sm sm:text-base cursor-pointer hover:bg-[#F7F4EF]/35"
                            >
                                <span className="max-w-[90%]">{faq.q}</span>
                                <span className="text-[#2C5F2E] text-xl font-bold font-mono">
                                    {faqOpen[idx] ? "−" : "+"}
                                </span>
                            </button>

                            {faqOpen[idx] && (
                                <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-xs sm:text-sm leading-relaxed text-[#2D2D2D]/75 border-t border-[#2D2D2D]/5 pt-4">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 10 — TRUST & SOCIAL PROOF */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— PROVEN CAPABILITY</span>
                        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none text-[#1A1A1A]">
                            50+ Years of Combined Expertise. Trusted by India's Leading Developers & Municipalities.
                        </h2>
                        <div className="text-xs sm:text-sm font-semibold text-[#2D2D2D]/80 leading-relaxed mt-6 flex flex-col gap-3">
                            <p className="flex items-center gap-3">✓ ISO 9001:2015 Certified (Quality Management System)</p>
                            <p className="flex items-center gap-3">✓ BIS (Bureau of Indian Standards) IS 11707:2016 Compliant</p>
                            <p className="flex items-center gap-3">✓ Made in India certification & locally-sourced components</p>
                            <p className="flex items-center gap-3">✓ Zero defect rate in first 12 months of 100+ recent projects</p>
                        </div>

                        {/* Testimonials */}
                        <div className="flex flex-col gap-4 mt-8">
                            <div className="border-l-2 border-[#2C5F2E] pl-4">
                                <p className="italic text-xs sm:text-sm text-[#2D2D2D]/75">
                                    "Urbanland delivered 120 shelters on-time and within budget. Their project management and installation quality were exceptional. The 2-year guarantee gave us peace of mind."
                                </p>
                                <span className="block text-[10px] font-bold uppercase tracking-wider text-black/50 mt-2">— Smart City Project Manager, Nagpur</span>
                            </div>
                        </div>
                    </div>

                    {/* Logo Strip Grid */}
                    <div className="bg-[#EAE5DB]/40 rounded-[2.5rem] p-8 md:p-12 border border-black/[0.03]">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-8 text-center select-none">
                            — APPROVED OUTDOOR PARTNERS
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 select-none">
                            {brandLogos.map((logo, idx) => (
                                <div key={idx} className="bg-white flex justify-center items-center h-14 p-3 rounded-xl border border-black/[0.02] shadow-sm">
                                    <img 
                                        src={logo.img} 
                                        alt={`${logo.name} — outdoor infrastructure partner Urbanland Products`}
                                        className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 11 — RELATED PRODUCTS & CROSS-SELL */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24 select-none">
                <div className="text-left mb-12">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— COMPLETE SITE SOLUTIONS</span>
                    <h2 className="text-3xl font-black uppercase tracking-tight text-[#1A1A1A]">
                        You Might Also Need
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Benches */}
                    <Link to="/products/benches" className="bg-white rounded-3xl border border-black/[0.03] overflow-hidden p-5 shadow-sm hover:shadow-md transition-all group no-underline block cursor-pointer">
                        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black/5 mb-4">
                            <img src={benchImg} alt="WPC & Aluminium benches" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-lg font-black uppercase text-[#1A1A1A] group-hover:text-[#2C5F2E] transition-colors leading-tight">WPC & Aluminium Benches</h3>
                        <p className="text-xs text-[#2D2D2D]/60 mt-1">Premium park benches & public seats in Jatoba or Robinia wood cladding.</p>
                        <span className="text-[9px] uppercase font-bold tracking-widest text-[#2C5F2E] block mt-4 group-hover:translate-x-1.5 transition-transform">Explore Product →</span>
                    </Link>

                    {/* Car Sheds */}
                    <Link to="/products/car-sheds" className="bg-white rounded-3xl border border-black/[0.03] overflow-hidden p-5 shadow-sm hover:shadow-md transition-all group no-underline block cursor-pointer">
                        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black/5 mb-4">
                            <img src={carImg} alt="Car parking sheds" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-lg font-black uppercase text-[#1A1A1A] group-hover:text-[#2C5F2E] transition-colors leading-tight">Car Parking Sheds</h3>
                        <p className="text-xs text-[#2D2D2D]/60 mt-1">High-tensile structural parking shelters engineered for wind loads.</p>
                        <span className="text-[9px] uppercase font-bold tracking-widest text-[#2C5F2E] block mt-4 group-hover:translate-x-1.5 transition-transform">Explore Product →</span>
                    </Link>

                    {/* Wicker Furniture */}
                    <Link to="/products/wicker-furniture" className="bg-white rounded-3xl border border-black/[0.03] overflow-hidden p-5 shadow-sm hover:shadow-md transition-all group no-underline block cursor-pointer">
                        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black/5 mb-4">
                            <img src={wickerImg} alt="Outdoor wicker furniture sets" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-lg font-black uppercase text-[#1A1A1A] group-hover:text-[#2C5F2E] transition-colors leading-tight">Wicker Outdoor Products</h3>
                        <p className="text-xs text-[#2D2D2D]/60 mt-1">Luxury high-density synthetic wicker tables, lounges, and chairs.</p>
                        <span className="text-[9px] uppercase font-bold tracking-widest text-[#2C5F2E] block mt-4 group-hover:translate-x-1.5 transition-transform">Explore Product →</span>
                    </Link>

                    {/* Planters */}
                    <Link to="/products/planters" className="bg-white rounded-3xl border border-black/[0.03] overflow-hidden p-5 shadow-sm hover:shadow-md transition-all group no-underline block cursor-pointer">
                        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black/5 mb-4">
                            <img src={benchImg} alt="GFRC planters boxes" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-lg font-black uppercase text-[#1A1A1A] group-hover:text-[#2C5F2E] transition-colors leading-tight">Architectural Planters</h3>
                        <p className="text-xs text-[#2D2D2D]/60 mt-1">High-strength GFRC concrete cultivation boxes and linear planter tubs.</p>
                        <span className="text-[9px] uppercase font-bold tracking-widest text-[#2C5F2E] block mt-4 group-hover:translate-x-1.5 transition-transform">Explore Product →</span>
                    </Link>
                </div>
            </section>

            {/* SECTION 12 — FINAL CTA */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12">
                <div className="w-full bg-[#2C5F2E] rounded-[2.5rem] p-8 md:p-16 text-white flex flex-col items-center text-center relative overflow-hidden shadow-2xl border border-white/5">
                    {/* Floating Trademark Icon in Background */}
                    <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 opacity-5 z-0 pointer-events-none select-none">
                        <svg viewBox="0 0 100 100" className="h-[40vw] w-[40vw]" fill="none" stroke="currentColor" strokeWidth="4">
                            <circle cx="50" cy="50" r="40" />
                            <path d="M42 35v30M42 35h12c5 0 8 3 8 7.5S59 50 54 50H42M52 50l11 15" />
                        </svg>
                    </div>

                    <div className="relative z-10 max-w-4xl flex flex-col items-center">
                        <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest bg-white/10 text-white px-3.5 py-1.5 rounded-full border border-white/10 select-none mb-6">
                            Nationwide Procurement Support
                        </span>
                        
                        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight max-w-3xl mb-6">
                            Ready to Specify Bus Shelters for Your Project?
                        </h2>

                        <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mb-10">
                            Get a custom quote, detailed proposal, and technical specifications in under 24 hours. Urbanland serves municipalities, developers, and architects nationwide with Made-in-India quality and 2-year guarantees.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 select-none mb-8 w-full sm:w-auto">
                            <Link
                                to="/get-quote/?product=bus-shelters"
                                onClick={() => {
                                    if (window.gtag) window.gtag('event', 'final_cta_primary', { 'value': 'bus_shelter_quote' });
                                }}
                                className="px-8 py-4 bg-[#C9A84C] text-[#232120] hover:bg-white hover:text-black rounded-full font-black uppercase tracking-wider text-xs transition-all shadow-lg hover:scale-102 transform duration-300 text-center"
                            >
                                ▸ Request Custom Bus Shelter Quote →
                            </Link>

                            <Link
                                to="/resources/downloads"
                                onClick={() => {
                                    if (window.gtag) window.gtag('event', 'final_cta_secondary', { 'value': 'spec_guide_download' });
                                }}
                                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full font-bold uppercase tracking-wider text-xs transition-all backdrop-blur-sm text-center"
                            >
                                ▸ Download Specification Guide (PDF) ↓
                            </Link>
                        </div>

                        <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white/55 flex flex-wrap justify-center gap-x-6 gap-y-2 select-none border-t border-white/10 pt-6 w-full">
                            <span>✓ Free Custom Quote</span>
                            <span>✓ No Commitment Required</span>
                            <span>✓ Nationwide Delivery</span>
                            <span>✓ 2-Year Guarantee</span>
                            <span>✓ Installation Support</span>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BusSheltersPage;
