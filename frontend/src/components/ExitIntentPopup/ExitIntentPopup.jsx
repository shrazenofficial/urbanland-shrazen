import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ExitIntentPopup = () => {
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [email, setEmail] = useState("");

    const path = location.pathname;
    const normalizedPath = path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;

    // List of paths that already have a localized exit-intent popup
    const localPopupPaths = [
        "/products/bus-shelters",
        "/products/wicker-furniture",
        "/products/wicker-furniture/wicker-outdoor-products",
        "/products/dustbins",
        "/products/outdoor-dustbins",
        "/products/benches/aluminium-benches",
        "/products/benches",
        "/products/wpc-benches",
        "/products/cabanas",
        "/products/canteen-tables",
        "/products/canteen-furniture",
        "/products/car-shelters",
        "/products/car-parking-sheds",
        "/products/car-sheds",
        "/products/indoor-furniture",
        "/products/metal-wooden-furniture",
        "/products/planters",
        "/products/poolside-loungers",
        "/products/poolside-furniture",
        "/products/ss-bollards",
        "/products/wicker-outdoor-products",
        "/products/wicker-living-sets",
        "/products/wicker-dining-sets"
    ];

    const hasLocalPopup = localPopupPaths.includes(normalizedPath);
    const isExcluded = hasLocalPopup;

    const trackEvent = (eventName, value = "") => {
        if (window.gtag) {
            window.gtag("event", eventName, {
                event_category: "global_exit_popup",
                event_label: normalizedPath,
                value: value
            });
        }
        console.log(`[GA4 Event] ${eventName} | Category: global_exit_popup | Label: ${normalizedPath} | Value: ${value}`);
    };

    // Determine tailored content based on current route
    const getPopupContent = () => {
        if (normalizedPath === "/about-us") {
            return {
                title: "Download the Urbanland Company Profile",
                description: "Learn more about our architectural street furniture legacy, manufacturing capabilities, and completed projects across India.",
                buttonText: "Get Company Profile (PDF)"
            };
        } else if (normalizedPath.startsWith("/solutions/")) {
            return {
                title: "Download the Landscape Integration Guide",
                description: "Get expert specifications, sizing guidelines, and catalog details tailored for real estate developers and landscape architects.",
                buttonText: "Get Integration Guide (PDF)"
            };
        } else if (normalizedPath === "/projects" || normalizedPath.startsWith("/projects/")) {
            return {
                title: "Download our Case Studies Portfolio",
                description: "See full-resolution photos, detailed project summaries, and client feedback from major developers and municipalities across India.",
                buttonText: "Get Case Studies (PDF)"
            };
        } else if (normalizedPath === "/resources" || normalizedPath === "/faq" || normalizedPath === "/materials" || normalizedPath === "/resources/downloads") {
            return {
                title: "Need Professional BIM & CAD Files?",
                description: "Get immediate access to our complete CAD/BIM library, product data sheets, and comprehensive material guidelines.",
                buttonText: "Get CAD & BIM Library (ZIP)"
            };
        } else if (normalizedPath.startsWith("/product/")) {
            return {
                title: "Download Technical Specification Guide",
                description: "Get the full engineering data sheet, material customization options, and CAD layouts for our premium street furniture.",
                buttonText: "Get Product Specs (PDF)"
            };
        }

        // Default Master Catalog for Home, Blog, etc.
        return {
            title: "Download the Urbanland Master Catalog",
            description: "Get our complete 2026 product guide featuring full material specifications, dimensions, and standard designs.",
            buttonText: "Get the Master Catalog (PDF)"
        };
    };

    useEffect(() => {
        // Reset state on route change
        setIsVisible(false);
        setIsSubmitted(false);
        setEmail("");

        if (isExcluded) return;

        const sessionKey = `urbanland_global_exit_intent_${normalizedPath.replace(/\//g, "_")}`;
        const isShown = sessionStorage.getItem(sessionKey);

        if (!isShown) {
            const handleMouseLeave = (e) => {
                if (e.clientY < 20) {
                    triggerPopup();
                }
            };

            const timer = setTimeout(() => {
                triggerPopup();
            }, 45000); // 45 seconds fallback timer

            const triggerPopup = () => {
                setIsVisible(true);
                sessionStorage.setItem(sessionKey, "true");
                document.removeEventListener("mouseleave", handleMouseLeave);
                clearTimeout(timer);
                trackEvent("popup_trigger");
            };

            document.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                document.removeEventListener("mouseleave", handleMouseLeave);
                clearTimeout(timer);
            };
        }
    }, [normalizedPath, isExcluded]);

    if (isExcluded || !isVisible) return null;

    const content = getPopupContent();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim()) {
            setIsSubmitted(true);
            trackEvent("popup_submit", email);
        }
    };

    return (
        <div className="fixed inset-0 z-[9999] flex justify-center items-center px-4">
            {/* Backdrop overlay */}
            <div 
                className="absolute inset-0 bg-black/65 backdrop-blur-sm transition-opacity duration-300" 
                onClick={() => { setIsVisible(false); trackEvent("popup_close", "backdrop"); }} 
            />
            
            {/* Content card */}
            <div className="relative bg-white text-[#1A1A1A] max-w-lg w-full rounded-[2.5rem] z-10 p-8 sm:p-12 shadow-2xl animate-fadeIn border border-black/[0.04]">
                {/* Close Button */}
                <button 
                    onClick={() => { setIsVisible(false); trackEvent("popup_close", "button"); }} 
                    className="absolute top-6 right-6 w-8 h-8 flex justify-center items-center text-black/45 hover:text-black font-mono text-lg font-bold transition-colors cursor-pointer select-none"
                    aria-label="Close exit popup"
                >
                    ✕
                </button>
                
                {!isSubmitted ? (
                    <div className="flex flex-col items-center text-center">
                        <span className="text-[9px] sm:text-[0.8125rem] md:text-sm font-black uppercase tracking-widest bg-[#2C5F2E]/10 text-[#2C5F2E] px-4 py-1.5 rounded-full select-none mb-6">
                            Exclusive Material
                        </span>
                        
                        <h3 className="text-xl sm:text-2xl font-black uppercase text-[#1A1A1A] mb-3 leading-snug">
                            {content.title}
                        </h3>
                        
                        <p className="text-xs sm:text-sm text-[#2D2D2D]/70 mb-8 leading-relaxed max-w-sm">
                            {content.description}
                        </p>
                        
                        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
                            <input 
                                type="email" 
                                required 
                                placeholder="Enter professional email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                className="w-full px-6 py-4 rounded-full border border-black/10 text-sm focus:outline-none focus:border-[#2C5F2E] focus:ring-1 focus:ring-[#2C5F2E] bg-[#F7F4EF] font-semibold text-[#1A1A1A] transition-all" 
                            />
                            <button 
                                type="submit" 
                                className="w-full py-4 bg-[#C9A84C] hover:bg-black hover:text-white text-[#232120] font-black uppercase text-xs rounded-full transition-colors cursor-pointer tracking-wider shadow-md hover:shadow-lg duration-300"
                            >
                                {content.buttonText}
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="flex flex-col items-center text-center py-6">
                        <div className="w-14 h-14 bg-[#2C5F2E]/10 text-[#2C5F2E] rounded-full flex justify-center items-center mb-6">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </div>
                        
                        <h3 className="text-xl sm:text-2xl font-black uppercase text-[#1A1A1A] mb-3">
                            Request Received!
                        </h3>
                        
                        <p className="text-xs sm:text-sm text-[#2D2D2D]/70 mb-8 leading-relaxed">
                            We have queued the resources and sent them directly to <span className="font-bold text-[#2C5F2E]">{email}</span>.
                        </p>
                        
                        <button 
                            onClick={() => setIsVisible(false)} 
                            className="px-8 py-3 bg-[#2C5F2E] text-white font-black uppercase text-xs rounded-full hover:bg-black transition-colors duration-300 cursor-pointer shadow-md"
                        >
                            Back to Website
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExitIntentPopup;
