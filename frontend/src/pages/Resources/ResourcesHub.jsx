import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";
import AdvantageCTA from "../../components/AdvantageCTA/AdvantageCTA";
import { getOptimizedImageUrl } from "../../utils/image";

const trustItems = [
  "Master Catalogue",
  "Sustainable Materials Guide",
  "Sector Brochures",
  "Expert Blog",
  "Comprehensive FAQ",
  "Made in India with Green Focus"
];

const resourceCategories = [
  {
    icon: "download_for_offline",
    title: "Downloads",
    desc: "Master Catalogue, sector-specific brochures for real estate, hospitality, and educational institutions.",
    linkText: "Go to Downloads",
    path: "/resources/downloads"
  },
  {
    icon: "eco",
    title: "Materials Guide",
    desc: "In-depth comparison of WPC, NFC Wood, and industrial coatings to ensure longevity in tropical climates.",
    linkText: "Explore Materials Guide",
    path: "/materials"
  },
  {
    icon: "article",
    title: "Blog",
    desc: "Expert articles on green building, urban heat island mitigation, and architectural furniture trends.",
    linkText: "Read Latest Articles",
    path: "/blog"
  },
  {
    icon: "quiz",
    title: "FAQ",
    desc: "Clear answers to the most common questions regarding durability, custom orders, and sustainability certifications.",
    linkText: "Visit FAQ",
    path: "/faq"
  }
];

const differences = [
  {
    num: "01",
    icon: "verified_user",
    title: "Sustainability First",
    desc: "Every technical detail is vetted against LEED and IGBC standards to ensure your projects remain eco-friendly from specification to installation."
  },
  {
    num: "02",
    icon: "construction",
    title: "Practical & Actionable",
    desc: "We provide CAD blocks and installation guides that simplify the workflow for architects and contractors, not just sales fluff."
  },
  {
    num: "03",
    icon: "update",
    title: "Up-to-Date",
    desc: "Our documentation is refreshed quarterly to reflect the latest advancements in green material science and urban design regulations."
  },
  {
    num: "04",
    icon: "person_search",
    title: "Tailored for Decision Makers",
    desc: "Condensed executive summaries provide the ROI and durability data needed for procurement heads and project developers."
  },
  {
    num: "05",
    icon: "bolt",
    title: "Free & Instant Access",
    desc: "No complicated gatekeeping. We believe in open knowledge to foster a more sustainable urban landscape for everyone."
  }
];

const featuredResourcesList = [
  {
    title: "Master Catalogue 2026",
    tag: "Technical Spec",
    buttonText: "Download PDF",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1fuv5b8zMhYnoZJrWJcU74PB2Js_nOphT9s3u0Tc3dc0pacPfm-tNbu-leHQpln-LinwAdbjxnRvLHr0vqtYAmcpTYUetcckfcch2wXhAyKE2GQeHOEYLzkArxAVNZJbTVrhoSc7nvooMj6t_0sO7PjMaa9eelF19SAuXv4X873TWFu5XfS_kbOm3xaI-ps9NgmCXM7WctJydjGdAtT0hRpeoRbRfYcaiAckFK0-GBcWW7eiKRkddIjiOYZbCbsH1zG0ws4Z3z6tX",
    path: "/resources/downloads"
  },
  {
    title: "Sustainable Materials Guide",
    tag: "Whitepaper",
    buttonText: "Explore Guide",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5a4tclxo2v691L79faA6ybPkOE2hdM8j6mJU-sEdQz6F6We_csBaZX1ltQMSKL9I1hbkKKiMd7ZOfoo4MiBw0jrsoVSw3fB0Q3Y7l2sXS-23YikaCFLb5gy4oYSODCjJCLSpGc6AIyfblnjkqt-2JUMOtAmmEid4Ti5NaJmBqDt-QEqgI_Luk0-lchw4vFXDJlPckrktB6nyVSVcY2MaDKCyhNJA9elKgx3s3nAs_ZrbEUZqy_plwWNxGiFw4bA1d7MGdxkKJUP4Q",
    path: "/materials"
  },
  {
    title: "Real Estate Amenity Brochure",
    tag: "Brochure",
    buttonText: "View Sector",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfoqyxwUWn42txdO2IqXwsiKHDAaSDwnhQlM-G-Clwy1Un9oPd7z7UI8IjTz6y9PFsCBKbVChgQgu4mb4Ia5i73yCxSaO_6N26QBldp35wSe1bIxQ15iqI76Z4W6tYaM1T5cPHEJ6G0auEdn206wqZPRmauLe7M1p4W1MhbTSeXg9u468N8LYjYfEzfhnhBLM0i188EfjaqCvlEOnPm6kyUp6tOhedaQxkIW-_KylGMGskM0M1pfGBf6URP78U1ynsA9-TCJVxUKht",
    path: "/resources/downloads"
  },
  {
    title: "How to Choose Furniture for Green Projects",
    tag: "Expert Blog",
    buttonText: "Read Article",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcVgSINCmurdavg555p_9rlR5NzbZyg6UdJG-aoNvownMMI5H7f5TpzNgmVglfiywizorF5TLOAGSZu5w3NIyk0HV7O1CE2xBipn5J-YoK65aUNddPqTpUm0cUEetpnc5wpHEfSdy8TYR9oQThtlX29s33FlIq5M_6PQG-s8UzzP1pQw7XPPOU8XHMOCmrUVATc0-i968ccU43nX5M1tC4ja87Z4oZ2xr_i3ZCNKhBRM7IWwFCBremWIcbFhMzv17nNAnIBvgIj5rn",
    path: "/blog"
  }
];

