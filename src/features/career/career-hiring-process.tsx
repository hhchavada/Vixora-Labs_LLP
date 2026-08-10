import * as React from "react";

export function CareerHiringProcess() {
  const steps = [
    {
      number: "01.",
      title: "Submit Your Application",
      description: "Share your resume and apply for your dream role in just a few clicks.",
    },
    {
      number: "02.",
      title: "Ace the Interview",
      description: "Showcase your skills and experience through our interview process.",
    },
    {
      number: "03.",
      title: "Discuss Your Offer",
      description: "Collaborate with us on the details of your offer to ensure the best fit.",
    },
    {
      number: "04.",
      title: "Join the Team",
      description: "Celebrate your success and become part of our innovative company.",
    },
  ];

  return (
    <section id="process" className="process w-full bg-[#141414] lg:py-[80px] md:py-[60px] py-10 scroll-mt-32">
      <div className="container w-full lg:px-[15px] sm:px-[30px] px-5 mx-auto 2xl:max-w-[1410px] xl:max-w-[1200px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h2 className="text-white font-medium lg:text-[40px] md:text-[36px] text-[20px] mb-2 md:mb-[15px] tracking-tight">
            Our Hiring Process
          </h2>
          <p className="text-[#606060] text-[14px] md:text-[16px] mt-1.5 md:mt-0 max-w-[600px] mb-[41px]">
            Step into Your Future with Confidence: A Simple, Transparent Hiring Journey.
          </p>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row xl:gap-[30px] lg:gap-4 md:gap-4 gap-0 md:pt-0">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 relative flex flex-col border-t border-[#2a2a2a]">
              {/* White line indicator over the border */}
              <div className="absolute top-[-1px] left-0 w-8 h-[2px] bg-white"></div>
              
              <p className="min-h-6 text-white font-medium text-[30px] md:text-[40px] pt-[30px] lg:pt-0">
                {step.number}
              </p>
              <p className="min-h-6 text-white font-medium text-[18px] md:text-[20px] pt-5 pb-4">
                {step.title}
              </p>
              <p className="min-h-6 text-[#606060] text-[16px] leading-[1.6] pb-10 lg:pb-0">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
