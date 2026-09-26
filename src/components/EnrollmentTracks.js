"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Award, Shield } from "lucide-react";

const tracks = [
  {
    title: "NCSA — Cyber Security Associate",
    code: "TRACK-001",
    duration: "1 Month",
    level: "Beginner",
    href: "/courses/noasec-cyber-security-associate",
  },
  {
    title: "NCD — Cyber Defender",
    code: "TRACK-002",
    duration: "2 Months",
    level: "Foundational",
    href: "/courses/noasec-cyber-defender",
  },
  {
    title: "NCCP — Certified Cybersecurity Professional",
    code: "TRACK-003",
    duration: "4 Months",
    level: "Advanced Flagship",
    href: "/courses/certified-cybersecurity-professional",
  },
  {
    title: "NCSA-SOC — Certified SOC Analyst",
    code: "TRACK-004",
    duration: "1–2 Months",
    level: "Specialist",
    href: "/courses/certified-soc-analyst",
  },
  {
    title: "NCDF — Digital Forensics Analyst",
    code: "TRACK-005",
    duration: "1–2 Months",
    level: "Specialist",
    href: "/contact",
  },
];

export default function EnrollmentTracks() {
  return (
    <section id="tracks" className="bg-[#05070d] text-white px-6 md:px-12 py-20 border-b border-white/5 scroll-mt-20">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-2">
              <Shield size={13} className="text-cyan-400" />
              <span>Syllabus Quick Index</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
              Enrollment Tracks &amp; Schedule
            </h2>
          </div>
          <span className="text-xs font-mono font-semibold text-cyan-400 tracking-wider bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
            ADMISSIONS OPEN · 2026
          </span>
        </div>

        {/* Interactive List */}
        <div className="glass-card rounded-2xl border border-white/10 overflow-hidden divide-y divide-white/5">
          {tracks.map((t, i) => (
            <motion.div
              key={t.code}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
            >
              <Link
                href={t.href}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-5 hover:bg-white/[0.04] transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-400/20 px-2.5 py-1 rounded-md">
                    {t.code}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {t.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Difficulty Level: <span className="text-gray-300 font-medium">{t.level}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6">
                  <div className="flex items-center gap-1.5 text-xs text-gray-300 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    <Clock size={13} className="text-cyan-400" />
                    <span>{t.duration}</span>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-cyan-400 group-hover:text-cyan-300">
                    <span className="hidden sm:inline">View Details</span>
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}