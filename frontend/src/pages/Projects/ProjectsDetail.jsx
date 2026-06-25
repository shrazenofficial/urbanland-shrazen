import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";
import CTASection from "../../components/CTASection/CTASection";
import SupportFAQ from "../../components/SupportFAQ/SupportFAQ";
import AdvantageCTA from "../../components/AdvantageCTA/AdvantageCTA";

// Import images
import gbg1 from '../../assets/gallery_real_estate.png';
import gbg2 from '../../assets/gallery_hotels.png';
import gbg3 from '../../assets/gallery_hospitals.png';
import gbg4 from '../../assets/gallery_education.png';
import gbg5 from '../../assets/gallery_smart_city.png';
import welcome1 from '../../assets/welcome-1.png';
import welcome2 from '../../assets/welcome-2.png';

// Import catalog thumbnails for points
import benchImg from '../../assets/Bench.jpeg';
import benchPlanterImg from '../../assets/Bench_Planter.jpeg';
import busSheltersImg from '../../assets/Bus_Shelters.jpeg';
import carShelterImg from '../../assets/Car_Shelter.jpeg';
import canteenTablesImg from '../../assets/Canteen_Tables.jpeg';
import dustbinsImg from '../../assets/Dustbins.jpeg';
import plantersBoxImg from '../../assets/Planters_Box.jpeg';
import wickerFurnitureImg from '../../assets/Wicker_Furniture.jpeg';

