"use client";

import { Award } from "lucide-react";

export default function ProgramOverview() {
  return (
    <section className="bg-[#05070d] text-white py-24 px-6 md:px-12 border-t border-white/5 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-6">
          <Award size={14} className="text-cyan-400" />
          <span>Foundational Program Overview</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white mb-6">
          The perfect first step into cybersecurity. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            No prior IT experience required.
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
          The NoaSec Cyber Security Associate (NCSA) is designed for anyone taking their initial step into cybersecurity. This 1-month program provides a practical foundation — covering how cyber threats operate, how to leverage essential security tools, and how to protect digital assets. If you have basic computer knowledge, you are ready to begin.
        </p>
      </div>
    </section>
  );
}