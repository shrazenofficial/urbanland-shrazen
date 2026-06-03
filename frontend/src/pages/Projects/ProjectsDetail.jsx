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

const ProjectsDetail = () => {
  const { segment } = useParams();
  const [activeIndex, setActiveIndex] = useState(null);

  const meta = projectsMeta[segment] || projectsMeta["lodha"];

  // Gallery array to loop visual assets for case studies
  const galleryImages = [gbg1, gbg2, gbg3, gbg4, gbg5, welcome1, welcome2];

  useEffect(() => {
    updatePageSEO({
      title: meta.metaTitle || `${meta.title} Showcase | Urbanland Projects`,
      description: meta.metaDesc || meta.desc,
      og_image: meta.image
    });
    return () => cleanPageSEO();
  }, [meta]);

  return (
    <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-0">
      {/* Hero Banner - Full Screen */}
      <section className="w-full h-[100vh] md:h-dvh relative bg-black/5 overflow-hidden">
        {/* Background Image spanning full width */}
        <img
          src={meta.image}
          alt={meta.title}
          className="absolute inset-0 w-full h-full object-cover select-none z-0"
        />
        {/* Overlay gradient spanning full width */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/45 z-10" />

        {/* Content container aligned with site margins */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end text-white pb-16 md:pb-24">
          {/* Title & Description inside Hero */}
          <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12">
            <span className="text-[10px] font-black uppercase tracking-wider bg-[#C9A84C] text-[#232120] px-3.5 py-1.5 rounded-full w-fit mb-3 block">
              Case Study
            </span>
            <h1 className="text-3.5xl sm:text-5.5xl md:text-6.5xl lg:text-[4rem] font-bold uppercase leading-none tracking-tight max-w-4xl" style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.4)' }}>
              {meta.title}
            </h1>
            <p className="text-xs sm:text-sm font-medium tracking-wide text-white/95 mt-4 max-w-2xl leading-relaxed" style={{ textShadow: '1px 1px 5px rgba(0,0,0,0.55)' }}>
              {meta.subTitle}
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb section */}
      <div className="w-full bg-white border-b border-black/[0.06] py-4 select-none mb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <nav className="flex items-center text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#2D2D2D]/60 gap-2">
            <Link to="/" className="hover:text-[#2C5F2E] transition-colors no-underline">Home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-[#2C5F2E] transition-colors no-underline">Projects</Link>
            <span>/</span>
            <span className="text-[#2C5F2E]">{meta.title}</span>
          </nav>
        </div>
      </div>

      {/* Narrative Scope & Specs visual split */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left text summaries & specs badges */}
        <div className="lg:col-span-7 text-left">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— Site Scope & Delivery</span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#1A1A1A] mb-6 leading-none">
            Project Overview & Scope
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#2D2D2D]/85">
            {meta.desc}
          </p>

          {/* Mini logistics card grid instead of text blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 mb-8">
            <div className="bg-[#EAE5DB]/30 rounded-2xl p-4 border border-black/[0.03]">
              <span className="block text-[8px] font-black uppercase tracking-wider text-black/40">Contracting Client</span>
              <span className="text-xs font-black uppercase text-black/85 block mt-1">{meta.client}</span>
            </div>
            <div className="bg-[#EAE5DB]/30 rounded-2xl p-4 border border-black/[0.03]">
              <span className="block text-[8px] font-black uppercase tracking-wider text-black/40">Supplied Volume</span>
              <span className="text-xs font-black uppercase text-black/85 block mt-1">{meta.volume}</span>
            </div>
            <div className="bg-[#EAE5DB]/30 rounded-2xl p-4 border border-black/[0.03]">
              <span className="block text-[8px] font-black uppercase tracking-wider text-black/40">Supplied Equipment</span>
              <span className="text-xs font-black uppercase text-[#2C5F2E] block mt-1">{meta.supplied.split(',')[0]}</span>
            </div>
            <div className="bg-[#EAE5DB]/30 rounded-2xl p-4 border border-black/[0.03]">
              <span className="block text-[8px] font-black uppercase tracking-wider text-black/40">Certifications Met</span>
              <span className="text-xs font-black uppercase text-[#C9A84C] block mt-1">{meta.standards.split(',')[0]}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="px-6 py-3.5 bg-[#2C5F2E] hover:bg-[#C9A84C] text-white rounded-full font-bold uppercase tracking-wider text-[10px] transition-colors cursor-pointer shadow-md no-underline"
            >
              Request Custom Quote →
            </Link>
            <Link
              to="/resources/downloads"
              className="px-6 py-3.5 bg-[#EAE5DB] text-[#2D2D2D] rounded-full font-bold uppercase tracking-wider text-[10px] hover:bg-black hover:text-white transition-colors border border-black/[0.04] cursor-pointer no-underline"
            >
              Download Project Portfolio ↓
            </Link>
          </div>
        </div>

        {/* Right huge immersive image card */}
        <div className="lg:col-span-5 relative group overflow-hidden rounded-[2.5rem] shadow-xl aspect-square border border-black/[0.05] select-none">
          <img 
            src={meta.image} 
            alt={meta.title} 
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          <span className="absolute bottom-6 left-6 text-[9px] font-black uppercase tracking-widest text-white bg-black/45 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
            ✦ Installation Site Verified
          </span>
        </div>
      </section>

      {/* Challenges Visual Cards Section */}
      {meta.challenges && (
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
          <div className="bg-white rounded-[2.5rem] border border-black/[0.04] p-8 md:p-14 shadow-sm">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— Sustainability Demands</span>
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#1A1A1A] mb-12 border-b border-[#2D2D2D]/10 pb-4">
              Sustainability & Architectural Challenges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {meta.challenges.slice(0, 3).map((item, idx) => (
                <div key={idx} className="bg-white rounded-[2rem] border border-black/[0.03] overflow-hidden flex flex-col hover:shadow-md transition-all group">
                  <div className="w-full aspect-[16/10] overflow-hidden relative select-none">
                    <img 
                      src={item.image} 
                      alt={`Challenge ${idx + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                    />
                    <span className="absolute top-4 left-4 w-8 h-8 rounded-full bg-red-50/90 backdrop-blur-sm text-red-600 flex items-center justify-center select-none border border-red-100/50 shadow-sm">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M12 3a9 9 0 100 18 9 9 0 000-18z" />
                      </svg>
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-start">
                    <p className="text-xs sm:text-sm text-[#2D2D2D]/85 leading-relaxed font-semibold">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tailored Green Solutions Section */}
      {meta.solutions && (
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
          <div className="mb-12">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— Green Solutions</span>
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#1A1A1A] leading-none">
              Eco-Friendly Furniture Solutions Delivered
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {meta.solutions.map((item, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] border border-black/[0.03] overflow-hidden flex flex-col shadow-sm hover:border-[#2C5F2E]/25 transition-all group">
                <div className="w-full aspect-[16/10] overflow-hidden select-none">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-start">
                  <div className="w-8 h-8 rounded-md bg-[#2C5F2E]/10 flex items-center justify-center font-bold text-[#2C5F2E] mb-4 text-xs select-none">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-black text-black uppercase mb-2 leading-none">{item.title}</h3>
                  <p className="text-xs text-[#2D2D2D]/60 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Verified Cases Image Gallery Section (Uses images more than text) */}
      {meta.cases && (
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24 select-none">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C] mb-3 block">— Visual Case Studies</span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1A1A1A] leading-none">
                Verified Project Installations
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
            <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— Developer Preference</span>
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#1A1A1A] mb-12 border-b border-[#2D2D2D]/10 pb-4">
              Why Leading Developers Prefer Urbanland Projects
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
        <section className="max-w-[850px] mx-auto px-6 mb-12">
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

      {/* Unified CTA section */}
      <CTASection 
        title={`Ready to Specify ${meta.title} for Your Project?`}
        description="Support green building standards, earn IGBC points, and reduce opex with our premium outdoor solutions."
        tagText="Collaborate with Urbanland"
        primaryText="Request Project Quote →"
        primaryLink="/contact"
        secondaryText="Download Brochure ↓"
        secondaryLink="/resources/downloads"
      />
    </div>
  );
};

export default ProjectsDetail;
