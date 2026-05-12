import ManagedHero from "@/components/ManagedHero";
import ManagedOverview from "@/components/ManagedOverview";
import ManagedSection from "@/components/ManagedSection";
import ManagedService from "@/components/ManagedService";
import Script from "next/script";

/* ✅ SEO METADATA */
export const metadata = {
  title: "Managed SOC Operations | 24/7 Security Monitoring | NoaSec",
  description:
    "NoaSec's Managed SOC Operations provides 24/7 security monitoring, threat detection, SIEM management, and alert triage — delivering enterprise-grade protection without the overhead of an in-house SOC.",

  keywords: [
    "managed SOC services",
    "24/7 security monitoring",
    "SIEM managed service",
    "threat detection service",
    "outsourced SOC India",
  ],

  alternates: {
    canonical: "https://www.noasec.com/services/managed-soc",
  },

  openGraph: {
    title: "Managed SOC Operations | 24/7 Security Monitoring | NoaSec",
    description:
      "Enterprise-grade 24/7 SOC monitoring, threat detection, and SIEM management by NoaSec experts.",
    url: "https://www.noasec.com/services/managed-soc",
    siteName: "NoaSec",
    type: "website",
  },
};

export default function ManagedSOCPage() {
  return (
    <>
      {/* ✅ Service Schema */}
      <Script
        id="managed-soc-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Managed SOC Operations",
            description:
              "24/7 security monitoring, SIEM management, threat detection, and alert triage services providing enterprise-grade cybersecurity protection.",
            provider: {
              "@type": "Organization",
              name: "NoaSec",
              url: "https://www.noasec.com",
            },
            areaServed: "IN",
            serviceType: "Security Operations Center (SOC)",
          }),
        }}
      />

      <ManagedHero />
      <ManagedOverview />
      <ManagedSection />
      <ManagedService />
    </>
  );
}