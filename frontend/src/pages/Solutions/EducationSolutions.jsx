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

const EducationSolutions = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  useEffect(() => {
    updatePageSEO({
      title: "Outdoor Furniture for Education & Universities India | Campus Canteens, Open Classrooms & Student Zones | Urbanland Products",
      description: "Durable canteen tables, benches and planter boxes for schools, colleges and universities in India. Student-proof, low-maintenance outdoor furniture for campuses, open-air classrooms and common areas. 2-Year Guarantee.",
      og_image: gbg4
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
            src={getOptimizedImageUrl(gbg4)}
            alt="University Campus Lawns"
            className="w-full h-full object-cover select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/90 via-[#1A1A1A]/60 to-transparent z-10" />
        </div>

        <div className="relative z-10 max-w-container-max mx-auto w-full px-6 md:px-margin-desktop text-white">
          <div className="max-w-3xl space-y-6 text-left">
            <div className="inline-flex items-center gap-3 py-1.5 px-3.5 bg-craftsman-gold text-charcoal-industrial rounded-full font-label-caps text-[10px] uppercase tracking-widest font-bold">
              <span className="w-2 h-2 rounded-full bg-forest-green animate-pulse"></span>
              Campus Canteens, Open Classrooms &amp; Student Zones
            </div>

            <h1 className="font-display-lg text-4xl sm:text-6.5xl lg:text-[4rem] font-bold uppercase leading-none tracking-tight">
              Outdoor Furniture for <br /> Education &amp; Universities
            </h1>

            <p className="font-serif text-2xl md:text-3xl text-craftsman-gold italic opacity-90 mt-4 leading-normal">
              Student-Proof, Vandal-Resistant &amp; Low Maintenance in India
            </p>

            <div className="flex flex-wrap gap-x-8 gap-y-4 py-4 border-y border-white/10 max-w-2xl">
              <div className="flex items-center text-white/90 text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-craftsman-gold mr-3">check_circle</span>
                Reinforced Steel Frames
              </div>
              <div className="flex items-center text-white/90 text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-craftsman-gold mr-3">check_circle</span>
                Vandal &amp; Graffiti Resistant
              </div>
              <div className="flex items-center text-white/90 text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-craftsman-gold mr-3">check_circle</span>
                Eco-Friendly Recycled content
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
              Challenges School &amp; University Facility Managers Face Today
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border-t border-white/10">
            <div className="p-8 border-r border-b border-white/10 hover:bg-white/5 transition-colors group text-left">
              <span className="material-symbols-outlined text-4xl text-craftsman-gold mb-6 block group-hover:scale-110 transition-transform">
                sentiment_very_dissatisfied
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">Vandalism &amp; Abuse</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Active students causing heavy wear, scratches, tipping, or graffiti.
              </p>
            </div>
            <div className="p-8 border-r border-b border-white/10 hover:bg-white/5 transition-colors group text-left">
              <span className="material-symbols-outlined text-4xl text-craftsman-gold mb-6 block group-hover:scale-110 transition-transform">
                monetization_on
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">Budget Limitations</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Need for highly durable assets that prevent frequent replacement expenditures.
              </p>
            </div>
            <div className="p-8 border-r border-b border-white/10 hover:bg-white/5 transition-colors group text-left">
              <span className="material-symbols-outlined text-4xl text-craftsman-gold mb-6 block group-hover:scale-110 transition-transform">
                warning
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">Safety Risks</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Wood splinters, rough metal burrs, or tipping benches creating student hazards.
              </p>
            </div>
            <div className="p-8 border-r border-b border-white/10 hover:bg-white/5 transition-colors group text-left">
              <span className="material-symbols-outlined text-4xl text-craftsman-gold mb-6 block group-hover:scale-110 transition-transform">
                dry_cleaning
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">High Maintenance</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Constant painting, varnishing, and structural repairs overburdening facility staff.
              </p>
            </div>
            <div className="p-8 border-b border-white/10 hover:bg-white/5 transition-colors group text-left">
              <span className="material-symbols-outlined text-4xl text-craftsman-gold mb-6 block group-hover:scale-110 transition-transform">
                settings_accessibility
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">Multi-Use Spaces</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Requirement for flexible furniture layouts supporting dining, study groups, and campus events.
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
              Student-Proof Outdoor Campus Solutions
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
            <p className="font-body-lg text-on-surface-variant max-w-2xl pt-2">
              Durable picnic setups and heavy-duty benches. Engineered to withstand high student footfall while creating welcoming campus community hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Canteen Tables */}
            <div className="group cursor-pointer text-left">
              <div className="relative aspect-[4/5] overflow-hidden mb-6 rounded-[8px] border border-black/5 shadow-sm">
                <img
                  alt="Durable Canteen Tables"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  src={getOptimizedImageUrl(gbg4)}
                />
              </div>
              <h3 className="font-display-lg text-2xl mb-3 text-deep-ink uppercase font-medium">Canteen Tables</h3>
              <p className="text-sm text-deep-ink/75 leading-relaxed mb-6">
                Picnic-style modular tables with high-impact composite slating and secure structural metal anchoring.
              </p>
              <Link
                to="/products/canteen-tables"
                className="text-xs font-bold uppercase tracking-widest text-craftsman-gold flex items-center hover:text-forest-green transition-colors no-underline"
              >
                Explore Tables <span className="material-symbols-outlined ml-2 text-base">arrow_right_alt</span>
              </Link>
            </div>

            {/* Campus Benches */}
            <div className="group cursor-pointer text-left">
              <div className="relative aspect-[4/5] overflow-hidden mb-6 rounded-[8px] border border-black/5 shadow-sm">
                <img
                  alt="Heavy-Duty Benches"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  src={getOptimizedImageUrl(welcome1)}
                />
              </div>
              <h3 className="font-display-lg text-2xl mb-3 text-deep-ink uppercase font-medium">Campus Benches</h3>
              <p className="text-sm text-deep-ink/75 leading-relaxed mb-6">
                WPC and galvanized steel benches designed to prevent tipping and tipping under heavy public loads.
              </p>
              <Link
                to="/products/benches"
                className="text-xs font-bold uppercase tracking-widest text-craftsman-gold flex items-center hover:text-forest-green transition-colors no-underline"
              >
                Explore Benches <span className="material-symbols-outlined ml-2 text-base">arrow_right_alt</span>
              </Link>
            </div>

            {/* Planter Boxes */}
            <div className="group cursor-pointer text-left">
              <div className="relative aspect-[4/5] overflow-hidden mb-6 rounded-[8px] border border-black/5 shadow-sm">
                <img
                  alt="Campus Planters"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  src={getOptimizedImageUrl(gbg5)}
                />
              </div>
              <h3 className="font-display-lg text-2xl mb-3 text-deep-ink uppercase font-medium">Modern Planters</h3>
              <p className="text-sm text-deep-ink/75 leading-relaxed mb-6">
                Heavy-duty planters to integrate greenery in campus plazas, rooftop study spaces, and pathway boundaries.
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
              Proven Student Space Deployments
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
          </div>

          <div className="space-y-32">
            {/* Panchshil Tech Park */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 relative">
                <div className="aspect-video overflow-hidden rounded-[16px] shadow-lg border border-white/5">
                  <img
                    alt="Panchshil Campus"
                    className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
                    src={getOptimizedImageUrl(gbg4)}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-craftsman-gold p-8 text-charcoal-industrial hidden md:block rounded-[4px] shadow-xl">
                  <div className="text-4xl font-display-lg font-bold">32+</div>
                  <div className="text-xs font-bold uppercase tracking-wider">Canteen Tables</div>
                </div>
              </div>
              <div className="lg:col-span-5 lg:pl-12 text-left">
                <h3 className="font-display-lg text-3xl mb-6 text-white uppercase">Panchshil Tech Campus</h3>
                <p className="text-white/70 leading-relaxed mb-8">
                  Supplied and anchored 32+ heavy-duty integrated canteen tables in outdoor dining plazas, creating a massive, clean outdoor study and relaxation zone for students and staff.
                </p>
                <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-craftsman-gold mb-1">
                      Location
                    </div>
                    <div className="text-sm font-medium text-white/90">Yerwada, Pune</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-craftsman-gold mb-1">
                      Timeline
                    </div>
                    <div className="text-sm font-medium text-white/90 font-label-technical">3–4 Weeks Delivery</div>
                  </div>
                </div>
              </div>
            </div>

            {/* EON Kharadi & Godrej */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-left">
              <div className="space-y-8">
                <div className="aspect-[16/10] overflow-hidden rounded-[16px] border border-white/5 shadow-md">
                  <img
                    alt="Campus Plazas"
                    className="w-full h-full object-cover"
                    src={getOptimizedImageUrl(welcome2)}
                  />
                </div>
                <div>
                  <h4 className="font-display-lg text-2xl mb-4 text-white uppercase">EON Campus Dining</h4>
                  <p className="text-sm text-white/60 mb-6 leading-relaxed">
                    Designed and installed 26 integrated campus canteen tables with high-impact composite tops, resisting food spills and rain cycles.
                  </p>
                  <div className="inline-flex gap-8">
                    <div className="text-xs font-bold uppercase tracking-widest text-craftsman-gold">
                      26 Custom Tables
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-craftsman-gold border-l border-white/20 pl-8">
                      Food-Grade Slats
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8 lg:mt-16">
                <div className="aspect-[16/10] overflow-hidden rounded-[16px] border border-white/5 shadow-md">
                  <img
                    alt="Campus Pathways"
                    className="w-full h-full object-cover"
                    src={getOptimizedImageUrl(gbg1)}
                  />
                </div>
                <div>
                  <h4 className="font-display-lg text-2xl mb-4 text-white uppercase">Godrej Campus Development</h4>
                  <p className="text-sm text-white/60 mb-6 leading-relaxed">
                    Supplied 78 premium benches and 65 sustainable planter boxes to establish natural biophilic open-air studying zones.
                  </p>
                  <div className="inline-flex gap-8">
                    <div className="text-xs font-bold uppercase tracking-widest text-craftsman-gold">
                      78 Benches Delivered
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-craftsman-gold border-l border-white/20 pl-8">
                      FSC Hardwood look
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navandhe & Testimonial */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
              <div className="lg:col-span-4 bg-craftsman-gold/5 border border-craftsman-gold/20 p-10 rounded-[8px]">
                <h4 className="font-display-lg text-2xl text-craftsman-gold mb-8 uppercase">Regional Campuses</h4>
                <ul className="space-y-4">
                  <li className="flex items-center text-sm font-semibold border-b border-white/5 pb-4">
                    <span className="w-2 h-2 bg-craftsman-gold mr-4 rounded-full shrink-0"></span> Navandhe Recreational Plaza
                  </li>
                  <li className="flex items-center text-sm font-semibold border-b border-white/5 pb-4">
                    <span className="w-2 h-2 bg-craftsman-gold mr-4 rounded-full shrink-0"></span> Kharghar College Gardens
                  </li>
                  <li className="flex items-center text-sm font-semibold border-b border-white/5 pb-4">
                    <span className="w-2 h-2 bg-craftsman-gold mr-4 rounded-full shrink-0"></span> Pune University Lawns
                  </li>
                  <li className="flex items-center text-sm font-semibold border-b border-white/5 pb-4">
                    <span className="w-2 h-2 bg-craftsman-gold mr-4 rounded-full shrink-0"></span> Indore Institute Commons
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-8 bg-white text-charcoal-industrial p-12 rounded-[8px] shadow-xl relative overflow-hidden">
                <h3 className="font-display-lg text-2xl sm:text-3xl mb-6 italic text-charcoal-industrial">
                  "Panchshil Tech: Student Proof Performance"
                </h3>
                <p className="text-lg leading-relaxed text-charcoal-industrial/85 mb-8 font-serif">
                  "Students put furniture through absolute tests daily. Urbanland's canteen tables have withstood heavy bags, heavy rainfall, and constant lunch crowds for four years. The metal anchors prevent any shifting."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1 bg-craftsman-gold"></div>
                  <div className="text-xs font-bold uppercase tracking-widest text-charcoal-industrial/70">
                    Estate Operations Director, Panchshil Campus
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
              The Urbanland Advantage for Education Campuses
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
            <div className="space-y-4">
              <div className="w-12 h-12 border border-craftsman-gold flex items-center justify-center text-craftsman-gold rounded-[4px]">
                <span className="material-symbols-outlined">gavel</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-deep-ink">Student-Proof Durability</h4>
              <p className="text-sm text-deep-ink/75 leading-relaxed">
                Thick-walled steel structures and reinforced composite slating engineered to handle high daily impacts.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 border border-craftsman-gold flex items-center justify-center text-craftsman-gold rounded-[4px]">
                <span className="material-symbols-outlined">cleaning_services</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-deep-ink">Graffiti &amp; Stain Resistant</h4>
              <p className="text-sm text-deep-ink/75 leading-relaxed">
                Non-porous surfaces allow facilities teams to wash off marker drawings, paint, and food stains with ease.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 border border-craftsman-gold flex items-center justify-center text-craftsman-gold rounded-[4px]">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-deep-ink">Academic Break Delivery</h4>
              <p className="text-sm text-deep-ink/75 leading-relaxed">
                Scheduled fabrication and anchoring during semester breaks to prevent disrupting campus classes.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 border border-craftsman-gold flex items-center justify-center text-craftsman-gold rounded-[4px]">
                <span className="material-symbols-outlined">eco</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-deep-ink">Green Campus Alignment</h4>
              <p className="text-sm text-deep-ink/75 leading-relaxed">
                Using recyclable and long-lasting metals that reduce replacement carbon footprint.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 border border-craftsman-gold flex items-center justify-center text-craftsman-gold rounded-[4px]">
                <span className="material-symbols-outlined">security</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-deep-ink">Anti-Tipping Base Anchors</h4>
              <p className="text-sm text-deep-ink/75 leading-relaxed">
                Heavy-duty hidden chemical concrete anchors prevent students from tipping tables or relocation/theft.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 border border-craftsman-gold flex items-center justify-center text-craftsman-gold rounded-[4px]">
                <span className="material-symbols-outlined">palette</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-deep-ink">Campus Branding colors</h4>
              <p className="text-sm text-deep-ink/75 leading-relaxed">
                We finish frames in custom RAL powder coat colors matching the school or university's official emblem.
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
              Education Solutions FAQ
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-left">
            {[
              {
                q: "What is the typical lead time for campus furniture installations?",
                a: "Our standard lead time is 2–4 weeks. To avoid campus disruptions, we coordinate shipping and professional chemical anchoring during summer or winter breaks."
              },
              {
                q: "Can canteen tables, benches and planters be customized?",
                a: "Yes. We customize frame lengths, seating alignments (including dedicated wheelchair access spaces), and apply color powder coatings to align with school branding."
              },
              {
                q: "Are the canteen tables vandal-proof and flame-retardant?",
                a: "Yes. Our steel frames are double zinc-primed for strength, and our WPC/HPL slats are highly fire-retardant, scratch-resistant, and practically vandal-proof."
              },
              {
                q: "Do you provide on-site anchoring services?",
                a: "Yes. We offer professional concrete chemical anchoring across India to secure tables and benches against public movement, tipping, or theft."
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
                Built to Withstand Active Campuses
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: "school", title: "Campus Durability", desc: "Reinforced structures for active crowds" },
                { icon: "workspace_premium", title: "2-Year Guarantee", desc: "Durable institutional components" },
                { icon: "clean_hands", title: "Graffiti Resistant", desc: "Wipe-clean non-porous composites" },
                { icon: "calendar_month", title: "Academic Break Sync", desc: "Delivery timed during off-semesters" }
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
              Ready to Upgrade Your Campus with <br />
              <span className="text-secondary">Premium Educational furniture?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-secondary text-on-secondary px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold flex items-center justify-center hover:opacity-90 transition-all duration-300 rounded-[4px] no-underline"
              >
                Inquire for School Project <span className="ml-2">→</span>
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 rounded-[4px] no-underline"
              >
                Download Canteen Brochure <span className="ml-2">→</span>
              </Link>
            </div>
            <p className="mt-8 text-xs text-white/60 font-label-technical uppercase tracking-widest font-semibold">
              Trusted by colleges, universities, and educational institutions across India
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 -skew-x-12 translate-x-1/4 z-0"></div>
      </section>

    </div>
  );
};

export default EducationSolutions;
