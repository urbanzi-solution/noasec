"use client";

import Link from "next/link";
import { SITE, isRealProfile } from "@/data/site";
import { categories, getServicesByCategory, serviceHref, categoryHref } from "@/data/services";
import { courses } from "@/data/courses";
import { legalNav } from "@/data/navigation";
import { ShieldCheck, Phone, Mail, MapPin, ArrowUp, ExternalLink } from "lucide-react";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0-.01-3.28 1.64 1.64 0 0 0 .01 3.28M7.86 18.5V10.13H5.07V18.5h2.79Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7v-3h3V9.5C10 6.57 11.79 5 14.44 5c1.27 0 2.6.23 2.6.23v2.86h-1.47c-1.45 0-1.9.9-1.9 1.83V12h3.23l-.52 3h-2.71v6.8c4.56-.93 8-4.96 8-9.8z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Footer() {
  const a = SITE.address;

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#04060b] text-white">
      {/* Glow Effect at top */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      {/* Top Banner / Live Support Strip */}
      <div className="border-b border-white/5 bg-[#070b14]/70 px-6 py-6 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 items-center justify-center rounded-full bg-emerald-500/20">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            </span>
            <span className="text-xs font-semibold text-gray-300">
              24/7 Security Operations & Incident Response Hotline:{" "}
              <a href={`tel:${SITE.phone}`} className="text-cyan-400 hover:text-cyan-300 transition underline underline-offset-2">
                {SITE.phoneDisplay}
              </a>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="btn-primary py-2 px-4 text-xs font-semibold uppercase tracking-wider"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 md:px-12 md:pb-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {/* Brand Info */}
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold tracking-tight text-white flex items-center gap-1.5">
                {SITE.name}
                <span className="inline-block h-2 w-2 rounded-full bg-cyan-400" />
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              {SITE.description}
            </p>

            {/* Direct Contact Details */}
            <div className="mt-6 space-y-2.5 text-xs text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>{a.street}, {a.city}, {a.region} - {a.postalCode}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-cyan-400 shrink-0" />
                <a href={`tel:${SITE.phone}`} className="hover:text-white transition">{SITE.phoneDisplay}</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-cyan-400 shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white transition">{SITE.email}</a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-2.5">
              {[
                { name: "LinkedIn", href: SITE.social.linkedin, icon: LinkedInIcon },
                { name: "Instagram", href: SITE.social.instagram, icon: InstagramIcon },
                { name: "Facebook", href: SITE.social.facebook, icon: FacebookIcon },
                { name: "X", href: SITE.social.x, icon: XIcon },
                { name: "YouTube", href: SITE.social.youtube, icon: YouTubeIcon },
              ].filter((s) => isRealProfile(s.href)).map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-300"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Programs Column */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-cyan-400">
              Training Tracks
            </p>
            <ul className="space-y-2 text-xs text-gray-400">
              {courses.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="hover:text-white transition block py-0.5">
                    <span className="font-semibold text-gray-200">{c.code}</span>
                    <span className="text-gray-500 block text-[11px]">{c.duration}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/courses" className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1">
                  All Courses Hub →
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories Columns */}
          {categories.slice(0, 3).map((c) => (
            <div key={c.slug}>
              <p className="mb-4 text-xs font-bold uppercase tracking-wider text-cyan-400">
                <Link href={categoryHref(c)} className="hover:text-cyan-300 transition">
                  {c.name}
                </Link>
              </p>
              <ul className="space-y-1.5 text-xs text-gray-400">
                {getServicesByCategory(c.slug).slice(0, 6).map((s) => (
                  <li key={s.slug}>
                    <Link href={serviceHref(s)} className="hover:text-white transition block truncate py-0.5">
                      {s.shortName || s.name}
                    </Link>
                  </li>
                ))}
                {getServicesByCategory(c.slug).length > 6 && (
                  <li>
                    <Link href={categoryHref(c)} className="text-[11px] text-cyan-400 hover:text-cyan-300">
                      + More {c.name} →
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle Quick Links */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-400">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Services Directory</Link></li>
              <li><Link href="/courses" className="hover:text-white transition">Certifications</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Insights & Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              {legalNav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition">{l.name}</Link>
                </li>
              ))}
            </ul>

            {/* Interactive Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300 transition hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/5 pt-6 text-center text-[11px] text-gray-500">
          <p>© {new Date().getFullYear()} {SITE.name} ({SITE.legalName}). All rights reserved. Kottayam, Kerala, India.</p>
        </div>
      </div>
    </footer>
  );
}
