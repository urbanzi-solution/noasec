import ManagedHero from "@/components/ManagedHero";
import ManagedOverview from "@/components/ManagedOverview"; 
import ManagedSection from "@/components/ManagedSection";   
import ManagedService from "@/components/ManagedService";

/* ✅ SEO METADATA */
export const metadata = {
  title: "Managed SOC Operations | 24/7 Security Monitoring | NoaSec",
  description:
    "NoaSec's Managed SOC Operations provides 24/7 security monitoring, threat detection, SIEM management, and alert triage — giving your organization enterprise-grade protection without the overhead of building an in-house SOC.",

  keywords: [
    "managed SOC services",
    "24/7 security monitoring",
    "SIEM managed service",
    "threat detection service",
    "outsourced SOC India",
  ],

  alternates: {
    canonical: "https://www.noasec.com/services/managed-soc", // ✅ update if needed
  },

  openGraph: {
    title: "Managed SOC Operations | 24/7 Security Monitoring | NoaSec",
    description:
      "Enterprise-grade 24/7 SOC monitoring, threat detection, and SIEM management by NoaSec experts.",
    url: "https://www.noasec.com/services/managed-soc",
    siteName: "NoaSec",
    images: [
      {
        url: "https://www.noasec.com/og-managed-soc.jpg", // replace with actual image
        width: 1200,
        height: 630,
        alt: "Managed SOC Operations NoaSec",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Managed SOC Operations | 24/7 Security Monitoring | NoaSec",
    description:
      "24/7 security monitoring and threat detection with NoaSec Managed SOC.",
    images: ["https://www.noasec.com/og-managed-soc.jpg"],
  },
};

export default function ManagedSOCPage() {
  return (
    <>
      <ManagedHero />
      <ManagedOverview />
      <ManagedSection />
      <ManagedService />
    </>
  );
}