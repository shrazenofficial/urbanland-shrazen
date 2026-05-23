import React, { useRef, useState } from "react";
import gsap, { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import colimg1 from "../../assets/Bench_Planter.png";
import colimg2 from "../../assets/Car_Shelter.png";
import colimg3 from "../../assets/Wicker_Furniture.png";
import colimg4 from "../../assets/Bus_Shelters.png";

const StickyCols = () => {
    const containerRef = useRef(null);
    const [fontsLoaded, setFontsLoaded] = useState(false);

    React.useEffect(() => {
        document.fonts.ready.then(() => setFontsLoaded(true));
    }, []);

    useGSAP(() => {
        if (!fontsLoaded) return;

        gsap.registerPlugin(ScrollTrigger, SplitText);

        const mm = gsap.matchMedia();

        // 1️⃣ Desktop animation timeline (screens >= 1024px)
        mm.add("(min-width: 1024px)", () => {
            // Split text lines once DOM ready for smooth reveals
            const textElements = document.querySelectorAll(".col-3 h1, .col-3 p");
            textElements.forEach((element) => {
                const split = new SplitText(element, { type: "lines", linesClass: "line" });
                split.lines.forEach((line) => {
                    line.innerHTML = `<span>${line.textContent}</span>`;
                });
            });

            // Initial state
            gsap.set(".col-3 .col-content-wrapper .line span", { yPercent: 0 });
            gsap.set(".col-3 .col-content-wrapper-2 .line span", { yPercent: -125 });
            gsap.set(".col-3 .col-content-wrapper-2", { opacity: 0 });

            // Controlled phase logic using timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".sticky-cols",
                    start: "top top",
                    end: "+=130%",
                    pin: true,
                    scrub: 1,
                },
            });

            // PHASE 1: Reveal col-2, hide col-1
            tl.to(".col-1", { opacity: 0, scale: 0.8, duration: 0.8 })
                .to(".col-2", { x: "0%", duration: 0.8 }, "<")
                .to(".col-3", { y: "0%", duration: 0.8 }, "<")
                .to(".col-2 .col-img-1 img", { scale: 1, duration: 0.8 }, "<")
                .to(".col-2 .col-img-2", {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    duration: 0.8,
                }, "<")
                .to(".col-2 .col-img-2 img", { scale: 1.05, duration: 0.8 }, "<");

            // PHASE 2: Switch col-2 -> col-3 content
            tl.to(".col-2", { opacity: 0, scale: 0.8, duration: 0.8 })
                .to(".col-3 .col-content-wrapper .line span", {
                    yPercent: -125,
                    duration: 0.8,
                }, "<")
                .to(".col-3 .col-content-wrapper", { opacity: 0, duration: 0.4 }, "<")
                .to(".col-3 .col-content-wrapper-2", { opacity: 1, duration: 0.4 }, "<");
            tl.to(".col-3", { x: "0%", duration: 0.8 }, "-=0.8")
                .to(".col-4", { y: "0%", duration: 0.8 }, "<")
                .to(".col-3 .col-content-wrapper-2 .line span", {
                    yPercent: 0,
                    delay: 0.4,
                    duration: 0.8,
                }, "<");

            // PHASE 3: Switch col-3 -> col-4 content (reveal col-5)
            tl.to(".col-3", { opacity: 0, scale: 0.8, duration: 0.8 })
                .to(".col-4", { x: "0%", duration: 0.8 }, "<")
                .to(".col-5", { y: "0%", duration: 0.8 }, "<")
                .to(".col-4 .col-img-1 img", { scale: 1, duration: 0.8 }, "<")
                .to(".col-4 .col-img-2", {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    duration: 0.8,
                }, "<")
                .to(".col-4 .col-img-2 img", { scale: 1.05, duration: 0.8 }, "<");
        });

        // 2️⃣ Mobile scrolling animation (screens < 1024px)
        mm.add("(max-width: 1023px)", () => {
            gsap.from(".mobile-project-card", {
                opacity: 0,
                y: 40,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".mobile-projects-wrapper",
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                }
            });
        });

        // Recalculate triggers after initialization
        ScrollTrigger.sort();
        ScrollTrigger.refresh();

        return () => {
            mm.revert();
        };
    }, { dependencies: [fontsLoaded] });

    return (
        <>
            {/* Desktop Layout - Pinned Horizontal Scroll Trigger */}
            <section className="sticky-cols w-full h-screen bg-[#181717] hidden lg:block overflow-hidden">
                <div ref={containerRef} className="relative w-full h-full">
                    
                    {/* Slide 1 Text: Lodha */}
                    <div className="col col-1">
                        <div className="col-content">
                            <div className="col-content-wrapper flex flex-col justify-between p-10 md:p-16 lg:p-20 bg-[#2a2725] overflow-hidden">
                                <div>
                                    <span className="text-[#b1a696] text-[10px] md:text-xs font-semibold uppercase tracking-widest block mb-2">Lodha Group</span>
                                    <h2 className="text-3xl md:text-5xl font-black text-[#f4efe7] leading-tight uppercase tracking-tight">Multiple Townships</h2>
                                </div>
                                <div className="my-auto flex flex-col gap-3">
                                    <div className="text-base md:text-xl font-extrabold text-[#f4efe7] border-l-2 border-[#b1a696] pl-3">
                                        420+ Benches & Planters
                                    </div>
                                    <p className="text-xs md:text-sm text-[#b1a696] leading-relaxed max-w-[90%]">
                                        420+ WPC & SS benches + GFRC planters supplied across Lodha's premium residential township developments.
                                    </p>
                                </div>
                                <div className="flex justify-between items-end w-full">
                                    <a 
                                        href="/solutions/real-estate" 
                                        className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#f4efe7] border-b border-[#f4efe7]/20 hover:text-[#b1a696] hover:border-[#b1a696]/40 pb-0.5 transition-all"
                                    >
                                        Explore Lodha Project Details →
                                    </a>
                                    <span className="text-[#b1a696] text-[10px] font-bold uppercase tracking-widest bg-black/30 px-3 py-1 rounded-full border border-[#b1a696]/20">01 / 04</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Column 1 & 2 */}
                    <div className="col col-2">
                        <div className="col-img col-img-1">
                            <div className="col-img-wrapper">
                                <img src={colimg1} alt="Urbanland Products WPC benches and planters installed in Lodha township" />
                            </div>
                        </div>
                        <div className="col col-img-2">
                            <div className="col-img-wrapper">
                                <img src={colimg2} alt="Outdoor urban furniture installed at Adani Realty residential project by Urbanland Products" />
                            </div>
                        </div>
                    </div>

                    {/* Slide 2 & 3 Text: Adani & Oberoi */}
                    <div className="col col-3">
                        {/* Slide 2 Text */}
                        <div className="col-content-wrapper flex flex-col justify-between p-10 md:p-16 lg:p-20 bg-[#2a2725] overflow-hidden">
                            <div>
                                <span className="text-[#b1a696] text-[10px] md:text-xs font-semibold uppercase tracking-widest block mb-2">Adani Realty</span>
                                <h1 className="text-3xl md:text-5xl font-black text-[#f4efe7] leading-tight uppercase tracking-tight">
                                    Premium Residential
                                </h1>
                            </div>
                            <div className="my-auto flex flex-col gap-3">
                                <div className="text-base md:text-xl font-extrabold text-[#f4efe7] border-l-2 border-[#b1a696] pl-3">
                                    Complete Site Supply
                                </div>
                                <p className="text-xs md:text-sm text-[#b1a696] leading-relaxed max-w-[90%]">
                                    Complete outdoor furniture solution including benches, dustbins, planters, and car parking sheds delivered on schedule.
                                </p>
                            </div>
                            <div className="flex justify-between items-end w-full">
                                <a 
                                    href="/solutions/real-estate" 
                                    className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#f4efe7] border-b border-[#f4efe7]/20 hover:text-[#b1a696] hover:border-[#b1a696]/40 pb-0.5 transition-all"
                                >
                                    Explore Adani Project Details →
                                </a>
                                <span className="text-[#b1a696] text-[10px] font-bold uppercase tracking-widest bg-black/30 px-3 py-1 rounded-full border border-[#b1a696]/20">02 / 04</span>
                            </div>
                        </div>
                        
                        {/* Slide 3 Text */}
                        <div className="col-content-wrapper-2 flex flex-col justify-between p-10 md:p-16 lg:p-20 bg-[#2a2725] overflow-hidden">
                            <div>
                                <span className="text-[#b1a696] text-[10px] md:text-xs font-semibold uppercase tracking-widest block mb-2">Oberoi Realty</span>
                                <h1 className="text-3xl md:text-5xl font-black text-[#f4efe7] leading-tight uppercase tracking-tight">
                                    Luxury Project
                                </h1>
                            </div>
                            <div className="my-auto flex flex-col gap-3">
                                <div className="text-base md:text-xl font-extrabold text-[#f4efe7] border-l-2 border-[#b1a696] pl-3">
                                    Premium Wicker & Cabanas
                                </div>
                                <p className="text-xs md:text-sm text-[#b1a696] leading-relaxed max-w-[90%]">
                                    Premium wicker furniture, poolside loungers, and cabanas crafted for Oberoi's high-end residential and hospitality developments.
                                </p>
                            </div>
                            <div className="flex justify-between items-end w-full">
                                <a 
                                    href="/solutions/hotels-resorts" 
                                    className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#f4efe7] border-b border-[#f4efe7]/20 hover:text-[#b1a696] hover:border-[#b1a696]/40 pb-0.5 transition-all"
                                >
                                    Explore Oberoi Project Details →
                                </a>
                                <span className="text-[#b1a696] text-[10px] font-bold uppercase tracking-widest bg-black/30 px-3 py-1 rounded-full border border-[#b1a696]/20">03 / 04</span>
                            </div>
                        </div>
                    </div>

                    {/* Image Column 3 & 4 */}
                    <div className="col col-4">
                        <div className="col-img col-img-1">
                            <div className="col-img-wrapper">
                                <img src={colimg3} alt="Premium wicker furniture, poolside loungers, and cabanas crafted for Oberoi's luxury project" />
                            </div>
                        </div>
                        <div className="col col-img-2">
                            <div className="col-img-wrapper">
                                <img src={colimg4} alt="MS/SS bus shelters, park benches, bollards, and outdoor dustbins delivered for urban infrastructure" />
                            </div>
                        </div>
                    </div>

                    {/* Slide 4 Text: Smart City */}
                    <div className="col col-5">
                        <div className="col-content">
                            <div className="col-content-wrapper flex flex-col justify-between p-10 md:p-16 lg:p-20 bg-[#2a2725] overflow-hidden">
                                <div>
                                    <span className="text-[#b1a696] text-[10px] md:text-xs font-semibold uppercase tracking-widest block mb-2">Smart City / Municipal</span>
                                    <h2 className="text-3xl md:text-5xl font-black text-[#f4efe7] leading-tight uppercase tracking-tight">Project</h2>
                                </div>
                                <div className="my-auto flex flex-col gap-3">
                                    <div className="text-base md:text-xl font-extrabold text-[#f4efe7] border-l-2 border-[#b1a696] pl-3">
                                        Smart Transit Shelters
                                    </div>
                                    <p className="text-xs md:text-sm text-[#b1a696] leading-relaxed max-w-[90%]">
                                        MS/SS bus shelters, park benches, bollards, and outdoor dustbins delivered for urban infrastructure development.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-4 border-t border-white/10 pt-4 w-full">
                                    <div className="flex justify-between items-center w-full">
                                        <a 
                                            href="/solutions/smart-cities" 
                                            className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#f4efe7] border-b border-[#f4efe7]/20 hover:text-[#b1a696] hover:border-[#b1a696]/40 pb-0.5 transition-all"
                                        >
                                            Explore Smart City Details →
                                        </a>
                                        <span className="text-[#b1a696] text-[10px] font-bold uppercase tracking-widest bg-black/30 px-3 py-1 rounded-full border border-[#b1a696]/20">04 / 04</span>
                                    </div>
                                    {/* Overall Section CTAs */}
                                    <div className="flex items-center gap-5 mt-2">
                                        <a 
                                            href="/projects" 
                                            className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[#b1a696] hover:text-[#f4efe7] transition-colors flex items-center"
                                        >
                                            ▸ View All Projects →
                                        </a>
                                        <a 
                                            href="/contact" 
                                            className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[#f4efe7] hover:text-[#b1a696] transition-colors flex items-center"
                                        >
                                            ▸ Get a Similar Solution for Your Project →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Mobile Layout - Premium Responsive Card Stack (Scrolls Naturally) */}
            <section className="sticky-cols-mobile w-full bg-[#181717] px-6 py-16 flex flex-col gap-10 lg:hidden block">
                <div className="flex flex-col gap-2 mb-4">
                    <p className="text-[.7rem] font-bold text-[#b1a696] uppercase tracking-widest">— Case Studies</p>
                    <h2 className="text-3xl font-extrabold text-[#f4efe7] tracking-tight leading-tight">Specified by Industry Leaders</h2>
                </div>

                <div className="mobile-projects-wrapper flex flex-col gap-8 w-full">
                    {/* Card 1: Lodha */}
                    <div className="mobile-project-card bg-[#2a2725] rounded-[2rem] overflow-hidden p-5 border border-white/5 flex flex-col gap-4">
                        <div className="w-full h-[200px] rounded-[1.5rem] overflow-hidden bg-black/10">
                            <img src={colimg1} alt="Urbanland Products WPC benches and planters installed in Lodha township" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center w-full">
                                <span className="text-[#b1a696] text-[10px] font-bold uppercase tracking-widest bg-black/30 px-3 py-1 rounded-full border border-[#b1a696]/20">01 / 04</span>
                                <span className="text-[#eae5dd]/70 text-xs font-semibold">Lodha Group</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#f4efe7] leading-snug">Multiple Townships</h3>
                            <div className="text-xs font-bold text-[#f4efe7] border-l-2 border-[#b1a696] pl-2 my-1">
                                420+ Benches & Planters
                            </div>
                            <p className="text-xs text-[#b1a696] leading-relaxed">
                                420+ WPC & SS benches + GFRC planters supplied across Lodha's premium residential township developments.
                            </p>
                            <a href="/solutions/real-estate" className="text-[#f4efe7] text-[10px] font-bold uppercase tracking-wider border-b border-white/10 w-fit pb-0.5 mt-2">
                                Explore Lodha Project Details →
                            </a>
                        </div>
                    </div>

                    {/* Card 2: Adani */}
                    <div className="mobile-project-card bg-[#2a2725] rounded-[2rem] overflow-hidden p-5 border border-white/5 flex flex-col gap-4">
                        <div className="w-full h-[200px] rounded-[1.5rem] overflow-hidden bg-black/10">
                            <img src={colimg2} alt="Outdoor urban furniture installed at Adani Realty residential project by Urbanland Products" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center w-full">
                                <span className="text-[#b1a696] text-[10px] font-bold uppercase tracking-widest bg-black/30 px-3 py-1 rounded-full border border-[#b1a696]/20">02 / 04</span>
                                <span className="text-[#eae5dd]/70 text-xs font-semibold">Adani Realty</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#f4efe7] leading-snug">Premium Residential</h3>
                            <div className="text-xs font-bold text-[#f4efe7] border-l-2 border-[#b1a696] pl-2 my-1">
                                Complete Site Supply
                            </div>
                            <p className="text-xs text-[#b1a696] leading-relaxed">
                                Complete outdoor furniture solution including benches, dustbins, planters, and car parking sheds delivered on schedule.
                            </p>
                            <a href="/solutions/real-estate" className="text-[#f4efe7] text-[10px] font-bold uppercase tracking-wider border-b border-white/10 w-fit pb-0.5 mt-2">
                                Explore Adani Project Details →
                            </a>
                        </div>
                    </div>

                    {/* Card 3: Oberoi */}
                    <div className="mobile-project-card bg-[#2a2725] rounded-[2rem] overflow-hidden p-5 border border-white/5 flex flex-col gap-4">
                        <div className="w-full h-[200px] rounded-[1.5rem] overflow-hidden bg-black/10">
                            <img src={colimg3} alt="Premium wicker furniture, poolside loungers, and cabanas crafted for Oberoi's luxury project" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center w-full">
                                <span className="text-[#b1a696] text-[10px] font-bold uppercase tracking-widest bg-black/30 px-3 py-1 rounded-full border border-[#b1a696]/20">03 / 04</span>
                                <span className="text-[#eae5dd]/70 text-xs font-semibold">Oberoi Realty</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#f4efe7] leading-snug">Luxury Project</h3>
                            <div className="text-xs font-bold text-[#f4efe7] border-l-2 border-[#b1a696] pl-2 my-1">
                                Premium Wicker & Cabanas
                            </div>
                            <p className="text-xs text-[#b1a696] leading-relaxed">
                                Premium wicker furniture, poolside loungers, and cabanas crafted for Oberoi's high-end residential and hospitality developments.
                            </p>
                            <a href="/solutions/hotels-resorts" className="text-[#f4efe7] text-[10px] font-bold uppercase tracking-wider border-b border-white/10 w-fit pb-0.5 mt-2">
                                Explore Oberoi Project Details →
                            </a>
                        </div>
                    </div>

                    {/* Card 4: Smart City */}
                    <div className="mobile-project-card bg-[#2a2725] rounded-[2rem] overflow-hidden p-5 border border-white/5 flex flex-col gap-4">
                        <div className="w-full h-[200px] rounded-[1.5rem] overflow-hidden bg-black/10">
                            <img src={colimg4} alt="MS/SS bus shelters, park benches, bollards, and outdoor dustbins delivered for urban infrastructure" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center w-full">
                                <span className="text-[#b1a696] text-[10px] font-bold uppercase tracking-widest bg-black/30 px-3 py-1 rounded-full border border-[#b1a696]/20">04 / 04</span>
                                <span className="text-[#eae5dd]/70 text-xs font-semibold">Smart City / Municipal</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#f4efe7] leading-snug">Project</h3>
                            <div className="text-xs font-bold text-[#f4efe7] border-l-2 border-[#b1a696] pl-2 my-1">
                                Smart Transit Shelters
                            </div>
                            <p className="text-xs text-[#b1a696] leading-relaxed">
                                MS/SS bus shelters, park benches, bollards, and outdoor dustbins delivered for urban infrastructure development.
                            </p>
                            <a href="/solutions/smart-cities" className="text-[#f4efe7] text-[10px] font-bold uppercase tracking-wider border-b border-white/10 w-fit pb-0.5 mt-2">
                                Explore Smart City Details →
                            </a>
                        </div>
                    </div>
                </div>

                {/* Mobile Section CTAs */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 pt-8 border-t border-white/5 w-full">
                    <a 
                        href="/projects" 
                        className="w-full sm:w-auto text-center px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-neutral-900 border border-white/10 text-[#b1a696] hover:text-[#f4efe7] hover:border-white/20 transition-all active:scale-95 cursor-pointer"
                    >
                        ▸ View All Projects →
                    </a>
                    <a 
                        href="/contact" 
                        className="w-full sm:w-auto text-center px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-[#f4efe7] text-[#2a2725] hover:bg-[#eae5dd] hover:scale-102 transition-all active:scale-95 cursor-pointer"
                    >
                        ▸ Get a Similar Solution for Your Project →
                    </a>
                </div>
            </section>
        </>
    );
};

export default StickyCols;