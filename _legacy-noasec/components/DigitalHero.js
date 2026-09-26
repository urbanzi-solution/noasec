"use client";

import Image from "next/image";
import Link from "next/link";

export default function DigitalHero() {
  return (
    <section className="bg-[#050b14] text-white px-6 md:px-12 lg:px-20 py-24">
      
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* TITLE */}
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          Digital Evidence Collection

          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-400 mt-6 text-sm md:text-base leading-relaxed max-w-lg">
          Proper digital evidence collection is critical for investigations, litigation, and regulatory proceedings. NoaSec's Digital Evidence Collection service provides forensically sound acquisition and preservation of digital evidence — following strict chain of custody protocols to ensure evidence is admissible and defensible in legal proceedings.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-8">

            {/* PRIMARY */}
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-md text-sm font-semibold transition shadow-lg shadow-blue-500/20 flex items-center gap-2"
            >
              REQUEST A QUOTE →
            </Link>

            {/* SECONDARY */}
            <Link
              href="/contact"
              className="border border-white/20 hover:border-white px-6 py-3 rounded-md text-sm font-semibold transition text-gray-300 hover:text-white"
            >
              CONSULTATION
            </Link>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="relative rounded-xl overflow-hidden border border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.2)]">
            
            <Image
              src="/digital-evidence.jpg" // replace with your image
              alt="Digital Evidence Collection"
              width={600}
              height={200}
              loading="lazy"
              className="object-cover w-full h-100"
            />

            {/* GLOW OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-blue-500/10 pointer-events-none" />
          </div>
        </div>

      </div>

    </section>
  );
}