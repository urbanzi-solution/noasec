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
    title: "SOC Fundamentals",
    desc: "Understanding the roles, responsibilities, and frameworks within a security operations center.",
    featured: false,
  },
  {
    num: "02",
    title: "Security Monitoring",
    desc: "Real-time visibility and monitoring techniques across network and endpoint environments.",
    featured: true,
  },
  {
    num: "03",
    title: "Log Analysis",
    desc: "Deep diving into system and application logs to identify anomalous behavior and potential threats.",
    featured: false,
  },
  {
    num: "04",
    title: "Threat Intelligence",
    desc: "Integrating tactical, operational, and strategic intelligence into security workflows.",
    featured: false,
  },
  {
    num: "05",
    title: "SIEM Architecture",
    desc: "Designing and managing Security Information and Event Management infrastructures.",
    featured: false,
  },
  {
    num: "06",
    title: "Alert Investigation",
    desc: "Systematic methodology for investigating security alerts and determining impact levels.",
    featured: false,
  },
  {
    num: "07",
    title: "Incident Response",
    desc: "Containment, eradication, and recovery procedures during a security breach.",
    featured: false,
  },
  {
    num: "08",
    title: "Threat Hunting",
    desc: "Proactive identification of hidden threats within the network using behavioral analytics.",
    featured: false,
  },
];

const tools = [
  { name: "WAZUH", sub: "EDR / XDR" },
  { name: "SPLUNK", sub: "SIEM LEADER" },
  { name: "ELK STACK", sub: "DATA PIPELINES" },
];

const pathway = [
  {
    label: "PREVIOUS",
    title: "Basic Cyber Sec",
    desc: null,
    current: false,
  },
  {
    label: "CURRENT FOCUS",
    title: "NCSA-SOC",
    desc: "Security Operations",
    current: true,
  },
  {
    label: "NEXT STEPS",
    title: "NCDF / NCCP",
    desc: "Forensics & Management",
    current: false,
  },
];

export default function ModuleRoadmap() {
  return (
    <div className="bg-[#080c10] text-white">

      {/* ── MODULE ROADMAP ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold tracking-[0.25em] text-cyan-400 uppercase mb-3">
            The Journey
          </p>
          <h2 className="text-3xl font-extrabold text-white">Module Roadmap</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {modules.map((m, i) => (
            <motion.div
              key={m.num}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              variants={fadeUp}
              className={`flex flex-col px-5 py-6 rounded-md border transition-all duration-200 group ${
                m.featured
                  ? "border-cyan-500/40 bg-[#0d1a20]"
                  : "border-white/5 bg-[#111] hover:bg-[#141414] hover:border-white/8"
              }`}
            >
              <span className={`text-2xl font-black mb-4 ${m.featured ? "text-cyan-500/50" : "text-gray-700"}`}>
                {m.num}
              </span>
              <h3 className={`text-sm font-bold mb-2 ${m.featured ? "text-white" : "text-white"}`}>
                {m.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-white/5" />

      {/* ── TOOLS OF THE TRADE ── */}
      <section className="py-16 bg-[#0a0d12]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <p className="text-[10px] font-bold tracking-[0.28em] text-cyan-500 uppercase">
            Tools of the Trade
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
            {tools.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col items-center gap-1 group cursor-default"
              >
                <p className="text-sm font-extrabold text-gray-300 tracking-wider group-hover:text-cyan-400 transition-colors duration-200">
                  {t.name}
                </p>
                <p className="text-[9px] font-bold tracking-[0.2em] text-gray-600 uppercase">
                  {t.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-white/5" />

      {/* ── CAREER PROGRESSION PATH ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-extrabold text-white text-center mb-14"
        >
          Career Progression Path
        </motion.h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {pathway.map((p, i) => (
            <div key={p.label} className="flex items-center gap-3">
              <motion.div
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`flex flex-col items-center justify-center text-center px-8 py-7 rounded-md border min-w-[180px] transition-all duration-200 ${
                  p.current
                    ? "border-cyan-500/50 bg-[#0d1a20]"
                    : "border-white/8 bg-[#111]"
                }`}
              >
                <p className={`text-[9px] font-bold tracking-[0.2em] uppercase mb-2 ${p.current ? "text-cyan-400" : "text-gray-600"}`}>
                  {p.label}
                </p>
                <p className={`text-sm font-extrabold ${p.current ? "text-white" : "text-gray-400"}`}>
                  {p.title}
                </p>
                {p.desc && (
                  <p className={`text-xs mt-1 font-semibold ${p.current ? "text-cyan-400" : "text-gray-500"}`}>
                    {p.desc}
                  </p>
                )}
              </motion.div>

              {/* Arrow */}
              {i < pathway.length - 1 && (
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-cyan-700 text-lg flex-shrink-0 hidden sm:block"
                >
                  →
                </motion.span>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}