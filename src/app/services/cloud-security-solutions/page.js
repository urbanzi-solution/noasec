import CloudHero from "@/components/CloudHero";
import CloudComplexity from "@/components/CloudComplexity";
import CloudWhatWeDeliver from "@/components/CloudWhatWeDeliver";
import StrategicBenefits from "@/components/StrategicBenefits";
import Script from "next/script";

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
    canonical:
      "https://www.noasec.com/services/cloud-security-solutions",
  },

  openGraph: {
    title:
      "Cloud Security Solutions | AWS, Azure & GCP Security | NoaSec",
    description:
      "Secure your AWS, Azure, and GCP environments with NoaSec’s advanced cloud security solutions.",
    url:
      "https://www.noasec.com/services/cloud-security-solutions",
    siteName: "NoaSec",
    type: "website",
  },
};

export default function CloudPage() {
  return (
    <>
      {/* ✅ Service Schema */}
      <Script
        id="cloud-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Cloud Security Solutions",
            description:
              "Comprehensive cloud security services including AWS, Azure, and Google Cloud security assessments, IAM reviews, configuration audits, data protection, and cloud penetration testing.",
            provider: {
              "@type": "Organization",
              name: "NoaSec",
              url: "https://www.noasec.com",
            },
            areaServed: "IN",
            serviceType: "Cloud Security",
          }),
        }}
      />

      <CloudHero />
      <CloudComplexity />
      <CloudWhatWeDeliver />
      <StrategicBenefits />
    </>
  );
}