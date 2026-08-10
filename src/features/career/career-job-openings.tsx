import * as React from "react";
import { Search, ChevronDown, Filter } from "lucide-react";

export function CareerJobOpenings() {
  return (
    <section id="jobs" className="w-full bg-[#141414] py-[50px] lg:py-[75px]">
      <div className="container w-full lg:px-[15px] sm:px-[30px] px-5 mx-auto 2xl:max-w-[1410px] xl:max-w-[1200px]">
        
        {/* Header Section */}
        {/* Header Section */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left mb-8 md:mb-12">
          <h2 className="text-white font-medium lg:text-[40px] md:text-[36px] text-[20px] mb-2 md:mb-6 tracking-tight">
            Current job openings
          </h2>
          <p className="text-gray-400 lg:text-[20px] md:text-[18px] text-[14px] mt-1.5 leading-[1.6]">
            Discover Your Next Career Opportunity: <br className="block md:hidden" /> Explore Our Latest Job Openings.
          </p>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-12 md:py-16 bg-[#141414] border border-[#2a2a2a] rounded-[8px] text-center px-6">
          <Search size={24} className="text-[#606060] mb-4" strokeWidth={1.5} />
          <h3 className="text-[18px] md:text-[20px] font-medium text-white mb-2 md:mb-3">No open positions right now</h3>
          <p className="text-[#8a8a8a] text-[14px] md:text-[16px] max-w-md mx-auto leading-[1.6]">
            We don't have any job openings at the moment, but we are always looking for talented people. 
            Please check back later or follow our social media for updates.
          </p>
        </div>
        
      </div>
    </section>
  );
}
