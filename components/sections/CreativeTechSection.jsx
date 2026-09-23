import Link from "next/link";
import { Film, BookOpen, Radio, FlaskConical, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/animations/Reveal";

const CARDS = [
  { icon: Film, title: "Animation", body: "Timing, motion and character — crafted frame by frame, accelerated by AI." },
  { icon: BookOpen, title: "Storytelling", body: "Structure and narrative tools that keep the human story at the center." },
  { icon: Radio, title: "Digital media", body: "Live, interactive and streamed experiences built for reliability." },
  { icon: FlaskConical, title: "Creative tools", body: "Instruments for makers — not black boxes, but creative partners." },
];

export default function CreativeTechSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6" aria-label="Technology meets creativity">
      <SectionHeading
        align="center"
        eyebrow="Creative technology"
        title={<>Technology meets <span className="text-gradient">creativity.</span></>}
        body="We work where engineering and art overlap — building cinematic, interactive experiences that feel alive."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map((c, i) => (
          <div data-reveal data-delay={i * 0.07} key={c.title} className="group glass relative overflow-hidden rounded-3xl p-7 ring-line transition hover:-translate-y-1">
            <div className="bg-blueprint absolute inset-0 opacity-0 transition group-hover:opacity-60" aria-hidden />
            <c.icon className="relative h-7 w-7 text-[#38bdf8]" />
            <h3 className="font-display relative mt-5 text-base font-bold tracking-[0.14em]">{c.title.toUpperCase()}</h3>
            <p className="relative mt-2 text-sm leading-6 text-[var(--ink-soft)]">{c.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link data-reveal href="/technology" className="group inline-flex items-center gap-2 text-sm font-bold tracking-widest text-[#38bdf8]">
          EXPLORE OUR TECHNOLOGY <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
