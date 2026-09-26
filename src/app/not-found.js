import Link from "next/link";
import { categories, categoryHref } from "@/data/services";
import { ArrowRight, Home, ShieldAlert } from "lucide-react";

export const metadata = { title: "404 — Page Not Found | NoaSec", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center bg-[#05070d] bg-cyber-grid px-6 py-36 text-center md:px-12 text-white">
      <div className="glass-card max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
        <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-44 w-44 rounded-full bg-cyan-500/20 blur-[70px]" />

        <div className="relative z-10">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mx-auto mb-6">
            <ShieldAlert size={32} />
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
            <span>HTTP Status 404</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-3 tracking-tight">
            Target Not Found
          </h1>

          <p className="mt-2 text-sm sm:text-base text-gray-300 leading-relaxed max-w-md mx-auto mb-8">
            The requested resource or endpoint is either unavailable or has been relocated. Return to the command center or explore our divisions below:
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Link href="/" className="btn-primary">
              <Home size={15} /> Return Home
            </Link>
            <Link href="/courses" className="btn-secondary">
              Courses Hub
            </Link>
            <Link href="/contact" className="btn-ghost text-gray-300">
              Contact Us
            </Link>
          </div>

          {/* Quick links to categories */}
          <div className="border-t border-white/10 pt-6">
            <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider font-semibold">
              Explore Available Divisions
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  href={categoryHref(c)}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-white transition-all"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
