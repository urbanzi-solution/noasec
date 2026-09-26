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

const pathway = [
  {
    step: "01. Prerequisite",
    title: "NCSA",
    desc: "Cyber Security Associate – Foundational knowledge and essential skills.",
    current: false,
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    step: "02. Current Enrolment",
    title: "NCD",
    desc: "Professional Defensive Specialization and Advanced Ethical Hacking.",
    current: true,
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    step: "03. Next Step",
    title: "NCCP",
    desc: "Certified Cybersecurity Professional – Advanced offensive & defensive Mastery.",
    current: false,
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

const services = [
  {
    title: "Web Application Pentesting",
    desc: "Advanced deep-dives into cloud and browser-based vulnerabilities.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
  },
  {
    title: "Vulnerability Assessment",
    desc: "Automated and manual audits for organizational network health.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Network Penetration Testing",
    desc: "External and internal perimeter security validation protocols.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
];

export default function CertificationPathway() {
  return (
    <div className="bg-[#080c10] text-white">

      {/* ── CERTIFICATION PATHWAY ── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-black tracking-[0.3em] text-white uppercase text-center mb-10"
        >
          Certification Pathway
        </motion.h2>

        {/* Pathway cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center mb-10">
          {pathway.map((p, i) => (
            <div key={p.title} className="flex items-center gap-3">
              <motion.div
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`flex-1 flex flex-col px-5 py-5 rounded-lg border transition-all duration-200 ${
                  p.current
                    ? "border-cyan-500/50 bg-[#0d1a20]"
                    : "border-white/8 bg-[#111]"
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={p.current ? "text-cyan-400" : "text-gray-500"}>
                    {p.icon}
                  </span>
                  <span className={`text-[9px] font-bold tracking-[0.18em] uppercase ${p.current ? "text-cyan-400" : "text-gray-500"}`}>
                    {p.step}
                  </span>
                </div>
                <h3 className={`text-xl font-extrabold mb-2 ${p.current ? "text-cyan-400" : "text-white"}`}>
                  {p.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">{p.desc}</p>
              </motion.div>

              {/* Arrow between cards */}
              {i < pathway.length - 1 && (
                <span className="text-cyan-600 text-lg flex-shrink-0 hidden sm:block">→</span>
              )}
            </div>
          ))}
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Link
            href="/courses"
            className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors duration-200 group"
          >
            <span>View All Learning Paths</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-black tracking-[0.18em] uppercase transition-colors duration-200 rounded-sm"
          >
            Enrol in NCD Now
          </Link>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-white/5" />
      </div>

      {/* ── RELATED SECURITY SERVICES ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xl font-extrabold text-white mb-8"
        >
          Related Security Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-col px-6 py-6 rounded-lg border border-white/8 bg-[#111] hover:bg-[#161616] hover:border-cyan-500/20 transition-all duration-200 group"
            >
              <span className="text-cyan-500 mb-4">{s.icon}</span>
              <h3 className="text-sm font-bold text-white mb-2">{s.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-5 flex-1">{s.desc}</p>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group/link"
              >
                <span>Learn More</span>
                <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-white/5" />
      </div>

      {/* ── CTA ── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-6 py-20 flex flex-col items-center text-center"
      >
        <h2 className="text-3xl font-extrabold text-white mb-4">
          Ready to Secure Your Future?
        </h2>
        <p className="text-sm text-gray-400 leading-relaxed max-w-md mb-8">
          Join the elite ranks of cyber defenders today. Our next cohort starts soon.
          Secure your spot in the NCD certification program.
        </p>
        <Link
          href="/contact"
          className="px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-black tracking-[0.2em] uppercase transition-colors duration-200 rounded-sm"
        >
          Contact us
        </Link>
      </motion.section>
    </div>
  );
}