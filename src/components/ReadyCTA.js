"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Phone } from "lucide-react";
import { SITE } from "@/data/site";

export default function ReadyCTA() {
  return (
    <section className="bg-[#05070d] text-white px-6 md:px-12 py-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-[#0c182c] via-[#091222] to-[#060a14] p-8 md:p-14 text-center relative overflow-hidden shadow-2xl">

        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/15 blur-[80px]" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-blue-600/15 blur-[80px]" />

        {/* Content */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
            <ShieldCheck size={14} className="text-cyan-400" />
            <span>Join The Vanguard</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Ready to Fortify Your Future?
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
            Whether you are an aspiring security specialist looking for frontline training, or an enterprise seeking comprehensive vulnerability assessments, NoaSec is your trusted partner in Kerala and worldwide.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3">
            <Link
              href="/courses"
              className="btn-primary"
            >
              Browse All Courses <ArrowRight size={15} />
            </Link>

            <Link
              href="/services"
              className="btn-secondary"
            >
              View Security Services
            </Link>

            <Link
              href="/contact"
              className="btn-ghost text-gray-300"
            >
              Contact Our Team
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}