import React from 'react';
import { useMediaQuery } from "react-responsive";
import { activitiesLinesLG, activitiesLinesSM } from "../../constants/activites";
import './activities.css';

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
import logo11 from "../../assets/brands/7-1.png";
import logo12 from "../../assets/brands/8-1.png";
import logo13 from "../../assets/brands/9-1.png";
import logo14 from "../../assets/brands/New-Project-7-Photoroom.png";
import featuredImg from "../../assets/Bench_Planter.png";

const brandLogos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7,
    logo8, logo9, logo10, logo11, logo12, logo13, logo14
];

const Activities = () => {
    const isMobD = useMediaQuery({
        query: "(max-width:768px)",
    });
    const activitiesLines = isMobD ? activitiesLinesSM : activitiesLinesLG;

    return (
        <section className="activities-section w-full min-h-[100vh] lg:h-[100vh] p-8 mt-16 flex flex-col justify-between pb-16">
            <div>
                <p className='text-[.7rem] font-bold text-[#eae5dd] activities-subtitle text-white/60'>— From Premium Townships to Smart Cities</p>
                <div className="lg:mt-10 mt-7 activities-part origin-bottom">
                    {activitiesLines.map((line, index) => (
                        <h1 key={index} className="text-[#f4efe7] lg:text-[9.5rem] text-[3rem] leading-[0.9] font-medium tracking-tighter">
                            {line}
                        </h1>
                    ))}
                </div>
            </div>
            
            <div className="activities-sec w-full flex lg:flex-row flex-col justify-between items-start gap-10 lg:mt-0 mt-8">
                <div className='lg:w-[55%] w-full'>
                    <div className="mb-6">
                        <p className="text-[.8rem] font-semibold text-[#eae5dd] uppercase tracking-wider">Trusted Across India</p>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-4">
                        {brandLogos.map((logo, index) => (
                            <div key={index} className="brand-logo-card flex justify-center items-center h-14 md:h-16 p-3 bg-[#eae5dd]/90 hover:bg-[#eae5dd] rounded-xl transition-all duration-300 shadow-sm hover:scale-105 transform">
                                <img 
                                    src={logo} 
                                    alt={`Brand logo ${index + 1}`} 
                                    className="max-h-full max-w-full object-contain hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='lg:w-[40%] w-full flex flex-col justify-end gap-6 lg:-mt-12'>
                    <div className="activities-featured-img w-full h-[220px] md:h-[280px] overflow-hidden rounded-3xl border border-[#4f4b48]/30 shadow-2xl">
                        <img 
                            src={featuredImg} 
                            alt="Urbanland Premium Township Project" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                        />
                    </div>
                    <div className='text-[#b1a696] lg:text-[1.6rem] text-[1.1rem] md:leading-[1.2] font-normal'>
                        <p>Over 50 major outdoor furniture projects delivered across 15+ cities. Specified by India's most respected real estate developers, hospitality groups & municipal bodies.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Activities;