import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import CloudHero from "@/components/CloudHero";
import CloudComplexity from "@/components/CloudComplexity";
import CloudWhatWeDeliver from "@/components/CloudWhatWeDeliver";
import StrategicBenefits from "@/components/StrategicBenefits";

export const metadata = buildMetadata({
  title: "Cloud Security Solutions | AWS, Azure & GCP Security",
  description: "Cloud security for AWS, Azure and Google Cloud — configuration audits, IAM reviews, data protection and cloud penetration testing by NoaSec.",
  path: "/services/cloud-security-solutions",
  keywords: ["cloud security services","AWS security","Azure security","GCP security","cloud penetration testing","cloud configuration audit India"],
});

export default function CloudPage() {
  return (
    <>
      <JsonLd data={serviceSchema({"name":"Cloud Security Solutions","description":"Comprehensive cloud security services including AWS, Azure, and Google Cloud security assessments, IAM reviews, configuration audits, data protection, and cloud penetration testing.","href":"/services/cloud-security-solutions","category":"Cybersecurity"})} />

      <CloudHero />
      <CloudComplexity />
      <CloudWhatWeDeliver />
      <StrategicBenefits />
    </>
  );
}