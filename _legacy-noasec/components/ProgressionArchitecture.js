"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" },
  }),
};

const pathway = [
  {
    label: "Foundation",
    title: "NCSA / NCD",
    desc: "Fundamental Digital Vigilance",
    current: false,
  },
  {
    label: "Current Focus",
    title: "THE APEX: NCCP",
    desc: "Certified Cybersecurity Professional",
    current: true,
  },
  {
    label: "Specialization",
    title: "CDFA / SOC-X",
    desc: "Forensics & Operations",
    current: false,
  },
];

const services = [
  {
    title: "Web Application Pentesting",
    desc: "Securing modern web architecture against OWASP vulnerabilities.",
    href: "/services/web-application-penetration-testing",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Network Penetration Testing",
    desc: "Rigorous stress testing of perimeter and internal infrastructure.",
    href: "/services/network-penetration-testing",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12 20.25h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: "Managed SOC Operations",
    desc: "Continuous 24/7 monitoring and threat detection services.",
    href: "/services/managed-soc",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Incident Response",
    desc: "Rapid remediation and recovery protocols for active threats.",
    href: "/services/incident-response-services",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: "Cloud Security",
    desc: "Auditing AWS, Azure, and GCP for misconfigurations.",
    href: "/services/cloud-security-solutions",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    title: "Server Hardening",
    desc: "Deep optimization of OS security policies and permissions.",
    href: "/services/server-hardening",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
];

export default function ProgressionArchitecture() {
  return (
    <div className="bg-[#080c10] text-white">

      {/* ── PROGRESSION ARCHITECTURE ── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-14"
        >
          <p className="text-[10px] font-bold tracking-[0.28em] text-cyan-400 uppercase mb-3">
            The NoaSec Pathway
          </p>
          <h2 className="text-3xl font-extrabold text-white">Progression Architecture</h2>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {pathway.map((p, i) => (
            <div key={p.title} className="flex items-center gap-3">
              <motion.div
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`flex flex-col items-center justify-center text-center px-8 py-7 rounded-md border min-w-[180px] transition-all duration-200 ${
                  p.current
                    ? "border-cyan-500/60 bg-[#0d1a20]"
                    : "border-white/8 bg-[#111]"
                }`}
              >
                <p className={`text-[9px] font-bold tracking-[0.2em] uppercase mb-2 ${
                  p.current ? "text-cyan-400" : "text-gray-600"
                }`}>
                  {p.label}
                </p>
                <p className={`text-sm font-extrabold leading-snug mb-1 ${
                  p.current ? "text-white" : "text-gray-400"
                }`}>
                  {p.title}
                </p>
                <p className={`text-xs ${
                  p.current ? "text-cyan-400/80" : "text-gray-600"
                }`}>
                  {p.desc}
                </p>
              </motion.div>

              {i < pathway.length - 1 && (
                <span className="text-cyan-700 text-base flex-shrink-0 hidden sm:block">→</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-white/5" />
      </div>

      {/* ── CORE DEFENSIVE SERVICES ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <p className="text-[10px] font-bold tracking-[0.25em] text-cyan-500 uppercase mb-2">
            Ecosystem Synergy
          </p>
          <h2 className="text-2xl font-extrabold text-white">Core Defensive Services</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-col px-6 py-6 rounded-md border border-white/5 bg-[#111] hover:bg-[#161616] hover:border-cyan-500/20 transition-all duration-200 group"
            >
              <span className="text-cyan-500 mb-4">{s.icon}</span>
              <h3 className="text-sm font-bold text-white mb-2">{s.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-5 flex-1">{s.desc}</p>
              <Link
                href={s.href}
                className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-cyan-400 hover:text-cyan-300 uppercase transition-colors duration-200 group/link"
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
{/* ── RELATED SERVICES ── */}
<section className="max-w-6xl mx-auto px-6 py-16">
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="mb-10"
  >
    <p className="text-[10px] font-bold tracking-[0.25em] text-cyan-500 uppercase mb-2">
      Career Alignment
    </p>
    <h2 className="text-2xl font-extrabold text-white">
      Related Security Services
    </h2>
    <p className="text-sm text-gray-400 mt-3 max-w-2xl">
      These services represent real-world implementations of the skills taught
      in the NoaSec certification pathway.
    </p>
  </motion.div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

    {[
      {
        title: "Managed SOC Operations",
        href: "/services/managed-soc",
      },
      {
        title: "Incident Response Services",
        href: "/services/incident-response-services",
      },
      {
        title: "Web Application Penetration Testing",
        href: "/services/web-application-penetration-testing",
      },
      {
        title: "Network Penetration Testing",
        href: "/services/network-penetration-testing",
      },
      {
        title: "Cloud Security Solutions",
        href: "/services/cloud-security-solutions",
      },
      {
        title: "Digital Evidence Collection",
        href: "/services/digital-evidence-collection",
      },
    ].map((item, i) => (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.05 }}
        className="px-6 py-6 rounded-md border border-white/5 bg-[#111] hover:bg-[#161616] hover:border-cyan-500/20 transition-all duration-200"
      >
        <h3 className="text-sm font-bold text-white mb-4">
          {item.title}
        </h3>

        <Link
          href={item.href}
          className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-cyan-400 hover:text-cyan-300 uppercase transition-colors duration-200"
        >
          <span>Explore</span>
          <span>→</span>
        </Link>
      </motion.div>
    ))}
  </div>
</section>
      {/* ── CTA ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-xl border border-white/5 bg-[#0d1520] overflow-hidden px-8 py-16 flex flex-col items-center text-center"
        >
          {/* Subtle grid bg */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(0,200,255,0.03) 39px, rgba(0,200,255,0.03) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(0,200,255,0.03) 39px, rgba(0,200,255,0.03) 40px)",
            }}
          />

          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/10 blur-3xl rounded-full" />

          <div className="relative z-10 flex flex-col items-center">
            <p className="text-[10px] font-bold tracking-[0.28em] text-cyan-400 uppercase mb-4">
              Begin Your Elite Journey
            </p>
            <h2 className="text-3xl font-extrabold text-white mb-4 leading-tight max-w-lg">
              Become a Certified Cybersecurity Professional
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md mb-10">
              The NCCP is the most advanced certification in the NoaSec ecosystem.
              Enrol today and position yourself at the apex of the cybersecurity industry.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-9 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-black tracking-[0.18em] uppercase transition-colors duration-200 rounded-sm"
              >
                Enrol Now
              </Link>
             
            </div>

            {/* Trust line */}
            <p className="text-[10px] text-gray-600 mt-8 tracking-widest uppercase">
              Next cohort enrolling — Limited seats available
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}