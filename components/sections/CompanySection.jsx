import Link from "next/link";
import { Lightbulb, Hammer, Wand2, ArrowRight } from "lucide-react";
import { PRINCIPLES } from "@/data/company";
import { SectionHeading } from "@/components/animations/Reveal";

const ICONS = [Lightbulb, Hammer, Wand2];

export default function CompanySection() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6" aria-label="We build with purpose">
      <SectionHeading
        eyebrow="Company"
        title={<>We build with <span className="text-gradient">purpose.</span></>}
        body="Three principles guide every MAXL product — from the first sketch to the final release."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {PRINCIPLES.map((p, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <article data-reveal data-delay={i * 0.08} key={p.word} className="glass group relative overflow-hidden rounded-3xl p-8 ring-line">
              <span className="font-display pointer-events-none absolute -right-2 -top-4 text-[6rem] font-black text-[#155eef]/10 transition group-hover:text-[#155eef]/20" aria-hidden>
                0{i + 1}
              </span>
              <Icon className="h-7 w-7 text-[#38bdf8]" />
              <h3 className="font-display mt-5 text-2xl font-black tracking-[0.12em]">{p.word.toUpperCase()}</h3>
              <p className="mt-2 font-medium">{p.body}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{p.detail}</p>
            </article>
          );
        })}
      </div>
      <Link data-reveal href="/company" className="group mt-8 inline-flex items-center gap-2 text-sm font-bold tracking-widest text-[#38bdf8]">
        MORE ABOUT MAXL <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </section>
  );
}
