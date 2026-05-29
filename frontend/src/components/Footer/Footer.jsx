import { FaBehance, FaInstagram, FaDribbble } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
import MarqueeText from '../Marquee/MarqueeText';

const Footer = () => {
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
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-16 text-[#F7F4EF]/80 border-b border-[#F7F4EF]/15 pb-16'>
                {/* Column 1: Brand */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-[#C9A84C] text-lg font-bold uppercase tracking-wider">Urbanland Products</h3>
                    <p className="text-xs text-[#F7F4EF]/75 leading-relaxed font-light">
                        Outdoor & Urban Furniture Manufacturer in India
                    </p>
                    <p className="text-xs text-[#F7F4EF]/55 leading-relaxed font-light">
                        Vasai Virar, Maharashtra | ISO 9001:2015 Certified
                    </p>
                </div>

                {/* Column 2: Products */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-[#C9A84C] text-sm font-bold uppercase tracking-wider">Products</h3>
                    <ul className="flex flex-col gap-2.5 text-xs text-[#F7F4EF]/75 list-none p-0 m-0 font-light">
                        <li><Link to="/products/benches" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Benches</Link></li>
                        <li><Link to="/products/bench-planters" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Bench Planters</Link></li>
                        <li><Link to="/products/planters" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Planters</Link></li>
                        <li><Link to="/products/dustbins" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Dustbins</Link></li>
                        <li><Link to="/products/bus-shelters" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Bus Shelters</Link></li>
                        <li><Link to="/products/car-shelters" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Car Shelters</Link></li>
                        <li><Link to="/products/canteen-tables" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Canteen Tables</Link></li>
                        <li><Link to="/products/wicker-living-sets" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Wicker Living</Link></li>
                    </ul>
                </div>

                {/* Column 3: Solutions */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-[#C9A84C] text-sm font-bold uppercase tracking-wider">Solutions</h3>
                    <ul className="flex flex-col gap-2.5 text-xs text-[#F7F4EF]/75 list-none p-0 m-0 font-light">
                        <li><Link to="/solutions/real-estate" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Real Estate & Townships</Link></li>
                        <li><Link to="/solutions/hotels-resorts" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Hotels & Resorts</Link></li>
                        <li><Link to="/solutions/hospitals" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Hospitals & Healthcare</Link></li>
                        <li><Link to="/solutions/education" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Schools & Universities</Link></li>
                        <li><Link to="/solutions/smart-cities" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/75">Municipal & Smart Cities</Link></li>
                    </ul>
                </div>

                {/* Column 4: Contact & Trust Badges */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-[#C9A84C] text-sm font-bold uppercase tracking-wider">Contact & Trust</h3>
                    <div className="flex flex-col gap-2.5 text-xs text-[#F7F4EF]/75 leading-relaxed font-light">
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

            {/* Bottom copyright bar with crawlable keyword paragraph */}
            <div className="w-full flex flex-col md:flex-row justify-between items-center mt-8 gap-6 pt-4 text-[11px] text-[#F7F4EF]/45">
                <div className="flex flex-col gap-1 text-center md:text-left">
                    <p>© 2026 Urbanland Products. All rights reserved.   |   <Link to="/privacy-policy" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/45">Privacy Policy</Link>   |   <Link to="/sitemap" className="hover:text-[#C9A84C] transition-colors no-underline text-[#F7F4EF]/45">Sitemap</Link></p>
                    <p className="text-[#F7F4EF]/60 font-medium tracking-wide mt-1.5">
                        Outdoor Furniture Manufacturer in India — WPC Benches, Bus Shelters, GFRC Planters & Urban Street Furniture
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