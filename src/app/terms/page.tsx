import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnnouncementBar } from "@/components/layout/announcement-bar";

export const metadata: Metadata = {
  title: "Terms & Conditions | Vixora Labs",
  description: "Terms and conditions for using Vixora Labs services and website.",
};

const termsData = [
  {
    id: "acceptance",
    sidebarTitle: "Acceptance of terms",
    title: "Acceptance of terms :",
    content: (
      <p className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8] pt-5">
        You accept responsibility for adhering to and being governed by these Terms & Conditions by visiting and using our website, <strong className="text-black font-semibold">www.vixoralabs.in</strong>. Please do not use this website if you do not agree to these terms.
      </p>
    ),
  },
  {
    id: "use-website",
    sidebarTitle: "Use of the Website",
    title: "Use of the website :",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-black font-semibold text-[18px] mb-2 flex items-center gap-2 pt-5">
            <span className="w-1 h-1 bg-black rounded-full block"></span>
            License
          </h3>
          <p className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8]">
            You are given a limited, non-exclusive, and revocable license by Vixora Labs to access and use this website for non-commercial, informative purposes.
          </p>
        </div>
        <div>
          <h3 className="text-black font-semibold text-[18px] mb-2 flex items-center gap-2 pt-5">
            <span className="w-1 h-1 bg-black rounded-full block"></span>
            Restricted activities
          </h3>
          <p className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8] mb-2">You promise not to do any of the following</p>
          <ul className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8] space-y-4">
            <li>- Breaking any laws or rules that may be relevant.</li>
            <li>- Making an effort to access the website or its servers without authorization.</li>
            <li>- Use the website for any immoral or unlawful activities.</li>
            <li>- Sending malware or malicious code.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "ip",
    sidebarTitle: "Intellectual Property",
    title: "Intellectual Property :",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-black font-semibold text-[18px] mb-2 flex items-center gap-2 pt-5">
            <span className="w-1 h-1 bg-black rounded-full block"></span>
            Copyright
          </h3>
          <p className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8]">
            Copyright laws defend all content on the website, which includes text, graphics, logos, and software, as it belongs to Vixora Labs.
          </p>
        </div>
        <div>
          <h3 className="text-black font-semibold text-[18px] mb-2 flex items-center gap-2 pt-5">
            <span className="w-1 h-1 bg-black rounded-full block"></span>
            Trademarks
          </h3>
          <p className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8]">
            Any trademarks or logos that appear on this website belong to Vixora Labs or the relevant owners.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "privacy",
    sidebarTitle: "Privacy Policy",
    title: "Privacy policy :",
    content: (
      <p className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8] pt-5">
        Your use of the Website is also governed by our <a href="#" className="text-black font-medium underline">Privacy Policy</a>.
      </p>
    ),
  },
  {
    id: "links",
    sidebarTitle: "Links to Third-Party Websites",
    title: "Links to third-party websites :",
    content: (
      <p className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8] pt-5">
        Links to external websites may be found on the website. The information or policies on these websites are not within the control of Vixora Labs. It is at your own risk that you use them.
      </p>
    ),
  },
  {
    id: "disclaimer",
    sidebarTitle: "Disclaimer of Warranties",
    title: "Disclaimer of warranties :",
    content: (
      <div className="space-y-4 pt-5">
        <p className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8]">
          Without making any promises of any kind, including but not limited to the implied warranties of merchantability, suitability for a specific purpose, or non-infringement, the Website is given &quot;as is&quot; and &quot;as available&quot;.
        </p>
        <p className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8]">
          The correctness, comprehensiveness, or dependability of any information on the website is not guaranteed by Vixora Labs.
        </p>
      </div>
    ),
  },
  {
    id: "liability",
    sidebarTitle: "Limitation of Liability",
    title: "Limitation of liability :",
    content: (
      <p className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8] pt-5">
        Vixora Labs disclaims all liability for any damages, whether direct, indirect, special, incidental, or consequential, resulting from or related to your use of or inability to utilize the website.
      </p>
    ),
  },
  {
    id: "changes",
    sidebarTitle: "Changes to Terms and Conditions",
    title: "Changes to terms and conditions :",
    content: (
      <p className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8] pt-5">
        Vixora Labs maintains the right to change these guidelines at any moment. It is your duty to periodically check for updates.
      </p>
    ),
  },
  {
    id: "contact",
    sidebarTitle: "Contact Information",
    title: "Contact information :",
    content: (
      <p className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8] pt-5">
        Please email us at <strong className="text-black font-semibold">info@vixoralabs.in</strong> with any queries or worries you may have regarding these terms and conditions.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <AnnouncementBar>
        <span className="font-bold">🎉 We're Hiring! Join Our Team 🚀</span>
        <a href="#" className="text-[#6c2bd9] font-bold ml-2 hover:underline">Apply Here</a>
      </AnnouncementBar>
      <Navbar />

      <div className="min-h-screen bg-white pt-[78px] md:pt-[86px]">
        
        {/* Mobile Sidebar Navigation (Visible only on mobile/tablet) */}
        <div className="w-full bg-white border-b border-gray-100 block lg:hidden sticky top-[126px] md:top-[138px] z-40">
          <ul className="flex overflow-auto [-ms-overflow-style:none] [scrollbar-width:none] gap-[24px] whitespace-nowrap px-8 py-4">
            {termsData.map((section) => (
              <li key={section.id} className="inline-block">
                <a
                  href={`#${section.id}`}
                  className="text-[15px] font-medium text-[#7a7a7a] hover:text-[#333333] transition-colors"
                >
                  {section.sidebarTitle}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Top Title Section */}
        <div className="w-full bg-[#fcfcfc] h-[78px] md:h-[90px] lg:h-[86px] flex items-center border-b border-gray-200 lg:sticky lg:top-[134px] z-30">
          <Container className="max-w-[1410px]">
            <h1 className="text-xl md:text-2xl font-medium text-[#141414]">Terms & condition</h1>
          </Container>
        </div>

        {/* Middle Black Strip */}
        <div className="w-full bg-[#0a0a0a] h-[40px] md:h-[60px]"></div>

        {/* Main Content Area */}
        <div className="w-full bg-white lg:pt-[50px] md:pt-[30px] pt-[20px] pb-[50px]">
          <Container className="max-w-[1410px]">
            <div className="lg:flex block gap-[100px] items-start mb-10">
              
              {/* Sidebar Navigation (Desktop Only) */}
              <aside className="w-full lg:w-[336px] shrink-0 lg:sticky lg:top-[160px] hidden lg:block">
                <ul className="lg:grid flex overflow-auto [-ms-overflow-style:none] [scrollbar-width:none] gap-[18px]">
                  {termsData.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-[16px] font-light text-[#7a7a7a] hover:text-[#333333] transition-colors"
                      >
                        {section.sidebarTitle}
                      </a>
                    </li>
                  ))}
                </ul>
              </aside>

              {/* Main Content */}
              <div className="flex-1 w-full">
                {termsData.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-32 mb-10 last:mb-0">
                    <p className="min-h-6 text-[20px] font-medium text-black border-b border-gray-100 pb-[15px]">
                      {section.title}
                    </p>
                    <div className="w-full">
                      {section.content}
                    </div>
                  </section>
                ))}
              </div>

            </div>
          </Container>
        </div>
      </div>

      <Footer />
    </>
  );
}
