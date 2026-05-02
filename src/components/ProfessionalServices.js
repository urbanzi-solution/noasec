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

const services = [
  {
    title: "Managed SOC Operations",
    desc: "24/7 continuous monitoring and response powered by our elite security team.",
    href: "/services/managed-soc",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
  {
    title: "Threat Intelligence & Hunting",
    desc: "Identifying hidden threats before they manifest through proactive behavioral analysis.",
    href: "/services/threat-intelligence",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
      </svg>
    ),
  },
  {
    title: "Incident Response Services",
    desc: "Rapid engagement and remediation for organizations under active cyber attack.",
    href: "/services/incident-response-services",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
];

export default function ProfessionalServices() {
  return (
    <div className="bg-[#080c10] text-white">

      {/* ── PROFESSIONAL SECURITY SERVICES ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xl font-extrabold text-white mb-8"
        >
          Professional Security Services
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
              className="flex flex-col px-6 py-6 rounded-md border border-white/8 bg-[#111] hover:bg-[#161616] hover:border-cyan-500/20 transition-all duration-200 group"
            >
              <span className="text-cyan-400 mb-5">{s.icon}</span>
              <h3 className="text-sm font-bold text-white mb-2">{s.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-5 flex-1">{s.desc}</p>
              <Link
                href={s.href}
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
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-white/8 bg-[#111] px-8 py-16 flex flex-col items-center text-center"
        >
          <h2 className="text-2xl font-extrabold text-white mb-4">
            Ready to Secure Your Future?
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed max-w-md mb-8">
            Join the next cohort of certified security operations professionals and build
            your career in the front lines of digital defense.
          </p>
          <Link
            href="/contact"
            className="px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-black tracking-[0.18em] uppercase transition-colors duration-200 rounded-sm"
          >
            Contact Us to Enrol
          </Link>
        </motion.div>
      </section>
    </div>
  );
}