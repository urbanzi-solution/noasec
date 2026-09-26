"use client";

import { motion } from "framer-motion";
import { HardDrive, FileSearch, Clock, Cpu, Layers, Scale } from "lucide-react";

const deliverables = [
  {
    icon: HardDrive,
    title: "Bit-Stream Forensic Imaging",
    desc: "Full bit-level cryptographic acquisition of HDDs, NVMe SSDs, and removable media with SHA-256 validation for strict chain-of-custody preservation.",
  },
  {
    icon: FileSearch,
    title: "Deleted File & Partition Recovery",
    desc: "Advanced file carving from unallocated space, wiped partitions, and volume shadow copies to retrieve intentionally destroyed evidence.",
  },
  {
    icon: Clock,
    title: "Filesystem Timeline Analysis",
    desc: "Microsecond-level temporal reconstruction of NTFS $MFT, ext4 journal, and APFS metadata to pinpoint the exact moment of initial intrusion.",
  },
  {
    icon: Cpu,
    title: "Volatile RAM Memory Acquisition",
    desc: "Live volatile memory dumping and analysis via Volatility/Rekall to capture injected DLLs, unencrypted credentials, and open network sockets.",
  },
  {
    icon: Layers,
    title: "Windows/Linux Artifact Extraction",
    desc: "Deep inspection of registry hives, Amcache, Shimcache, shellbags, Bash history, and cron persistence artifacts to map lateral movement.",
  },
  {
    icon: Scale,
    title: "Court-Admissible Legal Reporting",
    desc: "Methodological expert witness documentation formatted specifically for legal proceedings, insurer claims, and executive disclosures.",
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

export default function DiskOverview() {
  return (
    <div className="bg-[#05070d] text-white px-6 md:px-12 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* ── SERVICE OVERVIEW ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
              <span>Investigation Core</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Uncovering Hidden <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Digital Evidence
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="space-y-5 text-gray-300 text-sm md:text-base leading-relaxed">
            <p>
              When an incident occurs, the answers are frequently concealed within raw disk sectors and ephemeral volatile memory.
            </p>
            <p className="text-gray-400">
              NoaSec&apos;s Disk &amp; Memory Forensics service performs deep forensic examination of storage media and RAM — reconstructing attacker timelines, recovering deleted evidence, and extracting court-admissible proof that standard investigations miss.
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
              Forensic artifacts delivered with comprehensive chain of custody integrity.
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
                    CHAIN OF CUSTODY VERIFIED
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