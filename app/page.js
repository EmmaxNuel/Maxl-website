"use client";

import Hero from "@/components/hero/Hero";
import ProductsSection from "@/components/products/ProductsSection";
import TechnologySection from "@/components/sections/TechnologySection";
import CreativeTechSection from "@/components/sections/CreativeTechSection";
import LabsSection from "@/components/sections/LabsSection";
import CompanySection from "@/components/sections/CompanySection";
import MediaTeaser from "@/components/sections/MediaTeaser";
import FutureCTA from "@/components/sections/FutureCTA";
import { RevealScope } from "@/components/animations/Reveal";

export default function Home() {
  return (
    <RevealScope>
      <Hero />
      <ProductsSection />
      <TechnologySection />
      <CreativeTechSection />
      <LabsSection />
      <CompanySection />
      <MediaTeaser />
      <FutureCTA />
    </RevealScope>
  );
}
