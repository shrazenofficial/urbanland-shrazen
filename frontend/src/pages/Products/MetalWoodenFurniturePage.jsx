import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CTASection from "../../components/CTASection/CTASection";

import carouselImg1 from "../../assets/products/Product Images/Benches/Create_a_clean,_premium,_professional_202605162312.jpeg";
import carouselImg2 from "../../assets/products/Product Images/Benches/UGC_Benches.jpeg";
import carouselImg3 from "../../assets/Bench.jpeg";

const carouselImages = [carouselImg1, carouselImg2, carouselImg3];

const MetalWoodenFurniturePage = () => {
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
            title: "Metal Wooden Furniture Manufacturer India | Outdoor Benches, Car Sheds, Bus Shelters & More | Urbanland",
            description: "Premium metal wooden outdoor furniture in India. Outdoor benches, car sheds, bus shelters, street planters, canteen tables, outdoor dustbins and more. Strong metal frames combined with natural wood for durability and elegance. Backed by India’s only 2-Year Guarantee.",
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
        { key: "standard", data: {"title":"Standard Steel-WPC Bench — Low Maintenance","ideal":"Public walkways, school courtyards, residential society pathways.","features":["Frame: Mild Steel profile with anti-rust primer and powder coating","Seating: Weather-resistant Wood-Plastic Composite (WPC) slats","Design: Rectangular bench with backrest and metal armrests","Capacity: 3-4 persons"],"imgIdx":1,"matrix":{"dims":"1500L × 600W × 780H mm","wt":"38-45 kg","lt":"20-25 days","maint":"Low (periodic cleaning)","life":"8-10 years","custom":"None"}}, badge: "Value Option" },
        { key: "premium", data: {"title":"Premium Robinia Bench — Cast Iron Legs","ideal":"Hotel gardens, luxury golf courses, premium township walkways.","features":["Frame: Heavy-duty cast iron base legs (black powder-coated finish)","Seating: FSC Robinia hardwood slats with protective oil coat","Design: Arched contour backrest with integrated armrests","Capacity: 4-5 persons"],"imgIdx":2,"matrix":{"dims":"1800L × 620W × 810H mm","wt":"65-75 kg","lt":"25-30 days","maint":"Annual timber oil staining","life":"12-15 years","custom":"Concrete chemical anchor kit"}}, badge: "Most Specified" },
        { key: "super", data: {"title":"Super Premium SS-Teak Modular Bench — Geometric","ideal":"High-end corporate park plazas, commercial office terraces, smart city lawns.","features":["Frame: Stainless Steel 316 structural tube chassis","Seating: Premium grade FSC Teak wood slats (brushed finish)","Design: Modular curved or geometric linkable configurations","Capacity: Customizable (modular linkable seats)"],"imgIdx":3,"matrix":{"dims":"Varies (modular design)","wt":"50-70 kg per module","lt":"35-45 days","maint":"Minimal (seasonal teak oiling)","life":"20+ years indefinite","custom":"Custom layout planning included"}}, badge: "Smart Ready" }
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
                    <span className="text-[#C9A84C]">Metal Wooden Furniture</span>
                </nav>
            </div>

            {/* HERO SECTION */}
            <section className="relative min-h-[800px] flex items-stretch overflow-hidden transition-all duration-1000 opacity-100 translate-y-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #DCDAD5 1px, transparent 0)', backgroundSize: '40px 40px' }}>
                <div className="max-w-[1280px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
                    
                    {/* Hero Content Left */}
                    <div className="flex flex-col justify-center space-y-8 py-20 lg:py-24 text-left">
                        <div className="space-y-4">
                            <span className="font-label-technical text-[#C9A84C] tracking-[0.2em] uppercase font-semibold block mb-4">
                                Premium Wooden and Metal Furniture for Your Home
                            </span>
                            <h1 className="font-headline-xl text-[38px] font-[700] md:text-[48px] text-[#1A1A1A] max-w-xl leading-[1.2] md:leading-[1.1]">
                                Premium Metal Wooden Furniture Manufacturer in India – Outdoor Benches, Car Sheds, Bus Shelters & More
                            </h1>
                        </div>
                        <p className="font-body-lg text-[18px] text-[#44474A] max-w-lg leading-relaxed">
                            Why People Choose Urbanland for Metal Wooden Furniture
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
                                <span className="font-label-technical text-[12px]">60+ Projects Delivered</span>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link to="/get-quote" className="bg-[#2C5F2E] text-white px-10 py-4 font-label-technical uppercase tracking-widest text-sm flex items-center justify-center hover:bg-[#C9A84C] hover:text-[#1A1C1E] transition-all duration-300">
                                Request Custom Quote <span className="ml-2">→</span>
                            </Link>
                            <Link to="/resources/downloads" className="border-2 border-[#2C5F2E] text-[#2C5F2E] px-10 py-4 font-label-technical uppercase tracking-widest text-sm flex items-center justify-center hover:bg-[#2C5F2E] hover:text-white transition-all duration-300">
                                Download the Brochure <span className="ml-2">↓</span>
                            </Link>
                        </div>
                    </div>

                    {/* Hero Image Right */}
                    <div className="relative group hidden lg:flex h-full w-full py-10 flex-col justify-center">
                        <div className="relative h-full lg:h-[97%] w-full">
                            <div className="absolute inset-0 bg-[#2C5F2E]/5 -rotate-3 rounded-lg transition-transform group-hover:rotate-0 duration-500"></div>
                            <div className="relative h-full min-h-[600px] w-full overflow-hidden border border-[#DCDAD5] bg-[#E8E6E0] shadow-xl rounded-lg">
                                {carouselImages.map((img, idx) => (
                                    <img
                                        key={idx}
                                        alt={"Premium Metal Wooden Furniture " + (idx + 1)}
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
            <section className="bg-[#F7F4EF] py-24 overflow-hidden transition-all duration-1000 opacity-100 translate-y-0">
                <div className="max-w-[1280px] mx-auto px-6 md:px-12 mb-16 text-center space-y-4">
                    <h2 className="font-headline-lg text-[32px] text-[#1A1A1A]">Crafted for Every Environment</h2>
                    <p className="font-body-lg text-[18px] text-[#44474A] max-w-3xl mx-auto">
                        Explore our collection of premium outdoor seating installed in world-class spaces.
                    </p>
                    <div className="w-24 h-1 bg-[#C9A84C] mx-auto mt-4"></div>
                </div>

                <div className="relative group">
                    <div ref={heroScrollRef} className="flex overflow-x-auto space-x-6 px-6 lg:px-24 pb-12 scrollbar-none snap-x snap-mandatory scroll-smooth w-full">
                        {[{"tag":"Product Spotlight","h":"Bespoke Metal Wooden<br />Site Furniture in India","label":"01","desc":"Engineered steel-and-wood benches and seating"},{"tag":"Architectural Blend","h":"Perfect fusion of<br />structural metals &<br />natural timbers","label":"02","desc":"FSC certified Robinia, Teak or WPC wood"},{"tag":"B2B Guarantee","h":"2-Year Warranty<br />& ISO Certified<br />Standards","label":"03","desc":"Specified by top developers, hotels and public sectors"},{"tag":"Corrosion Proof","h":"Galvanized frames<br />coated with premium<br />Akzonobel powder","label":"04","desc":"Corrosion-resistant metal structures for public spaces"},{"tag":"Bespoke Shapes","h":"Custom linear, curved<br />or geometric modular<br />seating layouts","label":"05","desc":"Tailored to public parks and township plazas"}].map((card, idx) => (
                            <div key={idx} className="flex-shrink-0 w-[85%] md:w-[60%] lg:w-[45%] snap-center relative overflow-hidden rounded-lg group/item">
                                <img
                                    alt={card.tag}
                                    className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover/item:scale-105"
                                    src={carouselImages[idx % carouselImages.length]}
                                />
                                <div className="absolute bottom-6 left-6 bg-[#2C5F2E]/90 backdrop-blur-sm text-white px-4 py-2 font-label-technical text-xs uppercase tracking-widest" dangerouslySetInnerHTML={{ __html: card.tag || card.h }} />
                            </div>
                        ))}

                        {/* View All Products CTA Card */}
                        <div className="flex-shrink-0 w-[85%] md:w-[60%] lg:w-[45%] snap-center relative overflow-hidden rounded-lg border border-[#DCDAD5] bg-[#2C5F2E] text-white flex flex-col justify-between p-8 md:p-12 h-[400px] md:h-[500px] shadow-xl group/cta">
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #DCDAD5 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                            <div className="relative z-10 flex flex-col justify-between h-full text-left">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[#C9A84C] font-black tracking-tighter text-sm uppercase font-label-technical">Urbanland® Catalogue</span>
                                        <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse"></span>
                                    </div>
                                    <h3 className="font-headline-lg text-[32px] text-white">
                                        Explore Our Complete Architectural Collection
                                    </h3>
                                    <p className="font-body-md text-white/80 max-w-sm">
                                        Discover all 14+ premium outdoor product categories from benches and planters to bus shelters and custom structural cabanas.
                                    </p>
                                </div>
                                
                                <div className="space-y-6">
                                    <div className="flex flex-wrap gap-4 border-t border-white/10 pt-6">
                                        <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-label-technical uppercase tracking-wider">14+ Categories</span>
                                        <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-label-technical uppercase tracking-wider">Custom CAD/Specs</span>
                                    </div>
                                    <Link to="/catalogue" className="bg-[#C9A84C] text-[#1A1C1E] px-8 py-4 font-label-technical uppercase tracking-widest text-xs hover:bg-white hover:text-[#2C5F2E] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
                                        View All Products
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation buttons */}
                    <div className="absolute top-[200px] md:top-[250px] -translate-y-1/2 left-6 md:left-12 lg:left-[3.5rem] z-20">
                        <button onClick={scrollHeroLeft} className="w-12 h-12 rounded-full bg-[#2C5F2E] text-white flex items-center justify-center shadow-xl hover:bg-[#C9A84C] hover:text-[#1A1C1E] transition-all border-none cursor-pointer">
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                    </div>
                    <div className="absolute top-[200px] md:top-[250px] -translate-y-1/2 right-6 md:right-12 lg:right-[3.5rem] z-20">
                        <button onClick={scrollHeroRight} className="w-12 h-12 rounded-full bg-[#2C5F2E] text-white flex items-center justify-center shadow-xl hover:bg-[#C9A84C] hover:text-[#1A1C1E] transition-all border-none cursor-pointer">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* WHY QUALITY MATTERS */}
            <section className="bg-[#F7F4EF] py-24 px-6 md:px-12 border-b border-[#DCDAD5] transition-all duration-1000 opacity-100 translate-y-0">
                <div className="max-w-[1280px] mx-auto">
                    <div className="mb-16 text-center space-y-4">
                        <h2 className="font-headline-lg text-[32px] text-[#1A1A1A]">Why Quality Metal Wooden Furniture Matter in Public & Outdoor Spaces</h2>
                        <div className="w-24 h-1 bg-[#C9A84C] mx-auto"></div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8">
                        {[{"title":"Structural Steel Frame","desc":"Heavy steel structures are sandblasted, zinc-primed, and powder coated with Akzonobel PU paint for long-term corrosion prevention."},{"title":"Premium Timbers","desc":"Uses sustainably sourced Robinia or Teak timbers that naturally resist insects, humidity, and decay under public exposure."},{"title":"Double-Sealed Joints","desc":"All metal-to-wood joinery uses high-grade stainless steel fasteners with lock-nuts, preventing structural loosening."},{"title":"Concealed Bolt Down","desc":"Designed with internal anchoring plates, allowing installers to bolt the furniture to concrete while keeping hardware hidden."}].map((r, idx) => (
                            <div key={idx} className="flex-shrink-0 w-full sm:w-[280px] md:w-[300px] lg:w-[240px] xl:w-[260px] flex flex-col items-center text-center space-y-4 p-8 bg-[#F2F0EB] rounded-lg border border-[#DCDAD5] transition-all hover:shadow-xl">
                                <div className="w-12 h-12 flex items-center justify-center text-[#2C5F2E]">
                                    <span className="material-symbols-outlined text-[40px]">{icons[idx % icons.length]}</span>
                                </div>
                                <h3 className="font-bold text-[#1A1A1E]">{r.title}</h3>
                                <p className="text-body-md text-[#44474A]">{r.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* RANGE OF PREMIUM CONFIGURATIONS */}
            <section className="bg-[#F7F4EF] py-24 px-6 md:px-12 border-b border-[#DCDAD5] transition-all duration-1000 opacity-100 translate-y-0">
                <div className="max-w-[1280px] mx-auto">
                    <div className="mb-16 space-y-4 text-left">
                        <h2 className="font-headline-lg text-[32px] text-[#1A1A1A]">Three Metal Wooden Furniture Configurations — Choose What Fits Your Project</h2>
                        <div className="w-24 h-1 bg-[#C9A84C]"></div>
                        <p className="font-body-lg text-[18px] text-[#44474A] max-w-3xl">
                            All Urbanland architectural products are built on proven specifications but fully customizable:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {configCards.map((card, idx) => (
                            <div key={card.key} className="bg-[#F2F0EB] border border-[#DCDAD5] rounded-lg hover:shadow-xl transition-all group p-0 flex flex-col justify-between overflow-hidden text-left">
                                <div>
                                    <div className="w-full h-64 overflow-hidden rounded-t-lg relative">
                                        <img alt={card.data.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={carouselImages[card.data.imgIdx % carouselImages.length]} />
                                        <span className="absolute top-4 left-4 text-[9px] font-black uppercase tracking-widest text-[#C9A84C] bg-black/60 px-3 py-1.5 rounded-full select-none">{card.badge}</span>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="font-headline-md text-[24px] mb-4 text-[#1A1A1E] leading-tight">{card.data.title}</h3>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-[#44474A] mb-4">Best for: {card.data.ideal}</p>
                                        <ul className="space-y-2 text-xs font-semibold text-[#1A1A1E]/80">
                                            {card.data.features.map((f, i) => (
                                                <li key={i} className="flex items-center gap-2"><span className="text-[#C9A84C]">▸</span> {f}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-8 pt-0">
                                    <Link to={"/get-quote/?product=metal-wooden-furniture&variant=" + card.key} className="bg-[#2C5F2E] text-white px-6 py-3 font-label-technical uppercase tracking-widest text-xs inline-block text-center rounded-none w-full hover:bg-[#C9A84C] hover:text-[#1A1C1E] transition-colors">
                                        Request {card.key.toUpperCase()} Quote →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MATERIALS & CUSTOMIZATION GUIDE */}
            <section className="bg-[#F2F0EB] py-24 px-6 md:px-12 border-b border-[#DCDAD5] transition-all duration-1000 opacity-100 translate-y-0">
                <div className="max-w-[1280px] mx-auto">
                    <div className="mb-16 space-y-4 text-left">
                        <h2 className="font-headline-lg text-[32px] text-[#1A1A1A]">Materials & Customization Guide</h2>
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
                                {[{"name":"MS + WPC Slats","life":"8-10 years","maint":"Zero maintenance","best":"Urban pathways & societies","cost":"Base price (1x)"},{"name":"Cast Iron + Robinia Wood","life":"12-15 years","maint":"Annual timber staining","best":"Premium resorts & hotels","cost":"Premium (1.6x vs WPC)"},{"name":"Stainless Steel 316 + Teak","life":"20+ years","maint":"Seasonal teak oiling","best":"Mega-townships & beachfront parks","cost":"Highest end (2.4x vs WPC)"}].map((m, idx) => {
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
                                                    <div className="h-1.5 w-12 bg-[#C9A84C]/30 rounded-full overflow-hidden">
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
                        {["Metal profiles: Galvanized steel, Stainless Steel 304, SS 316, cast iron, or cast aluminium","Wood finishes: Natural teak oil, Robinia stains, mahogany stains, or WPC composite slats","Shapes: Linear benches, curved park seating, L-shaped corner configurations, or central tree benches","Add-ons: Anti-graffiti textured coatings, custom metal branding cutouts, anti-skate studs","Anchor systems: Surface flange expansion anchors, sub-surface cast-in grouting, or heavy free-standing"].map((c, idx) => {
                            const parts = c.split(":");
                            const title = parts[0]?.trim() || "Customization";
                            const desc = parts.slice(1).join(":").trim() || "";
                            return (
                                <div key={idx} className="p-6 bg-[#FFFFFF] border border-[#DCDAD5] text-center space-y-3 hover:border-[#2C5F2E] transition-colors">
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
            <section className="bg-[#F7F4EF] py-24 px-6 md:px-12 border-b border-[#DCDAD5] transition-all duration-1000 opacity-100 translate-y-0">
                <div className="max-w-[1280px] mx-auto">
                    <div className="mb-16 space-y-4 text-left">
                        <h2 className="font-headline-lg text-[32px] text-[#1A1A1A]">Real Projects. Real Results. Across India.</h2>
                        <div className="w-24 h-1 bg-[#C9A84C] whitespace-pre-line"></div>
                        <p className="font-label-technical text-[#2C5F2E] uppercase tracking-widest font-bold">60+ major projects delivered | 20+ cities served</p>
                    </div>

                    <div className="relative mb-20 group text-left">
                        <div className="overflow-hidden relative">
                            <div className="flex">
                                {[{"tag":"Nagpur Smart City","subtitle":"Nagpur Municipal Corp","title":"Public Promenade Seating — 180 Steel-WPC Benches","time":"4 months","desc":"Selected our heavy-duty steel-WPC benches for the Smart City promenade network. Coordinated site preparation, bulk logistics, and concrete anchor installation for a zero-disruption project launch."},{"tag":"Lodha World Towers","subtitle":"Lodha Group — Mumbai","title":"Premium Apartment Gardens — 60 Timber Benches","time":"3 months","desc":"Installed custom cast iron and Robinia timber park benches along podium gardens. Coordinated deliveries and anchoring systems to align with Lodha's premium landscape design standards."},{"tag":"Tata Green Hills","subtitle":"Tata Realty — Pune","title":"Eco-Friendly Township Walkways — 50 Custom Benches","time":"3 months","desc":"Manufactured modular curved steel-wood benches for a public township plaza. Used FSC certified timbers and recyclable metals, helping the township achieve LEED Platinum green status."}].map((p, idx) => (
                                    <div key={idx} className={"w-full flex-shrink-0 px-2 transition-all duration-500 " + (projectSlideIdx === idx ? "block" : "hidden")}>
                                        <div className="bg-[#FFFFFF] border border-[#DCDAD5] overflow-hidden flex flex-col md:flex-row h-full md:h-[450px]">
                                            <div className="md:w-1/2 h-64 md:h-full">
                                                <img alt={p.title} className="w-full h-full object-cover" src={carouselImages[(idx + 1) % carouselImages.length]} />
                                            </div>
                                            <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center space-y-6">
                                                <div className="space-y-2">
                                                    <span className="font-label-technical text-[#2C5F2E] uppercase tracking-widest text-xs">{p.tag}</span>
                                                    <h3 className="font-headline-md text-[24px] text-[#1A1A1A] leading-tight">{p.title}</h3>
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
                            <button onClick={handlePrevProject} className="w-12 h-12 rounded-full bg-[#2C5F2E] text-white flex items-center justify-center shadow-xl hover:bg-[#C9A84C] hover:text-[#1A1C1E] transition-all border-none cursor-pointer">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                        </div>
                        <div className="absolute top-1/2 -translate-y-1/2 -right-6 md:-right-12 z-20">
                            <button onClick={handleNextProject} className="w-12 h-12 rounded-full bg-[#2C5F2E] text-white flex items-center justify-center shadow-xl hover:bg-[#C9A84C] hover:text-[#1A1C1E] transition-all border-none cursor-pointer">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </div>

                    {/* Featured Spotlight Card */}
                    <div className="bg-[#2C5F2E] text-white p-6 md:p-10 rounded-lg mb-20 flex flex-col md:flex-row gap-6 md:gap-10 items-center">
                        <div className="md:w-1/2 space-y-6 text-left">
                            <span className="font-label-technical uppercase tracking-[0.2em] text-[#C9A84C]">Featured Spotlight</span>
                            <h3 className="font-headline-md text-[24px] text-white leading-tight">Premium Robinia Bench — Cast Iron Legs</h3>
                            <p className="font-body-lg opacity-90 leading-relaxed">
                                Hotel gardens, luxury golf courses, premium township walkways. Featuring Frame: Heavy-duty cast iron base legs (black powder-coated finish), Seating: FSC Robinia hardwood slats with protective oil coat, Design: Arched contour backrest with integrated armrests, Capacity: 4-5 persons.
                            </p>
                        </div>
                        <div className="md:w-1/2 border-2 border-[#C9A84C]/30 p-2 w-full h-full">
                            <img src={carouselImages[1 % carouselImages.length]} alt="Featured Spotlight" className="w-full h-64 object-cover" />
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
            <section className="bg-[#F7F4EF] py-24 px-6 md:px-12 border-b border-[#DCDAD5] transition-all duration-1000 opacity-100 translate-y-0 text-left">
                <div className="max-w-[1280px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        <div className="p-8 bg-[#F2F0EB] border border-[#DCDAD5] rounded-lg flex items-start space-x-6">
                            <div className="flex-shrink-0 w-12 h-12 bg-[#2C5F2E]/10 rounded-full flex items-center justify-center text-[#2C5F2E]">
                                <span className="material-symbols-outlined">local_shipping</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#1A1A1A] mb-2">Installation Support</h3>
                                <p className="text-body-md text-[#44474A] leading-relaxed">We provide professional delivery, anchoring and installation support across India.</p>
                            </div>
                        </div>
                        <div className="p-8 bg-[#F2F0EB] border border-[#DCDAD5] rounded-lg flex items-start space-x-6">
                            <div className="flex-shrink-0 w-12 h-12 bg-[#2C5F2E]/10 rounded-full flex items-center justify-center text-[#2C5F2E]">
                                <span className="material-symbols-outlined">verified_user</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#1A1A1A] mb-2">2-Year Comprehensive Warranty</h3>
                                <p className="text-body-md text-[#44474A] leading-relaxed">Urbanland stands behind its products with a comprehensive 2-year guarantee on structure, coating, and components.</p>
                            </div>
                        </div>
                    </div>

                    {/* FAQ SECTION */}
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="font-headline-lg text-[32px] text-[#1A1A1A] mb-4">Frequently Asked Questions</h2>
                            <div className="w-24 h-1 bg-[#C9A84C] mx-auto"></div>
                        </div>
                        <div className="space-y-4">
                            {[{"q":"What wood species are available?","a":"We primarily use WPC (Teak/Charcoal), Robinia, FSC-certified Jatoba, and high-density plantation wood."},{"q":"How is the metal protected from rusting?","a":"All steel parts undergo hot-dip galvanization and are coated with premium Akzonobel architectural powder paints."},{"q":"Is maintenance required for the wood?","a":"WPC requires zero maintenance. Natural timbers benefit from an annual protective oil coat to maintain their rich color."},{"q":"What is the lead time?","a":"Standard lead times range from 25 to 35 days."},{"q":"Do you provide custom design services?","a":"Yes. We work closely with architects and developers to create bespoke site furniture concepts."}].map((faq, idx) => (
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
                title="Ready to Specify Metal Wooden Furniture for Your Project?"
                primaryLink="/get-quote/?product=metal-wooden-furniture"
            />
        </div>
    );
};

export default MetalWoodenFurniturePage;
