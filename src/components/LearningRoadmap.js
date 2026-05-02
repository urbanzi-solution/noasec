"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.4, ease: "easeOut" },
  }),
};

const modules = [
  { num: "01", title: "Intro to Cyber", desc: "The evolving landscape of digital defense.", featured: false },
  { num: "02", title: "Threats", desc: "Analyzing malware, phishing, and social engineering.", featured: false },
  { num: "03", title: "Networking", desc: "TCP/IP, OSI model, and secure architecture.", featured: false },
  { num: "04", title: "Linux", desc: "Mastering the command line for security ops.", featured: false },
  { num: "05", title: "Ethical Hacking", desc: "Core principles and the hacker mindset.", featured: false },
  { num: "06", title: "Info Gathering", desc: "OSINT and reconnaissance techniques.", featured: false },
  { num: "07", title: "Scanning", desc: "Network discovery and port scanning basics.", featured: false },
  { num: "08", title: "Tools", desc: "Hands-on with industry-standard platforms.", featured: false },
  { num: "09", title: "Internet Safety", desc: "Personal security and data protection.", featured: false },
  { num: "10", title: "Career Path", desc: "Resumes, interviews, and next steps.", featured: true },
];

const tools = [
  {
    name: "Kali Linux",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    name: "Wireshark",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    name: "Nmap",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    name: "Metasploit",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function LearningRoadmap() {
  return (
    <div className="bg-[#0a0a0a] text-white px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* ── HEADER ── */}
        <div className="flex items-start justify-between">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-xs font-bold tracking-[0.22em] text-cyan-500 uppercase mb-2">
              Curriculum
            </p>
            <h2 className="text-3xl font-extrabold text-white">Learning Roadmap</h2>
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-xs font-semibold text-gray-500 tracking-widest uppercase mt-2"
          >
            10 Core Modules
          </motion.span>
        </div>

        {/* ── MODULE GRID ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {modules.map((m, i) => (
            <motion.div
              key={m.num}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              variants={fadeUp}
              className={`flex flex-col px-5 py-5 rounded-md border transition-all duration-200 cursor-pointer group ${
                m.featured
                  ? "border-cyan-500/50 bg-[#0d1a20] hover:border-cyan-400/70"
                  : "border-white/5 bg-[#111] hover:bg-[#161616] hover:border-white/10"
              }`}
            >
              <span className={`text-xs font-bold mb-3 ${m.featured ? "text-cyan-400" : "text-cyan-600"}`}>
                {m.num}
              </span>
              <p className={`text-sm font-bold mb-2 ${m.featured ? "text-white" : "text-white"}`}>
                {m.title}
              </p>
              <p className={`text-xs leading-relaxed ${m.featured ? "text-gray-300 font-medium" : "text-gray-500"}`}>
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5" />

        {/* ── TECH STACK & TOOLS ── */}
        <section>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold tracking-[0.22em] text-gray-500 uppercase text-center mb-12"
          >
            Tech Stack &amp; Tools
          </motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {tools.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col items-center gap-3 group"
              >
                <span className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">
                  {t.icon}
                </span>
                <p className="text-xs font-semibold text-gray-400 group-hover:text-white transition-colors duration-200">
                  {t.name}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}