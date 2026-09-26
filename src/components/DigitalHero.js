"use client";

import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import { FileSearch, ArrowRight, CheckCircle2 } from "lucide-react";

export default function DigitalHero() {
  return (
    <section className="relative bg-[#05070d] bg-cyber-grid text-white px-6 md:px-12 pt-32 pb-20 border-b border-white/5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-100px] top-[15%] w-[500px] h-[500px] bg-cyan-500/15 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { name: "Services", href: "/services" },
              { name: "Digital Evidence Collection", href: "/services/digital-evidence-collection" },
            ]}
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-6">
              <FileSearch size={14} className="text-cyan-400" />
              <span>Forensically Sound Chain of Custody</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-5 tracking-tight text-white">
              Digital Evidence <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 text-transparent bg-clip-text">
                Collection &amp; Preservation
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Proper digital evidence collection is critical for investigations, litigation, and regulatory compliance. NoaSec&apos;s Digital Evidence Collection service provides forensically sound acquisition and preservation of digital artifacts — following strict chain of custody protocols to ensure evidence is fully admissible.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn-primary">
                Request Scoping Proposal <ArrowRight size={15} />
              </Link>
              <Link href="/services" className="btn-secondary">
                View All Services
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-xs text-gray-400 border-t border-white/10 pt-6">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-cyan-400" /> ISO/IEC 27037 Compliant</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-cyan-400" /> Write-Blocked Bitstream Copies</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-cyan-400" /> Cryptographic Hash Verification</span>
            </div>
          </div>

          {/* Right Image (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md group">
              <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-cyan-400 z-20 pointer-events-none" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-r-2 border-t-2 border-cyan-400 z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-cyan-400 z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-cyan-400 z-20 pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#091222]/80 backdrop-blur-xl p-2 shadow-2xl">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] w-full">
                  <Image
                    src="/digital-evidence.webp"
                    alt="NoaSec Digital Evidence Acquisition"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/90 via-transparent to-transparent" />
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-lg bg-[#070d18]/90 border border-white/10 px-3.5 py-2 backdrop-blur-md">
                  <span className="text-xs font-mono text-cyan-300">CHAIN OF CUSTODY VERIFIED</span>
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