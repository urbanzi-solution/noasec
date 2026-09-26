"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldAlert, Cpu, Crosshair, ArrowRight } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    icon: Crosshair,
    title: "Offensive Intelligence & VAPT",
    desc: "Proactive penetration testing that pinpoints vulnerabilities before malicious actors exploit them.",
  },
  {
    icon: ShieldAlert,
    title: "Battle-Tested Defense Depth",
    desc: "Real-time SOC operations, perimeter hardening, zero-trust rules, and rapid incident response.",
  },
  {
    icon: Cpu,
    title: "Hands-On Training Ground",
    desc: "Immersive simulated labs preparing candidates for high-paying frontline cybersecurity careers.",
  },
];

export default function NewGen() {
  return (
    <section id="about" className="relative bg-[#05070d] py-24 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 lg:gap-16 items-center w-full">

        {/* LEFT IMAGE WITH CYBER HUD FRAME (5 cols on md) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative md:col-span-5 flex justify-center order-2 md:order-1"
        >
          <div className="relative w-full max-w-md group">
            {/* Cyber Corner HUD brackets */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-cyan-400 z-20 pointer-events-none" />
            <div className="absolute -top-3 -right-3 w-8 h-8 border-r-2 border-t-2 border-cyan-400 z-20 pointer-events-none" />
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-cyan-400 z-20 pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-cyan-400 z-20 pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#091222]/80 backdrop-blur-xl p-2 shadow-2xl">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/new.webp"
                  width={600}
                  height={450}
                  alt="Next-Gen Cybersecurity Architecture"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/90 via-transparent to-transparent" />
              </div>

              {/* Status pill inside image frame */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-lg bg-[#070d18]/90 border border-white/10 px-3.5 py-2 backdrop-blur-md">
                <span className="text-xs font-mono text-cyan-300">THREAT INTELLIGENCE ACTIVE</span>
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT (7 cols on md) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 md:col-span-7 order-1 md:order-2"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 w-fit">
            <span>Next-Generation Architecture</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            The Digital Resilience <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 to-sky-300 text-transparent bg-clip-text">
              Powerhouse of Kerala
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-base leading-relaxed">
            NoaSec is not merely an IT vendor; we are the strategic architects of enterprise resilience.
            In an era where traditional perimeter security fails daily, we supply the offensive intelligence,
            deep operational defense, and continuous capability building required to stay ahead of modern threat actors.
          </p>

          {/* Interactive Feature List */}
          <div className="mt-2 space-y-3">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-card group rounded-xl p-4 flex items-start gap-4 transition-all duration-200"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 transition-colors">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2">
            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition">
              <span>Read more about our mission and ethos</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}