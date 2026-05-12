"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0f] scroll-mt-24"
    >
      {/* 🔵 Background Gradient Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-200px] top-[20%] w-[600px] h-[600px] bg-cyan-500/20 blur-[120px] rounded-full" />
        <div className="absolute right-[-200px] bottom-[10%] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">

        {/* ================= LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">
              Cyber Security Experts
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold leading-[1.1] text-white"
          >
            Kerala's Cybersecurity Training{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Expert Security Services
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg"
          >
            Real-world cybersecurity training & expert security services in Kerala.
            We prepare professionals and protect organizations with practical,
            industry-focused solutions.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 mt-3"
          >
            <Link
              href="/#courses"
              className="px-6 py-3 rounded-md bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-semibold transition shadow-lg shadow-cyan-500/20"
            >
              Explore Courses
            </Link>

            <Link
              href="/#services"
              className="px-6 py-3 text-white text-sm font-semibold border border-white/20 rounded-md hover:bg-white/5 transition"
            >
              Security Services
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-6 mt-4 text-gray-500 text-sm"
          >
            <span>✔ Hands-on Training</span>
            <span>✔ Certified Experts</span>
            <span>✔ 100% Practical</span>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          {/* Glass Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative w-full max-w-lg rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
          >
            <Image
              src="/hero-img.png"
              width={720}
              height={480}
              alt="dashboard"
              priority
              className="w-full h-auto object-cover"
            />

            {/* overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>

          {/* Floating Stat Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-6 right-0 md:-right-6 flex items-center gap-3 bg-[#0d1520]/90 backdrop-blur-lg border border-white/10 rounded-xl px-5 py-3 shadow-xl"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="9 12 11 14 15 10"/>
              </svg>
            </div>

            <div>
              <span className="text-white text-xl font-bold">100%</span>
              <p className="text-gray-400 text-[11px] uppercase tracking-wider">
                Practical
              </p>
            </div>
          </motion.div>

          {/* Floating Blur Circle */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/10 blur-[80px] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}