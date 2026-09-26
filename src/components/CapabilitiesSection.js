"use client";

import { Activity, Target, Grid, Fingerprint } from "lucide-react";

const items = [
  {
    title: "IOC Management & Ingestion",
    desc: "Advanced orchestration of Indicators of Compromise through automated ingestion and real-time validation across your entire endpoint and network telemetry.",
    icon: Activity,
  },
  {
    title: "Hypothesis-Driven Threat Hunting",
    desc: "We don't wait for automated alerts. Our certified hunters develop complex adversary hypotheses based on emerging APT campaigns and hunt deep within SIEM event logs.",
    icon: Target,
    wide: true,
  },
  {
    title: "MITRE ATT&CK Detection Playbooks",
    desc: "Custom detection rules mapped directly to MITRE ATT&CK matrix techniques, providing end-to-end defensive coverage across all stages of the cyber kill chain.",
    icon: Grid,
    wide: true,
  },
  {
    title: "Stealthy APT Attribution",
    desc: "Pinpoint Advanced Persistent Threats by analyzing evasive behavioral anomalies and Living-off-the-Land (LotL) binaries deviating from normal baselines.",
    icon: Fingerprint,
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="bg-[#05070d] text-white px-6 md:px-12 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Threat Hunting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Operational Scope
            </span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className={`glass-card p-7 relative flex flex-col justify-between overflow-hidden group ${
                  item.wide ? "md:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs text-cyan-400 font-mono">
                  HUNT PROTOCOL ACTIVE
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}