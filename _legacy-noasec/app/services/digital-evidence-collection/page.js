import DigitalHero from "@/components/DigitalHero";
import DigitalOverview from "@/components/DigitalOverview";
import DigitalBenifitSection from "@/components/DigitalBenifitSection";
import Script from "next/script";

/* ✅ SEO METADATA */
export const metadata = {
  title: "Digital Evidence Collection Services | NoaSec",
  description:
    "NoaSec's digital evidence collection service ensures legally sound acquisition and preservation of digital evidence — following chain of custody protocols for use in investigations and legal proceedings.",

  keywords: [
    "digital evidence collection",
    "forensic evidence acquisition",
    "chain of custody",
    "legal digital evidence",
    "cybercrime evidence India",
  ],

  alternates: {
    canonical:
      "https://www.noasec.com/services/digital-evidence-collection",
  },

  openGraph: {
    title: "Digital Evidence Collection Services | NoaSec",
    description:
      "Ensure legally compliant digital evidence collection with NoaSec’s forensic expertise.",
    url:
      "https://www.noasec.com/services/digital-evidence-collection",
    siteName: "NoaSec",
    type: "website",
  },
};

export default function DigitalEvidenceCollection() {
  return (
    <>
      {/* ✅ Service Schema */}
      <Script
        id="digital-evidence-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Digital Evidence Collection",
            description:
              "Legally compliant digital evidence acquisition and preservation service following strict chain of custody protocols for investigations and legal proceedings.",
            provider: {
              "@type": "Organization",
              name: "NoaSec",
              url: "https://www.noasec.com",
            },
            areaServed: "IN",
            serviceType: "Digital Forensics",
          }),
        }}
      />

      <DigitalHero />
      <DigitalOverview />
      <DigitalBenifitSection />
    </>
  );
}