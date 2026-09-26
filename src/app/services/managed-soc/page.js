import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import ManagedHero from "@/components/ManagedHero";
import ManagedOverview from "@/components/ManagedOverview";
import ManagedSection from "@/components/ManagedSection";
import ManagedService from "@/components/ManagedService";

export const metadata = buildMetadata({
  title: "Managed SOC Operations | 24/7 Security Monitoring",
  description: "24/7 managed SOC from NoaSec — security monitoring, threat detection, SIEM management and alert triage without the cost of an in-house SOC.",
  path: "/services/managed-soc",
  keywords: ["managed SOC services","24/7 security monitoring","SIEM managed service","threat detection service","outsourced SOC India"],
});

export default function ManagedSOCPage() {
  return (
    <>
      <JsonLd data={serviceSchema({"name":"Managed SOC Operations","description":"24/7 security monitoring, SIEM management, threat detection, and alert triage services providing enterprise-grade cybersecurity protection.","href":"/services/managed-soc","category":"Cybersecurity"})} />

      <ManagedHero />
      <ManagedOverview />
      <ManagedSection />
      <ManagedService />
    </>
  );
}