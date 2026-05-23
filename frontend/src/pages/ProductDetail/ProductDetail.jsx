import React, { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { fetchProducts } from "../../lib/wp";
import { updatePageSEO, cleanPageSEO, generateProductSchema } from "../../lib/seo";

// Icons
import { MdKeyboardArrowRight, MdFileDownload, MdArrowBack } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const carouselRef = useRef(null);
  
  // Dynamic Product State
  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // States for interactive configurator
  const [selectedWood, setSelectedWood] = useState("");
  const [selectedMetal, setSelectedMetal] = useState("");
  const [selectedModule, setSelectedModule] = useState("");

  // Accordion active tab state
  const [activeTab, setActiveTab] = useState("materials");

  // Dropdown line state
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Downloads simulation state
  const [downloadingFile, setDownloadingFile] = useState(null);
  const [downloadAlert, setDownloadAlert] = useState("");

  // Form submission state
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  // Quote form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    firm: "",
    location: "",
    quantity: "1-5",
    message: ""
  });

  // Fetch dynamic products from WordPress API
  useEffect(() => {
    let active = true;
    const loadProductData = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts();
        if (active) {
          setAllProducts(data);
          const found = data.find((p) => p.id === id);
          setProduct(found || null);
        }
      } catch (err) {
        console.error("Error loading products in detail view:", err);
      } finally {
        if (active) setLoading(false);
      }
    };
    loadProductData();
    return () => {
      active = false;
    };
  }, [id]);

  // Inject SEO title, meta descriptions, and JSON-LD schema dynamically
  useEffect(() => {
    if (product) {
      const pageUrl = window.location.href;
      const schemaMarkup = product.yoast_head_json?.schema || generateProductSchema(product, pageUrl);

      updatePageSEO({
        title: product.yoast_head_json?.title || `${product.line} | ${product.title} - Urbanland Products LLP`,
        description: product.yoast_head_json?.description || product.tagline || product.description,
        og_title: product.yoast_head_json?.og_title || product.title,
        og_description: product.yoast_head_json?.og_description || product.tagline,
        og_image: product.yoast_head_json?.og_image || product.image,
        schema: schemaMarkup
      });
    }
    return () => {
      cleanPageSEO();
    };
  }, [product]);

  // Initialize selected values when product loads
  useEffect(() => {
    if (product) {
      setSelectedWood(product.options.wood[0] || "");
      setSelectedMetal(product.options.metal[0] || "");
      setSelectedModule(product.options.modules[0] || "");
    }
  }, [product]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClose = () => setDropdownOpen(false);
    window.addEventListener("click", handleClose);
    return () => window.removeEventListener("click", handleClose);
  }, []);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-[#F7F4EF] flex flex-col justify-center items-center text-center p-8">
        <svg className="animate-spin h-10 w-10 text-[#2C5F2E] mb-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        <p className="text-[#2D2D2D]/60 text-xs font-bold uppercase tracking-widest">Loading Catalog Data...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="w-full min-h-screen bg-[#F7F4EF] flex flex-col justify-center items-center text-center p-8">
        <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">Product Not Found</h2>
        <p className="text-[#2D2D2D]/70 mb-8">The product you are looking for does not exist in our catalog.</p>
        <Link 
          to="/Urbanland" 
          className="px-6 py-3 bg-[#2C5F2E] text-white rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#2D2D2D] transition-colors"
        >
          Return to Catalog
        </Link>
      </div>
    );
  }

  // Get other products for the related items section
  const relatedProducts = allProducts.filter((p) => p.id !== product.id).slice(0, 4);

  // Scroll horizontal gallery carousel
  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" 
        ? -carouselRef.current.clientWidth * 0.75 
        : carouselRef.current.clientWidth * 0.75;
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  };

  // Simulate file download
  const handleDownload = (fileName) => {
    setDownloadingFile(fileName);
    setTimeout(() => {
      setDownloadingFile(null);
      setDownloadAlert(`Technical file "${fileName}" downloaded successfully!`);
      setTimeout(() => {
        setDownloadAlert("");
      }, 3500);
    }, 1200);
  };

  // Submit quote request
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSuccess(true);
    }, 1500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden">
      {/* Dynamic Download Toast Alert Notification */}
      {downloadAlert && (
        <div className="fixed top-6 right-6 z-50 bg-[#2C5F2E] border border-white/20 text-white rounded-2xl px-6 py-4 flex items-center gap-3 shadow-2xl animate-bounce">
          <FaCheckCircle className="text-[#C9A84C] text-lg shrink-0" />
          <p className="text-xs font-semibold">{downloadAlert}</p>
        </div>
      )}

      {/* Top Banner Block: mmcité-style light-gray section containing breadcrumbs, dropdown line header, and bleeding images */}
      <div className="w-full bg-[#E5E5E5] text-[#1A1A1A] pb-12 pt-32 overflow-hidden">
        {/* Breadcrumbs & Navigation Back Row */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-1 text-[10px] md:text-xs text-black/50 uppercase tracking-widest font-bold select-none">
            <Link to="/Urbanland" className="hover:text-[#e65a19] transition-colors">Catalog</Link>
            <MdKeyboardArrowRight className="text-sm" />
            <span className="text-black/35">{product.category}</span>
            <MdKeyboardArrowRight className="text-sm" />
            <span className="text-black/70">{product.line}</span>
          </div>
          <button 
            onClick={() => navigate("/Urbanland")}
            className="flex items-center gap-1.5 text-[10px] md:text-xs font-bold uppercase tracking-wider text-black/60 hover:text-[#e65a19] transition-colors cursor-pointer"
          >
            <MdArrowBack className="text-base" /> Back to list
          </button>
        </div>

        {/* mmcité-style Full-Width Header Row */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 flex items-start justify-between">
          {/* Left Side: Product Line + Dropdown */}
          <div className="relative flex items-center" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)} 
              className="text-5xl md:text-8xl font-black tracking-tight text-black leading-none flex items-center gap-3 md:gap-4 hover:opacity-80 transition-all select-none cursor-pointer uppercase"
            >
              <span>{product.line}</span>
              {/* Orange triangle pointing down */}
              <span 
                className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-[#e65a19] transition-transform duration-300 inline-block align-middle mt-2 md:mt-4" 
                style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} 
              />
            </button>
            
            {dropdownOpen && (
              <div className="absolute top-[105%] left-0 w-72 md:w-80 bg-white border border-black/[0.08] shadow-[0_15px_50px_rgba(0,0,0,0.15)] rounded-3xl p-4 z-40 max-h-96 overflow-y-auto scrollbar-none animate-fadeIn">
                <p className="text-[9px] font-black uppercase tracking-wider text-[#2D2D2D]/40 mb-3 px-2">Select Product Line</p>
                {allProducts.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setDropdownOpen(false);
                      navigate(`/product/${p.id}`);
                    }}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex justify-between items-center cursor-pointer ${
                      p.id === product.id 
                        ? "bg-[#2C5F2E] text-white" 
                        : "text-[#2D2D2D] hover:bg-[#2D2D2D]/5"
                    }`}
                  >
                    <span>{p.line}</span>
                    <span className="text-[10px] opacity-60 font-medium normal-case">{p.title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Side: Header quick anchors */}
          <div className="flex flex-col items-end text-right text-xs md:text-sm text-black select-none shrink-0 pt-2 md:pt-4">
            <a href="#downloads-section" className="hover:opacity-70 transition-opacity font-normal">For download</a>
            <a href="#related-section" className="hover:opacity-70 transition-opacity font-normal mt-3">Models</a>
          </div>
        </section>

        {/* mmcité-style Full-Width Bleeding Carousel Slider */}
        <section className="w-full relative group mt-4">
          {/* Navigation Arrow buttons */}
          <button
            onClick={() => scrollCarousel("left")}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white text-black shadow-md border border-black/5 flex justify-center items-center z-30 hover:scale-105 active:scale-95 transition-all cursor-pointer select-none font-sans text-base"
            aria-label="Scroll left"
          >
            ←
          </button>
          <button
            onClick={() => scrollCarousel("right")}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white text-black shadow-md border border-black/5 flex justify-center items-center z-30 hover:scale-105 active:scale-95 transition-all cursor-pointer select-none font-sans text-base"
            aria-label="Scroll right"
          >
            →
          </button>

          {/* Horizontal flex scroll track */}
          <div 
            ref={carouselRef}
            className="w-full overflow-x-auto scrollbar-none flex gap-5 px-6 md:px-12 snap-x snap-mandatory scroll-smooth pb-4"
          >
            {product.gallery.map((imgUrl, index) => (
              <div 
                key={index} 
                className="relative flex-shrink-0 h-[45vh] md:h-[60vh] rounded-[37.5px] overflow-hidden bg-white/20 border border-black/5 shadow-[0_12px_32px_rgba(0,0,0,0.06)] snap-center"
              >
                <img 
                  src={imgUrl} 
                  alt={`${product.title} contextual slide ${index + 1}`} 
                  className="h-full w-auto object-cover select-none"
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Restructured Architectural Info Split Grid */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
        {/* Left Column: Product Details & Interactive Configurator (Width: 6/12) */}
        <div className="lg:col-span-6 w-full flex flex-col gap-8">
          {/* Title & Tagline details */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1A1A1A]">
                {product.title}
              </h2>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] bg-[#2C5F2E]/5 border border-[#2C5F2E]/10 rounded-full px-4 py-1.5 self-start sm:self-center">
                {product.category}
              </span>
            </div>
            <p className="text-lg font-medium text-[#C9A84C] tracking-wide leading-snug">
              "{product.tagline}"
            </p>
            <p className="text-sm md:text-base text-[#2D2D2D]/80 leading-relaxed mt-2">
              {product.description}
            </p>
          </div>

          {/* Key features bullets */}
          <div className="flex flex-col gap-3 bg-white/30 border border-black/[0.03] p-6 rounded-3xl">
            <p className="text-[10px] font-black uppercase tracking-widest text-[#2D2D2D]/55 mb-1">Key Design Advantages</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.features.map((feat, idx) => (
                <li key={idx} className="text-xs text-[#2D2D2D]/85 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2C5F2E] shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Configuration selections */}
          <div className="flex flex-col gap-6 pt-4 border-t border-black/[0.04]">
            <h3 className="text-lg font-bold tracking-tight text-[#1A1A1A]">Interactive Configurator</h3>

            {/* Wood type selection */}
            <div className="flex flex-col gap-2.5">
              <p className="text-[10px] font-black uppercase tracking-wider text-[#2D2D2D]/50 flex justify-between items-center">
                <span>Wood deck finish:</span>
                <span className="text-[#2C5F2E] normal-case font-bold">{selectedWood}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.options.wood.map((wd) => (
                  <button
                    key={wd}
                    onClick={() => setSelectedWood(wd)}
                    className={`px-4 py-2 rounded-full text-xs font-medium border cursor-pointer transition-all duration-300 ${
                      selectedWood === wd
                        ? "bg-[#2C5F2E] text-white border-[#2C5F2E] shadow-sm"
                        : "bg-white text-[#2D2D2D] border-[#2D2D2D]/12 hover:bg-[#2D2D2D]/5"
                    }`}
                  >
                    {wd}
                  </button>
                ))}
              </div>
            </div>

            {/* Metal colors selection */}
            <div className="flex flex-col gap-2.5">
              <p className="text-[10px] font-black uppercase tracking-wider text-[#2D2D2D]/50 flex justify-between items-center">
                <span>Metal frame color:</span>
                <span className="text-[#2C5F2E] normal-case font-bold">{selectedMetal}</span>
              </p>
              <div className="flex flex-wrap gap-3">
                {product.options.metal.map((col) => {
                  let hexColor = "#2d2d2d";
                  if (col.includes("RAL 6009") || col.includes("Green")) hexColor = "#1D3220";
                  if (col.includes("Corten") || col.includes("Brown")) hexColor = "#663B23";
                  if (col.includes("Gold") || col.includes("Yellow")) hexColor = "#E69C24";
                  if (col.includes("RAL 5008") || col.includes("Blue")) hexColor = "#1E2A38";
                  if (col.includes("RAL 9006") || col.includes("Silver")) hexColor = "#9EA0A3";
                  if (col.includes("Sand") || col.includes("RAL 1013")) hexColor = "#EADEC9";
                  if (col.includes("White")) hexColor = "#F3F1EC";

                  const isSelected = selectedMetal === col;

                  return (
                    <button
                      key={col}
                      onClick={() => setSelectedMetal(col)}
                      className={`group relative w-9 h-9 rounded-full border cursor-pointer transition-all duration-300 flex justify-center items-center ${
                        isSelected ? "border-[#2C5F2E] scale-110 shadow-sm" : "border-black/[0.08] hover:scale-105"
                      }`}
                      title={col}
                    >
                      <span 
                        className="w-7 h-7 rounded-full block border border-black/5" 
                        style={{ backgroundColor: hexColor }} 
                      />
                      {isSelected && (
                        <span className="absolute w-1.5 h-1.5 rounded-full bg-white border border-[#2C5F2E] z-10" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Modular elements selection */}
            <div className="flex flex-col gap-2.5">
              <p className="text-[10px] font-black uppercase tracking-wider text-[#2D2D2D]/50 flex justify-between items-center">
                <span>Selected module element:</span>
                <span className="text-[#2C5F2E] normal-case font-bold">{selectedModule}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.options.modules.map((mod) => (
                  <button
                    key={mod}
                    onClick={() => setSelectedModule(mod)}
                    className={`px-4 py-2 rounded-full text-xs font-medium border cursor-pointer transition-all duration-300 ${
                      selectedModule === mod
                        ? "bg-[#2D2D2D] text-[#F7F4EF] border-[#2D2D2D] shadow-sm"
                        : "bg-white text-[#2D2D2D] border-[#2D2D2D]/12 hover:bg-[#2D2D2D]/5"
                    }`}
                  >
                    {mod}
                  </button>
                ))}
              </div>
              
              {/* Dynamic specs summary log */}
              <div className="bg-white/60 border border-black/[0.03] p-5 rounded-2xl">
                <p className="text-[11px] md:text-xs text-[#2D2D2D]/85 leading-relaxed">
                  Compiling structural details for <span className="font-bold text-[#2C5F2E]">{product.line}</span> configuration using <span className="font-bold text-[#2D2D2D]">{selectedModule}</span> units clad with FSC-certified <span className="font-bold text-[#2C5F2E]">{selectedWood}</span> on raw H-beams powder-coated in <span className="font-bold text-[#C9A84C]">{selectedMetal}</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Specs Tab-Accordion (Width: 6/12) */}
        <div className="lg:col-span-6 w-full flex flex-col gap-6">
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#1A1A1A] border-b border-black/[0.04] pb-2">Technical Specifications</h3>
          
          <div className="flex flex-col gap-4">
            {/* Spec Navigation Accordion Tabs */}
            <div className="flex justify-between border-b border-black/[0.04] overflow-x-auto scrollbar-none py-1">
              {[
                { key: "materials", label: "Materials" },
                { key: "dimensions", label: "Dimensions" },
                { key: "installation", label: "Mounting" },
                { key: "sustainability", label: "Ecology" }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer border-b-2 transition-all whitespace-nowrap ${
                    activeTab === tab.key
                      ? "border-[#2C5F2E] text-[#2C5F2E]"
                      : "border-transparent text-[#2D2D2D]/55 hover:text-[#2D2D2D]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Spec panel details wrapper */}
            <div className="min-h-[160px] text-xs md:text-sm text-[#2D2D2D]/85 leading-relaxed bg-white/60 p-6 rounded-3xl border border-black/[0.03]">
              {activeTab === "materials" && (
                <div className="animate-fadeIn">
                  <p className="font-black text-[9px] text-[#2C5F2E] uppercase tracking-wider mb-2">Design & Materials</p>
                  <p>{product.specifications.materials}</p>
                </div>
              )}
              {activeTab === "dimensions" && (
                <div className="animate-fadeIn">
                  <p className="font-black text-[9px] text-[#2C5F2E] uppercase tracking-wider mb-2">Dimensions & Sizing</p>
                  <p>{product.specifications.dimensions}</p>
                </div>
              )}
              {activeTab === "installation" && (
                <div className="animate-fadeIn">
                  <p className="font-black text-[9px] text-[#2C5F2E] uppercase tracking-wider mb-2">Mounting & Anchoring</p>
                  <p>{product.specifications.installation}</p>
                </div>
              )}
              {activeTab === "sustainability" && (
                <div className="animate-fadeIn">
                  <p className="font-black text-[9px] text-[#2C5F2E] uppercase tracking-wider mb-2">Sustainability & Certifications</p>
                  <p>{product.specifications.sustainability}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CAD/BIM Downloads Section */}
      <section id="downloads-section" className="max-w-[1400px] mx-auto px-6 md:px-12 mt-16 pt-16 border-t border-[#2D2D2D]/10">
        <div className="max-w-[700px] mb-8">
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#1A1A1A] mb-2">Architectural Downloads</h3>
          <p className="text-sm text-[#2D2D2D]/75 leading-relaxed">
            Access 2D DWG drawings, 3D Revit models, and detailed specification sheets to import this product straight into your construction layouts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "2D CAD Drawing (.DWG)", format: "dwg" },
            { name: "3D BIM Model (.RVT)", format: "rvt" },
            { name: "PDF Specification Sheet", format: "pdf" },
            { name: "Installation Guide (.PDF)", format: "pdf" }
          ].map((file) => {
            const isThisDownloading = downloadingFile === file.name;
            return (
              <div 
                key={file.name} 
                className="bg-white rounded-2xl p-5 border border-black/[0.04] shadow-[0_5px_15px_rgba(0,0,0,0.02)] flex flex-col justify-between gap-4 group"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A84C] bg-[#C9A84C]/10 px-2 py-0.5 rounded-md">
                    {file.format}
                  </span>
                  <h4 className="text-sm font-semibold text-[#2D2D2D] tracking-tight leading-snug mt-2">
                    {file.name}
                  </h4>
                </div>

                <button
                  disabled={downloadingFile !== null}
                  onClick={() => handleDownload(file.name)}
                  className={`w-full py-3 rounded-xl border flex justify-center items-center gap-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isThisDownloading
                      ? "bg-[#2D2D2D] text-white border-[#2D2D2D]"
                      : "bg-[#2C5F2E]/5 text-[#2C5F2E] border-[#2C5F2E]/10 hover:bg-[#2C5F2E] hover:text-white"
                  }`}
                >
                  {isThisDownloading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Downloading...
                    </>
                  ) : (
                    <>
                      <MdFileDownload className="text-base" />
                      Download
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quote Request Form Section */}
      <section id="quote-form" className="max-w-[1400px] mx-auto px-6 md:px-12 mt-16 pt-16 border-t border-[#2D2D2D]/10">
        {/* Full-screen success confirmation modal */}
        {formSuccess && (
          <div className="fixed inset-0 z-55 bg-[#2D2D2D]/90 backdrop-blur-md flex justify-center items-center p-6">
            <div className="bg-[#F7F4EF] rounded-[2.5rem] p-10 md:p-16 max-w-[550px] w-full text-center flex flex-col items-center gap-6 shadow-2xl animate-scaleIn">
              <FaCheckCircle className="text-[#2C5F2E] text-6xl md:text-7xl animate-pulse" />
              <h3 className="text-2xl md:text-3xl font-black text-[#2D2D2D] tracking-tight uppercase leading-none mt-2">Quote Request Sent</h3>
              <p className="text-xs md:text-sm text-[#2D2D2D]/80 leading-relaxed">
                Thank you! Your architectural query has been logged. An Urbanland LLP project manager will verify structural configuration details, cross-reference shipping coordinates to <span className="font-bold text-[#2C5F2E]">{formData.location}</span>, and contact you with quotes within 24 hours.
              </p>
              <button
                onClick={() => setFormSuccess(false)}
                className="w-full py-4 bg-[#2C5F2E] text-white rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#2D2D2D] active:scale-95 transition-all duration-300 cursor-pointer mt-4"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Form titles side */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="max-w-[450px]">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#2C5F2E] mb-2">— Contact Project Estimators</p>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#1A1A1A] mb-4">
                Specify Urbanland® for your project.
              </h2>
              <p className="text-sm text-[#2D2D2D]/75 leading-relaxed mb-6">
                Fill in the form to request pricing sheets, custom project variants, shipping cost estimations to anywhere in India, or custom CAD package compilation.
              </p>
            </div>

            <div className="hidden lg:flex flex-col gap-2 border-t border-[#2D2D2D]/10 pt-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#2D2D2D]/40">Active Configuration Parameters</p>
              <div className="flex flex-col gap-1 text-[11px] text-[#2D2D2D]/80 font-mono">
                <p>▸ MODEL: {product.line} ({product.title})</p>
                <p>▸ FINISH: {selectedWood}</p>
                <p>▸ COATING: {selectedMetal}</p>
                <p>▸ ELEMENT: {selectedModule}</p>
              </div>
            </div>
          </div>

          {/* Input fields form card */}
          <div className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-12 border border-black/[0.04] shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full name input */}
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black uppercase tracking-widest text-[#2D2D2D]/60" htmlFor="name">Full Name *</label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-[#F7F4EF]/50 hover:bg-[#F7F4EF]/70 focus:bg-[#F7F4EF]/80 border border-black/[0.08] focus:border-[#2C5F2E] px-5 py-3.5 rounded-xl text-sm focus:outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                {/* Business email input */}
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black uppercase tracking-widest text-[#2D2D2D]/60" htmlFor="email">Business Email *</label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-[#F7F4EF]/50 hover:bg-[#F7F4EF]/70 focus:bg-[#F7F4EF]/80 border border-black/[0.08] focus:border-[#2C5F2E] px-5 py-3.5 rounded-xl text-sm focus:outline-none transition-all"
                    placeholder="name@firm.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Company name input */}
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black uppercase tracking-widest text-[#2D2D2D]/60" htmlFor="firm">Architecture Firm / Builder *</label>
                  <input
                    required
                    type="text"
                    id="firm"
                    name="firm"
                    value={formData.firm}
                    onChange={handleInputChange}
                    className="w-full bg-[#F7F4EF]/50 hover:bg-[#F7F4EF]/70 focus:bg-[#F7F4EF]/80 border border-black/[0.08] focus:border-[#2C5F2E] px-5 py-3.5 rounded-xl text-sm focus:outline-none transition-all"
                    placeholder="Enter company name"
                  />
                </div>
                {/* Shipping location input */}
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black uppercase tracking-widest text-[#2D2D2D]/60" htmlFor="location">Project Location (City, State) *</label>
                  <input
                    required
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full bg-[#F7F4EF]/50 hover:bg-[#F7F4EF]/70 focus:bg-[#F7F4EF]/80 border border-black/[0.08] focus:border-[#2C5F2E] px-5 py-3.5 rounded-xl text-sm focus:outline-none transition-all"
                    placeholder="e.g. Pune, Maharashtra"
                  />
                </div>
              </div>

              {/* Quantity select */}
              <div className="flex flex-col gap-2">
                <label className="text-[9px] font-black uppercase tracking-widest text-[#2D2D2D]/60" htmlFor="quantity">Estimated units required *</label>
                <select
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className="w-full bg-[#F7F4EF]/50 hover:bg-[#F7F4EF]/70 focus:bg-[#F7F4EF]/80 border border-black/[0.08] focus:border-[#2C5F2E] px-5 py-3.5 rounded-xl text-sm focus:outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="1-5">1 - 5 units</option>
                  <option value="6-15">6 - 15 units</option>
                  <option value="16-40">16 - 40 units</option>
                  <option value="41+">41+ units (Large-scale public supply)</option>
                </select>
              </div>

              {/* Message textbox */}
              <div className="flex flex-col gap-2">
                <label className="text-[9px] font-black uppercase tracking-widest text-[#2D2D2D]/60" htmlFor="message">Message / Specifications Query</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full bg-[#F7F4EF]/50 hover:bg-[#F7F4EF]/70 focus:bg-[#F7F4EF]/80 border border-black/[0.08] focus:border-[#2C5F2E] px-5 py-3.5 rounded-xl text-sm focus:outline-none transition-all resize-none"
                  placeholder="Describe your site installation constraints or custom finish requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={formSubmitting}
                className="w-full py-4 bg-[#2C5F2E] text-white rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#2D2D2D] hover:text-[#C9A84C] active:scale-95 transition-all duration-300 cursor-pointer flex justify-center items-center gap-2"
              >
                {formSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting Inquiry...
                  </>
                ) : (
                  "Submit Quote & File Request"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Related Products Carousel */}
      <section id="related-section" className="max-w-[1400px] mx-auto px-6 md:px-12 mt-20 pt-16 border-t border-[#2D2D2D]/10">
        <div className="flex justify-between items-end mb-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#2C5F2E] mb-2">— Complementary elements</p>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#1A1A1A]">Related Products</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((rel) => (
            <Link 
              key={rel.id} 
              to={`/product/${rel.id}`}
              className="bg-white rounded-3xl p-6 border border-black/[0.03] shadow-[0_5px_15px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 group no-underline flex flex-col justify-between items-stretch aspect-[4/5]"
            >
              <div className="flex justify-between items-start">
                <h4 className="text-base font-light text-[#2D2D2D] leading-tight tracking-tight group-hover:text-black">
                  {rel.title}
                </h4>
                <span className="text-[9px] font-black uppercase tracking-widest bg-[#C9A84C]/10 text-[#C9A84C] px-2 py-0.5 rounded-md">
                  {rel.line}
                </span>
              </div>

              <div className="flex-1 my-4 flex justify-center items-center overflow-hidden">
                <img 
                  src={rel.image} 
                  alt={rel.title} 
                  className="max-h-[85%] max-w-[85%] object-contain transform group-hover:scale-103 transition-transform duration-500" 
                />
              </div>

              <span className="text-[10px] font-bold uppercase tracking-wider text-[#2C5F2E] text-right block group-hover:underline">
                View Element →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
