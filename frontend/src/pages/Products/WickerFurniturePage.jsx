import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

// Asset imports
import wickerImg from "../../assets/Wicker_Furniture.png";
import wickerJpeg from "../../assets/Wicker_Furniture.jpeg";
import hotelImg from "../../assets/gallery_hotels.png";
import realEstateImg from "../../assets/gallery_real_estate.png";
import hospitalImg from "../../assets/gallery_hospitals.png";

// Brand logos
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

const WickerFurniturePage = () => {
    const [faqOpen, setFaqOpen] = useState(Array(5).fill(false));
    const [showStickyHeader, setShowStickyHeader] = useState(false);

    useEffect(() => {
        // Dynamic SEO Metadata Configuration
        updatePageSEO({
            title: "Wicker Outdoor Products India | Cabanas, Poolside Loungers | Urbanland",
            description: "Premium wicker outdoor products including cabanas, poolside loungers, wicker living & dining sets. Stylish, weather-resistant B2B outdoor furniture in India. 2-Year Guarantee.",
            og_type: "product",
            og_image: wickerImg
        });

        // Scroll listener for sticky header
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowStickyHeader(true);
            } else {
                setShowStickyHeader(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            cleanPageSEO();
            window.removeEventListener("scroll", handleScroll);
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
            
            {/* STICKY HEADER ON SCROLL (Desktop only) */}
            <div className={`fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-[#2D2D2D]/10 py-4 px-8 lg:px-16 z-[99] flex justify-between items-center transition-all duration-500 shadow-md ${showStickyHeader ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}>
                <div className="flex items-center gap-3">
                    <span className="text-[#2C5F2E] font-black tracking-tighter text-lg">URBANLAND®</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#2D2D2D]/50 hidden sm:inline">Wicker Outdoor Products</span>
                </div>
                <Link
                    to="/get-quote/?product=wicker-outdoor-products"
                    className="px-6 py-2.5 bg-[#E65F2B] hover:bg-black text-white rounded-full font-black uppercase tracking-wider text-[10px] transition-all shadow-sm"
                >
                    Get Project Quote →
                </Link>
            </div>

            {/* BREADCRUMB NAVIGATION */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 select-none">
                <nav className="flex items-center text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#2D2D2D]/60 gap-2">
                    <Link to="/" className="hover:text-[#2C5F2E] transition-colors">Home</Link>
                    <span>/</span>
                    <Link to="/products" className="hover:text-[#2C5F2E] transition-colors">Products</Link>
                    <span>/</span>
                    <span className="text-[#2C5F2E]">Wicker Outdoor Products</span>
                </nav>
            </div>

            {/* SECTION 0 — HERO (Above Fold: 60/40 Split Desktop, Stacked Mobile) */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-20">
                <div className="w-full grid grid-cols-1 md:grid-cols-12 bg-[#1E1C1B] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5 relative min-h-[70vh] md:min-h-[75vh]">
                    {/* Left Side: Text panel (60% split on desktop) */}
                    <div className="md:col-span-7 p-8 md:p-16 flex flex-col justify-center text-white z-10 relative">
                        <div className="flex items-center gap-2 select-none mb-6">
                            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest bg-[#C9A84C] text-[#232120] px-3.5 py-1.5 rounded-full">
                                Premium Outdoor Collection
                            </span>
                            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest bg-[#2C5F2E] text-white px-3.5 py-1.5 rounded-full border border-white/10">
                                ISO 9001:2015
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.05] mb-6 font-outfit">
                            Premium Wicker Outdoor Products Manufacturer in India – Cabanas, Poolside Loungers, Living & Dining Sets
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed mb-8">
                            At Urbanland Products, we specialize in premium wicker outdoor furniture that transforms your garden, patio, or outdoor space into a stylish, functional oasis. As the providers of the best outdoor furniture in India, we focus on creating beautiful and durable wicker pieces that add a touch of elegance and comfort to your outdoor spaces.
                        </p>

                        <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#C9A84C]/90 flex flex-wrap gap-x-6 gap-y-2 mb-8 select-none border-b border-white/10 pb-6">
                            <span>✓ 2-Year Guarantee</span>
                            <span>✓ ISO 9001:2015 Certified</span>
                            <span>✓ Made in India</span>
                            <span>✓ 50+ Projects Delivered</span>
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 select-none">
                            <Link 
                                to="/get-quote/?product=wicker-outdoor-products"
                                className="px-8 py-4 bg-[#C9A84C] text-[#232120] hover:bg-white hover:text-black rounded-full font-black uppercase tracking-wider text-xs text-center transition-all shadow-xl hover:scale-[1.02] transform duration-300 w-full sm:w-auto"
                            >
                                Request Custom Quote →
                            </Link>

                            <a
                                href="#specifications"
                                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full font-bold uppercase tracking-wider text-xs text-center transition-all backdrop-blur-sm w-full sm:w-auto animate-pulse"
                            >
                                Download the Brochure ↓
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Photo Showcase (40% split on desktop) */}
                    <div className="md:col-span-5 relative w-full h-[40vh] md:h-auto overflow-hidden">
                        <img 
                            src={wickerJpeg} 
                            alt="Premium custom wicker outdoor furniture manufactured in India by Urbanland Products"
                            className="w-full h-full object-cover object-center scale-100 md:scale-103 opacity-90 transition-transform duration-[20s] hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
                    </div>
                </div>
            </section>

            {/* SECTION 1 — OUR WICKER OUTDOOR COLLECTION */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
                <div className="text-left mb-16 max-w-5xl">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— EXQUISITE PORTFOLIO</span>
                    <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none text-[#1A1A1A]">
                        Our Premium Wicker Outdoor Products Range
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-[#2D2D2D]/75 leading-relaxed mt-6">
                        Urbanland offers a complete range of luxurious wicker outdoor products designed for modern outdoor living. Each product is crafted using high-grade synthetic wicker combined with strong frames to deliver timeless style, exceptional comfort, and long-lasting performance in Indian outdoor conditions.
                    </p>
                </div>

                {/* Highly Visual 4-Column Image Grid Showcase */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Item 1: Wicker Cabanas */}
                    <div className="bg-white rounded-[2.5rem] border border-black/[0.03] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group h-full">
                        <div className="relative aspect-[4/3] bg-black/5 overflow-hidden">
                            <img src={hotelImg} alt="Premium Wicker Cabana poolside resort lounge" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute top-4 right-4 bg-[#2C5F2E] text-white text-[8px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full select-none shadow-sm">RESORTS</div>
                        </div>
                        <div className="p-6 flex flex-col justify-between flex-1">
                            <div>
                                <h3 className="text-lg font-black uppercase text-[#1A1A1A] leading-tight">Wicker Cabanas</h3>
                                <p className="text-xs text-[#2D2D2D]/70 leading-relaxed mt-3">
                                    Elegant shaded retreats perfect for luxury poolsides, resort decks, gardens, and premium residential terrace areas.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Item 2: Poolside Loungers & Daybeds */}
                    <div className="bg-white rounded-[2.5rem] border border-black/[0.03] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group h-full">
                        <div className="relative aspect-[4/3] bg-black/5 overflow-hidden">
                            <img src={hotelImg} alt="Luxury wicker poolside loungers and daybeds" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute top-4 right-4 bg-[#2C5F2E] text-white text-[8px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full select-none shadow-sm">POOLSIDE</div>
                        </div>
                        <div className="p-6 flex flex-col justify-between flex-1">
                            <div>
                                <h3 className="text-lg font-black uppercase text-[#1A1A1A] leading-tight">Poolside Loungers</h3>
                                <p className="text-xs text-[#2D2D2D]/70 leading-relaxed mt-3">
                                    Comfortable, ergonomic and incredibly stylish sun loungers and modular daybeds engineered for ultimate relaxation.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Item 3: Wicker Living Sets */}
                    <div className="bg-white rounded-[2.5rem] border border-black/[0.03] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group h-full">
                        <div className="relative aspect-[4/3] bg-black/5 overflow-hidden">
                            <img src={wickerImg} alt="Sophisticated wicker outdoor sofas and living sets" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute top-4 right-4 bg-[#2C5F2E] text-white text-[8px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full select-none shadow-sm">LIVING</div>
                        </div>
                        <div className="p-6 flex flex-col justify-between flex-1">
                            <div>
                                <h3 className="text-lg font-black uppercase text-[#1A1A1A] leading-tight">Wicker Living Sets</h3>
                                <p className="text-xs text-[#2D2D2D]/70 leading-relaxed mt-3">
                                    Sophisticated outdoor sofas, woven armchairs, and matching coffee tables that blend living-room comfort with outdoor durability.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Item 4: Wicker Dining Sets */}
                    <div className="bg-white rounded-[2.5rem] border border-black/[0.03] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group h-full">
                        <div className="relative aspect-[4/3] bg-black/5 overflow-hidden">
                            <img src={wickerJpeg} alt="Timeless al-fresco wicker dining chairs and tables" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute top-4 right-4 bg-[#2C5F2E] text-white text-[8px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full select-none shadow-sm">DINING</div>
                        </div>
                        <div className="p-6 flex flex-col justify-between flex-1">
                            <div>
                                <h3 className="text-lg font-black uppercase text-[#1A1A1A] leading-tight">Wicker Dining Sets</h3>
                                <p className="text-xs text-[#2D2D2D]/70 leading-relaxed mt-3">
                                    Beautiful, robust dining tables and chairs perfect for al-fresco meals, open-air cafes, and hotel rooftop entertaining.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2 — WHY PEOPLE CHOOSE URBANLAND */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
                <div className="bg-[#2D2D2D] rounded-[2.5rem] border border-white/5 p-8 md:p-16 text-white grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div className="lg:col-span-7">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C] mb-3 block">— METRIC OF TRUST</span>
                        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight text-white mb-6 font-outfit">
                            Why People Choose Urbanland Wicker Outdoor Products
                        </h2>
                        <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed font-light mb-6">
                            Urbanland wicker outdoor products combine natural beauty with modern engineering. They are designed to withstand India’s harsh climate while offering elegance, comfort, and minimal maintenance.
                        </p>
                        <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed font-light">
                            By choosing Urbanland wicker outdoor products, you get premium B2B furniture that enhances your garden, patio, balcony, resort, or township with timeless style and superior craftsmanship. We focus on creating pieces that elevate your outdoor experience while delivering long-term value and extreme weather durability.
                        </p>
                    </div>

                    <div className="lg:col-span-5 w-full h-[320px] rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 relative shrink-0">
                        <img 
                            src={wickerImg} 
                            alt="Luxury hand-woven B2B resort furniture" 
                            className="w-full h-full object-cover scale-103 brightness-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/60 to-transparent" />
                    </div>
                </div>
            </section>

            {/* SECTION 3 — MATERIALS & CUSTOMIZATION OPTIONS */}
            <section id="specifications" className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
                <div className="text-left mb-16 max-w-4xl">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— TECHNICAL PROFILE</span>
                    <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none text-[#1A1A1A]">
                        Materials & Customization Options
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {/* KEY FEATURES */}
                    <div className="bg-white rounded-[2.5rem] border border-black/[0.03] p-8 md:p-12 shadow-sm flex flex-col justify-between">
                        <div>
                            <h3 className="text-xs font-black uppercase tracking-widest text-[#2C5F2E] mb-6 border-b border-black/5 pb-3 select-none">— Key Features</h3>
                            <ul className="flex flex-col gap-4 text-xs sm:text-sm font-bold text-[#1A1A1A]/85">
                                <li className="flex items-center gap-3"><span className="text-[#C9A84C]">✦</span> High-grade synthetic wicker (PE rattan) – UV-resistant and weatherproof</li>
                                <li className="flex items-center gap-3"><span className="text-[#C9A84C]">✦</span> Strong and lightweight aluminium or powder-coated frames</li>
                                <li className="flex items-center gap-3"><span className="text-[#C9A84C]">✦</span> Fade-resistant and easy-to-clean surfaces</li>
                                <li className="flex items-center gap-3"><span className="text-[#C9A84C]">✦</span> Excellent ventilation and ergonomic seating comfort</li>
                                <li className="flex items-center gap-3"><span className="text-[#C9A84C]">✦</span> Eco-friendly, highly recyclable raw materials</li>
                            </ul>
                        </div>
                    </div>

                    {/* CUSTOMIZATION OPTIONS */}
                    <div className="bg-white rounded-[2.5rem] border border-black/[0.03] p-8 md:p-12 shadow-sm flex flex-col justify-between">
                        <div>
                            <h3 className="text-xs font-black uppercase tracking-widest text-[#2C5F2E] mb-6 border-b border-black/5 pb-3 select-none">— Customization Options</h3>
                            <ul className="flex flex-col gap-4 text-xs sm:text-sm font-bold text-[#1A1A1A]/85">
                                <li className="flex items-center gap-3"><span className="text-[#C9A84C]">✦</span> Complete sets: Living sets, dining sets, loungers, cabanas</li>
                                <li className="flex items-center gap-3"><span className="text-[#C9A84C]">✦</span> Colours: Wide range of modern wicker shades and frame finishes</li>
                                <li className="flex items-center gap-3"><span className="text-[#C9A84C]">✦</span> Cushions: Waterproof, UV-protected fabric in multiple colours and styles</li>
                                <li className="flex items-center gap-3"><span className="text-[#C9A84C]">✦</span> Size & Configuration: Fully customisable B2B custom dimensions</li>
                                <li className="flex items-center gap-3"><span className="text-[#C9A84C]">✦</span> Add-ons: Tempered glass tops, side tables, ottomans, custom covers, lighting</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4 — REAL PROJECTS (Social Proof) */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
                <div className="text-left mb-16 max-w-4xl">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— INFRASTRUCTURE PROJECTS</span>
                    <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none text-[#1A1A1A]">
                        Real Wicker Outdoor Products. Real Results. Across India.
                    </h2>
                    <p className="text-sm text-[#2D2D2D]/75 mt-4 leading-relaxed">
                        Proven across 50+ major luxury hospitality and premium real estate townships. Here are three project case studies.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 select-none mb-12">
                    {/* PROJECT CARD 1 */}
                    <div className="bg-white rounded-[2.5rem] border border-black/[0.03] overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.01] transform transition-all duration-300 flex flex-col justify-between group">
                        <div className="w-full h-48 bg-black/5 overflow-hidden relative">
                            <img src={hotelImg} alt="Urbanland Wicker Daybeds installed in Taj Resorts Goa" className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" loading="lazy" />
                            <div className="absolute top-4 right-4 bg-[#2C5F2E] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                                Taj Resorts
                            </div>
                        </div>
                        <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                            <div>
                                <span className="text-[9px] font-black uppercase tracking-wider text-[#C9A84C]">Hospitality Spotlight — Goa</span>
                                <h3 className="text-lg font-black uppercase text-[#1A1A1A] leading-tight mt-1">Taj Resorts Poolside — 40 Loungers & Daybeds</h3>
                                <div className="text-[10px] font-bold text-[#2C5F2E] my-2">Timeline: 45 Days</div>
                                <p className="text-xs text-[#2D2D2D]/70 leading-relaxed">
                                    Taj resorts selected Urbanland for high-density synthetic wicker poolside daybeds and sun loungers. High-salt air and intense UV exposure required custom powder-coated aluminium internal frames and quick-dry cushions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* PROJECT CARD 2 */}
                    <div className="bg-white rounded-[2.5rem] border border-black/[0.03] overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.01] transform transition-all duration-300 flex flex-col justify-between group">
                        <div className="w-full h-48 bg-black/5 overflow-hidden relative">
                            <img src={realEstateImg} alt="Premium Urbanland wicker furniture in Lodha Clubhouse patios" className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" loading="lazy" />
                            <div className="absolute top-4 right-4 bg-[#2C5F2E] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                                Lodha Group
                            </div>
                        </div>
                        <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                            <div>
                                <span className="text-[9px] font-black uppercase tracking-wider text-[#C9A84C]">Lodha Patios — Maharashtra</span>
                                <h3 className="text-lg font-black uppercase text-[#1A1A1A] leading-tight mt-1">Luxury Clubhouse Patios — Wicker Living & Dining Ensembles</h3>
                                <div className="text-[10px] font-bold text-[#2C5F2E] my-2">Timeline: 60 Days</div>
                                <p className="text-xs text-[#2D2D2D]/70 leading-relaxed">
                                    Lodha specified Urbanland's weather-resistant wicker dining and sophisticated outdoor living sets for their luxury residential township clubhouse gardens, delivering high aesthetic styling and robust B2B warranty.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* PROJECT CARD 3 */}
                    <div className="bg-white rounded-[2.5rem] border border-black/[0.03] overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.01] transform transition-all duration-300 flex flex-col justify-between group">
                        <div className="w-full h-48 bg-black/5 overflow-hidden relative">
                            <img src={hospitalImg} alt="Urbanland wicker dining chairs at Oberoi rooftop B2B lounges" className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" loading="lazy" />
                            <div className="absolute top-4 right-4 bg-[#2C5F2E] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                                Oberoi Lounges
                            </div>
                        </div>
                        <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                            <div>
                                <span className="text-[9px] font-black uppercase tracking-wider text-[#C9A84C]">Corporate Lounges — Oberoi</span>
                                <h3 className="text-lg font-black uppercase text-[#1A1A1A] leading-tight mt-1">Rooftop Terraces — Custom Shaded Wicker Cabanas</h3>
                                <div className="text-[10px] font-bold text-[#2C5F2E] my-2">Timeline: 30 Days</div>
                                <p className="text-xs text-[#2D2D2D]/70 leading-relaxed">
                                    For open-air corporate lounges, Oberoi specified bespoke wicker cabanas with concealed conduits, integrating stylish B2B shading parameters with weather covers for the heavy monsoons.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* STATS BAR */}
                <div className="bg-[#2D2D2D] rounded-[2rem] border border-white/5 p-8 md:p-10 text-white flex flex-col md:flex-row justify-between items-center text-center gap-8 shadow-md select-none">
                    <div className="flex-1">
                        <span className="block text-3xl font-black uppercase tracking-tight text-[#C9A84C]">50+</span>
                        <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-white/55 mt-1 block">Major Projects Delivered</span>
                    </div>
                    <div className="w-[1px] h-8 bg-white/10 md:block hidden" />
                    <div className="flex-1">
                        <span className="block text-3xl font-black uppercase tracking-tight text-[#C9A84C]">15+</span>
                        <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-white/55 mt-1 block">Cities Served</span>
                    </div>
                    <div className="w-[1px] h-8 bg-white/10 md:block hidden" />
                    <div className="flex-1">
                        <span className="block text-3xl font-black uppercase tracking-tight text-[#C9A84C]">2-Year</span>
                        <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-white/55 mt-1 block">Comprehensive Guarantee</span>
                    </div>
                </div>
            </section>

            {/* SECTION 5 — INSTALLATION, WARRANTY & FAQ */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— AFTER-SALES LIFECYCLE GUIDE</span>
                <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none text-[#1A1A1A] mb-12">
                    Installation, Warranty & Top Questions
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-[2.5rem] border border-black/[0.03] p-8 md:p-14 mb-16 shadow-sm">
                    {/* Installation Support */}
                    <div>
                        <h3 className="text-xl font-black uppercase text-[#1A1A1A] border-b border-black/10 pb-3">▸ Installation Support</h3>
                        <p className="text-xs sm:text-sm text-[#2D2D2D]/75 leading-relaxed mt-4">
                            We provide comprehensive delivery and professional installation support across India. Our trained team handles unloading, placement, assembly, and modular configurations.
                        </p>
                    </div>

                    {/* 2-Year Comprehensive Warranty */}
                    <div>
                        <h3 className="text-xl font-black uppercase text-[#1A1A1A] border-b border-black/10 pb-3">▸ 2-Year B2B Warranty</h3>
                        <p className="text-xs sm:text-sm text-[#2D2D2D]/75 leading-relaxed mt-4">
                            Covers structural frame integrity, synthetic wicker PE core materials, and manufacturing defects. Claim resolution is simple with on-site inspections and quick repairs.
                        </p>
                    </div>
                </div>

                {/* FAQ section */}
                <h3 className="text-sm font-black uppercase tracking-widest text-[#C9A84C] mb-8">— Frequently Asked Questions</h3>
                <div className="flex flex-col gap-4 max-w-4xl mx-auto">
                    {[
                        {
                            q: "Is wicker outdoor furniture suitable for Indian weather?",
                            a: "Yes! Unlike natural rattan, our high-density PE synthetic wicker is specifically engineered to withstand harsh UV rays, monsoon downpours, high humidity, and temperature fluctuations without fading, cracking, or molding."
                        },
                        {
                            q: "How does synthetic wicker compare to natural rattan?",
                            a: "Natural rattan is highly organic but degrades quickly under outdoor sunlight and moisture. PE synthetic wicker replicates the warm natural appearance perfectly while providing 10x more durability, washability, and weather resistance."
                        },
                        {
                            q: "Can wicker outdoor sets be fully customized?",
                            a: "Absolutely! As a direct B2B manufacturer, we customize wicker colors, cushion fabrics (waterproof and UV-resistant in multiple shades), dimensions, modules, glass tops, and complete seating configurations to align with your site plans."
                        },
                        {
                            q: "What is the typical B2B lead time?",
                            a: "Standard B2B orders take about 30 to 45 days from confirmation and drawings approval, depending on the custom specifications and order volume. Staggered logistics options are available for township handovers."
                        },
                        {
                            q: "Do you provide installation services?",
                            a: "Yes. We coordinate nationwide logistics and deploy skilled field technicians to unpack, assemble, and position the wicker cabanas, loungers, or dining sets at your site, ensuring zero hassle for your team."
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

            {/* SECTION 6 — FINAL CTA + TRUST */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12">
                <div className="w-full bg-white rounded-[2.5rem] p-8 md:p-16 flex flex-col items-center text-center border border-black/[0.03] shadow-lg relative overflow-hidden">
                    <div className="relative z-10 max-w-4xl flex flex-col items-center">
                        <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest bg-[#2C5F2E]/10 text-[#2C5F2E] px-3.5 py-1.5 rounded-full select-none mb-6">
                            Transform Your Space
                        </span>
                        
                        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight text-[#1A1A1A] max-w-3xl mb-6">
                            Ready to Transform Your Outdoor Space with Premium Wicker Products?
                        </h2>

                        <p className="text-sm sm:text-base text-[#2D2D2D]/75 leading-relaxed max-w-2xl mb-10">
                            Specify Urbanland® B2B wicker furniture for your commercial properties, hotels, townships, or open-air dining plazas. Request a custom quote today.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 select-none mb-8 w-full sm:w-auto">
                            <Link
                                to="/get-quote/?product=wicker-furniture"
                                className="px-8 py-4 bg-[#C9A84C] text-[#232120] hover:bg-black hover:text-white rounded-full font-black uppercase tracking-wider text-xs transition-all shadow-lg hover:scale-102 transform duration-300 text-center font-bold"
                            >
                                Request Custom Quote →
                            </Link>

                            <Link
                                to="/resources/downloads"
                                className="px-8 py-4 bg-white hover:bg-black hover:text-white border border-black/10 text-black rounded-full font-bold uppercase tracking-wider text-xs transition-all text-center font-bold"
                            >
                                Download the Brochure ↓
                            </Link>
                        </div>

                        <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#2D2D2D]/55 flex flex-wrap justify-center gap-x-6 gap-y-2 select-none border-t border-black/10 pt-6 w-full mb-8">
                            <span>✓ Free custom quote</span>
                            <span>✓ No commitment</span>
                            <span>✓ Nationwide delivery</span>
                            <span>✓ 2-Year Guarantee</span>
                            <span>✓ Installation support</span>
                        </p>

                        <h3 className="text-sm font-black uppercase tracking-widest text-[#2C5F2E] mb-6">— Why Urbanland Stands Apart</h3>
                        
                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs font-bold text-[#2D2D2D]/85 text-left max-w-3xl border-b border-black/10 pb-8 mb-8">
                            <li>✓ ISO 9001:2015 Certified</li>
                            <li>✓ 2-Year Guarantee (India’s only)</li>
                            <li>✓ Complete range of wicker outdoor products</li>
                            <li>✓ 50+ completed projects</li>
                            <li>✓ Nationwide delivery & installation support</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WickerFurniturePage;
