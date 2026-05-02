"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function AboutHero() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.remove(
            "opacity-0",
            "translate-y-10",
            "scale-95"
          );
          ref.current.classList.add(
            "opacity-100",
            "translate-y-0",
            "scale-100"
          );
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-[#050b14] text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about-bg.jpg"
          alt="background"
          fill
          priority
          className="object-cover opacity-20"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050b14]/80 via-[#050b14]/90 to-[#050b14] z-0" />

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15),transparent_70%)] z-0" />

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 text-center max-w-3xl px-6
        opacity-0 translate-y-10 scale-95
        transition-all duration-1000 ease-out"
      >
        <p className="text-xs tracking-[0.3em] text-blue-400 mb-6">
          ESTABLISHED 2012
        </p>

        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          About NoaSec
          <br className="hidden md:block" /> 
        </h1>

        <p className="text-gray-400 mt-6 text-sm md:text-base leading-relaxed">
          Forging the future of digital defense through relentless innovation
          and a steadfast commitment to global security integrity.
        </p>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs tracking-widest text-blue-400">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          NETWORK STATUS: SECURE
        </div>
      </div>
    </section>
  );
}