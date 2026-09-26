"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import { Award, ArrowRight, ShieldCheck, Clock, Laptop, BookOpen } from "lucide-react";

const metaStats = [
  { label: "Certification", value: "NCCP Certified", icon: Award },
  { label: "Duration", value: "4 Months Intensive", icon: Clock },
  { label: "Training Mode", value: "Online / Offline Lab", icon: Laptop },
  { label: "Prerequisite", value: "NCSA / NCD or IT Basics", icon: BookOpen },
];

export default function NCCPHero() {
  return (
    <div className="bg-[#05070d] text-white bg-cyber-grid">

      {/* ── HERO CONTENT ── */}
      <section className="relative min-h-[85vh] flex items-center pt-32 pb-16 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-100px] top-[15%] w-[500px] h-[500px] bg-cyan-500/15 blur-[140px] rounded-full" />
          <div className="absolute right-[-100px] bottom-[10%] w-[450px] h-[450px] bg-blue-600/10 blur-[140px] rounded-full" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { name: "Courses", href: "/courses" },
                { name: "NCCP Flagship", href: "/courses/certified-cybersecurity-professional" },
              ]}
            />
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>Flagship 4-Month Masterclass</span>
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-5 tracking-tight text-white">
                Certified Cybersecurity <br />
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 text-transparent bg-clip-text">
                  Professional (NCCP)
                </span>
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
                The most comprehensive advanced program in the NoaSec academy. Master end-to-end offensive and defensive cybersecurity — from network penetration testing and cloud exploitation to live SOC operations, memory forensics, and incident response.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="btn-primary"
                >
                  Enroll Now / Request Syllabus <ArrowRight size={15} />
                </Link>
                <a
                  href="#curriculum"
                  className="btn-secondary"
                >
                  View 16 Modules
                </a>
              </div>
            </motion.div>

            {/* Right Preview Image (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative flex justify-center"
            >
              <div className="relative w-full max-w-md group">
                <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-cyan-400 z-20 pointer-events-none" />
                <div className="absolute -top-3 -right-3 w-8 h-8 border-r-2 border-t-2 border-cyan-400 z-20 pointer-events-none" />
                <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-cyan-400 z-20 pointer-events-none" />
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-cyan-400 z-20 pointer-events-none" />

                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#091222]/80 backdrop-blur-xl p-2 shadow-2xl">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] w-full">
                    <Image
                      src="/nccp-hero.webp"
                      alt="NCCP Course Lab Setup"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/90 via-transparent to-transparent" />
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-lg bg-[#070d18]/90 border border-white/10 px-3.5 py-2 backdrop-blur-md">
                    <span className="text-xs font-mono text-cyan-300">NCCP MASTER LABS</span>
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── META STATS BAR ── */}
      <div className="border-t border-b border-white/10 bg-[#070d18]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {metaStats.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-3.5 px-6 py-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                      {m.label}
                    </p>
                    <p className="text-sm font-bold text-white mt-0.5">{m.value}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}