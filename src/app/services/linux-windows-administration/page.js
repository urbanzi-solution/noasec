import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import LinuxHero from "@/components/LinuxHero";
import LinuxOverview from "@/components/Linuxoverview";
import EngineeredSection from "@/components/EngineeredSection";

export const metadata = buildMetadata({
  title: "Linux & Windows Administration Services",
  description: "Secure Linux and Windows administration — server setup, configuration management, access control and ongoing maintenance, security first.",
  path: "/services/linux-windows-administration",
  keywords: ["Linux administration service","Windows server administration","secure system administration","IT administration services India"],
});

export default function LinuxWindowsAdministrationPage() {
  return (
    <>
      <JsonLd data={serviceSchema({"name":"Linux & Windows Administration Services","description":"Secure system administration services including Linux and Windows server setup, configuration management, user access control, monitoring, and ongoing maintenance with a security-first approach.","href":"/services/linux-windows-administration","category":"Cybersecurity"})} />

      <LinuxHero />
      <LinuxOverview />
      <EngineeredSection />
    </>
  );
}