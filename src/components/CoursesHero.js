"use client";

import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import { GraduationCap, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function CoursesHero() {
  return (
    <section className="relative bg-[#05070d] bg-cyber-grid text-white px-6 md:px-12 pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-14 lg:pb-20 border-b border-white/5 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-100px] top-[20%] w-[500px] h-[500px] bg-cyan-500/15 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Breadcrumbs items={[{ name: "Courses Hub", href: "/courses" }]} />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT CONTENT (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
              <GraduationCap size={14} className="text-cyan-400" />
              <span>Cybersecurity Training Hub</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight">
              Frontline Cybersecurity <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 text-transparent bg-clip-text">
                Certification Pathways
              </span>
            </h1>

            <p className="text-gray-300 mt-6 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              NoaSec&apos;s certification programs are built as an end-to-end operational pathway — start from zero foundations and advance to certified professional grade. Available online and in our Kottayam academy, led by practicing security engineers.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-8">
              <Link href="/contact" className="btn-primary">
                Enroll / Request Syllabus <ArrowRight size={15} />
              </Link>
              <a href="#tracks" className="btn-secondary">
                View All Tracks
              </a>
            </div>

            {/* Quick highlights */}
            <div className="mt-8 flex flex-wrap gap-4 text-xs text-gray-400 border-t border-white/10 pt-6">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-cyan-400" /> 100% Practical Labs</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-cyan-400" /> Online &amp; Classroom</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-cyan-400" /> Industry Certifications</span>
            </div>
          </div>

          {/* RIGHT IMAGE (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md group">
              <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-cyan-400 z-20 pointer-events-none" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-r-2 border-t-2 border-cyan-400 z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-cyan-400 z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-cyan-400 z-20 pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#091222]/80 backdrop-blur-xl p-2 shadow-2xl">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] w-full">
                  <Image
                    src="/courses-hero.webp"
                    alt="NoaSec Cybersecurity Lab & Course Curriculum"
                    width={600}
                    height={450}
                    priority
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/90 via-transparent to-transparent" />
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-lg bg-[#070d18]/90 border border-white/10 px-3.5 py-2 backdrop-blur-md">
                  <span className="text-xs font-mono text-cyan-300">ACTIVE ADMISSIONS 2026</span>
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}