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
      <section className="bg-surface py-20 border-b border-outline-variant/10 text-center">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <span className="inline-block px-4 py-1 bg-surface-container text-forest-green font-label-technical text-xs uppercase tracking-widest mb-6">
            Support Center
          </span>

          {/* Dynamic Breadcrumbs (Centered) */}
          <nav className="flex items-center justify-center select-none text-[9px] sm:text-[10px] font-black uppercase tracking-widest gap-2 bg-surface-container-low text-on-surface/80 border border-outline-variant/30 px-4 py-2.5 rounded-full w-fit mx-auto mb-8 backdrop-blur-md shadow-sm">
            <Link to="/" className="text-on-surface/60 hover:text-craftsman-gold transition-colors no-underline">Home</Link>
            <span className="text-on-surface/30">&gt;</span>
            <Link to="/resources" className="text-on-surface/60 hover:text-craftsman-gold transition-colors no-underline">Resources</Link>
            <span className="text-on-surface/30">&gt;</span>
            <span className="text-craftsman-gold font-bold">FAQ</span>
          </nav>

          <h1 className="font-display-lg text-4xl md:text-5xl text-on-surface mb-6 font-bold leading-tight max-w-3xl mx-auto">
            Frequently Asked Questions
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed text-sm md:text-lg">
            Clear answers to the most common questions about our sustainable outdoor furniture, materials, projects, warranty and services.
          </p>

          {/* Trust Line */}
          <div className="flex flex-wrap justify-center items-center gap-y-4 gap-x-12 pt-8 border-t border-outline-variant/30">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-forest-green" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
              <span className="font-label-technical text-xs text-on-surface uppercase tracking-wider font-semibold">Honest Answers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-forest-green" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
              <span className="font-label-technical text-xs text-on-surface uppercase tracking-wider font-semibold">2-Year Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-forest-green" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
              <span className="font-label-technical text-xs text-on-surface uppercase tracking-wider font-semibold">Sustainable & Green Focus</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-forest-green" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
              <span className="font-label-technical text-xs text-on-surface uppercase tracking-wider font-semibold">Made in India</span>
            </div>
          </div>
        </div>
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
