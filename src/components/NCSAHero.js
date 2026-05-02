"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const stats = [
  {
    label: "Certification",
    value: "NCSA",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    label: "Duration",
    value: "1 Month",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Mode",
    value: "Hybrid",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
  {
    label: "Prerequisite",
    value: "Basics",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
];

export default function NCSAHero() {
  return (
    <div className="bg-[#080c10] text-white">

      {/* Grid background */}
      <div
        className="relative"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(0,200,255,0.03) 39px, rgba(0,200,255,0.03) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(0,200,255,0.03) 39px, rgba(0,200,255,0.03) 40px)",
        }}
      >
        {/* ── HERO ── */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase mb-5">
                Level 01 Certification
              </p>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
                NoaSec Cyber Security Associate{" "}
                <span className="text-cyan-400">(NCSA)</span>
              </h1>

              <p className="text-sm text-gray-400 leading-relaxed mb-10 max-w-md">
                Beginner cybersecurity certification — 1 month intensive course covering
                critical cyber threats, networking fundamentals, Linux command line, and
                an introduction to ethical hacking.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#"
                  className="px-7 py-3 bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-bold transition-colors duration-200 rounded-sm"
                >
                  Enroll Now
                </Link>
                <Link
                  href="/courses"
                  className="px-7 py-3 border border-cyan-500/50 hover:border-cyan-400 text-white text-sm font-bold transition-all duration-200 rounded-sm hover:bg-cyan-500/5"
                >
                  View Syllabus
                </Link>
              </div>
            </motion.div>

            {/* Right — image */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              className="relative"
            >
              {/* Image container */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-cyan-500/20 bg-[#0d1520]">
                <Image
                  src="/shield-hero.png"
                  alt="Cybersecurity Shield"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Cyan corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400/60 rounded-tl-xl" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400/60 rounded-tr-xl" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400/60 rounded-bl-xl" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400/60 rounded-br-xl" />
              </div>

              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="absolute -bottom-4 left-4 flex items-center gap-2.5 px-5 py-3 rounded-lg bg-[#0d1520]/90 border border-white/10 backdrop-blur-sm"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
                </span>
                <span className="text-[11px] font-bold tracking-[0.18em] text-white uppercase">
                  System Status: Secure
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ── STATS ROW ── */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
              className="flex flex-col items-center justify-center gap-2 px-6 py-6 rounded-lg border border-cyan-500/15 bg-[#0d1520] hover:border-cyan-500/30 transition-colors duration-200"
            >
              <span className="text-cyan-400">{s.icon}</span>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">{s.label}</p>
              <p className="text-base font-bold text-white">{s.value}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}