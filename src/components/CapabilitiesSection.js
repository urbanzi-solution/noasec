"use client";

import { Activity, Target, Grid, Fingerprint } from "lucide-react";

const items = [
  {
    title: "IOC Management",
    desc: "Advanced orchestration of Indicators of Compromise through automated ingestion and real-time validation across your infrastructure.",
    icon: Activity,
  },
  {
    title: "Hypothesis-driven hunting",
    desc: "We don't wait for alerts. Our analysts develop complex threat hypotheses based on current APT trends and hunt deep within telemetry data.",
    icon: Target,
    wide: true,
  },
  {
    title: "MITRE ATT&CK Playbooks",
    desc: "Custom detection playbooks mapped directly to the MITRE framework, ensuring comprehensive coverage across the entire adversary lifecycle.",
    icon: Grid,
    wide: true,
  },
  {
    title: "APT Identification",
    desc: "Pinpoint Advanced Persistent Threats by analyzing behavioral patterns that deviate from standard operational baselines.",
    icon: Fingerprint,
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="bg-[#050b14] text-white px-6 md:px-12 lg:px-20 py-24 -mt-20">

      {/* HEADER */}
      <div className="mb-12">
        <p className="text-xs tracking-[0.3em] text-blue-500 mb-3">
          CAPABILITIES
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold">
          What We Deliver
        </h2>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">

        {items.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className={`relative border border-white/10 bg-[#0b1220]/60 backdrop-blur rounded-xl p-6 hover:border-blue-500/40 transition group ${
                item.wide ? "md:col-span-2" : ""
              }`}
            >
              {/* ICON */}
              <div className="mb-4">
                <Icon className="text-blue-500 group-hover:scale-110 transition" size={22} />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* SUBTLE RIGHT VISUAL */}
              <div className="absolute right-6 bottom-6 opacity-10 text-blue-500 text-4xl hidden md:block">
                <Icon size={40} />
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}