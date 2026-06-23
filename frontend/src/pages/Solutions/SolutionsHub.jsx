import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

// Import local assets for sectors
import gbg1 from '../../assets/gallery_real_estate.png';
import gbg2 from '../../assets/gallery_hotels.png';
import gbg3 from '../../assets/gallery_hospitals.png';
import gbg4 from '../../assets/gallery_education.png';
import gbg5 from '../../assets/gallery_smart_city.png';

const SolutionsHub = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeMosaicSlide, setActiveMosaicSlide] = useState(0);

  const mosaicItems = [
    {
      title: "Godrej Properties",
      location: "Mumbai, Maharashtra",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJR2btOpkmqWDQYsZj373to2y94AN-BjXaa2GpRJbP30cxg7MSy3uGe9sqGqghlmGStf_0Ao_A3uW0YpSPguWYJo2Q95cZXz3Yt3ggjse3Q-tJhwARpKqPLScwAG4z1p7Y27xQ-ZFmpOpAYNmcHkVfzyffN0evBU4CJ7AHyc53r0rWoxbGnToSwVWydh4soiQCkqcjNmVET0eN6K7NNAj06J7Gdg8eOn6_rIACNtPdXbvWVHOOT8aMKMTiYNphfOrjB1gWfAlgnfuW"
    },
    {
      title: "Kalpataru",
      location: "Pune, Maharashtra",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOr-vGWFwIc_QFvj1I8P4marwlK_spZgEXT1nuetr1j5XsLft3C2CNHt_FvXJI8l3dTrgILWcqOiYFDmxBZ2cD-eLpGFtZ2LwwvIM4m7_IDiNNDxjeRulbykSkchy9NjgxaLDnuPNGu7joVSx-5PnfHNhAsG5nNRTkvyiOhbuQLJbV0lFUUno4DDMhnI4UQ9xUqLRBT8EYtc6iYqpDgvjS-FGcx8TIQXYeot3OJ0Q7jRnTf6jijFLdwGxTDI4O4vpWk5fJBL1GZ2hY"
    },
    {
      title: "TATA Projects",
      location: "Noida, NCR",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6cpFbx_YpSlwSIFWxY-nyDKca_n2q2-6Arlm63EdfeBhrUndwv6GzThHyPJWH22RgixuJwYyS3VAtPeGupZ6dfZeuwKEj43dGHyhW8ELh1hvTIY6jv6nHM-w6vfW-ZZEkKDLmEru_OdaPuEXtGQYGroDbAHzcaW_xB9dfIyJBKAtduk_MvLGUY2vtTQVzPrNsAvJErswwMkEg7ypIDBmlic4UxM0osFFO0RkyBvak_HDHKvU7VR3PrjVcc26rjY-kxuT9nRibuldT"
    },
    {
      title: "Navandhe Village",
      location: "Smart City Pilot",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5oa3PlInJ_oC5wFTJbtDxbWLw07lfEgos3XokRLHjW2vnxYSsab8xbtb8s3OVH6KjMS_dUFgay-t1rYAjfvgJgLNrwcZUszjZrlrMAgm-JirlDdgSriVablecwfsbm-dYZtd4JGHMKjinbGrXAk5RJh1UmMXvD95H1QP99CoZXodcRVIQtAYXDECezVc3i04ubkGCa5L0UbnpPrCP9DJGMfZO8rKhg151_BLGTTntyRzWNFtfCqVWGLNYf2WpxY858pet2uZSeQeH"
    },
    {
      title: "Wadhwa Group",
      location: "Bengaluru, Karnataka",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvTVPvJxTJgri5-ypgJZujf_YyBuJb7RadWYjTsDoVT_zCw-mHGbc-gsveFBDR7D8N4zdGdo4C1m76K7NLsPv7-xZfDO0AMBm9Bkt6BZVtyT4-oBDtm2MjMVRpmInFVeTcn_Vht1O7qsp4vxTAqRlfl_K7uiRMiVmQwwS5rVaVMT4arGI_f-qJ1tJdFfVlT7gLAGxBRbO9jaNsBuWUsNVTag3elwR3ZRRzjyJbK18FdC_rpiM9VJj9TC-DOixk-0smgSeSzgSvEbgo"
    },
    {
      title: "Signature Series",
      location: "Pan-India Delivery",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDG7vZVwBq0B0HOoPDTsDp1le7XVM-iskeM5ooDjNe15hx_fMJQgQ2BQzf6M90DNkSoBJxgrPN_mn-OeokKAalV4IXXjTJr8rTBtv_6ajO-0706fxRfisqCDz19Z9cbL55bRwREpcvhyQ7FE4XXlakFCBriwlAt_7hFsBKaG5FfJURzbkOzyDUkCjh6UMXZJt3yUVibZJ-4BiISO4YtsFko6lVLtO6hwC51fnGBGgiRS9FFwbMo6m4NhIFBdZSR8Wgbo7blQcFT4OH6"
    }
  ];

  const slides = [
    {
      image: gbg1,
      title: "Real Estate Projects",
      subtitle: "Townships & Communities",
      desc: "Premium, RERA-compliant WPC & metal benches, planter boxes, and customized garden amenities built for luxury developers.",
      path: "/solutions/real-estate"
    },
    {
      image: gbg2,
      title: "Hospitality Outdoors",
      subtitle: "Resorts & Luxury Hotels",
      desc: "Chlorine and UV-resistant outdoor wicker dining sets, poolside daybeds, loungers, and custom cabanas.",
      path: "/solutions/hospitality"
    },
    {
      image: gbg3,
      title: "Healthcare Gardens",
      subtitle: "Therapeutic Healing Spaces",
      desc: "Hygienic, easy-to-clean public benches and custom planter layouts designed for hospital campuses.",
      path: "/solutions/healthcare"
    },
    {
      image: gbg4,
      title: "Educational Campuses",
      subtitle: "Universities & Schools",
      desc: "Student-proof, heavy-duty outdoor canteen picnic tables, collaborative study zones, and campus benches.",
      path: "/solutions/education"
    },
    {
      image: gbg5,
      title: "Smart Cities & Municipalities",
      subtitle: "Public Transit & Infrastructure",
      desc: "Tender-compliant public bus shelters, heavy-duty park benches, dual-compartment litter bins, and safety bollards.",
      path: "/solutions/municipal-smart-city"
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handlePrevMosaic = () => {
    setActiveMosaicSlide((prev) => (prev - 1 + mosaicItems.length) % mosaicItems.length);
  };

  const handleNextMosaic = () => {
    setActiveMosaicSlide((prev) => (prev + 1) % mosaicItems.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMosaicSlide((prev) => (prev + 1) % mosaicItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeMosaicSlide]);

  useEffect(() => {
    updatePageSEO({
      title: "Industry Solutions | URBANLAND Products",
      description: "Explore customized street furniture solutions for Real Estate, Hospitality, Hotels, Healthcare, Universities, and Smart City Municipalities.",
      og_image: gbg1
    });

    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 5);
    }, 6000);

    // Scroll reveal observer
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
      clearInterval(slideInterval);
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="w-full bg-background text-on-surface font-body-md antialiased overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center overflow-hidden bg-[#1A1A1A]">
        {/* Slide backgrounds */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeSlide === index ? "opacity-100 z-0" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover select-none"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/90 via-[#1A1A1A]/60 to-transparent z-10" />
          </div>
        ))}

        {/* Content Container */}
        <div className="relative z-10 w-full px-6 md:px-margin-desktop text-white">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-3 py-1.5 px-3.5 bg-craftsman-gold text-charcoal-industrial rounded-full font-label-caps text-[10px] uppercase tracking-widest font-bold">
              <span className="w-2 h-2 rounded-full bg-forest-green animate-pulse"></span>
              {slides[activeSlide].subtitle}
            </div>

            {/* Static H1 for Search Engine Optimization */}
            <h1 className="sr-only">
              Industry-Specific Outdoor Furniture Solutions for Urban India
            </h1>

            <h2 className="font-display-lg text-4xl sm:text-6.5xl lg:text-[4rem] font-bold uppercase leading-none tracking-tight">
              {slides[activeSlide].title}
            </h2>

            <p className="font-body-lg text-sm sm:text-base md:text-lg text-white/90 max-w-xl leading-relaxed">
              {slides[activeSlide].desc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to={slides[activeSlide].path}
                className="bg-craftsman-gold text-charcoal-industrial px-8 py-4 font-label-caps text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-charcoal-industrial transition-all duration-300"
              >
                Explore Sector Solutions <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 font-label-caps text-xs uppercase tracking-widest flex items-center justify-center hover:bg-white/10 transition-all duration-300"
              >
                Get Custom Quote
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2 font-label-caps text-xs text-white/80">
                <span className="text-craftsman-gold font-bold">✓</span> 2-Year Guarantee
              </div>
              <div className="flex items-center gap-2 font-label-caps text-xs text-white/80">
                <span className="text-craftsman-gold font-bold">✓</span> ISO 9001:2015 Certified
              </div>
              <div className="flex items-center gap-2 font-label-caps text-xs text-white/80">
                <span className="text-craftsman-gold font-bold">✓</span> 50+ Projects Delivered
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-10 right-6 md:right-margin-desktop z-20 flex items-center gap-6 select-none">
          <div className="text-white/50 text-xs sm:text-sm font-semibold tracking-widest font-mono">
            <span className="text-craftsman-gold text-base md:text-lg font-bold">
              {String(activeSlide + 1).padStart(2, '0')}
            </span> / {String(slides.length).padStart(2, '0')}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white bg-white/5 hover:bg-white/15 cursor-pointer transition-colors duration-300 active:scale-95"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white bg-white/5 hover:bg-white/15 cursor-pointer transition-colors duration-300 active:scale-95"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Visual Progress Indicator */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/10 z-20">
          <div 
            className="h-full bg-craftsman-gold transition-all duration-6000 ease-linear"
            style={{ width: `${((activeSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </section>

      {/* Industry Solutions Grid */}
      <section className="reveal-section py-24 px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-16 space-y-4 text-left">
          <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
            Industry Verticals
          </span>
          <h2 className="font-headline-lg text-headline-lg text-deep-ink">
            Tailored Outdoor Furniture Solutions for Every Urban Sector
          </h2>
          <div className="w-24 h-1 bg-craftsman-gold"></div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
            We manufacture specialized furniture configurations tailored to the strict spatial, structural, and aesthetic requirements of diverse industry projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Real Estate (Large) */}
          <Link to="/solutions/real-estate" className="md:col-span-8 group relative overflow-hidden h-[380px] sm:h-[420px] md:h-[450px] border border-outline-variant/30 block">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${gbg1})` }}
            >
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-industrial/95 via-charcoal-industrial/60 to-transparent md:from-charcoal-industrial/90 md:via-charcoal-industrial/20 md:to-transparent transition-all duration-500 md:group-hover:from-charcoal-industrial md:group-hover:via-charcoal-industrial/75 opacity-90 md:opacity-85 md:group-hover:opacity-95"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <h3 className="font-headline-md text-headline-md text-white mb-1 md:mb-2">Real Estate</h3>
              
              <div className="md:opacity-0 md:max-h-0 overflow-hidden md:group-hover:opacity-100 md:group-hover:max-h-[250px] opacity-100 max-h-[300px] transition-all duration-500 ease-in-out">
                <p className="text-white/80 font-body-md mb-3 md:mb-4 max-w-lg">Elevate luxury townships and premium residential complexes with durable, architecturally aligned amenities.</p>
                <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white font-label-caps text-[10px] rounded-full">Bespoke Benches</span>
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white font-label-caps text-[10px] rounded-full">Pergola Systems</span>
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white font-label-caps text-[10px] rounded-full">Smart Trash Bins</span>
                </div>
                <span className="text-craftsman-gold font-label-caps text-xs uppercase tracking-widest flex items-center gap-2 md:group-hover:gap-4 transition-all">
                  Explore Solutions <span className="material-symbols-outlined">chevron_right</span>
                </span>
              </div>
            </div>
          </Link>
 
          {/* Hospitality */}
          <Link to="/solutions/hospitality" className="md:col-span-4 group relative overflow-hidden h-[380px] sm:h-[420px] md:h-[450px] border border-outline-variant/30 block">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${gbg2})` }}
            >
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-industrial/95 via-charcoal-industrial/60 to-transparent md:from-charcoal-industrial/90 md:via-charcoal-industrial/20 md:to-transparent transition-all duration-500 md:group-hover:from-charcoal-industrial md:group-hover:via-charcoal-industrial/75 opacity-90 md:opacity-85 md:group-hover:opacity-95"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <h3 className="font-headline-md text-headline-md text-white mb-1 md:mb-2">Hospitality</h3>
              
              <div className="md:opacity-0 md:max-h-0 overflow-hidden md:group-hover:opacity-100 md:group-hover:max-h-[250px] opacity-100 max-h-[300px] transition-all duration-500 ease-in-out">
                <p className="text-white/80 font-body-md mb-3 md:mb-4">Designer-grade resilience for luxury hotels, resorts, and high-traffic leisure zones.</p>
                <span className="text-craftsman-gold font-label-caps text-xs uppercase tracking-widest flex items-center gap-2 md:group-hover:gap-4 transition-all">
                  Explore <span className="material-symbols-outlined">chevron_right</span>
                </span>
              </div>
            </div>
          </Link>
 
          {/* Healthcare */}
          <Link to="/solutions/healthcare" className="md:col-span-4 group relative overflow-hidden h-[320px] sm:h-[350px] md:h-[380px] border border-outline-variant/30 block">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${gbg3})` }}
            >
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-industrial/95 via-charcoal-industrial/60 to-transparent md:from-charcoal-industrial/90 md:via-charcoal-industrial/20 md:to-transparent transition-all duration-500 md:group-hover:from-charcoal-industrial md:group-hover:via-charcoal-industrial/75 opacity-90 md:opacity-85 md:group-hover:opacity-95"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <h3 className="font-headline-md text-headline-md text-white mb-1 md:mb-2">Healthcare</h3>
              
              <div className="md:opacity-0 md:max-h-0 overflow-hidden md:group-hover:opacity-100 md:group-hover:max-h-[250px] opacity-100 max-h-[300px] transition-all duration-500 ease-in-out">
                <p className="text-white/80 font-body-md mb-3 md:mb-4">Ergonomic and hygienic outdoor furniture for healing gardens and patient recovery areas.</p>
                <span className="text-craftsman-gold font-label-caps text-xs uppercase tracking-widest flex items-center gap-2 md:group-hover:gap-4 transition-all">
                  Explore <span className="material-symbols-outlined">chevron_right</span>
                </span>
              </div>
            </div>
          </Link>
 
          {/* Education */}
          <Link to="/solutions/education" className="md:col-span-4 group relative overflow-hidden h-[320px] sm:h-[350px] md:h-[380px] border border-outline-variant/30 block">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${gbg4})` }}
            >
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-industrial/95 via-charcoal-industrial/60 to-transparent md:from-charcoal-industrial/90 md:via-charcoal-industrial/20 md:to-transparent transition-all duration-500 md:group-hover:from-charcoal-industrial md:group-hover:via-charcoal-industrial/75 opacity-90 md:opacity-85 md:group-hover:opacity-95"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <h3 className="font-headline-md text-headline-md text-white mb-1 md:mb-2">Education</h3>
              
              <div className="md:opacity-0 md:max-h-0 overflow-hidden md:group-hover:opacity-100 md:group-hover:max-h-[250px] opacity-100 max-h-[300px] transition-all duration-500 ease-in-out">
                <p className="text-white/80 font-body-md mb-3 md:mb-4">Robust, low-maintenance collaborative zones for modern university campuses and schools.</p>
                <span className="text-craftsman-gold font-label-caps text-xs uppercase tracking-widest flex items-center gap-2 md:group-hover:gap-4 transition-all">
                  Explore <span className="material-symbols-outlined">chevron_right</span>
                </span>
              </div>
            </div>
          </Link>
 
          {/* Municipal / Smart Cities */}
          <Link to="/solutions/municipal-smart-city" className="md:col-span-4 group relative overflow-hidden h-[320px] sm:h-[350px] md:h-[380px] border border-outline-variant/30 block">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${gbg5})` }}
            >
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-industrial/95 via-charcoal-industrial/60 to-transparent md:from-charcoal-industrial/90 md:via-charcoal-industrial/20 md:to-transparent transition-all duration-500 md:group-hover:from-charcoal-industrial md:group-hover:via-charcoal-industrial/75 opacity-90 md:opacity-85 md:group-hover:opacity-95"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <h3 className="font-headline-md text-headline-md text-white mb-1 md:mb-2">Smart Cities</h3>
              
              <div className="md:opacity-0 md:max-h-0 overflow-hidden md:group-hover:opacity-100 md:group-hover:max-h-[250px] opacity-100 max-h-[300px] transition-all duration-500 ease-in-out">
                <p className="text-white/80 font-body-md mb-3 md:mb-4">Scalable, tech-integrated public transit shelters and civic furniture for urban planning.</p>
                <span className="text-craftsman-gold font-label-caps text-xs uppercase tracking-widest flex items-center gap-2 md:group-hover:gap-4 transition-all">
                  Explore <span className="material-symbols-outlined">chevron_right</span>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Real Projects Mosaic */}
      <section className="reveal-section bg-surface-container py-24 border-y border-outline-variant/30 overflow-hidden">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-4">
            <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
              Proven Track Record
            </span>
            <h2 className="font-headline-lg text-headline-lg text-deep-ink">
              Real Projects. Real Impact. Delivered Across India.
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Our components are trusted by India's leading developers and institutional architects for their unmatched structural integrity.
            </p>
          </div>
          
          <div className="flex gap-8 shrink-0">
            <div className="text-center">
              <div className="font-display-lg text-headline-lg text-primary">50+</div>
              <div className="font-label-caps text-[10px] uppercase tracking-wider text-on-surface-variant">Projects</div>
            </div>
            <div className="text-center border-x border-outline-variant px-8">
              <div className="font-display-lg text-headline-lg text-primary">15+</div>
              <div className="font-label-caps text-[10px] uppercase tracking-wider text-on-surface-variant">Cities</div>
            </div>
            <div className="text-center">
              <div className="font-display-lg text-headline-lg text-primary">4wk</div>
              <div className="font-label-caps text-[10px] uppercase tracking-wider text-on-surface-variant">Delivery</div>
            </div>
          </div>
        </div>
        {/* Mosaic Gallery (Desktop & Tablet) */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-4 h-[450px] sm:h-[550px] md:h-[600px] gap-2 md:gap-4 px-4">
          <div className="relative group cursor-pointer overflow-hidden rounded-lg">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${mosaicItems[0].img})` }}
            >
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent md:bg-primary/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6 text-left">
              <p className="text-white font-label-caps text-xs uppercase font-bold">{mosaicItems[0].title}</p>
              <p className="text-white/80 font-body-md text-xs">{mosaicItems[0].location}</p>
            </div>
          </div>

          <div className="relative group cursor-pointer overflow-hidden rounded-lg md:row-span-2">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${mosaicItems[1].img})` }}
            >
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent md:bg-primary/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6 text-left">
              <p className="text-white font-label-caps text-xs uppercase font-bold">{mosaicItems[1].title}</p>
              <p className="text-white/80 font-body-md text-xs">{mosaicItems[1].location}</p>
            </div>
          </div>

          <div className="relative group cursor-pointer overflow-hidden rounded-lg">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${mosaicItems[2].img})` }}
            >
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent md:bg-primary/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6 text-left">
              <p className="text-white font-label-caps text-xs uppercase font-bold">{mosaicItems[2].title}</p>
              <p className="text-white/80 font-body-md text-xs">{mosaicItems[2].location}</p>
            </div>
          </div>

          <div className="relative group cursor-pointer overflow-hidden rounded-lg md:row-span-2">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${mosaicItems[3].img})` }}
            >
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent md:bg-primary/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6 text-left">
              <p className="text-white font-label-caps text-xs uppercase font-bold">{mosaicItems[3].title}</p>
              <p className="text-white/80 font-body-md text-xs">{mosaicItems[3].location}</p>
            </div>
          </div>

          <div className="relative group cursor-pointer overflow-hidden rounded-lg">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${mosaicItems[4].img})` }}
            >
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent md:bg-primary/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6 text-left">
              <p className="text-white font-label-caps text-xs uppercase font-bold">{mosaicItems[4].title}</p>
              <p className="text-white/80 font-body-md text-xs">{mosaicItems[4].location}</p>
            </div>
          </div>

          <div className="relative group cursor-pointer overflow-hidden rounded-lg">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${mosaicItems[5].img})` }}
            >
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent md:bg-primary/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6 text-left">
              <p className="text-white font-label-caps text-xs uppercase font-bold">{mosaicItems[5].title}</p>
              <p className="text-white/80 font-body-md text-xs">{mosaicItems[5].location}</p>
            </div>
          </div>
        </div>

        {/* Mosaic Gallery (Mobile Slider) */}
        <div className="block md:hidden px-4 relative h-[320px] sm:h-[400px]">
          <div className="relative w-full h-full overflow-hidden rounded-lg group">
            {/* Active image background */}
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${mosaicItems[activeMosaicSlide].img})` }}
            ></div>
            
            {/* Premium legibility gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            
            {/* Slide Information */}
            <div className="absolute bottom-0 left-0 w-full p-6 text-left z-10">
              <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-[10px] block mb-1">
                Real Projects. Real Impact.
              </span>
              <p className="text-white font-label-caps text-base uppercase font-bold tracking-wide">
                {mosaicItems[activeMosaicSlide].title}
              </p>
              <p className="text-white/70 font-body-md text-xs mt-1">
                {mosaicItems[activeMosaicSlide].location}
              </p>
            </div>

            {/* Left Chevron Button */}
            <button
              onClick={handlePrevMosaic}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white active:scale-90 transition-all z-20 cursor-pointer"
              aria-label="Previous Project"
            >
              <span className="material-symbols-outlined text-lg">chevron_left</span>
            </button>

            {/* Right Chevron Button */}
            <button
              onClick={handleNextMosaic}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white active:scale-90 transition-all z-20 cursor-pointer"
              aria-label="Next Project"
            >
              <span className="material-symbols-outlined text-lg">chevron_right</span>
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 right-6 flex gap-1.5 z-20">
              {mosaicItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveMosaicSlide(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    activeMosaicSlide === idx ? "bg-craftsman-gold w-3" : "bg-white/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Urbanland */}
      <section className="reveal-section py-24 px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-16 text-center space-y-4 flex flex-col items-center">
          <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
            Our Value Proposition
          </span>
          <h2 className="font-headline-lg text-headline-lg text-deep-ink">
            Why Leading Organisations Choose Urbanland
          </h2>
          <div className="w-24 h-1 bg-craftsman-gold mx-auto"></div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Engineering outdoor environments that stand the test of time, weather, and usage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="p-8 bg-surface-container-low border border-outline-variant/35 hover:border-craftsman-gold transition-colors duration-300 group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">bolt</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-3 text-deep-ink uppercase tracking-tight">Fast Turnaround</h3>
            <p className="text-on-surface-variant font-body-md">Optimized manufacturing processes ensure delivery of standard products within 2-4 weeks, nationwide.</p>
          </div>

          <div className="p-8 bg-surface-container-low border border-outline-variant/35 hover:border-craftsman-gold transition-colors duration-300 group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">edit_note</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-3 text-deep-ink uppercase tracking-tight">Full Customization</h3>
            <p className="text-on-surface-variant font-body-md">Modify sizes, materials, and finishes to align perfectly with your architectural vision and brand identity.</p>
          </div>

          <div className="p-8 bg-surface-container-low border border-outline-variant/35 hover:border-craftsman-gold transition-colors duration-300 group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">eco</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-3 text-deep-ink uppercase tracking-tight">Sustainability</h3>
            <p className="text-on-surface-variant font-body-md">We use FSC-certified wood and recycled metals, contributing to your project's Green Building certification.</p>
          </div>

          <div className="p-8 bg-surface-container-low border border-outline-variant/35 hover:border-craftsman-gold transition-colors duration-300 group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">history_edu</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-3 text-deep-ink uppercase tracking-tight">Proven Track Record</h3>
            <p className="text-on-surface-variant font-body-md">Over a decade of experience delivering high-impact urban solutions for India's top infrastructure firms.</p>
          </div>

          <div className="p-8 bg-surface-container-low border border-outline-variant/35 hover:border-craftsman-gold transition-colors duration-300 group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">support_agent</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-3 text-deep-ink uppercase tracking-tight">End-to-End Support</h3>
            <p className="text-on-surface-variant font-body-md">From initial CAD drawings and site surveys to professional installation and maintenance guides.</p>
          </div>

          <div className="p-8 bg-surface-container-low border border-outline-variant/35 hover:border-craftsman-gold transition-colors duration-300 group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">shield_with_heart</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-3 text-deep-ink uppercase tracking-tight">2-Year Warranty</h3>
            <p className="text-on-surface-variant font-body-md">Comprehensive guarantee against manufacturing defects and structural failures, built for permanence.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="reveal-section py-24 px-6 max-w-4xl mx-auto">
        <div className="mb-16 text-center space-y-4 flex flex-col items-center">
          <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
            FAQ
          </span>
          <h2 className="font-headline-lg text-headline-lg text-deep-ink">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-craftsman-gold mx-auto"></div>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "What are the typical lead times for bulk orders?",
              a: "For standard catalog items in bulk, our lead time is typically 3-4 weeks. Custom-engineered solutions may take 6-8 weeks depending on the complexity and volume of the order."
            },
            {
              q: "Do you offer pan-India delivery and installation?",
              a: "Yes, we provide nationwide delivery across India. Our logistics network ensures safe transit to Tier 1, 2, and 3 cities. We also offer professional installation services through our certified regional partners."
            },
            {
              q: "How do Urbanland products contribute to Green Building?",
              a: "Our products utilize FSC-certified timber and high-recycled-content aluminum and steel. We also offer finishes with low-VOC powder coatings, which help projects earn LEED and IGBC rating points."
            },
            {
              q: "Can we request custom branding on the furniture?",
              a: "Absolutely. We can integrate laser-cut logos, custom color schemes, and specific architectural motifs into the furniture design to ensure it reflects your brand's identity perfectly."
            }
          ].map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div 
                key={idx} 
                className={`bg-surface-container-lowest border transition-all duration-300 overflow-hidden ${
                  isOpen ? "border-craftsman-gold/60" : "border-outline-variant/30 hover:border-outline-variant/60"
                } rounded-lg`}
              >
                <button 
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none bg-surface-container-lowest select-none group"
                  onClick={() => toggleFaq(idx)}
                >
                  <span className="font-headline-md text-[18px] text-deep-ink group-hover:text-primary transition-colors">{faq.q}</span>
                  <span className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-on-surface-variant'}`}>
                    expand_more
                  </span>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 py-6 border-t border-outline-variant/20' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="px-6 font-body-md text-on-surface-variant leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Rebuilt Footer CTA */}
      <section className="reveal-section bg-primary text-on-primary py-24 px-margin-mobile md:px-margin-desktop overflow-hidden relative">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Trust Panel */}
          <div className="space-y-10 border-l-2 border-secondary/30 pl-8 md:pl-10 text-left">
            <div className="space-y-2">
              <span className="font-label-technical text-secondary tracking-[0.2em] uppercase font-semibold text-xs block">
                The Urbanland Advantage
              </span>
              <h3 className="font-headline-md text-3xl md:text-4xl text-on-primary leading-tight">Why Urbanland Stands Apart</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: "verified", title: "ISO 9001:2015", desc: "Certified manufacturing excellence" },
                { icon: "workspace_premium", title: "2-Year Guarantee", desc: "India's only comprehensive warranty" },
                { icon: "precision_manufacturing", title: "Precision Engineering", desc: "Built for high-traffic durability" },
                { icon: "public", title: "Pan-India Delivery", desc: "Professional installation support" }
              ].map((adv, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <span className="material-symbols-outlined text-secondary text-2xl">{adv.icon}</span>
                  <div>
                    <p className="font-bold text-sm uppercase tracking-wider font-label-technical">{adv.title}</p>
                    <p className="text-xs text-white/70 mt-1">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conversion Area Card */}
          <div className="bg-white/5 p-8 md:p-12 border border-white/10 backdrop-blur-sm rounded-none text-left">
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-primary mb-8 leading-tight">
              Ready to Transform Your Space with <br />
              <span className="text-secondary">Premium Outdoor Solutions?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-secondary text-on-secondary px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold flex items-center justify-center hover:opacity-90 transition-all duration-300 rounded-[4px]"
              >
                Request a Custom Quote <span className="ml-2">→</span>
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 rounded-[4px]"
              >
                Talk to an Engineer <span className="ml-2">→</span>
              </Link>
            </div>
            <p className="mt-8 text-xs text-white/60 font-label-technical uppercase tracking-widest font-semibold">
              Trusted by 50+ major projects across 15+ Indian cities
            </p>
          </div>
        </div>
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 -skew-x-12 translate-x-1/4 z-0"></div>
      </section>
    </div>
  );
};

export default SolutionsHub;
