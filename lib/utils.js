export function cn(...parts) {
  return parts.filter(Boolean).join(" ");
}

export function slugify(s) {
  return String(s).toLowerCase().trim().replace(/[^a-z0-9]+/g, "-");
}
