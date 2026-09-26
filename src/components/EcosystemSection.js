"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, GraduationCap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" },
  }),
};

const ecosystemServices = [
  { title: "Web App Penetration Testing", href: "/services/web-application-penetration-testing" },
  { title: "Network Penetration Testing", href: "/services/network-penetration-testing" },
  { title: "Server & Firewall Hardening", href: "/services/server-hardening" },
  { title: "Cloud Security Solutions", href: "/services/cloud-security-solutions" },
];

const trainings = [
  {
    tag: "NCD DEFENDER",
    title: "NoaSec Cyber Defender",
    desc: "Master-level defensive engineering and SOC operations tactics for internal defense teams.",
    href: "/courses/noasec-cyber-defender",
  },
  {
    tag: "NCCP CERTIFIED",
    title: "Certified Cybersecurity Professional",
    desc: "Comprehensive dual-track offensive & defensive training for career-ready practitioners.",
    href: "/courses/certified-cybersecurity-professional",
  },
];

export default function EcosystemSection() {
  return (
    <div className="bg-[#05070d] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 space-y-20">
        {/* ── TWO COLUMN SECTION ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT — Ecosystem Services */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck size={18} className="text-cyan-400" />
              <h3 className="text-lg font-bold text-white tracking-wide">Ecosystem Security Services</h3>
            </div>
            <div className="h-px bg-white/10 mb-6" />

            <div className="flex flex-col gap-3">
              {ecosystemServices.map((s, i) => (
                <motion.div
                  key={s.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <Link
                    href={s.href}
                    className="glass-card px-5 py-4 flex items-center justify-between group"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">{s.title}</span>
                    <ArrowRight size={16} className="text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — Professional Training */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap size={18} className="text-cyan-400" />
              <h3 className="text-lg font-bold text-white tracking-wide">Professional Skill Pipelines</h3>
            </div>
            <div className="h-px bg-white/10 mb-6" />

            <div className="flex flex-col gap-3">
              {trainings.map((t, i) => (
                <motion.div
                  key={t.tag}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <div className="glass-card p-5 group flex flex-col justify-between">
                    <div>
                      <p className="text-[10px] font-mono font-bold tracking-wider text-cyan-400 uppercase mb-1">
                        {t.tag}
                      </p>
                      <h4 className="text-base font-bold text-white mb-1.5">{t.title}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed mb-4">{t.desc}</p>
                    </div>
                    <Link
                      href={t.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 uppercase tracking-wider transition-colors group/link"
                    >
                      <span>Explore Curriculum</span>
                      <ArrowRight size={13} className="transition-transform duration-200 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-[#0c1c38] via-[#081224] to-[#05070d] p-10 md:p-14 text-center relative overflow-hidden shadow-[0_0_50px_rgba(14,165,233,0.12)]"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Ready to Fortify Your Perimeter?
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-8 max-w-lg mx-auto leading-relaxed">
              Schedule a technical scoping consultation with our senior security consultants to evaluate your risk exposure.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Request Scoping Call <ArrowRight size={15} />
              </Link>
              <Link
                href="/services"
                className="btn-secondary"
              >
                Explore Services Catalog
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}