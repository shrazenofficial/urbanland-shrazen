import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './gallery.css';
import { BsFillPlusCircleFill } from "react-icons/bs";

import gbg1 from '../../assets/gallery_real_estate.png';
import gbg2 from '../../assets/gallery_hotels.png';
import gbg3 from '../../assets/gallery_hospitals.png';
import gbg4 from '../../assets/gallery_education.png';
import gbg5 from '../../assets/gallery_smart_city.png';

const Gallery = () => {
    const pageRef = useRef(null);
    const sliderRef = useRef(null);

    useGSAP(() => {
        if (!sliderRef.current) return;

        // Perform seamless horizontal scroll translation as user scrolls vertically through pinned block
        const scrollTween = gsap.to(sliderRef.current, {
            x: () => -(sliderRef.current.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
                trigger: pageRef.current,
                start: "top top",
                end: () => `+=${sliderRef.current.scrollWidth - window.innerWidth}`,
                scrub: 1,
                pin: true,
                invalidateOnRefresh: true,
            }
        });

        return () => {
            scrollTween.scrollTrigger?.kill();
            scrollTween.kill();
        };
    }, { scope: pageRef });

    // Generate repeating Urbanland® watermark elements in the background
    const generateUrbanland = (quantity = 6) => {
        const Urbanland = [];
        for (let i = 1; i <= quantity; i++) {
            Urbanland.push(
                <h3 key={i} style={{ "--index": i }} className='tracking-tighter'>
                    Outdoor & Urban Furniture Solutions for Every Project Type
                </h3>
            );
        }
        return Urbanland;
    };

    return (
        <section className="gallery-page4" ref={pageRef} id="gallery">
            {/* Subtle Luxury Marquee Watermark in the Background */}
            <div className="gallery-slider">
                <div
                    className="gallery-box"
                    style={{ "--time": "60s", "--quantity": 6 }}
                >
                    {generateUrbanland(6)}
                </div>
            </div>

            {/* Horizontal Scrolling Slides Track */}
            <div className="gallery-horizontal-track" ref={sliderRef}>
                
                {/* Slide 1: Real Estate */}
                <div className="gallery-card">
                    <img src={gbg1} alt="outdoor furniture for real estate projects" />
                    <div className="gallery-topText">
                        <h4>Real Estate & Townships</h4>
                        <h3>Explore</h3>
                    </div>
                    <div className="gallery-bottomText">
                        <div className="flex flex-col items-start gap-1 max-w-[65%]">
                            <h3 className="gallery-seo-keyword">outdoor furniture for real estate projects</h3>
                            <div className="w-full flex justify-start items-start gap-2">
                                <BsFillPlusCircleFill className="w-5 h-5 text-[#C9A84C] mt-1 flex-shrink-0" />
                                <p className="text-[14px] text-[#f4efe7] font-medium leading-relaxed">
                                    Premium WPC benches, GFRC planters, car parking sheds, and cabanas that enhance property value and resident experience. Bulk supply with guaranteed timelines for your handover schedule.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end justify-between min-h-[60px]">
                            <a href="/solutions/real-estate" className="gallery-link-btn text-[#C9A84C] hover:text-[#f4efe7] text-[13px] font-semibold tracking-wide uppercase transition-colors duration-300">
                                Explore Real Estate Solutions →
                            </a>
                            <div className="relative z-9 w-40 h-[0.1rem] bg-[#4f4b48]">
                                <div className="progress-line absolute z-10 bg-[#2C5F2E] w-[20%] h-[0.1rem] top-1/2 -translate-y-1/2 left-0"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slide 2: Hotels & Resorts */}
                <div className="gallery-card">
                    <img src={gbg2} alt="hotel outdoor furniture manufacturer India" />
                    <div className="gallery-topText">
                        <h4>Hotels & Resorts</h4>
                        <h3>Explore</h3>
                    </div>
                    <div className="gallery-bottomText">
                        <div className="flex flex-col items-start gap-1 max-w-[65%]">
                            <h3 className="gallery-seo-keyword">hotel outdoor furniture manufacturer India</h3>
                            <div className="w-full flex justify-start items-start gap-2">
                                <BsFillPlusCircleFill className="w-5 h-5 text-[#C9A84C] mt-1 flex-shrink-0" />
                                <p className="text-[14px] text-[#f4efe7] font-medium leading-relaxed">
                                    Luxury poolside loungers, wicker dining sets, and canteen furniture engineered for high guest footfall. Custom finishes to match your property's design language.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end justify-between min-h-[60px]">
                            <a href="/solutions/hotels-resorts" className="gallery-link-btn text-[#C9A84C] hover:text-[#f4efe7] text-[13px] font-semibold tracking-wide uppercase transition-colors duration-300">
                                Explore Hospitality Solutions →
                            </a>
                            <div className="relative z-9 w-40 h-[0.1rem] bg-[#4f4b48]">
                                <div className="progress-line absolute z-10 bg-[#2C5F2E] w-[40%] h-[0.1rem] top-1/2 -translate-y-1/2 left-0"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slide 3: Hospitals */}
                <div className="gallery-card">
                    <img src={gbg3} alt="hospital outdoor furniture India" />
                    <div className="gallery-topText">
                        <h4>Hospitals & Healthcare</h4>
                        <h3>Explore</h3>
                    </div>
                    <div className="gallery-bottomText">
                        <div className="flex flex-col items-start gap-1 max-w-[65%]">
                            <h3 className="gallery-seo-keyword">hospital outdoor furniture India</h3>
                            <div className="w-full flex justify-start items-start gap-2">
                                <BsFillPlusCircleFill className="w-5 h-5 text-[#C9A84C] mt-1 flex-shrink-0" />
                                <p className="text-[14px] text-[#f4efe7] font-medium leading-relaxed">
                                    Durable, low-maintenance benches, dustbins, and canteen tables built to withstand heavy daily use in medical campuses. Easy-clean materials that meet hygiene requirements.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end justify-between min-h-[60px]">
                            <a href="/solutions/hospitals" className="gallery-link-btn text-[#C9A84C] hover:text-[#f4efe7] text-[13px] font-semibold tracking-wide uppercase transition-colors duration-300">
                                Explore Healthcare Solutions →
                            </a>
                            <div className="relative z-9 w-40 h-[0.1rem] bg-[#4f4b48]">
                                <div className="progress-line absolute z-10 bg-[#2C5F2E] w-[60%] h-[0.1rem] top-1/2 -translate-y-1/2 left-0"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slide 4: Education */}
                <div className="gallery-card">
                    <img src={gbg4} alt="campus outdoor furniture manufacturer" />
                    <div className="gallery-topText">
                        <h4>Schools & Universities</h4>
                        <h3>Explore</h3>
                    </div>
                    <div className="gallery-bottomText">
                        <div className="flex flex-col items-start gap-1 max-w-[65%]">
                            <h3 className="gallery-seo-keyword">campus outdoor furniture manufacturer</h3>
                            <div className="w-full flex justify-start items-start gap-2">
                                <BsFillPlusCircleFill className="w-5 h-5 text-[#C9A84C] mt-1 flex-shrink-0" />
                                <p className="text-[14px] text-[#f4efe7] font-medium leading-relaxed">
                                    Heavy-duty canteen tables, WPC benches, and GFRC planters built for high-footfall educational campuses. Resistant to vandalism, low on maintenance.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end justify-between min-h-[60px]">
                            <a href="/solutions/education" className="gallery-link-btn text-[#C9A84C] hover:text-[#f4efe7] text-[13px] font-semibold tracking-wide uppercase transition-colors duration-300">
                                Explore Campus Solutions →
                            </a>
                            <div className="relative z-9 w-40 h-[0.1rem] bg-[#4f4b48]">
                                <div className="progress-line absolute z-10 bg-[#2C5F2E] w-[80%] h-[0.1rem] top-1/2 -translate-y-1/2 left-0"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slide 5: Municipal & Smart Cities */}
                <div className="gallery-card">
                    <img src={gbg5} alt="smart city furniture manufacturer India" />
                    <div className="gallery-topText">
                        <h4>Municipal & Smart Cities</h4>
                        <h3>Explore</h3>
                    </div>
                    <div className="gallery-bottomText">
                        <div className="flex flex-col items-start gap-1 max-w-[65%]">
                            <h3 className="gallery-seo-keyword">smart city furniture manufacturer India</h3>
                            <div className="w-full flex justify-start items-start gap-2">
                                <BsFillPlusCircleFill className="w-5 h-5 text-[#C9A84C] mt-1 flex-shrink-0" />
                                <p className="text-[14px] text-[#f4efe7] font-medium leading-relaxed">
                                    Robust MS/SS bus shelters, stainless steel bollards, park benches, and outdoor dustbins for India's Smart City Mission projects. Compliant with urban infrastructure standards.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end justify-between min-h-[60px]">
                            <a href="/solutions/smart-cities" className="gallery-link-btn text-[#C9A84C] hover:text-[#f4efe7] text-[13px] font-semibold tracking-wide uppercase transition-colors duration-300">
                                Explore Smart City Solutions →
                            </a>
                            <div className="relative z-9 w-40 h-[0.1rem] bg-[#4f4b48]">
                                <div className="progress-line absolute z-10 bg-[#2C5F2E] w-[100%] h-[0.1rem] top-1/2 -translate-y-1/2 left-0"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Gallery;