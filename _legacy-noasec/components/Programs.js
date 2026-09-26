"use client";

import { motion } from "framer-motion";

export default function Programs() {
  return (
    <motion.section
      id="courses"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#05070d] text-white py-20 px-6 md:px-16 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto -mt-19">

        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold">
              <span className="text-[#7dd3fc]">Elite</span> Training Programs
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              Certified pathways for modern security practitioners.
            </p>
          </div>

          <span className="text-xs text-gray-500 tracking-widest mt-2">
            TOTAL PROGRAMS: 05
          </span>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-[#0c0f17] p-6 rounded-md border border-white/5 hover:border-[#7dd3fc]/40 transition">
            <span className="text-xs text-[#7dd3fc]">1 MONTH</span>
            <h3 className="text-2xl font-bold mt-3">NCSA</h3>
            <p className="text-gray-400 text-sm mt-2">
              Cyber Security Associate. The foundation for your security career.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0c0f17] p-6 rounded-md border border-white/5 hover:border-[#7dd3fc]/40 transition">
            <span className="text-xs text-[#7dd3fc]">2 MONTHS</span>
            <h3 className="text-2xl font-bold mt-3">NCD</h3>
            <p className="text-gray-400 text-sm mt-2">
              Cyber Defender. Advanced defensive tactics and infrastructure protection.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#5b8cff] p-6 rounded-md text-black">
            <span className="text-xs uppercase font-semibold opacity-80">
              Popular
            </span>
            <h3 className="text-2xl font-bold mt-3">NCCP</h3>
            <p className="text-sm mt-2">
              Certified Professional (4 Months). Comprehensive masterclass in operational security.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#0c0f17] p-6 rounded-md border border-white/5 hover:border-[#7dd3fc]/40 transition md:col-span-2">
            <span className="text-xs text-[#7dd3fc]">1–2 MONTHS</span>
            <h3 className="text-2xl font-bold mt-3">NCDF</h3>
            <p className="text-gray-400 text-sm mt-2">
              Digital Forensics specialist. Master the art of post-incident investigation.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-[#0c0f17] p-6 rounded-md border border-white/5 hover:border-[#7dd3fc]/40 transition">
            <span className="text-xs text-[#7dd3fc]">1–2 MONTHS</span>
            <h3 className="text-2xl font-bold mt-3">NCSA-SOC</h3>
            <p className="text-gray-400 text-sm mt-2">
              Security Operations Center specialized training for elite defenders.
            </p>
          </div>

        </div>
      </div>
    </motion.section>
  );
}