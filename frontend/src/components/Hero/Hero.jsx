import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import aboutImage from "../../assets/welcome-1.png";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeChooseIndex, setActiveChooseIndex] = useState(0);
  const timerRef = useRef(null);

  const slides = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAns3R6GdBNg59I4FP7bdzK4gJyhJymz-KINXWATY3Zo5mdzerP9CkunAL9H_qnZSMg8qlLPIjHCT5SZ2bUnyyLvtf-gccxYBgR7zmCZPe6cAkSNerVNYinpWSCbYo1vdgIvl-F8WiocSW9uyST6S3dXYg3UkngVLs3Q2dpEZIfgBnebXMWImTeH3OgVz7NY7fm8oFWyWSt6EXv1DNZFjVHLafpSJpPRp_MJuuakq3tAR-M4SQjnSTBt-vBYGPEfi2nNHLFLXiANb3F",
      title: "Premium Outdoor Furniture Manufacturer in India",
      subtext: "Urbanland Products designs and manufactures premium, aesthetic, and sustainable urban furniture and landscape solutions for developers, architects, and public spaces across India.",
      cta1Text: "REQUEST A QUOTE",
      cta1Link: "/contact",
      cta1Icon: "arrow_forward",
      cta2Text: "DOWNLOAD PRODUCT CATALOGUE",
      cta2Link: "/resources/downloads",
      cta2Icon: "download",
      showTrustBar: true
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxo9mePGJNCYkLIU6LjihtLa8jnXnAMb3peYlPMi1EhaP5FgiYeKV3uBh0f59g9AFSUB-nm5aQHy48w1X3unsIf-Rt0HhllD1fop26dANUEPoVY7h1mBmgRMoavXT76luh5cfUxLRTnYmHlmCSv5BfGQeRNPiiCM587Uo6XuY6UsrJFxXoRNbxZSo1giyRqUZ4ocZWCLDx6Q7Fs6Mkebq2iCfADpME9GgYVnwQKbfc0ilTznj__6dW9oVSmsEEJYsrmH12VNcdH9bz",
      title: "Precision Engineering with Indian Craftsmanship",
      subtext: "Since 2023, Urbanland Products has been a trusted partner for architects and developers, combining traditional manufacturing with avant-garde architectural design. 100% Indigenous Manufacturing.",
      cta1Text: "Explore Products",
      cta1Link: "/products",
      cta1Icon: "arrow_forward",
      cta2Text: "Our Story",
      cta2Link: "/about-us",
      cta2Icon: "auto_stories",
      showTrustBar: false
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLD7t5by8J5Hz0mAFSVYVKjMZXamyn_uMVp8HTdIZJC4mmN7tnfjcY9Q213kCiYdz-raa0kb0Fq0mshTR1wfplXZklAKWPj-YpCk-dkqNDBpnYbyaY-cpCvDM09VjRMODtFUWJ5JC-v6ahTdHsDDxbKMzcldvhdur7ffLCxA8WpbflEvXV4uW5lqisht9PLsKoN1TYU6NKGaAzAppb-Z-smyzSqMBoBQXKOKsrVSCXIITENqE-EjrfioltLc91ZGvzFTSxpYGzhteJ",
      title: "Defining Luxury Outdoor Living",
      subtext: "From luxury resorts to high-end townships, we provide outdoor furniture that enhances the guest experience with superior durability and aesthetic appeal.",
      cta1Text: "Explore Projects",
      cta1Link: "/projects",
      cta1Icon: "arrow_forward",
      cta2Text: "Contact Us",
      cta2Link: "/contact",
      cta2Icon: "mail",
      showTrustBar: false
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAOO5KparkuC3zpOc5Zc2YTngTWBS_-9ZbyKEXbtsRqas2Bi4T7C0d1QrCpdWUyPeIiItot0eZbzKmH4V3TlboxuqbqM2SvSvgTBrPpcJ3ImKa8ji7zdl8wx5iE6fYP4C9VfO0dGoG4Hp4Gg3L1jIzT0453tvsGQKAo0IurBrnLVQEeTyPO08fBZ2qqKI5kxv-vPcd9Gm4_xuWxjEjrmqbeXfSlq5IWufejKmIfHq0-7ibJYR7bSBW7C3GEIC_ieaHMZodROSxaW6T",
      title: "Built for a Sustainable Future",
      subtext: "We replace traditional hardwood with innovative, eco-friendly materials like WPC and NFC wood, supporting green building initiatives and minimizing environmental impact.",
      cta1Text: "Explore Materials",
      cta1Link: "/materials",
      cta1Icon: "arrow_forward",
      cta2Text: "Sustainability Report",
      cta2Link: "/sustainability",
      cta2Icon: "description",
      showTrustBar: false
    }
  ];

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6500);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const goToSlide = (index) => {
    setActiveIndex(index);
    resetTimer();
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
    resetTimer();
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    resetTimer();
  };

  return (
    <>
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-black text-white" id="hero-slider">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
            >
              {/* Background & Overlay */}
              <div className="absolute inset-0 z-0">
                <div
                  className="absolute inset-0 z-10"
                  style={{
                    background: "linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.2) 100%)"
                  }}
                />
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>

              {/* Slide Content */}
              <div className="relative z-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full h-full flex flex-col justify-center text-left">
                <div className="max-w-3xl space-y-4 sm:space-y-6">
                  {index === 0 ? (
                    <h1 className="font-display-lg text-[28px] sm:text-display-lg-mobile md:text-display-lg leading-tight uppercase">
                      {slide.title}
                    </h1>
                  ) : (
                    <h2 className="font-display-lg text-[28px] sm:text-display-lg-mobile md:text-display-lg leading-tight uppercase">
                      {slide.title}
                    </h2>
                  )}
                  <p className="font-body-lg text-xs sm:text-base md:text-body-lg opacity-90 max-w-2xl leading-relaxed">
                    {slide.subtext}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 w-full sm:w-auto">
                    <Link
                      to={slide.cta1Link}
                      className="bg-forest-deep text-white px-6 sm:px-8 py-3.5 sm:py-4 font-label-md text-xs sm:text-label-md uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-forest-deep/90 transition-all no-underline font-semibold w-full sm:w-auto text-center"
                    >
                      {slide.cta1Text}
                      <span className="material-symbols-outlined text-sm sm:text-base">{slide.cta1Icon}</span>
                    </Link>
                    <Link
                      to={slide.cta2Link}
                      className="border border-architectural-gold text-architectural-gold px-6 sm:px-8 py-3.5 sm:py-4 font-label-md text-xs sm:text-label-md uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-architectural-gold/10 transition-all no-underline font-semibold w-full sm:w-auto text-center"
                    >
                      {slide.cta2Text}
                      <span className="material-symbols-outlined text-sm sm:text-base">{slide.cta2Icon}</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Trust Bar (Slide 1 Specific) */}
              {slide.showTrustBar && (
                <div className="absolute bottom-28 sm:bottom-12 left-0 w-full z-20 px-margin-mobile md:px-margin-desktop">
                  <div className="max-w-container-max mx-auto border-t border-white/20 pt-4 sm:pt-8 grid grid-cols-2 gap-y-3 gap-x-4 sm:flex sm:flex-wrap sm:justify-between sm:items-center text-[10px] sm:text-xs md:text-sm font-label-md uppercase tracking-wider opacity-80">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="material-symbols-outlined text-architectural-gold text-[14px] sm:text-base md:text-lg">verified</span>
                      <span className="leading-tight">ISO 9001 Quality</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="material-symbols-outlined text-architectural-gold text-[14px] sm:text-base md:text-lg">calendar_today</span>
                      <span className="leading-tight">2-Year Warranty</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="material-symbols-outlined text-architectural-gold text-[14px] sm:text-base md:text-lg">location_city</span>
                      <span className="leading-tight">50+ Landmark Projects</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="material-symbols-outlined text-architectural-gold text-[14px] sm:text-base md:text-lg">local_shipping</span>
                      <span className="leading-tight">Pan-India Delivery</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Navigation Controls */}
        <div className="absolute bottom-6 sm:bottom-12 right-margin-mobile md:right-margin-desktop z-30 flex items-center gap-6 sm:gap-8">
          <div className="flex items-center gap-3 sm:gap-4" id="slider-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all border cursor-pointer ${index === activeIndex
                    ? "bg-white opacity-100 border-white scale-110"
                    : "bg-white/40 border-transparent hover:bg-white/60"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-white/20 hover:bg-white/10 transition-colors cursor-pointer text-white"
              aria-label="Previous slide"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-white/20 hover:bg-white/10 transition-colors cursor-pointer text-white"
              aria-label="Next slide"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </section>

      {/* Trusted By (Logo Carousel) */}
      <section className="py-8 sm:py-stack-md bg-surface-container-low border-b border-outline-variant/30 overflow-hidden">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
          <h2 className="font-label-sm text-[10px] sm:text-label-sm lg:text-sm uppercase tracking-[0.2em] text-on-surface-variant mb-6 sm:mb-10">
            Trusted by Leading Developers &amp; Institutions
          </h2>
          <div className="grid grid-cols-3 gap-y-6 gap-x-4 md:flex md:flex-wrap md:justify-center md:items-center md:gap-x-16 md:gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 text-on-surface">
            <div className="text-lg sm:text-xl md:text-2xl font-bold tracking-tighter">LODHA</div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold tracking-tighter">adani Realty</div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold tracking-tighter">OBEROI</div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold tracking-tighter">Godrej</div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold tracking-tighter text-nowrap">TATA PROJECTS</div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold tracking-tighter">KALPATARU</div>
          </div>
        </div>
      </section>

      {/* Hero / Featured Section: Built for Projects That Last */}
      <section className="py-8 sm:py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-0 relative">
          {/* Left 60%: Visual Anchor */}
          <div className="w-full lg:w-3/5 z-0">
            <div className="relative overflow-hidden rounded-[24px] smooth-shadow group">
              <img
                alt="Luxury outdoor architectural project featuring modern seating and premium landscaping"
                className="w-full h-[320px] sm:h-[500px] md:h-[640px] object-cover transition-transform duration-700 group-hover:scale-105"
                src={aboutImage}
              />
              <div className="absolute inset-0 bg-forest-deep/5 mix-blend-multiply" />
            </div>
          </div>
          {/* Right 40%: Content Card (Overlapping) */}
          <div className="w-full lg:w-2/5 lg:-ml-20 mt-6 lg:mt-20 z-10">
            <div className="bg-surface-container-lowest p-6 sm:p-8 md:p-12 rounded-[24px] smooth-shadow border border-industrial-charcoal/5">
              <span className="font-label-md text-xs sm:text-label-md text-architectural-gold uppercase tracking-[0.2em] block mb-4">
                ABOUT URBANLAND
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-headline-lg text-forest-deep mb-6 leading-tight">
                Built for Projects That Last
              </h2>
              <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant mb-8 leading-relaxed">
                Urbanland Products is India's leading manufacturer of premium outdoor furniture and urban
                infrastructure solutions. We design custom WPC park benches, designer planters, bus shelters,
                gazebos, and site furnishings. Every product is engineered for durability, weather
                resistance, and sustainable outdoor performance.
              </p>
              {/* Proof Points Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-6 gap-x-4 mb-8 sm:mb-10">
                <div className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-high text-forest-deep group-hover:bg-architectural-gold group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">apartment</span>
                  </div>
                  <span className="font-label-md text-xs sm:text-label-md text-on-surface">50+ Projects Delivered</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-high text-forest-deep group-hover:bg-architectural-gold group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <span className="font-label-md text-xs sm:text-label-md text-on-surface">ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-high text-forest-deep group-hover:bg-architectural-gold group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">shield</span>
                  </div>
                  <span className="font-label-md text-xs sm:text-label-md text-on-surface">2-Year Warranty</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-high text-forest-deep group-hover:bg-architectural-gold group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">local_shipping</span>
                  </div>
                  <span className="font-label-md text-xs sm:text-label-md text-on-surface">Pan-India Delivery</span>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center justify-center bg-forest-deep text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-[4px] font-label-md text-xs sm:text-label-md uppercase tracking-widest hover:bg-primary-container transition-all group no-underline font-semibold w-full sm:w-auto text-center"
              >
                Explore Our Story
                <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Urbanland Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#123114] to-[#0d220e] text-white py-16 sm:py-stack-xl border-t border-white/5">
        {/* Subtle background light blob for premium depth */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-architectural-gold/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            {/* Left side: Heading */}
            <div className="lg:col-span-5 space-y-4">
              <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
                WHY URBANLAND
              </span>
              <h2 className="font-headline-lg text-headline-lg text-white leading-tight">
                Why Developers &amp; Architects Choose Urbanland
              </h2>
              <div className="w-24 h-1 bg-craftsman-gold"></div>
              <p className="font-body-md text-sm text-white/50 leading-relaxed max-w-md pt-2">
                We combine architectural precision, custom manufacturing capabilities, and sustainable materials to deliver high-durability site furnishings for landmark projects nationwide.
              </p>
            </div>

            {/* Right side: Accordion list */}
            <div className="lg:col-span-7 border-t border-white/10">
              {[
                {
                  num: "01",
                  title: "Project-Ready Solutions",
                  description: "Outdoor furniture designed for residential, commercial, hospitality, and public infrastructure projects."
                },
                {
                  num: "02",
                  title: "Custom Manufacturing",
                  description: "Flexible sizes, materials, colours, and finishes tailored to project specifications."
                },
                {
                  num: "03",
                  title: "Built with Sustainable Materials",
                  description: "WPC, NFC Wood, GFRC, aluminium, and stainless steel for lasting outdoor performance."
                },
                {
                  num: "04",
                  title: "From Factory to Site",
                  description: "A single partner for design support, manufacturing, nationwide delivery, and installation."
                }
              ].map((item, idx) => {
                const isOpen = activeChooseIndex === idx;
                return (
                  <div key={idx} className="border-b border-white/10">
                    <button
                      onClick={() => setActiveChooseIndex(isOpen ? -1 : idx)}
                      className="flex items-center justify-between w-full text-left py-5 sm:py-6 group focus:outline-none"
                    >
                      <div className="flex items-center">
                        <span className="font-mono text-sm sm:text-base text-architectural-gold/60 mr-4 sm:mr-6 group-hover:text-architectural-gold transition-colors duration-300">
                          {item.num}
                        </span>
                        <span className="font-headline-md text-base sm:text-lg font-medium text-white group-hover:text-architectural-gold transition-colors duration-300">
                          {item.title}
                        </span>
                      </div>
                      <span className={`material-symbols-outlined text-white/40 group-hover:text-white transition-transform duration-300 ${isOpen ? 'rotate-180 text-architectural-gold' : ''}`}>
                        {isOpen ? 'remove' : 'add'}
                      </span>
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                      <div className="pl-9 sm:pl-12 pb-5 sm:pb-6">
                        <p className="font-body-md text-xs sm:text-sm text-white/70 leading-relaxed max-w-xl">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
