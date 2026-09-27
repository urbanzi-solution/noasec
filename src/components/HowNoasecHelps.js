import Image from "next/image";
import { GraduationCap, MonitorPlay, BadgeCheck, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Practitioner-Led Instruction",
    description: "Learn directly from active cybersecurity consultants executing real penetration tests and SOC audits.",
  },
  {
    icon: MonitorPlay,
    title: "100% Hands-On Attack & Defense Labs",
    description: "Real-world adversary emulation environments, SIEM telemetry investigation, and packet capture triage.",
  },
  {
    icon: BadgeCheck,
    title: "Direct Placement & Industrial Internships",
    description: "Resume optimization, live client auditing exposure, mock technical interviews, and referral support.",
  },
];

export default function HowNoasecHelps() {
  return (
    <section className="bg-[#05070d] py-10 md:py-12 lg:py-16 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Heading */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-3">
            <ShieldCheck size={13} className="text-cyan-400" />
            <span>The NoaSec Training Advantage</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            How NoaSec Accelerates Your Path
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
            We eliminate the gap between abstract academic theory and operational excellence. Our syllabus is continuously refreshed to align with active corporate hiring requirements.
          </p>
        </div>

        {/* Image */}
        <div className="overflow-hidden rounded-2xl border border-white/10 glass-card p-2 shadow-2xl">
          <div className="relative h-[240px] sm:h-[380px] w-full rounded-xl overflow-hidden">
            <Image
              src="/help.webp"
              alt="How NoaSec Accelerates Career Readiness"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/80 via-transparent to-transparent" />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="space-y-4">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-card flex items-start gap-4 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mt-0.5">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}