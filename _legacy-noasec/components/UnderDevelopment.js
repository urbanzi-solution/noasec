"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function UnderDevelopment() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-xl"
      >
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          🚧 Page Under Development
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
          This page is currently being built to deliver a better experience.
          Please check back soon. We are working hard to bring you something
          amazing.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold tracking-widest uppercase rounded-sm transition"
          >
            Go Back Home
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 border border-white/20 hover:border-white/40 text-white text-xs font-bold tracking-widest uppercase rounded-sm transition hover:bg-white/5"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </div>
  );
}