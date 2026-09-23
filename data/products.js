import { Clapperboard, Church } from "lucide-react";

export const PRODUCTS = [
  {
    slug: "manji",
    name: "Manji",
    tagline: "Turn imagination into visual experiences.",
    description:
      "An AI-powered story and animation creation platform designed to help creators turn imagination into visual experiences.",
    categories: ["AI", "Creative Technology", "Animation"],
    icon: "clapperboard",
    accent: "#38BDF8",
    status: "Available now",
    // External production platform — MAXL only links out, never embeds it.
    websiteUrl: "https://manji-download.olatunjie335.workers.dev/",
    ctaText: "Launch Manji",
    heroPoints: [
      "AI-assisted storyboarding",
      "Character & scene generation",
      "Timeline-based animation tools",
      "Export for web, film & social",
    ],
    features: [
      {
        title: "Story to scene",
        body: "Start from an idea or script and shape it into structured scenes, shots and beats.",
      },
      {
        title: "AI-assisted visuals",
        body: "Generate style-consistent characters, backgrounds and motion references to move faster.",
      },
      {
        title: "Animation workspace",
        body: "A timeline-first editor built for timing, camera moves, dialogue and sound.",
      },
      {
        title: "Built to share",
        body: "Preview and export in formats suited for creators, teams and audiences.",
      },
    ],
    technology: ["Artificial Intelligence", "Creative Technology", "Digital Experiences"],
    useCases: [
      "Independent storytellers prototyping animated shorts",
      "Creative teams pre-visualising films and series",
      "Educators turning lessons into visual stories",
    ],
  },
  {
    slug: "churchcast",
    name: "ChurchCast",
    tagline: "Live church media, simple and reliable.",
    description:
      "A modern presentation platform designed to make live church media simple, powerful, and reliable.",
    categories: ["Software", "Media", "Presentation"],
    icon: "church",
    accent: "#60A5FA",
    status: "In development",
    // No production URL yet — card/page stay internal until one is supplied.
    websiteUrl: null,
    ctaText: "Explore ChurchCast",
    heroPoints: [
      "Lyrics, scriptures & slides in one place",
      "Reliable live output & stage display",
      "Volunteer-friendly controls",
      "Media library for services",
    ],
    features: [
      {
        title: "Service-first design",
        body: "Build an order of service with songs, readings, notices and media cues.",
      },
      {
        title: "Dependable live output",
        body: "Clean audience output plus a dedicated stage view for teams and speakers.",
      },
      {
        title: "Easy for volunteers",
        body: "Large controls, clear states and forgiving workflows for Sunday mornings.",
      },
      {
        title: "Media ready",
        body: "Handle lyrics, Bibles, images, video and announcements without switching apps.",
      },
    ],
    technology: ["Software Engineering", "Digital Experiences", "Creative Technology"],
    useCases: [
      "Sunday services and midweek gatherings",
      "Youth and community events",
      "Conferences and live presentations",
    ],
  },
];

export function getProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export const PRODUCT_ICONS = {
  clapperboard: Clapperboard,
  church: Church,
};

export function productIcon(name) {
  return PRODUCT_ICONS[name] || Clapperboard;
}
