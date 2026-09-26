import Image from "next/image";
import { Shield, Users, ShieldCheck, Cloud, Briefcase } from "lucide-react";

const careers = [
  {
    icon: Shield,
    title: "Penetration Testing & Red Teaming",
    description: "Ethical hacking, web vulnerability assessments, mobile app auditing, and adversary emulation.",
  },
  {
    icon: ShieldCheck,
    title: "Security Operations & Defense (Blue Team)",
    description: "24/7 SIEM monitoring, log telemetry, threat hunting, and automated incident triage.",
  },
  {
    icon: Cloud,
    title: "Cloud Security Architecture",
    description: "Hardening AWS, Azure, GCP infrastructure, identity governance, and container security.",
  },
  {
    icon: Users,
    title: "Governance, Risk & Compliance (GRC)",
    description: "Policy authoring, ISO 27001 / SOC 2 audits, regulatory standards, and risk assessments.",
  },
];

export default function CareerOpportunities() {
  return (
    <section className="bg-[#05070d] py-16 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Heading */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-3">
            <Briefcase size={13} className="text-cyan-400" />
            <span>Employment Horizons</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            High-Impact Career Opportunities &amp; Future Scope
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
            Cybersecurity offers specialized career trajectories across every technical domain.
          </p>
        </div>

        {/* Image */}
        <div className="overflow-hidden rounded-2xl border border-white/10 glass-card p-2 shadow-2xl">
          <div className="relative h-[240px] sm:h-[380px] w-full rounded-xl overflow-hidden">
            <Image
              src="/career.webp"
              alt="Cybersecurity Career Opportunities"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/80 via-transparent to-transparent" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {careers.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="glass-card rounded-2xl p-6 transition-all duration-200">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">{c.title}</h3>
                <p className="text-xs leading-relaxed text-gray-400">{c.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}