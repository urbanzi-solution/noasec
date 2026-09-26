import NCSOCHero from "@/components/NCSOCHero";
import ModuleRoadmap from "@/components/ModuleRoadmap";
import ProfessionalServices from "@/components/ProfessionalServices";
import Script from "next/script";

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
    canonical:
      "https://www.noasec.com/courses/certified-soc-analyst",
  },

  openGraph: {
    title: "Certified SOC Analyst Course (NCSA-SOC) | NoaSec",
    description:
      "Become a SOC Analyst with hands-on SIEM, threat detection, and incident response training.",
    url:
      "https://www.noasec.com/courses/certified-soc-analyst",
    siteName: "NoaSec",
    type: "website",
  },
};

export default function CertifiedSOCAnalyst() {
  return (
    <>
      {/* ✅ Course Schema */}
      <Script
        id="ncsa-soc-course-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Certified SOC Analyst (NCSA-SOC)",
            description:
              "Hands-on SOC analyst certification covering SIEM architecture, log analysis, threat hunting, and incident response using tools like Splunk, Wazuh, and ELK Stack.",
            provider: {
              "@type": "Organization",
              name: "NoaSec",
              url: "https://www.noasec.com",
            },
            educationalLevel: "Intermediate to Advanced",
            courseMode: "Online",
            inLanguage: "en",
          }),
        }}
      />

      <NCSOCHero />
      <ModuleRoadmap />
      <ProfessionalServices />
    </>
  );
}