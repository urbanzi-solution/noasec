"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const metaStats = [
  { label: "Certification", value: "NCCP" },
  { label: "Duration", value: "4 Months" },
  { label: "Mode", value: "Online / Offline" },
  { label: "Prerequisite", value: "NCSA/NCD" },
];

export default function NCCPHero() {
  return (
    <div className="bg-[#080c10] text-white">

      {/* ── BREADCRUMB ── */}
     

      {/* ── HERO CONTENT ── */}
      <section className="relative min-h-screen flex items-center justify-start overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/nccp-bg.jpg" // 👉 replace with your bg image
      alt="NCCP Background"
      fill
      priority
      className="object-cover opacity-25"
    />
  </div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#080c10] via-[#080c10]/95 to-[#080c10]/70 z-0" />

  {/* Subtle Glow */}
  <div className="absolute right-0 top-0 h-full w-[40%] bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15),transparent_70%)] z-0" />

  {/* Content */}
  <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-xl"
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 border border-cyan-500/30 bg-[#0d1a20] px-3 py-1.5 rounded-sm mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-[10px] font-bold tracking-[0.22em] text-cyan-400 uppercase">
          Flagship Program
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-5">
        Certified Cybersecurity Professional (NCCP)
      </h1>

      {/* Description */}
      <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-8 max-w-md">
        The most comprehensive 4-month advanced program in the NoaSec portfolio.
        Master offensive and defensive cybersecurity from penetration testing to
        incident response.
      </p>

      {/* CTA */}
      <Link
        href="/contact"
        className="inline-block px-7 py-3 bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-black tracking-[0.18em] uppercase transition rounded-sm"
      >
        Contact Now
      </Link>
    </motion.div>
  </div>
</section>

      {/* ── META STATS BAR ── */}
      <div className="border-t border-b border-white/5 bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/5">
            {metaStats.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex flex-col px-6 py-5 gap-1"
              >
                <p className="text-[9px] font-bold tracking-[0.2em] text-gray-600 uppercase">
                  {m.label}
                </p>
                <p className="text-sm font-bold text-white">{m.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROGRAM DEPTH ── */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/5 bg-[#111]"
          >
            <Image
              src="/nccp-hero.png"
              alt="NCCP Program"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <p className="text-[10px] font-bold tracking-[0.25em] text-cyan-400 uppercase mb-4">
              Program Depth
            </p>
            <h2 className="text-2xl font-extrabold text-white leading-tight mb-5">
              Advanced Tactical Training for Elite Security Careers.
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-7">
              The NoaSec Certified Cybersecurity Professional (NCCP) is the most comprehensive program in the NoaSec portfolio. This 4-month advanced certification covers the full spectrum of offensive and defensive cybersecurity — from network penetration testing to cloud security, from mobile application hacking to incident response.
            </p>

            {/* Pull quote */}
            <blockquote className="border-l-2 border-cyan-500/50 pl-5 py-1">
              <p className="text-sm text-gray-300 italic leading-relaxed">
                NCCP graduates are equipped for real-world roles as penetration testers, SOC analysts, security engineers, or cybersecurity consultants.

              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>
    </div>
  );
}