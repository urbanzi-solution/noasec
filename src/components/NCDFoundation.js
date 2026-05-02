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
  {
    num: "01",
    title: "Networking for Security",
    desc: "Deep dive into TCP/IP, OSI models, and secure network architecture fundamentals.",
  },
  {
    num: "02",
    title: "Linux for Hackers",
    desc: "Mastering the terminal, shell scripting, and command-line efficiency in Kali Linux.",
  },
  {
    num: "03",
    title: "Ethical Hacking Methodology",
    desc: "Professional frameworks for authorized security testing and risk assessment.",
  },
  {
    num: "04",
    title: "Information Gathering",
    desc: "OSINT, reconnaissance, and footprinting techniques to identify the attack surface.",
  },
  {
    num: "05",
    title: "Network Scanning & Enumeration",
    desc: "Advanced Nmap techniques to identify services and potential entry points.",
  },
  {
    num: "06",
    title: "Vulnerability Assessment",
    desc: "Systematic identification and classification of security weaknesses in modern systems.",
  },
  {
    num: "07",
    title: "Web Application Security",
    desc: "Hands-on testing for OWASP Top 10 vulnerabilities using Burp Suite.",
  },
  {
    num: "08",
    title: "Wireless Security Basics",
    desc: "Testing WPA/WPA2 security and understanding Aircrack-ng operations.",
  },
  {
    num: "09 & 10",
    title: "Attacks & Intro to Pentesting",
    desc: "Password cracking methodology and a comprehensive introduction to full penetration tests.",
  },
];

const techStack = [
  {
    name: "Kali Linux",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    name: "Burp Suite",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12 20.25h.008v.008H12v-.008z" />
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
  {
    name: "Aircrack-ng",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12 20.25h.008v.008H12v-.008z" />
      </svg>
    ),
  },
];

export default function NCDFoundation() {
  return (
    <div className="bg-[#080c10] text-white">

      {/* ── THE FOUNDATION ── */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-bold tracking-[0.25em] text-cyan-400 uppercase mb-4">
            The Foundation
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
            The perfect bridge to practical ethical hacking
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
           The NoaSec Cyber Defender (NCD) is a hands-on 2-month program that bridges the gap between basic computer knowledge and practical ethical hacking skills. You'll learn how attackers think and operate — then use that knowledge defensively.
Students complete real labs in vulnerability assessment, web application security, password attacks, and wireless hacking using industry-standard tools.

          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-white/5" />
      </div>

      {/* ── MODULE ROADMAP ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-extrabold text-white text-center mb-12"
        >
          Module Roadmap
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-xl overflow-hidden">
          {modules.map((m, i) => (
            <motion.div
              key={m.num}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              variants={fadeUp}
              className="bg-[#0f0f0f] px-6 py-7 hover:bg-[#141414] transition-colors duration-200 group"
            >
              <p className="text-xs font-bold text-cyan-600 mb-3 tracking-widest">{m.num}</p>
              <h3 className="text-sm font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors duration-200">
                {m.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-white/5" />
      </div>

      {/* ── CORE TECH STACK ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-extrabold text-white text-center mb-14"
        >
          Core Tech Stack
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {techStack.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-col items-center gap-3 group cursor-default"
            >
              <span className="text-cyan-500/70 group-hover:text-cyan-400 transition-colors duration-200">
                {t.icon}
              </span>
              <p className="text-xs font-semibold text-gray-400 group-hover:text-white transition-colors duration-200 tracking-wide">
                {t.name}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}