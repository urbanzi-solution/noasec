"use client";

import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function TrainingCTA() {
  return (
    <section className="bg-[#050b14] px-6 md:px-12 lg:px-20 py-20 -mt-20">
      
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-10 md:p-16">

        {/* RIGHT ICON (BACKGROUND) */}
        <div className="absolute right-6 bottom-0 opacity-10 pointer-events-none">
          <GraduationCap size={220} strokeWidth={1.2} />
        </div>

        {/* CONTENT */}
        <div className="max-w-2xl relative z-10">

          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
            Strengthen Your Team’s Skills
          </h2>

          {/* DESCRIPTION */}
          <p className="text-white/80 mt-6 text-sm md:text-lg leading-relaxed">
            Don't just fix bugs—prevent them from ever reaching production. Our
            specialized training modules including Cyber Defender (NCD) and NCCP
            offer hands-on secure coding and defensive infrastructure workshops.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-8">

            {/* PRIMARY */}
            <Link
              href="/courses"
              className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold text-sm hover:bg-gray-100 transition"
            >
              Explore NCD Training
            </Link>

            {/* SECONDARY */}
            <Link
              href="/courses"
              className="border border-white/40 text-white px-6 py-3 rounded-md font-semibold text-sm hover:bg-white/10 transition"
            >
              NCCP Modules
            </Link>

          </div>
        </div>
      </div>

    </section>
  );
}