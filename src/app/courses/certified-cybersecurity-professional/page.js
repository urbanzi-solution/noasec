import { buildMetadata } from "@/lib/seo";
import { courseSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import NCCPHero from "@/components/NCCPHero";
import CurriculumRoadmap from "@/components/CurriculumRoadmap";
import ProgressionArchitecture from "@/components/ProgressionArchitecture";

export const metadata = buildMetadata({
  title: "Certified Cybersecurity Professional (NCCP) Course",
  description: "NCCP, our 4-month flagship certification: advanced pentesting, mobile and cloud security, SOC operations, digital forensics and incident response.",
  path: "/courses/certified-cybersecurity-professional",
  keywords: ["certified cybersecurity professional","advanced cybersecurity course","penetration testing certification","SOC training","cloud security course India"],
});

export default function CertifiedCybersecurityProfessional() {
  return (
    <>
      <JsonLd data={courseSchema({"name":"Certified Cybersecurity Professional (NCCP)","description":"Advanced 4-month cybersecurity certification covering penetration testing, cloud security, SOC operations, digital forensics, mobile security, and incident response.","href":"/courses/certified-cybersecurity-professional","level":"Advanced","duration":"P4M"})} />

      <NCCPHero />
      <CurriculumRoadmap />
      <ProgressionArchitecture />
    </>
  );
}