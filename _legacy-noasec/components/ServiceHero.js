"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServiceHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-start bg-[#050b14] text-white overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="background"
          fill
         loading="lazy"
          className="object-cover opacity-30"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050b14] via-[#050b14]/95 to-[#050b14]/70 z-0" />

      {/* Right Glow */}
      <div className="absolute right-0 top-0 h-full w-[40%] bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15),transparent_70%)] z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-5 md:px-12 lg:px-20 py-20 md:py-24">

        {/* Tag */}
        <div className="inline-block border border-blue-500/40 text-blue-400 text-[10px] md:text-xs px-3 py-1 rounded-full mb-5 md:mb-6 tracking-[0.2em]">
          ENGINEERED FOR INTEGRITY
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[1.2] max-w-2xl">
          Protecting{" "}
          <span className="text-blue-400">Organizations</span>
          <br />
          at Every Layer
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mt-6 md:mt-8">
          NoaSec's security services are delivered by practitioners with real-world
          offensive and defensive security experience. Whether you need a one-time
          penetration test, ongoing SOC monitoring, forensic investigation, or cloud
          security hardening — our team brings the expertise to protect what matters most.
        </p>

        {/* Buttons */}
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <Link
            href="/contact"
            className="w-full sm:w-auto text-center px-6 py-3 rounded-md bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-semibold transition shadow-lg shadow-cyan-500/20"
          >
            SCHEDULE A CONSULTATION →
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto text-center px-6 py-3 text-white text-sm font-semibold border border-white/20 rounded-md hover:bg-white/5 transition"
          >
            VIEW OUR SERVICE PORTFOLIO
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 text-gray-500 text-xs sm:text-sm max-w-md">
          <div>
            <h3 className="text-white font-bold">24/7</h3>
            <p className="mt-1">THREAT MONITORING</p>
          </div>

          <div>
            <h3 className="text-white font-bold">100%</h3>
            <p className="mt-1">OFFENSIVE EXPERTS</p>
          </div>

          <div>
            <h3 className="text-white font-bold">15min</h3>
            <p className="mt-1">IR RESPONSE TIME</p>
          </div>

          <div>
            <h3 className="text-white font-bold">ISO</h3>
            <p className="mt-1">CERTIFIED STANDARDS</p>
          </div>
        </div>

      </div>
    </section>
  );
}