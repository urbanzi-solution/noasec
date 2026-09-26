"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Home, Phone, Terminal } from "lucide-react";
import { SITE } from "@/data/site";

export default function UnderDevelopment({ title = "Service Specifications In Progress" }) {
  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-[#05070d] bg-cyber-grid text-white px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card text-center max-w-2xl p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
      >
        {/* Top Glow Orb */}
        <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-44 w-44 rounded-full bg-cyan-500/20 blur-[60px]" />

        <div className="relative z-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mx-auto mb-6">
            <Terminal size={28} />
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Active Enterprise Capability</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold mb-4 text-white">
            {title}
          </h1>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto">
            This specialized deliverable page is currently being updated with live case studies and methodology documentation. NoaSec actively executes this service for commercial and enterprise clients.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Request Proposal / Scope Assessment <ArrowRight size={15} />
            </Link>

            <Link
              href="/services"
              className="btn-secondary"
            >
              All Services Catalogue
            </Link>

            <Link
              href="/"
              className="btn-ghost text-gray-300"
            >
              <Home size={14} /> Home
            </Link>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-xs text-gray-400">
            <span>Direct Hotline: </span>
            <a href={`tel:${SITE.phone}`} className="text-cyan-400 font-semibold hover:text-cyan-300">
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}