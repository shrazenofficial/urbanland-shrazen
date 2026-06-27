import React, { useState, useEffect } from 'react';

// Import local premium assets to guarantee offline loading
import welcome1 from '../../assets/welcome-1.png';
import materialsShowcase from '../../assets/materials_showcase.png';
import wickerSpec from '../../assets/wicker_spec.png';
import concreteSpec from '../../assets/concrete_spec.png';
import galvanizationSpec from '../../assets/galvanization_spec.png';
import installationShowcase from '../../assets/gallery_real_estate.png';

const steps = [
    {
        number: '01',
        title: 'Consultation',
        desc: 'Collaborative session to align with your architectural blueprint and project requirements.',
        img: welcome1
    },
    {
        number: '02',
        title: 'Material Selection',
        desc: 'Curation of precision composites—WPC, NFC, and GFRC—engineered for specific weather and load demands.',
        img: materialsShowcase
    },
    {
        number: '03',
        title: 'Design & Engineering',
        desc: 'Drafting high-fidelity 3D structural models and CAD layouts for exact dimensional approval.',
        img: wickerSpec
    },
    {
        number: '04',
        title: 'Precision Crafting',
        desc: 'High-tech CNC machining, robotic metal bending, and GFRC concrete setting on the factory floor.',
        img: concreteSpec
    },
    {
        number: '05',
        title: 'Secure Delivery',
        desc: 'Custom-crated flat-pack packaging, structural galvanization check, and pan-India transport.',
        img: galvanizationSpec
    },
    {
        number: '06',
        title: 'On-Site Installation',
        desc: 'Professional installation crew dispatch, anchor setting, and final structural quality checks.',
        img: installationShowcase
    }
];

const ConceptToCompletion = () => {
    const [activeStep, setActiveStep] = useState(0);

    // Auto-advance step every 8 seconds, pausing if user interacts
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 px-6 md:px-16 lg:px-20 bg-surface-container text-deep-ink border-t border-outline-variant/30 relative overflow-hidden">
            {/* Ambient Background Glow matching the active visual theme */}
            <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-craftsman-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="mb-16 text-left">
                    <span className="font-label-technical text-craftsman-gold tracking-[0.25em] uppercase font-semibold text-xs block mb-3">
                        Our Workflow
                    </span>
                    <h2 className="font-headline-lg text-4xl md:text-5xl text-deep-ink uppercase tracking-tight">
                        From Concept to Completion
                    </h2>
                    <div className="w-20 h-[2px] bg-craftsman-gold mt-6"></div>
                </div>

                {/* Split Responsive Container */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
                    
                    {/* Left Column: Timeline Stepper */}
                    <div className="w-full lg:w-5/12 flex flex-col justify-between pr-0 lg:pr-8">
                        <div className="relative flex flex-col gap-2 pl-4 border-l-2 border-outline-variant/30">
                            
                            {steps.map((step, idx) => {
                                const isActive = activeStep === idx;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveStep(idx)}
                                        onMouseEnter={() => setActiveStep(idx)}
                                        className={`w-full text-left py-4 px-5 rounded-lg transition-all duration-500 relative flex items-start gap-4 group ${
                                            isActive 
                                                ? 'bg-white shadow-md border-l-[3px] border-craftsman-gold -ml-[23px] pl-6' 
                                                : 'opacity-50 hover:opacity-80'
                                        }`}
                                    >
                                        {/* Step Counter Tag */}
                                        <span className={`font-label-technical text-sm font-bold tracking-widest ${
                                            isActive ? 'text-craftsman-gold' : 'text-on-surface-variant'
                                        }`}>
                                            {step.number}
                                        </span>

                                        <div className="flex flex-col">
                                            {/* Step Title */}
                                            <h4 className={`font-label-technical text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                                                isActive ? 'text-deep-ink' : 'text-on-surface-variant'
                                            }`}>
                                                {step.title}
                                            </h4>

                                            {/* Expandable Caption */}
                                            <div className={`grid transition-all duration-500 ease-in-out ${
                                                isActive ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0 h-0 overflow-hidden'
                                            }`}>
                                                <p className="font-body-md text-xs md:text-sm text-on-surface-variant/80 leading-relaxed overflow-hidden">
                                                    {step.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Visual Media Box */}
                    <div className="w-full lg:w-7/12 flex items-center justify-center">
                        <div className="w-full aspect-[16/10] rounded-2xl border border-black/5 overflow-hidden relative bg-black shadow-xl group">
                            
                            {/* Slides Image Showcase */}
                            {steps.map((step, idx) => (
                                <div
                                    key={idx}
                                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                                        activeStep === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                    }`}
                                >
                                    <img
                                        className="w-full h-full object-cover transition-transform duration-[8000ms] ease-out group-hover:scale-105"
                                        src={step.img}
                                        alt={step.title}
                                        loading="lazy"
                                    />
                                    {/* Subtle shading filter */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                                </div>
                            ))}

                            {/* Active Step Indicator Tag inside Image */}
                            <div className="absolute top-6 right-6 z-20 bg-black/60 backdrop-blur-md px-4 py-2 border border-white/10 rounded-[4px]">
                                <span className="font-label-technical text-[10px] md:text-xs font-semibold uppercase text-white tracking-widest">
                                    Stage {steps[activeStep].number}
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ConceptToCompletion;
