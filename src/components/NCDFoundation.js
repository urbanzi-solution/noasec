"use client";

import { motion } from "framer-motion";
import { Terminal, Flame, Bug, Wifi, ArrowRight, ShieldCheck } from "lucide-react";

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
    desc: "Deep dive into TCP/IP protocol analysis, packet inspection, OSI models, and secure network segmentation.",
  },
  {
    num: "02",
    title: "Linux for Hackers",
    desc: "Mastering the terminal, Bash shell scripting, permission escalation, and command-line efficiency in Kali Linux.",
  },
  {
    num: "03",
    title: "Ethical Hacking Methodology",
    desc: "Professional engagement frameworks for authorized security assessments, scoped testing, and rules of engagement.",
  },
  {
    num: "04",
    title: "Information Gathering & OSINT",
    desc: "Open-source intelligence, DNS reconnaissance, passive footprinting, and attack surface enumeration.",
  },
  {
    num: "05",
    title: "Network Scanning & Enumeration",
    desc: "Advanced Nmap scripting engine (NSE) techniques to identify live hosts, exposed services, and banner fingerprints.",
  },
  {
    num: "06",
    title: "Vulnerability Assessment",
    desc: "Systematic scanning, CVSS vulnerability prioritization, and eliminating false positives using Nessus.",
  },
  {
    num: "07",
    title: "Web Application Security",
    desc: "Hands-on testing for OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF) utilizing Burp Suite Professional.",
  },
  {
    num: "08",
    title: "Wireless Security Basics",
    desc: "Auditing WPA2/WPA3 enterprise Wi-Fi protocols, handshake capture, and rogue AP detection.",
  },
  {
    num: "09 & 10",
    title: "Attacks & Penetration Testing",
    desc: "Password hash cracking, Metasploit framework exploitation, and full-scope simulated penetration testing capstone.",
  },
];

const techStack = [
  { name: "Kali Linux", icon: Terminal, sub: "ATTACK OS" },
  { name: "Burp Suite", icon: Flame, sub: "WEB PROXY" },
  { name: "Metasploit", icon: Bug, sub: "EXPLOITATION" },
  { name: "Aircrack-ng", icon: Wifi, sub: "WIRELESS AUDIT" },
];

export default function NCDFoundation() {
  return (
    <div className="bg-[#05070d] text-white border-t border-white/5 py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        {/* ── THE FOUNDATION ── */}
        <section className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
              <ShieldCheck size={14} className="text-cyan-400" />
              <span>The Cyber Defender Foundation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              The Perfect Bridge to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Practical Ethical Hacking
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              The NoaSec Cyber Defender (NCD) is a hands-on 2-month program that bridges the gap between basic computer literacy and practical ethical hacking skills. You will learn how attackers think and execute — then leverage that adversary insight to defend enterprise environments.
            </p>
          </motion.div>
        </section>

        {/* ── MODULE ROADMAP ── */}
        <section className="border-t border-white/10 pt-20">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-2">
              NCD Module Roadmap
            </h3>
            <p className="text-sm text-gray-400">10 structured modules combining theory with rigorous cyber range labs.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m, i) => (
              <motion.div
                key={m.num}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20px" }}
                variants={fadeUp}
                className="glass-card p-6 flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400 mb-3 block">
                    MODULE {m.num}
                  </span>
                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {m.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">{m.desc}</p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-cyan-400 font-mono">
                  <span>PRACTICAL LAB</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CORE TECH STACK ── */}
        <section className="glass-card p-8 md:p-12 text-center">
          <p className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-8">
            CORE DEFENSIVE &amp; OFFENSIVE TOOLCHAIN
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {techStack.map((t, i) => {
              const Icon = t.icon;
              return (
                <motion.div
                  key={t.name}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="p-5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center gap-2 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon size={22} />
                  </div>
                  <p className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {t.name}
                  </p>
                  <p className="text-[10px] font-mono text-cyan-400/80 uppercase tracking-widest">
                    {t.sub}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}