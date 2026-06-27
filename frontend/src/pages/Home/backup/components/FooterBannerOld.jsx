import { useRef, useState } from 'react';
import banner from '../../../../assets/Wicker_Furniture.jpeg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ClickIndicator from '../../../../components/MapLink/ClickIndicator';

gsap.registerPlugin(ScrollTrigger);

const FooterBannerOld = () => {
    const [active, setActive] = useState(false);
    const fbConRef = useRef(null);
    const fbImgRef = useRef(null);

    useGSAP(() => {
        if (!fbConRef.current || !fbImgRef.current) return;

        gsap.fromTo(fbImgRef.current,
            {
                scale: 1.2, // Initial scale
            },
            {
                scale: 1, // Final scale
                ease: "none",
                scrollTrigger: {
                    trigger: fbConRef.current,
                    start: "top bottom-=20%",
                    end: "bottom top+=20%",
                    scrub: true,
                }
            }
        );

    }, { scope: fbConRef });

    return (
        <div ref={fbConRef} className="w-full h-dvh p-2">
            <div className="relative w-full h-full rounded-[2.5rem] bg-[#2D2D2D] overflow-hidden flex flex-col justify-center items-center p-8 md:p-16 lg:p-24 pb-20">
                <ClickIndicator active={active} />
                <img
                    onMouseEnter={() => setActive(true)}
                    onMouseLeave={() => setActive(false)}
                    ref={fbImgRef} 
                    src={banner} 
                    alt="Urbanland Products landmark project outdoor furniture installation" 
                    className="w-full h-full object-cover absolute inset-0 z-0" 
                />

                {/* Dark Readability Overlay */}
                <div className="absolute inset-0 bg-black/60 z-[1]" />

                {/* Content Block */}
                <div className="relative z-10 max-w-4xl flex flex-col gap-5 items-center my-auto text-center">
                    <p className="text-[#C9A84C] text-[0.7rem] font-bold uppercase tracking-widest">— Let's Build Together</p>
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F7F4EF] leading-[1.1] uppercase tracking-tight text-center">
                        Ready to Specify Outdoor Furniture for Your Next Project?
                    </h2>
                    
                    <p className="text-xs sm:text-base text-[#F7F4EF]/85 leading-relaxed max-w-2xl text-center font-light">
                        Get your custom project quote and full product catalogue in under 60 seconds. Urbanland Products — India's guaranteed outdoor furniture manufacturer for real estate, hospitality & smart cities.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mt-3 w-full">
                        <a 
                           href="/get-quote" 
                            className="px-6 py-3.5 bg-[#FF7D1A] hover:bg-[#E0650C] text-[#F7F4EF] rounded-full text-xs font-bold tracking-widest uppercase transition-all shadow-lg hover:shadow-orange-500/20 active:scale-95 text-center flex items-center gap-2"
                        >
                            ▸ Get Project Quote Now →
                        </a>
                        <a 
                            href="/resources/downloads" 
                            className="px-6 py-3.5 bg-transparent border border-[#F7F4EF] hover:bg-[#F7F4EF] hover:text-[#2D2D2D] text-[#F7F4EF] rounded-full text-xs font-bold tracking-widest uppercase transition-all active:scale-95 text-center flex items-center gap-2"
                        >
                            ▸ Download Full Catalogue 2026 ↓
                        </a>
                    </div>

                    {/* Supporting Line */}
                    <p className="text-[10px] text-[#F7F4EF]/70 font-semibold tracking-wide mt-2 text-center">
                        ✓ Free quote. No commitment. Nationwide delivery. 2-Year Guarantee on every product.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FooterBannerOld;
