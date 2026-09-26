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

const courses = [
  {
    level: "LEVEL: BEGINNER",
    title: "CYBER SECURITY ASSOCIATE (NCSA)",
    desc: "The entry point to cybersecurity — perfect for school students, beginners, and non-IT professionals. Covers cyber threats, networking fundamentals, Linux basics, and security tool essentials.",
    link: "VIEW NCSA COURSE DETAILS",
    href: "#",
    featured: false,
    intensity: null,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    level: "LEVEL: FOUNDATIONAL",
    title: "NOASEC CYBER DEFENDER (NCD)",
    desc: "Hands-on training in ethical hacking, vulnerability assessment, and web security testing. Ideal for college students and ethical hacking learners ready to move beyond theory.",
    link: "VIEW NCD COURSE DETAILS",
    href: "#",
    featured: false,
    intensity: null,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    level: "LEVEL: ADVANCED",
    title: "CERTIFIED CYBERSECURITY PROFESSIONAL (NCCP)",
    desc: "The flagship 4-month program covering advanced penetration testing, cloud security, mobile app pentesting, SOC operations, digital forensics, and incident response. Intensive laboratory environment with simulated state-sponsored attack scenarios.",
    link: "VIEW NCCP COURSE DETAILS",
    href: "#",
    featured: true,
    intensity: 85,
    intensityLabel: "85% CRITICAL",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    rowSpan: true,
  },
  {
    level: "LEVEL: SPECIALIST",
    title: "DIGITAL FORENSICS ANALYST (NCDF)",
    desc: "Specialist certification for cybercrime investigation, digital evidence collection, disk & memory forensics, and malware analysis. Designed for forensic and investigation roles.",
    link: "VIEW NCDF COURSE DETAILS",
    href: "#",
    featured: false,
    intensity: null,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    level: "LEVEL: SPECIALIST",
    title: "CERTIFIED SOC ANALYST (NCSA-SOC)",
    desc: "Focused training for Security Operations Center roles — security monitoring, SIEM architecture, log analysis, threat intelligence, and incident response.",
    link: "VIEW NCSA-SOC COURSE DETAILS",
    href: "#",
    featured: false,
    intensity: null,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function CourseCards() {
  return (
    <div className="bg-[#0a0a0a] text-white px-6 py-16 -mt-20">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* ── COURSE GRID ── */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 items-start">

            {/* Col 1 — NCSA + NCDF */}
            <div className="flex flex-col gap-3">
              {[courses[0], courses[3]].map((c, i) => (
                <motion.div
                  key={c.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex flex-col justify-between p-6 rounded-md border border-white/8 bg-[#111] hover:bg-[#161616] hover:border-white/12 transition-all duration-200 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-blue-400">{c.icon}</span>
                      <span className="text-[9px] font-mono text-gray-600 tracking-widest">[{c.level}]</span>
                    </div>
                    <h3 className="text-sm font-black uppercase text-white leading-snug mb-3">{c.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed mb-5">{c.desc}</p>
                  </div>
                  <Link
                    href={c.href}
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-blue-400 hover:text-blue-300 uppercase transition-colors duration-200 group/link"
                  >
                    <span>{c.link}</span>
                    <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Col 2 — NCD + NCSA-SOC */}
            <div className="flex flex-col gap-3">
              {[courses[1], courses[4]].map((c, i) => (
                <motion.div
                  key={c.title}
                  custom={i + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex flex-col justify-between p-6 rounded-md border border-white/8 bg-[#111] hover:bg-[#161616] hover:border-white/12 transition-all duration-200 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-blue-400">{c.icon}</span>
                      <span className="text-[9px] font-mono text-gray-600 tracking-widest">[{c.level}]</span>
                    </div>
                    <h3 className="text-sm font-black uppercase text-white leading-snug mb-3">{c.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed mb-5">{c.desc}</p>
                  </div>
                  <Link
                    href={c.href}
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-blue-400 hover:text-blue-300 uppercase transition-colors duration-200 group/link"
                  >
                    <span>{c.link}</span>
                    <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Col 3 — NCCP featured (full height) */}
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-col justify-between p-6 rounded-md border border-blue-500/40 bg-[#0d1a3a]/60 hover:bg-[#0d1a3a]/80 transition-all duration-200 group h-full row-span-2"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-blue-300">{courses[2].icon}</span>
                  <span className="text-[9px] font-mono text-blue-400/70 tracking-widest">[{courses[2].level}]</span>
                </div>
                <h3 className="text-sm font-black uppercase text-white leading-snug mb-3">{courses[2].title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-6">{courses[2].desc}</p>

                {/* Progress bar */}
                <div className="mb-1">
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${courses[2].intensity}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                      className="h-full bg-blue-500 rounded-full"
                    />
                  </div>
                  <div className="flex items-center justify-between mt-1.5">
                    <span className="text-[9px] font-mono text-gray-500 tracking-widest uppercase">
                      Program Intensity
                    </span>
                    <span className="text-[9px] font-bold text-blue-400 tracking-widest">
                      {courses[2].intensityLabel}
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href={courses[2].href}
                className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-blue-400 hover:text-blue-300 uppercase transition-colors duration-200 mt-6 group/link"
              >
                <span>{courses[2].link}</span>
                <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-lg border border-white/8 bg-[#111] overflow-hidden"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.02) 39px, rgba(255,255,255,0.02) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.02) 39px, rgba(255,255,255,0.02) 40px)",
          }}
        >
          <div className="relative z-10 flex flex-col items-center text-center px-8 py-16">
            <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-3">
              Looking for Security Services?
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed max-w-lg mb-8">
              If you're an organization seeking professional security services rather than training,
              explore our full service portfolio. We provide threat intelligence, incident response,
              and VAPT services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/services"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-black tracking-[0.18em] uppercase transition-colors duration-200 rounded-sm"
              >
                View All Security Services
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border border-blue-500/40 hover:border-blue-400/60 text-blue-300 hover:text-blue-200 text-xs font-black tracking-[0.18em] uppercase transition-all duration-200 rounded-sm"
              >
                Contact Us for a Consultation
              </Link>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}