"use client";

import Link from "next/link";

export default function Footer() {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="bg-[#05070d] text-white px-6 md:px-16 pt-16 pb-8 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold mb-4">NoaSec</h2>
          <p className="text-gray-400 text-sm">
            Cybersecurity training & services for the modern world.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="mb-4 font-semibold">Navigation</h3>
          <ul className="space-y-2 text-gray-400 text-sm">

            <li>
              <button onClick={() => scrollTo("home")}>
                Home
              </button>
            </li>

            <li>
              <button onClick={() => scrollTo("courses")}>
                Courses
              </button>
            </li>

            <li>
              <button onClick={() => scrollTo("services")}>
                Services
              </button>
            </li>

            <li>
              <button onClick={() => scrollTo("about")}>
                About
              </button>
            </li>

            <li>
              <Link href="/contact">Contact</Link>
            </li>

          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="mb-4 font-semibold">Programs</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>NCSA</li>
            <li>NCD</li>
            <li>NCCP</li>
            <li>NCDF</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 font-semibold">Contact</h3>

          <p className="text-gray-400 text-sm">
            R4, Centerspace, XIII/284 A, Anjanasree Arcade,
            Annankunnu Road, Nagampadom, Kottayam PIN: 686001
          </p>

          <p className="text-gray-400 text-sm mt-2">
            7034733944
          </p>

          <p className="text-gray-400 text-sm mt-2">
            Info@noasecsolutions.com
          </p>
        </div>
      </div>

      {/* Legal Links Section */}
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-gray-400 text-sm space-x-6">

        <Link href="/privacy-policy" className="hover:text-white">
          Privacy Policy
        </Link>

        <Link href="/terms-of-service" className="hover:text-white">
          Terms of Service
        </Link>

      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} NoaSec. All Rights Reserved. Powered by Urbanzi Solutions.
      </div>
    </footer>
  );
}