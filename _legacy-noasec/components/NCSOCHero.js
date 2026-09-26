"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

const metaStats = [
  {
    label: "Certification",
    value: "NCSA-SOC",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Duration",
    value: "1-2 Months",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Mode",
    value: "Online / Offline",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
  },
  {
    label: "Prerequisite",
    value: "Basic Security",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
];

const features = [
  {
    title: "Live Lab Environments",
    desc: "Engage with real-world attack scenarios in a safe virtual lab.",
  },
  {
    title: "Tier 1 & 2 Focus",
    desc: "Practical workflows for alert triage and incident handling.",
  },
];

export default function NCSOCHero() {
  return (
    <div className="bg-[#080c10] text-white">

      {/* ── HERO SECTION ── */}
      <section
        className="relative min-h-[520px] flex items-center"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(0,200,255,0.02) 39px, rgba(0,200,255,0.02) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(0,200,255,0.02) 39px, rgba(0,200,255,0.02) 40px)",
        }}
      >
        {/* BG image — right half only */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute right-0 top-0 w-1/2 h-full">
            <Image
              src="/soc-screens.png"
              alt="SOC screens"
              fill
              className="object-cover object-left opacity-40"
              priority
            />
            {/* Fade from left so it blends into dark bg */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#080c10] via-[#080c10]/50 to-transparent" />
          </div>
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#080c10] to-transparent" />
        </div>

        {/* Content — pinned left */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-lg"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-cyan-500/30 bg-[#0d1a20]/80 px-3 py-1.5 rounded-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.22em] text-cyan-400 uppercase">
                Enrollment Open
              </span>
            </div>

            <h1 className="text-4xl font-extrabold text-white leading-tight mb-5">
              Certified SOC Analyst (NCSA-SOC)
            </h1>

            <p className="text-sm text-gray-400 leading-relaxed mb-8">
              Specialist SOC certification — security monitoring, SIEM, log analysis, threat
              intelligence, and incident response in a Security Operations Center environment.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-7 py-3 bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-black tracking-[0.18em] uppercase transition-colors duration-200 rounded-sm"
              >
                Contact Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── META STATS ── */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {metaStats.map((m, i) => (
            <motion.div
              key={m.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-col gap-2 px-5 py-5 rounded-md border border-white/5 bg-[#111] hover:bg-[#161616] transition-colors duration-200"
            >
              <span className="text-cyan-500">{m.icon}</span>
              <p className="text-[9px] font-bold tracking-[0.18em] text-gray-500 uppercase">{m.label}</p>
              <p className="text-sm font-bold text-white">{m.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="h-px bg-white/5" />
      </div>

      {/* ── EXPERT CURRICULUM ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-bold tracking-[0.22em] text-cyan-400 uppercase mb-3">
              Expert Curriculum
            </p>
            <h2 className="text-2xl font-extrabold text-white mb-5 leading-tight">
              Master the Bridge to SOC Roles
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-8">
              The NoaSec Certified SOC Analyst (NCSA-SOC) is a specialist certification for
              students and professionals targeting Security Operations Center (SOC) roles. The
              course covers the complete SOC workflow — from security monitoring and log
              analysis to alert investigation, threat intelligence, and incident response.
              Students gain hands-on experience with industry-standard SIEM platforms, giving
              them the practical skills employers look for when hiring Tier 1 and Tier 2 SOC analysts.
            </p>

            <ul className="space-y-5">
              {features.map((f, i) => (
                <motion.li
                  key={f.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex gap-3"
                >
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 border-cyan-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white mb-0.5">{f.title}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right — image with stat badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/5 bg-[#0d1520]">
              <Image
                src="/soc-dashboard.png"
                alt="SOC Dashboard"
                fill
                className="object-cover"
              />
            </div>

            {/* Stat badge bottom-right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="absolute bottom-4 right-4 flex flex-col items-center justify-center px-6 py-5 rounded-lg bg-[#0d1520]/95 border border-cyan-500/20 backdrop-blur-sm min-w-[110px]"
            >
              <p className="text-2xl font-extrabold text-cyan-400">100%</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Practical Focus</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}