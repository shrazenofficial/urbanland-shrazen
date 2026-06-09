import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CTASection from "../../components/CTASection/CTASection";

import carouselImg1 from "../../assets/products/Product Images/Poolside Loungers/Create_a_clean,_premium,_professional_202605170154.jpeg";
import carouselImg2 from "../../assets/products/Product Images/Poolside Loungers/UGC_Poolside_Loungers.jpeg";
import carouselImg3 from "../../assets/gallery_hotels.png";

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

const carouselImages = [carouselImg1, carouselImg2, carouselImg3];

const PoolsideLoungersPage = () => {
    const [activeTab, setActiveTab] = useState("standard");
    const [faqOpen, setFaqOpen] = useState(Array(5).fill(false));
    const [showStickyHeader, setShowStickyHeader] = useState(false);
    const heroScrollRef = useRef(null);
    const pageContainerRef = useRef(null);

    useGSAP(() => {
        const sections = gsap.utils.toArray("section");
        sections.forEach((section) => {
            gsap.fromTo(section, 
                {
                    filter: "blur(12px)",
                    opacity: 0,
                    y: 40
                },
                {
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play none none none",
                    }
                }
            );
        });
    }, { scope: pageContainerRef });

    const scrollHeroLeft = () => {
        if (heroScrollRef.current) {
            heroScrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
        }
    };

    const scrollHeroRight = () => {
        if (heroScrollRef.current) {
            heroScrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
        }
    };

    const scrollHeroStart = () => {
        if (heroScrollRef.current) {
            heroScrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
    };

    const trackEvent = (eventName, value = "") => {
        if (window.gtag) {
            window.gtag("event", eventName, {
                event_category: "product_page",
                event_label: "poolsideloungerspage",
                value: value
            });
        }
        console.log(`[GA4 Event] ${eventName} | Category: product_page | Label: poolsideloungerspage | Value: ${value}`);
    };

    useEffect(() => {
        updatePageSEO({
            title: "Poolside Loungers Manufacturer India | Luxury Outdoor Daybeds & Chaise Loungers | Urbanland",
            description: "Premium poolside loungers and outdoor daybeds in India. Weather-resistant synthetic wicker, aluminium frames and comfortable cushions. Perfect for pools, resorts, gardens, townships and luxury homes. Backed by India’s only 2-Year Guarantee.",
            og_type: "product",
            og_image: carouselImg1
        });

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
        trackEvent("faq_click", `faq_${idx + 1}`);
    };

    const renderStandardTab = () => (
        <div className="animate-fadeIn">
            <div className="mb-6">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#C9A84C] bg-[#C9A84C]/10 px-3 py-1.5 rounded-full select-none">Value Option</span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-[#1A1A1A] mt-3">Standard Woven Lounger — Flat Profile</h3>
                <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#2D2D2D]/60 mt-1">Best for: Residential rooftop pools, private apartment terraces, budget hotels.</h4>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-t border-[#2D2D2D]/10 pt-8">
                <div>
                    <h4 className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mb-4 select-none">— Key Features</h4>
                    <ul className="flex flex-col gap-3 text-xs sm:text-sm font-semibold text-[#1A1A1A]/85">
                        {["Frame: Powder coated aluminium structure","Body Wrap: Standard HDPE rattan weave","Design: Fixed flat lounge bed without cushions","Capacity: 120 kg weight capacity"].map((f, idx) => (
                            <li key={idx} className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> {f}</li>
                        ))}
                    </ul>

                    <h4 className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mt-10 mb-4 select-none">— Ideal For</h4>
                    <p className="text-xs sm:text-sm text-[#2D2D2D]/75 font-semibold leading-relaxed">
                        Residential rooftop pools, private apartment terraces, budget hotels.
                    </p>
                </div>

                <div className="lg:col-span-1 h-[280px] lg:h-auto rounded-[2rem] bg-black/5 overflow-hidden flex items-center justify-center p-4 border border-black/[0.04] shrink-0">
                    <img 
                        src={carouselImg1} 
                        alt="Standard variant" 
                        className="w-full h-full object-cover rounded-2xl" 
                    />
                </div>

                <div className="bg-[#F7F4EF] rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between gap-6">
                    <div>
                        <h4 className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-black/60 mb-4 select-none">— Specifications Matrix</h4>
                        <div className="w-full border border-black/[0.04] rounded-2xl bg-white p-4 sm:p-6 overflow-hidden shadow-sm">
                            <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-y-4 gap-x-4 text-xs font-semibold text-[#1A1A1A]">
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Dimensions</span>
                                    <span className="font-bold">1900L × 650W × 350H mm</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Weight</span>
                                    <span className="font-bold">12-14 kg</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Lead Time</span>
                                    <span className="font-bold">20-25 days</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Annual Maintenance</span>
                                    <span className="font-bold">Zero (hose wash)</span>
                                </div>
                                <div className="col-span-2 border-t border-black/[0.04] pt-3 mt-1">
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Lifespan</span>
                                    <span className="font-bold text-[#2C5F2E]">5-6 years</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link
                        to="/get-quote/?variant=standard"
                        onClick={() => trackEvent("variant_selection", "standard")}
                        className="px-6 py-4 bg-[#2C5F2E] hover:bg-black text-white rounded-full font-black uppercase tracking-wider text-[10px] text-center transition-colors duration-300 w-full"
                    >
                        Get Standard Quote →
                    </Link>
                </div>
            </div>
        </div>
    );

    const renderPremiumTab = () => (
        <div className="animate-fadeIn">
            <div className="mb-6">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#C9A84C] bg-[#C9A84C]/10 px-3 py-1.5 rounded-full select-none">Most Specified</span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-[#1A1A1A] mt-3">Premium Sun Lounger — Adjustable Backrest</h3>
                <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#2D2D2D]/60 mt-1">Best for: 5-star hotel pool decks, premium resort clubs, luxury villa lawns.</h4>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-t border-[#2D2D2D]/10 pt-8">
                <div>
                    <h4 className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mb-4 select-none">— Key Features</h4>
                    <ul className="flex flex-col gap-3 text-xs sm:text-sm font-semibold text-[#1A1A1A]/85">
                        {["Frame: Heavy anodized aluminium alloy","Body Wrap: High-grade UV-rated PE wicker weave","Design: Reclining backrest with 75mm Sunbrella outdoor cushion","Capacity: 150 kg weight capacity"].map((f, idx) => (
                            <li key={idx} className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> {f}</li>
                        ))}
                    </ul>

                    <h4 className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mt-10 mb-4 select-none">— Ideal For</h4>
                    <p className="text-xs sm:text-sm text-[#2D2D2D]/75 font-semibold leading-relaxed">
                        5-star hotel pool decks, premium resort clubs, luxury villa lawns.
                    </p>
                </div>

                <div className="lg:col-span-1 h-[280px] lg:h-auto rounded-[2rem] bg-black/5 overflow-hidden flex items-center justify-center p-4 border border-black/[0.04] shrink-0">
                    <img 
                        src={carouselImg2} 
                        alt="Premium variant" 
                        className="w-full h-full object-cover rounded-2xl" 
                    />
                </div>

                <div className="bg-[#F7F4EF] rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between gap-6">
                    <div>
                        <h4 className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-black/60 mb-4 select-none">— Specifications Matrix</h4>
                        <div className="w-full border border-black/[0.04] rounded-2xl bg-white p-4 sm:p-6 overflow-hidden shadow-sm">
                            <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-y-4 gap-x-4 text-xs font-semibold text-[#1A1A1A]">
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Dimensions</span>
                                    <span className="font-bold">2000L × 700W × 400H mm</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Weight</span>
                                    <span className="font-bold">16-18 kg</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Lead Time</span>
                                    <span className="font-bold">25-30 days</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Annual Maintenance</span>
                                    <span className="font-bold">Seasonal fabric wash</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Lifespan</span>
                                    <span className="font-bold text-[#2C5F2E]">8-10 years</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Special Rating</span>
                                    <span className="font-bold text-[#2C5F2E]">Rear roller wheels for easy transport</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link
                        to="/get-quote/?variant=premium"
                        onClick={() => trackEvent("variant_selection", "premium")}
                        className="px-6 py-4 bg-[#2C5F2E] hover:bg-black text-white rounded-full font-black uppercase tracking-wider text-[10px] text-center transition-colors duration-300 w-full"
                    >
                        Get Premium Quote →
                    </Link>
                </div>
            </div>
        </div>
    );

    const renderSuperPremiumTab = () => (
        <div className="animate-fadeIn">
            <div className="mb-6">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#C9A84C] bg-[#C9A84C]/10 px-3 py-1.5 rounded-full select-none">Smart Ready</span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-[#1A1A1A] mt-3">Super Premium Double Daybed Lounger — Canopy Style</h3>
                <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#2D2D2D]/60 mt-1">Best for: Mega resort pool clubs, beachfront VIP decks, private estate patios.</h4>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-t border-[#2D2D2D]/10 pt-8">
                <div>
                    <h4 className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mb-4 select-none">— Key Features</h4>
                    <ul className="flex flex-col gap-3 text-xs sm:text-sm font-semibold text-[#1A1A1A]/85">
                        {["Frame: Premium marine-grade SS 316 and thick aluminium frames","Body Wrap: Hand-woven synthetic PE thick rope weave","Design: Connected double-wide lounger bed with 120mm quick-dry foam bed & overhead retractable fabric shade canopy","Capacity: 300 kg weight capacity"].map((f, idx) => (
                            <li key={idx} className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> {f}</li>
                        ))}
                    </ul>

                    <h4 className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mt-10 mb-4 select-none">— Ideal For</h4>
                    <p className="text-xs sm:text-sm text-[#2D2D2D]/75 font-semibold leading-relaxed">
                        Mega resort pool clubs, beachfront VIP decks, private estate patios.
                    </p>
                </div>

                <div className="lg:col-span-1 h-[280px] lg:h-auto rounded-[2rem] bg-black/5 overflow-hidden flex items-center justify-center p-4 border border-black/[0.04] shrink-0">
                    <img 
                        src={carouselImg3} 
                        alt="Super Premium variant" 
                        className="w-full h-full object-cover rounded-2xl" 
                    />
                </div>

                <div className="bg-[#F7F4EF] rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between gap-6">
                    <div>
                        <h4 className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-black/60 mb-4 select-none">— Specifications Matrix</h4>
                        <div className="w-full border border-black/[0.04] rounded-2xl bg-white p-4 sm:p-6 overflow-hidden shadow-sm">
                            <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-y-4 gap-x-4 text-xs font-semibold text-[#1A1A1A]">
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Dimensions</span>
                                    <span className="font-bold">2000L × 1500W × 450H mm</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Weight</span>
                                    <span className="font-bold">45-55 kg</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Lead Time</span>
                                    <span className="font-bold">35-45 days</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Annual Maintenance</span>
                                    <span className="font-bold">Minimal</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Lifespan</span>
                                    <span className="font-bold text-[#2C5F2E]">12+ years</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Tech Features</span>
                                    <span className="font-bold text-[#2C5F2E]">Retractable overhead Sunbrella fabric canopy</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link
                        to="/get-quote/?variant=super-premium"
                        onClick={() => trackEvent("variant_selection", "super_premium")}
                        className="px-6 py-4 bg-[#C9A84C] hover:bg-black text-[#232120] hover:text-white rounded-full font-black uppercase tracking-wider text-[10px] text-center transition-colors duration-300 w-full"
                    >
                        Get Super Premium Proposal →
                    </Link>
                </div>
            </div>
        </div>
    );

    return (
        <div ref={pageContainerRef} className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-28">
            
            {/* STICKY HEADER ON SCROLL (Desktop only) */}
            <div className={`fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-[#2D2D2D]/10 py-4 px-8 lg:px-16 z-[99] flex justify-between items-center transition-all duration-500 shadow-md ${showStickyHeader ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}>
                <div className="flex items-center gap-3">
                    <span className="text-[#2C5F2E] font-black tracking-tighter text-lg">URBANLAND®</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#2D2D2D]/50 hidden sm:inline">Poolside Loungers</span>
                </div>
                <Link
                    to="/get-quote/?product=poolside-loungers"
                    onClick={() => trackEvent("product_page_cta_primary", "quote_request")}
                    className="px-6 py-2.5 bg-[#E65F2B] hover:bg-black text-white rounded-full font-black uppercase tracking-wider text-[10px] transition-all shadow-sm"
                >
                    Get Project Quote →
                </Link>
            </div>

            {/* BREADCRUMB NAVIGATION */}
            <div className="w-full px-8 md:px-16 py-4 select-none">
                <nav className="flex items-center text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#2D2D2D]/60 gap-2">
                    <Link to="/" className="hover:text-[#2C5F2E] transition-colors">Home</Link>
                    <span>/</span>
                    <Link to="/products" className="hover:text-[#2C5F2E] transition-colors">Products</Link>
                    <span>/</span>
                    <span className="text-[#2C5F2E]">Poolside Loungers</span>
                </nav>
            </div>

            {/* PREMIUM HORIZONTAL CAROUSEL HERO SECTION */}
            <section className="w-full mb-8 relative select-none group/carousel">
                {/* Floating Left Navigation Button */}
                <button
                    onClick={scrollHeroLeft}
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-sm hover:bg-white text-[#1A1A1A] rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer border border-black/5 opacity-100 lg:opacity-0 lg:group-hover/carousel:opacity-100"
                    aria-label="Scroll left"
                >
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Floating Right Navigation Button */}
                <button
                    onClick={scrollHeroRight}
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-sm hover:bg-white text-[#1A1A1A] rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer border border-black/5 opacity-100 lg:opacity-0 lg:group-hover/carousel:opacity-100"
                    aria-label="Scroll right"
                >
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <div 
                    ref={heroScrollRef}
                    className="flex gap-8 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth pb-4 px-8 md:px-16 scroll-pl-8 md:scroll-pl-16"
                >
                    {[{"tag":"Hospitality Spotlight","h":"Luxury Poolside Loungers<br />& Premium Sunbeds","label":"01","desc":"Resort-grade weather-resistant lounge seating"},{"tag":"Poolside Comfort","h":"Ergonomic sunbeds<br />with multi-position<br />adjustable backrests","label":"02","desc":"Hand-woven UV-stabilized HDPE synthetic rattan"},{"tag":"B2B Guarantee","h":"2-Year Warranty<br />& ISO Certified<br />Standards","label":"03","desc":"Trusted by 5-star hotels, luxury villas & beach clubs"},{"tag":"Quick Dry","h":"Reticulated open-cell<br />foam cushions that drain<br />monsoon rains instantly","label":"04","desc":"Sunbrella performance fabric cushion covers"},{"tag":"Bespoke Ensembles","h":"Custom double loungers<br />with integrated side<br />tables and wheels","label":"05","desc":"Tailored to high-end resort pool decks"}].map((card, idx) => (
                        <div key={idx} className="flex-shrink-0 snap-start w-[84vw] sm:w-[64vw] md:w-[46vw] lg:w-[32vw] aspect-[3/3.8] rounded-[1.75rem] overflow-hidden flex flex-col justify-between p-8 md:p-10 relative group transition-all duration-500 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] border border-black/5">
                            <img 
                                src={carouselImages[idx % carouselImages.length]} 
                                alt={card.tag || "carousel-image"} 
                                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/55 pointer-events-none" />

                            <div className="z-10">
                                <h3 className="carousel-card-title tracking-tight text-white leading-[1.1] font-sans" dangerouslySetInnerHTML={{ __html: card.h }} />
                            </div>

                            <div className="z-10 flex justify-between items-end w-full">
                                <span className="text-xs md:text-[13px] font-normal tracking-wide text-white/90">
                                    <span className="font-bold mr-3 text-white">{card.label}</span>{card.desc}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 1 — WHY CHOOSE URBANLAND */}
            <section className="max-w-[1400px] 3xl:max-w-[1700px] 4xl:max-w-[2200px] 5xl:max-w-[3000px] mx-auto px-6 md:px-12 mb-24">
                <div className="text-left mb-16 max-w-5xl">
                    <span className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— CHOOSE DURABILITY</span>
                    <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none text-[#1A1A1A]">
                        Why Developers, Municipalities & Architects Choose Urbanland
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-[#2D2D2D]/75 leading-relaxed mt-6">
                        Why People Choose Urbanland Poolside Loungers
                    </p>
                </div>

                <h3 className="text-sm font-black uppercase tracking-widest text-[#C9A84C] mb-8">— 4 Core Reasons</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 select-none">
                    {[{"title":"HDPE Synthetic Wicker","desc":"Formulated to withstand saltwater mist, chlorinated pool water, and intense tropical UV radiation without cracking or splitting."},{"title":"Reticulated Foam Core","desc":"Cushions use quick-dry reticulated open-cell foam, allowing rainwater to drain out instantly, keeping seats operational."},{"title":"Lightweight Aluminium","desc":"Internal frames are constructed with thick-walled anodized aluminium, preventing rust while allowing staff to move chairs easily."},{"title":"Multi-Angle Recline","desc":"Features high-grade stainless steel reclining adjusters, providing five ergonomic lounge angles for relaxation."}].map((r, idx) => (
                        <div key={idx} className="bg-white rounded-[2rem] border border-black/[0.03] p-8 md:p-10 shadow-sm hover:bg-[#F7F4EF]/55 hover:shadow-lg transition-all duration-300 flex flex-col gap-5 group">
                            <div className={`w-14 h-14 ${idx % 2 === 0 ? "bg-[#2C5F2E]/10 text-[#2C5F2E]" : "bg-[#C9A84C]/10 text-[#C9A84C]"} rounded-full flex justify-center items-center`}>
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-black uppercase text-[#1A1A1A]">{r.title}</h4>
                            <p className="text-xs sm:text-sm text-[#2D2D2D]/70 leading-relaxed">{r.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 2 — THREE CONFIGURATIONS */}
            <section className="max-w-[1400px] 3xl:max-w-[1700px] 4xl:max-w-[2200px] 5xl:max-w-[3000px] mx-auto px-6 md:px-12 mb-24">
                <div className="text-left mb-12 max-w-4xl">
                    <span className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— SYSTEM SPECS MATRIX</span>
                    <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none text-[#1A1A1A]">
                        Three Poolside Loungers Configurations — Choose What Fits Your Project
                    </h2>
                    <p className="text-sm sm:text-base text-[#2D2D2D]/75 mt-4">
                        All Urbanland architectural products are built on proven specifications but fully customizable.
                    </p>
                </div>

                <div className="hidden md:flex flex-row gap-2 border-b border-[#2D2D2D]/15 pb-4 mb-12 select-none">
                    <button
                        onClick={() => { setActiveTab("standard"); trackEvent("variant_selection", "standard"); }}
                        className={`flex-1 text-center py-4 px-6 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${activeTab === "standard" ? "bg-[#2C5F2E] text-white shadow-md" : "bg-white text-[#1A1A1A] hover:bg-[#EAE5DB]/40 border border-black/[0.04]"}`}
                    >
                        Standard Configuration
                    </button>
                    <button
                        onClick={() => { setActiveTab("premium"); trackEvent("variant_selection", "premium"); }}
                        className={`flex-1 text-center py-4 px-6 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${activeTab === "premium" ? "bg-[#2C5F2E] text-white shadow-md" : "bg-white text-[#1A1A1A] hover:bg-[#EAE5DB]/40 border border-black/[0.04]"}`}
                    >
                        Premium Configuration
                    </button>
                    <button
                        onClick={() => { setActiveTab("super"); trackEvent("variant_selection", "super_premium"); }}
                        className={`flex-1 text-center py-4 px-6 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${activeTab === "super" ? "bg-[#2C5F2E] text-white shadow-md" : "bg-white text-[#1A1A1A] hover:bg-[#EAE5DB]/40 border border-black/[0.04]"}`}
                    >
                        Super Premium Configuration
                    </button>
                </div>

                {/* DESKTOP CONTENT BLOCK */}
                <div className="hidden md:block bg-white rounded-[2.5rem] border border-black/[0.03] p-8 md:p-14 shadow-sm">
                    {activeTab === "standard" && renderStandardTab()}
                    {activeTab === "premium" && renderPremiumTab()}
                    {activeTab === "super" && renderSuperPremiumTab()}
                </div>

                {/* MOBILE ACCORDIONS STACK */}
                <div className="flex md:hidden flex-col gap-4">
                    <div className="bg-white rounded-3xl border border-black/[0.03] overflow-hidden shadow-sm">
                        <button
                            onClick={() => { const next = activeTab === "standard" ? null : "standard"; setActiveTab(next); if (next) trackEvent("variant_selection", "standard"); }}
                            className="w-full text-left p-6 flex justify-between items-center font-black uppercase tracking-wider text-sm text-[#1A1A1A]"
                        >
                            <span>Standard Configuration</span>
                            <span className="text-[#2C5F2E] text-xl font-bold font-mono">{activeTab === "standard" ? "−" : "+"}</span>
                        </button>
                        {activeTab === "standard" && <div className="p-6 border-t border-[#2D2D2D]/5 bg-white">{renderStandardTab()}</div>}
                    </div>

                    <div className="bg-white rounded-3xl border border-black/[0.03] overflow-hidden shadow-sm">
                        <button
                            onClick={() => { const next = activeTab === "premium" ? null : "premium"; setActiveTab(next); if (next) trackEvent("variant_selection", "premium"); }}
                            className="w-full text-left p-6 flex justify-between items-center font-black uppercase tracking-wider text-sm text-[#1A1A1A]"
                        >
                            <span>Premium Configuration</span>
                            <span className="text-[#2C5F2E] text-xl font-bold font-mono">{activeTab === "premium" ? "−" : "+"}</span>
                        </button>
                        {activeTab === "premium" && <div className="p-6 border-t border-[#2D2D2D]/5 bg-white">{renderPremiumTab()}</div>}
                    </div>

                    <div className="bg-white rounded-3xl border border-black/[0.03] overflow-hidden shadow-sm">
                        <button
                            onClick={() => { const next = activeTab === "super" ? null : "super"; setActiveTab(next); if (next) trackEvent("variant_selection", "super"); }}
                            className="w-full text-left p-6 flex justify-between items-center font-black uppercase tracking-wider text-sm text-[#1A1A1A]"
                        >
                            <span>Super Premium Configuration</span>
                            <span className="text-[#2C5F2E] text-xl font-bold font-mono">{activeTab === "super" ? "−" : "+"}</span>
                        </button>
                        {activeTab === "super" && <div className="p-6 border-t border-[#2D2D2D]/5 bg-white">{renderSuperPremiumTab()}</div>}
                    </div>
                </div>

                {/* QUICK COMPARISON TABLE */}
                <div className="mt-16">
                    <h3 className="text-sm font-black uppercase tracking-widest text-[#C9A84C] mb-6">— Quick Comparison</h3>
                    <div className="w-full overflow-x-auto border border-black/[0.04] rounded-3xl bg-white shadow-sm scrollbar-thin">
                        <table className="w-full text-left border-collapse min-w-[650px]">
                            <thead>
                                <tr className="bg-[#2D2D2D] text-white select-none text-[10px] sm:text-xs font-black uppercase tracking-wider">
                                    <th className="p-5 border-b border-[#2D2D2D]/10">Aspect</th>
                                    <th className="p-5 border-b border-[#2D2D2D]/10">Standard</th>
                                    <th className="p-5 border-b border-[#2D2D2D]/10">Premium</th>
                                    <th className="p-5 border-b border-[#2D2D2D]/10">Super Premium</th>
                                </tr>
                            </thead>
                            <tbody className="text-xs font-semibold text-[#1A1A1A]/85">
                                <tr className="border-b border-[#2D2D2D]/10 hover:bg-[#F7F4EF]/45">
                                    <td className="p-5 font-bold uppercase tracking-wider bg-[#2C5F2E]/5">Lifespan</td>
                                    <td className="p-5">5-6 years</td>
                                    <td className="p-5">8-10 years</td>
                                    <td className="p-5">12+ years</td>
                                </tr>
                                <tr className="border-b border-[#2D2D2D]/10 hover:bg-[#F7F4EF]/45">
                                    <td className="p-5 font-bold uppercase tracking-wider bg-[#2C5F2E]/5">Lead Time</td>
                                    <td className="p-5">20-25 days</td>
                                    <td className="p-5">25-30 days</td>
                                    <td className="p-5">35-45 days</td>
                                </tr>
                                <tr className="border-b border-[#2D2D2D]/10 hover:bg-[#F7F4EF]/45">
                                    <td className="p-5 font-bold uppercase tracking-wider bg-[#2C5F2E]/5">Best For</td>
                                    <td className="p-5">Inland / Municipal</td>
                                    <td className="p-5">Premium / Corporate</td>
                                    <td className="p-5">Ultra Luxury / Smart Hubs</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* SECTION 3 — MATERIAL COMPARISON */}
            <section id="specifications" className="max-w-[1400px] 3xl:max-w-[1700px] 4xl:max-w-[2200px] 5xl:max-w-[3000px] mx-auto px-6 md:px-12 mb-24">
                <div className="text-left mb-12">
                    <span className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— MATERIAL SELECTION GUIDE</span>
                    <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none text-[#1A1A1A]">
                        Materials & Customization Guide
                    </h2>
                </div>

                <div className="w-full overflow-x-auto border border-black/[0.04] rounded-3xl bg-white shadow-sm mb-12 scrollbar-thin">
                    <table className="w-full text-left border-collapse min-w-[650px]">
                        <thead>
                            <tr className="bg-[#2C5F2E] text-white select-none text-[10px] sm:text-xs font-black uppercase tracking-wider">
                                <th className="p-5 border-b border-[#2D2D2D]/10">Material Option</th>
                                <th className="p-5 border-b border-[#2D2D2D]/10">Lifespan</th>
                                <th className="p-5 border-b border-[#2D2D2D]/10">Maintenance</th>
                                <th className="p-5 border-b border-[#2D2D2D]/10">Best For</th>
                                <th className="p-5 border-b border-[#2D2D2D]/10">Cost Factor</th>
                            </tr>
                        </thead>
                        <tbody className="text-xs font-semibold text-[#1A1A1A]/85">
                            {[{"name":"HDPE Wicker + Aluminium","life":"8-10 years","maint":"Zero maintenance","best":"Resort & hotel pool decks","cost":"Base premium (1.2x)"},{"name":"PE Rope + SS 316","life":"12+ years","maint":"Periodic cleaning","best":"Beachfront VIP ocean decks","cost":"Highest end (2.2x)"},{"name":"Standard PE Wicker + Steel","life":"4-5 years","maint":"Rust check","best":"Budget residential pools","cost":"Standard (0.8x)"}].map((m, idx) => (
                                <tr key={idx} className="border-b border-[#2D2D2D]/10 hover:bg-[#F7F4EF]/45">
                                    <td className="p-5 font-bold uppercase tracking-wider">{m.name}</td>
                                    <td className="p-5">{m.life}</td>
                                    <td className="p-5">{m.maint}</td>
                                    <td className="p-5">{m.best}</td>
                                    <td className="p-5">{m.cost}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h3 className="text-sm font-black uppercase tracking-widest text-[#C9A84C] mb-6">— Customization Options</h3>
                <div className="bg-white rounded-[2.5rem] border border-black/[0.03] p-8 md:p-12 mb-12 shadow-sm">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-bold text-[#1A1A1A]/85">
                        {["Weave styles: Flat PE rattan, round synthetic cane, or heavy-duty outdoor polyester rope weaves","Fabric colors: Available in 30+ solid and textured Sunbrella® or outdoor performance shades","Cushion thickness: Standard (75mm), Deluxe (100mm), or Ultra-plush (150mm quick-dry foam)","Add-ons: Integrated headrest pillows, slide-out side drink trays, rear roller wheels, side canvas storage bags","Frames: Lightweight aluminium, marine-grade SS 316, or raw teak wood bases"].map((c, idx) => (
                            <li key={idx} className="flex items-center gap-3"><span className="text-[#C9A84C]">✦</span> {c}</li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* SECTION 4 — CASE STUDIES */}
            <section className="max-w-[1400px] 3xl:max-w-[1700px] 4xl:max-w-[2200px] 5xl:max-w-[3000px] mx-auto px-6 md:px-12 mb-24">
                <div className="text-left mb-16 max-w-4xl">
                    <span className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— INFRASTRUCTURE PROJECTS</span>
                    <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none text-[#1A1A1A]">
                        Real Projects. Real Results. Across India.
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 select-none mb-12">
                    {[{"tag":"Taj Exotica Goa","subtitle":"Taj Hotels — Goa","title":"Luxury Beachfront Resort — 40 Poolside Loungers","time":"3 months","desc":" Taj Hotels partnered with Urbanland to manufacture and supply 40 premium reclining sun loungers. Engineered with rust-proof aluminium and UV-stabilized synthetic wicker, they successsfully withstand beach humidity."},{"tag":"Prestige Golfshire","subtitle":"Prestige Group — Bangalore","title":"Resort Golf Clubhouse — 30 Sunbeds & Daybeds","time":"2 months","desc":"Installed custom hand-woven rope loungers around the central clubhouse lagoon. The open-cell reticulated foam cushions dry rapidly after rain."},{"tag":"Oberoi Beach Resort","subtitle":"Oberoi Group — Mumbai","title":"Rooftop Pool Deck — 20 Premium Custom Sunbeds","time":"2 months","desc":"Installed custom double sunbeds on the luxury rooftop pool deck. Fronted with rear roller wheels to enable staff to easily adjust configurations."}].map((p, idx) => (
                        <div key={idx} className="bg-white rounded-[2.5rem] border border-black/[0.03] overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.01] transform transition-all duration-300 flex flex-col justify-between group">
                            <div className="w-full h-64 bg-black/5 overflow-hidden relative">
                                <img src={idx === 1 ? carouselImg2 : carouselImg1} alt={p.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                                <div className="absolute top-4 right-4 bg-[#2C5F2E] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">{p.tag}</div>
                            </div>
                            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                                <div>
                                    <span className="text-[9px] font-black uppercase tracking-wider text-[#C9A84C]">{p.subtitle}</span>
                                    <h3 className="text-lg font-black uppercase text-[#1A1A1A] leading-tight mt-1">{p.title}</h3>
                                    <div className="text-[10px] font-bold text-[#2C5F2E] my-2">Timeline: {p.time}</div>
                                    <p className="text-xs text-[#2D2D2D]/70 leading-relaxed">{p.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* STATS BAR */}
                <div className="bg-[#2D2D2D] rounded-[2rem] border border-white/5 p-8 md:p-10 text-white flex flex-col md:flex-row justify-between items-center text-center gap-8 shadow-md">
                    <div className="flex-1">
                        <span className="block text-3xl font-black uppercase tracking-tight text-[#C9A84C]">40+</span>
                        <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-white/55 mt-1 block">Hotel & Resort Pool Decks</span>
                    </div>
                    <div className="w-[1px] h-8 bg-white/10 md:block hidden" />
                    <div className="flex-1">
                        <span className="block text-3xl font-black uppercase tracking-tight text-[#C9A84C]">12+</span>
                        <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-white/55 mt-1 block">Cities Served</span>
                    </div>
                    <div className="w-[1px] h-8 bg-white/10 md:block hidden" />
                    <div className="flex-1">
                        <span className="block text-3xl font-black uppercase tracking-tight text-[#C9A84C]">800+</span>
                        <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-white/55 mt-1 block">Poolside Loungers Delivered</span>
                    </div>
                </div>
            </section>

            {/* SECTION 5 — FAQ */}
            <section className="max-w-[1400px] 3xl:max-w-[1700px] 4xl:max-w-[2200px] 5xl:max-w-[3000px] mx-auto px-6 md:px-12 mb-24">
                <span className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— AFTER-SALES LIFECYCLE GUIDE</span>
                <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none text-[#1A1A1A] mb-12">
                    Installation, Warranty & Top Questions
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-[2.5rem] border border-black/[0.03] p-8 md:p-14 mb-16 shadow-sm">
                    <div>
                        <h3 className="text-xl font-black uppercase text-[#1A1A1A] border-b border-black/10 pb-3">▸ Installation & Assembly</h3>
                        <p className="text-xs sm:text-sm text-[#2D2D2D]/75 leading-relaxed mt-4">
                            We provide comprehensive delivery and professional assembly support across India. For major commercial developments and municipal layouts, our trained engineering crews manage anchors, leveling, and site handovers.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-black uppercase text-[#1A1A1A] border-b border-black/10 pb-3">▸ 2-Year Comprehensive Warranty</h3>
                        <p className="text-xs sm:text-sm text-[#2D2D2D]/75 leading-relaxed mt-4">
                            Urbanland stands behind its products. We offer a comprehensive 2-year guarantee covering frame structure, powder coating peeling, structural cracking, and hardware defects.
                        </p>
                    </div>
                </div>

                <h3 className="text-sm font-black uppercase tracking-widest text-[#C9A84C] mb-8">— Frequently Asked Questions</h3>
                <div className="flex flex-col gap-4 max-w-4xl mx-auto">
                    {[{"q":"Can the cushions remain outdoors during rain?","a":"Our loungers use quick-dry open-cell foam and Sunbrella performance fabrics that drain water rapidly and dry quickly."},{"q":"Is the synthetic wicker chlorine and salt resistant?","a":"Yes, our HDPE wicker is formulated to resist chlorine pools, saltwater ocean mist, and intense tropical UV radiation."},{"q":"How do I clean the loungers?","a":"Simple pressure wash with mild soap and water keeps them clean. No oils or special varnishes required."},{"q":"What is the lead time?","a":"Production lead times are 25-30 days from order confirmation."},{"q":"What is the warranty coverage?","a":"Backed by our 2-Year comprehensive warranty covering frame structural failure and wicker split/fade."}].map((faq, idx) => (
                        <div 
                            key={idx} 
                            className={`bg-white rounded-[2rem] border transition-all duration-500 overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.005)] ${
                                faqOpen[idx] 
                                    ? "border-[#2C5F2E]/40 ring-1 ring-[#2C5F2E]/10" 
                                    : "border-black/[0.03] hover:border-black/10"
                            }`}
                        >
                            <button
                                onClick={() => toggleFaq(idx)}
                                className="w-full px-6 py-6 md:px-8 flex justify-between items-center text-left cursor-pointer focus:outline-none border-none select-none group bg-white"
                            >
                                <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-[#1A1A1A] group-hover:text-[#2C5F2E] pr-6 transition-colors leading-snug">
                                    {faq.q}
                                </h3>
                                <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 shrink-0 select-none ${
                                    faqOpen[idx] ? "bg-[#2C5F2E] text-white rotate-45" : "bg-[#F7F4EF] text-[#2D2D2D] group-hover:bg-[#2C5F2E]/10"
                                }`}>
                                    ＋
                                </span>
                            </button>
                            <div 
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                    faqOpen[idx] ? "max-h-[300px] border-t border-black/[0.05]" : "max-h-0"
                                }`}
                            >
                                <p className="px-6 py-6 md:px-8 text-xs sm:text-sm leading-relaxed text-[#2D2D2D]/75 bg-[#F7F4EF]/20">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* TRUST GRID */}
            <section className="max-w-[1400px] 3xl:max-w-[1700px] 4xl:max-w-[2200px] 5xl:max-w-[3000px] mx-auto px-6 md:px-12 mb-16">
                <div className="text-center mb-10 select-none">
                    <h3 className="text-xs font-black uppercase tracking-widest text-[#2C5F2E] mb-3">— Why Urbanland Stands Apart</h3>
                    <h2 className="text-2xl sm:text-3.5xl font-black uppercase tracking-tight text-[#1A1A1A]">Engineered for Smart Cities</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full max-w-5xl mx-auto">
                    <div className="flex items-start gap-4 bg-[#F7F4EF]/45 p-5 rounded-[2rem] border border-black/[0.03] transition-all duration-300 hover:bg-[#F7F4EF]/70 shadow-[0_5px_15px_rgba(0,0,0,0.01)]">
                        <svg className="w-5 h-5 text-[#2C5F2E] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-1">ISO 9001:2015</h4>
                            <p className="text-[11px] font-semibold text-[#2D2D2D]/75 leading-relaxed">Certified quality management and strict manufacturing controls.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 bg-[#F7F4EF]/45 p-5 rounded-[2rem] border border-black/[0.03] transition-all duration-300 hover:bg-[#F7F4EF]/70 shadow-[0_5px_15px_rgba(0,0,0,0.01)]">
                        <svg className="w-5 h-5 text-[#2C5F2E] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-1">2-Year Guarantee</h4>
                            <p className="text-[11px] font-semibold text-[#2D2D2D]/75 leading-relaxed">Comprehensive coverage on all components, structure and coatings.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 bg-[#F7F4EF]/45 p-5 rounded-[2rem] border border-black/[0.03] transition-all duration-300 hover:bg-[#F7F4EF]/70 shadow-[0_5px_15px_rgba(0,0,0,0.01)]">
                        <svg className="w-5 h-5 text-[#2C5F2E] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-1">Smart Ready Design</h4>
                            <p className="text-[11px] font-semibold text-[#2D2D2D]/75 leading-relaxed">Ready to deploy within major commercial projects and townships.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA SECTION */}
            <CTASection 
                title="Ready to Specify Poolside Loungers for Your Project?"
                primaryLink="/get-quote/?product=poolside-loungers"
            />
        </div>
    );
};

export default PoolsideLoungersPage;
