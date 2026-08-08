"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Users, Folder, Medal, ThumbsUp } from "lucide-react";
import { useInView, animate } from "framer-motion";

function AnimatedNumber({ value }: { value: number }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  React.useEffect(() => {
    if (isInView) {
      animate(0, value, {
        duration: 2,
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = Math.floor(latest).toString();
          }
        },
      });
    }
  }, [isInView, value]);

  return (
    <>
      <span className="lg:hidden">{value}</span>
      <span ref={ref} className="hidden lg:inline">0</span>
    </>
  );
}

export function AboutStats() {
  return (
    <section id="exploreNow" className="bg-black w-full lg:py-20 md:py-[60px] py-10 scroll-mt-[142px]">
      <div className="container w-full lg:px-[15px] sm:px-10 px-5 mx-auto 2xl:max-w-[1516px] xl:max-w-[1200px]">
        
        {/* Header Section */}
        <div className="mb-12 lg:mb-16">
          <h1 className="text-white font-semibold mb-4 lg:text-[40px] md:text-[36px] text-[20px] leading-tight">
            Powerful data insights
          </h1>
          <p className="min-h-6 text-[#606060] md:text-[20px] text-[14px] mt-1.5 leading-relaxed max-w-4xl">
            Driving Transformation with Software Solutions that Enhance Agility, Scalability, and Growth
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:mt-[50px]">
          
          {/* Item 1 */}
          <div className="relative flex justify-between items-center lg:p-[50px] py-10 md:border-b md:border-r border-[#222] border-b">
            <div>
              <div className="lg:text-[42px] md:text-[32px] text-[24px] text-white flex items-center lg:mb-1.5 mb-1 font-medium leading-none">
                <AnimatedNumber value={10} />+
              </div>
              <p className="min-h-6 text-white lg:text-[20px] text-[14px]">
                Projects Delivered
              </p>
            </div>
            <div className="bg-[#191919] flex items-center justify-center lg:p-[27px] md:p-5 p-2.5 flex-shrink-0 rounded-md">
              <Folder className="lg:w-[46px] lg:h-[46px] md:w-10 md:h-10 w-[30px] h-[30px] text-[#8a8a8a]" strokeWidth={1} />
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative flex justify-between items-center lg:p-[50px] py-10 md:border-b border-[#222] border-b">
            <div>
              <div className="lg:text-[42px] md:text-[32px] text-[24px] text-white flex items-center lg:mb-1.5 mb-1 font-medium leading-none">
                <AnimatedNumber value={5} />+
              </div>
              <p className="min-h-6 text-white lg:text-[20px] text-[14px]">
                Happy Clients
              </p>
            </div>
            <div className="bg-[#191919] flex items-center justify-center lg:p-[27px] md:p-5 p-2.5 flex-shrink-0 rounded-md">
              <Users className="lg:w-[46px] lg:h-[46px] md:w-10 md:h-10 w-[30px] h-[30px] text-[#8a8a8a]" strokeWidth={1} />
            </div>
          </div>

          {/* Item 3 */}
          <div className="relative flex justify-between items-center lg:p-[50px] py-10 md:border-r border-[#222] border-b md:border-b-0">
            <div>
              <div className="lg:text-[42px] md:text-[32px] text-[24px] text-white flex items-center lg:mb-1.5 mb-1 font-medium leading-none">
                <AnimatedNumber value={15} />+
              </div>
              <p className="min-h-6 text-white lg:text-[20px] text-[14px]">
                Technology Expertise
              </p>
            </div>
            <div className="bg-[#191919] flex items-center justify-center lg:p-[27px] md:p-5 p-2.5 flex-shrink-0 rounded-md">
              <Medal className="lg:w-[46px] lg:h-[46px] md:w-10 md:h-10 w-[30px] h-[30px] text-[#8a8a8a]" strokeWidth={1} />
            </div>
          </div>

          {/* Item 4 */}
          <div className="relative flex justify-between items-center lg:p-[50px] py-10">
            <div>
              <div className="lg:text-[42px] md:text-[32px] text-[24px] text-white flex items-center lg:mb-1.5 mb-1 font-medium leading-none">
                <AnimatedNumber value={100} />%
              </div>
              <p className="min-h-6 text-white lg:text-[20px] text-[14px]">
                Quality Commitment
              </p>
            </div>
            <div className="bg-[#191919] flex items-center justify-center lg:p-[27px] md:p-5 p-2.5 flex-shrink-0 rounded-md">
              <ThumbsUp className="lg:w-[46px] lg:h-[46px] md:w-10 md:h-10 w-[30px] h-[30px] text-[#8a8a8a]" strokeWidth={1} />
            </div>
          </div>

        </div>

        {/* Action Button */}
        <div className="flex justify-center mt-0 lg:mt-[50px]">
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center whitespace-nowrap gap-3 border border-white text-white w-[203px] h-[48px] text-[16px] font-medium hover:bg-white hover:text-black transition-all duration-300"
          >
            Let's connect <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
