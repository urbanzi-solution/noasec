"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Terminal, Award, FileSearch, Activity, Clock, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" },
  }),
};

const courses = [
  {
    code: "NCSA",
    level: "Beginner Level",
    title: "Cyber Security Associate",
    desc: "The entry point into cybersecurity — designed for students, beginners, and transitioning IT professionals. Covers threat vectors, TCP/IP, Linux fundamentals, and security tool essentials.",
    link: "View NCSA Course Details",
    href: "/courses/noasec-cyber-security-associate",
    duration: "1 Month",
    featured: false,
    icon: Terminal,
  },
  {
    code: "NCD",
    level: "Foundational Level",
    title: "NoaSec Cyber Defender",
    desc: "Hands-on training in ethical hacking, vulnerability management, and web security testing. Ideal for candidates ready to move beyond theory into offensive testing.",
    link: "View NCD Course Details",
    href: "/courses/noasec-cyber-defender",
    duration: "2 Months",
    featured: false,
    icon: ShieldCheck,
  },
  {
    code: "NCCP",
    level: "Flagship Advanced Level",
    title: "Certified Cybersecurity Professional",
    desc: "Our flagship 4-month comprehensive certification covering advanced network penetration testing, AWS/Azure cloud security, mobile app pentesting, SIEM/SOC operations, digital forensics, and live incident response.",
    link: "View NCCP Flagship Details",
    href: "/courses/certified-cybersecurity-professional",
    duration: "4 Months",
    featured: true,
    intensity: 95,
    intensityLabel: "Intensive 95% Practical",
    icon: Award,
  },
  {
    code: "NCDF",
    level: "Specialist Level",
    title: "Digital Forensics Analyst",
    desc: "Specialist certification in cybercrime investigation, volatile memory acquisition, disk bit-stream imaging, chain-of-custody protocols, and malware reverse engineering.",
    link: "Enquire About NCDF",
    href: "/contact",
    duration: "1–2 Months",
    featured: false,
    icon: FileSearch,
  },
  {
    code: "NCSA-SOC",
    level: "Specialist Level",
    title: "Certified SOC Analyst",
    desc: "Direct training for Security Operations Center positions — log telemetry, SIEM configuration (Splunk, Wazuh, ELK), threat hunting, and automated incident containment.",
    link: "View SOC Course Details",
    href: "/courses/certified-soc-analyst",
    duration: "1–2 Months",
    featured: false,
    icon: Activity,
  },
];

export default function CourseCards() {
  return (
    <div className="bg-[#05070d] text-white px-6 md:px-12 py-20">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-3">
            <span>Specialized Pathways</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Choose Your Specialization
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
            Select a tailored certification to view detailed module breakdowns, lab assignments, and prerequisites.
          </p>
        </div>

        {/* ── COURSE GRID ── */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">

            {/* Left 2 Courses (NCSA, NCDF) */}
            <div className="flex flex-col gap-6">
              {[courses[0], courses[3]].map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={c.code}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex-1"
                  >
                    <Link
                      href={c.href}
                      className="glass-card group flex flex-col justify-between h-full p-7 rounded-2xl transition-all duration-300"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                            <Icon size={20} />
                          </div>
                          <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-400/20 px-2.5 py-0.5 rounded-full">
                            {c.duration}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                          {c.level}
                        </span>
                        <h3 className="text-xl font-extrabold text-white group-hover:text-cyan-300 transition-colors mt-1 mb-2">
                          {c.code} — {c.title}
                        </h3>
                        <p className="text-xs leading-relaxed text-gray-400 mb-6">
                          {c.desc}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400 group-hover:text-cyan-300 border-t border-white/5 pt-4">
                        <span>{c.link}</span>
                        <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Center 2 Courses (NCD, NCSA-SOC) */}
            <div className="flex flex-col gap-6">
              {[courses[1], courses[4]].map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={c.code}
                    custom={i + 1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex-1"
                  >
                    <Link
                      href={c.href}
                      className="glass-card group flex flex-col justify-between h-full p-7 rounded-2xl transition-all duration-300"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                            <Icon size={20} />
                          </div>
                          <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-400/20 px-2.5 py-0.5 rounded-full">
                            {c.duration}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                          {c.level}
                        </span>
                        <h3 className="text-xl font-extrabold text-white group-hover:text-cyan-300 transition-colors mt-1 mb-2">
                          {c.code} — {c.title}
                        </h3>
                        <p className="text-xs leading-relaxed text-gray-400 mb-6">
                          {c.desc}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400 group-hover:text-cyan-300 border-t border-white/5 pt-4">
                        <span>{c.link}</span>
                        <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Featured Column: NCCP Flagship */}
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex"
            >
              <Link
                href={courses[2].href}
                className="glass-card group flex flex-col justify-between w-full p-7 rounded-2xl transition-all duration-300 border-cyan-500/40 bg-gradient-to-b from-[#0b1c36] via-[#09152a] to-[#070e1c] shadow-[0_0_30px_rgba(14,165,233,0.15)] relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300">
                      <Award size={24} />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider bg-cyan-500 text-white px-3 py-1 rounded-full shadow-md">
                      Flagship Masterclass
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300">
                    {courses[2].level}
                  </span>
                  <h3 className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors mt-1 mb-2">
                    {courses[2].code}
                  </h3>
                  <h4 className="text-sm font-semibold text-gray-200 mb-3">
                    {courses[2].title}
                  </h4>

                  <p className="text-xs leading-relaxed text-gray-300 mb-6">
                    {courses[2].desc}
                  </p>

                  {/* Intensity Indicator */}
                  <div className="p-4 rounded-xl bg-black/30 border border-white/10 mb-6">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-gray-300 mb-2">
                      <span>Curriculum Depth</span>
                      <span className="text-cyan-400">{courses[2].intensityLabel}</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full w-[95%]" />
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-cyan-400 group-hover:text-cyan-300">
                  <span>{courses[2].link}</span>
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>

          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="relative rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-[#0c182c] via-[#091222] to-[#060a14] p-8 md:p-12 text-center overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Looking for Enterprise Security Services?
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed mb-8">
              If you represent an organization seeking professional penetration testing, managed SOC monitoring, or digital forensics rather than training, explore our full enterprise services catalog.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/services"
                className="btn-primary"
              >
                View Security Services <ArrowRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="btn-secondary"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}