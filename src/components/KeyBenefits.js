"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, FileCheck, Activity } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: "easeOut" },
  }),
};

const relatedServices = [
  { tag: "ASSESSMENT", title: "Vulnerability Assessment", href: "/services/vulnerability-assessment-services" },
  { tag: "HARDENING", title: "Server & Firewall Hardening", href: "/services/server-hardening" },
  { tag: "24/7 DEFENSE", title: "Managed SOC Operations", href: "/services/managed-soc" },
  { tag: "TRAINING", title: "NCD Defender Training", href: "/courses/noasec-cyber-defender" },
];

export default function KeyBenefits() {
  return (
    <div className="bg-[#05070d] text-white border-t border-white/5">
      {/* ── KEY BENEFITS ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-14 md:py-16 lg:py-24">
        <div className="text-center mb-10 lg:mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
            <span>Enterprise Value</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Key Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Benefits</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm md:text-base">
            Tangible outcomes delivered to your executive board and IT leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Left — hero card (6 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="md:col-span-6 relative min-h-[380px] rounded-2xl border border-cyan-500/30 overflow-hidden flex flex-col justify-end p-8 bg-gradient-to-br from-[#0c1f3d] to-[#070e1c] group shadow-[0_0_40px_rgba(14,165,233,0.12)]"
          >
            <div className="absolute inset-0">
              <Image
                src="/padlock.webp"
                alt="Security padlock"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-[#05070d]/80 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 mb-4">
                <ShieldCheck size={20} />
              </div>
              <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
                01. ELITE SECURITY POSTURE
              </p>
              <h3 className="text-2xl font-bold text-white mb-3">Posture Elevation</h3>
              <p className="text-sm text-gray-300 leading-relaxed max-w-md">
                Systematically harden your network infrastructure against evolving global threats through data-driven and verified adversary simulations.
              </p>
            </div>
          </motion.div>

          {/* Right — two stacked cards (6 cols) */}
          <div className="md:col-span-6 flex flex-col gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="glass-card p-8 flex-1 flex flex-col justify-center"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <FileCheck size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                    02. AUDIT READINESS
                  </p>
                  <h3 className="text-xl font-bold text-white">Regulatory Compliance</h3>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed pl-11">
                Meet PCI-DSS, ISO 27001, HIPAA, and SOC2 pentesting requirements with verified proof-of-concept evidence that satisfies external auditors.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
              className="glass-card p-8 flex-1 flex flex-col justify-center"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Activity size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                    03. TELEMETRY VALIDATION
                  </p>
                  <h3 className="text-xl font-bold text-white">Detection &amp; Alert Auditing</h3>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed pl-11">
                Uncover blind spots in your SIEM/SOC alerting rules during active attack simulations, validating that real breaches trigger timely alarms.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ── RELATED SERVICES ── */}
        <div className="border-t border-white/10 mt-12 lg:mt-20 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white">Related Ecosystem Services</h3>
              <p className="text-gray-400 text-sm mt-1">Strengthen adjacent layers of your security architecture.</p>
            </div>
            <Link
              href="/services"
              className="text-xs font-semibold tracking-wider uppercase text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
            >
              <span>Explore All Services</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedServices.map((s, i) => (
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
                  className="glass-card p-5 block group h-full"
                >
                  <p className="text-[10px] font-mono font-semibold tracking-wider text-cyan-400 uppercase mb-2">
                    {s.tag}
                  </p>
                  <p className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {s.title}
                  </p>
                  <div className="mt-4 flex items-center text-xs text-gray-500 group-hover:text-cyan-400 transition-colors">
                    <span>Learn more</span>
                    <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── CTA BANNER ── */}
        <div className="mt-12 lg:mt-20">
          <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-[#0c1c38] via-[#081224] to-[#05070d] p-10 md:p-14 text-center relative overflow-hidden shadow-[0_0_50px_rgba(14,165,233,0.12)]">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Ready to Validate Your Network Defenses?
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
                Our certified penetration testers are standing by to design a customized scoped engagement for your enterprise environment.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Request Scoping Call <ArrowRight size={15} />
                </Link>
                <Link href="/services" className="btn-secondary">
                  View Service Catalog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}