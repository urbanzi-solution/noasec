import ServiceHero from "@/components/ServiceHero";
import Services from "@/components/Services";
import ServiceSelector from "@/components/ServiceSelector";

/* ✅ SEO METADATA */
export const metadata = {
  title:
    "Cybersecurity Services | Penetration Testing, SOC & Forensics | NoaSec",
  description:
    "NoaSec provides professional cybersecurity services: vulnerability assessment, penetration testing, managed SOC, incident response, digital forensics, malware analysis, and cloud security.",

  keywords: [
    "cybersecurity services",
    "penetration testing company",
    "managed SOC services",
    "incident response",
    "digital forensics company",
    "cloud security services India",
  ],

  alternates: {
    canonical: "https://www.noasec.com/services", // ✅ update if needed
  },

  openGraph: {
    title:
      "Cybersecurity Services | Penetration Testing, SOC & Forensics | NoaSec",
    description:
      "Explore NoaSec's complete cybersecurity services including pentesting, SOC monitoring, forensics, and cloud security.",
    url: "https://www.noasec.com/services",
    siteName: "NoaSec",
    images: [
      {
        url: "https://www.noasec.com/og-services.jpg", // replace with actual image
        width: 1200,
        height: 630,
        alt: "NoaSec Cybersecurity Services",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Cybersecurity Services | Penetration Testing, SOC & Forensics | NoaSec",
    description:
      "Comprehensive cybersecurity services tailored to protect modern organizations.",
    images: ["https://www.noasec.com/og-services.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <ServiceHero />
      <Services />
      <ServiceSelector />
    </>
  );
}