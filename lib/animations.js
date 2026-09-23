"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function ensureGsap() {
  if (!registered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return gsap;
}

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Reveal-on-scroll for [data-reveal] elements inside a scope. */
export function useReveal(scopeRef, deps = []) {
  useEffect(() => {
    if (!scopeRef?.current) return;
    if (prefersReducedMotion()) return;
    ensureGsap();
    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            delay: parseFloat(el.dataset.delay || 0),
            scrollTrigger: { trigger: el, start: "top 88%" },
          }
        );
      });
      gsap.utils.toArray("[data-reveal-line]").forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.1,
            ease: "power3.inOut",
            transformOrigin: "left center",
            scrollTrigger: { trigger: el, start: "top 90%" },
          }
        );
      });
    }, scopeRef);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
