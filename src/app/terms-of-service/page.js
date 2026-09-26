import { SITE } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import LegalPage from "@/components/LegalPage";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: `The terms and conditions that govern your use of the ${SITE.name} website, training programmes and cybersecurity and digital services.`,
  path: "/terms-of-service",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      href="/terms-of-service"
      updated="2026-09-26"
      sections={[
        { h: "Acceptance", p: "By using this website you agree to these terms." },
        { h: "Services", p: "All branding, development and marketing services are delivered under a separate written proposal or agreement that defines scope, timelines, fees and ownership." },
        { h: "Intellectual property", p: "Website content belongs to us unless stated otherwise. Ownership of client deliverables transfers to the client on full payment, as set out in the project agreement." },
        { h: "Results", p: "Marketing outcomes such as rankings, AI citations, traffic and ad performance depend on factors outside our control and are not guaranteed." },
        { h: "Limitation of liability", p: `${SITE.legalName} is not liable for indirect or consequential damages arising from use of this website.` },
        { h: "Contact", p: `Questions about these terms: ${SITE.email}.` },
      ]}
    />
  );
}
