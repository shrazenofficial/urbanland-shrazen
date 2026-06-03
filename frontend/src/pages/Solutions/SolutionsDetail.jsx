import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";
import CTASection from "../../components/CTASection/CTASection";

// Import images
import gbg1 from '../../assets/gallery_real_estate.png';
import gbg2 from '../../assets/gallery_hotels.png';
import gbg3 from '../../assets/gallery_hospitals.png';
import gbg4 from '../../assets/gallery_education.png';
import gbg5 from '../../assets/gallery_smart_city.png';
import welcome1 from '../../assets/welcome-1.png';
import welcome2 from '../../assets/welcome-2.png';

const verticalsMeta = {
  "real-estate": {
    name: "Real Estate Projects",
    tagline: "Luxury Villas, Gated Communities & Clubhouses",
    image: gbg1,
    desc: "Urbanland Products delivers premium, sustainable benches, planter boxes and complete amenity solutions that help developers create high-value outdoor spaces, accelerate sales and meet green building standards. Our weather-resistant WPC, NFC, and metal systems are built to withstand heavy footfall while maintaining pristine aesthetics.",
    developer: "Godrej, Kalpataru, Wadhwa & Leading Developers",
    supplied: "50+ Gated Communities & Townships Delivered",
    standards: "ISO 9001:2015, IGBC, GRIHA & LEED Compliant",
    metaTitle: "Outdoor Furniture for Real Estate Projects India | Luxury Villas, Gated Communities & Clubhouses | Urbanland Products",
    metaDesc: "Premium outdoor benches, planter boxes and amenity furniture for real estate projects in India. Trusted by Godrej, Kalpataru, Wadhwa Wise City and leading developers. Durable WPC, NFC Wood, Aluminium & Mild Steel solutions with 2-Year Guarantee.",
    challenges: [
      "Tight RERA handover timelines for amenity decks and common areas.",
      "Harsh Indian weather (extreme heat & heavy monsoons) damaging ordinary furniture within 2–3 years.",
      "High footfall in clubhouses, pool decks, and gardens driving up maintenance costs.",
      "Need for outdoor furniture that matches modern architectural themes and supports green building certifications.",
      "Growing demand from buyers for truly usable, beautiful, and low-maintenance outdoor spaces."
    ],
    solutions: [
      { title: "WPC & NFC Wood Benches", desc: "Natural warm wood look with zero deforestation, zero maintenance, and high fade resistance." },
      { title: "Mild Steel & Stainless Steel Benches", desc: "Double-layer zinc primed and powder-coated for heavy-duty public use in common areas." },
      { title: "Premium Planter Boxes", desc: "Available in Aluminium, MS, and SS to create lush green zones, rooftops, and biophilic pathways." },
      { title: "Modular Amenity Packages", desc: "Integrated clubhouse seating, pool decks, and garden lounge sets tailored to project layout." },
      { title: "Wicker Outdoor Furniture", desc: "Sophisticated, UV-resistant hand-woven dining and lounge sets for premium villas." }
    ],
    stats: [
      { value: "50+", label: "Real Estate Projects" },
      { value: "15+", label: "Cities Served" },
      { value: "2-4 Wks", label: "Typical Delivery" }
    ],
    cases: [
      { name: "Godrej Projects Development", location: "Palghar, Maharashtra", desc: "Supplied and installed 78 premium benches + 65 planter boxes for luxury villa landscaping. Completed in 2–3 weeks." },
      { name: "Kalpataru Vienta", location: "Kandivali East, Mumbai", desc: "Supplied and installed 24 WPC benches + premium planter boxes. Completed in 3–4 weeks." },
      { name: "Wadhwa Wise City", location: "Panvel, Maharashtra", desc: "Supplied 4 custom transit bus shelters + multiple benches and planters for large township. Completed in 1 month (Dec 2025)." },
      { name: "Navandhe Village", location: "Taluka Khalapur, Raigad", desc: "36 benches + 42 planter boxes installed across community gardens and pathways. Completed in 2–3 weeks." }
    ],
    extraCases: "Thane (West) – 14 WPC benches | Arandiya, Indore – 28 benches | Kharghar, Navi Mumbai – 10 benches & planters | Munjeri & Haveli, Pune – Multiple benches and planters.",
    whyChoose: [
      "Fast Turnaround – Most projects completed in 2–4 weeks to meet RERA handover deadlines.",
      "Full Customization – Total flexibility in size, shape, finish, color, and branding.",
      "Sustainability Focus – Recyclable, long-life materials supporting green certifications.",
      "End-to-End Support – Expert design consultation, BOQs, delivery, and anchoring.",
      "2-Year Warranty – India’s only comprehensive guarantee for absolute peace of mind."
    ],
    faqs: [
      { q: "What is the typical lead time for outdoor furniture in real estate projects?", a: "Most projects are completed in 2–4 weeks from design approval to professional installation. We offer dedicated scheduling for large township developments to meet strict handover timelines." },
      { q: "Can benches and planters be customised to match our project design language?", a: "Yes. We offer complete customisation in size, shape, finish, colour and branding so the furniture seamlessly integrates with your architectural theme." },
      { q: "Do you support green building certifications (IGBC, GRIHA, LEED)?", a: "Absolutely. Our WPC, NFC Wood and long-life metal products help projects earn valuable green building points through durability, low maintenance, and use of recycled materials." },
      { q: "Do you provide installation services across India?", a: "Yes. We provide local delivery and professional chemical anchoring installation support across India." }
    ],
    recommended: [
      { id: "benches", name: "WPC & NFC Benches" },
      { id: "planters", name: "Premium Planters" },
      { id: "poolside-loungers", name: "Poolside Loungers" },
      { id: "wicker-furniture", name: "Wicker Furniture" }
    ]
  },
  "hospitality": {
    name: "Hospitality & Hotels",
    tagline: "Resorts, Pool Areas, Restaurants & Rooftops",
    image: gbg2,
    desc: "Urbanland Products delivers premium, weather-resistant wicker furniture, benches, planter boxes and complete outdoor seating solutions that enhance guest experience, withstand high daily usage and reduce maintenance costs for hotels, resorts and restaurants.",
    developer: "Hotels, Resorts & Restaurant Chains",
    supplied: "Durable Solutions for High-Traffic Pooldecks & Lounges",
    standards: "ISO 9001:2015, UV Stable, Chlorine & Saline Resistant",
    metaTitle: "Outdoor Furniture for Hospitality & Hotels India | Resorts, Pool Areas, Restaurants & Rooftops | Urbanland Products",
    metaDesc: "Premium wicker furniture, benches, planter boxes and outdoor seating solutions for hotels, resorts, restaurants and pool areas in India. Durable, stylish and low-maintenance products trusted by hospitality operators. 2-Year Guarantee.",
    challenges: [
      "High daily footfall and constant guest usage in pool, restaurant, and lounge areas.",
      "Harsh weather conditions (UV rays, heavy monsoons, chlorinated or saline mist) damaging outdoor materials.",
      "Need for highly stylish, Instagram-worthy outdoor spaces to attract and retain premium guests.",
      "High maintenance and periodic replacement costs eating into operational profits.",
      "Requirement for fast delivery and easy replacements during seasonal renovations."
    ],
    solutions: [
      { title: "Wicker Furniture Sets", desc: "Sophisticated outdoor dining and lounge sets with intricate woven detailing and comfort cushions." },
      { title: "Aluminium Benches & Seating", desc: "Lightweight, completely rust-proof, and modern for pool decks, rooftops, and beachside zones." },
      { title: "Premium Planter Boxes", desc: "Create lush green boundaries, enhance aesthetics, and establish private guest zones." },
      { title: "WPC & NFC Wood Benches", desc: "Low-maintenance, natural-looking public seating for entryways and surrounding pathways." },
      { title: "Poolside Loungers & Daybeds", desc: "Comfortable, UV-resistant, and weatherproof lounge beds for ultimate guest relaxation." }
    ],
    stats: [
      { value: "2-4 Wks", label: "Typical Turnaround" },
      { value: "3,000 Hrs", label: "UV Stable Wicker" },
      { value: "2 Years", label: "Full Warranty" }
    ],
    cases: [
      { name: "Arkade Prime", location: "Andheri East, Mumbai", desc: "Supplied and installed premium custom wicker furniture sets for outdoor decks. Completed in 2–3 weeks." },
      { name: "Bhardawadi Road", location: "Andheri West, Mumbai", desc: "Wicker outdoor dining sets supplied for high-end hospitality projects. Completed in 1–2 weeks." },
      { name: "Navrang Oasis", location: "Goregaon West, Mumbai", desc: "Bespoke wicker lounge furniture sets supplied for outdoor terrace lounges. Completed in 2–3 weeks." },
      { name: "Cowtown / Palava", location: "Dombivali, Maharashtra", desc: "Supplied 20+ premium wicker outdoor products including arm chairs and sectional sofa sets. Completed in 1–2 weeks." }
    ],
    extraCases: "Multiple wicker furniture and custom resort seating projects delivered in Lucknow, Pune, and other major tourist cities.",
    whyChoose: [
      "Guest-First Design – Furniture engineered to maximize comfort and guest visual appeal.",
      "Extreme Weather Resistance – Materials built to withstand heavy UV exposure and pool chlorine.",
      "Low Maintenance – Save time and OPEX costs for hotel housekeeping and facility teams.",
      "Fast Delivery – Quick turnaround to meet seasonal and hotel renovation schedules.",
      "2-Year Warranty – India's only comprehensive commercial warranty."
    ],
    faqs: [
      { q: "What is the typical lead time for hospitality furniture projects?", a: "Most projects are completed in 2–4 weeks from order approval to delivery. We accelerate timelines for seasonal hotel renovations." },
      { q: "Can the furniture be customised to match our hotel or resort branding?", a: "Yes. We offer complete customisation in wicker weave styles, cushion fabrics, colors, finishes, and dimensions to match your brand guidelines." },
      { q: "Which materials are best for poolside and outdoor restaurant areas?", a: "Wicker (with PE synthetic core), Aluminium (rust-proof), and Stainless Steel (Grade 304/316) are ideal for high moisture, poolside, and coastal areas." },
      { q: "Do you provide installation services across India?", a: "Yes. We provide pan-India delivery and professional installation support for hotels and resorts." }
    ],
    recommended: [
      { id: "wicker-furniture", name: "Wicker Lounges" },
      { id: "poolside-loungers", name: "Poolside Loungers" },
      { id: "cabanas", name: "Premium Cabanas" },
      { id: "aluminium-benches", name: "Aluminium Seating" }
    ]
  },
  "healthcare": {
    name: "Healthcare & Hospitals",
    tagline: "Healing Gardens, Waiting Areas & Hospital Campuses",
    image: gbg3,
    desc: "Urbanland Products delivers premium, hygienic and easy-to-clean benches, planter boxes and outdoor seating solutions that create calming, therapeutic environments while meeting strict healthcare standards for durability and infection control.",
    developer: "Hospitals, Healing Gardens & Medical Campuses",
    supplied: "Hygienic easy-clean benches, wheelchair planters, walkways",
    standards: "ISO 9001:2015, Antibacterial coatings, ADA Compliant",
    metaTitle: "Outdoor Furniture for Healthcare & Hospitals India | Healing Gardens, Waiting Areas & Hospital Campuses | Urbanland Products",
    metaDesc: "Premium, easy-clean benches and planter boxes for healthcare & hospitals in India. Hygienic, durable solutions for healing gardens, waiting areas and hospital campuses. Trusted by healthcare facilities with 2-Year Guarantee.",
    challenges: [
      "Strict infection control and ease of sanitization/cleaning protocols for public spaces.",
      "Need for calming, therapeutic healing gardens and biophilic outdoor zones to support patient recovery.",
      "Extreme durability required for constant 24/7 patient and visitor institutional usage.",
      "Compliance with medical standards, wheelchair accessibility, and green building norms.",
      "Balancing calming visual aesthetics with zero maintenance and long-term cost efficiency."
    ],
    solutions: [
      { title: "Easy-Clean Benches", desc: "WPC, NFC, and metal options featuring smooth, non-porous, sanitizable surfaces to prevent bacterial buildup." },
      { title: "Healing Garden Planters", desc: "Create serene, calming green sanctuaries and therapeutic zones to reduce patient stress." },
      { title: "Durable Institutional Seating", desc: "Heavy-duty steel-frame benches engineered for campus pathways and high-traffic waiting zones." },
      { title: "Calming Landscape Solutions", desc: "Integrated biophilic planter-benches designed to foster peace and human well-being." }
    ],
    stats: [
      { value: "100%", label: "Easy to Sanitize" },
      { value: "24/7", label: "Heavy Duty Build" },
      { value: "50+", label: "Institutional Sites" }
    ],
    cases: [
      { name: "Godrej Projects", location: "Palghar, Maharashtra", desc: "Supplied 78 premium benches + 65 planter boxes for residential-style healthcare complex landscaping." },
      { name: "Kalpataru Vienta", location: "Kandivali, Mumbai", desc: "24 WPC benches + premium planter boxes supplied for recovery zones." },
      { name: "Navandhe Village Complex", location: "Raigad, Maharashtra", desc: "36 benches + 42 planter boxes installed across public paths and green spaces." },
      { name: "TATA Projects Ltd", location: "Gujarat Sites", desc: "Large-scale heavy-duty benches and planters for public institutional landscaping. Completed in 2–3 weeks." }
    ],
    extraCases: "Multiple institutional and campus-related installations in Thane, Pune, Indore, and healthcare facility gardens across Maharashtra.",
    whyChoose: [
      "Infection Control Design – Anti-microbial friendly materials with smooth, easy-to-sanitize structures.",
      "Biophilic Design Focus – Planters and layout configs specifically engineered to support recovery.",
      "Institutional Durability – Strong steel structures designed for 24/7 heavy public usage.",
      "Fast Turnaround – 2–4 weeks typical turnaround to meet clinical inauguration schedules.",
      "2-Year Warranty – Long-term peace of mind on all hospital furniture assets."
    ],
    faqs: [
      { q: "What is the typical lead time for healthcare furniture projects?", a: "Most projects are completed in 2–4 weeks from final design approval to installation." },
      { q: "Can benches and planters be customised for specific hospital requirements?", a: "Yes. We customize width, height, non-slip features, back support, armrests, and dynamic colors to support elderly and disabled patients." },
      { q: "Are your products suitable for strict infection control standards?", a: "Yes. Our WPC, NFC, and powder-coated metal surfaces are extremely smooth, non-porous, and chemical-resistant, making them easy to clean and disinfect." },
      { q: "Do you provide installation services across India?", a: "Yes. We provide pan-India delivery and professional anchoring installation support." }
    ],
    recommended: [
      { id: "benches", name: "Easy-Clean Benches" },
      { id: "planters", name: "Healing Planters" },
      { id: "ss-bollards", name: "Security Bollards" }
    ]
  },
  "education": {
    name: "Education & Universities",
    tagline: "Campus Canteens, Open Classrooms & Student Zones",
    image: gbg4,
    desc: "Urbanland Products delivers heavy-duty, student-proof benches, canteen tables and planter boxes engineered for high daily usage. Our solutions create durable, functional and welcoming outdoor spaces that support learning, relaxation and campus life while keeping maintenance costs low.",
    developer: "Schools, Colleges & Universities",
    supplied: "Heavy-duty integrated canteen tables, open-air diner benches",
    standards: "ISO 9001:2015, Vandal-Resistant, Flame-Retardant HPL Slats",
    metaTitle: "Outdoor Furniture for Education & Universities India | Campus Canteens, Open Classrooms & Student Zones | Urbanland Products",
    metaDesc: "Durable canteen tables, benches and planter boxes for schools, colleges and universities in India. Student-proof, low-maintenance outdoor furniture for campuses, open-air classrooms and common areas. 2-Year Guarantee.",
    challenges: [
      "Extreme daily wear and tear from thousands of active students in high-volume zones.",
      "Budget constraints while requiring long-lasting, heavy-duty outdoor assets.",
      "Safety and durability requirements for campus open-air classrooms and canteens.",
      "High maintenance burden on campus facilities and cleaning teams.",
      "Need for versatile, multi-purpose outdoor spaces supporting dining, studying, and college events."
    ],
    solutions: [
      { title: "Heavy-Duty Canteen Tables", desc: "Robust picnic-style tables with WPC/wooden tops and steel structures designed for busy university dining areas." },
      { title: "Durable Public Benches", desc: "WPC, NFC Wood, Mild Steel, and Aluminium benches engineered to prevent sagging, cracking, or tipping." },
      { title: "Premium Planter Boxes", desc: "Introduce beautiful green boundaries, improve local campus air quality, and enhance aesthetics." },
      { title: "Modular Student Zones", desc: "Versatile benches and tables that easily adapt to study pods, events, and campus lawns." }
    ],
    stats: [
      { value: "Student", label: "Vandal Proof" },
      { value: "50+", label: "Campuses Served" },
      { value: "2-4 Wks", label: "Calendar Speed" }
    ],
    cases: [
      { name: "Panchshil Tech Park", location: "Yerwada, Pune", desc: "Supplied and installed 32+ heavy-duty canteen tables for corporate campus common dining areas. Completed in 3–4 weeks." },
      { name: "EON Kharadi Infra", location: "MIDC Kharadi, Pune", desc: "Supplied and installed 26 integrated campus canteen tables. Completed in 3–4 weeks." },
      { name: "Godrej Palghar Campus", location: "Palghar, Maharashtra", desc: "78 premium benches + 65 sustainable planter boxes supplied for campus-style villa development. Completed in 2–3 weeks." },
      { name: "Navandhe Village Spaces", location: "Raigad, Maharashtra", desc: "36 benches + 42 planter boxes installed across recreational common zones. Completed in 2–3 weeks." }
    ],
    extraCases: "Multiple educational and campus projects delivered in Pune, Thane, Kharghar, Indore, and surrounding states.",
    whyChoose: [
      "Student-Proof Durability – Built with thick-wall steel and reinforced composites to handle extreme usage.",
      "Low Maintenance – Splinter-free, graffiti-resistant, and easily washable structures.",
      "Fast Turnaround – Scheduled delivery to align with academic breaks and admissions calendars.",
      "Green Campus Support – Eco-friendly, FSC-certified or recycled content materials.",
      "2-Year Warranty – Unmatched commercial security for educational institutions."
    ],
    faqs: [
      { q: "What is the typical lead time for education campus projects?", a: "Most campus projects are completed in 2–4 weeks from order to installation. We coordinate around school/college breaks to avoid disruption." },
      { q: "Can canteen tables, benches and planters be customised for our campus?", a: "Yes. We customize dimensions, sizes, and frame finishes to match school colors or college branding." },
      { q: "Are your canteen tables suitable for high wear and tear?", a: "Absolutely. Our heavy-duty tables are manufactured with zinc-primed steel frames and robust WPC/NFC slating, making them practically vandal-proof." },
      { q: "Do you provide installation services across India?", a: "Yes. We handle pan-India shipping and professional chemical anchoring on concrete bases." }
    ],
    recommended: [
      { id: "canteen-tables", name: "Canteen Tables" },
      { id: "benches", name: "Durable Benches" },
      { id: "planters", name: "Planter Boxes" },
      { id: "ss-bollards", name: "Campus Bollards" }
    ]
  },
  "municipal-smart-city": {
    name: "Municipal & Smart Cities",
    tagline: "Bus Shelters, Public Parks & Urban Infrastructure",
    image: gbg5,
    desc: "Urbanland Products delivers heavy-duty, vandal-resistant bus shelters, benches, dustbins, bollards and planter boxes engineered for 24/7 public use. Our solutions meet tender specifications, reduce long-term maintenance costs and help create cleaner, more organized, and aesthetically upgraded urban spaces.",
    developer: "Municipal Corporations, Smart Cities & Pedestrian Zones",
    supplied: "Solar-powered bus shelters, heavy dustbins, safety bollards",
    standards: "ISO 9001:2015, Tender-Compliant, Vandal-Resistant, Rust-Protected",
    metaTitle: "Outdoor Furniture for Municipal & Smart Cities India | Bus Shelters, Benches, Dustbins & Urban Infrastructure | Urbanland Products",
    metaDesc: "Durable, vandal-resistant bus shelters, benches, dustbins, bollards and planter boxes for municipal corporations and smart city projects in India. Tender-compliant, low-maintenance urban furniture with 2-Year Guarantee.",
    challenges: [
      "Constant 24/7 public usage leading to rapid physical wear, weathering, and vandalism.",
      "Strict government tender specifications and compliance certificates requirements.",
      "High ongoing municipal maintenance and frequent replacement budgets.",
      "Need to upgrade the visual aesthetics of public avenues while managing cost-efficiency.",
      "Requirement for fast delivery and robust chemical anchoring across multiple transit sites."
    ],
    solutions: [
      { title: "Custom Bus Shelters", desc: "Modern, durable, and highly weather-resistant transit shelters engineered for public comfort and advertisements." },
      { title: "Heavy-Duty Benches", desc: "WPC, NFC Wood, and double-zinc primed steel benches tailored for public parks, avenues, and smart avenues." },
      { title: "Smart-City Dustbins", desc: "Dual-compartment waste and recycling bins with robust locking systems to prevent animal access or theft." },
      { title: "SS Bollards & Safety Barriers", desc: "High-strength stainless steel bollards (fixed or removable) to secure pedestrian avenues." },
      { title: "Premium Planter Boxes", desc: "Avenue-grade steel and composite planters to introduce robust public greenery and bioswales." }
    ],
    stats: [
      { value: "Tender", label: "Compliant" },
      { value: "50+", label: "Public Projects" },
      { value: "24/7", label: "Vandal Proof" }
    ],
    cases: [
      { name: "Wadhwa Wise City", location: "Panvel, Maharashtra", desc: "Supplied and installed 4 custom bus shelters + multiple benches and planters for the new township transit network." },
      { name: "Jindal Power Simhapuri Unit", location: "Nellore, Andhra Pradesh", desc: "Supplied 5 bus shelters, 2 heavy dustbins and 5 public benches for site infrastructure upgrades. Completed in 1 month (Mar 2026)." },
      { name: "Dharoi Dam Campus", location: "Mehsana, Gujarat", desc: "350+ heavy dual-compartment dustbins supplied for the public tourism and dam infrastructure project." },
      { name: "Navi Mumbai Airport", location: "Navi Mumbai, Maharashtra", desc: "Supplied 40 heavy-duty dustbins for the new airport project office and surrounding public paths." }
    ],
    extraCases: "175 dustbins supplied to Mehsana, multiple transit bus shelters and benches delivered across Gujarat, Maharashtra, and Andhra Pradesh smart city networks.",
    whyChoose: [
      "Tender-Compliant – Built and certified to meet all Indian government technical specifications.",
      "Vandal-Resistant – High-strength anchoring, hidden locking structures, and thick metal fabrication.",
      "Low OPEX – Durable double powder-coating and WPC prevent ongoing rust treatments.",
      "Pan-India Service – BOQs, structural wind calculations, drawings, and site installations.",
      "2-Year Warranty – Strong comprehensive guarantee for public infrastructure investments."
    ],
    faqs: [
      { q: "What is the typical lead time for municipal and smart city projects?", a: "Most projects are completed in 2–4 weeks from drawing sign-off. Large public works are delivered in pre-agreed phase schedules." },
      { q: "Can products be customised as per government tender specifications?", a: "Yes. We specialize in customizing dimensions, paint specifications (RAL codes), branding plates, and mounting styles to meet tender requirements." },
      { q: "Are your bus shelters and benches suitable for high public usage and vandalism?", a: "Yes. All products are manufactured with thick-gauge steel, hot-dip galvanization, and anti-tamper security bolts to resist public wear and vandalism." },
      { q: "Do you provide installation services across India?", a: "Yes. We handle delivery and chemical concrete anchoring across all Indian states." }
    ],
    recommended: [
      { id: "bus-shelters", name: "Smart Bus Shelters" },
      { id: "dustbins", name: "Smart-City Bins" },
      { id: "ss-bollards", name: "SS Safety Bollards" },
      { id: "benches", name: "Heavy-Duty Benches" }
    ]
  }
};

