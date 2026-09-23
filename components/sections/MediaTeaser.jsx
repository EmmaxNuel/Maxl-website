import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { POSTS } from "@/data/media";
import { SectionHeading } from "@/components/animations/Reveal";

export function formatDate(iso) {
  try {
    return new Date(iso + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  } catch {
    return iso;
  }
}

export default function MediaTeaser({ limit = 3 }) {
  const posts = POSTS.slice(0, limit);
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6" aria-label="Media">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Media"
          title={<>Stories from <span className="text-gradient">MAXL.</span></>}
          body="News, product updates, technology notes and behind-the-scenes."
        />
        <Link data-reveal href="/media" className="group inline-flex items-center gap-2 rounded-full ring-line glass px-5 py-2.5 text-sm font-semibold">
          All stories <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {posts.map((p, i) => (
          <Link data-reveal data-delay={i * 0.07} key={p.slug} href={`/media/${p.slug}`} className="group glass rounded-3xl p-7 ring-line transition hover:-translate-y-1">
            <span className="text-[11px] font-bold tracking-[0.24em] text-[#38bdf8]">{p.category.toUpperCase()} · {p.readTime.toUpperCase()}</span>
            <h3 className="mt-3 text-lg font-bold leading-7 transition group-hover:text-[#38bdf8]">{p.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{p.excerpt}</p>
            <span className="mt-4 block text-xs text-[var(--ink-soft)]">{formatDate(p.date)}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
