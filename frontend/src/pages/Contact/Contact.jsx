import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { getOptimizedImageUrl } from "../../utils/image";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Create a custom marker icon matching the brand's architectural gold theme
const customIcon = new L.DivIcon({
  className: "custom-marker",
  html: `<div style="width:18px; height:18px; background-color:#C9A84C; border-radius:50%; border:3px solid white; box-shadow:0 2px 8px rgba(0,0,0,0.3);"></div>`,
  iconSize: [18, 18],
  iconAnchor: [9, 9]
});

const faqsList = [
  {
    q: "How quickly will I receive a quote?",
    a: "Most enquiries receive a response within one business day. For complex projects requiring custom technical drawings, we may need an additional 48 hours to finalize specifications."
  },
  {
    q: "Do you deliver across India?",
    a: "Yes. We provide nationwide delivery and professional installation services. Our logistics network ensures safe transit for heavy-duty outdoor equipment to all major cities and remote project sites."
  },
  {
    q: "Can I request material samples?",
    a: "Yes. Material swatches and samples of our WPC and Aluminium finishes are available for qualifying architectural and commercial projects to assist in your selection process."
  },
  {
    q: "Do your products support green building projects?",
    a: "Yes. Our sustainable materials contribute to IGBC, GRIHA and LEED initiatives. We use high proportions of recycled content and durable finishes that reduce the environmental impact over the product lifecycle."
  }
];

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    projectType: "",
    location: "",
    message: ""
  });
  const [submitStatus, setSubmitStatus] = useState("idle"); // idle, submitting, success
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    updatePageSEO({
      title: "Contact Urbanland Products | Sustainable Outdoor Furniture Manufacturer",
      description: "Get in touch with Urbanland Products for premium outdoor furniture solutions. Request a quote, discuss your project, or speak with our experts. Pan-India delivery and installation."
    });
    return () => cleanPageSEO();
  }, []);

  useEffect(() => {
    const subject = searchParams.get("subject");
    if (subject === "quote") {
      setFormData(prev => ({
        ...prev,
        message: "Hi, I am interested in requesting a quote for your architectural outdoor furniture."
      }));
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus("submitting");
    setTimeout(() => {
      setSubmitStatus("success");
      setTimeout(() => {
        setSubmitStatus("idle");
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          projectType: "",
          location: "",
          message: ""
        });
      }, 3000);
    }, 1200);
  };

  return (
    <div className="w-full bg-[#fcf9f4] text-[#1c1c19] font-body-md overflow-x-hidden pt-0">
      {/* Hero Section */}
      <section className="w-full relative bg-charcoal-industrial text-white overflow-hidden py-24 md:py-32 flex flex-col items-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 select-none pointer-events-none"
          style={{
            backgroundImage: `url(${getOptimizedImageUrl(
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDMVyDCCcVhDFnh94k-rL4MOje6nbAKdx57akQxQ2Y1xD-Nj_VLHcdfGLA5z9E1z_CCAvVjpoLUtUN5mKKCm5iC-dxtHvbQq1gJ7f3OIZb0ybpaBxUtmUqOpredMSR1DXBl61yg0CZMHQTaIUzSzkmeElIpj43uB8iVaR1g2mG81Qsubzi78EpOHVUxUIhoU_IjTaMO6AiSo-6ZQT9MkTsruk5lpXrCM7COyUQOuvnTMRrnpK29FMJqEAuKY7A4aHe9yZbJPytAt6Ci"
            )})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-industrial/80 to-charcoal-industrial" />

        <div className="relative w-full max-w-container-max px-margin-mobile md:px-margin-desktop flex flex-col items-center text-center gap-4">
          <span className="font-label-caps tracking-[0.2em] uppercase font-bold text-xs text-craftsman-gold bg-craftsman-gold/10 px-4 py-2 rounded-full border border-craftsman-gold/30">
            ✦ Get In Touch
          </span>
          <h1 className="font-display-lg-mobile text-4xl md:font-display-lg md:text-6xl lg:text-7xl text-white max-w-4xl uppercase font-bold tracking-tight">
            Contact Us
          </h1>
          <p className="font-body-lg text-white/80 max-w-3xl mt-2 leading-relaxed">
            Planning a residential, commercial, hospitality, or public space project? Share your requirements and receive expert recommendations and a tailored quotation within one business day.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <a
              href="#quote-form"
              className="bg-craftsman-gold text-charcoal-industrial px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold hover:bg-white transition-all duration-300 rounded-[4px] no-underline cursor-pointer"
            >
              Request a Quote
            </a>
            <a
              href="tel:+919322859776"
              className="border-2 border-white text-white px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-charcoal-industrial transition-all duration-300 rounded-[4px] no-underline"
            >
              Speak with Our Team
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-8 font-label-caps text-xs text-craftsman-gold">
            {["2-Year Warranty", "ISO 9001:2015 Certified", "Pan-India Delivery & Installation"].map((item, idx) => (
              <span key={idx} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-craftsman-gold/30">
                <span className="material-symbols-outlined text-[16px]">check</span> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-left">
        <div className="mb-16 text-left space-y-4">
          <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
            ✦ Contact Options
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-ink">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-craftsman-gold"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Card 1 */}
          <div className="bg-surface-container-low p-8 border border-industrial-charcoal/5 group hover:border-architectural-gold/40 transition-all duration-300">
            <span className="material-symbols-outlined text-4xl text-architectural-gold mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>
              request_quote
            </span>
            <h3 className="font-headline-md text-headline-md mb-4 text-industrial-charcoal">Request a Quote</h3>
            <p className="font-body-md text-on-surface-variant mb-6">
              Complete the form below for pricing, product recommendations, and project assistance.
            </p>
            <a
              className="text-forest-deep font-label-md uppercase tracking-wider border-b border-forest-deep/20 pb-1 hover:border-forest-deep transition-all no-underline inline-block cursor-pointer"
              href="#quote-form"
            >
              Go to Form
            </a>
          </div>
          {/* Card 2 */}
          <div className="bg-surface-container-low p-8 border border-industrial-charcoal/5 group hover:border-architectural-gold/40 transition-all duration-300">
            <span className="material-symbols-outlined text-4xl text-architectural-gold mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>
              chat
            </span>
            <h3 className="font-headline-md text-headline-md mb-4 text-industrial-charcoal">WhatsApp</h3>
            <p className="font-body-md text-on-surface-variant mb-6">
              Chat directly with our team for immediate queries or material availability updates.
            </p>
            <a
              className="text-forest-deep font-label-md uppercase tracking-wider border-b border-forest-deep/20 pb-1 hover:border-forest-deep transition-all no-underline inline-block cursor-pointer"
              href="https://wa.me/919322859776"
              target="_blank"
              rel="noreferrer"
            >
              Start Chat
            </a>
          </div>
          {/* Card 3 */}
          <div className="bg-surface-container-low p-8 border border-industrial-charcoal/5 group hover:border-architectural-gold/40 transition-all duration-300">
            <span className="material-symbols-outlined text-4xl text-architectural-gold mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>
              call
            </span>
            <h3 className="font-headline-md text-headline-md mb-4 text-industrial-charcoal">Call Us</h3>
            <p className="font-body-md text-on-surface-variant mb-2">Speak with an outdoor furniture specialist today.</p>
            <p className="font-label-sm text-on-surface-variant/70 uppercase">Monday–Saturday • 9:00 AM–6:00 PM</p>
            <div className="mt-6">
              <a
                className="text-forest-deep font-label-md uppercase tracking-wider border-b border-forest-deep/20 pb-1 hover:border-forest-deep transition-all no-underline inline-block"
                href="tel:+919322859776"
              >
                +91 93228 59776
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form & Why Section */}
      <section className="bg-surface-container py-stack-xl" id="quote-form">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Quote Form */}
          <div className="lg:col-span-7 bg-surface p-10 shadow-sm text-left">
            <div className="mb-8 text-left space-y-4">
              <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
                ✦ Enquiry Form
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-ink">
                Tell Us About Your Project
              </h2>
              <div className="w-24 h-1 bg-craftsman-gold"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-md uppercase text-industrial-charcoal opacity-70">Your name</label>
                  <input
                    className="w-full border-0 border-b border-outline-variant bg-transparent focus:ring-0 focus:border-architectural-gold transition-colors py-3 text-xs focus:outline-none"
                    placeholder="Your name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-md uppercase text-industrial-charcoal opacity-70">Company</label>
                  <input
                    className="w-full border-0 border-b border-outline-variant bg-transparent focus:ring-0 focus:border-architectural-gold transition-colors py-3 text-xs focus:outline-none"
                    placeholder="Company"
                    required
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-md uppercase text-industrial-charcoal opacity-70">Phone</label>
                  <input
                    className="w-full border-0 border-b border-outline-variant bg-transparent focus:ring-0 focus:border-architectural-gold transition-colors py-3 text-xs focus:outline-none"
                    placeholder="Phone"
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-md uppercase text-industrial-charcoal opacity-70">Business email</label>
                  <input
                    className="w-full border-0 border-b border-outline-variant bg-transparent focus:ring-0 focus:border-architectural-gold transition-colors py-3 text-xs focus:outline-none"
                    placeholder="Business email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-md uppercase text-industrial-charcoal opacity-70">Select Option</label>
                  <div className="relative" ref={dropdownRef}>
                    <div
                      className="w-full border-0 border-b border-outline-variant bg-transparent focus-within:border-architectural-gold transition-colors py-3 text-xs cursor-pointer flex justify-between items-center select-none"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <span className={formData.projectType ? "text-industrial-charcoal font-semibold" : "text-black/40"}>
                        {formData.projectType || "Select Option"}
                      </span>
                      <span className={`material-symbols-outlined text-[16px] text-industrial-charcoal/60 transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-architectural-gold" : ""}`}>
                        expand_more
                      </span>
                    </div>
                    <input type="hidden" name="projectType" required value={formData.projectType} />
                    {isDropdownOpen && (
                      <div className="absolute left-0 right-0 top-[100%] mt-1 bg-surface border border-outline-variant shadow-lg z-50 max-h-60 overflow-y-auto rounded-[2px]">
                        {["Residential Garden", "Commercial Plaza", "Public Infrastructure", "Hospitality / Resort"].map((option) => (
                          <div
                            key={option}
                            className="py-3 px-4 text-xs font-body-md text-industrial-charcoal hover:bg-architectural-gold/10 hover:text-industrial-charcoal transition-all duration-200 cursor-pointer border-l-2 border-transparent hover:border-architectural-gold"
                            onClick={() => {
                              setFormData({ ...formData, projectType: option });
                              setIsDropdownOpen(false);
                            }}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-label-md uppercase text-industrial-charcoal opacity-70">Location</label>
                  <input
                    className="w-full border-0 border-b border-outline-variant bg-transparent focus:ring-0 focus:border-architectural-gold transition-colors py-3 text-xs focus:outline-none"
                    placeholder="Location"
                    required
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label-md uppercase text-industrial-charcoal opacity-70">Project brief</label>
                <textarea
                  className="w-full border-0 border-b border-outline-variant bg-transparent focus:ring-0 focus:border-architectural-gold transition-colors py-3 text-xs focus:outline-none resize-none"
                  placeholder="Project brief"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button
                className={`w-full md:w-auto px-6 py-4 md:px-12 md:py-5 font-label-md text-xs md:text-sm uppercase tracking-[0.1em] md:tracking-[0.2em] transition-all flex items-center justify-center gap-4 cursor-pointer disabled:opacity-75 disabled:pointer-events-none ${
                  submitStatus === "success"
                    ? "bg-architectural-gold text-industrial-charcoal"
                    : "bg-forest-deep text-on-primary hover:bg-primary"
                }`}
                type="submit"
                disabled={submitStatus === "submitting"}
              >
                {submitStatus === "submitting" ? (
                  <>
                    PROCESSING...
                    <span className="material-symbols-outlined animate-spin">sync</span>
                  </>
                ) : submitStatus === "success" ? (
                  <>
                    Enquiry Sent
                    <span className="material-symbols-outlined">check_circle</span>
                  </>
                ) : (
                  <>
                    Send Enquiry
                    <span className="material-symbols-outlined">send</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Why Urbanland */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <div className="mb-12 text-left space-y-4">
              <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
                ✦ Key Advantages
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-ink">
                Why Choose Urbanland Products
              </h2>
              <div className="w-24 h-1 bg-craftsman-gold"></div>
            </div>

            <ul className="space-y-8 pl-0">
              <li className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-surface flex items-center justify-center text-architectural-gold border border-industrial-charcoal/10 group-hover:bg-architectural-gold group-hover:text-surface transition-colors duration-300">
                  <span className="font-headline-md">01</span>
                </div>
                <div>
                  <h4 className="font-label-md uppercase text-industrial-charcoal mb-1 font-semibold">Rapid Response</h4>
                  <p className="font-body-md text-on-surface-variant">Quotes and expert recommendations within one business day.</p>
                </div>
              </li>
              <li className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-surface flex items-center justify-center text-architectural-gold border border-industrial-charcoal/10 group-hover:bg-architectural-gold group-hover:text-surface transition-colors duration-300">
                  <span className="font-headline-md">02</span>
                </div>
                <div>
                  <h4 className="font-label-md uppercase text-industrial-charcoal mb-1 font-semibold">Sustainable Materials</h4>
                  <p className="font-body-md text-on-surface-variant">Environmentally conscious WPC, NFC Wood, and high-grade Aluminium.</p>
                </div>
              </li>
              <li className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-surface flex items-center justify-center text-architectural-gold border border-industrial-charcoal/10 group-hover:bg-architectural-gold group-hover:text-surface transition-colors duration-300">
                  <span className="font-headline-md">03</span>
                </div>
                <div>
                  <h4 className="font-label-md uppercase text-industrial-charcoal mb-1 font-semibold">Custom Built</h4>
                  <p className="font-body-md text-on-surface-variant">Bespoke manufacturing tailored to your project's unique dimensions.</p>
                </div>
              </li>
              <li className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-surface flex items-center justify-center text-architectural-gold border border-industrial-charcoal/10 group-hover:bg-architectural-gold group-hover:text-surface transition-colors duration-300">
                  <span className="font-headline-md">04</span>
                </div>
                <div>
                  <h4 className="font-label-md uppercase text-industrial-charcoal mb-1 font-semibold">End-to-End Service</h4>
                  <p className="font-body-md text-on-surface-variant">Design, manufacturing, delivery, and installation under one roof.</p>
                </div>
              </li>
              <li className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-surface flex items-center justify-center text-architectural-gold border border-industrial-charcoal/10 group-hover:bg-architectural-gold group-hover:text-surface transition-colors duration-300">
                  <span className="font-headline-md">05</span>
                </div>
                <div>
                  <h4 className="font-label-md uppercase text-industrial-charcoal mb-1 font-semibold">Proven Trust</h4>
                  <p className="font-body-md text-on-surface-variant">A preferred partner for prestigious commercial and public works.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-left opacity-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="mb-12 text-left space-y-4">
              <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
                ✦ Headquarters
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-ink">
                Visit Our Office
              </h2>
              <div className="w-24 h-1 bg-craftsman-gold"></div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h4 className="font-label-md uppercase tracking-wider text-architectural-gold mb-3">Office Location</h4>
                <p className="font-body-lg text-industrial-charcoal leading-relaxed max-w-md">
                  Urbanland Products, Unit No. 217, Gauri Complex, Above Bank of Baroda, Navghar, Vasai East, Maharashtra – 401202
                </p>
              </div>
              <div>
                <h4 className="font-label-md uppercase tracking-wider text-architectural-gold mb-3">Business Hours</h4>
                <p className="font-body-md text-on-surface-variant">Monday–Saturday</p>
                <p className="font-headline-md text-industrial-charcoal">9:00 AM – 6:00 PM</p>
                <p className="text-sm italic opacity-60 mt-2">Sundays &amp; Public Holidays: Closed</p>
              </div>
              <a
                className="inline-flex items-center gap-3 border border-industrial-charcoal px-8 py-4 font-label-md uppercase tracking-wider hover:bg-industrial-charcoal hover:text-surface transition-all no-underline"
                href="https://maps.google.com/?q=Unit+no+217,+Gauri+Complex,+Above+Bank+of+Baroda,+Navghar+Vasai+East,+Samarth+Krupa+Nagar,+Vasai+East,+Mumbai,+Vasai-Virar,+Maharashtra+401202"
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined">directions</span>
                Get Directions
              </a>
            </div>
          </div>
          <div className="aspect-video lg:aspect-square bg-surface-container-high relative overflow-hidden group">
            {/* Interactive Leaflet Map replacing the static placeholder */}
            <div className="w-full h-full relative" style={{ minHeight: "100%" }}>
              <MapContainer
                center={[19.3792, 72.8205]}
                zoom={14}
                zoomControl={false}
                scrollWheelZoom={true}
                style={{ width: "100%", height: "100%", minHeight: "400px", backgroundColor: "#e5e1d8", zIndex: 0 }}
              >
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                  attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
                />
                <Marker position={[19.3792, 72.8205]} icon={customIcon}>
                  <Popup>
                    <strong className="text-industrial-charcoal font-bold">Urbanland Products</strong>
                    <br />
                    <span className="text-industrial-charcoal text-xs">Unit no 217, Gauri Complex, Navghar Vasai East, Mumbai</span>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
            <div className="absolute inset-0 border-[16px] border-surface pointer-events-none z-10"></div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-industrial-charcoal text-surface py-stack-xl opacity-100">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-left">
          <div className="text-center mb-stack-lg space-y-4 flex flex-col items-center">
            <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
              ✦ FAQ
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-surface">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqsList.map((faq, index) => {
              // React-controlled state toggle
              const [isOpen, setIsOpen] = useState(index === 0); // First item open by default
              return (
                <div
                  key={index}
                  className={`bg-tertiary-container/30 border border-on-tertiary-container/10 transition-all duration-300 ${
                    isOpen ? "bg-tertiary-container/50" : ""
                  }`}
                >
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex justify-between items-center p-8 cursor-pointer text-left focus:outline-none border-none select-none bg-transparent"
                  >
                    <h3 className="font-headline-md text-surface pr-8">{faq.q}</h3>
                    <span
                      className={`material-symbols-outlined text-architectural-gold transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-8 pb-8 text-on-tertiary-container font-body-md">{faq.a}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
