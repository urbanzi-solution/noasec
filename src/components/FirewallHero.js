"use client";

import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import { ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export default function FirewallHero() {
  return (
    <section className="relative bg-[#05070d] bg-cyber-grid text-white px-6 md:px-12 pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-14 lg:pb-20 border-b border-white/5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-100px] top-[15%] w-[500px] h-[500px] bg-cyan-500/15 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { name: "Services", href: "/services" },
              { name: "Server & Firewall Hardening", href: "/services/server-hardening" },
            ]}
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-6">
              <ShieldCheck size={14} className="text-cyan-400" />
              <span>CIS Benchmarks Aligned Hardening</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-5 tracking-tight text-white">
              Server &amp; Firewall <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 text-transparent bg-clip-text">
                Infrastructure Hardening
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Default server and firewall configurations are rarely secure. NoaSec&apos;s Server &amp; Firewall Hardening service systematically reduces your attack surface by applying security baselines, disabling unnecessary services, enforcing least-privilege access, and configuring firewalls with least-access rule sets aligned with CIS Benchmarks.
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
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-cyan-400" /> CIS Level 1 &amp; Level 2 Baselines</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-cyan-400" /> Port &amp; Protocol Minimization</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-cyan-400" /> Strict Rule Auditing &amp; MFA</span>
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
                    src="/firewall-dashboard.webp"
                    alt="NoaSec Firewall and Server Hardening Dashboard"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/90 via-transparent to-transparent" />
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-lg bg-[#070d18]/90 border border-white/10 px-3.5 py-2 backdrop-blur-md">
                  <span className="text-xs font-mono text-cyan-300">DENY-BY-DEFAULT ACTIVE</span>
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