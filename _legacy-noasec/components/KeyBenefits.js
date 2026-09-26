"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: "easeOut" },
  }),
};

const relatedServices = [
  { tag: "SERVICE", title: "Vulnerability Assessment", href: "/services/vulnerability-assessment-services" },
  { tag: "SERVICE", title: "Server Hardening", href: "/services/server-hardening" },
  { tag: "MANAGED", title: "SOC Operations", href: "/services/managed-soc" },
  { tag: "EDUCATION", title: "NCD/NCCP Training", href: "/courses/certified-cybersecurity-professional" },
];

export default function KeyBenefits() {
  return (
    <div className="bg-[#0a0a0a] text-white">

      {/* ── KEY BENEFITS ── */}
      <section className="max-w-6xl mx-auto px-6 py-20 -mt-20">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-blue-500 uppercase mb-3">
            Strategic Value
          </p>
          <h2 className="text-4xl font-bold text-white">Key Benefits</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-xl overflow-hidden border border-white/5">

          {/* Left — hero card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="relative min-h-[360px] flex flex-col justify-end p-8 bg-[#0d1a3a] overflow-hidden"
          >
            <div className="absolute inset-0">
              <Image
                src="/padlock.png"
                alt="Security padlock"
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d1f] via-[#0a1a3a]/70 to-transparent" />
            </div>
            <div className="relative z-10">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-blue-400 uppercase mb-2">
                01. Elite Posture
              </p>
              <h3 className="text-2xl font-bold text-white mb-3">Posture Improvement</h3>
              <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
                Systematically harden your network infrastructure against evolving global
                threats through data-driven remediation.
              </p>
            </div>
          </motion.div>

          {/* Right — two stacked cards */}
          <div className="flex flex-col gap-px">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="flex-1 bg-[#111111] p-8 hover:bg-[#161616] transition-colors duration-300"
            >
              <p className="text-[10px] font-semibold tracking-[0.2em] text-blue-400 uppercase mb-3">
                02. Regulatory
              </p>
              <h3 className="text-xl font-bold text-white mb-3">Regulatory Compliance</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Meet PCI-DSS, HIPAA, and SOC2 requirements with validated pentesting evidence.
              </p>
            </motion.div>

            <div className="h-px bg-white/5" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
              className="flex-1 bg-[#111111] p-8 hover:bg-[#161616] transition-colors duration-300"
            >
              <p className="text-[10px] font-semibold tracking-[0.2em] text-blue-400 uppercase mb-3">
                03. Monitoring
              </p>
              <h3 className="text-xl font-bold text-white mb-3">Incident Detection</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Identify blind spots in your SIEM/SOC alerting during active attack simulations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-white/5" />
      </div>

      {/* ── RELATED SERVICES ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Header — title only */}
        <div className="mb-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-blue-500 uppercase mb-2">
            Ecosystem
          </p>
          <h2 className="text-2xl font-bold text-white">Related Services</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
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
                className="group flex flex-col px-4 py-5 rounded-md bg-[#111111] border border-white/5 hover:border-blue-500/30 hover:bg-[#161616] transition-all duration-300 h-full"
              >
                <p className="text-[9px] font-semibold tracking-[0.18em] text-gray-500 uppercase mb-2 group-hover:text-blue-500 transition-colors">
                  {s.tag}
                </p>
                <p className="text-sm font-semibold text-white leading-snug">{s.title}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View Services Hub — bottom right */}
        <div className="flex justify-end mt-4">
          <Link
            href="/services"
            className="flex items-center gap-1.5 text-xs font-semibold tracking-[0.15em] text-blue-400 hover:text-blue-300 uppercase transition-colors duration-200 group"
          >
            <span>View Services Hub</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-white/5 bg-[#0f0f0f] px-8 py-16 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Secure Your Infrastructure</h2>
          <p className="text-sm text-gray-400 max-w-lg leading-relaxed mb-8">
            Ready to validate your security defenses? Our engineers are standing by to design a
            customized penetration test for your environment.
          </p>
          <Link
            href="#"
            className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-200 rounded-sm"
          >
            Request a Consultation
          </Link>
        </motion.div>
      </section>
    </div>
  );
}