const projectsMeta = {
  "lodha": {
    title: "Lodha Projects",
    client: "Lodha Developers (Macrotech)",
    supplied: "Sustainable WPC & NFC Benches, Planter boxes, Modular clubhouse seating, Poolside loungers",
    volume: "Multiple Township and Sky Deck sites in MMR & Pune",
    standards: "Custom structural stability, FSC timbers, C5 corrosion barrier powder coating",
    image: gbg1,
    metaTitle: "Lodha Projects | Sustainable Outdoor Furniture & Green Amenity Solutions | Urbanland Products",
    metaDesc: "Sustainable outdoor benches, planter boxes and green amenity solutions delivered for Lodha Projects. Eco-friendly WPC, NFC Wood, Aluminium & Mild Steel furniture supporting green building certifications. 2-Year Guarantee.",
    subTitle: "Sustainable Outdoor Furniture & Green Amenity Solutions",
    desc: "Urbanland Products partners with Lodha to deliver premium, eco-friendly benches, planter boxes and complete outdoor amenity solutions. Our sustainable WPC, NFC Wood and long-life metal products help create beautiful, low-maintenance green spaces that support biophilic design and green building certifications.",
    challenges: [
      { text: "Creating premium outdoor spaces while meeting strict green building standards (IGBC, GRIHA, LEED).", image: gbg1 },
      { text: "Reducing long-term environmental impact through durable, low-maintenance materials.", image: benchImg },
      { text: "Replacing traditional wood with sustainable, eco-friendly alternatives like WPC and NFC Wood.", image: benchPlanterImg },
      { text: "Minimising waste and carbon footprint across large-scale township and villa projects.", image: welcome2 },
      { text: "Delivering beautiful, biophilic outdoor environments that enhance resident well-being.", image: welcome1 }
    ],
    solutions: [
      { title: "WPC & NFC Wood Benches", desc: "Made from recycled plastics and natural fibers – zero deforestation, exceptional weather resistance and zero maintenance.", image: benchImg },
      { title: "Premium Planter Boxes", desc: "Mild Steel, Wooden, Aluminium & Stainless Steel options that support lush green landscaping and biophilic design.", image: plantersBoxImg },
      { title: "Modular Clubhouse Seating", desc: "Sustainable, sophisticated lounge and dining sets for high-traffic community spaces.", image: welcome1 },
      { title: "Poolside Loungers & Daybeds", desc: "Weatherproof, long-life materials that reduce replacement frequency and chemical treatment waste.", image: gbg2 },
      { title: "Custom Amenity Packages", desc: "Turnkey green solutions for sky decks, rooftop gardens and villa terraces.", image: benchPlanterImg }
    ],
    stats: [
      { value: "50+", label: "Luxury Projects" },
      { value: "15+", label: "Cities Served" },
      { value: "2-4 Wks", label: "Typical Delivery" }
    ],
    cases: [
      { name: "Godrej Projects Development", location: "Palghar, Maharashtra", desc: "78 premium WPC & NFC Wood benches + 65 sustainable planter boxes for luxury villa landscaping. Completed in 2–3 weeks." },
      { name: "Kalpataru Vienta", location: "Kandivali East, Mumbai", desc: "24 WPC benches + premium eco-friendly planter boxes. Completed in 3–4 weeks." },
      { name: "Wadhwa Wise City", location: "Panvel, Maharashtra", desc: "4 custom bus shelters + multiple sustainable benches and planters for the large township. Completed in 1 month (Dec 2025)." },
      { name: "Navandhe Village", location: "Taluka Khalapur, Raigad", desc: "36 benches + 42 planter boxes installed across community gardens and green pathways. Completed in 2–3 weeks." }
    ],
    extraCases: "Thane (West) – 14 WPC benches | Arandiya, Indore – 28 benches | Kharghar, Navi Mumbai – 10 benches & planters | Munjeri & Haveli, Pune – Multiple sustainable benches and planters.",
    whyChoose: [
      "True Green Materials – WPC & NFC Wood reduce deforestation and use recycled content.",
      "Long Product Life – 12–20+ years lifespan drastically lowers replacement waste.",
      "Green Building Support – Helps achieve IGBC, GRIHA and LEED certification points.",
      "Fast & Efficient Delivery – Meets tight RERA timelines while maintaining sustainability standards.",
      "2-Year Warranty – India’s only comprehensive warranty for long-term assurance."
    ],
    faqs: [
      { q: "What is the typical lead time for Lodha-style luxury projects?", a: "Most projects are completed in 2–4 weeks from design approval to installation." },
      { q: "Can products be customised to match Lodha’s design language?", a: "Yes. We offer full customisation in size, shape, finish, colour and branding to match your unique architectural theme." },
      { q: "Do your products support green building certifications?", a: "Yes. Our WPC, NFC Wood and long-life metal products help achieve IGBC, GRIHA and LEED points through durability and sustainable materials." },
      { q: "Do you provide installation services across India?", a: "Yes. We provide pan-India delivery and professional anchoring installation support." }
    ]
  },
  "adani": {
    title: "Adani Realty Projects",
    client: "Adani Realty Group",
    supplied: "Complete site outdoor furniture: benches, trashbins, concrete planters, cantilever car shelters",
    volume: "Premium luxury towers and townships in Ahmedabad, Mumbai, NCR",
    standards: "High-wind certified cantilever structural car sheds, Grade 304/316 SS hardware",
    image: gbg5,
    metaTitle: "Adani Realty Projects | Sustainable Outdoor Furniture & Green Amenity Solutions | Urbanland Products",
    metaDesc: "Sustainable outdoor benches, planter boxes and green amenity solutions delivered for Adani Realty Projects. Eco-friendly WPC, NFC Wood, Aluminium & Mild Steel furniture supporting green building certifications and biophilic design. 2-Year Guarantee.",
    subTitle: "Sustainable Outdoor Furniture & Green Amenity Solutions",
    desc: "Urbanland Products partners with Adani Realty to deliver premium, eco-friendly benches, planter boxes and complete outdoor amenity solutions. Our sustainable WPC, NFC Wood and long-life metal products help create beautiful, low-maintenance green spaces that support biophilic design and green building certifications.",
    challenges: [
      { text: "Creating premium outdoor spaces while meeting strict green building standards (IGBC, GRIHA, LEED).", image: gbg5 },
      { text: "Reducing long-term environmental impact through durable, low-maintenance materials.", image: benchImg },
      { text: "Replacing traditional wood with sustainable, eco-friendly WPC and NFC Wood.", image: benchPlanterImg },
      { text: "Minimising waste and carbon footprint across massive township and mixed-use projects.", image: welcome2 },
      { text: "Delivering beautiful, biophilic outdoor environments that enhance resident well-being and project value.", image: welcome1 }
    ],
    solutions: [
      { title: "WPC & NFC Wood Benches", desc: "Made from recycled plastics and natural fibers – zero deforestation, exceptional weather resistance and zero maintenance.", image: benchImg },
      { title: "Premium Planter Boxes", desc: "Mild Steel, Wooden, Aluminium & Stainless Steel options that support lush green landscaping and biophilic design.", image: plantersBoxImg },
      { title: "Modular Clubhouse Seating", desc: "Sustainable, sophisticated lounge and dining sets for community spaces.", image: welcome1 },
      { title: "Poolside Loungers & Daybeds", desc: "Weatherproof, long-life materials that reduce replacement frequency and chemical treatment waste.", image: gbg2 },
      { title: "Custom Amenity Packages", desc: "Turnkey green solutions for sky decks, rooftop gardens and large township terraces.", image: carShelterImg }
    ],
    stats: [
      { value: "50+", label: "Luxury Projects" },
      { value: "15+", label: "Cities Served" },
      { value: "2-4 Wks", label: "Typical Delivery" }
    ],
    cases: [
      { name: "Godrej Projects Development", location: "Palghar, Maharashtra", desc: "78 premium WPC & NFC Wood benches + 65 sustainable planter boxes for luxury villa landscaping. Completed in 2–3 weeks." },
      { name: "Kalpataru Vienta", location: "Kandivali East, Mumbai", desc: "24 WPC benches + premium eco-friendly planter boxes. Completed in 3–4 weeks." },
      { name: "Wadhwa Wise City", location: "Panvel, Maharashtra", desc: "4 custom bus shelters + multiple sustainable benches and planters for the large township. Completed in 1 month (Dec 2025)." },
      { name: "Navandhe Village", location: "Taluka Khalapur, Raigad", desc: "36 benches + 42 planter boxes installed across community gardens and green pathways. Completed in 2–3 weeks." }
    ],
    extraCases: "Thane (West) – 14 WPC benches | Arandiya, Indore – 28 benches | Kharghar, Navi Mumbai – 10 benches & planters | Munjeri & Haveli, Pune – Multiple sustainable benches and planters.",
    whyChoose: [
      "True Green Materials – WPC & NFC Wood reduce deforestation and use recycled content.",
      "Long Product Life – 12–20+ years lifespan drastically lowers replacement waste.",
      "Green Building Support – Helps achieve IGBC, GRIHA and LEED certification points.",
      "Fast & Efficient Delivery – Meets tight project timelines while maintaining sustainability standards.",
      "2-Year Warranty – Long-term assurance on sustainable products."
    ],
    faqs: [
      { q: "What is the typical lead time for Adani-style large-scale projects?", a: "Most projects are completed in 2–4 weeks from drawing sign-off to professional installation." },
      { q: "Can products be customised to match Adani’s design language?", a: "Yes. We offer full customisation in size, shape, finish, colour and branding to match your unique luxury layout." },
      { q: "Do your products support green building certifications?", a: "Yes. Our WPC, NFC Wood and long-life metal products help achieve IGBC, GRIHA and LEED points through durability and sustainable materials." },
      { q: "Do you provide installation services across India?", a: "Yes. We provide pan-India delivery and professional anchoring installation support." }
    ]
  },
  "oberoi": {
    title: "Oberoi Projects",
    client: "Oberoi Realty & Hotels Group",
    supplied: "Premium handcrafted wicker dining ensembles, cabanas, poolside loungers, bespoke deck seats",
    volume: "Luxury residential towers and premium wellness resort decks",
    standards: "PE synthetic UV-tested wicker, weatherproof quick-dry cushions",
    image: gbg2,
    metaTitle: "Oberoi Projects | Sustainable Outdoor Furniture & Green Amenity Solutions | Urbanland Products",
    metaDesc: "Sustainable outdoor benches, planter boxes and green amenity solutions delivered for Oberoi Projects. Eco-friendly WPC, NFC Wood, Aluminium & Mild Steel furniture supporting green building certifications and biophilic design. 2-Year Guarantee.",
    subTitle: "Sustainable Outdoor Furniture & Green Amenity Solutions",
    desc: "Urbanland Products partners with Oberoi to deliver premium, eco-friendly benches, planter boxes and complete outdoor amenity solutions. Our sustainable WPC, NFC Wood and long-life metal products help create sophisticated, low-maintenance green spaces that enhance luxury living and support biophilic design.",
    challenges: [
      { text: "Creating world-class, premium outdoor spaces while achieving high green building standards (IGBC, GRIHA, LEED).", image: gbg2 },
      { text: "Reducing environmental impact through durable, recyclable materials instead of traditional wood.", image: benchImg },
      { text: "Delivering low-maintenance solutions that maintain pristine, luxury aesthetics for decades.", image: wickerFurnitureImg },
      { text: "Meeting stringent timelines for luxury project handovers and seasonal resort renovations.", image: welcome2 },
      { text: "Providing biophilic design elements that enhance resident well-being and property value.", image: welcome1 }
    ],
    solutions: [
      { title: "WPC & NFC Wood Benches", desc: "Made from recycled plastics and natural fibers – zero deforestation, exceptional weather resistance and zero maintenance.", image: benchImg },
      { title: "Premium Planter Boxes", desc: "Mild Steel, Wooden, Aluminium & Stainless Steel options that create lush, biophilic green spaces.", image: plantersBoxImg },
      { title: "Modular Clubhouse Seating", desc: "Sustainable, sophisticated lounge and dining sets for exclusive community areas.", image: welcome1 },
      { title: "Poolside Loungers & Daybeds", desc: "Weatherproof, long-life materials that reduce replacement frequency and chemical treatment waste.", image: gbg2 },
      { title: "Custom Amenity Packages", desc: "Turnkey green solutions for sky decks, rooftop gardens and villa terraces.", image: wickerFurnitureImg }
    ],
    stats: [
      { value: "50+", label: "Luxury Projects" },
      { value: "15+", label: "Cities Served" },
      { value: "2-4 Wks", label: "Typical Delivery" }
    ],
    cases: [
      { name: "Godrej Projects Development", location: "Palghar, Maharashtra", desc: "78 premium WPC & NFC Wood benches + 65 sustainable planter boxes for luxury villa landscaping. Completed in 2–3 weeks." },
      { name: "Kalpataru Vienta", location: "Kandivali East, Mumbai", desc: "24 WPC benches + premium eco-friendly planter boxes. Completed in 3–4 weeks." },
      { name: "Wadhwa Wise City", location: "Panvel, Maharashtra", desc: "4 custom bus shelters + multiple sustainable benches and planters for the large township. Completed in 1 month (Dec 2025)." },
      { name: "Navandhe Village", location: "Taluka Khalapur, Raigad", desc: "36 benches + 42 planter boxes installed across community gardens and green pathways. Completed in 2–3 weeks." }
    ],
    extraCases: "Thane (West) – 14 WPC benches | Arandiya, Indore – 28 benches | Kharghar, Navi Mumbai – 10 benches & planters | Munjeri & Haveli, Pune – Multiple sustainable benches and planters.",
    whyChoose: [
      "True Green Materials – WPC & NFC Wood reduce deforestation and use recycled content.",
      "Long Product Life – 12–20+ years lifespan drastically lowers replacement waste.",
      "Green Building Support – Helps achieve IGBC, GRIHA and LEED certification points.",
      "Fast & Efficient Delivery – Meets tight luxury project timelines while maintaining sustainability standards.",
      "2-Year Warranty – Long-term assurance on sustainable products."
    ],
    faqs: [
      { q: "What is the typical lead time for Oberoi-style luxury projects?", a: "Most projects are completed in 2–4 weeks from drawing sign-off to professional installation." },
      { q: "Can products be customised to match Oberoi’s design language?", a: "Yes. We offer full customisation in size, shape, finish, colour and branding to match your unique luxury layout." },
      { q: "Do your products support green building certifications?", a: "Yes. Our WPC, NFC Wood and long-life metal products help achieve IGBC, GRIHA and LEED points through durability and sustainable materials." },
      { q: "Do you provide installation services across India?", a: "Yes. We provide pan-India delivery and professional anchoring installation support." }
    ]
  },
  "mumbai": {
    title: "Mumbai Projects",
    client: "MMRDA, Municipal Corporations, and Leading Real Estate Developers",
    supplied: "WPC & NFC Wood Benches, Premium Planter Boxes, Custom Transit Bus Shelters, Wicker sets",
    volume: "Corporate hubs in BKC, residential towers in Kandivali, Thane, Dombivali",
    standards: "Grade 316 Marine-grade stainless steel options to resist heavy coastal humidity",
    image: gbg5,
    metaTitle: "Mumbai Projects | Outdoor Furniture Installations by Urbanland Products – Benches, Planters & Amenity Solutions",
    metaDesc: "Premium outdoor benches, planter boxes and amenity furniture delivered for Mumbai, Navi Mumbai, Thane, Kharghar, Kandivali and surrounding areas. Trusted by Godrej, Kalpataru, Wadhwa and leading developers. Sustainable WPC & NFC Wood solutions with 2-Year Guarantee.",
    subTitle: "Sustainable Outdoor Furniture & Green Amenity Solutions",
    desc: "Urbanland Products has successfully delivered premium, eco-friendly benches, planter boxes and complete outdoor amenity solutions across Mumbai, Navi Mumbai, Thane and surrounding regions. Our sustainable WPC, NFC Wood and metal furniture help leading developers create beautiful, long-lasting green spaces in luxury residential projects.",
    challenges: [
      { text: "Creating premium outdoor spaces while meeting green building standards in a dense urban environment.", image: gbg5 },
      { text: "Combating a harsh coastal climate, heavy monsoons, and high humidity levels daily.", image: wickerFurnitureImg },
      { text: "Reducing ongoing maintenance and repair costs for high-footfall clubhouses and sky decks.", image: benchImg },
      { text: "Replacing traditional teak and sesam wood with truly sustainable alternatives (WPC & NFC Wood).", image: welcome2 },
      { text: "Delivering biophilic green spaces that enhance resident well-being and property value.", image: welcome1 }
    ],
    solutions: [
      { title: "WPC & NFC Wood Benches", desc: "Zero-maintenance, natural wood look, ideal for Mumbai's coastal and high-humidity environments.", image: benchImg },
      { title: "Premium Planter Boxes", desc: "Create lush green oases and privacy boundaries in limited urban and sky deck spaces.", image: plantersBoxImg },
      { title: "Modular Clubhouse Seating", desc: "Stylish and highly durable hand-woven lounge & dining wicker furniture sets.", image: wickerFurnitureImg },
      { title: "Poolside & Terrace Furniture", desc: "Weatherproof daybeds and poolside loungers built to withstand chlorinated pool water.", image: gbg2 },
      { title: "Custom Amenity Packages", desc: "Turnkey green solutions for sky decks, rooftop gardens, and villa terraces.", image: busSheltersImg }
    ],
    stats: [
      { value: "24+", label: "Mumbai Projects" },
      { value: "Coastal", label: "Spec Grade" },
      { value: "2-4 Wks", label: "Typical Delivery" }
    ],
    cases: [
      { name: "Kalpataru Vienta", location: "Kandivali East, Mumbai", desc: "24 WPC benches + premium planter boxes supplied and installed. Completed in 3–4 weeks." },
      { name: "Wadhwa Wise City", location: "Panvel, MMR", desc: "4 custom transit bus shelters + multiple sustainable benches and planters supplied and anchored. Completed in 1 month (Dec 2025)." },
      { name: "Kharghar Residential", location: "Navi Mumbai", desc: "10 heavy WPC benches & premium planter boxes supplied and anchored." },
      { name: "Bandra Kurla Complex", location: "BKC, Mumbai", desc: "Multiple custom public benches supplied for a premium commercial-cum-residential development." }
    ],
    extraCases: "Thane (West) – 14 WPC benches | Kolshet, Thane – 19 benches | Andheri East & West – Wicker furniture projects | Goregaon West – Wicker outdoor sets | Vashi & Dombivali – Multiple projects.",
    whyChoose: [
      "Coastal Climate Expertise – Materials engineered for Mumbai’s high humidity and salt air.",
      "Fast Turnaround – Meets tight RERA handover and township launch schedules.",
      "True Sustainability – WPC & NFC Wood reduce deforestation and utilize recycled waste.",
      "Customization – Perfect match with modern Mumbai architecture and branding.",
      "End-to-End Support – Design consultation to professional chemical anchoring installation."
    ],
    faqs: [
      { q: "What is the typical lead time for Mumbai projects?", a: "Most projects are completed in 2–4 weeks from drawing approval to professional anchoring installation." },
      { q: "Can products be customised for Mumbai’s coastal climate?", a: "Yes. Marine-grade Stainless Steel (316) and Aluminium options are ideal to resist high salinity and humidity." },
      { q: "Do your products support green building certifications?", a: "Yes. Our WPC, NFC Wood and recyclable materials help achieve IGBC, GRIHA and LEED points." },
      { q: "Do you provide installation services in Mumbai & MMR?", a: "Yes. We provide local delivery and professional chemical anchoring support across Mumbai, Navi Mumbai, Thane, and MMR." }
    ]
  },
  "delhi": {
    title: "Delhi Projects",
    client: "DDA, Municipal Corporations, and Leading Corporate & Residential Developers",
    supplied: "Heavy-duty Benches, Integrated dining table sets, Custom planter boxes, Tensile shading canopies",
    volume: "Public squares, educational campuses in Gurgaon, Noida, Greater Noida",
    standards: "Grade 304 Stainless steel hardware, high wind-certified structural anchors",
    image: gbg4,
    metaTitle: "Delhi Projects | Outdoor Furniture & Sustainable Amenity Solutions for Delhi NCR | Urbanland Products",
    metaDesc: "Sustainable outdoor benches, planter boxes and green amenity solutions delivered for Delhi NCR projects. Eco-friendly WPC, NFC Wood and metal furniture for luxury real estate, municipal and institutional developments in Delhi, Gurgaon, Noida and Greater Noida. 2-Year Guarantee.",
    subTitle: "Sustainable Outdoor Furniture & Green Amenity Solutions",
    desc: "Urbanland Products delivers premium, eco-friendly benches, planter boxes and complete outdoor amenity solutions across Delhi NCR. Our sustainable WPC, NFC Wood and long-life metal products help developers and architects create beautiful, low-maintenance green spaces that support biophilic design and green building certifications.",
    challenges: [
      { text: "Creating premium outdoor spaces while meeting strict green building standards (IGBC, GRIHA, LEED) in a highly polluted urban environment.", image: gbg4 },
      { text: "Combating extreme climate weathering – scorching summers, heavy monsoons, and cold winters.", image: benchImg },
      { text: "Reducing ongoing maintenance and repair costs in massive gated communities and luxury townships.", image: plantersBoxImg },
      { text: "Replacing traditional wood with truly sustainable alternatives like WPC and NFC Wood.", image: welcome2 },
      { text: "Delivering biophilic green spaces that improve local air quality and resident well-being.", image: welcome1 }
    ],
    solutions: [
      { title: "WPC & NFC Wood Benches", desc: "Made from recycled plastics and natural fibers – zero deforestation, extreme temperature resistance and zero maintenance.", image: benchImg },
      { title: "Premium Planter Boxes", desc: "Mild Steel, Wooden, Aluminium & Stainless Steel options that create lush green sanctuaries and improve local air quality.", image: plantersBoxImg },
      { title: "Modular Clubhouse Seating", desc: "Sustainable lounge and dining sets for community spaces.", image: welcome1 },
      { title: "Poolside Loungers & Daybeds", desc: "Weatherproof, long-life materials that reduce replacement frequency and chemical treatments.", image: gbg2 },
      { title: "Custom Amenity Packages", desc: "Turnkey green solutions for sky decks, rooftop gardens and villa terraces.", image: carShelterImg }
    ],
    stats: [
      { value: "18+", label: "NCR Projects" },
      { value: "Extreme", label: "Weather Grade" },
      { value: "2-4 Wks", label: "Typical Delivery" }
    ],
    cases: [
      { name: "Godrej Projects Development", location: "Palghar (Similar Scale)", desc: "78 premium WPC & NFC Wood benches + 65 sustainable planter boxes for luxury villa landscaping. Completed in 2–3 weeks." },
      { name: "Kalpataru Vienta", location: "Kandivali East", desc: "24 WPC benches + premium eco-friendly planter boxes. Completed in 3–4 weeks." },
      { name: "Wadhwa Wise City", location: "Panvel Township", desc: "4 custom bus shelters + multiple sustainable benches and planters for large township. Completed in 1 month." },
      { name: "Navandhe Village Spaces", location: "Raigad", desc: "36 benches + 42 planter boxes installed across community gardens and pathways. Completed in 2–3 weeks." }
    ],
    extraCases: "Highly experienced in manufacturing for extreme heat and cold. Ready to serve Delhi, Gurgaon, Noida and Greater Noida with the same fast shipping and local anchoring teams.",
    whyChoose: [
      "True Green Materials – WPC & NFC Wood reduce deforestation and use recycled content.",
      "Long Product Life – 12–20+ years lifespan drastically lowers replacement waste.",
      "Green Building Support – Helps achieve IGBC, GRIHA and LEED certification points.",
      "Fast & Efficient Delivery – Meets tight project timelines while maintaining sustainability standards.",
      "2-Year Warranty – Long-term assurance on sustainable products."
    ],
    faqs: [
      { q: "What is the typical lead time for Delhi NCR projects?", a: "Most projects are completed in 2–4 weeks from drawing approval to professional anchoring installation." },
      { q: "Can products be customised to match our project design language?", a: "Yes. We offer full customisation in size, shape, finish, colour and branding to match your unique architectural layout." },
      { q: "Do your products support green building certifications?", a: "Yes. Our WPC, NFC Wood and long-life metal products help achieve IGBC, GRIHA and LEED points through durability and sustainable materials." },
      { q: "Do you provide installation services in Delhi NCR?", a: "Yes. We provide delivery and professional installation support across Delhi, Gurgaon, Noida, and Greater Noida." }
    ]
  },
  "bangalore": {
    title: "Bangalore Projects",
    client: "IT Park Developers, Corporate Plazas, and Residential Gated Communities",
    supplied: "Concrete Cultivation planters, Corporate bench modules, Smart-city dustbins, Parklet avenues",
    volume: "Outer Ring Road tech parks, gated estates in Anekal, Whitefield, Electronic City",
    standards: "FSC certified responsible composites, low-VOC antibacterial finishes",
    image: gbg3,
    metaTitle: "Bangalore Projects | Sustainable Outdoor Furniture & Green Amenity Solutions | Urbanland Products",
    metaDesc: "Sustainable outdoor benches, planter boxes and amenity solutions delivered in Bangalore (Bengaluru). Eco-friendly WPC, NFC Wood and metal furniture for residential, tech parks and institutional projects in Bengaluru. 2-Year Guarantee.",
    subTitle: "Sustainable Outdoor Furniture & Green Amenity Solutions",
    desc: "Urbanland Products has successfully delivered premium, sustainable outdoor furniture solutions in Bangalore (Bengaluru). Our eco-friendly benches, planter boxes and durable products help create beautiful, low-maintenance green spaces for residential, tech park and institutional developments.",
    challenges: [
      { text: "Creating premium outdoor spaces while meeting green building standards (IGBC, GRIHA, LEED).", image: gbg3 },
      { text: "Combating high humidity, heavy monsoons, and urban heat island effects.", image: benchImg },
      { text: "Reducing long-term maintenance and replacement costs in gated communities and tech campuses.", image: plantersBoxImg },
      { text: "Replacing traditional wood with truly sustainable alternatives like WPC and NFC Wood.", image: welcome2 },
      { text: "Delivering biophilic green spaces that improve air quality and resident/employee well-being.", image: welcome1 }
    ],
    solutions: [
      { title: "WPC & NFC Wood Benches", desc: "Zero-maintenance, natural wood look, ideal for Bangalore's climate.", image: benchImg },
      { title: "Premium Planter Boxes", desc: "Create lush green zones and improve local campus and plaza air quality.", image: plantersBoxImg },
      { title: "Durable Institutional Seating", desc: "Heavy-duty steel-frame benches engineered for high-traffic IT parks.", image: benchPlanterImg },
      { title: "Modular Amenity Solutions", desc: "Clubhouse, poolside, and rooftop furniture ensembles designed for comfort.", image: welcome1 }
    ],
    stats: [
      { value: "15+", label: "Bengaluru Projects" },
      { value: "Tech-Park", label: "Spec Grade" },
      { value: "2-4 Wks", label: "Typical Delivery" }
    ],
    cases: [
      { name: "Nellp Millenia Common", location: "Anekal Taluk, Bengaluru", desc: "Supplied and installed 5 premium planter boxes for residential campus landscaping." },
      { name: "Embassy Tech Village", location: "Varthur Outer Ring Road, Bengaluru", desc: "Supplied and installed 15 heavy dual-compartment dustbins for the tech park campus avenues." },
      { name: "Godrej Projects", location: "Palghar (Similar Scale)", desc: "78 WPC benches + 65 sustainable planter boxes supplied. Completed in 2–3 weeks." },
      { name: "Kalpataru Vienta", location: "Kandivali (Similar Scale)", desc: "24 WPC benches + premium planter boxes supplied. Completed in 3–4 weeks." }
    ],
    extraCases: "Multiple custom corporate layout projects and high-volume residential estate orders delivered across Bangalore, Karnataka, and surrounding areas.",
    whyChoose: [
      "True Green Materials – WPC & NFC Wood reduce deforestation and use recycled content.",
      "Long Product Life – 12–20+ years lifespan lowers replacement and maintenance waste.",
      "Green Building Support – Helps achieve IGBC, GRIHA and LEED points.",
      "Fast & Efficient Delivery – Meets tight project timelines.",
      "End-to-End Support – Technical drawings, custom BOQs, delivery, and professional installation."
    ],
    faqs: [
      { q: "What is the typical lead time for Bangalore projects?", a: "Most projects are completed in 2–4 weeks from drawing approval to professional anchoring installation." },
      { q: "Can products be customised for Bangalore’s climate?", a: "Yes. Aluminium and Stainless Steel options are ideal to resist high moisture and heavy monsoon conditions." },
      { q: "Do your products support green building certifications?", a: "Yes. Our WPC, NFC Wood and recyclable materials help achieve IGBC, GRIHA and LEED points." },
      { q: "Do you provide installation services in Bangalore?", a: "Yes. We provide delivery and professional installation support across Bengaluru and Karnataka." }
    ]
  },
  "pune": {
    title: "Pune Projects",
    client: "Real Estate Townships, Tech Campus Planners, and Local Municipal Councils",
    supplied: "WPC & NFC benches, Heavy canteen diner tables, Smart-city dustbins, Custom parking shades",
    volume: "IT campuses in Hinjewadi, Kharadi, residential townships in Yerwada, Haveli",
    standards: "Galvanized heavy structural steel frames, zinc-rich rust primer coatings",
    image: gbg1,
    metaTitle: "Pune Projects | Sustainable Outdoor Furniture & Green Amenity Solutions | Urbanland Products",
    metaDesc: "Sustainable outdoor benches, planter boxes, canteen tables and green amenity solutions delivered for Pune projects. Eco-friendly WPC, NFC Wood and metal furniture for luxury real estate, tech parks and institutional developments in Pune. 2-Year Guarantee.",
    subTitle: "Sustainable Outdoor Furniture & Green Amenity Solutions",
    desc: "Urbanland Products has successfully delivered premium, eco-friendly benches, planter boxes, canteen tables and complete outdoor amenity solutions across Pune. Our sustainable WPC, NFC Wood and long-life metal products help developers and architects create beautiful, low-maintenance green spaces that support biophilic design and green building certifications.",
    challenges: [
      { text: "Creating premium outdoor spaces while meeting strict green building standards (IGBC, GRIHA, LEED).", image: gbg1 },
      { text: "Combating high humidity, heavy monsoons, and the urban heat island effect.", image: benchImg },
      { text: "Reducing long-term maintenance and replacement costs in large gated communities and tech campuses.", image: canteenTablesImg },
      { text: "Replacing traditional wood with truly sustainable alternatives like WPC and NFC Wood.", image: welcome2 },
      { text: "Delivering biophilic green spaces that improve air quality and resident/employee well-being.", image: welcome1 }
    ],
    solutions: [
      { title: "WPC & NFC Wood Benches", desc: "Made from recycled plastics and natural fibers – zero deforestation, excellent weather resistance and zero maintenance.", image: benchImg },
      { title: "Premium Planter Boxes", desc: "Mild Steel, Wooden, Aluminium & Stainless Steel options that create lush green sanctuaries.", image: plantersBoxImg },
      { title: "Heavy-Duty Canteen Tables", desc: "Robust picnic-style tables with composite tops and strong steel frames for campus dining areas.", image: canteenTablesImg },
      { title: "Modular Clubhouse Seating", desc: "Sustainable lounge and dining sets for community spaces.", image: welcome1 },
      { title: "Custom Amenity Packages", desc: "Turnkey green solutions for sky decks, rooftop gardens and villa terraces.", image: benchPlanterImg }
    ],
    stats: [
      { value: "12+", label: "Pune Projects" },
      { value: "Heavy", label: "Duty Build" },
      { value: "2-4 Wks", label: "Typical Delivery" }
    ],
    cases: [
      { name: "Panchshil Tech Park", location: "Yerwada, Pune", desc: "32+ heavy-duty canteen tables supplied and installed for campus/common dining areas. Completed in 3–4 weeks." },
      { name: "EON Kharadi Infra", location: "MIDC Kharadi, Pune", desc: "26 canteen tables supplied and installed for tech park dining plaza. Completed in 3–4 weeks." },
      { name: "Munjeri Residential", location: "Pune", desc: "10 premium WPC benches supplied and anchored for township common gardens." },
      { name: "Haveli / Dhayari", location: "Pune", desc: "15 benches supplied and anchored for municipal park landscaping." }
    ],
    extraCases: "Multiple custom dustbins and planter boxes supplied to Hinjewadi, Kalyani Nagar, and Balewadi residential-cum-commercial projects.",
    whyChoose: [
      "True Green Materials – WPC & NFC Wood reduce deforestation and use recycled content.",
      "Long Product Life – 12–20+ years lifespan drastically lowers replacement waste.",
      "Green Building Support – Helps achieve IGBC, GRIHA and LEED certification points.",
      "Fast & Efficient Delivery – Meets tight project timelines while maintaining sustainability standards.",
      "End-to-End Green Support – Design consultation, BOQ, delivery and professional installation."
    ],
    faqs: [
      { q: "What is the typical lead time for Pune projects?", a: "Most projects are completed in 2–4 weeks from drawing approval to professional anchoring installation." },
      { q: "Can products be customised to match our project design language?", a: "Yes. We offer full customisation in size, shape, finish, colour and branding to match your unique layout." },
      { q: "Do your products support green building certifications?", a: "Yes. Our WPC, NFC Wood and long-life metal products help achieve IGBC, GRIHA and LEED points through durability and sustainable materials." },
      { q: "Do you provide installation services in Pune?", a: "Yes. We provide delivery and professional installation support across Pune and surrounding areas." }
    ]
  }
};

