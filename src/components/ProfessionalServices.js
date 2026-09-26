"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldAlert, Radar, Zap, ArrowRight, ShieldCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

const services = [
  {
    title: "Managed SOC Operations",
    desc: "24/7/365 continuous monitoring, alert triage, and threat detection powered by certified security analysts.",
    href: "/services/managed-soc",
    icon: ShieldAlert,
  },
  {
    title: "Threat Intelligence & Hunting",
    desc: "Identifying hidden adversaries before impact through proactive hypothesis-driven threat hunting.",
    href: "/services/threat-intelligence",
    icon: Radar,
  },
  {
    title: "Incident Response Services",
    desc: "Rapid breach containment, surgical digital forensics, and emergency disaster recovery workflows.",
    href: "/services/incident-response-services",
    icon: Zap,
  },
];

const related = [
  { title: "Web App Penetration Testing", href: "/services/web-application-penetration-testing" },
  { title: "Network Penetration Testing", href: "/services/network-penetration-testing" },
  { title: "Cloud Security Solutions", href: "/services/cloud-security-solutions" },
  { title: "Server & Firewall Hardening", href: "/services/server-hardening" },
  { title: "Malware Analysis Lab", href: "/services/malware-analysis" },
  { title: "Digital Evidence Collection", href: "/services/digital-evidence-collection" },
];

export default function ProfessionalServices() {
  return (
    <div className="bg-[#05070d] text-white border-t border-white/5 py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        {/* ── PROFESSIONAL SECURITY SERVICES ── */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-3">
                <ShieldCheck size={14} className="text-cyan-400" />
                <span>Enterprise Deployments</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Professional Security Services
              </h2>
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
                    className="glass-card p-7 flex flex-col justify-between h-full group"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                        <Icon size={22} />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                        {s.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed mb-6">
                        {s.desc}
                      </p>
                    </div>
                    <div className="flex items-center text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span>Explore Service</span>
                      <ArrowRight size={13} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── RELATED CAPABILITIES ── */}
        <section className="border-t border-white/10 pt-20">
          <h3 className="text-2xl font-bold text-white mb-8">
            Adjacent Security Capabilities
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="glass-card p-5 flex items-center justify-between group"
                >
                  <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </span>
                  <ArrowRight size={14} className="text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-[#0c1c38] via-[#081224] to-[#05070d] p-10 md:p-14 text-center relative overflow-hidden shadow-[0_0_50px_rgba(14,165,233,0.12)]">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Ready to Accelerate Your Career?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
              Join the next cohort of certified security operations professionals and build your expertise on the front lines of digital defense.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Enrol Now <ArrowRight size={15} />
              </Link>
              <Link href="/courses" className="btn-secondary">
                View All Courses
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}