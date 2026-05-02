import NCSOCHero from "@/components/NCSOCHero";
import ModuleRoadmap from "@/components/ModuleRoadmap";
import ProfessionalServices from "@/components/ProfessionalServices";

/* ✅ SEO METADATA */
export const metadata = {
  title: "Certified SOC Analyst Course (NCSA-SOC) | NoaSec",
  description:
    "Train for a Security Operations Center role with NoaSec's NCSA-SOC certification. Covers SIEM architecture, log analysis, threat hunting, and incident response using Wazuh, Splunk, and ELK Stack.",

  keywords: [
    "SOC analyst certification",
    "SIEM training",
    "security operations center course",
    "threat hunting training",
    "Splunk training",
    "cybersecurity monitoring course",
  ],

  alternates: {
    canonical: "https://www.noasec.com/courses/certified-soc-analyst", // 🔥 update if needed
  },

  openGraph: {
    title: "Certified SOC Analyst Course (NCSA-SOC) | NoaSec",
    description:
      "Become a SOC Analyst with hands-on SIEM, threat detection, and incident response training using real-world tools like Splunk, Wazuh, and ELK Stack.",
    url: "https://www.noasec.com/courses/certified-soc-analyst",
    siteName: "NoaSec",
    images: [
      {
        url: "https://www.noasec.com/og-ncsa-soc.jpg", // replace with actual image
        width: 1200,
        height: 630,
        alt: "Certified SOC Analyst Course NoaSec",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Certified SOC Analyst Course (NCSA-SOC) | NoaSec",
    description:
      "Hands-on SOC analyst training covering SIEM, threat hunting, and incident response.",
    images: ["https://www.noasec.com/og-ncsa-soc.jpg"],
  },
};

/* ✅ PAGE COMPONENT */
export default function CertifiedSOCAnalyst() {
  return (
    <>
      <NCSOCHero />
      <ModuleRoadmap />
      <ProfessionalServices />
    </>
  );
}