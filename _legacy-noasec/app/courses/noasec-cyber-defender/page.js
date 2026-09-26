import NCDHero from "@/components/NCDHero";
import NCDFoundation from "@/components/NCDFoundation";
import CertificationPathway from "@/components/CertificationPathway";
import Script from "next/script";

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
    canonical:
      "https://www.noasec.com/courses/noasec-cyber-defender",
  },

  openGraph: {
    title:
      "Cyber Defender Course (NCD) | Ethical Hacking Training | NoaSec",
    description:
      "Master ethical hacking with NoaSec’s Cyber Defender (NCD) course.",
    url:
      "https://www.noasec.com/courses/noasec-cyber-defender",
    siteName: "NoaSec",
    type: "website",
  },
};

export default function CyberDefender() {
  return (
    <>
      {/* ✅ Course Schema */}
      <Script
        id="ncd-course-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Cyber Defender (NCD)",
            description:
              "2-month hands-on ethical hacking course covering vulnerability assessment, web security, wireless hacking, and penetration testing fundamentals.",
            provider: {
              "@type": "Organization",
              name: "NoaSec",
              url: "https://www.noasec.com",
            },
            educationalLevel: "Beginner to Intermediate",
            courseMode: "Online, Offline",
            inLanguage: "en",
          }),
        }}
      />

      <NCDHero />
      <NCDFoundation />
      <CertificationPathway />
    </>
  );
}