import PageHero from "@/components/sections/PageHero";
import { ProductCard } from "@/components/products/ProductsSection";
import FutureCTA from "@/components/sections/FutureCTA";
import { RevealScope } from "@/components/animations/Reveal";
import { PRODUCTS } from "@/data/products";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Products",
  description: "Explore MAXL products: Manji, an AI-powered story and animation platform, and ChurchCast, modern live church media.",
  alternates: { canonical: `${SITE_URL}/products` },
};

export default function ProductsPage() {
  return (
    <RevealScope>
      <PageHero
        eyebrow="Products"
        title={<>What we <span className="text-gradient">build.</span></>}
        body="An ecosystem of technology and creative products. Every MAXL product is designed to help people create something new."
      />
      <div className="mx-auto grid max-w-7xl gap-6 px-4 pb-8 sm:px-6 md:grid-cols-2">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p data-reveal className="glass rounded-2xl p-5 text-sm leading-6 text-[var(--ink-soft)] ring-line">
          More products are in exploration inside MAXL Labs. Products are added here as they launch — this page grows with the company.
        </p>
      </div>
      <div className="mt-16">
        <FutureCTA title="More on the way." body="Manji and ChurchCast are the beginning. MAXL Labs is where the next ideas are already taking shape." />
      </div>
    </RevealScope>
  );
}
