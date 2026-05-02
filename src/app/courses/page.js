import CoursesHero from "@/components/CoursesHero";
import EnrollmentTracks from "@/components/EnrollmentTracks";
import CourseCards from "@/components/CourseCards";

/* ✅ SEO METADATA */
export const metadata = {
  title: "Cybersecurity Courses & Certifications | NoaSec",
  description:
    "Explore NoaSec's hands-on cybersecurity certification programs — from beginner to advanced. Courses in ethical hacking, SOC operations, digital forensics, and more.",
  keywords: [
    "cybersecurity certification courses",
    "ethical hacking course",
    "SOC analyst training",
    "digital forensics certification",
    "cybersecurity training online",
  ],

  alternates: {
    canonical: "https://www.noasec.com/courses", // 🔥 update if needed
  },

  openGraph: {
    title: "Cybersecurity Courses & Certifications | NoaSec",
    description:
      "Hands-on cybersecurity training programs by NoaSec — learn ethical hacking, SOC operations, and digital forensics.",
    url: "https://www.noasec.com/courses",
    siteName: "NoaSec",
    images: [
      {
        url: "https://www.noasec.com/og-courses.jpg", // replace with your image
        width: 1200,
        height: 630,
        alt: "NoaSec Cybersecurity Courses",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cybersecurity Courses & Certifications | NoaSec",
    description:
      "Explore NoaSec's practical cybersecurity courses and certifications.",
    images: ["https://www.noasec.com/og-courses.jpg"],
  },
};

export default function CoursesPage() {
  return (
    <>
      <CoursesHero />
      <EnrollmentTracks />
      <CourseCards />
    </>
  );
}