import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { RevealScope } from "@/components/animations/Reveal";
import { POSTS } from "@/data/media";
import { formatDate } from "@/components/sections/MediaTeaser";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = POSTS.find((x) => x.slug === slug);
  if (!p) return { title: "Story not found" };
  return {
    title: p.title,
    description: p.excerpt,
    alternates: { canonical: `${SITE_URL}/media/${p.slug}` },
  };
}

export default async function MediaPost({ params }) {
  const { slug } = await params;
  const post = POSTS.find((x) => x.slug === slug);
  if (!post) notFound();
  return (
    <RevealScope>
      <article className="mx-auto max-w-3xl px-4 pb-16 pt-36 sm:px-6 sm:pt-44">
        <Link href="/media" className="inline-flex items-center gap-2 text-sm text-[var(--ink-soft)] hover:text-[#38bdf8]">
          <ArrowLeft className="h-4 w-4" /> All stories
        </Link>
        <p data-reveal className="mt-6 text-[11px] font-bold tracking-[0.28em] text-[#38bdf8]">
          {post.category.toUpperCase()} · {post.readTime.toUpperCase()} · {formatDate(post.date).toUpperCase()}
        </p>
        <h1 data-reveal className="font-display mt-3 text-3xl font-black leading-tight sm:text-5xl">{post.title}</h1>
        <p data-reveal className="mt-4 text-lg text-[var(--ink-soft)]">{post.excerpt}</p>
        <div className="mt-8 space-y-5 border-t border-[var(--line)] pt-8">
          {post.body.map((para, i) => (
            <p data-reveal key={i} className="leading-8 text-[var(--ink-soft)]">{para}</p>
          ))}
        </div>
      </article>
    </RevealScope>
  );
}
