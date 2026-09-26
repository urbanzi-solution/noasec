"use client";

import { motion } from "framer-motion";
import { Cloud, Users, Database, Network, Layers, Crosshair, Scale } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" },
  }),
};

const deliverables = [
  {
    title: "Continuous CSPM Auditing",
    desc: "Automated and manual Cloud Security Posture Management across AWS, Azure, and Google Cloud environments.",
    icon: Cloud,
  },
  {
    title: "Cloud IAM Least-Privilege Review",
    desc: "Granular enforcement of least-privilege principles across AWS IAM roles, Azure RBAC, and GCP Service Accounts.",
    icon: Users,
  },
  {
    title: "Storage Bucket Hardening",
    desc: "Hardening S3 buckets, Azure Blobs, and Google Cloud Storage with KMS encryption, access logging, and bucket policies.",
    icon: Database,
  },
  {
    title: "VPC & Zero-Trust Networking",
    desc: "Virtual Private Cloud architecture audits, security group micro-segmentation, and egress filtering controls.",
    icon: Network,
  },
  {
    title: "Container & Kubernetes Security",
    desc: "Kubernetes control plane hardening, Pod Security Standards (PSS), Admission Controllers, and Docker image scanning.",
    icon: Layers,
  },
  {
    title: "Simulated Cloud Penetration Testing",
    desc: "Authorized adversary emulation targeting IAM privilege escalation, metadata service SSRF, and cloud storage exfiltration.",
    icon: Crosshair,
    elite: true,
  },
  {
    title: "Regulatory Compliance Mapping",
    desc: "Aligning multi-cloud telemetry to CIS Cloud Benchmarks, ISO 27001, SOC2, PCI-DSS, and HIPAA standards.",
    icon: Scale,
  },
];

export default function CloudWhatWeDeliver() {
  return (
    <div className="bg-[#05070d] text-white py-24 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
            <span>Deliverables</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Deliver</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Comprehensive multi-cloud engineering for the modern enterprise stack.
          </p>
        </div>

        {/* Grid */}
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
                className={`glass-card p-7 flex flex-col justify-between ${
                  d.elite ? "border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-transparent" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Icon size={22} />
                    </div>
                    {d.elite && (
                      <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-300 border border-cyan-400/40 bg-cyan-400/10 px-2 py-0.5 rounded-full uppercase">
                        OFFENSIVE FOCUS
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{d.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{d.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs text-cyan-400 font-mono">
                  CLOUD DELIVERABLE
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}