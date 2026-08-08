import * as React from "react";
import Image from "next/image";

export function AboutVisionMission() {
  return (
    <section className="bg-white w-full lg:py-20 md:py-[60px] py-10 relative overflow-hidden">
      <div className="container w-full lg:px-[15px] sm:px-10 px-5 mx-auto 2xl:max-w-[1516px] xl:max-w-[1200px] relative">
        
        {/* Header Section */}
        <div className="mb-16 lg:mb-[80px]">
          <h2 className="text-[#141414] font-semibold lg:text-[40px] md:text-[36px] text-[20px] leading-tight mb-2">
            Our vision & mission
          </h2>
          <p className="text-[#141414] md:text-[20px] text-[14px] leading-relaxed">
            We empower clients with reliable, high-quality tech solutions through innovation!
          </p>
        </div>

        {/* Content Wrapper with Center Timeline */}
        <div className="relative w-full">
          {/* Vertical Center Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#e5e7eb] -translate-x-1/2" />

          {/* Row 1: Vision */}
          <div className="flex flex-col lg:flex-row items-center lg:gap-[134px] gap-3 lg:my-[60px] my-8 relative">
            
            {/* Left Text */}
            <div className="flex-1 lg:text-right relative w-full lg:w-auto order-2 lg:order-1">
              {/* Timeline connector to center line */}
              <div className="hidden lg:flex items-center absolute right-[-67px] top-2 w-[67px]">
                <div className="w-full h-[1px] bg-[#d1d5db]" />
                <div className="w-[5px] h-[5px] rounded-full bg-[#9ca3af] -ml-[2px]" />
              </div>
              
              <h3 className="text-[#141414] font-bold text-[16px] uppercase tracking-wider mb-2">
                OUR VISION
              </h3>
              <p className="text-[#606060] lg:text-[20px] text-[14px] pt-[15px] leading-relaxed">
                Our vision is to pioneer innovative technological solutions that empower businesses and individuals to thrive in the digital era. We aspire to be a global leader in IT, driving positive change through cutting-edge advancements and unwavering commitment to excellence.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full order-1 lg:order-2">
              <div className="relative w-full h-[148px] lg:h-[302px] 2xl:max-w-[686px] xl:max-w-[568px] mx-auto lg:mx-0 bg-gray-100 rounded-sm overflow-hidden">
                {/* Note: Using placeholder image, user needs to upload the real one */}
                <Image 
                  src="/images/vision-target.png" 
                  alt="Our Vision" 
                  fill 
                  className="object-cover object-[center_35%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

          </div>

          {/* Row 2: Mission */}
          <div className="flex flex-col lg:flex-row items-center lg:gap-[134px] gap-3 lg:mb-[50px] mb-8 relative">
            
            {/* Left Image */}
            <div className="flex-1 w-full">
              <div className="relative w-full h-[148px] lg:h-[302px] 2xl:max-w-[686px] xl:max-w-[568px] mx-auto lg:ml-auto lg:mr-0 bg-gray-100 rounded-sm overflow-hidden">
                {/* Note: Using placeholder image, user needs to upload the real one */}
                <Image 
                  src="/images/mission-puzzle.png" 
                  alt="Our Mission" 
                  fill 
                  className="object-cover object-[center_60%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="flex-1 lg:text-left relative w-full lg:w-auto">
              {/* Timeline connector to center line */}
              <div className="hidden lg:flex items-center absolute left-[-67px] top-2 w-[67px] flex-row-reverse">
                <div className="w-full h-[1px] bg-[#d1d5db]" />
                <div className="w-[5px] h-[5px] rounded-full bg-[#9ca3af] -mr-[2px]" />
              </div>

              <h3 className="text-[#141414] font-bold text-[16px] uppercase tracking-wider mb-2">
                OUR MISSION
              </h3>
              <p className="text-[#606060] lg:text-[20px] text-[14px] pt-[15px] leading-relaxed">
                At Vixora Labs, we deliver tailored IT services and solutions, leveraging the latest technologies to meet our clients' unique needs. With a focus on innovation and collaboration, we consistently exceed expectations. Our integrity, expertise, and dedication make us the trusted partner for navigating the digital landscape and driving growth.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
