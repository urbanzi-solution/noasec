"use client";

import { motion } from "framer-motion";
import { Terminal, Activity, Radar, Bug, ArrowRight } from "lucide-react";

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
  { num: "02", title: "Threat Vectors", desc: "Analyzing malware, phishing, and social engineering.", featured: false },
  { num: "03", title: "Networking", desc: "TCP/IP, OSI model, and secure packet inspection.", featured: false },
  { num: "04", title: "Linux Shell", desc: "Mastering the command line for security ops.", featured: false },
  { num: "05", title: "Ethical Hacking", desc: "Core principles and the defensive hacker mindset.", featured: false },
  { num: "06", title: "Reconnaissance", desc: "OSINT and passive footprinting techniques.", featured: false },
  { num: "07", title: "Network Scanning", desc: "Port discovery and service banner analysis.", featured: false },
  { num: "08", title: "Security Tools", desc: "Hands-on with industry-standard platforms.", featured: false },
  { num: "09", title: "Digital Safety", desc: "Device hardening and credential protection.", featured: false },
  { num: "10", title: "Career Advisory", desc: "CV creation, certifications, and career launch.", featured: true },
];

const tools = [
  { name: "Kali Linux", icon: Terminal, sub: "SECURITY OS" },
  { name: "Wireshark", icon: Activity, sub: "PACKET ANALYSIS" },
  { name: "Nmap", icon: Radar, sub: "PORT SCANNER" },
  { name: "Metasploit", icon: Bug, sub: "PENTEST LABS" },
];

export default function LearningRoadmap() {
  return (
    <div className="bg-[#05070d] text-white border-t border-white/5 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* ── HEADER ── */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-3">
                <span>Course Syllabus</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                NCSA Learning Roadmap
              </h2>
            </div>
            <span className="text-xs font-mono font-semibold text-cyan-400 tracking-widest uppercase">
              10 Practical Lab Modules
            </span>
          </div>

          {/* ── MODULE GRID ── */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {modules.map((m, i) => (
              <motion.div
                key={m.num}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20px" }}
                variants={fadeUp}
                className={`glass-card p-5 flex flex-col justify-between group ${
                  m.featured ? "border-cyan-500/60 bg-gradient-to-br from-cyan-500/10 to-transparent" : ""
                }`}
              >
                <div>
                  <span className={`text-xs font-mono font-bold mb-3 block ${
                    m.featured ? "text-cyan-300" : "text-cyan-500"
                  }`}>
                    MOD {m.num}
                  </span>
                  <p className="text-sm font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                    {m.title}
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    {m.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/5 flex items-center text-[10px] font-mono text-cyan-400">
                  <span>FOUNDATION</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── TECH STACK & TOOLS ── */}
        <section className="glass-card p-8 md:p-12 text-center">
          <p className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-8">
            HANDS-ON INDUSTRIAL TOOLS TAUGHT
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {tools.map((t, i) => {
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