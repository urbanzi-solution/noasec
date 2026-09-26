"use client";

import Link from "next/link";
import { CheckCircle2, Shield, Network, AlertTriangle, ArrowRight } from "lucide-react";

const benefits = [
  {
    title: "Full Vulnerability Exposure",
    desc: "Uncover deep-seated flaws that threat actors seek to exploit before they cause business damage.",
  },
  {
    title: "Regulatory Compliance",
    desc: "Seamlessly meet the rigorous demands of SOC2, PCI-DSS, ISO 27001, and GDPR audits.",
  },
  {
    title: "Precision Data Protection",
    desc: "Robust safeguards for PII, financial transactions, and sensitive proprietary databases.",
  },
  {
    title: "Actionable Guidance",
    desc: "Direct, developer-ready remediation steps that integrate directly into your CI/CD workflow.",
  },
];

const services = [
  {
    name: "Vulnerability Assessment",
    href: "/services/vulnerability-assessment-services",
    icon: Shield,
  },
  {
    name: "Network Penetration Testing",
    href: "/services/network-penetration-testing",
    icon: Network,
  },
  {
    name: "Incident Response",
    href: "/services/incident-response-services",
    icon: AlertTriangle,
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-[#05070d] text-white px-6 md:px-12 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* TOP GRID */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20 items-start">
          {/* LEFT (4 cols) */}
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
              <span>Strategic Advantage</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              Key Strategic <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Benefits
              </span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Why leading enterprises and tech institutions trust NoaSec for their critical public-facing assets.
            </p>
          </div>

          {/* RIGHT BENEFITS (8 cols) */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {benefits.map((item, i) => (
              <div key={i} className="glass-card p-6 flex flex-col justify-start">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <CheckCircle2 size={18} />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    {item.title}
                  </h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed pl-10">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RELATED SERVICES */}
        <div className="border-t border-white/10 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                Complementary Security Services
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Explore end-to-end defenses that pair with web penetration testing.
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

          {/* CARDS */}
          <div className="grid sm:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;

              return (
                <Link
                  key={i}
                  href={service.href}
                  className="glass-card p-6 flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon size={20} />
                    </div>
                    <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {service.name}
                    </span>
                  </div>
                  <ArrowRight size={16} className="text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}