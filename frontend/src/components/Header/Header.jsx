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

      {/* 1. Premium Floating Top Header Bar (Visible when NOT scrolled - Compact Pill) */}
      <header
        className={`fixed top-5 left-1/2 -translate-x-1/2 w-fit h-9 md:h-10 bg-[#F7F4EF]/90 backdrop-blur-md border border-[#1A1A1A]/10 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] z-50 flex items-center justify-between gap-3.5 px-4 md:px-5 transition-all duration-500 ease-out ${scrolled ? "opacity-0 -translate-y-10 pointer-events-none" : "opacity-100 translate-y-0"
          }`}
      >
        {/* Left Side: Brand Logo */}
        <Link to="/" className="flex items-center cursor-pointer select-none">
          <img
            src={logoImg}
            alt="Urbanland Products LLP Logo"
            className="h-6 sm:h-7 object-contain hover:opacity-80 transition-opacity duration-300"
          />
        </Link>

        {/* Custom micro separator line */}
        <div className="w-[1px] h-3 bg-[#1A1A1A]/20 self-center" />

        {/* Right Side: + MENU Button */}
        <div
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-1.5 cursor-pointer text-[#1A1A1A] hover:text-[#C9A84C] transition-all active:scale-95 select-none"
        >
          <span className="text-[0.5625rem] md:text-[0.625rem] font-bold uppercase tracking-wider font-sans">+ MENU</span>
        </div>
      </header>

      {/* 2. Premium Floating Bottom Header Bar (Visible when SCROLLED - Compact Pill) */}
      <header
        className={`fixed bottom-5 left-1/2 -translate-x-1/2 w-fit h-9 md:h-10 bg-[#F7F4EF]/90 backdrop-blur-md border border-[#1A1A1A]/10 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] z-50 flex items-center justify-between gap-3.5 px-4 md:px-5 transition-all duration-500 ease-out ${scrolled ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90 pointer-events-none"
          }`}
      >
        {/* Left Side: Brand Logo - Dark on light background */}
        <Link to="/" className="flex items-center cursor-pointer select-none">
          <img
            src={logoImg}
            alt="Urbanland Products LLP Logo"
            className="h-6 sm:h-7 object-contain hover:opacity-80 transition-opacity duration-300"
          />
        </Link>

        {/* Custom micro separator line */}
        <div className="w-[1px] h-3 bg-[#1A1A1A]/20 self-center" />

        {/* Right Side: Hamburger Menu Icon */}
        <div
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center cursor-pointer text-[#1A1A1A] hover:text-[#C9A84C] transition-all active:scale-90 select-none"
        >
          <IoMdMenu className="w-4 h-4 md:w-5 md:h-5 text-inherit" />
        </div>
      </header>
    </>
  );
};

export default Header;
