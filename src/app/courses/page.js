import { buildMetadata } from "@/lib/seo";
import { itemListSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import { courses } from "@/data/courses";
import CoursesHero from "@/components/CoursesHero";
import EnrollmentTracks from "@/components/EnrollmentTracks";
import CourseCards from "@/components/CourseCards";

export const metadata = buildMetadata({
  title: "Cybersecurity Courses & Certifications",
  description: "NoaSec's hands-on cybersecurity certification courses, beginner to advanced — ethical hacking, SOC operations, digital forensics and more.",
  path: "/courses",
  keywords: ["cybersecurity certification courses","ethical hacking course","SOC analyst training","digital forensics certification","cybersecurity training online"],
});

export default function CoursesPage() {
  return (
    <>
      <JsonLd data={itemListSchema("NoaSec Cybersecurity Courses", courses.map((c) => ({ name: c.name, href: c.href })))} />

      <CoursesHero />
      <EnrollmentTracks />
      <CourseCards />
    </>
  );
}