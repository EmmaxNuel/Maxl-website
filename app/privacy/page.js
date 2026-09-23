import PageHero from "@/components/sections/PageHero";
import { RevealScope } from "@/components/animations/Reveal";
import { SITE_URL } from "@/lib/site";

export const metadata = { title: "Privacy", alternates: { canonical: `${SITE_URL}/privacy` } };

export default function PrivacyPage() {
  return (
    <RevealScope>
      <PageHero eyebrow="Legal" title="Privacy." body="How MAXL handles information on this website." />
      <div className="mx-auto max-w-3xl space-y-5 px-4 pb-16 text-sm leading-7 text-[var(--ink-soft)] sm:px-6">
        <p data-reveal>This website does not require accounts and does not sell personal information.</p>
        <p data-reveal>If you contact us, we receive the details you choose to share (such as your name, email and message) and use them only to respond to your enquiry.</p>
        <p data-reveal>Theme preference is stored locally in your browser. Analytics, if enabled in the future, will be disclosed here first.</p>
        <p data-reveal>For privacy questions, contact us through the contact page.</p>
        <p data-reveal className="text-xs">Last updated: 2026.</p>
      </div>
    </RevealScope>
  );
}
