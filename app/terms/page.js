import PageHero from "@/components/sections/PageHero";
import { RevealScope } from "@/components/animations/Reveal";
import { SITE_URL } from "@/lib/site";

export const metadata = { title: "Terms", alternates: { canonical: `${SITE_URL}/terms` } };

export default function TermsPage() {
  return (
    <RevealScope>
      <PageHero eyebrow="Legal" title="Terms." body="The basics for using this website." />
      <div className="mx-auto max-w-3xl space-y-5 px-4 pb-16 text-sm leading-7 text-[var(--ink-soft)] sm:px-6">
        <p data-reveal>Content on this site is provided for general information about MAXL and its products. Product descriptions reflect current development plans and may change.</p>
        <p data-reveal>The MAXL logo and brand assets may not be copied, modified or redistributed without permission.</p>
        <p data-reveal>Nothing on this site constitutes an offer of employment, partnership or investment.</p>
        <p data-reveal className="text-xs">Last updated: 2026.</p>
      </div>
    </RevealScope>
  );
}
