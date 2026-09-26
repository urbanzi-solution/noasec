import { SITE } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import LegalPage from "@/components/LegalPage";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${SITE.name} collects, uses, stores and protects the personal data you share through our website, enquiry forms and services.`,
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      href="/privacy-policy"
      updated="2026-09-26"
      sections={[
        { h: "Introduction", p: `${SITE.legalName} respects your privacy and protects your personal information in accordance with applicable laws, including India's Digital Personal Data Protection Act, 2023.` },
        { h: "Information we collect", p: "Name, email, phone number, company and project details you submit through our forms, plus anonymous usage data collected via analytics cookies." },
        { h: "How we use information", p: "To respond to enquiries, deliver services, send proposals, improve our website and, with your consent, share relevant updates." },
        { h: "Cookies & analytics", p: "We use analytics and advertising tools (such as Google Analytics, Google Ads and Meta Pixel) to understand site usage and measure campaigns. You can disable cookies in your browser." },
        { h: "Data sharing", p: "We do not sell your data. We share it only with service providers needed to run our business, under confidentiality obligations, or when required by law." },
        { h: "Your rights", p: "You may request access, correction or deletion of your personal data at any time by contacting us." },
        { h: "Contact", p: `For privacy questions email ${SITE.email}.` },
      ]}
    />
  );
}
