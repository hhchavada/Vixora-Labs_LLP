import * as React from "react";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

export function CareerInsights() {
  return (
    <section id="employee" className="employee bg-[#F5F5F5] lg:py-[80px] md:py-[60px] py-10 scroll-mt-32 w-full">
      <div className="container w-full lg:px-[15px] sm:px-[30px] px-5 mx-auto flex lg:flex-row flex-col-reverse gap-[50px] xl:gap-[100px] items-center lg:items-center">
        
        {/* Left Side (Quotes Box) */}
        <div className="bg-white md:p-[60px] px-5 py-[30px] lg:mx-0 2xl:w-[624px] lg:w-[592px] w-auto 2xl:mr-28 lg:mr-10 flex flex-col">
          
          {/* Quote 1 */}
          <div className="flex flex-col">
            <p className="min-h-6 md:text-[16px] text-[14px] text-black font-serif leading-[1.8]">
              Vixora Labs offers great flexibility and respect for work-life balance, boosting my productivity and job satisfaction—an ideal place for a positive, balanced work environment.
            </p>
            <div className="flex flex-col pt-3 md:pt-4">
              <span className="font-semibold text-black text-[14px]">Milan R.</span>
              <span className="text-[#979797] text-[14px]">Sr. Product Designer</span>
            </div>
          </div>

          {/* Quote 2 (Bordered) */}
          <div className="w-full flex md:items-center justify-between bg-white border border-gray-100 md:p-10 p-5 relative shadow-sm 2xl:ml-28 lg:ml-10 my-[30px]">
            <div className="flex flex-col z-10 w-full">
              <p className="min-h-6 md:text-[16px] text-[14px] text-black font-serif leading-[1.8]">
                At Vixora Labs, I've gained valuable skills through regular training, mentorship, and a dynamic culture—ideal for career growth in tech.
              </p>
              <div className="flex flex-col pt-3 md:pt-4">
                <span className="font-semibold text-black text-[14px]">Ayushi R.</span>
                <span className="text-[#979797] text-[14px]">Software Developer</span>
              </div>
            </div>
          </div>

          {/* Quote 3 */}
          <div className="flex flex-col">
            <p className="min-h-6 md:text-[16px] text-[14px] text-black font-serif leading-[1.8]">
              At Vixora Labs, I work on cutting-edge projects with a supportive, collaborative team. It's a place where innovation thrives, and everyone is empowered to contribute.
            </p>
            <div className="flex flex-col pt-3 md:pt-4">
              <span className="font-semibold text-black text-[14px]">Dharmik B.</span>
              <span className="text-[#979797] text-[14px]">Web Designer</span>
            </div>
          </div>

        </div>

        {/* Right Side (Text & Button) */}
        <div className="flex flex-col flex-1 w-full max-w-[656px]">
          <h2 className="text-[#141414] font-medium lg:text-[40px] md:text-[36px] text-[20px] mb-[15px] md:mb-[20px] leading-[1.1]">
            Insights Straight from <br className="hidden lg:block" /> Our Team
          </h2>
          <p className="min-h-6 text-[#141414] lg:text-[20px] text-[14px] md:text-[16px] leading-[1.6] mt-1.5 md:mt-0">
            Gain Valuable Insights Directly from the Voices of Our Talented <br className="hidden lg:block" /> and Dedicated Members.
          </p>
          <Link 
            href="#jobs" 
            className="hidden md:flex bg-[#141414] hover:bg-black text-white w-fit px-[30px] h-[52px] items-center justify-center gap-3 transition-colors text-[16px] font-medium mt-[40px]"
          >
            See all opportunities
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
