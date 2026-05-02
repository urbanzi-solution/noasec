import CloudHero from "@/components/CloudHero";
import CloudComplexity from "@/components/CloudComplexity";
import CloudWhatWeDeliver from "@/components/CloudWhatWeDeliver";
import StrategicBenefits from "@/components/StrategicBenefits";

/* ✅ SEO METADATA */
export const metadata = {
  title: "Cloud Security Solutions | AWS, Azure & GCP Security | NoaSec",
  description:
    "NoaSec's cloud security solutions protect your cloud infrastructure across AWS, Azure, and Google Cloud — covering configuration audits, IAM reviews, data protection, and cloud penetration testing.",
  keywords: [
    "cloud security services",
    "AWS security",
    "Azure security",
    "GCP security",
    "cloud penetration testing",
    "cloud configuration audit India",
  ],

  alternates: {
    canonical: "https://www.noasec.com/services/cloud-security-solutions", // 🔥 update if needed
  },

  openGraph: {
    title: "Cloud Security Solutions | AWS, Azure & GCP Security | NoaSec",
    description:
      "Secure your AWS, Azure, and GCP environments with NoaSec’s advanced cloud security solutions.",
    url: "https://www.noasec.com/services/cloud-security-solutions",
    siteName: "NoaSec",
    images: [
      {
        url: "https://www.noasec.com/og-cloud.jpg", // replace with actual image
        width: 1200,
        height: 630,
        alt: "Cloud Security Solutions NoaSec",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cloud Security Solutions | AWS, Azure & GCP Security | NoaSec",
    description:
      "Protect your cloud infrastructure with NoaSec’s AWS, Azure, and GCP security services.",
    images: ["https://www.noasec.com/og-cloud.jpg"],
  },
};

export default function CloudPage() {
  return (
    <>
      <CloudHero />
      <CloudComplexity />
      <CloudWhatWeDeliver />
      <StrategicBenefits />
    </>
  );
}