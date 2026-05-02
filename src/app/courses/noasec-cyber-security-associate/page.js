import NCSAHero from "@/components/NCSAHero";
import ProgramOverview from "@/components/ProgramOverview";
import LearningRoadmap from "@/components/LearningRoadmap";
import PathToMastery from "@/components/PathToMastery";

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
    canonical: "https://www.noasec.com/courses/noasec-cyber-security-associate", // ✅ update if needed
  },

  openGraph: {
    title: "Cyber Security Associate Course (NCSA) | NoaSec",
    description:
      "Begin your cybersecurity career with NoaSec’s NCSA program — designed for absolute beginners.",
    url: "https://www.noasec.com/courses/noasec-cyber-security-associate",
    siteName: "NoaSec",
    images: [
      {
        url: "https://www.noasec.com/og-ncsa.jpg", // replace with actual image
        width: 1200,
        height: 630,
        alt: "NCSA Cyber Security Course NoaSec",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cyber Security Associate Course (NCSA) | NoaSec",
    description:
      "Kickstart your cybersecurity journey with NoaSec’s beginner-friendly NCSA course.",
    images: ["https://www.noasec.com/og-ncsa.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <NCSAHero />
      <ProgramOverview />
      <LearningRoadmap />
      <PathToMastery />
    </>
  );
}