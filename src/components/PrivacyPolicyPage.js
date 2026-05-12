export const metadata = {
  title: "Privacy Policy | NoaSec",
  description:
    "Read the NoaSec Privacy Policy to understand how we collect, use, and protect your data in compliance with applicable data protection laws.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-16 py-20 mt-20">
      <div className="max-w-4xl mx-auto space-y-6">

        <h1 className="text-3xl font-bold">
          Privacy Policy
        </h1>

        <p>
          At NoaSec, we respect your privacy and are committed to protecting
          your personal information in accordance with applicable laws,
          including the Digital Personal Data Protection Act (DPDPA), 2023.
        </p>

        <h2 className="text-xl font-semibold">Information We Collect</h2>
        <p>
          We may collect name, email address, phone number, and message
          details when you submit forms on our website.
        </p>

        <h2 className="text-xl font-semibold">How We Use Information</h2>
        <p>
          To respond to inquiries, provide services, improve our website,
          and communicate with users.
        </p>

        <h2 className="text-xl font-semibold">Data Protection</h2>
        <p>
          We implement reasonable security measures to protect your data.
        </p>

        <h2 className="text-xl font-semibold">Contact</h2>
        <p>
          For privacy-related concerns, contact:
          <br />
          Email: Info@noasecsolutions.com
        </p>

      </div>
    </section>
  );
}