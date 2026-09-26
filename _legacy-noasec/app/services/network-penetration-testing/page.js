import NetworkHero from "@/components/NetworkHero";
import NetworkOverview from "@/components/NetworkOverview";
import KeyBenefits from "@/components/KeyBenefits";
import Script from "next/script";

/* ✅ SEO METADATA */
export const metadata = {
  title: "Network Penetration Testing Services | NoaSec",
  description:
    "NoaSec's network penetration testing simulates real attacker techniques to expose weaknesses in your internal and external network infrastructure — firewalls, routers, switches, and services.",

  keywords: [
    "network penetration testing",
    "internal network pentest",
    "external network security testing",
    "infrastructure security testing India",
  ],

  alternates: {
    canonical:
      "https://www.noasec.com/services/network-penetration-testing",
  },

  openGraph: {
    title: "Network Penetration Testing Services | NoaSec",
    description:
      "Simulate real-world attacks to identify vulnerabilities in your network infrastructure and strengthen defenses.",
    url:
      "https://www.noasec.com/services/network-penetration-testing",
    siteName: "NoaSec",
    type: "website",
  },
};

export default function NetworkPenetrationTestingPage() {
  return (
    <>
      {/* ✅ Service Schema */}
      <Script
        id="network-penetration-testing-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Network Penetration Testing",
            description:
              "Comprehensive internal and external network penetration testing to identify vulnerabilities in firewalls, routers, switches, servers, and network services.",
            provider: {
              "@type": "Organization",
              name: "NoaSec",
              url: "https://www.noasec.com",
            },
            areaServed: "IN",
            serviceType: "Cybersecurity Testing",
          }),
        }}
      />

      <NetworkHero />
      <NetworkOverview />
      <KeyBenefits />
    </>
  );
}