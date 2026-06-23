import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";
import { getOptimizedImageUrl } from "../../utils/image";

// Import local assets for cases/gallery
import gbg1 from '../../assets/gallery_real_estate.png';
import gbg2 from '../../assets/gallery_hotels.png';
import gbg3 from '../../assets/gallery_hospitals.png';
import gbg4 from '../../assets/gallery_education.png';
import gbg5 from '../../assets/gallery_smart_city.png';
import welcome1 from '../../assets/welcome-1.png';
import welcome2 from '../../assets/welcome-2.png';

const RealEstateSolutions = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  useEffect(() => {
    // Update SEO headers
    updatePageSEO({
      title: "Outdoor Furniture for Real Estate Projects India | Luxury Villas, Gated Communities & Clubhouses | Urbanland Products",
      description: "Premium outdoor benches, planter boxes and amenity furniture for real estate projects in India. Trusted by Godrej, Kalpataru, Wadhwa Wise City and leading developers. Durable WPC, NFC Wood, Aluminium & Mild Steel solutions with 2-Year Guarantee.",
      og_image: gbg1
    });

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
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="w-full bg-[#F7F4EF] text-deep-ink font-body-md antialiased overflow-x-hidden pt-0">
      
      {/* Hero Section - Using SolutionsHub Hero slideshow layout style */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center overflow-hidden bg-[#1A1A1A]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={getOptimizedImageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuDO5YuPCmTWFzn9F8l2ypO7FFHysMrKEGq0cEFpQNByuzT1rbrtpG207hJcJfiz1wUEIZPBFt2PKk5RvJF2ZuXWZNC7RjcbbjLFLmuVc4lyWgUmvHnegfk2PaD6SUBY2vWkQtAJUPnPKaR34bMeC6QFG0bz5PCCiPTg8jubmh5Fhsx-Bv7DI2ZhJPVIbAagIZ7wbRb6ArePgucNxA1EejTtBube70vo_meFfjJVIFg5Br460JcTbpw_forMAB7BxUmqRqjt6LpjeSf3")}
            alt="Luxury Architectural Landscape"
            className="w-full h-full object-cover select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/90 via-[#1A1A1A]/60 to-transparent z-10" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-container-max mx-auto w-full px-6 md:px-margin-desktop text-white">
          <div className="max-w-3xl space-y-6 text-left">
            <div className="inline-flex items-center gap-3 py-1.5 px-3.5 bg-craftsman-gold text-charcoal-industrial rounded-full font-label-caps text-[10px] uppercase tracking-widest font-bold">
              <span className="w-2 h-2 rounded-full bg-forest-green animate-pulse"></span>
              Luxury Villas, Gated Communities & Clubhouses
            </div>

            <h1 className="font-display-lg text-4xl sm:text-6.5xl lg:text-[4rem] font-bold uppercase leading-none tracking-tight">
              Outdoor Furniture for <br /> Real Estate Projects
            </h1>

            <p className="font-serif text-2xl md:text-3xl text-craftsman-gold italic opacity-90 mt-4 leading-normal">
              Premium Amenity & Landscape Seating in India
            </p>

            {/* Checkmarks Grid */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 py-4 border-y border-white/10 max-w-2xl">
              <div className="flex items-center text-white/90 text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-craftsman-gold mr-3">check_circle</span>
                High-Durability Build
              </div>
              <div className="flex items-center text-white/90 text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-craftsman-gold mr-3">check_circle</span>
                Aesthetic Precision
              </div>
              <div className="flex items-center text-white/90 text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-craftsman-gold mr-3">check_circle</span>
                Sustainable Materials
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#solutions-list"
                className="bg-craftsman-gold text-charcoal-industrial px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold flex items-center justify-center hover:bg-white hover:text-charcoal-industrial transition-all duration-300 rounded-[4px]"
              >
                Explore Solutions
              </a>
              <a
                href="#projects-showcase"
                className="border-2 border-white text-white px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold flex items-center justify-center hover:bg-white hover:text-forest-green transition-all duration-300 rounded-[4px]"
              >
                View Project Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Challenges - Dark Backdrop */}
      <section className="bg-charcoal-industrial py-24 text-white">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-16 text-left space-y-4">
            <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
              Challenges
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white max-w-4xl uppercase">
              Challenges Real Estate Developers, Architects &amp; Amenities Managers Face Today
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border-t border-white/10">
            <div className="p-8 border-r border-b border-white/10 hover:bg-white/5 transition-colors group text-left">
              <span className="material-symbols-outlined text-4xl text-craftsman-gold mb-6 block group-hover:scale-110 transition-transform">
                shield_with_heart
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">Durability in Monsoon</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Withstanding extreme Indian weather cycles without degradation or rust.
              </p>
            </div>
            <div className="p-8 border-r border-b border-white/10 hover:bg-white/5 transition-colors group text-left">
              <span className="material-symbols-outlined text-4xl text-craftsman-gold mb-6 block group-hover:scale-110 transition-transform">
                palette
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">Aesthetic Misalignment</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Standard furniture failing to match the luxury design language of modern villas.
              </p>
            </div>
            <div className="p-8 border-r border-b border-white/10 hover:bg-white/5 transition-colors group text-left">
              <span className="material-symbols-outlined text-4xl text-craftsman-gold mb-6 block group-hover:scale-110 transition-transform">
                construction
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">High Maintenance</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                The constant burden of painting and repairing timber or low-grade metal furniture.
              </p>
            </div>
            <div className="p-8 border-r border-b border-white/10 hover:bg-white/5 transition-colors group text-left">
              <span className="material-symbols-outlined text-4xl text-craftsman-gold mb-6 block group-hover:scale-110 transition-transform">
                family_restroom
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">Safety Standards</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Ensuring products are safe for residents, especially in family-centric gated communities.
              </p>
            </div>
            <div className="p-8 border-b border-white/10 hover:bg-white/5 transition-colors group text-left">
              <span className="material-symbols-outlined text-4xl text-craftsman-gold mb-6 block group-hover:scale-110 transition-transform">
                history
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">Short Lifespan</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Frequent replacement cycles draining long-term facility management budgets.
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
              Sustainable Outdoor Furniture Solutions
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
            <p className="font-body-lg text-on-surface-variant max-w-2xl pt-2">
              Engineered for longevity, designed for distinction. Our solutions blend industrial-grade resilience with architectural elegance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* WPC Benches */}
            <div className="group cursor-pointer text-left">
              <div className="relative aspect-[4/5] overflow-hidden mb-6 rounded-[8px] border border-black/5 shadow-sm">
                <img
                  alt="WPC Benches"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  src={getOptimizedImageUrl("https://lh3.googleusercontent.com/aida/AP1WRLuZosd0W98HjiJ4RwJos6Z2y6sQzTReQZ72MQvl0zJmhBSpoLqLnTnQrI_QJ_Fayt8VBhNW4QL7RNb26Kz5e-gdZTcKWnGWOluqDqwg4YAMm4xS66IfNjCtXclUUKNv0tQYSeGJ2scLwRTCphH_IsInJWKGeQuqmbROM8k0tpfXsiBq5GymhfTpyPopxRRioQjkV87LxnT7kh_TAf9DQ_WdL-X0rmfHNh4nPstfuZxtIyH2VGcJi8314iuh")}
                />
              </div>
              <h3 className="font-display-lg text-2xl mb-3 text-deep-ink uppercase font-medium">WPC Benches</h3>
              <p className="text-sm text-deep-ink/75 leading-relaxed mb-6">
                Wood Polymer Composite slats that never rot, fade, or splinter. Ideal for high-traffic clubhouse decks.
              </p>
              <Link
                to="/products/benches"
                className="text-xs font-bold uppercase tracking-widest text-craftsman-gold flex items-center hover:text-forest-green transition-colors no-underline"
              >
                Explore Benches <span className="material-symbols-outlined ml-2 text-base">arrow_right_alt</span>
              </Link>
            </div>

            {/* Steel & NFC Seating */}
            <div className="group cursor-pointer text-left">
              <div className="relative aspect-[4/5] overflow-hidden mb-6 rounded-[8px] border border-black/5 shadow-sm">
                <img
                  alt="NFC Seating"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  src={getOptimizedImageUrl("https://lh3.googleusercontent.com/aida/AP1WRLsAni45NHqJKMjxB_P7quc4ukZcLI1CPWGgqH6PGMAK5TY6yBRaxtPSPGUSI_xNw-vq_x-lVMIA5SLh7UtpP_rihxYWvZnQyYz5cgZiGrVyRSlLX1pNazLfeZDphCT85riTA5pCgpK7d8j0PERcGDnk40fIB3hPdng6nbFw5G944LYibxGUZryuj3Z8Oa6KsLTwdo49JFeSYEeJCPpqB5qSfnxRlSUrJYt_huR-8EaZj1KZNZ6HvBhQUHui")}
                />
              </div>
              <h3 className="font-display-lg text-2xl mb-3 text-deep-ink uppercase font-medium">Steel &amp; NFC Seating</h3>
              <p className="text-sm text-deep-ink/75 leading-relaxed mb-6">
                Galvanized and powder-coated steel frames for maximum corrosion resistance in coastal or humid regions.
              </p>
              <Link
                to="/products/benches"
                className="text-xs font-bold uppercase tracking-widest text-craftsman-gold flex items-center hover:text-forest-green transition-colors no-underline"
              >
                Explore Seating <span className="material-symbols-outlined ml-2 text-base">arrow_right_alt</span>
              </Link>
            </div>

            {/* Planter Boxes */}
            <div className="group cursor-pointer text-left">
              <div className="relative aspect-[4/5] overflow-hidden mb-6 rounded-[8px] border border-black/5 shadow-sm">
                <img
                  alt="Planter Boxes"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  src={getOptimizedImageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuDPND3sKwut7QNp-QOAzGDY0WioW_sStb5juv4n5jJwj6lwpHG9CdD7Wg-yrMHnp0zM1WSNFeQq-URI1TkLy5J7kG5cB5_BdKOsKTatkSo2K0SAUH8a9ul0qrPgUxdARY4ZV11ahxLKVFfS7QxHD1VySGtytRqj8mf4I1g02JQHE0xU8dWTLy-yeg9eikC3hveoEw7nSUy-Nd-20dpIJZbDh1myajS6ClRaihu3LSNLGlL0XrZ50pjTSwZDVlWPMbVf9NjgKor-2d5D")}
                />
              </div>
              <h3 className="font-display-lg text-2xl mb-3 text-deep-ink uppercase font-medium">Modern Planters</h3>
              <p className="text-sm text-deep-ink/75 leading-relaxed mb-6">
                Architectural planters that define spaces and add greenery to rooftops and podium parking areas.
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
              Proven Results in Premium Developments
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
          </div>

          <div className="space-y-32">
            {/* Godrej */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 relative">
                <div className="aspect-video overflow-hidden rounded-[16px] shadow-lg border border-white/5">
                  <img
                    alt="Godrej Project"
                    className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
                    src={getOptimizedImageUrl("https://lh3.googleusercontent.com/aida/AP1WRLu469R_D_FBVS00AideqZ8PtAn8-Xl_9y8vJ0pb3PEdpLk9fwmGoouT8i2kGIVqc3_hRLev1AWii0jfOgSj5MQAqKAqGvdobKmiTKZq5KbZZEV3_ajeWrFoFKx_PArb5jiEwt70wxsY_ON9vU_cr1Civkd_R-kM_K2c1Z96LFj92HwTllxwYFDtuoll_5yYj9Kn9piMw-hqA7PXYX3gaEeDQabCLUv0u1XdreBDABGhAEXAvPtcLDNioyK0")}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-craftsman-gold p-8 text-charcoal-industrial hidden md:block rounded-[4px] shadow-xl">
                  <div className="text-4xl font-display-lg font-bold">120+</div>
                  <div className="text-xs font-bold uppercase tracking-wider">Units Delivered</div>
                </div>
              </div>
              <div className="lg:col-span-5 lg:pl-12 text-left">
                <h3 className="font-display-lg text-3xl mb-6 text-white uppercase">Godrej Properties: Garden City</h3>
                <p className="text-white/70 leading-relaxed mb-8">
                  Integrated our heavy-duty WPC seating across the multi-phase residential township, focusing on community park zones.
                </p>
                <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-craftsman-gold mb-1">
                      Timeline
                    </div>
                    <div className="text-sm font-medium text-white/90">4 Months Rollout</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-craftsman-gold mb-1">
                      Status
                    </div>
                    <div className="text-sm font-medium text-white/90 font-label-technical">Maintenance-Free since 2021</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Kalpataru & Wadhwa */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-left">
              <div className="space-y-8">
                <div className="aspect-[16/10] overflow-hidden rounded-[16px] border border-white/5 shadow-md">
                  <img
                    alt="Kalpataru Project"
                    className="w-full h-full object-cover"
                    src={getOptimizedImageUrl("https://lh3.googleusercontent.com/aida/AP1WRLsVCoWtYvDswTBQdMNUDG5nRNSl0rAJiaAt4azHK6b2auojAuSs6ai4AYWPjM-DSDFVmpS1KTB8t7nEBC57KT0ilq5sHYeIWV0NeFOViGsTXn_oQ7EgELy1qIeX-GJTmbTyb8-O30EVkrCUtxZAFTYg0NFV1XiM1QB8I7HTq0n9Skf4OorOJK7LSLOgM0Io_ZOiXNmMakyfeffDvrqJnFN9VyNFV2BRP0ZdDy-UTaRCMhl9NtG1wnmS7SNy")}
                  />
                </div>
                <div>
                  <h4 className="font-display-lg text-2xl mb-4 text-white uppercase">Kalpataru Elegante</h4>
                  <p className="text-sm text-white/60 mb-6 leading-relaxed">
                    Custom architectural planters for podium landscape, matching the building's contemporary finish.
                  </p>
                  <div className="inline-flex gap-8">
                    <div className="text-xs font-bold uppercase tracking-widest text-craftsman-gold">
                      45 Custom Planters
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-craftsman-gold border-l border-white/20 pl-8">
                      ISO Certified QC
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8 lg:mt-16">
                <div className="aspect-[16/10] overflow-hidden bg-white/5 flex items-center justify-center border border-white/10 rounded-[16px] shadow-md">
                  <span className="material-symbols-outlined text-6xl text-white/10">architecture</span>
                </div>
                <div>
                  <h4 className="font-display-lg text-2xl mb-4 text-white uppercase">The Wadhwa Group: Atmosphere</h4>
                  <p className="text-sm text-white/60 mb-6 leading-relaxed">
                    Provided specialized waterfront seating solutions using marine-grade aluminum components.
                  </p>
                  <div className="inline-flex gap-8">
                    <div className="text-xs font-bold uppercase tracking-widest text-craftsman-gold">
                      Coastal Protection
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-craftsman-gold border-l border-white/20 pl-8">
                      Design Support
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navandhe & List */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
              <div className="lg:col-span-4 bg-craftsman-gold/5 border border-craftsman-gold/20 p-10 rounded-[8px]">
                <h4 className="font-display-lg text-2xl text-craftsman-gold mb-8 uppercase">Additional Major Installations</h4>
                <ul className="space-y-4">
                  <li className="flex items-center text-sm font-semibold border-b border-white/5 pb-4">
                    <span className="w-2 h-2 bg-craftsman-gold mr-4 rounded-full shrink-0"></span> Lodha New Cuffe Parade
                  </li>
                  <li className="flex items-center text-sm font-semibold border-b border-white/5 pb-4">
                    <span className="w-2 h-2 bg-craftsman-gold mr-4 rounded-full shrink-0"></span> Piramal Aranya
                  </li>
                  <li className="flex items-center text-sm font-semibold border-b border-white/5 pb-4">
                    <span className="w-2 h-2 bg-craftsman-gold mr-4 rounded-full shrink-0"></span> Runwal Bliss
                  </li>
                  <li className="flex items-center text-sm font-semibold border-b border-white/5 pb-4">
                    <span className="w-2 h-2 bg-craftsman-gold mr-4 rounded-full shrink-0"></span> Shapoorji Pallonji Joyville
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-8 bg-white text-charcoal-industrial p-12 rounded-[8px] shadow-xl relative overflow-hidden">
                <h3 className="font-display-lg text-2xl sm:text-3xl mb-6 italic text-charcoal-industrial">
                  "Navandhe Real Estate: Luxury Heights"
                </h3>
                <p className="text-lg leading-relaxed text-charcoal-industrial/85 mb-8 font-serif">
                  "Urbanland's ability to provide high-quality CAD drawings early in the planning phase made them our preferred partner. The durability of their NFC benches is exactly what our luxury clients expect."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1 bg-craftsman-gold"></div>
                  <div className="text-xs font-bold uppercase tracking-widest text-charcoal-industrial/70">
                    Lead Architect, Navandhe Group
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Us - Light Backdrop */}
      <section className="reveal-section py-24 bg-[#F7F4EF]">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-16 text-left space-y-4">
            <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
              Why Choose Us
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-ink uppercase">
              Why Leading Developers &amp; Architects Prefer Urbanland
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
            {/* Value Prop 1 */}
            <div className="space-y-4">
              <div className="w-12 h-12 border border-craftsman-gold flex items-center justify-center text-craftsman-gold rounded-[4px]">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-deep-ink">10-Year Structural Warranty</h4>
              <p className="text-sm text-deep-ink/75 leading-relaxed">
                Unmatched guarantee on structural integrity for long-term project viability.
              </p>
            </div>

            {/* Value Prop 2 */}
            <div className="space-y-4">
              <div className="w-12 h-12 border border-craftsman-gold flex items-center justify-center text-craftsman-gold rounded-[4px]">
                <span className="material-symbols-outlined">design_services</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-deep-ink">Custom Design Flexibility</h4>
              <p className="text-sm text-deep-ink/75 leading-relaxed">
                Adaptable dimensions and finishes to suit specific architectural themes.
              </p>
            </div>

            {/* Value Prop 3 */}
            <div className="space-y-4">
              <div className="w-12 h-12 border border-craftsman-gold flex items-center justify-center text-craftsman-gold rounded-[4px]">
                <span className="material-symbols-outlined">precision_manufacturing</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-deep-ink">ISO 9001 Certified Quality</h4>
              <p className="text-sm text-deep-ink/75 leading-relaxed">
                Rigorous manufacturing standards ensuring consistency across bulk orders.
              </p>
            </div>

            {/* Value Prop 4 */}
            <div className="space-y-4">
              <div className="w-12 h-12 border border-craftsman-gold flex items-center justify-center text-craftsman-gold rounded-[4px]">
                <span className="material-symbols-outlined">eco</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-deep-ink">ESG &amp; Sustainability</h4>
              <p className="text-sm text-deep-ink/75 leading-relaxed">
                Recyclable materials and low-impact production for LEED-certified projects.
              </p>
            </div>

            {/* Value Prop 5 */}
            <div className="space-y-4">
              <div className="w-12 h-12 border border-craftsman-gold flex items-center justify-center text-craftsman-gold rounded-[4px]">
                <span className="material-symbols-outlined">speed</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-deep-ink">Scalable Delivery</h4>
              <p className="text-sm text-deep-ink/75 leading-relaxed">
                Streamlined logistics capable of handling multi-project rollouts nationwide.
              </p>
            </div>

            {/* Value Prop 6 */}
            <div className="space-y-4">
              <div className="w-12 h-12 border border-craftsman-gold flex items-center justify-center text-craftsman-gold rounded-[4px]">
                <span className="material-symbols-outlined">support_agent</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-deep-ink">Architectural Support</h4>
              <p className="text-sm text-deep-ink/75 leading-relaxed">
                Dedicated team providing technical drawings and material samples.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Stateful React Accordion */}
      <section className="reveal-section py-24 bg-surface-container-lowest/30">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-16 text-left space-y-4">
            <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
              FAQ
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-ink uppercase">
              Technical Specifications FAQ
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6 text-left">
            {[
              {
                q: "What are the primary materials used in your benches?",
                a: "We primarily use galvanized steel, high-grade aluminum, and Wood Polymer Composite (WPC) or FSC-certified hardwoods. All metals are powder-coated for maximum durability."
              },
              {
                q: "Do you provide custom dimensions for large-scale amenities?",
                a: "Yes, our in-house design team can customize lengths, finishes, and anchoring systems to meet specific site requirements for projects with a minimum order quantity."
              },
              {
                q: "How do Urbanland products handle the Indian monsoon?",
                a: "Our products are tested for salt spray resistance and high humidity. WPC components are non-porous and do not absorb water, while our metal coatings prevent oxidation even in coastal areas."
              },
              {
                q: "Are 3D models and CAD files available for architects?",
                a: "Yes, we provide .dwg and .skp files for our entire standard range to facilitate seamless integration into your architectural plans and mood boards."
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

      {/* Pre-Footer CTA Section - Reusing SolutionsHub CTA components layout exactly */}
      <section className="reveal-section bg-primary text-on-primary py-24 px-6 md:px-margin-desktop overflow-hidden relative">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Trust Panel */}
          <div className="space-y-10 border-l-2 border-secondary/30 pl-8 md:pl-10 text-left">
            <div className="space-y-2">
              <span className="font-label-technical text-secondary tracking-[0.2em] uppercase font-semibold text-xs block">
                The Urbanland Advantage
              </span>
              <h3 className="font-headline-md text-3xl md:text-4xl text-on-primary leading-tight">
                Why Urbanland Stands Apart
              </h3>
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
                className="bg-secondary text-on-secondary px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold flex items-center justify-center hover:opacity-90 transition-all duration-300 rounded-[4px] no-underline"
              >
                Request a Custom Quote <span className="ml-2">→</span>
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 rounded-[4px] no-underline"
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

export default RealEstateSolutions;
