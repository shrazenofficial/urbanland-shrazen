import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

// Asset imports
import busImg from "../../assets/Bus_Shelters.png";
import busJpeg from "../../assets/Bus_Shelters.jpeg";
import benchImg from "../../assets/Bench_Planter.png";
import carImg from "../../assets/Car_Shelter.png";
import wickerImg from "../../assets/Wicker_Furniture.png";

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

const BusSheltersPage = () => {
    const [activeTab, setActiveTab] = useState("standard");
    const [faqOpen, setFaqOpen] = useState(Array(5).fill(false));
    const [showStickyHeader, setShowStickyHeader] = useState(false);
    
    // Exit popup state
    const [exitPopupVisible, setExitPopupVisible] = useState(false);
    const [exitPopupSubmitted, setExitPopupSubmitted] = useState(false);
    const [emailInput, setEmailInput] = useState("");

    // GA4 helper function with console logging fallback
    const trackEvent = (eventName, value = "") => {
        if (window.gtag) {
            window.gtag("event", eventName, {
                event_category: "product_page",
                event_label: "bus_shelters",
                value: value
            });
        }
        console.log(`[GA4 Event] ${eventName} | Category: product_page | Label: bus_shelters | Value: ${value}`);
    };

    useEffect(() => {
        // Dynamic SEO Metadata Configuration
        updatePageSEO({
            title: "Premium Bus Shelters Manufacturer India | MS, SS, Aluminium | Urbanland",
            description: "Custom-designed bus shelters for smart cities, townships & municipalities. MS/SS/Aluminium. 2-Year guarantee. Fast delivery. Get quote for bulk orders.",
            og_type: "product",
            og_image: busImg
        });

        // Scroll listener for sticky header and depth tracking
        const trackedDepths = { 25: false, 50: false, 75: false, 100: false };
        const handleScroll = () => {
            // Sticky Header check
            if (window.scrollY > 300) {
                setShowStickyHeader(true);
            } else {
                setShowStickyHeader(false);
            }

            // Scroll depth check
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            if (docHeight > 0) {
                const scrollPercent = Math.round((scrollTop / docHeight) * 100);
                [25, 50, 75, 100].forEach((depth) => {
                    if (scrollPercent >= depth && !trackedDepths[depth]) {
                        trackedDepths[depth] = true;
                        trackEvent("scroll_depth", `${depth}%`);
                    }
                });
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Inject JSON-LD Schema.org FAQ markup dynamically into head
        const schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Which material should I choose for coastal areas?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Stainless steel 304/316 grade. MS will rust in 2-3 years despite coating. SS requires minimal maintenance and is more economical long-term (saves repainting costs)."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long is the lead time?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Standard 25-30 days | Premium 30-35 days | Super Premium 35-45 days from order confirmation. Rush orders (15-20 days) available at +15% surcharge."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you customize dimensions?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We build custom sizes from 3500mm to 7000mm length. Customization adds 5-7 days to lead time. Email your site plans for a custom quote."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you provide installation?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, included for sites within 50km of Vasai Virar. We dispatch a trained team for foundation bolting, assembly, leveling, and commissioning."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What if my shelter is damaged in an accident?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The 2-year warranty covers manufacturing defects, not accidents or vandalism. We recommend installing bollards around high-traffic shelters to prevent vehicle collisions."
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

        // Exit intent detection
        const sessionKey = "urbanland_exit_intent_bus_shelters";
        const isShown = sessionStorage.getItem(sessionKey);

        if (!isShown) {
            // Trigger 1: Mouse leaves viewport
            const handleMouseLeave = (e) => {
                if (e.clientY < 20) {
                    triggerPopup();
                }
            };

            // Trigger 2: 45-second timer
            const timer = setTimeout(() => {
                triggerPopup();
            }, 45000);

            const triggerPopup = () => {
                setExitPopupVisible(true);
                sessionStorage.setItem(sessionKey, "true");
                document.removeEventListener("mouseleave", handleMouseLeave);
                clearTimeout(timer);
            };

            document.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                cleanPageSEO();
                window.removeEventListener("scroll", handleScroll);
                const existingScript = document.getElementById(scriptId);
                if (existingScript) existingScript.remove();
                document.removeEventListener("mouseleave", handleMouseLeave);
                clearTimeout(timer);
            };
        }

        return () => {
            cleanPageSEO();
            window.removeEventListener("scroll", handleScroll);
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
        trackEvent("faq_click", `faq_${idx + 1}`);
    };

    // Shared Tab Rendering Helpers to keep layouts completely synchronized
    const renderStandardTab = () => (
        <div className="animate-fadeIn">
            <div className="mb-6">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#C9A84C] bg-[#C9A84C]/10 px-3 py-1.5 rounded-full select-none">Value Option</span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-[#1A1A1A] mt-3">Standard Bus Shelter — Cost-Effective & Durable</h3>
                <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#2D2D2D]/60 mt-1">Best for: Inland municipalities, township amenities, secondary transit routes.</h4>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-t border-[#2D2D2D]/10 pt-8">
                <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-4 select-none">— Key Features</h4>
                    <ul className="flex flex-col gap-3 text-xs sm:text-sm font-semibold text-[#1A1A1A]/85">
                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> Frame: Mild Steel with Akzonobel PU powder coating</li>
                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> Roof: Galvanized sheet or polycarbonate (ACP)</li>
                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> Seating: MS bench with anti-slip surface</li>
                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> Capacity: 8-12 standing + 3-4 seated</li>
                    </ul>

                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mt-10 mb-4 select-none">— Ideal For</h4>
                    <p className="text-xs sm:text-sm text-[#2D2D2D]/75 font-semibold leading-relaxed">
                        Smart City Phase-1/2 projects, municipal networks, budget-conscious buyers
                    </p>
                </div>

                {/* Visual Image Section Column */}
                <div className="lg:col-span-1 h-[280px] lg:h-auto rounded-[2rem] bg-black/5 overflow-hidden flex items-center justify-center p-4 border border-black/[0.04] shrink-0">
                    <img 
                        src={busImg} 
                        alt="Standard mild steel bus shelter variant by Urbanland" 
                        className="w-full h-full object-cover rounded-2xl" 
                    />
                </div>

                <div className="bg-[#F7F4EF] rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between gap-6">
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-black/60 mb-4 select-none">— Specifications Matrix</h4>
                        <div className="w-full border border-black/[0.04] rounded-2xl bg-white p-4 sm:p-6 overflow-hidden shadow-sm">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-4 text-xs font-semibold text-[#1A1A1A]">
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Dimensions</span>
                                    <span className="font-bold">4500L × 1800W × 2500H mm</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Weight</span>
                                    <span className="font-bold">1200-1400 kg</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Lead Time</span>
                                    <span className="font-bold">25-30 days</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Annual Maintenance</span>
                                    <span className="font-bold">₹3,000-5,000</span>
                                </div>
                                <div className="col-span-2 border-t border-black/[0.04] pt-3 mt-1">
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Lifespan</span>
                                    <span className="font-bold text-[#2C5F2E]">8-10 years</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link
                        to="/get-quote/?variant=standard-bus-shelter"
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
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-[#1A1A1A] mt-3">Premium Bus Shelter — Stainless Steel, Zero Maintenance</h3>
                <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#2D2D2D]/60 mt-1">Best for: Coastal areas, high-traffic zones, premium real estate (Lodha, Oberoi, Adani).</h4>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-t border-[#2D2D2D]/10 pt-8">
                <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-4 select-none">— Key Features</h4>
                    <ul className="flex flex-col gap-3 text-xs sm:text-sm font-semibold text-[#1A1A1A]/85">
                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> Frame: Stainless Steel (304/316 grade) with brushed or mirror finish</li>
                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> Roof: Polycarbonate or toughened glass panels</li>
                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> Seating: SS bench with ergonomic backrest</li>
                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> Side Panels: Optional tempered glass</li>
                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> Lighting: Optional solar-powered LED</li>
                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> Capacity: 10-15 standing + 4-5 seated</li>
                    </ul>

                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mt-10 mb-4 select-none">— Ideal For</h4>
                    <p className="text-xs sm:text-sm text-[#2D2D2D]/75 font-semibold leading-relaxed">
                        Coastal smart cities, premium townships, 5-star resorts, high-traffic CBD zones
                    </p>
                </div>

                {/* Visual Image Section Column */}
                <div className="lg:col-span-1 h-[280px] lg:h-auto rounded-[2rem] bg-black/5 overflow-hidden flex items-center justify-center p-4 border border-black/[0.04] shrink-0">
                    <img 
                        src={busJpeg} 
                        alt="Premium stainless steel bus shelter variant by Urbanland" 
                        className="w-full h-full object-cover rounded-2xl" 
                    />
                </div>

                <div className="bg-[#F7F4EF] rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between gap-6">
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-black/60 mb-4 select-none">— Specifications Matrix</h4>
                        <div className="w-full border border-black/[0.04] rounded-2xl bg-white p-4 sm:p-6 overflow-hidden shadow-sm">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-4 text-xs font-semibold text-[#1A1A1A]">
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Dimensions</span>
                                    <span className="font-bold">4500L × 1800W × 2500H mm (customizable up to 6000mm)</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Weight</span>
                                    <span className="font-bold">1600-2000 kg</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Lead Time</span>
                                    <span className="font-bold">30-35 days</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Annual Maintenance</span>
                                    <span className="font-bold">₹500-1,000 (minimal)</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Lifespan</span>
                                    <span className="font-bold text-[#2C5F2E]">15-20+ years</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Corrosion Rating</span>
                                    <span className="font-bold text-[#2C5F2E]">Indefinite coastal performance</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link
                        to="/get-quote/?variant=premium-bus-shelter"
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
                <span className="text-[9px] font-black uppercase tracking-widest text-[#C9A84C] bg-[#C9A84C]/10 px-3 py-1.5 rounded-full select-none">Smart City Ready</span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-[#1A1A1A] mt-3">Super Premium Bus Shelter — Smart City Ready + IoT</h3>
                <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#2D2D2D]/60 mt-1">Best for: Smart City Mission Phase-II, premium developments, IoT-enabled infrastructure.</h4>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-t border-[#2D2D2D]/10 pt-8">
                <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-4 select-none">— Key Features</h4>
                    <ul className="flex flex-col gap-3 text-xs sm:text-sm font-semibold text-[#1A1A1A]/85">
                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> Frame: Stainless Steel 304/316 (premium grade, mirror-polished)</li>
                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> Roof: Toughened glass with integrated solar panel mounts</li>
                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> Lighting: Solar-powered LED system with motion sensor + dimming</li>
                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> Display: Pre-wired for 49-55" digital information signage</li>
                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> Charging: Solar-powered USB ports (Type-A & Type-C)</li>
                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> Smart Systems: Pre-wired for IoT sensors (passenger counter, air quality monitor, temperature)</li>
                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">▸</span> Capacity: 12-18 standing + 5-6 seated</li>
                    </ul>

                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mt-10 mb-4 select-none">— Ideal For</h4>
                    <p className="text-xs sm:text-sm text-[#2D2D2D]/75 font-semibold leading-relaxed">
                        Smart City Phase-II projects, mega-townships, airport/metro feeders, tech parks
                    </p>
                </div>

                {/* Visual Image Section Column */}
                <div className="lg:col-span-1 h-[280px] lg:h-auto rounded-[2rem] bg-black/5 overflow-hidden flex items-center justify-center p-4 border border-black/[0.04] shrink-0">
                    <img 
                        src={carImg} 
                        alt="Super premium Smart City ready IoT bus shelter variant by Urbanland" 
                        className="w-full h-full object-cover rounded-2xl" 
                    />
                </div>

                <div className="bg-[#F7F4EF] rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between gap-6">
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-black/60 mb-4 select-none">— Specifications Matrix</h4>
                        <div className="w-full border border-black/[0.04] rounded-2xl bg-white p-4 sm:p-6 overflow-hidden shadow-sm">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-4 text-xs font-semibold text-[#1A1A1A]">
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Dimensions</span>
                                    <span className="font-bold">4500L × 1800W × 2500H mm (extendable to 7000mm)</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Weight</span>
                                    <span className="font-bold">2200-2800 kg (with solar infrastructure)</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Lead Time</span>
                                    <span className="font-bold">35-45 days</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Annual Maintenance</span>
                                    <span className="font-bold">₹1,500-2,500</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Solar Array</span>
                                    <span className="font-bold">400W (optional) for off-grid power</span>
                                </div>
                                <div className="border-t border-black/[0.04] col-span-2 pt-3 mt-1">
                                    <span className="block text-[8px] uppercase tracking-wider text-black/45 mb-0.5">Lifespan</span>
                                    <span className="font-bold text-[#2C5F2E]">20+ years indefinite</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link
                        to="/get-quote/?variant=super-premium-bus-shelter"
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
        <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-28">
            
            {/* STICKY HEADER ON SCROLL (Desktop only) */}
            <div className={`fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-[#2D2D2D]/10 py-4 px-8 lg:px-16 z-[99] flex justify-between items-center transition-all duration-500 shadow-md ${showStickyHeader ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}>
                <div className="flex items-center gap-3">
                    <span className="text-[#2C5F2E] font-black tracking-tighter text-lg">URBANLAND®</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#2D2D2D]/50 hidden sm:inline">Bus Shelters</span>
                </div>
                <Link
                    to="/get-quote/?product=bus-shelters"
                    onClick={() => trackEvent("product_page_cta_primary", "bus_shelter_quote")}
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
                    <span className="text-[#2C5F2E]">Bus Shelters</span>
                </nav>
            </div>

            {/* SECTION 0 — HERO (Above Fold: 60/40 Split Desktop, Stacked Mobile) */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-20">
                <div className="w-full grid grid-cols-1 md:grid-cols-12 bg-[#1E1C1B] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5 relative min-h-[70vh] md:min-h-[75vh]">
                    {/* Left Side: Text panel (60% split on desktop) */}
                    <div className="md:col-span-7 p-8 md:p-16 flex flex-col justify-center text-white z-10 relative">
                        <div className="flex items-center gap-2 select-none mb-6">
                            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest bg-[#C9A84C] text-[#232120] px-3.5 py-1.5 rounded-full">
                                Infrastructure Spotlight
                            </span>
                            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest bg-[#2C5F2E] text-white px-3.5 py-1.5 rounded-full border border-white/10">
                                ISO 9001:2015
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.05] mb-6">
                            Premium Bus Shelters Manufactured in India — Custom Design for Smart Cities & Municipalities
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed mb-8">
                            Weather-resistant bus shelters engineered for India's climate. Available in mild steel, stainless steel, and aluminium. Backed by India's only 2-year comprehensive guarantee.
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
                                to="/get-quote/?product=bus-shelters"
                                onClick={() => trackEvent("product_page_cta_primary", "bus_shelter_quote")}
                                className="px-8 py-4 bg-[#C9A84C] text-[#232120] hover:bg-white hover:text-black rounded-full font-black uppercase tracking-wider text-xs text-center transition-all shadow-xl hover:scale-[1.02] transform duration-300 w-full sm:w-auto"
                            >
                                Request Custom Quote →
                            </Link>

                            <a
                                href="#specifications"
                                onClick={() => trackEvent("product_page_cta_secondary", "bus_shelter_spec_download")}
                                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full font-bold uppercase tracking-wider text-xs text-center transition-all backdrop-blur-sm w-full sm:w-auto"
                            >
                                Download Specifications ↓
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Photo Showcase (40% split on desktop) */}
                    <div className="md:col-span-5 relative w-full h-[40vh] md:h-auto overflow-hidden">
                        <img 
                            src={busImg} 
                            alt="Premium custom bus shelter installed in Indian smart city project by Urbanland Products"
                            className="w-full h-full object-cover object-center scale-100 md:scale-103 opacity-90 transition-transform duration-[20s] hover:scale-105"
                        />
                        {/* 30% Dark readability overlay */}
                        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
                    </div>
                </div>
            </section>

            {/* SECTION 1 — WHY CHOOSE URBANLAND */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
                <div className="text-left mb-16 max-w-5xl">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— CHOOSE DURABILITY</span>
                    <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none text-[#1A1A1A]">
                        Why Developers, Municipalities & Architects Choose Urbanland
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-[#2D2D2D]/75 leading-relaxed mt-6">
                        When you specify a bus shelter for infrastructure projects, you need durability, on-time delivery, and warranty protection. Urbanland is the only Indian bus shelter manufacturer offering a comprehensive 2-year guarantee on all components—proven across 50+ major projects in 15+ cities.
                    </p>
                </div>

                <h3 className="text-sm font-black uppercase tracking-widest text-[#C9A84C] mb-8">— 4 Core Reasons</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 select-none">
                    {/* BENEFIT CARD 1 */}
                    <div className="bg-white rounded-[2rem] border border-black/[0.03] p-8 md:p-10 shadow-sm hover:bg-[#F7F4EF]/55 hover:shadow-lg transition-all duration-300 flex flex-col gap-5 group">
                        <div className="w-14 h-14 bg-[#2C5F2E]/10 rounded-full flex justify-center items-center text-[#2C5F2E]">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-black uppercase text-[#1A1A1A]">Durability That Lasts</h4>
                        <p className="text-xs sm:text-sm text-[#2D2D2D]/70 leading-relaxed">
                            Built with corrosion-resistant materials and multi-layer Akzonobel PU powder coating. Performs reliably in coastal, high-altitude, and pollution-heavy zones.
                        </p>
                    </div>

                    {/* BENEFIT CARD 2 */}
                    <div className="bg-white rounded-[2rem] border border-black/[0.03] p-8 md:p-10 shadow-sm hover:bg-[#F7F4EF]/55 hover:shadow-lg transition-all duration-300 flex flex-col gap-5 group">
                        <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex justify-center items-center text-[#C9A84C]">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-black uppercase text-[#1A1A1A]">India's Only 2-Year Guarantee</h4>
                        <p className="text-xs sm:text-sm text-[#2D2D2D]/70 leading-relaxed">
                            Full coverage: frame, roof materials, structural integrity. Manufacturing defects are covered completely—no other Indian manufacturer offers this commitment.
                        </p>
                    </div>

                    {/* BENEFIT CARD 3 */}
                    <div className="bg-white rounded-[2rem] border border-black/[0.03] p-8 md:p-10 shadow-sm hover:bg-[#F7F4EF]/55 hover:shadow-lg transition-all duration-300 flex flex-col gap-5 group">
                        <div className="w-14 h-14 bg-[#2C5F2E]/10 rounded-full flex justify-center items-center text-[#2C5F2E]">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.954.26 1.43l-1.297 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.43l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.991l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-black uppercase text-[#1A1A1A]">Made-to-Order Design Flexibility</h4>
                        <p className="text-xs sm:text-sm text-[#2D2D2D]/70 leading-relaxed">
                            Custom dimensions, material combinations, roof options, and finishes. Designed for your specific site conditions, passenger load, and aesthetic requirements.
                        </p>
                    </div>

                    {/* BENEFIT CARD 4 */}
                    <div className="bg-white rounded-[2rem] border border-black/[0.03] p-8 md:p-10 shadow-sm hover:bg-[#F7F4EF]/55 hover:shadow-lg transition-all duration-300 flex flex-col gap-5 group">
                        <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex justify-center items-center text-[#C9A84C]">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124l-.847-13.485a1.125 1.125 0 00-1.122-1.054H16.35m-9 13.5V9" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-black uppercase text-[#1A1A1A]">Fast Delivery + Installation Support</h4>
                        <p className="text-xs sm:text-sm text-[#2D2D2D]/70 leading-relaxed">
                            Manufacturing in India = faster lead times than imports. We provide installation support, commissioning, and on-schedule project delivery.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 2 — THREE CONFIGURATIONS (VARIANTS IN ONE SECTION) */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
                <div className="text-left mb-12 max-w-4xl">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— SYSTEM SPECS MATRIX</span>
                    <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none text-[#1A1A1A]">
                        Three Bus Shelter Configurations — Choose What Fits Your Project
                    </h2>
                    <p className="text-sm sm:text-base text-[#2D2D2D]/75 mt-4">
                        All Urbanland shelters are built on proven base specs but fully customizable. All include 2-year guarantee.
                    </p>
                </div>

                {/* DESKTOP TABS TOGGLE (Visible on Desktop only) */}
                <div className="hidden md:flex flex-row gap-2 border-b border-[#2D2D2D]/15 pb-4 mb-12 select-none">
                    <button
                        onClick={() => {
                            setActiveTab("standard");
                            trackEvent("variant_selection", "standard");
                        }}
                        className={`flex-1 text-center py-4 px-6 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                            activeTab === "standard" 
                                ? "bg-[#2C5F2E] text-white shadow-md"
                                : "bg-white text-[#1A1A1A] hover:bg-[#EAE5DB]/40 border border-black/[0.04]"
                        }`}
                    >
                        Standard Bus Shelter
                    </button>
                    <button
                        onClick={() => {
                            setActiveTab("premium");
                            trackEvent("variant_selection", "premium");
                        }}
                        className={`flex-1 text-center py-4 px-6 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                            activeTab === "premium" 
                                ? "bg-[#2C5F2E] text-white shadow-md"
                                : "bg-white text-[#1A1A1A] hover:bg-[#EAE5DB]/40 border border-black/[0.04]"
                        }`}
                    >
                        Premium Bus Shelter
                    </button>
                    <button
                        onClick={() => {
                            setActiveTab("super");
                            trackEvent("variant_selection", "super_premium");
                        }}
                        className={`flex-1 text-center py-4 px-6 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                            activeTab === "super" 
                                ? "bg-[#2C5F2E] text-white shadow-md"
                                : "bg-white text-[#1A1A1A] hover:bg-[#EAE5DB]/40 border border-black/[0.04]"
                        }`}
                    >
                        Super Premium Bus Shelter
                    </button>
                </div>

                {/* DESKTOP CONTENT BLOCK (Visible on Desktop only) */}
                <div className="hidden md:block bg-white rounded-[2.5rem] border border-black/[0.03] p-8 md:p-14 shadow-sm">
                    {activeTab === "standard" && renderStandardTab()}
                    {activeTab === "premium" && renderPremiumTab()}
                    {activeTab === "super" && renderSuperPremiumTab()}
                </div>

                {/* MOBILE ACCORDIONS STACK (Visible on Mobile only) */}
                <div className="flex md:hidden flex-col gap-4">
                    {/* ACCORDION 1: STANDARD (Open by default) */}
                    <div className="bg-white rounded-3xl border border-black/[0.03] overflow-hidden shadow-sm">
                        <button
                            onClick={() => {
                                const next = activeTab === "standard" ? null : "standard";
                                setActiveTab(next);
                                if (next) trackEvent("variant_selection", "standard");
                            }}
                            className="w-full text-left p-6 flex justify-between items-center font-black uppercase tracking-wider text-sm text-[#1A1A1A] hover:bg-[#F7F4EF]/35"
                        >
                            <span>Standard Bus Shelter</span>
                            <span className="text-[#2C5F2E] text-xl font-bold font-mono">
                                {activeTab === "standard" ? "−" : "+"}
                            </span>
                        </button>
                        {activeTab === "standard" && (
                            <div className="p-6 border-t border-[#2D2D2D]/5 bg-white">
                                {renderStandardTab()}
                            </div>
                        )}
                    </div>

                    {/* ACCORDION 2: PREMIUM */}
                    <div className="bg-white rounded-3xl border border-black/[0.03] overflow-hidden shadow-sm">
                        <button
                            onClick={() => {
                                const next = activeTab === "premium" ? null : "premium";
                                setActiveTab(next);
                                if (next) trackEvent("variant_selection", "premium");
                            }}
                            className="w-full text-left p-6 flex justify-between items-center font-black uppercase tracking-wider text-sm text-[#1A1A1A] hover:bg-[#F7F4EF]/35"
                        >
                            <span>Premium Bus Shelter</span>
                            <span className="text-[#2C5F2E] text-xl font-bold font-mono">
                                {activeTab === "premium" ? "−" : "+"}
                            </span>
                        </button>
                        {activeTab === "premium" && (
                            <div className="p-6 border-t border-[#2D2D2D]/5 bg-white">
                                {renderPremiumTab()}
                            </div>
                        )}
                    </div>

                    {/* ACCORDION 3: SUPER PREMIUM */}
                    <div className="bg-white rounded-3xl border border-black/[0.03] overflow-hidden shadow-sm">
                        <button
                            onClick={() => {
                                const next = activeTab === "super" ? null : "super";
                                setActiveTab(next);
                                if (next) trackEvent("variant_selection", "super_premium");
                            }}
                            className="w-full text-left p-6 flex justify-between items-center font-black uppercase tracking-wider text-sm text-[#1A1A1A] hover:bg-[#F7F4EF]/35"
                        >
                            <span>Super Premium Bus Shelter</span>
                            <span className="text-[#2C5F2E] text-xl font-bold font-mono">
                                {activeTab === "super" ? "−" : "+"}
                            </span>
                        </button>
                        {activeTab === "super" && (
                            <div className="p-6 border-t border-[#2D2D2D]/5 bg-white">
                                {renderSuperPremiumTab()}
                            </div>
                        )}
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
                                    <td className="p-5 font-bold uppercase tracking-wider bg-[#2C5F2E]/5">Material</td>
                                    <td className="p-5">Mild Steel</td>
                                    <td className="p-5">Stainless Steel</td>
                                    <td className="p-5">SS (Premium Grade)</td>
                                </tr>
                                <tr className="border-b border-[#2D2D2D]/10 hover:bg-[#F7F4EF]/45">
                                    <td className="p-5 font-bold uppercase tracking-wider bg-[#2C5F2E]/5">Lifespan</td>
                                    <td className="p-5">8-10 years</td>
                                    <td className="p-5">15-20+ years</td>
                                    <td className="p-5">20+ years indefinite</td>
                                </tr>
                                <tr className="border-b border-[#2D2D2D]/10 hover:bg-[#F7F4EF]/45">
                                    <td className="p-5 font-bold uppercase tracking-wider bg-[#2C5F2E]/5">Best For</td>
                                    <td className="p-5">Inland municipalities</td>
                                    <td className="p-5">Coastal / Premium projects</td>
                                    <td className="p-5">Smart Cities / IoT</td>
                                </tr>
                                <tr className="hover:bg-[#F7F4EF]/45">
                                    <td className="p-5 font-bold uppercase tracking-wider bg-[#2C5F2E]/5">Annual Maintenance</td>
                                    <td className="p-5">₹3-5K</td>
                                    <td className="p-5">₹500-1K</td>
                                    <td className="p-5">₹1.5-2.5K</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="block md:hidden text-[10px] text-center text-black/45 mt-2 animate-pulse font-bold">
                        Swipe horizontally to view full comparison →
                    </div>
                </div>
            </section>

            {/* SECTION 3 — MATERIAL GUIDE + SPECS */}
            <section id="specifications" className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
                <div className="text-left mb-12">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— MATERIAL SELECTION GUIDE</span>
                    <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none text-[#1A1A1A]">
                        Materials & Customization Guide
                    </h2>
                    <p className="text-sm text-[#2D2D2D]/75 mt-4 leading-relaxed max-w-4xl">
                        Choose the right material based on climate, maintenance capacity, and budget. All variants can be customized for dimensions, roof materials, finishes, and add-ons.
                    </p>
                </div>

                {/* Material Comparison Table */}
                <h3 className="text-sm font-black uppercase tracking-widest text-[#C9A84C] mb-6">— Material Comparison</h3>
                <div className="w-full overflow-x-auto border border-black/[0.04] rounded-3xl bg-white shadow-sm mb-4 scrollbar-thin">
                    <table className="w-full text-left border-collapse min-w-[650px]">
                        <thead>
                            <tr className="bg-[#2C5F2E] text-white select-none text-[10px] sm:text-xs font-black uppercase tracking-wider">
                                <th className="p-5 border-b border-[#2D2D2D]/10">Material</th>
                                <th className="p-5 border-b border-[#2D2D2D]/10">Lifespan</th>
                                <th className="p-5 border-b border-[#2D2D2D]/10">Maintenance</th>
                                <th className="p-5 border-b border-[#2D2D2D]/10">Best For</th>
                                <th className="p-5 border-b border-[#2D2D2D]/10">Cost vs MS</th>
                            </tr>
                        </thead>
                        <tbody className="text-xs font-semibold text-[#1A1A1A]/85">
                            <tr className="border-b border-[#2D2D2D]/10 hover:bg-[#F7F4EF]/45">
                                <td className="p-5 font-bold uppercase tracking-wider">Mild Steel (MS)</td>
                                <td className="p-5">8-10 years</td>
                                <td className="p-5">Annual paint touch-ups</td>
                                <td className="p-5">Inland cities</td>
                                <td className="p-5">Base price (1×)</td>
                            </tr>
                            <tr className="border-b border-[#2D2D2D]/10 hover:bg-[#F7F4EF]/45">
                                <td className="p-5 font-bold uppercase tracking-wider">Stainless Steel 304/316</td>
                                <td className="p-5">15-20+ years</td>
                                <td className="p-5">Minimal (cleaning only)</td>
                                <td className="p-5">Coastal, premium projects</td>
                                <td className="p-5">2.5-3× MS cost</td>
                            </tr>
                            <tr className="hover:bg-[#F7F4EF]/45">
                                <td className="p-5 font-bold uppercase tracking-wider">Aluminium</td>
                                <td className="p-5">12-15 years</td>
                                <td className="p-5">Periodic anodizing</td>
                                <td className="p-5">Remote installations</td>
                                <td className="p-5">1.8-2× MS cost</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="block md:hidden text-[10px] text-center text-black/45 mb-12 animate-pulse font-bold">
                    Swipe horizontally to view full comparison →
                </div>

                {/* Which Material paragraphs */}
                <h3 className="text-sm font-black uppercase tracking-widest text-[#C9A84C] mb-6">— Which Material Should You Choose?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.03] shadow-sm flex flex-col justify-between">
                        <div>
                            <h4 className="font-bold text-xs uppercase tracking-widest text-[#2C5F2E] mb-3">Coastal Environments</h4>
                            <p className="text-xs sm:text-sm text-[#2D2D2D]/75 leading-relaxed">
                                Coastal environments: Stainless Steel (304 or 316). MS will rust in 2-3 years despite coating. SS requires virtually no maintenance and is more economical long-term (no repainting costs).
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.03] shadow-sm flex flex-col justify-between">
                        <div>
                            <h4 className="font-bold text-xs uppercase tracking-widest text-[#2C5F2E] mb-3">Inland Locations</h4>
                            <p className="text-xs sm:text-sm text-[#2D2D2D]/75 leading-relaxed">
                                Inland municipalities: Mild Steel is cost-effective. Annual paint touch-ups maintain appearance and extend lifespan to 8-10 years.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.03] shadow-sm flex flex-col justify-between">
                        <div>
                            <h4 className="font-bold text-xs uppercase tracking-widest text-[#2C5F2E] mb-3">Long-term Lifecycle</h4>
                            <p className="text-xs sm:text-sm text-[#2D2D2D]/75 leading-relaxed">
                                Long-term analysis: While SS costs 2.5-3× more upfront, it saves 5-10 years of repainting. For 15-year lifecycle, stainless steel is more economical.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Customization Options */}
                <h3 className="text-sm font-black uppercase tracking-widest text-[#C9A84C] mb-6">— Customization Options Available</h3>
                <div className="bg-white rounded-[2.5rem] border border-black/[0.03] p-8 md:p-12 mb-12 shadow-sm">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-bold text-[#1A1A1A]/85">
                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">✦</span> Dimensions: Custom lengths 3500-7000mm</li>
                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">✦</span> Frame materials: MS, SS 304, SS 316, Aluminium</li>
                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">✦</span> Roof options: Galvanized sheet, polycarbonate, toughened glass, recycled wood</li>
                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">✦</span> Finishes: Standard colors, 50+ RAL colors, mirror polish, brushed</li>
                        <li className="flex items-center gap-3"><span className="text-[#C9A84C]">✦</span> Add-ons: LED lighting, solar panels, digital displays, IoT sensor pre-wiring, anti-graffiti coating</li>
                    </ul>
                </div>

                {/* Download CTA */}
                <div className="flex justify-center select-none">
                    <Link
                        to="/resources/downloads"
                        onClick={() => trackEvent("spec_sheet_download", "bus_shelters")}
                        className="px-8 py-4 bg-white border border-black/[0.05] text-black hover:bg-[#2C5F2E] hover:text-white rounded-full font-black uppercase tracking-wider text-xs transition-all shadow-sm"
                    >
                        ↓ Download Complete Specifications PDF
                    </Link>
                </div>
            </section>

            {/* SECTION 4 — REAL PROJECTS (Social Proof) */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
                <div className="text-left mb-16 max-w-4xl">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— INFRASTRUCTURE PROJECTS</span>
                    <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none text-[#1A1A1A]">
                        Real Bus Shelters. Real Results. Across India.
                    </h2>
                    <p className="text-sm text-[#2D2D2D]/75 mt-4 leading-relaxed">
                        Proven across 50+ major infrastructure projects, serving 15+ cities, with 2000+ operational shelters. Here are three project case studies.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 select-none mb-12">
                    {/* PROJECT CARD 1 */}
                    <div className="bg-white rounded-[2.5rem] border border-black/[0.03] overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.01] transform transition-all duration-300 flex flex-col justify-between group">
                        <div className="w-full h-48 bg-black/5 overflow-hidden relative">
                            <img src={busImg} alt="Urbanland Standard Bus Shelters installed in smart city municipal project" className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" loading="lazy" />
                            <div className="absolute top-4 right-4 bg-[#2C5F2E] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                                Standard Case
                            </div>
                        </div>
                        <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                            <div>
                                <span className="text-[9px] font-black uppercase tracking-wider text-[#C9A84C]">Smart City Authority — Nagpur</span>
                                <h3 className="text-lg font-black uppercase text-[#1A1A1A] leading-tight mt-1">Smart City Municipal Project — 120 Shelters</h3>
                                <div className="text-[10px] font-bold text-[#2C5F2E] my-2">Timeline: 8 months</div>
                                <p className="text-xs text-[#2D2D2D]/70 leading-relaxed">
                                    A metropolitan city selected Urbanland for 120 bus stops across its transit network. Standard configuration (MS frame, galvanized roof) met municipal budget while ensuring durability. Urbanland coordinated bulk manufacturing, logistics, and staggered installation. Result: On-time delivery, zero disruptions.
                                </p>
                            </div>
                            <Link
                                to="/projects/smart-city-municipal/"
                                onClick={() => trackEvent("case_study_click", "smart_city_municipal")}
                                className="text-[10px] font-black uppercase tracking-wider text-[#2C5F2E] hover:text-black transition-colors block mt-4 border-b border-[#2C5F2E]/20 pb-0.5 w-fit font-bold"
                            >
                                View Case Study →
                            </Link>
                        </div>
                    </div>

                    {/* PROJECT CARD 2 */}
                    <div className="bg-white rounded-[2.5rem] border border-black/[0.03] overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.01] transform transition-all duration-300 flex flex-col justify-between group">
                        <div className="w-full h-48 bg-black/5 overflow-hidden relative">
                            <img src={benchImg} alt="Premium Urbanland stainless steel bus shelter in Lodha residential township" className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" loading="lazy" />
                            <div className="absolute top-4 right-4 bg-[#2C5F2E] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                                Lodha Group
                            </div>
                        </div>
                        <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                            <div>
                                <span className="text-[9px] font-black uppercase tracking-wider text-[#C9A84C]">Lodha Group — Maharashtra</span>
                                <h3 className="text-lg font-black uppercase text-[#1A1A1A] leading-tight mt-1">Premium Township — 85 Stainless Steel Shelters</h3>
                                <div className="text-[10px] font-bold text-[#2C5F2E] my-2">Timeline: 6 months</div>
                                <p className="text-xs text-[#2D2D2D]/70 leading-relaxed">
                                    Lodha partnered with Urbanland for 85 Premium SS shelters custom-designed with mirror-polished finish. Design consistency across 3 townships. Zero maintenance needed 18+ months post-installation—critical for resident satisfaction. Custom design integration with township aesthetics.
                                </p>
                            </div>
                            <Link
                                to="/projects/lodha-group-bus-shelters/"
                                onClick={() => trackEvent("case_study_click", "lodha_township")}
                                className="text-[10px] font-black uppercase tracking-wider text-[#2C5F2E] hover:text-black transition-colors block mt-4 border-b border-[#2C5F2E]/20 pb-0.5 w-fit font-bold"
                            >
                                View Case Study →
                            </Link>
                        </div>
                    </div>

                    {/* PROJECT CARD 3 */}
                    <div className="bg-white rounded-[2.5rem] border border-black/[0.03] overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.01] transform transition-all duration-300 flex flex-col justify-between group">
                        <div className="w-full h-48 bg-black/5 overflow-hidden relative">
                            <img src={carImg} alt="Coastal-resistant stainless steel bus shelter in smart city waterfront project" className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" loading="lazy" />
                            <div className="absolute top-4 right-4 bg-[#2C5F2E] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                                Goa Waterfront
                            </div>
                        </div>
                        <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                            <div>
                                <span className="text-[9px] font-black uppercase tracking-wider text-[#C9A84C]">Coastal Development Authority — Goa</span>
                                <h3 className="text-lg font-black uppercase text-[#1A1A1A] leading-tight mt-1">Coastal Smart City — 45 SS Shelters (Zero Degradation)</h3>
                                <div className="text-[10px] font-bold text-[#2C5F2E] my-2">Timeline: 4 months</div>
                                <p className="text-xs text-[#2D2D2D]/70 leading-relaxed">
                                    Coastal city required shelters withstanding salt spray, humidity, and extreme heat. Urbanland specified 316-grade SS (premium vs. standard 304) for superior corrosion resistance. Result: 14 months post-installation, zero rust or degradation observed. Validation of material choice and manufacturing quality.
                                </p>
                            </div>
                            <Link
                                to="/projects/coastal-city-smart-shelters/"
                                onClick={() => trackEvent("case_study_click", "coastal_smart_city")}
                                className="text-[10px] font-black uppercase tracking-wider text-[#2C5F2E] hover:text-black transition-colors block mt-4 border-b border-[#2C5F2E]/20 pb-0.5 w-fit font-bold"
                            >
                                View Case Study →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* STATS BAR */}
                <div className="bg-[#2D2D2D] rounded-[2rem] border border-white/5 p-8 md:p-10 text-white flex flex-col md:flex-row justify-between items-center text-center gap-8 shadow-md select-none">
                    <div className="flex-1">
                        <span className="block text-3xl font-black uppercase tracking-tight text-[#C9A84C]">50+</span>
                        <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-white/55 mt-1 block">Major Infrastructure Projects Delivered</span>
                    </div>
                    <div className="w-[1px] h-8 bg-white/10 md:block hidden" />
                    <div className="flex-1">
                        <span className="block text-3xl font-black uppercase tracking-tight text-[#C9A84C]">15+</span>
                        <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-white/55 mt-1 block">Cities Served</span>
                    </div>
                    <div className="w-[1px] h-8 bg-white/10 md:block hidden" />
                    <div className="flex-1">
                        <span className="block text-3xl font-black uppercase tracking-tight text-[#C9A84C]">2000+</span>
                        <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-white/55 mt-1 block">Operational Bus Shelters</span>
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
                    {/* Installation and Commissioning */}
                    <div>
                        <h3 className="text-xl font-black uppercase text-[#1A1A1A] border-b border-black/10 pb-3">▸ Installation & Commissioning</h3>
                        <p className="text-xs sm:text-sm text-[#2D2D2D]/75 leading-relaxed mt-4">
                            We provide complete installation support. Our trained team handles foundation bolting, assembly, leveling, and commissioning. Installation takes 3-4 days per site (multiple sites can run parallel).
                        </p>
                        <p className="text-xs sm:text-sm text-[#2D2D2D]/75 leading-relaxed mt-4">
                            Cost: Included for sites within 50km of our Vasai Virar facility (Maharashtra). Beyond 50km: nominal logistics charge.
                        </p>
                    </div>

                    {/* 2-Year Comprehensive Warranty */}
                    <div>
                        <h3 className="text-xl font-black uppercase text-[#1A1A1A] border-b border-black/10 pb-3">▸ 2-Year Comprehensive Warranty</h3>
                        <p className="text-xs sm:text-sm text-[#2D2D2D]/75 leading-relaxed mt-4">
                            Covers: Frame structural integrity, roof materials, seating, paint/coating defects, and manufacturing defects. Claim process: Contact with photos → Assessment within 5 days → Approval & repair/replacement (no cost to client).
                        </p>
                        <p className="text-xs sm:text-sm text-[#2D2D2D]/75 leading-relaxed mt-4 font-bold text-black/75">
                            NOT covered: Accidents, vandalism, normal wear, maintenance neglect, or misuse.
                        </p>
                        <p className="text-xs sm:text-sm text-[#2D2D2D]/75 leading-relaxed mt-4">
                            Annual maintenance costs: Standard (MS) ₹3-5K | Premium (SS) ₹500-1K | Super Premium ₹1.5-2.5K per shelter per year. Optional extended warranty: 5-year coverage for +5% of shelter cost.
                        </p>
                    </div>
                </div>

                {/* FAQ section */}
                <h3 className="text-sm font-black uppercase tracking-widest text-[#C9A84C] mb-8">— Frequently Asked Questions</h3>
                <div className="flex flex-col gap-4 max-w-4xl mx-auto">
                    {[
                        {
                            q: "Which material should I choose for coastal areas?",
                            a: "Stainless steel 304/316 grade. MS will rust in 2-3 years despite coating. SS requires minimal maintenance and is more economical long-term (saves repainting costs)."
                        },
                        {
                            q: "How long is the lead time?",
                            a: "Standard 25-30 days | Premium 30-35 days | Super Premium 35-45 days from order confirmation. Rush orders (15-20 days) available at +15% surcharge."
                        },
                        {
                            q: "Can you customize dimensions?",
                            a: "Yes. We build custom sizes from 3500mm to 7000mm length. Customization adds 5-7 days to lead time. Email your site plans for a custom quote."
                        },
                        {
                            q: "Do you provide installation?",
                            a: "Yes, included for sites within 50km of Vasai Virar. We dispatch a trained team for foundation bolting, assembly, leveling, and commissioning."
                        },
                        {
                            q: "What if my shelter is damaged in an accident?",
                            a: "The 2-year warranty covers manufacturing defects, not accidents or vandalism. We recommend installing bollards around high-traffic shelters to prevent vehicle collisions."
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
                            Ready to Partner
                        </span>
                        
                        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight text-[#1A1A1A] max-w-3xl mb-6">
                            Ready to Specify Bus Shelters for Your Project?
                        </h2>

                        <p className="text-sm sm:text-base text-[#2D2D2D]/75 leading-relaxed max-w-2xl mb-10">
                            Get a custom quote, detailed proposal, and technical specifications within 24 hours. Urbanland serves municipalities, developers, and architects nationwide.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 select-none mb-8 w-full sm:w-auto">
                            <Link
                                to="/get-quote/?product=bus-shelters"
                                onClick={() => trackEvent("final_cta_primary", "bus_shelter_quote")}
                                className="px-8 py-4 bg-[#C9A84C] text-[#232120] hover:bg-black hover:text-white rounded-full font-black uppercase tracking-wider text-xs transition-all shadow-lg hover:scale-102 transform duration-300 text-center font-bold"
                            >
                                Request Custom Quote →
                            </Link>

                            <Link
                                to="/resources/downloads"
                                onClick={() => trackEvent("final_cta_secondary", "spec_guide_download")}
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
                            <li>✓ IS 11707:2016 Compliant (Public Transport Shelters)</li>
                            <li>✓ Smart City Mission Guidelines Compliant</li>
                            <li>✓ 50+ completed projects | 2000+ operational shelters</li>
                            <li>✓ Zero defect rate in first 12 months (100+ recent projects)</li>
                            <li>✓ Only Indian manufacturer offering 2-year guarantee on all components</li>
                        </ul>

                        <p className="text-xs font-semibold text-[#2D2D2D]/75">
                            Questions? Contact our team or chat with us on WhatsApp →
                            <span className="block sm:inline mt-2 sm:mt-0 sm:ml-4">
                                <Link to="/contact/" className="text-[#2C5F2E] hover:underline font-bold mr-4">Contact Form</Link>
                                <a 
                                    href="https://wa.me/919999999999?text=Hi%20Urbanland,%20I%20need%20a%20quote%20for%20bus%20shelters%20for%20a%20project.%20Can%20you%20share%20details?" 
                                    onClick={() => trackEvent("whatsapp_click", "final")}
                                    className="text-[#2C5F2E] hover:underline font-bold" 
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    WhatsApp Chat
                                </a>
                            </span>
                        </p>
                    </div>
                </div>
            </section>

            {/* FLOATING WHATSAPP BUTTON (Bottom Right) */}
            <a
                href="https://wa.me/919999999999?text=Hi%20Urbanland,%20I%20need%20a%20quote%20for%20bus%20shelters%20for%20a%20project.%20Can%20you%20share%20details%20and%20pricing?"
                onClick={() => trackEvent("whatsapp_click", "floating")}
                className="fixed bottom-6 right-6 z-[98] w-14 h-14 bg-[#25D366] text-white rounded-full flex justify-center items-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
            >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.993L2 22l5.233-1.371a9.936 9.936 0 004.779 1.218h.004c5.505 0 9.988-4.478 9.989-9.985a9.968 9.968 0 00-2.925-7.064A9.923 9.923 0 0012.012 2zm6.057 14.151c-.249.702-1.441 1.291-1.996 1.346-.5.05-1.15.228-3.411-.707-2.889-1.196-4.757-4.14-4.902-4.333-.143-.192-1.161-1.542-1.161-2.942 0-1.4 1.139-2.087 1.4-2.186.262-.099.525-.149.702-.149.177 0 .35.001.503.008.16.007.375-.062.588.455.22.535.753 1.838.819 1.971.066.133.111.288.022.465-.088.177-.133.288-.265.442-.132.155-.277.346-.395.465-.133.133-.271.277-.117.542.155.265.688 1.139 1.472 1.838.784.7 1.442 1.139 1.706 1.271.265.133.414.111.569-.066.155-.177.663-.774.841-1.039.177-.265.356-.22.589-.133.23.088 1.472.697 1.726.824.254.127.425.188.486.293.061.105.061.602-.188 1.304z" />
                </svg>
            </a>

            {/* EXIT-INTENT POPUP (Desktop only) */}
            {exitPopupVisible && (
                <div className="fixed inset-0 z-[9999] flex justify-center items-center px-4">
                    {/* Backdrop overlay */}
                    <div 
                        className="absolute inset-0 bg-black/65 backdrop-blur-sm transition-opacity duration-300"
                        onClick={() => setExitPopupVisible(false)}
                    />
                    
                    {/* Main Panel */}
                    <div className="relative bg-white text-[#1A1A1A] max-w-lg w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-black/10 z-10 p-8 sm:p-12 transition-all">
                        {/* Close Button X */}
                        <button 
                            onClick={() => setExitPopupVisible(false)}
                            className="absolute top-6 right-6 w-8 h-8 flex justify-center items-center text-black/45 hover:text-black hover:bg-[#F7F4EF] rounded-full transition-colors font-mono text-lg font-bold"
                            aria-label="Close dialog"
                        >
                            ✕
                        </button>

                        {!exitPopupSubmitted ? (
                            <div className="flex flex-col items-center text-center">
                                {/* Icon Badge */}
                                <div className="w-16 h-16 bg-[#2C5F2E]/10 rounded-full flex justify-center items-center text-[#2C5F2E] mb-6">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                </div>

                                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#1A1A1A] mb-3 leading-tight font-bold">
                                    Download the Bus Shelter Buyer's Guide
                                </h3>

                                <p className="text-xs sm:text-sm text-[#2D2D2D]/70 leading-relaxed mb-8">
                                    Get our complete guide to choosing between Standard, Premium & Super Premium shelters. Includes material comparison, cost analysis, and customization options.
                                </p>

                                {/* Email Gating Form */}
                                <form 
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        if (emailInput.trim()) {
                                            setExitPopupSubmitted(true);
                                            trackEvent("exit_intent_popup_submit", emailInput);
                                        }
                                    }}
                                    className="w-full flex flex-col gap-3"
                                >
                                    <input 
                                        type="email" 
                                        required
                                        placeholder="Enter your professional email address" 
                                        value={emailInput}
                                        onChange={(e) => setEmailInput(e.target.value)}
                                        className="w-full px-6 py-4 rounded-full border border-black/10 text-sm font-semibold focus:outline-none focus:border-[#2C5F2E] bg-[#F7F4EF]/55"
                                    />

                                    <button 
                                        type="submit"
                                        className="w-full py-4 bg-[#C9A84C] hover:bg-black hover:text-white text-[#232120] font-black uppercase tracking-wider text-xs rounded-full transition-colors shadow-lg cursor-pointer font-bold"
                                    >
                                        Get the Bus Shelter Buyer's Guide (PDF)
                                    </button>
                                </form>

                                <button 
                                    onClick={() => setExitPopupVisible(false)}
                                    className="mt-4 text-xs font-bold text-black/45 hover:text-black transition-colors"
                                >
                                    Maybe Later
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center text-center py-6">
                                {/* Success Icon */}
                                <div className="w-16 h-16 bg-[#2C5F2E] text-white rounded-full flex justify-center items-center mb-6 shadow-md">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </div>

                                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#1A1A1A] mb-3 font-bold">
                                    Guide Sent Successfully!
                                </h3>

                                <p className="text-xs sm:text-sm text-[#2D2D2D]/70 leading-relaxed mb-8 max-w-sm">
                                    Thank you! We've sent the complete <span className="font-bold">Bus Shelter Buyer's Guide & Spec Comparison</span> directly to <span className="font-bold text-[#2C5F2E]">{emailInput}</span>.
                                </p>

                                <button 
                                    onClick={() => setExitPopupVisible(false)}
                                    className="px-8 py-3 bg-[#2C5F2E] hover:bg-black text-white font-black uppercase tracking-wider text-xs rounded-full transition-colors cursor-pointer font-bold"
                                >
                                    Close Window
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BusSheltersPage;
