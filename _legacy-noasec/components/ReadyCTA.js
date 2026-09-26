"use client";

import Link from "next/link";

export default function ReadyCTA() {
  return (
    <section className="bg-[#050b14] text-white px-6 md:px-12 lg:px-20 py-24 -mt-25">

      <div className="max-w-5xl mx-auto border border-cyan-500/20 rounded-xl p-10 md:p-14 text-center relative overflow-hidden">

        {/* Subtle Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.08),transparent_70%)] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to Secure Your Future?
          </h2>

          {/* Description */}
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-10">
            Join the vanguard of digital defense. Whether you're looking for
            advanced training or enterprise-level security architecture,
            NoaSec is your strategic partner.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">

            {/* Button 1 */}
            <Link
              href="/courses"
              className="px-6 py-3 text-sm font-semibold border border-cyan-400/40 text-cyan-300 rounded-md hover:bg-cyan-400/10 transition"
            >
              BROWSE ALL COURSES
            </Link>

            {/* Button 2 (Primary) */}
            <Link
              href="/services"
              className="px-6 py-3 text-sm font-semibold rounded-md bg-cyan-300 text-[#050b14] hover:bg-cyan-200 transition shadow-lg shadow-cyan-500/10"
            >
              VIEW SECURITY SERVICES
            </Link>

            {/* Button 3 */}
            <Link
              href="/contact"
              className="px-6 py-3 text-sm font-semibold border border-white/20 text-gray-300 rounded-md hover:bg-white/5 transition"
            >
              CONTACT OUR TEAM
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}