const SolutionsDetail = () => {
  const { vertical } = useParams();
  const [activeIndex, setActiveIndex] = useState(null);

  const meta = verticalsMeta[vertical] || verticalsMeta["real-estate"];

  // Gallery array to loop visual assets for cases
  const galleryImages = [gbg1, gbg2, gbg3, gbg4, gbg5, welcome1, welcome2];

  useEffect(() => {
    updatePageSEO({
      title: meta.metaTitle || `${meta.name} Solutions | Urbanland Products`,
      description: meta.metaDesc || meta.desc,
      og_image: meta.image
    });
    return () => cleanPageSEO();
  }, [meta]);

  return (
    <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-0">
      {/* Hero Banner - Full Screen */}
      <section className="w-full h-[100vh] md:h-dvh mb-16 relative bg-black/5 overflow-hidden">
        {/* Background Image spanning full width */}
        <img
          src={meta.image}
          alt={meta.name}
          className="absolute inset-0 w-full h-full object-cover select-none z-0"
        />
        {/* Overlay gradient spanning full width */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/45 z-10" />

        {/* Content container aligned with site margins */}
        <div className="absolute inset-0 z-20 flex flex-col justify-between text-white pt-36 pb-12 md:pb-16">
          {/* breadcrumb inside Hero */}
          <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12">
            <nav className="flex items-center select-none text-[9px] sm:text-[10px] font-black uppercase tracking-widest gap-2 bg-[#1A1A1A]/60 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-full w-fit">
              <Link to="/" className="text-white/60 hover:text-white transition-colors no-underline">Home</Link>
              <span className="text-white/30">/</span>
              <Link to="/solutions" className="text-white/60 hover:text-white transition-colors no-underline">Solutions</Link>
              <span className="text-white/30">/</span>
              <span className="text-white">{meta.name}</span>
            </nav>
          </div>

          {/* Title & Description inside Hero */}
          <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12">
            <span className="text-[10px] font-black uppercase tracking-wider bg-[#C9A84C] text-[#232120] px-3.5 py-1.5 rounded-full w-fit mb-3 block">
              Industry Vertical
            </span>
            <h1 className="text-3.5xl sm:text-5.5xl md:text-6.5xl lg:text-[4rem] font-bold uppercase leading-none tracking-tight max-w-4xl" style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.4)' }}>
              {meta.name}
            </h1>
            <p className="text-xs sm:text-sm font-medium tracking-wide text-white/95 mt-4 max-w-2xl leading-relaxed" style={{ textShadow: '1px 1px 5px rgba(0,0,0,0.55)' }}>
              {meta.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Sector Overview & Compliance visual split */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left text summaries & specs badges */}
        <div className="lg:col-span-7 text-left">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— Landscape Integration</span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#1A1A1A] mb-6 leading-none">
            Sector Guidelines & Solutions
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#2D2D2D]/85">
            {meta.desc}
          </p>

          {/* Mini logistics card grid instead of text blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 mb-8">
            <div className="bg-[#EAE5DB]/30 rounded-2xl p-4 border border-black/[0.03]">
              <span className="block text-[8px] font-black uppercase tracking-wider text-black/40">Primary Developers</span>
              <span className="text-xs font-black uppercase text-black/85 block mt-1">{meta.developer.split(',')[0]}</span>
            </div>
            <div className="bg-[#EAE5DB]/30 rounded-2xl p-4 border border-black/[0.03]">
              <span className="block text-[8px] font-black uppercase tracking-wider text-black/40">Delivered Volume</span>
              <span className="text-xs font-black uppercase text-black/85 block mt-1">{meta.supplied.split(',')[0]}</span>
            </div>
            <div className="bg-[#EAE5DB]/30 rounded-2xl p-4 border border-black/[0.03]">
              <span className="block text-[8px] font-black uppercase tracking-wider text-black/40">Compliance Standards</span>
              <span className="text-xs font-black uppercase text-[#2C5F2E] block mt-1">{meta.standards.split(',')[0]}</span>
            </div>
            <div className="bg-[#EAE5DB]/30 rounded-2xl p-4 border border-black/[0.03]">
              <span className="block text-[8px] font-black uppercase tracking-wider text-black/40">India Guarantee</span>
              <span className="text-xs font-black uppercase text-[#C9A84C] block mt-1">2-Year Comprehensive</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="px-6 py-3.5 bg-[#2C5F2E] hover:bg-[#C9A84C] text-white rounded-full font-bold uppercase tracking-wider text-[10px] transition-colors cursor-pointer shadow-md no-underline"
            >
              Get a Quote →
            </Link>
            <Link
              to="/resources/downloads"
              className="px-6 py-3.5 bg-[#EAE5DB] text-[#2D2D2D] rounded-full font-bold uppercase tracking-wider text-[10px] hover:bg-black hover:text-white transition-colors border border-black/[0.04] cursor-pointer no-underline"
            >
              Download Brochure ↓
            </Link>
          </div>
        </div>

        {/* Right huge immersive image card */}
        <div className="lg:col-span-5 relative group overflow-hidden rounded-[2.5rem] shadow-xl aspect-square border border-black/[0.05] select-none">
          <img 
            src={meta.image} 
            alt={meta.name} 
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          <span className="absolute bottom-6 left-6 text-[9px] font-black uppercase tracking-widest text-white bg-black/45 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
            ✦ Visual Range Showcase
          </span>
        </div>
      </section>

      {/* Challenges Visual Cards Section */}
      {meta.challenges && (
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
          <div className="bg-white rounded-[2.5rem] border border-black/[0.04] p-8 md:p-14 shadow-sm">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— Industry Pain Points</span>
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#1A1A1A] mb-12 border-b border-[#2D2D2D]/10 pb-4">
              Challenges Faced by Operators & Developers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {meta.challenges.slice(0, 3).map((item, idx) => (
                <div key={idx} className="bg-[#F7F4EF]/55 rounded-[2rem] p-6 border border-black/[0.03] flex flex-col gap-4">
                  <span className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0 select-none border border-red-100">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M12 3a9 9 0 100 18 9 9 0 000-18z" />
                    </svg>
                  </span>
                  <p className="text-xs sm:text-sm text-[#2D2D2D]/85 leading-relaxed font-semibold">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tailored Solutions Section */}
      {meta.solutions && (
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
          <div className="mb-12">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— Manufactured Range</span>
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#1A1A1A] leading-none">
              Our Tailored Solutions for this Sector
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {meta.solutions.map((item, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] p-8 border border-black/[0.03] shadow-sm hover:border-[#2C5F2E]/25 transition-all">
                <div className="w-8 h-8 rounded-md bg-[#2C5F2E]/10 flex items-center justify-center font-bold text-[#2C5F2E] mb-4 text-xs select-none">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-black text-black uppercase mb-2 leading-none">{item.title}</h3>
                <p className="text-xs text-[#2D2D2D]/60 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Real Projects Image Gallery Section (Uses images more than text) */}
      {meta.cases && (
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24 select-none">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C] mb-3 block">— Visual Case Studies</span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1A1A1A] leading-none">
                Real Projects. Real Impact.
              </h2>
            </div>
            <div className="flex gap-6">
              {meta.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-1 pr-6 border-r border-black/10 last:border-none">
                  <span className="text-2xl font-black text-[#2C5F2E] leading-none">{stat.value}</span>
                  <span className="text-[8px] font-bold uppercase tracking-wider text-black/45">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {meta.cases.map((c, idx) => {
              // Cycle through available visual gallery assets
              const cardImage = galleryImages[idx % galleryImages.length];
              return (
                <div 
                  key={idx} 
                  className="group relative bg-[#2D2D2D] rounded-[2.5rem] overflow-hidden aspect-[16/11] flex flex-col justify-end p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-black/5 cursor-pointer"
                >
                  {/* Photo background */}
                  <div className="absolute inset-0 z-0 transition-transform duration-700 ease-out transform group-hover:scale-103">
                    <img src={cardImage} alt={c.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-45 transition-opacity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                  </div>

                  {/* Content overlay */}
                  <div className="relative z-10 w-full text-left">
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#C9A84C] bg-[#C9A84C]/10 border border-[#C9A84C]/35 px-3 py-1 rounded-full mb-3 inline-block">
                      {c.location}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black uppercase text-white mb-2 leading-tight group-hover:text-[#C9A84C] transition-colors">
                      {c.name}
                    </h3>
                    <p className="text-xs text-white/70 leading-relaxed font-semibold max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 overflow-hidden pt-1 border-t border-white/10 mt-2">
                      {c.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {meta.extraCases && (
            <div className="bg-[#EAE5DB]/35 rounded-[2rem] border border-black/[0.03] p-6 text-center mt-8">
              <p className="text-xs text-black/65 font-bold leading-relaxed">
                📢 <strong>Additional Regional Deployments:</strong> {meta.extraCases}
              </p>
            </div>
          )}
        </section>
      )}

      {/* Why Choose Us Section */}
      {meta.whyChoose && (
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
          <div className="bg-white rounded-[2.5rem] border border-black/[0.04] p-8 md:p-14 shadow-sm">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— The Client Advantage</span>
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#1A1A1A] mb-12 border-b border-[#2D2D2D]/10 pb-4">
              Why Leading Developers & Organizations Prefer Urbanland Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {meta.whyChoose.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-2 rounded-xl transition-all hover:bg-[#F7F4EF]/55">
                  <span className="w-6 h-6 rounded-full bg-[#2C5F2E]/10 text-[#2C5F2E] flex items-center justify-center shrink-0 select-none">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-xs sm:text-sm text-[#2D2D2D]/85 font-semibold leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sector FAQ Accordion */}
      {meta.faqs && (
        <section className="max-w-[850px] mx-auto px-6 mb-24">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— FAQ</span>
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#1A1A1A]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {meta.faqs.map((faq, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <div 
                  key={idx}
                  className={`bg-white rounded-[2rem] border transition-all duration-500 overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.005)] ${
                    isOpen 
                      ? "border-[#2C5F2E]/40 ring-1 ring-[#2C5F2E]/10" 
                      : "border-black/[0.03] hover:border-black/10"
                  }`}
                >
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-6 md:px-8 flex justify-between items-center text-left cursor-pointer focus:outline-none border-none select-none group bg-white"
                  >
                    <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-[#1A1A1A] group-hover:text-[#2C5F2E] pr-6 transition-colors leading-snug">
                      {faq.q}
                    </h3>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 shrink-0 select-none ${
                      isOpen ? "bg-[#2C5F2E] text-white rotate-45" : "bg-[#F7F4EF] text-[#2D2D2D] group-hover:bg-[#2C5F2E]/10"
                    }`}>
                      ＋
                    </span>
                  </button>

                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-black/[0.05]" : "max-h-0"
                  }`}>
                    <p className="px-6 py-6 md:px-8 text-xs sm:text-sm leading-relaxed text-[#2D2D2D]/75 bg-[#F7F4EF]/20">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Recommended Products Grid */}
      {meta.recommended?.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 select-none">
          <h2 className="text-3xl font-black uppercase tracking-tight text-[#1A1A1A] mb-12 border-b border-[#2D2D2D]/10 pb-4">
            Recommended Products for this Sector
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {meta.recommended.map((item, idx) => {
              // Visual asset rotation for recommendations
              const cardImage = galleryImages[(idx + 4) % galleryImages.length];
              return (
                <Link
                  key={item.id}
                  to={`/products`}
                  className="relative bg-white rounded-[2rem] border border-black/[0.04] p-6 shadow-sm hover:shadow-xl hover:border-[#2C5F2E]/30 hover:-translate-y-1 transition-all duration-500 cursor-pointer flex flex-col justify-between aspect-square group no-underline text-[#1A1A1A] overflow-hidden"
                >
                  {/* Miniature decorative preview asset to make it visual */}
                  <div className="absolute inset-0 z-0 transition-transform duration-700 ease-out transform group-hover:scale-105 opacity-5 group-hover:opacity-10">
                    <img src={cardImage} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="relative z-10 text-left">
                    <span className="text-[8px] font-black uppercase tracking-widest text-[#2C5F2E] bg-[#2C5F2E]/5 border border-[#2C5F2E]/10 px-2.5 py-1.5 rounded-md mb-2 inline-block">
                      {vertical.replace("-", " ")}
                    </span>
                    <h4 className="text-lg sm:text-xl font-black uppercase group-hover:text-[#2C5F2E] transition-colors leading-snug mt-2">
                      {item.name}
                    </h4>
                  </div>
                  
                  <span className="relative z-10 text-[10px] font-black uppercase tracking-wider text-black/35 group-hover:text-[#2C5F2E] transition-colors mt-6 block">
                    View Specifications →
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Unified CTA Section */}
      <CTASection 
        title={`Ready to Partner with India's Leading solutions Provider for ${meta.name}?`}
        description="Support sustainable development, earn LEED points, and select premium outdoor systems designed for absolute longevity."
        tagText="Collaborate with Urbanland"
        primaryText="Initiate Quote Builder →"
        primaryLink="/contact"
        secondaryText="Download Sector Brochure ↓"
        secondaryLink="/resources/downloads"
      />
    </div>
  );
};

export default SolutionsDetail;
