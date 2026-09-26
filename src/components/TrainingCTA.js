"use client";

import Link from "next/link";
import { GraduationCap, ArrowRight, ShieldCheck } from "lucide-react";

export default function TrainingCTA() {
  return (
    <section className="bg-[#05070d] px-6 md:px-12 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-[#0c1c38] via-[#081224] to-[#05070d] p-10 md:p-16 shadow-[0_0_50px_rgba(14,165,233,0.15)]">
          {/* AMBIENT GLOW */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full" />
          
          {/* RIGHT ICON (BACKGROUND) */}
          <div className="absolute right-8 bottom-[-20px] opacity-10 pointer-events-none text-cyan-300">
            <GraduationCap size={240} strokeWidth={1} />
          </div>

          {/* CONTENT */}
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-6">
              <ShieldCheck size={14} className="text-cyan-400" />
              <span>Upskill Your Defensive Engineering Team</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Strengthen Your Internal Defenses
            </h2>

            <p className="text-gray-300 mt-6 text-sm md:text-base leading-relaxed">
              Don&apos;t just remediate bugs after the fact — empower your engineers to write secure software by design. Our industrial training tracks including Cyber Defender (NCD) and NCCP offer hands-on secure development and infrastructure defense labs.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link
                href="/courses/noasec-cyber-defender"
                className="btn-primary"
              >
                Explore NCD Defender Track <ArrowRight size={15} />
              </Link>

              <Link
                href="/courses/certified-cybersecurity-professional"
                className="btn-secondary"
              >
                NCCP Professional Modules
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}