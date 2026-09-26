"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Cloud, Zap, Network, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

const features = [
  {
    title: "Secure Host Infrastructure",
    desc: "Every operating system instance is deployed using cryptographically signed images and secure boot baselines.",
  },
  {
    title: "Zero Misconfiguration Drift",
    desc: "Infrastructure as Code (IaC) ensures continuous drift detection, automated policy enforcement, and config immutability.",
  },
  {
    title: "Proactive Predictive Maintenance",
    desc: "Machine telemetry and predictive analysis identify disk or hardware bottlenecks before they cause downtime.",
  },
  {
    title: "Audit-Ready Documentation",
    desc: "Granular architectural runbooks and change management tracking for every privileged administrative task.",
  },
];

const relatedServices = [
  {
    title: "Vulnerability Assessment",
    desc: "Continuous automated scanning and CVE prioritization.",
    href: "/services/vulnerability-assessment-services",
    icon: ShieldCheck,
  },
  {
    title: "Cloud Infrastructure",
    desc: "Multi-cloud AWS, Azure, and GCP security posture management.",
    href: "/services/cloud-security-solutions",
    icon: Cloud,
  },
  {
    title: "Incident Response",
    desc: "Emergency breach containment and forensic investigation.",
    href: "/services/incident-response-services",
    icon: Zap,
  },
  {
    title: "Network Penetration Testing",
    desc: "Rigorous adversary simulations validating network boundaries.",
    href: "/services/network-penetration-testing",
    icon: Network,
  },
];

export default function EngineeredSection() {
  return (
    <div className="bg-[#05070d] text-white border-t border-white/5 py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        {/* ── ENGINEERED FOR RELIABILITY ── */}
        <section>
          <div className="mb-12 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
              <span>Operational Resilience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Engineered for Structural Reliability
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Our administrative methodology removes the human-error factor from infrastructure management, replacing reactive fire-fighting with proactive structural integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card p-6 flex items-start gap-4"
              >
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 flex-shrink-0 mt-0.5">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">{f.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── RELATED SERVICES ── */}
        <section className="border-t border-white/10 pt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white">Related Security Capabilities</h3>
              <p className="text-sm text-gray-400 mt-1">Explore services that reinforce enterprise infrastructure security.</p>
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
            {relatedServices.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <Link
                    href={s.href}
                    className="glass-card p-6 block group h-full"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                      <Icon size={18} />
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                      {s.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed mb-4">
                      {s.desc}
                    </p>
                    <div className="flex items-center text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span>Explore</span>
                      <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-[#0c1c38] via-[#081224] to-[#05070d] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_50px_rgba(14,165,233,0.12)]">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-tight">
              Ready to harden your infrastructure?
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Our systems engineers will assess your current environment and deliver an automated hardening roadmap from day one.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 flex-shrink-0">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Request Consultation <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}