"use client";

import Breadcrumbs from "./Breadcrumbs";
import Link from "next/link";
import { ArrowRight, Compass, Calendar, User, Clock, ShieldCheck } from "lucide-react";

export default function BlogHeader() {
  return (
    <section className="relative overflow-hidden bg-[#05070d] text-white pt-32 pb-20 px-6 md:px-12 border-b border-white/5 bg-cyber-grid">
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-150px] top-[15%] w-[550px] h-[550px] bg-cyan-500/15 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Breadcrumbs
          items={[
            { name: "Blog", href: "/blog" },
            { name: "Cybersecurity Career Roadmap 2026", href: "/blogs/blog" },
          ]}
        />

        {/* Badge */}
        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
          <Compass size={14} className="text-cyan-400" />
          <span>Industry Career Blueprint 2026</span>
        </div>

        {/* Heading */}
        <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.12] tracking-tight text-white">
          How to Start a Career in Cybersecurity: <br />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 text-transparent bg-clip-text">
            Complete Beginner&apos;s Roadmap
          </span>
        </h1>

        {/* Author / Date Strip */}
        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-gray-400 border-t border-white/10 pt-4">
          <span className="flex items-center gap-1.5">
            <User size={14} className="text-cyan-400" />
            <span>NoaSec Academy Team</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-cyan-400" />
            <span>Updated September 2026</span>
          </span>
          <span className="flex items-center gap-1.5 text-cyan-400">
            <Clock size={14} />
            <span>12 min read</span>
          </span>
        </div>

        {/* Description */}
        <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
          Cybersecurity is one of the fastest growing and most lucrative technical professions in the world. As enterprises and public entities defend against persistent state-sponsored adversaries and criminal syndicates, the demand for certified, lab-proven practitioners has reached unprecedented heights.
        </p>

        {/* Interactive Jump CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#roadmap"
            className="btn-primary"
          >
            Explore Roadmap Steps <ArrowRight size={15} />
          </a>

          <Link
            href="/courses"
            className="btn-secondary"
          >
            Explore Hands-On Courses
          </Link>
        </div>
      </div>
    </section>
  );
}