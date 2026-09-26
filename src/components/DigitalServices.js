"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { categories, getServicesByCategory, serviceHref, categoryHref } from "@/data/services";
import { Sparkles, Palette, Globe2, Layout, TrendingUp, ArrowRight } from "lucide-react";

const digital = categories.filter((c) => c.slug !== "cybersecurity");

const categoryIcons = {
  branding: Palette,
  "web-development": Globe2,
  "ui-ux-design": Layout,
  "digital-marketing": TrendingUp,
};

export default function DigitalServices() {
  return (
    <section id="digital-services" className="scroll-mt-20 bg-[#05070d] px-6 py-24 md:px-12 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-3">
              <Sparkles size={14} className="text-cyan-400" />
              <span>Full-Stack Digital Growth</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              Branding, Development & <span className="text-cyan-400">Digital Marketing</span>
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-gray-400 leading-relaxed">
              We engineer brand authority, high-performance web applications, and search optimization strategies (SEO, GEO, AEO) that win citations across AI engines and Google.
            </p>
          </div>

          <Link href="/services" className="btn-ghost text-xs tracking-wider uppercase font-semibold shrink-0">
            View All Categories <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {digital.map((c, i) => {
            const Icon = categoryIcons[c.slug] || Sparkles;
            const subServices = getServicesByCategory(c.slug);

            return (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="glass-card group flex flex-col justify-between rounded-2xl p-7 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/40 transition-colors">
                      <Icon size={24} />
                    </div>
                    <span className="text-[11px] font-mono tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300 uppercase">
                      {subServices.length} Solutions
                    </span>
                  </div>

                  <h3 className="mb-2 text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    <Link href={categoryHref(c)} className="hover:underline underline-offset-4">
                      {c.name}
                    </Link>
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400">{c.short}</p>

                  {/* Subservice Pills */}
                  <div className="mt-6">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-2">
                      Core Capabilities:
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {subServices.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={serviceHref(s)}
                            className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-300 transition-all hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-white"
                          >
                            <span>{s.shortName || s.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 border-t border-white/5 pt-5 flex items-center justify-between">
                  <Link
                    href={categoryHref(c)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-cyan-400 group-hover:text-cyan-300 transition-colors"
                  >
                    <span>Explore {c.name}</span>
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
