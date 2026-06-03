import React, { useState, useEffect } from "react";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";
import mapIndia from "../../assets/map_india.png";

const faqsList = [
  {
    q: "How soon will I receive a quote?",
    a: "Most quotes are sent within 24 hours during standard business days."
  },
  {
    q: "Do you provide installation across India?",
    a: "Yes. We handle professional pan-India delivery and installation for all commercial, residential, and public projects."
  },
  {
    q: "Can I get samples or material swatches?",
    a: "Yes. We can arrange material samples (WPC, NFC Wood, and powder-coated metal finishes) for your project review."
  },
  {
    q: "Do you support green building certifications?",
    a: "Yes. Our long-life, highly recyclable WPC, NFC, and metal products help achieve IGBC, GRIHA, and LEED points."
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    whatsappPref: true,
    email: "",
    projectType: "Real Estate / Gated Community",
    location: "",
    details: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    updatePageSEO({
      title: "Contact Us | Get a Custom Quote for Sustainable Outdoor Furniture | Urbanland Products",
      description: "Get in touch with Urbanland Products for premium, sustainable outdoor furniture – benches, planter boxes, bus shelters and more. Request a custom quote, speak with our team or download brochures. Fast response guaranteed."
    });
    return () => cleanPageSEO();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.company && formData.phone && formData.location) {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-32 relative">
      {/* Decorative radial gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(44,95,46,0.06),transparent_65%)] pointer-events-none z-0" />
      <div className="absolute top-[30%] left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_bottom_left,rgba(201,168,76,0.04),transparent_65%)] pointer-events-none z-0" />

      {/* Header */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-20 relative z-10 text-center md:text-left">
        <p className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mb-3">— Let's Build Together</p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none text-[#1A1A1A] max-w-5xl">
          Get a Custom <br className="hidden sm:block" />
          <span className="text-[#C9A84C]">Quote & Specification.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#2D2D2D]/70 max-w-2xl leading-relaxed mt-6">
          Ready to transform your space with sustainable, high-quality outdoor systems? Provide your project scope details below, and our engineering team will deliver a customized quote within 24 hours.
        </p>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
          <div className="flex items-center gap-2 bg-[#EAE5DB]/45 px-4 py-2 rounded-full border border-black/[0.04] text-xs font-semibold text-[#2C5F2E] select-none hover:bg-[#2C5F2E]/5 transition-colors">
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>2-Year Guarantee</span>
          </div>
          <div className="flex items-center gap-2 bg-[#EAE5DB]/45 px-4 py-2 rounded-full border border-black/[0.04] text-xs font-semibold text-[#2C5F2E] select-none hover:bg-[#2C5F2E]/5 transition-colors">
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>ISO 9001:2015 Certified</span>
          </div>
          <div className="flex items-center gap-2 bg-[#EAE5DB]/45 px-4 py-2 rounded-full border border-black/[0.04] text-xs font-semibold text-[#2C5F2E] select-none hover:bg-[#2C5F2E]/5 transition-colors">
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Fast Quote Response</span>
          </div>
          <div className="flex items-center gap-2 bg-[#EAE5DB]/45 px-4 py-2 rounded-full border border-black/[0.04] text-xs font-semibold text-[#2C5F2E] select-none hover:bg-[#2C5F2E]/5 transition-colors">
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Pan-India Distribution</span>
          </div>
        </div>
      </section>

      {/* Split layout: details and form */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 relative z-10">
        {/* Left column: contact options & corporate details */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="bg-white rounded-[2.5rem] border border-black/[0.04] p-8 shadow-sm flex flex-col gap-6">
            <h2 className="text-xs font-black uppercase tracking-wider text-[#2C5F2E]">— Contact Options</h2>
            
            <div className="flex flex-col gap-4">
              {/* WhatsApp Us */}
              <a 
                href="https://wa.me/919322859776" 
                target="_blank" 
                rel="noreferrer"
                className="bg-[#F7F4EF]/45 hover:bg-[#2C5F2E]/5 rounded-2xl p-5 border border-black/[0.03] hover:border-[#2C5F2E]/25 transition-all duration-300 flex items-center justify-between group no-underline text-[#1A1A1A]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-600 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.031 14.05 1.01 11.433 1.01c-5.436 0-9.86 4.37-9.864 9.8 0 1.761.47 3.479 1.364 5.011L1.94 22.089l6.335-1.65c-1.64.92-3.1 1.4-4.8 1.4h-.057" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase text-black">Chat on WhatsApp</h3>
                    <p className="text-[10px] text-[#2D2D2D]/60 mt-0.5">Quick estimates & material swatches</p>
                    <span className="text-xs font-black text-[#2C5F2E] block mt-1">+91 93228 59776</span>
                  </div>
                </div>
                <span className="w-8 h-8 rounded-full bg-[#2C5F2E]/5 flex items-center justify-center text-xs font-bold text-[#2C5F2E] group-hover:bg-[#2C5F2E] group-hover:text-white transition-all">
                  →
                </span>
              </a>

              {/* Call Us */}
              <a 
                href="tel:+919322859776"
                className="bg-[#F7F4EF]/45 hover:bg-[#2C5F2E]/5 rounded-2xl p-5 border border-black/[0.03] hover:border-[#2C5F2E]/25 transition-all duration-300 flex items-center justify-between group no-underline text-[#1A1A1A]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2C5F2E]/10 text-[#2C5F2E] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase text-black">Speak With Sales</h3>
                    <p className="text-[10px] text-[#2D2D2D]/60 mt-0.5">Mon–Sat, 9 AM – 6 PM IST</p>
                    <span className="text-xs font-black text-[#2C5F2E] block mt-1">+91 93228 59776</span>
                  </div>
                </div>
                <span className="w-8 h-8 rounded-full bg-[#2C5F2E]/5 flex items-center justify-center text-xs font-bold text-[#2C5F2E] group-hover:bg-[#2C5F2E] group-hover:text-white transition-all">
                  →
                </span>
              </a>

              {/* Email Us */}
              <a 
                href="mailto:info@urbanland.in"
                className="bg-[#F7F4EF]/45 hover:bg-[#C9A84C]/5 rounded-2xl p-5 border border-black/[0.03] hover:border-[#C9A84C]/25 transition-all duration-300 flex items-center justify-between group no-underline text-[#1A1A1A]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 text-[#C9A84C] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase text-black">Email Operations</h3>
                    <p className="text-[10px] text-[#2D2D2D]/60 mt-0.5">For formal RFPs, specs & BOQs</p>
                    <span className="text-xs font-black text-[#C9A84C] block mt-1">info@urbanland.in</span>
                  </div>
                </div>
                <span className="w-8 h-8 rounded-full bg-[#C9A84C]/5 flex items-center justify-center text-xs font-bold text-[#C9A84C] group-hover:bg-[#C9A84C] group-hover:text-white transition-all">
                  →
                </span>
              </a>
            </div>
          </div>

          <div className="bg-[#EAE5DB]/45 rounded-[2.5rem] border border-black/[0.03] p-8 shadow-inner text-left">
            <h3 className="text-xs font-black uppercase tracking-wider text-black mb-4">— Why Trust Urbanland</h3>
            <ul className="text-xs text-[#2D2D2D]/75 space-y-3.5">
              <li className="flex items-start gap-2.5">
                <span className="text-[#2C5F2E] flex items-center justify-center shrink-0 w-4 h-4 rounded-full bg-[#2C5F2E]/10 select-none mt-0.5">
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>Fast quote turnaround (usually within 24 hours)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#2C5F2E] flex items-center justify-center shrink-0 w-4 h-4 rounded-full bg-[#2C5F2E]/10 select-none mt-0.5">
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>Expert advice on sustainable WPC, NFC Wood & structural metals</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#2C5F2E] flex items-center justify-center shrink-0 w-4 h-4 rounded-full bg-[#2C5F2E]/10 select-none mt-0.5">
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>Full customization to match your project's architectural language</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#2C5F2E] flex items-center justify-center shrink-0 w-4 h-4 rounded-full bg-[#2C5F2E]/10 select-none mt-0.5">
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>End-to-end support — from BOQ templates to chemical anchoring</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#2C5F2E] flex items-center justify-center shrink-0 w-4 h-4 rounded-full bg-[#2C5F2E]/10 select-none mt-0.5">
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>50+ premium commercial and residential projects delivered</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right column: lead capture form */}
        <div className="lg:col-span-7 bg-white rounded-[2.5rem] border border-black/[0.04] p-8 md:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.025)]">
          {submitted ? (
            <div className="h-full flex flex-col justify-center items-center text-center py-16">
              <div className="w-16 h-16 rounded-full bg-[#2C5F2E]/10 text-[#2C5F2E] flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-black uppercase mb-3">Quote Request Sent!</h3>
              <p className="text-xs sm:text-sm text-black/60 max-w-sm leading-relaxed mb-6">
                Thank you for choosing Urbanland Products. Our commercial sales manager will review your technical project requirements and email a custom quotation to **{formData.email}** within 24 hours.
              </p>
              <button 
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    company: "",
                    phone: "",
                    whatsappPref: true,
                    email: "",
                    projectType: "Real Estate / Gated Community",
                    location: "",
                    details: ""
                  });
                }}
                className="px-6 py-3 bg-[#2C5F2E] text-white rounded-full font-bold uppercase tracking-wider text-[10px] hover:bg-[#2D2D2D] transition-colors cursor-pointer"
              >
                Configure Another Quote
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex items-center gap-3 mb-2 pb-4 border-b border-black/[0.06]">
                <div className="w-10 h-10 rounded-xl bg-[#2C5F2E]/10 text-[#2C5F2E] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-base font-black text-black uppercase leading-none">Configure Your Quote</h3>
                  <p className="text-[9px] text-black/45 uppercase tracking-wider font-bold mt-1">Pan-India Project Support</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-[9px] font-black uppercase tracking-wider text-black/50">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Aditya Verma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#F7F4EF]/45 border border-black/10 rounded-full px-5 py-3.5 text-xs text-black focus:outline-none focus:border-[#2C5F2E] focus:ring-1 focus:ring-[#2C5F2E]/10 font-medium transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-[9px] font-black uppercase tracking-wider text-black/50">Company / Organization *</label>
                  <input
                    type="text"
                    required
                    placeholder="DLF Landscapes Group"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#F7F4EF]/45 border border-black/10 rounded-full px-5 py-3.5 text-xs text-black focus:outline-none focus:border-[#2C5F2E] focus:ring-1 focus:ring-[#2C5F2E]/10 font-medium transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-[9px] font-black uppercase tracking-wider text-black/50">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#F7F4EF]/45 border border-black/10 rounded-full px-5 py-3.5 text-xs text-black focus:outline-none focus:border-[#2C5F2E] focus:ring-1 focus:ring-[#2C5F2E]/10 font-medium transition-all"
                  />
                  <label className="flex items-center gap-2 mt-1 select-none cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.whatsappPref}
                      onChange={(e) => setFormData({ ...formData, whatsappPref: e.target.checked })}
                      className="rounded border-gray-300 text-[#2C5F2E] focus:ring-[#2C5F2E] cursor-pointer"
                    />
                    <span className="text-[10px] font-semibold text-black/50">Prefer quotes via WhatsApp</span>
                  </label>
                </div>
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-[9px] font-black uppercase tracking-wider text-black/50">Work Email Address</label>
                  <input
                    type="email"
                    placeholder="aditya@dlf.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#F7F4EF]/45 border border-black/10 rounded-full px-5 py-3.5 text-xs text-black focus:outline-none focus:border-[#2C5F2E] focus:ring-1 focus:ring-[#2C5F2E]/10 font-medium transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-[9px] font-black uppercase tracking-wider text-black/50">Project Type *</label>
                  <div className="relative">
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#F7F4EF]/45 border border-black/10 rounded-full px-5 py-3.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#2C5F2E] focus:ring-1 focus:ring-[#2C5F2E]/10 font-medium transition-all appearance-none cursor-pointer"
                    >
                      <option value="Real Estate / Gated Community">Real Estate / Gated Community</option>
                      <option value="Hospitality / Hotel / Resort">Hospitality / Hotel / Resort</option>
                      <option value="Municipal / Smart City">Municipal / Smart City</option>
                      <option value="Healthcare / Hospital">Healthcare / Hospital</option>
                      <option value="Education / University">Education / University</option>
                      <option value="Other">Other</option>
                    </select>
                    <span className="absolute right-5 top-1/2 -translate-y-1/2 text-black/40 pointer-events-none text-xs">▼</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-[9px] font-black uppercase tracking-wider text-black/50">Project Location / City *</label>
                  <input
                    type="text"
                    required
                    placeholder="Gurgaon, NCR"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-[#F7F4EF]/45 border border-black/10 rounded-full px-5 py-3.5 text-xs text-black focus:outline-none focus:border-[#2C5F2E] focus:ring-1 focus:ring-[#2C5F2E]/10 font-medium transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-[9px] font-black uppercase tracking-wider text-black/50">Brief Project Details & Quantities</label>
                <textarea
                  placeholder="Example: Need 80 WPC benches and 60 planter boxes for a luxury township in Pune..."
                  rows="4"
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full bg-[#F7F4EF]/45 border border-black/10 rounded-[1.5rem] px-5 py-4 text-xs text-black focus:outline-none focus:border-[#2C5F2E] focus:ring-1 focus:ring-[#2C5F2E]/10 font-medium resize-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4.5 bg-[#2C5F2E] text-white rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#2D2D2D] transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg mt-2 flex items-center justify-center gap-2"
              >
                <span>Generate Custom Quote</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Section 4: Our Corporate Office */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24 relative z-10">
        <div className="bg-white rounded-[2.5rem] border border-black/[0.04] p-8 md:p-16 shadow-[0_8px_30px_rgba(0,0,0,0.015)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 text-left">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— Corporate Headquarters</span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1A1A1A] mb-6 leading-none">
                Visit Our Office
              </h2>
              <div className="text-xs sm:text-sm text-[#2D2D2D]/75 leading-relaxed space-y-4">
                <p className="font-bold text-black text-sm uppercase tracking-wider">
                  Urbanland Products
                </p>
                <p className="font-medium text-black/70">
                  Unit no 217, Gauri Complex,<br/>
                  Above Bank of Baroda,<br/>
                  Navghar Vasai East, Samarth Krupa Nagar,<br/>
                  Vasai East, Mumbai, Vasai-Virar,<br/>
                  Maharashtra 401202
                </p>
                <div className="border-t border-black/[0.05] pt-4 mt-4 flex flex-col gap-1.5 text-xs text-black/50 font-bold uppercase tracking-wider text-left">
                  <span><strong>Business Hours:</strong> Monday to Saturday | 9:00 AM – 6:00 PM</span>
                  <span><strong>Distribution Hubs:</strong> Mumbai, Delhi NCR, Bangalore, Pune</span>
                </div>
              </div>

              <div className="mt-8">
                <a 
                  href="https://maps.google.com/?q=Unit+no+217,+Gauri+Complex,+Above+Bank+of+Baroda,+Navghar+Vasai+East,+Samarth+Krupa+Nagar,+Vasai+East,+Mumbai,+Vasai-Virar,+Maharashtra+401202"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-6 py-4 bg-[#EAE5DB] hover:bg-black hover:text-white text-[#2D2D2D] rounded-full font-bold uppercase tracking-wider text-[10px] transition-all border border-black/[0.04] cursor-pointer no-underline"
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </div>

            {/* Nationwide distribution map */}
            <div className="lg:col-span-6 relative rounded-[2.5rem] overflow-hidden select-none bg-[#EAE5DB]/20 p-6 shadow-sm border border-black/[0.04] aspect-[4/3] flex items-center justify-center">
              <img src={mapIndia} alt="Urbanland nationwide supply footprint map of India" className="max-h-full object-contain max-w-full" />
              <div className="absolute bottom-6 right-6 bg-black/45 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-white text-[9px] font-black uppercase tracking-widest pointer-events-none">
                ✦ Pan-India Installation Network
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Block */}
      <section className="max-w-[850px] mx-auto px-6 mb-12 relative z-10">
        <div className="text-center mb-12">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— FAQ</span>
          <h2 className="text-3xl font-black uppercase tracking-tight text-[#1A1A1A] leading-none">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqsList.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx}
                className={`bg-white rounded-[2rem] border transition-all duration-500 overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.005)] ${
                  isOpen 
                    ? "border-[#2C5F2E]/40 ring-1 ring-[#2C5F2E]/10" 
                    : "border-black/[0.03] hover:border-black/10"
                }`}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-6 md:px-8 flex justify-between items-center text-left cursor-pointer focus:outline-none border-none select-none group bg-white"
                >
                  <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-[#1A1A1A] group-hover:text-[#2C5F2E] pr-6 transition-colors leading-snug">
                    {faq.q}
                  </h3>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 shrink-0 select-none ${
                    isOpen ? "bg-[#2C5F2E] text-white rotate-45" : "bg-[#F7F4EF] text-[#2D2D2D] group-hover:bg-[#2C5F2E]/10"
                  }`}>
                    ＋
                  </span>
                </button>

                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[300px] border-t border-black/[0.05]" : "max-h-0"
                }`}>
                  <p className="px-6 py-6 md:px-8 text-xs sm:text-sm leading-relaxed text-[#2D2D2D]/75 bg-[#F7F4EF]/20 text-left">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Contact;

