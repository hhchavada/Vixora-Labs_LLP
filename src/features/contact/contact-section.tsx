"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

export function ContactSection() {
  const countries = [
    { code: "+93", flagUrl: "https://flagcdn.com/w20/af.png", name: "Afghanistan" },
    { code: "+355", flagUrl: "https://flagcdn.com/w20/al.png", name: "Albania" },
    { code: "+213", flagUrl: "https://flagcdn.com/w20/dz.png", name: "Algeria" },
    { code: "+376", flagUrl: "https://flagcdn.com/w20/ad.png", name: "Andorra" },
    { code: "+244", flagUrl: "https://flagcdn.com/w20/ao.png", name: "Angola" },
    { code: "+1", flagUrl: "https://flagcdn.com/w20/ag.png", name: "Antigua and Barbuda" },
    { code: "+54", flagUrl: "https://flagcdn.com/w20/ar.png", name: "Argentina" },
    { code: "+61", flagUrl: "https://flagcdn.com/w20/au.png", name: "Australia" },
    { code: "+55", flagUrl: "https://flagcdn.com/w20/br.png", name: "Brazil" },
    { code: "+1", flagUrl: "https://flagcdn.com/w20/ca.png", name: "Canada" },
    { code: "+86", flagUrl: "https://flagcdn.com/w20/cn.png", name: "China" },
    { code: "+33", flagUrl: "https://flagcdn.com/w20/fr.png", name: "France" },
    { code: "+49", flagUrl: "https://flagcdn.com/w20/de.png", name: "Germany" },
    { code: "+91", flagUrl: "https://flagcdn.com/w20/in.png", name: "India" },
    { code: "+39", flagUrl: "https://flagcdn.com/w20/it.png", name: "Italy" },
    { code: "+81", flagUrl: "https://flagcdn.com/w20/jp.png", name: "Japan" },
    { code: "+52", flagUrl: "https://flagcdn.com/w20/mx.png", name: "Mexico" },
    { code: "+7", flagUrl: "https://flagcdn.com/w20/ru.png", name: "Russia" },
    { code: "+256", flagUrl: "https://flagcdn.com/w20/ug.png", name: "Uganda" },
    { code: "+380", flagUrl: "https://flagcdn.com/w20/ua.png", name: "Ukraine" },
    { code: "+971", flagUrl: "https://flagcdn.com/w20/ae.png", name: "United Arab Emirates" },
    { code: "+44", flagUrl: "https://flagcdn.com/w20/gb.png", name: "United Kingdom" },
    { code: "+1", flagUrl: "https://flagcdn.com/w20/us.png", name: "United States" }
  ];
  const [selectedCountry, setSelectedCountry] = React.useState(countries.find(c => c.name === "United States") || countries[0]);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="w-full bg-white lg:py-20 md:py-[60px] py-10">
      <Container className="w-full max-w-[1410px] mx-auto px-5 lg:px-[15px]">
        <div className="flex flex-col lg:flex-row 2xl:gap-[90px] xl:gap-[60px] lg:gap-10 gap-10">
          
          {/* Left Column */}
          <div className="lg:w-[52%] w-full md:m-0 mb-5 xl:pr-0 lg:pr-[30px] md:p-0 pr-0">
            <h1 className="text-[26px] sm:text-[32px] md:text-[36px] font-semibold text-[#141414] leading-none mb-2">
              Contact Us
            </h1>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal text-[#606060] leading-relaxed max-w-[500px]">
              Let's Build Something Extraordinary Together
            </p>
            
            <p className="hidden md:block text-[15px] sm:text-[18px] md:text-[20px] text-[#606060] leading-relaxed md:leading-9 mt-6 md:mt-[30px] mb-8 md:mb-[80px]">
              Share your project idea with Vixora Labs and discover how our experts can help you build scalable software, AI-powered solutions, and innovative digital products that drive business growth.
            </p>

            {/* Google Reviews */}
            <a href="#" className="hidden md:block mb-[30px] hover:opacity-80 transition-opacity">
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-[#fbbc05] text-[18px]">★</span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[22px] font-bold tracking-tighter">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </span>
              </div>
              <div className="flex items-center gap-1 text-[#666666] text-[13px] font-medium mt-1">
                <span className="text-[#fbbc05] text-[14px]">★</span> Customer Reviews
              </div>
            </a>

            {/* Social Media */}
            <div className="hidden lg:block">
              <p className="text-[#000000] text-[20px] font-normal mb-[25px]">Follow us in media :</p>
              <div className="flex items-center gap-5">
                <a href="https://www.linkedin.com/company/vixora-labs-llp" target="_blank" rel="noopener noreferrer" className="w-[42px] h-[42px] rounded-full bg-[#111111] hover:bg-black flex items-center justify-center transition-colors text-white">
                  <FaLinkedinIn className="text-[20px]" />
                </a>
                <a href="https://www.instagram.com/vixoralabs.in/" target="_blank" rel="noopener noreferrer" className="w-[42px] h-[42px] rounded-full bg-[#111111] hover:bg-black flex items-center justify-center transition-colors text-white">
                  <FaInstagram className="text-[20px]" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61592461121658" target="_blank" rel="noopener noreferrer" className="w-[42px] h-[42px] rounded-full bg-[#111111] hover:bg-black flex items-center justify-center transition-colors text-white">
                  <FaFacebookF className="text-[20px]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:w-[48%] w-full bg-[#f9f9f9] md:py-[50px] md:px-[60px] py-8 px-5 shadow-sm rounded-[4px]">
            <div className="md:mb-[46px] mb-[30px]">
              <h4 className="text-[#141414] font-medium text-[16px] md:text-[18px] uppercase tracking-wide">BUSINESS ENQUIRY</h4>
              <div className="w-[35px] h-[1.5px] bg-[#111111] mt-2"></div>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              {/* Full Name */}
              <div className="flex flex-col mb-[25px] md:mb-[30px]">
                <label className="text-[#141414] font-medium text-[14px] md:text-[15px] mb-1.5">
                  Full name<span className="text-[#EA4335]">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Enter your full name" 
                  className="border-b border-[#cccccc] bg-transparent h-10 text-[14px] md:text-[15px] outline-none focus:border-[#111111] transition-colors placeholder:text-[#999999]"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col mb-[25px] md:mb-[30px]">
                <label className="text-[#141414] font-medium text-[14px] md:text-[15px] mb-1.5">
                  Email<span className="text-[#EA4335]">*</span>
                </label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="border-b border-[#cccccc] bg-transparent h-10 text-[14px] md:text-[15px] outline-none focus:border-[#111111] transition-colors placeholder:text-[#999999]"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col mb-[25px] md:mb-[30px]">
                <label className="text-[#141414] font-medium text-[14px] md:text-[15px] mb-1.5">
                  Phone number
                </label>
                <div className="flex items-center border-b border-[#cccccc] h-10 focus-within:border-[#111111] transition-colors relative">
                  
                  {/* Custom Dropdown for Country Code */}
                  <div className="relative h-full flex items-center" ref={dropdownRef}>
                    <button 
                      type="button" 
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center w-[45px] h-full pl-1 gap-1 focus:outline-none"
                    >
                      <img src={selectedCountry.flagUrl} alt={selectedCountry.name} className="w-[20px] h-[14px] object-cover rounded-[2px]" />
                      <span className="text-[10px] text-[#666666]">&#9662;</span>
                    </button>
                    
                    {isDropdownOpen && (
                      <div className="absolute top-[100%] left-0 mt-1 w-[260px] bg-white border border-gray-200 shadow-lg rounded-md z-50 py-1 max-h-[220px] overflow-y-auto">
                        {countries.map((country) => (
                          <button
                            key={country.name}
                            type="button"
                            className="w-full text-left px-3 py-2.5 text-[14px] md:text-[15px] hover:bg-gray-100 flex items-center gap-3"
                            onClick={() => {
                              setSelectedCountry(country);
                              setIsDropdownOpen(false);
                            }}
                          >
                            <img src={country.flagUrl} alt={country.name} className="w-[20px] h-[14px] object-cover rounded-[2px] shadow-[0_0_1px_rgba(0,0,0,0.5)]" />
                            <span className="text-[#141414]">{country.name}</span>
                            <span className="text-[#999999]">{country.code}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center flex-1 h-full relative z-0">
                    <span className="text-[14px] md:text-[15px] text-[#141414] ml-2 w-[40px]">{selectedCountry.code}</span>
                    <input 
                      type="tel" 
                      className="w-full bg-transparent h-full pl-1 text-[14px] md:text-[15px] outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="flex flex-col mb-[30px]">
                <label className="text-[#141414] font-medium text-[14px] md:text-[15px] mb-1.5">
                  Project details<span className="text-[#EA4335]">*</span>
                </label>
                <textarea 
                  placeholder="Brief about your project" 
                  className="border-b border-[#cccccc] bg-transparent pt-2 h-[80px] text-[14px] md:text-[15px] outline-none focus:border-[#111111] transition-colors resize-none placeholder:text-[#999999]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end mt-4">
                <button 
                  type="submit" 
                  className="bg-[#141414] hover:bg-black text-white text-[15px] md:text-[16px] font-medium h-[48px] md:h-[52px] w-full md:w-[239px] transition-colors inline-flex items-center justify-center gap-2 rounded-[2px]"
                >
                  Submit 
                  <ArrowRight size={18} strokeWidth={1.5} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
