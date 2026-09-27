"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, Award, TrendingUp, Globe, ShieldAlert, Network, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

const pathway = [
  {
    step: "01. Prerequisite",
    title: "NCSA Associate",
    desc: "Cyber Security Associate — Foundational literacy, networking, and Linux command-line skills.",
    current: false,
    href: "/courses/noasec-cyber-security-associate",
    icon: CheckCircle2,
  },
  {
    step: "02. Current Enrolment",
    title: "NCD Defender",
    desc: "Cyber Defender Specialization — Practical ethical hacking, web auditing, and defensive mitigation.",
    current: true,
    href: "/courses/noasec-cyber-defender",
    icon: Award,
  },
  {
    step: "03. Advanced Apex",
    title: "NCCP Professional",
    desc: "Certified Cybersecurity Professional — Dual-track offensive pentesting and defensive infrastructure mastery.",
    current: false,
    href: "/courses/certified-cybersecurity-professional",
    icon: TrendingUp,
  },
];

const services = [
  {
    title: "Web Application Pentesting",
    desc: "Deep-dive offensive assessments targeting OWASP Top 10 vulnerabilities.",
    href: "/services/web-application-penetration-testing",
    icon: Globe,
  },
  {
    title: "Vulnerability Assessment",
    desc: "Automated and manual audits evaluating enterprise attack surfaces.",
    href: "/services/vulnerability-assessment-services",
    icon: ShieldAlert,
  },
  {
    title: "Network Penetration Testing",
    desc: "Adversarial simulations validating internal and external firewall boundaries.",
    href: "/services/network-penetration-testing",
    icon: Network,
  },
];

export default function CertificationPathway() {
  return (
    <div className="bg-[#05070d] text-white border-t border-white/5 py-14 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        {/* ── CERTIFICATION PATHWAY ── */}
        <section>
          <div className="text-center mb-10 lg:mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
              <span>Career Roadmap</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Certification <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Pathway</span>
            </h2>
          </div>

          {/* Pathway cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 lg:mb-12">
            {pathway.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={`glass-card p-7 flex flex-col justify-between group ${
                    p.current ? "border-cyan-500/60 bg-gradient-to-br from-cyan-500/10 to-transparent shadow-[0_0_30px_rgba(14,165,233,0.15)]" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Icon size={16} className={p.current ? "text-cyan-300" : "text-gray-500"} />
                        <span className={`text-[10px] font-mono font-bold tracking-widest uppercase ${
                          p.current ? "text-cyan-300" : "text-gray-500"
                        }`}>
                          {p.step}
                        </span>
                      </div>
                      {p.current && (
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed mb-6">{p.desc}</p>
                  </div>

                  <Link
                    href={p.href}
                    className="inline-flex items-center text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors"
                  >
                    <span>View Curriculum</span>
                    <ArrowRight size={13} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* CTA row */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/courses" className="btn-secondary">
              View All Learning Tracks
            </Link>
            <Link href="/contact" className="btn-primary">
              Enrol in NCD Now <ArrowRight size={15} />
            </Link>
          </div>
        </section>

        {/* ── RELATED SECURITY SERVICES ── */}
        <section className="border-t border-white/10 pt-12 md:pt-14 lg:pt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Related Security Services
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Real-world implementations of the skills taught in the NCD certification.
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
                      <span>Explore service</span>
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
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Ready to Step Into Defensive Cybersecurity?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
              Join the ranks of certified cyber defenders. Our next cohort starts soon with limited seating capacity.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Enrol Now <ArrowRight size={15} />
              </Link>
              <Link href="/courses" className="btn-secondary">
                Explore All Tracks
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}