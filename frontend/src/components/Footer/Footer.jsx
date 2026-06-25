import { useState } from "react";
import { FaBehance, FaInstagram, FaDribbble } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
import MarqueeText from '../Marquee/MarqueeText';

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    if (window.innerWidth >= 768) return;
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section className='w-full h-auto px-6 pt-24 pb-16 bg-[#2D2D2D] border-t border-[#F7F4EF]/10'>
      {/* Top segment with Call to Action marquee */}
      <div className='flex flex-col md:flex-row w-full h-auto justify-between border-b pb-8 border-[#F7F4EF]/15'>
        <p className='text-[.7rem] text-[#F7F4EF]/90 choose-subtitle mt-4'>
          Interested in transforming your space?<br />
          Explore premium urban furniture solutions by Urbanland<span>®</span>
        </p>
      </div>
      <div className="text-[#C9A84C] py-4">
        <MarqueeText />
      </div>

      {/* 4-Column Sitemap Grid */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 mt-16 text-[#F7F4EF]/80 border-b border-[#F7F4EF]/15 pb-16'>
        {/* Column 1: Brand */}
        <div className="flex flex-col gap-4 border-b border-[#F7F4EF]/10 pb-6 md:border-0 md:pb-0">
          <h3 className="text-[#C9A84C] text-lg font-bold uppercase tracking-wider">Urbanland Products</h3>
          <p className="text-sm text-[#F7F4EF]/75 leading-relaxed font-light">
            Outdoor & Urban Furniture Manufacturer in India
          </p>
          <p className="text-sm text-[#F7F4EF]/55 leading-relaxed font-light">
            Vasai Virar, Maharashtra | ISO 9001:2015 Certified
          </p>
        </div>

        {/* Column 2: Products */}
        <div className="flex flex-col gap-0 md:gap-4 border-b border-[#F7F4EF]/10 pb-4 md:border-0 md:pb-0">
          <button
            onClick={() => toggleSection("products")}
            className="flex items-center justify-between w-full text-left md:pointer-events-none focus:outline-none py-3 md:py-0"
          >
            <h3 className="text-[#C9A84C] text-sm font-bold uppercase tracking-wider">Products</h3>
            <svg
              className={`w-4 h-4 text-[#C9A84C] transition-transform duration-300 md:hidden ${
                openSection === "products" ? "rotate-180" : ""
              }`}
              fill="none; stroke=currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <ul
            className={`transition-all duration-300 ease-in-out overflow-hidden flex flex-col gap-2.5 text-sm text-[#F7F4EF]/75 list-none p-0 m-0 font-light ${
              openSection === "products"
                ? "max-h-[600px] opacity-100 mt-2 pb-4"
                : "max-h-0 opacity-0 md:max-h-[1000px] md:opacity-100 md:mt-0"
            }`}
          >
            <li><Link to="/products/benches" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75 text-sm">Outdoor Benches</Link></li>
            <li><Link to="/products/planters" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Concrete Planters</Link></li>
            <li><Link to="/products/dustbins" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Litter & Recycling Bins</Link></li>
            <li><Link to="/products/bus-shelters" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Smart Bus Shelters</Link></li>
            <li><Link to="/products/car-shelters" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Premium Car Shelters</Link></li>
            <li><Link to="/products/canteen-tables" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Canteen Tables</Link></li>
            <li><Link to="/products/cabanas" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Luxury Cabanas</Link></li>
            <li><Link to="/products/poolside-loungers" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Poolside Loungers</Link></li>
            <li><Link to="/products/wicker-furniture" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Wicker Furniture</Link></li>
            <li><Link to="/products/wicker-living-sets" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Wicker Living Sets</Link></li>
            <li><Link to="/products/wicker-dining-sets" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Wicker Dining Sets</Link></li>
            <li><Link to="/products/metal-wooden-furniture" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Metal & Wooden Furniture</Link></li>
            <li><Link to="/products/ss-bollards" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">SS Bollards</Link></li>
            <li><Link to="/products/pergolas" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Architectural Pergolas</Link></li>
            <li><Link to="/products/gazebos" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Elegant Gazebos</Link></li>
            <li><Link to="/products/pre-fab-homes" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Pre Fab Homes</Link></li>
          </ul>
        </div>

        {/* Column 3: Solutions */}
        <div className="flex flex-col gap-0 md:gap-4 border-b border-[#F7F4EF]/10 pb-4 md:border-0 md:pb-0">
          <button
            onClick={() => toggleSection("solutions")}
            className="flex items-center justify-between w-full text-left md:pointer-events-none focus:outline-none py-3 md:py-0"
          >
            <h3 className="text-[#C9A84C] text-sm font-bold uppercase tracking-wider">Solutions</h3>
            <svg
              className={`w-4 h-4 text-[#C9A84C] transition-transform duration-300 md:hidden ${
                openSection === "solutions" ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <ul
            className={`transition-all duration-300 ease-in-out overflow-hidden flex flex-col gap-2.5 text-sm text-[#F7F4EF]/75 list-none p-0 m-0 font-light ${
              openSection === "solutions"
                ? "max-h-[300px] opacity-100 mt-2 pb-4"
                : "max-h-0 opacity-0 md:max-h-[1000px] md:opacity-100 md:mt-0"
            }`}
          >
            <li><Link to="/solutions/real-estate" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Real Estate & Townships</Link></li>
            <li><Link to="/solutions/hotels-resorts" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Hotels & Resorts</Link></li>
            <li><Link to="/solutions/hospitals" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Hospitals & Healthcare</Link></li>
            <li><Link to="/solutions/education" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Schools & Universities</Link></li>
            <li><Link to="/solutions/smart-cities" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Municipal & Smart Cities</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact & Trust Badges */}
        <div className="flex flex-col gap-0 md:gap-4 pb-4 md:pb-0">
          <button
            onClick={() => toggleSection("contact")}
            className="flex items-center justify-between w-full text-left md:pointer-events-none focus:outline-none py-3 md:py-0"
          >
            <h3 className="text-[#C9A84C] text-sm font-bold uppercase tracking-wider">Contact & Trust</h3>
            <svg
              className={`w-4 h-4 text-[#C9A84C] transition-transform duration-300 md:hidden ${
                openSection === "contact" ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden flex flex-col gap-4 ${
              openSection === "contact"
                ? "max-h-[300px] opacity-100 mt-2 pb-4"
                : "max-h-0 opacity-0 md:max-h-[1000px] md:opacity-100 md:mt-0"
            }`}
          >
            <div className="flex flex-col gap-2.5 text-sm text-[#F7F4EF]/75 leading-relaxed font-light">
              <p>Phone: +91 20 6789 2200</p>
              <p>Email: info@urbanlandproducts.com</p>
              <p>WhatsApp: +91 97732 46830</p>
              <p>Address: Vasai Virar, Maharashtra</p>
            </div>
            <div className="flex flex-col gap-1.5 mt-3 pt-3 border-t border-[#F7F4EF]/10 text-[10px] text-[#F7F4EF]/60 font-semibold uppercase tracking-wider">
              <span className="flex items-center gap-1.5">★ ISO 9001:2015 Certified</span>
              <span className="flex items-center gap-1.5">✓ 2-Year Guarantee</span>
              <span className="flex items-center gap-1.5">Made in India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright bar with crawlable keyword paragraph */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center mt-8 gap-6 pt-4 text-[11px] text-[#F7F4EF]/45">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <p>© 2026 Urbanland Products. All rights reserved.   |   <Link to="/privacy-policy" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/45">Privacy Policy</Link>   |   <Link to="/sitemap" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/45">Sitemap</Link>   |   <Link to="/style-guide" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/45">Style Guide</Link>   |   <Link to="/admin" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/45">Admin Panel</Link></p>
          <p className="text-[#F7F4EF]/60 font-medium tracking-wide mt-1.5">
            Outdoor Furniture Manufacturer in India — Eco-Friendly Benches, Bus Shelters, Concrete Planters &amp; Urban Street Furniture
          </p>
        </div>

        {/* Social icons */}
        <div className="flex justify-center md:justify-end items-center gap-1.5 shrink-0">
          <div className='border border-[#F7F4EF]/25 hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/10 rounded-full p-2.5 text-[#F7F4EF] hover:text-[#C9A84C] transition-all cursor-pointer duration-300'><FaBehance className="text-base" /></div>
          <div className='border border-[#F7F4EF]/25 hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/10 rounded-full p-2.5 text-[#F7F4EF] hover:text-[#C9A84C] transition-all cursor-pointer duration-300'><FaInstagram className="text-base" /></div>
          <div className='border border-[#F7F4EF]/25 hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/10 rounded-full p-2.5 text-[#F7F4EF] hover:text-[#C9A84C] transition-all cursor-pointer duration-300'><CiLinkedin className="text-base" /></div>
          <div className='border border-[#F7F4EF]/25 hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/10 rounded-full p-2.5 text-[#F7F4EF] hover:text-[#C9A84C] transition-all cursor-pointer duration-300'><FaDribbble className="text-base" /></div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
