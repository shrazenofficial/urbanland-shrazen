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

const SmartCitySolutions = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  useEffect(() => {
    updatePageSEO({
      title: "Street Furniture for Municipal & Smart Cities India | Bus Shelters, Public Parks & Urban Infrastructure | Urbanland Products",
      description: "Durable municipal street furniture, transit bus shelters, waste bins, benches and safety bollards in India. Vandal-proof, hot-dip galvanized solutions for smart cities and public parks. Tender compliant. 2-Year Guarantee.",
      og_image: gbg5
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
            src={getOptimizedImageUrl(gbg5)}
            alt="Smart City Public Infrastructure"
            className="w-full h-full object-cover select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/90 via-[#1A1A1A]/60 to-transparent z-10" />
        </div>

        <div className="relative z-10 max-w-container-max mx-auto w-full px-6 md:px-margin-desktop text-white">
          <div className="max-w-3xl space-y-6 text-left">
            <div className="inline-flex items-center gap-3 py-1.5 px-3.5 bg-craftsman-gold text-charcoal-industrial rounded-full font-label-caps text-[10px] uppercase tracking-widest font-bold">
              <span className="w-2 h-2 rounded-full bg-forest-green animate-pulse"></span>
              Bus Shelters, Public Parks &amp; Urban Infrastructure
            </div>

            <h1 className="font-display-lg text-4xl sm:text-6.5xl lg:text-[4rem] font-bold uppercase leading-none tracking-tight">
              Street Furniture for <br /> Municipal &amp; Smart Cities
            </h1>

            <p className="font-serif text-2xl md:text-3xl text-craftsman-gold italic opacity-90 mt-4 leading-normal">
              Vandal-Proof, Tender-Compliant &amp; Highly Durable in India
            </p>

            <div className="flex flex-wrap gap-x-8 gap-y-4 py-4 border-y border-white/10 max-w-2xl">
              <div className="flex items-center text-white/90 text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-craftsman-gold mr-3">check_circle</span>
                Hot-Dip Galvanized Steel
              </div>
              <div className="flex items-center text-white/90 text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-craftsman-gold mr-3">check_circle</span>
                Anti-Tamper Fasteners
              </div>
              <div className="flex items-center text-white/90 text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-craftsman-gold mr-3">check_circle</span>
                Tender Compliant Specs
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
              Challenges Municipal Authorities &amp; Infrastructure Contractors Face Today
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border-t border-white/10">
            <div className="p-8 border-r border-b border-white/10 hover:bg-white/5 transition-colors group text-left">
              <span className="material-symbols-outlined text-4xl text-craftsman-gold mb-6 block group-hover:scale-110 transition-transform">
                gavel
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">Vandalism &amp; Theft</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Frequent damage, structural tampering, or theft of materials in public spaces.
              </p>
            </div>
            <div className="p-8 border-r border-b border-white/10 hover:bg-white/5 transition-colors group text-left">
              <span className="material-symbols-outlined text-4xl text-craftsman-gold mb-6 block group-hover:scale-110 transition-transform">
                description
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">Strict Tenders</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Meeting rigid government material certificates and technical specifications.
              </p>
            </div>
            <div className="p-8 border-r border-b border-white/10 hover:bg-white/5 transition-colors group text-left">
              <span className="material-symbols-outlined text-4xl text-craftsman-gold mb-6 block group-hover:scale-110 transition-transform">
                build
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">High Maintenance</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Ongoing corrosion and repaint burdens exhausting municipal public budgets.
              </p>
            </div>
            <div className="p-8 border-r border-b border-white/10 hover:bg-white/5 transition-colors group text-left">
              <span className="material-symbols-outlined text-4xl text-craftsman-gold mb-6 block group-hover:scale-110 transition-transform">
                group_add
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">Public Safety</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Preventing structural failures, sharp metal corners, and tipping accidents.
              </p>
            </div>
            <div className="p-8 border-b border-white/10 hover:bg-white/5 transition-colors group text-left">
              <span className="material-symbols-outlined text-4xl text-craftsman-gold mb-6 block group-hover:scale-110 transition-transform">
                explore
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">Smart City Styling</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Aligning street furniture aesthetics with modern urban masterplans and transit hubs.
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
              Vandal-Proof Street Furniture Solutions
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
            <p className="font-body-lg text-on-surface-variant max-w-2xl pt-2">
              Engineered for absolute longevity. Hot-dip galvanized structures and vandal-resistant smart city street elements designed to lower civic upkeep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Bus Shelters */}
            <div className="group cursor-pointer text-left">
              <div className="relative aspect-[4/5] overflow-hidden mb-6 rounded-[8px] border border-black/5 shadow-sm">
                <img
                  alt="Transit Bus Shelters"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  src={getOptimizedImageUrl(gbg5)}
                />
              </div>
              <h3 className="font-display-lg text-2xl mb-3 text-deep-ink uppercase font-medium">Bus Shelters</h3>
              <p className="text-sm text-deep-ink/75 leading-relaxed mb-6">
                Premium modern bus shelters made of SS 304 or hot-dip galvanized carbon steel with smart features.
              </p>
              <Link
                to="/products/bus-shelters"
                className="text-xs font-bold uppercase tracking-widest text-craftsman-gold flex items-center hover:text-forest-green transition-colors no-underline"
              >
                Explore Shelters <span className="material-symbols-outlined ml-2 text-base">arrow_right_alt</span>
              </Link>
            </div>

            {/* Public Benches */}
            <div className="group cursor-pointer text-left">
              <div className="relative aspect-[4/5] overflow-hidden mb-6 rounded-[8px] border border-black/5 shadow-sm">
                <img
                  alt="Public Park Benches"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  src={getOptimizedImageUrl(welcome1)}
                />
              </div>
              <h3 className="font-display-lg text-2xl mb-3 text-deep-ink uppercase font-medium">Public Benches</h3>
              <p className="text-sm text-deep-ink/75 leading-relaxed mb-6">
                Heavy-grade steel and composite benches featuring concealed anchors and anti-vandal hardware.
              </p>
              <Link
                to="/products/benches"
                className="text-xs font-bold uppercase tracking-widest text-craftsman-gold flex items-center hover:text-forest-green transition-colors no-underline"
              >
                Explore Benches <span className="material-symbols-outlined ml-2 text-base">arrow_right_alt</span>
              </Link>
            </div>

            {/* Smart-City Bins */}
            <div className="group cursor-pointer text-left">
              <div className="relative aspect-[4/5] overflow-hidden mb-6 rounded-[8px] border border-black/5 shadow-sm">
                <img
                  alt="Smart-City Waste Bins"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  src={getOptimizedImageUrl(welcome2)}
                />
              </div>
              <h3 className="font-display-lg text-2xl mb-3 text-deep-ink uppercase font-medium">Smart-City Bins</h3>
              <p className="text-sm text-deep-ink/75 leading-relaxed mb-6">
                Dual-compartment wet/dry civic waste receptacles built with heavy gauge steel and locking mechanisms.
              </p>
              <Link
                to="/products/dustbins"
                className="text-xs font-bold uppercase tracking-widest text-craftsman-gold flex items-center hover:text-forest-green transition-colors no-underline"
              >
                Explore Bins <span className="material-symbols-outlined ml-2 text-base">arrow_right_alt</span>
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
              Proven Results in Municipal Infrastructure
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
          </div>

          <div className="space-y-32">
            {/* Wadhwa Wise City Transit */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 relative">
                <div className="aspect-video overflow-hidden rounded-[16px] shadow-lg border border-white/5">
                  <img
                    alt="Transit Shelter Installation"
                    className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
                    src={getOptimizedImageUrl(gbg5)}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-craftsman-gold p-8 text-charcoal-industrial hidden md:block rounded-[4px] shadow-xl">
                  <div className="text-4xl font-display-lg font-bold">100%</div>
                  <div className="text-xs font-bold uppercase tracking-wider">Tender Compliant</div>
                </div>
              </div>
              <div className="lg:col-span-5 lg:pl-12 text-left">
                <h3 className="font-display-lg text-3xl mb-6 text-white uppercase">Wadhwa Wise City Transit</h3>
                <p className="text-white/70 leading-relaxed mb-8">
                  Supplied custom transit bus shelter structures with integrated seating benches along primary transport corridors, ensuring complete wind-load and environmental certification compliance.
                </p>
                <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-craftsman-gold mb-1">
                      Location
                    </div>
                    <div className="text-sm font-medium text-white/90">Panvel, Maharashtra</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-craftsman-gold mb-1">
                      Deployment
                    </div>
                    <div className="text-sm font-medium text-white/90 font-label-technical">Smart Transit Shelters</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dharoi Dam & Jindal */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-left">
              <div className="space-y-8">
                <div className="aspect-[16/10] overflow-hidden rounded-[16px] border border-white/5 shadow-md">
                  <img
                    alt="Public Park Projects"
                    className="w-full h-full object-cover"
                    src={getOptimizedImageUrl(welcome1)}
                  />
                </div>
                <div>
                  <h4 className="font-display-lg text-2xl mb-4 text-white uppercase">Dharoi Dam Public Park</h4>
                  <p className="text-sm text-white/60 mb-6 leading-relaxed">
                    Designed and deployed heavy-duty public park seating and urban planter divider systems, handling thousands of weekly visitors with zero degradation.
                  </p>
                  <div className="inline-flex gap-8">
                    <div className="text-xs font-bold uppercase tracking-widest text-craftsman-gold">
                      Park Development
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-craftsman-gold border-l border-white/20 pl-8">
                      High Load-Bearing
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8 lg:mt-16">
                <div className="aspect-[16/10] overflow-hidden rounded-[16px] border border-white/5 shadow-md">
                  <img
                    alt="Industrial Civic Transit"
                    className="w-full h-full object-cover"
                    src={getOptimizedImageUrl(gbg2)}
                  />
                </div>
                <div>
                  <h4 className="font-display-lg text-2xl mb-4 text-white uppercase">Jindal Power Simhapuri</h4>
                  <p className="text-sm text-white/60 mb-6 leading-relaxed">
                    Provided heavy-duty transit and canteen seating arrays for administrative and public campus locations, meeting exact material specification standards.
                  </p>
                  <div className="inline-flex gap-8">
                    <div className="text-xs font-bold uppercase tracking-widest text-craftsman-gold">
                      Tender Fabricated
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-craftsman-gold border-l border-white/20 pl-8">
                      ISO 9001 QC
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navi Mumbai & Testimonial */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
              <div className="lg:col-span-4 bg-craftsman-gold/5 border border-craftsman-gold/20 p-10 rounded-[8px]">
                <h4 className="font-display-lg text-2xl text-craftsman-gold mb-8 uppercase">Corporate &amp; Civic Deliveries</h4>
                <ul className="space-y-4">
                  <li className="flex items-center text-sm font-semibold border-b border-white/5 pb-4">
                    <span className="w-2 h-2 bg-craftsman-gold mr-4 rounded-full shrink-0"></span> Navi Mumbai Airport Bollards
                  </li>
                  <li className="flex items-center text-sm font-semibold border-b border-white/5 pb-4">
                    <span className="w-2 h-2 bg-craftsman-gold mr-4 rounded-full shrink-0"></span> Dharoi Civic Walkways
                  </li>
                  <li className="flex items-center text-sm font-semibold border-b border-white/5 pb-4">
                    <span className="w-2 h-2 bg-craftsman-gold mr-4 rounded-full shrink-0"></span> Simhapuri Campus Seating
                  </li>
                  <li className="flex items-center text-sm font-semibold border-b border-white/5 pb-4">
                    <span className="w-2 h-2 bg-craftsman-gold mr-4 rounded-full shrink-0"></span> Gujarat Smart City Parks
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-8 bg-white text-charcoal-industrial p-12 rounded-[8px] shadow-xl relative overflow-hidden">
                <h3 className="font-display-lg text-2xl sm:text-3xl mb-6 italic text-charcoal-industrial">
                  "Wadhwa Transit: Outstanding Structural Integrity"
                </h3>
                <p className="text-lg leading-relaxed text-charcoal-industrial/85 mb-8 font-serif">
                  "In public transport, durability is non-negotiable. Urbanland's bus shelters are manufactured with exceptional structural engineering. They met all our wind-load certifications and municipal requirements with ease."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1 bg-craftsman-gold"></div>
                  <div className="text-xs font-bold uppercase tracking-widest text-charcoal-industrial/70">
                    Lead Transit Architect, Wadhwa Group
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
              The Urbanland Advantage for Municipalities &amp; Smart Cities
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
            <div className="space-y-4">
              <div className="w-12 h-12 border border-craftsman-gold flex items-center justify-center text-craftsman-gold rounded-[4px]">
                <span className="material-symbols-outlined">security</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-deep-ink">Vandal-Proof Construction</h4>
              <p className="text-sm text-deep-ink/75 leading-relaxed">
                Tamper-proof anchoring hardware and heavy steel panels prevent structural vandalism.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 border border-craftsman-gold flex items-center justify-center text-craftsman-gold rounded-[4px]">
                <span className="material-symbols-outlined">assignment</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-deep-ink">Tender Specification Compliant</h4>
              <p className="text-sm text-deep-ink/75 leading-relaxed">
                Custom fabrication capability to meet exact government specifications, material standards, and dimensions.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 border border-craftsman-gold flex items-center justify-center text-craftsman-gold rounded-[4px]">
                <span className="material-symbols-outlined">layers</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-deep-ink">Corrosion &amp; UV Immunity</h4>
              <p className="text-sm text-deep-ink/75 leading-relaxed">
                Zinc-primed carbon steel or structural stainless steel stands up to monsoons and high humidity.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 border border-craftsman-gold flex items-center justify-center text-craftsman-gold rounded-[4px]">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-deep-ink">Public Safety Standards</h4>
              <p className="text-sm text-deep-ink/75 leading-relaxed">
                Rounded edges, safe transitions, and heavy chemical base anchoring prevent accidental injuries.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 border border-craftsman-gold flex items-center justify-center text-craftsman-gold rounded-[4px]">
                <span className="material-symbols-outlined">description</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-deep-ink">Audit Documentation Ready</h4>
              <p className="text-sm text-deep-ink/75 leading-relaxed">
                Full manufacturing and quality certifications supplied to support government audit requirements.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 border border-craftsman-gold flex items-center justify-center text-craftsman-gold rounded-[4px]">
                <span className="material-symbols-outlined">workspace_premium</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-deep-ink">2-Year Commercial Warranty</h4>
              <p className="text-sm text-deep-ink/75 leading-relaxed">
                Comprehensive structural guarantee ensuring municipal capital works are fully protected.
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
              Municipal Solutions FAQ
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-left">
            {[
              {
                q: "Can you manufacture furniture to match municipal tender specifications?",
                a: "Yes. We work closely with government contractors, architects, and municipal corporations to customize dimensions, materials, and colors to match your tender requirements."
              },
              {
                q: "What security features do your public-space products offer?",
                a: "Our products utilize concrete chemical anchor systems, anti-graffiti powder-coat finishes, and hidden anti-tamper bolts to prevent theft, movement, and public vandalism."
              },
              {
                q: "How do you protect steel street furniture from coastal rust?",
                a: "All of our municipal-grade steel products are hot-dip galvanized or double zinc-primed before receiving highly durable exterior powder coatings, preventing corrosion even in saline seaside environments."
              },
              {
                q: "Do you supply engineering test certifications and CAD files?",
                a: "Yes. We provide comprehensive technical drawings (.dwg), material quality test reports, and structural certifications to support official government procurement audits."
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
                Vandal-Proof &amp; Tender Compliant
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: "gavel", title: "Anti-Vandal Hardware", desc: "Anti-tamper bolts and hidden anchors" },
                { icon: "workspace_premium", title: "2-Year Civic Warranty", desc: "India's best public infrastructure support" },
                { icon: "layers", title: "Hot-Dip Galvanized", desc: "Maximum rust-proofing on steel" },
                { icon: "menu_book", title: "Tender Ready Docs", desc: "Material test and CAD packages ready" }
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
              Ready to Upgrade Public Spaces with <br />
              <span className="text-secondary">Premium Smart-City street furniture?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-secondary text-on-secondary px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold flex items-center justify-center hover:opacity-90 transition-all duration-300 rounded-[4px] no-underline"
              >
                Submit Tender Inquiry <span className="ml-2">→</span>
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 rounded-[4px] no-underline"
              >
                Inquire for Smart City <span className="ml-2">→</span>
              </Link>
            </div>
            <p className="mt-8 text-xs text-white/60 font-label-technical uppercase tracking-widest font-semibold">
              Trusted by municipal corporations and smart city authorities across India
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 -skew-x-12 translate-x-1/4 z-0"></div>
      </section>

    </div>
  );
};

export default SmartCitySolutions;
