"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4, ease: "easeOut" },
  }),
};

const modules = [
  { num: "01", title: "Advanced Networking Security", featured: false },
  { num: "02", title: "Linux Security Administration", featured: false },
  { num: "03", title: "Windows/Server/Firewall Hardening", featured: false },
  { num: "04", title: "Open Source Intelligence (OSINT)", featured: false },
  { num: "05", title: "Vulnerability Management", featured: false },
  { num: "06", title: "Web Application Pentesting", featured: false },
  { num: "07", title: "Wireless & Mobile Pentesting", featured: false },
  { num: "08", title: "Active Directory Attacks", featured: false },
  { num: "09", title: "SOC Operations & Triage", featured: false },
  { num: "10", title: "Digital Forensics & Analysis", featured: false },
  { num: "11", title: "Incident Response Protocol", featured: false },
  { num: "12", title: "Cloud Security Architecture", featured: true },
  { num: "13", title: "OT/SCADA Security Systems", featured: false },
  { num: "14", title: "Threat Hunting Strategies", featured: false },
  { num: "15", title: "Exploit Development Basics", featured: false },
  { num: "16", title: "Post-Exploitation Tactics", featured: false },
];

const tools = [
  {
    name: "Kali Linux",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    name: "Metasploit",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    name: "Burp Suite",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l-8-8m0 0h6m-6 0v6M12 12l8 8m0 0h-6m6 0v-6M12 12l-8 8m0 0h6m-6 0v-6M12 12l8-8m0 0h-6m6 0v6" />
      </svg>
    ),
  },
  {
    name: "MobSF",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3" />
      </svg>
    ),
  },
  {
    name: "Wazuh",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    name: "Autopsy",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
      </svg>
    ),
  },
];

export default function CurriculumRoadmap() {
  return (
    <div className="bg-[#080c10] text-white">

      {/* ── CURRICULUM ROADMAP ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <p className="text-[10px] font-bold tracking-[0.25em] text-cyan-500 uppercase mb-3">
            Curriculum Roadmap
          </p>
          <h2 className="text-3xl font-extrabold text-white leading-tight">
            16 Critical Modules. One Elite Goal.
          </h2>
        </motion.div>

        {/* 4x4 module grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {modules.map((m, i) => (
            <motion.div
              key={m.num}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              variants={fadeUp}
              className={`flex flex-col px-5 py-5 rounded-md border transition-all duration-200 cursor-default group ${
                m.featured
                  ? "border-cyan-500/50 bg-[#0d1a20]"
                  : "border-white/5 bg-[#111] hover:bg-[#141414] hover:border-white/8"
              }`}
            >
              <span className={`text-xs font-bold mb-3 tracking-widest ${
                m.featured ? "text-cyan-500/60" : "text-gray-700"
              }`}>
                {m.num}
              </span>
              <p className={`text-sm font-semibold leading-snug ${
                m.featured ? "text-cyan-400" : "text-white/80"
              }`}>
                {m.title}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-white/5" />

      {/* ── INDUSTRY STANDARD TOOLKIT ── */}
      <section className="py-16 bg-[#0a0d12]">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-[10px] font-bold tracking-[0.28em] text-cyan-500 uppercase text-center mb-12"
        >
          Industry Standard Toolkit
        </motion.p>

        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
            {tools.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col items-center gap-3 group cursor-default"
              >
                <div className="w-12 h-12 rounded-lg border border-white/8 bg-[#111] flex items-center justify-center text-gray-500 group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-all duration-200">
                  {t.icon}
                </div>
                <p className="text-[10px] font-semibold text-gray-600 group-hover:text-gray-400 transition-colors duration-200 tracking-wide text-center">
                  {t.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}