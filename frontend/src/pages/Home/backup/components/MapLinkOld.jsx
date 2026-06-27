import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ClickIndicator from "../../../../components/MapLink/ClickIndicator";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import mapThumb1 from "../../../../assets/products/Product Images/Benches/Create_a_clean,_premium,_professional_202605162312.jpeg";
import mapThumb2 from "../../../../assets/products/Product Images/Bus Shelters/Create_a_clean,_premium,_professional_202605170115.jpeg";

// Create a custom marker icon
const customIcon = new L.DivIcon({
  className: 'custom-marker',
  html: `<div style="width:18px; height:18px; background-color:#C9A84C; border-radius:50%; border:3px solid white; box-shadow:0 2px 8px rgba(0,0,0,0.3);"></div>`,
  iconSize: [18, 18],
  iconAnchor: [9, 9]
});

const MapLinkOld = () => {
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
            // 3. Subtle zoom-out effect on the map image container
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
        // We trigger a window resize event to ensure Leaflet renders correctly after display block
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 100);
        tl.current.play();
    });

    const closeMap = contextSafe(() => {
        tl.current.reverse();
    });

    return (
        <section ref={container} id="map-link" className="w-full h-auto py-20 md:py-0 md:h-[90vh] bg-[#F7F4EF] flex flex-col justify-center items-center text-center">
            {/* Existing Title Text */}
            <div>
                <p className="text-[0.7rem] font-bold text-[#2C5F2E] choose-subtitle uppercase tracking-widest mb-4">
                    — Urbanland in the world
                </p>                
                <h1 className="text-3xl md:text-[5vw] md:leading-[1.1] tracking-tight mt-5 text-[#1A1A1A]">
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
                className="text-[#2C5F2E] text-3xl md:text-[5vw] underline hover:text-[#C9A84C] cursor-pointer bg-transparent border-none outline-none mt-2 transition-colors duration-300"
            >
                anywhere in India.
            </button>

            {/* FULL SCREEN MAP OVERLAY */}
            <div 
                ref={mapWrapper} 
                className="fixed top-0 left-0 w-full h-dvh z-[100] hidden p-2 md:p-4 bg-black/60 backdrop-blur-sm"
            >
                {/* The masked map container (gives us the rounded corners as the circle expands) */}
                <div 
                    ref={mapOverlay}
                    className="relative w-full h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#e5e1d8]"
                    style={{ clipPath: "circle(0% at 50% 50%)" }}
                >
                    {/* Interactive Map */}
                    <div ref={mapImage} className="absolute top-0 left-0 w-full h-full">
                        <MapContainer 
                            center={[22.5, 79]} 
                            zoom={5} 
                            zoomControl={false} 
                            scrollWheelZoom={true}
                            style={{ width: '100%', height: '100%', backgroundColor: '#e5e1d8', zIndex: 0 }}
                        >
                            <TileLayer
                                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                                attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
                            />
                            
                            {/* Project Markers */}
                            <Marker position={[19.0760, 72.8777]} icon={customIcon}>
                                <Popup>
                                    <strong>Mumbai</strong><br/>Headquarters & Lodha/Oberoi Projects
                                </Popup>
                            </Marker>
                            <Marker position={[28.7041, 77.1025]} icon={customIcon}>
                                <Popup>
                                    <strong>Delhi NCR</strong><br/>Smart City Transit Shelters
                                </Popup>
                            </Marker>
                            <Marker position={[12.9716, 77.5946]} icon={customIcon}>
                                <Popup>
                                    <strong>Bangalore</strong><br/>Premium Residential Projects
                                </Popup>
                            </Marker>
                            <Marker position={[18.5204, 73.8567]} icon={customIcon}>
                                <Popup>
                                    <strong>Pune</strong><br/>WPC Benches & Planters
                                </Popup>
                            </Marker>
                            <Marker position={[17.3850, 78.4867]} icon={customIcon}>
                                <Popup>
                                    <strong>Hyderabad</strong><br/>Commercial Outdoor Furniture
                                </Popup>
                            </Marker>
                            <Marker position={[23.0225, 72.5714]} icon={customIcon}>
                                <Popup>
                                    <strong>Ahmedabad</strong><br/>Adani Realty Projects
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                    
                    {/* Dark Vignette/Gradient for readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2D2D2D]/90 via-[#2D2D2D]/30 to-transparent pointer-events-none z-10" />

                    {/* Floating Info Card */}
                    <div 
                        ref={mapUI}
                        className="absolute top-8 md:top-12 left-6 md:left-12 bg-[#2C5F2E]/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 w-[85%] max-w-[380px] text-left shadow-2xl z-20 pointer-events-auto"
                    >
                        <h2 className="text-[#F7F4EF] text-3xl font-bold tracking-tight mb-1">Urbanland<sup className="text-sm">®</sup></h2>
                        <p className="text-[#C9A84C] text-sm font-medium mb-8 pb-6 border-b border-white/10">Delivering everywhere in India.</p>
                        
                        <p className="text-[#F7F4EF]/75 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Featured Collections</p>
                        
                        <div className="flex gap-3">
                            <div className="flex-1 group cursor-pointer">
                                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 border border-white/5 relative">
                                    <img src={mapThumb1} alt="Benches" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                                </div>
                                <p className="text-[#F7F4EF] text-xs font-semibold">Benches</p>
                            </div>
                            <div className="flex-1 group cursor-pointer">
                                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 border border-white/5 relative">
                                    <img src={mapThumb2} alt="Shelters" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                                </div>
                                <p className="text-[#F7F4EF] text-xs font-semibold">Shelters</p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <a
                            href="/catalogue"
                            className="mt-6 w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#C9A84C] hover:bg-[#e5c76b] text-[#1A1A1A] text-[11px] font-black uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg no-underline"
                        >
                            View All Products
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Close Button */}
                    <button
                        ref={mapClose}
                        onClick={closeMap}
                        className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 bg-[#2D2D2D]/80 hover:bg-[#2C5F2E] text-[#F7F4EF] hover:text-white border border-white/20 px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 backdrop-blur-md cursor-pointer flex items-center gap-2 shadow-xl hover:shadow-white/20 z-20"
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

export default MapLinkOld;
