"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function WhoWeAre() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.remove("opacity-0", "translate-y-10");
          ref.current.classList.add("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#050b14] text-white py-24 px-6 md:px-12 lg:px-20 -mt-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div
          ref={ref}
          className="opacity-0 translate-y-10 transition-all duration-1000"
        >
          <p className="text-xs tracking-[0.3em] text-blue-400 mb-4">
            THE IDENTITY
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Who We Are
          </h2>

          <p className="text-gray-400 leading-relaxed mb-8">
           NoaSec Cybersecurity Solutions is a next-generation cybersecurity company dedicated to developing skilled cybersecurity professionals and protecting organizations from modern cyber threats. In today's rapidly evolving digital environment, cyberattacks are becoming more sophisticated and frequent — NoaSec exists at the intersection of education and defense.
Our programs are designed by cybersecurity professionals with real-world experience in ethical hacking, penetration testing, security operations, digital forensics, cloud security, and OT/SCADA security. Unlike traditional training institutes that prioritize theory, NoaSec emphasizes hands-on training, real-world attack simulations, and practical labs using industry-standard tools.

          </p>

          {/* Feature Box */}
          <div className="border border-white/10 rounded-xl p-6 bg-[#0b1220]/60 backdrop-blur">
            <h4 className="text-lg font-semibold mb-4">
              Technical Focus
            </h4>

            <ul className="text-gray-400 text-sm space-y-2">
              <li>• Zero-Trust Architecture</li>
              <li>• AI-Driven Threat Detection</li>
              <li>• Quantum-Resistant Encryption</li>
              <li>• Autonomous Incident Response</li>
            </ul>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/chip.jpg"
            alt="chip"
            fill
            className="object-cover rounded-xl"
          />
        </div>

      </div>
    </section>
  );
}