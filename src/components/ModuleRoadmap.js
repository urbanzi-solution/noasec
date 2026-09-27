"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Terminal, Cpu } from "lucide-react";

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
    title: "SOC Fundamentals & Architecture",
    desc: "Understanding enterprise SOC roles, triage tiers, NIST/MITRE frameworks, and analyst workflows.",
    featured: false,
  },
  {
    num: "02",
    title: "Continuous Security Monitoring",
    desc: "Real-time visibility, telemetry aggregation, and anomaly baseline detection across endpoint fleets.",
    featured: true,
  },
  {
    num: "03",
    title: "Enterprise Log Analysis",
    desc: "Deep diving into Windows Event logs, Syslog, firewall dumps, and web proxy transactions to detect intrusions.",
    featured: false,
  },
  {
    num: "04",
    title: "Threat Intelligence Integration",
    desc: "Ingesting tactical STIX/TAXII threat feeds, hashing malicious indicators, and mapping campaigns to APT groups.",
    featured: false,
  },
  {
    num: "05",
    title: "SIEM Engineering & Rule Writing",
    desc: "Hands-on rule engineering with Wazuh, Splunk SPL queries, and ELK Stack Kibana dashboards.",
    featured: false,
  },
  {
    num: "06",
    title: "Alert Investigation & Triage",
    desc: "Systematic investigation playbooks to eliminate false positives and calculate real business impact.",
    featured: false,
  },
  {
    num: "07",
    title: "Breach Incident Response",
    desc: "Live host containment, memory acquisition, threat eradication, and root cause post-mortem procedures.",
    featured: false,
  },
  {
    num: "08",
    title: "Proactive Threat Hunting",
    desc: "Hypothesis-driven adversary hunting utilizing Sigma rules and MITRE ATT&CK matrix mappings.",
    featured: false,
  },
];

const tools = [
  { name: "WAZUH", sub: "OPEN EDR / XDR" },
  { name: "SPLUNK", sub: "SIEM ANALYTICS" },
  { name: "ELK STACK", sub: "SECURITY DATA PIPELINES" },
  { name: "THEHIVE", sub: "INCIDENT MANAGEMENT" },
];

const pathway = [
  {
    label: "FOUNDATION",
    title: "NCSA Associate",
    desc: "Networking & Linux Basics",
    current: false,
  },
  {
    label: "CURRENT FOCUS",
    title: "NCSA-SOC Certified",
    desc: "Enterprise SOC Operations",
    current: true,
  },
  {
    label: "NEXT MILESTONE",
    title: "NCCP Professional",
    desc: "Dual Offensive & Defensive",
    current: false,
  },
];

export default function ModuleRoadmap() {
  return (
    <div className="bg-[#05070d] text-white border-t border-white/5 py-14 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        {/* ── MODULE ROADMAP ── */}
        <section>
          <div className="text-center mb-10 lg:mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
              <span>Curriculum Breakdown</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              SOC Module <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Roadmap</span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-gray-400">
              8 rigorous, lab-intensive modules engineered for enterprise operational readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((m, i) => (
              <motion.div
                key={m.num}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20px" }}
                variants={fadeUp}
                className={`glass-card p-6 flex flex-col justify-between group ${
                  m.featured ? "border-cyan-500/60 bg-gradient-to-br from-cyan-500/10 to-transparent" : ""
                }`}
              >
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400 mb-3 block">
                    MODULE {m.num}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {m.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">{m.desc}</p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-cyan-400 font-mono">
                  <span>HANDS-ON LABS</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── TOOLS OF THE TRADE ── */}
        <section className="glass-card p-8 md:p-12 text-center">
          <p className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-8">
            ENTERPRISE INDUSTRIAL TOOLING TAUGHT
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {tools.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center gap-1 group"
              >
                <p className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {t.name}
                </p>
                <p className="text-[10px] font-mono text-cyan-400/80 uppercase tracking-widest">
                  {t.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CAREER PROGRESSION PATH ── */}
        <section className="border-t border-white/10 pt-12 md:pt-14 lg:pt-20">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-8 lg:mb-12">
            Career Progression Pathway
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pathway.map((p, i) => (
              <motion.div
                key={p.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`glass-card p-6 flex flex-col justify-between text-center ${
                  p.current ? "border-cyan-500/60 bg-cyan-500/10" : ""
                }`}
              >
                <div>
                  <p className={`text-[10px] font-mono font-bold tracking-widest uppercase mb-2 ${
                    p.current ? "text-cyan-300" : "text-gray-500"
                  }`}>
                    {p.label}
                  </p>
                  <h4 className="text-lg font-bold text-white mb-1">
                    {p.title}
                  </h4>
                  {p.desc && (
                    <p className="text-xs text-gray-400 mt-1">
                      {p.desc}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}