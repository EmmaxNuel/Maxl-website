export const NAV_LINKS = [
  { label: "Products", href: "/products" },
  { label: "Technology", href: "/technology" },
  { label: "Company", href: "/company" },
  { label: "Media", href: "/media" },
  { label: "Careers", href: "/careers" },
];

export const FOOTER_COLS = [
  {
    title: "Products",
    links: [
      { label: "All products", href: "/products" },
      { label: "Manji", href: "/products/manji" },
      { label: "ChurchCast", href: "/products/churchcast" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Technology", href: "/technology" },
      { label: "Media", href: "/media" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export const SITE = {
  name: "MAXL",
  tagline: "Technology × Creativity",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://maxl.com").replace(/\/$/, ""),
};
