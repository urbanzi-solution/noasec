"use client";

import { motion } from "framer-motion";

const deliverables = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
    title: "OS Hardening",
    desc: "Deep-level kernel tuning and removal of non-critical packages to eliminate potential exploit vectors at the core.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3m8-6l3 3-3 3M14 6l-4 12" />
      </svg>
    ),
    title: "Port Minimization",
    desc: "Auditing and disabling all unnecessary services and communication ports to prevent lateral movement.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Rule Auditing",
    desc: "Granular analysis of existing policies, replacing loose rules with strict, identity-based filtering.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "SSH & MFA",
    desc: "Enforcing key-based authentication and multi-factor layers for all administrative access points.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12 20.25h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "Validation Reports",
    desc: "Comprehensive documentation including pre- and post-hardening scores based on industry compliance standards.",
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

export default function NetworkOverview() {
  return (
    <div className="bg-[#0a0a0a] text-white px-6 py-20 max-w-6xl mx-auto">

      {/* ── SERVICE OVERVIEW ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {/* Left */}
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-blue-500 uppercase mb-3">
            Service Overview
          </p>
          <h2 className="text-3xl font-bold text-white leading-tight">
           Precision Security Architecture
          </h2>
        </div>

        {/* Right */}
        <div className="space-y-5 text-gray-400 text-sm leading-relaxed">
          <p>
           Default server and firewall configurations are rarely secure. NoaSec's Server & Firewall Hardening service systematically reduces your attack surface by applying security baselines, disabling unnecessary services, enforcing least-privilege access, and configuring firewalls with least-access rule sets — aligned with CIS Benchmarks and industry best practices.
          </p>
          <p>
            Our approach isn't just about closing ports—it's about structural integrity. We analyze every layer of your server stack and firewall policy to remove unnecessary services, tighten authentication protocols, and establish a "deny-by-default" security posture.
          </p>
        </div>
      </section>

      {/* ── TECHNICAL DELIVERABLES ── */}
      <section>
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] text-blue-500 uppercase mb-3">
            Technical Deliverables
          </p>
          <h2 className="text-3xl font-bold text-white">The Hardening Roadmap</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 bg-black border border-white/5 rounded-lg overflow-hidden">
          {deliverables.map((d, i) => (
            <motion.div
              key={d.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={fadeUp}
              className="bg-[#111111] px-7 py-8 hover:bg-[#161616] transition-colors duration-300 group"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-md bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                {d.icon}
              </div>
              <h3 className="font-bold text-white text-[16px] mb-3">{d.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}