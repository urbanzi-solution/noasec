import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import IncidentHero from "@/components/IncidentHero";
import IncidentOverview from "@/components/IncidentOverview";
import OperationalAdvantages from "@/components/OperationalAdvantages";

export const metadata = buildMetadata({
  title: "Incident Response Services",
  description: "NoaSec incident response — rapid containment, investigation and recovery after a cyberattack or data breach to minimise damage and downtime.",
  path: "/services/incident-response-services",
  keywords: ["incident response services","cyber incident response","data breach response","ransomware recovery","cybersecurity incident handling India"],
});

export default function IncidentResponsePage() {
  return (
    <>
      <JsonLd data={serviceSchema({"name":"Incident Response Services","description":"Rapid containment, investigation, and recovery services for cyberattacks, data breaches, and ransomware incidents to minimize damage and restore operations.","href":"/services/incident-response-services","category":"Cybersecurity"})} />

      <IncidentHero />
      <IncidentOverview />
      <OperationalAdvantages />
    </>
  );
}