import { getOptimizedImageUrl } from "../../utils/image";

// Predefined external CDN case study images to match lodha-project.html styling
const caseImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBGRygtxv8S6btOks0aFuSimblKmGpVn0tVaK3-ZIwpeXbqg6Gtfocgq9MecCc9CCLNXb7K7yuZl_Ni-yowvAb2mOhZ1z4Txem50MH4t1LKT-zWFejJr4saS8Ejp39LLeVSN2CVovG6J77iOLQhnN500r-zXlFQtOk7T8zR9V6Smr0b70nsG3w4INZmuwuK4vZUntYFxNu2fi5S25oq4DGVmslV3nMi3IXSjgodFHW-0BbcbdQ-hOWjkr4YZtLluWiVkCyC_RvJ301W",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDIpM5Gfrx9Pxnjf4ZfeBuztby-rdUGAPXwlOV5MamTW8ZjGuBIHHdoEYU4uhabFPQ7fBiWDaHWrM1zaSOuL8xdiWkqGxRffeKHPVz2bRV_BWsZO1ifVrViN5QGbwCTfoetfCed4KyOxUx3s8As6LYRbI34Cwg-sIx51kzv0Q9aJ4422mn6BC4qSgmjU7XSrTE6zW9b2cAJ1jnHCvsRPPYpe_0ZG-_NseFM9eWHjMfvUw9TzxVwLj5wwSQZkW2d8eJkK_mIW1Q6bXQs",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBKGGASxYdEF-q11rM2s8BUVEpQ1-ROEbQCr9Y6-hJyS4R0WW199pB6Om_aTUUuXGOQ_vm_Bk3iBEgUw_X0B3JJ6yFwaYxc2n1ZdWZq3_1kbiFFx6lTsE4jLtv9QvkFeK-gAxRflLRx_7UeEpYNYUfCavfXm4fsopjmotrGUAb5d618HXKZWd_8fZ8H-DchOOBpwrN_3j4I5cgyyJLinOtP_Mz9YK2VcGIO8C_MqBILG5PsDv1yDuRjjUJOB_SG4gcsxjbIxPRXtUFr",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCHXoXWGOYXacb6orNzrXAmlbABl0PSXWDH9YhJ6AbsRTJ_ooJMfBZpW3SffOEWlYABiyQEVXRUpd2XfpsYViurH-IDYmbjGbINeppaLQ2q1rWGeIbePG5TzTXwY4bFKqq55cLrDg22os7BwuF2kDE_tzHuajSnKO45XKuKWpo04RDr2_237LAOqZG4iThVhYFXe5utNcCQGtwIMZuWgAr63lsDwttqnq-lo12UHYzaRtdG49ctFXK3xX7BdNK7T1LFBhdtmAZ6jsUw"
];

