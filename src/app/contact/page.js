// src/app/contact/page.js

import ContactForm from "@/components/ContactForm";
import Script from "next/script";

export const metadata = {
  title: "Contact NoaSec | Cybersecurity Training & Services Enquiry",
  description:
    "Get in touch with NoaSec for cybersecurity course enrolment, security service consultations, or general enquiries. We respond within 1 business day.",
  keywords: [
    "contact NoaSec",
    "cybersecurity course enquiry",
    "security services consultation",
    "NoaSec contact India",
  ],
  openGraph: {
    title: "Contact NoaSec | Cybersecurity Training & Services Enquiry",
    description:
      "Contact NoaSec for cybersecurity training and security services consultation.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* ✅ LocalBusiness Schema for Contact Page */}
      <Script
        id="localbusiness-contact-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "NoaSec",
            url: "https://noasec.com/contact",
            telephone: "+917034733944",
            email: "Info@noasecsolutions.com",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "R4, Centerspace, XIII/284 A, Anjanasree Arcade, Annankunnu Road, Nagampadom",
              addressLocality: "Kottayam",
              postalCode: "686001",
              addressCountry: "IN",
            },
          }),
        }}
      />

      <section className="min-h-screen bg-[#05070d] text-white px-6 md:px-16 py-20 mt-20">
        <ContactForm />
      </section>
    </>
  );
}