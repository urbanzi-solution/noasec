"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, ArrowRight, GraduationCap, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: "easeOut" },
  }),
};

const benefits = [
  {
    num: "01",
    title: "Surface Reduction",
    desc: "Dramatically decrease the number of potential entry points, unauthenticated protocols, and unnecessary daemons available to external adversaries.",
  },
  {
    num: "02",
    title: "Total Compliance",
    desc: "Seamlessly align your production infrastructure with ISO 27001, GDPR, HIPAA, and PCI-DSS requirements through verified baseline enforcement.",
  },
  {
    num: "03",
    title: "Exploit Prevention",
    desc: "Neutralize automated exploit chains and script-driven bots before they ever reach your core application logic or customer database.",
  },
];

export default function HardeningSection() {
  return (
    <div className="bg-[#05070d] text-white px-6 md:px-12 py-24 border-t border-white/5 space-y-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* ── THREE BENEFITS ── */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.num}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={fadeUp}
              className="glass-card p-7 flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-extrabold font-mono text-cyan-400/40 leading-none mb-4 block">
                  {b.num}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{b.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs text-cyan-400 font-mono">
                HARDENED BENCHMARK
              </div>
            </motion.div>
          ))}
        </section>

        {/* ── NCCP CERTIFICATION CARD ── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-[#0c1c38] via-[#081224] to-[#05070d] overflow-hidden shadow-[0_0_50px_rgba(14,165,233,0.12)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {/* Left — content (8 cols) */}
            <div className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-6">
                  <GraduationCap size={14} className="text-cyan-400" />
                  <span>Industrial Defense Certification</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
                  Certified Cybersecurity Professional (NCCP)
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
                  Empower your internal sysadmins and DevOps teams to maintain world-class hardening standards continuously. Our NCCP training provides hands-on cyber range labs focused on enterprise defense and CIS configuration baselines.
                </p>
              </div>

              <div>
                <Link
                  href="/courses/certified-cybersecurity-professional"
                  className="btn-primary"
                >
                  Explore NCCP Curriculum <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right — stat (4 cols) */}
            <div className="lg:col-span-4 p-8 md:p-12 flex flex-col items-center justify-center text-center relative bg-white/[0.02]">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                <ShieldCheck size={32} />
              </div>
              <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-mono leading-none">
                25+
              </p>
              <p className="text-xs font-mono tracking-widest text-gray-400 uppercase mt-2">
                Hands-on Hardening Labs
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}