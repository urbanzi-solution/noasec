"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FlaskConical,
  Users2,
  TrendingUp,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Phone
} from "lucide-react";
import { SITE } from "@/data/site";

const reasons = [
  {
    icon: FlaskConical,
    title: "100% Hands-On Labs",
    desc: "Simulated adversary attack ranges, real malware sandboxes, and actual penetration testing targets rather than mere slide decks.",
  },
  {
    icon: Users2,
    title: "Practitioner-Led Instruction",
    desc: "Learn directly from active cybersecurity consultants, penetration testers, and SOC managers fighting threats daily.",
  },
  {
    icon: TrendingUp,
    title: "Clear Career Architecture",
    desc: "Structured progressions taking you systematically from non-technical novice up to enterprise-grade operational specialist.",
  },
  {
    icon: Briefcase,
    title: "Internships & Live Projects",
    desc: "Direct pipeline to industrial internships, real client audits, and portfolio-worthy case study accomplishments.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-[#05070d] text-white py-14 md:py-16 lg:py-24 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-3">
            <ShieldCheck size={14} className="text-cyan-400" />
            <span>The NoaSec Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Why Industry Leaders Choose NoaSec
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
            Bridging the gap between academic theory and high-stakes operational cybersecurity excellence.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-16">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="glass-card group flex flex-col justify-between p-7 rounded-2xl transition-all duration-300"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-6 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/40 transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5">
                    {r.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {r.desc}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-cyan-400/80 group-hover:text-cyan-300">
                  <CheckCircle2 size={13} className="text-cyan-400" />
                  <span>Verified Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Unified High-Converting CTA Box */}
        <div className="relative rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-[#0a1628] via-[#091526] to-[#070f1e] p-8 md:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-2xl overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Ready to Accelerate Your Career or Fortify Your Infrastructure?
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Connect directly with our team in Kottayam, Kerala for practical course syllabus details or an enterprise penetration testing proposal.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto relative z-10">
            <Link
              href="/courses"
              className="btn-primary justify-center text-center whitespace-nowrap"
            >
              Start Learning Today <ArrowRight size={15} />
            </Link>
            <Link
              href="/contact"
              className="btn-secondary justify-center text-center whitespace-nowrap"
            >
              Get Security Assessment
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}