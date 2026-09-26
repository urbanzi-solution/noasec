"use client";

import { motion } from "framer-motion";
import { Globe, Server, Shield, Search, Wifi, FileCheck } from "lucide-react";

const deliverables = [
  {
    icon: Globe,
    title: "External Pentesting",
    desc: "Attacker-view assessment of public-facing assets, DNS, IP blocks, and edge perimeter defenses.",
  },
  {
    icon: Server,
    title: "Internal Pentesting",
    desc: "Active Directory attack simulation, privilege escalation analysis, and lateral movement mapping.",
  },
  {
    icon: Shield,
    title: "Firewall Rule Reviews",
    desc: "Granular rule-set auditing to eliminate redundant or overly permissive ports and ingress policies.",
  },
  {
    icon: Search,
    title: "Service Enumeration",
    desc: "Comprehensive fingerprinting of all active network services, versions, and potential entry points.",
  },
  {
    icon: Wifi,
    title: "Wireless Assessment",
    desc: "Rigorous testing of corporate Wi-Fi protocols, WPA3 enterprise authentication, and rogue AP detection.",
  },
  {
    icon: FileCheck,
    title: "Actionable Reporting",
    desc: "CISO-ready executive summaries paired with developer-ready technical remediation scripts.",
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
    <div className="bg-[#05070d] text-white px-6 md:px-12 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* ── SERVICE OVERVIEW ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
              <span>Service Overview</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Comprehensive <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Network Scoping
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="space-y-5 text-gray-300 text-sm md:text-base leading-relaxed">
            <p>
              NoaSec&apos;s network penetration testing service simulates real adversary techniques against your network infrastructure — identifying weaknesses in firewalls, routers, switches, VPNs, and exposed services. We test both external perimeters and internal segments to give you a complete picture of your network security posture.
            </p>
            <p className="text-gray-400">
              We evaluate your external perimeter as well as internal network segments, ensuring that lateral movement is restricted and sensitive data remains isolated from compromised endpoints.
            </p>
          </div>
        </section>

        {/* ── TECHNICAL DELIVERABLES ── */}
        <section>
          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Technical Deliverables
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Precision artifacts delivered at the completion of every network assessment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((d, i) => {
              const Icon = d.icon;
              return (
                <motion.div
                  key={d.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  variants={fadeUp}
                  className="glass-card p-7 flex flex-col justify-between"
                >
                  <div>
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2">{d.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{d.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs text-cyan-400 font-mono">
                    VERIFIED DELIVERABLE
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}