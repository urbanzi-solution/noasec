"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: "easeOut" },
  }),
};

const beyondCards = [
  {
    title: "Vulnerability Assessment",
    desc: "Professional audit services for enterprise infrastructure",
    img: "/vuln-assessment.png",
    href: "/services/vulnerability-assessment-services",
  },
  {
    title: "Network Penetration Testing",
    desc: "Simulated adversarial attacks to harden network defenses",
    img: "/network-pentest.png",
    href: "/services/network-penetration-testing",
  },
];

export default function PathToMastery() {
  return (
    <div className="bg-[#0a0a0a] text-white">

      {/* ── YOUR PATH TO MASTERY ── */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-bold tracking-[0.25em] text-cyan-400 uppercase mb-4">
            What's Next?
          </p>
          <h2 className="text-4xl font-extrabold text-white mb-5 leading-tight">
            Your Path to Mastery
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed mb-10 max-w-xl mx-auto">
            The NCSA is just the beginning. Graduates are fast-tracked into our advanced
            professional tracks, preparing you for the most demanding roles in the
            cybersecurity sector.
          </p>
        </motion.div>

        {/* Next course card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
        >
          <Link
            href="/courses/noasec-cyber-defender"
            className="group flex items-center justify-between px-8 py-6 rounded-lg border border-white/10 bg-[#111] hover:bg-[#161616] hover:border-cyan-500/30 transition-all duration-200 text-left mb-8"
          >
            <div>
              <p className="text-sm font-bold text-cyan-400 mb-1">Cyber Defender (NCD)</p>
              <p className="text-sm text-gray-400">
                Intermediate Blue-Team Operations &amp; Incident Response
              </p>
            </div>
            <span className="text-white group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-200 text-xl flex-shrink-0 ml-4">
              →
            </span>
          </Link>
        </motion.div>
{/* ── RELATED SECURITY SERVICES ── */}
<section className="max-w-6xl mx-auto px-6 py-16">
  <motion.h2
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="text-base font-bold text-white mb-8"
  >
    Related Security Services
  </motion.h2>

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="p-6 rounded-lg border border-white/5 bg-[#111] hover:border-cyan-500/20 hover:bg-[#161616] transition-all duration-200"
    >
      <h3 className="text-sm font-bold text-white mb-2">
        Vulnerability Assessment
      </h3>
      <p className="text-xs text-gray-400 mb-4">
        Identify and prioritize security weaknesses across networks and systems.
      </p>
      <Link
        href="/services/vulnerability-assessment-services"
        className="text-xs font-bold text-cyan-400 hover:text-cyan-300 uppercase tracking-widest"
      >
        Learn More →
      </Link>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="p-6 rounded-lg border border-white/5 bg-[#111] hover:border-cyan-500/20 hover:bg-[#161616] transition-all duration-200"
    >
      <h3 className="text-sm font-bold text-white mb-2">
        Web Application Penetration Testing
      </h3>
      <p className="text-xs text-gray-400 mb-4">
        OWASP-aligned testing to secure modern web applications.
      </p>
      <Link
        href="/services/web-application-penetration-testing"
        className="text-xs font-bold text-cyan-400 hover:text-cyan-300 uppercase tracking-widest"
      >
        Learn More →
      </Link>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-lg border border-white/5 bg-[#111] hover:border-cyan-500/20 hover:bg-[#161616] transition-all duration-200"
    >
      <h3 className="text-sm font-bold text-white mb-2">
        Managed SOC Operations
      </h3>
      <p className="text-xs text-gray-400 mb-4">
        24/7 monitoring, threat detection, and SIEM management.
      </p>
      <Link
        href="/services/managed-soc"
        className="text-xs font-bold text-cyan-400 hover:text-cyan-300 uppercase tracking-widest"
      >
        Learn More →
      </Link>
    </motion.div>

  </div>
</section>
        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/courses"
            className="flex items-center gap-2 px-7 py-3 border border-white/20 hover:border-white/40 text-white text-xs font-bold tracking-[0.18em] uppercase transition-all duration-200 rounded-sm hover:bg-white/5"
          >
            <span>View the Full Courses Hub</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 px-7 py-3 border border-cyan-500/40 hover:border-cyan-400/70 text-cyan-400 hover:text-cyan-300 text-xs font-bold tracking-[0.18em] uppercase transition-all duration-200 rounded-sm hover:bg-cyan-500/5"
          >
            <span>Contact Us to Enrol</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-white/5" />
      </div>

      {/* ── BEYOND THE CLASSROOM ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-base font-bold text-white mb-8"
        >
          Beyond the Classroom
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {beyondCards.map((c, i) => (
            <motion.div
              key={c.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Link
                href={c.href}
                className="group relative flex flex-col justify-end overflow-hidden rounded-lg border border-white/5 hover:border-white/10 transition-all duration-300 aspect-[16/9] bg-[#111]"
              >
                {/* Background image */}
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  className="object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-300"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Content */}
                <div className="relative z-10 px-6 py-6">
                  <p className="text-sm font-bold text-white mb-1">{c.title}</p>
                  <p className="text-xs text-gray-300">
                    {c.desc}{" "}
                    <span className="text-white group-hover:translate-x-1 inline-block transition-transform duration-200">
                      →
                    </span>
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}