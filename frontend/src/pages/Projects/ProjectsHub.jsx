import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";
import { getOptimizedImageUrl } from "../../utils/image";

// Import local assets
import gbg1 from '../../assets/gallery_real_estate.png';
import gbg2 from '../../assets/gallery_hotels.png';
import gbg3 from '../../assets/gallery_hospitals.png';
import gbg4 from '../../assets/gallery_education.png';
import gbg5 from '../../assets/gallery_smart_city.png';
import welcome1 from '../../assets/welcome-1.png';
import welcome2 from '../../assets/welcome-2.png';
import benchPlanter from '../../assets/Bench_Planter.png';
import busShelters from '../../assets/Bus_Shelters.png';
import carShelter from '../../assets/Car_Shelter.png';
import wickerFurniture from '../../assets/Wicker_Furniture.png';

const ProjectsHub = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    updatePageSEO({
      title: "Our Projects - Urbanland Products",
      description: "Real installations. Real impact. Discover how Urbanland Products' durable, stylish and sustainable outdoor furniture is transforming public and private spaces across India.",
      og_image: gbg1
    });

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

    return () => {
      cleanPageSEO();
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  // Autoplay feature cycle with pause capability
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 5000); // Cycle every 5 seconds
    return () => clearInterval(timer);
  }, [isPaused]);

  const toggleFaq = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  const bentoProjects = [
    {
      title: "Godrej Projects Development Limited",
      location: "Village Kunzre, District Palghar",
      desc: "78 premium benches + 65 planter boxes for luxury villa landscaping. Completed in 2–3 weeks.",
      image: gbg1,
      gridClass: "md:col-span-8",
      link: "/projects/lodha"
    },
    {
      title: "Kalpataru Vienta",
      location: "Kandivali East, Mumbai",
      desc: "24 WPC benches + premium planter boxes. Completed in 3–4 weeks.",
      image: benchPlanter,
      gridClass: "md:col-span-4",
      link: "/projects/lodha"
    },
    {
      title: "Wadhwa Wise City",
      location: "Panvel, Maharashtra",
      desc: "4 custom bus shelters + multiple benches and planters for large township. Completed in 1 month.",
      image: busShelters,
      gridClass: "md:col-span-4",
      link: "/projects/lodha"
    },
    {
      title: "TATA Projects Ltd",
      location: "Gujarat",
      desc: "Large-scale benches, planters and infrastructure furniture. Completed in 2–3 weeks.",
      image: gbg4,
      gridClass: "md:col-span-8",
      link: "/projects/lodha"
    },
    {
      title: "Adani Realty Gated Community",
      location: "Gurugram, NCR",
      desc: "Architectural WPC park seating and custom waste bins for public spaces. Completed in 3 weeks.",
      image: welcome2,
      gridClass: "md:col-span-6",
      link: "/projects/adani"
    },
    {
      title: "Godrej Woods Lounge",
      location: "Noida, NCR",
      desc: "Premium hand-woven wicker dining sets and weather-resistant cabanas. Completed in 4 weeks.",
      image: wickerFurniture,
      gridClass: "md:col-span-6",
      link: "/projects/oberoi"
    }
  ];

  const sectorCards = [
    {
      title: "Real Estate Projects",
      desc: "Luxury villas, gated communities & clubhouses",
      link: "/solutions/real-estate"
    },
    {
      title: "Lodha Projects",
      desc: "Premium residential & township developments",
      link: "/projects/lodha"
    },
    {
      title: "Adani Realty Projects",
      desc: "Large-scale residential & mixed-use developments",
      link: "/projects/adani"
    },
    {
      title: "Oberoi Projects",
      desc: "Luxury residential developments",
      link: "/projects/oberoi"
    },
    {
      title: "Municipal & Smart Cities",
      desc: "Public infrastructure, parks & bus shelters",
      link: "/solutions/municipal-smart-city"
    },
    {
      title: "Hospitality, Healthcare & Education",
      desc: "Hotels, hospitals, schools & universities",
      link: "/solutions/hospitality"
    }
  ];

  const valueFeatures = [
    {
      icon: "wb_sunny",
      title: "Proven Performance",
      desc: "Engineered for durability in real Indian climatic conditions.",
      detail: "Tested for UV-radiation resistance, heavy monsoon humidity, and extreme public wear. Built to survive without fading.",
      stat: "100%",
      statLabel: "UV-Stable & Anti-Rust",
      bullets: ["Salt-spray tested for 1000+ hours", "Thermal expansion resistant", "Non-porous surfaces"]
    },
    {
      icon: "speed",
      title: "Fast Delivery",
      desc: "Efficient manufacturing to meet tight project timelines.",
      detail: "Our optimized local manufacturing process and domestic supply chain ensure parts are ready to assemble and ship rapidly.",
      stat: "2-4",
      statLabel: "Weeks Lead Time",
      bullets: ["Predictable scheduling", "Direct transit dispatch", "Real-time shipping updates"]
    },
    {
      icon: "architecture",
      title: "Full Customization",
      desc: "Tailored designs to match your unique architectural vision.",
      detail: "We provide custom dimensioning, CAD/BIM model adjustments, and bespoke color coatings to fit your scheme.",
      stat: "CAD",
      statLabel: "Integration Ready",
      bullets: ["Bespoke dimensions & RAL colors", "3D CAD & BIM models provided", "Architect-led prototyping"]
    },
    {
      icon: "eco",
      title: "Sustainability Focus",
      desc: "Green design principles and sustainable material sourcing.",
      detail: "Utilizing FSC® certified hardwoods, WPC, and highly recyclable metals to meet strict green building and LEED standards.",
      stat: "100%",
      statLabel: "Recyclable Metals",
      bullets: ["FSC® Certified Timber", "Zero-VOC powder coatings", "Reduced carbon shipping footprint"]
    },
    {
      icon: "support_agent",
      title: "End-to-End Support",
      desc: "Comprehensive assistance from initial design to final installation.",
      detail: "Our structural engineering team provides anchoring details, load-bearing guidelines, and live phone support.",
      stat: "24/7",
      statLabel: "Engineering Support",
      bullets: ["BOM preparation assistance", "Anchoring & footing plans", "Dedicated relationship manager"]
    },
    {
      icon: "verified",
      title: "2-Year Warranty",
      desc: "India’s only 2-Year Comprehensive Warranty for peace of mind.",
      detail: "We offer full structure and finish coverage under standard public use conditions. Double the industry standard.",
      stat: "2-YR",
      statLabel: "Comprehensive Coverage",
      bullets: ["Structural structural warranty", "Surface coating coverage", "Fast replacement process"]
    }
  ];

  const faqs = [
    {
      q: "What is your typical project timeline?",
      a: "Most standard projects are completed and delivered within 2–4 weeks, depending on scale and customization."
    },
    {
      q: "Do you handle installation?",
      a: "We provide detailed installation guides and can recommend certified installation partners in major cities."
    },
    {
      q: "Can you customize furniture for large projects?",
      a: "Yes, we specialize in adapting our designs or creating custom solutions for volume orders to meet exact architectural specifications."
    }
  ];

  return (
    <div className="w-full bg-surface text-deep-ink antialiased min-h-screen flex flex-col pt-0">
      {/* Hero Section */}
      <section className="w-full relative bg-charcoal-industrial text-white overflow-hidden py-24 md:py-32 flex flex-col items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 select-none pointer-events-none"
          style={{ backgroundImage: `url(${getOptimizedImageUrl(gbg1)})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-industrial/80 to-charcoal-industrial" />
        
        <div className="relative w-full max-w-container-max px-margin-mobile md:px-margin-desktop flex flex-col items-center text-center gap-4">
          <span className="font-label-caps tracking-[0.2em] uppercase font-bold text-xs text-craftsman-gold bg-craftsman-gold/10 px-4 py-2 rounded-full border border-craftsman-gold/30">
            ✦ Project Showcase
          </span>
          <h1 className="font-display-lg-mobile text-4xl md:font-display-lg md:text-6xl lg:text-7xl text-white max-w-4xl uppercase font-bold tracking-tight">
            Our Projects
          </h1>
          <p className="font-body-lg text-white/80 max-w-3xl mt-2 leading-relaxed">
            Real installations. Real impact. Discover how Urbanland Products’ durable, stylish and sustainable
            outdoor furniture is transforming public and private spaces across India.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-6 font-label-caps text-xs text-craftsman-gold">
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-craftsman-gold/30">
              <span className="material-symbols-outlined text-sm">check</span> 50+ Major Projects Delivered
            </span>
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-craftsman-gold/30">
              <span className="material-symbols-outlined text-sm">check</span> 15+ Cities Served
            </span>
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-craftsman-gold/30">
              <span className="material-symbols-outlined text-sm">check</span> 2-Year Guarantee
            </span>
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-craftsman-gold/30">
              <span className="material-symbols-outlined text-sm">check</span> ISO 9001:2015 Certified
            </span>
          </div>
        </div>
      </section>

      {/* Section 1: Featured Projects Bento Grid */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24 flex flex-col gap-12 border-b border-charcoal-industrial/10">
        <div className="flex flex-col gap-3 text-center md:text-left">
          <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
            Portfolio
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-ink uppercase">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-craftsman-gold mx-auto md:mx-0"></div>
          <p className="font-body-md text-on-surface-variant max-w-2xl mt-2">
            50+ projects completed | 15+ cities | Typical delivery 2–4 weeks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[350px] md:auto-rows-[400px]">
          {bentoProjects.map((project, idx) => (
            <Link
              key={idx}
              to={project.link}
              className={`${project.gridClass} rounded-2xl overflow-hidden relative group border border-charcoal-industrial/10 bg-surface-container-low shadow-sm hover:shadow-lg transition-all duration-500`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${getOptimizedImageUrl(project.image)})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:via-black/50" />
              
              <div className="absolute bottom-0 left-0 p-6 md:p-8 flex flex-col gap-2 w-full text-left">
                <span className="font-label-caps text-[10px] text-craftsman-gold uppercase tracking-widest font-bold">
                  {project.location}
                </span>
                <h3 className="font-headline-md text-xl md:text-2xl text-white group-hover:text-craftsman-gold transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="font-body-md text-xs md:text-sm text-white/90 max-w-2xl line-clamp-2 mt-1">
                  {project.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Section 2: Sector Navigation */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24 flex flex-col gap-12 border-b border-charcoal-industrial/10">
        <div className="flex flex-col gap-3 text-center">
          <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
            Sectors & Developers
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-ink uppercase">
            Explore Projects by Developer & Sector
          </h2>
          <div className="w-24 h-1 bg-craftsman-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {sectorCards.map((card, idx) => (
            <Link
              key={idx}
              to={card.link}
              className="p-8 border border-charcoal-industrial/10 rounded-2xl bg-surface-container-low hover:border-craftsman-gold/30 hover:bg-white transition-all duration-300 flex flex-col gap-4 shadow-sm hover:shadow-md group text-left no-underline"
            >
              <div className="flex flex-col gap-2">
                <h3 className="font-headline-md text-lg md:text-xl text-deep-ink group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="font-body-md text-xs md:text-sm text-on-surface-variant leading-relaxed">
                  {card.desc}
                </p>
              </div>
              <span className="mt-auto font-label-caps text-xs text-primary group-hover:text-craftsman-gold transition-colors flex items-center gap-1 font-bold">
                View Projects <span className="material-symbols-outlined text-sm font-semibold transition-transform group-hover:translate-x-1">arrow_forward</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Section 3: Why Urbanland */}
      <section className="w-full bg-gradient-to-br from-forest-green via-[#152e18] to-[#0d1f10] text-white py-20 md:py-28 px-margin-mobile md:px-margin-desktop relative overflow-hidden">
        {/* Style block for loading progress indicator */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes progress-height {
            from { transform: scaleY(0); }
            to { transform: scaleY(1); }
          }
        `}} />
        {/* Abstract background gridlines & ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(212,175,55,0.06),transparent_50%)] pointer-events-none"></div>
        <div className="absolute top-0 left-1/3 w-[1px] h-full bg-white/5 pointer-events-none hidden lg:block"></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 pointer-events-none hidden lg:block"></div>

        <div className="max-w-container-max mx-auto lg:grid lg:grid-cols-12 lg:gap-16 lg:items-start relative z-10">
          
          {/* Left Column: Sticky Header Panel & Showcase Card (Desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28 mb-12 lg:mb-0 text-left">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-craftsman-gold animate-pulse"></span>
              <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
                Our Standard
              </span>
            </div>
            
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white uppercase leading-tight">
              Why Our Projects Deliver Lasting Value
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
            
            <p className="font-body-lg text-white/80 leading-relaxed max-w-lg mb-4">
              Every piece of Urbanland furniture is engineered to withstand heavy public use and harsh weather, 
              ensuring your investment looks impeccable for years to come.
            </p>

            {/* Premium Showcase Card (Desktop Only) */}
            <div className="hidden lg:flex border border-white/15 p-8 rounded-none relative overflow-hidden bg-white/[0.02] backdrop-blur-md flex-col gap-6 w-full max-w-md">
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-craftsman-gold"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-craftsman-gold"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-craftsman-gold"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-craftsman-gold"></div>
              
              {/* Dot background */}
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
              
              {/* Header inside showcase */}
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <span className="font-label-technical text-craftsman-gold text-xs tracking-widest font-semibold uppercase">
                    Feature Showcase
                  </span>
                  <span className="font-label-technical text-white/40 text-[10px] tracking-wider mt-1">
                    0{activeFeature + 1} &mdash; 06
                  </span>
                </div>
                <div className="w-14 h-14 rounded-full bg-craftsman-gold/10 border border-craftsman-gold/30 flex items-center justify-center text-craftsman-gold shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                  <span className="material-symbols-outlined text-3xl">{valueFeatures[activeFeature].icon}</span>
                </div>
              </div>

              {/* Big Stat Section */}
              <div className="flex flex-col gap-1 border-y border-white/5 py-6">
                <div className="font-display-lg text-5xl text-white font-black tracking-tight leading-none">
                  {valueFeatures[activeFeature].stat}
                </div>
                <div className="font-label-caps text-xs text-craftsman-gold tracking-widest uppercase font-bold mt-1">
                  {valueFeatures[activeFeature].statLabel}
                </div>
              </div>

              {/* In-depth details */}
              <div className="flex flex-col gap-4 text-left">
                <p className="font-body-md text-sm text-white/80 leading-relaxed">
                  {valueFeatures[activeFeature].detail}
                </p>
                
                {/* Bullets */}
                <div className="flex flex-col gap-2 pt-2">
                  {valueFeatures[activeFeature].bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs text-white/60">
                      <span className="material-symbols-outlined text-sm text-craftsman-gold">done</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Tabs List (Desktop) & Accordion (Mobile) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {valueFeatures.map((feat, idx) => {
              const isActive = activeFeature === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => {
                    setActiveFeature(idx);
                    setIsPaused(true);
                  }}
                  onMouseLeave={() => {
                    setIsPaused(false);
                  }}
                  className={`border transition-all duration-500 rounded-none overflow-hidden relative ${
                    isActive
                      ? "border-craftsman-gold/50 bg-white/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                      : "border-white/10 bg-white/[0.01] hover:bg-white/[0.02] hover:border-white/20"
                  }`}
                >
                  {/* Autoplay Active Progress Indicator (left border fill animation) */}
                  {isActive && (
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-[4px] bg-craftsman-gold origin-top"
                      style={{
                        animation: isPaused ? 'none' : 'progress-height 5s linear forwards',
                        transform: isPaused ? 'scaleY(1)' : undefined
                      }}
                    />
                  )}
                  
                  {/* Tab Trigger Button */}
                  <button
                    onClick={() => {
                      setActiveFeature(idx);
                      setIsPaused(true);
                    }}
                    className="w-full p-6 flex justify-between items-center text-left cursor-pointer border-none select-none focus:outline-none bg-transparent group"
                  >
                    <div className="flex items-center gap-6">
                      <span className={`font-label-technical text-sm tracking-wider font-semibold transition-colors duration-300 ${
                        isActive ? "text-craftsman-gold" : "text-white/30 group-hover:text-white/50"
                      }`}>
                        0{idx + 1}.
                      </span>
                      <div className="flex flex-col gap-1 text-left">
                        <h4 className={`font-label-caps text-xs uppercase tracking-wider font-bold transition-colors duration-300 ${
                          isActive ? "text-white" : "text-white/70 group-hover:text-white"
                        }`}>
                          {feat.title}
                        </h4>
                        <p className={`font-body-md text-xs transition-colors duration-300 ${
                          isActive ? "text-white/60" : "text-white/40 group-hover:text-white/60"
                        }`}>
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                    
                    {/* Active indicator */}
                    <div className="flex items-center gap-3">
                      <span className={`material-symbols-outlined text-lg transition-all duration-500 ${
                        isActive ? "text-craftsman-gold rotate-90" : "text-white/30 group-hover:text-white/50"
                      }`}>
                        chevron_right
                      </span>
                    </div>
                  </button>

                  {/* On Mobile: Inline Accordion Expanded Showcase */}
                  <div
                    className={`lg:hidden block overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive ? "max-h-[450px] opacity-100 border-t border-white/10 p-6 bg-black/10 text-left" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-4">
                        <div className="font-display-lg text-4xl text-white font-black leading-none">
                          {feat.stat}
                        </div>
                        <div className="font-label-caps text-[10px] text-craftsman-gold tracking-wider uppercase font-bold leading-tight">
                          {feat.statLabel}
                        </div>
                      </div>
                      <p className="font-body-md text-xs text-white/80 leading-relaxed">
                        {feat.detail}
                      </p>
                      <div className="flex flex-col gap-2">
                        {feat.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-center gap-2 text-xs text-white/60">
                            <span className="material-symbols-outlined text-sm text-craftsman-gold">done</span>
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Section 4: FAQ */}
      <section className="reveal-section py-24 bg-surface-container-lowest/30">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-16 text-left space-y-4">
            <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
              FAQ
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-ink uppercase">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-left">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaqIndex === idx;
              return (
                <div key={idx} className="bg-white border border-black/[0.05] shadow-sm rounded-lg overflow-hidden transition-all duration-300">
                  <button
                    className="w-full text-left p-8 flex justify-between items-center outline-none bg-white select-none cursor-pointer group"
                    onClick={() => toggleFaq(idx)}
                  >
                    <span className="font-bold text-sm uppercase tracking-widest text-deep-ink group-hover:text-forest-green transition-colors">
                      {faq.q}
                    </span>
                    <span className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? 'rotate-180 text-forest-green' : 'text-deep-ink/50'}`}>
                      expand_more
                    </span>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100 p-8 border-t border-black/[0.05] pt-6' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <p className="text-sm text-deep-ink/75 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="reveal-section bg-forest-green text-white py-24 px-6 md:px-margin-desktop overflow-hidden relative">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-10 border-l-2 border-craftsman-gold/30 pl-8 md:pl-10 text-left">
            <div className="space-y-2">
              <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
                The Urbanland Advantage
              </span>
              <h3 className="font-headline-md text-3xl md:text-4xl text-white leading-tight">
                Architectural Quality &amp; Volume Scale
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: "verified", title: "2-Year Warranty", desc: "Comprehensive commercial coverage" },
                { icon: "speed", title: "Fast Lead Times", desc: "Direct manufacturer-to-site supply" },
                { icon: "architecture", title: "CAD/BIM Ready", desc: "Precise models for architectural layout" },
                { icon: "eco", title: "Sustainable Sourcing", desc: "FSC certified and green build ready" }
              ].map((adv, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <span className="material-symbols-outlined text-craftsman-gold text-2xl">{adv.icon}</span>
                  <div>
                    <p className="font-bold text-sm uppercase tracking-wider font-label-technical text-white">{adv.title}</p>
                    <p className="text-xs text-white/70 mt-1">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 p-8 md:p-12 border border-white/10 backdrop-blur-sm rounded-none text-left">
            <h2 className="font-headline-lg text-3xl md:text-4xl text-white mb-8 leading-tight">
              Ready to Upgrade Public Spaces with <br />
              <span className="text-craftsman-gold">Premium Urbanland Products?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-craftsman-gold text-charcoal-industrial px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold flex items-center justify-center hover:bg-white transition-all duration-300 rounded-[4px] no-underline"
              >
                Request a Quote <span className="ml-2">→</span>
              </Link>
              <Link 
                to="/resources/downloads" 
                className="border-2 border-white text-white px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold flex items-center justify-center hover:bg-white hover:text-forest-green transition-all duration-300 rounded-[4px] no-underline"
              >
                Download Portfolio <span className="ml-2">→</span>
              </Link>
            </div>
            <p className="mt-8 text-xs text-white/60 font-label-technical uppercase tracking-widest font-semibold">
              Partnering with India's leading developers and master planners
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 -skew-x-12 translate-x-1/4 z-0"></div>
      </section>
    </div>
  );
};

export default ProjectsHub;
