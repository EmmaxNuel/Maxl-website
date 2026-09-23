"use client";

import { useRef } from "react";
import { useReveal } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function RevealScope({ children, className }) {
  const ref = useRef(null);
  useReveal(ref);
  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }) {
  return (
    <p data-reveal className="font-display text-[11px] font-bold uppercase tracking-[0.32em] text-[#38bdf8]">
      {children}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, body, align = "left" }) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        data-reveal
        className="font-display mt-4 text-3xl font-black leading-[1.05] tracking-tight sm:text-5xl"
      >
        {title}
      </h2>
      {body ? (
        <p data-reveal data-delay="0.1" className="mt-5 text-base leading-7 text-[var(--ink-soft)] sm:text-lg">
          {body}
        </p>
      ) : null}
    </div>
  );
}
