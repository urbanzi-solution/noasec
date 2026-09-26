import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import WebSecurityHero from "@/components/WebSecurityHero";
import PentestSection from "@/components/PentestSection";
import BenefitsSection from "@/components/BenefitsSection";
import TrainingCTA from "@/components/TrainingCTA";

export const metadata = buildMetadata({
  title: "Web Application Penetration Testing",
  description: "Web application penetration testing by NoaSec — find SQL injection, XSS, broken authentication and OWASP Top 10 flaws before attackers do.",
  path: "/services/web-application-penetration-testing",
  keywords: ["web application penetration testing","web app pentest","OWASP testing","bug bounty services","web security testing India"],
});

export default function WebApplicationPentestingPage() {
  return (
    <>
      <JsonLd data={serviceSchema({"name":"Web Application Penetration Testing","description":"Comprehensive web application security testing aligned with OWASP Top 10 to identify vulnerabilities such as SQL injection, cross-site scripting, authentication flaws, and insecure configurations.","href":"/services/web-application-penetration-testing","category":"Cybersecurity"})} />

      <WebSecurityHero />
      <PentestSection />
      <BenefitsSection />
      <TrainingCTA />
    </>
  );
}