"use client";

import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.35, ease: "easeOut" },
  }),
};

const modules = [
  { num: "01", title: "Advanced Networking Security & TCP/IP", featured: false },
  { num: "02", title: "Linux Kernel Security & Administration", featured: false },
  { num: "03", title: "Windows Server & Firewall CIS Hardening", featured: false },
  { num: "04", title: "Open Source Intelligence (OSINT)", featured: false },
  { num: "05", title: "Enterprise Vulnerability Management", featured: false },
  { num: "06", title: "Web App Penetration Testing (OWASP)", featured: false },
  { num: "07", title: "Wireless & Mobile Pentesting (iOS/Android)", featured: false },
  { num: "08", title: "Active Directory Attacks & Kerberos", featured: false },
  { num: "09", title: "SOC Operations, SIEM & Alert Triage", featured: false },
  { num: "10", title: "Digital Forensics & Evidence Extraction", featured: false },
  { num: "11", title: "Incident Response Playbooks & Containment", featured: false },
  { num: "12", title: "AWS / Azure Cloud Security Architecture", featured: true },
  { num: "13", title: "OT / SCADA Critical Infrastructure Security", featured: false },
  { num: "14", title: "Threat Hunting & Sigma Rules", featured: false },
  { num: "15", title: "Exploit Development & Binary Basics", featured: false },
  { num: "16", title: "Post-Exploitation Tactics & Egress", featured: false },
];

const tools = [
  "Kali Linux", "Metasploit", "Burp Suite Pro", "MobSF", "Wazuh SIEM", "Autopsy Forensics",
  "Wireshark", "Nmap", "Splunk", "Ghidra", "Volatilty RAM", "BloodHound"
];

export default function CurriculumRoadmap() {
  return (
    <div id="curriculum" className="bg-[#05070d] text-white border-t border-white/5 scroll-mt-20">
      {/* ── CURRICULUM ROADMAP ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-14 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8 lg:mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-3">
            <span>Syllabus Modules</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            16 Critical Modules. One Elite Goal.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl">
            A comprehensive, battle-tested progression taking you through offensive penetration testing, defensive SOC architecture, digital forensics, and cloud infrastructure security.
          </p>
        </motion.div>

        {/* 4x4 module grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {modules.map((m, i) => (
            <motion.div
              key={m.num}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`glass-card group flex flex-col justify-between p-5 rounded-xl transition-all duration-300 ${
                m.featured ? "border-cyan-500/50 bg-[#0c182c]/90" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-mono font-bold tracking-widest px-2 py-0.5 rounded ${
                  m.featured ? "bg-cyan-500/20 text-cyan-300" : "bg-white/5 text-gray-400"
                }`}>
                  MODULE {m.num}
                </span>
                {m.featured && (
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">
                    Hot Topic
                  </span>
                )}
              </div>
              <h3 className="text-sm font-bold leading-snug text-white group-hover:text-cyan-300 transition-colors">
                {m.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── INDUSTRY STANDARD TOOLKIT ── */}
      <section className="py-10 md:py-12 lg:py-16 bg-[#070b14] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
            <Wrench size={13} className="text-cyan-400" />
            <span>Industrial Toolchain</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-8">
            Professional Software &amp; Frameworks You&apos;ll Operate
          </h3>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {tools.map((t) => (
              <div
                key={t}
                className="glass-card rounded-xl px-4 py-2.5 text-xs sm:text-sm font-medium text-gray-300 flex items-center gap-2 hover:border-cyan-400/50 hover:text-white transition-all"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}