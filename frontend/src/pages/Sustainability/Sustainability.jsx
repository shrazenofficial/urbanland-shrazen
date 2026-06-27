import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";
import { getOptimizedImageUrl } from "../../utils/image";
import AdvantageCTA from "../../components/AdvantageCTA/AdvantageCTA";

const sustainabilityFaqsList = [
  {
    q: "How does using WPC or NFC Wood help the environment?",
    a: "By using Wood-Plastic Composite (WPC) and Natural Fiber Composite (NFC), we significantly reduce the demand for traditional hardwood timber. This helps protect natural forests. Additionally, these materials incorporate recycled plastics and natural fibres, supporting a circular economy."
  },
  {
    q: "Are your products suitable for green building projects?",
    a: "Yes. Our use of sustainable materials and commitment to durability can help your project meet criteria for green building certifications such as IGBC, GRIHA, and LEED."
  },
  {
    q: "What is the expected lifespan of your outdoor furniture?",
    a: "Our products are engineered for longevity, typically offering a lifespan of 12 to 20+ years. This reduces the need for frequent replacements, saving both resources and long-term costs."
  },
  {
    q: "Do your materials require toxic chemical treatments?",
    a: "No. Unlike traditional timber which often requires periodic painting, staining, or chemical treatments to prevent rot and insect damage, our WPC and NFC materials are naturally weather-resistant and require minimal maintenance."
  },
  {
    q: "Are your manufacturing processes certified?",
    a: "Yes, Urbanland Products is ISO 9001:2015 certified, ensuring that our quality management systems meet international standards for excellence and consistency."
  }
];

const sustainabilityAdvantages = [
  { icon: "forest", title: "Eco-Friendly Wood", desc: "WPC & NFC reduce reliance on natural timber" },
  { icon: "rebase_edit", title: "Circular Economy", desc: "Made with recycled materials" },
  { icon: "apartment", title: "Green Credits", desc: "Supports LEED, IGBC, and GRIHA projects" },
  { icon: "build", title: "Zero Toxicity", desc: "High-durability and zero toxic treatments needed" }
];

