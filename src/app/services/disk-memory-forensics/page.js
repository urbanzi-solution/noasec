import DiskHero from "@/components/DiskHero";
import DiskOverview from "@/components/DiskOverview";
import KeyBenefitsSection from "@/components/KeyBenefitsSection";
import Script from "next/script";

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
    canonical:
      "https://www.noasec.com/services/disk-memory-forensics",
  },

  openGraph: {
    title: "Disk & Memory Forensics Services | NoaSec",
    description:
      "Deep forensic analysis of disks and memory to uncover attacker activity and reconstruct timelines.",
    url:
      "https://www.noasec.com/services/disk-memory-forensics",
    siteName: "NoaSec",
    type: "website",
  },
};

export default function DiskMemoryForensics() {
  return (
    <>
      {/* ✅ Service Schema */}
      <Script
        id="disk-memory-forensics-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Disk & Memory Forensics",
            description:
              "Advanced forensic analysis of storage media and volatile memory (RAM) to reconstruct incident timelines, recover deleted files, and identify attacker activity.",
            provider: {
              "@type": "Organization",
              name: "NoaSec",
              url: "https://www.noasec.com",
            },
            areaServed: "IN",
            serviceType: "Digital Forensics",
          }),
        }}
      />

      <DiskHero />
      <DiskOverview />
      <KeyBenefitsSection />
    </>
  );
}