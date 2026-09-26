"use client";

import { motion } from "framer-motion";
import { Terminal, Shield, Users, Activity, Wrench, Database } from "lucide-react";

const deliverables = [
  {
    icon: Terminal,
    title: "Linux Kernel & Shell Hardening",
    desc: "Securing production kernels, SSH bastion access, file permissions, and minimizing attack surfaces through CIS baseline enforcement.",
  },
  {
    icon: Shield,
    title: "Windows Server & AD Architecture",
    desc: "Active Directory orchestration with robust Group Policy Objects (GPO), Kerberos hardening, and tiered administrative domain design.",
  },
  {
    icon: Users,
    title: "Least-Privilege User Access Control",
    desc: "Implementing Least Privilege Access (LPA) principles, sudoers scoping, and Multi-Factor Authentication (MFA) across all endpoints and servers.",
  },
  {
    icon: Activity,
    title: "System Telemetry & Health Checks",
    desc: "24/7 server health monitoring, resource threshold alerts, and centralized syslog aggregation to catch anomalies before downtime occurs.",
  },
  {
    icon: Wrench,
    title: "Automated Patch Management",
    desc: "Scheduled, staged, and validated OS security updates for Linux distributions and Windows Server to permanently eliminate known CVEs.",
  },
  {
    icon: Database,
    title: "Immutable Encrypted Backup Workflows",
    desc: "Automated, encrypted, and off-site backup pipelines following the 3-2-1 rule to guarantee rapid ransomware and disaster recovery.",
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

export default function LinuxOverview() {
  return (
    <div className="bg-[#05070d] text-white px-6 md:px-12 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* ── SERVICE OVERVIEW ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
              <span>Infrastructure Reliability</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Resilient Server <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Administration
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="space-y-5 text-gray-300 text-sm md:text-base leading-relaxed">
            <p>
              Secure, well-maintained systems are the foundation of a resilient enterprise IT footprint.
            </p>
            <p className="text-gray-400">
              NoaSec&apos;s Linux &amp; Windows Administration service delivers expert system setup, configuration, user access management, and ongoing maintenance — engineered with a security-first mindset that mitigates vulnerability risks at the infrastructure layer.
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
              Core administrative pillars managed by our certified systems engineers.
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
                    SYSADMIN MANAGED
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