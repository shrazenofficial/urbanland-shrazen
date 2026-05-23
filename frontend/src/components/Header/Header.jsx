import { useState, useEffect } from "react";
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
        className={`fixed top-6 left-1/2 -translate-x-1/2 w-[92vw] max-w-[1400px] h-14 md:h-16 bg-[#f4efe7] border border-[#2a2725]/10 rounded-2xl md:rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.06)] z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-500 ease-out ${
          scrolled ? "opacity-0 -translate-y-10 pointer-events-none" : "opacity-100 translate-y-0"
        }`}
      >
        {/* Left Side: Brand Logo (Natural Green/Brown Colors) */}
        <div className="flex items-center cursor-pointer select-none">
          <img 
            src={logoImg} 
            alt="Urbanland Products LLP Logo" 
            className="h-6 sm:h-8 md:h-9 object-contain hover:opacity-90 transition-opacity duration-300"
          />
        </div>

        {/* Center: Stylized 'A' Tower Icon */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none">
          <svg 
            viewBox="0 0 100 100" 
            className="h-7 w-7 md:h-8 md:w-8 text-[#993b21]" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="6" 
            strokeLinecap="square"
          >
            {/* Inclined legs */}
            <line x1="38" y1="20" x2="26" y2="80" />
            <line x1="62" y1="20" x2="74" y2="80" />
            {/* Top cap */}
            <line x1="34" y1="20" x2="66" y2="20" />
            {/* Top crossbar */}
            <line x1="30" y1="36" x2="70" y2="36" />
            {/* Middle crossbar */}
            <line x1="22" y1="54" x2="78" y2="54" />
            {/* Bottom crossbar */}
            <line x1="16" y1="72" x2="84" y2="72" />
          </svg>
        </div>

        {/* Right Side: + MENU Button */}
        <div 
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-1.5 cursor-pointer text-[#2a2725] hover:opacity-80 transition-all active:scale-95 select-none"
        >
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider font-sans">+ MENU</span>
        </div>
      </header>

      {/* 2. Premium Floating Bottom Header Bar (Visible when SCROLLED) */}
      <header 
        className={`fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 w-[92vw] max-w-[1400px] h-14 md:h-16 bg-[#f4efe7]/95 backdrop-blur-md border border-[#2a2725]/15 rounded-2xl md:rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.12)] z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-500 ease-out ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        {/* Left Side: Brand Logo (Natural Green/Brown Colors) */}
        <div className="flex items-center cursor-pointer select-none">
          <img 
            src={logoImg} 
            alt="Urbanland Products LLP Logo" 
            className="h-6 sm:h-8 md:h-9 object-contain hover:opacity-90 transition-opacity duration-300"
          />
        </div>

        {/* Center: Stylized 'A' Tower Icon */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none">
          <svg 
            viewBox="0 0 100 100" 
            className="h-7 w-7 md:h-8 md:w-8 text-[#993b21]" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="6" 
            strokeLinecap="square"
          >
            {/* Inclined legs */}
            <line x1="38" y1="20" x2="26" y2="80" />
            <line x1="62" y1="20" x2="74" y2="80" />
            {/* Top cap */}
            <line x1="34" y1="20" x2="66" y2="20" />
            {/* Top crossbar */}
            <line x1="30" y1="36" x2="70" y2="36" />
            {/* Middle crossbar */}
            <line x1="22" y1="54" x2="78" y2="54" />
            {/* Bottom crossbar */}
            <line x1="16" y1="72" x2="84" y2="72" />
          </svg>
        </div>

        {/* Right Side: + MENU Button */}
        <div 
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-1.5 cursor-pointer text-[#2a2725] hover:opacity-80 transition-all active:scale-95 select-none"
        >
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider font-sans">+ MENU</span>
        </div>
      </header>
    </>
  );
};

export default Header;
