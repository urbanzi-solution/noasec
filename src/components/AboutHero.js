"use client";

import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/data/site";
import Breadcrumbs from "./Breadcrumbs";
import { Shield, Target, Award, ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative lg:min-h-[80vh] flex items-center justify-center bg-[#05070d] bg-cyber-grid text-white overflow-hidden pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-14 lg:pb-20 px-6 md:px-12">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/4 w-[600px] h-[500px] bg-cyan-500/15 blur-[140px] rounded-full" />
        <div className="absolute right-1/4 bottom-1/4 w-[500px] h-[400px] bg-blue-600/10 blur-[130px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex mb-6">
          <Breadcrumbs items={[{ name: "About Us", href: "/about" }]} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(14,165,233,0.15)]">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>CYBERSECURITY &amp; DIGITAL EXCELLENCE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-[1.12] tracking-tight">
              Pioneering the Frontier of <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 text-transparent bg-clip-text">
                Digital Defense &amp; Growth
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
              NoaSec Solutions bridges the critical gulf between academic cybersecurity concepts and high-velocity frontline defense. Founded by certified offensive security practitioners, we defend enterprise environments and cultivate the next generation of cyber defenders.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/courses" className="btn-primary">
                Explore Training Programs <ArrowRight size={15} />
              </Link>
              <Link href="/services" className="btn-secondary">
                Enterprise Services
              </Link>
            </div>

            {/* Live operational badge */}
            <div className="mt-8 inline-flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span>HEADQUARTERS &bull; GLOBAL OPERATIONS ACTIVE 24/7</span>
            </div>
          </div>

          {/* Right Image (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-lg group">
              {/* Corner HUD Brackets */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-cyan-400 z-20 pointer-events-none" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-r-2 border-t-2 border-cyan-400 z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-cyan-400 z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-cyan-400 z-20 pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 bg-[#091222]/80 backdrop-blur-xl p-2 shadow-[0_0_30px_rgba(14,165,233,0.15)]">
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] w-full">
                  <Image
                    src="/about-hero.webp"
                    alt="NoaSec Global Cybersecurity Defense Command Operations"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/90 via-transparent to-transparent" />
                </div>

                {/* Floating Telemetry Pill */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between rounded-lg border border-cyan-500/30 bg-[#05070d]/90 px-3.5 py-2 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                    <span>HQ SECURITY OPERATIONS</span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400">DEFENSE IN DEPTH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}