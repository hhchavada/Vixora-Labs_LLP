import * as React from "react";
import Link from "next/link";

const navItems = [
  { label: "Angular JS", href: "#overview" },
  { label: "Overview", href: "#overview" },
  { label: "Companies", href: "#companies" },
  { label: "Guide", href: "#guide" },
];

export function TechNav() {
  return (
    <div className="w-full bg-[#c9dcac] fixed top-[128px] z-40 hidden md:block">
      <div className="container mx-auto px-5 sm:px-[30px] lg:px-[15px] 2xl:max-w-[1516px] xl:max-w-[1200px]">
        <ul className="flex items-center justify-center gap-8 h-12">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <Link 
                href={item.href}
                className={`text-[14px] font-medium transition-colors ${idx === 0 ? "text-[#141414]" : "text-[#5b664d] hover:text-[#141414]"}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
