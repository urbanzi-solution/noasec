import ThreatHero from "@/components/ThreatHero";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import CyberSection from "@/components/CyberSection";
import RelatedServices from "@/components/RelatedServices";
import Script from "next/script";

/* ✅ SEO METADATA */
export const metadata = {
  title: "Threat Intelligence & Threat Hunting Services | NoaSec",
  description:
    "NoaSec's threat intelligence and proactive threat hunting service identifies hidden adversaries and emerging threats within your environment before they cause damage.",

  keywords: [
    "threat intelligence service",
    "threat hunting",
    "proactive threat detection",
    "cyber threat intelligence India",
    "advanced persistent threat detection",
  ],

  alternates: {
    canonical: "https://www.noasec.com/services/threat-intelligence",
  },

  openGraph: {
    title: "Threat Intelligence & Threat Hunting Services | NoaSec",
    description:
      "Identify hidden threats and adversaries with proactive threat intelligence and advanced threat hunting.",
    url: "https://www.noasec.com/services/threat-intelligence",
    siteName: "NoaSec",
    type: "website",
  },
};

export default function ThreatIntelligencePage() {
  return (
    <>
      {/* ✅ Service Schema */}
      <Script
        id="threat-intelligence-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Threat Intelligence & Threat Hunting Services",
            description:
              "Proactive threat intelligence and advanced threat hunting services designed to identify hidden adversaries, detect emerging threats, and mitigate advanced persistent threats before impact.",
            provider: {
              "@type": "Organization",
              name: "NoaSec",
              url: "https://www.noasec.com",
            },
            areaServed: "IN",
            serviceType: "Cyber Threat Detection",
          }),
        }}
      />

      <ThreatHero />
      <CapabilitiesSection />
      <CyberSection />
      <RelatedServices />
    </>
  );
}