"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Search, ArrowRight, ExternalLink, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/data/navigation";
import { PRODUCTS } from "@/data/products";
import ThemeToggle from "@/components/theme/ThemeToggle";
import SearchOverlay from "./SearchOverlay";
import { cn } from "@/lib/utils";

export function Brand({ compact = false }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="MAXL home">
      <span className="relative block h-9 w-14 overflow-hidden">
        <Image
          src="/logo/maxl-logo.png"
          alt="MAXL logo"
          fill
          sizes="56px"
          className="object-contain"
          priority
        />
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="font-display block text-lg font-black tracking-[0.18em]">MAXL</span>
          <span className="block text-[10px] font-medium tracking-[0.22em] text-[var(--ink-soft)]">
            TECHNOLOGY × CREATIVITY
          </span>
        </span>
      )}
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-2" : "py-4"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav
            aria-label="Primary"
            className={cn(
              "glass flex items-center justify-between gap-3 rounded-2xl px-4 py-2.5 transition-all duration-500",
              scrolled ? "ring-line shadow-[0_12px_50px_-12px_rgba(21,94,239,0.45)]" : "border border-transparent"
            )}
            style={{ background: "var(--nav-bg)" }}
          >
            <Brand />
            <div className="hidden items-center gap-1 lg:flex">
              {NAV_LINKS.map((l) =>
                l.href === "/products" ? (
                  <div
                    key={l.href}
                    className="relative"
                    onMouseEnter={() => setDropOpen(true)}
                    onMouseLeave={() => setDropOpen(false)}
                  >
                    <Link
                      href={l.href}
                      className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-[var(--ink-soft)] transition hover:bg-[#155eef]/10 hover:text-[var(--ink)]"
                      aria-haspopup="true"
                      aria-expanded={dropOpen}
                    >
                      {l.label}
                      <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", dropOpen && "rotate-180")} />
                    </Link>
                    <AnimatePresence>
                      {dropOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.2 }}
                          className="glass absolute left-0 top-full w-72 rounded-2xl p-2 ring-line"
                          style={{ background: "var(--nav-bg)" }}
                        >
                          {PRODUCTS.map((p) =>
                            p.websiteUrl ? (
                              <a
                                key={p.slug}
                                href={p.websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between rounded-xl px-4 py-3 transition hover:bg-[#155eef]/10"
                              >
                                <span>
                                  <span className="flex items-center gap-1.5 text-sm font-semibold">
                                    {p.name} <ExternalLink className="h-3.5 w-3.5 text-[#38bdf8]" />
                                  </span>
                                  <span className="mt-0.5 block text-xs text-[var(--ink-soft)]">{p.ctaText} — external platform</span>
                                </span>
                              </a>
                            ) : (
                              <Link
                                key={p.slug}
                                href={`/products/${p.slug}`}
                                className="flex items-center justify-between rounded-xl px-4 py-3 transition hover:bg-[#155eef]/10"
                              >
                                <span>
                                  <span className="block text-sm font-semibold">{p.name}</span>
                                  <span className="mt-0.5 block text-xs text-[var(--ink-soft)]">{p.status}</span>
                                </span>
                              </Link>
                            )
                          )}
                          <Link
                            href="/products"
                            className="mt-1 flex items-center justify-between rounded-xl bg-[#155eef]/10 px-4 py-3 text-sm font-semibold transition hover:bg-[#155eef]/20"
                          >
                            All products <ArrowRight className="h-4 w-4" />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-full px-4 py-2 text-sm font-medium text-[var(--ink-soft)] transition hover:bg-[#155eef]/10 hover:text-[var(--ink)]"
                  >
                    {l.label}
                  </Link>
                )
              )}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSearch(true)}
                aria-label="Search"
                className="flex h-9 w-9 items-center justify-center rounded-full ring-line glass transition hover:scale-105"
              >
                <Search className="h-4 w-4" />
              </button>
              <ThemeToggle />
              <Link
                href="/contact"
                className="group hidden items-center gap-2 rounded-full bg-gradient-to-r from-[#155eef] to-[#2563eb] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(21,94,239,0.8)] transition hover:shadow-[0_8px_36px_-6px_rgba(56,189,248,0.7)] sm:inline-flex"
              >
                Contact
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full ring-line glass lg:hidden"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col bg-[#050816]/95 px-6 pb-10 pt-28 backdrop-blur-xl lg:hidden"
          >
            <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-40" />
            {[...NAV_LINKS, { label: "Contact", href: "/contact" }].map((l, i) => (
              <motion.div
                key={l.href + l.label}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.06 * i, duration: 0.45, ease: "easeOut" }}
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display flex items-center justify-between border-b border-white/10 py-5 text-2xl font-black tracking-wide text-white"
                >
                  {l.label}
                  <ArrowRight className="h-5 w-5 text-[#38bdf8]" />
                </Link>
              </motion.div>
            ))}
            {PRODUCTS.filter((p) => p.websiteUrl).map((p) => (
              <motion.div
                key={p.slug}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.36, duration: 0.45, ease: "easeOut" }}
              >
                <a
                  href={p.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display flex items-center justify-between border-b border-white/10 py-5 text-2xl font-black tracking-wide text-[#38bdf8]"
                >
                  {p.ctaText}
                  <ExternalLink className="h-5 w-5" />
                </a>
              </motion.div>
            ))}
            <p className="mt-auto text-xs tracking-[0.3em] text-white/40">MAXL — TECHNOLOGY × CREATIVITY</p>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchOverlay open={search} onClose={() => setSearch(false)} />
    </>
  );
}
