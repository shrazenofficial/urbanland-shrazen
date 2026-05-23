import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ClickIndicator from "./ClickIndicator";

import mapImg from "../../assets/map_india.png";
import mapThumb1 from "../../assets/products/Product Images/Benches/Create_a_clean,_premium,_professional_202605162312.jpeg";
import mapThumb2 from "../../assets/products/Product Images/Bus Shelters/Create_a_clean,_premium,_professional_202605170115.jpeg";

const MapLink = () => {
    const [active, setActive] = useState(false);
    
    const container = useRef(null);
    const mapWrapper = useRef(null);
    const mapOverlay = useRef(null);
    const mapImage = useRef(null);
    const mapUI = useRef(null);
    const mapClose = useRef(null);
    
    const { contextSafe } = useGSAP({ scope: container });
    const tl = useRef();

    useGSAP(() => {
        // Initialize timeline (paused)
        tl.current = gsap.timeline({ paused: true })
            // 1. Show the fixed wrapper layer
            .set(mapWrapper.current, { display: "flex" })
            // 2. Expand the circle mask
            .fromTo(mapOverlay.current, 
                { clipPath: "circle(0% at 50% 50%)" },
                { clipPath: "circle(150% at 50% 50%)", duration: 1.2, ease: "power3.inOut" }
            )
            // 3. Subtle zoom-out effect on the map image
            .fromTo(mapImage.current, 
                { scale: 1.15 },
                { scale: 1, duration: 1.6, ease: "power3.out" },
                0 // Start at the beginning
            )
            // 4. Fade in floating UI elements and close button
            .fromTo([mapUI.current, mapClose.current],
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" },
                "-=0.6"
            );
    });

    const openMap = contextSafe(() => {
        tl.current.play();
    });

    const closeMap = contextSafe(() => {
        tl.current.reverse();
    });

    return (
        <section ref={container} className="w-full h-[90vh] bg-[#181717] flex flex-col justify-center items-center text-center">
            {/* Existing Title Text */}
            <div>
                <p className="text-[0.7rem] font-bold text-[#a79c8d] choose-subtitle uppercase tracking-widest mb-4">
                    — Urbanland in the world
                </p>                
                <h1 className="text-3xl md:text-[5vw] md:leading-[1.1] tracking-tight mt-5 text-[#f4efe7]">
                    Urbanland® delivers custom outdoor furniture<br />
                    Mumbai to architects and developers<br />
                </h1>
            </div>

            <ClickIndicator active={active} />

            {/* Trigger Button */}
            <button
                onClick={openMap}
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                className="text-[#b1a696] text-[5vw] underline hover:text-[#f4efe7] cursor-pointer bg-transparent border-none outline-none mt-2 transition-colors duration-300"
            >
                anywhere in India.
            </button>

            {/* FULL SCREEN MAP OVERLAY */}
            <div 
                ref={mapWrapper} 
                className="fixed top-0 left-0 w-full h-dvh z-50 hidden p-2 md:p-4 bg-black/60 backdrop-blur-sm"
            >
                {/* The masked map container (gives us the rounded corners as the circle expands) */}
                <div 
                    ref={mapOverlay}
                    className="relative w-full h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#e5e1d8]"
                    style={{ clipPath: "circle(0% at 50% 50%)" }}
                >
                    {/* Background Map Image */}
                    <img 
                        ref={mapImage}
                        src={mapImg} 
                        alt="Map of India Locations" 
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                    
                    {/* Dark Vignette/Gradient for readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#181717]/80 via-[#181717]/20 to-transparent pointer-events-none" />

                    {/* Floating Info Card */}
                    <div 
                        ref={mapUI}
                        className="absolute top-8 md:top-12 left-6 md:left-12 bg-[#1c1a19]/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 w-[85%] max-w-[380px] text-left shadow-2xl"
                    >
                        <h2 className="text-[#f4efe7] text-3xl font-bold tracking-tight mb-1">Urbanland<sup className="text-sm">®</sup></h2>
                        <p className="text-[#b1a696] text-sm font-medium mb-8 pb-6 border-b border-white/10">Delivering everywhere in India.</p>
                        
                        <p className="text-[#eae5dd] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Featured Collections</p>
                        
                        <div className="flex gap-3">
                            <div className="flex-1 group cursor-pointer">
                                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 border border-white/5 relative">
                                    <img src={mapThumb1} alt="Benches" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                                </div>
                                <p className="text-[#f4efe7] text-xs font-semibold">Benches</p>
                            </div>
                            <div className="flex-1 group cursor-pointer">
                                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 border border-white/5 relative">
                                    <img src={mapThumb2} alt="Shelters" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                                </div>
                                <p className="text-[#f4efe7] text-xs font-semibold">Shelters</p>
                            </div>
                        </div>
                    </div>

                    {/* Close Button */}
                    <button
                        ref={mapClose}
                        onClick={closeMap}
                        className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 bg-[#181717]/80 hover:bg-white text-white hover:text-black border border-white/20 px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 backdrop-blur-md cursor-pointer flex items-center gap-2 shadow-xl hover:shadow-white/20"
                    >
                        Close 
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MapLink;