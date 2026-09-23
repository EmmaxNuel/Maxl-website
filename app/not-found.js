import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-4 pb-24 pt-44 text-center sm:px-6">
      <p className="font-display text-xs font-bold tracking-[0.3em] text-[#38bdf8]">404</p>
      <h1 className="font-display mt-3 text-4xl font-black sm:text-6xl">Lost in the blueprint.</h1>
      <p className="mt-4 text-[var(--ink-soft)]">That page doesn&apos;t exist — but what&apos;s next does.</p>
      <Link href="/" className="mt-8 rounded-full bg-gradient-to-r from-[#155eef] to-[#2563eb] px-7 py-3 text-sm font-bold tracking-widest text-white">
        BACK HOME
      </Link>
    </div>
  );
}
