"use client";

import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Phone, Mail, MapPin, ArrowRight, ChevronDown } from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

export function Footer() {
  const [openAccordion, setOpenAccordion] = React.useState<string | null>(null);

  const toggleAccordion = (name: string) => {
    setOpenAccordion(prev => prev === name ? null : name);
  };

  return (
    <footer className="w-full bg-black text-white relative xl:pt-[60px] md:pt-10 md:pb-0 pt-10 pb-0">
      <Container className="w-full max-w-[1410px] mx-auto">
        
        {/* Top Banner */}
        <div className="md:mb-20 mb-10 flex flex-col lg:flex-row lg:items-center justify-between lg:px-[15px] sm:px-[25px] px-5 relative mx-0">
          {/* Logo */}
          <div className="w-full lg:w-[22%] shrink-0 mb-6 lg:mb-0 text-left">
            <div className="flex items-center gap-2 lg:w-auto">
              <div className="w-9 h-9 rounded-full border-[1.5px] border-white flex items-center justify-center font-bold text-sm tracking-tighter">V</div>
              <span className="text-[28px] md:text-3xl font-medium tracking-wide">Vixora Labs</span>
            </div>
          </div>

          {/* Mobile Divider */}
          <div className="w-full h-[1px] bg-white/20 mb-8 lg:hidden"></div>
          
          {/* Banner Text and Button */}
          <div className="w-full lg:w-[74%] flex lg:flex-row flex-col justify-between items-start lg:items-center">
            <div className="flex flex-col text-left mb-6 lg:mb-0">
              <h3 className="lg:text-[24px] md:text-[20px] text-[16px] text-white font-light leading-relaxed max-w-[280px] lg:max-w-none">
                Have a project in mind but need some<br className="hidden lg:block"/> guidance? Reach out to us
              </h3>
            </div>

            {/* Schedule Button */}
            <button className="border border-white hover:bg-white hover:text-black transition-colors text-[14px] md:text-[16px] font-medium w-[220px] md:w-[271px] h-[48px] md:h-[52px] inline-flex items-center justify-between px-5 whitespace-nowrap shrink-0">
              Schedule a meeting <ArrowRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Columns Grid */}
        <div className="md:gap-0 gap-[5px] flex justify-between lg:px-[15px] sm:px-[25px] px-5 relative mx-0 flex-wrap">
          
          {/* Column 1: Services */}
          <div className="w-full md:w-1/2 lg:w-[22%] sm:px-[15px] lg:px-0 relative mb-2 md:mb-0">
            <button 
              onClick={() => toggleAccordion('services')}
              className="w-full min-h-6 lg:mb-5 mb-3 flex items-center justify-between text-[18px] text-white font-medium capitalize lg:cursor-default focus:outline-none"
            >
              Services
              <ChevronDown className={`w-5 h-5 lg:hidden transition-transform duration-300 ${openAccordion === 'services' ? 'rotate-180' : ''}`} />
            </button>
            <ul className={`flex flex-col gap-[6px] overflow-hidden transition-all duration-300 lg:max-h-full ${openAccordion === 'services' ? 'max-h-[500px] mb-6' : 'max-h-0 lg:mb-0'}`}>
              {[
                "Internet of Things(IoT)", "IT Consulting", "Custom Software Development", 
                "Web App Development", "Mobile App Development", "UI/UX Design", 
                "QA & Testing", "Hire Dedicated Team", "Support & Maintenance", 
                "Cloud Computing", "DevOps", "Artificial Intelligence", "Sustainability Services"
              ].map(item => (
                <li key={item}><Link href="#" className="text-[#d1d5db] text-[15px] font-light hover:text-white transition-colors block leading-normal mb-[14px]">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Column 2: Technology */}
          <div className="w-full md:w-1/2 lg:w-[22%] sm:px-[15px] lg:px-0 relative mb-2 md:mb-0 lg:mt-0">
            <button 
              onClick={() => toggleAccordion('technology')}
              className="w-full min-h-6 lg:mb-5 mb-3 flex items-center justify-between text-[18px] text-white font-medium capitalize lg:cursor-default focus:outline-none"
            >
              Technology
              <ChevronDown className={`w-5 h-5 lg:hidden transition-transform duration-300 ${openAccordion === 'technology' ? 'rotate-180' : ''}`} />
            </button>
            <ul className={`flex flex-col gap-[6px] overflow-hidden transition-all duration-300 lg:max-h-full ${openAccordion === 'technology' ? 'max-h-[500px] mb-6' : 'max-h-0 lg:mb-0'}`}>
              {[
                "React Js", "Angular Js", "Node Js", "React Native", "PHP", "Vue Js", 
                "Django", "Postgre SQL", "MongoDB", "NewSQL", "AWS", "Google Cloud"
              ].map(item => (
                <li key={item}><Link href="#" className="text-[#d1d5db] text-[15px] font-light hover:text-white transition-colors block leading-normal mb-[14px]">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="w-full md:w-1/2 lg:w-[22%] sm:px-[15px] lg:px-0 relative mb-8 md:mb-0 lg:mt-0">
            <button 
              onClick={() => toggleAccordion('company')}
              className="w-full min-h-6 lg:mb-5 mb-3 flex items-center justify-between text-[18px] text-white font-medium capitalize lg:cursor-default focus:outline-none"
            >
              Company
              <ChevronDown className={`w-5 h-5 lg:hidden transition-transform duration-300 ${openAccordion === 'company' ? 'rotate-180' : ''}`} />
            </button>
            <ul className={`flex flex-col gap-[6px] overflow-hidden transition-all duration-300 lg:max-h-full ${openAccordion === 'company' ? 'max-h-[300px] mb-4' : 'max-h-0 lg:mb-0'}`}>
              {[
                "About us", "Contact us", "Career", "Works", "Case studies", "Blogs"
              ].map(item => (
                <li key={item}><Link href="#" className="text-[#d1d5db] text-[15px] font-light hover:text-white transition-colors block leading-normal mb-[14px]">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in touch */}
          <div className="w-full md:w-1/2 lg:w-[22%] sm:px-[15px] lg:px-0 relative mt-2 lg:mt-0 flex flex-col">
            <p className="min-h-6 lg:mb-6 mb-6 flex items-center justify-between text-[18px] text-white font-medium capitalize">Get in touch</p>
            
            <div className="mb-5 flex gap-3 items-start text-[#a3a3a3] font-light leading-normal">
              <Phone className="w-[18px] h-[18px] text-white/90 mt-[2px] shrink-0" strokeWidth={1.5} />
              <div className="flex flex-col gap-1.5">
                <span className="text-white text-[15px] font-normal">Contact us :</span>
                <span className="hover:text-white transition-colors cursor-pointer text-[15px]">+91 87809 47319 (Jobs)</span>
                <span className="hover:text-white transition-colors cursor-pointer text-[15px]">+91 70418 43621 (Inquiry)</span>
              </div>
            </div>

            <div className="mb-5 flex gap-3 items-start text-[#a3a3a3] font-light leading-normal">
              <Mail className="w-[18px] h-[18px] text-white/90 mt-[2px] shrink-0" strokeWidth={1.5} />
              <div className="flex flex-col gap-1.5">
                <span className="text-white text-[15px] font-normal">Email us :</span>
                <span className="hover:text-white transition-colors cursor-pointer text-[15px]">jobs@vixoralabs.com</span>
                <span className="hover:text-white transition-colors cursor-pointer text-[15px]">info@vixoralabs.com</span>
                <span className="hover:text-white transition-colors cursor-pointer text-[15px]">sales@vixoralabs.com</span>
              </div>
            </div>

            <div className="mb-5 flex gap-3 items-start text-[#a3a3a3] font-light leading-normal">
              <MapPin className="w-[18px] h-[18px] text-white/90 mt-[2px] shrink-0" strokeWidth={1.5} />
              <div className="flex flex-col gap-1.5">
                <span className="text-white text-[15px] font-normal">Address :</span>
                <span className="leading-relaxed text-[15px]">
                  236 - Rangila park, Hans Society,<br/>
                  Padsala Banglows, Mota Varachha,<br/>
                  Surat, Gujarat 395006
                </span>
                <a href="https://maps.app.goo.gl/28MKLfsfPQn9dfyJ7" target="_blank" rel="noopener noreferrer" className="text-[#a3a3a3] text-[15px] font-light hover:text-white transition-colors mt-1 w-fit">Google map</a>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4 lg:mt-5 mt-5">
              <a href="https://www.linkedin.com/company/vixora-labs-llp" target="_blank" rel="noopener noreferrer" className="w-[32px] h-[32px] rounded-full bg-white hover:bg-[#1c1c1c] hover:text-white flex items-center justify-center transition-colors text-black">
                <FaLinkedinIn className="text-[16px]" />
              </a>
              <a href="https://www.instagram.com/vixoralabs.in/" target="_blank" rel="noopener noreferrer" className="w-[32px] h-[32px] rounded-full bg-white hover:bg-[#1c1c1c] hover:text-white flex items-center justify-center transition-colors text-black">
                <FaInstagram className="text-[16px]" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61592461121658" target="_blank" rel="noopener noreferrer" className="w-[32px] h-[32px] rounded-full bg-white hover:bg-[#1c1c1c] hover:text-white flex items-center justify-center transition-colors text-black">
                <FaFacebookF className="text-[16px]" />
              </a>
            </div>
          </div>

        </div>
      </Container>

      {/* Bottom Legal Bar */}
      <div className="relative border-t border-white/20 mt-16 md:mt-20">
        <Container className="w-full max-w-[1410px] mx-auto px-5 lg:px-[15px] sm:px-[25px] flex flex-col sm:flex-row items-center sm:justify-between justify-center py-[20px] gap-3 sm:gap-0 text-center sm:text-left">
          <p className="text-[14px] text-[#a3a3a3] font-light">
            All rights reserved &copy; 2026 - Vixora Labs LLP
          </p>
          <div className="flex items-center gap-3 md:gap-5 text-[#a3a3a3]">
            <Link href="/terms" className="text-[14px] font-light hover:text-white transition-colors">Terms & Conditions</Link>
            <span className="w-[1px] h-[14px] bg-[#a3a3a3]"></span>
            <Link href="/privacy" className="text-[14px] font-light hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
