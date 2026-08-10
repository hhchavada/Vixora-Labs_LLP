import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { CareerHero } from "@/features/career/career-hero";
import { CareerPerks } from "@/features/career/career-perks";
import { CareerJobOpenings } from "@/features/career/career-job-openings";
import { CareerHiringProcess } from "@/features/career/career-hiring-process";
import { CareerInsights } from "@/features/career/career-insights";

export default function CareerPage() {
  return (
    <div className="bg-white min-h-screen">
      <AnnouncementBar>
        <span className="font-bold">🎉 We're Hiring! Join Our Team 🚀</span>
        <a href="#jobs" className="text-[#6c2bd9] font-bold ml-2 hover:underline">Apply Here</a>
      </AnnouncementBar>
      <Navbar />
      <PageWrapper className="pt-[86px]">
        <CareerHero />
        <CareerJobOpenings />
        <CareerPerks />
        <CareerHiringProcess />
        <CareerInsights />
      </PageWrapper>
      <Footer />
    </div>
  );
}
