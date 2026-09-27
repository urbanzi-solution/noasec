import Breadcrumbs from "./Breadcrumbs";
import { FileText, Calendar } from "lucide-react";

export default function LegalPage({ title, href, updated, sections }) {
  return (
    <div className="bg-[#05070d] text-white">
      <header className="px-6 pt-24 md:pt-28 lg:pt-32 pb-12 md:px-12 border-b border-white/5 bg-cyber-grid">
        <div className="mx-auto max-w-4xl">
          <Breadcrumbs items={[{ name: title, href }]} />
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
            <FileText size={13} className="text-cyan-400" />
            <span>Official Policy Document</span>
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            {title}
          </h1>
          <div className="mt-4 flex items-center gap-1.5 text-xs text-gray-400">
            <Calendar size={13} className="text-cyan-400" />
            <span>Last updated: <time dateTime={updated}>{updated}</time></span>
          </div>
        </div>
      </header>

      <article className="px-6 py-10 md:py-12 lg:py-16 md:px-12">
        <div className="mx-auto max-w-4xl glass-card rounded-3xl p-8 sm:p-12 border border-white/10">
          <div className="prose-lite space-y-8">
            {sections.map((s) => (
              <section key={s.h} className="border-b border-white/5 pb-8 last:border-b-0 last:pb-0">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {s.h}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                  {s.p}
                </p>
              </section>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
