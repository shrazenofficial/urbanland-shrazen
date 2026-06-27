import React from 'react';
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

const brandNames = [
    "Lodha", "Adani Realty", "Oberoi", "Kalpataru", "Rustomjee",
    "Godrej Properties", "Tata Housing", "Sobha", "DLF", "L&T Realty",
    "Prestige Group", "Brigade Group", "K Raheja Corp", "Shapoorji Pallonji"
];

const brandLogos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7,
    logo8, logo9, logo10, logo11, logo12, logo13, logo14
];

const Activities = () => {
    return (
        <section id="activities" className="activities-section w-full py-16 p-6 sm:p-8 md:px-16 lg:px-20 relative overflow-hidden bg-background">
            {/* Infinite Scrolling Client logo Marquee */}
            <div className="w-full">
                <div className="text-center mb-10">
                    <span className="font-label-technical text-craftsman-gold tracking-[0.25em] uppercase font-semibold text-xs block mb-3">
                        Trusted Across India
                    </span>
                    <div className="w-20 h-[1px] bg-craftsman-gold/40 mx-auto"></div>
                </div>

                <div className="logo-marquee-container">
                    <div className="logo-marquee-track">
                        {/* Repeat logos twice for seamless infinite scrolling loop */}
                        {[...brandLogos, ...brandLogos].map((logo, index) => (
                            <div 
                                key={index} 
                                className="flex justify-center items-center h-16 w-36 px-6 mx-4 bg-white/60 backdrop-blur-sm rounded-xl border border-[#2D2D2D]/10 hover:border-craftsman-gold/40 transition-all duration-300"
                            >
                                <img 
                                    src={logo} 
                                    alt={`${brandNames[index % brandNames.length] || "Real Estate Developer"} partner logo`} 
                                    className="max-h-10 max-w-full object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Activities;