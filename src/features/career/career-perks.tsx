import * as React from "react";
import { Clock, Wallet, TrendingUp, CalendarDays, HeartHandshake, Users } from "lucide-react";

export function CareerPerks() {
  const perks = [
    {
      title: "Flexible work hours",
      description: "Employees can adjust their work schedules to fit their personal lives, ensuring a better work-life balance.",
      icon: <Clock size={32} strokeWidth={1} className="text-gray-500" />,
    },
    {
      title: "Leave Encashment",
      description: "Employees can convert unused paid leave days into monetary compensation.",
      icon: <Wallet size={32} strokeWidth={1} className="text-gray-500" />,
    },
    {
      title: "Professional Development",
      description: "Access to online courses and certification programs allows employees to grow their skills.",
      icon: <TrendingUp size={32} strokeWidth={1} className="text-gray-500" />,
    },
    {
      title: "5 Day a week",
      description: "We believe in maintaining a healthy work-life balance, giving you the time to relax and refresh.",
      icon: <CalendarDays size={32} strokeWidth={1} className="text-gray-500" />,
    },
    {
      title: "Friendly and stress-free environment",
      description: "A supportive workplace where collaboration and well-being are prioritized, helping employees stay relaxed and productive.",
      icon: <HeartHandshake size={32} strokeWidth={1} className="text-gray-500" />,
    },
    {
      title: "Employee engagement activities",
      description: "Team-building events, workshops, and social gatherings to foster collaboration and enhance workplace culture.",
      icon: <Users size={32} strokeWidth={1} className="text-gray-500" />,
    },
  ];

  return (
    <section id="perks" className="w-full bg-white py-10 md:py-[60px] lg:py-20 scroll-mt-32">
      <div className="container w-full lg:px-[15px] sm:px-[30px] px-5 mx-auto 2xl:max-w-[1410px] xl:max-w-[1200px]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[70px]">
          
          {/* Left Content */}
          <div className="flex-1 lg:max-w-[615px]">
            <h2 className="text-[#141414] font-medium lg:text-[40px] md:text-[36px] text-[20px] mb-2 md:mb-[41px] tracking-tight">
              Perks & benefits
            </h2>
            <p className="text-[#141414] lg:text-[20px] text-[14px] md:text-[16px] leading-[1.6] mt-1.5 md:mt-0 mb-8 md:mb-12">
              At Vixora Labs, we believe that happy, healthy, and motivated employees are the foundation of our success. That's why we offer a comprehensive range of perks and benefits designed to support your personal and professional growth. From competitive salaries to work-life balance initiatives, we ensure you have everything you need to thrive.
            </p>
            
            {/* Google Reviews */}
            <div className="hidden md:flex flex-col gap-1">
              <div className="flex text-[#fbbc04]">
                {"★★★★★"}
              </div>
              <div className="flex items-center text-[22px] font-medium tracking-tight">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </div>
              <div className="flex items-center gap-1 text-[13px] text-gray-500 mt-1">
                <span className="text-[#fbbc04]">★</span> Customer Reviews
              </div>
            </div>
          </div>

          {/* Right Grid */}
          <div className="flex-1 lg:max-w-[694px]">
            <div className="grid grid-cols-2 md:gap-[30px] gap-[15px]">
              {perks.map((perk, index) => (
                <div key={index} className="flex flex-col items-start bg-[#F5F5F5] md:p-[30px] p-[13px] hover:shadow-sm transition-all">
                  <div>
                    {perk.icon}
                  </div>
                  <div>
                    <h3 className="text-black font-medium text-[14px] md:text-[18px] pt-4 pb-1.5 leading-tight md:leading-normal">{perk.title}</h3>
                    <p className="text-[#979797] text-[12px] md:text-[16px] leading-[1.4] md:leading-[1.6]">{perk.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
