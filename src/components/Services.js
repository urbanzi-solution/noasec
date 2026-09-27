"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldAlert,
  Globe,
  Smartphone,
  Cpu,
  Cloud,
  Server,
  Laptop,
  Terminal,
  Activity,
  AlertTriangle,
  Radio,
  FileSearch,
  HardDrive,
  Fingerprint,
  ArrowRight,
  Filter
} from "lucide-react";

export default function Services() {
  const [activeTab, setActiveTab] = useState("all");

  const services = [
    {
      title: "Network Penetration Testing",
      desc: "Rigorous offensive assessments targeting your core perimeter, internal switches, and routing infrastructure.",
      href: "/services/network-penetration-testing",
      category: "offensive",
      icon: Radio,
      tag: "VAPT"
    },
    {
      title: "Web App Penetration Testing",
      desc: "Deep security audits of web applications targeting OWASP Top 10 vulnerabilities, business logic flaws, and zero-days.",
      href: "/services/web-application-penetration-testing",
      category: "offensive",
      icon: Globe,
      tag: "OWASP"
    },
    {
      title: "Mobile Application Pen Testing",
      desc: "Static and dynamic security testing for Android and iOS apps against reverse engineering and data exfiltration.",
      href: "/services/mobile-application-pen-testing",
      category: "offensive",
      icon: Smartphone,
      tag: "iOS & Android"
    },
    {
      title: "API Pen Testing",
      desc: "Proactive assessment of REST/GraphQL APIs for authentication bypass, rate-limiting flaws, and payload injection.",
      href: "/services/api-pen-testing",
      category: "offensive",
      icon: Cpu,
      tag: "Microservices"
    },
    {
      title: "Cloud Pen Testing",
      desc: "Security assessments for AWS, Azure, and GCP targeting IAM misconfigurations, S3 bucket exposures, and container escapes.",
      href: "/services/cloud-pen-testing",
      category: "cloud",
      icon: Cloud,
      tag: "AWS / Azure"
    },
    {
      title: "Server & Firewall Hardening",
      desc: "CIS benchmark-based hardening of servers, firewall policies, ports, and network daemons to minimize attack surfaces.",
      href: "/services/server-hardening",
      category: "defensive",
      icon: Server,
      tag: "CIS Benchmarks"
    },
    {
      title: "Endpoint Security",
      desc: "Next-gen EDR/XDR deployment, anti-malware telemetry, and strict host isolation to stop lateral ransomware spread.",
      href: "/services/endpoint-security",
      category: "defensive",
      icon: Laptop,
      tag: "EDR / XDR"
    },
    {
      title: "Linux & Windows Administration",
      desc: "OS-level hardening, kernel patching, Active Directory group policy enforcement, and access governance.",
      href: "/services/linux-windows-administration",
      category: "defensive",
      icon: Terminal,
      tag: "OS Hardening"
    },
    {
      title: "Cloud Security Solutions",
      desc: "Zero-trust architecture, CSPM posture management, and compliance enforcement across hybrid multi-cloud environments.",
      href: "/services/cloud-security-solutions",
      category: "cloud",
      icon: Cloud,
      tag: "Zero-Trust"
    },
    {
      title: "Managed SOC Operations",
      desc: "24/7 real-time monitoring, SIEM log analysis, behavioral anomaly detection, and rapid incident escalation.",
      href: "/services/managed-soc",
      category: "defensive",
      icon: Activity,
      tag: "24/7 Watch"
    },
    {
      title: "Incident Response Services",
      desc: "Rapid response containment, threat actor expulsion, business system recovery, and forensic root cause reports.",
      href: "/services/incident-response-services",
      category: "defensive",
      icon: AlertTriangle,
      tag: "Rapid IR"
    },
    {
      title: "Threat Intelligence Hunting",
      desc: "Proactive dark web monitoring, IOC enrichment, and tactical threat actor tracking customized for your industry.",
      href: "/services/threat-intelligence",
      category: "defensive",
      icon: Radio,
      tag: "IOC Feeds"
    },
    {
      title: "Malware Analysis",
      desc: "Static and dynamic reverse engineering of malicious payloads, unpacking obfuscated code, and signature derivation.",
      href: "/services/malware-analysis",
      category: "forensics",
      icon: FileSearch,
      tag: "Reverse Eng"
    },
    {
      title: "Disk & Memory Forensics",
      desc: "Deep bit-stream forensic extraction of volatile RAM and persistent storage to uncover deleted evidence and injected DLLs.",
      href: "/services/disk-memory-forensics",
      category: "forensics",
      icon: HardDrive,
      tag: "RAM & Disk"
    },
    {
      title: "Digital Evidence Collection",
      desc: "Court-admissible digital chain-of-custody acquisition complying with international cyber law and statutory procedures.",
      href: "/services/digital-evidence-collection",
      category: "forensics",
      icon: Fingerprint,
      tag: "Legal Chain"
    },
  ];

  const filtered = activeTab === "all"
    ? services
    : services.filter((s) => s.category === activeTab);

  const tabs = [
    { id: "all", label: "All Services" },
    { id: "offensive", label: "Offensive / VAPT" },
    { id: "defensive", label: "Defensive & SOC" },
    { id: "cloud", label: "Cloud Security" },
    { id: "forensics", label: "Forensics & IR" },
  ];

  return (
    <section id="services" className="relative bg-[#05070d] py-14 md:py-16 lg:py-24 px-6 md:px-12 border-t border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-3">
              <ShieldAlert size={14} className="text-cyan-400" />
              <span>Cybersecurity Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              Enterprise Shielding Services
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed">
              Tailored offensive and defensive cybersecurity architectures designed to safeguard enterprise assets, maintain compliance, and eliminate vulnerabilities.
            </p>
          </div>

          <Link
            href="/services"
            className="btn-ghost text-xs tracking-wider uppercase font-semibold shrink-0"
          >
            All Services Directory <ArrowRight size={14} />
          </Link>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-white/5">
          <Filter size={15} className="text-cyan-400 shrink-0 mr-1" />
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400"
                  : "bg-white/5 text-gray-300 border border-white/10 hover:border-cyan-400/40 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid with Interactive Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence>
            {filtered.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={s.title}
                >
                  <Link
                    href={s.href}
                    className="glass-card group flex flex-col justify-between h-full p-6 rounded-2xl transition-all duration-300"
                  >
                    <div>
                      {/* Top icon and tag */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 transition-colors">
                          <Icon size={20} />
                        </div>
                        <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-cyan-300">
                          {s.tag}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-xs text-gray-400 leading-relaxed line-clamp-3">
                        {s.desc}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4 text-xs font-semibold uppercase tracking-wider text-cyan-400 group-hover:text-cyan-300">
                      <span>View Specifications</span>
                      <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}