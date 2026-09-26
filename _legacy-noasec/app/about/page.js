import AboutHero from "@/components/AboutHero";
import WhoWeAre from "@/components/WhoWeAre";
import AboutSections from "@/components/AboutSections";
import ReadyCTA from "@/components/ReadyCTA";

/* ✅ SEO METADATA */
export const metadata = {
  title: "About NoaSec | Cybersecurity Training & Consulting Company",
  description:
    "Learn about NoaSec Cybersecurity Solutions — our mission to build industry-ready security professionals, our vision for a safer digital world, and what makes us different.",
  keywords: [
    "about NoaSec",
    "cybersecurity training company",
    "ethical hacking institute",
    "cybersecurity consulting India",
  ],

  alternates: {
    canonical: "https://www.noasec.com/about", // 🔥 change if needed
  },

  openGraph: {
    title: "About NoaSec | Cybersecurity Training & Consulting Company",
    description:
      "Discover NoaSec’s mission, vision, and expertise in cybersecurity training and consulting.",
    url: "https://www.noasec.com/about",
    siteName: "NoaSec",
    images: [
      {
        url: "https://www.noasec.com/og-image.jpg", // replace with your OG image
        width: 1200,
        height: 630,
        alt: "About NoaSec Cybersecurity",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About NoaSec | Cybersecurity Training & Consulting Company",
    description:
      "Explore NoaSec’s cybersecurity expertise, training programs, and mission.",
    images: ["https://www.noasec.com/og-image.jpg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <AboutSections />
      <ReadyCTA />
    </>
  );
}