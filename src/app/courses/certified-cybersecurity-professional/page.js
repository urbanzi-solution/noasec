import NCCPHero from "@/components/NCCPHero";
import CurriculumRoadmap from "@/components/CurriculumRoadmap";
import ProgressionArchitecture from "@/components/ProgressionArchitecture";
import Script from "next/script";

/* ✅ SEO METADATA */
export const metadata = {
  title:
    "Certified Cybersecurity Professional (NCCP) | Advanced Course | NoaSec",
  description:
    "NoaSec's flagship 4-month cybersecurity certification covering advanced penetration testing, mobile security, cloud security, SOC operations, digital forensics, and incident response.",

  keywords: [
    "certified cybersecurity professional",
    "advanced cybersecurity course",
    "penetration testing certification",
    "SOC training",
    "cloud security course India",
  ],

  alternates: {
    canonical:
      "https://www.noasec.com/courses/certified-cybersecurity-professional",
  },

  openGraph: {
    title:
      "Certified Cybersecurity Professional (NCCP) | Advanced Course | NoaSec",
    description:
      "Master advanced cybersecurity with NoaSec’s NCCP program.",
    url:
      "https://www.noasec.com/courses/certified-cybersecurity-professional",
    siteName: "NoaSec",
    type: "website",
  },
};

export default function CertifiedCybersecurityProfessional() {
  return (
    <>
      {/* ✅ Course Schema */}
      <Script
        id="nccp-course-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Certified Cybersecurity Professional (NCCP)",
            description:
              "Advanced 4-month cybersecurity certification covering penetration testing, cloud security, SOC operations, digital forensics, mobile security, and incident response.",
            provider: {
              "@type": "Organization",
              name: "NoaSec",
              url: "https://www.noasec.com",
            },
            educationalLevel: "Advanced",
            courseMode: "Online",
            inLanguage: "en",
          }),
        }}
      />

      <NCCPHero />
      <CurriculumRoadmap />
      <ProgressionArchitecture />
    </>
  );
}