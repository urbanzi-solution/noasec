"use client";

import { motion } from "framer-motion";
import { AlertTriangle, KeyRound, Globe2, ShieldAlert } from "lucide-react";

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
    title: "Critical Cloud Misconfigurations",
    desc: "Unprotected public S3 buckets, exposed RDS databases, and permissive security groups account for over 80% of multi-cloud data breaches.",
    icon: AlertTriangle,
  },
  {
    title: "Over-Privileged Identity & IAM Sprawl",
    desc: "Identity is the true cloud perimeter. Excessive wildcard permissions and dormant service roles allow adversaries to pivot rapidly across accounts.",
  },
  {
    title: "Exposed API Gateways & Kubernetes",
    desc: "Publicly accessible control planes, unauthenticated Swagger docs, and misconfigured ingress controllers provide direct unauthorized entry points.",
    icon: Globe2,
  },
];

const scorecard = [
  {
    label: "External API Attack Surface",
    status: "VULNERABILITY DETECTED",
    color: "text-amber-400",
  },
  {
    label: "IAM Least-Privilege Drift",
    status: "92% EXCESS PERMISSIONS",
    color: "text-amber-400",
  },
  {
    label: "Cloud Storage Encryption",
    status: "PARTIAL COMPLIANCE",
    color: "text-cyan-400",
  },
];

export default function CloudComplexity() {
  return (
    <div className="bg-[#05070d] text-white border-t border-white/5 py-14 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* ── LEFT (7 cols) ── */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
              <span>The Attack Surface</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              The Reality of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Multi-Cloud Complexity
              </span>
            </h2>

            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-10 max-w-xl">
              Modern cloud architectures are dynamic, containerized, and dangerously complex. Rapid CI/CD deployment cycles often prioritize feature delivery over security, leaving your infrastructure exposed to automated threat actor sweeps.
            </p>

            <div className="flex flex-col gap-6">
              {challenges.map((c, i) => {
                const Icon = c.icon || KeyRound;
                return (
                  <motion.div
                    key={c.title}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="glass-card p-5 flex items-start gap-4"
                  >
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex-shrink-0 mt-0.5">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">{c.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{c.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ── RIGHT — Scorecard (5 cols) ── */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#091222]/80 backdrop-blur-xl p-6 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">
                  # CLOUD_POSTURE_TELEMETRY
                </span>
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Rows */}
              <div className="flex flex-col gap-4">
                {scorecard.map((s, i) => (
                  <motion.div
                    key={s.label}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <span className="text-xs font-medium text-gray-300">{s.label}</span>
                    <span className={`text-xs font-mono font-bold tracking-wider ${s.color}`}>
                      {s.status}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2">
                <ShieldAlert size={14} className="text-cyan-400" />
                <p className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
                  Continuous CSPM Engine Active
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}