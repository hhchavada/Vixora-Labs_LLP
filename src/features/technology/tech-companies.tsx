import * as React from "react";

const companies = [
  { name: "Google", color: "text-[#4285F4]" },
  { name: "Forbes", color: "text-[#101820]" },
  { name: "PayPal", color: "text-[#00457C]" },
  { name: "Microsoft", color: "text-[#737373]" },
  { name: "IBM", color: "text-[#0530AD]" },
];

export function TechCompanies() {
  return (
    <section id="companies" className="bg-white py-[60px] md:py-[100px] w-full">
      <div className="container mx-auto px-5 sm:px-[30px] lg:px-[15px] 2xl:max-w-[1516px] xl:max-w-[1200px] text-center">
        <h2 className="text-[#141414] font-medium text-[24px] md:text-[32px] mb-2">
          Top Companies Using Angular
        </h2>
        <p className="text-[#5b664d] text-[14px] md:text-[16px] mb-[40px] md:mb-[60px]">
          Explore leading companies leveraging Angular for dynamic web applications
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 lg:gap-20">
          {companies.map((company) => (
            <div key={company.name} className={`flex items-center justify-center text-2xl md:text-3xl font-bold ${company.color}`}>
               {/* Replace with actual logo images when available */}
               {company.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
