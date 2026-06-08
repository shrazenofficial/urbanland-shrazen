import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const ProductInquiryModal = ({ product, onClose }) => {
  const [activeTab, setActiveTab] = useState("materials");
  const [selectedWood, setSelectedWood] = useState(
    product.options?.wood?.[0] || "Default Timber"
  );
  const [selectedMetal, setSelectedMetal] = useState(
    product.options?.metal?.[0] || "Default Coating"
  );
  const [selectedModule, setSelectedModule] = useState(
    product.options?.modules?.[0] || "Standard Unit"
  );
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    firm: "",
    location: "",
    quantity: "1-5",
    message: "",
  });

  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    if (window.lenis) {
      window.lenis.stop();
    }
    return () => {
      document.body.style.overflow = "unset";
      if (window.lenis) {
        window.lenis.start();
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSuccess(true);
    }, 1200);
  };

  if (!product) return null;

  const gallery = Array.isArray(product.gallery) && product.gallery.length > 0
    ? product.gallery
    : [product.image || "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80"];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      {/* Modal Container */}
      <div className="relative bg-[#F7F4EF] w-full max-w-[1050px] max-h-[96vh] md:h-[82vh] rounded-[2rem] md:rounded-[2.5rem] shadow-2xl overflow-y-auto md:overflow-hidden flex flex-col md:flex-row border border-black/5 animate-slideUp">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8.5 h-8.5 md:w-9.5 md:h-9.5 rounded-full bg-white/90 text-black hover:bg-[#2C5F2E] hover:text-white flex justify-center items-center shadow-md border border-black/5 transition-all active:scale-90 cursor-pointer text-lg md:text-xl"
          aria-label="Close modal"
        >
          <MdClose />
        </button>

        {/* LEFT COLUMN: Product Specifications & Gallery (Scrollable on desktop, inline stack on mobile) */}
        <div className="w-full md:w-1/2 h-auto md:h-full md:overflow-y-auto border-b md:border-b-0 md:border-r border-[#2D2D2D]/10 bg-white p-5 sm:p-6 md:p-8 flex flex-col gap-4.5 scrollbar-thin">
          <div>
            <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#2C5F2E] bg-[#2C5F2E]/5 border border-[#2C5F2E]/10 rounded-full px-3 py-1 inline-block mb-2">
              {product.category}
            </span>
            <h2 className="text-xl md:text-2xl font-light text-[#1A1A1A] tracking-tight leading-none mb-1.5">
              {product.title}
            </h2>
            {product.tagline && (
              <p className="text-xs font-medium text-[#C9A84C] tracking-wide mb-2">
                "{product.tagline}"
              </p>
            )}
            {product.line && (
              <p className="text-[11px] md:text-xs text-[#2D2D2D]/75 leading-relaxed">
                {product.line}
              </p>
            )}
          </div>

          {/* Gallery display */}
          <div className="flex flex-col gap-2.5">
            <div className="w-full h-[150px] sm:h-[180px] md:h-[220px] rounded-xl overflow-hidden bg-black/[0.015] border border-black/[0.04] flex items-center justify-center relative">
              <img
                src={gallery[activeImageIndex]}
                alt={`${product.title} gallery view`}
                className="max-h-full max-w-full object-contain p-2"
              />
            </div>
            {gallery.length > 1 && (
              <div className="flex gap-2 overflow-x-auto py-1 scrollbar-none">
                {gallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-11 h-11 md:w-12 md:h-12 rounded-lg border flex-shrink-0 overflow-hidden transition-all bg-black/[0.01] ${
                      activeImageIndex === idx
                        ? "border-[#2C5F2E] scale-95 shadow-sm"
                        : "border-black/[0.06] hover:border-black/30"
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Interactive Parameters Selector */}
          {((product.options?.wood && product.options.wood.length > 0) ||
            (product.options?.metal && product.options.metal.length > 0) ||
            (product.options?.modules && product.options.modules.length > 0)) && (
            <div className="border-t border-b border-[#2D2D2D]/10 py-4 flex flex-col gap-3.5 select-none">
              <p className="text-[9px] font-black uppercase tracking-widest text-[#2D2D2D]/55 mb-0.5">
                Configure Product Specs
              </p>

              {product.options?.wood && product.options.wood.length > 0 && (
                <div className="flex flex-col gap-1.5">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#2D2D2D]/60">
                    Finish variant / Timber:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.options.wood.map((option) => (
                      <button
                        key={option}
                        onClick={() => setSelectedWood(option)}
                        className={`px-2.5 py-1.2 rounded-md text-[9px] font-medium tracking-wide border transition-all cursor-pointer ${
                          selectedWood === option
                            ? "bg-[#2C5F2E] text-white border-[#2C5F2E] shadow-sm"
                            : "bg-[#F7F4EF]/40 text-[#2D2D2D] border-black/[0.08] hover:border-black/30"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {product.options?.metal && product.options.metal.length > 0 && (
                <div className="flex flex-col gap-1.5">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#2D2D2D]/60">
                    Coating / Paint Finish:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.options.metal.map((option) => (
                      <button
                        key={option}
                        onClick={() => setSelectedMetal(option)}
                        className={`px-2.5 py-1.2 rounded-md text-[9px] font-medium tracking-wide border transition-all cursor-pointer ${
                          selectedMetal === option
                            ? "bg-[#2C5F2E] text-white border-[#2C5F2E] shadow-sm"
                            : "bg-[#F7F4EF]/40 text-[#2D2D2D] border-black/[0.08] hover:border-black/30"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {product.options?.modules && product.options.modules.length > 0 && (
                <div className="flex flex-col gap-1.5">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#2D2D2D]/60">
                    Modular Component Assembly:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.options.modules.map((option) => (
                      <button
                        key={option}
                        onClick={() => setSelectedModule(option)}
                        className={`px-2.5 py-1.2 rounded-md text-[9px] font-medium tracking-wide border transition-all cursor-pointer ${
                          selectedModule === option
                            ? "bg-[#2C5F2E] text-white border-[#2C5F2E] shadow-sm"
                            : "bg-[#F7F4EF]/40 text-[#2D2D2D] border-black/[0.08] hover:border-black/30"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Technical Specifications Tabs */}
          {product.specifications && (
            <div className="flex flex-col gap-3">
              <div className="flex border-b border-[#2D2D2D]/10 gap-1">
                {Object.keys(product.specifications).map((specKey) => (
                  <button
                    key={specKey}
                    onClick={() => setActiveTab(specKey)}
                    className={`pb-1.5 px-2.5 text-[9px] font-bold uppercase tracking-wider transition-all border-b-2 -mb-[1px] cursor-pointer ${
                      activeTab === specKey
                        ? "border-[#2C5F2E] text-[#2C5F2E]"
                        : "border-transparent text-[#2D2D2D]/55 hover:text-black"
                    }`}
                  >
                    {specKey}
                  </button>
                ))}
              </div>
              <div className="text-[11px] text-[#2D2D2D]/85 leading-relaxed bg-[#F7F4EF]/35 p-3 rounded-lg border border-black/[0.03]">
                {product.specifications[activeTab] || "Standard materials apply."}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Contact / Quote Request Form (Scrollable on desktop, inline stack on mobile) */}
        <div className="w-full md:w-1/2 h-auto md:h-full md:overflow-y-auto bg-[#F7F4EF] p-5 sm:p-6 md:p-8 flex flex-col justify-center scrollbar-thin">
          {formSuccess ? (
            <div className="flex flex-col items-center text-center gap-5 py-8 px-4 animate-scaleIn">
              <FaCheckCircle className="text-[#2C5F2E] text-5xl md:text-6xl animate-pulse" />
              <h3 className="text-lg md:text-xl font-black text-[#2D2D2D] tracking-tight uppercase leading-none mt-2">
                Inquiry Sent
              </h3>
              <p className="text-[11px] md:text-xs text-[#2D2D2D]/80 leading-relaxed max-w-[380px]">
                Thank you! Your architectural query has been logged. An Urbanland LLP project manager will verify structural configuration details, check shipping coordinates to <span className="font-bold text-[#2C5F2E]">{formData.location}</span>, and contact you with custom quotes within 24 hours.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-[#2C5F2E] text-white rounded-full font-bold uppercase tracking-wider text-[10px] hover:bg-[#2D2D2D] active:scale-95 transition-all duration-300 cursor-pointer mt-3 shadow-md"
              >
                Close Window
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4.5">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-widest text-[#2C5F2E] mb-1">— Project Estimations</p>
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-[#1A1A1A]">
                  Request pricing & spec sheets
                </h3>
                <p className="text-[11px] text-[#2D2D2D]/70 mt-0.5">
                  Fill in the details to specify <strong className="text-black">{product.title}</strong> for your landscape layout.
                </p>
              </div>

              {/* Active config visual helper */}
              <div className="bg-[#2D2D2D]/5 rounded-lg p-3 border border-[#2D2D2D]/5 flex flex-col gap-0.5 text-[9px] text-[#2D2D2D]/85 font-mono select-none">
                <span className="font-bold uppercase tracking-wider text-[#2D2D2D]/40 text-[8px] block mb-0.5">Parameters:</span>
                <p>▸ MODEL: {product.title}</p>
                <p>▸ FINISH: {selectedWood}</p>
                <p>▸ COATING: {selectedMetal}</p>
                <p>▸ MODULE: {selectedModule}</p>
              </div>

              <form onSubmit={handleFormSubmit} className="flex flex-col gap-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Name */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[8.5px] font-black uppercase tracking-widest text-[#2D2D2D]/60" htmlFor="name">Full Name *</label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white hover:bg-white focus:bg-white border border-black/[0.08] focus:border-[#2C5F2E] px-3.5 py-2 rounded-lg text-[11px] focus:outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  {/* Email */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[8.5px] font-black uppercase tracking-widest text-[#2D2D2D]/60" htmlFor="email">Business Email *</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white hover:bg-white focus:bg-white border border-black/[0.08] focus:border-[#2C5F2E] px-3.5 py-2 rounded-lg text-[11px] focus:outline-none transition-all"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Firm */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[8.5px] font-black uppercase tracking-widest text-[#2D2D2D]/60" htmlFor="firm">Architecture/Builder *</label>
                    <input
                      required
                      type="text"
                      id="firm"
                      name="firm"
                      value={formData.firm}
                      onChange={handleInputChange}
                      className="w-full bg-white hover:bg-white focus:bg-white border border-black/[0.08] focus:border-[#2C5F2E] px-3.5 py-2 rounded-lg text-[11px] focus:outline-none transition-all"
                      placeholder="Company name"
                    />
                  </div>
                  {/* Location */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[8.5px] font-black uppercase tracking-widest text-[#2D2D2D]/60" htmlFor="location">Project Location *</label>
                    <input
                      required
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full bg-white hover:bg-white focus:bg-white border border-black/[0.08] focus:border-[#2C5F2E] px-3.5 py-2 rounded-lg text-[11px] focus:outline-none transition-all"
                      placeholder="City, State"
                    />
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex flex-col gap-1">
                  <label className="text-[8.5px] font-black uppercase tracking-widest text-[#2D2D2D]/60" htmlFor="quantity">Quantity Required *</label>
                  <select
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-black/[0.08] focus:border-[#2C5F2E] px-3.5 py-2 rounded-lg text-[11px] focus:outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="1-5">1 - 5 units</option>
                    <option value="6-15">6 - 15 units</option>
                    <option value="16-40">16 - 40 units</option>
                    <option value="41+">41+ units (Large-scale public supply)</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label className="text-[8.5px] font-black uppercase tracking-widest text-[#2D2D2D]/60" htmlFor="message">Custom Query</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="2"
                    className="w-full bg-white hover:bg-white focus:bg-white border border-black/[0.08] focus:border-[#2C5F2E] px-3.5 py-2 rounded-lg text-[11px] focus:outline-none transition-all resize-none"
                    placeholder="Describe custom dimension needs or delivery coordinates..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="w-full py-3 bg-[#2C5F2E] text-white rounded-full font-bold uppercase tracking-wider text-[10px] hover:bg-[#2D2D2D] hover:text-[#C9A84C] active:scale-95 transition-all duration-300 cursor-pointer flex justify-center items-center gap-2 mt-1 shadow-sm"
                >
                  {formSubmitting ? (
                    <>
                      <svg className="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Submit Quote Inquiry"
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductInquiryModal;
