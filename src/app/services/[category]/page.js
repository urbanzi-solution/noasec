import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, getCategory, getServicesByCategory, serviceHref, categoryHref } from "@/data/services";
import { categoryImages } from "@/data/content";
import { buildMetadata } from "@/lib/seo";
import { itemListSchema, serviceSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { ArrowRight, Layers } from "lucide-react";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const c = getCategory(category);
  if (!c) return {};
  return buildMetadata({
    title: c.title,
    description: `${c.short} ${c.intro}`.slice(0, 160),
    path: categoryHref(c),
    keywords: c.keywords
  });
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const c = getCategory(category);
  if (!c) notFound();
  const list = getServicesByCategory(c.slug, true);
  const faqs = list.flatMap((s) => s.faqs || []).slice(0, 6);

  return (
    <div className="bg-[#05070d] text-white">
      <JsonLd
        data={[
          serviceSchema({ name: c.title, description: c.intro, href: categoryHref(c), category: c.name }),
          itemListSchema(c.title, list.filter((s) => !s.draft).map((s) => ({ name: s.name, href: serviceHref(s) }))),
        ]}
      />
      <PageHero
        eyebrow={c.name}
        title={c.title}
        intro={c.intro}
        breadcrumbs={[{ name: "Services", href: "/services" }, { name: c.name, href: categoryHref(c) }]}
        image={c.slug === "cybersecurity" ? "/shield-hero.webp" : (categoryImages[c.slug]?.hero || "/shield-hero.webp")}
      />

      {/* Services List Section */}
      <section aria-labelledby="list-h" className="px-6 py-12 md:py-14 lg:py-20 md:px-12 border-b border-white/5 bg-cyber-grid">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-2">
                <Layers size={13} className="text-cyan-400" />
                <span>Specialized Capabilities</span>
              </div>
              <h2 id="list-h" className="text-3xl sm:text-4xl font-extrabold text-white">
                Available {c.name} Solutions
              </h2>
            </div>
            <span className="text-xs font-mono text-cyan-400">
              {list.length} Specialized Deliverables
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((s) => (
              <ServiceCard
                key={s.slug}
                title={s.name}
                text={s.short}
                href={serviceHref(s)}
                badge={c.name}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQ faqs={faqs} title={`${c.name} Frequently Asked Questions`} eyebrow="Clarifications & Insights" />

      {/* Cross-links to other categories */}
      <section aria-labelledby="other-h" className="px-6 py-10 md:py-12 lg:py-16 md:px-12 border-t border-white/5 bg-[#070b14]">
        <div className="mx-auto max-w-6xl text-center">
          <h2 id="other-h" className="text-xl sm:text-2xl font-bold text-white mb-2">
            Explore Other Specialized Divisions
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto mb-6">
            We operate across full cybersecurity operations, brand identity design, custom engineering, and search optimization.
          </p>
          <ul className="flex flex-wrap justify-center gap-3">
            {categories.filter((o) => o.slug !== c.slug).map((o) => (
              <li key={o.slug}>
                <Link
                  href={categoryHref(o)}
                  className="btn-secondary text-xs uppercase tracking-wider font-semibold py-2.5 px-4"
                >
                  <span>{o.name}</span>
                  <ArrowRight size={13} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA
        title={`Let's discuss your ${c.name.toLowerCase()} goals`}
        text={`Schedule a free discovery session with our senior engineers and domain specialists to discuss your upcoming project or security audit.`}
      />
    </div>
  );
}
