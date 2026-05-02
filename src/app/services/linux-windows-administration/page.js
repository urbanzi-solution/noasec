import LinuxHero from "@/components/LinuxHero";
import LinuxOverview from "@/components/Linuxoverview";
import EngineeredSection from "@/components/EngineeredSection";

/* ✅ SEO METADATA */
export const metadata = {
  title: "Linux & Windows Administration Services | NoaSec",
  description:
    "NoaSec provides secure Linux and Windows system administration — server setup, configuration management, user access control, and ongoing maintenance with a security-first approach.",

  keywords: [
    "Linux administration service",
    "Windows server administration",
    "secure system administration",
    "IT administration services India",
  ],

  alternates: {
    canonical: "https://www.noasec.com/services/linux-windows-administration", // ✅ update if needed
  },

  openGraph: {
    title: "Linux & Windows Administration Services | NoaSec",
    description:
      "Secure system administration for Linux and Windows environments — from server setup to ongoing maintenance.",
    url: "https://www.noasec.com/services/linux-windows-administration",
    siteName: "NoaSec",
    images: [
      {
        url: "https://www.noasec.com/og-linux-windows.jpg", // replace with actual image
        width: 1200,
        height: 630,
        alt: "Linux & Windows Administration NoaSec",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Linux & Windows Administration Services | NoaSec",
    description:
      "Reliable and secure Linux & Windows administration by NoaSec experts.",
    images: ["https://www.noasec.com/og-linux-windows.jpg"],
  },
};

export default function LinuxWindowsAdministrationPage() {
  return (
    <>
      <LinuxHero />
      <LinuxOverview />
      <EngineeredSection />
    </>
  );
}