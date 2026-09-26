import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import NetworkHero from "@/components/NetworkHero";
import NetworkOverview from "@/components/NetworkOverview";
import KeyBenefits from "@/components/KeyBenefits";

export const metadata = buildMetadata({
  title: "Network Penetration Testing Services",
  description: "Network penetration testing that simulates real attacks on your internal and external infrastructure — firewalls, routers, switches and exposed services.",
  path: "/services/network-penetration-testing",
  keywords: ["network penetration testing","internal network pentest","external network security testing","infrastructure security testing India"],
});

export default function NetworkPenetrationTestingPage() {
  return (
    <>
      <JsonLd data={serviceSchema({"name":"Network Penetration Testing","description":"Comprehensive internal and external network penetration testing to identify vulnerabilities in firewalls, routers, switches, servers, and network services.","href":"/services/network-penetration-testing","category":"Cybersecurity"})} />

      <NetworkHero />
      <NetworkOverview />
      <KeyBenefits />
    </>
  );
}