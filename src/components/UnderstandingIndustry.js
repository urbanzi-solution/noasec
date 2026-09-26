import Image from "next/image";
import {
  ShieldCheck,
  Monitor,
  Network,
  AppWindow,
  Cloud,
  Database,
  Users,
  Search,
  Eye,
  Bug,
  LockKeyhole,
  Siren,
  BriefcaseBusiness,
} from "lucide-react";

export default function UnderstandingIndustry() {
  const protectionPoints = [
    { title: "Computer Systems", icon: Monitor, description: "Endpoints, servers, firmware, and workstations." },
    { title: "Networks", icon: Network, description: "Routing fabric, firewalls, and encrypted communication channels." },
    { title: "Applications", icon: AppWindow, description: "Web applications, microservices, APIs, and mobile apps." },
    { title: "Cloud Environments", icon: Cloud, description: "AWS, Azure, GCP infrastructure and container clusters." },
    { title: "Digital Assets", icon: Database, description: "Critical databases, credentials, source code, and secrets." },
    { title: "Customer Data", icon: Users, description: "PII, payment card telemetry, and regulated health data." },
  ];

  const roles = [
    { title: "Cybersecurity Analyst", icon: Search },
    { title: "SOC Analyst (Tier 1 & 2)", icon: Eye },
    { title: "Ethical Hacker / Red Teamer", icon: Bug },
    { title: "Penetration Tester (VAPT)", icon: ShieldCheck },
    { title: "Security Infrastructure Engineer", icon: LockKeyhole },
    { title: "Incident Response Specialist", icon: Siren },
    { title: "Cloud Security Architect", icon: Cloud },
    { title: "Cybersecurity Consultant", icon: BriefcaseBusiness },
  ];

  return (
    <section className="w-full bg-[#05070d] px-6 py-16 text-white md:px-12 border-t border-white/5">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Heading */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-3">
            <ShieldCheck size={13} className="text-cyan-400" />
            <span>Foundational Landscape</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Understanding the Cybersecurity Industry
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
            Cybersecurity encompasses the strategies, toolchains, and human workflows deployed to protect networks, devices, and digital assets from unauthorized access, disruption, or destruction.
          </p>
        </div>

        {/* Main image */}
        <div className="overflow-hidden rounded-2xl border border-white/10 glass-card p-2 shadow-2xl">
          <div className="relative h-[240px] sm:h-[380px] w-full rounded-xl overflow-hidden">
            <Image
              src="/understanding.webp"
              alt="Cybersecurity Operations Center Floor"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/80 via-transparent to-transparent" />
          </div>
        </div>

        {/* Protection points section */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span>What Core Assets Are Protected?</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {protectionPoints.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="glass-card rounded-2xl p-5 transition-all duration-200"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-gray-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Roles section */}
        <div className="glass-card rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl font-bold text-white mb-2">
            Common Cybersecurity Roles & Specializations
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 mb-6">
            The field splits into offensive (Red Team), defensive (Blue Team), and engineering functions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <div
                  key={role.title}
                  className="flex items-center gap-3.5 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 transition hover:border-cyan-400/40 hover:bg-cyan-500/5"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-xs font-mono font-bold text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon size={18} className="shrink-0 text-cyan-400" />
                  <span className="text-sm font-semibold text-gray-200">
                    {role.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}