import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import FirewallHero from "@/components/FirewallHero";
import FireOverview from "@/components/FireOverview";
import HardeningSection from "@/components/HardeningSection";
import FireRelated from "@/components/FireRelated";

export const metadata = buildMetadata({
  title: "Server & Firewall Hardening Services",
  description: "Server and firewall hardening to shrink your attack surface — secure OS configuration, CIS benchmarks, service lockdown and firewall rule reviews.",
  path: "/services/server-hardening",
  keywords: ["server hardening service","firewall hardening","system hardening","CIS benchmark compliance","Linux server security","Windows server hardening India"],
});

export default function ServerHardeningPage() {
  return (
    <>
      <JsonLd data={serviceSchema({"name":"Server & Firewall Hardening Services","description":"Comprehensive server and firewall hardening services including secure OS configuration, disabling unnecessary services, implementing secure firewall rules, and aligning with industry security standards such as CIS benchmarks.","href":"/services/server-hardening","category":"Cybersecurity"})} />

      <FirewallHero />
      <FireOverview />
      <HardeningSection />
      <FireRelated />
    </>
  );
}