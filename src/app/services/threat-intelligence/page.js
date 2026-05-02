import ThreatHero from "@/components/ThreatHero";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import CyberSection from "@/components/CyberSection";
import RelatedServices from "@/components/RelatedServices";

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
    canonical: "https://www.noasec.com/services/threat-intelligence", // ✅ update if needed
  },

  openGraph: {
    title: "Threat Intelligence & Threat Hunting Services | NoaSec",
    description:
      "Identify hidden threats and adversaries with proactive threat intelligence and advanced threat hunting.",
    url: "https://www.noasec.com/services/threat-intelligence",
    siteName: "NoaSec",
    images: [
      {
        url: "https://www.noasec.com/og-threat-intelligence.jpg", // replace with actual image
        width: 1200,
        height: 630,
        alt: "Threat Intelligence NoaSec",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Threat Intelligence & Threat Hunting Services | NoaSec",
    description:
      "Proactive threat detection and intelligence to uncover hidden cyber threats.",
    images: ["https://www.noasec.com/og-threat-intelligence.jpg"],
  },
};

export default function ThreatIntelligencePage() {
  return (
    <div>
      <ThreatHero />
      <CapabilitiesSection />
      <CyberSection />
      <RelatedServices />
    </div>
  );
}