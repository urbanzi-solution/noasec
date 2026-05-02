"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.4, ease: "easeOut" },
  }),
};

const challenges = [
  {
    title: "Misconfigurations",
    desc: "Unprotected buckets, exposed databases, and default security groups account for 80% of data breaches.",
    icon: (
      <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    iconBg: "bg-orange-500/10 border border-orange-500/20",
  },
  {
    title: "Over-privileged IAM",
    desc: "Identity is the new perimeter. Excessive permissions allow for rapid lateral movement during a compromise.",
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
    iconBg: "bg-blue-500/10 border border-blue-500/20",
  },
  {
    title: "Exposed APIs",
    desc: "Publicly accessible management interfaces provide direct entry points for sophisticated attackers.",
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    iconBg: "bg-blue-500/10 border border-blue-500/20",
  },
];

const scorecard = [
  {
    label: "External API Surface",
    status: "VULNERABLE",
    color: "text-orange-400",
  },
  {
    label: "IAM Least-Privilege Gap",
    status: "92% DRIFT",
    color: "text-orange-400",
  },
  {
    label: "Storage Encryption Status",
    status: "PARTIAL",
    color: "text-blue-400",
  },
];

export default function CloudComplexity() {
  return (
    <div className="bg-[#0d0d0d] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT ── */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-extrabold text-white mb-5 leading-tight"
            >
              The Challenge of Cloud Complexity
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm text-gray-400 leading-relaxed mb-10 max-w-lg"
            >
              Modern cloud environments are dynamic, ethereal, and dangerously complex. Rapid
              deployment cycles often prioritize speed over security, leaving organizations
              vulnerable to a new breed of technical threats.
            </motion.p>

            <div className="flex flex-col gap-7">
              {challenges.map((c, i) => (
                <motion.div
                  key={c.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex gap-4"
                >
                  {/* Icon */}
                  <span className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${c.iconBg}`}>
                    {c.icon}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white mb-1">{c.title}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">{c.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — Scorecard ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="rounded-2xl border border-white/8 bg-[#161618] p-8 flex flex-col gap-6"
          >
            {/* Header */}
            <p className="text-sm font-mono text-blue-400 font-semibold">
              # Cloud_Vulnerability_Scorecard
            </p>

            {/* Rows */}
            <div className="flex flex-col gap-3">
              {scorecard.map((s, i) => (
                <motion.div
                  key={s.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex items-center justify-between px-5 py-4 rounded-lg bg-[#0d0d0d] border border-white/5"
                >
                  <span className="text-sm font-medium text-white">{s.label}</span>
                  <span className={`text-sm font-extrabold tracking-wider ${s.color}`}>
                    {s.status}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="pt-2 border-t border-white/5 flex items-center gap-2">
              {/* Pulse dot */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <p className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase">
                Noasec Sentinel Monitoring Active
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}