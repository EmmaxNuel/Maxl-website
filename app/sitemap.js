import { PRODUCTS } from "@/data/products";
import { POSTS } from "@/data/media";

import { SITE_URL as URL } from "@/lib/site";

export default function sitemap() {
  const staticPages = ["", "/products", "/technology", "/company", "/media", "/careers", "/contact", "/privacy", "/terms"].map((p) => ({
    url: `${URL}${p}`,
    lastModified: new Date("2026-09-23"),
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.8,
  }));
  const products = PRODUCTS.map((p) => ({
    url: `${URL}/products/${p.slug}`,
    lastModified: new Date("2026-09-23"),
    changeFrequency: "monthly",
    priority: 0.9,
  }));
  const posts = POSTS.map((p) => ({
    url: `${URL}/media/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));
  return [...staticPages, ...products, ...posts];
}
