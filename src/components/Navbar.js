"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", id: "home", type: "scroll" },

  // ✅ FIXED ABOUT
  { name: "About", href: "/about", type: "link" },

  {
    name: "Services",
    href: "/services",
    type: "dropdown",
    items: [
      { name: "Web Application Penetration Testing", href: "/services/web-application-penetration-testing" },
      { name: "Vulnerability Assessment Services", href: "/services/vulnerability-assessment-services" },
      { name: "Threat Intelligence & Hunting", href: "/services/threat-intelligence" },
      { name: "Server & Firewall Hardening", href: "/services/server-hardening" },
      { name: "Network Penetration Testing", href: "/services/network-penetration-testing" },
      { name: "Managed SOC Operations", href: "/services/managed-soc" },
      { name: "Malware Analysis", href: "/services/malware-analysis" },
      { name: "Linux & Windows Administration", href: "/services/linux-windows-administration" },
      { name: "Incident Response Services", href: "/services/incident-response-services" },
      { name: "Disk & Memory Forensics", href: "/services/disk-memory-forensics" },
      { name: "Digital Evidence Collection", href: "/services/digital-evidence-collection" },
      { name: "Cloud Security Solutions", href: "/services/cloud-security-solutions" },
    ],
  },

  {
    name: "Courses",
    href: "/courses",
    type: "dropdown",
    items: [
      { name: "Certified Cybersecurity Professional (NCCP)", href: "/courses/certified-cybersecurity-professional" },
      { name: "Certified SOC Analyst (NCSA-SOC)", href: "/courses/certified-soc-analyst" },
      { name: "NoaSec Cyber Defender (NCD)", href: "/courses/noasec-cyber-defender" },
      { name: "NoaSec Cyber Security Associate (NCSA)", href: "/courses/noasec-cyber-security-associate" },
    ],
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = (link) => {
    setMenuOpen(false);

    if (pathname !== "/") {
      router.push(`/#${link.id}`);
      return;
    }

    const section = document.getElementById(link.id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-sm border-b border-white/5">
      <div className="flex items-center justify-between px-6 md:px-8 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={36} height={36} />
          <span className="text-white font-semibold text-lg">NoaSec</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">

              {/* Scroll */}
              {link.type === "scroll" && (
                <button
                  onClick={() => handleScroll(link)}
                  className="text-sm text-gray-400 hover:text-white"
                >
                  {link.name}
                </button>
              )}

              {/* Normal Link */}
              {link.type === "link" && (
                <Link
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white"
                >
                  {link.name}
                </Link>
              )}

              {/* Dropdown */}
              {link.type === "dropdown" && (
                <>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white flex items-center gap-1"
                  >
                    {link.name}
                    <span className="text-xs">▾</span>
                  </Link>

                  <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                    <div className="bg-[#0a0a0f] border border-white/10 rounded-xl shadow-xl p-4 w-[520px]">
                      <div className="grid grid-cols-2 gap-2 max-h-[320px] overflow-y-auto">
                        {link.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-white hover:bg-white/5"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Contact */}
        <Link
          href="/contact"
          className="hidden md:block px-5 py-2 bg-[#0ea5e9] text-white rounded-md hover:bg-[#38bdf8]"
        >
          Contact
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-[#0a0a0f] border-t border-white/5">

          {navLinks.map((link) => (
            <div key={link.name}>

              {/* Scroll */}
              {link.type === "scroll" && (
                <button
                  onClick={() => handleScroll(link)}
                  className="text-left text-gray-400 w-full"
                >
                  {link.name}
                </button>
              )}

              {/* Normal Link */}
              {link.type === "link" && (
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300"
                >
                  {link.name}
                </Link>
              )}

              {/* Dropdown */}
              {link.type === "dropdown" && (
                <div className="flex flex-col">
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-300 mt-2"
                  >
                    {link.name}
                  </Link>

                  <div className="ml-3 mt-2 flex flex-col gap-1">
                    {link.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="text-gray-400 text-sm"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-5 py-2 bg-[#0ea5e9] text-white rounded-md text-center"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}