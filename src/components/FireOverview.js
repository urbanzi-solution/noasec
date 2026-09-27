"use client";

import { motion } from "framer-motion";
import { Cpu, Network, ShieldCheck, KeyRound, FileCheck2 } from "lucide-react";

const deliverables = [
  {
    icon: Cpu,
    title: "Operating System Hardening",
    desc: "Deep-level kernel tuning, removal of non-critical system packages, and disabling unneeded daemons to eliminate potential exploit vectors at the OS core.",
  },
  {
    icon: Network,
    title: "Port & Protocol Minimization",
    desc: "Comprehensive auditing and closing of all unnecessary networking ports and communication channels to prevent unauthorized lateral movement.",
  },
  {
    icon: ShieldCheck,
    title: "Strict Rule Auditing",
    desc: "Granular analysis of existing firewall policies, eliminating overly permissive Any-Any rules and enforcing strict identity-based ingress/egress filtering.",
  },
  {
    icon: KeyRound,
    title: "SSH & MFA Enforcement",
    desc: "Enforcing modern cryptographic key-based authentication, bastion jump hosts, and multi-factor authentication (MFA) across all administrative access points.",
  },
  {
    icon: FileCheck2,
    title: "CIS Benchmark Compliance Reports",
    desc: "Comprehensive documentation including pre- and post-hardening compliance scores based on CIS Benchmarks and industry regulatory standards.",
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

export default function FireOverview() {
  return (
    <div className="bg-[#05070d] text-white px-6 md:px-12 py-14 md:py-16 lg:py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* ── SERVICE OVERVIEW ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-20 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
              <span>Infrastructure Hardening</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Precision Security <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Architecture
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="space-y-5 text-gray-300 text-sm md:text-base leading-relaxed">
            <p>
              Default server and firewall configurations are rarely secure out of the box. NoaSec&apos;s Server &amp; Firewall Hardening service systematically reduces your attack surface by applying security baselines, disabling unnecessary services, and configuring firewalls with least-access rule sets aligned with CIS Benchmarks.
            </p>
            <p className="text-gray-400">
              Our approach isn&apos;t just about closing ports — it&apos;s about structural defense-in-depth. We analyze every layer of your server stack and firewall policy to establish an unyielding &quot;deny-by-default&quot; security posture.
            </p>
          </div>
        </section>

        {/* ── TECHNICAL DELIVERABLES ── */}
        <section>
          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              The Hardening Roadmap
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Rigorous technical steps implemented to eliminate configuration drift.
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
                    CIS BENCHMARK ALIGNED
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