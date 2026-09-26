import FirewallHero from "@/components/FirewallHero";
import FireOverview from "@/components/FireOverview";
import HardeningSection from "@/components/HardeningSection";
import FireRelated from "@/components/FireRelated";
import Script from "next/script";

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
    canonical: "https://www.noasec.com/services/server-hardening",
  },

  openGraph: {
    title: "Server & Firewall Hardening Services | NoaSec",
    description:
      "Strengthen your infrastructure by securing servers and firewall configurations using industry best practices.",
    url: "https://www.noasec.com/services/server-hardening",
    siteName: "NoaSec",
    type: "website",
  },
};

export default function ServerHardeningPage() {
  return (
    <>
      {/* ✅ Service Schema */}
      <Script
        id="server-firewall-hardening-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Server & Firewall Hardening Services",
            description:
              "Comprehensive server and firewall hardening services including secure OS configuration, disabling unnecessary services, implementing secure firewall rules, and aligning with industry security standards such as CIS benchmarks.",
            provider: {
              "@type": "Organization",
              name: "NoaSec",
              url: "https://www.noasec.com",
            },
            areaServed: "IN",
            serviceType: "Infrastructure Security",
          }),
        }}
      />

      <FirewallHero />
      <FireOverview />
      <HardeningSection />
      <FireRelated />
    </>
  );
}