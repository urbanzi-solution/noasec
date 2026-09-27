"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, CheckCircle2, Terminal, Award, Lock, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative lg:min-h-[92vh] flex items-center overflow-hidden bg-[#05070d] bg-cyber-grid pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-36 lg:pb-28"
    >
      {/* Background Gradient Glow Orbs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-[-150px] top-[15%] w-[550px] h-[550px] bg-cyan-500/15 blur-[140px] rounded-full" />
        <div className="absolute right-[-150px] bottom-[10%] w-[500px] h-[500px] bg-blue-600/10 blur-[140px] rounded-full" />
        <div className="absolute left-[35%] top-[40%] w-[350px] h-[350px] bg-indigo-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">

        {/* ================= LEFT CONTENT (7 cols on lg) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-6 lg:col-span-7"
        >
          {/* Cyber Status Badge */}
          <div className="inline-flex items-center gap-2.5 w-fit px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 backdrop-blur-md shadow-[0_0_15px_rgba(14,165,233,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-cyan-300 text-xs font-bold tracking-widest uppercase">
              Kerala&apos;s Premier Cybersecurity & Growth Agency
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.12] text-white tracking-tight">
            Offensive Defense &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 text-transparent bg-clip-text">
              Digital Growth
            </span>{" "}
            Engineered for Impact.
          </h1>

          {/* Subtext */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl font-normal">
            Real-world hands-on cybersecurity training programs and enterprise security audits —
            plus high-impact branding, custom web & app development, UI/UX design, and AI-first
            growth marketing (SEO, GEO, AEO & Performance Ads).
          </p>

          {/* Interactive CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            <Link
              href="/courses"
              className="btn-primary text-sm font-semibold py-3.5 px-6 shadow-xl shadow-cyan-500/25"
            >
              Explore Training Courses <ArrowRight size={16} />
            </Link>

            <Link
              href="/services"
              className="btn-secondary text-sm font-semibold py-3.5 px-6"
            >
              Security Services
            </Link>

            <Link
              href="/services/branding"
              className="btn-ghost text-sm font-semibold py-3.5 px-5 text-gray-300"
            >
              Digital & Branding
            </Link>
          </div>

          {/* Trust Metric Badges */}
          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10 max-w-lg">
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-white flex items-center gap-1">
                100%
              </span>
              <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Hands-On Labs</span>
            </div>
            <div className="flex flex-col border-l border-white/10 pl-4">
              <span className="text-xl sm:text-2xl font-bold text-cyan-400">
                24 / 7
              </span>
              <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">SOC & IR Response</span>
            </div>
            <div className="flex flex-col border-l border-white/10 pl-4">
              <span className="text-xl sm:text-2xl font-bold text-white">
                Global
              </span>
              <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Industry Standards</span>
            </div>
          </div>
        </motion.div>

        {/* ================= RIGHT PREVIEW (5 cols on lg) ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:col-span-5 flex justify-center items-center"
        >
          {/* Glass Terminal Card */}
          <div className="relative w-full max-w-lg rounded-2xl overflow-hidden border border-white/15 bg-[#0b1324]/80 backdrop-blur-2xl shadow-2xl shadow-cyan-950/40 group">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#070d18]/90">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[11px] font-mono text-gray-400 flex items-center gap-1.5">
                <Terminal size={12} className="text-cyan-400" />
                noasec-defense-core.sh
              </span>
              <span className="text-[10px] text-emerald-400 font-mono">LIVE ACTIVE</span>
            </div>

            {/* Dashboard Visual */}
            <div className="relative overflow-hidden aspect-[4/3] w-full">
              <Image
                src="/hero-img.webp"
                width={720}
                height={540}
                alt="NoaSec Cybersecurity & Digital Operations Dashboard"
                priority
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070d18] via-transparent to-transparent opacity-80" />
            </div>

            {/* Terminal Overlay Info */}
            <div className="p-4 bg-[#070d18]/90 border-t border-white/10 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-cyan-300">
                <ShieldCheck size={16} className="text-cyan-400" />
                <span>Zero-Trust Architecture</span>
              </div>
              <span className="text-gray-400">Kottayam, Kerala</span>
            </div>
          </div>

          {/* Floating Pill Badge 1: Top Right */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -top-4 -right-2 sm:-right-4 hidden sm:flex items-center gap-2.5 bg-[#091222]/90 backdrop-blur-xl border border-cyan-500/30 rounded-full px-4 py-2 shadow-xl"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold text-white tracking-wide">SOC Analyst Ready</span>
          </motion.div>

          {/* Floating Stat Card: Bottom Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute -bottom-5 -left-2 sm:-left-6 flex items-center gap-3.5 bg-[#091222]/95 backdrop-blur-xl border border-white/15 rounded-xl px-4 py-3 shadow-2xl"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300">
              <Award size={20} />
            </div>
            <div>
              <p className="text-white text-sm font-bold">Industry Certified</p>
              <p className="text-gray-400 text-[11px]">NCSA · NCD · NCCP</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}