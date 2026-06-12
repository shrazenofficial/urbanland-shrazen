import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { products } from "../../constants/productsData";

const AriaChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  
  // Lead collection conversational form state
  const [leadForm, setLeadForm] = useState({
    active: false,
    step: 0, // 1: Name, 2: Email, 3: Phone/Details
    name: "",
    email: "",
    phone: "",
    productInterest: ""
  });

  const chatEndRef = useRef(null);

  // Initial welcome message
  useEffect(() => {
    setMessages([
      {
        id: "welcome",
        sender: "aria",
        text: "Hello! Welcome to Urbanland Products. I am Aria, your AI Architectural Consultant. How can I assist you with your project today?",
        options: [
          { text: "🏢 Match Products to Project", value: "match_project" },
          { text: "❓ Frequently Asked Questions", value: "faq" },
          { text: "💬 Get Custom Quote", value: "lead_start" },
          { text: "📞 Request Call Back", value: "callback_start" }
        ]
      }
    ]);

    // Show a floating micro-notification after 5 seconds to prompt the user
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll to bottom on new messages
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const addMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  const simulateAriaTyping = (text, options = null, productsToSuggest = null, delay = 1000) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage({
        id: String(Date.now()),
        sender: "aria",
        text,
        options,
        products: productsToSuggest
      });
    }, delay);
  };

  const handleOptionClick = (option) => {
    // 1. Add User message
    addMessage({
      id: String(Date.now()),
      sender: "user",
      text: option.text
    });

    // Handle leads conversational triggers
    if (option.value === "lead_start" || option.value === "callback_start") {
      setLeadForm({
        active: true,
        step: 1,
        name: "",
        email: "",
        phone: "",
        productInterest: option.value === "callback_start" ? "Call Back Requested" : ""
      });
      simulateAriaTyping("I would be happy to organize a custom proposal for you. First, may I know your **Name**?", []);
      return;
    }

    // Interactive Decision Trees
    switch (option.value) {
      case "match_project":
        simulateAriaTyping(
          "What type of architectural environment are you designing?",
          [
            { text: "🌴 Luxury Resorts & Pools", value: "proj_resort" },
            { text: "🌳 Public Parks & Walkways", value: "proj_park" },
            { text: "🏢 Corporate Patios", value: "proj_corp" },
            { text: "🛍️ Malls & Indoor Spaces", value: "proj_mall" },
            { text: "🚍 Smart City & Transit", value: "proj_transit" }
          ]
        );
        break;

      // Project recommendation selections
      case "proj_resort":
        const resortProds = products.filter(p => ["poolside-loungers", "cabanas", "gazebos"].includes(p.category)).slice(0, 3);
        simulateAriaTyping(
          "For luxury resorts and poolside spaces, landscape architects specify our PE Wicker seating, resort cabanas, and sun loungers. Here are our top models for your consideration:",
          [
            { text: "💬 Inquiry about these models", value: "lead_start" },
            { text: "🏠 Main Menu", value: "main_menu" }
          ],
          resortProds
        );
        break;

      case "proj_park":
        const parkProds = products.filter(p => ["benches", "dustbins", "ss-bollards"].includes(p.category)).slice(0, 3);
        simulateAriaTyping(
          "For public parks, municipal walkways, and community squares, we recommend heavy-duty structural steel benches and segregation litter bins. Here are our featured models:",
          [
            { text: "💬 Request Park Proposal", value: "lead_start" },
            { text: "🏠 Main Menu", value: "main_menu" }
          ],
          parkProds
        );
        break;

      case "proj_corp":
        const corpProds = products.filter(p => ["canteen-tables", "planters", "benches"].includes(p.category)).slice(0, 3);
        simulateAriaTyping(
          "For corporate cafeterias, offices, and courtyards, our integrated Morse canteen sets and concrete planters offer low maintenance and modern vibes. Take a look at these models:",
          [
            { text: "💬 Get Corporate Price List", value: "lead_start" },
            { text: "🏠 Main Menu", value: "main_menu" }
          ],
          corpProds
        );
        break;

      case "proj_mall":
        const mallProds = products.filter(p => ["planters", "dustbins", "benches"].includes(p.category)).slice(0, 3);
        simulateAriaTyping(
          "For commercial malls, entry lobbies, and indoor squares, we supply high-performance concrete planters and sleek triple segregation bins. Recommended models:",
          [
            { text: "💬 Ask for Custom Dimensions", value: "lead_start" },
            { text: "🏠 Main Menu", value: "main_menu" }
          ],
          mallProds
        );
        break;

      case "proj_transit":
        const transitProds = products.filter(p => ["bus-shelters", "dustbins", "ss-bollards"].includes(p.category)).slice(0, 3);
        simulateAriaTyping(
          "For smart city infrastructure and transit shelters, our wind-load certified bus shelters and chemical-anchored litter bins provide long-term service. Recommended models:",
          [
            { text: "💬 Request Municipal Quote", value: "lead_start" },
            { text: "🏠 Main Menu", value: "main_menu" }
          ],
          transitProds
        );
        break;

      // Frequently Asked Questions
      case "faq":
        simulateAriaTyping(
          "Choose a FAQ category to learn more about Urbanland's products and policies:",
          [
            { text: "🛡️ Warranty & Guarantee", value: "faq_warranty" },
            { text: "⏳ Lead Times & Shipping", value: "faq_shipping" },
            { text: "🪵 Timber & Sustainability", value: "faq_timber" },
            { text: "📐 Custom Fabrication", value: "faq_custom" },
            { text: "🏠 Main Menu", value: "main_menu" }
          ]
        );
        break;

      case "faq_warranty":
        simulateAriaTyping(
          "All Urbanland products feature a **2-Year Comprehensive Guarantee** covering structural defects, paint coatings, and mechanical elements. For marine-grade conditions, we offer extended Class C5 anti-corrosion treatments.",
          [
            { text: "❓ More FAQs", value: "faq" },
            { text: "🏠 Main Menu", value: "main_menu" }
          ]
        );
        break;

      case "faq_shipping":
        simulateAriaTyping(
          "Standard lead time is **3 to 4 weeks** from drawing approval, depending on order size. We ship throughout India and provide technical supervision for installation upon request.",
          [
            { text: "❓ More FAQs", value: "faq" },
            { text: "🏠 Main Menu", value: "main_menu" }
          ]
        );
        break;

      case "faq_timber":
        simulateAriaTyping(
          "We prioritize biological neutrality. All tropical timbers (like Jatoba and Robinia) are **FSC® Certified**. We also specialize in WPC (Wood-Plastic Composite) and second-generation NFC (Natural Fiber Composite) made from recycled rice husks.",
          [
            { text: "❓ More FAQs", value: "faq" },
            { text: "🏠 Main Menu", value: "main_menu" }
          ]
        );
        break;

      case "faq_custom":
        simulateAriaTyping(
          "Yes! Because landscape layouts vary, our products feature a modular design framework. We can custom fabricate dimensions, specify custom RAL powder coating, or alter cladding layouts according to your blueprints.",
          [
            { text: "❓ More FAQs", value: "faq" },
            { text: "🏠 Main Menu", value: "main_menu" }
          ]
        );
        break;

      case "main_menu":
        simulateAriaTyping(
          "How else can I assist you with your landscape elements today?",
          [
            { text: "🏢 Match Products to Project", value: "match_project" },
            { text: "❓ Frequently Asked Questions", value: "faq" },
            { text: "💬 Get Custom Quote", value: "lead_start" },
            { text: "📞 Request Call Back", value: "callback_start" }
          ]
        );
        break;

      default:
        break;
    }
  };

  const handleProductInquireClick = (prodName) => {
    addMessage({
      id: String(Date.now()),
      sender: "user",
      text: `Inquire about ${prodName}`
    });
    setLeadForm({
      active: true,
      step: 1,
      name: "",
      email: "",
      phone: "",
      productInterest: prodName
    });
    simulateAriaTyping(`Excellent choice! I will note down your interest in the **${prodName}**. May I please start with your **Name**?`, []);
  };

  // Conversational Form Handler
  const handleLeadInputSubmit = (text) => {
    if (!text.trim()) return;

    // Add user message
    addMessage({
      id: String(Date.now()),
      sender: "user",
      text
    });

    if (leadForm.step === 1) {
      // Name submitted, ask for Email
      setLeadForm(prev => ({ ...prev, step: 2, name: text }));
      simulateAriaTyping(`Nice to meet you, ${text}! What is your **Email Address**?`, []);
    } else if (leadForm.step === 2) {
      // Email submitted, ask for Phone/Company details
      setLeadForm(prev => ({ ...prev, step: 3, email: text }));
      simulateAriaTyping("Thank you. Finally, what is your **Phone Number** or **Company Name**?", []);
    } else if (leadForm.step === 3) {
      // Phone submitted, capture the final details, store in local storage
      const finalForm = {
        ...leadForm,
        phone: text,
        timestamp: new Date().toISOString()
      };

      try {
        const existingLeads = JSON.parse(localStorage.getItem("urbanland_leads") || "[]");
        existingLeads.push(finalForm);
        localStorage.setItem("urbanland_leads", JSON.stringify(existingLeads));
      } catch (err) {
        console.warn("Could not save lead to localStorage:", err);
      }

      setLeadForm({ active: false, step: 0, name: "", email: "", phone: "", productInterest: "" });

      simulateAriaTyping(
        `Got it! Thank you, ${finalForm.name}. Your details have been submitted. Our engineering consultant team will reach out to you at **${finalForm.email}** or **${text}** within 2 business hours.`,
        [{ text: "🏠 Main Menu", value: "main_menu" }]
      );
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      {/* 🔔 FLOATING FAB NOTIFICATION */}
      {showNotification && !isOpen && (
        <div className="absolute bottom-16 right-0 bg-[#C9A84C] text-[#142216] font-bold text-[10px] tracking-wider uppercase px-4 py-2 rounded-2xl shadow-xl border border-white/20 whitespace-nowrap animate-bounce flex items-center gap-2 select-none">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          Aria: Designing a project? Click to match products!
          <button 
            onClick={(e) => { e.stopPropagation(); setShowNotification(false); }} 
            className="ml-2 font-black text-xs hover:opacity-75 cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}

      {/* 💬 FLOATING CHAT BUTTON (FAB) */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowNotification(false);
        }}
        className="w-14 h-14 rounded-full bg-[#2C5F2E] hover:bg-[#3D7A40] text-white flex justify-center items-center shadow-2xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 relative border border-white/10 group"
        aria-label="Toggle chatbot window"
      >
        {isOpen ? (
          <svg className="w-6 h-6 transition-transform duration-300 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
        <span className="absolute right-0 top-0 w-3 h-3 rounded-full bg-[#C9A84C] border border-white scale-0 group-hover:scale-100 transition-transform duration-300"></span>
      </button>

      {/* 🚀 CHAT WINDOW CONTAINER */}
      {isOpen && (
        <div className="absolute bottom-18 right-0 w-[360px] sm:w-[400px] h-[520px] bg-[#142216]/95 backdrop-blur-md rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 overflow-hidden flex flex-col transition-all duration-500 ease-out translate-y-0 opacity-100 animate-slideUp">
          
          {/* Header */}
          <header className="p-5 border-b border-white/10 flex items-center justify-between bg-white/[0.03]">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/35 flex justify-center items-center text-[#C9A84C] font-black uppercase text-xs select-none">
                AR
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-[#142216]"></span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-white tracking-tight">Aria</h3>
                <span className="text-[10px] text-white/50 tracking-wider font-light uppercase">AI Architectural Guide</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white/40 hover:text-white transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </header>

          {/* Chat Logs */}
          <div className="flex-1 p-5 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {messages.map((msg) => {
              const isAria = msg.sender === "aria";
              return (
                <div key={msg.id} className={`flex flex-col ${isAria ? "items-start" : "items-end"}`}>
                  <div className={`max-w-[85%] rounded-[1.5rem] px-4 py-3 text-xs leading-relaxed ${
                    isAria
                      ? "bg-white/[0.06] text-white/90 rounded-tl-sm border border-white/5"
                      : "bg-[#2C5F2E] text-white rounded-tr-sm"
                  }`}>
                    {/* Parse simple markdown bold */}
                    {msg.text.split("**").map((chunk, idx) => 
                      idx % 2 === 1 ? <strong key={idx} className="font-extrabold text-[#C9A84C]">{chunk}</strong> : chunk
                    )}
                  </div>

                  {/* suggest product cards directly in log */}
                  {isAria && msg.products && (
                    <div className="w-full mt-3 space-y-3">
                      {msg.products.map((p) => (
                        <div key={p.id} className="w-full bg-white rounded-2xl p-3.5 flex items-center justify-between gap-4 border border-white/10 shadow-md">
                          <div className="w-14 h-14 bg-[#F7F4EF] rounded-xl flex items-center justify-center shrink-0 border border-black/5 overflow-hidden">
                            <img src={p.image} alt={p.title} className="w-[90%] h-[90%] object-contain" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-bold text-gray-900 truncate">{p.title}</h4>
                            <p className="text-[10px] text-gray-500 truncate">{p.line}</p>
                          </div>
                          <button
                            onClick={() => handleProductInquireClick(p.title)}
                            className="px-3 py-1.5 bg-[#2C5F2E] hover:bg-black text-white text-[9px] font-black uppercase tracking-wider rounded-full shrink-0 transition-colors cursor-pointer"
                          >
                            Inquire
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Suggest Option Chips */}
                  {isAria && msg.options && msg.options.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3.5 max-w-[95%]">
                      {msg.options.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleOptionClick(opt)}
                          className="px-4 py-2 bg-white/[0.04] hover:bg-white/[0.08] text-[#C9A84C] border border-[#C9A84C]/25 hover:border-[#C9A84C]/50 rounded-full text-[10px] font-semibold uppercase tracking-wider cursor-pointer transition-all active:scale-95 whitespace-nowrap"
                        >
                          {opt.text}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Aria Typing simulation dots */}
            {isTyping && (
              <div className="flex items-center gap-1.5 bg-white/[0.06] border border-white/5 px-4.5 py-3 rounded-full w-fit">
                <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
              </div>
            )}
            
            <div ref={chatEndRef} />
          </div>

          {/* Conversational Lead Input box */}
          {leadForm.active && (
            <div className="p-4 bg-white/[0.02] border-t border-white/10">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const input = e.target.elements.leadInput;
                  if (input.value.trim()) {
                    handleLeadInputSubmit(input.value);
                    input.value = "";
                  }
                }}
                className="flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-full px-4.5 py-2"
              >
                <input
                  name="leadInput"
                  type={leadForm.step === 2 ? "email" : "text"}
                  placeholder={
                    leadForm.step === 1 ? "Enter your name..." :
                    leadForm.step === 2 ? "Enter your email..." :
                    "Enter phone/company..."
                  }
                  required
                  autoComplete="off"
                  className="flex-1 bg-transparent text-xs text-white placeholder-white/30 border-none outline-none focus:ring-0"
                />
                <button
                  type="submit"
                  className="w-7 h-7 rounded-full bg-[#C9A84C] hover:bg-[#E5C76B] text-[#142216] flex justify-center items-center cursor-pointer shrink-0 transition-colors"
                  aria-label="Submit response"
                >
                  <svg className="w-3.5 h-3.5 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          )}

          {/* Standard Footer */}
          {!leadForm.active && (
            <div className="p-4 text-center border-t border-white/5 bg-white/[0.01]">
              <span className="text-[9px] uppercase tracking-widest text-white/30">
                Powered by Urbanland Infrastructure
              </span>
            </div>
          )}
          
        </div>
      )}
    </div>
  );
};

export default AriaChatbot;