const faqsList = [
  {
    q: "What materials do you use for your sustainable furniture?",
    a: "We primarily utilize Wood Polymer Composite (WPC), Natural Fiber Composite (NFC), and high-grade powder-coated steel or recyclable aluminium. All our materials are chosen for their low environmental impact and exceptional durability in harsh weather conditions."
  },
  {
    q: "Are your products certified for green building projects?",
    a: "Yes, our products contribute to LEED and IGBC certification credits. We provide detailed Environmental Product Declarations (EPDs) for all our major collections to support your project's sustainability goals."
  },
  {
    q: "Do you offer customization for specific architectural projects?",
    a: "Absolutely. We work closely with architects to modify dimensions, colors, and material finishes to align perfectly with your unique design vision while maintaining our structural integrity standards."
  },
  {
    q: "What is the typical lead time for large orders?",
    a: "Lead times vary by project scale, typically ranging from 6 to 10 weeks. Our team provides detailed production timelines and regular updates throughout the manufacturing process."
  },
  {
    q: "How do I maintain Urbanland furniture?",
    a: "Our furniture is designed for ultra-low maintenance. Regular cleaning with mild soap and water is usually sufficient. We provide comprehensive maintenance guides with every purchase to ensure decades of use."
  }
];

const ResourcesHub = () => {
  const [activeFAQIndex, setActiveFAQIndex] = useState(null);
  const resourcesGridRef = useRef(null);
  const featuredResourcesRef = useRef(null);

  useEffect(() => {
    updatePageSEO({
      title: "Resources | Sustainable Outdoor Furniture & Green Amenity Solutions | Urbanland Products",
      description: "Access our technical guides, product catalogs, materials comparison specifications, and expert blog insights for sustainable outdoor furniture in India.",
      og_image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_dEL1OxvrW5JvdGCGOSirMUW062F_x705fdolWum4ct9GBB2yGjUXOu11zaupORQ65jllwHQmjn8AVkW9_6Srir8X1n7j6OTJQvNORxUVImvjOUAc-6DNRyxflGJgP4hqFB_17sc_4f60MfpxVHwKMIZuZoUQ95oI8bY4x6eN7hMQR1NeRCzm6J2vcRTRFPKUHzWgmYsOJu6cmuOYj-m7COuOFYwnNzXieBU1t-FrpjEYgoO0mY4OdJHULgi7o85cTWODUw_IB0ZG"
    });

    // Smooth reveal animation on scroll
    const observerOptions = {
      threshold: 0.05,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.reveal-section');
    sections.forEach(section => {
      section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
      observer.observe(section);
    });

    // Intersection Observer for Reveal Up Animations
    const revealUpObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    const revealUps = document.querySelectorAll('.reveal-up');
    revealUps.forEach(el => revealUpObserver.observe(el));

    return () => {
      cleanPageSEO();
      sections.forEach(section => observer.unobserve(section));
      revealUps.forEach(el => revealUpObserver.unobserve(el));
    };
  }, []);

  const scrollToResources = () => {
    if (resourcesGridRef.current) {
      resourcesGridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollFeaturedResources = (direction) => {
    if (!featuredResourcesRef.current) return;
    const container = featuredResourcesRef.current;
    if (container.children.length > 0) {
      const card = container.children[0];
      const cardStyle = window.getComputedStyle(card);
      const marginRight = parseFloat(cardStyle.marginRight) || 0;
      const gap = parseFloat(window.getComputedStyle(container).gap) || 16;
      const cardWidth = card.offsetWidth + gap + marginRight;
      container.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="w-full bg-[#fcf9f4] text-[#1c1c19] font-sans overflow-x-hidden pt-20">
      {/* Hero Section */}
      <section className="w-full relative bg-charcoal-industrial text-white overflow-hidden py-24 md:py-32 flex flex-col items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 select-none pointer-events-none"
          style={{ backgroundImage: `url(${getOptimizedImageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuC_dEL1OxvrW5JvdGCGOSirMUW062F_x705fdolWum4ct9GBB2yGjUXOu11zaupORQ65jllwHQmjn8AVkW9_6Srir8X1n7j6OTJQvNORxUVImvjOUAc-6DNRyxflGJgP4hqFB_17sc_4f60MfpxVHwKMIZuZoUQ95oI8bY4x6eN7hMQR1NeRCzm6J2vcRTRFPKUHzWgmYsOJu6cmuOYj-m7COuOFYwnNzXieBU1t-FrpjEYgoO0mY4OdJHULgi7o85cTWODUw_IB0ZG")})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-industrial/80 to-charcoal-industrial" />
        
        <div className="relative w-full max-w-container-max px-margin-mobile md:px-margin-desktop flex flex-col items-center text-center gap-4">
          <span className="font-label-caps tracking-[0.2em] uppercase font-bold text-xs text-craftsman-gold bg-craftsman-gold/10 px-4 py-2 rounded-full border border-craftsman-gold/30">
            ✦ Knowledge Center
          </span>
          <h1 className="font-display-lg-mobile text-4xl md:font-display-lg md:text-6xl lg:text-7xl text-white max-w-4xl uppercase font-bold tracking-tight">
            Resources
          </h1>
          <p className="font-body-lg text-white/80 max-w-3xl mt-2 leading-relaxed">
            Everything you need to make informed decisions about sustainable outdoor furniture... Explore
            our technical guides, case studies, and environmental impact reports designed for architects and
            urban planners.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <button
              onClick={scrollToResources}
              className="bg-craftsman-gold text-charcoal-industrial px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold hover:bg-white transition-all duration-300 rounded-[4px] cursor-pointer"
            >
              Browse All Resources
            </button>
            <Link
              to="/resources/downloads"
              className="border-2 border-white text-white px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-charcoal-industrial transition-all duration-300 rounded-[4px] no-underline"
            >
              Download Master Catalogue
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8 font-label-caps text-xs text-craftsman-gold">
            {trustItems.map((item, idx) => (
              <span key={idx} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-craftsman-gold/30">
                <span className="material-symbols-outlined text-[16px]">check</span> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Our Resources (Grid) */}
      <section ref={resourcesGridRef} className="reveal-section py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="mb-16 text-left space-y-4 reveal-up">
            <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
              Support Library
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-ink">
              Your Complete Guide to Sustainable Outdoor Furniture
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceCategories.map((item, idx) => (
              <div
                key={idx}
                style={{ transitionDelay: `${idx * 100}ms` }}
                className="bg-[#fcf9f4] border border-outline-variant p-8 flex flex-col h-full hover:border-craftsman-gold hover:shadow-md transition-all duration-300 rounded-none text-left reveal-up"
              >
                <span className="material-symbols-outlined text-[#C9A84C] text-4xl mb-4">
                  {item.icon}
                </span>
                <h3 className="font-headline-md text-xl font-semibold text-[#002f09] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#41493f] mb-6 font-body-md text-sm leading-relaxed">
                  {item.desc}
                </p>
                <Link
                  to={item.path}
                  className="mt-auto text-[#002f09] font-bold uppercase tracking-wider flex items-center gap-2 group no-underline text-xs"
                >
                  {item.linkText}
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Our Resources (Visual List) */}
      <section className="reveal-section py-20 bg-[#F7F4EF]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="text-center mb-16 space-y-4 reveal-up flex flex-col items-center">
            <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
              Key Advantages
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-ink">
              Why Our Resources Are Different
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
          </div>
          <div className="space-y-6">
            {differences.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-center gap-6 group ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={`md:w-1/4 text-center ${idx % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                  <span className="font-display-lg text-5xl md:text-6xl font-bold text-[#e5e2dd] group-hover:text-[#C9A84C] transition-colors duration-500">
                    {item.num}
                  </span>
                </div>
                <div
                  className={`md:w-3/4 flex gap-6 bg-white p-8 shadow-sm rounded-[4px] border border-outline-variant hover:border-craftsman-gold/40 transition-all duration-300 text-left ${
                    idx % 2 === 1 ? "border-r-4" : "border-l-4"
                  } border-[#002f09]`}
                >
                  <span className="material-symbols-outlined text-[#C9A84C] text-3xl shrink-0">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="font-headline-md text-lg font-semibold text-[#002f09] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[#41493f] font-body-md text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="reveal-section py-20 overflow-hidden bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="flex justify-between items-end gap-4 mb-8 md:mb-12 text-left">
            <div className="space-y-3 md:space-y-4 reveal-up">
              <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
                Curated Selection
              </span>
              <h2 className="font-headline-lg text-2xl md:text-headline-lg text-deep-ink">
                Featured Resources
              </h2>
              <div className="w-24 h-1 bg-craftsman-gold"></div>
            </div>
            <div className="flex gap-2 reveal-up shrink-0 pb-1">
              <button
                onClick={() => scrollFeaturedResources("left")}
                className="w-10 h-10 md:w-12 md:h-12 border border-outline-variant text-[#002f09] rounded-full flex items-center justify-center hover:border-forest-green hover:text-forest-green hover:bg-forest-green/5 transition-all duration-300 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">west</span>
              </button>
              <button
                onClick={() => scrollFeaturedResources("right")}
                className="w-10 h-10 md:w-12 md:h-12 border border-outline-variant text-[#002f09] rounded-full flex items-center justify-center hover:border-forest-green hover:text-forest-green hover:bg-forest-green/5 transition-all duration-300 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">east</span>
              </button>
            </div>
          </div>
          <div
            ref={featuredResourcesRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 pb-6 scrollbar-none scroll-smooth"
          >
            {featuredResourcesList.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                style={{ transitionDelay: `${idx * 100}ms` }}
                className="group cursor-pointer w-[72vw] sm:w-[45vw] md:w-[calc(25%-1.25rem)] shrink-0 snap-align-start no-underline text-left reveal-up"
              >
                <div className="relative aspect-[3/4] mb-4 bg-surface-dim overflow-hidden rounded-none border border-outline-variant">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={item.title}
                    src={item.image}
                  />
                  <div className="absolute inset-0 bg-[#002f09]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white text-[#002f09] px-4 py-2 font-semibold uppercase tracking-widest text-xs rounded-full">
                      {item.buttonText}
                    </span>
                  </div>
                </div>
                <h4 className="font-headline-md text-base font-semibold text-deep-ink group-hover:text-craftsman-gold transition-colors leading-tight">
                  {item.title}
                </h4>
                <p className="font-semibold text-[10px] text-[#41493f] uppercase tracking-widest mt-1.5">
                  {item.tag}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (Accordion) */}
      <section className="reveal-section py-20 bg-white border-t border-[#2D2D2D]/10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12 space-y-4 reveal-up flex flex-col items-center">
            <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
              FAQ
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-ink">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
          </div>
          <div className="space-y-4">
            {faqsList.map((faq, idx) => {
              const isOpen = activeFAQIndex === idx;
              return (
                <div key={idx} className="border-b border-outline-variant pb-4 text-left reveal-up">
                  <button
                    onClick={() => setActiveFAQIndex(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center text-left py-4 focus:outline-none cursor-pointer border-none bg-transparent"
                  >
                    <span className="font-body-lg font-semibold text-deep-ink text-base md:text-lg">
                      {faq.q}
                    </span>
                    <span
                      className={`material-symbols-outlined text-craftsman-gold transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      add
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-out overflow-hidden ${
                      isOpen ? "max-h-[300px] opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="font-body-md text-[#41493f] text-sm md:text-base leading-relaxed pb-4">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <AdvantageCTA
        title="Ready to Transform Your Space with Sustainable Outdoor Furniture?"
        ctaText="Get in Touch With Our Team"
        ctaLink="/contact"
        brochureText="Download Master Catalogue"
        brochureLink="/resources/downloads"
        statsText="Support biophilic architectural design, earn IGBC points, and reduce deforestation with our premium WPC and NFC solutions."
      />
    </div>
  );
};

export default ResourcesHub;
