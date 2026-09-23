"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { NAV_LINKS } from "@/data/navigation";

const INDEX = [
  ...NAV_LINKS.map((n) => ({ title: n.label, href: n.href, kind: "Page" })),
  { title: "All products", href: "/products", kind: "Page" },
  ...PRODUCTS.map((p) => ({ title: p.name, href: `/products/${p.slug}`, kind: "Product" })),
  { title: "Contact", href: "/contact", kind: "Page" },
  { title: "Careers", href: "/careers", kind: "Page" },
];

export default function SearchOverlay({ open, onClose }) {
  const [q, setQ] = useState("");
  useEffect(() => {
    if (!open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setQ("");
    }
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return INDEX.slice(0, 6);
    return INDEX.filter((i) => i.title.toLowerCase().includes(needle)).slice(0, 8);
  }, [q]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-start justify-center bg-black/60 p-4 pt-24 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Site search"
        >
          <motion.div
            initial={{ y: 16, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 8, scale: 0.98 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl overflow-hidden rounded-2xl bg-[var(--bg-elev)] shadow-2xl ring-line"
          >
            <div className="flex items-center gap-3 border-b border-[var(--line)] px-4">
              <Search className="h-4 w-4 shrink-0 text-[var(--ink-soft)]" />
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search products, pages…"
                className="w-full bg-transparent py-4 text-sm outline-none placeholder:text-[var(--ink-soft)]"
                aria-label="Search query"
              />
              <button onClick={onClose} aria-label="Close search" className="rounded-full p-1 hover:bg-black/5 dark:hover:bg-white/10">
                <X className="h-4 w-4" />
              </button>
            </div>
            <ul className="max-h-80 overflow-auto p-2">
              {results.map((r) => (
                <li key={r.href + r.title}>
                  <Link
                    href={r.href}
                    onClick={onClose}
                    className="flex items-center justify-between rounded-xl px-3 py-3 text-sm transition hover:bg-[#155eef]/10"
                  >
                    <span className="font-medium">{r.title}</span>
                    <span className="text-xs uppercase tracking-widest text-[var(--ink-soft)]">{r.kind}</span>
                  </Link>
                </li>
              ))}
              {results.length === 0 && (
                <li className="px-3 py-6 text-center text-sm text-[var(--ink-soft)]">No results found.</li>
              )}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
