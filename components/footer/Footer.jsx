import Link from "next/link";
import Image from "next/image";
import { FOOTER_COLS } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-[var(--line)]">
      <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full blur-[120px]"
        style={{ background: "radial-gradient closest-side, rgba(21,94,239,0.35), transparent)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Link href="/" className="flex items-center gap-3" aria-label="MAXL home">
              <span className="relative block h-12 w-20 overflow-hidden">
                <Image src="/logo/maxl-logo.png" alt="MAXL logo" fill sizes="80px" className="object-contain" />
              </span>
              <span className="leading-none">
                <span className="font-display block text-2xl font-black tracking-[0.18em]">MAXL</span>
                <span className="mt-1 block text-[11px] tracking-[0.24em] text-[var(--ink-soft)]">
                  TECHNOLOGY × CREATIVITY
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[var(--ink-soft)]">
              MAXL builds technology, AI-powered products, and creative digital experiences for what comes next.
            </p>
            <p className="font-display mt-6 inline-flex rounded-full bg-[#155eef]/10 px-4 py-2 text-[11px] font-bold tracking-[0.28em] text-[#38bdf8]">
              BUILD WHAT&apos;S NEXT
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-8 sm:grid-cols-3" aria-label="Footer">
            {FOOTER_COLS.map((col) => (
              <div key={col.title}>
                <h3 className="font-display text-xs font-bold uppercase tracking-[0.24em] text-[var(--ink-soft)]">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link href={l.href} className="text-sm transition hover:text-[#38bdf8]">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[var(--line)] pt-6 text-xs text-[var(--ink-soft)] sm:flex-row sm:items-center">
          <p>© 2026 MAXL. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="transition hover:text-[var(--ink)]">Privacy</Link>
            <Link href="/terms" className="transition hover:text-[var(--ink)]">Terms</Link>
            <Link href="/contact" className="transition hover:text-[var(--ink)]">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
