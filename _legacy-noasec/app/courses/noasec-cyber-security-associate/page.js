import NCSAHero from "@/components/NCSAHero";
import ProgramOverview from "@/components/ProgramOverview";
import LearningRoadmap from "@/components/LearningRoadmap";
import PathToMastery from "@/components/PathToMastery";
import Script from "next/script";

/* ✅ SEO METADATA */
export const metadata = {
  title: "Cyber Security Associate Course (NCSA) | NoaSec",
  description:
    "Start your cybersecurity journey with the NCSA — a 1-month beginner course covering cyber threats, networking, Linux basics, ethical hacking, and security tools. Online & offline.",

  keywords: [
    "cyber security associate course",
    "beginner cybersecurity training",
    "NCSA certification",
    "cybersecurity for beginners",
    "ethical hacking basics India",
  ],

  alternates: {
    canonical:
      "https://www.noasec.com/courses/noasec-cyber-security-associate",
  },

  openGraph: {
    title: "Cyber Security Associate Course (NCSA) | NoaSec",
    description:
      "Begin your cybersecurity career with NoaSec’s NCSA program.",
    url:
      "https://www.noasec.com/courses/noasec-cyber-security-associate",
    siteName: "NoaSec",
    type: "website",
  },
};

export default function NCSA() {
  return (
    <>
      {/* ✅ Course Schema */}
      <Script
        id="ncsa-course-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Cyber Security Associate (NCSA)",
            description:
              "1-month beginner cybersecurity course covering cyber threats, networking fundamentals, Linux basics, ethical hacking concepts, and security tools.",
            provider: {
              "@type": "Organization",
              name: "NoaSec",
              url: "https://www.noasec.com",
            },
            educationalLevel: "Beginner",
            courseMode: "Online, Offline",
            inLanguage: "en",
          }),
        }}
      />

      <NCSAHero />
      <ProgramOverview />
      <LearningRoadmap />
      <PathToMastery />
    </>
  );
}