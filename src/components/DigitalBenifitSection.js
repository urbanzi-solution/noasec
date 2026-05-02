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

const benefits = [
  {
    title: "Legally admissible evidence",
   
  },
  {
    title: "Preserved integrity (hashes)",
   
  },
  {
    title: "Court-accepted documentation",
   
  },
  {
    title: "Rapid response deployment",
   
  },
];

const relatedServices = [
  {
    title: "Disk & Memory Forensics",
    desc: "Remote and on-site preservation of digital assets following ISO 27037 standards.",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Malware Analysis",
    desc: "Reverse engineering malicious binaries discovered during memory forensics.",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

const certifications = [
  { tag: "CERTIFICATION", title: "Certified Digital Forensics Analyst (NCDF)" },
  { tag: "CERTIFICATION", title: "Certified Cybersecurity Professional (NCCP)" },
];

export default function DigitalBenefitsSection() {
  return (
    <div className="bg-[#0a0a0a] text-white">

      {/* ── KEY BENEFITS ── */}
      <section className="max-w-6xl mx-auto px-6 py-20 -mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/5 bg-[#111]"
          >
            <Image
              src="/forensics.png"
              alt="Server forensics hardware"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Right — benefits */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Key Benefits</h2>
            <ul className="space-y-6">
              {benefits.map((b, i) => (
                <motion.li
                  key={b.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex gap-3"
                >
                  {/* Check circle */}
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 border-blue-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white mb-0.5">{b.title}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{b.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-white/5" />
      </div>

      {/* ── RELATED SERVICES + TRAINING ── */}
      <section className="max-w-6xl mx-auto px-6 py-20 -mt-18">
        <h2 className="text-base font-bold text-white mb-8">Related Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">

          {/* Left — 2 service cards stacked */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedServices.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col px-5 py-6 rounded-md border border-white/5 bg-[#111] hover:bg-[#161616] hover:border-blue-500/20 transition-all duration-200 group"
              >
                {/* Icon */}
                <span className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-blue-400 transition-colors duration-200 mb-4">
                  {s.icon}
                </span>
                <p className="text-sm font-bold text-white mb-2">{s.title}</p>
                <p className="text-xs text-gray-400 leading-relaxed mb-4 flex-1">{s.desc}</p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-400 hover:text-blue-300 uppercase tracking-wider transition-colors duration-200 group/link"
                >
                  <span>Learn More</span>
                  <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right — Training card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="relative rounded-md border border-white/5 bg-[#111] px-6 py-6 flex flex-col gap-5 overflow-hidden"
          >
            {/* Ghost graduation icon */}
            <div className="absolute right-4 top-4 opacity-10">
              <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
              </svg>
            </div>

            <h3 className="text-base font-bold text-white relative z-10">Training</h3>

            <div className="flex flex-col gap-4 relative z-10">
              {certifications.map((c, i) => (
                <div key={c.title} className={i > 0 ? "pt-4 border-t border-white/5" : ""}>
                  <p className="text-[9px] font-bold tracking-[0.18em] text-blue-400 uppercase mb-1">
                    {c.tag}
                  </p>
                  <p className="text-sm font-semibold text-white leading-snug">{c.title}</p>
                </div>
              ))}
            </div>

            <Link
              href="/services"
              className="relative z-10 mt-2 w-full text-center px-4 py-3 border border-white/20 text-white text-xs font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all duration-200 rounded-sm"
            >
              View Training Hub
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}