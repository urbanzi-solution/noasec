"use client";

import { motion } from "framer-motion";

const deliverables = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
    title: "External Pentesting",
    desc: "Attacker-view assessment of public-facing assets and perimeter defenses.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3m8-6l3 3-3 3M14 6l-4 12" />
      </svg>
    ),
    title: "Internal Pentesting",
    desc: "Active Directory attack simulation and analysis of lateral movement paths.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Firewall Reviews",
    desc: "Granular rule-set auditing to eliminate redundant or overly permissive access.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Service Enumeration",
    desc: "Identification and mapping of all active network services and potential entry points.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12 20.25h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "Wireless Assessment",
    desc: "Rigorous testing of Wi-Fi protocols, encryption standards, and rogue AP detection.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Comprehensive Reporting",
    desc: "CISO-ready summaries paired with actionable technical remediation paths.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" },
  }),
};

export default function NetworkOverview() {
  return (
    <div className="bg-[#0a0a0a] text-white px-6 py-20 max-w-6xl mx-auto">

      {/* ── SERVICE OVERVIEW ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {/* Left */}
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-blue-500 uppercase mb-3">
            Service Overview
          </p>
          <h2 className="text-3xl font-bold text-white leading-tight">
            Comprehensive Scope
          </h2>
        </div>

        {/* Right */}
        <div className="space-y-5 text-gray-400 text-sm leading-relaxed">
          <p>
            NoaSec's network penetration testing service simulates real adversary techniques against your network infrastructure — identifying weaknesses in firewalls, routers, switches, VPNs, and exposed services. We test both external perimeters (internet-facing assets) and internal segments (lateral movement scenarios) to give you a complete picture of your network security posture.
          </p>
          <p>
            We evaluate your external perimeter as well as internal network segments, ensuring
            that lateral movement is restricted and sensitive data remains isolated from
            compromised endpoints.
          </p>
        </div>
      </section>

      {/* ── TECHNICAL DELIVERABLES ── */}
      <section>
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] text-blue-500 uppercase mb-3">
            Technical Deliverables
          </p>
          <h2 className="text-3xl font-bold text-white">What We Deliver</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-lg overflow-hidden">
          {deliverables.map((d, i) => (
            <motion.div
              key={d.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={fadeUp}
              className="bg-[#111111] px-7 py-8 hover:bg-[#161616] transition-colors duration-300 group"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-md bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                {d.icon}
              </div>
              <h3 className="font-bold text-white text-[16px] mb-3">{d.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}