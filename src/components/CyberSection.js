"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Award, ArrowRight } from "lucide-react";

const benefits = [
  {
    title: "Find Threats Bypassing Automation",
    desc: "Uncover sophisticated living-off-the-land attacks and zero-day techniques that traditional signature-based EDR/SIEM tools miss.",
  },
  {
    title: "Drastically Reduce Dwell Time",
    desc: "Shrink the window of opportunity for persistent adversaries from months down to hours through continuous proactive hypothesis testing.",
  },
  {
    title: "Continuously Strengthen SIEM Rules",
    desc: "Feed hunt discoveries directly back into your SOC detection engineering pipeline, creating robust detection alarms against emerging TTPs.",
  },
  {
    title: "Full Alignment with MITRE ATT&CK",
    desc: "Benchmark and measure your organization's detection coverage against empirical, real-world adversary tactics and techniques.",
  },
];

const certs = [
  {
    label: "Certified SOC Analyst (NCSA)",
    code: "NCSA-SOC",
    desc: "Advanced security event analysis, SIEM engineering, and 24/7 incident response operations.",
    href: "/courses/certified-soc-analyst",
  },
  {
    label: "Certified Cybersecurity Professional",
    code: "NCCP",
    desc: "Foundational-to-advanced dual offensive pentesting and defensive infrastructure security.",
    href: "/courses/certified-cybersecurity-professional",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

export default function CyberSection() {
  return (
    <div className="bg-[#05070d] text-white border-t border-white/5 py-14 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* VALUE PROPOSITION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center mb-24">
          {/* Globe Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-[480px] aspect-square rounded-2xl overflow-hidden border border-white/10 bg-[#091222]/80 backdrop-blur-xl p-2 shadow-2xl">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/globe.webp"
                  alt="Global network threat map"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/80 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-lg bg-[#070d18]/90 border border-white/10 px-3.5 py-2 backdrop-blur-md">
                <span className="text-xs font-mono text-cyan-300">THREAT MATRIX: GLOBAL</span>
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
              <span>Adversary Defense</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
              Proactive Threat <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Hunting Benefits
              </span>
            </h2>

            <ul className="space-y-6">
              {benefits.map((b, i) => (
                <motion.li
                  key={b.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeUp}
                  className="glass-card p-5 flex items-start gap-4"
                >
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base mb-1">{b.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{b.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* ACADEMY SECTION */}
        <section className="border-t border-white/10 pt-12 md:pt-14 lg:pt-20">
          <div className="text-center mb-8 lg:mb-12 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
              <Award size={14} className="text-cyan-400" />
              <span>Upskill Your Threat Hunters</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">
              NoaSec Training &amp; Certifications
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Transform junior staff into offensive &amp; defensive cybersecurity specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {certs.map((c, i) => (
              <motion.div
                key={c.code}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
              >
                <Link
                  href={c.href}
                  className="glass-card p-7 block group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase">
                      {c.code}
                    </span>
                    <ArrowRight size={16} className="text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {c.label}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {c.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}