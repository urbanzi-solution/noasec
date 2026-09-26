import Link from "next/link";
import { SITE } from "@/data/site";
import { categories, getServicesByCategory, serviceHref, categoryHref, liveServices } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { itemListSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import ServiceHero from "@/components/ServiceHero";
import ServiceSelector from "@/components/ServiceSelector";
import ServiceCard from "@/components/ServiceCard";
import { ArrowRight } from "lucide-react";

export const metadata = buildMetadata({
  title: "Cybersecurity, Web, Branding & Marketing Services",
  description: `Penetration testing, managed SOC, forensics, cloud security, branding, web & app development, UI/UX, SEO, GEO and ads — all from ${SITE.name}, Kottayam.`,
  path: "/services",
  keywords: categories.flatMap((c) => c.keywords),
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={itemListSchema(`${SITE.name} Services`, liveServices.map((s) => ({ name: s.name, href: serviceHref(s) })))} />
      <ServiceHero />

      {/* Sticky jump links navigation */}
      <nav aria-label="Service categories" className="sticky top-[72px] z-30 border-b border-white/10 bg-[#05070d]/90 px-6 backdrop-blur-xl md:px-12">
        <ul className="mx-auto flex max-w-7xl gap-3 overflow-x-auto py-3 text-xs scrollbar-none">
          {categories.map((c) => (
            <li key={c.slug}>
              <a
                href={`#${c.slug}`}
                className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-medium text-gray-300 transition hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-white"
              >
                {c.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Category Sections */}
      {categories.map((c, i) => (
        <section
          key={c.slug}
          id={c.slug}
          aria-labelledby={`${c.slug}-h`}
          className={`px-6 py-20 md:px-12 scroll-mt-28 border-b border-white/5 ${
            i % 2 === 0 ? "bg-[#05070d]" : "bg-[#070b14]"
          }`}
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-2">
                  <span>Category Overview</span>
                </div>
                <h2 id={`${c.slug}-h`} className="text-3xl sm:text-4xl font-extrabold text-white">
                  {c.title}
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-gray-400 leading-relaxed">
                  {c.short}
                </p>
              </div>

              <Link
                href={categoryHref(c)}
                className="btn-ghost text-xs uppercase tracking-wider font-semibold shrink-0"
              >
                <span>{c.name} Hub</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {getServicesByCategory(c.slug, true).map((s) => (
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
      ))}

      <ServiceSelector />
    </>
  );
}
