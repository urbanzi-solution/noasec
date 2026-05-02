"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  { title: "Vulnerability Assessment", href: "/services/vulnerability-assessment-services" },
  { title: "Network Penetration Testing", href: "/services/network-penetration-testing" },
  { title: "Linux & Windows Admin", href: "/services/linux-windows-administration" },
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
    
    </div>
  );
}