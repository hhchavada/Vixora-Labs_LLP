import * as React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TechHero() {
  return (
    <section id="overview" className="bg-black xl:pt-[218px] lg:pt-60 md:pt-48 pt-[176px] pb-20 relative overflow-hidden">
      <div className="container w-full lg:px-[15px] sm:px-[30px] px-5 mx-auto 2xl:max-w-[1516px] xl:max-w-[1200px] lg:flex block gap-[50px]">
        
        {/* Left Content */}
        <div className="relative w-full lg:w-[680px] z-10">
          <h1 className="text-white text-[36px] lg:text-[56px] font-semibold leading-[1.15] mb-[41px] tracking-tight">
            Build the Future with <br className="hidden lg:block" /> Advanced AngularJS <br className="hidden lg:block" /> Development
          </h1>
          <p className="text-white text-[16px] lg:text-[18px] leading-[1.6] opacity-80 max-w-[680px] mt-[6px] pt-[24px]">
            We offer AngularJS development services across diverse industries, <br className="hidden lg:block" /> including eCommerce, healthcare, and education.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-[24px] mt-[60px] mb-16">
            <Button className="bg-white text-black hover:bg-gray-100 w-full sm:w-[298px] h-[52px] rounded-none text-[16px] font-medium">
              Hire Angular Development
            </Button>
            <Button variant="outline" className="text-white border-white bg-transparent hover:bg-white hover:text-black w-full sm:w-[298px] h-[52px] rounded-none text-[16px] font-medium flex items-center justify-center gap-2">
              Schedule Free Consultation <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="lg:mt-28 mt-5 flex md:gap-16 gap-12 md:pb-20 pb-10">
            <div>
              <div className="xl:text-[32px] md:text-[32px] text-[24px] text-white flex items-center font-bold mb-1">7+</div>
              <p className="min-h-6 text-white lg:text-[16px] text-[14px] opacity-70 font-light">Years experience</p>
            </div>
            <div>
              <div className="xl:text-[32px] md:text-[32px] text-[24px] text-white flex items-center font-bold mb-1">80+</div>
              <p className="min-h-6 text-white lg:text-[16px] text-[14px] opacity-70 font-light">Successful Projects</p>
            </div>
            <div>
              <div className="xl:text-[32px] md:text-[32px] text-[24px] text-white flex items-center font-bold mb-1">100%</div>
              <p className="min-h-6 text-white lg:text-[16px] text-[14px] opacity-70 font-light">Client satisfaction</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full lg:flex-1 mt-[60px] lg:mt-0 flex justify-center lg:justify-end items-end z-0">
          <div className="relative inline-block">
            {/* Main Hero Image */}
            <img 
              src="/images/angular-hero.png" 
              alt="AngularJS Developer" 
              className="m-auto md:w-[490px] w-[293px] h-auto"
            />
            
            {/* 150+ Happy Clients Badge */}
            <div className="bg-gray-50 border-[5px] border-[#313131] md:w-[226px] w-[117px] text-center absolute md:top-[300px] top-[150px] md:right-[-90px] right-[-10px] py-[16px] px-0 flex flex-col items-center justify-center shadow-lg">
              <span className="font-bold text-[#141414] text-[18px] md:text-[28px] leading-tight">150+</span>
              <span className="text-[#545454] text-[12px] md:text-[16px]">Happy Clients</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
