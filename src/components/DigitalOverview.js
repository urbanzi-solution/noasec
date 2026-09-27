"use client";

import { motion } from "framer-motion";
import { HardDrive, FileCheck2, Cpu, Scale, Lock, Archive } from "lucide-react";

const deliverables = [
  {
    icon: HardDrive,
    title: "Forensic Imaging (HDD/SSD/NVMe)",
    desc: "Full physical bit-stream copies of all storage media without altering a single bit of original metadata or timestamps.",
  },
  {
    icon: FileCheck2,
    title: "Chain of Custody Documentation",
    desc: "Meticulous legal tracking of physical and digital evidence from the precise moment of seizure to final courtroom submission.",
  },
  {
    icon: Cpu,
    title: "Live Volatile RAM Acquisition",
    desc: "Capturing volatile memory before powering down to preserve injected processes, decryption keys, and active network connections.",
  },
  {
    icon: Scale,
    title: "Expert Witness & Legal Support",
    desc: "Professional sworn testimony and technical declarations to validate forensic findings in civil and criminal proceedings.",
  },
  {
    icon: Lock,
    title: "Hardware Write-Blocking & Hashing",
    desc: "Hardware-level protection to prevent accidental data writes, verified cryptographically via dual SHA-256 and MD5 hashes.",
  },
  {
    icon: Archive,
    title: "Air-Gapped Vault Storage",
    desc: "Long-term evidence preservation in access-controlled, fire-rated, air-gapped forensic digital vaults.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" },
  }),
};

export default function DigitalOverview() {
  return (
    <div className="bg-[#05070d] text-white px-6 md:px-12 py-14 md:py-16 lg:py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* ── SERVICE OVERVIEW ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-20 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
              <span>Evidence Preservation</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Critical Evidence <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Integrity &amp; Standards
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="space-y-5 text-gray-300 text-sm md:text-base leading-relaxed">
            <p>
              Proper digital evidence collection is critical for internal corporate investigations, civil litigation, and regulatory inquiries.
            </p>
            <p className="text-gray-400">
              NoaSec&apos;s Digital Evidence Collection service provides forensically sound acquisition and preservation of digital evidence — strictly aligned with ISO/IEC 27037 standards to ensure all artifacts remain completely admissible and legally defensible.
            </p>
          </div>
        </section>

        {/* ── TECHNICAL DELIVERABLES ── */}
        <section>
          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              What We Deliver
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Rigorous collection protocols executed by certified forensic examiners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((d, i) => {
              const Icon = d.icon;
              return (
                <motion.div
                  key={d.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  variants={fadeUp}
                  className="glass-card p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
                      <Icon size={22} />
                    </div>
                    <h4 className="font-bold text-white text-lg mb-2">{d.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{d.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs text-cyan-400 font-mono">
                    ISO 27037 COMPLIANT
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}