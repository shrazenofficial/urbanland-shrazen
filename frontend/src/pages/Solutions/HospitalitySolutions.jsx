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

const HospitalitySolutions = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  useEffect(() => {
    updatePageSEO({
      title: "Outdoor Furniture for Hospitality & Hotels India | Resorts, Pool Areas, Restaurants & Rooftops | Urbanland Products",
      description: "Premium wicker furniture, benches, planter boxes and outdoor seating solutions for hotels, resorts, restaurants and pool areas in India. Durable, stylish and low-maintenance products trusted by hospitality operators. 2-Year Guarantee.",
      og_image: gbg2
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

  return (
    <div className="w-full bg-[#F7F4EF] text-deep-ink font-body-md antialiased overflow-x-hidden pt-0">
      
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center overflow-hidden bg-[#1A1A1A]">
        <div className="absolute inset-0">
          <img
            src={getOptimizedImageUrl(gbg2)}
            alt="Luxury Hotel Pooldeck Seating"
            className="w-full h-full object-cover select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/90 via-[#1A1A1A]/60 to-transparent z-10" />
        </div>

        <div className="relative z-10 max-w-container-max mx-auto w-full px-6 md:px-margin-desktop text-white">
          <div className="max-w-3xl space-y-6 text-left">
            <div className="inline-flex items-center gap-3 py-1.5 px-3.5 bg-craftsman-gold text-charcoal-industrial rounded-full font-label-caps text-[10px] uppercase tracking-widest font-bold">
              <span className="w-2 h-2 rounded-full bg-forest-green animate-pulse"></span>
              Resorts, Pool Areas, Restaurants &amp; Rooftops
            </div>

            <h1 className="font-display-lg text-4xl sm:text-6.5xl lg:text-[4rem] font-bold uppercase leading-none tracking-tight">
              Outdoor Furniture for <br /> Hospitality &amp; Hotels
            </h1>

            <p className="font-serif text-2xl md:text-3xl text-craftsman-gold italic opacity-90 mt-4 leading-normal">
              Weather-Resistant Wicker, Daybeds &amp; Seating in India
            </p>

            <div className="flex flex-wrap gap-x-8 gap-y-4 py-4 border-y border-white/10 max-w-2xl">
              <div className="flex items-center text-white/90 text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-craftsman-gold mr-3">check_circle</span>
                3,000 Hrs UV Stable Wicker
              </div>
              <div className="flex items-center text-white/90 text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-craftsman-gold mr-3">check_circle</span>
                Chlorine &amp; Saline Resistant
              </div>
              <div className="flex items-center text-white/90 text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-craftsman-gold mr-3">check_circle</span>
                Luxury Aesthetics
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#solutions-list"
                className="bg-craftsman-gold text-charcoal-industrial px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold flex items-center justify-center hover:bg-white hover:text-charcoal-industrial transition-all duration-300 rounded-[4px] no-underline"
              >
                Explore Solutions
              </a>
              <a
                href="#projects-showcase"
                className="border-2 border-white text-white px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold flex items-center justify-center hover:bg-white hover:text-forest-green transition-all duration-300 rounded-[4px] no-underline"
              >
                View Project Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Challenges - Dark Backdrop (No Scroll Entrance Animation) */}
      <section className="bg-charcoal-industrial py-24 text-white">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-16 text-left space-y-4">
            <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
              Challenges
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white max-w-4xl uppercase">
              Challenges Hospitality Operators &amp; Resort Designers Face Today
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border-t border-white/10">
            <div className="p-8 border-r border-b border-white/10 hover:bg-white/5 transition-colors group text-left">
              <span className="material-symbols-outlined text-4xl text-craftsman-gold mb-6 block group-hover:scale-110 transition-transform">
                hotel_class
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">Guest Comfort &amp; Class</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Demanding high-end, Instagram-worthy aesthetics that elevate guest ratings.
              </p>
            </div>
            <div className="p-8 border-r border-b border-white/10 hover:bg-white/5 transition-colors group text-left">
              <span className="material-symbols-outlined text-4xl text-craftsman-gold mb-6 block group-hover:scale-110 transition-transform">
                waves
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">Chlorine &amp; Salt Rust</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Poolside chlorine and seaside saline mist oxidizing standard outdoor metals rapidly.
              </p>
            </div>
            <div className="p-8 border-r border-b border-white/10 hover:bg-white/5 transition-colors group text-left">
              <span className="material-symbols-outlined text-4xl text-craftsman-gold mb-6 block group-hover:scale-110 transition-transform">
                sunny
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">Extreme UV Degradation</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Sun exposure cracking and fading low-quality synthetic rattan weave within one season.
              </p>
            </div>
            <div className="p-8 border-r border-b border-white/10 hover:bg-white/5 transition-colors group text-left">
              <span className="material-symbols-outlined text-4xl text-craftsman-gold mb-6 block group-hover:scale-110 transition-transform">
                cleaning_services
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">Housekeeping Load</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Difficulty keeping outdoor fabrics and finishes clean during peak tourist seasons.
              </p>
            </div>
            <div className="p-8 border-b border-white/10 hover:bg-white/5 transition-colors group text-left">
              <span className="material-symbols-outlined text-4xl text-craftsman-gold mb-6 block group-hover:scale-110 transition-transform">
                schedule
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">Renovation Deadlines</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Delays in custom furniture deliveries disrupting seasonal hotel launches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Solutions - Light Backdrop */}
      <section id="solutions-list" className="reveal-section py-24 bg-[#F7F4EF]">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-16 text-left space-y-4">
            <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
              Our Solutions
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-ink uppercase">
              Premium Outdoor Hospitality Solutions
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
            <p className="font-body-lg text-on-surface-variant max-w-2xl pt-2">
              Designed for luxury resort lounging and heavy-duty restaurant dining. Crafted to endure the outdoors while ensuring complete guest comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Wicker Lounge Sets */}
            <div className="group cursor-pointer text-left">
              <div className="relative aspect-[4/5] overflow-hidden mb-6 rounded-[8px] border border-black/5 shadow-sm">
                <img
                  alt="Wicker Outdoor Dining"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  src={getOptimizedImageUrl(gbg2)}
                />
              </div>
              <h3 className="font-display-lg text-2xl mb-3 text-deep-ink uppercase font-medium">Wicker Furniture</h3>
              <p className="text-sm text-deep-ink/75 leading-relaxed mb-6">
                Intricately hand-woven synthetic wicker with custom UV stabilizers and quick-dry cushions for hotel decks.
              </p>
              <Link
                to="/products/wicker-furniture"
                className="text-xs font-bold uppercase tracking-widest text-craftsman-gold flex items-center hover:text-forest-green transition-colors no-underline"
              >
                Explore Wicker <span className="material-symbols-outlined ml-2 text-base">arrow_right_alt</span>
              </Link>
            </div>

            {/* Aluminium Benches & Loungers */}
            <div className="group cursor-pointer text-left">
              <div className="relative aspect-[4/5] overflow-hidden mb-6 rounded-[8px] border border-black/5 shadow-sm">
                <img
                  alt="Aluminium Lounger"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  src={getOptimizedImageUrl(welcome1)}
                />
              </div>
              <h3 className="font-display-lg text-2xl mb-3 text-deep-ink uppercase font-medium">Aluminium Seating</h3>
              <p className="text-sm text-deep-ink/75 leading-relaxed mb-6">
                Lightweight, rust-free high-grade aluminum frame loungers and chairs, coated in marine-grade finish.
              </p>
              <Link
                to="/products/benches/aluminium-benches"
                className="text-xs font-bold uppercase tracking-widest text-craftsman-gold flex items-center hover:text-forest-green transition-colors no-underline"
              >
                Explore Seating <span className="material-symbols-outlined ml-2 text-base">arrow_right_alt</span>
              </Link>
            </div>

            {/* Planters & Dividers */}
            <div className="group cursor-pointer text-left">
              <div className="relative aspect-[4/5] overflow-hidden mb-6 rounded-[8px] border border-black/5 shadow-sm">
                <img
                  alt="Planters"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  src={getOptimizedImageUrl(gbg5)}
                />
              </div>
              <h3 className="font-display-lg text-2xl mb-3 text-deep-ink uppercase font-medium">Modern Planters</h3>
              <p className="text-sm text-deep-ink/75 leading-relaxed mb-6">
                Architectural metal and composite planter boxes designed to segment café spaces and define guest privacy.
              </p>
              <Link
                to="/products/planters"
                className="text-xs font-bold uppercase tracking-widest text-craftsman-gold flex items-center hover:text-forest-green transition-colors no-underline"
              >
                Explore Planters <span className="material-symbols-outlined ml-2 text-base">arrow_right_alt</span>
              </Link>
            </div>
          </div>

          {/* View All CTA */}
          <div className="flex justify-center mt-16">
            <Link
              to="/catalogue"
              className="bg-forest-green text-white px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold flex items-center justify-center hover:bg-primary transition-all duration-300 rounded-[4px] no-underline group shadow-sm border-b-2 border-charcoal-industrial"
            >
              View All Outdoor Solutions
              <span className="material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Real Projects - Dark Backdrop */}
      <section id="projects-showcase" className="reveal-section py-24 bg-charcoal-industrial text-white overflow-hidden">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-16 text-left space-y-4">
            <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
              Case Studies
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white uppercase">
              Proven Excellence in Premium Resorts &amp; Hotels
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
          </div>

          <div className="space-y-32">
            {/* Arkade Prime */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 relative">
                <div className="aspect-video overflow-hidden rounded-[16px] shadow-lg border border-white/5">
                  <img
                    alt="Arkade Prime Lounge"
                    className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
                    src={getOptimizedImageUrl(gbg2)}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-craftsman-gold p-8 text-charcoal-industrial hidden md:block rounded-[4px] shadow-xl">
                  <div className="text-4xl font-display-lg font-bold">2 Wks</div>
                  <div className="text-xs font-bold uppercase tracking-wider">Fast Turnaround</div>
                </div>
              </div>
              <div className="lg:col-span-5 lg:pl-12 text-left">
                <h3 className="font-display-lg text-3xl mb-6 text-white uppercase">Arkade Prime Resorts</h3>
                <p className="text-white/70 leading-relaxed mb-8">
                  Supplied custom weather-resistant synthetic wicker lounge sofas and poolside daybeds, transforming their rooftop deck into a premium guest lounge.
                </p>
                <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-craftsman-gold mb-1">
                      Location
                    </div>
                    <div className="text-sm font-medium text-white/90">Andheri East, Mumbai</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-craftsman-gold mb-1">
                      Deployment
                    </div>
                    <div className="text-sm font-medium text-white/90 font-label-technical">Custom Wicker Sectionals</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bhardawadi & Navrang */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-left">
              <div className="space-y-8">
                <div className="aspect-[16/10] overflow-hidden rounded-[16px] border border-white/5 shadow-md">
                  <img
                    alt="Hotel Dining Sets"
                    className="w-full h-full object-cover"
                    src={getOptimizedImageUrl(welcome2)}
                  />
                </div>
                <div>
                  <h4 className="font-display-lg text-2xl mb-4 text-white uppercase">Bhardawadi Premium Café</h4>
                  <p className="text-sm text-white/60 mb-6 leading-relaxed">
                    Designed and delivered space-efficient wicker outdoor dining tables and heavy-duty armchairs with high color-fastness.
                  </p>
                  <div className="inline-flex gap-8">
                    <div className="text-xs font-bold uppercase tracking-widest text-craftsman-gold">
                      1–2 Weeks Delivery
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-craftsman-gold border-l border-white/20 pl-8">
                      Chlorine Protected
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8 lg:mt-16">
                <div className="aspect-[16/10] overflow-hidden rounded-[16px] border border-white/5 shadow-md">
                  <img
                    alt="Terrace Lounge"
                    className="w-full h-full object-cover"
                    src={getOptimizedImageUrl(gbg4)}
                  />
                </div>
                <div>
                  <h4 className="font-display-lg text-2xl mb-4 text-white uppercase">Navrang Oasis Lounge</h4>
                  <p className="text-sm text-white/60 mb-6 leading-relaxed">
                    Provided bespoke premium wicker lounge configurations for their open-air garden terrace, optimized for heavy daily traffic.
                  </p>
                  <div className="inline-flex gap-8">
                    <div className="text-xs font-bold uppercase tracking-widest text-craftsman-gold">
                      Bespoke Framing
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-craftsman-gold border-l border-white/20 pl-8">
                      3,000 Hrs UV Stabilized
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cowtown & testimonial */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
              <div className="lg:col-span-4 bg-craftsman-gold/5 border border-craftsman-gold/20 p-10 rounded-[8px]">
                <h4 className="font-display-lg text-2xl text-craftsman-gold mb-8 uppercase">Additional Deliveries</h4>
                <ul className="space-y-4">
                  <li className="flex items-center text-sm font-semibold border-b border-white/5 pb-4">
                    <span className="w-2 h-2 bg-craftsman-gold mr-4 rounded-full shrink-0"></span> Palava Resort Decks
                  </li>
                  <li className="flex items-center text-sm font-semibold border-b border-white/5 pb-4">
                    <span className="w-2 h-2 bg-craftsman-gold mr-4 rounded-full shrink-0"></span> Cowtown Holiday Villas
                  </li>
                  <li className="flex items-center text-sm font-semibold border-b border-white/5 pb-4">
                    <span className="w-2 h-2 bg-craftsman-gold mr-4 rounded-full shrink-0"></span> Pune Boutique Rooftops
                  </li>
                  <li className="flex items-center text-sm font-semibold border-b border-white/5 pb-4">
                    <span className="w-2 h-2 bg-craftsman-gold mr-4 rounded-full shrink-0"></span> Lucknow Garden Resorts
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-8 bg-white text-charcoal-industrial p-12 rounded-[8px] shadow-xl relative overflow-hidden">
                <h3 className="font-display-lg text-2xl sm:text-3xl mb-6 italic text-charcoal-industrial">
                  "Arkade Prime: Exceptional Hospitality Standards"
                </h3>
                <p className="text-lg leading-relaxed text-charcoal-industrial/85 mb-8 font-serif">
                  "Urbanland's custom wicker collection instantly upgraded our hotel's pool deck. The material stands up perfectly to water splash and midday sun, saving our team immense maintenance effort."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1 bg-craftsman-gold"></div>
                  <div className="text-xs font-bold uppercase tracking-widest text-charcoal-industrial/70">
                    F&amp;B Director, Arkade Prime Resorts
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Us */}
      <section className="reveal-section py-24 bg-[#F7F4EF]">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-16 text-left space-y-4">
            <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
              Why Choose Us
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-ink uppercase">
              The Urbanland Advantage for Hotels &amp; Resorts
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
            <div className="space-y-4">
              <div className="w-12 h-12 border border-craftsman-gold flex items-center justify-center text-craftsman-gold rounded-[4px]">
                <span className="material-symbols-outlined">hotel_class</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-deep-ink">Guest-First Design</h4>
              <p className="text-sm text-deep-ink/75 leading-relaxed">
                Furniture engineered to maximize comfort, support posture, and create stunning visual appeal.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 border border-craftsman-gold flex items-center justify-center text-craftsman-gold rounded-[4px]">
                <span className="material-symbols-outlined">water_drop</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-deep-ink">Water &amp; UV Immunity</h4>
              <p className="text-sm text-deep-ink/75 leading-relaxed">
                High-density polyethylene wicker handles chlorinated pool water and heavy seaside saline air.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 border border-craftsman-gold flex items-center justify-center text-craftsman-gold rounded-[4px]">
                <span className="material-symbols-outlined">cleaning_services</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-deep-ink">Low Facility OPEX</h4>
              <p className="text-sm text-deep-ink/75 leading-relaxed">
                Stain-resistant fabrics and wipe-clean wicker slats cut housekeeping prep times in half.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 border border-craftsman-gold flex items-center justify-center text-craftsman-gold rounded-[4px]">
                <span className="material-symbols-outlined">flash_on</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-deep-ink">Renovation Agility</h4>
              <p className="text-sm text-deep-ink/75 leading-relaxed">
                Rapid manufacturing and shipping systems built to sync with off-season hotel renovation windows.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 border border-craftsman-gold flex items-center justify-center text-craftsman-gold rounded-[4px]">
                <span className="material-symbols-outlined">workspace_premium</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-deep-ink">2-Year Commercial Warranty</h4>
              <p className="text-sm text-deep-ink/75 leading-relaxed">
                Full replacement and repair warranty covering professional hospitality usage environments.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 border border-craftsman-gold flex items-center justify-center text-craftsman-gold rounded-[4px]">
                <span className="material-symbols-outlined">palette</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-deep-ink">Wicker &amp; Fabric Customization</h4>
              <p className="text-sm text-deep-ink/75 leading-relaxed">
                Select from premium weaves and performance outdoor fabrics to match your brand style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="reveal-section py-24 bg-surface-container-lowest/30">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-16 text-left space-y-4">
            <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
              FAQ
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-ink uppercase">
              Hospitality Solutions FAQ
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-left">
            {[
              {
                q: "What is the typical lead time for hospitality furniture projects?",
                a: "Most orders are fabricated and delivered within 2–4 weeks. For scheduled hotel openings or major seasonal renovations, we establish staged delivery phases to match your project timeline."
              },
              {
                q: "Can the wicker weave styles and cushion fabrics be customized?",
                a: "Yes. We offer complete customizability in weave density, colors (including natural, charcoal, and warm tan tones), and premium quick-dry cushion fabrics to integrate with your resort design."
              },
              {
                q: "Are the materials suitable for coastal or high-chlorine pool decks?",
                a: "Absolutely. Our high-density polyethylene (HDPE) synthetic wicker is chlorine-proof, saline-resistant, and tested for up to 3,000 hours of continuous UV exposure without fading or splitting."
              },
              {
                q: "Do you supply replacements and maintenance support?",
                a: "Yes. As direct manufacturers, we provide local maintenance services, re-strapping/re-weaving solutions, and matching cushion replacements to ensure your assets last for years."
              }
            ].map((faq, idx) => {
              const isOpen = activeFaq === idx;
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
      <section className="reveal-section bg-primary text-on-primary py-24 px-6 md:px-margin-desktop overflow-hidden relative">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-10 border-l-2 border-secondary/30 pl-8 md:pl-10 text-left">
            <div className="space-y-2">
              <span className="font-label-technical text-secondary tracking-[0.2em] uppercase font-semibold text-xs block">
                The Urbanland Advantage
              </span>
              <h3 className="font-headline-md text-3xl md:text-4xl text-on-primary leading-tight">
                Crafted for Hospitality Environments
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: "star", title: "Luxury Grade Weaves", desc: "Premium synthetic HDPE rattan" },
                { icon: "workspace_premium", title: "2-Year Commercial Warranty", desc: "Engineered for hospitality use" },
                { icon: "water_drop", title: "Fast-Dry Foam Cushions", desc: "No moisture retention in monsoons" },
                { icon: "local_shipping", title: "Renovation Scheduling", desc: "Delivery synchronized with renovations" }
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

          <div className="bg-white/5 p-8 md:p-12 border border-white/10 backdrop-blur-sm rounded-none text-left">
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-primary mb-8 leading-tight">
              Ready to Upgrade Your Guest Experience with <br />
              <span className="text-secondary">Premium Hospitality furniture?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-secondary text-on-secondary px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold flex items-center justify-center hover:opacity-90 transition-all duration-300 rounded-[4px] no-underline"
              >
                Inquire for Resort Project <span className="ml-2">→</span>
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 rounded-[4px] no-underline"
              >
                Request Material Samples <span className="ml-2">→</span>
              </Link>
            </div>
            <p className="mt-8 text-xs text-white/60 font-label-technical uppercase tracking-widest font-semibold">
              Trusted by premium hospitality developers and resorts across India
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 -skew-x-12 translate-x-1/4 z-0"></div>
      </section>

    </div>
  );
};

export default HospitalitySolutions;
