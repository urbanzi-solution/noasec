import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import * as Lucide from "lucide-react";
import { SITE } from "@/data/site";
import { templatedServices, getService, getCategory, getRelatedServices, serviceHref, categoryHref } from "@/data/services";
import { getServiceContent, categoryImages } from "@/data/content";
import { articles as posts } from "@/data/posts";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";

// Layout mirrors the cybersecurity service pages (e.g. Managed SOC):
// Hero → Overview → What We Deliver → Key Benefits → Process → Tools / Who it's for → FAQ → Related → CTA.
// Page copy lives in src/data/content/*.js.

export const dynamicParams = false;

export function generateStaticParams() {
  return templatedServices.map((s) => ({ category: s.category, service: s.slug }));
}

export async function generateMetadata({ params }) {
  const { category, service } = await params;
  const s = getService(category, service);
  if (!s) return {};
  const name = s.shortName || s.name;
  return buildMetadata({
    title: `${s.name} Services in Kerala`,
    description: `${s.short} ${s.description}`.slice(0, 158),
    path: serviceHref(s),
    image: getServiceContent(s.slug)?.image || categoryImages[s.category]?.hero,
    keywords: [s.name, `${name} agency`, `${name} services Kerala`, `${name} company Kottayam`, `${name} company India`],
  });
}

const Icon = ({ name, ...props }) => {
  const Cmp = Lucide[name] || Lucide.CheckCircle2;
  return <Cmp {...props} />;
};

const Eyebrow = ({ children }) => (
  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">{children}</p>
);

