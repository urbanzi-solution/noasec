"use client";

import { motion } from "framer-motion";
import { Zap, FileCheck2, Bug, Network, Search, RotateCcw } from "lucide-react";

const deliverables = [
  {
    icon: Zap,
    title: "60-Minute Rapid Triage",
    desc: "Immediate forensic scoping of the breach radius, active threat vectors, and compromised core database assets within the first 60 minutes.",
  },
  {
    icon: FileCheck2,
    title: "Forensic Evidence Preservation",
    desc: "Legally sound live acquisition of volatile memory dumps, system journals, and storage bitstreams conforming strictly to ISO/IEC 27037 standards.",
  },
  {
    icon: Bug,
    title: "Malware & Backdoor Eradication",
    desc: "Deep reverse engineering of persistence mechanisms, scheduled tasks, and C2 beacons to ensure zero residual persistence across endpoints.",
  },
  {
    icon: Network,
    title: "Surgical Network Containment",
    desc: "Micro-segmentation and egress firewall filtering to instantly sever adversary lateral movement without halting unaffected production services.",
  },
  {
    icon: Search,
    title: "Attribution & Timeline Analysis",
    desc: "Detailed forensic post-mortem identifying initial access vectors, privileged escalation paths, and any indicators of data exfiltration.",
  },
  {
    icon: RotateCcw,
    title: "Remediation & Hardened Recovery",
    desc: "Guided, verified restoration of domain controllers and database clusters coupled with strategic policy baselines to prevent future re-infection.",
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

export default function IncidentOverview() {
  return (
    <div className="bg-[#05070d] text-white px-6 md:px-12 py-14 md:py-16 lg:py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* ── SERVICE OVERVIEW ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-20 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
              <span>Emergency Response</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Rapid Containment &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Breach Recovery
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="space-y-5 text-gray-300 text-sm md:text-base leading-relaxed">
            <p>
              When a security breach occurs, speed, methodology, and precision are everything.
            </p>
            <p className="text-gray-400">
              NoaSec&apos;s Incident Response service provides immediate containment, surgical investigation, and structured recovery — minimizing financial damage, reputational harm, and operational downtime. Our responders execute a battle-tested lifecycle: Preparation → Detection → Containment → Eradication → Recovery → Lessons Learned.
            </p>
          </div>
        </section>

        {/* ── TECHNICAL DELIVERABLES ── */}
        <section>
          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              What We Deliver
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Field-proven containment protocols executed by battle-tested incident responders.
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
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
                      <Icon size={22} />
                    </div>
                    <h4 className="font-bold text-white text-lg mb-2">{d.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{d.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs text-cyan-400 font-mono">
                    EMERGENCY SLA ACTIVE
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