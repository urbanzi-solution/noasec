"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Eye, Search, FileText, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

const advantages = [
  {
    title: "Impact Minimization",
    desc: "Reduce the average organizational downtime and cost of an outage by 40% through standardized system automation.",
    icon: ShieldCheck,
  },
  {
    title: "Forensic Preservation",
    desc: "Maintain verifiable audit logs, user session replays, and configuration histories that meet strict compliance demands.",
    icon: Eye,
  },
  {
    title: "Root Cause Remediation",
    desc: "Diagnose architectural bottlenecks and kernel panics rapidly to eliminate underlying infrastructure fragility permanently.",
    icon: Search,
  },
  {
    title: "Structured Runbooks",
    desc: "Clear, battle-tested operational runbooks and disaster recovery procedures ensuring continuity under all conditions.",
    icon: FileText,
  },
];

const ecosystemItems = [
  { title: "Managed SOC Operations", desc: "24/7/365 continuous monitoring and SIEM triage.", href: "/services/managed-soc" },
  { title: "Server & Firewall Hardening", desc: "CIS Benchmarks baseline configuration auditing.", href: "/services/server-hardening" },
  { title: "Cloud Security Solutions", desc: "Multi-cloud IAM, CSPM, and container protection.", href: "/services/cloud-security-solutions" },
  { title: "Incident Response", desc: "Rapid breach containment and recovery workflows.", href: "/services/incident-response-services" },
];

export default function OperationalAdvantages() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="bg-[#05070d] text-white border-t border-white/5 py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        {/* ── OPERATIONAL ADVANTAGES ── */}
        <section>
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
              <span>System Operations</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Operational <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Advantages</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left — selectable list (6 cols) */}
            <div className="lg:col-span-6 flex flex-col gap-3">
              {advantages.map((a, i) => {
                const Icon = a.icon;
                const isSelected = selected === i;

                return (
                  <button
                    key={a.title}
                    onClick={() => setSelected(i)}
                    className={`text-left p-5 rounded-xl border transition-all duration-300 ${
                      isSelected
                        ? "border-cyan-500/60 bg-cyan-500/10 shadow-[0_0_30px_rgba(14,165,233,0.15)]"
                        : "glass-card hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span className={`mt-0.5 flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "bg-white/5 text-gray-400"
                      }`}>
                        <Icon size={18} />
                      </span>
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <p className="text-base font-bold text-white">{a.title}</p>
                          {isSelected && (
                            <span className="text-[9px] font-mono font-bold tracking-widest text-cyan-300 uppercase border border-cyan-500/40 bg-cyan-500/20 px-2 py-0.5 rounded-full">
                              ACTIVE FOCUS
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{a.desc}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right — image HUD frame (6 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#091222]/80 backdrop-blur-xl p-2 shadow-2xl"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/terminal.webp"
                  alt="Systems Command Center Terminal"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/80 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-lg bg-[#070d18]/90 border border-white/10 px-3.5 py-2 backdrop-blur-md">
                <span className="text-xs font-mono text-cyan-300">SERVER CLUSTER STATUS: HEALTHY</span>
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── ECOSYSTEM SUPPORT ── */}
        <section className="border-t border-white/10 pt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Complementary Infrastructure Services
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Expand your IT administration with end-to-end security operations.
              </p>
            </div>
            <Link
              href="/services"
              className="text-xs font-semibold tracking-wider uppercase text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
            >
              <span>View All Services</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ecosystemItems.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link
                  href={item.href}
                  className="glass-card p-6 block group h-full"
                >
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <div className="flex items-center text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span>Explore</span>
                    <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}