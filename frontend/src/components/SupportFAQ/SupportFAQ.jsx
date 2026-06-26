import React from "react";
import { Link } from "react-router-dom";
import { getOptimizedImageUrl } from "../../utils/image";
import faqHeroImage from "../../assets/faq_hero_image.png";

const DEFAULT_SUPPORT = {
    badge: "Service & Support",
    title: "Installation & Support",
    list: [
        {
            icon: "engineering",
            title: "Seamless Installation",
            desc: "We provide on-site installation guidance or turnkey setup services for major municipal and corporate projects across India."
        },
        {
            icon: "verified",
            title: "Extended Warranty",
            desc: "Our 2-year manufacturer guarantee covers structural integrity and material defects, ensuring your investment is protected."
        }
    ]
};

const DEFAULT_FAQ = {
    badge: "Common Inquiries",
    title: "Frequently Asked Questions",
    list: [
        {
            q: "Which material is best for coastal areas?",
            a: "For coastal areas, Aluminium and Stainless Steel (Grade 304 or 316) are highly recommended due to their excellent corrosion resistance. Our polymer-coated and anodized finishes provide extra protection against salt air."
        },
        {
            q: "Can products be customized in length and design?",
            a: "Yes, we offer custom lengths and dimensions. You can also customize armrests, backrests, base colors, and materials to match your project specifications."
        },
        {
            q: "Are WPC and NFC Wood suitable for outdoor use?",
            a: "Absolutely. Both WPC (Wood Plastic Composite) and NFC (Natural Fiber Composite) wood are engineered to resist rotting, splitting, warping, and UV damage, making them ideal for heavy outdoor usage in Indian weather."
        },
        {
            q: "What is the typical lead time?",
            a: "Standard orders are dispatched within 2-4 weeks. Bulk or custom project orders depend on the complexity and volume of the requirements."
        },
        {
            q: "Do you provide installation services?",
            a: "We provide detailed installation guidance and drawings across India. On-site installation support by our team is also available for bulk corporate or township projects."
        }
    ]
};

