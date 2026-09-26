"use client";

import Image from "next/image";
import { ShieldCheck, CheckCircle2, Cpu, Lock, Terminal, Activity } from "lucide-react";

export default function WhoWeAre() {
  const technicalPillars = [
    { title: "Zero-Trust Architecture", desc: "Never trust, always verify every packet, user, and endpoint connection." },
    { title: "AI-Driven Telemetry", desc: "Machine-assisted behavioural anomaly correlation and zero-day threat detection." },
    { title: "Defensive Red Teaming", desc: "Continuous offensive simulations to identify breach vectors before criminals do." },
    { title: "Autonomous Incident Response", desc: "Surgical containment workflows that quarantine affected hosts within minutes." },
  ];

  return (
    <section className="bg-[#05070d] text-white py-24 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* LEFT CONTENT (7 cols) */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
            <ShieldCheck size={14} className="text-cyan-400" />
            <span>Our Identity</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Defending Digital Frontiers & Empowering The Next Generation
          </h2>

          <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
            <p>
              NoaSec Cybersecurity Solutions is a next-generation security and digital growth firm dedicated to developing elite cybersecurity operators and shielding enterprises from modern cyber adversaries. In a digital climate where ransomware and data breaches inflict devastating financial and reputational harm, NoaSec operates right at the convergence of practical education and enterprise defense.
            </p>
            <p>
              Our programs and audits are executed by senior practitioners with battle-tested experience in ethical hacking, network penetration testing, managed SOC monitoring, cloud security, and digital forensics. Rather than treating security as a compliance checkbox or dry theory, NoaSec emphasizes hands-on simulations, real adversary toolkits, and measurable impact.
            </p>
          </div>

          {/* Technical Pillars Grid */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {technicalPillars.map((p) => (
              <div key={p.title} className="glass-card rounded-xl p-4 transition-all duration-200">
                <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm mb-1">
                  <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                  <span>{p.title}</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed pl-6">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE (5 cols) */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-md group">
            {/* Cyber Corner HUD brackets */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-cyan-400 z-20 pointer-events-none" />
            <div className="absolute -top-3 -right-3 w-8 h-8 border-r-2 border-t-2 border-cyan-400 z-20 pointer-events-none" />
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-cyan-400 z-20 pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-cyan-400 z-20 pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#091222]/80 backdrop-blur-xl p-2 shadow-2xl">
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] w-full">
                <Image
                  src="/chip.webp"
                  alt="NoaSec Advanced Hardware & Chip Security"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/90 via-transparent to-transparent" />
              </div>

              {/* Status pill inside image frame */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-lg bg-[#070d18]/90 border border-white/10 px-3.5 py-2 backdrop-blur-md">
                <span className="text-xs font-mono text-cyan-300">SECURE HARDWARE PLATFORM</span>
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}