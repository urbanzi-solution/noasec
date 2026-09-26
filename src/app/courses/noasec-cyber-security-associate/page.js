import { buildMetadata } from "@/lib/seo";
import { courseSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import NCSAHero from "@/components/NCSAHero";
import ProgramOverview from "@/components/ProgramOverview";
import LearningRoadmap from "@/components/LearningRoadmap";
import PathToMastery from "@/components/PathToMastery";

export const metadata = buildMetadata({
  title: "Cyber Security Associate Course (NCSA)",
  description: "NCSA: a 1-month beginner cybersecurity course covering threats, networking, Linux basics, ethical hacking and security tools. Online & offline.",
  path: "/courses/noasec-cyber-security-associate",
  keywords: ["cyber security associate course","beginner cybersecurity training","NCSA certification","cybersecurity for beginners","ethical hacking basics India"],
});

export default function NCSA() {
  return (
    <>
      <JsonLd data={courseSchema({"name":"Cyber Security Associate (NCSA)","description":"1-month beginner cybersecurity course covering cyber threats, networking fundamentals, Linux basics, ethical hacking concepts, and security tools.","href":"/courses/noasec-cyber-security-associate","level":"Beginner","duration":"P1M"})} />

      <NCSAHero />
      <ProgramOverview />
      <LearningRoadmap />
      <PathToMastery />
    </>
  );
}