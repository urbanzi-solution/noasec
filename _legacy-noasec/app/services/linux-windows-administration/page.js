import LinuxHero from "@/components/LinuxHero";
import LinuxOverview from "@/components/Linuxoverview";
import EngineeredSection from "@/components/EngineeredSection";
import Script from "next/script";

/* ✅ SEO METADATA */
export const metadata = {
  title: "Linux & Windows Administration Services | NoaSec",
  description:
    "NoaSec provides secure Linux and Windows system administration — server setup, configuration management, user access control, and ongoing maintenance with a security-first approach.",

  keywords: [
    "Linux administration service",
    "Windows server administration",
    "secure system administration",
    "IT administration services India",
  ],

  alternates: {
    canonical:
      "https://www.noasec.com/services/linux-windows-administration",
  },

  openGraph: {
    title: "Linux & Windows Administration Services | NoaSec",
    description:
      "Secure system administration for Linux and Windows environments.",
    url:
      "https://www.noasec.com/services/linux-windows-administration",
    siteName: "NoaSec",
    type: "website",
  },
};

export default function LinuxWindowsAdministrationPage() {
  return (
    <>
      {/* ✅ Service Schema */}
      <Script
        id="linux-windows-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Linux & Windows Administration Services",
            description:
              "Secure system administration services including Linux and Windows server setup, configuration management, user access control, monitoring, and ongoing maintenance with a security-first approach.",
            provider: {
              "@type": "Organization",
              name: "NoaSec",
              url: "https://www.noasec.com",
            },
            areaServed: "IN",
            serviceType: "System Administration",
          }),
        }}
      />

      <LinuxHero />
      <LinuxOverview />
      <EngineeredSection />
    </>
  );
}