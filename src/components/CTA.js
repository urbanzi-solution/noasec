import Link from "next/link";
import { SITE } from "@/data/site";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";

export default function CTA({
  title = "Ready to Protect & Grow Your Organization?",
  text = "Discuss your requirements with our cybersecurity engineers and digital experts. We reply within 1 business day with a concrete roadmap and proposal.",
  primaryText = "Get a Free Proposal",
  primaryHref = "/contact",
}) {
  return (
    <section className="relative px-6 py-16 md:px-12 overflow-hidden">
      <div className="mx-auto max-w-6xl relative rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-[#0c182c] via-[#091222] to-[#060a14] p-8 md:p-14 shadow-2xl shadow-cyan-500/10 overflow-hidden">
        {/* Glow orb in background */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-[80px]" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-blue-600/15 blur-[80px]" />

        <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
              <ShieldCheck size={14} className="text-cyan-400" />
              <span>Take The Next Step</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              {title}
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-300">
              {text}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href={primaryHref}
              className="btn-primary justify-center text-center whitespace-nowrap shadow-lg shadow-cyan-500/25"
            >
              {primaryText} <ArrowRight size={15} />
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="btn-secondary justify-center text-center whitespace-nowrap"
            >
              <Phone size={15} className="text-cyan-400" /> Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
