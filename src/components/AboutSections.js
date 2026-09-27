"use client";

import { Target, Eye, Award, Terminal, Compass, ShieldCheck, Briefcase } from "lucide-react";

const advantages = [
  {
    id: "01",
    title: "Industry-Focused Training",
    icon: Terminal,
    desc: "NoaSec programs concentrate strictly on real-world cybersecurity skills — not paper qualifications. Students execute methods actively utilized by enterprise red and blue teams in live engagements.",
  },
  {
    id: "02",
    title: "Hands-On Attack Labs",
    icon: ShieldCheck,
    desc: "Every course incorporates interactive labs, simulations, and real exploitation exercises covering tools like Kali Linux, Metasploit, Burp Suite, Wireshark, Splunk, and Wazuh.",
  },
  {
    id: "03",
    title: "Structured Career Roadmap",
    icon: Compass,
    desc: "A step-by-step roadmap from beginner (NCSA) to operational defender (NCD) and advanced certified professional (NCCP) ensures candidates always know their next leap.",
  },
  {
    id: "04",
    title: "Specialized Career Tracks",
    icon: Award,
    desc: "Explore tailored specializations in Digital Forensics (NCDF), Security Operations Center (NCSA-SOC), and Cloud Security aligned with soaring corporate hiring demands.",
  },
  {
    id: "05",
    title: "Internships & Live Projects",
    icon: Briefcase,
    desc: "Gain real industry exposure through guided internships, real-world case analysis, and client project audits that generate demonstrable portfolio value.",
  },
];

export default function AboutSections() {
  return (
    <section className="bg-[#05070d] text-white px-6 md:px-12 py-14 md:py-16 lg:py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">

        {/* TOP - Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Mission */}
          <div className="glass-card rounded-2xl p-8 transition-all duration-300 relative overflow-hidden">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-6">
              <Target size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              To empower individuals and organizations with frontline cybersecurity capabilities, practical tradecraft, and offensive depth. We aim to forge industry-ready cybersecurity professionals, elevate digital threat awareness, and deliver battle-tested defense mechanisms aligned with real-world threat actors.
            </p>
          </div>

          {/* Vision */}
          <div className="glass-card rounded-2xl p-8 transition-all duration-300 relative overflow-hidden">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-6">
              <Eye size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              To become an internationally recognized cybersecurity defense and digital growth leader that builds a safer, resilient digital world — cultivating an elite cadre of specialists capable of protecting critical infrastructure, financial institutions, and modern digital commerce.
            </p>
          </div>
        </div>

        {/* DIFFERENTIATION HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-3">
            <span>Core Differentiation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            What Sets NoaSec Apart
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
            Engineered from the ground up for practical application, high performance, and demonstrable mastery.
          </p>
        </div>

        {/* ADVANTAGES CARDS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {advantages.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="glass-card group flex flex-col justify-between rounded-2xl p-6 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-400/20 px-2.5 py-0.5 rounded-md">
                      {item.id}
                    </span>
                    <Icon size={18} className="text-cyan-400/70 group-hover:text-cyan-300 transition-colors" />
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5">
                    {item.title}
                  </h4>

                  <p className="text-xs leading-relaxed text-gray-400">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 h-[2px] w-8 group-hover:w-full bg-cyan-400/40 group-hover:bg-cyan-400 transition-all duration-300" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}