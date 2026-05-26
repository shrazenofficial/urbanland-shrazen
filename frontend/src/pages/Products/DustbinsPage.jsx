import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

// Asset imports
import dustbinsJpeg from "../../assets/Dustbins.jpeg";
import skylineImg from "../../assets/products/Product Images/Dustbins/skyline.png";
import nanukNextImg from "../../assets/products/Product Images/Dustbins/nanuk_next.png";
import tleskImg from "../../assets/products/Product Images/Dustbins/tlesk.png";
import sortCorrugatedImg from "../../assets/products/Product Images/Dustbins/sort_corrugated.png";
import hotelImg from "../../assets/gallery_hotels.png";
import realEstateImg from "../../assets/gallery_real_estate.png";
import smartCityImg from "../../assets/gallery_smart_city.png";

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

const DustbinsPage = () => {
    const [faqOpen, setFaqOpen] = useState(Array(5).fill(false));
    const [showStickyHeader, setShowStickyHeader] = useState(false);

    useEffect(() => {
        // Dynamic SEO Metadata Configuration
        updatePageSEO({
            title: "Premium Outdoor Dustbins Manufacturer India | Smart Waste Sorting | Urbanland",
            description: "Custom-designed municipal & commercial outdoor dustbins. Vandal-resistant, solar-ready and smart sorting configurations. 2-Year Guarantee. Staggered bulk delivery.",
            og_type: "product",
            og_image: dustbinsJpeg
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
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#2D2D2D]/50 hidden sm:inline">Outdoor Dustbins</span>
                </div>
                <Link
                    to="/get-quote/?product=outdoor-dustbins"
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
                    <span className="text-[#2C5F2E]">Outdoor Dustbins</span>
                </nav>
            </div>

            {/* SECTION 0 — HERO (Above Fold: 60/40 Split Desktop, Stacked Mobile) */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-20">
                <div className="w-full grid grid-cols-1 md:grid-cols-12 bg-[#1E1C1B] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5 relative min-h-[70vh] md:min-h-[75vh]">
                    {/* Left Side: Text panel (60% split on desktop) */}
                    <div className="md:col-span-7 p-8 md:p-16 flex flex-col justify-center text-white z-10 relative">
                        <div className="flex items-center gap-2 select-none mb-6">
                            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest bg-[#C9A84C] text-[#232120] px-3.5 py-1.5 rounded-full">
                                Waste Management Spot
                            </span>
                            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest bg-[#2C5F2E] text-white px-3.5 py-1.5 rounded-full border border-white/10">
                                ISO 9001:2015
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.05] mb-6 font-outfit">
                            Premium Outdoor Dustbins Manufacturer in India — Smart Sorting, Vandal-Resistant & Galvanized Durability
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed mb-8">
                            At Urbanland Products, we manufacture premium B2B sorting stations and public litter bins engineered to withstand heavy daily use. Combining zinc-plated internal liners, rainproof steel tops, and FSC®-certified vertical timber slats, our designs blend ecology with architectural excellence.
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
                                to="/get-quote/?product=outdoor-dustbins"
                                className="px-8 py-4 bg-[#C9A84C] text-[#232120] hover:bg-white hover:text-black rounded-full font-black uppercase tracking-wider text-xs text-center transition-all shadow-xl hover:scale-[1.02] transform duration-300 w-full sm:w-auto"
                            >
                                Request Custom Quote →
                            </Link>

                            <a
                                href="#specifications"
                                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full font-bold uppercase tracking-wider text-xs text-center transition-all backdrop-blur-sm w-full sm:w-auto"
                            >
                                Download Specifications ↓
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Photo Showcase (40% split on desktop) */}
                    <div className="md:col-span-5 relative w-full h-[40vh] md:h-auto overflow-hidden bg-black/5 flex items-center justify-center">
                        <img 
                            src={dustbinsJpeg} 
                            alt="Premium custom outdoor dustbins manufactured in India by Urbanland Products"
                            className="w-full h-full object-cover object-center scale-100 md:scale-103 opacity-90 transition-transform duration-[20s] hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                    </div>
                </div>
            </section>

            {/* SECTION 1 — OUR DUSTBIN RANGE (Bento Grid layout) */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
                <div className="text-left mb-16 max-w-5xl">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— EXQUISITE PORTFOLIO</span>
                    <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none text-[#1A1A1A]">
                        Signature Sorting Receptacles & Ash Bins
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-[#2D2D2D]/75 leading-relaxed mt-6">
                        Explore our modular public sorting stations designed to withstand vandal exposures, heavy monsoons, and extreme public footfalls, combining galvanized sheet cores with contemporary minimal styling.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Item 1: Nanuk Next */}
                    <div className="bg-white rounded-[2.5rem] p-8 border border-black/[0.03] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group">
                        <div className="flex-1 w-full flex justify-center items-center overflow-hidden min-h-[200px] relative select-none">
                            <img src={nanukNextImg} alt="Nanuk Next Wood Slatted Dustbin" className="max-h-[85%] max-w-[85%] object-contain select-none group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="mt-6 border-t border-black/[0.04] pt-6">
                            <h3 className="text-xl font-black uppercase text-[#1A1A1A] leading-tight">NANUK NEXT</h3>
                            <p className="text-xs text-[#2D2D2D]/70 leading-relaxed mt-3">
                                Sleek wood-slatted waste bin cladded in WPC wood slats with a lockable black steel lid and internal ash receptacle.
                            </p>
                        </div>
                    </div>

                    {/* Item 2: Skyline */}
                    <div className="bg-white rounded-[2.5rem] p-8 border border-black/[0.03] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group">
                        <div className="flex-1 w-full flex justify-center items-center overflow-hidden min-h-[200px] relative select-none">
                            <img src={skylineImg} alt="Skyline Robinia wood double sorting bin" className="max-h-[85%] max-w-[85%] object-contain select-none group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="mt-6 border-t border-black/[0.04] pt-6">
                            <h3 className="text-xl font-black uppercase text-[#1A1A1A] leading-tight">SKYLINE</h3>
                            <p className="text-xs text-[#2D2D2D]/70 leading-relaxed mt-3">
                                Architectural double-compartment sorting station cladded in premium Robinia timber with distinct yellow sorting lids.
                            </p>
                        </div>
                    </div>

                    {/* Item 3: Tlesk */}
                    <div className="bg-white rounded-[2.5rem] p-8 border border-black/[0.03] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group">
                        <div className="flex-1 w-full flex justify-center items-center overflow-hidden min-h-[200px] relative select-none">
                            <img src={tleskImg} alt="Tlesk Playful wireframe cage litter bins" className="max-h-[85%] max-w-[85%] object-contain select-none group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="mt-6 border-t border-black/[0.04] pt-6">
                            <h3 className="text-xl font-black uppercase text-[#1A1A1A] leading-tight">TLESK</h3>
                            <p className="text-xs text-[#2D2D2D]/70 leading-relaxed mt-3">
                                Vibrant yellow and blue wireframe cage litter bins with integrated cylindrical liners, bringing playful curves to plazas.
                            </p>
                        </div>
                    </div>

                    {/* Item 4: Korton Triple */}
                    <div className="bg-white rounded-[2.5rem] p-8 border border-black/[0.03] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group">
                        <div className="flex-1 w-full flex justify-center items-center overflow-hidden min-h-[200px] relative select-none">
                            <img src={sortCorrugatedImg} alt="Korton Triple Corrugated Sheet Sorting Station" className="max-h-[85%] max-w-[85%] object-contain select-none group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="mt-6 border-t border-black/[0.04] pt-6">
                            <h3 className="text-xl font-black uppercase text-[#1A1A1A] leading-tight">KORTON TRIPLE</h3>
                            <p className="text-xs text-[#2D2D2D]/70 leading-relaxed mt-3">
                                Heavy-gauge corrugated steel three-compartment sorting station featuring distinct color-coded collection ports.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2 — WHY PEOPLE SPECIFY URBANLAND DUSTBINS */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
                <div className="bg-[#2D2D2D] rounded-[2.5rem] border border-white/5 p-8 md:p-16 text-white grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div className="lg:col-span-7">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C] mb-3 block">— METRIC OF TRUST</span>
                        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight text-white mb-6 font-outfit">
                            Engineered for High-Traffic Municipal Landscapes
                        </h2>
                        <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed font-light mb-6">
                            When municipal bodies, builders, or town planners specify litter receptacles for public spaces, they need structures that can handle rain, heat, vandalism, and massive foot traffic.
                        </p>
                        <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed font-light">
                            Urbanland B2B dustbins are manufactured using robust Grade 304 or 316 Stainless Steel cores, zinc-primed steel plates, and anti-graffiti powder coatings, guaranteeing a 10+ year lifespan with minimal maintenance costs.
                        </p>
                    </div>

                    <div className="lg:col-span-5 w-full h-[320px] rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 relative shrink-0">
                        <img 
                            src={dustbinsJpeg} 
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
                                <li className="flex items-center gap-3"><span className="text-[#C9A84C]">✦</span> 75L to 225L heavy-duty internal sorting capacities</li>
                                <li className="flex items-center gap-3"><span className="text-[#C9A84C]">✦</span> Galvanized, zinc-primed steel plates for 100% monsoon isolation</li>
                                <li className="flex items-center gap-3"><span className="text-[#C9A84C]">✦</span> Integrated key-lock systems preventing unauthorized access/theft</li>
                                <li className="flex items-center gap-3"><span className="text-[#C9A84C]">✦</span> Separate rain-safe hoods and internal ash containers</li>
                                <li className="flex items-center gap-3"><span className="text-[#C9A84C]">✦</span> FSC® sustainable vertical Jatoba or WPC timber accents</li>
                            </ul>
                        </div>
                    </div>

                    {/* CUSTOMIZATION OPTIONS */}
                    <div className="bg-white rounded-[2.5rem] border border-black/[0.03] p-8 md:p-12 shadow-sm flex flex-col justify-between">
                        <div>
                            <h3 className="text-xs font-black uppercase tracking-widest text-[#2C5F2E] mb-6 border-b border-black/5 pb-3 select-none">— Customization Options</h3>
                            <ul className="flex flex-col gap-4 text-xs sm:text-sm font-bold text-[#1A1A1A]/85">
                                <li className="flex items-center gap-3"><span className="text-[#C9A84C]">✦</span> Single, dual, triple, or quad sorting configurations</li>
                                <li className="flex items-center gap-3"><span className="text-[#C9A84C]">✦</span> Wide range of custom colors (50+ Akzonobel RAL finishes)</li>
                                <li className="flex items-center gap-3"><span className="text-[#C9A84C]">✦</span> Custom sorting text labels and laser-cut icons</li>
                                <li className="flex items-center gap-3"><span className="text-[#C9A84C]">✦</span> Surface flanges or submerged ground-embedded roots</li>
                                <li className="flex items-center gap-3"><span className="text-[#C9A84C]">✦</span> Fire-suppressive self-extinguishing internal configurations</li>
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
                        Real Waste Infrastructure. Real Results. Across India.
                    </h2>
                    <p className="text-sm text-[#2D2D2D]/75 mt-4 leading-relaxed">
                        Proven across 50+ major municipal townships and commercial plazas. Here are three project case studies.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 select-none mb-12">
                    {/* PROJECT CARD 1 */}
                    <div className="bg-white rounded-[2.5rem] border border-black/[0.03] overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.01] transform transition-all duration-300 flex flex-col justify-between group">
                        <div className="w-full h-48 bg-black/5 overflow-hidden relative">
                            <img src={smartCityImg} alt="Urbanland Skyline Dustbins installed in Pune smart city public avenues" className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" loading="lazy" />
                            <div className="absolute top-4 right-4 bg-[#2C5F2E] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                                Pune Smart City
                            </div>
                        </div>
                        <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                            <div>
                                <span className="text-[9px] font-black uppercase tracking-wider text-[#C9A84C]">Municipal Spotlight — Maharashtra</span>
                                <h3 className="text-lg font-black uppercase text-[#1A1A1A] leading-tight mt-1">Smart City Public Plazas — 250 Dual Sorting Stations</h3>
                                <div className="text-[10px] font-bold text-[#2C5F2E] my-2">Timeline: 90 Days</div>
                                <p className="text-xs text-[#2D2D2D]/70 leading-relaxed">
                                    Pune Smart City specified Urbanland for 250 wood-clad Skyline sorting stations, incorporating rain-safe lids and lockable heavy steel roots anchored onto concrete surfaces.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* PROJECT CARD 2 */}
                    <div className="bg-white rounded-[2.5rem] border border-black/[0.03] overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.01] transform transition-all duration-300 flex flex-col justify-between group">
                        <div className="w-full h-48 bg-black/5 overflow-hidden relative">
                            <img src={realEstateImg} alt="Urbanland Nanuk Next trash receptacles in Lodha Premium Townships" className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" loading="lazy" />
                            <div className="absolute top-4 right-4 bg-[#2C5F2E] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                                Lodha Group
                            </div>
                        </div>
                        <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                            <div>
                                <span className="text-[9px] font-black uppercase tracking-wider text-[#C9A84C]">Real Estate — Lodha Patios</span>
                                <h3 className="text-lg font-black uppercase text-[#1A1A1A] leading-tight mt-1">Luxury Residential Patios — 180 Minimalist Timber Bins</h3>
                                <div className="text-[10px] font-bold text-[#2C5F2E] my-2">Timeline: 60 Days</div>
                                <p className="text-xs text-[#2D2D2D]/70 leading-relaxed">
                                    Lodha purchased 180 Nanuk Next minimalist WPC wood-slatted dustbins for township common walks, delivering natural visual warmth aligned with B2B warranty coverage.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* PROJECT CARD 3 */}
                    <div className="bg-white rounded-[2.5rem] border border-black/[0.03] overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.01] transform transition-all duration-300 flex flex-col justify-between group">
                        <div className="w-full h-48 bg-black/5 overflow-hidden relative">
                            <img src={hotelImg} alt="Urbanland Sigma Triple sorting columns at corporate tech parks" className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" loading="lazy" />
                            <div className="absolute top-4 right-4 bg-[#2C5F2E] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                                Tech Parks
                            </div>
                        </div>
                        <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                            <div>
                                <span className="text-[9px] font-black uppercase tracking-wider text-[#C9A84C]">Corporate Lounges — Bangalore</span>
                                <h3 className="text-lg font-black uppercase text-[#1A1A1A] leading-tight mt-1">Rooftop Terraces & Lobby Lounges — Sigma Triple Sorting Columns</h3>
                                <div className="text-[10px] font-bold text-[#2C5F2E] my-2">Timeline: 30 Days</div>
                                <p className="text-xs text-[#2D2D2D]/70 leading-relaxed">
                                    Bespoke triple-sorting stainless steel columns custom branded and color-coded for modular lobby installations across 5 premium corporate parks.
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

            {/* SECTION 5 — FAQ */}
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
                            We provide nationwide logistics and complete anchor-bolting installation support, securing each receptacle onto concrete floor spaces for absolute vandal-proofing.
                        </p>
                    </div>

                    {/* 2-Year Comprehensive Warranty */}
                    <div>
                        <h3 className="text-xl font-black uppercase text-[#1A1A1A] border-b border-black/10 pb-3">▸ 2-Year B2B Warranty</h3>
                        <p className="text-xs sm:text-sm text-[#2D2D2D]/75 leading-relaxed mt-4">
                            Covers lock mechanisms, zinc priming integrity, anti-rust coatings, and structural steel assemblies. Simple digital claim resolution with immediate part replacement.
                        </p>
                    </div>
                </div>

                {/* FAQ section */}
                <h3 className="text-sm font-black uppercase tracking-widest text-[#C9A84C] mb-8">— Frequently Asked Questions</h3>
                <div className="flex flex-col gap-4 max-w-4xl mx-auto">
                    {[
                        {
                            q: "What coating protection do you use to isolate public dustbins from rust?",
                            a: "Every single one of our mild steel dustbins undergoes a rigorous multi-stage chemical pre-treatment, a heavy-duty zinc-primer undercoat, and a top finish coating of Akzonobel architectural PU powder. This creates a multi-layered barrier completely sealing the steel from moisture and sea salt mist."
                        },
                        {
                            q: "Are the lock systems vandal-resistant?",
                            a: "Yes! Our public receptacles feature custom heavy-duty locking systems and high-strength piano-hinges. The lock requires a special key to unlock and swing open the front doors, ensuring only authorized cleaning personnel can pull out the internal zinc-plated steel liners."
                        },
                        {
                            q: "Can the sorting icons and text be custom branded?",
                            a: "Absolutely. We routinely cut custom corporate logos, sitemap indicators, sorting icons (e.g. wet waste, glass, plastic, dry), and municipal lettering directly into the steel sheets using laser-cutting, or apply architectural weather-proof vinyl decals."
                        },
                        {
                            q: "What is your B2B lead time for bulk municipal projects?",
                            a: "For bulk orders (e.g. 50-200 units), the typical manufacturing lead time is 30 to 40 days depending on raw material customization specs. We also offer staggered logistics schedules to align with township handover timelines."
                        },
                        {
                            q: "Do you supply internal zinc liners with all standard models?",
                            a: "Yes, every standard municipal litter bin or sorting station we manufacture is supplied with high-capacity galvanized internal steel sheet liners with handles, making it extremely fast, clean, and ergonomic for staff to empty them."
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
                            Ready to Specify
                        </span>
                        
                        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight text-[#1A1A1A] max-w-3xl mb-6">
                            Specify Architectural Waste Infrastructure for Your Project
                        </h2>

                        <p className="text-sm sm:text-base text-[#2D2D2D]/75 leading-relaxed max-w-2xl mb-10">
                            Get a custom quote, detailed bento project configurations, or dwg/revit sitemaps within 24 hours. Nationwide B2B delivery.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 select-none mb-8 w-full sm:w-auto">
                            <Link
                                to="/get-quote/?product=outdoor-dustbins"
                                className="px-8 py-4 bg-[#C9A84C] text-[#232120] hover:bg-black hover:text-white rounded-full font-black uppercase tracking-wider text-xs transition-all shadow-lg hover:scale-102 transform duration-300 text-center font-bold"
                            >
                                Request Custom Quote →
                            </Link>

                            <Link
                                to="/resources/downloads"
                                className="px-8 py-4 bg-white hover:bg-black hover:text-white border border-black/10 text-black rounded-full font-bold uppercase tracking-wider text-xs transition-all text-center font-bold"
                            >
                                Download Specification Guide ↓
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
                            <li>✓ Smart City Guidelines Compliant</li>
                            <li>✓ 50+ completed B2B projects</li>
                            <li>✓ Nationwide delivery & installation support</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DustbinsPage;
