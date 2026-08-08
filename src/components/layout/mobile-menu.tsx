"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { mainNavigation } from "@/data/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Focus trapping and ESC key handling
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
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
  }, [isOpen, onClose]);

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
            onClick={onClose}
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
            <div className="mb-8 flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border-[1.5px] border-black flex items-center justify-center font-bold text-sm tracking-tighter">V</div>
                <span className="text-xl font-medium tracking-wide">Vixora Labs</span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-md p-2 hover:bg-gray-100 focus-visible:outline-none"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-black" />
              </button>
            </div>

            <nav className="flex flex-col space-y-6 flex-1">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="-mx-2 rounded-md px-2 py-1 text-[17px] font-medium text-black transition-colors hover:text-gray-600 flex justify-between items-center"
                >
                  {item.label}
                  {(item.label === "Services" || item.label === "Technology") && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70"><path d="m9 18 6-6-6-6"/></svg>
                  )}
                </Link>
              ))}
              
              <div className="mt-auto pt-6 w-full">
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="flex w-full items-center justify-center bg-white border border-black px-4 h-[52px] text-[16px] font-medium text-black transition-colors hover:bg-gray-50 focus-visible:outline-none"
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
