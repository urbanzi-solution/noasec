import JsonLd from "./JsonLd";
import { faqSchema } from "@/lib/schema";
import { HelpCircle, ChevronDown } from "lucide-react";

// Native <details> accordion with glassmorphism: zero JS hydration penalty, SEO friendly (crawlers index answers).
// Emits FAQPage schema (helps AEO / GEO).
export default function FAQ({ faqs, title = "Frequently Asked Questions", eyebrow = "Common Questions" }) {
  if (!faqs?.length) return null;

  return (
    <section aria-labelledby="faq-heading" className="relative px-6 py-12 md:py-14 lg:py-20 md:px-12">
      <JsonLd data={faqSchema(faqs)} />

      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-3">
            <HelpCircle size={13} className="text-cyan-400" />
            <span>{eyebrow}</span>
          </div>
          <h2 id="faq-heading" className="text-3xl font-extrabold text-white md:text-4xl">
            {title}
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Clear, transparent answers to help you make informed security and digital growth decisions.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="glass-card group rounded-2xl border border-white/10 p-5 transition-all duration-200 open:border-cyan-500/40 open:bg-[#0b1324]/90"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-white select-none">
                <span className="text-base font-semibold group-hover:text-cyan-300 transition-colors">
                  {f.q}
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-cyan-400 transition-all duration-200 group-open:rotate-180 group-open:bg-cyan-500/20 group-open:border-cyan-400/40">
                  <ChevronDown size={16} />
                </span>
              </summary>
              <div className="mt-3.5 border-t border-white/10 pt-3.5 text-sm leading-relaxed text-gray-300">
                <p>{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
