import { buildMetadata } from "@/lib/seo";
import { articleSchema } from "@/lib/schema";
import { posts } from "@/data/posts";
import JsonLd from "@/components/JsonLd";

const post = posts.find((p) => p.href === "/blogs/blog");

export const metadata = buildMetadata({
  title: "How to Start a Cybersecurity Career in 2026: Roadmap",
  description: "A complete beginner's roadmap to a cybersecurity career in 2026 — skills, roles, certifications, salaries and how NoaSec training helps you get job-ready.",
  path: "/blogs/blog",
  type: "article",
});
metadata.openGraph.publishedTime = post.published;
metadata.openGraph.modifiedTime = post.updated || post.published;
import BlogHeader from "@/components/BlogHeader";
import WhyLearningMatters from "@/components/WhyLearningMatters";
import WhyConsiderCybersecurity from "@/components/WhyConsiderCybersecurity"
import UnderstandingIndustry from "@/components/UnderstandingIndustry";
import CareerRoadmap from "@/components/CareerRoadmap";
import CareerOpportunities from "@/components/CareerOpportunities"
import HowNoasecHelps from "@/components/HowNoasecHelps";
import ConclusionSection from "@/components/ConclusionSection";

export default function Page() {
  return (
    <div>
        <JsonLd data={articleSchema(post)} />
        <BlogHeader />
        <WhyLearningMatters />
        <WhyConsiderCybersecurity />
        <UnderstandingIndustry />
        <CareerRoadmap />
        <CareerOpportunities />
        <HowNoasecHelps />
        <ConclusionSection />  
    </div>    
  );
}