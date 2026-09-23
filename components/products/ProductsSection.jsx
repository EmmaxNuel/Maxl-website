import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { PRODUCTS, PRODUCT_ICONS } from "@/data/products";
import { SectionHeading } from "@/components/animations/Reveal";

export function ProductCard({ product }) {
  const Icon = PRODUCT_ICONS[product.icon] || PRODUCT_ICONS.clapperboard;
  return (
    <article
      data-reveal
      className="group glass relative flex flex-col overflow-hidden rounded-3xl p-8 ring-line transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_70px_-20px_rgba(21,94,239,0.55)]"
    >
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-[70px] opacity-60 transition group-hover:opacity-100"
        style={{ background: `radial-gradient(closest-side, ${product.accent}55, transparent)` }}
        aria-hidden
      />
      <div className="flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#155eef] to-[#38bdf8] text-white shadow-lg">
          <Icon className="h-6 w-6" />
        </span>
        <span className="rounded-full bg-[#155eef]/10 px-3 py-1 text-[11px] font-semibold tracking-widest text-[#38bdf8]">
          {product.status.toUpperCase()}
        </span>
      </div>
      <h3 className="font-display mt-6 text-3xl font-black tracking-wide">{product.name.toUpperCase()}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {product.categories.map((c) => (
          <span key={c} className="rounded-full border border-[var(--line)] px-3 py-1 text-[11px] font-medium tracking-wider text-[var(--ink-soft)]">
            {c}
          </span>
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm leading-6 text-[var(--ink-soft)]">“{product.description}”</p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        {product.websiteUrl ? (
          <a
            href={product.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#155eef] to-[#2563eb] px-5 py-2.5 text-xs font-bold tracking-widest text-white shadow-[0_8px_30px_-8px_rgba(21,94,239,0.8)] transition hover:shadow-[0_8px_36px_-6px_rgba(56,189,248,0.7)]"
          >
            {product.ctaText.toUpperCase()} <ExternalLink className="h-3.5 w-3.5" />
          </a>
        ) : null}
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-[#38bdf8]"
        >
          OPEN PRODUCT <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}

export default function ProductsSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6" aria-label="What we build">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="What we build"
          title={<>An ecosystem of <span className="text-gradient">products.</span></>}
          body="MAXL products share one goal: give people powerful, reliable tools to create. Start with our first two platforms."
        />
        <Link data-reveal href="/products" className="group inline-flex items-center gap-2 rounded-full ring-line glass px-5 py-2.5 text-sm font-semibold">
          All products <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}
