"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" },
  }),
};

const deliverables = [
  {
    title: "CSPM Audit",
    desc: "Automated and manual configuration posture management to eliminate low-hanging fruit.",
    elite: false,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5" />
      </svg>
    ),
  },
  {
    title: "IAM Review",
    desc: "Enforcement of least-privilege principles across roles, users, and service accounts.",
    elite: false,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        <rect x="14" y="14" width="7" height="7" rx="1" strokeWidth={1.3} />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 17h3m-1.5-1.5v3" />
      </svg>
    ),
  },
  {
    title: "Storage Security",
    desc: "Hardening of S3 buckets, Azure Blobs, and GCS with strict encryption and access policies.",
    elite: false,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 14.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
  },
  {
    title: "Network Security",
    desc: "VPC architecture review, firewall rule optimization, and egress traffic controls.",
    elite: false,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <circle cx="12" cy="12" r="2" />
        <circle cx="4" cy="12" r="1.5" />
        <circle cx="20" cy="12" r="1.5" />
        <circle cx="12" cy="4" r="1.5" />
        <circle cx="12" cy="20" r="1.5" />
        <path strokeLinecap="round" d="M5.5 12h4.5M14 12h4.5M12 5.5v4.5M12 14v4.5" />
      </svg>
    ),
  },
  {
    title: "Container & K8s",
    desc: "Orchestration hardening, pod security policies, and container image scanning.",
    elite: false,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
  },
  {
    title: "Cloud Penetration Testing",
    desc: "Active exploitation of cloud-native vulnerabilities to test detection and response capabilities.",
    elite: true,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Compliance",
    desc: "Mapping to CIS Benchmarks, AWS Well-Architected, SOC2, and ISO 27001 requirements.",
    elite: false,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function CloudWhatWeDeliver() {
  return (
    <div className="bg-[#0a0a0a] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-white mb-3">What We Deliver</h2>
          <p className="text-sm text-gray-400">Comprehensive security engineering for the modern stack.</p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-xl overflow-hidden">
          {/* Row 1 — 4 cards */}
          {deliverables.slice(0, 4).map((d, i) => (
            <motion.div
              key={d.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={fadeUp}
              className="relative bg-[#0f0f0f] px-7 py-8 hover:bg-[#141414] transition-colors duration-300 group"
            >
              <div className="text-blue-300/80 mb-6">{d.icon}</div>
              <h3 className="text-sm font-bold text-white mb-3">{d.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}

          {/* Row 2 — 3 cards (last one spans differently) */}
          {/* Container & K8s */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={fadeUp}
            className="relative bg-[#0f0f0f] px-7 py-8 hover:bg-[#141414] transition-colors duration-300 lg:col-span-1"
          >
            <div className="text-blue-300/80 mb-6">{deliverables[4].icon}</div>
            <h3 className="text-sm font-bold text-white mb-3">{deliverables[4].title}</h3>
            <p className="text-xs text-gray-400 leading-relaxed">{deliverables[4].desc}</p>
          </motion.div>

          {/* Cloud Penetration Testing — elite badge, spans 2 cols */}
          <motion.div
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={fadeUp}
            className="relative bg-[#0f0f0f] px-7 py-8 hover:bg-[#141414] transition-colors duration-300 lg:col-span-2"
          >
            {/* Elite badge */}
            <div className="absolute top-6 right-6">
              <span className="text-[9px] font-black tracking-[0.2em] text-blue-300 border border-blue-500/30 bg-blue-500/10 px-2.5 py-1.5 rounded-sm uppercase leading-tight text-center block">
                Elite<br />Level
              </span>
            </div>
            <div className="text-blue-300/80 mb-6">{deliverables[5].icon}</div>
            <h3 className="text-sm font-bold text-white mb-3">{deliverables[5].title}</h3>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">{deliverables[5].desc}</p>
          </motion.div>

          {/* Compliance */}
          <motion.div
            custom={6}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={fadeUp}
            className="relative bg-[#0f0f0f] px-7 py-8 hover:bg-[#141414] transition-colors duration-300 lg:col-span-1"
          >
            <div className="text-blue-300/80 mb-6">{deliverables[6].icon}</div>
            <h3 className="text-sm font-bold text-white mb-3">{deliverables[6].title}</h3>
            <p className="text-xs text-gray-400 leading-relaxed">{deliverables[6].desc}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}