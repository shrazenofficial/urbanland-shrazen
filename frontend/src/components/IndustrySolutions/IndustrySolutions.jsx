import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import realEstateImg from '../../assets/gallery_real_estate.png';
import hospitalityImg from '../../assets/gallery_hotels.png';
import municipalImg from '../../assets/gallery_smart_city.png';
import healthcareImg from '../../assets/gallery_hospitals.png';
import educationImg from '../../assets/gallery_education.png';

gsap.registerPlugin(ScrollTrigger);

const industries = [
    {
        id: 'residential',
        title: 'Residential',
        tag: 'Townships & Villas',
        img: realEstateImg,
        link: '/solutions/real-estate',
        gridClass: 'col-span-12 lg:col-span-7 h-[380px] md:h-[420px] lg:h-[460px]'
    },
    {
        id: 'hospitality',
        title: 'Hospitality',
        tag: 'Hotels & Cafes',
        img: hospitalityImg,
        link: '/solutions/hospitality',
        gridClass: 'col-span-12 lg:col-span-5 h-[380px] md:h-[420px] lg:h-[460px]'
    },
    {
        id: 'municipal',
        title: 'Municipal',
        tag: 'Parks & Public Roads',
        img: municipalImg,
        link: '/solutions/municipal-smart-city',
        gridClass: 'col-span-12 md:col-span-6 lg:col-span-4 h-[320px] md:h-[350px] lg:h-[380px]'
    },
    {
        id: 'healthcare',
        title: 'Healthcare',
        tag: 'Hospitals & Clinics',
        img: healthcareImg,
        link: '/solutions/healthcare',
        gridClass: 'col-span-12 md:col-span-6 lg:col-span-4 h-[320px] md:h-[350px] lg:h-[380px]'
    },
    {
        id: 'education',
        title: 'Education',
        tag: 'Schools & Colleges',
        img: educationImg,
        link: '/solutions/education',
        gridClass: 'col-span-12 md:col-span-12 lg:col-span-4 h-[320px] md:h-[350px] lg:h-[380px]'
    }
];

const IndustrySolutions = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const revealElements = containerRef.current.querySelectorAll('.reveal-on-scroll');
        
        revealElements.forEach((el) => {
            gsap.fromTo(el,
                { opacity: 0, y: 35 },
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

    return (
        <section ref={containerRef} className="py-24 px-6 md:px-16 lg:px-20 bg-[#1e1e1e] text-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Section */}
                <div className="text-center mb-16 reveal-on-scroll">
                    <h2 className="font-headline-lg text-4xl md:text-5xl text-craftsman-gold mb-6">
                        Solutions for Every Industry
                    </h2>
                    <p className="font-body-lg text-white/60 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
                        We provide specialized urban furniture solutions tailored to the unique functional and aesthetic demands of diverse sectors across India.
                    </p>
                    <div className="w-24 h-[2px] bg-craftsman-gold mx-auto mt-6"></div>
                </div>

                {/* Asymmetric Bento Grid (7-5 split on top, 4-4-4 split on bottom) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 reveal-on-scroll">
                    {industries.map((item) => (
                        <Link
                            key={item.id}
                            to={item.link}
                            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 hover:border-craftsman-gold/40 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 block ${item.gridClass}`}
                        >
                            {/* Card Image - Clear, Full Opacity */}
                            <img 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                src={item.img} 
                                alt={item.title} 
                                loading="lazy"
                            />
                            
                            {/* Subtle dark gradient overlay at the bottom to guarantee text legibility */}
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>
                            
                            {/* Card Content overlay - Bottom Left-Aligned */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-left">
                                <span className="font-label-technical text-craftsman-gold text-xs uppercase tracking-widest font-semibold mb-2 block">
                                    {item.tag}
                                </span>
                                <h3 className="font-headline-lg text-2xl font-bold text-white">
                                    {item.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bottom View Industry Solutions Button */}
                <div className="mt-16 text-center reveal-on-scroll">
                    <Link
                        to="/solutions"
                        className="inline-flex bg-craftsman-gold text-[#1e1e1e] hover:bg-white hover:text-industrial-charcoal px-12 py-5 font-label-technical text-xs font-bold uppercase tracking-[0.2em] transition-all items-center justify-center gap-4 mx-auto shadow-lg rounded-[4px] no-underline"
                    >
                        View Industry Solutions <span className="material-symbols-outlined text-sm font-bold">arrow_right_alt</span>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default IndustrySolutions;
