import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CTASection from "../../components/CTASection/CTASection";

import carouselImg1 from "../../assets/products/Product Images/Wicker Dining/wicker_dining.jpeg";
import carouselImg2 from "../../assets/products/Product Images/Wicker Living/Wicker_Living.jpeg";
import carouselImg3 from "../../assets/products/Product Images/Wicker Dining/UGC_wicker_dining.jpeg";

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

const WickerOutdoorProductsPage = () => {
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
                event_label: "wickeroutdoorproductspage",
                value: value
            });
        }
        console.log(`[GA4 Event] ${eventName} | Category: product_page | Label: wickeroutdoorproductspage | Value: ${value}`);
    };

    useEffect(() => {
        updatePageSEO({
            title: "Wicker Outdoor Products India | Cabanas, Poolside Loungers, Wicker Living & Dining Sets | Urbanland",
            description: "Premium wicker outdoor products including cabanas, poolside loungers, wicker living sets and wicker dining sets. Stylish, durable, weather-resistant and low-maintenance. Perfect for gardens, patios, resorts, townships and commercial spaces. Backed by India’s only 2-Year Guarantee.",
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
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-[#1A1A1A] mt-3">Standard Wicker Chair & Table Set — Bistro Style</h3>
                <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#2D2D2D]/60 mt-1">Best for: Residential balconies, small cafe patios, society clubhouse decks.</h4>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-t border-[#2D2D2D]/10 pt-8">
                <div>
                    <h4 className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mb-4 select-none">— Key Features</h4>
                    <ul className="flex flex-col gap-3 text-xs sm:text-sm font-semibold text-[#1A1A1A]/85">
                        {["Frame: Powder coated steel with PE cane weave","Fabric: Standard water-resistant polyester","Design: 2x Armchairs, 1x Circular glass top side table","Capacity: Standard residential seating load"].map((f, idx) => (
                            <li key={idx} className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> {f}</li>
                        ))}
                    </ul>

                    <h4 className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mt-10 mb-4 select-none">— Ideal For</h4>
                    <p className="text-xs sm:text-sm text-[#2D2D2D]/75 font-semibold leading-relaxed">
                        Residential balconies, small cafe patios, society clubhouse decks.
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
                                    <span className="font-bold">Chair: 600W × 600D × 850H mm</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Weight</span>
                                    <span className="font-bold">18 kg (total set)</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Lead Time</span>
                                    <span className="font-bold">25-30 days</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Annual Maintenance</span>
                                    <span className="font-bold">Low (hose down clean)</span>
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
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-[#1A1A1A] mt-3">Premium Wicker Dining Set — Resort Collection</h3>
                <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#2D2D2D]/60 mt-1">Best for: Hotel rooftop dining, open-air resort restaurants, large villa terraces.</h4>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-t border-[#2D2D2D]/10 pt-8">
                <div>
                    <h4 className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mb-4 select-none">— Key Features</h4>
                    <ul className="flex flex-col gap-3 text-xs sm:text-sm font-semibold text-[#1A1A1A]/85">
                        {["Frame: Structural anodized aluminium under-chassis","Body Wrap: High-grade HDPE wicker flat weave","Cushions: 50mm quick-dry foam seat pads with Sunbrella covers","Design: 6x Dining armchairs, 1x Rectangular dining table (tempered glass top)"].map((f, idx) => (
                            <li key={idx} className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> {f}</li>
                        ))}
                    </ul>

                    <h4 className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mt-10 mb-4 select-none">— Ideal For</h4>
                    <p className="text-xs sm:text-sm text-[#2D2D2D]/75 font-semibold leading-relaxed">
                        Hotel rooftop dining, open-air resort restaurants, large villa terraces.
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
                                    <span className="font-bold">Table: 1800L × 900W × 750H mm</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Weight</span>
                                    <span className="font-bold">65 kg (total set)</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Lead Time</span>
                                    <span className="font-bold">30-45 days</span>
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
                                    <span className="font-bold text-[#2C5F2E]">Tempered glass table top protector</span>
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
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-[#1A1A1A] mt-3">Super Premium Modular Sofa Lounge — Island Style</h3>
                <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#2D2D2D]/60 mt-1">Best for: Luxury beach clubs, resort lobbies, premium executive rooftop decks.</h4>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-t border-[#2D2D2D]/10 pt-8">
                <div>
                    <h4 className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mb-4 select-none">— Key Features</h4>
                    <ul className="flex flex-col gap-3 text-xs sm:text-sm font-semibold text-[#1A1A1A]/85">
                        {["Frame: Heavy structural aluminium wrapped in synthetic PE rope weave","Body Wrap: Thick round PE wicker or synthetic rope weave","Cushions: 120mm plush quick-dry foam cushions with modular back pillows","Design: L-shape modular sofa set (6-seater) with central coffee table"].map((f, idx) => (
                            <li key={idx} className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> {f}</li>
                        ))}
                    </ul>

                    <h4 className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mt-10 mb-4 select-none">— Ideal For</h4>
                    <p className="text-xs sm:text-sm text-[#2D2D2D]/75 font-semibold leading-relaxed">
                        Luxury beach clubs, resort lobbies, premium executive rooftop decks.
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
                                    <span className="font-bold">Modular L-shape layout</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Weight</span>
                                    <span className="font-bold">95 kg (total set)</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Lead Time</span>
                                    <span className="font-bold">40-50 days</span>
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
                                    <span className="font-bold text-[#2C5F2E]">Modular link buckles & quick-dry mesh bases</span>
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
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#2D2D2D]/50 hidden sm:inline">Wicker Outdoor Products</span>
                </div>
                <Link
                    to="/get-quote/?product=wicker-outdoor-products"
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
                    <span className="text-[#2C5F2E]">Wicker Outdoor Products</span>
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
                    {[{"tag":"Hospitality Spotlight","h":"Premium Hand-Woven<br />Wicker Outdoor Products","label":"01","desc":"Resort-grade synthetic rattan dining and living furniture"},{"tag":"Terrace Oasis","h":"Weatherproof dining<br />sets, sofas & loungers<br />for resort decks","label":"02","desc":"PE wicker weave over thick aluminium chassis"},{"tag":"B2B Guarantee","h":"2-Year Warranty<br />& ISO Certified<br />Standards","label":"03","desc":"Trusted by leading hotel chains & real estate developers"},{"tag":"Extreme Weather","h":"UV-stabilized HDPE<br />weaves that resist fading<br />and heavy monsoon rain","label":"04","desc":"Chlorine and saltwater resistant weaves"},{"tag":"Bespoke Ensembles","h":"Custom dimensions,<br />colors & performance<br />upholstery fabrics","label":"05","desc":"Tailored to high-end residential outdoor patios"}].map((card, idx) => (
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
                        Why People Choose Urbanland Wicker Outdoor Products
                    </p>
                </div>

                <h3 className="text-sm font-black uppercase tracking-widest text-[#C9A84C] mb-8">— 4 Core Reasons</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 select-none">
                    {[{"title":"HDPE Synthetic Cane","desc":"Weaved using 100% recyclable High-Density Polyethylene (HDPE) cane, formulated to resist split, fade, mold, and rot."},{"title":"Aluminium Under-Chassis","desc":"Weaved over thick-walled structural aluminium underframes, ensuring a lightweight, completely rust-proof core."},{"title":"Performance Fabrics","desc":"Cushion covers use Sunbrella® or outdoor acrylic fabrics, offering premium water repellency and UV colorfastness."},{"title":"Reticulated Quick-Dry","desc":"Cushion cores are filled with reticulated open-cell foam, allowing monsoon rain to drain out within minutes of downpours."}].map((r, idx) => (
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
                        Three Wicker Outdoor Products Configurations — Choose What Fits Your Project
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
                                    <td className="p-5">25-30 days</td>
                                    <td className="p-5">30-45 days</td>
                                    <td className="p-5">40-50 days</td>
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
                            {[{"name":"HDPE Cane + Aluminium","life":"8-10 years","maint":"Zero maintenance","best":"Resorts & commercial dining","cost":"Base premium (1.2x)"},{"name":"PE Rope + SS 304 Frame","life":"12+ years","maint":"Periodic cleaning","best":"Premium beachfront terraces","cost":"Highest end (2.2x)"},{"name":"Standard PE Cane + Steel","life":"4-5 years","maint":"Rust check","best":"Budget residential lawns","cost":"Standard (0.8x)"}].map((m, idx) => (
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
                        {["Weave types: Flat rattan, round synthetic cane, open basket weave, or vertical outdoor rope weaves","Colors: Wicker available in natural teak, espresso brown, charcoal black, or sand beige shades","Fabrics: Available in 30+ textured solid outdoor acrylic or Sunbrella® canvas colors","Table Tops: Toughened clear glass, frosted glass, solid teak wood slats, or WPC board tops","Configurations: Custom modular seating rows, L-shaped sectional sofas, or large banquette dining setups"].map((c, idx) => (
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
                    {[{"tag":"Taj Exotica Goa","subtitle":"Taj Hotels — Goa","title":"Rooftop Cafeteria Deck — 25 Wicker Dining Sets","time":"3 months","desc":" taj Hotels partnered with Urbanland to manufacture and deploy 25 premium wicker dining sets for their open-air oceanfront cafe. The aluminium frames and HDPE weaves successfully withstand Goan humidity."},{"tag":"Prestige Golfshire","subtitle":"Prestige Group — Bangalore","title":"Clubhouse Terrace — 15 Wicker Lounge Ensembles","time":"2 months","desc":"Installed custom modular wicker sectional sofas around the central golf clubhouse deck. The reticulated quick-dry foam cushions ensure seating is dry and usable within minutes of rain."},{"tag":"Oberoi Beach Resort","subtitle":"Oberoi Group — Mumbai","title":"VIP Poolside Deck — 10 Custom Daybed Cabanas","time":"2 months","desc":"Manufactured and installed 10 bespoke circular wicker loungers for a VIP poolside lounge area. Rear roller wheels enable staff to easily adjust configurations."}].map((p, idx) => (
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
                        <span className="block text-3xl font-black uppercase tracking-tight text-[#C9A84C]">45+</span>
                        <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-white/55 mt-1 block">Hotel & Resort Terraces</span>
                    </div>
                    <div className="w-[1px] h-8 bg-white/10 md:block hidden" />
                    <div className="flex-1">
                        <span className="block text-3xl font-black uppercase tracking-tight text-[#C9A84C]">12+</span>
                        <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-white/55 mt-1 block">Cities Served</span>
                    </div>
                    <div className="w-[1px] h-8 bg-white/10 md:block hidden" />
                    <div className="flex-1">
                        <span className="block text-3xl font-black uppercase tracking-tight text-[#C9A84C]">600+</span>
                        <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-white/55 mt-1 block">Wicker Dining Sets Delivered</span>
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
                    {[{"q":"Can wicker products be left outdoors year-round?","a":"Yes. Our synthetic wicker is UV-rated for 3000+ hours, and frame bases are rust-proof, allowing year-round outdoor placement."},{"q":"What makes HDPE wicker superior to natural cane?","a":"HDPE wicker does not rot, crack, peel, or host pests, whereas natural cane degrades quickly under sunlight and moisture."},{"q":"Can I choose custom fabric colors?","a":"Yes, we offer a select range of 30+ solid and textured outdoor fabric colors."},{"q":"What is the lead time?","a":"Lead times are 30-45 days depending on design selection."},{"q":"Do you provide delivery across India?","a":"Yes, we ship safely to commercial, resort, and residential sites nationwide."}].map((faq, idx) => (
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
                title="Ready to Specify Wicker Outdoor Products for Your Project?"
                primaryLink="/get-quote/?product=wicker-outdoor-products"
            />
        </div>
    );
};

export default WickerOutdoorProductsPage;
