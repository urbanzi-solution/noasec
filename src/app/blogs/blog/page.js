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