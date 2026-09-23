import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Cpu, ExternalLink } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import FutureCTA from "@/components/sections/FutureCTA";
import { RevealScope } from "@/components/animations/Reveal";
import { PRODUCTS, getProduct, PRODUCT_ICONS } from "@/data/products";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = getProduct(params.slug);
  if (!p) return { title: "Product not found" };
  return {
    title: p.name,
    description: p.description,
    alternates: { canonical: `${SITE_URL}/products/${p.slug}` },
    openGraph: { title: `${p.name} — MAXL`, description: p.description },
  };
}

export default function ProductPage({ params }) {
  const product = getProduct(params.slug);
  if (!product) notFound();
  const Icon = PRODUCT_ICONS[product.icon] || PRODUCT_ICONS.clapperboard;
  const others = PRODUCTS.filter((p) => p.slug !== product.slug);

  return (
    <RevealScope>
      <PageHero
        eyebrow={product.categories.join(" · ")}
        title={<>{product.name} — <span className="text-gradient">{product.tagline}</span></>}
        body={product.description}
      >
        <div data-reveal className="mt-6 flex flex-wrap gap-2">
          {product.heroPoints.map((h) => (
            <span key={h} className="inline-flex items-center gap-2 rounded-full bg-[#155eef]/10 px-4 py-2 text-xs font-semibold">
              <Check className="h-3.5 w-3.5 text-[#38bdf8]" /> {h}
            </span>
          ))}
        </div>
        {product.websiteUrl ? (
          <div data-reveal className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={product.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#155eef] to-[#2563eb] px-7 py-3.5 text-sm font-bold tracking-widest text-white shadow-[0_10px_40px_-10px_rgba(21,94,239,0.9)] transition hover:shadow-[0_10px_48px_-8px_rgba(56,189,248,0.8)]"
            >
              {product.ctaText.toUpperCase()}
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <span className="text-xs tracking-wider text-[var(--ink-soft)]">Opens the {product.name} platform in a new tab.</span>
          </div>
        ) : null}
      </PageHero>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="glass rounded-3xl p-8 ring-line sm:p-12">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#155eef] to-[#38bdf8] text-white">
              <Icon className="h-7 w-7" />
            </span>
            <div>
              <p className="font-display text-xs font-bold tracking-[0.28em] text-[#38bdf8]">{product.status.toUpperCase()}</p>
              <p className="font-display text-xl font-black tracking-widest">{product.name.toUpperCase()}</p>
            </div>
          </div>

          <h2 data-reveal className="font-display mt-10 text-2xl font-black">Features</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {product.features.map((f) => (
              <article data-reveal key={f.title} className="rounded-2xl border border-[var(--line)] bg-[var(--bg-elev)]/60 p-6">
                <h3 className="font-bold">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-[var(--ink-soft)]">{f.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h2 data-reveal className="font-display flex items-center gap-2 text-lg font-black tracking-widest"><Cpu className="h-5 w-5 text-[#38bdf8]" /> TECHNOLOGY</h2>
              <ul className="mt-3 space-y-2 text-sm text-[var(--ink-soft)]">
                {product.technology.map((t) => <li key={t} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]" />{t}</li>)}
              </ul>
            </div>
            <div>
              <h2 data-reveal className="font-display text-lg font-black tracking-widest">USE CASES</h2>
              <ul className="mt-3 space-y-2 text-sm text-[var(--ink-soft)]">
                {product.useCases.map((t) => <li key={t} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#155eef]" />{t}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <Link href="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink-soft)] hover:text-[#38bdf8]">
            <ArrowLeft className="h-4 w-4" /> All products
          </Link>
          {others.map((o) => (
            <Link key={o.slug} href={`/products/${o.slug}`} className="group inline-flex items-center gap-2 text-sm font-bold text-[#38bdf8]">
              Next: {o.name} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <FutureCTA
          title={product.websiteUrl ? `Build with ${product.name}.` : `Follow ${product.name}.`}
          body={product.websiteUrl ? `The ${product.name} platform is live. Launch it to install and start creating — or talk to us first.` : `Interested in ${product.name} for your team or creative work? Tell us what you want to make.`}
          primary={product.websiteUrl ? { label: product.ctaText.toUpperCase(), href: product.websiteUrl, external: true } : { label: "CONTACT US", href: "/contact" }}
          secondary={{ label: "ALL PRODUCTS", href: "/products" }}
        />
      </div>
    </RevealScope>
  );
}
