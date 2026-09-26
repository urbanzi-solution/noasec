"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  { title: "Vulnerability Assessment", desc: "Prioritized exposure and weakness identification.", href: "/services/vulnerability-assessment-services" },
  { title: "Network Penetration Testing", desc: "Simulated internal and external network attacks.", href: "/services/network-penetration-testing" },
  { title: "Linux & Windows Administration", desc: "Ongoing operational security and server maintenance.", href: "/services/linux-windows-administration" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

export default function FireRelated() {
  return (
    <div className="bg-[#05070d] text-white px-6 md:px-12 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* ── RELATED SERVICES ── */}
        <section className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Related Hardening Ecosystem
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Complementary infrastructure services to protect your core compute fleet.
              </p>
            </div>
            <Link
              href="/services"
              className="text-xs font-semibold tracking-wider uppercase text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
            >
              <span>View All Services</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={fadeUp}
              >
                <Link
                  href={s.href}
                  className="glass-card p-6 flex flex-col justify-between h-full group"
                >
                  <div>
                    <h4 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors mb-2">
                      {s.title}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span>Learn more</span>
                    <ArrowRight size={13} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-[#0c1c38] via-[#081224] to-[#05070d] p-10 md:p-14 flex flex-col sm:flex-row items-center justify-between gap-8 shadow-[0_0_50px_rgba(14,165,233,0.12)]">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-2">
              Ready to lock down your server fleet?
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Schedule a configuration audit with our security architects to eliminate default vulnerabilities.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 flex-shrink-0">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Request Scoping Proposal <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}