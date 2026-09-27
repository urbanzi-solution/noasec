"use client";

import { motion } from "framer-motion";
import { Clock, ShieldAlert, Filter, Radar, FileText, PhoneCall } from "lucide-react";

const deliverables = [
  {
    icon: Clock,
    title: "24/7/365 Continuous Monitoring",
    desc: "Round-the-clock surveillance of your digital landscape, ensuring no critical anomaly or malicious beacon goes unnoticed, regardless of the hour.",
  },
  {
    icon: ShieldAlert,
    title: "Enterprise SIEM Engineering",
    desc: "Expert configuration of Wazuh, Splunk, Microsoft Sentinel, or ELK stacks tailored precisely to your specific data flow and ingestion bandwidth.",
  },
  {
    icon: Filter,
    title: "High-Fidelity Alert Triage",
    desc: "Advanced algorithmic noise reduction to eliminate false-positive fatigue, allowing your engineers to focus exclusively on validated critical threats.",
  },
  {
    icon: Radar,
    title: "Threat Intelligence Integration",
    desc: "Ingestion of global threat feeds to proactively hunt for emerging adversary campaigns before they reach your external perimeter.",
  },
  {
    icon: FileText,
    title: "Executive & Technical Reporting",
    desc: "Comprehensive monthly executive summaries and deep-dive technical metrics detailing overall posture, SLA compliance, and mitigated risks.",
  },
  {
    icon: PhoneCall,
    title: "Instant Incident Escalation",
    desc: "Seamless, immediate transition from detection to active containment with our dedicated emergency Incident Response command team.",
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

export default function ManagedOverview() {
  return (
    <div className="bg-[#05070d] text-white px-6 md:px-12 py-14 md:py-16 lg:py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* ── SERVICE OVERVIEW ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-20 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
              <span>Operational Excellence</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Managed SOC <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Operations
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="space-y-5 text-gray-300 text-sm md:text-base leading-relaxed">
            <p>
              Building and running an in-house Security Operations Center is resource-intensive. NoaSec&apos;s Managed SOC Operations service delivers continuous 24/7 monitoring, threat detection, and incident triage — powered by industry-standard SIEM platforms.
            </p>
            <p className="text-gray-400">
              Our Tier 1 to Tier 3 security analysts operate around the clock, providing enterprise-grade protection, immediate anomaly containment, and compliance assurance without costly overhead.
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
              End-to-end operational capabilities integrated into your enterprise.
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
                    24/7 SLA GUARANTEED
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