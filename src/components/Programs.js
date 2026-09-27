"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, ArrowRight, ShieldCheck, Clock, Award, Star } from "lucide-react";

export default function Programs() {
  const trainingTracks = [
    {
      code: "NCSA",
      name: "Cyber Security Associate",
      duration: "1 Month",
      level: "Beginner Track",
      desc: "The premier entry point into IT security. Covers network fundamentals, Linux basics, threat taxonomy, and foundational security tools.",
      href: "/courses/noasec-cyber-security-associate",
      featured: false,
    },
    {
      code: "NCD",
      name: "NoaSec Cyber Defender",
      duration: "2 Months",
      level: "Foundational Track",
      desc: "Hands-on offensive testing & defensive tactics. Master vulnerability assessment, OWASP web application hacking, and wireless security.",
      href: "/courses/noasec-cyber-defender",
      featured: false,
    },
    {
      code: "NCCP",
      name: "Certified Cybersecurity Professional",
      duration: "4 Months",
      level: "Flagship Advanced Track",
      desc: "Our most comprehensive career masterclass. Advanced penetration testing, cloud security, mobile testing, digital forensics, and live SOC operations.",
      href: "/courses/certified-cybersecurity-professional",
      featured: true,
    },
    {
      code: "NCSA-SOC",
      name: "Certified SOC Analyst",
      duration: "1–2 Months",
      level: "Specialist Track",
      desc: "Specialized Security Operations Center training: SIEM architecture (Splunk/Wazuh), threat hunting, log telemetry, and incident containment.",
      href: "/courses/certified-soc-analyst",
      featured: false,
    },
  ];

  return (
    <section
      id="courses"
      className="relative bg-[#05070d] text-white py-14 md:py-16 lg:py-24 px-6 md:px-12 border-t border-white/5 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 lg:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-3">
              <GraduationCap size={14} className="text-cyan-400" />
              <span>Job-Ready Cybersecurity Pathways</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              Elite <span className="text-cyan-400">Certification</span> Programs
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed">
              Step into frontline cybersecurity roles with practical, lab-intensive training led by active industry professionals. Available in online and offline modes.
            </p>
          </div>

          <Link href="/courses" className="btn-primary text-xs tracking-wider uppercase font-semibold shrink-0">
            View All Courses Hub <ArrowRight size={14} />
          </Link>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainingTracks.map((course, idx) => (
            <motion.div
              key={course.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Link
                href={course.href}
                className={`glass-card group flex flex-col justify-between w-full p-6 rounded-2xl transition-all duration-300 relative overflow-hidden ${
                  course.featured
                    ? "border-cyan-500/50 bg-gradient-to-b from-[#0b1c36] via-[#09152a] to-[#070e1c] shadow-[0_0_30px_rgba(14,165,233,0.15)]"
                    : ""
                }`}
              >
                {/* Glow badge for featured course */}
                {course.featured && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-cyan-500 to-blue-600 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-bl-xl tracking-wider flex items-center gap-1 shadow-md">
                    <Star size={11} fill="white" /> Most Popular
                  </div>
                )}

                <div>
                  {/* Duration & Level tags */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-400/20 px-2.5 py-0.5 rounded-full">
                      <Clock size={11} /> {course.duration}
                    </span>
                    <span className="text-[10px] uppercase font-mono text-gray-400">
                      {course.level}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors">
                    {course.code}
                  </h3>
                  <h4 className="text-sm font-semibold text-gray-300 mt-1 mb-3">
                    {course.name}
                  </h4>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    {course.desc}
                  </p>
                </div>

                <div className="mt-8 border-t border-white/10 pt-4 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-cyan-400 group-hover:text-cyan-300">
                  <span>View Full Syllabus</span>
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Fast advisory strip */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-[#09101f]/70 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Award className="h-8 w-8 text-cyan-400 shrink-0" />
            <div>
              <p className="text-sm font-bold text-white">Not sure which pathway matches your career goals?</p>
              <p className="text-xs text-gray-400">Schedule a 1-on-1 counseling call with our senior security instructors.</p>
            </div>
          </div>
          <Link href="/contact" className="btn-secondary text-xs uppercase tracking-wider shrink-0">
            Get Career Guidance <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
}