"use client";

import Link from "next/link";
import { CheckCircle, Shield, Network, AlertTriangle } from "lucide-react";

const benefits = [
  {
    title: "Full Vulnerability Exposure",
    desc: "Uncover deep-seated flaws that threat actors seek to exploit before they cause damage.",
  },
  {
    title: "Regulatory Compliance",
    desc: "Seamlessly meet the rigorous demands of SOC2, PCI-DSS, and GDPR audits.",
  },
  {
    title: "Precision Data Protection",
    desc: "Robust safeguards for PII, financial data, and sensitive internal databases.",
  },
  {
    title: "Actionable Guidance",
    desc: "Direct, clear remediation steps that integrate directly into developer workflows.",
  },
];

const services = [
  {
    name: "Vulnerability Assessment",
    icon: Shield,
  },
  {
    name: "Network Pentesting",
    icon: Network,
  },
  {
    name: "Incident Response",
    icon: AlertTriangle,
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-[#050b14] text-white px-6 md:px-12 lg:px-20 py-24 -mt-20">

      {/* TOP GRID */}
      <div className="grid md:grid-cols-3 gap-12">

        {/* LEFT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Key Benefits
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-sm">
            Why leading organizations trust NoaSec for their critical web-facing assets.
          </p>
        </div>

        {/* RIGHT BENEFITS */}
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
          {benefits.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <CheckCircle className="text-blue-500 mt-1" size={22} />

              <div>
                <h4 className="text-lg font-semibold">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/10 my-20" />

      {/* RELATED SERVICES */}
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold mb-10">
          Related Services
        </h3>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <div
                key={i}
                className="group flex items-center gap-4 border border-white/10 rounded-xl px-6 py-5 bg-[#0b1220]/60 backdrop-blur hover:border-blue-500/40 transition cursor-pointer"
              >
                <Icon className="text-gray-400 group-hover:text-blue-400 transition" size={22} />

                <span className="text-gray-300 group-hover:text-white font-medium">
                  {service.name}
                </span>

                <span className="ml-auto opacity-0 group-hover:opacity-100 transition text-blue-400">
                  →
                </span>
              </div>
            );
          })}
        </div>

        {/* CTA BUTTON (BOTTOM CENTER) */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="px-8 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-sm font-semibold transition shadow-lg shadow-blue-500/20"
          >
            View All Security Services →
          </Link>
        </div>

      </div>

    </section>
  );
}