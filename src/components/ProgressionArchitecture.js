"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, Network, ShieldCheck, AlertTriangle, Cloud, Server, ArrowRight, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" },
  }),
};

const pathway = [
  {
    label: "Foundation Track",
    title: "NCSA / NCD",
    desc: "Fundamental Digital Vigilance & Basic Ethical Hacking",
    current: false,
    href: "/courses/noasec-cyber-defender",
  },
  {
    label: "Apex Specialization",
    title: "THE APEX: NCCP",
    desc: "Certified Cybersecurity Professional (Dual Offensive & Defensive)",
    current: true,
    href: "/courses/certified-cybersecurity-professional",
  },
  {
    label: "Advanced Operations",
    title: "NCSA-SOC / CDFA",
    desc: "Enterprise SOC Operations & Advanced Digital Forensics",
    current: false,
    href: "/courses/certified-soc-analyst",
  },
];

const services = [
  {
    title: "Web Application Pentesting",
    desc: "Securing modern web applications against OWASP Top 10 vulnerabilities.",
    href: "/services/web-application-penetration-testing",
    icon: Globe,
  },
  {
    title: "Network Penetration Testing",
    desc: "Rigorous stress testing of perimeter and internal network infrastructure.",
    href: "/services/network-penetration-testing",
    icon: Network,
  },
  {
    title: "Managed SOC Operations",
    desc: "Continuous 24/7/365 monitoring, alert triage, and threat detection services.",
    href: "/services/managed-soc",
    icon: ShieldCheck,
  },
  {
    title: "Incident Response",
    desc: "Rapid breach containment, eradication, and disaster recovery workflows.",
    href: "/services/incident-response-services",
    icon: AlertTriangle,
  },
  {
    title: "Cloud Security Solutions",
    desc: "Auditing multi-cloud AWS, Azure, and GCP workloads for posture drift.",
    href: "/services/cloud-security-solutions",
    icon: Cloud,
  },
  {
    title: "Server & Firewall Hardening",
    desc: "Deep kernel and firewall policy hardening aligned with CIS benchmarks.",
    href: "/services/server-hardening",
    icon: Server,
  },
];

export default function ProgressionArchitecture() {
  return (
    <div className="bg-[#05070d] text-white border-t border-white/5 py-14 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        {/* ── PROGRESSION ARCHITECTURE ── */}
        <section>
          <div className="text-center mb-10 lg:mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
              <span>Career Roadmap</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Progression <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Architecture</span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-gray-400">
              The continuous multi-tier credentialing model of the NoaSec academy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pathway.map((p, i) => (
              <motion.div
                key={p.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`glass-card p-8 flex flex-col justify-between relative overflow-hidden group ${
                  p.current ? "border-cyan-500/60 bg-gradient-to-br from-cyan-500/10 to-transparent shadow-[0_0_30px_rgba(14,165,233,0.15)]" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-mono font-bold tracking-widest uppercase ${
                      p.current ? "text-cyan-300" : "text-gray-500"
                    }`}>
                      {p.label}
                    </span>
                    {p.current && (
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>

                <Link
                  href={p.href}
                  className="inline-flex items-center text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors"
                >
                  <span>Explore Track</span>
                  <ArrowRight size={13} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CORE DEFENSIVE SERVICES ── */}
        <section className="border-t border-white/10 pt-12 md:pt-14 lg:pt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-3">
                <span>Ecosystem Synergy</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Core Defensive Services
              </h3>
            </div>
            <Link
              href="/services"
              className="text-xs font-semibold tracking-wider uppercase text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
            >
              <span>Explore All Services</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
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
                    className="glass-card p-6 flex flex-col justify-between h-full group"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                        <Icon size={20} />
                      </div>
                      <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                        {s.title}
                      </h4>
                      <p className="text-xs text-gray-400 leading-relaxed mb-4">
                        {s.desc}
                      </p>
                    </div>
                    <div className="flex items-center text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span>View details</span>
                      <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── ENROLLMENT CTA ── */}
        <section className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-[#0c1c38] via-[#081224] to-[#05070d] p-10 md:p-14 text-center relative overflow-hidden shadow-[0_0_50px_rgba(14,165,233,0.12)]">
          <div className="max-w-2xl mx-auto relative z-10">
            <p className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-3">
              BEGIN YOUR APEX JOURNEY
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Become a Certified Cybersecurity Professional
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
              The NCCP is the most comprehensive technical certification in the NoaSec academy. Enrol today to secure your place in the upcoming cohort.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Enrol Now <ArrowRight size={15} />
              </Link>
              <Link href="/courses" className="btn-secondary">
                View All Courses
              </Link>
            </div>
            <p className="text-[11px] font-mono text-gray-500 uppercase tracking-widest mt-6">
              Next Cohort Starting Soon • Limited Candidate Capacity
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}