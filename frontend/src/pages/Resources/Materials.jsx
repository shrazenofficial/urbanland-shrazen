import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";
import { getOptimizedImageUrl } from "../../utils/image";
import AdvantageCTA from "../../components/AdvantageCTA/AdvantageCTA";

const materialsFaqsList = [
  {
    q: "Which material is best for high-salinity coastal environments?",
    a: "For coastal areas like Mumbai, Goa, or Chennai, we recommend Aluminium or 316-Grade Stainless Steel. WPC/NFC is also excellent as it does not absorb moisture or salt, unlike natural wood."
  },
  {
    q: "Do your materials require annual painting or staining?",
    a: "No. WPC and NFC materials are pre-pigmented during the extrusion process. Our metals are powder-coated in controlled environments. A simple soap-and-water wash once or twice a year is all that's required."
  },
  {
    q: "What is the warranty period for structural integrity?",
    a: "We offer a standard 2-year guarantee on all material finishes and a 10-year structural warranty for our premium NFC and Stainless Steel ranges under normal usage conditions."
  }
];

const Materials = () => {
  const [activeFAQIndex, setActiveFAQIndex] = useState(null);

  useEffect(() => {
    updatePageSEO({
      title: "Sustainable Materials Guide | ARCH-FAB",
      description: "Technical guide to sustainable materials for outdoor furniture in India."
    });

    // Simple observer for reveal animations on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(".reveal-section");
    sections.forEach((section) => {
      // Add dynamic slide-up classes
      section.classList.add("transition-all", "duration-1000", "opacity-0", "translate-y-10");
      observer.observe(section);
    });

    return () => {
      cleanPageSEO();
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="w-full bg-[#fcf9f4] text-[#1c1c19] font-sans selection:bg-[#C9A84C]/30 pt-0 pb-0 overflow-x-hidden">
      {/* Dynamic Hero Section */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col items-center justify-center overflow-hidden py-32 bg-gradient-to-b from-[#122213] to-[#0A120A] text-white px-margin-mobile lg:px-0">
        {/* Full-Screen Background Image with Green/Charcoal Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={getOptimizedImageUrl(
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBAaAbGkILRLkSjz7e5-pkfuhFuBUIRlIHN3El3lWUVVRZkTDFD7HB2Ptkk7FSXyJf2sLdXtBzRPD2IQTbdKcF3mb_vA9J-4Fdwg4ARaKyjlT_9uRCIB_L7SN24E5qrGOUJkGF8s3eNp_vGY1A4FIHPbnFJOsytwqZaSGbxDFn3kMXNCLLw_aMN59fFuV0fFYfJBBf214RXYFIRr3y5u7zov_DEJaO0a1iPq9rfGQlmxLUuFF-YVWC5aO6E_4HjiyQ9PrJek7CZsmiK"
            )}
            alt="Materials Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A120A]/70 via-[#0E1A0F]/85 to-[#0A120A] pointer-events-none"></div>
        </div>

        <div className="max-w-4xl mx-auto pt-10 md:pt-[100px] w-full text-center relative z-10 px-margin-mobile md:px-margin-desktop">
          <div className="inline-block border-b-2 border-[#C9A84C] mb-6 pb-1">
            <span className="font-label-technical text-[#C9A84C] tracking-widest uppercase font-semibold text-xs">
              Resources
            </span>
          </div>

          {/* Dynamic Breadcrumbs (Centered) */}
          <nav className="flex items-center justify-center select-none text-[9px] sm:text-[10px] font-black uppercase tracking-widest gap-2 bg-white/5 text-white/80 border border-white/10 px-4 py-2.5 rounded-full w-fit mx-auto mb-8 backdrop-blur-md shadow-lg">
            <Link to="/" className="text-white/60 hover:text-[#C9A84C] transition-colors no-underline">Home</Link>
            <span className="text-white/30">/</span>
            <Link to="/resources" className="text-white/60 hover:text-[#C9A84C] transition-colors no-underline">Resources Hub</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#C9A84C] font-bold">Materials</span>
          </nav>

          {/* Title */}
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-[3.5rem] text-white mb-6 leading-tight max-w-3xl mx-auto tracking-wide font-bold">
            Sustainable Materials Guide
          </h1>

          <div className="w-24 h-1 bg-[#C9A84C] mx-auto mb-8"></div>

          {/* Description */}
          <p className="font-body-lg text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed text-sm md:text-lg">
            Choosing the right material is critical for long-lasting, beautiful and eco-friendly outdoor furniture. This guide compares the materials we use at Urbanland Products — with a strong focus on sustainability, durability and performance in Indian conditions.
          </p>

          {/* Glassmorphic Highlights Checklist */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 mb-10 max-w-[420px] sm:max-w-3xl mx-auto">
            {[
              { text: "WPC & NFC Wood", icon: "forest" },
              { text: "Premium Finishes", icon: "auto_awesome" },
              { text: "All-Weather Guarantee", icon: "verified" },
              { text: "Technical Specifications", icon: "description" }
            ].map((pt, idx) => (
              <div key={idx} className="flex items-center justify-center text-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:border-[#C9A84C] hover:bg-white/10 transition-all duration-300 group w-full sm:w-auto">
                <span className="material-symbols-outlined text-[#C9A84C] text-sm group-hover:scale-110 transition-transform duration-300">{pt.icon}</span>
                <span className="font-body-md text-[11px] text-white/95 font-semibold tracking-wide">{pt.text}</span>
              </div>
            ))}
          </div>

          {/* Floating Guarantee and Quality Stats Bar */}
          <div className="flex justify-center items-center gap-8 mb-12 bg-black/40 backdrop-blur-md border border-white/10 p-5 rounded-xl max-w-xl mx-auto shadow-2xl">
            <div className="flex items-center gap-3 text-left">
              <span className="material-symbols-outlined text-[#C9A84C] text-3xl">security</span>
              <div>
                <p className="font-label-technical text-[9px] text-white/60 uppercase tracking-widest">Guarantee</p>
                <p className="font-body-md text-sm text-white font-semibold mt-0.5">2-Year Warranty</p>
              </div>
            </div>
            <div className="w-px h-10 bg-white/15"></div>
            <div className="flex items-center gap-3 text-left">
              <span className="material-symbols-outlined text-[#C9A84C] text-3xl">workspace_premium</span>
              <div>
                <p className="font-label-technical text-[9px] text-white/60 uppercase tracking-widest">Quality</p>
                <p className="font-body-md text-sm text-white font-semibold mt-0.5">ISO 9001:2015</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/resources/downloads"
              className="bg-[#C9A84C] text-white px-8 py-4 font-label-technical text-xs uppercase tracking-widest hover:bg-white hover:text-[#122213] hover:shadow-lg hover:shadow-[#C9A84C]/25 transition-all duration-300 no-underline text-center cursor-pointer"
            >
              Download Catalogue
            </Link>
            <Link to="/contact?subject=quote" className="border-2 border-white/30 text-white px-8 py-4 font-label-technical text-xs uppercase tracking-widest hover:border-white hover:bg-white/10 transition-all duration-300 no-underline text-center">
              Request a Quote →
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


      {/* Section 1: Why Material Choice Matters */}
      <section className="reveal-section py-12 md:py-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-5 space-y-4">
            <span className="font-label-technical text-[#C9A84C] tracking-[0.2em] uppercase font-semibold text-xs block">
              Climate Resilience
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-[#002f09] leading-tight">
              Engineered for the Extremes of the Subcontinent
            </h2>
            <div className="w-24 h-1 bg-[#C9A84C]"></div>
          </div>
          <div className="md:col-span-7">
            <div className="font-body-lg text-body-lg text-[#41493f] space-y-4 border-l-4 border-[#C9A84C] pl-4 md:pl-8">
              <p>
                India's climate presents a unique challenge: intense UV radiation, extreme humidity
                fluctuations, and heavy monsoon cycles that decimate traditional timber in just a few
                seasons.
              </p>
              <p>
                At ARCH-FAB, we believe durability is the ultimate form of sustainability. By replacing
                traditional hardwood with advanced alternatives like Wood Polymer Composites (WPC) and
                Natural Fiber Composites (NFC), we help projects achieve{" "}
                <strong>IGBC, GRIHA, and LEED certifications</strong> while ensuring a lifespan measured
                in decades, not years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Comparison Table */}
      <section className="reveal-section py-12 md:py-20 bg-[#f6f3ee] px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-8 md:mb-16 space-y-4">
            <span className="font-label-technical text-[#C9A84C] tracking-[0.2em] uppercase font-semibold text-xs block">
              Technical Specifications
            </span>
            <h3 className="font-headline-md text-2xl md:text-3xl text-[#002f09] leading-tight">
              Technical Performance Comparison
            </h3>
            <div className="w-24 h-1 bg-[#C9A84C] mx-auto"></div>
          </div>
          <div className="overflow-x-auto -mx-margin-mobile md:mx-0 px-margin-mobile md:px-0">
            <div className="min-w-[800px] pb-4">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#2D2D2D]/20">
                    <th className="py-6 px-6 font-label-md text-label-md text-[#41493f] uppercase tracking-wider">
                      Material
                    </th>
                    <th className="py-6 px-6 font-label-md text-label-md text-[#41493f] uppercase tracking-wider">
                      Lifespan
                    </th>
                    <th className="py-6 px-6 font-label-md text-label-md text-[#41493f] uppercase tracking-wider">
                      Maintenance
                    </th>
                    <th className="py-6 px-6 font-label-md text-label-md text-[#41493f] uppercase tracking-wider">
                      Sustainability Score
                    </th>
                    <th className="py-6 px-6 font-label-md text-label-md text-[#41493f] uppercase tracking-wider">
                      Best For
                    </th>
                    <th className="py-6 px-6 font-label-md text-label-md text-[#41493f] uppercase tracking-wider">
                      Cost vs MS
                    </th>
                  </tr>
                </thead>
                <tbody className="font-body-md text-[#1c1c19]">
                  <tr className="group border-b border-[#2D2D2D]/10 hover:border-transparent transition-all duration-300">
                    <td className="py-6 px-6 font-bold text-[#2C5F2E] transition-colors duration-300 group-hover:bg-white first:rounded-l-lg last:rounded-r-lg">WPC</td>
                    <td className="py-6 px-6 transition-colors duration-300 group-hover:bg-white first:rounded-l-lg last:rounded-r-lg">12–15 years</td>
                    <td className="py-6 px-6 transition-colors duration-300 group-hover:bg-white first:rounded-l-lg last:rounded-r-lg">Very Low</td>
                    <td className="py-6 px-6 transition-colors duration-300 group-hover:bg-white first:rounded-l-lg last:rounded-r-lg">
                      <span className="bg-[#2C5F2E]/10 text-[#2C5F2E] px-3 py-1 rounded-full text-xs font-semibold">
                        Excellent
                      </span>
                    </td>
                    <td className="py-6 px-6 transition-colors duration-300 group-hover:bg-white first:rounded-l-lg last:rounded-r-lg">Gardens/balconies</td>
                    <td className="py-6 px-6 transition-colors duration-300 group-hover:bg-white first:rounded-l-lg last:rounded-r-lg">1.6–2×</td>
                  </tr>
                  <tr className="group border-b border-[#2D2D2D]/10 hover:border-transparent transition-all duration-300">
                    <td className="py-6 px-6 font-bold text-[#2C5F2E] transition-colors duration-300 group-hover:bg-white first:rounded-l-lg last:rounded-r-lg">NFC Wood</td>
                    <td className="py-6 px-6 transition-colors duration-300 group-hover:bg-white first:rounded-l-lg last:rounded-r-lg">15–20+ years</td>
                    <td className="py-6 px-6 transition-colors duration-300 group-hover:bg-white first:rounded-l-lg last:rounded-r-lg">Very Low</td>
                    <td className="py-6 px-6 transition-colors duration-300 group-hover:bg-white first:rounded-l-lg last:rounded-r-lg">
                      <span className="bg-[#2C5F2E]/10 text-[#2C5F2E] px-3 py-1 rounded-full text-xs font-semibold">
                        Excellent
                      </span>
                    </td>
                    <td className="py-6 px-6 transition-colors duration-300 group-hover:bg-white first:rounded-l-lg last:rounded-r-lg">Architectural landscapes</td>
                    <td className="py-6 px-6 transition-colors duration-300 group-hover:bg-white first:rounded-l-lg last:rounded-r-lg">2.0–2.8×</td>
                  </tr>
                  <tr className="group border-b border-[#2D2D2D]/10 hover:border-transparent transition-all duration-300">
                    <td className="py-6 px-6 font-bold text-[#2C5F2E] transition-colors duration-300 group-hover:bg-white first:rounded-l-lg last:rounded-r-lg">Aluminium</td>
                    <td className="py-6 px-6 transition-colors duration-300 group-hover:bg-white first:rounded-l-lg last:rounded-r-lg">15–20+ years</td>
                    <td className="py-6 px-6 transition-colors duration-300 group-hover:bg-white first:rounded-l-lg last:rounded-r-lg">Minimal</td>
                    <td className="py-6 px-6 transition-colors duration-300 group-hover:bg-white first:rounded-l-lg last:rounded-r-lg">
                      <span className="bg-[#2C5F2E]/10 text-[#2C5F2E] px-3 py-1 rounded-full text-xs font-semibold">
                        Very Good
                      </span>
                    </td>
                    <td className="py-6 px-6 transition-colors duration-300 group-hover:bg-white first:rounded-l-lg last:rounded-r-lg">Coastal/rooftops</td>
                    <td className="py-6 px-6 transition-colors duration-300 group-hover:bg-white first:rounded-l-lg last:rounded-r-lg">2.2–2.8×</td>
                  </tr>
                  <tr className="group border-b border-[#2D2D2D]/10 hover:border-transparent transition-all duration-300">
                    <td className="py-6 px-6 font-bold text-[#2C5F2E] transition-colors duration-300 group-hover:bg-white first:rounded-l-lg last:rounded-r-lg">Mild Steel</td>
                    <td className="py-6 px-6 transition-colors duration-300 group-hover:bg-white first:rounded-l-lg last:rounded-r-lg">8–12 years</td>
                    <td className="py-6 px-6 transition-colors duration-300 group-hover:bg-white first:rounded-l-lg last:rounded-r-lg">Low</td>
                    <td className="py-6 px-6 transition-colors duration-300 group-hover:bg-white first:rounded-l-lg last:rounded-r-lg">
                      <span className="bg-[#2D2D2D]/10 text-[#2D2D2D] px-3 py-1 rounded-full text-xs font-semibold">
                        Good
                      </span>
                    </td>
                    <td className="py-6 px-6 transition-colors duration-300 group-hover:bg-white first:rounded-l-lg last:rounded-r-lg">Parks/municipal</td>
                    <td className="py-6 px-6 transition-colors duration-300 group-hover:bg-white first:rounded-l-lg last:rounded-r-lg">Base (1×)</td>
                  </tr>
                  <tr className="group border-b border-[#2D2D2D]/10 hover:border-transparent transition-all duration-300">
                    <td className="py-6 px-6 font-bold text-[#2C5F2E] transition-colors duration-300 group-hover:bg-white first:rounded-l-lg last:rounded-r-lg">Stainless Steel</td>
                    <td className="py-6 px-6 transition-colors duration-300 group-hover:bg-white first:rounded-l-lg last:rounded-r-lg">15–20+ years</td>
                    <td className="py-6 px-6 transition-colors duration-300 group-hover:bg-white first:rounded-l-lg last:rounded-r-lg">Very Low</td>
                    <td className="py-6 px-6 transition-colors duration-300 group-hover:bg-white first:rounded-l-lg last:rounded-r-lg">
                      <span className="bg-[#2C5F2E]/10 text-[#2C5F2E] px-3 py-1 rounded-full text-xs font-semibold">
                        Very Good
                      </span>
                    </td>
                    <td className="py-6 px-6 transition-colors duration-300 group-hover:bg-white first:rounded-l-lg last:rounded-r-lg">Luxury coastal</td>
                    <td className="py-6 px-6 transition-colors duration-300 group-hover:bg-white first:rounded-l-lg last:rounded-r-lg">2.5–3×</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Detailed Material Breakdown */}
      <section className="reveal-section py-12 md:py-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto space-y-12 md:space-y-20">
        {/* WPC / NFC */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-[#C9A84C]" style={{ fontVariationSettings: "'FILL' 1" }}>
                eco
              </span>
              <h3 className="font-headline-lg text-headline-lg text-[#002f09]">WPC &amp; NFC Wood</h3>
            </div>
            <p className="font-body-md text-[#41493f] mb-8">
              Our flagship composite materials blend recycled wood fibers with high-density polymers (WPC)
              or natural husks (NFC) to create a finish that is indistinguishable from real wood but
              impervious to rot, termites, and UV fading.
            </p>
            <ul className="space-y-3 font-label-md text-label-md text-[#1c1c19] list-none p-0">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full shrink-0"></span>
                <span>Zero splintering and warp-resistant</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full shrink-0"></span>
                <span>Authentic grain textures in 12+ shades</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full shrink-0"></span>
                <span>Requires no annual oiling or painting</span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div
              className="aspect-video bg-cover bg-center rounded-lg shadow-md"
              style={{
                backgroundImage: `url('${getOptimizedImageUrl(
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuC52gn3Vz4ScISNGqxS6zWEx5s7zeDXa40IbX383eprzhKyF42uCMVM65mtf4LHe0VCs4M8O7ZrfFSYNon1wxFGRjqm_9gRhKT1DXvZeYsi4mHFsOs48HMBopgj0DQOoxF5Y4YjNRnibSPA07ATFb2r_rjMTmAZ3e3HiduzSVLnzmQJmGSy4DFKwHcaiAWg0WRKYLoUejCkkU7w8YAfSH3kcYj5OkUpsF8PMTam-7g5NsK_bxwIgxYKbqAqalAJpV3nmGUFtasectTV"
                )}')`
              }}
            />
          </div>
        </div>

        {/* Aluminium / Steel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-1">
            <div
              className="aspect-video bg-cover bg-center rounded-lg shadow-md"
              style={{
                backgroundImage: `url('${getOptimizedImageUrl(
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCVLsl3XxtPWNuebYzPMVvo0ob0dkEF4y2UfCdXSoZlFJZGmQMHmDg407txvmbEgjALrHW6Ib0tTv0-D5mPYkKQ4A_0FY42ny2ibCqmg4d9foNMd0G0GA-AO-Ec0FrNwsDPFeHFEdP-YXHFsm9927x59hAcD4cMtszmbBeE-p5m9LuADWQU6NMxRnJ2VdVCgomT22rdQqA52ctq9rp0bdVFJR6VxU7HnqopNb46aXJQ_ipjLwVlL1TgrBGjxJ486BcE1GwEOishhuc9"
                )}')`
              }}
            />
          </div>
          <div className="order-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-[#C9A84C]" style={{ fontVariationSettings: "'FILL' 1" }}>
                architecture
              </span>
              <h3 className="font-headline-lg text-headline-lg text-[#002f09]">Metals &amp; Coatings</h3>
            </div>
            <p className="font-body-md text-[#41493f] mb-8">
              From lightweight Aluminium to heavy-duty Stainless Steel, our metal structures are treated
              with architectural-grade powder coatings that exceed salt-spray testing standards.
            </p>
            <ul className="space-y-3 font-label-md text-label-md text-[#1c1c19] list-none p-0">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full shrink-0"></span>
                <span>304 &amp; 316 Grade Stainless Steel for coastal air</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full shrink-0"></span>
                <span>Corrosion-resistant dual-coat processes</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full shrink-0"></span>
                <span>Fully recyclable structural components</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Sustainability Advantage */}
      <section className="reveal-section bg-[#124719] text-white py-12 md:py-20">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="font-label-technical text-[#C9A84C] tracking-[0.2em] uppercase font-semibold text-xs block">
              Ecological Impact
            </span>
            <h2 className="font-display-lg text-headline-lg text-white leading-tight">
              The Sustainability Advantage
            </h2>
            <div className="w-24 h-1 bg-[#C9A84C] mx-auto"></div>
            <p className="font-body-lg max-w-2xl mx-auto opacity-80 pt-2">
              Building for the future means selecting materials that give back more than they take.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 text-center">
            <div className="p-4 border border-white/10 flex flex-col items-center">
              <span className="material-symbols-outlined text-[#C9A84C] mb-4 text-4xl">forest</span>
              <h4 className="font-label-md text-label-md uppercase mb-2">Reduced Timber</h4>
              <p className="text-xs opacity-70">Saves hundreds of hectares of forest annually.</p>
            </div>
            <div className="p-4 border border-white/10 flex flex-col items-center">
              <span className="material-symbols-outlined text-[#C9A84C] mb-4 text-4xl">recycling</span>
              <h4 className="font-label-md text-label-md uppercase mb-2">Recycled Content</h4>
              <p className="text-xs opacity-70">Up to 90% recycled fibers and polymers.</p>
            </div>
            <div className="p-4 border border-white/10 flex flex-col items-center">
              <span className="material-symbols-outlined text-[#C9A84C] mb-4 text-4xl">update</span>
              <h4 className="font-label-md text-label-md uppercase mb-2">Long Lifespan</h4>
              <p className="text-xs opacity-70">20+ years reduced replacement cycles.</p>
            </div>
            <div className="p-4 border border-white/10 flex flex-col items-center">
              <span className="material-symbols-outlined text-[#C9A84C] mb-4 text-4xl">verified_user</span>
              <h4 className="font-label-md text-label-md uppercase mb-2">Green Credits</h4>
              <p className="text-xs opacity-70">Contribution to LEED &amp; IGBC certifications.</p>
            </div>
            <div className="p-4 border border-white/10 flex flex-col items-center col-span-2 sm:col-span-1">
              <span className="material-symbols-outlined text-[#C9A84C] mb-4 text-4xl">air</span>
              <h4 className="font-label-md text-label-md uppercase mb-2">Low-VOC</h4>
              <p className="text-xs opacity-70">Zero toxic off-gassing in extreme heat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: FAQ */}
      <section className="reveal-section py-20 bg-white border-t border-[#2D2D2D]/10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12 space-y-4 flex flex-col items-center">
            <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
              Support &amp; Info
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-ink leading-tight">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold mx-auto"></div>
          </div>
          <div className="space-y-4">
            {materialsFaqsList.map((faq, idx) => {
              const isOpen = activeFAQIndex === idx;
              return (
                <div key={idx} className="border-b border-outline-variant pb-4 text-left">
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

export default Materials;

