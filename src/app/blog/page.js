import { SITE } from "@/data/site";
import { posts, postHref } from "@/data/posts";
import { buildMetadata } from "@/lib/seo";
import { itemListSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { Calendar, User, Clock, ArrowRight, BookOpen } from "lucide-react";

export const metadata = buildMetadata({
  title: "Blog — Cybersecurity, Web, SEO & AI Insights",
  description: `Practical guides on cybersecurity careers, penetration testing, branding, web development, SEO, GEO, AEO and performance marketing from the ${SITE.name} team.`,
  path: "/blog",
});

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.published.localeCompare(a.published));

  return (
    <div className="bg-[#05070d] text-white">
      <JsonLd data={itemListSchema(`${SITE.name} Blog`, sorted.map((p) => ({ name: p.title, href: postHref(p) })))} />
      <PageHero
        eyebrow="Knowledge & Field Notes"
        title="Cybersecurity, AI Search & Growth Insights"
        intro="Actionable technical guides, threat breakdowns, and brand scaling playbooks written by active practitioners."
        breadcrumbs={[{ name: "Blog", href: "/blog" }]}
        cta={false}
        image="/courses-hero.webp"
      />

      <section className="px-6 py-12 md:py-14 lg:py-20 md:px-12 bg-cyber-grid">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {sorted.map((p) => (
              <article
                key={p.slug}
                className="glass-card group flex flex-col justify-between rounded-2xl p-7 transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  {/* Category and date strip */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="rounded-full bg-cyan-500/10 border border-cyan-400/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-400">
                      {p.category === "cybersecurity" ? "Cybersecurity Career" : "Search & Growth"}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Calendar size={13} className="text-cyan-400" />
                      <time dateTime={p.published}>{p.published}</time>
                    </div>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    <Link href={postHref(p)} className="hover:underline underline-offset-4">
                      {p.title}
                    </Link>
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-gray-300 line-clamp-3">
                    {p.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-white/5 pt-5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-gray-400">
                    <User size={13} className="text-cyan-400" />
                    <span>{p.author || "NoaSec Team"}</span>
                  </div>

                  <Link
                    href={postHref(p)}
                    className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-cyan-400 group-hover:text-cyan-300 transition-colors"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
