import ServiceHero from "@/components/ServiceHero";
import Services from "@/components/Services";
import ServiceSelector from "@/components/ServiceSelector";
import Script from "next/script";

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
    canonical: "https://www.noasec.com/services",
  },

  openGraph: {
    title:
      "Cybersecurity Services | Penetration Testing, SOC & Forensics | NoaSec",
    description:
      "Explore NoaSec's complete cybersecurity services.",
    url: "https://www.noasec.com/services",
    siteName: "NoaSec",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* ✅ Services Schema */}
      <Script
        id="services-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "NoaSec Cybersecurity Services",
            itemListElement: [
              {
                "@type": "Service",
                position: 1,
                name: "Penetration Testing",
                provider: {
                  "@type": "Organization",
                  name: "NoaSec",
                  url: "https://www.noasec.com",
                },
              },
              {
                "@type": "Service",
                position: 2,
                name: "Managed SOC Services",
                provider: {
                  "@type": "Organization",
                  name: "NoaSec",
                  url: "https://www.noasec.com",
                },
              },
              {
                "@type": "Service",
                position: 3,
                name: "Digital Forensics",
                provider: {
                  "@type": "Organization",
                  name: "NoaSec",
                  url: "https://www.noasec.com",
                },
              },
              {
                "@type": "Service",
                position: 4,
                name: "Incident Response",
                provider: {
                  "@type": "Organization",
                  name: "NoaSec",
                  url: "https://www.noasec.com",
                },
              },
            ],
          }),
        }}
      />

      <ServiceHero />
      <Services />
      <ServiceSelector />
    </>
  );
}