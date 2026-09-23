import PageHero from "@/components/sections/PageHero";
import TechnologySection from "@/components/sections/TechnologySection";
import CreativeTechSection from "@/components/sections/CreativeTechSection";
import LabsSection from "@/components/sections/LabsSection";
import FutureCTA from "@/components/sections/FutureCTA";
import { RevealScope } from "@/components/animations/Reveal";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Technology",
  description: "MAXL technology: artificial intelligence, software engineering, creative technology and digital experiences.",
  alternates: { canonical: `${SITE_URL}/technology` },
};

export default function TechnologyPage() {
  return (
    <RevealScope>
      <PageHero
        eyebrow="Technology"
        title={<>Built for <span className="text-gradient">what&apos;s next.</span></>}
        body="MAXL invests in four disciplines — AI, engineering, creative technology and digital experience — so products feel both powerful and calm."
      />
      <TechnologySection />
      <CreativeTechSection />
      <LabsSection />
      <FutureCTA />
    </RevealScope>
  );
}
