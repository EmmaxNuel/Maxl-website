"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Brain, Code2, Palette, MonitorPlay } from "lucide-react";
import { SectionHeading } from "@/components/animations/Reveal";
import { TECH_PILLARS } from "@/data/company";

const TechOrbit = dynamic(() => import("./TechOrbit"), { ssr: false, loading: () => <div className="h-[320px] rounded-3xl ring-line glass" /> });

const ICONS = [Brain, Code2, Palette, MonitorPlay];

export default function TechnologySection() {
  return (
    <section className="relative overflow-hidden py-24" aria-label="Built for what's next">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full blur-[130px]" style={{ background: "radial-gradient(closest-side, rgba(21,94,239,0.28), transparent)" }} />
      </div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Technology"
            title={<>Built for <span className="text-gradient">what&apos;s next.</span></>}
            body="Four disciplines power everything MAXL ships — from AI research to the interfaces people touch every day."
          />
          <ul className="mt-8 space-y-4">
            {TECH_PILLARS.map((t, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <li data-reveal data-delay={i * 0.06} key={t.title} className="glass flex gap-4 rounded-2xl p-5 ring-line">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#155eef]/15 text-[#38bdf8]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="font-display block text-sm font-bold tracking-widest">{t.title.toUpperCase()}</span>
                    <span className="mt-1 block text-sm leading-6 text-[var(--ink-soft)]">{t.body}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div data-reveal className="glass relative overflow-hidden rounded-3xl p-6 ring-line">
          <div className="bg-blueprint absolute inset-0 opacity-70" aria-hidden />
          <div className="relative">
            <TechOrbit />
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[11px] font-semibold tracking-[0.18em] text-[var(--ink-soft)]">
              <span className="rounded-lg bg-[#155eef]/10 px-2 py-2">AI CORE</span>
              <span className="rounded-lg bg-[#155eef]/10 px-2 py-2">ENGINEERING</span>
              <span className="rounded-lg bg-[#155eef]/10 px-2 py-2">CREATIVE STACK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
