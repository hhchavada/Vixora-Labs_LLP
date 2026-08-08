"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const CircularBadge = () => {
  return (
    <div className="absolute top-[55%] left-[53%] -translate-x-1/2 -translate-y-1/2 w-[138px] h-[138px] bg-white rounded-full flex items-center justify-center shadow-[0_4px_30px_rgba(0,0,0,0.06)] z-10 hidden lg:flex">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        className="relative w-[110px] h-[110px]"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            id="textPath"
            d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
            fill="transparent"
          />
          <text fontSize="12" fontWeight="600" fill="#141414">
            <textPath href="#textPath" startOffset="0" textLength="245" lengthAdjust="spacing">
              VIXORA LABS LLP • VIXORA LABS LLP • 
            </textPath>
          </text>
        </svg>
      </motion.div>
      <div className="absolute w-[45px] h-[45px] rounded-full border-[2px] border-[#141414] flex items-center justify-center font-bold text-[18px] tracking-tighter text-[#141414] bg-white">
        V
      </div>
    </div>
  );
};

export function AboutHero() {
  return (
    <section className="relative bg-white lg:py-20 md:py-[60px] pt-[30px] pb-[60px] lg:pb-[130px] w-full overflow-hidden">
      <div className="container w-full lg:px-[15px] sm:px-[30px] px-5 mx-auto 2xl:max-w-[1516px] xl:max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-0 lg:gap-[80px]">
          
          {/* Left Content */}
          <div className="lg:w-[598px] w-full flex flex-col justify-center flex-shrink-0">
            <p className="min-h-6 text-[#141414] text-[14px] md:text-[18px] lg:text-[20px] font-semibold 2xl:mb-1.5 sm:mb-3 mb-2 tracking-wide">About us</p>
            <h1 className="min-h-6 text-[20px] sm:text-[28px] md:text-[38px] lg:text-[46px] font-bold text-[#000000] lg:leading-[1.25] md:leading-[50px] leading-[1.4] mb-2">
              Discover Our IT Service Providing Journey
            </h1>
            <p className="min-h-6 text-[#505050] text-[17px] md:text-[18px] leading-[1.6] pt-3 2xl:pb-10 pb-3 lg:block hidden">
              We specialize in strategic planning, designing, and developing world-class software across diverse industries.
            </p>
            
            <Link 
              href="/services" 
              className="lg:flex group cursor-pointer text-[#141414] items-center gap-2.5 hidden mb-16 md:mb-24 w-fit"
            >
              <span className="text-[16px] font-semibold border-b-[1.5px] border-[#141414] group-hover:border-[#6c2bd9] group-hover:text-[#6c2bd9] pb-[2px] transition-colors">
                Explore now
              </span>
              <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 group-hover:text-[#6c2bd9] transition-all" />
            </Link>

            {/* Desktop Google Rating */}
            <div className="hidden lg:flex flex-col gap-1 mt-auto">
              <div className="flex items-center gap-1 text-[#fbbc04]">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="flex items-center mt-1">
                <span className="text-[24px] font-semibold tracking-[-0.5px]">
                  <span className="text-[#4285f4]">G</span>
                  <span className="text-[#ea4335]">o</span>
                  <span className="text-[#fbbc04]">o</span>
                  <span className="text-[#4285f4]">g</span>
                  <span className="text-[#34a853]">l</span>
                  <span className="text-[#ea4335]">e</span>
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[14px] text-gray-500 font-medium">
                <Star className="w-[14px] h-[14px] text-[#fbbc04] fill-current" />
                Customer Reviews
              </div>
            </div>
          </div>

          {/* Right Content - Photo Collage Grid */}
          <div className="w-full lg:flex-1 flex-shrink-0 relative flex justify-center lg:justify-end mt-0">
            
            {/* --- DESKTOP PHOTO COLLAGE --- */}
            <div className="hidden lg:flex items-start relative max-w-full">
              {/* Left Column */}
              <div className="flex flex-col items-end">
                {/* Image 1 */}
                <div className="w-[260px] md:w-[320px] 2xl:w-[365px] h-[280px] md:h-[350px] 2xl:h-[400px] mb-6 2xl:mb-7 mr-6 2xl:mr-7 rounded-[4px] overflow-hidden bg-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
                  <img src="/images/hero-collage-1.png" alt="Office Meeting" className="w-full h-full object-cover" />
                </div>
                {/* Image 2 */}
                <div className="w-[320px] md:w-[380px] 2xl:w-[443px] h-[200px] md:h-[250px] 2xl:h-[285px] mr-6 2xl:mr-7 rounded-[4px] overflow-hidden bg-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
                  <img src="/images/hero-collage-2.png" alt="Team Collaboration" className="w-full h-full object-cover" />
                </div>
              </div>
              {/* Right Column */}
              <div className="pt-[40px] md:pt-[60px] 2xl:pt-[85px]">
                {/* Image 3 */}
                <div className="w-[200px] md:w-[261px] 2xl:w-[315px] h-[280px] md:h-[360px] 2xl:h-[428px] rounded-[4px] overflow-hidden bg-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
                  <img src="/images/hero-collage-3.png" alt="IT Professional" className="w-full h-full object-cover" />
                </div>
              </div>
              {/* Desktop Circular Badge */}
              <CircularBadge />
            </div>

            {/* --- MOBILE PHOTO COLLAGE --- */}
            <div className="flex lg:hidden flex-col relative w-full mt-5">
              
              {/* Top Row */}
              <div className="flex justify-between items-start w-full">
                {/* Image 1 */}
                <div className="w-[154px] h-[169px] flex-shrink-0 rounded-[4px] overflow-hidden bg-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                  <Image src="/images/hero-collage-1.png" width={154} height={169} alt="Office Meeting" className="w-full h-full object-cover" />
                </div>
                {/* Image 2 */}
                <div className="w-[134px] h-[146px] flex-shrink-0 rounded-[4px] overflow-hidden bg-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                  <Image src="/images/hero-collage-3.png" width={134} height={146} alt="IT Professional" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Bottom Row */}
              <div className="flex justify-between items-center w-full mt-11">
                {/* Image 3 */}
                <div className="w-[201px] h-[129px] flex-shrink-0 ml-[18px] rounded-[4px] overflow-hidden bg-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                  <Image src="/images/hero-collage-2.png" width={201} height={129} alt="Team Collaboration" className="w-full h-full object-cover" />
                </div>
                
                {/* Circular Badge */}
                <div className="w-[70px] h-[70px] mr-2 relative flex items-center justify-center flex-shrink-0">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path
                        id="textPathMobile"
                        d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                        fill="transparent"
                      />
                      <text fontSize="12" fontWeight="600" fill="#141414">
                        <textPath href="#textPathMobile" startOffset="0" textLength="205" lengthAdjust="spacing">
                          VIXORA LABS LLP • VIXORA LABS LLP • 
                        </textPath>
                      </text>
                    </svg>
                  </motion.div>
                  <div className="w-[28px] h-[28px] rounded-full border-[2px] border-[#141414] flex items-center justify-center font-bold text-[12px] text-[#141414] bg-white z-10 shadow-sm">
                    V
                  </div>
                </div>
              </div>

            </div>

          </div>

            {/* --- MOBILE GOOGLE RATINGS --- */}
            <div className="flex lg:hidden flex-col items-start justify-between mt-6 w-[140px] h-[70px]">
              <div className="flex items-center gap-[2px]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-[14px] h-[14px] text-[#FABB05] fill-[#FABB05]" />
                ))}
              </div>
              <div className="text-[26px] font-bold tracking-[-1px] leading-none">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-[12px] h-[12px] text-[#FABB05] fill-[#FABB05]" />
                <span className="text-[#505050] text-[12px] font-medium leading-none">Customer Reviews</span>
              </div>
            </div>

        </div>
      </div>
    </section>
  );
}
