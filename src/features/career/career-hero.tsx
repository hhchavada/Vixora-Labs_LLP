import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CareerHero() {
  return (
    <section 
      className="relative w-full overflow-hidden bg-white"
      style={{
        backgroundImage: 'radial-gradient(#e5e7eb 1.5px, transparent 1.5px)',
        backgroundSize: '30px 30px',
      }}
    >
      <div className="container w-full lg:px-[15px] sm:px-[30px] px-5 mx-auto 2xl:max-w-[1516px] xl:max-w-[1200px] pt-12 lg:pt-20 pb-10 md:pb-12 lg:pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
          
          {/* Left Content */}
          <div className="w-full lg:flex-1 max-w-[650px] flex flex-col z-10 relative">
            <h1 className="text-[#141414] font-medium lg:text-[56px] md:text-[48px] text-[20px] leading-[1.15] mb-2 md:mb-6">
              Join the Vixora Labs Team
            </h1>
            
            <p className="text-[#141414] lg:text-[18px] md:text-[16px] text-[14px] leading-[1.6] mt-1.5 mb-6 md:mb-8 max-w-[580px]">
              At Vixora Labs, experience a vibrant work culture that encourages innovation and fosters personal growth while contributing to cutting-edge software development in a supportive and engaging environment.
            </p>
            
            <Link 
              href="#jobs" 
              className="flex group cursor-pointer text-[#141414] items-center gap-2 w-fit"
            >
              <span className="text-[14px] md:text-[16px] font-semibold border-b-[1.5px] border-[#141414] group-hover:border-[#6c2bd9] group-hover:text-[#6c2bd9] pb-[2px] transition-colors">
                Current Openings
              </span>
              <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 group-hover:text-[#6c2bd9] transition-all" />
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full lg:flex-1 relative flex justify-center lg:justify-end md:mt-0">
            <div className="relative w-[calc(100%+40px)] -mx-5 md:mx-0 md:w-full max-w-none md:max-w-[600px] lg:max-w-none aspect-square sm:aspect-[4/3] md:aspect-[4/3] lg:w-[650px] lg:h-[500px] rounded-none md:rounded-lg overflow-hidden md:shadow-2xl">
              <Image 
                src="/images/career-hero.png"
                alt="Vixora Labs Career"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
