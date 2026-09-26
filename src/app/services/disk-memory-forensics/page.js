import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import DiskHero from "@/components/DiskHero";
import DiskOverview from "@/components/DiskOverview";
import KeyBenefitsSection from "@/components/KeyBenefitsSection";

export const metadata = buildMetadata({
  title: "Disk & Memory Forensics Services",
  description: "Disk and memory forensics to reconstruct incident timelines, recover deleted files and trace attacker activity across storage media and RAM.",
  path: "/services/disk-memory-forensics",
  keywords: ["disk forensics","memory forensics","RAM forensics","hard drive forensics","forensic investigation services","incident forensics India"],
});

export default function DiskMemoryForensics() {
  return (
    <>
      <JsonLd data={serviceSchema({"name":"Disk & Memory Forensics","description":"Advanced forensic analysis of storage media and volatile memory (RAM) to reconstruct incident timelines, recover deleted files, and identify attacker activity.","href":"/services/disk-memory-forensics","category":"Cybersecurity"})} />

      <DiskHero />
      <DiskOverview />
      <KeyBenefitsSection />
    </>
  );
}