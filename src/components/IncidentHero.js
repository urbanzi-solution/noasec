"use client";

import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import { AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react";
import { SITE } from "@/data/site";

export default function IncidentHero() {
  return (
    <section className="relative bg-[#05070d] bg-cyber-grid text-white px-6 md:px-12 pt-32 pb-20 border-b border-white/5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-100px] top-[15%] w-[500px] h-[500px] bg-red-500/10 blur-[140px] rounded-full" />
        <div className="absolute right-[-100px] bottom-[10%] w-[450px] h-[450px] bg-cyan-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { name: "Services", href: "/services" },
              { name: "Incident Response", href: "/services/incident-response-services" },
            ]}
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-red-400 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              <span>Rapid Emergency Response 24/7</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-5 tracking-tight text-white">
              Incident Response <br />
              <span className="bg-gradient-to-r from-red-400 via-rose-300 to-cyan-400 text-transparent bg-clip-text">
                &amp; Breach Containment
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
              When a security breach or ransomware infection occurs, speed and surgical precision dictate survival. NoaSec&apos;s Incident Response squad delivers rapid host containment, root cause forensics, adversary expulsion, and business restoration.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn-primary">
                Activate Emergency IR Team <ArrowRight size={15} />
              </Link>
              <a href={`tel:${SITE.phone}`} className="btn-secondary">
                Call IR Hotline: {SITE.phoneDisplay}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-xs text-gray-400 border-t border-white/10 pt-6">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-cyan-400" /> &lt; 15 Min Rapid Triage</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-cyan-400" /> Ransomware Negotiation Support</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-cyan-400" /> Court-Admissible Forensics</span>
            </div>
          </div>

          {/* Right Image (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md group">
              <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-red-400 z-20 pointer-events-none" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-r-2 border-t-2 border-red-400 z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-red-400 z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-red-400 z-20 pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#091222]/80 backdrop-blur-xl p-2 shadow-2xl">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] w-full">
                  <Image
                    src="/incident-response.webp"
                    alt="NoaSec Emergency Incident Response"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/90 via-transparent to-transparent" />
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-lg bg-[#070d18]/90 border border-white/10 px-3.5 py-2 backdrop-blur-md">
                  <span className="text-xs font-mono text-rose-300">INCIDENT DISPATCH ACTIVE</span>
                  <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}