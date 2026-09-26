"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

const advantages = [
  {
    title: "Impact Minimization",
    desc: "Reduce the average cost of a breach by 40% through standardized rapid response workflows.",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Forensic Preservation",
    desc: "Ensure all evidence remains admissible in court with strict chain-of-custody documentation.",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
      </svg>
    ),
  },
  {
    title: "Root Cause Analysis",
    desc: "Understand exactly how the perimeter was breached to eliminate architectural weaknesses.",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    title: "Remediation Plans",
    desc: "Clear, actionable technical roadmaps for long-term immunity against similar attack vectors.",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

const ecosystemItems = [
  { title: "Managed SOC", desc: "24/7/365 continuous monitoring and threat hunting." },
  { title: "Digital Forensics", desc: "Post-incident deep analysis for legal proceedings." },
  { title: "Malware Analysis", desc: "Reverse engineering of advanced binary threats." },
  { title: "IR Training", desc: "Simulated war-gaming for your internal teams." },
];

export default function OperationalAdvantages() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24 -mt-20">

        {/* ── OPERATIONAL ADVANTAGES ── */}
        <section>
          <h2 className="text-base font-bold text-white mb-6">Operational Advantages</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

            {/* Left — selectable list */}
            <div className="flex flex-col gap-1">
              {advantages.map((a, i) => (
                <button
                  key={a.title}
                  onClick={() => setSelected(i)}
                  className={`text-left px-5 py-5 rounded-md border transition-all duration-200 ${
                    selected === i
                      ? "border-blue-500/40 bg-blue-500/5"
                      : "border-white/5 bg-[#111] hover:bg-[#161616] hover:border-white/10"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`mt-0.5 flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center transition-colors duration-200 ${
                      selected === i ? "bg-blue-500/20 text-blue-400" : "bg-white/5 text-gray-500"
                    }`}>
                      {a.icon}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {selected === i && (
                          <span className="text-[9px] font-bold tracking-widest text-blue-400 uppercase border border-blue-500/30 bg-blue-500/10 px-1.5 py-0.5 rounded-sm">
                            Select
                          </span>
                        )}
                        <p className="text-sm font-bold text-white">{a.title}</p>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed">{a.desc}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Right — image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/5 bg-[#111]"
            >
              <Image
                src="/terminal.png"
                alt="IR Command Center Terminal"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-white/5" />

        {/* ── ECOSYSTEM SUPPORT ── */}
        <section className="-mt-20">
          <h2 className="text-base font-bold text-white text-center mb-12">Ecosystem Support</h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-lg overflow-hidden border border-white/5">
            {ecosystemItems.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-[#0a0a0a] px-6 py-8 hover:bg-[#111] transition-colors duration-200"
              >
                <p className="text-sm font-bold text-white mb-2">{item.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* View all — bottom right */}
          <div className="flex justify-end mt-4">
            <Link
              href="/services"
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white uppercase tracking-widest transition-colors duration-200 group"
            >
              <span>View all Security Services</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}