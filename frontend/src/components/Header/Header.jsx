import { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import MenuOverlay from "../Navbar/MenuOverlay";
import logoImg from "../../assets/urbanland-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <MenuOverlay isOpen={isOpen} setIsOpen={setIsOpen} />
      
      {/* 1. Premium Floating Top Header Bar (Visible when NOT scrolled) */}
      <header 
        className={`fixed top-6 left-1/2 -translate-x-1/2 w-[92vw] max-w-[1400px] h-14 md:h-16 bg-[#2D2D2D] border border-[#F7F4EF]/10 rounded-2xl md:rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.12)] z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-500 ease-out ${
          scrolled ? "opacity-0 -translate-y-10 pointer-events-none" : "opacity-100 translate-y-0"
        }`}
      >
        {/* Left Side: Brand Logo (Natural Green/Brown Colors) */}
        <Link to="/" className="flex items-center cursor-pointer select-none">
          <img 
            src={logoImg} 
            alt="Urbanland Products LLP Logo" 
            className="h-6 sm:h-8 md:h-9 object-contain hover:opacity-90 transition-opacity duration-300"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </Link>



        {/* Right Side: + MENU Button */}
        <div 
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-1.5 cursor-pointer text-[#F7F4EF] hover:text-[#C9A84C] transition-all active:scale-95 select-none"
        >
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider font-sans">+ MENU</span>
        </div>
      </header>

      {/* 2. Premium Floating Bottom Header Bar (Visible when SCROLLED - Compact Pill) */}
      <header 
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-fit h-12 md:h-14 bg-[#2D2D2D]/95 backdrop-blur-md border border-[#F7F4EF]/10 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.2)] z-50 flex items-center justify-between gap-4 px-6 transition-all duration-500 ease-out ${
          scrolled ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90 pointer-events-none"
        }`}
      >
        {/* Left Side: Brand Logo (Natural Green/Brown Colors) - Compact Size */}
        <Link to="/" className="flex items-center cursor-pointer select-none">
          <img 
            src={logoImg} 
            alt="Urbanland Products LLP Logo" 
            className="h-5 sm:h-6 object-contain hover:opacity-90 transition-opacity duration-300"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </Link>

        {/* Custom micro separator line */}
        <div className="w-[1px] h-4 bg-[#F7F4EF]/25 self-center" />

        {/* Right Side: Hamburger Menu Icon */}
        <div 
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center cursor-pointer text-[#F7F4EF] hover:text-[#C9A84C] transition-all active:scale-90 select-none"
        >
          <IoMdMenu className="w-5 h-5 md:w-6 md:h-6 text-inherit" />
        </div>
      </header>
    </>
  );
};

export default Header;
