"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, HelpCircle, Headphones, ShieldAlert, CheckCircle2, GraduationCap } from "lucide-react";

export default function ServiceSelector() {
  const needs = [
    {
      question: "Suspect unknown vulnerabilities or compliance audit due?",
      solution: "Vulnerability Assessment & VAPT",
      href: "/services/vulnerability-assessment-services",
      tag: "Offensive Security",
    },
    {
      question: "Web or mobile application vulnerable to OWASP exploits?",
      solution: "Web & Mobile App Pen Testing",
      href: "/services/web-application-penetration-testing",
      tag: "Application Security",
    },
    {
      question: "Require 24/7 SIEM monitoring and proactive threat defense?",
      solution: "Managed SOC Operations",
      href: "/services/managed-soc",
      tag: "Continuous Defense",
    },
    {
      question: "Active ransomware outbreak, breach, or system intrusion?",
      solution: "Rapid Incident Response & Containment",
      href: "/services/incident-response-services",
      tag: "Emergency IR",
    },
  ];

  return (
    <section className="bg-[#05070d] text-white border-t border-white/5 py-14 md:py-16 lg:py-24">
      {/* Top Question & Selector */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        {/* Left (7 cols) */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
            <HelpCircle size={14} className="text-cyan-400" />
            <span>Interactive Decision Helper</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Which Security Service Does Your Business Need?
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
            Click on your operational situation below to immediately navigate to the relevant testing methodology and engagement scope.
          </p>

          <div className="space-y-3">
            {needs.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="glass-card group flex items-center justify-between p-5 rounded-2xl transition-all duration-300"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                    {item.tag}
                  </span>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    {item.question}
                  </p>
                  <p className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors mt-0.5">
                    {item.solution}
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/40 transition-all shrink-0 ml-4">
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Consultant Card (5 cols) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="glass-card rounded-3xl p-8 border-cyan-500/30 text-center max-w-md w-full relative overflow-hidden shadow-2xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mx-auto mb-5">
              <Headphones size={28} />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              Speak with a Senior Consultant
            </h3>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
              Need immediate advice on scoping an enterprise penetration test, cloud architecture review, or incident triage?
            </p>

            <Link
              href="/contact"
              className="btn-primary w-full justify-center py-3 text-xs uppercase tracking-wider font-semibold"
            >
              Schedule Free Scoping Call <ArrowRight size={14} />
            </Link>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available 24/7 for Critical Response</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Cross-Sell: Train Your Team */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 lg:mt-20 pt-16 border-t border-white/5">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#0c182c] to-[#070e1c] p-8 md:p-12 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
            <GraduationCap size={14} className="text-cyan-400" />
            <span>Internal Capability Development</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Upskill Your Internal Defense Team
          </h3>

          <p className="text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Combine professional security assessments with hands-on corporate cybersecurity certification training to establish long-term institutional resilience.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3">
            <Link href="/courses" className="btn-primary">
              Explore Certification Courses <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Corporate Training Enquiry
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}