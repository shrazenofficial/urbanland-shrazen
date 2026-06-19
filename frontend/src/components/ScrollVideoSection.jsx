import React, { useEffect, useRef } from "react";

const ScrollVideoSection = ({
    badge = "DESIGNED FOR LEISURE",
    heading = "Why Premium Poolside Loungers Matter",
    videoUrl = "https://urbanlandproducts.com/wp-content/uploads/2026/06/Poolside-Loungers_UBL.mp4",
    description = "A luxury pool deck is defined by the quality of its relaxation spaces. Cheap loungers crack, fade, and degrade under intense UV rays and chlorine exposure. Urbanland's premium sun loungers are built to withstand the harshest environments while delivering unmatched comfort.",
    features = [
        {
            icon: "wb_sunny",
            title: "All-Weather Resilience",
            desc: "UV-stabilized HDPE synthetic rattan and rust-proof aluminum frames."
        },
        {
            icon: "water_drop",
            title: "Quick-Dry Engineering",
            desc: "Reticulated foam cushions that drain water instantly to prevent mold."
        },
        {
            icon: "airline_seat_recline_normal",
            title: "Ergonomic Comfort",
            desc: "Multi-stage reclining profiles engineered for luxury hospitality standards."
        },
        {
            icon: "verified_user",
            title: "Commercial Guarantee",
            desc: "Backed by India's only comprehensive 2-year warranty for peace of mind."
        }
    ]
}) => {
    const videoRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().catch(err => {
                        console.log("Autoplay was prevented or video not ready:", err);
                    });
                } else {
                    video.pause();
                }
            },
            {
                threshold: 0.15 // Play when 15% of the section is visible
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <>
            {/* Part 1: Why & Video Columns */}
            <section
                ref={containerRef}
                className="reveal-section bg-charcoal-industrial text-white pt-20 md:pt-24 pb-12 px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-white/5"
            >
                <div className="max-w-container-max mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                        {/* Left Column: Text Only */}
                        <div className="lg:col-span-6 space-y-8 text-left">
                            <div className="space-y-4 reveal-up">
                                <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
                                    {badge}
                                </span>
                                <h2 className="font-headline-lg text-3xl md:text-4xl lg:text-5xl text-white leading-tight font-light">
                                    {heading}
                                </h2>
                                <div className="w-20 h-1 bg-craftsman-gold"></div>
                            </div>

                            <p className="font-body-md text-white/70 leading-relaxed text-base max-w-xl reveal-up" style={{ transitionDelay: "100ms" }}>
                                {description}
                            </p>
                        </div>

                        {/* Right Column: Seamless Video Showcase */}
                        <div className="lg:col-span-6 reveal-up" style={{ transitionDelay: "150ms" }}>
                            <div className="relative aspect-video w-full overflow-hidden rounded-[8px] bg-black/20 border border-white/10 shadow-2xl group">
                                {/* Video Element */}
                                <video
                                    ref={videoRef}
                                    src={videoUrl}
                                    loop
                                    muted
                                    playsInline
                                    webkit-playsinline="true"
                                    preload="auto"
                                    className="w-full h-full object-cover pointer-events-none"
                                />

                                {/* Ambient Overlay to blend it nicely */}
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-industrial/20 via-transparent to-transparent pointer-events-none" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Part 2: Horizontal Features Strip Section (Responsive Icon + 600 Weight Title) */}
            {features && features.length > 0 && (
                <section className="bg-charcoal-industrial text-white pb-20 md:pb-24 pt-8 px-margin-mobile md:px-margin-desktop border-b border-white/10">
                    <div className="max-w-container-max mx-auto">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                            {features.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-4 p-4 sm:p-5 bg-white/[0.03] border border-white/5 hover:border-craftsman-gold/30 hover:bg-white/[0.06] transition-all duration-300 rounded-[8px] reveal-up"
                                    style={{ transitionDelay: `${idx * 100}ms` }}
                                >
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-white/5 border border-white/10 text-craftsman-gold flex items-center justify-center rounded-[6px]">
                                        <span className="material-symbols-outlined text-xl sm:text-2xl">{feature.icon}</span>
                                    </div>
                                    <h4 className="font-semibold text-sm lg:text-[15px] text-white tracking-wide leading-tight">
                                        {feature.title}
                                    </h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default ScrollVideoSection;
