"use client";

import { Target, Eye } from "lucide-react";

const advantages = [
  {
    id: "01",
    title: "Industry-Focused Training",
    desc: "NoaSec programs focus on real-world cybersecurity skills — not just certifications on paper. Students learn techniques actively used by security professionals in live environments.",
  },
  {
    id: "02",
    title: "Hands-On Cybersecurity Labs",
    desc: "Every course includes practical labs, simulations, and cybersecurity exercises covering real attack and defense scenarios using tools like Kali Linux, Metasploit, Burp Suite, and Wazuh.",
  },
  {
    id: "03",
    title: "Structured Career Path",
    desc: "A clear roadmap from beginner to advanced levels ensures students always know their next step in cybersecurity.",
  },
  {
    id: "04",
    title: "Specialized Tracks",
    desc: "Explore Digital Forensics, SOC Operations, Cloud Security, and more advanced domains aligned with industry demand.",
  },
  {
    id: "05",
    title: "Internships & Projects",
    desc: "Gain real-world exposure through internships and hands-on cybersecurity projects that build strong portfolios.",
  },
];

export default function AboutSections() {
  return (
    <section className="bg-[#050b14] text-white px-6 md:px-12 lg:px-20 py-24">

      {/* TOP - Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 -mt-20">

        <div className="border border-white/10 bg-[#0b1220]/60 backdrop-blur rounded-xl p-8 hover:border-blue-500/30 transition">
          <Target className="text-blue-400 mb-6" size={28} />
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
           To empower individuals and organizations with advanced cybersecurity knowledge and practical skills to defend against modern cyber threats. We aim to develop industry-ready cybersecurity professionals, promote digital security awareness, and provide hands-on training aligned with real-world security challenges.
          </p>
        </div>

        <div className="border border-white/10 bg-[#0b1220]/60 backdrop-blur rounded-xl p-8 hover:border-blue-500/30 transition">
          <Eye className="text-blue-400 mb-6" size={28} />
          <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            To become a globally recognized cybersecurity training and consulting provider that contributes to building a safer digital world — creating a strong community of professionals capable of protecting businesses, governments, and critical infrastructure.
          </p>
        </div>

      </div>

      {/* SPACING */}
      <div className="my-24" />

      {/* HEADING */}
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.3em] text-blue-400 mb-3">
          DIFFERENTIATION
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold">
          What Makes NoaSec Different
        </h2>
      </div>

      {/* CARDS */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">

        {advantages.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent hover:from-blue-500/40 transition-all duration-500"
          >
            {/* Inner Card */}
            <div className="relative h-full bg-[#0b1220] rounded-2xl p-6 flex flex-col justify-between overflow-hidden">

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none 
              bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.18),transparent_70%)]" />

              {/* Content */}
              <div>
                {/* Number */}
                <span className="text-blue-400 text-xs tracking-widest">
                  {item.id}
                </span>

                {/* Title */}
                <h4 className="text-lg font-semibold mt-3 mb-3 group-hover:text-blue-400 transition">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="mt-6 h-[2px] w-0 group-hover:w-full bg-blue-400 transition-all duration-500" />

            </div>

            {/* Hover Lift */}
            <div className="absolute inset-0 group-hover:-translate-y-2 transition-transform duration-500" />
          </div>
        ))}

      </div>
    </section>
  );
}