const Sustainability = () => {
  const [activeFAQIndex, setActiveFAQIndex] = useState(null);
  const heroImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuC-OpmWZvkQvIz-N06e_DCCScg4pH87jbuJm8qh3E_k2t4pPFlfV6QmGEoDJpWITI-NJPUTooOVZ1L5FfeF267bnmurW64z-it6YEMxOTrnHpqGVA1GfUIOybhX2BXdo0_8ULW3RpWdkZEbyBj8cNetRbAEGi88uiQZ6vrUib3iAcoPO5LMAgqxERTUpF9WGrtfGCiRYlxMfEp7hGrAfPVDR7wQ2OkagRGmZwalStXct3wJjT8FBw7hVlnlM6gSR2GVDTV29fqDOPPg";

  useEffect(() => {
    updatePageSEO({
      title: "Sustainability | Green Outdoor Furniture Manufacturer in India | Urbanland Products",
      description: "Discover how Urbanland Products designs and manufactures sustainable outdoor furniture using WPC, NFC Wood, aluminium and recyclable materials. Built for long-lasting performance while supporting greener urban spaces across India.",
      og_image: heroImage
    });

    // Smooth reveal animation on scroll
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

    // Intersection Observer for Reveal Up Animations
    const revealUpObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    const revealUps = document.querySelectorAll('.reveal-up');
    revealUps.forEach(el => revealUpObserver.observe(el));

    return () => {
      cleanPageSEO();
      sections.forEach(section => observer.unobserve(section));
      revealUps.forEach(el => revealUpObserver.unobserve(el));
    };
  }, []);

  return (
    <div className="w-full bg-[#fcf9f4] text-[#1c1c19] font-sans overflow-x-hidden pt-0 selection:bg-[#C9A84C] selection:text-white">
      <style>{`
        summary::-webkit-details-marker {
          display: none;
        }
      `}</style>

      {/* Hero Section */}
      <section className="w-full relative bg-charcoal-industrial text-white overflow-hidden py-24 md:py-32 flex flex-col items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 select-none pointer-events-none"
          style={{
            backgroundImage: `url(${getOptimizedImageUrl(heroImage)})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-industrial/80 to-charcoal-industrial" />
        
        <div className="relative w-full max-w-container-max px-margin-mobile md:px-margin-desktop flex flex-col items-center text-center gap-4">
          <span className="font-label-caps tracking-[0.2em] uppercase font-bold text-xs text-craftsman-gold bg-craftsman-gold/10 px-4 py-2 rounded-full border border-craftsman-gold/30">
            ✦ Ecological Commitment
          </span>
          <h1 className="font-display-lg-mobile text-4xl md:font-display-lg md:text-6xl lg:text-7xl text-white max-w-4xl uppercase font-bold tracking-tight">
            Sustainability
          </h1>
          <p className="font-body-lg text-white/80 max-w-3xl mt-2 leading-relaxed">
            Sustainability is at the heart of everything we build. From responsibly selected materials to
            long-lasting outdoor furniture, we're committed to creating products that reduce environmental
            impact while enhancing public and private spaces across India.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link
              to="/products"
              className="bg-craftsman-gold text-charcoal-industrial px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold hover:bg-white transition-all duration-300 rounded-[4px] no-underline flex items-center gap-2"
            >
              Explore Our Products <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
            <Link
              to="/resources/downloads"
              className="border-2 border-white text-white px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-charcoal-industrial transition-all duration-300 rounded-[4px] no-underline flex items-center gap-2"
            >
              Download Product Catalogue <span className="material-symbols-outlined text-[16px]">download</span>
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8 font-label-caps text-xs text-craftsman-gold">
            {[
              "WPC & NFC Wood",
              "Green Building Points",
              "Durable & Low-Maintenance",
              "ISO 9001:2015 Certified"
            ].map((badge, idx) => (
              <span key={idx} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-craftsman-gold/30">
                <span className="material-symbols-outlined text-craftsman-gold text-[16px]">check_circle</span> {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: Philosophy */}
      <section className="reveal-section py-stack-xl bg-[#fcf9f4]">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-4xl text-left reveal-up">
            <span className="font-label-technical text-[#C9A84C] tracking-[0.2em] uppercase font-semibold text-xs block mb-4">
              Environmental Philosophy
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-[#002f09] mb-4 font-bold">
              Built for a Sustainable Future
            </h2>
            <div className="w-24 h-1 bg-[#C9A84C] mb-8"></div>
            <blockquote className="font-body-lg text-lg md:text-body-lg text-[#41493f] leading-relaxed m-0">
              Sustainability isn't an afterthought—it's part of our manufacturing philosophy. Instead of relying on traditional hardwoods such as teak, acacia and sesam, we use innovative materials like WPC (Wood-Plastic Composite) and NFC Wood (Natural Fiber Composite). These materials incorporate recycled plastics and natural fibres, helping reduce dependence on natural timber while supporting more responsible manufacturing. Every Urbanland product is engineered for durability, with an expected lifespan of 12–20+ years, helping minimise replacement waste and long-term maintenance.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Section 2: Grid Benefits */}
      <section className="reveal-section py-stack-xl bg-[#F0EDE9]">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-stack-xl reveal-up">
            <span className="font-label-technical text-[#C9A84C] tracking-[0.2em] uppercase font-semibold text-xs block mb-4">
              Material Advantages
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-[#002f09] mb-4 font-bold">
              Why Sustainable Materials Matter
            </h2>
            <div className="w-24 h-1 bg-[#C9A84C] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {/* Item 1 */}
            <div className="bg-[#fcf9f4] p-10 border border-[#2D2D2D]/5 flex flex-col items-start hover:border-[#C9A84C] transition-colors group">
              <div className="w-12 h-12 bg-[#e5e2dd] flex items-center justify-center mb-6 group-hover:bg-[#002f09] transition-colors">
                <span className="material-symbols-outlined text-[#002f09] group-hover:text-white">forest</span>
              </div>
              <h3 className="font-headline-md text-xl md:text-headline-md mb-4 text-[#2D2D2D]">Reduces Reliance on Natural Timber</h3>
              <p className="text-[#41493f] text-sm leading-relaxed">Our WPC and NFC Wood alternatives help reduce the need for traditional hardwood.</p>
            </div>
            {/* Item 2 */}
            <div className="bg-[#fcf9f4] p-10 border border-[#2D2D2D]/5 flex flex-col items-start hover:border-[#C9A84C] transition-colors group">
              <div className="w-12 h-12 bg-[#e5e2dd] flex items-center justify-center mb-6 group-hover:bg-[#002f09] transition-colors">
                <span className="material-symbols-outlined text-[#002f09] group-hover:text-white">rebase_edit</span>
              </div>
              <h3 className="font-headline-md text-xl md:text-headline-md mb-4 text-[#2D2D2D]">Uses Recycled Materials</h3>
              <p className="text-[#41493f] text-sm leading-relaxed">We incorporate recycled plastics and natural fibres wherever possible to support a circular approach to manufacturing.</p>
            </div>
            {/* Item 3 */}
            <div className="bg-[#fcf9f4] p-10 border border-[#2D2D2D]/5 flex flex-col items-start hover:border-[#C9A84C] transition-colors group">
              <div className="w-12 h-12 bg-[#e5e2dd] flex items-center justify-center mb-6 group-hover:bg-[#002f09] transition-colors">
                <span className="material-symbols-outlined text-[#002f09] group-hover:text-white">hourglass_empty</span>
              </div>
              <h3 className="font-headline-md text-xl md:text-headline-md mb-4 text-[#2D2D2D]">Built to Last</h3>
              <p className="text-[#41493f] text-sm leading-relaxed">Products designed for long service life reduce replacement frequency, maintenance requirements and material waste.</p>
            </div>
            {/* Item 4 */}
            <div className="bg-[#fcf9f4] p-10 border border-[#2D2D2D]/5 flex flex-col items-start hover:border-[#C9A84C] transition-colors group">
              <div className="w-12 h-12 bg-[#e5e2dd] flex items-center justify-center mb-6 group-hover:bg-[#002f09] transition-colors">
                <span className="material-symbols-outlined text-[#002f09] group-hover:text-white">apartment</span>
              </div>
              <h3 className="font-headline-md text-xl md:text-headline-md mb-4 text-[#2D2D2D]">Supports Green Building Projects</h3>
              <p className="text-[#41493f] text-sm leading-relaxed">Our material choices can contribute to sustainable building initiatives, including IGBC, GRIHA and LEED projects.</p>
            </div>
            {/* Item 5 */}
            <div className="bg-[#fcf9f4] p-10 border border-[#2D2D2D]/5 flex flex-col items-start hover:border-[#C9A84C] transition-colors group">
              <div className="w-12 h-12 bg-[#e5e2dd] flex items-center justify-center mb-6 group-hover:bg-[#002f09] transition-colors">
                <span className="material-symbols-outlined text-[#002f09] group-hover:text-white">build</span>
              </div>
              <h3 className="font-headline-md text-xl md:text-headline-md mb-4 text-[#2D2D2D]">Low Maintenance</h3>
              <p className="text-[#41493f] text-sm leading-relaxed">Unlike traditional timber, our materials require minimal upkeep, reducing the need for paints, coatings and chemical treatments.</p>
            </div>
            {/* Item 6 */}
            <div className="bg-[#fcf9f4] p-10 border border-[#2D2D2D]/5 flex flex-col items-start hover:border-[#C9A84C] transition-colors group">
              <div className="w-12 h-12 bg-[#e5e2dd] flex items-center justify-center mb-6 group-hover:bg-[#002f09] transition-colors">
                <span className="material-symbols-outlined text-[#002f09] group-hover:text-white">nature_people</span>
              </div>
              <h3 className="font-headline-md text-xl md:text-headline-md mb-4 text-[#2D2D2D]">Designed for Better Outdoor Spaces</h3>
              <p className="text-[#41493f] text-sm leading-relaxed">We help architects, landscape designers and developers create durable, functional and environmentally responsible public spaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Materials */}
      <section className="reveal-section py-stack-xl bg-[#fcf9f4]">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-stack-xl gap-6">
            <div className="max-w-2xl text-left reveal-up">
              <span className="font-label-technical text-[#C9A84C] tracking-[0.2em] uppercase font-semibold text-xs block mb-4">
                Core Materials
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-[#002f09] mb-4 font-bold">
                Sustainable Materials We Use
              </h2>
              <div className="w-24 h-1 bg-[#C9A84C] mb-6"></div>
              <p className="font-body-lg text-body-lg text-[#41493f]">Every material is carefully selected to balance aesthetics, performance and sustainability.</p>
            </div>
            <Link
              to="/resources/materials"
              className="bg-[#2C5F2E] text-white px-8 py-4 font-label-technical text-label-technical uppercase tracking-wider flex items-center gap-2 hover:opacity-90 transition-opacity no-underline rounded-sm font-bold shrink-0"
            >
              Explore Our Materials <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter reveal-up">
            {/* WPC Card */}
            <div className="group flex flex-col border border-[#2D2D2D]/10 overflow-hidden bg-white">
              <div className="h-64 overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={getOptimizedImageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuBnSv-DJxIny_Y75-uOgvpu0Xs_CeIepLusJu0tj9P-1LPDc4L3bRsax0IQeJnW8mLN9yKEtAhT04xZN28SuiCB7sSKpPy9leDWF4Ws6bQqfRmFf9rT4q-0iU4XOy0q8uKZKkOUb_0XcyFmu6bzF4I1O0gXSzWcV8mthQ2aIjERC_goJAA6NhGMjxLRzQLp56LGX9348VjJ7qPVjOrSVG5DQP6xscJXQZq5WESM5g8PZqzFeFfoo33Y3PEROgffadtR7wqzhMt1CzqY")}
                  alt="Wood-Plastic Composite (WPC) material grain"
                />
                <div className="absolute top-4 left-4 bg-[#002f09] text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                  Composite
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-headline-md text-xl md:text-headline-md mb-4 text-[#2D2D2D]">WPC</h3>
                <p className="text-[#41493f] text-sm leading-relaxed mb-6">
                  Manufactured using recycled plastics and natural fibres, WPC delivers the appearance of wood with excellent weather resistance and low maintenance.
                </p>
              </div>
            </div>
            {/* NFC Wood Card */}
            <div className="group flex flex-col border border-[#2D2D2D]/10 overflow-hidden bg-white">
              <div className="h-64 overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={getOptimizedImageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuBFByxy7KX8uSgbx0hWj2Lm236gxTSqEDprxz2RTCB4W9dfWi2WXffsDKgjkpnqfmsVf3JJucAyCSb6C7JVo38mvzaGsrJeire0IwmKTFrcv82WLNRwKt5FrKqpy-iE_Y0Y_X1qNgjHx3PwnilxIkHGmXpnwtiSQlYZ7KqZJc6JF11B8HBtBuKVIl-J8DFvkPxcV4ouQCHxeI4AtT7A0jdJOWu93PjbA2F08QPPe5WL4M3YRWu1UhBabTvnnPCYIRByBlCeZlhYvrRn")}
                  alt="Natural Fiber Composite (NFC) wood planks"
                />
                <div className="absolute top-4 left-4 bg-[#002f09] text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                  Premium
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-headline-md text-xl md:text-headline-md mb-4 text-[#2D2D2D]">NFC Wood</h3>
                <p className="text-[#41493f] text-sm leading-relaxed mb-6">
                  A premium composite material offering exceptional durability, dimensional stability and a refined natural finish.
                </p>
              </div>
            </div>
            {/* Metal Card */}
            <div className="group flex flex-col border border-[#2D2D2D]/10 overflow-hidden bg-white">
              <div className="h-64 overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={getOptimizedImageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuC38o4Bi7gsVHFmBqGKADPALCzK7h05uptWduJ90JeLy_qAR-VA_uffs2L7zKU92AgfWuZQnM6H5FQJEOBL8YbElejfUOPQkaqk6Y3G6g56qpZHaQpmXENtLSWHgyieZiKOgVDszGbPyEGYjIt3ip8t59IssGdhW7y6NENXXUHiT6atZHVOG_K7Sd4Ev-rJtFNBmmM4I-ahrx_DE5vE2CQXIiu3TrZopj76-XBelEukJRXsjnREPyL97x6-qxwKcfCTF-Rq4UAPnhFG")}
                  alt="Brushed aluminum and stainless steel joints"
                />
                <div className="absolute top-4 left-4 bg-[#002f09] text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                  Recyclable
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-headline-md text-xl md:text-headline-md mb-4 text-[#2D2D2D]">Aluminium &amp; Stainless Steel</h3>
                <p className="text-[#41493f] text-sm leading-relaxed mb-6">
                  Highly durable and recyclable metals that provide excellent structural performance with long service life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Projects Gallery */}
      <section className="reveal-section py-stack-xl bg-[#F0EDE9] border-y border-[#2D2D2D]/5">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-xl items-center">
            <div className="text-left reveal-up">
              <span className="font-label-technical text-[#C9A84C] tracking-[0.2em] uppercase font-semibold text-xs block mb-4">
                Proven Excellence
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-[#002f09] mb-4 font-bold">
                Creating Sustainable Outdoor Spaces Across India
              </h2>
              <div className="w-24 h-1 bg-[#C9A84C] mb-6"></div>
              <p className="font-body-lg text-body-lg text-[#41493f] mb-8 leading-relaxed">
                Urbanland Products has delivered 50+ outdoor furniture projects for residential communities,
                hospitality developments, educational institutions, municipalities and public
                infrastructure. Every installation reflects our commitment to durable design, responsible
                material selection and long-term environmental value.
              </p>
              <Link
                to="/projects"
                className="bg-[#2C5F2E] text-white px-8 py-4 font-label-technical text-label-technical uppercase tracking-wider flex items-center gap-2 hover:opacity-90 transition-opacity no-underline w-fit rounded-sm font-bold"
              >
                View Our Projects <span className="material-symbols-outlined">visibility</span>
              </Link>
              <div className="mt-stack-lg pt-stack-lg border-t border-[#2D2D2D]/10">
                <p className="text-label-technical uppercase tracking-widest text-[#41493f]/60 mb-6 font-bold">Trusted By Leading Developers</p>
                <div className="flex flex-wrap gap-8 opacity-40 grayscale items-center">
                  <div className="font-bold text-xl tracking-tighter text-[#2D2D2D]">LODHA</div>
                  <div className="font-bold text-xl tracking-tighter text-[#2D2D2D]">Godrej</div>
                  <div className="font-bold text-xl tracking-tighter uppercase text-[#2D2D2D]">Kalpataru</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-[#e5e2dd] overflow-hidden">
                <img 
                  className="w-full h-full object-cover"
                  src={getOptimizedImageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuAc-baM-pM0qWq9Tv0a7NDB_vmbn5_oJVCHCLodmfbLVHResL3nyEz5xyFN2WqrafDspHlCJQEDe0jJcx47cpj7THWlgl09CvlZ9y-cp5BJFlWAX31C5Y96V33HHBnmBpdWXVZXALZFD1P2O9cusgHpM0IQ6vTC4pr8UJYiiVavRbo3IIv1Y--AamZ-CzvUnwB2XPU6uz48Dq7cg37RS3Eih7T2IREeCLyw6J-Uu8J4tSPPlwfAwvIW3Rtg3i3vtOA9Onzm5LbKisNl")}
                  alt="Sustainable outdoor seating in residential township"
                />
              </div>
              <div className="aspect-square bg-[#e5e2dd] overflow-hidden mt-8">
                <img 
                  className="w-full h-full object-cover"
                  src={getOptimizedImageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuAS0-a1ADGFX_dkwuc-QlSDwVU7T8dOnyTOyhizBpUfmKSRRh0hDqT3LMj-YHS8nUisAs42v33OoFsLJyug-6pp7-Stxz5Wl6nXOKLV_iJDiPT1BB3_W4ycC6BiWJDaBMG62pTIGZg0PCUN_2tAS6qiEFWEwdjrvoI_T2j1iDSGysajw7Vl0S9vEtIdqFqWFodnBHpBL9yQZlh4XkoWlyGsue2zAY2b55kV0HCVXzS3u-Qs7V2xcObXg0_Pn0BbzpLHdKW_xtruXnSF")}
                  alt="Recycled WPC courtyard planters and seating"
                />
              </div>
              <div className="aspect-square bg-[#e5e2dd] overflow-hidden -mt-8">
                <img 
                  className="w-full h-full object-cover"
                  src={getOptimizedImageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuC45Vj4Ref3nWKB0oysuQ_dw04gpLRXfDDNhM_KZHq6T6DyxOp-bUBH6Kppdb_7bmKEx5y6tl5gBSoHwbHm8fMyFbpKN2rgPIZuBX8zhNMO7dyF96fHKyylJ73H9UADQMb5BrBGsodOHMXEdgztC0OiyQgBjrWrgCbsaMDXXBigD5a4F5mCbmtdIDW-0kZt-8kTuxWoc9Sj5giCO687FacieCJu_3fc7njtn78OitRwYT4U08t320i0DJMy-ZGyPHipwh_6DmouyGzd")}
                  alt="Durable composite outdoor benches overlooking water"
                />
              </div>
              <div className="aspect-square bg-[#e5e2dd] overflow-hidden">
                <img 
                  className="w-full h-full object-cover"
                  src={getOptimizedImageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuCZCY3EiAwkbWNU50-wirJgCSEGGx9Qc_iWzhhbKJd24MaOiWVlue7gRy6tqeoN8C7Aj-KGC8TxaFGquBVcIvD6YcZmMqG6_Mmzn1hQxe2iHx99poOOlIRI3LgNkSjDLkHC-GZ92yBnptHjDkS1TvaCALxXjrXchc0ChwzqVedKq3bjK345YFWZXWtvLgV6A9gj3V_2611W6NnPzuJnWTXNWvIgL9qiyr_iRA1BnKlrSzuJ7u5nAd_FDCw6bho9EI4qkCeULiBje1Pp")}
                  alt="Luxury hotel WPC loungers and poolside tables"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Promise */}
      <section className="reveal-section py-stack-xl bg-[#002f09] text-white relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="text-left mb-stack-lg reveal-up">
            <span className="font-label-technical text-[#C9A84C] tracking-[0.2em] uppercase font-semibold text-xs block mb-4">
              Our Commitment
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold mb-4">
              Our Sustainability Promise
            </h2>
            <div className="w-24 h-1 bg-[#C9A84C]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-6">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[#C9A84C]">verified</span>
              <p className="font-body-lg text-body-lg m-0">Using responsibly selected materials</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[#C9A84C]">verified</span>
              <p className="font-body-lg text-body-lg m-0">Reducing reliance on traditional hardwood</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[#C9A84C]">verified</span>
              <p className="font-body-lg text-body-lg m-0">Manufacturing durable products that minimise replacement waste</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[#C9A84C]">verified</span>
              <p class="font-body-lg text-body-lg m-0">Supporting sustainable building initiatives</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[#C9A84C]">verified</span>
              <p className="font-body-lg text-body-lg m-0">Continuously improving our products and manufacturing processes</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="reveal-section py-20 bg-white border-t border-[#2D2D2D]/10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12 space-y-4 reveal-up flex flex-col items-center">
            <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
              Support &amp; FAQ
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-[#002f09] font-bold">
              Sustainability FAQ
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
          </div>
          <div className="space-y-4">
            {sustainabilityFaqsList.map((faq, idx) => {
              const isOpen = activeFAQIndex === idx;
              return (
                <div key={idx} className="border-b border-outline-variant pb-4 text-left reveal-up">
                  <button
                    onClick={() => setActiveFAQIndex(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center text-left py-4 focus:outline-none cursor-pointer border-none bg-transparent"
                  >
                    <span className="font-body-lg font-semibold text-[#2D2D2D] text-base md:text-lg">
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
        advantages={sustainabilityAdvantages}
        title="Ready to Build More Sustainable Outdoor Spaces Together?"
        ctaText="Request a Quote"
        ctaLink="/contact"
        brochureText="Download Product Catalogue"
        brochureLink="/resources/downloads"
        statsText="Whether you're planning a township, park, campus or commercial landscape, Urbanland Products can help you create durable outdoor spaces with responsible materials."
      />
    </div>
  );
};

export default Sustainability;
