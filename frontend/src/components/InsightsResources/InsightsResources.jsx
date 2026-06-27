import React from 'react';
import { Link } from 'react-router-dom';
import { FiBookOpen, FiShoppingBag, FiBriefcase, FiFeather, FiArrowRight } from 'react-icons/fi';

const resources = [
    {
        icon: <FiBookOpen className="text-3xl text-craftsman-gold mb-4" />,
        title: "Materials Guide",
        description: "Compare premium materials like WPC, GFRC, metals, and wicker, and their applications.",
        linkText: "Explore Materials",
        to: "/materials/"
    },
    {
        icon: <FiShoppingBag className="text-3xl text-craftsman-gold mb-4" />,
        title: "Product Catalogue",
        description: "Browse our collection of outdoor furniture and shelters with full specifications.",
        linkText: "Download Catalogue",
        to: "/resources/downloads/"
    },
    {
        icon: <FiBriefcase className="text-3xl text-craftsman-gold mb-4" />,
        title: "Projects & Case Studies",
        description: "Explore how our custom outdoor installations have transformed spaces across India.",
        linkText: "Explore Projects",
        to: "/projects/"
    },
    {
        icon: <FiFeather className="text-3xl text-craftsman-gold mb-4" />,
        title: "Urbanland Blog",
        description: "Read insights on furniture design, landscape architecture, and modern trends.",
        linkText: "Read Articles",
        to: "/blog/"
    }
];

const InsightsResources = () => {
    return (
        <section id="insights" className="py-24 px-6 md:px-16 bg-white border-t border-[#2D2D2D]/10 relative overflow-hidden">
            {/* Soft decorative background element */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-craftsman-gold/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header with Title, description and Link */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
                    <div className="max-w-3xl">
                        <span className="font-label-technical text-craftsman-gold tracking-[0.25em] uppercase font-semibold text-xs block mb-3">
                            — Knowledge Centre
                        </span>
                        <h2 className="font-headline-lg text-3xl md:text-4xl text-deep-ink uppercase tracking-tight mb-4">
                            Insights, Resources &amp; Project Inspiration
                        </h2>
                        <div className="w-20 h-[2px] bg-craftsman-gold mb-6"></div>
                        <p className="font-body-md text-sm md:text-base text-on-surface-variant/80 leading-relaxed">
                            Explore technical resources, material expertise, product catalogues, and real-world projects to help you specify, plan, and deliver better outdoor environments.
                        </p>
                    </div>
                    
                    <Link 
                        to="/resources/" 
                        className="group inline-flex items-center gap-2 text-forest-deep font-bold text-sm tracking-wider uppercase border-b-2 border-forest-deep/20 hover:border-forest-deep pb-1 transition-all duration-300 shrink-0"
                    >
                        Visit Resource Centre 
                        <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Grid layout for Resource cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {resources.map((item, idx) => (
                        <div 
                            key={idx}
                            className="bg-[#FBF9F5] p-8 rounded-2xl border border-black/5 hover:border-craftsman-gold/30 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
                        >
                            <div>
                                <div className="p-3 bg-white w-14 h-14 rounded-xl flex items-center justify-center border border-black/5 shadow-sm mb-6 group-hover:scale-105 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h4 className="font-label-technical text-sm md:text-base font-bold text-forest-deep uppercase tracking-wider mb-3">
                                    {item.title}
                                </h4>
                                <p className="font-body-md text-xs md:text-sm text-on-surface-variant/85 leading-relaxed mb-8">
                                    {item.description}
                                </p>
                            </div>
                            
                            <Link 
                                to={item.to}
                                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-deep hover:text-craftsman-gold transition-colors duration-300"
                            >
                                {item.linkText} <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InsightsResources;
