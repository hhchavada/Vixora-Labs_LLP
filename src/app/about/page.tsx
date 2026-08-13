import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { AboutHero } from "@/features/about/about-hero";
import { AboutStats } from "@/features/about/about-stats";
import { AboutWhyChoose } from "@/features/about/about-why-choose";
import { AboutDirectors } from "@/features/about/about-directors";
import { AboutVisionMission } from "@/features/about/about-vision-mission";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <AnnouncementBar>
        <span className="font-bold">🎉 We're Hiring! Join Our Team 🚀</span>
        <a href="#" className="text-[#6c2bd9] font-bold ml-2 hover:underline">Apply Here</a>
      </AnnouncementBar>
      <Navbar />
      <PageWrapper className="pt-[86px]">
        <AboutHero />
        <AboutStats />
        <AboutWhyChoose />
        {/* <AboutDirectors /> */}
        <AboutVisionMission />
      </PageWrapper>
      <Footer />
    </div>
  );
}
