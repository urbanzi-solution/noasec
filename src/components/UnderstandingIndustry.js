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
    {
      title: "Computer Systems",
      icon: Monitor,
      description: "Devices, servers, and workstations.",
    },
    {
      title: "Networks",
      icon: Network,
      description: "Connections and communication channels.",
    },
    {
      title: "Applications",
      icon: AppWindow,
      description: "Software, websites, and digital tools.",
    },
    {
      title: "Cloud Environments",
      icon: Cloud,
      description: "Cloud platforms and online infrastructure.",
    },
    {
      title: "Digital Assets",
      icon: Database,
      description: "Files, records, credentials, and information.",
    },
    {
      title: "Customer Data",
      icon: Users,
      description: "Sensitive business and customer information.",
    },
  ];

  const roles = [
    { title: "Cybersecurity Analyst", icon: Search },
    { title: "SOC Analyst", icon: Eye },
    { title: "Ethical Hacker", icon: Bug },
    { title: "Penetration Tester", icon: ShieldCheck },
    { title: "Security Engineer", icon: LockKeyhole },
    { title: "Incident Response Specialist", icon: Siren },
    { title: "Cloud Security Analyst", icon: Cloud },
    { title: "Cybersecurity Consultant", icon: BriefcaseBusiness },
  ];

  return (
    <section className="w-full bg-[#102131] px-4 py-2 text-white sm:px-6 sm:py-5 ">
      {/* Heading */}
      <div className="mb-14">
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Cybersecurity Basics
        </p>

        <h2 className="text-xl font-bold text-white sm:text-2xl">
          Understanding the Industry
        </h2>
      </div>

      {/* Main image */}
      <div className="group relative overflow-hidden rounded-xl border border-cyan-400/20 bg-[#071522] shadow-[0_0_35px_rgba(34,211,238,0.08)] mb-14">
        <img
          src="/understanding.jpg"
          alt="Cybersecurity operations center"
          className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071522]/60 via-transparent to-transparent" />

        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-cyan-300/20 bg-[#071522]/80 px-3 py-1.5 backdrop-blur-md">
          <ShieldCheck size={15} className="text-cyan-300" />
          <span className="text-xs font-medium text-cyan-100">
            Protecting the digital world
          </span>
        </div>
      </div>

      {/* Protecting section */}
      <div className="mt-7">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10">
            <ShieldCheck size={20} className="text-cyan-300" />
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-cyan-400 ">
              What is protected?
            </p>
            <h3 className="text-lg font-semibold text-white">
              Cybersecurity focuses on protecting
            </h3>
          </div>
        </div>

        {/* Protection cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {protectionPoints.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-xl border border-[#2b4154] bg-[#172d40] p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-[#1b364b]"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10">
                  <Icon size={19} className="text-cyan-300" />
                </div>

                <h4 className="text-sm font-semibold text-white">
                  {item.title}
                </h4>

                <p className="mt-1 text-xs leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Description banner */}
      <div className="mt-6 rounded-xl border border-cyan-400/15 bg-gradient-to-r from-cyan-400/10 to-transparent p-4">
        <p className="text-sm leading-relaxed text-slate-200">
          Cybersecurity professionals identify vulnerabilities, monitor
          threats, prevent attacks, and respond quickly to security incidents.
        </p>
      </div>

      {/* Roles section */}
      <div className="mt-8">
        <div className="mb-3">
          <p className="text-xs font-medium uppercase tracking-wider text-cyan-400">
            Career Paths
          </p>

          <h3 className="mt-1 text-lg font-semibold text-white">
            Common cybersecurity roles
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 mb-14">
          {roles.map((role, index) => {
            const Icon = role.icon;

            return (
              <div
                key={role.title}
                className="flex items-center gap-3 rounded-lg border border-[#2b4154] bg-[#172d40] px-4 py-3 transition hover:border-cyan-400/40 hover:bg-[#1b364b]"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-cyan-400/10 text-xs font-bold text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <Icon size={17} className="shrink-0 text-cyan-300" />

                <span className="text-sm font-medium text-slate-100">
                  {role.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}