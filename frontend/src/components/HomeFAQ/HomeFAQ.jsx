import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const faqList = [
    {
        q: "Do you ship pan-India?",
        a: "Yes, Urbanland Products offers pan-India delivery for all our project-scale orders. We have an established logistics network to ensure safe handling of premium furniture."
    },
    {
        q: "Can you customize furniture to our specific designs?",
        a: "Absolutely. We specialize in working with architects and developers to manufacture custom pieces that fit specific project themes and dimensional requirements."
    },
    {
        q: "What is the average lead time for production?",
        a: "Lead times vary based on the project size and customization. Typically, orders are completed and dispatched within 4 to 8 weeks after design approval."
    }
];

const HomeFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="home-faq" className="py-24 px-6 md:px-16 bg-[#ebe8e3]/30 border-t border-black/5 relative overflow-hidden">
            <div className="max-w-3xl mx-auto relative z-10">
                <div className="mb-12 text-left">
                    <span className="font-label-technical text-craftsman-gold tracking-[0.22em] uppercase font-semibold text-xs block mb-3">
                        — Common Inquiries
                    </span>
                    <h2 className="font-headline-lg text-3xl md:text-4xl text-deep-ink uppercase tracking-tight mb-4">
                        Frequently Asked Questions
                    </h2>
                    <div className="w-20 h-1 bg-craftsman-gold"></div>
                </div>
                
                <div className="space-y-4">
                    {faqList.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div 
                                key={index} 
                                className={`bg-white p-6 border transition-all duration-300 cursor-pointer rounded-xl ${
                                    isOpen ? 'border-[#2C5F2E] shadow-sm' : 'border-black/5 hover:border-black/10'
                                }`}
                                onClick={() => toggleIndex(index)}
                            >
                                <div className="flex justify-between items-center select-none">
                                    <h3 className="font-label-technical text-sm md:text-base font-bold text-forest-deep uppercase tracking-wider text-left pr-4">
                                        {item.q}
                                    </h3>
                                    <FiChevronDown 
                                        className={`text-xl text-[#2C5F2E] transition-transform duration-300 shrink-0 ${
                                            isOpen ? 'rotate-180' : 'rotate-0'
                                        }`} 
                                    />
                                </div>
                                
                                <div 
                                    className={`transition-all duration-300 overflow-hidden ${
                                        isOpen ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <p className="font-body-md text-xs md:text-sm text-on-surface-variant/85 leading-relaxed pt-2 border-t border-black/5 text-left">
                                        {item.a}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HomeFAQ;
