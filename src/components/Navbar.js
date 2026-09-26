"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/data/site";
import { mainNav } from "@/data/navigation";
import { ChevronDown, ArrowRight, Phone, MessageSquare, Menu, X, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(null); // mobile accordion
  const [menu, setMenu] = useState(null); // desktop dropdown
  const closeTimer = useRef(null);
  const switchTimer = useRef(null);
  const pathname = usePathname();

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const openMenu = (name) => {
    clearTimeout(closeTimer.current);
    clearTimeout(switchTimer.current);
    if (menu && menu !== name) {
      switchTimer.current = setTimeout(() => setMenu(name), 120);
    } else {
      setMenu(name);
    }
  };

  const scheduleClose = () => {
    clearTimeout(switchTimer.current);
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMenu(null), 220);
  };

  const closeAll = () => {
    clearTimeout(closeTimer.current);
    clearTimeout(switchTimer.current);
    setMenu(null);
    setMobileOpen(false);
    setExpanded(null);
  };

  // Escape closes menus; lock body scroll while mobile menu is open
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeAll();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(
    () => () => {
      clearTimeout(closeTimer.current);
      clearTimeout(switchTimer.current);
    },
    []
  );

  const closeOnLink = (e) => {
    if (e.target.closest("a")) closeAll();
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05070d]/85 backdrop-blur-xl transition-all duration-300">
      {/* Top subtle highlight line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:shadow-lg"
      >
        Skip to content
      </a>

      <nav aria-label="Main" className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={closeAll}
          className="group flex shrink-0 items-center gap-3 transition-transform duration-200 hover:scale-[1.02]"
          aria-label={`${SITE.name} home`}
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(14,165,233,0.2)]">
            <Image src={SITE.logo} alt="" width={30} height={30} priority className="object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
              {SITE.name}
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </span>
            <span className="text-[10px] tracking-wider text-gray-400 uppercase font-semibold">Solutions</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden h-full items-center gap-1 lg:flex xl:gap-2" onClick={closeOnLink}>
          {mainNav.map((item) => {
            const hasMenu = item.columns || item.items;
            const isOpen = menu === item.name;
            const active = isActive(item.href);

            return (
              <li
                key={item.name}
                className={`relative flex h-full items-center ${item.columns ? "static" : ""}`}
                onMouseEnter={hasMenu ? () => openMenu(item.name) : undefined}
                onMouseLeave={hasMenu ? scheduleClose : undefined}
                onFocus={hasMenu ? () => openMenu(item.name) : undefined}
                onBlur={hasMenu ? (e) => !e.currentTarget.contains(e.relatedTarget) && scheduleClose() : undefined}
              >
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  aria-haspopup={hasMenu ? "true" : undefined}
                  aria-expanded={hasMenu ? isOpen : undefined}
                  className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                    active || isOpen
                      ? "bg-cyan-500/10 text-cyan-300 shadow-[0_0_12px_rgba(14,165,233,0.15)] border border-cyan-400/20"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.name}
                  {hasMenu && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 text-gray-400 ${isOpen ? "rotate-180 text-cyan-400" : ""}`}
                    />
                  )}
                </Link>

                {/* Services Mega Menu */}
                {item.columns && (
                  <div
                    className={`absolute inset-x-0 top-full pt-2 px-4 transition-all duration-200 ${
                      isOpen
                        ? "visible translate-y-0 opacity-100 pointer-events-auto"
                        : "invisible -translate-y-2 opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="mx-auto max-h-[calc(100vh-100px)] max-w-7xl overflow-y-auto rounded-2xl border border-white/10 bg-[#090e1a]/95 p-6 shadow-2xl shadow-black/80 backdrop-blur-2xl">
                      <div className="grid grid-cols-5 gap-6">
                        {item.columns.map((col) => (
                          <div key={col.name} className="flex flex-col">
                            <Link
                              href={col.href}
                              className="group mb-3 flex items-center justify-between border-b border-white/10 pb-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                            >
                              <span>{col.name}</span>
                              <ArrowRight size={13} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-400" />
                            </Link>
                            <ul className="space-y-1">
                              {col.items.map((s) => (
                                <li key={s.href}>
                                  <Link
                                    href={s.href}
                                    aria-current={pathname === s.href ? "page" : undefined}
                                    className={`group flex items-center justify-between rounded-lg px-2.5 py-1.5 text-[13px] leading-snug transition-all ${
                                      pathname === s.href
                                        ? "bg-cyan-500/15 text-cyan-300 font-medium"
                                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                                    }`}
                                  >
                                    <span className="truncate">{s.name}</span>
                                    <span className="opacity-0 group-hover:opacity-100 text-cyan-400 text-xs transition-opacity">›</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Mega Menu Footer Banner */}
                      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-gray-400">
                        <span className="flex items-center gap-2">
                          <ShieldCheck size={16} className="text-cyan-400" />
                          <span>Enterprise Grade Assessments & Digital Growth Strategies</span>
                        </span>
                        <Link
                          href="/services"
                          className="font-semibold text-cyan-400 hover:text-cyan-300 transition flex items-center gap-1"
                        >
                          View all services catalogue <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* Courses Dropdown */}
                {item.items && (
                  <div
                    className={`absolute left-0 top-full pt-2 transition-all duration-200 ${
                      isOpen
                        ? "visible translate-y-0 opacity-100 pointer-events-auto"
                        : "invisible -translate-y-2 opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="w-[360px] rounded-2xl border border-white/10 bg-[#090e1a]/95 p-3 shadow-2xl shadow-black/80 backdrop-blur-2xl">
                      <div className="px-3 py-2 border-b border-white/10 mb-2">
                        <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Certified Programs</p>
                        <p className="text-[11px] text-gray-400">Hands-on practical training tracks</p>
                      </div>
                      <ul className="space-y-1">
                        {item.items.map((s) => (
                          <li key={s.href}>
                            <Link
                              href={s.href}
                              className={`group flex items-center justify-between rounded-xl px-3 py-2 text-sm transition-all ${
                                pathname === s.href
                                  ? "bg-cyan-500/15 text-cyan-300 font-medium"
                                  : "text-gray-300 hover:bg-white/5 hover:text-white"
                              }`}
                            >
                              <span className="truncate">{s.name}</span>
                              <ArrowRight size={13} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-400" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-2 border-t border-white/10 pt-2 px-3">
                        <Link href="/courses" className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                          Explore All Courses Hub <ArrowRight size={11} />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Right CTA Button */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            onClick={closeAll}
            className="btn-primary text-xs tracking-wider uppercase"
          >
            Get a Quote <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          onClick={closeOnLink}
          className="h-[calc(100dvh-72px)] overflow-y-auto border-t border-white/10 bg-[#070c18]/98 px-5 py-6 backdrop-blur-2xl lg:hidden"
        >
          <ul className="flex flex-col divide-y divide-white/10">
            {mainNav.map((item) => {
              const groups = item.columns;
              const active = isActive(item.href);

              if (item.items) {
                return (
                  <li key={item.name} className="py-3">
                    <Link
                      href={item.href}
                      className={`block text-base font-semibold ${active ? "text-cyan-400" : "text-white"}`}
                    >
                      {item.name}
                    </Link>
                    <ul className="mt-2 ml-2 space-y-1.5 border-l border-white/10 pl-3">
                      {item.items.map((s) => (
                        <li key={s.href}>
                          <Link
                            href={s.href}
                            className={`block py-1 text-sm ${pathname === s.href ? "text-cyan-400 font-medium" : "text-gray-400 hover:text-white"}`}
                          >
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }

              if (!groups) {
                return (
                  <li key={item.name} className="py-3">
                    <Link
                      href={item.href}
                      className={`block text-base font-semibold ${active ? "text-cyan-400" : "text-white hover:text-cyan-300"}`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item.name} className="py-3">
                  <div className="flex items-center justify-between">
                    <Link href={item.href} className="text-base font-semibold text-white">
                      All {item.name}
                    </Link>
                  </div>
                  <div className="mt-2 space-y-2">
                    {groups.map((g) => (
                      <div key={g.name} className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
                        <button
                          type="button"
                          onClick={() => setExpanded(expanded === g.name ? null : g.name)}
                          aria-expanded={expanded === g.name}
                          className="flex w-full items-center justify-between text-left text-sm font-medium text-gray-200"
                        >
                          <span className="text-cyan-300">{g.name}</span>
                          <span className="text-lg text-cyan-400 leading-none">
                            {expanded === g.name ? "−" : "+"}
                          </span>
                        </button>
                        {expanded === g.name && (
                          <ul className="mt-2 space-y-1 border-t border-white/10 pt-2 pl-2">
                            {g.items.map((s) => (
                              <li key={s.href}>
                                <Link
                                  href={s.href}
                                  className={`block py-1 text-xs ${pathname === s.href ? "text-cyan-400 font-medium" : "text-gray-400 hover:text-white"}`}
                                >
                                  {s.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Quick Actions in Mobile Menu */}
          <div className="mt-8 space-y-3">
            <Link
              href="/contact"
              className="btn-primary w-full justify-center text-center"
            >
              Get a Proposal <ArrowRight size={16} />
            </Link>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <a
                href={`tel:${SITE.phone}`}
                className="btn-secondary text-xs justify-center py-2.5"
              >
                <Phone size={14} className="text-cyan-400" /> Call
              </a>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs justify-center py-2.5"
              >
                <MessageSquare size={14} className="text-emerald-400" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
