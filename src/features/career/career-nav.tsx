"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Career", href: "/career", active: true },
  { name: "Perks & Benefits", href: "#perks", active: false },
  { name: "Hiring process", href: "#process", active: false },
  { name: "Open jobs", href: "#jobs", active: false },
  { name: "Insights from employee", href: "#insights", active: false },
];

export function CareerNav() {
  const pathname = usePathname();

  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-5 sm:px-10 lg:px-[15px] 2xl:max-w-[1516px] xl:max-w-[1200px]">
        <ul className="flex items-center gap-6 md:gap-10 overflow-x-auto no-scrollbar whitespace-nowrap">
          {navLinks.map((link) => {
            // Check if active (we are currently hardcoding 'Career' as active based on path)
            const isActive = link.name === "Career" ? pathname === "/career" : link.active;
            
            return (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className={`inline-block py-4 text-[14px] md:text-[15px] font-medium transition-colors border-b-[2px] ${
                    isActive 
                      ? "text-blue-600 border-blue-600" 
                      : "text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
