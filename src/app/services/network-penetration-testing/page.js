import NetworkHero from "@/components/NetworkHero";
import NetworkOverview from "@/components/NetworkOverview";
import KeyBenefits from "@/components/KeyBenefits";

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
    canonical: "https://www.noasec.com/services/network-penetration-testing", // ✅ update if needed
  },

  openGraph: {
    title: "Network Penetration Testing Services | NoaSec",
    description:
      "Simulate real-world attacks to identify vulnerabilities in your network infrastructure and strengthen defenses.",
    url: "https://www.noasec.com/services/network-penetration-testing",
    siteName: "NoaSec",
    images: [
      {
        url: "https://www.noasec.com/og-network-pentest.jpg", // replace with actual image
        width: 1200,
        height: 630,
        alt: "Network Penetration Testing NoaSec",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Network Penetration Testing Services | NoaSec",
    description:
      "Identify and fix network vulnerabilities with NoaSec’s expert penetration testing.",
    images: ["https://www.noasec.com/og-network-pentest.jpg"],
  },
};

export default function NetworkPenetrationTestingPage() {
  return (
    <div>
      <NetworkHero />
      <NetworkOverview />
      <KeyBenefits />
    </div>
  );
}