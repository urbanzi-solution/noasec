import { buildMetadata } from "@/lib/seo";
import AboutHero from "@/components/AboutHero";
import WhoWeAre from "@/components/WhoWeAre";
import AboutSections from "@/components/AboutSections";
import ReadyCTA from "@/components/ReadyCTA";

export const metadata = buildMetadata({
  title: "About Us — Cybersecurity Training & Consulting",
  description: "Meet NoaSec Cybersecurity Solutions, Kottayam — our mission to build industry-ready security professionals and protect businesses online.",
  path: "/about",
  keywords: ["about NoaSec","cybersecurity training company","ethical hacking institute","cybersecurity consulting India"],
});

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