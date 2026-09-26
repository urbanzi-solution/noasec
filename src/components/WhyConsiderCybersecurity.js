import Image from "next/image";
import { CheckCircle2, TrendingUp, ShieldCheck } from "lucide-react";

export default function WhyConsiderCybersecurity() {
  const benefits = [
    "High global demand for certified offensive and defensive practitioners",
    "Competitive salary packages and rapid career milestone escalations",
    "Opportunities spanning banking, defense, cloud providers, and MNCs",
    "Remote, hybrid, and international relocation job options",
    "Continuous technological evolution and zero risk of obsolescence",
    "Mission-driven work shielding critical infrastructure and human data",
  ];

  return (
    <section className="bg-[#05070d] py-16 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Heading */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-3">
            <TrendingUp size={13} className="text-cyan-400" />
            <span>Market Trajectory</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Why Consider a Career in Cybersecurity?
          </h2>
        </div>

        {/* Image */}
        <div className="overflow-hidden rounded-2xl border border-white/10 glass-card p-2 shadow-2xl">
          <div className="relative h-[240px] sm:h-[380px] w-full rounded-xl overflow-hidden">
            <Image
              src="/consider-career.webp"
              alt="Cybersecurity Career Landscape"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/80 via-transparent to-transparent" />
          </div>
        </div>

        {/* Description */}
        <div className="glass-card rounded-2xl p-6 sm:p-10">
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
            Cybersecurity is no longer restricted to defense agencies or tech giants. Today, every enterprise with customer databases, financial payment portals, or cloud microservices requires dedicated protection from ransomware syndicates and zero-day vulnerabilities.
          </p>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {benefits.map((item, index) => (
              <div key={index} className="flex items-start gap-3 rounded-xl bg-white/[0.02] border border-white/5 p-4">
                <CheckCircle2 size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-white text-xs sm:text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          {/* Bottom Highlight Box */}
          <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-5 text-center">
            <p className="text-white font-medium text-xs sm:text-sm leading-relaxed">
              With enterprise cyber losses exceeding trillions globally each year, trained cybersecurity defenders hold permanent mission-critical value.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}