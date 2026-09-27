"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, Cloud, Server, Shield, GraduationCap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

const benefits = [
  {
    title: "Zero-Drift Architecture",
    desc: "Identify and automatically remediate cloud configuration drift before it introduces vulnerabilities in live production.",
  },
  {
    title: "Blast Radius Minimization",
    desc: "Contain unauthorized access through micro-segmentation and strict IAM boundaries, isolating compromised containers.",
  },
  {
    title: "Rapid Compliance Certification",
    desc: "Accelerate audits for SOC2, HIPAA, PCI-DSS, and ISO 27001 with cryptographically verifiable security evidence.",
  },
  {
    title: "Unified Multi-Cloud Clarity",
    desc: "Gain an aggregated, centralized view of your risk posture across AWS, Microsoft Azure, and Google Cloud Platform.",
  },
];

const ecosystem = [
  {
    title: "Vulnerability Assessment",
    desc: "Scanning cloud IP ranges and assets.",
    href: "/services/vulnerability-assessment-services",
    icon: ShieldCheck,
  },
  {
    title: "Server & Firewall Hardening",
    desc: "CIS benchmark baseline configuration.",
    href: "/services/server-hardening",
    icon: Server,
  },
  {
    title: "Managed SOC Operations",
    desc: "24/7 SIEM monitoring of cloud logs.",
    href: "/services/managed-soc",
    icon: Shield,
  },
  {
    title: "NCCP Cloud Defense Module",
    desc: "Upskill internal DevOps engineers.",
    href: "/courses/certified-cybersecurity-professional",
    icon: GraduationCap,
    tag: "TRAINING",
  },
];

export default function StrategicBenefits() {
  return (
    <div className="bg-[#05070d] text-white px-6 md:px-12 py-14 md:py-16 lg:py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* ── STRATEGIC BUSINESS BENEFITS ── */}
        <section className="glass-card p-8 md:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 items-start">
            {/* Left — title (4 cols) */}
            <div className="lg:col-span-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
                <span>Enterprise ROI</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-3">
                Strategic Business Benefits
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Moving beyond superficial checkbox compliance to active, resilient multi-cloud security engineering.
              </p>
            </div>

            {/* Right — 2x2 benefits (8 cols) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="p-5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-start"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={16} className="text-cyan-400" />
                    <h3 className="text-sm font-bold text-white">{b.title}</h3>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed pl-6">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ECOSYSTEM SUPPORT ── */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Complementary Security Services
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Expand cloud defense with continuous monitoring and systems administration.
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
            {ecosystem.map((e, i) => {
              const Icon = e.icon;
              return (
                <motion.div
                  key={e.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <Link
                    href={e.href}
                    className="glass-card p-6 block group h-full"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                        <Icon size={18} />
                      </div>
                      {e.tag && (
                        <span className="text-[9px] font-mono font-bold tracking-wider text-cyan-400 uppercase">
                          {e.tag}
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5 leading-snug">
                      {e.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed mb-4">
                      {e.desc}
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
        <section className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-[#0c1c38] via-[#081224] to-[#05070d] p-10 md:p-14 text-center relative overflow-hidden shadow-[0_0_50px_rgba(14,165,233,0.12)]">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              Secure Your Cloud Infrastructure Today
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mb-8 leading-relaxed">
              Connect with our cloud security architects to audit and harden your AWS, Azure, or GCP environment.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Request Cloud Audit <ArrowRight size={15} />
              </Link>
              <Link
                href="/services"
                className="btn-secondary"
              >
                View Services Catalog
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}