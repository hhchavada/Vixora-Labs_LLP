import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnnouncementBar } from "@/components/layout/announcement-bar";

export const metadata: Metadata = {
  title: "Privacy Policy | Vixora Labs",
  description: "Privacy Policy for Vixora Labs.",
};

const privacyData = [
  {
    id: "introduction",
    sidebarTitle: "Introduction",
    title: "Introduction :",
    content: (
      <div className="space-y-6 pt-5">
        <p className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8]">
          Welcome to Vixora Labs LLP. At Vixora Labs LLP, we value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, disclose, and safeguard your information when you visit our website or use our services.
        </p>
        <p className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8]">
          By accessing or using <strong className="text-black font-semibold">https://vixoralabs.in</strong>, you acknowledge that you have read and agreed to this Privacy Policy. If you do not agree with the terms outlined below, please refrain from using our website or services.
        </p>
      </div>
    ),
  },
  {
    id: "types-of-data",
    sidebarTitle: "Types of data collected",
    title: "Types of data collected :",
    content: (
      <div className="space-y-6">
        <div>
          <p className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8] pt-5 mb-4">
            We may collect the following information when you interact with our website or contact us (this includes Personal Data which identifies you, and Usage Data collected automatically):
          </p>
          <ul className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8] space-y-4 ml-4">
            <li>• Full Name and Email Address</li>
            <li>• Phone Number and Company Name</li>
            <li>• Business Information and Location Information</li>
            <li>• Communication Records</li>
            <li>• Usage Data (IP address, browser type, session duration)</li>
            <li>• Cookies and Tracking Information</li>
          </ul>
        </div>
        <div>
          <p className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8] mb-4 pt-4">
            We collect this information through:
          </p>
          <ul className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8] space-y-4 ml-4">
            <li>• Contact forms and Quote request forms</li>
            <li>• Email communications and Phone calls</li>
            <li>• Live chat (if available)</li>
            <li>• Newsletter subscriptions and Website analytics tools</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "use-of-cookies",
    sidebarTitle: "Use of cookies",
    title: "Use of cookies :",
    content: (
      <div className="space-y-6">
        <div>
          <p className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8] pt-5 mb-4">
            Our website uses cookies (small text files stored on your device) and similar technologies to:
          </p>
          <ul className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8] space-y-4 ml-4">
            <li>• Improve website performance and remember your preferences</li>
            <li>• Analyze visitor behavior and maintain website security</li>
            <li>• Enhance user experience</li>
          </ul>
        </div>
        <div>
          <p className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8] mb-4 pt-4">
            You can disable cookies through your browser settings, although certain features of our website may not function properly. Examples include:
          </p>
          <ul className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8] space-y-4 ml-4">
            <li>• Session Cookies</li>
            <li>• Preference Cookies</li>
            <li>• Security Cookies</li>
            <li>• Analytics Cookies</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "uses-collected-data",
    sidebarTitle: "Uses the collected data",
    title: "Uses the collected data :",
    content: (
      <div className="pt-5">
        <p className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8] mb-4">
          We use your information to:
        </p>
        <ul className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8] space-y-4 ml-4">
          <li>• Provide our software development and consulting services</li>
          <li>• Respond to inquiries and support requests</li>
          <li>• Prepare quotations and project proposals</li>
          <li>• Deliver purchased services</li>
          <li>• Improve our website and services</li>
          <li>• Analyze website performance</li>
          <li>• Maintain security and prevent fraud</li>
          <li>• Communicate service updates</li>
          <li>• Send invoices and project-related communication</li>
          <li>• Send newsletters or marketing communications (only with your consent)</li>
          <li>• Comply with legal obligations</li>
        </ul>
      </div>
    ),
  },
  {
    id: "storage-security",
    sidebarTitle: "Personal info storage & security",
    title: "Personal info storage & security :",
    content: (
      <div className="space-y-6 pt-5">
        <p className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8]">
          We implement commercially reasonable technical and organizational measures to protect your personal information against unauthorized access, misuse, alteration, or disclosure. While we strive to use industry-standard security practices, no internet transmission or electronic storage system can be guaranteed to be 100% secure.
        </p>
        <div>
          <h3 className="text-black font-semibold text-[18px] mb-2 flex items-center gap-2 pt-2">
            <span className="w-1 h-1 bg-black rounded-full block"></span>
            Payment Information
          </h3>
          <p className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8]">
            For any services purchased through Vixora Labs LLP, we do not store your credit card details, debit card information, banking credentials, or payment passwords. Payments are securely processed through trusted third-party payment providers.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "transfer-of-data",
    sidebarTitle: "Transfer of data",
    title: "Transfer of data :",
    content: (
      <p className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8] pt-5">
        Your information may be processed or stored on servers located outside your country of residence. Whenever such transfers occur, we take reasonable steps to ensure your information receives an appropriate level of protection.
      </p>
    ),
  },
  {
    id: "disclosure-of-data",
    sidebarTitle: "Disclosure Of data",
    title: "Disclosure Of data :",
    content: (
      <div className="space-y-6 pt-5">
        <p className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8]">
          We do not sell, rent, or trade your personal information. We may share your information only with trusted service providers, payment processors, hosting providers, cloud infrastructure providers, and legal authorities when required by law. All third parties are required to maintain the confidentiality and security of your information.
        </p>
        <div>
          <h3 className="text-black font-semibold text-[18px] mb-2 flex items-center gap-2 pt-2">
            <span className="w-1 h-1 bg-black rounded-full block"></span>
            Legal Disclosure
          </h3>
          <p className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8]">
            We may disclose your information when required to comply with applicable laws or legal processes, protect the rights of Vixora Labs LLP, prevent fraud or illegal activities, protect users or public safety, or enforce our agreements and policies.
          </p>
        </div>
        <div>
          <h3 className="text-black font-semibold text-[18px] mb-2 flex items-center gap-2 pt-2">
            <span className="w-1 h-1 bg-black rounded-full block"></span>
            Third-Party Services & Links
          </h3>
          <p className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8]">
            Our website may use trusted third-party services (Analytics, Cloud hosting, Email, Payment gateways, CRM). These providers only access information necessary to perform services on our behalf. Our website may also contain links to external websites; we are not responsible for their privacy practices.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "amendments",
    sidebarTitle: "Amendments to this policy",
    title: "Amendments to this policy :",
    content: (
      <p className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8] pt-5">
        We reserve the right to modify this Privacy Policy at any time. Changes become effective immediately upon posting on this page. Continued use of our website constitutes acceptance of the revised policy.
      </p>
    ),
  },
  {
    id: "acceptance",
    sidebarTitle: "Your acceptance of this policy",
    title: "Your acceptance of this policy :",
    content: (
      <div className="space-y-6 pt-5">
        <p className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8]">
          By using <strong className="text-black font-semibold">https://vixoralabs.in</strong>, you acknowledge that you have read, understood, and agreed to this Privacy Policy.
        </p>
        <div className="pt-4">
          <p className="min-h-6 text-[18px] font-semibold text-[#141414] mb-2">
            Your Rights & Contact
          </p>
          <p className="min-h-6 text-[18px] font-light text-[#606060] leading-[1.8] mb-6">
            Depending on your jurisdiction, you may have the right to access, correct, or request deletion of your data. To exercise these rights or if you have any questions, please contact us:
          </p>
          
          <div className="pt-2">
            <p className="text-[18px] font-semibold text-[#141414] mb-3">Vixora Labs LLP</p>
            <div className="space-y-3">
              <p className="text-[18px] font-light text-[#606060] flex items-center gap-2">
                <span className="font-medium text-[#141414] w-[80px]">Website:</span> 
                <a href="https://vixoralabs.in" className="text-black font-semibold hover:underline transition-all">https://vixoralabs.in</a>
              </p>
              <p className="text-[18px] font-light text-[#606060] flex items-center gap-2">
                <span className="font-medium text-[#141414] w-[80px]">Email:</span> 
                <a href="mailto:info@vixoralabs.in" className="text-black font-semibold hover:underline transition-all">info@vixoralabs.in</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function PrivacyPage() {
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
            {privacyData.map((section) => (
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
            <h1 className="text-xl md:text-2xl font-medium text-[#141414]">Privacy Policy</h1>
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
                  {privacyData.map((section) => (
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
                {privacyData.map((section) => (
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
