"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function UnderDevelopmentPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-xl"
      >

        {/* Badge */}
        <p className="text-xs font-bold tracking-[0.3em] text-cyan-400 uppercase mb-4">
          Coming Soon
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          This Page Is Under Development
        </h1>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed mb-8">
          We’re working hard to bring you something exceptional.
          Please check back soon or explore our other services and courses.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <Link
            href="/"
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-black tracking-[0.18em] uppercase transition-colors duration-200 rounded-sm"
          >
            Go to Home
          </Link>

          <Link
            href="/contact"
            className="px-8 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 text-xs font-bold tracking-[0.18em] uppercase transition-colors duration-200 rounded-sm"
          >
            Contact Us
          </Link>

        </div>

      </motion.div>
    </div>
  );
}