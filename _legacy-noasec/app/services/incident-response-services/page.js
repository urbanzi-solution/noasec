import IncidentHero from "@/components/IncidentHero";
import IncidentOverview from "@/components/IncidentOverview";
import OperationalAdvantages from "@/components/OperationalAdvantages";
import Script from "next/script";

/* ✅ SEO METADATA */
export const metadata = {
  title: "Incident Response Services | NoaSec Cybersecurity",
  description:
    "NoaSec's incident response team provides rapid containment, investigation, and recovery when a cyberattack or security breach occurs — minimizing damage and downtime.",

  keywords: [
    "incident response services",
    "cyber incident response",
    "data breach response",
    "ransomware recovery",
    "cybersecurity incident handling India",
  ],

  alternates: {
    canonical:
      "https://www.noasec.com/services/incident-response-services",
  },

  openGraph: {
    title: "Incident Response Services | NoaSec Cybersecurity",
    description:
      "Rapid cyber incident response, breach containment, and recovery services.",
    url:
      "https://www.noasec.com/services/incident-response-services",
    siteName: "NoaSec",
    type: "website",
  },
};

export default function IncidentResponsePage() {
  return (
    <>
      {/* ✅ Service Schema */}
      <Script
        id="incident-response-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Incident Response Services",
            description:
              "Rapid containment, investigation, and recovery services for cyberattacks, data breaches, and ransomware incidents to minimize damage and restore operations.",
            provider: {
              "@type": "Organization",
              name: "NoaSec",
              url: "https://www.noasec.com",
            },
            areaServed: "IN",
            serviceType: "Cybersecurity Incident Response",
          }),
        }}
      />

      <IncidentHero />
      <IncidentOverview />
      <OperationalAdvantages />
    </>
  );
}