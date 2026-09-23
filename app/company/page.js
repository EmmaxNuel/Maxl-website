import PageHero from "@/components/sections/PageHero";
import CompanySection from "@/components/sections/CompanySection";
import FutureCTA from "@/components/sections/FutureCTA";
import { RevealScope, SectionHeading } from "@/components/animations/Reveal";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Company",
  description: "About MAXL — we build with purpose: imagine, build, create. Technology × Creativity.",
  alternates: { canonical: `${SITE_URL}/company` },
};

export default function CompanyPage() {
  return (
    <RevealScope>
      <PageHero
        eyebrow="Company"
        title={<>We build with <span className="text-gradient">purpose.</span></>}
        body="MAXL is a technology and creative company. We build AI-powered products and digital experiences that help people turn imagination into something real."
      />
      <CompanySection />
      <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6" aria-label="What MAXL believes">
        <div className="glass rounded-3xl p-8 ring-line sm:p-12">
          <SectionHeading
            eyebrow="Direction"
            title={<>Technology × <span className="text-gradient">Creativity.</span></>}
            body="MAXL's long-term direction is simple: keep building tools where advanced technology serves human creativity. We measure progress by what people make with our products — not by claims. This is just the beginning, and every release should earn its place."
          />
        </div>
      </section>
      <FutureCTA />
    </RevealScope>
  );
}
