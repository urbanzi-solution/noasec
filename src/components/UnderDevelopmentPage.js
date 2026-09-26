"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, ArrowRight, Home, Terminal } from "lucide-react";

export default function UnderDevelopmentPage() {
  return (
    <div className="min-h-[85vh] bg-[#05070d] bg-cyber-grid text-white flex items-center justify-center px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card text-center max-w-xl p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
      >
        <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-44 w-44 rounded-full bg-cyan-500/20 blur-[60px]" />

        <div className="relative z-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mx-auto mb-6">
            <Terminal size={28} />
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Specifications In Progress</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold mb-4 text-white">
            Page Under Development
          </h1>

          <p className="text-sm text-gray-300 leading-relaxed mb-8 max-w-md mx-auto">
            We are polishing and updating this section with detailed documentation. In the meantime, explore our full training tracks or reach out for specialized consultation.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="btn-primary"
            >
              Return Home <ArrowRight size={14} />
            </Link>

            <Link
              href="/contact"
              className="btn-secondary"
            >
              Contact Us
            </Link>
          </div>

          <p className="mt-8 border-t border-white/10 pt-6 text-xs text-gray-400">
            Looking for practical cybersecurity training?{" "}
            <Link
              href="/courses"
              className="text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-4"
            >
              Explore Certified Programs
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}