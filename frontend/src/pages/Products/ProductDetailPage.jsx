import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";
import { productConfigs } from "../../data/productConfigs";
import BenchesConfigurator from "../../components/BenchesConfigurator";
import ProductConfigurator from "../../components/ProductConfigurator";
import ScrollVideoSection from "../../components/ScrollVideoSection";
import SupportFAQ from "../../components/SupportFAQ/SupportFAQ";
import AdvantageCTA from "../../components/AdvantageCTA/AdvantageCTA";


const getVideoSectionData = (productId) => {
    const defaultVideo = "https://urbanlandproducts.com/wp-content/uploads/2026/06/poolside-loungers-text.mp4";
    const data = {
        "poolside-loungers": {
            badge: "DESIGNED FOR LEISURE",
            heading: "Why Premium Poolside Loungers Matter",
            videoUrl: defaultVideo,
            description: "A luxury pool deck is defined by the quality of its relaxation spaces. Cheap loungers crack, fade, and degrade under intense UV rays and chlorine exposure. Urbanland's premium sun loungers are built to withstand the harshest environments while delivering unmatched comfort.",
            features: [
                { icon: "wb_sunny", title: "All-Weather Resilience", desc: "UV-stabilized HDPE synthetic rattan and rust-proof aluminum frames." },
                { icon: "water_drop", title: "Quick-Dry Engineering", desc: "Reticulated foam cushions that drain water instantly to prevent mold." },
                { icon: "airline_seat_recline_normal", title: "Ergonomic Comfort", desc: "Multi-stage reclining profiles engineered for luxury hospitality standards." },
                { icon: "verified_user", title: "Commercial Guarantee", desc: "Backed by India's only comprehensive 2-year warranty for peace of mind." }
            ]
        },
        "cabanas": {
            badge: "ELITE OUTDOOR LUXURY",
            heading: "Why Premium Cabanas Matter",
            videoUrl: "https://urbanlandproducts.com/wp-content/uploads/2026/06/cabanas-text.mp4",
            description: "Cabanas create private sanctuaries of comfort and luxury. Cheap, flimsy structures cannot withstand high winds, intense heat, or monsoon downpours. Urbanland designs premium, engineered cabanas built to endure and elevate hospitality environments.",
            features: [
                { icon: "architecture", title: "Heavy-Duty Framework", desc: "Structural wind-loaded powder-coated aluminum construction." },
                { icon: "shield", title: "UV-Block Canopies", desc: "Premium outdoor fabrics resisting fading, UV radiation, and tearing." },
                { icon: "diversity_3", title: "Luxury Privacy", desc: "Elegant outdoor draping and adjustable panel options for guests." },
                { icon: "umbrella", title: "Weatherproof Durability", desc: "Built to stay pristine through heavy monsoons and high wind speeds." }
            ]
        },
        "planters": {
            badge: "ARCHITECTURAL LANDSCAPING",
            heading: "Why Premium Planters Matter",
            videoUrl: "https://urbanlandproducts.com/wp-content/uploads/2026/06/planters-text.mp4",
            description: "Planters frame the greenery of public spaces. Cheap plastic or thin-walled planters crack under soil expansion and solar heat. Urbanland's designer planters are engineered with reinforced materials for heavy soil loads and root protection.",
            features: [
                { icon: "fitness_center", title: "Reinforced Walls", desc: "Built to prevent bulging and cracking from heavy soil expansion." },
                { icon: "thermostat", title: "Thermal Insulation", desc: "Protects delicate root systems from extreme temperature drops and spikes." },
                { icon: "opacity", title: "Drainage Management", desc: "Integrated overflow channels and custom water routing systems." },
                { icon: "wb_sunny", title: "UV Stable Finishes", desc: "Highly resistant to color fading and peeling under harsh sun." }
            ]
        },
        "dustbins": {
            badge: "URBAN HYGIENE & UTILITY",
            heading: "Why Premium Dustbins Matter",
            videoUrl: "https://urbanlandproducts.com/wp-content/uploads/2026/06/dustbins-text.mp4",
            description: "Public litter bins must combine sleek aesthetics with extreme vandal resistance. Low-quality bins rust quickly, leak, and spoil the landscape. Urbanland's premium waste receptacles are built for heavy commercial traffic with rust-proof coatings.",
            features: [
                { icon: "gpp_good", title: "Corrosion Resistant", desc: "Constructed with galvanized steel and rust-proof aluminum hardware." },
                { icon: "local_fire_department", title: "Fire Safe Design", desc: "Double-walled structural lining to contain heat and prevent fire spread." },
                { icon: "clean_hands", title: "Easy Maintenance", desc: "Ergonomic inner liner removal systems for cleaning crews." },
                { icon: "anchor", title: "Anti-Vandal Mounting", desc: "Secure base anchoring systems to prevent theft, damage, or tip-overs." }
            ]
        },
        "bus-shelters": {
            badge: "TRANSIT INFRASTRUCTURE",
            heading: "Why Premium Bus Shelters Matter",
            videoUrl: "https://urbanlandproducts.com/wp-content/uploads/2026/06/bus-shelters-text.mp4",
            description: "Transit shelters protect hundreds of commuters daily. Urbanland designs heavy-duty, weather-resistant bus shelters that offer maximum comfort, safety, and modern styling for smart cities and commercial townships.",
            features: [
                { icon: "security", title: "Shatterproof Panels", desc: "Tempered safety glass panels for maximum occupant protection." },
                { icon: "construction", title: "Heavy Steel Chassis", desc: "Wind-load engineered steel structure with multi-layer anti-rust treatment." },
                { icon: "chair", title: "Commuter Comfort", desc: "Ergonomic integrated seating and weather-shield design for long waits." },
                { icon: "cell_tower", title: "Smart Integration", desc: "Prepared for digital displays, solar panels, and lighting systems." }
            ]
        },
        "car-shelters": {
            badge: "VEHICLE PROTECTION",
            heading: "Why Premium Car Shelters Matter",
            videoUrl: "https://urbanlandproducts.com/wp-content/uploads/2026/06/car-sheds-text.mp4",
            description: "Premium vehicles deserve premium protection. Cheap carports leak and sag under storm stress. Urbanland's tensile and cantilever car shelters are engineered for high wind resistance and thermal blocking to protect vehicle finishes.",
            features: [
                { icon: "tsunami", title: "High Tensile Strength", desc: "Engineered membrane fabrics that handle extreme wind and rain loads." },
                { icon: "design_services", title: "Cantilever Geometry", desc: "Saves parking space with single-sided steel column layouts." },
                { icon: "device_thermostat", title: "Heat Reduction", desc: "Reduces interior vehicle temperatures under direct sunlight." },
                { icon: "verified", title: "Zero Sag Framework", desc: "Rust-protected heavy steel structures built to last for decades." }
            ]
        },
        "ss-bollards": {
            badge: "SECURITY & TRAFFIC CONTROL",
            heading: "Why Premium SS Bollards Matter",
            videoUrl: "https://urbanlandproducts.com/wp-content/uploads/2026/06/ss-bollards-text.mp4",
            description: "Bollards protect pedestrians and demarcate pathways. Cheap bollards dent easily, lose their shine, and rust. Urbanland's grade 304/316 stainless steel bollards deliver robust impact resistance with high-end architectural finishes.",
            features: [
                { icon: "shield", title: "Marine Grade Steel", desc: "Grade 304 or 316 stainless steel to completely eliminate rusting." },
                { icon: "handyman", title: "Impact Absorbing", desc: "Engineered core mounts for superior pedestrian and asset protection." },
                { icon: "auto_awesome", title: "Mirror or Satin Finish", desc: "Stays pristine and reflective through all weather cycles." },
                { icon: "settings_accessibility", title: "Anti-Theft Mounting", desc: "Below-ground sub-surface root fixings for safety and stability." }
            ]
        },
        "canteen-tables": {
            badge: "COMMUNAL DINING",
            heading: "Why Premium Canteen Tables Matter",
            videoUrl: "https://urbanlandproducts.com/wp-content/uploads/2026/06/cantteen-tables-text.mp4",
            description: "Canteen spaces need heavy-duty, hygienic dining furniture. Urbanland's premium canteen tables are built to withstand intensive daily use, food spills, and heavy scrubbing while remaining clean and modern.",
            features: [
                { icon: "sanitizer", title: "Food-Grade Surfaces", desc: "Hygienic, easy-to-sanitize tabletops resisting heat and food stains." },
                { icon: "grid_view", title: "Heavy Steel Frames", desc: "Fully welded structural tubing that prevents wobbles, squeaks, or rocking." },
                { icon: "workspace_premium", title: "Smart Space Saving", desc: "Integrated seat swivels and fold-away options for neat storage." },
                { icon: "group", title: "Scratch & Impact Proof", desc: "Industrial-grade edge-banded designs built for heavy student traffic." }
            ]
        },
        "aluminium-benches": {
            badge: "CIVIC SEATING",
            heading: "Why Premium Aluminium Benches Matter",
            videoUrl: "https://urbanlandproducts.com/wp-content/uploads/2026/06/Aluminium-benches-text.mp4",
            description: "Aluminium benches are perfect for parks and urban streetscapes. Urbanland's anodized and powder-coated aluminium benches are lightweight, incredibly strong, and 100% rust-free for lifetime outdoor durability.",
            features: [
                { icon: "verified", title: "Anodized Protection", desc: "Oxidation-free coating that prevents rust, pitting, and corrosion." },
                { icon: "fitness_center", title: "Structural Strength", desc: "Internal reinforcing webs that prevent load sagging or bending." },
                { icon: "thermostat", title: "Thermal Efficiency", desc: "Stays cool to the touch even under intense direct mid-day heat." },
                { icon: "waves", title: "Zero Maintenance", desc: "Requires simple water hose downs to look brand new for years." }
            ]
        },
        "wicker-furniture": {
            badge: "HANDCRAFTED WICKER",
            heading: "Why Premium Wicker Furniture Matters",
            videoUrl: "https://urbanlandproducts.com/wp-content/uploads/2026/06/wicker-furniture-text.mp4",
            description: "Luxury resorts require seating that evokes artisanal charm without sacrificing durability. Low-quality wicker unravels, fades, and snaps. Urbanland's synthetic wicker is hand-woven over rust-free frames with high UV stability.",
            features: [
                { icon: "wb_sunny", title: "High-Density PE Wicker", desc: "UV-stabilized synthetic rattan that won't snap, crack, or fade." },
                { icon: "draw", title: "Hand-Woven Art", desc: "Tensioned weave by master craftsmen for ultimate support and finish." },
                { icon: "crop_square", title: "Aluminum Under-frame", desc: "Thick-walled aluminum pipes that never rust or warp over time." },
                { icon: "water_drop", title: "Cushion Resilience", desc: "Premium Olefin fabrics with high water-shedding performance." }
            ]
        },
        "wicker-outdoor-products": {
            badge: "HANDCRAFTED WICKER",
            heading: "Why Premium Wicker Products Matter",
            videoUrl: "https://urbanlandproducts.com/wp-content/uploads/2026/06/wicker-outdoor-products.mp4",
            description: "Outdoor hospitality spaces demand high-performance, elegant wicker accessories and furnishings. Urbanland's premium wicker products deliver heavy-duty commercial utility with handcrafted resort design.",
            features: [
                { icon: "wb_sunny", title: "High-Density PE Wicker", desc: "UV-stabilized synthetic rattan that won't snap, crack, or fade." },
                { icon: "draw", title: "Hand-Woven Art", desc: "Tensioned weave by master craftsmen for ultimate support and finish." },
                { icon: "crop_square", title: "Aluminum Under-frame", desc: "Thick-walled aluminum pipes that never rust or warp over time." },
                { icon: "water_drop", title: "Cushion Resilience", desc: "Premium Olefin fabrics with high water-shedding performance." }
            ]
        },
        "wicker-living-sets": {
            badge: "HANDCRAFTED WICKER",
            heading: "Why Premium Wicker Living Sets Matter",
            videoUrl: "https://urbanlandproducts.com/wp-content/uploads/2026/06/wicker-living-furniture-text.mp4",
            description: "Luxury outdoor lounging demands wicker sets that stand up to the sun and moisture. Urbanland's living configurations feature thick-walled frames and quick-dry cushions.",
            features: [
                { icon: "wb_sunny", title: "High-Density PE Wicker", desc: "UV-stabilized synthetic rattan that won't snap, crack, or fade." },
                { icon: "draw", title: "Hand-Woven Art", desc: "Tensioned weave by master craftsmen for ultimate support and finish." },
                { icon: "crop_square", title: "Aluminum Under-frame", desc: "Thick-walled aluminum pipes that never rust or warp over time." },
                { icon: "water_drop", title: "Cushion Resilience", desc: "Premium Olefin fabrics with high water-shedding performance." }
            ]
        },
        "wicker-dining-sets": {
            badge: "HANDCRAFTED WICKER",
            heading: "Why Premium Wicker Dining Sets Matter",
            videoUrl: "https://urbanlandproducts.com/wp-content/uploads/2026/06/wicker-dining-text.mp4",
            description: "Al fresco dining spaces deserve highly resistant, resort-grade tables and chairs. Urbanland's wicker dining sets combine commercial steel/aluminum bases with hand-woven detailing.",
            features: [
                { icon: "wb_sunny", title: "High-Density PE Wicker", desc: "UV-stabilized synthetic rattan that won't snap, crack, or fade." },
                { icon: "draw", title: "Hand-Woven Art", desc: "Tensioned weave by master craftsmen for ultimate support and finish." },
                { icon: "crop_square", title: "Aluminum Under-frame", desc: "Thick-walled aluminum pipes that never rust or warp over time." },
                { icon: "water_drop", title: "Cushion Resilience", desc: "Premium Olefin fabrics with high water-shedding performance." }
            ]
        },
        "indoor-furniture": {
            badge: "BESPOKE COMMERCIAL FURNITURE",
            heading: "Why Premium Indoor Furniture Matters",
            videoUrl: "https://urbanlandproducts.com/wp-content/uploads/2026/06/indoor-furniture-text.mp4",
            description: "Office and lounge spaces require furniture that communicates premium branding and comfort. Cheap materials wobble and peel. Urbanland's bespoke furniture combines premium metal finishes, seasoned wood, and expert joinery.",
            features: [
                { icon: "forest", title: "Seasoned Hardwoods", desc: "Kiln-dried premium timber to eliminate warping, splits, and rot." },
                { icon: "handyman", title: "Precision Joinery", desc: "Reinforced structural joints for high load capacity and long lifespan." },
                { icon: "auto_awesome", title: "Premium Finishes", desc: "Scratch-resistant powder coating and luxury protective wood oils." },
                { icon: "airline_seat_recline_normal", title: "Ergonomic Outlines", desc: "Comfort-focused seating angles and ergonomic back support." }
            ]
        },
        "metal-wooden-furniture": {
            badge: "COMMERCIAL METAL & WOOD",
            heading: "Why Premium Metal & Wood Furniture Matters",
            videoUrl: defaultVideo,
            description: "Industrial and hospitality spaces demand rugged yet highly polished steel and wood furnishings. Urbanland's custom metal and wooden furniture combines commercial-grade structural metals with hand-finished premium timber.",
            features: [
                { icon: "forest", title: "Seasoned Hardwoods", desc: "Kiln-dried premium timber to eliminate warping, splits, and rot." },
                { icon: "handyman", title: "Precision Joinery", desc: "Reinforced structural joints for high load capacity and long lifespan." },
                { icon: "auto_awesome", title: "Premium Finishes", desc: "Scratch-resistant powder coating and luxury protective wood oils." },
                { icon: "airline_seat_recline_normal", title: "Ergonomic Outlines", desc: "Comfort-focused seating angles and ergonomic back support." }
            ]
        },
        "pergolas": {
            badge: "PERGOLAS & OUTDOOR SHADE",
            heading: "Why Premium Pergolas Matter",
            videoUrl: "https://urbanlandproducts.com/wp-content/uploads/2026/06/pergola-text.mp4",
            description: "Pergolas define outdoor living spaces and provide elegant shade. Urbanland designs premium, weather-resistant pergolas built to endure intense sunlight, rain, and wind while adding architectural beauty to gardens and terraces.",
            features: [
                { icon: "wb_sunny", title: "Weatherproof Structure", desc: "Constructed with powder-coated aluminum or treated wood to resist weathering." },
                { icon: "design_services", title: "Architectural Elegance", desc: "Sleek, modern profiles that blend seamlessly with high-end landscaping." },
                { icon: "filter_hdr", title: "Customizable Shade", desc: "Adjustable louver options or canopy systems to control light and ventilation." },
                { icon: "verified", title: "Commercial Quality", desc: "Built to last and backed by our comprehensive 2-year guarantee." }
            ]
        },
        "gazebos": {
            badge: "GAZEBOS & PAVILIONS",
            heading: "Why Premium Gazebos Matter",
            videoUrl: "https://urbanlandproducts.com/wp-content/uploads/2026/06/gazebos-text.mp4",
            description: "Gazebos serve as elegant focal points for outdoor recreation. Low-quality gazebos rust, leak, or fail under wind loads. Urbanland constructs high-performance gazebos with reinforced frames and premium weather protection.",
            features: [
                { icon: "roofing", title: "Robust Roof Engineering", desc: "Designed to handle heavy rain, wind loads, and direct sun exposure." },
                { icon: "diversity_3", title: "Social Gathering Hub", desc: "Creates the perfect sheltered area for seating, dining, and outdoor events." },
                { icon: "shield", title: "Corrosion Proofing", desc: "High-grade metal finishes and anti-rust coatings for durability." },
                { icon: "verified", title: "Long-Term Guarantee", desc: "Manufactured for lifetime durability and backed by a 2-year warranty." }
            ]
        },
        "pre-fab-homes": {
            badge: "PREFABRICATED LIVING",
            heading: "Why Premium Pre-Fab Homes Matter",
            videoUrl: "https://urbanlandproducts.com/wp-content/uploads/2026/06/prefab-homes-video.mp4",
            description: "Pre-fab homes offer quick, eco-friendly, and high-quality modular housing solutions. Urbanland's prefabricated structures are engineered for quick assembly, premium insulation, and superior weather resistance.",
            features: [
                { icon: "bolt", title: "Rapid Installation", desc: "Precision-engineered components assembled quickly on site." },
                { icon: "thermostat", title: "Thermal & Sound Insulation", desc: "High-grade wall panels for excellent energy efficiency and comfort." },
                { icon: "eco", title: "Sustainable Building", desc: "Eco-friendly materials that minimize carbon footprints and site waste." },
                { icon: "gpp_good", title: "Structural Integrity", desc: "Seismic and wind-resistant framework built to high safety standards." }
            ]
        }
    };
    return data[productId] || data["poolside-loungers"];
};