const SupportFAQ = ({ support = DEFAULT_SUPPORT, faq = DEFAULT_FAQ, showHero = false, heroImage = faqHeroImage }) => {
    const supportData = support || DEFAULT_SUPPORT;
    const faqData = faq || DEFAULT_FAQ;

    return (
        <div className="w-full">
            {showHero && (
                <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col items-center justify-center overflow-hidden py-32 bg-gradient-to-b from-[#122213] to-[#0A120A] text-white px-margin-mobile lg:px-0 text-center">
                    {/* Full-Screen Background Image with Green/Charcoal Gradient Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={getOptimizedImageUrl(heroImage)}
                            alt="Frequently Asked Questions"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0A120A]/70 via-[#0E1A0F]/85 to-[#0A120A] pointer-events-none"></div>
                    </div>

                    <div className="max-w-4xl mx-auto pt-10 md:pt-[100px] w-full text-center relative z-10 px-margin-mobile md:px-margin-desktop">
                        <div className="inline-block border-b-2 border-craftsman-gold mb-6 pb-1">
                            <span className="font-label-technical text-craftsman-gold tracking-widest uppercase font-semibold text-xs">
                                Support Center
                            </span>
                        </div>

                        {/* Dynamic Breadcrumbs (Centered) */}
                        <nav className="flex items-center justify-center select-none text-[9px] sm:text-[10px] font-black uppercase tracking-widest gap-2 bg-white/5 text-white/80 border border-white/10 px-4 py-2.5 rounded-full w-fit mx-auto mb-8 backdrop-blur-md shadow-lg">
                            <Link to="/" className="text-white/60 hover:text-craftsman-gold transition-colors no-underline">Home</Link>
                            <span className="text-white/30">&gt;</span>
                            <Link to="/resources" className="text-white/60 hover:text-craftsman-gold transition-colors no-underline">Resources</Link>
                            <span className="text-white/30">&gt;</span>
                            <span className="text-craftsman-gold font-bold">FAQ</span>
                        </nav>

                        {/* Title */}
                        <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-[3.5rem] text-white mb-6 leading-tight max-w-3xl mx-auto tracking-wide font-bold">
                            Frequently Asked Questions
                        </h1>

                        <div className="w-24 h-1 bg-craftsman-gold mx-auto mb-8"></div>

                        {/* Description */}
                        <p className="font-body-lg text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed text-sm md:text-lg">
                            Clear answers to the most common questions about our sustainable outdoor furniture, materials, projects, warranty and services.
                        </p>

                        {/* Glassmorphic Highlights Checklist */}
                        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 mb-10 max-w-[420px] sm:max-w-3xl mx-auto">
                            {[
                                { text: "Honest Answers", icon: "forum" },
                                { text: "2-Year Guarantee", icon: "verified" },
                                { text: "Sustainable & Green Focus", icon: "eco" },
                                { text: "Made in India", icon: "location_on" }
                            ].map((pt, idx) => (
                                <div key={idx} className="flex items-center justify-center text-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:border-craftsman-gold hover:bg-white/10 transition-all duration-300 group w-full sm:w-auto">
                                    <span className="material-symbols-outlined text-craftsman-gold text-sm group-hover:scale-110 transition-transform duration-300">{pt.icon}</span>
                                    <span className="font-body-md text-[11px] text-white/95 font-semibold tracking-wide">{pt.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Floating Location and Scope Stats Bar */}
                        <div className="flex justify-center items-center gap-8 mb-12 bg-black/40 backdrop-blur-md border border-white/10 p-5 rounded-xl max-w-xl mx-auto shadow-2xl">
                            <div className="flex items-center gap-3 text-left">
                                <span className="material-symbols-outlined text-craftsman-gold text-3xl">support_agent</span>
                                <div>
                                    <p className="font-label-technical text-[9px] text-white/60 uppercase tracking-widest">Support</p>
                                    <p className="font-body-md text-sm text-white font-semibold mt-0.5">Pan-India Coverage</p>
                                </div>
                            </div>
                            <div className="w-px h-10 bg-white/15"></div>
                            <div className="flex items-center gap-3 text-left">
                                <span className="material-symbols-outlined text-craftsman-gold text-3xl">history</span>
                                <div>
                                    <p className="font-label-technical text-[9px] text-white/60 uppercase tracking-widest">Availability</p>
                                    <p className="font-body-md text-sm text-white font-semibold mt-0.5">24/7 Support Portal</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/contact" className="bg-craftsman-gold text-white px-8 py-4 font-label-technical text-xs uppercase tracking-widest hover:bg-white hover:text-[#122213] hover:shadow-lg hover:shadow-craftsman-gold/25 transition-all duration-300 no-underline text-center">
                                Request Info/Quotes →
                            </Link>
                            <Link to="/resources/downloads" className="border-2 border-white/30 text-white px-8 py-4 font-label-technical text-xs uppercase tracking-widest hover:border-white hover:bg-white/10 transition-all duration-300 no-underline text-center">
                                Download Catalogue ↓
                            </Link>
                        </div>
                    </div>

                    {/* Structural Grid lines and radial pattern */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none"
                        style={{
                            backgroundImage: "radial-gradient(#C9A84C 1px, transparent 1px)",
                            backgroundSize: "32px 32px"
                        }}
                    ></div>
                    <div className="absolute top-0 left-0 w-full h-full structural-grid -z-30 opacity-20"></div>
                    <div className="absolute top-1/2 left-0 w-full h-1px bg-white/5 -z-20"></div>
                    <div className="absolute top-0 left-1/4 w-1px h-full bg-white/5 -z-20"></div>
                </section>
            )}

            <section className="reveal-section py-20 md:py-24 bg-surface px-margin-mobile md:px-margin-desktop border-b border-outline-variant text-left">
                <div className="max-w-container-max mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Support Block */}
                        <div className="space-y-10 reveal-up">
                            <div className="space-y-2">
                                <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
                                    {supportData.badge}
                                </span>
                                <h2 className="font-headline-lg text-headline-lg text-deep-ink">
                                    {supportData.title}
                                </h2>
                                <div className="w-20 h-1 bg-craftsman-gold"></div>
                            </div>

                            <div className="space-y-8">
                                {supportData.list && supportData.list.map((item, idx) => (
                                    <div key={idx} className="flex gap-6 items-start p-6 bg-surface-container/50 border border-outline-variant hover:border-craftsman-gold rounded-[8px] transition-all duration-300">
                                        <div className="w-12 h-12 shrink-0 bg-forest-green text-on-primary flex items-center justify-center rounded-[8px]">
                                            <span className="material-symbols-outlined">{item.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-headline-md text-xl font-bold mb-2 text-deep-ink">{item.title}</h4>
                                            <p className="text-body-md text-on-surface-variant leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* FAQ Block */}
                        <div className="space-y-10 reveal-up" style={{ transitionDelay: "150ms" }}>
                            <div className="space-y-2">
                                <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
                                    {faqData.badge}
                                </span>
                                <h2 className="font-headline-lg text-headline-lg text-deep-ink">
                                    {faqData.title}
                                </h2>
                                <div className="w-20 h-1 bg-craftsman-gold"></div>
                            </div>

                            <div className="space-y-4">
                                {faqData.list && faqData.list.map((item, idx) => (
                                    <details key={idx} className="group border border-outline-variant bg-surface-container p-4 sm:p-6 open:bg-[#f0ede9] transition-all duration-300 rounded-[8px]">
                                        <summary className="list-none flex justify-between items-center cursor-pointer font-semibold text-deep-ink text-base md:text-lg select-none">
                                            <span>{item.q}</span>
                                            <span className="material-symbols-outlined text-forest-green transition-transform duration-300 group-open:rotate-180">expand_more</span>
                                        </summary>
                                        <div className="mt-4 text-on-surface-variant text-body-md leading-relaxed border-t border-outline-variant/30 pt-4">
                                            {item.a}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SupportFAQ;
