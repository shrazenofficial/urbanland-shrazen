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

// Register ScrollTrigger plugin — handled in src/lib/gsap-register.js

const Gallery = () => {
    const pageRef = useRef(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        // 1. Desktop Viewport (min-width: 801px)
        mm.add("(min-width: 801px)", () => {
            const tl4 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".gallery-page4",
                    start: "10% 10%",
                    end: "380% 30%",
                    scrub: 1,
                    pin: true,
                    invalidateOnRefresh: true,
                }
            });

            tl4.to(".gallery-page4", {
                backgroundColor: "#181717",
            }, 'start');

            gsap.set(".gallery-topText h4, .gallery-topText h3, .gallery-bottomText h3, .gallery-bottomText p, .gallery-bottomText a", {
                opacity: 1,
                x: 0
            });

            tl4.to(".gallery-box h3", {
                opacity: 0,
            }, 'a')
                .to(".gallery-page4 .gallery-background", {
                    width: "calc(100% - 1rem)",
                    height: "calc(100vh - 1rem)",
                    borderRadius: "3.5rem",
                    transform: "translate(-50%, -56%)",
                }, 'a')
                .to(".gallery-page4 .gallery-background img", {
                    transform: "scale(1)",
                }, 'a')
                .from(".gallery-background .gallery-topText h4, .gallery-background .gallery-topText h3, .gallery-background .gallery-bottomText h3, .gallery-background .gallery-bottomText p, .gallery-background .gallery-bottomText a", {
                    opacity: 0,
                    x: 50,
                })
                .to({}, { duration: 0.4 }, "+=0")

                // Transition to Slide 2
                .to("#gallery-second", {
                    transform: "translate(-50%, -56%)",
                }, 'b')
                .to("#gallery-second img", {
                    transform: "scale(1)",
                }, 'b')
                .to(".gallery-page4 .gallery-background", {
                    scale: 0.9,
                    opacity: 0,
                }, 'b')
                .from("#gallery-second .gallery-topText h4, #gallery-second .gallery-topText h3, #gallery-second .gallery-bottomText h3, #gallery-second .gallery-bottomText p, #gallery-second .gallery-bottomText a", {
                    opacity: 0,
                    x: 50,
                })
                .to({}, { duration: 0.4 }, "+=0")

                // Transition to Slide 3
                .to("#gallery-third", {
                    transform: "translate(-50%, -56%)",
                }, 'c')
                .to("#gallery-third img", {
                    transform: "scale(1)",
                }, 'c')
                .to("#gallery-second", {
                    scale: 0.9,
                    opacity: 0,
                }, 'c')
                .from("#gallery-third .gallery-topText h4, #gallery-third .gallery-topText h3, #gallery-third .gallery-bottomText h3, #gallery-third .gallery-bottomText p, #gallery-third .gallery-bottomText a", {
                    opacity: 0,
                    x: 50,
                })
                .to({}, { duration: 0.4 }, "+=0")

                // Transition to Slide 4
                .to("#gallery-fourth", {
                    transform: "translate(-50%, -56%)",
                }, 'd')
                .to("#gallery-fourth img", {
                    transform: "scale(1)",
                }, 'd')
                .to("#gallery-third", {
                    scale: 0.9,
                    opacity: 0,
                }, 'd')
                .from("#gallery-fourth .gallery-topText h4, #gallery-fourth .gallery-topText h3, #gallery-fourth .gallery-bottomText h3, #gallery-fourth .gallery-bottomText p, #gallery-fourth .gallery-bottomText a", {
                    opacity: 0,
                    x: 50,
                })
                .to({}, { duration: 0.4 }, "+=0")

                // Transition to Slide 5
                .to("#gallery-fifth", {
                    transform: "translate(-50%, -56%)",
                }, 'e')
                .to("#gallery-fifth img", {
                    transform: "scale(1)",
                }, 'e')
                .to("#gallery-fourth", {
                    scale: 0.9,
                    opacity: 0,
                }, 'e')
                .from("#gallery-fifth .gallery-topText h4, #gallery-fifth .gallery-topText h3, #gallery-fifth .gallery-bottomText h3, #gallery-fifth .gallery-bottomText p, #gallery-fifth .gallery-bottomText a", {
                    opacity: 0,
                    x: 50,
                })
                .to({}, { duration: 0.4 }, "+=0");
        });

        // 2. Mobile Viewport (max-width: 800px)
        mm.add("(max-width: 800px)", () => {
            const tl4 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".gallery-page4",
                    start: "10% 10%",
                    end: "380% 30%",
                    scrub: 1,
                    pin: true,
                    invalidateOnRefresh: true,
                }
            });

            tl4.to(".gallery-page4", {
                backgroundColor: "#181717",
            }, 'start');

            gsap.set(".gallery-topText h4, .gallery-topText h3, .gallery-bottomText h3, .gallery-bottomText p, .gallery-bottomText a", {
                opacity: 1,
                x: 0
            });

            tl4.to(".gallery-box h3", {
                opacity: 0,
            }, 'a')
                .to(".gallery-page4 .gallery-background", {
                    width: "calc(100% - 1rem)",
                    height: "calc(100vh - 1rem)",
                    borderRadius: "3.5rem",
                    transform: "translate(-50%, -50%)",
                }, 'a')
                .to(".gallery-page4 .gallery-background img", {
                    transform: "scale(1)",
                }, 'a')
                .from(".gallery-background .gallery-topText h4, .gallery-background .gallery-topText h3, .gallery-background .gallery-bottomText h3, .gallery-background .gallery-bottomText p, .gallery-background .gallery-bottomText a", {
                    opacity: 0,
                    x: 50,
                })
                .to({}, { duration: 0.4 }, "+=0")

                // Transition to Slide 2
                .to("#gallery-second", {
                    transform: "translate(-50%, -50%)",
                }, 'b')
                .to("#gallery-second img", {
                    transform: "scale(1)",
                }, 'b')
                .to(".gallery-page4 .gallery-background", {
                    scale: 0.9,
                    opacity: 0,
                }, 'b')
                .from("#gallery-second .gallery-topText h4, #gallery-second .gallery-topText h3, #gallery-second .gallery-bottomText h3, #gallery-second .gallery-bottomText p, #gallery-second .gallery-bottomText a", {
                    opacity: 0,
                    x: 50,
                })
                .to({}, { duration: 0.4 }, "+=0")

                // Transition to Slide 3
                .to("#gallery-third", {
                    transform: "translate(-50%, -50%)",
                }, 'c')
                .to("#gallery-third img", {
                    transform: "scale(1)",
                }, 'c')
                .to("#gallery-second", {
                    scale: 0.9,
                    opacity: 0,
                }, 'c')
                .from("#gallery-third .gallery-topText h4, #gallery-third .gallery-topText h3, #gallery-third .gallery-bottomText h3, #gallery-third .gallery-bottomText p, #gallery-third .gallery-bottomText a", {
                    opacity: 0,
                    x: 50,
                })
                .to({}, { duration: 0.4 }, "+=0")

                // Transition to Slide 4
                .to("#gallery-fourth", {
                    transform: "translate(-50%, -50%)",
                }, 'd')
                .to("#gallery-fourth img", {
                    transform: "scale(1)",
                }, 'd')
                .to("#gallery-third", {
                    scale: 0.9,
                    opacity: 0,
                }, 'd')
                .from("#gallery-fourth .gallery-topText h4, #gallery-fourth .gallery-topText h3, #gallery-fourth .gallery-bottomText h3, #gallery-fourth .gallery-bottomText p, #gallery-fourth .gallery-bottomText a", {
                    opacity: 0,
                    x: 50,
                })
                .to({}, { duration: 0.4 }, "+=0")

                // Transition to Slide 5
                .to("#gallery-fifth", {
                    transform: "translate(-50%, -50%)",
                }, 'e')
                .to("#gallery-fifth img", {
                    transform: "scale(1)",
                }, 'e')
                .to("#gallery-fourth", {
                    scale: 0.9,
                    opacity: 0,
                }, 'e')
                .from("#gallery-fifth .gallery-topText h4, #gallery-fifth .gallery-topText h3, #gallery-fifth .gallery-bottomText h3, #gallery-fifth .gallery-bottomText p, #gallery-fifth .gallery-bottomText a", {
                    opacity: 0,
                    x: 50,
                })
                .to({}, { duration: 0.4 }, "+=0");
        });

        return () => mm.revert();
    }, { scope: pageRef });

    // Generate repeating Urbanland® elements
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
        <section className="gallery-page4" ref={pageRef}>
            <div className="gallery-slider">
                <div
                    className="gallery-box"
                    style={{ "--time": "40s", "--quantity": 6 }}
                >
                    {generateUrbanland(6)}
                </div>
            </div>

            {/* Slide 1: Real Estate */}
            <div className="gallery-background">
                <img src={gbg1} alt="outdoor furniture for real estate projects" />
                <div className="gallery-topText">
                    <h4>Real Estate & Townships</h4>
                    <h3>(Explore)</h3>
                </div>
                <div className="gallery-bottomText">
                    <div className="flex flex-col items-start gap-1 max-w-[65%]">
                        <h3 className="gallery-seo-keyword">outdoor furniture for real estate projects</h3>
                        <div className="w-full flex justify-start items-start gap-2">
                            <BsFillPlusCircleFill className="w-5 h-5 text-[#b1a696] mt-1 flex-shrink-0" />
                            <p className="text-[14px] text-[#f4efe7] font-medium leading-relaxed">
                                Premium WPC benches, GFRC planters, car parking sheds, and cabanas that enhance property value and resident experience. Bulk supply with guaranteed timelines for your handover schedule.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end justify-between min-h-[60px]">
                        <a href="/solutions/real-estate" className="gallery-link-btn text-[#b1a696] hover:text-[#f4efe7] text-[13px] font-semibold tracking-wide uppercase transition-colors duration-300">
                            Explore Real Estate Solutions →
                        </a>
                        <div className="relative z-9 w-40 h-[0.1rem] bg-[#4f4b48]">
                            <div className="progress-line absolute z-10 bg-[#0a7c41] w-[20%] h-[0.1rem] top-1/2 -translate-y-1/2 left-0"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide 2: Hotels & Resorts */}
            <div id="gallery-second" className="gallery-background2">
                <img src={gbg2} alt="hotel outdoor furniture manufacturer India" />
                <div className="gallery-topText">
                    <h4>Hotels & Resorts</h4>
                    <h3>(Explore)</h3>
                </div>
                <div className="gallery-bottomText">
                    <div className="flex flex-col items-start gap-1 max-w-[65%]">
                        <h3 className="gallery-seo-keyword">hotel outdoor furniture manufacturer India</h3>
                        <div className="w-full flex justify-start items-start gap-2">
                            <BsFillPlusCircleFill className="w-5 h-5 text-[#b1a696] mt-1 flex-shrink-0" />
                            <p className="text-[14px] text-[#f4efe7] font-medium leading-relaxed">
                                Luxury poolside loungers, wicker dining sets, and canteen furniture engineered for high guest footfall. Custom finishes to match your property's design language.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end justify-between min-h-[60px]">
                        <a href="/solutions/hotels-resorts" className="gallery-link-btn text-[#b1a696] hover:text-[#f4efe7] text-[13px] font-semibold tracking-wide uppercase transition-colors duration-300">
                            Explore Hospitality Solutions →
                        </a>
                        <div className="relative z-9 w-40 h-[0.1rem] bg-[#4f4b48]">
                            <div className="progress-line absolute z-10 bg-[#0a7c41] w-[40%] h-[0.1rem] top-1/2 -translate-y-1/2 left-0"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide 3: Hospitals */}
            <div id="gallery-third" className="gallery-background2">
                <img src={gbg3} alt="hospital outdoor furniture India" />
                <div className="gallery-topText">
                    <h4>Hospitals & Healthcare</h4>
                    <h3>(Explore)</h3>
                </div>
                <div className="gallery-bottomText">
                    <div className="flex flex-col items-start gap-1 max-w-[65%]">
                        <h3 className="gallery-seo-keyword">hospital outdoor furniture India</h3>
                        <div className="w-full flex justify-start items-start gap-2">
                            <BsFillPlusCircleFill className="w-5 h-5 text-[#b1a696] mt-1 flex-shrink-0" />
                            <p className="text-[14px] text-[#f4efe7] font-medium leading-relaxed">
                                Durable, low-maintenance benches, dustbins, and canteen tables built to withstand heavy daily use in medical campuses. Easy-clean materials that meet hygiene requirements.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end justify-between min-h-[60px]">
                        <a href="/solutions/hospitals" className="gallery-link-btn text-[#b1a696] hover:text-[#f4efe7] text-[13px] font-semibold tracking-wide uppercase transition-colors duration-300">
                            Explore Healthcare Solutions →
                        </a>
                        <div className="relative z-9 w-40 h-[0.1rem] bg-[#4f4b48]">
                            <div className="progress-line absolute z-10 bg-[#0a7c41] w-[60%] h-[0.1rem] top-1/2 -translate-y-1/2 left-0"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide 4: Education */}
            <div id="gallery-fourth" className="gallery-background2">
                <img src={gbg4} alt="campus outdoor furniture manufacturer" />
                <div className="gallery-topText">
                    <h4>Schools & Universities</h4>
                    <h3>(Explore)</h3>
                </div>
                <div className="gallery-bottomText">
                    <div className="flex flex-col items-start gap-1 max-w-[65%]">
                        <h3 className="gallery-seo-keyword">campus outdoor furniture manufacturer</h3>
                        <div className="w-full flex justify-start items-start gap-2">
                            <BsFillPlusCircleFill className="w-5 h-5 text-[#b1a696] mt-1 flex-shrink-0" />
                            <p className="text-[14px] text-[#f4efe7] font-medium leading-relaxed">
                                Heavy-duty canteen tables, WPC benches, and GFRC planters built for high-footfall educational campuses. Resistant to vandalism, low on maintenance.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end justify-between min-h-[60px]">
                        <a href="/solutions/education" className="gallery-link-btn text-[#b1a696] hover:text-[#f4efe7] text-[13px] font-semibold tracking-wide uppercase transition-colors duration-300">
                            Explore Campus Solutions →
                        </a>
                        <div className="relative z-9 w-40 h-[0.1rem] bg-[#4f4b48]">
                            <div className="progress-line absolute z-10 bg-[#0a7c41] w-[80%] h-[0.1rem] top-1/2 -translate-y-1/2 left-0"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide 5: Municipal & Smart Cities */}
            <div id="gallery-fifth" className="gallery-background2">
                <img src={gbg5} alt="smart city furniture manufacturer India" />
                <div className="gallery-topText">
                    <h4>Municipal & Smart Cities</h4>
                    <h3>(Explore)</h3>
                </div>
                <div className="gallery-bottomText">
                    <div className="flex flex-col items-start gap-1 max-w-[65%]">
                        <h3 className="gallery-seo-keyword">smart city furniture manufacturer India</h3>
                        <div className="w-full flex justify-start items-start gap-2">
                            <BsFillPlusCircleFill className="w-5 h-5 text-[#b1a696] mt-1 flex-shrink-0" />
                            <p className="text-[14px] text-[#f4efe7] font-medium leading-relaxed">
                                Robust MS/SS bus shelters, stainless steel bollards, park benches, and outdoor dustbins for India's Smart City Mission projects. Compliant with urban infrastructure standards.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end justify-between min-h-[60px]">
                        <a href="/solutions/smart-cities" className="gallery-link-btn text-[#b1a696] hover:text-[#f4efe7] text-[13px] font-semibold tracking-wide uppercase transition-colors duration-300">
                            Explore Smart City Solutions →
                        </a>
                        <div className="relative z-9 w-40 h-[0.1rem] bg-[#4f4b48]">
                            <div className="progress-line absolute z-10 bg-[#0a7c41] w-[100%] h-[0.1rem] top-1/2 -translate-y-1/2 left-0"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;