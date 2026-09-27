import Link from "next/link";
import Hero from "@/components/Hero";
import NewGen from "@/components/NewGen";
import Services from "@/components/Services";
import DigitalServices from "@/components/DigitalServices";
import Programs from "@/components/Programs";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceCard from "@/components/ServiceCard";
import FAQ from "@/components/FAQ";
import { SITE } from "@/data/site";
import { posts, postHref } from "@/data/posts";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "NoaSec | Cybersecurity & Digital Agency in Kottayam, Kerala",
  description: SITE.description,
  path: "/",
  absoluteTitle: true,
  keywords: [
    "cybersecurity training Kerala",
    "cybersecurity services Kottayam",
    "penetration testing company Kerala",
    "branding agency Kerala",
    "web development company Kottayam",
    "digital marketing agency Kerala",
    "SEO GEO AEO services",
    "Google Ads agency Kerala",
  ],
});

const homeFaqs = [
  { q: `What services does ${SITE.name} offer?`, a: `${SITE.name} offers cybersecurity services (penetration testing, managed SOC, incident response, forensics, cloud security), cybersecurity training programs, and digital services: branding, website and app development, UI/UX design, SEO, GEO, AEO, social media marketing, performance marketing and Google Ads.` },
  { q: "Where is NoaSec located?", a: `${SITE.name} is based in ${SITE.address.city}, ${SITE.address.region}, India and works with clients across India, the UAE, the UK and the US.` },
  { q: "Do you offer cybersecurity courses?", a: "Yes. NoaSec runs hands-on certification programs from beginner (NCSA) to advanced (NCCP), plus specialised SOC analyst training." },
  { q: "Can you handle branding, website and marketing together?", a: "Yes. Many clients hire us for a combination so their brand, website, security and marketing all work toward the same goals." },
];

export default function Home() {
  const latest = [...posts].sort((a, b) => b.published.localeCompare(a.published)).slice(0, 3);
  return (
    <>
      <Hero />
      <NewGen />
      <Services />
      <DigitalServices />
      <Programs />
      <WhyChooseUs />

      {/* Latest insights */}
      <section aria-labelledby="blog-heading" className="bg-[#05070d] px-6 py-14 md:py-16 lg:py-24 md:px-12 border-t border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-3">
                <span>Knowledge & Research</span>
              </div>
              <h2 id="blog-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                Latest Security & Growth Insights
              </h2>
            </div>
            <Link href="/blog" className="btn-ghost text-xs font-semibold uppercase tracking-wider shrink-0">
              View All Articles →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {latest.map((p) => (
              <ServiceCard key={p.slug} title={p.title} text={p.description} href={postHref(p)} badge={p.category === "cybersecurity" ? "Security" : "Growth"} />
            ))}
          </div>
        </div>
      </section>

      <FAQ faqs={homeFaqs} title="Frequently Asked Questions" eyebrow="Got Questions?" />
    </>
  );
}
