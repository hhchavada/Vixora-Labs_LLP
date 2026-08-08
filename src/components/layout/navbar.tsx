"use client";

import * as React from "react";
import Link from "next/link";
import { 
  Menu, Bot, Monitor, Cloud, Globe, Smartphone, Server, 
  Layers, Layout, Code, ShieldCheck, Users, Wrench, ArrowRight 
} from "lucide-react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { mainNavigation } from "@/data/navigation";
import { technologiesData } from "@/data/technologies";
import { useScrollData } from "@/hooks/use-scroll";
import { NAVBAR_HEIGHT } from "@/config/navigation";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";
import { Container } from "@/components/ui/container";

export function Navbar() {
  const { direction, isScrolled } = useScrollData();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  // Hide navbar on scroll down if scrolled past threshold, show on scroll up
  const shouldHide = isScrolled && direction === "down" && !isMobileMenuOpen;
  
  // Force dark background on pages that have a light background at the top
  const forceDarkBg = pathname === "/terms" || pathname === "/privacy";

  return (
    <>
      <header
        id="header"
        className={cn(
          "fixed top-[48px] flex items-center z-50 w-full sm:py-5 md:py-0 lg:py-0 lg:px-20 transition-all duration-300",
          (isScrolled || forceDarkBg) ? "bg-[#141414] shadow-md" : "bg-transparent"
        )}
      >
        {/* Inner Wrapper (max-w 1410px) */}
        <div className="flex items-center w-full max-w-[1410px] lg:h-[86px] md:h-[90px] sm:h-[78px] h-[78px] mx-auto px-[15px]">
          
          {/* Left: Exact Logo Sizes from Screenshot 5 */}
          <div className="flex-1 flex justify-start">
            <Link 
              href="/" 
              className="flex items-center justify-start w-[191px] md:w-[240px] xl:w-[252px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Vixora Labs Home"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border-[1.5px] border-white flex items-center justify-center font-bold text-[15px] tracking-tighter text-white">V</div>
                <span className="text-xl md:text-[22px] font-medium tracking-wide text-white">Vixora Labs</span>
              </div>
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <ul className="hidden items-center justify-between lg:gap-[15px] xl:gap-[34px] md:flex flex-shrink-0 h-full">
            {mainNavigation.map((item) => (
              <li key={item.href} className="group flex items-center h-full">
                <Link
                  href={item.href}
                  className="flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary py-8"
                >
                  <p className="min-h-6 relative text-[16px] font-normal text-white after:transition-all after:duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white group-hover:after:w-full">
                    {item.label}
                  </p>
                </Link>

                {/* MEGA MENU FOR SERVICES */}
                {item.label === "Services" && (
                  <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[calc(100vw-40px)] max-w-[1380px] bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none group-hover:pointer-events-auto border-t-[3px] border-[#141414] shadow-2xl">
                    <div className="flex p-[50px] gap-[60px]">
                      
                      {/* Column 1 */}
                      <div className="w-[320px] flex flex-col gap-[30px] border-r border-gray-100 pr-[30px] shrink-0">
                        {[
                          { name: "AI Solutions", icon: Bot },
                          { name: "Custom Software Development", icon: Monitor },
                          { name: "SaaS Development", icon: Cloud },
                          { name: "Web Development", icon: Globe },
                          { name: "Mobile App Development", icon: Smartphone },
                        ].map((srv, idx) => (
                          <a key={idx} href="#" className="flex items-center gap-5 group/item">
                            <div className="w-[46px] h-[46px] rounded-md bg-[#fcfcfc] border border-gray-100 flex items-center justify-center shrink-0 group-hover/item:border-gray-300 transition-colors">
                              <srv.icon className="w-5 h-5 text-[#505050]" strokeWidth={1.5} />
                            </div>
                            <span className="text-[16px] font-medium text-[#303030] group-hover/item:text-[#141414] transition-colors">{srv.name}</span>
                          </a>
                        ))}
                      </div>

                      {/* Column 2 */}
                      <div className="w-[320px] flex flex-col gap-[30px] border-r border-gray-100 pr-[30px] shrink-0">
                        {[
                          { name: "Cloud Solutions", icon: Server },
                          { name: "DevOps", icon: Layers },
                          { name: "UI/UX Design", icon: Layout },
                          { name: "API Development", icon: Code },
                          { name: "QA & Testing", icon: ShieldCheck },
                        ].map((srv, idx) => (
                          <a key={idx} href="#" className="flex items-center gap-5 group/item">
                            <div className="w-[46px] h-[46px] rounded-md bg-[#fcfcfc] border border-gray-100 flex items-center justify-center shrink-0 group-hover/item:border-gray-300 transition-colors">
                              <srv.icon className="w-5 h-5 text-[#505050]" strokeWidth={1.5} />
                            </div>
                            <span className="text-[16px] font-medium text-[#303030] group-hover/item:text-[#141414] transition-colors">{srv.name}</span>
                          </a>
                        ))}
                      </div>

                      {/* Column 3 */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex flex-col gap-[30px]">
                          {[
                            { name: "Staff Augmentation", icon: Users },
                            { name: "Support & Maintenance", icon: Wrench },
                          ].map((srv, idx) => (
                            <a key={idx} href="#" className="flex items-center gap-5 group/item">
                              <div className="w-[46px] h-[46px] rounded-md bg-[#fcfcfc] border border-gray-100 flex items-center justify-center shrink-0 group-hover/item:border-gray-300 transition-colors">
                                <srv.icon className="w-5 h-5 text-[#505050]" strokeWidth={1.5} />
                              </div>
                              <span className="text-[16px] font-medium text-[#303030] group-hover/item:text-[#141414] transition-colors">{srv.name}</span>
                            </a>
                          ))}
                        </div>

                        {/* Consultation Box */}
                        <div className="bg-[#f7f8f9] p-[25px] flex flex-row items-center justify-between mt-auto">
                          <p className="text-[16px] font-medium text-[#141414] leading-[1.4] whitespace-nowrap">
                            Get Consultation from<br/>our Service Experts
                          </p>
                          <a href="/contact" className="bg-[#141414] hover:bg-black text-white text-[15px] font-medium h-[46px] px-[22px] flex items-center justify-center gap-[10px] shrink-0 transition-colors ml-4">
                            Schedule a call <ArrowRight className="w-[18px] h-[18px]" strokeWidth={1.5} />
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* MEGA MENU FOR TECHNOLOGY */}
                {item.label === "Technology" && (
                  <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[calc(100vw-40px)] max-w-[1380px] bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none group-hover:pointer-events-auto border-t-[3px] border-[#141414] shadow-2xl">
                    <div className="flex flex-col p-[50px] gap-[50px]">
                      
                      {/* Top Grid (7 columns) */}
                      <div className="grid grid-cols-7 gap-6">
                        {technologiesData.map((category) => (
                          <div key={category.id} className="flex flex-col">
                            <h4 className="text-[16px] font-semibold text-[#141414] mb-6">{category.title}</h4>
                            <ul className="flex flex-col gap-[18px]">
                              {category.technologies.map((tech, idx) => (
                                <li key={idx}>
                                  <a href="#" className="text-[15px] font-medium text-[#505050] hover:text-[#141414] transition-colors">
                                    {tech.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Consultation Box (Full width) */}
                      <div className="bg-[#f7f8f9] p-[25px] flex flex-row items-center justify-between w-full">
                        <p className="text-[16px] font-semibold text-[#141414]">
                          Get consultation from our Technical experts
                        </p>
                        <a href="/contact" className="bg-[#141414] hover:bg-black text-white text-[15px] font-medium h-[46px] px-[22px] flex items-center justify-center gap-[10px] shrink-0 transition-colors">
                          Schedule a call <ArrowRight className="w-[18px] h-[18px]" strokeWidth={1.5} />
                        </a>
                      </div>

                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Right: CTA / Mobile Toggle */}
          <div className="flex-1 flex justify-end">
            <div className="hidden md:block">
              <Link 
                href="/contact" 
                className="inline-flex w-[178px] h-[44px] py-[10px] px-0 items-center justify-center whitespace-nowrap border border-white/20 bg-transparent hover:bg-white/5 text-white rounded-md font-normal text-sm transition-colors focus-visible:outline-none focus-visible:ring-1"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="-mr-2 rounded-md p-2 text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}
