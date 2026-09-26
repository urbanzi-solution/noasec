import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import ThreatHero from "@/components/ThreatHero";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import CyberSection from "@/components/CyberSection";
import RelatedServices from "@/components/RelatedServices";

export const metadata = buildMetadata({
  title: "Threat Intelligence & Threat Hunting Services",
  description: "Threat intelligence and proactive threat hunting from NoaSec — uncover hidden adversaries and emerging threats before they cause damage.",
  path: "/services/threat-intelligence",
  keywords: ["threat intelligence service","threat hunting","proactive threat detection","cyber threat intelligence India","advanced persistent threat detection"],
});

export default function ThreatIntelligencePage() {
  return (
    <>
      <JsonLd data={serviceSchema({"name":"Threat Intelligence & Threat Hunting Services","description":"Proactive threat intelligence and advanced threat hunting services designed to identify hidden adversaries, detect emerging threats, and mitigate advanced persistent threats before impact.","href":"/services/threat-intelligence","category":"Cybersecurity"})} />

      <ThreatHero />
      <CapabilitiesSection />
      <CyberSection />
      <RelatedServices />
    </>
  );
}