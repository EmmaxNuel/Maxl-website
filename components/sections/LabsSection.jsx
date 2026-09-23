import { FlaskConical, Cpu, Sparkles, Microscope } from "lucide-react";
import { SectionHeading } from "@/components/animations/Reveal";

const ITEMS = [
  { icon: Cpu, tag: "AI", title: "Story intelligence", body: "Prototypes that understand narrative structure, pacing and character." },
  { icon: Sparkles, tag: "CREATIVE TECH", title: "Generative visuals", body: "Style-consistent generation experiments for scenes and worlds." },
  { icon: Microscope, tag: "RESEARCH", title: "Interaction studies", body: "New ways to direct, perform and present with machines." },
];

export default function LabsSection() {
  return (
    <section className="relative overflow-hidden py-24" aria-label="MAXL Labs">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#155eef]/[.07] to-transparent" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="glass relative overflow-hidden rounded-[2rem] p-8 ring-line sm:p-14">
          <div className="bg-blueprint absolute inset-0" aria-hidden />
          <div className="relative flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-2xl">
              <p data-reveal className="inline-flex items-center gap-2 rounded-full bg-[#38bdf8]/15 px-4 py-1.5 text-[11px] font-bold tracking-[0.28em] text-[#38bdf8]">
                <FlaskConical className="h-3.5 w-3.5" /> MAXL LABS
              </p>
              <h2 data-reveal className="font-display mt-4 text-3xl font-black sm:text-5xl">
                Exploring ideas that <span className="text-gradient">don&apos;t have a category yet.</span>
              </h2>
              <p data-reveal className="mt-4 text-[var(--ink-soft)]">Experiments, prototypes, AI and creative-technology research — where future MAXL products begin.</p>
            </div>
          </div>
          <div className="relative mt-10 grid gap-5 md:grid-cols-3">
            {ITEMS.map((it, i) => (
              <article data-reveal data-delay={i * 0.08} key={it.title} className="rounded-2xl border border-[var(--line)] bg-[var(--bg-elev)]/60 p-6 backdrop-blur">
                <span className="text-[10px] font-bold tracking-[0.28em] text-[#38bdf8]">{it.tag}</span>
                <it.icon className="mt-3 h-6 w-6" />
                <h3 className="font-display mt-3 text-sm font-bold tracking-widest">{it.title.toUpperCase()}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{it.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
