"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // next-themes requires client mount check to avoid hydration mismatch
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return <span className="h-9 w-9 rounded-full ring-line" aria-hidden />;
  }
  const isDark = resolvedTheme === "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="group relative flex h-9 w-9 items-center justify-center rounded-full ring-line glass transition hover:scale-105"
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#155eef]/20 to-[#38bdf8]/10 opacity-0 transition group-hover:opacity-100" />
      {isDark ? <Sun className="h-4 w-4 text-[#60a5fa]" /> : <Moon className="h-4 w-4 text-[#155eef]" />}
    </button>
  );
}
