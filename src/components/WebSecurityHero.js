"use client";

import Image from "next/image";
import Link from "next/link";

export default function WebSecurityHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#050b14] text-white overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/web-hero.jpg" // replace with your image
          alt="web security background"
          fill
          loading="lazy"
          className="object-cover opacity-30"
        />
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050b14] via-[#050b14]/95 to-[#050b14]/70 z-0" />

      {/* Right Circular Glow Effect */}
      <div className="absolute right-0 top-0 h-full w-[50%] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.25),transparent_70%)] z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-6 md:px-12 lg:px-20 py-24">

        {/* Tag */}
        <div className="inline-flex items-center gap-2 border border-blue-500/40 text-blue-400 text-[10px] md:text-xs px-4 py-1 rounded-full mb-6 tracking-[0.2em]">
          <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
          PREMIUM SECURITY ASSESSMENT
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] max-w-3xl">
         Web Application Penetration <br />
          <span className="text-blue-500">Testing</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
          Web applications are a primary attack vector for threat actors. NoaSec's web application penetration testing service simulates real-world attacks against your web apps — uncovering vulnerabilities such as SQL injection, cross-site scripting (XSS), broken authentication, and API security flaws — aligned with the OWASP Top 10 framework.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">

          <Link
            href="/contact"
            className="w-full sm:w-auto text-center px-6 py-3 rounded-md bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-semibold transition shadow-lg shadow-cyan-500/20"
          >
            Request a Quote →
          </Link>

         
        </div>
      </div>
    </section>
  );
}
