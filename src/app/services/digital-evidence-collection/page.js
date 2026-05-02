import DigitalHero from "@/components/DigitalHero";
import DigitalOverview from "@/components/DigitalOverview";
import DigitalBenifitSection from "@/components/DigitalBenifitSection";

/* ✅ SEO METADATA */
export const metadata = {
  title: "Digital Evidence Collection Services | NoaSec",
  description:
    "NoaSec's digital evidence collection service ensures legally sound acquisition and preservation of digital evidence — following chain of custody protocols for use in investigations and legal proceedings.",
  keywords: [
    "digital evidence collection",
    "forensic evidence acquisition",
    "chain of custody",
    "legal digital evidence",
    "cybercrime evidence India",
  ],

  alternates: {
    canonical: "https://www.noasec.com/services/digital-evidence-collection", // 🔥 update if needed
  },

  openGraph: {
    title: "Digital Evidence Collection Services | NoaSec",
    description:
      "Ensure legally compliant digital evidence collection with NoaSec’s forensic expertise and strict chain of custody protocols.",
    url: "https://www.noasec.com/services/digital-evidence-collection",
    siteName: "NoaSec",
    images: [
      {
        url: "https://www.noasec.com/og-digital-evidence.jpg", // replace with actual image
        width: 1200,
        height: 630,
        alt: "Digital Evidence Collection NoaSec",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Evidence Collection Services | NoaSec",
    description:
      "Legally sound digital evidence acquisition and preservation by NoaSec.",
    images: ["https://www.noasec.com/og-digital-evidence.jpg"],
  },
};

export default function DigitalEvidenceCollection() {
  return (
    <>
      <DigitalHero />
      <DigitalOverview />
      <DigitalBenifitSection />
    </>
  );
}