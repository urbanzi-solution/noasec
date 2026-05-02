"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const tracks = [
  {
    title: "NCSA — Cyber Security Associate",
    code: "MODULE_CORE_001",
    duration: "1 Month",
    href: "/courses/noasec-cyber-security-associate",
  },
  {
    title: "NCD — Cyber Defender",
    code: "MODULE_DEF_002",
    duration: "2 Months",
    href: "/courses/noasec-cyber-defender",
  },
  {
    title: "NCCP — Certified Cybersecurity Professional",
    code: "MODULE_ADV_003",
    duration: "4 Months",
    href: "/courses/certified-cybersecurity-professional",
  },
  {
    title: "NCDF — Certified Digital Forensics Analyst",
    code: "MODULE_SPEC_004",
    duration: "1–2 Months",
    href: "/courses/noasec-certified-digital-forensics-analyst",
  },
  {
    title: "NCSA-SOC — Certified SOC Analyst",
    code: "MODULE_SPEC_005",
    duration: "1–2 Months",
    href: "/courses/certified-soc-analyst",
  },
];

export default function EnrollmentTracks() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* ── HEADER ── */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <div className="w-1 h-10 bg-blue-500 rounded-full" />
            <h1 className="text-3xl font-black tracking-tight uppercase text-white">
              Current Enrollment Tracks
            </h1>
          </div>
          <span className="text-xs font-mono font-semibold text-blue-400 tracking-widest hidden sm:block">
            [STATUS: ACTIVE_PATHWAYS]
          </span>
        </div>

        {/* ── TABLE ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-lg border border-white/8 overflow-hidden bg-[#111]"
        >
          {/* Table header */}
          <div className="grid grid-cols-12 px-8 py-4 bg-[#161616] border-b border-white/8">
            <div className="col-span-8">
              <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">
                Course Code &amp; Title
              </span>
            </div>
            <div className="col-span-2">
              <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">
                Duration
              </span>
            </div>
            <div className="col-span-2 text-right">
              <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">
                Action
              </span>
            </div>
          </div>

          {/* Rows */}
          {tracks.map((t, i) => (
            <motion.div
              key={t.code}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
            >
              <Link
                href={t.href}
                className={`group grid grid-cols-12 items-center px-8 py-6 border-b border-white/5 hover:bg-white/3 transition-colors duration-200 ${
                  i === tracks.length - 1 ? "border-b-0" : ""
                }`}
              >
                {/* Title + code */}
                <div className="col-span-8">
                  <p className="text-sm font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-200 mb-1">
                    {t.title}
                  </p>
                  <p className="text-[10px] font-mono text-gray-600 tracking-widest">
                    {t.code}
                  </p>
                </div>

                {/* Duration */}
                <div className="col-span-2">
                  <span className="text-sm text-white font-medium">{t.duration}</span>
                </div>

                {/* Arrow */}
                <div className="col-span-2 flex justify-end">
                  <span className="text-blue-400 group-hover:text-blue-300 group-hover:translate-x-1 transition-all duration-200 text-lg">
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}