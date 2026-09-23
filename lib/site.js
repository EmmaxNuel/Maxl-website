// Central production URL. Set NEXT_PUBLIC_SITE_URL in Vercel project
// settings to the official MAXL domain (e.g. https://maxl.com).
// Falls back to the canonical domain for local builds.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://maxl.com"
).replace(/\/$/, "");
