import WebSecurityHero from "@/components/WebSecurityHero";
import PentestSection from "@/components/PentestSection";
import BenefitsSection from "@/components/BenefitsSection";
import TrainingCTA from "@/components/TrainingCTA";

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
    canonical: "https://www.noasec.com/services/web-application-penetration-testing", // ✅ update if needed
  },

  openGraph: {
    title: "Web Application Penetration Testing | NoaSec",
    description:
      "Identify and fix web application vulnerabilities with expert pentesting aligned to OWASP Top 10.",
    url: "https://www.noasec.com/services/web-application-penetration-testing",
    siteName: "NoaSec",
    images: [
      {
        url: "https://www.noasec.com/og-web-pentest.jpg", // replace with actual image
        width: 1200,
        height: 630,
        alt: "Web Application Penetration Testing NoaSec",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Web Application Penetration Testing | NoaSec",
    description:
      "Comprehensive web app security testing aligned with OWASP Top 10.",
    images: ["https://www.noasec.com/og-web-pentest.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <WebSecurityHero />
      <PentestSection />
      <BenefitsSection />
      <TrainingCTA />
    </>
  );
}