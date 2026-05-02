import FirewallHero from "@/components/FirewallHero";
import FireOverview from "@/components/FireOverview";
import HardeningSection from "@/components/HardeningSection";
import FireRelated from "@/components/FireRelated";

/* ✅ SEO METADATA */
export const metadata = {
  title: "Server & Firewall Hardening Services | NoaSec",
  description:
    "NoaSec's server and firewall hardening service reduces your attack surface by securing OS configurations, disabling unnecessary services, and implementing best-practice firewall rules.",

  keywords: [
    "server hardening service",
    "firewall hardening",
    "system hardening",
    "CIS benchmark compliance",
    "Linux server security",
    "Windows server hardening India",
  ],

  alternates: {
    canonical: "https://www.noasec.com/services/server-hardening", // ✅ update if needed
  },

  openGraph: {
    title: "Server & Firewall Hardening Services | NoaSec",
    description:
      "Strengthen your infrastructure by securing servers and firewall configurations with industry best practices.",
    url: "https://www.noasec.com/services/server-hardening",
    siteName: "NoaSec",
    images: [
      {
        url: "https://www.noasec.com/og-server-hardening.jpg", // replace with actual image
        width: 1200,
        height: 630,
        alt: "Server & Firewall Hardening NoaSec",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Server & Firewall Hardening Services | NoaSec",
    description:
      "Reduce attack surface with secure server configurations and firewall hardening by NoaSec.",
    images: ["https://www.noasec.com/og-server-hardening.jpg"],
  },
};

export default function ServerHardeningPage() {
  return (
    <div>
      <FirewallHero />
      <FireOverview />
      <HardeningSection />
      <FireRelated />
    </div>
  );
}