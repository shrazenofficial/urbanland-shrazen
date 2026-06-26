import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";
import { getOptimizedImageUrl } from "../../utils/image";

import lodhaLogo from "../../assets/brands/1.png";
import oberoiLogo from "../../assets/brands/12-1.png";
import kalpataruLogo from "../../assets/brands/13-3.webp";
import godrejLogo from "../../assets/brands/3-1.png";
import tataLogo from "../../assets/brands/3.png";

const AboutUs = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    updatePageSEO({
      title: "About Urbanland Products | India's Sustainable Outdoor Furniture Manufacturer",
      description: "Learn about Urbanland Products, our mission, founder, team, and commitment to manufacturing premium sustainable outdoor furniture for projects across India."
    });
    return () => cleanPageSEO();
  }, []);

  return (
    <div className="w-full bg-[#fcf9f4] text-[#1c1c19] font-body-md overflow-x-hidden pt-20">
      {/* Hero Section */}
      <header className="relative w-full h-[70vh] min-h-[500px] md:h-[921px] md:min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center select-none"
            style={{
              backgroundImage: `url(${getOptimizedImageUrl(
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBJaj7ZzTk-LfCZLjEDK6N94vTzH-S2nEuRAZ5EDYJg5EyUydp792DQpT9ozD5Ht_rdo68jh9F0TMbZfIsSu0cmzz6FpnJQbpSRFhmlKXvY-JoFLIBxb5xvf5GCWX9S31quwdBRO6oK3FsmHQeldHtajsExOnCgNvI2TEEowFH3uXkbTAJK3YsNUMbDibwSH55h1MhHox8lTJvrVxyQBb5-CTDORHb3aF6YtKD0Zvw21p7AIEauYMF-_gBdklRSomBLYvtUGdRAIL3w"
              )})`
            }}
            data-alt="A sweeping wide-angle architectural shot of a contemporary urban plaza at sunset featuring premium Urbanland wood-composite benches."
          />
          <div className="absolute inset-0 bg-industrial-charcoal/40" />
        </div>
        <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-white">
          <div className="max-w-3xl">
            <h1 className="font-display-lg-mobile text-3xl sm:font-display-lg sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight drop-shadow-md uppercase font-bold tracking-tight">
              Building Sustainable Outdoor Spaces for Tomorrow
            </h1>
            <p className="font-body-lg text-sm sm:text-base md:text-lg mb-10 opacity-90 leading-relaxed max-w-2xl">
              Urbanland Products designs and manufactures premium outdoor furniture and urban infrastructure solutions that combine durability, sustainability, and timeless design for India's evolving landscapes.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                to="/products"
                className="bg-forest-deep text-white px-8 py-4 font-label-md text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-primary transition-colors no-underline rounded-[4px] font-bold"
              >
                Explore Our Products{" "}
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
              <Link
                to="/contact"
                className="border-2 border-architectural-gold text-architectural-gold px-8 py-4 font-label-md text-xs uppercase tracking-widest hover:bg-architectural-gold/10 transition-colors no-underline rounded-[4px] font-bold"
              >
                Contact Our Team
              </Link>
            </div>
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-8 border-t border-white/20">
              {[
                "Made in India",
                "ISO 9001:2015 Certified",
                "2-Year Warranty",
                "50+ Projects Delivered"
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 font-label-md text-xs uppercase tracking-wider font-semibold">
                  <span className="material-symbols-outlined text-architectural-gold text-[18px]">check_circle</span>{" "}
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Meet the Founder */}
      <section className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-stack-md items-center">
          <div className="order-2 md:order-1">
            <div className="mb-6">
              <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block mb-2">
                FOUNDER
              </span>
              <h2 className="font-headline-lg text-headline-lg text-deep-ink mb-4">
                Meet Our Founder
              </h2>
              <div className="w-24 h-1 bg-craftsman-gold"></div>
            </div>
            <p className="font-body-md text-sm md:text-body-md text-on-surface-variant mb-8 leading-loose">
              Founded by Raj Shekhar in 2023, Urbanland Products was built on a simple belief—outdoor spaces should be beautiful, durable, and environmentally responsible. Watch Raj share the vision behind Urbanland, our commitment to sustainable manufacturing, and how we're helping shape greener communities across India.
            </p>
            <button
              onClick={() => setIsVideoOpen(true)}
              className="flex items-center gap-3 font-label-md text-xs uppercase tracking-widest text-primary font-bold group cursor-pointer"
            >
              <span className="w-12 h-12 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <span
                  className="material-symbols-outlined text-[20px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_arrow
                </span>
              </span>
              Watch Founder Story
            </button>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-12 gap-4 relative">
            <div className="col-span-8 h-64 md:h-96 bg-surface-container relative z-10 overflow-hidden rounded-[2px] shadow-sm">
              <img
                className="w-full h-full object-cover"
                src={getOptimizedImageUrl(
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDm5XSys0gybXBlcF-qyh5z00D4Ppdw369F6iNuxj2HK4hYzvU4UCoIu3ycvS7KfnfgUgrpM0VhhoAWVpLhPecxLjO0TwmlCW1ZJP2pLzgpHvapEajOK-7TjoomLe_PXXsOfz0wNGT-CAXOvifTGd5v0NiRAgF1NyAUJ0Reymlp5_0EOdU2LR-U2mT08ocIiXtyqdxDz4NJd4uU40w80p2vLH1IP_zq9M_93vOrrzX31ZGzPOse-m55kWpzt8i5nyDC3RF_RAwmsqWQ"
                )}
                alt="Raj Shekhar, founder of Urbanland Products."
              />
            </div>
            <div
              onClick={() => setIsVideoOpen(true)}
              className="col-span-10 col-start-3 -mt-16 md:-mt-32 relative z-20 aspect-video bg-industrial-charcoal flex items-center justify-center group cursor-pointer shadow-xl rounded-[2px] overflow-hidden"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-60"
                src={getOptimizedImageUrl(
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDR3s1qp4gGvJths9T-z1i3P_jRxLjlYgJl6wt4RvbCELAXwHeMKUtQEfLkJAH2iUiFBTeSH-r64ngm4VJPrHL6uEO4nol7vzUcpmUuM6Ls7IiHeNpZnARoaUTLruRtNpmAhpxTgKlf7nrPwDJQaTwtW96ESZnQPN4z0_ALJKm04nMfo5pIgbqLOpOdQgbE1KZDG14Fc-1NQtDz7KyUgfTd1seE4u12PGyPSnTHQmKBs8_Fv7GRZCGaE1DnhX0UEcjijIHhfuPYeHgx"
                )}
                alt="Manufacturing story video thumbnail."
              />
              <span
                className="material-symbols-outlined text-white text-5xl md:text-6xl group-hover:scale-110 transition-transform"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                play_circle
              </span>
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 border-t-2 border-r-2 border-architectural-gold/30 hidden md:block" />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-surface-container py-stack-xl">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-5 flex flex-col justify-center">
            <div className="mb-6">
              <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block mb-2">
                HISTORY
              </span>
              <h2 className="font-headline-lg text-headline-lg text-deep-ink mb-4">
                Our Journey
              </h2>
              <div className="w-24 h-1 bg-craftsman-gold"></div>
            </div>
            <p className="font-body-md text-sm md:text-body-md text-on-surface-variant mb-10 leading-loose">
              From a manufacturing unit in Vasai, Maharashtra, Urbanland Products has grown into a trusted partner for architects, developers, municipalities, hospitality brands, educational institutions, and infrastructure projects across India. Today, we manufacture benches, planter boxes, bus shelters, litter bins, pergolas, street furniture, and custom urban solutions designed specifically for Indian weather conditions.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-label-md text-xs uppercase tracking-widest text-primary border-b-2 border-primary pb-1 hover:text-architectural-gold hover:border-architectural-gold transition-all no-underline w-fit font-bold"
            >
              View Our Projects{" "}
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 md:mt-0">
            <div
              className="h-48 sm:h-64 bg-cover bg-center rounded-[2px] shadow-sm md:mt-8"
              style={{
                backgroundImage: `url(${getOptimizedImageUrl(
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuApkPAanoNjQEEQGfh8HFJoi-GEb6_4LNSRi6E3ZFrEGAhQZG1SWPy3-iPN7KCcCo398HmUYdNQxaL230bTjI90kpTsJ9NwXg_dLQBVGmcuMK9c6UxVziEl4JfsREbi2psjVM0EqsN1zkeDxTllfquNJd1kXYgFS6KMVF1rsnqG47XBvDfMETyipaX9pVcTAR8DgMFtpj-2FctTcf_y8phJ7pSuurEPpvhxi4fOus4LMR8TRw1Lgz_Cba25xFQONh6uzYpRiiR7sm-U"
                )})`
              }}
              data-alt="Laser cutting machinery in a manufacturing facility in India."
            />
            <div
              className="h-48 sm:h-64 bg-cover bg-center rounded-[2px] shadow-sm"
              style={{
                backgroundImage: `url(${getOptimizedImageUrl(
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuD3JH01lKMnM39y_xHM-ffYFL55ug-E2DTerZ3eBn7CiBFzWNV0dx8EHriavOiw4bjnt8PF5nxlGkYbXPYpRtisQlt10a5zshf-hwCiUUFqDVMOeWcI0RpmLsMTW2Tl4ulZoxqqyV7qF9j2ke3hc7REI85LYkcKgrBUYpqBnlUk2VDldB6h6TJyQ9jr8lExto9XopNFZeszS4XmoUzd0jPLlpGC8SHJDNmf4WftA-JkqwfCJ85jvquI62JmhcLrT11YkVeZiX3wrMa1"
                )})`
              }}
              data-alt="Outdoor furniture installation in a premium residential complex."
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block text-center">
            <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block mb-1">
              VALUES & VISION
            </span>
            <h2 className="font-headline-lg text-headline-lg text-deep-ink mb-4">
              Driven by Purpose
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold mx-auto"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="p-8 md:p-10 border border-industrial-charcoal/10 bg-white hover:border-architectural-gold transition-colors duration-300 rounded-[2px] shadow-sm flex flex-col items-start">
            <span className="material-symbols-outlined text-architectural-gold text-4xl mb-6">flag</span>
            <h3 className="font-headline-md text-xl md:text-headline-md mb-4 text-primary uppercase font-bold">
              Our Mission
            </h3>
            <p className="font-body-md text-sm md:text-body-md text-on-surface-variant leading-relaxed">
              To create outdoor furniture that combines thoughtful design, lasting durability, and sustainable materials for modern Indian spaces.
            </p>
          </div>
          <div className="p-8 md:p-10 border border-industrial-charcoal/10 bg-white hover:border-architectural-gold transition-colors duration-300 rounded-[2px] shadow-sm flex flex-col items-start">
            <span className="material-symbols-outlined text-architectural-gold text-4xl mb-6">visibility</span>
            <h3 className="font-headline-md text-xl md:text-headline-md mb-4 text-primary uppercase font-bold">
              Our Vision
            </h3>
            <p className="font-body-md text-sm md:text-body-md text-on-surface-variant leading-relaxed">
              To become India's most trusted manufacturer of sustainable outdoor furniture and urban infrastructure solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability (Forest Green Section) */}
      <section className="bg-[#124719] py-stack-xl text-white">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-stack-md items-center">
          <div className="space-y-6">
            <div>
              <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block mb-2">
                ECOLOGICAL COMMITMENT
              </span>
              <h2 className="font-headline-lg text-headline-lg text-white mb-4 leading-tight">
                Sustainability Isn't an Add-on. It's Our Foundation.
              </h2>
              <div className="w-24 h-1 bg-craftsman-gold"></div>
            </div>
            <p className="font-body-lg text-sm sm:text-base opacity-90 leading-relaxed">
              We replace traditional hardwood with innovative materials like WPC and NFC Wood, reducing deforestation while improving product longevity.
            </p>
            <ul className="space-y-4 font-body-md text-sm">
              {[
                "Last 12–20+ years",
                "Reduce maintenance costs",
                "Support green building initiatives",
                "Minimise environmental impact"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-architectural-gold text-[18px]">eco</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/materials"
              className="bg-architectural-gold text-primary px-10 py-4 font-label-md text-xs uppercase tracking-widest hover:brightness-110 transition-all inline-block no-underline rounded-[4px] font-bold"
            >
              Explore Our Materials
            </Link>
          </div>
          <div className="relative h-[300px] md:h-[500px] overflow-hidden group rounded-[2px] mt-8 md:mt-0 shadow-md">
            <img
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700 select-none"
              src={getOptimizedImageUrl(
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBc7KXqwSY_d3RAD1vewxzgcWxqPBWmKDvSqaoUKHtUHEk7cZPkg-gV300hoPuiFUy--fL1DieV2ND4jNeJ6JYoD_eOXr1phyC7DYAJmNUntiYGif_CNxAbA1sDGiH6vbPFwK6xT36imZhEgtUaW6jn4Pu4r0RDAixNjCrfIP2oc1I72lC4wBINlbvkoNoyyJnG5d-PESj7p_lffrV99JRnHYgRjWkTj2RuB7KoxdLdxukgEY7gxJkTT_8lWP_Njqpq5mSe6Q2VlC89"
              )}
              alt="Macro texture of high-end sustainable WPC material."
            />
            <div className="absolute inset-0 border-[10px] md:border-[20px] border-white/5 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="max-w-3xl mb-12">
          <div>
            <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block mb-2">
              OUR TEAM
            </span>
            <h2 className="font-headline-lg text-headline-lg text-deep-ink mb-4">
              The People Behind Urbanland
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold mb-6"></div>
          </div>
          <p className="font-body-md text-sm md:text-body-md text-on-surface-variant leading-relaxed">
            Every project is backed by a passionate team of designers, engineers, craftsmen, and project specialists who ensure every product meets the highest standards of quality and sustainability. From concept to installation, we work together to deliver outdoor spaces that last for years.
          </p>
        </div>
        {/* Bento-style Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
          {[
            {
              role: "Lead Designer",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjQ9lLzJQ2tuaduJnZd5AVdQ1lSIpZqbgNLihGlyuICk3y0Zj0Mq6rSuLhYUfY9OmRjETJVeY2KaUGmi4Gj9589bjPkIAP6ICQnfI8nMNHj6gj-zkKT0rm6CP5qUsXkPIqqAbPGQeF_9kAPuK44pEU476ZTFI8wtT9SDoIlUEe3xKdBwyNe9jbpYMI3O21K_uQBPzvYxHxnmp45L1O4XzBp279lHOGCghtvuO0aLz0nYhIY8VO_MKB2pi_agyzU_OZgtWzmvOsJjwf"
            },
            {
              role: "Project Engineer",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBf1rosto9YMDdRzzScSFe0Wu92FXUZ_FJddzMLBVCX3O31IjQbsriWEig7IzKd55y4d3Oxnh5BGvLw2_F4Y7xcb22sBO466YymU66IHdv6y1Ccr600xvQOmheMIoczzE1Jlhu5cW7suxziKUWBArNfaNj6OLF5FGN26CSGwlxSj8mlBceoigUyeEpuip3EO9QVfdh7QD8-p7iIOTnrSbxD2eXXfchLKBVAQQq8lzhqxvU1u08PGfm4vaVqnanUxQPTlKYUPUjXi6Fa"
            },
            {
              role: "Materials Specialist",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNzlJvbH3V_zJsom5aSJe6einwh0mkIyAwZuNhFAfNGfAoNIKhQF-Ec_v91_M9eO545k_fqXU6ooaeIGbGnaUni07810MUthb2gPNjEt9csS5ejMyDxZbw_SS8d5baI2vjIPJf3lfRuYGS4bLlowIAjll9rHxgvcZP-gl1RKqCC2EAwO7-w3-ne1n6uXJ8sImjRkzYop00SiCCBwHcxyWZn_bAdvUFl0N8txrOhr79u-r4orob5gK-jgELXN6MeXRVZUbOz4vBVzGh"
            },
            {
              role: "Client Relations",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXZ_yE13_xfiuAYBmnJtEG5ULOzAaOpLpWfBEA4S3BOFSkGmp5Y62UAbPTMNAzb6fjhAhKZR2DcH145xGnfYWEzT9EbhIfGa6l1Hsty-NvamJk3DRPT2oiLOAIL0WlW5jKp6O1FL8phlt_8vC8EGPxgJPPww-nTmhSGBHCs4QQCdYkqBmN8AlzuA-hvzBFAZbXDOLpp7UFavh6GpWTf5vcEnjGWfxa_TPfGwDgR_R4DdvEG7kMdLJAIhnXewAKOrHvXkak8VovN-rG"
            }
          ].map((member, idx) => (
            <div key={idx} className="group relative aspect-[3/4] overflow-hidden bg-surface-container rounded-[2px] shadow-sm select-none">
              <img
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                src={getOptimizedImageUrl(member.img)}
                alt={`Professional headshot of a ${member.role} at Urbanland.`}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-industrial-charcoal to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-label-md text-xs uppercase tracking-wider font-semibold">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Urbanland */}
      <section className="bg-[#2D2D2D] text-white py-stack-xl">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block text-center">
              <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block mb-1">
                OUR ADVANTAGES
              </span>
              <h2 className="font-headline-lg text-headline-lg text-white mb-4">
                Why Clients Choose Urbanland
              </h2>
              <div className="w-24 h-1 bg-craftsman-gold mx-auto"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "verified",
                title: "Premium sustainable materials",
                desc: "Sourced for resilience and environmental responsibility."
              },
              {
                icon: "settings_input_component",
                title: "Custom manufacturing",
                desc: "Bespoke urban solutions tailored to your unique site requirements."
              },
              {
                icon: "speed",
                title: "Fast project execution",
                desc: "Optimized timelines for rapid delivery and on-site assembly."
              },
              {
                icon: "local_shipping",
                title: "Pan-India delivery & installation",
                desc: "Dedicated logistics and expert setup in any state."
              },
              {
                icon: "support_agent",
                title: "Dedicated project support",
                desc: "Expert guidance from blueprint planning to final walkthrough."
              },
              {
                icon: "security",
                title: "2-Year Comprehensive Warranty",
                desc: "Guaranteed durability and peace of mind for every installation."
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-4 p-5 rounded-[4px] hover:bg-white/5 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="material-symbols-outlined text-architectural-gold text-3xl shrink-0">
                  {item.icon}
                </span>
                <div>
                  <h4 className="font-label-md text-xs uppercase tracking-wider mb-2 font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs md:text-sm opacity-70 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Across India */}
      <section className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-12">
          <div>
            <div>
              <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block mb-2">
                PARTNERS & CLIENTS
              </span>
              <h2 className="font-headline-lg text-headline-lg text-deep-ink mb-4">
                Trusted by Industry Leaders
              </h2>
              <div className="w-24 h-1 bg-craftsman-gold mb-6"></div>
            </div>
            <p className="font-body-md text-sm md:text-body-md text-on-surface-variant leading-relaxed">
              We've successfully delivered outdoor furniture solutions for developers, hospitality brands, educational institutions, healthcare facilities, municipalities, and infrastructure projects across multiple states.
            </p>
          </div>
          <div className="flex items-end md:justify-end mt-4 md:mt-0">
            <Link
              to="/projects"
              className="font-label-md text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2 group no-underline"
            >
              See Our Portfolio{" "}
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[16px]">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-1000">
          {[
            { logo: lodhaLogo, alt: "LODHA" },
            { logo: godrejLogo, alt: "GODREJ" },
            { logo: kalpataruLogo, alt: "KALPATARU" },
            { logo: tataLogo, alt: "TATA" },
            { logo: oberoiLogo, alt: "OBEROI" }
          ].map((brand) => (
            <div
              key={brand.alt}
              className="h-16 w-36 flex items-center justify-center p-3 bg-gray-400/10 hover:bg-gray-400/20 rounded-xl transition-all duration-300 shadow-sm"
            >
              <img
                src={brand.logo}
                alt={`${brand.alt} logo`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-stack-xl bg-surface-container-highest border-y border-industrial-charcoal/5">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
          <h2 className="font-headline-lg text-2xl md:text-headline-lg text-deep-ink mb-6 font-bold">
            Ready to Create Better Outdoor Spaces?
          </h2>
          <p className="font-body-lg text-sm sm:text-base text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you're designing a township, resort, park, campus, or public space, we'd love to be part of your project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-primary text-on-primary px-12 py-5 font-label-md text-xs uppercase tracking-widest hover:opacity-90 transition-all no-underline text-center font-bold rounded-[4px]"
            >
              Request a Quote
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto border-2 border-primary text-primary px-12 py-5 font-label-md text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all no-underline text-center font-bold rounded-[4px]"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Video Story Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black shadow-2xl rounded-lg overflow-hidden">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-50 text-white bg-black/40 hover:bg-black/80 w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <iframe
              className="w-full h-full border-0"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Founder Story Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
