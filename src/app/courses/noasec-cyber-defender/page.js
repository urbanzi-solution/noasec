import NCDHero from "@/components/NCDHero"; 
import NCDFoundation from "@/components/NCDFoundation";
import CertificationPathway from "@/components/CertificationPathway";

/* ✅ SEO METADATA */
export const metadata = {
  title: "Cyber Defender Course (NCD) | Ethical Hacking Training | NoaSec",
  description:
    "The NCD is a 2-month hands-on ethical hacking course covering vulnerability assessment, web security, wireless hacking, and penetration testing fundamentals. Available online & offline.",

  keywords: [
    "ethical hacking course",
    "cyber defender certification",
    "vulnerability assessment training",
    "web security course",
    "penetration testing beginner",
  ],

  alternates: {
    canonical: "https://www.noasec.com/courses/noasec-cyber-defender", // 🔥 update if needed
  },

  openGraph: {
    title: "Cyber Defender Course (NCD) | Ethical Hacking Training | NoaSec",
    description:
      "Master ethical hacking with NoaSec’s Cyber Defender (NCD) course — hands-on training in pentesting, web security, and vulnerability assessment.",
    url: "https://www.noasec.com/courses/noasec-cyber-defender",
    siteName: "NoaSec",
    images: [
      {
        url: "https://www.noasec.com/og-ncd.jpg", // replace with actual image
        width: 1200,
        height: 630,
        alt: "Cyber Defender Course NoaSec",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cyber Defender Course (NCD) | Ethical Hacking Training | NoaSec",
    description:
      "Hands-on ethical hacking course covering pentesting, web security, and vulnerability assessment.",
    images: ["https://www.noasec.com/og-ncd.jpg"],
  },
};

/* ✅ PAGE COMPONENT */
export default function CyberDefender() {
  return (
    <>
      <NCDHero />
      <NCDFoundation />
      <CertificationPathway />
    </>
  );
}