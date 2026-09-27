"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import { Award, ArrowRight, ShieldCheck, Clock, Laptop, BookOpen, CheckCircle2 } from "lucide-react";

const metaStats = [
  { label: "Certification", value: "NCSA-SOC Certified", icon: Award },
  { label: "Duration", value: "1–2 Months", icon: Clock },
  { label: "Training Mode", value: "Online / Offline Lab", icon: Laptop },
  { label: "Prerequisite", value: "Security Basics / NCSA", icon: BookOpen },
];

const features = [
  {
    title: "Live Virtual SOC Lab",
    desc: "Engage with simulated enterprise breach incidents in an active Splunk, Wazuh & ELK environment.",
  },
  {
    title: "Tier 1 & Tier 2 Specialization",
    desc: "Real-world alert correlation, false-positive filtering, threat triage, and escalation playbooks.",
  },
  {
    title: "Threat Hunting & SIEM Telemetry",
    desc: "Master rule-writing, log parsing across Windows Event Logs & Syslog, and active containment.",
  },
];

export default function NCSOCHero() {
  return (
    <div className="bg-[#05070d] text-white bg-cyber-grid">
      {/* ── HERO SECTION ── */}
      <section className="relative lg:min-h-[85vh] flex items-center pt-24 md:pt-28 lg:pt-32 pb-10 md:pb-12 lg:pb-16 overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-100px] top-[15%] w-[500px] h-[500px] bg-cyan-500/15 blur-[140px] rounded-full" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { name: "Courses", href: "/courses" },
                { name: "SOC Analyst", href: "/courses/certified-soc-analyst" },
              ]}
            />
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>Specialist Defense Operations Track</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-5 tracking-tight text-white">
                Certified SOC Analyst <br />
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 text-transparent bg-clip-text">
                  (NCSA-SOC)
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Specialist Security Operations Center training — master real-time security monitoring, SIEM administration, log parsing, threat intelligence, and structured incident triage in an operational SOC environment.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link href="/contact" className="btn-primary">
                  Enroll in NCSA-SOC <ArrowRight size={15} />
                </Link>
                <Link href="/courses" className="btn-secondary">
                  Compare Courses
                </Link>
              </div>
            </motion.div>

            {/* Right Image (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative flex justify-center"
            >
              <div className="relative w-full max-w-md group">
                <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-cyan-400 z-20 pointer-events-none" />
                <div className="absolute -top-3 -right-3 w-8 h-8 border-r-2 border-t-2 border-cyan-400 z-20 pointer-events-none" />
                <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-cyan-400 z-20 pointer-events-none" />
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-cyan-400 z-20 pointer-events-none" />

                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#091222]/80 backdrop-blur-xl p-2 shadow-2xl">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] w-full">
                    <Image
                      src="/soc-dashboard.webp"
                      alt="SOC Operations Dashboard Simulation"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/90 via-transparent to-transparent" />
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-lg bg-[#070d18]/90 border border-white/10 px-3.5 py-2 backdrop-blur-md">
                    <span className="text-xs font-mono text-cyan-300">LIVE SIEM TELEMETRY</span>
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meta Stats Bar */}
      <div className="border-t border-b border-white/10 bg-[#070d18]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {metaStats.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.label} className="flex items-center gap-3.5 px-6 py-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                      {m.label}
                    </p>
                    <p className="text-sm font-bold text-white mt-0.5">{m.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Curriculum Highlights */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-14 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
              <span>Operational Blueprint</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
              Master the Bridge to Frontline SOC Analyst Positions
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
              The NCSA-SOC program develops actionable capability in Tier 1 and Tier 2 workflows. Students configure SIEM detection rules, investigate simulated multi-stage breaches, and practice active adversary containment.
            </p>

            <div className="space-y-4">
              {features.map((f) => (
                <div key={f.title} className="glass-card rounded-xl p-4 transition-all duration-200">
                  <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm mb-1">
                    <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                    <span>{f.title}</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed pl-6">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="glass-card rounded-2xl p-8 border-cyan-500/30 w-full max-w-lg">
              <h3 className="text-xl font-bold text-white mb-2">SOC Analyst Stack You&apos;ll Master</h3>
              <p className="text-xs text-gray-400 mb-6">Standard industrial SIEM, EDR, and packet capture toolkits.</p>

              <div className="grid grid-cols-2 gap-3 text-xs">
                {["Splunk Enterprise", "Wazuh SIEM / XDR", "Wireshark Packet Analysis", "ELK Stack (Elasticsearch)", "Suricata IDS / IPS", "Zeek Network Telemetry", "MISP Threat Sharing", "TheHive Incident Response"].map((tool) => (
                  <div key={tool} className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="truncate">{tool}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-white/10 pt-6 flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-cyan-400">100%</span>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">Practical Focus</p>
                </div>
                <Link href="/contact" className="btn-primary text-xs">
                  Apply for Next Batch <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}