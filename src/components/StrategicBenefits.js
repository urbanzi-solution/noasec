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

const benefits = [
  {
    title: "Zero-Drift Integrity",
    desc: "Identify and remediate configuration drift before it becomes a vulnerability in production.",
  },
  {
    title: "Blast Radius Reduction",
    desc: "Contain threats through micro-segmentation and strict identity boundaries, preventing lateral movement.",
  },
  {
    title: "Rapid Certification",
    desc: "Accelerate audits for SOC2, HIPAA, and PCI-DSS with evidence-backed security controls.",
  },
  {
    title: "Architectural Clarity",
    desc: "Gain a unified view of your cloud security posture across all providers and regions.",
  },
];

const ecosystem = [
  {
    title: "Vulnerability Assessment",
    tag: null,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Server & Firewall Hardening",
    tag: null,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Managed SOC",
    tag: null,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "NCCP — Cloud Security Module",
    tag: "TRAINING",
    highlighted: true,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
];

export default function StrategicBenefits() {
  return (
    <div className="bg-[#0a0a0a] text-white px-6 py-20 -mt-20">
      <div className="max-w-5xl mx-auto space-y-20">

        {/* ── STRATEGIC BUSINESS BENEFITS ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-xl border border-white/8 bg-[#111] px-8 py-10 overflow-hidden"
        >
          {/* Ghost shield icon top-right */}
          <div className="absolute top-6 right-6 opacity-5">
            <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {/* Left — title */}
            <div className="md:col-span-1">
              <h2 className="text-xl font-extrabold text-white leading-tight mb-3">
                Strategic Business Benefits
              </h2>
              <p className="text-xs text-gray-400 leading-relaxed">
                Moving beyond check-box compliance to proactive infrastructure resilience.
              </p>
            </div>

            {/* Right — 2x2 benefits */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <p className="text-sm font-bold text-blue-400 mb-1">{b.title}</p>
                  <p className="text-xs text-gray-400 leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── ECOSYSTEM SUPPORT ── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-5 bg-blue-500 rounded-full" />
            <h2 className="text-xs font-bold tracking-[0.2em] text-white uppercase">
              Ecosystem Support
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {ecosystem.map((e, i) => (
              <motion.div
                key={e.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link
                  href="#"
                  className={`group relative flex flex-col px-4 py-5 rounded-md border transition-all duration-200 h-full ${
                    e.highlighted
                      ? "bg-blue-600/15 border-blue-500/40 hover:bg-blue-600/20"
                      : "bg-[#111] border-white/5 hover:bg-[#161616] hover:border-white/10"
                  }`}
                >
                  {/* Training badge */}
                  {e.tag && (
                    <span className="absolute top-3 right-3 text-[8px] font-bold tracking-widest text-blue-300 uppercase">
                      {e.tag}
                    </span>
                  )}
                  <span className={`mb-3 ${e.highlighted ? "text-blue-300" : "text-gray-400 group-hover:text-white"} transition-colors duration-200`}>
                    {e.icon}
                  </span>
                  <p className={`text-xs font-semibold leading-snug ${e.highlighted ? "text-blue-100" : "text-white"}`}>
                    {e.title}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center gap-6 py-8"
        >
          <h2 className="text-2xl font-extrabold text-white">
            Secure Your Cloud Infrastructure Today
          </h2>
          <p className="text-sm text-gray-400 max-w-md leading-relaxed">
            Connect with an elite technical sentinel to audit and harden your environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors duration-200 rounded-sm"
            >
              Start Engagement
            </Link>
            
          </div>
        </motion.section>

      </div>
    </div>
  );
}