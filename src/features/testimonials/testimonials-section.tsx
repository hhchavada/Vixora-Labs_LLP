"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: "If you need a company to create your next IT product, I would like to tell you about Codewinglet Private Limited. They excel in both quantity and quality. Their process and documentation are very professional. The support I got from them was so good that I can not imagine moving forward without Team Codewinglet.",
    author: "Zuhayr Rashid",
    location: "UAE",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
  },
  {
    quote: "A great company with teams that could handle all the locations to bring my project to life. Working with them was an awesome experience, and because of them, my projects became a reality. They were dependable, grasped the business well, and had good organization.",
    author: "Ross Gates",
    location: "USA",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
  },
  {
    quote: "Exceptional experience working with this development company. They delivered our product on time and their technical expertise is highly efficient.",
    author: "Craig Nelson",
    location: "UK",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = React.useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const current = testimonials[currentIndex];

  return (
    <section className="w-full bg-black xl:py-[100px] lg:py-[80px] md:py-[60px] py-[50px] overflow-hidden">
      <Container className="w-full max-w-[1410px] mx-auto lg:px-[15px] sm:px-[30px] px-5">
        
        {/* Header */}
        <div className="flex flex-col mb-10 md:mb-[50px]">
          <h2 className="text-white text-[28px] sm:text-[32px] md:text-[40px] font-semibold leading-tight">Client Success Stories</h2>
          <p className="text-white text-[16px] md:text-[20px] font-normal mt-[6px] leading-relaxed">
            See how we've helped businesses transform ideas into successful digital products and long-term growth.
          </p>
        </div>

          {/* Carousel Area */}
          <div className="relative w-full h-auto md:h-[462px] mt-8 overflow-hidden pb-12 md:pb-0">
            
            {/* Background Quotes */}
            <div className="absolute left-[-20px] md:left-[-120px] top-[100px] md:top-[180px] text-[#111111] text-[150px] md:text-[250px] leading-none font-serif select-none pointer-events-none z-0">
              “
            </div>
            <div className="absolute md:left-[750px] top-[400px] md:top-[350px] text-[#111111] text-[150px] md:text-[250px] leading-none font-serif select-none pointer-events-none z-0">
              ”
            </div>

            {/* Slider Track */}
            <div 
              className="w-full md:h-full flex transition-transform duration-700 ease-in-out z-10 relative"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((item, idx) => (
                <div key={idx} className="w-full flex-shrink-0 relative flex flex-col md:block">
                  
                  {/* Image */}
                  <div 
                    className="w-full md:absolute right-0 top-0 md:w-[65%] lg:w-[60%] h-[250px] sm:h-[300px] md:h-[100%] bg-gray-800"
                    style={{ 
                      clipPath: "polygon(60px 0, 100% 0, 100% 100%, 0 100%, 0 60px)",
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  />

                  {/* Text Box */}
                  <div className="w-full md:absolute left-0 md:top-[170px] lg:w-[754px] md:w-[600px] lg:h-[292px] bg-[#141414] lg:p-10 p-[25px] flex flex-col z-20 flex-1">
                    <p className="text-white lg:text-[20px] md:text-[17px] text-[14px] sm:text-[15px] leading-[1.6] sm:leading-[1.8] font-light min-h-6 flex-1">
                      {item.quote}
                    </p>
                    
                    <div className="mt-[35px] flex justify-between items-center mb-6 md:mb-0">
                      <h4 className="text-white font-semibold text-[15px] sm:text-[16px]">{item.author}</h4>
                      <span className="text-white font-semibold text-[14px]">{item.location}</span>
                    </div>

                    {/* Arrows (Mobile & Desktop) */}
                    <div className="flex items-center justify-center md:justify-end gap-8 md:absolute md:bottom-10 md:right-10 pt-2 md:pt-0">
                      <button onClick={handlePrev} className="text-[#a3a3a3] hover:text-white transition-colors">
                        <ArrowLeft size={24} strokeWidth={1.5} />
                      </button>
                      <button onClick={handleNext} className="text-[#a3a3a3] hover:text-white transition-colors">
                        <ArrowRight size={24} strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>
            
          </div>

        </Container>
      </section>
  );
}
