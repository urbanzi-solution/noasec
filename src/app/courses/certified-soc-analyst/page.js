import { buildMetadata } from "@/lib/seo";
import { courseSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import NCSOCHero from "@/components/NCSOCHero";
import ModuleRoadmap from "@/components/ModuleRoadmap";
import ProfessionalServices from "@/components/ProfessionalServices";

export const metadata = buildMetadata({
  title: "Certified SOC Analyst Course (NCSA-SOC)",
  description: "Become a SOC analyst with NCSA-SOC — hands-on SIEM architecture, log analysis, threat hunting and incident response using Wazuh, Splunk and ELK.",
  path: "/courses/certified-soc-analyst",
  keywords: ["SOC analyst certification","SIEM training","security operations center course","threat hunting training","Splunk training","cybersecurity monitoring course"],
});

export default function CertifiedSOCAnalyst() {
  return (
    <>
      <JsonLd data={courseSchema({"name":"Certified SOC Analyst (NCSA-SOC)","description":"Hands-on SOC analyst certification covering SIEM architecture, log analysis, threat hunting, and incident response using tools like Splunk, Wazuh, and ELK Stack.","href":"/courses/certified-soc-analyst","level":"Intermediate to Advanced","duration":"P2M"})} />

      <NCSOCHero />
      <ModuleRoadmap />
      <ProfessionalServices />
    </>
  );
}