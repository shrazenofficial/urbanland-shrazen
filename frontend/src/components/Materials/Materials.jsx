import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import wpcTexture from '../../assets/wpc_texture.png';
import benchPlanter from '../../assets/Bench_Planter.png';
import nfcTexture from '../../assets/nfc_texture.png';
import wickerFurniture from '../../assets/Wicker_Furniture.png';
import aluminiumTexture from '../../assets/aluminium_texture.png';
import carShelter from '../../assets/Car_Shelter.png';

gsap.registerPlugin(ScrollTrigger);

const materialsData = [
    {
        id: 'wpc',
        label: 'WPC',
        title: 'Wood Polymer Composite',
        grade: 'Technical Grade',
        description: 'Weather-proof, termite-resistant, and maintenance-free alternative to natural wood.',
        primaryImg: wpcTexture,
        secondaryImg: benchPlanter,
    },
    {
        id: 'nfc',
        label: 'NFC',
        title: 'Natural Fiber Composite',
        grade: 'Premium',
        description: 'High-durability material crafted from agricultural waste for a circular economy.',
        primaryImg: nfcTexture,
        secondaryImg: wickerFurniture,
    },
    {
        id: 'alu',
        label: 'ALU',
        title: 'Architectural Aluminium',
        grade: 'Technical Grade',
        description: 'Powder-coated aircraft-grade aluminium for lightweight, rust-proof permanence.',
        primaryImg: aluminiumTexture,
        secondaryImg: carShelter,
    }
];

const Materials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [userInteracted, setUserInteracted] = useState(false);
    const containerRef = useRef(null);

    // Auto-rotation effect
    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % materialsData.length);
        }, 4000); // Rotate every 4 seconds

        return () => clearInterval(interval);
    }, [isHovered]);

    useGSAP(() => {
        const revealElements = containerRef.current.querySelectorAll('.reveal-on-scroll');
        
        revealElements.forEach((el) => {
            gsap.fromTo(el,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        });
    }, { scope: containerRef });

    const handleMouseEnterCard = (index) => {
        setActiveIndex(index);
        setIsHovered(true);
        setUserInteracted(true);
    };

    const handleMouseLeaveCard = () => {
        setIsHovered(false);
    };

    return (
        <section ref={containerRef} className="py-20 px-6 md:px-16 lg:px-20 bg-background overflow-hidden relative">
            {/* Inject keyframes for progress bar animation */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes progressGrow {
                    from { width: 0%; }
                    to { width: 100%; }
                }
                .progress-bar-animating {
                    animation: progressGrow 4000ms linear forwards;
                }
            `}} />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Column: Material Cards */}
                    <div className="lg:col-span-7 reveal-on-scroll">
                        <div className="flex flex-col gap-4 text-left mb-12 relative">
                            <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
                                Premium Materials
                            </span>
                            <h2 className="font-headline-lg text-headline-lg text-deep-ink max-w-2xl leading-tight">
                                Designed with Performance &amp; Sustainability in Mind
                            </h2>
                            <div className="w-24 h-1 bg-craftsman-gold mb-2"></div>
                            
                            {/* Pulse Hint to Invite Interaction */}
                            {!userInteracted && (
                                <div className="absolute right-0 top-0 flex items-center gap-2 text-xs font-label-technical text-craftsman-gold/80 animate-pulse hidden md:flex">
                                    <span className="material-symbols-outlined text-sm">swipe</span>
                                    <span>Hover to explore materials</span>
                                </div>
                            )}
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {materialsData.map((item, idx) => {
                                const isActive = idx === activeIndex;
                                return (
                                    <div
                                        key={item.id}
                                        onMouseEnter={() => handleMouseEnterCard(idx)}
                                        onMouseLeave={handleMouseLeaveCard}
                                        onClick={() => {
                                            setActiveIndex(idx);
                                            setUserInteracted(true);
                                        }}
                                        className={`relative bg-surface-container-low p-8 rounded-xl border transition-all duration-500 cursor-pointer overflow-hidden group ${
                                            isActive 
                                                ? 'border-craftsman-gold shadow-lg translate-x-2 bg-white' 
                                                : 'border-outline-variant/30 shadow-md hover:shadow-lg hover:border-outline-variant/60'
                                        }`}
                                    >
                                        <div className="flex flex-col md:flex-row gap-6 relative z-10">
                                            <div className={`flex-shrink-0 w-20 h-20 flex items-center justify-center text-white rounded-xl transition-all duration-500 ${
                                                isActive ? 'bg-forest-deep scale-105 shadow-md' : 'bg-forest-deep/80 group-hover:bg-forest-deep'
                                            }`}>
                                                <span className="font-headline-lg text-2xl font-bold">{item.label}</span>
                                            </div>
                                            <div className="flex-grow">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h4 className={`font-label-technical text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${
                                                        isActive ? 'text-forest-deep' : 'text-on-surface'
                                                    }`}>
                                                        {item.title}
                                                    </h4>
                                                    <span className="text-[10px] font-bold uppercase tracking-widest bg-craftsman-gold/20 text-craftsman-gold px-2.5 py-1 rounded">
                                                        {item.grade}
                                                    </span>
                                                </div>
                                                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Bottom Progress Bar Indicator */}
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-outline-variant/20">
                                            <div 
                                                className={`h-full bg-craftsman-gold transition-all duration-300 ${
                                                    isActive && !isHovered ? 'progress-bar-animating' : ''
                                                }`}
                                                style={{ 
                                                    width: isActive ? (isHovered ? '100%' : undefined) : '0%' 
                                                }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-12">
                            <Link to="/materials" className="inline-block bg-forest-deep text-white px-12 py-5 font-label-technical text-xs font-semibold uppercase tracking-widest hover:bg-forest-deep/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg rounded-[4px] no-underline">
                                Explore Our Materials
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Layered Visuals with Smooth Cross-fades */}
                    <div className="lg:col-span-5 relative reveal-on-scroll h-[450px] sm:h-[550px] lg:h-[600px] flex items-center justify-center">
                        
                        {/* Primary Image Container */}
                        <div className="relative w-full h-5/6 rounded-xl overflow-hidden shadow-2xl border-8 border-white bg-surface-container-high transition-transform duration-500 hover:scale-[1.01]">
                            {materialsData.map((item, idx) => (
                                <img 
                                    key={item.id}
                                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                                        idx === activeIndex 
                                            ? 'opacity-100 scale-100 translate-y-0 rotate-0 z-10' 
                                            : 'opacity-0 scale-105 translate-y-4 rotate-1 z-0'
                                    }`}
                                    src={item.primaryImg} 
                                    alt={item.title} 
                                />
                            ))}
                        </div>

                        {/* Secondary Image Container */}
                        <div className="absolute -bottom-4 -right-4 z-20 w-3/5 aspect-square rounded-xl overflow-hidden shadow-2xl border-8 border-white hidden md:block bg-surface-container-high transition-transform duration-500 hover:translate-x-1 hover:translate-y-1">
                            {materialsData.map((item, idx) => (
                                <img 
                                    key={item.id + '-sec'}
                                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                                        idx === activeIndex 
                                            ? 'opacity-100 scale-100 z-10' 
                                            : 'opacity-0 scale-110 z-0'
                                    }`}
                                    src={item.secondaryImg} 
                                    alt={item.title + ' samples'} 
                                />
                            ))}
                        </div>

                        {/* Background Decorative Gold Circle */}
                        <div className="absolute -top-8 -left-8 w-32 h-32 bg-craftsman-gold/10 rounded-full -z-10 animate-pulse"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Materials;