const ProductDetailPage = ({ productId: propProductId }) => {
    const { productId: urlProductId } = useParams();
    const activeProductId = propProductId || urlProductId || "benches";

    const aliasMap = {
        "wicker-living-sets": "wicker-furniture",
    };
    const resolvedProductId = aliasMap[activeProductId] || activeProductId;

    const baseConfig = productConfigs["benches"];
    const specificConfig = productConfigs[resolvedProductId] || {};

    // Deep merge to support stub configurations
    const config = {
        ...baseConfig,
        ...specificConfig,
        seo: {
            ...baseConfig.seo,
            ...specificConfig.seo
        },
        hero: specificConfig.hero ? {
            ...baseConfig.hero,
            ...specificConfig.hero,
            stats: specificConfig.hero.stats || baseConfig.hero.stats,
            mainImage: specificConfig.hero.mainImage || baseConfig.hero.mainImage,
            subImage1: specificConfig.hero.subImage1 || baseConfig.hero.subImage1,
            subImage2: specificConfig.hero.subImage2 || baseConfig.hero.subImage2
        } : baseConfig.hero,
        gallery: specificConfig.gallery ? {
            ...baseConfig.gallery,
            ...specificConfig.gallery,
            slides: specificConfig.gallery.slides || baseConfig.gallery.slides
        } : baseConfig.gallery,
        philosophy: specificConfig.philosophy ? {
            ...baseConfig.philosophy,
            ...specificConfig.philosophy,
            cards: specificConfig.philosophy.cards || baseConfig.philosophy.cards
        } : baseConfig.philosophy,
        quote: specificConfig.quote ? {
            ...baseConfig.quote,
            ...specificConfig.quote
        } : baseConfig.quote,
        categories: specificConfig.categories ? {
            ...baseConfig.categories,
            ...specificConfig.categories,
            list: specificConfig.categories.list || baseConfig.categories.list
        } : baseConfig.categories,
        configurator: specificConfig.configurator ? {
            ...baseConfig.configurator,
            ...specificConfig.configurator,
            materialData: {
                ...(baseConfig.configurator.materialData || {}),
                ...(specificConfig.configurator.materialData || {})
            }
        } : baseConfig.configurator,
        provenExcellence: specificConfig.provenExcellence ? {
            ...baseConfig.provenExcellence,
            ...specificConfig.provenExcellence,
            slides: specificConfig.provenExcellence.slides || baseConfig.provenExcellence.slides
        } : baseConfig.provenExcellence,
        support: specificConfig.support ? {
            ...baseConfig.support,
            ...specificConfig.support,
            list: specificConfig.support.list || baseConfig.support.list
        } : baseConfig.support,
        faq: specificConfig.faq ? {
            ...baseConfig.faq,
            ...specificConfig.faq,
            list: specificConfig.faq.list || baseConfig.faq.list
        } : baseConfig.faq,
        conversion: specificConfig.conversion ? {
            ...baseConfig.conversion,
            ...specificConfig.conversion,
            advantages: specificConfig.conversion.advantages || baseConfig.conversion.advantages
        } : baseConfig.conversion
    };

    const [activeSlide, setActiveSlide] = useState(0);
    const [collectionActiveSlide, setCollectionActiveSlide] = useState(0);
    const scrollRef = useRef(null);
    const collectionScrollRef = useRef(null);

    // Dynamic config options
    const materialData = config.configurator.materialData || {};
    const materialKeys = Object.keys(materialData);
    const lengthOptions = config.configurator.lengthOptions || ["1.2", "1.5", "2.0", "Custom"];
    const designOptions = config.configurator.designOptions || ["Backrest", "No Backrest"];

    const [configMaterial, setConfigMaterial] = useState(materialKeys[0] || "");
    const [configLength, setConfigLength] = useState(lengthOptions[1] || lengthOptions[0] || "");
    const [configDesign, setConfigDesign] = useState(designOptions[0] || "");
    const [configAntiGraffiti, setConfigAntiGraffiti] = useState(false);
    const [configGroundFixing, setConfigGroundFixing] = useState(true);

    // Reset settings when product changes
    useEffect(() => {
        const newMaterialKeys = Object.keys(config.configurator.materialData || {});
        const newLengthOptions = config.configurator.lengthOptions || ["1.2", "1.5", "2.0", "Custom"];
        const newDesignOptions = config.configurator.designOptions || ["Backrest", "No Backrest"];

        if (newMaterialKeys.length > 0) {
            setConfigMaterial(newMaterialKeys[0]);
        }
        if (newLengthOptions.length > 0) {
            setConfigLength(newLengthOptions[1] || newLengthOptions[0]);
        }
        if (newDesignOptions.length > 0) {
            setConfigDesign(newDesignOptions[0]);
        }
        setActiveSlide(0);
        setCollectionActiveSlide(0);
    }, [activeProductId]);

    const activeMaterialData = materialData[configMaterial] || {};
    const baseCostMultiplier = activeMaterialData.costMultiplier || 1.0;
    const totalCostMultiplier = configAntiGraffiti ? baseCostMultiplier + 0.15 : baseCostMultiplier;

    useEffect(() => {
        updatePageSEO({
            title: config.seo.title,
            description: config.seo.description,
            og_type: "product"
        });

        // Smooth reveal animation on scroll
        const observerOptions = {
            threshold: 0.05,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, observerOptions);

        const sections = document.querySelectorAll('.reveal-section');
        sections.forEach(section => {
            section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
            observer.observe(section);
        });

        // Intersection Observer for Reveal Up Animations
        const revealUpObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

        const revealUps = document.querySelectorAll('.reveal-up');
        revealUps.forEach(el => revealUpObserver.observe(el));

        return () => {
            cleanPageSEO();
            sections.forEach(section => observer.unobserve(section));
            revealUps.forEach(el => revealUpObserver.unobserve(el));
        };
    }, [activeProductId]);

    const projectSlides = config.provenExcellence.slides || [];
    const collectionSlides = config.gallery.slides || [];

    const nextSlide = () => {
        setActiveSlide((prev) => (prev === projectSlides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev === 0 ? projectSlides.length - 1 : prev - 1));
    };

    const handleCollectionScroll = (direction) => {
        if (collectionScrollRef.current) {
            const { scrollLeft, clientWidth } = collectionScrollRef.current;
            const scrollAmount = clientWidth * 0.6;
            collectionScrollRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const handleCollectionScrollEvent = () => {
        if (collectionScrollRef.current) {
            const { scrollLeft } = collectionScrollRef.current;
            const child = collectionScrollRef.current.firstElementChild;
            if (child) {
                const childWidth = child.clientWidth + 24; // child width + gap
                const index = Math.round(scrollLeft / childWidth);
                if (index >= 0 && index < collectionSlides.length + 1) {
                    setCollectionActiveSlide(index);
                }
            }
        }
    };

    const additionalMajorInstallations = config.provenExcellence.additionalInstallations || [
        "TATA Projects", "Indore Smart City", "Pune Municipal Corp", "BKC Mumbai", "Vadnagar Museum", "Navandhe Village"
    ];

    return (
        <div className="w-full bg-surface text-on-surface font-body-md antialiased overflow-x-hidden min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden py-20 px-margin-mobile lg:px-0">
                <div className="max-w-container-max mx-auto pt-[100px] px-margin-mobile md:px-margin-desktop w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-6 z-10 animate-hero text-left">
                        <div className="inline-block border-b-2 border-craftsman-gold mb-6 pb-1">
                            <span className="font-label-caps text-primary tracking-widest uppercase">
                                {config.hero.badge}
                            </span>
                        </div>
                        <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-ink mb-6 leading-tight max-w-xl">
                            {config.hero.title}
                        </h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg">
                            {config.hero.description}
                        </p>
                        <div className="flex flex-wrap gap-4 mb-12">
                            <Link to={config.hero.ctaLink || "/contact"} className="bg-forest-green text-on-primary px-6 py-3 flex items-center justify-center gap-2 font-label-caps uppercase rounded-sm border-b-2 border-charcoal-industrial hover:bg-primary transition-all group">
                                {config.hero.ctaText}
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                            <a href={config.hero.brochureLink || "#"} className="bg-surface border border-outline px-6 py-3 flex items-center justify-center gap-2 font-label-caps uppercase rounded-sm hover:bg-surface-variant transition-all group">
                                {config.hero.brochureText}
                                <span className="material-symbols-outlined text-sm group-hover:translate-y-1 transition-transform">download</span>
                            </a>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-outline-variant">
                            {config.hero.stats.map((stat, idx) => (
                                <div key={idx} className="flex flex-col gap-1">
                                    <span className="material-symbols-outlined text-forest-green">{stat.icon}</span>
                                    <span className="font-label-caps text-[10px] uppercase text-on-surface-variant">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-6 relative h-[500px] md:h-[600px] lg:h-[650px] w-full animate-hero delay-2">
                        <div className="grid grid-cols-6 grid-rows-6 gap-4 h-full w-full">
                            <div className="col-span-6 row-span-4 bento-img-container">
                                <img
                                    alt={config.hero.mainImage.alt}
                                    className="w-full h-full object-cover"
                                    src={config.hero.mainImage.src}
                                />
                            </div>
                            <div className="col-span-3 row-span-2 bento-img-container">
                                <img
                                    alt={config.hero.subImage1.alt}
                                    className="w-full h-full object-cover"
                                    src={config.hero.subImage1.src}
                                />
                            </div>
                            <div className="col-span-3 row-span-2 bento-img-container">
                                <img
                                    alt={config.hero.subImage2.alt}
                                    className="w-full h-full object-cover"
                                    src={config.hero.subImage2.src}
                                />
                            </div>
                        </div>
                        <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-craftsman-gold -z-10"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-craftsman-gold -z-10"></div>
                    </div>
                </div>
                <div className="absolute top-1/2 left-0 w-full h-1px bg-outline-variant/10 -z-20"></div>
                <div className="absolute top-0 left-1/4 w-1px h-full bg-outline-variant/10 -z-20"></div>
            </section>

            {/* Visual Gallery Slider Section */}
            <section className="reveal-section py-24 bg-surface overflow-hidden border-b border-outline-variant">
                <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16 text-left space-y-4 reveal-up">
                    <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
                        {config.gallery.title}
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-deep-ink">
                        {config.gallery.subtitle}
                    </h2>
                    <div className="w-24 h-1 bg-craftsman-gold"></div>
                    <p className="font-body-lg text-on-surface-variant max-w-2xl pt-2">
                        {config.gallery.description}
                    </p>
                </div>
                <div className="relative reveal-up" style={{ transitionDelay: '100ms' }}>
                    {/* Slider Container */}
                    <div
                        ref={collectionScrollRef}
                        onScroll={handleCollectionScrollEvent}
                        className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar px-[10%] md:px-[20%] pb-6"
                    >
                        {collectionSlides.map((slide, idx) => (
                            <div key={idx} className="flex-none w-[80vw] md:w-[50vw] snap-center relative group">
                                <div className="aspect-[16/9] overflow-hidden rounded-none border border-outline-variant">
                                    <img
                                        alt={slide.alt}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        src={slide.src}
                                    />
                                </div>
                            </div>
                        ))}

                        {/* View All Special Card */}
                        <div className="flex-none w-[80vw] md:w-[50vw] snap-center relative group">
                            <Link
                                to={config.gallery.viewAllRedirect || "/catalogue"}
                                className="aspect-[16/9] flex flex-col justify-center items-center border border-forest-green hover:border-craftsman-gold transition-all duration-500 relative overflow-hidden text-center p-8 group cursor-pointer h-full w-full"
                                style={{
                                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0), linear-gradient(to bottom right, #2C5F2E, #1D4220)',
                                    backgroundSize: '24px 24px, 100% 100%'
                                }}
                            >
                                {/* Decorative elements */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_80%)] -z-10"></div>
                                <div className="absolute -top-12 -right-12 w-24 h-24 border border-white/10 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
                                <div className="absolute -bottom-12 -left-12 w-32 h-32 border border-white/10 rounded-full group-hover:scale-125 transition-transform duration-700"></div>

                                <div className="mb-4 w-14 h-14 rounded-full border border-white/30 flex items-center justify-center bg-white/5 group-hover:border-craftsman-gold group-hover:bg-white/10 transition-all duration-500">
                                    <span className="material-symbols-outlined text-white group-hover:text-craftsman-gold group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
                                </div>
                                <h3 className="font-headline-md text-xl md:text-2xl text-white tracking-wide uppercase mb-2 group-hover:text-craftsman-gold transition-colors duration-300">
                                    View All {config.gallery.viewAllText || "Products"}
                                </h3>
                                <p className="font-label-technical text-craftsman-gold text-[10px] md:text-xs tracking-[0.2em] uppercase">
                                    Explore the full collection
                                </p>
                            </Link>
                        </div>
                    </div>
                    {/* Navigation Controls */}
                    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center mt-12">
                        <div className="flex gap-4">
                            <button
                                onClick={() => handleCollectionScroll('left')}
                                className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:border-forest-green hover:text-forest-green hover:bg-forest-green/5 transition-all duration-300 cursor-pointer"
                            >
                                <span className="material-symbols-outlined">west</span>
                            </button>
                            <button
                                onClick={() => handleCollectionScroll('right')}
                                className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:border-forest-green hover:text-forest-green hover:bg-forest-green/5 transition-all duration-300 cursor-pointer"
                            >
                                <span className="material-symbols-outlined">east</span>
                            </button>
                        </div>
                        <div className="flex gap-2">
                            {Array.from({ length: collectionSlides.length + 1 }).map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${collectionActiveSlide === idx ? 'bg-forest-green scale-125' : 'bg-outline-variant'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Quality Matters / Philosophy Bento Grid */}
            <section className="reveal-section py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-background">
                {/* Header Group */}
                <div className="mb-16 reveal-up space-y-4 text-left">
                    <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
                        {config.philosophy.badge}
                    </span>
                    <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-ink max-w-3xl">
                        {config.philosophy.title}
                    </h2>
                    <div className="w-24 h-1 bg-craftsman-gold"></div>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-4xl leading-relaxed pt-2">
                        {config.philosophy.description}
                    </p>
                </div>

                {/* Bento-Style Architectural Grid */}
                <div className="grid grid-cols-12 gap-6">
                    {config.philosophy.cards.map((card, idx) => {
                        // Check different styles of bento cards
                        if (card.image && idx === 0) {
                            // Comfort Seating card (Double width horizontal)
                            return (
                                <div key={idx} className="col-span-12 md:col-span-8 reveal-up flex flex-col md:flex-row bg-surface-container-low border border-outline hover:border-craftsman-gold transition-colors duration-300 group overflow-hidden">
                                    <div className="p-8 md:p-12 flex-1 flex flex-col justify-center text-left">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="font-label-caps text-craftsman-gold">{card.num}</span>
                                            <span className="material-symbols-outlined text-primary">{card.icon}</span>
                                        </div>
                                        <h3 className="font-headline-md text-headline-md mb-4 uppercase tracking-tight">{card.title}</h3>
                                        <p className="font-body-md text-body-md text-on-surface-variant">{card.desc}</p>
                                    </div>
                                    <div className="w-full md:w-1/3 h-64 md:h-auto overflow-hidden">
                                        <img
                                            alt={card.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            src={card.image}
                                        />
                                    </div>
                                </div>
                            );
                        } else if (card.isPrimary) {
                            // Durability card (Single width Primary color highlight)
                            return (
                                <div key={idx} className="col-span-12 md:col-span-4 reveal-up bg-primary text-on-primary p-8 md:p-12 border-none flex flex-col justify-between text-left">
                                    <div>
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="font-label-caps text-tertiary-fixed-dim">{card.num}</span>
                                            <span className="material-symbols-outlined text-tertiary-fixed-dim">{card.icon}</span>
                                        </div>
                                        <h3 className="font-headline-md text-headline-md mb-4 uppercase tracking-tight text-white">{card.title}</h3>
                                    </div>
                                    <p className="font-body-md text-body-md opacity-90">{card.desc}</p>
                                </div>
                            );
                        } else if (card.image && idx === 3) {
                            // Low Maintenance card (Double width horizontal details)
                            return (
                                <div key={idx} className="col-span-12 md:col-span-8 reveal-up bg-white border border-outline hover:border-craftsman-gold transition-colors duration-300 flex flex-col md:flex-row-reverse overflow-hidden">
                                    <div className="p-8 md:p-12 flex-1 flex flex-col justify-center text-left">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="font-label-caps text-craftsman-gold">{card.num}</span>
                                            <span className="material-symbols-outlined text-primary">{card.icon}</span>
                                        </div>
                                        <h3 className="font-headline-md text-headline-md mb-4 uppercase tracking-tight">{card.title}</h3>
                                        <p className="font-body-md text-body-md text-on-surface-variant mb-6">{card.desc}</p>
                                        <div className="flex gap-2">
                                            {card.tags && card.tags.map((t, i) => (
                                                <span key={i} className="px-3 py-1 bg-surface-container text-on-surface-variant font-label-caps border border-outline-variant text-[10px]">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 h-64 md:h-auto bg-surface-dim relative overflow-hidden group">
                                        <img
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            alt={card.title}
                                            src={card.image}
                                        />
                                        <div className="absolute inset-0 bg-primary/10"></div>
                                    </div>
                                </div>
                            );
                        } else if (idx === 4 && card.image) {
                            // Community / Full Width Feature
                            return (
                                <div key={idx} className="col-span-12 reveal-up relative h-96 overflow-hidden border border-outline hover:border-craftsman-gold transition-colors duration-300 group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        alt={card.title}
                                        src={card.image}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-deep-ink/90 via-deep-ink/50 to-transparent flex items-center px-8 md:px-20 text-left">
                                        <div className="max-w-xl text-white">
                                            <div className="flex items-center gap-4 mb-6">
                                                <span className="font-label-caps text-craftsman-gold">{card.num}</span>
                                                <span className="material-symbols-outlined text-craftsman-gold">{card.icon}</span>
                                            </div>
                                            <h3 className="font-headline-md text-headline-md md:text-headline-lg mb-4 uppercase tracking-tight text-white">{card.title}</h3>
                                            <p className="font-body-lg text-body-lg opacity-90 leading-relaxed">{card.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        } else {
                            // Default Single Width card (Aesthetic Enhancement, etc.)
                            return (
                                <div key={idx} className="col-span-12 md:col-span-4 reveal-up bg-surface-container-highest p-8 md:p-12 border border-outline hover:border-craftsman-gold transition-colors duration-300 flex flex-col text-left">
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="font-label-caps text-primary">{card.num}</span>
                                        <span className="material-symbols-outlined text-primary">{card.icon}</span>
                                    </div>
                                    <h3 className="font-headline-md text-headline-md mb-4 uppercase tracking-tight">{card.title}</h3>
                                    <p className="font-body-md text-body-md text-on-surface-variant">{card.desc}</p>
                                </div>
                            );
                        }
                    })}
                </div>
            </section>

            {/* Closing Statement / Quote Section */}
            <section className="reveal-section bg-surface-container-low py-24 px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-outline-variant">
                <div className="max-w-4xl mx-auto text-center reveal-up">
                    <span className="material-symbols-outlined text-6xl text-craftsman-gold mb-8 block">format_quote</span>
                    <p className="font-headline-md text-headline-md italic text-primary leading-tight mb-10">
                        "{config.quote.text}"
                    </p>
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-1 bg-craftsman-gold mb-4"></div>
                        <p className="font-label-caps tracking-widest text-on-surface">— {config.quote.author}</p>
                    </div>
                </div>
            </section>

            {/* Product Range Categories / Video Section */}
            {activeProductId !== "benches" ? (
                (() => {
                    const videoData = getVideoSectionData(activeProductId);
                    return (
                        <ScrollVideoSection
                            badge={videoData.badge}
                            heading={videoData.heading}
                            videoUrl={videoData.videoUrl}
                            description={videoData.description}
                            features={videoData.features}
                        />
                    );
                })()
            ) : (
                config.categories && config.categories.list && config.categories.list.length > 0 && (
                    <section className="reveal-section bg-surface py-24 px-margin-mobile md:px-margin-desktop border-b border-outline-variant">
                        <div className="max-w-container-max mx-auto">
                            <div className="mb-16 text-left space-y-4 reveal-up">
                                <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
                                    {config.categories.badge}
                                </span>
                                <h2 className="font-headline-lg text-headline-lg text-deep-ink">
                                    {config.categories.title}
                                </h2>
                                <div className="w-24 h-1 bg-craftsman-gold"></div>
                                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
                                    {config.categories.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                                {config.categories.list.map((cat, idx) => {
                                    const isLarge = idx === 0;
                                    return (
                                        <div
                                            key={idx}
                                            style={{ transitionDelay: `${idx * 150}ms` }}
                                            className={`group bento-card reveal-up relative overflow-hidden bg-surface-container-low border border-outline-variant hover:border-craftsman-gold hover:shadow-lg transition-all duration-300 p-0 flex ${isLarge ? "md:col-span-8 flex-col md:flex-row" : "md:col-span-4 flex-col justify-between"
                                                }`}
                                        >
                                            {isLarge ? (
                                                <>
                                                    <div className="md:w-1/2 overflow-hidden h-64 md:h-full relative">
                                                        <img
                                                            alt={cat.alt}
                                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                            src={cat.src}
                                                        />
                                                    </div>
                                                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between text-left">
                                                        <div>
                                                            <span className="font-label-caps text-xs text-craftsman-gold mb-4 block">COLLECTION 01</span>
                                                            <Link to={cat.path} className="block group/title">
                                                                <h3 className="font-headline-md font-semibold text-2xl text-on-surface group-hover/title:text-primary transition-colors">
                                                                    {cat.title}
                                                                </h3>
                                                            </Link>
                                                            <p className="font-body-md text-sm text-on-surface-variant mt-4 leading-relaxed">
                                                                {cat.desc}
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center justify-between pt-6 border-t border-outline-variant/40 mt-8">
                                                            <Link to={cat.path} className="font-label-caps text-xs text-forest-green hover:text-primary transition-colors flex items-center gap-1 font-semibold uppercase group/explore">
                                                                Explore Collection
                                                                <span className="material-symbols-outlined text-sm group-hover/explore:translate-x-1 transition-transform">arrow_forward</span>
                                                            </Link>
                                                            <Link to="/contact" className="bg-primary text-on-primary px-4 py-2.5 text-[10px] font-label-caps uppercase rounded-none hover:bg-forest-green transition-all shadow-sm border-b border-charcoal-industrial active:opacity-90">
                                                                Request Quote
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div>
                                                        <div className="h-64 overflow-hidden relative">
                                                            <img
                                                                alt={cat.alt}
                                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                                src={cat.src}
                                                            />
                                                        </div>
                                                        <div className="p-8 text-left">
                                                            <span className="font-label-caps text-xs text-craftsman-gold mb-4 block">COLLECTION 0{idx + 1}</span>
                                                            <Link to={cat.path} className="block group/title">
                                                                <h3 className="font-headline-md font-semibold text-2xl text-on-surface group-hover/title:text-primary transition-colors">
                                                                    {cat.title}
                                                                </h3>
                                                            </Link>
                                                            <p className="font-body-md text-sm text-on-surface-variant mt-3 leading-relaxed">
                                                                {cat.desc}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="p-8 pt-0 text-left">
                                                        <div className="flex items-center justify-between pt-6 border-t border-outline-variant/40">
                                                            <Link to={cat.path} className="font-label-caps text-xs text-forest-green hover:text-primary transition-colors flex items-center gap-1 font-semibold uppercase group/explore">
                                                                Explore Collection
                                                                <span className="material-symbols-outlined text-sm group-hover/explore:translate-x-1 transition-transform">arrow_forward</span>
                                                            </Link>
                                                            <Link to="/contact" className="bg-primary text-on-primary px-4 py-2.5 text-[10px] font-label-caps uppercase rounded-none hover:bg-forest-green transition-all shadow-sm border-b border-charcoal-industrial active:opacity-90">
                                                                Request Quote
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                )
            )}

            {/* Design Your Specification Configurator */}
            {activeProductId === "benches" ? (
                <BenchesConfigurator
                    config={config}
                    materialKeys={materialKeys}
                    materialData={materialData}
                    configMaterial={configMaterial}
                    setConfigMaterial={setConfigMaterial}
                    lengthOptions={lengthOptions}
                    configLength={configLength}
                    setConfigLength={setConfigLength}
                    designOptions={designOptions}
                    configDesign={configDesign}
                    configAntiGraffiti={configAntiGraffiti}
                    setConfigAntiGraffiti={setConfigAntiGraffiti}
                    configGroundFixing={configGroundFixing}
                    setConfigGroundFixing={setConfigGroundFixing}
                    activeMaterialData={activeMaterialData}
                    totalCostMultiplier={totalCostMultiplier}
                />
            ) : (
                <ProductConfigurator config={config} />
            )}

            {/* Case Studies / Projects */}
            {projectSlides.length > 0 && config.provenExcellence.show !== false && (
                <section className="reveal-section bg-surface py-20 md:py-24 px-margin-mobile md:px-margin-desktop border-b border-outline-variant">
                    <div className="max-w-container-max mx-auto">
                        {/* Header Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 reveal-up">
                            <div className="lg:col-span-6 text-left space-y-4">
                                <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
                                    {config.provenExcellence.badge}
                                </span>
                                <h2 className="font-headline-lg text-headline-lg text-deep-ink">
                                    {config.provenExcellence.title}
                                </h2>
                                <div className="w-24 h-1 bg-craftsman-gold"></div>
                            </div>
                            <div className="lg:col-span-6">
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 lg:pt-0">
                                    {config.provenExcellence.stats.map((stat, i) => (
                                        <div key={i} className="border-l-2 border-craftsman-gold/30 pl-4 space-y-1 text-left">
                                            <div className="font-headline-md text-2xl sm:text-3xl text-forest-green font-bold">{stat.val}</div>
                                            <div className="text-[10px] text-on-surface-variant font-label-caps tracking-widest font-semibold">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Interactive Tab Navigation */}
                        <div className="flex border-b border-outline-variant overflow-x-auto no-scrollbar mb-8 scroll-smooth reveal-up" style={{ transitionDelay: "100ms" }}>
                            {projectSlides.map((slide, idx) => {
                                const isActive = activeSlide === idx;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveSlide(idx)}
                                        className={`flex-shrink-0 px-6 py-4 border-b-2 text-left transition-all duration-300 focus:outline-none ${isActive
                                            ? "border-craftsman-gold text-deep-ink opacity-100 font-bold"
                                            : "border-transparent text-on-surface-variant opacity-60 hover:opacity-100"
                                            }`}
                                    >
                                        <span className="block text-[9px] tracking-widest font-semibold uppercase font-label-caps text-craftsman-gold mb-1">
                                            PROJECT 0{idx + 1}
                                        </span>
                                        <span className="text-xs sm:text-sm font-medium whitespace-nowrap">{slide.name}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Case Study Slider */}
                        <div className="relative mb-8 group reveal-up" style={{ transitionDelay: "200ms" }}>
                            <div className="overflow-hidden relative border border-outline-variant bg-surface-container-lowest">
                                <div
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                                >
                                    {projectSlides.map((slide, idx) => (
                                        <div key={idx} className="w-full flex-shrink-0">
                                            <div className="flex flex-col lg:flex-row h-full lg:h-[480px]">
                                                {/* Image Showcase with Zoom effect */}
                                                <div className="lg:w-1/2 h-64 sm:h-80 lg:h-full overflow-hidden relative group/img border-b lg:border-b-0 lg:border-r border-outline-variant">
                                                    <img
                                                        alt={slide.name}
                                                        className="w-full h-full object-cover transform scale-100 group-hover/img:scale-105 transition-transform duration-700"
                                                        src={slide.src}
                                                    />
                                                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 font-label-technical text-[9px] tracking-widest uppercase font-semibold border border-outline-variant">
                                                        PROJECT PHOTO
                                                    </div>
                                                </div>

                                                {/* Technical Context */}
                                                <div className="lg:w-1/2 p-6 sm:p-10 lg:p-12 flex flex-col justify-center space-y-6 text-left">
                                                    <div className="space-y-2">
                                                        <span className="font-label-technical text-craftsman-gold uppercase tracking-widest text-xs font-semibold">
                                                            {slide.tag}
                                                        </span>
                                                        <h3 className="font-headline-md text-2xl sm:text-3xl text-on-surface leading-tight">{slide.name}</h3>
                                                        <div className="flex items-center gap-1.5 text-xs text-on-surface-variant font-medium">
                                                            <span className="material-symbols-outlined text-sm">location_on</span>
                                                            {slide.location}
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-4 gap-4 py-4 border-y border-outline-variant">
                                                        <div className="col-span-1">
                                                            <p className="text-[9px] uppercase tracking-widest text-on-surface-variant mb-1 font-semibold">Quantity</p>
                                                            <p className="font-bold text-deep-ink text-sm sm:text-base">{slide.qty}</p>
                                                        </div>
                                                        <div className="col-span-1">
                                                            <p className="text-[9px] uppercase tracking-widest text-on-surface-variant mb-1 font-semibold">Timeline</p>
                                                            <p className="font-bold text-deep-ink text-sm sm:text-base">{slide.timeline}</p>
                                                        </div>
                                                        <div className="col-span-2">
                                                            <p className="text-[9px] uppercase tracking-widest text-on-surface-variant mb-1 font-semibold">Material</p>
                                                            <p className="font-bold text-deep-ink text-sm sm:text-base whitespace-normal break-words" title={slide.material}>{slide.material}</p>
                                                        </div>
                                                    </div>

                                                    {/* Technical Benefits */}
                                                    <div className="space-y-2">
                                                        <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-semibold">Key Specs Met</p>
                                                        <div className="flex flex-wrap gap-2">
                                                            {slide.benefits.map((benefit, i) => (
                                                                <span key={i} className="bg-surface-container-low border border-outline-variant text-on-surface text-[9px] font-bold uppercase px-2.5 py-1 font-label-caps tracking-wider">
                                                                    {benefit}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <p className="text-body-md text-on-surface-variant leading-relaxed text-sm">
                                                        {slide.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Slider Controls */}
                            <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-6 lg:-left-12 z-10">
                                <button
                                    onClick={prevSlide}
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-deep-ink border border-outline-variant flex items-center justify-center shadow-md hover:bg-deep-ink hover:text-white transition-all focus:outline-none"
                                >
                                    <span className="material-symbols-outlined text-xl">chevron_left</span>
                                </button>
                            </div>
                            <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-6 lg:-right-12 z-10">
                                <button
                                    onClick={nextSlide}
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-deep-ink border border-outline-variant flex items-center justify-center shadow-md hover:bg-deep-ink hover:text-white transition-all focus:outline-none"
                                >
                                    <span className="material-symbols-outlined text-xl">chevron_right</span>
                                </button>
                            </div>
                        </div>

                        {/* Pagination Dots */}
                        <div className="flex justify-center space-x-2.5 mb-16">
                            {projectSlides.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveSlide(idx)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all focus:outline-none ${activeSlide === idx ? 'bg-craftsman-gold w-6' : 'bg-outline-variant hover:bg-on-surface-variant'}`}
                                />
                            ))}
                        </div>

                        {/* Rebuilt Portfolio Call to Action */}
                        <div className="text-center mb-20">
                            <Link
                                to="/catalogue"
                                className="flex sm:inline-flex items-center justify-center gap-3 border border-deep-ink hover:bg-deep-ink hover:text-white w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 text-[11px] sm:text-xs font-bold font-label-caps uppercase tracking-wider sm:tracking-widest transition-all duration-300 group"
                            >
                                View More Projects &amp; Case Studies
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </div>

                        {/* Additional Installations Marquee */}
                        <div className="border-t border-outline-variant pt-12 mt-20">
                            <h4 className="font-label-technical text-on-surface-variant uppercase tracking-widest text-center text-xs font-semibold mb-8">
                                Additional Major Installations
                            </h4>
                            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                                {additionalMajorInstallations.map((inst, i) => (
                                    <span key={i} className="font-headline-md text-lg md:text-xl font-bold">{inst}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Support & FAQ */}
            <SupportFAQ />

            {/* Bottom Advantage & Conversion Area */}
            <AdvantageCTA />
        </div>
    );
};

export default ProductDetailPage;
