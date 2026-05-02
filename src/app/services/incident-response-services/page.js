import IncidentHero from "@/components/IncidentHero";
import IncidentOverview from "@/components/IncidentOverview";
import OperationalAdvantages from "@/components/OperationalAdvantages";

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
    canonical: "https://www.noasec.com/services/incident-response-services", // ✅ update if needed
  },

  openGraph: {
    title: "Incident Response Services | NoaSec Cybersecurity",
    description:
      "Rapid cyber incident response, breach containment, and recovery services to protect your business from ongoing threats.",
    url: "https://www.noasec.com/services/incident-response-services",
    siteName: "NoaSec",
    images: [
      {
        url: "https://www.noasec.com/og-incident-response.jpg", // replace with actual image
        width: 1200,
        height: 630,
        alt: "Incident Response Services NoaSec",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Incident Response Services | NoaSec Cybersecurity",
    description:
      "Fast, expert-led incident response to contain threats and restore operations.",
    images: ["https://www.noasec.com/og-incident-response.jpg"],
  },
};

export default function IncidentResponsePage() {
  return (
    <>
      <IncidentHero />
      <IncidentOverview />
      <OperationalAdvantages />
    </>
  );
}