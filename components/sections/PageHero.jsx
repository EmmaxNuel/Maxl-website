import { Eyebrow } from "@/components/animations/Reveal";

export default function PageHero({ eyebrow, title, body, children }) {
  return (
    <section className="relative overflow-hidden pb-14 pt-36 sm:pt-44" aria-label={eyebrow}>
      <div className="bg-blueprint absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[46rem] -translate-x-1/2 rounded-full blur-[120px]"
        style={{ background: "radial-gradient(closest-side, rgba(21,94,239,0.3), transparent)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 data-reveal className="font-display mt-4 max-w-4xl text-4xl font-black leading-[1.02] sm:text-6xl">
          {title}
        </h1>
        {body && (
          <p data-reveal data-delay="0.1" className="mt-5 max-w-2xl text-base leading-7 text-[var(--ink-soft)] sm:text-lg">
            {body}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
