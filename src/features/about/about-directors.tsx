"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const directors = [
  { name: "Harsh Chavada", role: "Founder & CEO", image: "/images/Harsh Chavada.jpeg" },
  { name: "Harsh Limbani", role: "Co-Founder & CTO", image: "/images/Harsh Limbani.png" },
  { name: "Kunj Khimani", role: "Director", image: "/images/Kunj Khimani.png" },
  { name: "Vishwa Vaghasiya", role: "Director", image: "/images/Vishwa Vaghasiya.jpeg" },
];

export function AboutDirectors() {
  return (
    <section className="bg-black w-full lg:py-20 md:py-[60px] py-10 text-white">
      <div className="container w-full lg:px-[15px] sm:px-10 px-5 mx-auto 2xl:max-w-[1516px] xl:max-w-[1200px]">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-10 lg:mb-[80px]">
          <h2 className="text-white font-semibold lg:text-[40px] md:text-[36px] text-[24px] leading-tight mb-4">
            Directors Of Vixora Labs
          </h2>
          <div className="w-[80px] h-[3px] bg-blue-600 rounded-full" />
        </div>

        {/* Marquee Container */}
        <div className="overflow-hidden w-full relative">
          <motion.div
            className="flex gap-6 lg:gap-[30px] w-max"
            animate={{ x: ["0%", "calc(-50% - 15px)"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {[...directors, ...directors, ...directors, ...directors].map((director, index) => (
              <div 
                key={index} 
                className="relative group overflow-hidden w-[85vw] sm:w-[300px] lg:w-[calc((100vw-120px)/4)] xl:w-[270px] 2xl:w-[349px] flex-shrink-0"
              >
                {/* Image Container */}
                <div className="relative aspect-square w-full">
                  <Image 
                    src={director.image}
                    alt={director.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                
                {/* Name Box */}
                <div className="absolute bottom-4 left-4 right-4 bg-white py-4 px-2 text-center shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                  <h3 className="text-[#1e3a8a] font-semibold text-[18px]">
                    {director.name}
                  </h3>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
