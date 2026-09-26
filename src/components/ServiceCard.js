import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ title, text, href, as: Heading = "h3", badge, icon: Icon }) {
  return (
    <Link
      href={href}
      className="glass-card group flex h-full flex-col justify-between rounded-2xl p-6 transition-all duration-300"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          {Icon ? (
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/40 transition-colors">
              <Icon size={20} />
            </div>
          ) : (
            <div className="h-2 w-2 rounded-full bg-cyan-400/60 group-hover:bg-cyan-400 transition-colors" />
          )}
          {badge && (
            <span className="rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-400 border border-cyan-500/20">
              {badge}
            </span>
          )}
        </div>

        <Heading className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
          {title}
        </Heading>
        <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-gray-400 line-clamp-3">
          {text}
        </p>
      </div>

      <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400 group-hover:text-cyan-300 transition-colors">
        <span>Explore details</span>
        <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
