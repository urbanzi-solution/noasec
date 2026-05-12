import WebSecurityHero from "@/components/WebSecurityHero";
import PentestSection from "@/components/PentestSection";
import BenefitsSection from "@/components/BenefitsSection";
import TrainingCTA from "@/components/TrainingCTA";
import Script from "next/script";

/* ✅ SEO METADATA */
export const metadata = {
  title: "Web Application Penetration Testing | NoaSec",
  description:
    "NoaSec's web application penetration testing service identifies vulnerabilities in your web apps — SQL injection, XSS, authentication flaws, and more — aligned with OWASP Top 10.",

  keywords: [
    "web application penetration testing",
    "web app pentest",
    "OWASP testing",
    "bug bounty services",
    "web security testing India",
  ],

  alternates: {
    canonical:
      "https://www.noasec.com/services/web-application-penetration-testing",
  },

  openGraph: {
    title: "Web Application Penetration Testing | NoaSec",
    description:
      "Identify and fix web application vulnerabilities with expert pentesting aligned to OWASP Top 10.",
    url:
      "https://www.noasec.com/services/web-application-penetration-testing",
    siteName: "NoaSec",
    type: "website",
  },
};

export default function WebApplicationPentestingPage() {
  return (
    <>
      {/* ✅ Service Schema */}
      <Script
        id="web-application-pentest-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Web Application Penetration Testing",
            description:
              "Comprehensive web application security testing aligned with OWASP Top 10 to identify vulnerabilities such as SQL injection, cross-site scripting, authentication flaws, and insecure configurations.",
            provider: {
              "@type": "Organization",
              name: "NoaSec",
              url: "https://www.noasec.com",
            },
            areaServed: "IN",
            serviceType: "Application Security Testing",
          }),
        }}
      />

      <WebSecurityHero />
      <PentestSection />
      <BenefitsSection />
      <TrainingCTA />
    </>
  );
}