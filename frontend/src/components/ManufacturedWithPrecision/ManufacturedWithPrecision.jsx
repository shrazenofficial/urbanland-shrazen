import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Import local assets
import welcome1 from '../../assets/welcome-1.png';
import manufacturingVideo from '../../assets/smoke_final.mp4';

const ManufacturedWithPrecision = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        // IntersectionObserver to autoplay when visible and pause when scrolled away
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    videoElement.play().catch((err) => {
                        console.log('Autoplay prevented: ', err);
                    });
                } else {
                    videoElement.pause();
                }
            },
            {
                threshold: 0.25,
            }
        );

        observer.observe(videoElement);

        return () => {
            if (videoElement) {
                observer.unobserve(videoElement);
            }
        };
    }, []);

    return (
        <section className="py-24 px-6 md:px-16 lg:px-20 bg-[#1A1A1A] text-[#F7F4EF] border-t border-white/5 relative overflow-hidden">
            {/* Soft background ambient glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-craftsman-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    
                    {/* Left Column (Right on desktop): Stats & Dashboard Details */}
                    <div className="w-full lg:w-5/12 flex flex-col text-left order-1 lg:order-2">
                        <span className="font-label-technical text-craftsman-gold tracking-[0.25em] uppercase font-semibold text-xs block mb-3">
                            Built in India
                        </span>
                        <h2 className="font-headline-lg text-4xl md:text-5xl text-white uppercase tracking-tight mb-6">
                            Manufactured<br />with Precision
                        </h2>
                        <div className="w-20 h-[2px] bg-craftsman-gold mb-12"></div>
                        
                        {/* Stats Dashboard Grid */}
                        <div className="flex flex-col gap-8 mb-12">
                            <div className="flex items-center gap-6 border-b border-white/10 pb-6">
                                <span className="text-4xl md:text-5xl font-black text-craftsman-gold font-headline-lg shrink-0 w-28">
                                    20k
                                </span>
                                <span className="text-xs md:text-sm text-white/70 uppercase tracking-widest font-label-technical font-medium">
                                    Sq. Ft. Factory Floor
                                </span>
                            </div>
                            <div className="flex items-center gap-6 border-b border-white/10 pb-6">
                                <span className="text-4xl md:text-5xl font-black text-craftsman-gold font-headline-lg shrink-0 w-28">
                                    100%
                                </span>
                                <span className="text-xs md:text-sm text-white/70 uppercase tracking-widest font-label-technical font-medium">
                                    CNC Precision Check
                                </span>
                            </div>
                            <div className="flex items-center gap-6 pb-2">
                                <span className="text-4xl md:text-5xl font-black text-craftsman-gold font-headline-lg shrink-0 w-28">
                                    Zero
                                </span>
                                <span className="text-xs md:text-sm text-white/70 uppercase tracking-widest font-label-technical font-medium">
                                    Defect Tolerance
                                </span>
                            </div>
                        </div>

                        {/* CTA Link */}
                        <div>
                            <Link 
                                to="/about" 
                                className="inline-flex items-center gap-3 px-8 py-4 bg-craftsman-gold hover:bg-white text-[#1A1A1A] rounded-[4px] font-label-technical text-xs font-bold uppercase tracking-widest shadow-md transition-all active:scale-98"
                            >
                                About Our Company →
                            </Link>
                        </div>
                    </div>

                    {/* Right Column (Left on desktop): Manufacturing Video */}
                    <div className="w-full lg:w-7/12 flex items-center justify-center order-2 lg:order-1">
                        <div className="w-full aspect-[16/9] rounded-[24px] border border-white/5 overflow-hidden relative bg-black shadow-2xl group">
                            
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover"
                                src={manufacturingVideo}
                                poster={welcome1}
                                muted
                                loop
                                playsInline
                                preload="none"
                            />

                            {/* Shading overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ManufacturedWithPrecision;
