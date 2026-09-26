"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldAlert, Globe, ShieldCheck, Award } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: "easeOut" },
  }),
};

const beyondCards = [
  {
    title: "Vulnerability Assessment",
    desc: "Professional audit services for enterprise infrastructure",
    img: "/vuln-assessment.webp",
    href: "/services/vulnerability-assessment-services",
  },
  {
    title: "Network Penetration Testing",
    desc: "Simulated adversarial attacks to harden network defenses",
    img: "/network-pentest.webp",
    href: "/services/network-penetration-testing",
  },
];

export default function PathToMastery() {
  return (
    <div className="bg-[#05070d] text-white border-t border-white/5 py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        {/* ── YOUR PATH TO MASTERY ── */}
        <section className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
              <Award size={14} className="text-cyan-400" />
              <span>Career Trajectory</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
              Your Path to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Mastery</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-10 max-w-xl mx-auto">
              The NCSA is just the beginning. Graduates are fast-tracked into our intermediate and advanced specialized tracks, positioning you for the most demanding roles in cybersecurity.
            </p>
          </motion.div>

          {/* Next course card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            <Link
              href="/courses/noasec-cyber-defender"
              className="glass-card p-8 flex items-center justify-between group text-left mb-8 border-cyan-500/40 bg-gradient-to-br from-cyan-500/10 to-transparent"
            >
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400 uppercase mb-1 block">
                  RECOMMENDED NEXT TRACK
                </span>
                <p className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  Cyber Defender (NCD)
                </p>
                <p className="text-sm text-gray-400">
                  Intermediate Hands-on Ethical Hacking &amp; Incident Defense (2 Months)
                </p>
              </div>
              <ArrowRight size={20} className="text-cyan-400 group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4" />
            </Link>
          </motion.div>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/courses" className="btn-secondary">
              View All Learning Paths
            </Link>
            <Link href="/contact" className="btn-primary">
              Contact Us to Enrol <ArrowRight size={15} />
            </Link>
          </div>
        </section>

        {/* ── RELATED SECURITY SERVICES ── */}
        <section className="border-t border-white/10 pt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Related Security Services
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Explore services aligned with skills taught in the NCSA curriculum.
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Link
                href="/services/vulnerability-assessment-services"
                className="glass-card p-6 flex flex-col justify-between h-full group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                    <ShieldAlert size={20} />
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    Vulnerability Assessment
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    Identify and prioritize security weaknesses across enterprise networks.
                  </p>
                </div>
                <div className="flex items-center text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <Link
                href="/services/web-application-penetration-testing"
                className="glass-card p-6 flex flex-col justify-between h-full group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                    <Globe size={20} />
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    Web App Pentesting
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    OWASP-aligned penetration testing to secure modern web apps.
                  </p>
                </div>
                <div className="flex items-center text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/services/managed-soc"
                className="glass-card p-6 flex flex-col justify-between h-full group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                    <ShieldCheck size={20} />
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    Managed SOC Operations
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    24/7 continuous monitoring, threat detection, and SIEM management.
                  </p>
                </div>
                <div className="flex items-center text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── BEYOND THE CLASSROOM ── */}
        <section className="border-t border-white/10 pt-20">
          <h3 className="text-2xl font-bold text-white mb-8">
            Beyond the Classroom: Enterprise Defense
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {beyondCards.map((c, i) => (
              <motion.div
                key={c.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link
                  href={c.href}
                  className="group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 aspect-[16/9] bg-[#091222]/80"
                >
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-[#05070d]/50 to-transparent" />
                  <div className="relative z-10 p-6">
                    <p className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                      {c.title}
                    </p>
                    <p className="text-xs text-gray-300 flex items-center gap-1">
                      <span>{c.desc}</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform text-cyan-400" />
                    </p>
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