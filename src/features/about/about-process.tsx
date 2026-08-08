"use client";

import * as React from "react";
import { motion } from "framer-motion";

const processSteps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We understand your business goals, target audience, and project requirements to define the right strategy and ensure every decision aligns with your vision.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Our experts create a detailed project roadmap, select the ideal technology stack, and plan a scalable architecture for long-term success.",
  },
  {
    num: "03",
    title: "Design",
    desc: "We design intuitive user interfaces and seamless user experiences that reflect your brand while maximizing usability and engagement.",
  },
  {
    num: "04",
    title: "Development",
    desc: "Using modern technologies and best development practices, we build fast, secure, and scalable web, mobile, AI, and SaaS applications.",
  },
  {
    num: "05",
    title: "Launch",
    desc: "After comprehensive testing and final approval, we deploy your application to a secure production environment with a smooth and reliable launch.",
  },
  {
    num: "06",
    title: "Scale & Support",
    desc: "We provide continuous maintenance, performance optimization, feature enhancements, and technical support to help your business grow with confidence.",
  },
];

export function AboutProcess() {
  return (
    <section className="bg-[#f8f9fa] w-full lg:py-[100px] md:py-[80px] py-[60px]">
      <div className="container w-full lg:px-[15px] sm:px-10 px-5 mx-auto max-w-[1410px]">
        
        {/* Header Section */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-[#141414] font-bold mb-3 lg:text-[40px] md:text-[36px] text-[32px] leading-tight">
            Our Development Process
          </h2>
          <p className="min-h-6 text-[#505050] md:text-[18px] text-[16px] leading-relaxed max-w-3xl">
            From idea to launch, we follow a streamlined process to build secure, scalable, and high-quality digital solutions.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[30px]">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-8 lg:p-10 border border-[#eaeaea] hover:border-transparent transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] group flex flex-col"
            >
              {/* Outline Number & Line */}
              <div className="flex items-end mb-8">
                <span 
                  className="text-transparent font-bold text-[50px] leading-[0.8] tracking-widest transition-colors duration-300 group-hover:text-[#141414]"
                  style={{ WebkitTextStroke: '1.2px #141414' }}
                >
                  {step.num}
                </span>
                <div className="w-[35px] h-[1.5px] bg-[#141414] ml-2 mb-1.5 transition-all duration-300 group-hover:w-[50px]" />
              </div>

              {/* Title & Description */}
              <h3 className="text-[22px] font-bold text-[#141414] mb-3">
                {step.title}
              </h3>
              <p className="text-[15px] text-[#505050] leading-[1.7]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
