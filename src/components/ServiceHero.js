"use client";

import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import { ShieldCheck, ArrowRight, Activity, Clock, Award } from "lucide-react";

export default function ServiceHero() {
  return (
    <section className="relative w-full min-h-[82vh] flex items-center justify-start bg-[#05070d] bg-cyber-grid text-white overflow-hidden pt-32 pb-20 px-6 md:px-12 border-b border-white/5">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-150px] top-[15%] w-[550px] h-[550px] bg-cyan-500/15 blur-[140px] rounded-full" />
        <div className="absolute right-[-150px] bottom-[10%] w-[500px] h-[500px] bg-blue-600/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="mb-6">
          <Breadcrumbs items={[{ name: "Services", href: "/services" }]} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-6">
              <ShieldCheck size={14} className="text-cyan-400" />
              <span>Full-Spectrum Enterprise Solutions</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight">
              Protect Your Assets. <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 text-transparent bg-clip-text">
                Accelerate Digital Growth.
              </span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mt-6 max-w-2xl">
              From offensive penetration testing and 24/7 managed SOC telemetry to forensic investigation, cloud infrastructure hardening, custom web &amp; mobile development, and modern AI search optimization (SEO, GEO &amp; AEO).
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn-primary">
                Schedule Free Consultation <ArrowRight size={15} />
              </Link>
              <a href="#cybersecurity" className="btn-secondary">
                Explore Security Services
              </a>
            </div>

            {/* Key Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/10 max-w-2xl">
              <div>
                <p className="text-2xl font-bold text-cyan-400">24 / 7</p>
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mt-1">SOC Monitoring</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mt-1">Certified Testers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-cyan-400">&lt; 15 min</p>
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mt-1">IR Rapid Triage</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">OWASP</p>
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mt-1">Standard Aligned</p>
              </div>
            </div>
          </div>

          {/* Right Image (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md group">
              {/* Corner HUD Brackets */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-cyan-400 z-20 pointer-events-none" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-r-2 border-t-2 border-cyan-400 z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-cyan-400 z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-cyan-400 z-20 pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 bg-[#091222]/80 backdrop-blur-xl p-2 shadow-[0_0_30px_rgba(14,165,233,0.15)]">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] w-full">
                  <Image
                    src="/shield-hero.webp"
                    alt="Enterprise Cybersecurity Shield & Digital Infrastructure Defense"
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
                    <span>DEFENSIVE ARCHITECTURE</span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400">ENTERPRISE GRADE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}