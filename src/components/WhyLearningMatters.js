import Image from "next/image";
import { Sparkles, Quote } from "lucide-react";

export default function WhyLearningMatters() {
  return (
    <section className="bg-[#05070d] py-10 md:py-12 lg:py-16 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Feature Image with cyber container */}
        <div className="overflow-hidden rounded-2xl border border-white/10 glass-card p-2 shadow-2xl">
          <div className="relative h-[280px] sm:h-[400px] w-full rounded-xl overflow-hidden">
            <Image
              src="/why-learning.webp"
              alt="Why Learning From Industry Experts Matters"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/80 via-transparent to-transparent" />
          </div>
        </div>

        {/* Content Box */}
        <div className="glass-card rounded-2xl p-6 sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
            <Sparkles size={13} className="text-cyan-400" />
            <span>Practical Mentorship</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
            Why Learning From Active Security Engineers Matters
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
            Many beginners make the mistake of only consuming theoretical slides or memorizing multiple-choice questions. Modern employers filter out candidates who cannot demonstrate hands-on tradecraft under realistic pressure. By training alongside active security engineers who handle real incidents, you skip years of trial-and-error.
          </p>

          {/* Quote Box */}
          <div className="border-l-4 border-l-cyan-400 rounded-r-2xl bg-cyan-500/5 border border-white/5 p-6 flex gap-4 items-start">
            <Quote size={24} className="text-cyan-400 shrink-0 mt-1 opacity-70" />
            <p className="text-gray-200 italic text-sm sm:text-base leading-relaxed">
              &ldquo;At NoaSec, students bridge the gap between academic textbooks and frontline corporate demands through live simulated labs designed to build reflexes that employers actively recruit for.&rdquo;
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}