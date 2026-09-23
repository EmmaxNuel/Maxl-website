"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { ensureGsap, prefersReducedMotion } from "@/lib/animations";
import { getProduct } from "@/data/products";

/** Lightweight canvas particles + grid drift. No WebGL cost on the hero. */
function ParticleField() {
  const ref = useRef(null);
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf = 0;
    let w = 0, h = 0;
    const N = 70;
    const pts = Array.from({ length: N }, () => ({
      x: Math.random(), y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0006, vy: (Math.random() - 0.5) * 0.0006,
      r: 0.8 + Math.random() * 1.8,
    }));
    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      w = canvas.width = rect.width;
      h = canvas.height = rect.height;
    };
    resize();
    window.addEventListener("resize", resize);
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(56,189,248,0.55)";
        ctx.fill();
      }
      // sparse links
      ctx.strokeStyle = "rgba(37,99,235,0.12)";
      ctx.lineWidth = 1;
      for (let i = 0; i < pts.length; i += 4) {
        for (let j = i + 4; j < pts.length; j += 7) {
          const dx = (pts[i].x - pts[j].x) * w;
          const dy = (pts[i].y - pts[j].y) * h;
          if (dx * dx + dy * dy < 130 * 130) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x * w, pts[i].y * h);
            ctx.lineTo(pts[j].x * w, pts[j].y * h);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 h-full w-full opacity-70" aria-hidden />;
}

export default function Hero() {
  const scope = useRef(null);
  const featured = getProduct("manji");

  useEffect(() => {
    if (prefersReducedMotion()) return;
    ensureGsap();
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo("[data-hero-kicker]", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.1)
        .fromTo("[data-hero-line]", { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.12 }, 0.2)
        .fromTo("[data-hero-sub]", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.6)
        .fromTo("[data-hero-cta]", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1 }, 0.75)
        .fromTo(
          "[data-hero-logo]",
          { opacity: 0, scale: 0.92, y: 30, filter: "blur(6px)" },
          { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", duration: 1.4 },
          0.3
        );
      gsap.to("[data-hero-logo]", {
        y: -14,
        duration: 3.4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.to("[data-hero-ring]", {
        rotate: 360,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={scope} className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16" aria-label="MAXL intro">
      {/* backdrops */}
      <div className="bg-blueprint absolute inset-0" aria-hidden />
      <ParticleField />
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-1/2 h-[42rem] w-[70rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]" style={{ background: "radial-gradient(closest-side, rgba(21,94,239,0.35), rgba(56,189,248,0.12), transparent)" }} />
        <div className="absolute bottom-0 h-px w-full bg-gradient-to-r from-transparent via-[#38bdf8]/50 to-transparent" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p data-hero-kicker className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-[0.24em] ring-line">
            <Sparkles className="h-3.5 w-3.5 text-[#38bdf8]" />
            MAXL — TECHNOLOGY × CREATIVITY
          </p>
          <h1 className="font-display mt-6 text-5xl font-black leading-[0.98] tracking-tight sm:text-7xl lg:text-[5.4rem]">
            <span data-hero-line className="block">BUILD</span>
            <span data-hero-line className="text-gradient block">WHAT&apos;S</span>
            <span data-hero-line className="block">NEXT.</span>
          </h1>
          <p data-hero-sub className="mt-6 max-w-xl text-base leading-7 text-[var(--ink-soft)] sm:text-lg sm:leading-8">
            MAXL builds technology, creative products, AI-powered experiences, and digital products for the future.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              data-hero-cta
              href="/company"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#155eef] to-[#2563eb] px-7 py-3.5 text-sm font-bold tracking-widest text-white shadow-[0_10px_40px_-10px_rgba(21,94,239,0.9)] transition hover:shadow-[0_10px_48px_-8px_rgba(56,189,248,0.8)]"
            >
              EXPLORE MAXL
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              data-hero-cta
              href="/products"
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold tracking-widest ring-line transition hover:bg-[#155eef]/10"
            >
              EXPLORE PRODUCTS
            </Link>
          </div>
          <div data-hero-cta className="mt-10 flex items-center gap-6 text-xs tracking-[0.2em] text-[var(--ink-soft)]">
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]" /> AI PRODUCTS</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#155eef]" /> CREATIVE TOOLS</span>
            <span className="hidden sm:flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa]" /> MAXL LABS</span>
          </div>
          {featured?.websiteUrl && (
            <div data-hero-cta className="glass mt-6 flex max-w-xl flex-wrap items-center justify-between gap-3 rounded-2xl px-5 py-3.5 ring-line">
              <span className="text-xs tracking-[0.18em] text-[var(--ink-soft)]">
                FEATURED — <span className="font-bold text-[var(--ink)]">{featured.name.toUpperCase()}</span> · {featured.status.toUpperCase()}
              </span>
              <span className="flex items-center gap-4 text-xs font-bold tracking-widest">
                <Link href="/products/manji" className="text-[#38bdf8] hover:underline">EXPLORE MANJI</Link>
                <a href={featured.websiteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#38bdf8] hover:underline">
                  LAUNCH MANJI <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </span>
            </div>
          )}
        </div>

        {/* Logo stage */}
        <div className="relative mx-auto w-full max-w-[520px]" aria-hidden={false}>
          <div data-hero-ring className="absolute left-1/2 top-1/2 aspect-square w-[112%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#38bdf8]/25" aria-hidden />
          <div className="absolute left-1/2 top-1/2 aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#155eef]/20" aria-hidden />
          <div
            className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
            style={{ background: "radial-gradient(closest-side, rgba(56,189,248,0.5), transparent)" }}
            aria-hidden
          />
          <div data-hero-logo className="glass relative rounded-[2rem] p-8 ring-line sm:p-12">
            <Image
              src="/logo/maxl-logo.png"
              alt="Official MAXL logo"
              width={880}
              height={560}
              className="h-auto w-full object-contain"
              priority
            />
            <div className="mt-6 flex items-center justify-between border-t border-[var(--line)] pt-5">
              <span className="font-display text-[11px] font-bold tracking-[0.3em]">MAXL.SYS</span>
              <span className="flex items-center gap-2 text-[11px] tracking-[0.2em] text-[var(--ink-soft)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-[#38bdf8] opacity-60" />
                  <span className="h-2 w-2 rounded-full bg-[#38bdf8]" />
                </span>
                ONLINE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
