"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, HardDrive, Binary, GraduationCap } from "lucide-react";

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
    title: "Legally Admissible Evidence",
    desc: "Every artifact is gathered using write-blockers and validated forensic imaging tools, ensuring zero contamination.",
  },
  {
    title: "Cryptographic Integrity Verification",
    desc: "Dual SHA-256 and MD5 cryptographic hashes calculated at the scene to prove data has not been modified.",
  },
  {
    title: "Court-Accepted Documentation",
    desc: "Standardized chain-of-custody logs detailing evidence handlers, transfer dates, and storage locations.",
  },
  {
    title: "Rapid Emergency Deployment",
    desc: "Rapid response capability to arrive on-site or initiate remote collection before volatile evidence evaporates.",
  },
];

const relatedServices = [
  {
    title: "Disk & Memory Forensics",
    desc: "Deep forensic carving of disk images and RAM dumps acquired during evidence gathering.",
    href: "/services/disk-memory-forensics",
    icon: HardDrive,
  },
  {
    title: "Malware Analysis Lab",
    desc: "Reverse engineering suspicious binaries and scripts discovered on seized machines.",
    href: "/services/malware-analysis",
    icon: Binary,
  },
];

export default function DigitalBenefitsSection() {
  return (
    <div className="bg-[#05070d] text-white border-t border-white/5 py-14 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        {/* ── KEY BENEFITS ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#091222]/80 backdrop-blur-xl p-2 shadow-2xl"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src="/forensics.webp"
                alt="Digital Evidence Collection Hardware"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/80 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-lg bg-[#070d18]/90 border border-white/10 px-3.5 py-2 backdrop-blur-md">
              <span className="text-xs font-mono text-cyan-300">CUSTODY LOG: LOCKED</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </motion.div>

          {/* Right — benefits */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
              <span>Legal Protection</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
              Why Forensic Collection <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Matters
              </span>
            </h2>

            <ul className="space-y-6">
              {benefits.map((b, i) => (
                <motion.li
                  key={b.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="glass-card p-5 flex items-start gap-4"
                >
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base mb-1">{b.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{b.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── RELATED SERVICES + TRAINING ── */}
        <section className="border-t border-white/10 pt-12 md:pt-14 lg:pt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Related Forensic Capabilities
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Explore end-to-end investigation capabilities for enterprise litigation.
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left — 2 service cards */}
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
                    className="glass-card p-6 flex flex-col justify-between h-full group"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                        <Icon size={20} />
                      </div>
                      <h4 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors mb-2">
                        {s.title}
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span>Explore</span>
                      <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}

            {/* Right — Training card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="glass-card p-6 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                  <GraduationCap size={20} />
                </div>
                <p className="text-[10px] font-mono font-bold tracking-wider text-cyan-400 uppercase mb-1">
                  OFFICIAL CERTIFICATION
                </p>
                <h4 className="font-bold text-white text-base mb-2">
                  Certified Cybersecurity Professional (NCCP)
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  Train your internal incident responders in digital forensics and evidence preservation.
                </p>
              </div>

              <Link
                href="/courses/certified-cybersecurity-professional"
                className="btn-secondary text-center text-xs"
              >
                View NCCP Curriculum
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}