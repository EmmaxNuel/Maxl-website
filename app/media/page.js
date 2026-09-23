import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import { RevealScope } from "@/components/animations/Reveal";
import { POSTS } from "@/data/media";
import { formatDate } from "@/components/sections/MediaTeaser";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Media",
  description: "MAXL media: news, announcements, product updates and stories.",
  alternates: { canonical: `${SITE_URL}/media` },
};

export default function MediaPage() {
  return (
    <RevealScope>
      <PageHero
        eyebrow="Media"
        title={<>News, updates & <span className="text-gradient">stories.</span></>}
        body="Announcements, product updates, technology notes and behind-the-scenes from MAXL. New stories are added here over time."
      />
      <div className="mx-auto grid max-w-7xl gap-5 px-4 pb-10 sm:px-6 md:grid-cols-3">
        {POSTS.map((p, i) => (
          <Link data-reveal data-delay={(i % 3) * 0.07} key={p.slug} href={`/media/${p.slug}`} className="group glass rounded-3xl p-7 ring-line transition hover:-translate-y-1">
            <span className="text-[11px] font-bold tracking-[0.24em] text-[#38bdf8]">{p.category.toUpperCase()} · {p.readTime.toUpperCase()}</span>
            <h2 className="mt-3 text-lg font-bold leading-7 transition group-hover:text-[#38bdf8]">{p.title}</h2>
            <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{p.excerpt}</p>
            <span className="mt-4 block text-xs text-[var(--ink-soft)]">{formatDate(p.date)}</span>
          </Link>
        ))}
      </div>
    </RevealScope>
  );
}
