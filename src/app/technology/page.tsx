import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { TechHero } from "@/features/technology/tech-hero";
import { TechCompanies } from "@/features/technology/tech-companies";

export const metadata = {
  title: "AngularJS Development | Vixora Labs",
  description: "Build the Future with Advanced AngularJS Development at Vixora Labs.",
};

export default function TechnologyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <AnnouncementBar>
        <span className="flex items-center justify-center gap-2 text-sm">
          <span>🎉 We're Hiring! Join Our Team 🚀</span>
          <a href="/career" className="text-primary font-bold hover:underline">
            Apply Here
          </a>
        </span>
      </AnnouncementBar>
      <Navbar />
      <div className="flex-1">
        <TechHero />
        <TechCompanies />
      </div>
      <Footer />
    </main>
  );
}
