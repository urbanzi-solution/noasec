"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "98%", label: "Lab Success" },
  { value: "24/7", label: "Lab Access" },
  
];

const metaStats = [
  { label: "Certification", value: "NCD" },
  { label: "Duration", value: "2 Months" },
  { label: "Mode", value: "Online / Offline" },
  { label: "Prerequisite", value: "Basic Networking" },
];

export default function NCDHero() {
  return (
    <div className="bg-[#080c10] text-white">

      {/* Grid background */}
      <div
        className="relative"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(0,200,255,0.025) 39px, rgba(0,200,255,0.025) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(0,200,255,0.025) 39px, rgba(0,200,255,0.025) 40px)",
        }}
      >
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* ── LEFT ── */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 border border-cyan-500/30 bg-[#0d1a20] px-3 py-1.5 rounded-sm mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.22em] text-cyan-400 uppercase">
                  Advanced Cyber Defense
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
                NoaSec Cyber{" "}
                <span className="text-cyan-400">Defender (NCD)</span>
              </h1>

              <p className="text-sm text-gray-400 leading-relaxed mb-10 max-w-md">
                Foundational ethical hacking and vulnerability assessment course — 2 months
                of high-intensity, hands-on labs utilizing Burp Suite, Nmap, and Aircrack-ng
                to master defensive security.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-7 py-3 bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-black tracking-[0.18em] uppercase transition-colors duration-200 rounded-sm"
                >
                  Enrol Now
                </Link>
                <Link
                  href="/courses"
                  className="px-7 py-3 border border-white/20 hover:border-cyan-500/40 text-white text-xs font-black tracking-[0.18em] uppercase transition-all duration-200 rounded-sm hover:bg-cyan-500/5"
                >
                  View Syllabus
                </Link>
              </div>
            </motion.div>

            {/* ── RIGHT — image + stats ── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              className="rounded-xl border border-white/8 overflow-hidden bg-[#0d1520]"
            >
              {/* Image */}
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src="/ncd-hero.png"
                  alt="NCD Course - Server Hardware"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 divide-x divide-white/5">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                    className="flex flex-col items-center justify-center py-5 gap-1 hover:bg-white/3 transition-colors duration-200"
                  >
                    <p className="text-lg font-extrabold text-cyan-400">{s.value}</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ── META STATS BAR ── */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/5">
            {metaStats.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex flex-col px-8 py-7 gap-1"
              >
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">{m.label}</p>
                <p className="text-base font-bold text-white">{m.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}