import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Link, useLocation } from "react-router-dom";

// Import image assets
import capsuleImg from '../../assets/cap1.png';
import gbg1 from '../../assets/gallery_real_estate.png';
import gbg2 from '../../assets/gallery_hotels.png';
import gbg3 from '../../assets/gallery_hospitals.png';
import gbg4 from '../../assets/gallery_education.png';
import gbg5 from '../../assets/gallery_smart_city.png';

const MenuOverlay = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const containerRef = useRef(null);
  const innerRef = useRef(null);
  const linksRef = useRef([]);
  const bottomRef = useRef(null);
  const graphicRef = useRef(null);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Background images for the preview card. The default is capsuleImg
  const bgImages = [capsuleImg, gbg1, gbg2, gbg3, gbg4, gbg5, gbg1];

  const links = [
    { name: "Welcome", path: "/#hero", hash: "#hero" },
    { name: "Introduction", path: "/#welcome", hash: "#welcome" },
    { name: "Catalog", path: "/#gallery", hash: "#gallery" },
    { name: "Why Urbanland", path: "/#map-link", hash: "#map-link" },
    { name: "Journal", path: "/blog", hash: "" },
    { name: "Activities", path: "/#activities", hash: "#activities" },
    { name: "Feedback", path: "/#feedback", hash: "#feedback" }
  ];

  // Socials structure matching the circles
  const socials = [
    { name: "linkedin", url: "https://linkedin.com", label: "in" },
    { name: "instagram", url: "https://instagram.com" },
    { name: "globe", url: "https://google.com" },
    { name: "behance", url: "https://behance.net", label: "Bē" }
  ];

  useEffect(() => {
    if (isOpen) {
      // Fade container backdrop
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          autoAlpha: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      }

      // Expand modal card directly upwards from bottom button
      if (innerRef.current) {
        gsap.fromTo(
          innerRef.current,
          {
            scale: 0.05,
            y: 60,
            opacity: 0,
            borderRadius: "100px",
            transformOrigin: "50% 100%"
          },
          {
            scale: 1,
            y: 0,
            opacity: 1,
            borderRadius: "0px",
            duration: 0.6,
            ease: "power4.out",
          }
        );
      }

      // Animate link items in sequence
      const validLinks = linksRef.current.filter(Boolean);
      if (validLinks.length > 0) {
        gsap.fromTo(
          validLinks,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.05,
            delay: 0.2,
            ease: "power3.out",
          }
        );
      }

      // Animate bottom row and graphic preview card
      const targets = [bottomRef.current, graphicRef.current].filter(Boolean);
      if (targets.length > 0) {
        gsap.fromTo(
          targets,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 0.3,
            ease: "power2.out",
          }
        );
      }

    } else {
      // Collapse innerRef modal card back down
      if (innerRef.current) {
        gsap.to(innerRef.current, {
          scale: 0.05,
          y: 60,
          opacity: 0,
          borderRadius: "100px",
          duration: 0.4,
          ease: "power3.in",
          transformOrigin: "50% 100%"
        });
      }

      // Fade out container backdrop
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          autoAlpha: 0,
          duration: 0.4,
          delay: 0.05,
          ease: "power2.inOut",
        });
      }
    }
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === containerRef.current) {
      setIsOpen(false);
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[60] bg-[#232120] flex items-stretch justify-center font-sans opacity-0 invisible"
    >
      <div
        ref={innerRef}
        className="relative w-full h-full bg-[#232120] overflow-hidden flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16 shadow-none border-none rounded-none"
      >
        
        {/* Main Content Area: Split left/right on desktop */}
        <div className="w-full h-full flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-16 z-10 overflow-y-auto scrollbar-none pb-12 lg:pb-0">
          
          {/* LEFT COLUMN: Animated Navigation Links & Social Row */}
          <div className="w-full lg:w-[55%] flex flex-col justify-between py-4 lg:py-6 pl-2 lg:pl-6 mt-8 lg:mt-0">
            
            {/* Links Block */}
            <div className="flex flex-col gap-1 items-start justify-center flex-grow">
              {links.map((link, index) => {
                const isHashLink = link.hash !== "";
                const isOnHomePage = location.pathname === "/" || location.pathname === "/";
                
                if (isHashLink && isOnHomePage) {
                  return (
                    <a
                      key={link.name}
                      href={link.hash}
                      ref={(el) => (linksRef.current[index] = el)}
                      onClick={() => setIsOpen(false)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="group relative flex items-center text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] leading-[1.05] text-[#f4efe7]/60 font-medium tracking-tight hover:text-[#f4efe7] hover:translate-x-6 transition-all duration-300 select-none cursor-pointer no-underline"
                    >
                      <span>{link.name}</span>
                    </a>
                  );
                } else {
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      ref={(el) => (linksRef.current[index] = el)}
                      onClick={() => setIsOpen(false)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="group relative flex items-center text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] leading-[1.05] text-[#f4efe7]/60 font-medium tracking-tight hover:text-[#f4efe7] hover:translate-x-6 transition-all duration-300 select-none cursor-pointer no-underline"
                    >
                      <span>{link.name}</span>
                    </Link>
                  );
                }
              })}
            </div>

            {/* Bottom Row inside left column: Social Icons and Concept Text */}
            <div
              ref={bottomRef}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-white/10 w-full mt-8 lg:mt-0"
            >
              {/* Circular Social Icons */}
              <div className="flex items-center gap-3">
                {socials.map((social, idx) => {
                  if (social.name === "instagram") {
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="w-12 h-12 rounded-full border border-[#f4efe7]/20 flex items-center justify-center text-[#f4efe7]/80 hover:text-white hover:border-white transition-all hover:bg-white/5 select-none cursor-pointer"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                    );
                  }
                  if (social.name === "globe") {
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="w-12 h-12 rounded-full border border-[#f4efe7]/20 flex items-center justify-center text-[#f4efe7]/80 hover:text-white hover:border-white transition-all hover:bg-white/5 select-none cursor-pointer"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="2" y1="12" x2="22" y2="12"></line>
                          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
                        </svg>
                      </a>
                    );
                  }
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 rounded-full border border-[#f4efe7]/20 flex items-center justify-center text-[#f4efe7]/85 hover:text-white hover:border-white transition-all text-[13px] font-medium tracking-wide font-sans select-none hover:bg-white/5 cursor-pointer"
                    >
                      {social.label}
                    </a>
                  );
                })}
              </div>

              {/* Subtext info */}
              <p className="text-[11px] sm:text-xs text-[#f4efe7]/40 leading-relaxed font-sans max-w-xs">
                This website is just the concept work done by—Moyra to showcase our capabilities.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: Cinematic Card and Awwwards ribbon */}
          <div
            ref={graphicRef}
            className="w-full lg:w-[40%] flex justify-end items-stretch relative"
          >
            {/* The Cinematic Preview Card */}
            <div className="relative w-full h-[70vh] lg:h-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-[#2D2D2D] shadow-2xl flex flex-col justify-end p-8 border border-white/5">
              {/* Background previews */}
              <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden transition-all duration-700">
                {bgImages.map((img, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out transform ${
                      (hoveredIndex === null && idx === 0) || hoveredIndex === idx
                        ? "opacity-60 scale-105"
                        : "opacity-0 scale-100"
                    }`}
                    style={{ backgroundImage: `url(${img})` }}
                  />
                ))}
                {/* Vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/40" />
              </div>

              {/* Card brand content floating over preview */}
              <div className="relative z-10 flex items-center gap-4 text-[#f4efe7] select-none pointer-events-none mb-6">
                {/* Trademark Badge in white circle */}
                <div className="w-14 h-14 rounded-full border border-white/60 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-semibold leading-none">®</span>
                </div>
                {/* Massive cropped text Cap */}
                <h2 className="text-[12vw] lg:text-[7.5vw] font-bold tracking-tighter leading-none text-white whitespace-nowrap translate-x-2">
                  Cap
                </h2>
              </div>
            </div>

            {/* Awwwards Concept Ribbon Badge */}
            <div className="absolute -right-4 top-1/3 bg-[#000000] text-white py-5 px-3 flex flex-col items-center gap-4 z-40 select-none pointer-events-none rounded-l-md font-sans border border-white/10 shadow-xl">
              <span className="text-base font-black tracking-tight leading-none">W.</span>
              <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-white/90 [writing-mode:vertical-lr] py-2">
                Site of the Day
              </span>
            </div>
          </div>

        </div>

        {/* FLOATING PILL CLOSE BUTTON - Centered at the bottom */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-4 pl-6 pr-1.5 py-1.5 rounded-full bg-[#f4efe7] text-[#1a1a1a] hover:bg-white active:scale-95 transition-all text-xs font-bold uppercase tracking-widest cursor-pointer shadow-xl border border-white/10"
          >
            Close
            <span className="w-8 h-8 rounded-full bg-[#232120] text-white flex items-center justify-center text-xs font-semibold">
              ✕
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default MenuOverlay;
