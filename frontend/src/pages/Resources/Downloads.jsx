import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";
import { getOptimizedImageUrl } from "../../utils/image";

const Downloads = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", purpose: "Architect" });
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
    if (formData.name && formData.email && formData.company) {
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
      
      {/* Hero Section */}
      <header className="relative min-h-[750px] md:min-h-[870px] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-forest-green/40 z-10"></div>
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-[10000ms] hover:scale-110 select-none pointer-events-none"
            style={{ backgroundImage: `url(${getOptimizedImageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuBf7Ibeb9NDXCT72gQMXsoP3ttUUVi3tA-1zHOD6g16YGotlouPpUqX8fTDdKcOk-ppDpDjIw1l93zs4SUKVjx8eY1sJ1LjFwXo5t4Hc95zrsZIVAseobtg53NMg66DXgQzXjHo6XYVKNniZ0uFOOSl-xbsaTf5Po0o8SGMaYSc7_EjNt_HZlJ-vD1ULidCDho61zo7pDNAfPXJX4_L2i3ZI8E4N8BipvaQu1LZOofyQ6QILEAHDAE3lDkIgwl9tvgJlFl49so-agPv")})` }}
          />
        </div>
        
        <div className="relative z-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
          <div className="max-w-2xl bg-white/95 backdrop-blur-md p-6 md:p-12 border-l-4 border-craftsman-gold shadow-xl rounded-sm">
            <h1 className="font-headline-xl text-4xl md:text-5xl lg:text-6xl text-charcoal-industrial mb-6 uppercase tracking-tight">
              Downloads
            </h1>
            <p className="font-body-lg text-sm md:text-base text-on-surface-variant mb-8 leading-relaxed">
              Download our latest Master Catalogue to explore Urbanland's complete collection of sustainable
              outdoor furniture and urban infrastructure solutions.
            </p>
            
            <div className="space-y-4 mb-8 font-label-caps">
              <div className="flex items-center gap-3 text-xs md:text-sm text-charcoal-industrial">
                <span className="material-symbols-outlined text-forest-green font-bold text-[18px]">check_circle</span>
                <span>Latest Master Catalogue</span>
              </div>
              <div className="flex items-center gap-3 text-xs md:text-sm text-charcoal-industrial">
                <span className="material-symbols-outlined text-forest-green font-bold text-[18px]">check_circle</span>
                <span>Complete Product Range</span>
              </div>
              <div className="flex items-center gap-3 text-xs md:text-sm text-charcoal-industrial">
                <span className="material-symbols-outlined text-forest-green font-bold text-[18px]">check_circle</span>
                <span>Project Inspiration &amp; Specifications</span>
              </div>
            </div>
            
            <a 
              onClick={scrollToCatalogue}
              href="#catalogue"
              className="inline-flex items-center bg-forest-green text-white px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold hover:bg-charcoal-industrial transition-all duration-300 group cursor-pointer rounded-sm no-underline"
            >
              Download Master Catalogue
              <span className="material-symbols-outlined ml-3 group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </a>
          </div>
        </div>
      </header>

      {/* Section 1: Master Catalogue Feature */}
      <section className="py-20 bg-surface-container-low" id="catalogue">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-craftsman-gold font-label-technical text-xs font-bold uppercase tracking-widest block mb-4">
                The Collection
              </span>
              <h2 className="font-headline-lg text-3xl md:text-4xl text-charcoal-industrial mb-6">
                Master Catalogue
              </h2>
              <p className="font-body-md text-sm md:text-base text-on-surface-variant mb-8 leading-relaxed">
                Our comprehensive catalogue showcases our complete range of outdoor furniture and site
                furnishing products, including: Benches, Planter Boxes, Bus Shelters, Dustbins, Outdoor
                Furniture, Tables &amp; Seating, and bespoke Urban Infrastructure Solutions.
              </p>
              
              <div className="p-6 bg-white border border-charcoal-industrial/10 mb-8 rounded-sm">
                <p className="font-label-technical text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                  Edition 2026
                </p>
                <p className="font-body-md text-sm text-charcoal-industrial mt-2">
                  Includes WPC, NFC Wood, Aluminium, Mild Steel &amp; Stainless Steel collections
                </p>
              </div>
              
              <button
                onClick={() => triggerDownload("Master Catalogue 2026 PDF")}
                className="w-full md:w-auto bg-craftsman-gold text-white px-8 py-5 font-label-technical uppercase tracking-widest text-xs font-bold hover:brightness-110 transition-all flex items-center justify-center gap-3 cursor-pointer rounded-sm"
              >
                <span className="material-symbols-outlined">download</span>
                {submitted ? "Download Master Catalogue (PDF)" : "Unlock Master Catalogue"}
              </button>
            </div>
            
            <div className="lg:col-span-7 relative pt-12 lg:pt-0">
              <div className="aspect-[4/3] bg-charcoal-industrial/5 p-4 md:p-8 relative overflow-hidden group rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-tr from-charcoal-industrial/10 to-transparent"></div>
                
                {/* Catalogue Mockup */}
                <div className="relative w-full h-full flex items-center justify-center transform rotate-[-2deg] group-hover:rotate-0 transition-transform duration-700">
                  <div className="w-3/4 h-full bg-white shadow-2xl relative overflow-hidden rounded-[2px] border border-black/5">
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-90 select-none pointer-events-none"
                      style={{ backgroundImage: `url(${getOptimizedImageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuAW2JMHuHhtbj9vMjxNKDHlvS4vBBQrmdpyfO49bgz5hVqI1795fjpm2EuVzUdoisdFGgOW2G8RjJgoUFO_OUHmfZ_pTXuDnYtlalxm8EwKMyffBlv5dMOircT8e96rmnNJMZNFUcZVCMkiOGa5BfB4TQU0zzsVeVl215cJbuAFceT5e5eTW_VEFm2Pb_X_4cJ_fegmahUs76OhLRLA2vnxs4ImGtqQXt6nQ53Fb8kgv5wcStscNTcn5xnKnIZqWbuMB05M-0zGxQND")})` }}
                    />
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-forest-green/90 to-transparent">
                      <p className="text-white font-headline-md text-xl md:text-2xl mb-1">Master Catalogue</p>
                      <p className="text-craftsman-gold font-label-technical text-xs font-semibold tracking-wider">URBANLAND PRODUCTS 2026</p>
                    </div>
                  </div>
                  <div className="absolute w-3/4 h-full bg-white shadow-xl transform translate-x-8 translate-y-6 -z-10 border border-black/5 rounded-[2px]" />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>



      {/* Section 3: Value Propositions */}
      <section className="py-20 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-3xl md:text-4xl text-charcoal-industrial mb-4">
              Why Download Our Catalogue?
            </h2>
            <div className="h-1 w-20 bg-craftsman-gold mx-auto"></div>
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
          <div className="text-center mb-12">
            <h2 className="font-headline-lg text-3xl text-charcoal-industrial mb-4">
              Frequently Asked Questions
            </h2>
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
        <div className="fixed inset-0 bg-charcoal-industrial/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[2rem] border border-charcoal-industrial/10 p-6 md:p-10 max-w-lg w-full shadow-2xl relative">
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
