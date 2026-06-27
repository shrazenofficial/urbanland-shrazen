import React, { useState } from 'react';
import { IoMdArrowForward, IoMdArrowBack } from 'react-icons/io';
import { testimonials } from '../../constants/feedback';

const Feedback = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const total = testimonials.length;

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % total);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + total) % total);
    };

    const handleCardClick = (idx) => {
        setActiveIndex(idx);
    };

    return (
        <section id="feedback" className="py-24 px-4 sm:px-6 md:px-16 bg-[#F9F7F2] border-t border-[#2D2D2D]/10 overflow-hidden relative">
            {/* Ambient gold glow in background */}
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-craftsman-gold/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto text-center relative z-10">
                {/* Header block */}
                <div className="mb-16">
                    <span className="font-label-technical text-craftsman-gold tracking-[0.25em] uppercase font-semibold text-xs block mb-3">
                        — Client Testimonials
                    </span>
                    <h2 className="font-headline-lg text-3xl md:text-4xl text-deep-ink uppercase tracking-tight">
                        What Our Clients Say
                    </h2>
                    <div className="w-20 h-[2px] bg-craftsman-gold mx-auto mt-4"></div>
                </div>

                {/* Peeking Card Deck Slider Container */}
                <div className="relative w-full overflow-visible py-8 mb-12">
                    {/* Testimonial cards track */}
                    <div 
                        className="feedback-track flex gap-4 md:gap-8 transition-transform duration-500 ease-out"
                    >
                        {/* Dynamic styles mapping only the track container */}
                        <style dangerouslySetInnerHTML={{__html: `
                            .feedback-track {
                                transform: translate3d(calc(50% - 150px - ${activeIndex * 316}px), 0, 0);
                            }
                            @media (min-width: 768px) {
                                .feedback-track { 
                                    transform: translate3d(calc(50% - 300px - ${activeIndex * 632}px), 0, 0) !important; 
                                }
                            }
                        `}} />

                        {testimonials.map((t, idx) => {
                            const isActive = idx === activeIndex;
                            return (
                                <div
                                    key={idx}
                                    onClick={() => handleCardClick(idx)}
                                    className={`w-[300px] md:w-[600px] shrink-0 rounded-3xl p-6 md:p-12 border bg-white transition-all duration-500 ease-out cursor-pointer flex flex-col justify-between relative select-none
                                        ${isActive 
                                            ? 'scale-100 opacity-100 shadow-xl border-craftsman-gold/30 pointer-events-auto' 
                                            : 'scale-90 opacity-30 border-black/5 hover:opacity-50 blur-[0.5px] md:blur-[1px] pointer-events-auto'
                                        }
                                    `}
                                >
                                    {/* Quote Marks & Rating */}
                                    <div className="flex justify-between items-start mb-6 relative">
                                        <span className="text-7xl text-craftsman-gold/20 font-serif leading-none absolute -top-8 -left-3">
                                            “
                                        </span>
                                        
                                        {/* 5 Stars Indicator */}
                                        <div className="flex gap-1 ml-auto text-craftsman-gold text-sm md:text-base">
                                            {Array.from({ length: t.rating }).map((_, starIdx) => (
                                                <span key={starIdx}>★</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Quote Text */}
                                    <p className={`font-body-md text-sm md:text-lg leading-relaxed text-[#2D2D2D] mb-8 text-left italic relative z-10 transition-colors duration-300 ${isActive ? 'text-[#1A1A1A]' : 'text-[#2D2D2D]/70'}`}>
                                        "{t.quote}"
                                    </p>

                                    {/* Author & Project Details */}
                                    <div className="flex items-center gap-4 mt-auto border-t border-black/5 pt-6 text-left">
                                        {/* Initial Avatar */}
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#2C5F2E] flex items-center justify-center text-white font-bold text-sm md:text-lg shadow-sm">
                                            {t.avatarLetter}
                                        </div>
                                        <div>
                                            <h4 className="font-label-technical text-xs md:text-sm font-bold text-forest-deep uppercase tracking-wider">
                                                {t.author}
                                            </h4>
                                            <p className="text-[10px] md:text-xs text-on-surface-variant/75 font-medium mt-0.5">
                                                {t.role} ({t.location})
                                            </p>
                                            <p className="text-[9px] md:text-[10px] text-craftsman-gold font-bold uppercase tracking-widest mt-1">
                                                Project: {t.project}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Navigation and Fraction counter */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12 select-none">
                    
                    {/* Navigation Buttons */}
                    <div className="flex gap-3">
                        <button
                            onClick={handlePrev}
                            className="border border-[#2D2D2D]/30 hover:bg-[#2C5F2E] hover:border-[#2C5F2E] p-3 rounded-full transition-all group cursor-pointer"
                        >
                            <IoMdArrowBack className="text-[#1A1A1A] group-hover:text-white w-5 h-5 transition-colors" />
                        </button>

                        <button
                            onClick={handleNext}
                            className="border border-[#2D2D2D]/30 hover:bg-[#2C5F2E] hover:border-[#2C5F2E] p-3 rounded-full transition-all group cursor-pointer"
                        >
                            <IoMdArrowForward className="text-[#1A1A1A] group-hover:text-white w-5 h-5 transition-colors" />
                        </button>
                    </div>

                    {/* Progress fraction indicators */}
                    <div className="flex items-center gap-4">
                        <span className="font-label-technical text-xs font-bold text-[#1A1A1A] tracking-widest">
                            0{activeIndex + 1}
                        </span>
                        
                        {/* Progress Bar Line */}
                        <div className="w-24 md:w-36 h-[2px] bg-black/10 relative rounded-full overflow-hidden">
                            <div 
                                className="absolute top-0 left-0 h-full bg-[#2C5F2E] transition-all duration-300 ease-out"
                                style={{ width: `${((activeIndex + 1) / total) * 100}%` }}
                            />
                        </div>

                        <span className="font-label-technical text-xs font-bold text-[#1A1A1A]/40 tracking-widest">
                            0{total}
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Feedback;