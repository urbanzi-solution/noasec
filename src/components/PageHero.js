import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import { ArrowRight, ShieldCheck } from "lucide-react";

// Standard hero for inner pages: breadcrumbs + single H1 + answer-first intro + optional HUD image.
export default function PageHero({ eyebrow, title, intro, breadcrumbs, cta = true, badge = null, image = null }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#05070d] px-6 pb-10 md:pb-12 lg:pb-16 pt-24 md:pt-28 lg:pt-32 md:px-12 bg-cyber-grid">
      {/* Background Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 -z-0 h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 -z-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}

        {image ? (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7">
              {eyebrow && (
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300 backdrop-blur-md mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>{eyebrow}</span>
                </div>
              )}

              <h1 className="text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl md:text-5xl">
                {title}
              </h1>

              {intro && (
                <p className="mt-5 text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
                  {intro}
                </p>
              )}

              {cta && (
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link href="/contact" className="btn-primary">
                    Get a Free Proposal <ArrowRight size={15} />
                  </Link>
                  <Link href="/services" className="btn-secondary">
                    Explore All Services
                  </Link>
                </div>
              )}
            </div>

            {/* Right Image (5 cols) */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md group">
                <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-cyan-400 z-20 pointer-events-none" />
                <div className="absolute -top-3 -right-3 w-8 h-8 border-r-2 border-t-2 border-cyan-400 z-20 pointer-events-none" />
                <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-cyan-400 z-20 pointer-events-none" />
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-cyan-400 z-20 pointer-events-none" />

                <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 bg-[#091222]/80 backdrop-blur-xl p-2 shadow-[0_0_30px_rgba(14,165,233,0.15)]">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] w-full">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/90 via-transparent to-transparent" />
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between rounded-lg border border-cyan-500/30 bg-[#05070d]/90 px-3.5 py-2 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                      <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                      <span>SECURE INFRASTRUCTURE</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-400">NOASEC DIRECT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl">
            {eyebrow && (
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>{eyebrow}</span>
              </div>
            )}

            <h1 className="mt-4 text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl md:text-5xl">
              {title}
            </h1>

            {intro && (
              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
                {intro}
              </p>
            )}

            {cta && (
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/contact" className="btn-primary">
                  Get a Free Proposal <ArrowRight size={15} />
                </Link>
                <Link href="/services" className="btn-secondary">
                  Explore All Services
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
