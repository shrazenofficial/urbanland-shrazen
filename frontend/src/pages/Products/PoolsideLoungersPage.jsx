import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CTASection from "../../components/CTASection/CTASection";

import carouselImg1 from "../../assets/products/Product Images/Poolside Loungers/Create_a_clean,_premium,_professional_202605170154.jpeg";
import carouselImg2 from "../../assets/products/Product Images/Poolside Loungers/UGC_Poolside_Loungers.jpeg";
import carouselImg3 from "../../assets/gallery_hotels.png";

const carouselImages = [carouselImg1, carouselImg2, carouselImg3];

const PoolsideLoungersPage = () => {
    const [faqOpen, setFaqOpen] = useState(Array(5).fill(false));
    const [currentSlideIdx, setCurrentSlideIdx] = useState(0);
    const [projectSlideIdx, setProjectSlideIdx] = useState(0);
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

    useEffect(() => {
        updatePageSEO({
            title: "Poolside Loungers Manufacturer India | Luxury Outdoor Daybeds & Chaise Loungers | Urbanland",
            description: "Premium poolside loungers and outdoor daybeds in India. Weather-resistant synthetic wicker, aluminium frames and comfortable cushions. Perfect for pools, resorts, gardens, townships and luxury homes. Backed by India’s only 2-Year Guarantee.",
            og_type: "product",
            og_image: carouselImg1
        });

        const timer = setInterval(() => {
            setCurrentSlideIdx((prev) => (prev + 1) % carouselImages.length);
        }, 3000);

        return () => {
            cleanPageSEO();
            clearInterval(timer);
        };
    }, []);

    const toggleFaq = (idx) => {
        setFaqOpen((prev) => {
            const next = [...prev];
            next[idx] = !next[idx];
            return next;
        });
    };

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

    const handlePrevProject = () => {
        setProjectSlideIdx((prev) => (prev - 1 + 3) % 3);
    };

    const handleNextProject = () => {
        setProjectSlideIdx((prev) => (prev + 1) % 3);
    };

    const configCards = [
        { key: "standard", data: {"title":"Standard Woven Lounger — Flat Profile","ideal":"Residential rooftop pools, private apartment terraces, budget hotels.","features":["Frame: Powder coated aluminium structure","Body Wrap: Standard HDPE rattan weave","Design: Fixed flat lounge bed without cushions","Capacity: 120 kg weight capacity"],"imgIdx":1,"matrix":{"dims":"1900L × 650W × 350H mm","wt":"12-14 kg","lt":"20-25 days","maint":"Zero (hose wash)","life":"5-6 years","custom":"None"}}, badge: "Value Option" },
        { key: "premium", data: {"title":"Premium Sun Lounger — Adjustable Backrest","ideal":"5-star hotel pool decks, premium resort clubs, luxury villa lawns.","features":["Frame: Heavy anodized aluminium alloy","Body Wrap: High-grade UV-rated PE wicker weave","Design: Reclining backrest with 75mm Sunbrella outdoor cushion","Capacity: 150 kg weight capacity"],"imgIdx":2,"matrix":{"dims":"2000L × 700W × 400H mm","wt":"16-18 kg","lt":"25-30 days","maint":"Seasonal fabric wash","life":"8-10 years","custom":"Rear roller wheels for easy transport"}}, badge: "Most Specified" },
        { key: "super", data: {"title":"Super Premium Double Daybed Lounger — Canopy Style","ideal":"Mega resort pool clubs, beachfront VIP decks, private estate patios.","features":["Frame: Premium marine-grade SS 316 and thick aluminium frames","Body Wrap: Hand-woven synthetic PE thick rope weave","Design: Connected double-wide lounger bed with 120mm quick-dry foam bed & overhead retractable fabric shade canopy","Capacity: 300 kg weight capacity"],"imgIdx":3,"matrix":{"dims":"2000L × 1500W × 450H mm","wt":"45-55 kg","lt":"35-45 days","maint":"Minimal","life":"12+ years","custom":"Retractable overhead Sunbrella fabric canopy"}}, badge: "Smart Ready" }
    ];

    const icons = ["chair_alt", "wb_sunny", "architecture", "cleaning_services", "groups"];
    const customIcons = ["straighten", "chair", "grid_view", "format_paint", "extension"];

    return (
        <div ref={pageContainerRef} className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-28">
            
            {/* BREADCRUMB NAVIGATION */}
            <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-4 select-none">
                <nav className="flex items-center text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#2C5F2E] gap-2">
                    <Link to="/" className="hover:text-[#C9A84C] transition-colors">Home</Link>
                    <span>/</span>
                    <Link to="/products" className="hover:text-[#C9A84C] transition-colors">Products</Link>
                    <span>/</span>
                    <span className="text-[#C9A84C]">Poolside Loungers</span>
                </nav>
            </div>

            {/* HERO SECTION */}
            <section className="relative min-h-[800px] flex items-stretch overflow-hidden transition-all duration-1000 opacity-100 translate-y-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #DCDAD5 1px, transparent 0)', backgroundSize: '40px 40px' }}>
                <div className="max-w-[1280px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
                    
                    {/* Hero Content Left */}
                    <div className="flex flex-col justify-center space-y-8 py-20 lg:py-24 text-left">
                        <div className="space-y-4">
                            <span className="font-label-technical text-[#C9A84C] tracking-[0.2em] uppercase font-semibold block mb-4">
                                Urbanland Products presents premium poolside loungers designed for ultimate relaxation and style. Crafted with high-grade synthetic wicker and durable frames, our loungers offer superior comfort, weather resistance, and elegance for poolside areas, resorts, gardens, and luxury outdoor spaces.
                            </span>
                            <h1 className="font-headline-xl text-[38px] font-[700] md:text-[48px] text-[#1A1A1A] max-w-xl leading-[1.2] md:leading-[1.1] text-left">
                                Premium Poolside Loungers Manufacturer in India – Luxury Outdoor Daybeds & Chaise Loungers
                            </h1>
                        </div>
                        <p className="font-body-lg text-[18px] text-[#44474A] max-w-lg leading-relaxed">
                            Why People Choose Urbanland Poolside Loungers
                        </p>

                        {/* Trust Markers */}
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 border-t border-[#DCDAD5]">
                            <div className="flex items-center space-x-2 text-[#44474A]">
                                <span className="material-symbols-outlined text-[#2C5F2E] scale-75">check_circle</span>
                                <span className="font-label-technical text-[12px]">2-Year Guarantee</span>
                            </div>
                            <div className="flex items-center space-x-2 text-[#44474A]">
                                <span className="material-symbols-outlined text-[#2C5F2E] scale-75">verified</span>
                                <span className="font-label-technical text-[12px]">ISO 9001:2015 Certified</span>
                            </div>
                            <div className="flex items-center space-x-2 text-[#44474A]">
                                <span className="material-symbols-outlined text-[#2C5F2E] scale-75">manufacturing</span>
                                <span className="font-label-technical text-[12px]">Made in India</span>
                            </div>
                            <div className="flex items-center space-x-2 text-[#44474A]">
                                <span className="material-symbols-outlined text-[#2C5F2E] scale-75">location_city</span>
                                <span className="font-label-technical text-[12px]">40+ Projects Delivered</span>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link to="/get-quote" className="bg-[#2C5F2E] text-white px-10 py-4 font-label-technical uppercase tracking-widest text-sm flex items-center justify-center rounded-[4px] border-b-2 border-[#2D2D2D] hover:bg-[#C9A84C] hover:text-[#1A1C1E] transition-all duration-300">
                                Request Custom Quote <span className="ml-2">→</span>
                            </Link>
                            <Link to="/resources/downloads" className="border-2 border-[#2C5F2E] text-[#2C5F2E] px-10 py-4 font-label-technical uppercase tracking-widest text-sm flex items-center justify-center rounded-[4px] hover:bg-[#2C5F2E] hover:text-white transition-all duration-300">
                                Download the Brochure <span className="ml-2">↓</span>
                            </Link>
                        </div>
                    </div>

                    {/* Hero Image Right */}
                    <div className="relative group hidden lg:flex h-full w-full py-10 flex-col justify-center">
                        <div className="relative h-full lg:h-[97%] w-full">
                            <div className="absolute inset-0 bg-[#2C5F2E]/5 -rotate-3 transition-transform group-hover:rotate-0 duration-500 rounded-none"></div>
                            <div className="relative h-full min-h-[600px] w-full overflow-hidden border border-[#DCDAD5] bg-[#E8E6E0] rounded-none">
                                {carouselImages.map((img, idx) => (
                                    <img
                                        key={idx}
                                        alt={"Premium Poolside Loungers " + (idx + 1)}
                                        className={"hero-slide absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 " + (currentSlideIdx === idx ? "opacity-100 z-10" : "opacity-0 z-0")}
                                        src={img}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Aesthetic Element */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F2F0EB] -z-0 transform skew-x-12 translate-x-1/2"></div>
            </section>

            {/* CRAFTED FOR EVERY ENVIRONMENT */}
            <section className="bg-[#F7F4EF] py-24 overflow-hidden border-b border-[#C9A84C] transition-all duration-1000 opacity-100 translate-y-0">
                <div className="max-w-[1280px] mx-auto px-6 md:px-12 mb-16 text-left space-y-4">
                    <h2 className="font-headline-lg text-[32px] text-[#1A1A1A] text-left">Crafted for Every Environment</h2>
                    <p className="font-body-lg text-[18px] text-[#44474A] max-w-3xl">
                        Explore our collection of premium outdoor seating installed in world-class spaces.
                    </p>
                    <div className="w-24 h-1 bg-[#C9A84C] mt-4"></div>
                </div>

                <div className="relative group">
                    <div ref={heroScrollRef} className="flex overflow-x-auto space-x-6 px-6 lg:px-24 pb-12 scrollbar-none snap-x snap-mandatory scroll-smooth w-full">
                        {[{"tag":"Hospitality Spotlight","h":"Luxury Poolside Loungers<br />& Premium Sunbeds","label":"01","desc":"Resort-grade weather-resistant lounge seating"},{"tag":"Poolside Comfort","h":"Ergonomic sunbeds<br />with multi-position<br />adjustable backrests","label":"02","desc":"Hand-woven UV-stabilized HDPE synthetic rattan"},{"tag":"B2B Guarantee","h":"2-Year Warranty<br />& ISO Certified<br />Standards","label":"03","desc":"Trusted by 5-star hotels, luxury villas & beach clubs"},{"tag":"Quick Dry","h":"Reticulated open-cell<br />foam cushions that drain<br />monsoon rains instantly","label":"04","desc":"Sunbrella performance fabric cushion covers"},{"tag":"Bespoke Ensembles","h":"Custom double loungers<br />with integrated side<br />tables and wheels","label":"05","desc":"Tailored to high-end resort pool decks"}].map((card, idx) => (
                            <div key={idx} className="flex-shrink-0 w-[85%] md:w-[60%] lg:w-[45%] snap-center relative overflow-hidden group/item rounded-none border border-[#DCDAD5]">
                                <img
                                    alt={card.tag}
                                    className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover/item:scale-105"
                                    src={carouselImages[idx % carouselImages.length]}
                                />
                                <div className="absolute bottom-6 left-6 bg-[#2C5F2E]/90 backdrop-blur-sm text-white px-4 py-2 font-label-technical text-xs uppercase tracking-widest" dangerouslySetInnerHTML={{ __html: card.tag || card.h }} />
                            </div>
                        ))}

                        {/* View All Products CTA Card */}
                        <div className="flex-shrink-0 w-[85%] md:w-[60%] lg:w-[45%] snap-center relative overflow-hidden border border-[#DCDAD5] bg-[#2C5F2E] text-white flex flex-col justify-between p-8 md:p-12 h-[400px] md:h-[500px] group/cta rounded-none">
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #DCDAD5 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                            <div className="relative z-10 flex flex-col justify-between h-full text-left">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[#C9A84C] font-black tracking-tighter text-sm uppercase font-label-technical">Urbanland® Catalogue</span>
                                        <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse"></span>
                                    </div>
                                    <h3 className="font-headline-lg text-[32px] text-white text-left">
                                        Explore Our Complete Architectural Collection
                                    </h3>
                                    <p className="font-body-md text-white/80 max-w-sm">
                                        Discover all 14+ premium outdoor product categories from benches and planters to bus shelters and custom structural cabanas.
                                    </p>
                                </div>
                                
                                <div className="space-y-6">
                                    <div className="flex flex-wrap gap-4 border-t border-white/10 pt-6">
                                        <span className="bg-white/10 px-3 py-1 rounded-none text-xs font-label-technical uppercase tracking-wider">14+ Categories</span>
                                        <span className="bg-white/10 px-3 py-1 rounded-none text-xs font-label-technical uppercase tracking-wider">Custom CAD/Specs</span>
                                    </div>
                                    <Link to="/catalogue" className="bg-[#C9A84C] text-[#1A1C1E] px-8 py-4 font-label-technical uppercase tracking-widest text-xs hover:bg-white hover:text-[#2C5F2E] transition-all duration-300 flex items-center justify-center gap-2 rounded-[4px] border-b-2 border-[#1A1A1A]">
                                        View All Products
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation buttons */}
                    <div className="absolute top-[200px] md:top-[250px] -translate-y-1/2 left-6 md:left-12 lg:left-[3.5rem] z-20">
                        <button onClick={scrollHeroLeft} className="w-12 h-12 rounded-full bg-[#2C5F2E] text-white flex items-center justify-center hover:bg-[#C9A84C] hover:text-[#1A1C1E] transition-all border-none cursor-pointer">
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                    </div>
                    <div className="absolute top-[200px] md:top-[250px] -translate-y-1/2 right-6 md:right-12 lg:right-[3.5rem] z-20">
                        <button onClick={scrollHeroRight} className="w-12 h-12 rounded-full bg-[#2C5F2E] text-white flex items-center justify-center hover:bg-[#C9A84C] hover:text-[#1A1C1E] transition-all border-none cursor-pointer">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* WHY QUALITY MATTERS */}
            <section className="bg-[#F7F4EF] py-24 px-6 md:px-12 border-b border-[#C9A84C] transition-all duration-1000 opacity-100 translate-y-0">
                <div className="max-w-[1280px] mx-auto text-left">
                    <div className="mb-16 text-left space-y-4">
                        <h2 className="font-headline-lg text-[32px] text-[#1A1A1A] text-left">Why Quality Poolside Loungers Matter in Public & Outdoor Spaces</h2>
                        <div className="w-24 h-1 bg-[#C9A84C]"></div>
                    </div>
                    <div className="flex flex-wrap justify-start gap-8">
                        {[{"title":"HDPE Synthetic Wicker","desc":"Formulated to withstand saltwater mist, chlorinated pool water, and intense tropical UV radiation without cracking or splitting."},{"title":"Reticulated Foam Core","desc":"Cushions use quick-dry reticulated open-cell foam, allowing rainwater to drain out instantly, keeping seats operational."},{"title":"Lightweight Aluminium","desc":"Internal frames are constructed with thick-walled anodized aluminium, preventing rust while allowing staff to move chairs easily."},{"title":"Multi-Angle Recline","desc":"Features high-grade stainless steel reclining adjusters, providing five ergonomic lounge angles for relaxation."}].map((r, idx) => (
                            <div key={idx} className="flex-shrink-0 w-full sm:w-[280px] md:w-[300px] lg:w-[240px] xl:w-[260px] flex flex-col items-start text-left space-y-4 p-8 bg-[#F2F0EB] border border-[#DCDAD5] rounded-none transition-all">
                                <div className="w-12 h-12 flex items-center justify-start text-[#2C5F2E]">
                                    <span className="material-symbols-outlined text-[40px]">{icons[idx % icons.length]}</span>
                                </div>
                                <h3 className="font-bold text-[#1A1A1E] text-left">{r.title}</h3>
                                <p className="text-body-md text-[#44474A] text-left">{r.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* RANGE OF PREMIUM CONFIGURATIONS */}
            <section className="bg-[#F7F4EF] py-24 px-6 md:px-12 border-b border-[#C9A84C] transition-all duration-1000 opacity-100 translate-y-0">
                <div className="max-w-[1280px] mx-auto">
                    <div className="mb-16 space-y-4 text-left">
                        <h2 className="font-headline-lg text-[32px] text-[#1A1A1A] text-left">Three Poolside Loungers Configurations — Choose What Fits Your Project</h2>
                        <div className="w-24 h-1 bg-[#C9A84C]"></div>
                        <p className="font-body-lg text-[18px] text-[#44474A] max-w-3xl">
                            All Urbanland architectural products are built on proven specifications but fully customizable:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {configCards.map((card, idx) => (
                            <div key={card.key} className="bg-[#F2F0EB] border border-[#DCDAD5] rounded-none transition-all group p-0 flex flex-col justify-between overflow-hidden text-left">
                                <div>
                                    <div className="w-full h-64 overflow-hidden relative rounded-none">
                                        <img alt={card.data.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={carouselImages[card.data.imgIdx % carouselImages.length]} />
                                        <span className="absolute top-4 left-4 text-[9px] font-black uppercase tracking-widest text-white bg-[#2C5F2E] px-3 py-1.5 rounded-none select-none">{card.badge}</span>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="font-headline-md text-[24px] mb-4 text-[#1A1A1E] leading-tight text-left">{card.data.title}</h3>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-[#44474A] mb-4 text-left">Best for: {card.data.ideal}</p>
                                        <ul className="space-y-2 text-xs font-semibold text-[#1A1A1E]/80 text-left">
                                            {card.data.features.map((f, i) => (
                                                <li key={i} className="flex items-center gap-2"><span className="text-[#C9A84C]">▸</span> {f}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-8 pt-0">
                                    <Link to={"/get-quote/?product=poolside-loungers&variant=" + card.key} className="bg-[#2C5F2E] text-white px-6 py-3 font-label-technical uppercase tracking-widest text-xs inline-block text-center rounded-[4px] border-b-2 border-[#1A1A1A] hover:bg-[#C9A84C] hover:text-[#1A1C1E] transition-colors w-full">
                                        Request {card.key.toUpperCase()} Quote →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MATERIALS & CUSTOMIZATION GUIDE */}
            <section className="bg-[#F2F0EB] py-24 px-6 md:px-12 border-b border-[#C9A84C] transition-all duration-1000 opacity-100 translate-y-0">
                <div className="max-w-[1280px] mx-auto">
                    <div className="mb-16 space-y-4 text-left">
                        <h2 className="font-headline-lg text-[32px] text-[#1A1A1A] text-left">Materials & Customization Guide</h2>
                        <div className="w-24 h-1 bg-[#C9A84C]"></div>
                        <p className="font-body-lg text-[18px] text-[#44474A] max-w-3xl">
                            Compare our high-performance materials and explore how we can tailor our products to your specific project requirements.
                        </p>
                    </div>

                    {/* Material Comparison Table */}
                    <div className="mb-20 overflow-x-auto">
                        <table className="w-full border-collapse bg-[#FFFFFF] border border-[#DCDAD5]">
                            <thead>
                                <tr className="bg-[#2C5F2E] text-white font-label-technical uppercase tracking-widest text-xs md:text-sm">
                                    <th className="p-4 md:p-6 text-left">Material</th>
                                    <th className="p-4 md:p-6 text-left">Lifespan</th>
                                    <th className="p-4 md:p-6 text-left">Maintenance</th>
                                    <th className="p-4 md:p-6 text-left">Best For</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm md:text-body-md text-[#1A1A1A]">
                                {[{"name":"HDPE Wicker + Aluminium","life":"8-10 years","maint":"Zero maintenance","best":"Resort & hotel pool decks","cost":"Base premium (1.2x)"},{"name":"PE Rope + SS 316","life":"12+ years","maint":"Periodic cleaning","best":"Beachfront VIP ocean decks","cost":"Highest end (2.2x)"},{"name":"Standard PE Wicker + Steel","life":"4-5 years","maint":"Rust check","best":"Budget residential pools","cost":"Standard (0.8x)"}].map((m, idx) => {
                                    let progressWidth = "70%";
                                    if (m.life.includes("20+") || m.life.includes("15+")) progressWidth = "90%";
                                    else if (m.life.includes("12-15")) progressWidth = "75%";
                                    else if (m.life.includes("8-12")) progressWidth = "50%";
                                    else if (m.life.includes("6-8")) progressWidth = "40%";
                                    
                                    return (
                                        <tr key={idx} className="border-b border-[#DCDAD5] text-left">
                                            <td className="p-4 md:p-6 font-bold">{m.name}</td>
                                            <td className="p-4 md:p-6">
                                                <div className="flex items-center gap-2">
                                                    {m.life}
                                                    <div className="h-1.5 w-12 bg-[#C9A84C]/30 rounded-none overflow-hidden">
                                                        <div className="h-full bg-[#C9A84C]" style={{ width: progressWidth }}></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4 md:p-6">{m.maint}</td>
                                            <td className="p-4 md:p-6">{m.best}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {/* Customization Options Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {["Weave styles: Flat PE rattan, round synthetic cane, or heavy-duty outdoor polyester rope weaves","Fabric colors: Available in 30+ solid and textured Sunbrella® or outdoor performance shades","Cushion thickness: Standard (75mm), Deluxe (100mm), or Ultra-plush (150mm quick-dry foam)","Add-ons: Integrated headrest pillows, slide-out side drink trays, rear roller wheels, side canvas storage bags","Frames: Lightweight aluminium, marine-grade SS 316, or raw teak wood bases"].map((c, idx) => {
                            const parts = c.split(":");
                            const title = parts[0]?.trim() || "Customization";
                            const desc = parts.slice(1).join(":").trim() || "";
                            return (
                                <div key={idx} className="p-6 bg-[#FFFFFF] border border-[#DCDAD5] text-center space-y-3 hover:border-[#2C5F2E] transition-colors rounded-none">
                                    <span className="material-symbols-outlined text-[#2C5F2E] text-3xl">{customIcons[idx % customIcons.length]}</span>
                                    <h4 className="font-bold text-[#1A1A1A] text-sm uppercase tracking-wider">{title}</h4>
                                    <p className="text-xs text-[#44474A]">{desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CASE STUDIES & PROJECTS */}
            <section className="bg-[#F7F4EF] py-24 px-6 md:px-12 border-b border-[#C9A84C] transition-all duration-1000 opacity-100 translate-y-0">
                <div className="max-w-[1280px] mx-auto">
                    <div className="mb-16 space-y-4 text-left">
                        <h2 className="font-headline-lg text-[32px] text-[#1A1A1A] text-left">Real Projects. Real Results. Across India.</h2>
                        <div className="w-24 h-1 bg-[#C9A84C] whitespace-pre-line"></div>
                        <p className="font-label-technical text-[#2C5F2E] uppercase tracking-widest font-bold">40+ major projects delivered | 12+ cities served</p>
                    </div>

                    <div className="relative mb-20 group text-left">
                        <div className="overflow-hidden relative">
                            <div className="flex">
                                {[{"tag":"Taj Exotica Goa","subtitle":"Taj Hotels — Goa","title":"Luxury Beachfront Resort — 40 Poolside Loungers","time":"3 months","desc":" Taj Hotels partnered with Urbanland to manufacture and supply 40 premium reclining sun loungers. Engineered with rust-proof aluminium and UV-stabilized synthetic wicker, they successsfully withstand beach humidity."},{"tag":"Prestige Golfshire","subtitle":"Prestige Group — Bangalore","title":"Resort Golf Clubhouse — 30 Sunbeds & Daybeds","time":"2 months","desc":"Installed custom hand-woven rope loungers around the central clubhouse lagoon. The open-cell reticulated foam cushions dry rapidly after rain."},{"tag":"Oberoi Beach Resort","subtitle":"Oberoi Group — Mumbai","title":"Rooftop Pool Deck — 20 Premium Custom Sunbeds","time":"2 months","desc":"Installed custom double sunbeds on the luxury rooftop pool deck. Fronted with rear roller wheels to enable staff to easily adjust configurations."}].map((p, idx) => (
                                    <div key={idx} className={"w-full flex-shrink-0 px-2 transition-all duration-500 " + (projectSlideIdx === idx ? "block" : "hidden")}>
                                        <div className="bg-[#FFFFFF] border border-[#DCDAD5] overflow-hidden flex flex-col md:flex-row h-full md:h-[450px] rounded-none">
                                            <div className="md:w-1/2 h-64 md:h-full">
                                                <img alt={p.title} className="w-full h-full object-cover rounded-none" src={carouselImages[(idx + 1) % carouselImages.length]} />
                                            </div>
                                            <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center space-y-6">
                                                <div className="space-y-2">
                                                    <span className="font-label-technical text-[#2C5F2E] uppercase tracking-widest text-xs">{p.tag}</span>
                                                    <h3 className="font-headline-md text-[24px] text-[#1A1A1A] leading-tight text-left">{p.title}</h3>
                                                    <p className="text-sm text-[#44474A] uppercase tracking-wider">{p.subtitle}</p>
                                                </div>
                                                <div className="grid grid-cols-2 gap-6 py-6 border-y border-[#DCDAD5]">
                                                    <div>
                                                        <p className="text-[10px] uppercase tracking-widest text-[#44474A] mb-1">Timeline</p>
                                                        <p className="font-bold text-[#2C5F2E]">{p.time}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] uppercase tracking-widest text-[#44474A] mb-1">Status</p>
                                                        <p className="font-bold text-[#2C5F2E]">Completed</p>
                                                    </div>
                                                </div>
                                                <p className="text-body-md text-[#44474A]">{p.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Slider controls */}
                        <div className="absolute top-1/2 -translate-y-1/2 -left-6 md:-left-12 z-20">
                            <button onClick={handlePrevProject} className="w-12 h-12 rounded-full bg-[#2C5F2E] text-white flex items-center justify-center hover:bg-[#C9A84C] hover:text-[#1A1C1E] transition-all border-none cursor-pointer">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                        </div>
                        <div className="absolute top-1/2 -translate-y-1/2 -right-6 md:-right-12 z-20">
                            <button onClick={handleNextProject} className="w-12 h-12 rounded-full bg-[#2C5F2E] text-white flex items-center justify-center hover:bg-[#C9A84C] hover:text-[#1A1C1E] transition-all border-none cursor-pointer">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </div>

                    {/* Featured Spotlight Card */}
                    <div className="bg-[#2C5F2E] text-white p-6 md:p-10 mb-20 flex flex-col md:flex-row gap-6 md:gap-10 items-center rounded-none">
                        <div className="md:w-1/2 space-y-6 text-left">
                            <span className="font-label-technical uppercase tracking-[0.2em] text-[#C9A84C]">Featured Spotlight</span>
                            <h3 className="font-headline-md text-[24px] text-white leading-tight text-left">Premium Sun Lounger — Adjustable Backrest</h3>
                            <p className="font-body-lg opacity-90 leading-relaxed">
                                5-star hotel pool decks, premium resort clubs, luxury villa lawns. Featuring Frame: Heavy anodized aluminium alloy, Body Wrap: High-grade UV-rated PE wicker weave, Design: Reclining backrest with 75mm Sunbrella outdoor cushion, Capacity: 150 kg weight capacity.
                            </p>
                        </div>
                        <div className="md:w-1/2 border-2 border-[#C9A84C]/30 p-2 w-full h-full rounded-none">
                            <img src={carouselImages[1 % carouselImages.length]} alt="Featured Spotlight" className="w-full h-64 object-cover rounded-none" />
                        </div>
                    </div>

                    {/* Additional Installations */}
                    <div className="border-t border-[#DCDAD5] pt-12">
                        <h4 className="font-label-technical text-[#44474A] uppercase tracking-widest text-center mb-8">Additional Major Installations</h4>
                        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-60 grayscale hover:grayscale-0 transition-all">
                            <span className="font-headline-md text-[18px]">TATA Projects</span>
                            <span className="font-headline-md text-[18px]">Indore Smart City</span>
                            <span className="font-headline-md text-[18px]">Pune Municipal Corp</span>
                            <span className="font-headline-md text-[18px]">BKC Mumbai</span>
                            <span className="font-headline-md text-[18px]">Vadnagar Museum</span>
                            <span className="font-headline-md text-[18px]">Navandhe Village</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* INSTALLATION & WARRANTY support sections */}
            <section className="bg-[#F7F4EF] py-24 px-6 md:px-12 border-b border-[#C9A84C] transition-all duration-1000 opacity-100 translate-y-0 text-left">
                <div className="max-w-[1280px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        <div className="p-8 bg-[#F2F0EB] border border-[#DCDAD5] flex items-start space-x-6 rounded-none">
                            <div className="flex-shrink-0 w-12 h-12 bg-[#2C5F2E]/10 rounded-none flex items-center justify-center text-[#2C5F2E]">
                                <span className="material-symbols-outlined">local_shipping</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#1A1A1A] mb-2 text-left">Installation Support</h3>
                                <p className="text-body-md text-[#44474A] leading-relaxed">We provide professional delivery, anchoring and installation support across India.</p>
                            </div>
                        </div>
                        <div className="p-8 bg-[#F2F0EB] border border-[#DCDAD5] flex items-start space-x-6 rounded-none">
                            <div className="flex-shrink-0 w-12 h-12 bg-[#2C5F2E]/10 rounded-none flex items-center justify-center text-[#2C5F2E]">
                                <span className="material-symbols-outlined">verified_user</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#1A1A1A] mb-2 text-left">2-Year Comprehensive Warranty</h3>
                                <p className="text-body-md text-[#44474A] leading-relaxed">Urbanland stands behind its products with a comprehensive 2-year guarantee on structure, coating, and components.</p>
                            </div>
                        </div>
                    </div>

                    {/* FAQ SECTION */}
                    <div className="max-w-3xl mx-auto">
                        <div className="text-left mb-12">
                            <h2 className="font-headline-lg text-[32px] text-[#1A1A1A] mb-4 text-left">Frequently Asked Questions</h2>
                            <div className="w-24 h-1 bg-[#C9A84C]"></div>
                        </div>
                        <div className="space-y-4">
                            {[{"q":"Can the cushions remain outdoors during rain?","a":"Our loungers use quick-dry open-cell foam and Sunbrella performance fabrics that drain water rapidly and dry quickly."},{"q":"Is the synthetic wicker chlorine and salt resistant?","a":"Yes, our HDPE wicker is formulated to resist chlorine pools, saltwater ocean mist, and intense tropical UV radiation."},{"q":"How do I clean the loungers?","a":"Simple pressure wash with mild soap and water keeps them clean. No oils or special varnishes required."},{"q":"What is the lead time?","a":"Production lead times are 25-30 days from order confirmation."},{"q":"What is the warranty coverage?","a":"Backed by our 2-Year comprehensive warranty covering frame structural failure and wicker split/fade."}].map((faq, idx) => (
                                <div key={idx} className="border-b border-[#DCDAD5]">
                                    <button onClick={() => toggleFaq(idx)} className="w-full py-6 flex justify-between items-center text-left group border-none bg-transparent cursor-pointer focus:outline-none">
                                        <span className="font-bold text-[#1A1A1A] group-hover:text-[#2C5F2E] transition-colors">{faq.q}</span>
                                        <span className="material-symbols-outlined text-[#2C5F2E] transition-transform duration-300">
                                            {faqOpen[idx] ? "remove" : "add"}
                                        </span>
                                    </button>
                                    {faqOpen[idx] && (
                                        <div className="pb-6 text-body-md text-[#44474A] animate-fadeIn">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
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
