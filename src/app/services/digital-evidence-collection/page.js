import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import DigitalHero from "@/components/DigitalHero";
import DigitalOverview from "@/components/DigitalOverview";
import DigitalBenifitSection from "@/components/DigitalBenifitSection";

export const metadata = buildMetadata({
  title: "Digital Evidence Collection Services",
  description: "Legally sound digital evidence collection and preservation with strict chain of custody, ready for investigations and legal proceedings.",
  path: "/services/digital-evidence-collection",
  keywords: ["digital evidence collection","forensic evidence acquisition","chain of custody","legal digital evidence","cybercrime evidence India"],
});

export default function DigitalEvidenceCollection() {
  return (
    <>
      <JsonLd data={serviceSchema({"name":"Digital Evidence Collection","description":"Legally compliant digital evidence acquisition and preservation service following strict chain of custody protocols for investigations and legal proceedings.","href":"/services/digital-evidence-collection","category":"Cybersecurity"})} />

      <DigitalHero />
      <DigitalOverview />
      <DigitalBenifitSection />
    </>
  );
}