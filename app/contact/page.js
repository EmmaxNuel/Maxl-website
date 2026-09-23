import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import { RevealScope } from "@/components/animations/Reveal";
import { Mail, MapPin, Clock } from "lucide-react";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Contact MAXL — let's build something. Product, partnership, media or careers enquiries.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <RevealScope>
      <PageHero
        eyebrow="Contact"
        title={<>Let&apos;s build <span className="text-gradient">something.</span></>}
        body="Questions about Manji, ChurchCast, MAXL Labs or working together? Send a message — a human will read it."
      />
      <div className="mx-auto grid max-w-7xl gap-6 px-4 pb-10 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="space-y-4" aria-label="Contact details">
          {[
            { icon: Mail, title: "EMAIL", body: "Use the form and we will reply to your address directly." },
            { icon: Clock, title: "RESPONSE TIME", body: "We aim to respond to every serious enquiry within a few business days." },
            { icon: MapPin, title: "WHERE", body: "MAXL works digitally-first. Tell us where you are and what timezone suits you." },
          ].map((c) => (
            <div data-reveal key={c.title} className="glass flex gap-4 rounded-2xl p-6 ring-line">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#155eef]/15 text-[#38bdf8]">
                <c.icon className="h-5 w-5" />
              </span>
              <span>
                <span className="font-display block text-xs font-bold tracking-[0.24em]">{c.title}</span>
                <span className="mt-1 block text-sm leading-6 text-[var(--ink-soft)]">{c.body}</span>
              </span>
            </div>
          ))}
        </aside>
        <div data-reveal>
          <ContactForm />
        </div>
      </div>
    </RevealScope>
  );
}