// Helper to determine delivered units count per project page
const deliveredUnitsMap = {
  lodha: "250+",
  adani: "150+",
  oberoi: "100+",
  mumbai: "300+",
  delhi: "120+",
  bangalore: "90+",
  pune: "80+"
};

const ProjectsDetail = () => {
  const { segment } = useParams();

  const rawMeta = projectsMeta[segment] || projectsMeta["lodha"];
  const meta = React.useMemo(() => {
    if (!rawMeta) return null;
    return {
      ...rawMeta,
      image: getOptimizedImageUrl(rawMeta.image),
      challenges: rawMeta.challenges ? rawMeta.challenges.map(c => ({
        ...c,
        image: getOptimizedImageUrl(c.image)
      })) : [],
      solutions: rawMeta.solutions ? rawMeta.solutions.map(s => ({
        ...s,
        image: getOptimizedImageUrl(s.image)
      })) : [],
      stats: rawMeta.stats || [],
      cases: rawMeta.cases || [],
      whyChoose: rawMeta.whyChoose || [],
      faqs: rawMeta.faqs || [],
      recommended: rawMeta.recommended || []
    };
  }, [rawMeta]);

  useEffect(() => {
    if (!meta) return;

    updatePageSEO({
      title: meta.metaTitle || `${meta.title} Showcase | Urbanland Projects`,
      description: meta.metaDesc || meta.desc,
      og_image: meta.image
    });

    // Intersection Observer for Scroll Reveal Animations
    const revealUpObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.05, rootMargin: "0px 0px -50px 0px" });

    const revealUps = document.querySelectorAll('.reveal-up');
    revealUps.forEach(el => revealUpObserver.observe(el));

    return () => {
      cleanPageSEO();
      revealUps.forEach(el => revealUpObserver.unobserve(el));
    };
  }, [meta]);

  if (!meta) return null;

  const unitsCount = deliveredUnitsMap[segment] || "150+";

  // Sustainability Ratings for Solutions rows
  const sustainabilityRatings = [
    "A++ High-Impact",
    "LEED V4 Compatible",
    "Cradle-to-Cradle Gold",
    "100% Circular",
    "Project-Specific"
  ];

  // Icons and titles for Challenges section
  const challengeIcons = ["domain", "eco", "forest", "recycling", "nature_people"];
  const challengeTitles = [
    "Green building standards",
    "Environmental impact",
    "WPC/NFC Wood",
    "Waste reduction",
    "Biophilic design"
  ];

  // Why Choose Us content
  const defaultChooseDesc = [
    "We prioritize high-performance wood-plastic composites and recycled metals for minimal environmental footprint.",
    "Products engineered to last 15-20 years in harsh outdoor conditions with near-zero degradation.",
    "Detailed material documentation provided for LEED, IGBC, and BREEAM certification points.",
    "Optimized supply chain allowing for project delivery in as little as 2 weeks for standard models.",
    "From architectural consultation and site layout design to final installation and maintenance training.",
    "Comprehensive structural and material warranty backed by our authoritative quality assurance process."
  ];

  const whyChooseItems = [
    { title: "Green Materials", icon: "eco", desc: meta.whyChoose[0] || defaultChooseDesc[0] },
    { title: "Long Life", icon: "verified", desc: meta.whyChoose[1] || defaultChooseDesc[1] },
    { title: "Certification Support", icon: "description", desc: meta.whyChoose[2] || defaultChooseDesc[2] },
    { title: "Fast Delivery", icon: "speed", desc: meta.whyChoose[3] || defaultChooseDesc[3] },
    { title: "End-to-End Support", icon: "handshake", desc: meta.whyChoose[4] || defaultChooseDesc[4] },
    { title: "2-Year Warranty", icon: "security", desc: defaultChooseDesc[5] }
  ];

  // Additional installations
  const isSplitList = meta.extraCases && meta.extraCases.includes("|");
  const extraInstallations = isSplitList
    ? meta.extraCases.split("|").map(x => x.trim())
    : [
      "Rustomjee Urbania",
      "Piramal Revanta",
      "Shapoorji Pallonji",
      "Indiabulls Sky",
      "Hiranandani Gardens",
      "Brigade Exotica",
      "Oberoi Realty",
      "Prestige Estates"
    ];

  return (
    <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-0 overflow-x-hidden pt-0 antialiased">

      {/* Dynamic Hero Section */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col items-center justify-center overflow-hidden py-32 bg-gradient-to-b from-[#122213] to-[#0A120A] text-white px-margin-mobile lg:px-0">
        {/* Full-Screen Background Image with Green/Charcoal Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={meta.image}
            alt={meta.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A120A]/70 via-[#0E1A0F]/85 to-[#0A120A] pointer-events-none"></div>
        </div>

        <div className="max-w-4xl mx-auto pt-10 md:pt-[100px] w-full text-center relative z-10 px-margin-mobile md:px-margin-desktop">
          <div className="inline-block border-b-2 border-craftsman-gold mb-6 pb-1">
            <span className="font-label-technical text-craftsman-gold tracking-widest uppercase font-semibold text-xs">
              Case Study
            </span>
          </div>

          {/* Dynamic Breadcrumbs (Centered) */}
          <nav className="flex items-center justify-center select-none text-[9px] sm:text-[10px] font-black uppercase tracking-widest gap-2 bg-white/5 text-white/80 border border-white/10 px-4 py-2.5 rounded-full w-fit mx-auto mb-8 backdrop-blur-md shadow-lg">
            <Link to="/" className="text-white/60 hover:text-craftsman-gold transition-colors no-underline">Home</Link>
            <span className="text-white/30">/</span>
            <Link to="/projects" className="text-white/60 hover:text-craftsman-gold transition-colors no-underline">Projects</Link>
            <span className="text-white/30">/</span>
            <span className="text-craftsman-gold font-bold">{meta.title}</span>
          </nav>

          {/* Title */}
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-[3.5rem] text-white mb-6 leading-tight max-w-3xl mx-auto tracking-wide font-bold">
            {meta.title}
          </h1>
          
          <div className="w-24 h-1 bg-craftsman-gold mx-auto mb-8"></div>

          {/* Description */}
          <p className="font-body-lg text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed text-sm md:text-lg">
            {meta.desc}
          </p>

          {/* Glassmorphic Highlights Checklist (2x2 grid on mobile, horizontal flex on sm+) */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 mb-10 max-w-[420px] sm:max-w-3xl mx-auto">
            {[
              { text: "IGBC Certified Materials", icon: "workspace_premium" },
              { text: "Climate-Resilient Design", icon: "wb_sunny" },
              { text: "Low Lifecycle Maintenance", icon: "build" },
              { text: "Eco-Luxury Aesthetics", icon: "temp_preferences_custom" }
            ].map((pt, idx) => (
              <div key={idx} className="flex items-center justify-center text-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:border-craftsman-gold hover:bg-white/10 transition-all duration-300 group w-full sm:w-auto">
                <span className="material-symbols-outlined text-craftsman-gold text-sm group-hover:scale-110 transition-transform duration-300">{pt.icon}</span>
                <span className="font-body-md text-[11px] text-white/95 font-semibold tracking-wide">{pt.text}</span>
              </div>
            ))}
          </div>

          {/* Floating Location and Scope Stats Bar */}
          <div className="flex justify-center items-center gap-8 mb-12 bg-black/40 backdrop-blur-md border border-white/10 p-5 rounded-xl max-w-xl mx-auto shadow-2xl">
            <div className="flex items-center gap-3 text-left">
              <span className="material-symbols-outlined text-craftsman-gold text-3xl">location_on</span>
              <div>
                <p className="font-label-technical text-[9px] text-white/60 uppercase tracking-widest">Location</p>
                <p className="font-body-md text-sm text-white font-semibold mt-0.5">{meta.location || segment}</p>
              </div>
            </div>
            <div className="w-px h-10 bg-white/15"></div>
            <div className="flex items-center gap-3 text-left">
              <span className="material-symbols-outlined text-craftsman-gold text-3xl">domain</span>
              <div>
                <p className="font-label-technical text-[9px] text-white/60 uppercase tracking-widest">Scope</p>
                <p className="font-body-md text-sm text-white font-semibold mt-0.5">{unitsCount} Units Delivered</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-craftsman-gold text-white px-8 py-4 font-label-technical text-xs uppercase tracking-widest hover:bg-white hover:text-[#122213] hover:shadow-lg hover:shadow-craftsman-gold/25 transition-all duration-300 no-underline text-center">
              Request Quote for Your Project →
            </Link>
            <Link to="/resources/downloads" className="border-2 border-white/30 text-white px-8 py-4 font-label-technical text-xs uppercase tracking-widest hover:border-white hover:bg-white/10 transition-all duration-300 no-underline text-center">
              Download Sustainable Portfolio ↓
            </Link>
          </div>
        </div>

        {/* Structural Grid lines and radial pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#C9A84C 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full structural-grid -z-30 opacity-20"></div>
        <div className="absolute top-1/2 left-0 w-full h-1px bg-white/5 -z-20"></div>
        <div className="absolute top-0 left-1/4 w-1px h-full bg-white/5 -z-20"></div>
      </section>

      {/* Challenges Section */}
      <section className="reveal-section py-24 px-margin-mobile md:px-margin-desktop bg-[#F7F4EF] border-t border-outline-variant">
        <div className="max-w-container-max mx-auto">
          <div className="mb-16 text-center space-y-4 reveal-up flex flex-col items-center">
            <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
              Sustainability Demands
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-ink max-w-3xl">
              Sustainability Challenges in {meta.title.replace(" Projects", "")} Developments
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {meta.challenges.map((c, idx) => (
              <div key={idx} className="bg-surface-container-low p-8 border border-outline-variant hover:border-craftsman-gold/40 hover:shadow-md transition-all duration-300 flex flex-col text-left reveal-up">
                <span className="material-symbols-outlined text-craftsman-gold text-4xl mb-6">{challengeIcons[idx] || "domain"}</span>
                <h3 className="font-label-technical text-xs font-bold uppercase tracking-wider mb-4 text-deep-ink">{challengeTitles[idx] || "Challenge"}</h3>
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Green Solutions Section */}
      <section className="reveal-section py-24 px-margin-mobile md:px-margin-desktop bg-[#EFEDE8]">
        <div className="max-w-container-max mx-auto">

          <div className="mb-16 text-left space-y-4 reveal-up">
            <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
              Green Solutions
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-ink">
              Green Outdoor Furniture Solutions
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl pt-2">
              Precision engineered for {meta.title}
            </p>
          </div>

          <div className="space-y-4">
            {meta.solutions.map((item, idx) => (
              <div
                key={idx}
                className={`bg-[#F7F4EF] p-8 flex flex-col md:flex-row items-center gap-8 border-l-4 ${idx % 2 === 0 ? "border-forest-green" : "border-craftsman-gold"
                  } reveal-up`}
              >
                <div className="w-32 h-32 flex-shrink-0 overflow-hidden border border-outline-variant">
                  <img className="w-full h-full object-cover" alt={item.title} src={item.image} />
                </div>
                <div className="flex-grow text-left">
                  <h3 className="font-headline-md text-xl md:text-2xl text-forest-green mb-1 font-semibold">{item.title}</h3>
                  <p className="font-body-md text-on-surface-variant text-sm md:text-base leading-relaxed">{item.desc}</p>
                </div>
                <div className="text-left md:text-right shrink-0">
                  <p className="font-label-technical text-[10px] text-forest-green tracking-wider uppercase font-bold">Sustainability Rating</p>
                  <p className="font-headline-md text-lg text-craftsman-gold font-bold mt-1">
                    {sustainabilityRatings[idx % sustainabilityRatings.length]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Projects (Stats & Grid Cases) Section */}
      <section className="reveal-section py-24 px-margin-mobile md:px-margin-desktop bg-[#2D2D2D] text-white">
        <div className="max-w-container-max mx-auto">

          {/* Stats Callouts */}
          <div className="text-center mb-16 reveal-up space-y-4 flex flex-col items-center">
            <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
              Proven Excellence
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white">
              Real Green Projects. Real Sustainable Impact.
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
            <div className="flex flex-wrap justify-center gap-12 mt-8">
              {meta.stats.map((s, idx) => (
                <div key={idx} className="text-center">
                  <p className="font-display-lg text-5xl text-craftsman-gold font-bold leading-none mb-2">{s.value}</p>
                  <p className="font-label-technical text-[10px] text-white/60 uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cases grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {meta.cases.map((c, idx) => {
              const durationMatch = c.desc.match(/(?:Completed in|Completed|delivered in) ([^.]+)/i);
              const durationText = durationMatch ? durationMatch[1].trim() : "";
              return (
                <div key={idx} className="group relative aspect-[3/4] overflow-hidden border border-white/5 reveal-up">
                  <img
                    alt={c.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={caseImages[idx % caseImages.length]}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 flex flex-col justify-end text-left">
                    <h4 className="font-headline-md text-white text-lg font-bold mb-1">
                      {c.name.split(" Projects")[0].split(" Project")[0].split(" Common")[0]}
                    </h4>
                    <p className="font-label-technical text-[10px] text-craftsman-gold uppercase tracking-wider font-semibold">
                      {c.location} {durationText ? `| ${durationText}` : ""}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Luxury/Sustainable Installations block */}
          <div className="bg-white/5 p-8 md:p-12 border border-white/10 reveal-up">
            <h3 className="font-headline-md text-craftsman-gold text-lg md:text-xl font-bold mb-8 text-left">
              Additional Luxury Sustainable Installations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-12 text-left">
              {extraInstallations.map((inst, idx) => (
                <div key={idx} className="flex items-center gap-3 border-b border-white/10 pb-2">
                  <span className="font-bold text-craftsman-gold">0{idx + 1}</span>
                  <span className="font-body-md text-sm text-white/80">{inst}</span>
                </div>
              ))}
            </div>
            {!isSplitList && meta.extraCases && (
              <div className="mt-8 pt-6 border-t border-white/10 text-left text-sm text-white/60 font-body-md">
                {meta.extraCases}
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Why Choose Section */}
      <section className="reveal-section py-24 px-margin-mobile md:px-margin-desktop bg-[#F7F4EF]">
        <div className="max-w-container-max mx-auto">
          <div className="mb-16 text-center space-y-4 reveal-up flex flex-col items-center">
            <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
              Developer Preference
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-ink max-w-3xl">
              Why Luxury Developers Prefer Urbanland’s Sustainable Solutions
            </h2>
            <div className="w-24 h-1 bg-craftsman-gold"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseItems.map((item, idx) => (
              <div key={idx} className="p-8 bg-white border border-outline-variant hover:shadow-lg transition-all duration-300 flex flex-col text-left reveal-up">
                <div className="w-12 h-12 bg-forest-green flex items-center justify-center text-white mb-6">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3 className="font-headline-md text-lg text-forest-green font-bold mb-4">{item.title}</h3>
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Accordion Section */}
      <SupportFAQ />

      {/* Final CTA Section */}
      <AdvantageCTA />

    </div>
  );
};

export default ProjectsDetail;
