import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";

export default function ConclusionSection() {
  return (
    <section className="bg-[#05070d] py-10 md:py-12 lg:py-16 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Image */}
        <div className="overflow-hidden rounded-2xl border border-white/10 glass-card p-2 shadow-2xl">
          <div className="relative h-[240px] sm:h-[380px] w-full rounded-xl overflow-hidden">
            <Image
              src="/conclusion.webp"
              alt="Launch Your Cybersecurity Career"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/80 via-transparent to-transparent" />
          </div>
        </div>

        {/* Content Box */}
        <div className="glass-card rounded-2xl p-6 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-6">
            Conclusion: The Best Time to Start is Now
          </h2>

          <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-8">
            <p>
              Entering the cybersecurity discipline in 2026 is one of the most future-proof career choices you can make. The persistent rise in cloud adoption, automated adversary tooling, and compliance mandates makes competent defenders invaluable.
            </p>
            <p>
              Whether you are a college student, fresher, IT support specialist, or switching careers entirely, our structured programs (NCSA, NCD, NCCP, and NCSA-SOC) provide the direct, hands-on roadmap to get you job-ready.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/courses" className="btn-primary">
              Explore Our Certification Pathways <ArrowRight size={15} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Book a Counseling Session
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}