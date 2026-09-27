import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getPost } from "@/data/posts";
import { services, serviceHref } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { articleSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { Calendar, User, Clock, ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  const meta = buildMetadata({ title: p.title, description: p.description, path: `/blog/${p.slug}`, type: "article", absoluteTitle: true });
  meta.openGraph.publishedTime = p.published;
  meta.openGraph.modifiedTime = p.updated || p.published;
  return meta;
}

const fmt = (d) => new Date(d).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });

export default async function PostPage({ params }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const service = services.find((s) => s.slug === p.relatedService);

  return (
    <div className="bg-[#05070d] text-white">
      <JsonLd data={articleSchema(p)} />

      {/* Article Header */}
      <header className="relative px-6 pt-24 md:pt-28 lg:pt-32 pb-12 md:px-12 border-b border-white/5 bg-cyber-grid">
        <div className="mx-auto max-w-4xl">
          <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: p.title, href: `/blog/${p.slug}` }]} />

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
            <span>Engineering Insights</span>
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white">
            {p.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-gray-400 border-t border-white/10 pt-4">
            <span className="flex items-center gap-1.5">
              <User size={14} className="text-cyan-400" />
              <span>{p.author}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-cyan-400" />
              <time dateTime={p.published}>{fmt(p.published)}</time>
            </span>
            {p.updated && p.updated !== p.published && (
              <span className="text-cyan-300">
                · Updated <time dateTime={p.updated}>{fmt(p.updated)}</time>
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Article Body */}
      <article className="px-6 py-10 md:py-12 lg:py-16 md:px-12">
        <div className="mx-auto max-w-4xl">
          {/* TL;DR — answer-first block for snippets & AI citations */}
          <div className="glass-card rounded-2xl border-l-4 border-l-cyan-400 p-6 md:p-8">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2">
              Executive Summary / TL;DR
            </p>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-medium">
              {p.summary}
            </p>
          </div>

          {/* Table of contents */}
          <nav aria-label="Table of contents" className="my-10 glass-card rounded-2xl p-6">
            <p className="text-sm font-bold text-white flex items-center gap-2 mb-3">
              <BookOpen size={16} className="text-cyan-400" />
              <span>Table of Contents</span>
            </p>
            <ol className="list-decimal space-y-2 pl-5 text-sm text-cyan-400">
              {p.sections.map((s, i) => (
                <li key={s.h}>
                  <a href={`#s${i}`} className="hover:text-cyan-300 hover:underline transition-colors">
                    {s.h}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Content sections */}
          <div className="prose-lite space-y-10">
            {p.sections.map((s, i) => (
              <section key={s.h} id={`s${i}`} className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {s.h}
                </h2>
                <div className="space-y-4 text-sm sm:text-base leading-relaxed text-gray-300">
                  {s.p.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Related Service Cross-sell */}
          {service && (
            <div className="mt-12 glass-card rounded-2xl p-6 border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Relevant Capability</p>
                <h4 className="text-lg font-bold text-white mt-1">
                  Need professional assistance with {service.name}?
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  Explore how our team provides end-to-end execution.
                </p>
              </div>
              <Link href={serviceHref(service)} className="btn-primary w-full text-center text-xs sm:w-auto sm:shrink-0 sm:whitespace-nowrap">
                View {service.name} <ArrowRight size={13} />
              </Link>
            </div>
          )}
        </div>
      </article>

      <FAQ faqs={p.faqs} eyebrow="Article FAQ" />
      <CTA />
    </div>
  );
}
