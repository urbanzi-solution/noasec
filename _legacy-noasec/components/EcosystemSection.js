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

const ecosystemServices = [
  { title: "Web App Pen Testing", href: "/services/web-application-penetration-testing" },
  { title: "Network Pen Testing", href: "/services/network-penetration-testing" },
  { title: "Server & Firewall Hardening", href: "/services/server-hardening" },
];

const trainings = [
  {
    tag: "NCD",
    title: "Cyber Defender",
    desc: "Master-level defense tactics for internal security teams.",
    href: "/courses/noasec-cyber-defender",
    icon: (
      <svg className="w-10 h-10 text-white/10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
      </svg>
    ),
  },
  {
    tag: "NCCP",
    title: "Certified Cybersecurity Professional",
    desc: "Core certification for comprehensive digital asset protection.",
    href: "/courses/certified-cybersecurity-professional",
    icon: (
      <svg className="w-10 h-10 text-white/10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function EcosystemSection() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      <div className="max-w-5xl mx-auto px-6 py-20 space-y-20">

        {/* ── TWO COLUMN SECTION ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT — Ecosystem Services */}
          <div>
            <h2 className="text-base font-bold text-white mb-1">Ecosystem Services</h2>
            <div className="h-px bg-white/10 mb-5" />

            <div className="flex flex-col gap-2">
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
                    className="group flex items-center justify-between px-4 py-4 border border-white/8 bg-[#111] hover:bg-[#161616] hover:border-blue-500/20 rounded-sm transition-all duration-200"
                  >
                    <span className="text-sm font-medium text-white">{s.title}</span>
                    <span className="text-gray-500 group-hover:text-blue-400 transition-colors duration-200">
                      →
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — Professional Training */}
          <div>
            <h2 className="text-base font-bold text-white mb-1">Professional Training</h2>
            <div className="h-px bg-white/10 mb-5" />

            <div className="flex flex-col gap-2">
              {trainings.map((t, i) => (
                <motion.div
                  key={t.tag}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <div className="relative flex items-start justify-between px-5 py-5 border border-white/8 bg-[#111] rounded-sm overflow-hidden group hover:bg-[#161616] hover:border-blue-500/20 transition-all duration-200">
                    {/* Ghost icon bg */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-60">
                      {t.icon}
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex-1 pr-4">
                      <p className="text-[10px] font-bold tracking-[0.18em] text-blue-400 uppercase mb-1">
                        {t.tag}
                      </p>
                      <h3 className="text-sm font-bold text-white mb-1">{t.title}</h3>
                      <p className="text-xs text-gray-500 leading-relaxed mb-3">{t.desc}</p>
                      <Link
                        href={t.href}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-400 hover:text-blue-300 uppercase tracking-wider transition-colors duration-200 group/link"
                      >
                        <span>Learn More</span>
                        <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── CTA BANNER ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-6 mb-16 rounded-lg overflow-hidden"
        style={{ background: "linear-gradient(135deg, #7b9cdb 0%, #a8bce8 40%, #b8caf0 100%)" }}
      >
        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, #3b5998 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-20">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0d0d0d] uppercase tracking-tight mb-4">
            Ready to Fortify Your Perimeter?
          </h2>
          <p className="text-sm text-[#1a1a2e]/70 mb-10 max-w-md">
            Schedule a strategic consultation with our lead security architects today.
          </p>
          <Link
            href="/contact"
            className="px-10 py-4 bg-[#0d0d0d] text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#1a1a1a] transition-colors duration-200 rounded-sm"
          >
            Request a Quote or Consultation
          </Link>
        </div>
      </motion.section>
    </div>
  );
}