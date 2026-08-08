import * as React from "react";
import { Check, Coins, UserCheck, ClipboardCheck, Activity, ShieldCheck, Users, PiggyBank, Rocket, ShieldAlert } from "lucide-react";

const whyChooseData = [
  {
    icon: Coins,
    title: "Cost Efficiency",
    points: [
      {
        title: "Lower Labor Costs",
        desc: "Access top-tier talent at a fraction of the cost with offshore resources from India, offering significant savings over local hires."
      },
      {
        title: "Scalable Solutions",
        desc: "Easily scale your team up or down without the overhead costs of full-time employment."
      }
    ]
  },
  {
    icon: UserCheck,
    title: "Skilled Talent & 24/7 Output",
    points: [
      {
        title: "Diverse Skills & Time Zone Edge",
        desc: "Tap into specialized skills while benefiting from continuous progress, with work completed outside of your regular business hours."
      },
      {
        title: "Highly Qualified Professionals",
        desc: "Leverage India's vast pool of IT experts skilled in the latest technologies and methodologies."
      }
    ]
  },
  {
    icon: ClipboardCheck,
    title: "Project-Based Focus",
    points: [
      {
        title: "Clear Deliverables",
        desc: "Our contractors are goal-oriented, focusing on specific tasks or projects with defined outcomes."
      },
      {
        title: "No Long-Term Obligations",
        desc: "Once the project is done, there's no need for ongoing commitments, giving you flexibility."
      }
    ]
  },
  {
    icon: Activity,
    title: "Transparent Productivity Monitoring",
    points: [
      {
        title: "Screen Monitoring Tools",
        desc: "Gain real-time insights into resource activities, ensuring full transparency and accountability."
      },
      {
        title: "Performance Analytics",
        desc: "Access comprehensive reports on productivity, enabling data-driven optimizations."
      }
    ]
  },
  {
    icon: ShieldCheck,
    title: "Risk-Free Engagement",
    points: [
      {
        title: "2-Week Trial Period",
        desc: "Evaluate our team's capabilities with no long-term commitment, minimizing risk and ensuring a perfect fit."
      },
      {
        title: "Cost-Effective Evaluation",
        desc: "Assess the quality and productivity during the trial before making a larger investment."
      }
    ]
  },
  {
    icon: Users,
    title: "Flexible Workforce, No Full-Time Commitment",
    points: [
      {
        title: "No Full-Time Hiring Required",
        desc: "Avoid the costs & liabilities of full-time employment, including benefits, taxes, & long-term contracts."
      },
      {
        title: "On-Demand Expertise",
        desc: "Onboard experts swiftly, cutting recruitment time and reducing time-to-market."
      }
    ]
  }
];

export function AboutWhyChoose() {
  return (
    <section id="whyUs" className="bg-[#F5F5F5] w-full lg:py-20 md:py-[60px] py-10 scroll-mt-40">
      <div className="container w-full lg:px-[15px] sm:px-10 px-5 mx-auto max-w-[1410px]">
        
        {/* Header Section */}
        <div className="mb-10 lg:mb-12">
          <h1 className="text-[#141414] font-semibold mb-2 lg:text-[40px] md:text-[36px] text-[20px] leading-tight">
            Why Choose Vixora Labs' IT Services?
          </h1>
          <p className="min-h-6 text-[#141414] md:text-[20px] text-[14px] mt-1.5 leading-relaxed max-w-4xl">
            Optimized customized software solutions to empower your niche.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[50px] md:gap-10 gap-5 mt-[50px]">
          {whyChooseData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white p-5 shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100 rounded-sm">
                
                {/* Card Title & Icon */}
                <div className="bg-[#F5F5F5] flex gap-4 items-center lg:px-5 px-4 lg:py-[30px] py-5">
                  <Icon className="text-black" size={32} strokeWidth={1} />
                  <h3 className="lg:text-[18px] text-[14px] font-bold text-black">
                    {item.title}
                  </h3>
                </div>

                {/* Card Points */}
                <div className="pt-5 px-2.5 flex flex-col gap-5">
                  {item.points.map((point, idx) => (
                    <div key={idx} className="relative pl-6">
                      <Check className="text-[#141414] absolute left-0 top-1" size={14} strokeWidth={2.5} />
                      <p className="min-h-6 lg:text-[16px] text-[14px] font-bold text-[#141414] pb-2 leading-snug">
                        {point.title}
                      </p>
                      <p className="lg:text-[14px] text-[12px] text-[#606060] leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
