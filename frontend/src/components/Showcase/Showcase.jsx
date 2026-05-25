import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

// Import Gallery assets for Solution Cards
import gbg1 from '../../assets/gallery_real_estate.png';
import gbg2 from '../../assets/gallery_hotels.png';
import gbg3 from '../../assets/gallery_hospitals.png';
import gbg4 from '../../assets/gallery_education.png';
import gbg5 from '../../assets/gallery_smart_city.png';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const showcaseSlides = [
    {
        title: "Real Estate & Townships",
        tag: "OFFICE",
        seoKeyword: "outdoor furniture for real estate projects",
        image: gbg1,
        desc: "Premium WPC benches, GFRC planters, car parking sheds, and cabanas that enhance property value and resident experience. Bulk supply with guaranteed timelines for your handover schedule.",
        link: "/solutions/real-estate",
        linkText: "Explore Real Estate Solutions →",
        num: "01",
    },
    {
        title: "Hotels & Resorts",
        tag: "HOTEL",
        seoKeyword: "hotel outdoor furniture manufacturer India",
        image: gbg2,
        desc: "Luxury poolside loungers, wicker dining sets, and canteen furniture engineered for high guest footfall. Custom finishes to match your property's design language.",
        link: "/solutions/hotels-resorts",
        linkText: "Explore Hospitality Solutions →",
        num: "02",
    },
    {
        title: "Hospitals & Healthcare",
        tag: "HOSPITAL",
        seoKeyword: "hospital outdoor furniture India",
        image: gbg3,
        desc: "Durable, low-maintenance benches, dustbins, and canteen tables built to withstand heavy daily use in medical campuses. Easy-clean materials that meet hygiene requirements.",
        link: "/solutions/hospitals",
        linkText: "Explore Healthcare Solutions →",
        num: "03",
    },
    {
        title: "Schools & Universities",
        tag: "EDU",
        seoKeyword: "campus outdoor furniture manufacturer",
        image: gbg4,
        desc: "Heavy-duty canteen tables, WPC benches, and GFRC planters built for high-footfall educational campuses. Resistant to vandalism, low on maintenance.",
        link: "/solutions/education",
        linkText: "Explore Campus Solutions →",
        num: "04",
    },
    {
        title: "Municipal & Smart Cities",
        tag: "CITY",
        seoKeyword: "smart city furniture manufacturer India",
        image: gbg5,
        desc: "Robust MS/SS bus shelters, stainless steel bollards, park benches, and outdoor dustbins for India's Smart City Mission projects. Compliant with urban infrastructure standards.",
        link: "/solutions/smart-cities",
        linkText: "Explore Smart City Solutions →",
        num: "05",
    }
];

const Showcase = () => {
    const containerRef = useRef(null);
    const imgConRef = useRef(null);

    useGSAP(() => {
        if (!imgConRef.current || !containerRef.current) return;

        gsap.to(imgConRef.current, {
            x: () => -(imgConRef.current.scrollWidth - containerRef.current.offsetWidth),
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: () => `+=${imgConRef.current.scrollWidth - containerRef.current.offsetWidth}`,
                scrub: true,
                pin: true,
                invalidateOnRefresh: true,
            }
        });
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className='relative w-full h-screen bg-[#181717] p-[10px] overflow-hidden'
        >
            <div
                ref={imgConRef}
                className="absolute top-[10px] left-0 h-[calc(100vh-20px)] flex items-stretch justify-start gap-[10px] px-[10px] overflow-hidden"
            >
                {showcaseSlides.map((slide, index) => (
                    <div 
                        key={index} 
                        className="relative flex-shrink-0 w-[calc(100vw-20px)] h-full overflow-hidden shadow-2xl"
                        style={{ borderRadius: index === 0 ? '37.5px' : '37px' }}
                    >
                        
                        {/* Top row with Category Title and Tag */}
                        <div className="w-[88%] absolute top-12 md:top-16 left-[6%] flex justify-between items-start text-[#f4efe7] z-20">
                            <h2 
                                className="font-black uppercase tracking-tight leading-none" 
                                style={{ 
                                    fontSize: index === 0 ? '37px' : '35px',
                                    fontWeight: 900,
                                    textShadow: '2px 2px 10px rgba(0,0,0,0.7)' 
                                }}
                            >
                                {slide.title}
                            </h2>
                            <p className="border-[1px] border-white/20 rounded-full px-4 py-1.5 text-center text-[10px] md:text-xs bg-black/40 backdrop-blur-sm uppercase tracking-widest font-bold">
                                {slide.tag}
                            </p>
                        </div>
                        
                        <img
                            src={slide.image}
                            alt={slide.seoKeyword}
                            className="image-item w-full h-full object-cover"
                            style={{ borderRadius: index === 0 ? '37.5px' : '37px' }}
                        />
                        
                        {/* Immersive overlay gradient for superb contrast and readability */}
                        <div 
                            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/50 pointer-events-none z-10" 
                            style={{ borderRadius: index === 0 ? '37.5px' : '37px' }}
                        />
                        
                        {/* Bottom Row with H3 Headline, Description, CTA Link and counter */}
                        <div className="w-[88%] absolute bottom-12 md:bottom-16 left-[6%] flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0 z-20">
                            <div className="max-w-[95%] md:max-w-[65%] lg:max-w-[70%] flex flex-col items-start gap-3 sm:gap-4">
                                {/* H3 Headline (SEO Keyword) */}
                                <h3 className="text-[#b1a696] font-bold uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-xl mb-1 leading-snug" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}>
                                    "{slide.seoKeyword}"
                                </h3>
                                {/* Description */}
                                <p className="text-xs md:text-sm lg:text-lg font-normal text-white/95 leading-relaxed max-w-xl md:max-w-3xl" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}>
                                    {slide.desc}
                                </p>
                                {/* CTA Link */}
                                <a 
                                    href={slide.link} 
                                    className="text-[#f4efe7] hover:text-[#b1a696] text-[11px] md:text-xs font-semibold tracking-wider uppercase transition-colors duration-300 border-b border-[#f4efe7]/20 hover:border-[#b1a696]/40 pb-0.5 mt-2"
                                >
                                    {slide.linkText}
                                </a>
                            </div>
                            
                            {/* Counter */}
                            <div className="flex justify-center items-center gap-1.5 flex-shrink-0 self-end md:self-auto">
                                <p className="text-[#f4efe7] border-[1px] border-white/30 bg-black/40 backdrop-blur-sm rounded-full px-4 py-1.5 text-center text-[10px] md:text-xs font-black tracking-widest">
                                    {slide.num}
                                </p>
                                <p className="text-white/40 border-[1px] border-white/10 bg-black/20 rounded-full px-4 py-1.5 text-center text-[10px] md:text-xs font-black tracking-widest">
                                    05
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Showcase;