import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";
import faqHeroImage from "../../assets/faq_hero_image.png";
import { getOptimizedImageUrl } from "../../utils/image";

const categories = [
  { id: "general", name: "General" },
  { id: "products", name: "Products & Materials" },
  { id: "sustainability", name: "Sustainability" },
  { id: "projects", name: "Projects & Delivery" },
  { id: "warranty", name: "Warranty & Support" },
  { id: "customization", name: "Customization & Quotations" }
];

const faqsList = [
  {
    category: "general",
    q: "Who is ARCH-FAB Urbanland Products?",
    a: "ARCH-FAB is a premier Indian manufacturer specializing in high-performance, architecturally designed outdoor furniture and urban landscape solutions, engineered for permanence and aesthetic excellence."
  },
  {
    category: "general",
    q: "Where are your products manufactured?",
    a: "Every ARCH-FAB product is proudly engineered and manufactured in our advanced facility in India, ensuring rigorous quality control and support for local craftsmanship."
  },
  {
    category: "products",
    q: "What materials do you use for durability?",
    a: "We utilize industrial-grade materials including powder-coated galvanized steel, high-performance concrete, and sustainable hardwoods designed to withstand harsh tropical weather and heavy public use."
  },
  {
    category: "products",
    q: "Are the metal components rust-proof?",
    a: "Yes, all metal components undergo a multi-stage finishing process including hot-dip galvanization and architectural-grade powder coating to prevent corrosion in high-moisture environments."
  },
  {
    category: "sustainability",
    q: "How does ARCH-FAB prioritize the environment?",
    a: "Sustainability is at our core. We use recycled content in our metals, responsibly sourced wood, and low-VOC coatings, ensuring our products contribute to LEED and IGBC certified projects."
  },
  {
    category: "projects",
    q: "What is the standard lead time for orders?",
    a: "Standard production lead time is typically 4–6 weeks, though this can vary based on order volume and customization requirements."
  },
  {
    category: "projects",
    q: "Do you provide installation services?",
    a: "Yes, we offer on-site assembly and installation guidance through our specialized technical team for large-scale commercial and public projects."
  },
  {
    category: "warranty",
    q: "What does the 2-Year Guarantee cover?",
    a: "Our comprehensive 2-year guarantee covers manufacturing defects, structural failures, and abnormal degradation of finishes under standard usage conditions."
  },
  {
    category: "customization",
    q: "Can we request custom dimensions or colors?",
    a: "Absolutely. We collaborate closely with architects to provide custom RAL colors and dimensional modifications to fit specific project site plans."
  },
  {
    category: "customization",
    q: "How do I get a technical specification sheet?",
    a: "Technical data sheets and CAD files are available for download on individual product pages or can be requested via our 'Contact Support' portal."
  }
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openFaqs, setOpenFaqs] = useState({});

  useEffect(() => {
    updatePageSEO({
      title: "FAQ | ARCH-FAB Urbanland Products",
      description: "Answers to all your questions about Urbanland Products – sustainable outdoor furniture, materials (WPC, NFC Wood, Aluminium, Mild Steel), warranty, customization, delivery, installation, green building certifications and more."
    });

    // Open first FAQ by default
    if (faqsList.length > 0) {
      setOpenFaqs({ [faqsList[0].q]: true });
    }

    return () => cleanPageSEO();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220; // offset for navbar
      let currentSectionId = "general";

      for (const cat of categories) {
        const el = document.getElementById(cat.id);
        if (el) {
          const absoluteTop = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= absoluteTop) {
            currentSectionId = cat.id;
          }
        }
      }
      setActiveCategory(currentSectionId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCategory = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140; // offset for sticky navbar + sidebar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
      setActiveCategory(id);
    }
  };

  const toggleAccordion = (q) => {
    setOpenFaqs(prev => ({
      ...prev,
      [q]: !prev[q]
    }));
  };

  return (
    <div className="w-full bg-background text-[#1A1A1A] pb-24 pt-0 relative antialiased">
      {/* Background ambient radial gradients */}
      <div className="absolute top-[40%] left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_bottom_left,rgba(201,168,76,0.04),transparent_65%)] pointer-events-none z-0" />

      {/* Dynamic Hero Section */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col items-center justify-center overflow-hidden py-32 bg-gradient-to-b from-[#122213] to-[#0A120A] text-white px-margin-mobile lg:px-0">
        {/* Full-Screen Background Image with Green/Charcoal Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={getOptimizedImageUrl(faqHeroImage)}
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

      {/* Main FAQ Layout */}
      <section className="py-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-32 space-y-2 flex lg:flex-col overflow-x-auto pb-4 lg:pb-0 gap-2 scrollbar-none">
              <h3 className="hidden lg:block font-label-technical text-xs text-outline uppercase tracking-widest mb-4">
                Categories
              </h3>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  className={`w-full lg:text-left text-center px-5 py-4 font-label-technical text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap rounded-xl cursor-pointer ${
                    activeCategory === cat.id
                      ? "text-white bg-forest-green border-l-4 border-craftsman-gold shadow-md"
                      : "text-on-surface-variant bg-white/50 border border-charcoal-industrial/5 hover:bg-surface-container-low"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Accordions Column */}
          <div className="lg:col-span-9 space-y-16">
            <div className="mb-12">
              <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
                Support
              </span>
              <h2 className="font-headline-lg text-headline-lg text-charcoal-industrial mt-4">
                All Your Questions Answered
              </h2>
              <div className="w-24 h-1 bg-craftsman-gold my-6"></div>
            </div>

            {categories.map((cat) => {
              const categoryFaqs = faqsList.filter(faq => faq.category === cat.id);
              if (categoryFaqs.length === 0) return null;
              
              return (
                <div key={cat.id} id={cat.id} className="scroll-mt-36">
                  <div className="mb-8">
                    <span className="font-label-technical text-craftsman-gold tracking-[0.15em] uppercase font-semibold text-[10px] block">
                      FAQ Category
                    </span>
                    <h3 className="font-headline-md text-headline-md text-forest-green mt-2">
                      {cat.name}
                    </h3>
                    <div className="w-16 h-0.5 bg-craftsman-gold my-4"></div>
                  </div>

                  <div className="space-y-4">
                    {categoryFaqs.map((faq) => {
                      const isOpen = !!openFaqs[faq.q];
                      return (
                        <div
                          key={faq.q}
                          className={`bg-white border rounded-2xl overflow-hidden group transition-all duration-300 ${
                            isOpen 
                              ? "border-forest-green/30 shadow-md" 
                              : "border-charcoal-industrial/5 hover:border-charcoal-industrial/15 shadow-sm"
                          }`}
                        >
                          <button
                            onClick={() => toggleAccordion(faq.q)}
                            className="w-full flex items-center justify-between p-6 text-left cursor-pointer select-none bg-white focus:outline-none"
                          >
                            <span className="font-label-technical text-xs font-bold text-charcoal-industrial group-hover:text-forest-green transition-colors uppercase tracking-wider">
                              {faq.q}
                            </span>
                            <span className={`material-symbols-outlined transition-transform duration-300 text-outline ${
                              isOpen ? "rotate-180 text-forest-green font-bold" : ""
                            }`}>
                              expand_more
                            </span>
                          </button>
                          <div
                            className={`transition-all duration-300 ease-in-out overflow-hidden ${
                              isOpen ? "max-h-[300px] border-t border-charcoal-industrial/5" : "max-h-0"
                            }`}
                          >
                            <p className="px-6 py-6 font-body-md text-sm text-on-surface-variant leading-relaxed">
                              {faq.a}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
};

export default FAQ;
