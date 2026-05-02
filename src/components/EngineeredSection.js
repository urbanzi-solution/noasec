"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

const features = [
  {
    title: "Secure Infrastructure",
    desc: "Every server is deployed using encrypted images and secure boot sequences.",
  },
  {
    title: "Reduced Misconfiguration",
    desc: "Infrastructure as Code (IaC) ensures drift detection and configuration consistency.",
  },
  {
    title: "Proactive Maintenance",
    desc: "Predictive analysis identifies hardware failures before they impact your operations.",
  },
  {
    title: "Consistent Documentation",
    desc: "Detailed architectural logs and change management reports for every administrative action.",
  },
];

const relatedServices = [
  {
    title: "Security Audit",
    desc: "Deep scan of network vulnerabilities.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Cloud Infrastructure",
    desc: "AWS and Azure security orchestration.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    title: "Incident Response",
    desc: "Rapid breach containment protocols.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "Network Design",
    desc: "Secure segmented network architecture.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
];

export default function EngineeredSection() {
  return (
    <div className="bg-[#0a0a0a] text-white px-6 py-20 max-w-6xl mx-auto space-y-20">

      {/* ── ENGINEERED FOR RELIABILITY ── */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-base font-bold text-white mb-4">Engineered for Reliability</h2>
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Our administrative methodology removes the human-error factor from infrastructure
            management, replacing reactive fixes with proactive structural integrity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex gap-3"
            >
              <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border border-white/30 flex items-center justify-center">
                <svg className="w-3 h-3 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">{f.title}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-white/5" />

      {/* ── RELATED SERVICES ── */}
      <section>
        <h2 className="text-base font-bold text-white mb-6">Related Services</h2>

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
                href="#"
                className="group flex flex-col gap-3 px-5 py-5 rounded-sm border border-white/5 bg-[#111] hover:bg-[#161616] hover:border-white/10 transition-all duration-200 h-full"
              >
                <span className="text-gray-400 group-hover:text-white transition-colors duration-200">
                  {s.icon}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">{s.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all — bottom right */}
        <div className="flex justify-end mt-4">
          <Link
            href="#"
            className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white uppercase tracking-widest transition-colors duration-200 group"
          >
            <span>View All Services</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-white/5" />

      {/* ── CTA ── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-xl border border-white/5 bg-[#111] px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-8"
      >
        {/* Left */}
        <div className="max-w-lg">
          <p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-3">
            Get Started
          </p>
          <h2 className="text-2xl font-bold text-white mb-3 leading-tight">
            Ready to Harden Your Infrastructure?
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Our engineers will assess your current posture and deliver a tailored remediation
            roadmap — reducing attack surface from day one.
          </p>
        </div>

        {/* Right — buttons */}
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <Link
            href="contact"
            className="px-7 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-200 rounded-sm text-center"
          >
            Request a Consultation
          </Link>
          
        </div>
      </motion.section>
    </div>
  );
}