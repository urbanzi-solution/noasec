import NCCPHero from "@/components/NCCPHero";
import CurriculumRoadmap from "@/components/CurriculumRoadmap";
import ProgressionArchitecture from "@/components/ProgressionArchitecture";

/* ✅ SEO METADATA */
export const metadata = {
  title: "Certified Cybersecurity Professional (NCCP) | Advanced Course | NoaSec",
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
    canonical: "https://www.noasec.com/courses/certified-cybersecurity-professional", // 🔥 update if needed
  },

  openGraph: {
    title: "Certified Cybersecurity Professional (NCCP) | Advanced Course | NoaSec",
    description:
      "Master advanced cybersecurity with NoaSec’s NCCP program — covering pentesting, cloud security, SOC operations, forensics, and incident response.",
    url: "https://www.noasec.com/courses/certified-cybersecurity-professional",
    siteName: "NoaSec",
    images: [
      {
        url: "https://www.noasec.com/og-nccp.jpg", // replace with real image
        width: 1200,
        height: 630,
        alt: "NCCP Cybersecurity Course NoaSec",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Certified Cybersecurity Professional (NCCP) | Advanced Course | NoaSec",
    description:
      "Advanced 4-month cybersecurity training covering pentesting, cloud security, SOC, and forensics.",
    images: ["https://www.noasec.com/og-nccp.jpg"],
  },
};

/* ✅ PAGE COMPONENT */
export default function CertifiedCybersecurityProfessional() {
  return (
    <>
      <NCCPHero />
      <CurriculumRoadmap />
      <ProgressionArchitecture />
    </>
  );
}