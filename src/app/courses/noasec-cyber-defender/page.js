import { buildMetadata } from "@/lib/seo";
import { courseSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import NCDHero from "@/components/NCDHero";
import NCDFoundation from "@/components/NCDFoundation";
import CertificationPathway from "@/components/CertificationPathway";

export const metadata = buildMetadata({
  title: "Cyber Defender Course (NCD) | Ethical Hacking Training",
  description: "NCD: a 2-month hands-on ethical hacking course — vulnerability assessment, web security, wireless hacking and pentesting basics. Online & offline.",
  path: "/courses/noasec-cyber-defender",
  keywords: ["ethical hacking course","cyber defender certification","vulnerability assessment training","web security course","penetration testing beginner"],
});

export default function CyberDefender() {
  return (
    <>
      <JsonLd data={courseSchema({"name":"Cyber Defender (NCD)","description":"2-month hands-on ethical hacking course covering vulnerability assessment, web security, wireless hacking, and penetration testing fundamentals.","href":"/courses/noasec-cyber-defender","level":"Beginner to Intermediate","duration":"P2M"})} />

      <NCDHero />
      <NCDFoundation />
      <CertificationPathway />
    </>
  );
}