"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  { title: "Managed SOC Operations", href: "/services/managed-soc" },
  { title: "Incident Response", href: "/services/incident-response-services" },
  { title: "Malware Analysis", href: "/services/malware-analysis" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

export default function RelatedServices() {
  return (
    <div className="bg-[#0d0d0d] text-white px-6 py-16 max-w-6xl mx-auto -mt-20">

      {/* ── RELATED SERVICES ── */}
      <section className="mb-16">
        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-6">Related Services</h3>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                className="group flex flex-col justify-between h-full px-5 py-5 rounded-md bg-[#161616] border border-white/5 hover:border-blue-500/30 hover:bg-[#1a1a1a] transition-all duration-300 min-h-[100px]"
              >
                <p className="font-semibold text-white text-[14px] mb-4">{s.title}</p>
                <span className="text-gray-500 group-hover:text-blue-400 transition-colors duration-200 text-lg">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All — bottom right */}
        <div className="flex justify-end mt-4">
          <Link
            href="/services"
            className="flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200 group"
          >
            <span>View all Security Services</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="rounded-lg bg-blue-600 px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
          Ready to secure your perimeter?
        </h2>
        <Link
          href="/contact"
          className="flex-shrink-0 px-6 py-3 bg-white text-blue-700 text-sm font-bold tracking-widest uppercase hover:bg-gray-100 transition-colors duration-200 rounded-sm"
        >
          Request Quote
        </Link>
      </section>
    </div>
  );
}