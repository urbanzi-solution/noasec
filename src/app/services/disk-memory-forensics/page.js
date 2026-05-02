import DiskHero from "@/components/DiskHero";
import DiskOverview from "@/components/DiskOverview";
import KeyBenefitsSection from "@/components/KeyBenefitsSection";

/* ✅ SEO METADATA */
export const metadata = {
  title: "Disk & Memory Forensics Services | NoaSec",
  description:
    "NoaSec's disk and memory forensics service performs deep forensic analysis of storage media and RAM to reconstruct incident timelines, recover deleted files, and identify attacker activity.",
  
  keywords: [
    "disk forensics",
    "memory forensics",
    "RAM forensics",
    "hard drive forensics",
    "forensic investigation services",
    "incident forensics India",
  ],

  alternates: {
    canonical: "https://www.noasec.com/services/disk-memory-forensics", // ✅ update if needed
  },

  openGraph: {
    title: "Disk & Memory Forensics Services | NoaSec",
    description:
      "Deep forensic analysis of disks and memory to uncover attacker activity, recover data, and reconstruct timelines.",
    url: "https://www.noasec.com/services/disk-memory-forensics",
    siteName: "NoaSec",
    images: [
      {
        url: "https://www.noasec.com/og-disk-forensics.jpg", // replace with actual image
        width: 1200,
        height: 630,
        alt: "Disk & Memory Forensics NoaSec",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Disk & Memory Forensics Services | NoaSec",
    description:
      "Advanced disk and RAM forensic analysis for incident investigations by NoaSec.",
    images: ["https://www.noasec.com/og-disk-forensics.jpg"],
  },
};

export default function DiskMemoryForensics() {
  return (
    <>
      <DiskHero />
      <DiskOverview />
      <KeyBenefitsSection />
    </>
  );
}