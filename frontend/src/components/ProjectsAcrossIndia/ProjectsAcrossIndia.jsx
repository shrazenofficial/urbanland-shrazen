import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import gbg1 from '../../assets/gallery_real_estate.png';
import gbg5 from '../../assets/gallery_smart_city.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 'lodha',
        number: '01',
        title: 'Lodha World One',
        location: 'Mumbai, Maharashtra',
        desc: 'A prestigious residential landmark featuring extensive outdoor furniture installations. Perfectly placed custom benches and architectural pergolas enhance the open-air common areas, blending style with weathering resilience.',
        img: gbg1,
        tags: ['Townships & Villas', 'WPC Benches', 'Architectural Pergolas'],
        link: '/projects/lodha',
        isFlipped: false
    },
    {
        id: 'adani',
        number: '02',
        title: 'Adani Shantigram',
        location: 'Ahmedabad, Gujarat',
        desc: 'Modern corporate plaza outfitted with high-performance, smart urban furniture. High-contrast architectural designs utilize concrete texture integrations and dark metal accents to emphasize structural integrity.',
        img: gbg5,
        tags: ['Corporate Plaza', 'Concrete Seating', 'Smart Bus Shelters'],
        link: '/projects/adani',
        isFlipped: true
    }
];

const ProjectsAcrossIndia = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const revealElements = containerRef.current.querySelectorAll('.reveal-on-scroll');
        
        revealElements.forEach((el) => {
            gsap.fromTo(el,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
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

    return (
        <section ref={containerRef} className="py-24 px-6 md:px-16 lg:px-20 bg-background text-deep-ink overflow-hidden relative border-t border-outline-variant/30">
            
            {/* Subtle soft overlay for layout depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(201,168,76,0.06),transparent_50%)] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Header Section */}
                <div className="text-center mb-24 reveal-on-scroll">
                    <span className="font-label-technical text-craftsman-gold tracking-[0.25em] uppercase font-semibold text-xs block mb-3">
                        Installations
                    </span>
                    <h2 className="font-headline-lg text-4xl md:text-5xl text-deep-ink mb-6 uppercase tracking-tight">
                        Projects Across India
                    </h2>
                    <p className="font-body-lg text-on-surface-variant/80 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
                        Transforming urban landscapes with premium furniture installations across major metropolitan hubs and emerging townships in India.
                    </p>
                    <div className="w-24 h-[2px] bg-craftsman-gold mx-auto mt-6"></div>
                </div>

                {/* Projects Alternating Layout */}
                <div className="flex flex-col gap-24 lg:gap-32">
                    {projects.map((proj) => (
                        <div 
                            key={proj.id} 
                            className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center reveal-on-scroll ${
                                proj.isFlipped ? 'lg:flex-row-reverse' : ''
                            }`}
                        >
                            {/* Image Showcase Panel */}
                            <div className="w-full lg:w-7/12 aspect-[16/10] overflow-hidden rounded-2xl border border-black/5 relative group bg-surface-container shadow-md">
                                <img 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    src={proj.img} 
                                    alt={proj.title} 
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                            </div>

                            {/* Content Details Panel */}
                            <div className="w-full lg:w-5/12 text-left flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-2xl font-bold font-label-technical text-craftsman-gold">{proj.number}.</span>
                                    <span className="font-label-technical text-forest-green text-xs uppercase tracking-widest font-semibold">
                                        {proj.location}
                                    </span>
                                </div>
                                <h3 className="font-headline-lg text-3xl md:text-4xl font-bold text-deep-ink mb-5">
                                    {proj.title}
                                </h3>
                                <p className="font-body-md text-on-surface-variant text-sm md:text-base leading-relaxed mb-6">
                                    {proj.desc}
                                </p>
                                
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2.5 mb-8">
                                    {proj.tags.map((tag, idx) => (
                                        <span 
                                            key={idx} 
                                            className="text-[10px] md:text-xs font-semibold font-label-technical tracking-wider uppercase bg-white border border-outline-variant/60 text-on-surface-variant px-3 py-1.5 rounded-[4px] shadow-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Link Link */}
                                <Link 
                                    to={proj.link}
                                    className="inline-flex items-center gap-2 text-xs font-bold font-label-technical text-forest-green hover:text-craftsman-gold tracking-widest uppercase transition-colors duration-300 group/link"
                                >
                                    Explore Case Study 
                                    <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1.5">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Centered Bottom CTA */}
                <div className="mt-24 text-center reveal-on-scroll">
                    <Link
                        to="/projects"
                        className="inline-flex bg-forest-green text-white hover:bg-craftsman-gold px-12 py-5 font-label-technical text-xs font-bold uppercase tracking-[0.2em] transition-all items-center justify-center gap-4 mx-auto shadow-md rounded-[4px] no-underline"
                    >
                        View All Projects <span className="material-symbols-outlined text-sm font-bold">arrow_right_alt</span>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default ProjectsAcrossIndia;