export default async function ServicePage({ params }) {
  const { category, service } = await params;
  const s = getService(category, service);
  if (!s) notFound();
  const c = getCategory(s.category);
  const x = getServiceContent(s.slug) || {};
  const img = { ...categoryImages[s.category], ...(x.image ? { hero: x.image } : {}) };
  const name = s.shortName || s.name;
  const related = getRelatedServices(s);
  const relatedPosts = posts.filter((p) => p.relatedService === s.slug || p.category === s.category).slice(0, 2);
  const faqs = [...(s.faqs || []), ...(x.faqs || [])];

  return (
    <div className="bg-[#05070d] text-white">
      <JsonLd data={serviceSchema({ name: s.name, description: s.description, href: serviceHref(s), category: c.name })} />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#050b14] px-6 pb-20 pt-28 md:px-12 md:pt-32 lg:px-20">
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-full w-[45%] bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.12),transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl">
          <Breadcrumbs
            items={[
              { name: "Services", href: "/services" },
              { name: c.name, href: categoryHref(c) },
              { name, href: serviceHref(s) },
            ]}
          />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-block rounded-full border border-blue-500/40 px-3 py-1 text-[10px] tracking-[0.2em] text-blue-400 md:text-xs">
                {c.name.toUpperCase()} · KOTTAYAM, KERALA
              </div>
              <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                {s.name}
                <br />
                <span className="text-blue-500">Services</span>
              </h1>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-400 md:text-base">{s.description}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-500/20 transition hover:bg-blue-500"
                >
                  REQUEST A QUOTE <span aria-hidden="true">→</span>
                </Link>
                <a
                  href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hi, I'd like a consultation for ${s.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-gray-300 transition hover:border-white hover:text-white"
                >
                  FREE CONSULTATION
                </a>
              </div>

              {x.stats && (
                <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 text-xs text-gray-500 sm:text-sm">
                  {x.stats.map((st) => (
                    <div key={st.l}>
                      <dt className="sr-only">{st.l}</dt>
                      <dd className="font-bold text-white">{st.v}</dd>
                      <dd className="mt-1 uppercase leading-snug">{st.l}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.2)]">
                <Image src={img.hero} alt={`${s.name} by ${SITE.name}`} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-blue-500/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <Eyebrow>Overview</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight">What is {name}?</h2>
          <p className="mt-4 text-sm text-gray-400">{s.short}</p>
        </div>
        <div className="space-y-5 text-sm leading-relaxed text-gray-400 md:text-base">
          {(x.overview || [s.description]).map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </section>

      {/* ── WHAT WE DELIVER ── */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <Eyebrow>Scope of Work</Eyebrow>
        <h2 className="mb-10 text-3xl font-bold">What We Deliver</h2>
        {x.deliverables ? (
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-white/5 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
            {x.deliverables.map((d) => (
              <div key={d.t} className="group bg-[#0b0f17] px-7 py-8 transition-colors duration-300 hover:bg-[#0f1520]">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-md border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-colors duration-300 group-hover:bg-blue-500/20">
                  <Icon name={d.icon} size={22} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-[16px] font-bold">{d.t}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{d.d}</p>
              </div>
            ))}
          </div>
        ) : (
          <ul className="grid gap-3 sm:grid-cols-2">
            {s.features.map((f) => (
              <li key={f} className="flex gap-3 text-gray-300"><span className="text-blue-400">✓</span>{f}</li>
            ))}
          </ul>
        )}
      </section>

      {/* ── KEY BENEFITS ── */}
      {x.benefits && (
        <section className="bg-[#0a0d14]">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2">
            <div className="relative flex items-center justify-center">
              <div aria-hidden="true" className="absolute inset-0 rounded-full bg-blue-500/5 blur-3xl" />
              <div className="relative aspect-square w-full max-w-[440px] overflow-hidden rounded-lg border border-white/5 bg-[#111]">
                <Image src={img.benefits} alt={`Benefits of ${name}`} fill sizes="(max-width: 768px) 100vw, 440px" className="object-cover" />
              </div>
            </div>
            <div>
              <Eyebrow>Value Proposition</Eyebrow>
              <h2 className="mb-10 text-3xl font-bold leading-tight md:text-4xl">Key Benefits</h2>
              <ul className="space-y-7">
                {x.benefits.map((b) => (
                  <li key={b.t} className="flex gap-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-blue-500">
                      <Lucide.Check className="h-3.5 w-3.5 text-blue-400" strokeWidth={3} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="mb-1 text-[15px] font-semibold">{b.t}</h3>
                      <p className="text-sm leading-relaxed text-gray-400">{b.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* ── PROCESS ── */}
      {x.process && (
        <section className="mx-auto max-w-6xl px-6 py-20">
          <Eyebrow>How We Work</Eyebrow>
          <h2 className="mb-10 text-3xl font-bold">Our {name} Process</h2>
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {x.process.map((p, i) => (
              <li key={p.t} className="relative rounded-lg border border-white/5 bg-[#0b0f17] p-6 transition hover:border-blue-500/30">
                <span className="text-3xl font-bold text-blue-500/40">0{i + 1}</span>
                <h3 className="mt-3 font-semibold">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{p.d}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* ── TOOLS & WHO IT'S FOR ── */}
      {(x.tools || x.idealFor) && (
        <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-2">
          {x.tools && (
            <div className="rounded-lg border border-white/5 bg-[#0b0f17] p-7">
              <h2 className="mb-5 flex items-center gap-2 text-xl font-bold">
                <Lucide.Wrench size={18} className="text-blue-400" aria-hidden="true" /> Tools & Platforms
              </h2>
              <ul className="flex flex-wrap gap-2">
                {x.tools.map((t) => (
                  <li key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300">{t}</li>
                ))}
              </ul>
            </div>
          )}
          {x.idealFor && (
            <div className="rounded-lg border border-white/5 bg-[#0b0f17] p-7">
              <h2 className="mb-5 flex items-center gap-2 text-xl font-bold">
                <Lucide.Users size={18} className="text-blue-400" aria-hidden="true" /> Who It&apos;s For
              </h2>
              <ul className="space-y-2.5">
                {x.idealFor.map((t) => (
                  <li key={t} className="flex gap-2 text-sm text-gray-300">
                    <span aria-hidden="true" className="text-blue-400">→</span>{t}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      <FAQ faqs={faqs} title={`${name} FAQs`} eyebrow="Common Questions" />

      {/* ── RELATED SERVICES + FURTHER READING + CTA ── */}
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-4">
        {related.length > 0 && (
          <section className="mb-16">
            <h2 className="mb-6 text-lg font-bold">Related Services</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={serviceHref(r)}
                  className="group flex min-h-[100px] flex-col justify-between rounded-md border border-white/5 bg-[#161616] px-5 py-5 transition-all duration-300 hover:border-blue-500/30 hover:bg-[#1a1a1a]"
                >
                  <span className="mb-4 text-[14px] font-semibold">{r.name}</span>
                  <span aria-hidden="true" className="text-lg text-gray-500 transition-colors group-hover:text-blue-400">→</span>
                </Link>
              ))}
            </div>
            <div className="mt-4 flex justify-end">
              <Link href={categoryHref(c)} className="group flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300">
                View all {c.name} services <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </section>
        )}

        {relatedPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="mb-4 text-lg font-bold">Further Reading</h2>
            <ul className="space-y-2">
              {relatedPosts.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="text-sm text-blue-400 hover:text-blue-300">{p.title} →</Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="flex flex-col items-center justify-between gap-6 rounded-lg bg-blue-600 px-8 py-10 text-center sm:flex-row sm:px-10 sm:text-left">
          <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">Ready to grow with {name}?</h2>
          <Link
            href="/contact"
            className="shrink-0 rounded-sm bg-white px-6 py-3 text-sm font-bold uppercase tracking-widest text-blue-700 transition-colors hover:bg-gray-100"
          >
            Request Quote
          </Link>
        </section>
      </div>
    </div>
  );
}
