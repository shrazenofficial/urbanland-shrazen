import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const ProductInquiryModal = ({ product, onClose }) => {
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
    return () => {
      document.body.style.overflow = "unset";
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

  const productImage = product.image || "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80";

  return (
    <div data-lenis-prevent onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      {/* Modal Container */}
      <div onClick={(e) => e.stopPropagation()} className="relative bg-[#F7F4EF] w-full max-w-[1050px] max-h-[90vh] md:h-[75vh] rounded-[2rem] md:rounded-[2.5rem] shadow-2xl overflow-y-auto md:overflow-hidden flex flex-col md:flex-row border border-black/5 animate-slideUp">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8.5 h-8.5 md:w-9.5 md:h-9.5 rounded-full bg-white/90 text-black hover:bg-[#2C5F2E] hover:text-white flex justify-center items-center shadow-md border border-black/5 transition-all active:scale-90 cursor-pointer text-lg md:text-xl"
          aria-label="Close modal"
        >
          <MdClose />
        </button>

        {/* LEFT COLUMN: Product Image Only */}
        <div className="w-full md:w-1/2 h-[250px] sm:h-[300px] md:h-full border-b md:border-b-0 md:border-r border-[#2D2D2D]/10 bg-white flex items-center justify-center p-6 md:p-10">
          <img
            src={productImage}
            alt={`${product.title} — Urbanland Products`}
            className="max-h-full max-w-full object-contain select-none"
            style={{ mixBlendMode: 'multiply', filter: 'brightness(1.05) contrast(1.02)' }}
          />
        </div>

        {/* RIGHT COLUMN: Enquiry Form */}
        <div className="w-full md:w-1/2 h-auto md:h-full md:overflow-y-auto bg-[#F7F4EF] p-5 sm:p-6 md:p-8 flex flex-col justify-center scrollbar-thin">
          {formSuccess ? (
            <div className="flex flex-col items-center text-center gap-5 py-8 px-4 animate-scaleIn">
              <FaCheckCircle className="text-[#2C5F2E] text-5xl md:text-6xl animate-pulse" />
              <h3 className="text-lg md:text-xl font-black text-[#2D2D2D] tracking-tight uppercase leading-none mt-2">
                Inquiry Sent
              </h3>
              <p className="text-[11px] md:text-xs text-[#2D2D2D]/80 leading-relaxed max-w-[380px]">
                Thank you! Your query has been logged. An Urbanland LLP project manager will contact you with custom quotes within 24 hours.
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
                <p className="text-[9px] font-bold uppercase tracking-widest text-[#2C5F2E] mb-1">— Product Enquiry</p>
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-[#1A1A1A]">
                  Enquire about {product.title}
                </h3>
                <p className="text-[11px] text-[#2D2D2D]/70 mt-0.5">
                  Fill in your details and we'll get back to you with pricing & specs.
                </p>
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
                    "Submit Enquiry"
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
