import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";
import { getOptimizedImageUrl } from "../../utils/image";

const Downloads = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", phone: "", purpose: "Architect" });
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    updatePageSEO({
      title: "Downloads | Master Catalogue | Urbanland Products",
      description: "Download the latest Urbanland Products Master Catalogue featuring our complete range of premium outdoor furniture, benches, planters, bus shelters, dustbins, and site furnishing solutions."
    });

    const isUnlocked = localStorage.getItem("downloads_unlocked") === "true";
    if (isUnlocked) {
      setSubmitted(true);
      const savedUser = localStorage.getItem("downloads_user");
      if (savedUser) {
        try {
          setFormData(JSON.parse(savedUser));
        } catch (err) {
          // Ignore parse errors
        }
      }
    }

    return () => cleanPageSEO();
  }, []);

  const triggerDownload = (fileName) => {
    if (!submitted) {
      setSelectedFile(fileName);
      setShowModal(true);
    } else {
      alert(`Downloading ${fileName}...`);
    }
  };

  const handleUnlockSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.company && formData.phone) {
      setSubmitted(true);
      setShowModal(false);
      localStorage.setItem("downloads_unlocked", "true");
      localStorage.setItem("downloads_user", JSON.stringify(formData));
      if (selectedFile) {
        alert(`Credentials verified! Downloading ${selectedFile}...`);
      } else {
        alert("Credentials verified! All download links are now unlocked.");
      }
    }
  };

  const resetCredentials = () => {
    setSubmitted(false);
    localStorage.removeItem("downloads_unlocked");
    localStorage.removeItem("downloads_user");
  };

  const scrollToCatalogue = (e) => {
    e.preventDefault();
    const el = document.getElementById("catalogue");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-[#fcf9f4] text-[#1c1c19] font-sans overflow-x-hidden pt-0 selection:bg-craftsman-gold/30">
      
      {/* Dynamic Hero Section */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col items-center justify-center overflow-hidden py-32 bg-gradient-to-b from-[#122213] to-[#0A120A] text-white px-margin-mobile lg:px-0">
        {/* Full-Screen Background Image with Green/Charcoal Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={getOptimizedImageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuBf7Ibeb9NDXCT72gQMXsoP3ttUUVi3tA-1zHOD6g16YGotlouPpUqX8fTDdKcOk-ppDpDjIw1l93zs4SUKVjx8eY1sJ1LjFwXo5t4Hc95zrsZIVAseobtg53NMg66DXgQzXjHo6XYVKNniZ0uFOOSl-xbsaTf5Po0o8SGMaYSc7_EjNt_HZlJ-vD1ULidCDho61zo7pDNAfPXJX4_L2i3ZI8E4N8BipvaQu1LZOofyQ6QILEAHDAE3lDkIgwl9tvgJlFl49so-agPv")}
            alt="Downloads Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A120A]/70 via-[#0E1A0F]/85 to-[#0A120A] pointer-events-none"></div>
        </div>

        <div className="max-w-4xl mx-auto pt-10 md:pt-[100px] w-full text-center relative z-10 px-margin-mobile md:px-margin-desktop">
          <div className="inline-block border-b-2 border-craftsman-gold mb-6 pb-1">
            <span className="font-label-technical text-craftsman-gold tracking-widest uppercase font-semibold text-xs">
              Resources
            </span>
          </div>

          {/* Dynamic Breadcrumbs (Centered) */}
          <nav className="flex items-center justify-center select-none text-[9px] sm:text-[10px] font-black uppercase tracking-widest gap-2 bg-white/5 text-white/80 border border-white/10 px-4 py-2.5 rounded-full w-fit mx-auto mb-8 backdrop-blur-md shadow-lg">
            <Link to="/" className="text-white/60 hover:text-craftsman-gold transition-colors no-underline">Home</Link>
            <span className="text-white/30">/</span>
            <Link to="/resources" className="text-white/60 hover:text-craftsman-gold transition-colors no-underline">Resources Hub</Link>
            <span className="text-white/30">/</span>
            <span className="text-craftsman-gold font-bold">Downloads</span>
          </nav>

          {/* Title */}
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-[3.5rem] text-white mb-6 leading-tight max-w-3xl mx-auto tracking-wide font-bold">
            Downloads &amp; Catalogues
          </h1>

          <div className="w-24 h-1 bg-craftsman-gold mx-auto mb-8"></div>

          {/* Description */}
          <p className="font-body-lg text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed text-sm md:text-lg">
            Download our latest Master Catalogue, architectural specifications, and sustainable portfolios to choose the right premium outdoor furniture solutions for your next project.
          </p>

          {/* Glassmorphic Highlights Checklist */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 mb-10 max-w-[420px] sm:max-w-3xl mx-auto">
            {[
              { text: "Latest Master Catalogue", icon: "workspace_premium" },
              { text: "Complete Product Range", icon: "widgets" },
              { text: "Project Inspiration", icon: "wb_sunny" },
              { text: "Technical Specifications", icon: "description" }
            ].map((pt, idx) => (
              <div key={idx} className="flex items-center justify-center text-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:border-craftsman-gold hover:bg-white/10 transition-all duration-300 group w-full sm:w-auto">
                <span className="material-symbols-outlined text-craftsman-gold text-sm group-hover:scale-110 transition-transform duration-300">{pt.icon}</span>
                <span className="font-body-md text-[11px] text-white/95 font-semibold tracking-wide">{pt.text}</span>
              </div>
            ))}
          </div>

          {/* Floating Location and Scope Stats Bar */}
          <div className="flex justify-center items-center gap-8 mb-12 bg-black/40 backdrop-blur-md border border-white/10 p-5 rounded-xl max-w-xl mx-auto shadow-2xl">
            <div className="flex items-center gap-3 text-left">
              <span className="material-symbols-outlined text-craftsman-gold text-3xl">download</span>
              <div>
                <p className="font-label-technical text-[9px] text-white/60 uppercase tracking-widest">Version</p>
                <p className="font-body-md text-sm text-white font-semibold mt-0.5">2026 Edition</p>
              </div>
            </div>
            <div className="w-px h-10 bg-white/15"></div>
            <div className="flex items-center gap-3 text-left">
              <span className="material-symbols-outlined text-craftsman-gold text-3xl">menu_book</span>
              <div>
                <p className="font-label-technical text-[9px] text-white/60 uppercase tracking-widest">Format</p>
                <p className="font-body-md text-sm text-white font-semibold mt-0.5">Digital PDF</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              onClick={scrollToCatalogue}
              href="#catalogue"
              className="bg-craftsman-gold text-white px-8 py-4 font-label-technical text-xs uppercase tracking-widest hover:bg-white hover:text-[#122213] hover:shadow-lg hover:shadow-craftsman-gold/25 transition-all duration-300 no-underline text-center cursor-pointer"
            >
              Get Master Catalogue ↓
            </a>
            <Link to="/contact" className="border-2 border-white/30 text-white px-8 py-4 font-label-technical text-xs uppercase tracking-widest hover:border-white hover:bg-white/10 transition-all duration-300 no-underline text-center">
              Contact Us →
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

      {/* Section 1: Master Catalogue Feature */}
      <section className="py-24 bg-gradient-to-br from-[#F7F5F0] via-white to-[#F2EFE9]" id="catalogue">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-4">
              <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
                The Collection
              </span>
              <h2 className="font-headline-lg text-headline-lg text-charcoal-industrial leading-tight">
                Master Catalogue
              </h2>
              <div className="w-24 h-1 bg-craftsman-gold"></div>
              <p className="font-body-md text-sm md:text-base text-on-surface-variant/90 pt-2 pb-4 leading-relaxed">
                Our comprehensive catalogue showcases our complete range of premium outdoor furniture and site
                furnishing products. Discover Benches, Planter Boxes, Bus Shelters, Dustbins, Tables &amp; Seating, and bespoke Urban Infrastructure Solutions designed for modern B2B developments.
              </p>
              
              <div className="p-6 bg-white/80 backdrop-blur-sm border border-charcoal-industrial/10 mb-8 rounded-2xl shadow-sm flex items-start gap-4">
                <span className="material-symbols-outlined text-craftsman-gold text-3xl select-none mt-1">auto_awesome</span>
                <div>
                  <p className="font-label-technical text-xs font-bold text-charcoal-industrial uppercase tracking-wider">
                    Edition 2026 Features
                  </p>
                  <ul className="mt-3 space-y-2 text-xs md:text-sm text-on-surface-variant/80 font-medium">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-forest-green text-sm font-bold">check</span>
                      WPC, NFC Wood, Aluminium &amp; Steel collections
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-forest-green text-sm font-bold">check</span>
                      Comprehensive technical drawings &amp; BOQ templates
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-forest-green text-sm font-bold">check</span>
                      Certified eco-luxury sustainable designs
                    </li>
                  </ul>
                </div>
              </div>
              
              <button
                onClick={() => triggerDownload("Master Catalogue 2026 PDF")}
                className="group w-full md:w-auto bg-forest-green hover:bg-craftsman-gold text-white px-8 py-5 font-label-technical uppercase tracking-widest text-xs font-bold hover:shadow-xl hover:shadow-craftsman-gold/25 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer rounded-full"
              >
                <span className="material-symbols-outlined transition-transform group-hover:translate-y-0.5">download</span>
                {submitted ? "Download Master Catalogue (PDF)" : "Unlock Master Catalogue"}
              </button>
            </div>
            
            <div className="lg:col-span-7 order-1 lg:order-2 relative">
              <div className="aspect-[4/3] bg-gradient-to-tr from-[#EFEDE8] to-[#E3DFD5] p-6 md:p-12 relative overflow-hidden group rounded-3xl border border-charcoal-industrial/5 shadow-inner">
                {/* Visual grid pattern background inside the mockup card */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(#122213 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-charcoal-industrial/10 via-transparent to-transparent pointer-events-none"></div>
                
                {/* Catalogue 3D Overlap Mockup */}
                <div className="relative w-full h-full flex items-center justify-center">
                  
                  {/* Decorative Back page (blueprint) */}
                  <div className="absolute w-[68%] h-[90%] bg-[#EFEDE8] shadow-lg rounded-[4px] border border-charcoal-industrial/10 transform rotate-[4deg] translate-x-12 translate-y-2 opacity-60 pointer-events-none select-none overflow-hidden hidden md:block">
                    <div className="p-6 border-b border-charcoal-industrial/10 flex justify-between items-center">
                      <span className="text-[8px] font-mono tracking-widest text-charcoal-industrial/40">URBANLAND CAD SECTION</span>
                      <span className="text-[8px] font-mono tracking-widest text-charcoal-industrial/40">PAGE 12</span>
                    </div>
                    <div className="p-6 flex flex-col gap-4 opacity-20">
                      <div className="w-full h-2 bg-charcoal-industrial rounded-sm"></div>
                      <div className="w-3/4 h-2 bg-charcoal-industrial rounded-sm"></div>
                      <div className="w-5/6 h-2 bg-charcoal-industrial rounded-sm"></div>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="aspect-square border-2 border-dashed border-charcoal-industrial rounded-sm"></div>
                        <div className="aspect-square border-2 border-dashed border-charcoal-industrial rounded-sm"></div>
                      </div>
                    </div>
                  </div>

                  {/* Main Catalogue Cover Front page */}
                  <div className="relative w-[75%] md:w-[70%] h-[95%] bg-white shadow-2xl rounded-[4px] border border-black/5 overflow-hidden transform rotate-[-2deg] group-hover:rotate-0 group-hover:scale-[1.02] transition-all duration-500">
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-95 select-none pointer-events-none"
                      style={{ backgroundImage: `url(${getOptimizedImageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuAW2JMHuHhtbj9vMjxNKDHlvS4vBBQrmdpyfO49bgz5hVqI1795fjpm2EuVzUdoisdFGgOW2G8RjJgoUFO_OUHmfZ_pTXuDnYtlalxm8EwKMyffBlv5dMOircT8e96rmnNJMZNFUcZVCMkiOGa5BfB4TQU0zzsVeVl215cJbuAFceT5e5eTW_VEFm2Pb_X_4cJ_fegmahUs76OhLRLA2vnxs4ImGtqQXt6nQ53Fb8kgv5wcStscNTcn5xnKnIZqWbuMB05M-0zGxQND")})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 text-left">
                      <p className="text-white font-headline-md text-2xl md:text-3xl mb-1.5 font-bold tracking-tight">Master Catalogue</p>
                      <p className="text-craftsman-gold font-label-technical text-xs font-bold tracking-[0.15em]">URBANLAND PRODUCTS 2026</p>
                    </div>
                  </div>
                  
                  {/* Floating luxury tag */}
                  <div className="absolute top-4 right-4 bg-craftsman-gold text-forest-green px-3.5 py-1.5 rounded-full font-label-technical text-[9px] font-bold tracking-wider uppercase shadow-md pointer-events-none select-none animate-pulse">
                    Free B2B Copy
                  </div>

                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>



      {/* Section 3: Value Propositions */}
      <section className="py-20 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 space-y-4 flex flex-col items-center">
            <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
              Value Proposition
            </span>
            <h2 className="font-headline-lg text-headline-lg text-charcoal-industrial">
              Why Download Our Catalogue?
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Value 1 */}
            <div className="p-8 border-t border-charcoal-industrial/10 hover:bg-[#F2F0EB]/50 transition-colors duration-300">
              <span className="material-symbols-outlined text-craftsman-gold text-4xl mb-6 select-none pointer-events-none">view_cozy</span>
              <h3 className="font-label-technical text-xs font-bold text-charcoal-industrial mb-4 uppercase tracking-wider">
                Product Range
              </h3>
              <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                Explore our complete collection of outdoor furnishings in one place.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="p-8 border-t border-charcoal-industrial/10 hover:bg-[#F2F0EB]/50 transition-colors duration-300">
              <span className="material-symbols-outlined text-craftsman-gold text-4xl mb-6 select-none pointer-events-none">straighten</span>
              <h3 className="font-label-technical text-xs font-bold text-charcoal-industrial mb-4 uppercase tracking-wider">
                Specifications
              </h3>
              <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                View detailed product dimensions and technical blueprints.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="p-8 border-t border-charcoal-industrial/10 hover:bg-[#F2F0EB]/50 transition-colors duration-300">
              <span className="material-symbols-outlined text-craftsman-gold text-4xl mb-6 select-none pointer-events-none">lightbulb</span>
              <h3 className="font-label-technical text-xs font-bold text-charcoal-industrial mb-4 uppercase tracking-wider">
                Inspiration
              </h3>
              <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                Get inspiration from real project applications and architectural layouts.
              </p>
            </div>
            
            {/* Value 4 */}
            <div className="p-8 border-t border-charcoal-industrial/10 hover:bg-[#F2F0EB]/50 transition-colors duration-300">
              <span className="material-symbols-outlined text-craftsman-gold text-4xl mb-6 select-none pointer-events-none">layers</span>
              <h3 className="font-label-technical text-xs font-bold text-charcoal-industrial mb-4 uppercase tracking-wider">
                Materials
              </h3>
              <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                Compare various material options for durability and aesthetics.
              </p>
            </div>
            
            {/* Value 5 */}
            <div className="p-8 border-t border-charcoal-industrial/10 hover:bg-[#F2F0EB]/50 transition-colors duration-300">
              <span className="material-symbols-outlined text-craftsman-gold text-4xl mb-6 select-none pointer-events-none">location_city</span>
              <h3 className="font-label-technical text-xs font-bold text-charcoal-industrial mb-4 uppercase tracking-wider">
                Urban Solutions
              </h3>
              <p class="font-body-md text-xs text-on-surface-variant leading-relaxed">
                Find specific solutions for communities and public infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: FAQ */}
      <section className="py-20 bg-surface-container border-t border-charcoal-industrial/5">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-0">
          <div className="text-center mb-12 space-y-4 flex flex-col items-center">
            <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
              FAQ
            </span>
            <h2 className="font-headline-lg text-headline-lg text-charcoal-industrial">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
          </div>
          
          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="group bg-white border border-charcoal-industrial/5 rounded-lg" open>
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none">
                <span className="font-label-technical text-xs font-bold text-charcoal-industrial uppercase tracking-wider">
                  Is the catalogue free?
                </span>
                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-on-surface-variant text-[20px]">
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-6 pt-0 border-t border-charcoal-industrial/5 mt-2">
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mt-4">
                  Yes, the Master Catalogue is completely free to download. We believe in providing our partners with all the information they need to succeed.
                </p>
              </div>
            </details>
            
            {/* FAQ 2 */}
            <details className="group bg-white border border-charcoal-industrial/5 rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none">
                <span className="font-label-technical text-xs font-bold text-charcoal-industrial uppercase tracking-wider">
                  How often is it updated?
                </span>
                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-on-surface-variant text-[20px]">
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-6 pt-0 border-t border-charcoal-industrial/5 mt-2">
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mt-4">
                  We update our catalogue regularly with new products, material innovations, and collection additions. The 2026 edition is our most comprehensive to date.
                </p>
              </div>
            </details>
            
            {/* FAQ 3 */}
            <details className="group bg-white border border-charcoal-industrial/5 rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none">
                <span className="font-label-technical text-xs font-bold text-charcoal-industrial uppercase tracking-wider">
                  Can I request product information for my project?
                </span>
                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-on-surface-variant text-[20px]">
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-6 pt-0 border-t border-charcoal-industrial/5 mt-2">
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mt-4">
                  Yes. Our expert team is available to assist you with product recommendations, custom configurations, and project-specific technical requirements.
                </p>
              </div>
            </details>
            
            {/* FAQ 4 */}
            <details className="group bg-white border border-charcoal-industrial/5 rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none">
                <span className="font-label-technical text-xs font-bold text-charcoal-industrial uppercase tracking-wider">
                  How do I receive the catalogue?
                </span>
                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-on-surface-variant text-[20px]">
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-6 pt-0 border-t border-charcoal-industrial/5 mt-2">
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mt-4">
                  Simply submit the download form on this page to receive instant access to the digital PDF file. You will also receive a copy via email for your records.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Section 5: Final CTA Section */}
      <section className="py-20 bg-forest-green text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          <div className="absolute -right-24 -top-24 w-96 h-96 border border-craftsman-gold rounded-full"></div>
          <div className="absolute -left-12 -bottom-12 w-64 h-64 border border-craftsman-gold rounded-full"></div>
        </div>
        
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
          <h2 className="font-headline-xl text-3xl md:text-5xl mb-6 text-white uppercase tracking-tight">
            Ready to Bring Your Project to Life?
          </h2>
          <p className="font-body-lg text-sm md:text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you're planning a residential community, commercial development, public park, or institutional space, our team is here to help you choose the right outdoor furniture solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-craftsman-gold text-forest-green hover:bg-white hover:text-forest-green px-8 py-5 font-label-technical uppercase tracking-widest text-xs font-bold transition-all duration-300 rounded-sm text-center no-underline flex items-center justify-center gap-2 cursor-pointer"
            >
              Contact Us
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
            <Link
              to="/contact?subject=quote"
              className="w-full sm:w-auto border border-white text-white hover:bg-white hover:text-forest-green px-8 py-5 font-label-technical uppercase tracking-widest text-xs font-bold transition-all duration-300 rounded-sm text-center no-underline flex items-center justify-center gap-2 cursor-pointer"
            >
              Request a Quote
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Verification Modal Popup Form */}
      {showModal && (
        <div 
          onClick={() => setShowModal(false)}
          className="fixed inset-0 bg-charcoal-industrial/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-[2rem] border border-charcoal-industrial/10 p-6 md:p-10 max-w-lg w-full shadow-2xl relative cursor-default"
          >
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 text-charcoal-industrial/40 hover:text-charcoal-industrial cursor-pointer material-symbols-outlined"
            >
              close
            </button>
            
            <form onSubmit={handleUnlockSubmit} className="flex flex-col gap-5">
              <div>
                <h3 className="font-headline-md text-xl text-charcoal-industrial uppercase mb-1">
                  Unlock Technical Downloads
                </h3>
                <p className="font-body-md text-xs text-on-surface-variant/80 leading-relaxed">
                  Enter your professional credentials to instantly unlock our entire CAD libraries, brochures, and specification templates.
                </p>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-label-caps text-[9px] uppercase tracking-wider text-charcoal-industrial/60">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Karan Johar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#fcf9f4]/80 border border-charcoal-industrial/15 rounded-full px-5 py-3.5 text-xs text-charcoal-industrial focus:outline-none focus:border-forest-green font-medium font-outfit"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-label-caps text-[9px] uppercase tracking-wider text-charcoal-industrial/60">
                  Work Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="karan@architects.in"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#fcf9f4]/80 border border-charcoal-industrial/15 rounded-full px-5 py-3.5 text-xs text-charcoal-industrial focus:outline-none focus:border-forest-green font-medium font-outfit"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-label-caps text-[9px] uppercase tracking-wider text-charcoal-industrial/60">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone || ""}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#fcf9f4]/80 border border-charcoal-industrial/15 rounded-full px-5 py-3.5 text-xs text-charcoal-industrial focus:outline-none focus:border-forest-green font-medium font-outfit"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-label-caps text-[9px] uppercase tracking-wider text-charcoal-industrial/60">
                  Company / Organization *
                </label>
                <input
                  type="text"
                  required
                  placeholder="KJ Landscape Designers"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-[#fcf9f4]/80 border border-charcoal-industrial/15 rounded-full px-5 py-3.5 text-xs text-charcoal-industrial focus:outline-none focus:border-forest-green font-medium font-outfit"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-label-caps text-[9px] uppercase tracking-wider text-charcoal-industrial/60">
                  Professional Role
                </label>
                <select
                  value={formData.purpose}
                  onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  className="w-full bg-[#fcf9f4]/80 border border-charcoal-industrial/15 rounded-full px-5 py-3.5 text-xs text-charcoal-industrial focus:outline-none focus:border-forest-green font-medium font-outfit"
                >
                  <option value="Architect">Landscape Architect / Designer</option>
                  <option value="Contractor">General Contractor / Builder</option>
                  <option value="Municipal">Municipal Officer / Smart Cities</option>
                  <option value="Retail">Private Developer / Gated Estates</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-forest-green text-white rounded-full font-label-technical uppercase tracking-widest text-xs font-bold hover:bg-charcoal-industrial transition-colors cursor-pointer mt-2 shadow-md"
              >
                Unlock Download Links
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Downloads;
