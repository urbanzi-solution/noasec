"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: "easeOut" },
  }),
};

const benefits = [
  {
    num: "01",
    title: "Surface Reduction",
    desc: "Dramatically decrease the number of potential entry points available to attackers.",
  },
  {
    num: "02",
    title: "Total Compliance",
    desc: "Align your infrastructure with GDPR, HIPAA, and PCI-DSS requirements through automated enforcement.",
  },
  {
    num: "03",
    title: "Attack Prevention",
    desc: "Stop automated exploits and script-kiddie attacks before they even reach your application layer.",
  },
];

export default function HardeningSection() {
  return (
    <div className="bg-[#0a0a0a] text-white px-6 py-20 max-w-6xl mx-auto space-y-16">

      {/* ── THREE BENEFITS ── */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {benefits.map((b, i) => (
          <motion.div
            key={b.num}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={fadeUp}
            className="flex gap-4"
          >
            {/* Number */}
            <span className="text-2xl font-bold text-gray-600 leading-none mt-0.5 min-w-[32px]">
              {b.num}
            </span>
            {/* Text */}
            <div>
              <h3 className="text-base font-bold text-white mb-2">{b.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ── NCCP CERTIFICATION CARD ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-xl bg-[#141414] border border-white/5 overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">

          {/* Left — content */}
          <div className="px-10 py-12 flex flex-col justify-between gap-8">
            <div>
              {/* Badge */}
              <span className="inline-block text-[10px] font-semibold tracking-[0.18em] text-blue-300 uppercase border border-blue-500/30 bg-blue-500/10 px-3 py-1 rounded-sm mb-6">
                Official Certification
              </span>

              <h2 className="text-2xl font-bold text-white leading-tight mb-4">
                Certified Cybersecurity Professional (NCCP)
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Empower your internal IT teams to maintain hardening standards. Our NCCP
                training provides hands-on labs focused on the exact techniques we use for
                infrastructure defense.
              </p>
            </div>

            {/* CTA */}
            <div>
              <Link
                href="/courses"
                className="inline-block px-6 py-3 bg-white text-black text-sm font-semibold hover:bg-gray-100 transition-colors duration-200 rounded-sm"
              >
                View Curriculum
              </Link>
            </div>
          </div>

          {/* Right — stat */}
          <div className="px-10 py-12 flex flex-col items-center justify-center gap-4 relative">
            {/* Ghost icon */}
            <svg
              className="absolute right-8 top-1/2 -translate-y-1/2 w-32 h-32 text-white/5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.134 2 5 5.134 5 9v7l-1.707 1.707A1 1 0 004 19v1a1 1 0 001 1h14a1 1 0 001-1v-1a1 1 0 00-.293-.707L18 16V9c0-3.866-3.134-7-6-7zm0 2c2.761 0 5 2.239 5 5v7.586l1.414 1.414H5.586L7 16.586V9c0-2.761 2.239-5 5-5z" />
              <path d="M12 1C9.239 1 7 3.686 7 7v9l-2 2v1h10v-1l-2-2V7c0-3.314-2.239-6-1-6z" />
            </svg>

            {/* Graduation cap icon */}
            <div className="relative z-10 mb-2">
              <svg
                className="w-20 h-20 text-white/10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
              </svg>
            </div>

            {/* Stat */}
            <div className="relative z-10 text-center">
              <p className="text-5xl font-extrabold text-blue-400 leading-none">25+</p>
              <p className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mt-2">
                Hardening Labs
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}