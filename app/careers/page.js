import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import FutureCTA from "@/components/sections/FutureCTA";
import { RevealScope, SectionHeading } from "@/components/animations/Reveal";
import { FOCUS_AREAS } from "@/data/company";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Careers",
  description: "Build the future with MAXL. Engineering, AI, design, animation and creative technology.",
  alternates: { canonical: `${SITE_URL}/careers` },
};

export default function CareersPage() {
  return (
    <RevealScope>
      <PageHero
        eyebrow="Careers"
        title={<>Build the future <span className="text-gradient">with us.</span></>}
        body="MAXL grows around people who care about craft — engineering, AI, design, animation and creative technology working as one team."
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6" aria-label="Focus areas">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass rounded-3xl p-8 ring-line">
            <SectionHeading eyebrow="Areas" title="Where we work." />
            <ul className="mt-6 flex flex-wrap gap-2">
              {FOCUS_AREAS.map((a) => (
                <li data-reveal key={a} className="rounded-full border border-[var(--line)] px-4 py-2 text-sm">{a}</li>
              ))}
            </ul>
            <p data-reveal className="mt-6 text-sm leading-6 text-[var(--ink-soft)]">
              We hire slowly and deliberately. When a role opens, it will be listed here with a clear description and how to apply.
            </p>
          </div>
          <div className="glass rounded-3xl p-8 ring-line" aria-label="Open roles">
            <p data-reveal className="font-display text-xs font-bold tracking-[0.28em] text-[#38bdf8]">OPEN ROLES</p>
            <h2 data-reveal className="font-display mt-3 text-3xl font-black">No current openings.</h2>
            <p data-reveal className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
              There are no open positions right now. If you&apos;d like to be considered for future work, send a note through our contact page with your portfolio and interests.
            </p>
            <Link data-reveal href="/contact" className="mt-6 inline-flex rounded-full bg-gradient-to-r from-[#155eef] to-[#2563eb] px-6 py-3 text-sm font-bold tracking-widest text-white">
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>
      <div className="mt-16">
        <FutureCTA title="This is just the beginning." body="Even without open roles today, MAXL's direction is long-term. Great work finds its way here." />
      </div>
    </RevealScope>
  );
}
