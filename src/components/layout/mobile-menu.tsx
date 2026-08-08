"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, ChevronLeft, ChevronDown, ChevronUp, Bot, Monitor, Cloud, Globe, Smartphone, Server, 
  Layers, Layout, Code, ShieldCheck, Users, Wrench 
} from "lucide-react";
import { mainNavigation } from "@/data/navigation";
import { technologiesData } from "@/data/technologies";

const mobileServices = [
  { name: "AI Solutions", icon: Bot },
  { name: "Custom Software Development", icon: Monitor },
  { name: "SaaS Development", icon: Cloud },
  { name: "Web Development", icon: Globe },
  { name: "Mobile App Development", icon: Smartphone },
  { name: "Cloud Solutions", icon: Server },
  { name: "DevOps", icon: Layers },
  { name: "UI/UX Design", icon: Layout },
  { name: "API Development", icon: Code },
  { name: "QA & Testing", icon: ShieldCheck },
  { name: "Staff Augmentation", icon: Users },
  { name: "Support & Maintenance", icon: Wrench },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [activeSubMenu, setActiveSubMenu] = React.useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = React.useState<string | null>(null);

  // Focus trapping and ESC key handling
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    setActiveSubMenu(null);
    setExpandedCategory(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Sliding Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-[100] w-full max-w-sm border-l border-gray-200 bg-white text-black p-6 shadow-xl sm:max-w-md flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div className="mb-8 flex items-center justify-between shrink-0">
              {/* Header logic based on activeSubMenu */}
              {activeSubMenu ? (
                <button 
                  onClick={() => setActiveSubMenu(null)} 
                  className="flex items-center gap-2 text-[22px] font-semibold tracking-wide text-black focus-visible:outline-none"
                >
                  <ChevronLeft className="w-6 h-6" /> {activeSubMenu}
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full border-[1.5px] border-black flex items-center justify-center font-bold text-sm tracking-tighter">V</div>
                  <span className="text-xl font-medium tracking-wide">Vixora Labs</span>
                </div>
              )}
              
              <button
                type="button"
                onClick={handleClose}
                className="rounded-md p-2 hover:bg-gray-100 focus-visible:outline-none"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-black" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar pb-6 flex flex-col">
              {!activeSubMenu && (
                <nav className="flex flex-col space-y-6 flex-1">
                  {mainNavigation.map((item) => (
                    item.label === "Services" || item.label === "Technology" ? (
                      <button
                        key={item.href}
                        onClick={() => setActiveSubMenu(item.label)}
                        className="-mx-2 rounded-md px-2 py-1 text-[17px] font-medium text-black transition-colors hover:text-gray-600 flex justify-between items-center focus-visible:outline-none"
                      >
                        {item.label}
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70"><path d="m9 18 6-6-6-6"/></svg>
                      </button>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={handleClose}
                        className="-mx-2 rounded-md px-2 py-1 text-[17px] font-medium text-black transition-colors hover:text-gray-600 flex justify-between items-center"
                      >
                        {item.label}
                      </Link>
                    )
                  ))}
                  
                  <div className="mt-auto pt-6 w-full">
                    <Link
                      href="/contact"
                      onClick={handleClose}
                      className="flex w-full items-center justify-center bg-white border border-black px-4 h-[52px] text-[16px] font-medium text-black transition-colors hover:bg-gray-50 focus-visible:outline-none"
                    >
                      Contact Us
                    </Link>
                  </div>
                </nav>
              )}

              {activeSubMenu === "Services" && (
                <div className="flex flex-col gap-[10px]">
                  {mobileServices.map((srv, idx) => (
                    <a key={idx} href="#" className="flex items-center gap-[18px] py-[10px] group/item">
                      <div className="w-[42px] h-[42px] rounded-md border border-gray-200 flex items-center justify-center shrink-0 group-hover/item:border-gray-400 transition-colors">
                        <srv.icon className="w-5 h-5 text-[#505050]" strokeWidth={1.5} />
                      </div>
                      <span className="text-[16px] font-medium text-[#141414]">{srv.name}</span>
                    </a>
                  ))}
                </div>
              )}

              {activeSubMenu === "Technology" && (
                <div className="flex flex-col">
                  {technologiesData.map((category) => (
                    <div key={category.id} className="flex flex-col border-b border-gray-100 last:border-none">
                      <button 
                        className="flex items-center justify-between py-[18px] text-[16px] font-semibold text-[#141414] focus-visible:outline-none"
                        onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                      >
                        {category.title}
                        {expandedCategory === category.id ? (
                          <ChevronUp className="w-5 h-5 text-black" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-black" />
                        )}
                      </button>
                      <AnimatePresence>
                        {expandedCategory === category.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-4 pb-5 pt-1 ml-[6px] border-l-[1.5px] border-gray-200">
                              {category.technologies.map((tech, idx) => (
                                <a key={idx} href="#" className="pl-[18px] text-[15px] font-normal text-[#505050] hover:text-black">
                                  {tech.name}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
