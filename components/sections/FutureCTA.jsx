import Link from "next/link";
import { ArrowRight, Rocket } from "lucide-react";

export default function FutureCTA({ title = "This is just the beginning.", body = "MAXL is laying the foundation for a family of products where technology and creativity grow together. Follow along as Manji, ChurchCast and MAXL Labs evolve.", primary = { label: "EXPLORE PRODUCTS", href: "/products" }, secondary = { label: "TALK TO US", href: "/contact" } }) {
  const PrimaryTag = primary.external ? "a" : Link;
  const primaryProps = primary.external
    ? { href: primary.href, target: "_blank", rel: "noopener noreferrer" }
    : { href: primary.href };
  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-8 sm:px-6" aria-label="Future">
      <div data-reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#071a3d] via-[#0a2452] to-[#155eef] p-10 text-white sm:p-16">
        <div className="bg-blueprint absolute inset-0 opacity-30" aria-hidden style={{ "--grid-line": "rgba(255,255,255,0.12)" }} />
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#38bdf8]/30 blur-[100px]" aria-hidden />
        <div className="relative max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.28em]">
            <Rocket className="h-3.5 w-3.5" /> FUTURE
          </p>
          <h2 className="font-display mt-5 text-3xl font-black leading-tight sm:text-5xl">{title}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-white/75">{body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryTag {...primaryProps} className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold tracking-widest text-[#071a3d] transition hover:bg-[#38bdf8] hover:text-white">
              {primary.label} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </PrimaryTag>
            <Link href={secondary.href} className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-bold tracking-widest text-white transition hover:bg-white/10">
              {secondary.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
