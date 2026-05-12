import CoursesHero from "@/components/CoursesHero";
import EnrollmentTracks from "@/components/EnrollmentTracks";
import CourseCards from "@/components/CourseCards";
import Script from "next/script";

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
    canonical: "https://www.noasec.com/courses",
  },

  openGraph: {
    title: "Cybersecurity Courses & Certifications | NoaSec",
    description:
      "Hands-on cybersecurity training programs by NoaSec.",
    url: "https://www.noasec.com/courses",
    siteName: "NoaSec",
    type: "website",
  },
};

export default function CoursesPage() {
  return (
    <>
      {/* ✅ Courses Schema */}
      <Script
        id="courses-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "NoaSec Cybersecurity Courses",
            itemListElement: [
              {
                "@type": "Course",
                position: 1,
                name: "Ethical Hacking Program",
                provider: {
                  "@type": "Organization",
                  name: "NoaSec",
                  sameAs: "https://www.noasec.com",
                },
              },
              {
                "@type": "Course",
                position: 2,
                name: "SOC Analyst Training",
                provider: {
                  "@type": "Organization",
                  name: "NoaSec",
                  sameAs: "https://www.noasec.com",
                },
              },
              {
                "@type": "Course",
                position: 3,
                name: "Digital Forensics Certification",
                provider: {
                  "@type": "Organization",
                  name: "NoaSec",
                  sameAs: "https://www.noasec.com",
                },
              },
            ],
          }),
        }}
      />

      <CoursesHero />
      <EnrollmentTracks />
      <CourseCards />
    </>
  );
}