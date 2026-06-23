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

const HealthcareSolutions = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  useEffect(() => {
    updatePageSEO({
      title: "Outdoor Furniture for Healthcare & Hospitals India | Healing Gardens, Waiting Areas & Hospital Campuses | Urbanland Products",
      description: "Premium, easy-clean benches and planter boxes for healthcare & hospitals in India. Hygienic, durable solutions for healing gardens, waiting areas and hospital campuses. Trusted by healthcare facilities with 2-Year Guarantee.",
      og_image: gbg3
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
            src={getOptimizedImageUrl(gbg3)}
            alt="Healing Garden Landscapes"
            className="w-full h-full object-cover select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/90 via-[#1A1A1A]/60 to-transparent z-10" />
        </div>

        <div className="relative z-10 max-w-container-max mx-auto w-full px-6 md:px-margin-desktop text-white">
          <div className="max-w-3xl space-y-6 text-left">
            <div className="inline-flex items-center gap-3 py-1.5 px-3.5 bg-craftsman-gold text-charcoal-industrial rounded-full font-label-caps text-[10px] uppercase tracking-widest font-bold">
              <span className="w-2 h-2 rounded-full bg-forest-green animate-pulse"></span>
              Healing Gardens, Waiting Areas &amp; Hospital Campuses
            </div>

            <h1 className="font-display-lg text-4xl sm:text-6.5xl lg:text-[4rem] font-bold uppercase leading-none tracking-tight">
              Outdoor Furniture for <br /> Healthcare &amp; Hospitals
            </h1>

            <p className="font-serif text-2xl md:text-3xl text-craftsman-gold italic opacity-90 mt-4 leading-normal">
              Easy-to-Sanitize, Calming &amp; Accessible Seating in India
            </p>

            <div className="flex flex-wrap gap-x-8 gap-y-4 py-4 border-y border-white/10 max-w-2xl">
              <div className="flex items-center text-white/90 text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-craftsman-gold mr-3">check_circle</span>
                Antibacterial Surfaces
              </div>
              <div className="flex items-center text-white/90 text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-craftsman-gold mr-3">check_circle</span>
                ADA Accessible Options
              </div>
              <div className="flex items-center text-white/90 text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-craftsman-gold mr-3">check_circle</span>
                Biophilic Healing Focus
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
              Challenges Healthcare Facilities &amp; Clinical Landscape Designers Face Today
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border-t border-white/10">
            <div className="p-8 border-r border-b border-white/10 hover:bg-white/5 transition-colors group text-left">
              <span className="material-symbols-outlined text-4xl text-craftsman-gold mb-6 block group-hover:scale-110 transition-transform">
                sanitizer
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">Infection Control</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Requirement for smooth, chemical-resistant surfaces that prevent germ accumulation.
              </p>
            </div>
            <div className="p-8 border-r border-b border-white/10 hover:bg-white/5 transition-colors group text-left">
              <span className="material-symbols-outlined text-4xl text-craftsman-gold mb-6 block group-hover:scale-110 transition-transform">
                psychology
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">Therapeutic Needs</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Creating soothing biophilic spaces that reduce patient and family member stress.
              </p>
            </div>
            <div className="p-8 border-r border-b border-white/10 hover:bg-white/5 transition-colors group text-left">
              <span className="material-symbols-outlined text-4xl text-craftsman-gold mb-6 block group-hover:scale-110 transition-transform">
                accessible
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">Patient Accessibility</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Ensuring bench heights, back support, and armrests cater to elderly or disabled individuals.
              </p>
            </div>
            <div className="p-8 border-r border-b border-white/10 hover:bg-white/5 transition-colors group text-left">
              <span className="material-symbols-outlined text-4xl text-craftsman-gold mb-6 block group-hover:scale-110 transition-transform">
                groups_3
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">Constant Public Use</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Heavy wear from thousands of visitors, patients, and healthcare staff daily.
              </p>
            </div>
            <div className="p-8 border-b border-white/10 hover:bg-white/5 transition-colors group text-left">
              <span className="material-symbols-outlined text-4xl text-craftsman-gold mb-6 block group-hover:scale-110 transition-transform">
                clinical_notes
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">Strict Compliance</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Meeting institutional building codes and eco-friendly standards (LEED/IGBC).
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
              Hygienic &amp; Calming Outdoor Solutions
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
            <p className="font-body-lg text-on-surface-variant max-w-2xl pt-2">
              Calming spaces designed for wellness. Our collection blends medical-grade durability with biophilic principles to support recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Easy-Clean Benches */}
            <div className="group cursor-pointer text-left">
              <div className="relative aspect-[4/5] overflow-hidden mb-6 rounded-[8px] border border-black/5 shadow-sm">
                <img
                  alt="Hygienic Hospital Benches"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  src={getOptimizedImageUrl(welcome1)}
                />
              </div>
              <h3 className="font-display-lg text-2xl mb-3 text-deep-ink uppercase font-medium">Easy-Clean Benches</h3>
              <p className="text-sm text-deep-ink/75 leading-relaxed mb-6">
                Smooth WPC and composite slat seating designed to withstand rigorous chemical sanitization protocols.
              </p>
              <Link
                to="/products/benches"
                className="text-xs font-bold uppercase tracking-widest text-craftsman-gold flex items-center hover:text-forest-green transition-colors no-underline"
              >
                Explore Benches <span className="material-symbols-outlined ml-2 text-base">arrow_right_alt</span>
              </Link>
            </div>

            {/* Healing Garden Planters */}
            <div className="group cursor-pointer text-left">
              <div className="relative aspect-[4/5] overflow-hidden mb-6 rounded-[8px] border border-black/5 shadow-sm">
                <img
                  alt="Therapeutic Planters"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  src={getOptimizedImageUrl(gbg3)}
                />
              </div>
              <h3 className="font-display-lg text-2xl mb-3 text-deep-ink uppercase font-medium">Modern Planters</h3>
              <p className="text-sm text-deep-ink/75 leading-relaxed mb-6">
                Premium planter boxes in metal and composite to structure healing gardens and private patient pathways.
              </p>
              <Link
                to="/products/planters"
                className="text-xs font-bold uppercase tracking-widest text-craftsman-gold flex items-center hover:text-forest-green transition-colors no-underline"
              >
                Explore Planters <span className="material-symbols-outlined ml-2 text-base">arrow_right_alt</span>
              </Link>
            </div>

            {/* SS Security Bollards */}
            <div className="group cursor-pointer text-left">
              <div className="relative aspect-[4/5] overflow-hidden mb-6 rounded-[8px] border border-black/5 shadow-sm">
                <img
                  alt="SS Security Bollards"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  src={getOptimizedImageUrl(gbg5)}
                />
              </div>
              <h3 className="font-display-lg text-2xl mb-3 text-deep-ink uppercase font-medium">Security Bollards</h3>
              <p className="text-sm text-deep-ink/75 leading-relaxed mb-6">
                High-strength stainless steel barrier bollards to secure hospital emergency entrances and drop-off zones.
              </p>
              <Link
                to="/products/ss-bollards"
                className="text-xs font-bold uppercase tracking-widest text-craftsman-gold flex items-center hover:text-forest-green transition-colors no-underline"
              >
                Explore Bollards <span className="material-symbols-outlined ml-2 text-base">arrow_right_alt</span>
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
              Hygienic Seating in Leading Medical Infrastructures
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
          </div>

          <div className="space-y-32">
            {/* TATA Projects */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 relative">
                <div className="aspect-video overflow-hidden rounded-[16px] shadow-lg border border-white/5">
                  <img
                    alt="TATA Projects Hospital Site"
                    className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
                    src={getOptimizedImageUrl(gbg3)}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-craftsman-gold p-8 text-charcoal-industrial hidden md:block rounded-[4px] shadow-xl">
                  <div className="text-4xl font-display-lg font-bold">3 Wks</div>
                  <div className="text-xs font-bold uppercase tracking-wider">Fast Execution</div>
                </div>
              </div>
              <div className="lg:col-span-5 lg:pl-12 text-left">
                <h3 className="font-display-lg text-3xl mb-6 text-white uppercase">TATA Projects Healthcare</h3>
                <p className="text-white/70 leading-relaxed mb-8">
                  Partnered to supply heavy-duty institutional seating and pathway planters across multiple hospital site campuses, meeting rigorous sanitation and anchoring specifications.
                </p>
                <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-craftsman-gold mb-1">
                      Location
                    </div>
                    <div className="text-sm font-medium text-white/90">Gujarat Sites</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-craftsman-gold mb-1">
                      Material
                    </div>
                    <div className="text-sm font-medium text-white/90 font-label-technical">Zinc-Primed Powder Coated</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Godrej & Kalpataru */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-left">
              <div className="space-y-8">
                <div className="aspect-[16/10] overflow-hidden rounded-[16px] border border-white/5 shadow-md">
                  <img
                    alt="Medical Campus Gardens"
                    className="w-full h-full object-cover"
                    src={getOptimizedImageUrl(welcome2)}
                  />
                </div>
                <div>
                  <h4 className="font-display-lg text-2xl mb-4 text-white uppercase">Godrej Healthcare Facility</h4>
                  <p className="text-sm text-white/60 mb-6 leading-relaxed">
                    Supplied 78 premium benches and 65 custom composite planter boxes to build accessible, calming healing gardens for patients and visitors.
                  </p>
                  <div className="inline-flex gap-8">
                    <div className="text-xs font-bold uppercase tracking-widest text-craftsman-gold">
                      78 Benches Delivered
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-craftsman-gold border-l border-white/20 pl-8">
                      ADA Compliant
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8 lg:mt-16">
                <div className="aspect-[16/10] overflow-hidden rounded-[16px] border border-white/5 shadow-md">
                  <img
                    alt="Clinical Pathways"
                    className="w-full h-full object-cover"
                    src={getOptimizedImageUrl(gbg1)}
                  />
                </div>
                <div>
                  <h4 className="font-display-lg text-2xl mb-4 text-white uppercase">Kalpataru Recovery Deck</h4>
                  <p className="text-sm text-white/60 mb-6 leading-relaxed">
                    Provided custom 24 WPC benches and pathway planters specifically placed for rehabilitation and patient mobility paths.
                  </p>
                  <div className="inline-flex gap-8">
                    <div className="text-xs font-bold uppercase tracking-widest text-craftsman-gold">
                      Hygienic Finish
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-craftsman-gold border-l border-white/20 pl-8">
                      Zero Wood Rot
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navandhe & Testimonial */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
              <div className="lg:col-span-4 bg-craftsman-gold/5 border border-craftsman-gold/20 p-10 rounded-[8px]">
                <h4 className="font-display-lg text-2xl text-craftsman-gold mb-8 uppercase">Campus Deployments</h4>
                <ul className="space-y-4">
                  <li className="flex items-center text-sm font-semibold border-b border-white/5 pb-4">
                    <span className="w-2 h-2 bg-craftsman-gold mr-4 rounded-full shrink-0"></span> Navandhe Health Garden
                  </li>
                  <li className="flex items-center text-sm font-semibold border-b border-white/5 pb-4">
                    <span className="w-2 h-2 bg-craftsman-gold mr-4 rounded-full shrink-0"></span> Thane Medical Center Path
                  </li>
                  <li className="flex items-center text-sm font-semibold border-b border-white/5 pb-4">
                    <span className="w-2 h-2 bg-craftsman-gold mr-4 rounded-full shrink-0"></span> Pune Rehabilitation Lawns
                  </li>
                  <li className="flex items-center text-sm font-semibold border-b border-white/5 pb-4">
                    <span className="w-2 h-2 bg-craftsman-gold mr-4 rounded-full shrink-0"></span> Indore Clinic Waiting Areas
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-8 bg-white text-charcoal-industrial p-12 rounded-[8px] shadow-xl relative overflow-hidden">
                <h3 className="font-display-lg text-2xl sm:text-3xl mb-6 italic text-charcoal-industrial">
                  "TATA Projects: Meeting High Clinical Standards"
                </h3>
                <p className="text-lg leading-relaxed text-charcoal-industrial/85 mb-8 font-serif">
                  "Hospitals demand absolute structural hygiene. Urbanland's smooth, non-porous composite benches are exceptionally easy to sanitise, and the secure concrete chemical anchoring gives us 100% security."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1 bg-craftsman-gold"></div>
                  <div className="text-xs font-bold uppercase tracking-widest text-charcoal-industrial/70">
                    Lead Infrastructure Manager, TATA Projects Ltd
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
              The Urbanland Advantage for Healthcare &amp; Hospitals
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
            <div className="space-y-4">
              <div className="w-12 h-12 border border-craftsman-gold flex items-center justify-center text-craftsman-gold rounded-[4px]">
                <span className="material-symbols-outlined">sanitizer</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-deep-ink">Infection-Control Friendly</h4>
              <p className="text-sm text-deep-ink/75 leading-relaxed">
                Anti-microbial friendly materials with smooth surfaces preventing bacterial growth.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 border border-craftsman-gold flex items-center justify-center text-craftsman-gold rounded-[4px]">
                <span className="material-symbols-outlined">nature_people</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-deep-ink">Biophilic Recovery Focus</h4>
              <p className="text-sm text-deep-ink/75 leading-relaxed">
                Integrated planter benches and layouts designed specifically to support patient mental health.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 border border-craftsman-gold flex items-center justify-center text-craftsman-gold rounded-[4px]">
                <span className="material-symbols-outlined">accessible</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-deep-ink">ADA &amp; Elderly Accessible</h4>
              <p className="text-sm text-deep-ink/75 leading-relaxed">
                Optimal heights, non-slip structures, and rounded edges for safety and disabled mobility support.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 border border-craftsman-gold flex items-center justify-center text-craftsman-gold rounded-[4px]">
                <span className="material-symbols-outlined">hourglass_empty</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-deep-ink">Zero Rot &amp; Rust</h4>
              <p className="text-sm text-deep-ink/75 leading-relaxed">
                Our heavy-gauge steel and premium composites require zero staining, oiling, or rust-proofing.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 border border-craftsman-gold flex items-center justify-center text-craftsman-gold rounded-[4px]">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-deep-ink">ISO 9001:2015 QC</h4>
              <p className="text-sm text-deep-ink/75 leading-relaxed">
                Every batch undergoes extreme testing to ensure consistent strength and structural safety.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 border border-craftsman-gold flex items-center justify-center text-craftsman-gold rounded-[4px]">
                <span className="material-symbols-outlined">engineering</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-deep-ink">Technical Site Support</h4>
              <p className="text-sm text-deep-ink/75 leading-relaxed">
                We supply CAD blocks, spec sheets, and chemical anchoring guidance directly to contractors.
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
              Healthcare Solutions FAQ
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-left">
            {[
              {
                q: "What is the typical lead time for healthcare furniture projects?",
                a: "Our standard turnaround is 2–4 weeks from technical drawing approval to shipping. We can expedite orders to align with clinical inaugurations or grand opening deadlines."
              },
              {
                q: "Can benches and planters be customized for elderly or disabled patients?",
                a: "Yes. We can customize bench seat heights, backrest angles, armrest spacing, and integrate wheelchair-accessible slots in planters to support patients with varied mobility needs."
              },
              {
                q: "Are the coatings suitable for hospital disinfection protocols?",
                a: "Yes. Our galvanized steel frames are finished with heavy-duty antibacterial powder coatings, and our WPC slats are chemical-resistant, allowing easy washdowns with standard clinical disinfectants."
              },
              {
                q: "Do you supply engineering drawings and certifications?",
                a: "Yes. We supply comprehensive technical drawings (.dwg), material test certificates, and compliance declarations to meet institutional procurement standards."
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
                Calming, Hygienic &amp; Durable
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: "medical_services", title: "Clinical Hygiene", desc: "Easy to sanitize non-porous slats" },
                { icon: "workspace_premium", title: "2-Year Commercial Warranty", desc: "Heavy patient/visitor build grade" },
                { icon: "accessible", title: "ADA Support", desc: "Customized seating dimensions" },
                { icon: "anchor", title: "Chemical Anchoring", desc: "Secure anchoring for public safety" }
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
              Ready to Upgrade Patient Recovery with <br />
              <span className="text-secondary">Premium Healthcare seating?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-secondary text-on-secondary px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold flex items-center justify-center hover:opacity-90 transition-all duration-300 rounded-[4px] no-underline"
              >
                Inquire for Hospital Project <span className="ml-2">→</span>
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 rounded-[4px] no-underline"
              >
                Download Technical Catalog <span className="ml-2">→</span>
              </Link>
            </div>
            <p className="mt-8 text-xs text-white/60 font-label-technical uppercase tracking-widest font-semibold">
              Trusted by premium developers and clinical organizations across India
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 -skew-x-12 translate-x-1/4 z-0"></div>
      </section>

    </div>
  );
};

export default HealthcareSolutions;
