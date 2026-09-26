"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const benefits = [
  {
    title: "Find threats bypassing automation",
    desc: "Uncover sophisticated living-off-the-land attacks that traditional EDR/SIEM tools often miss.",
  },
  {
    title: "Reduce dwell time",
    desc: "Shrink the window of opportunity for attackers from months to minutes through proactive detection.",
  },
  {
    title: "Strengthen SIEM rules",
    desc: "Use hunt findings to continuously tune and optimize your existing security detection engineering.",
  },
  {
    title: "Align with MITRE ATT&CK",
    desc: "Measure your defensive posture against industry-standard adversary TTPs (Tactics, Techniques, and Procedures).",
  },
];

const certs = [
  { label: "Certified SOC Analyst", code: "NCSA-SOC", isGrad: true },
  { label: "Certified Cybersecurity Professional", code: "NCCP", isGrad: false },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

export default function CyberSection() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      {/* VALUE PROPOSITION */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center -mt-10">

        {/* Globe Image */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full" />
          <div className="relative w-full max-w-[440px] aspect-square rounded-lg overflow-hidden border border-white/5 bg-[#111]">
            <Image
              src="/globe.png"
              alt="Global network threat map"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Benefits */}
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-3">
            Value Proposition
          </p>
          <h2 className="text-4xl font-bold text-white mb-10 leading-tight">
            Key Benefits
          </h2>

          <ul className="space-y-7">
            {benefits.map((b, i) => (
              <motion.li
                key={b.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                className="flex gap-4"
              >
                <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center">
                  <svg
                    className="w-3.5 h-3.5 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-white text-[15px] mb-1">{b.title}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{b.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-white/5" />
      </div>

      {/* ACADEMY */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-3">
            Academy
          </p>
          <h2 className="text-4xl font-bold text-white">
            Training &amp; Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certs.map((c, i) => (
            <motion.div
              key={c.code}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              className="group flex items-center justify-between px-6 py-6 rounded-lg bg-[#161616] border border-white/5 hover:border-blue-500/30 hover:bg-[#1a1a1a] transition-all duration-300 cursor-pointer"
            >
              <div>
                <p className="font-semibold text-white text-[15px] mb-1">{c.label}</p>
                <p className="text-xs text-blue-400 font-medium">({c.code})</p>
              </div>

              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 group-hover:border-blue-500/40 group-hover:text-blue-400 transition-all duration-300">
                {c.isGrad ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}