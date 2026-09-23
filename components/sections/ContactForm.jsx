"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const REASONS = ["General", "Product — Manji", "Product — ChurchCast", "Partnership", "Media", "Careers", "Other"];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", org: "", reason: "General", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  function validate() {
    const e = {};
    if (form.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Please enter a valid email address.";
    if (form.message.trim().length < 10) e.message = "Please tell us a little more (10+ characters).";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onSubmit(ev) {
    ev.preventDefault();
    if (!validate()) return;
    setSending(true);
    // No backend wired yet — simulate submission and expose payload for future API route.
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 900);
  }

  if (sent) {
    return (
      <div className="glass rounded-3xl p-10 text-center ring-line" role="status">
        <CheckCircle2 className="mx-auto h-12 w-12 text-[#38bdf8]" />
        <h2 className="font-display mt-4 text-2xl font-black">Message received.</h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[var(--ink-soft)]">
          Thanks, {form.name.split(" ")[0] || "there"} — your note about “{form.reason}” is with the MAXL team. We&apos;ll reply to {form.email} soon.
        </p>
      </div>
    );
  }

  const field = "w-full rounded-xl border border-[var(--line)] bg-[var(--bg-elev)] px-4 py-3 text-sm outline-none transition focus:border-[#38bdf8] placeholder:text-[var(--ink-soft)]";

  return (
    <form onSubmit={onSubmit} noValidate className="glass rounded-3xl p-7 ring-line sm:p-9" aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-xs font-bold tracking-widest">NAME *</label>
          <input id="cf-name" value={form.name} onChange={set("name")} placeholder="Ada Lovelace" className={field} autoComplete="name" />
          {errors.name && <p className="mt-1.5 text-xs text-red-500" role="alert">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-xs font-bold tracking-widest">EMAIL *</label>
          <input id="cf-email" type="email" value={form.email} onChange={set("email")} placeholder="you@studio.com" className={field} autoComplete="email" />
          {errors.email && <p className="mt-1.5 text-xs text-red-500" role="alert">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="cf-org" className="mb-1.5 block text-xs font-bold tracking-widest">COMPANY / ORGANIZATION</label>
          <input id="cf-org" value={form.org} onChange={set("org")} placeholder="Studio, church, team…" className={field} autoComplete="organization" />
        </div>
        <div>
          <label htmlFor="cf-reason" className="mb-1.5 block text-xs font-bold tracking-widest">REASON</label>
          <select id="cf-reason" value={form.reason} onChange={set("reason")} className={field}>
            {REASONS.map((r) => <option key={r}>{r}</option>)}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-msg" className="mb-1.5 block text-xs font-bold tracking-widest">MESSAGE *</label>
          <textarea id="cf-msg" rows={6} value={form.message} onChange={set("message")} placeholder="Tell us what you want to build…" className={field + " resize-y"} />
          {errors.message && <p className="mt-1.5 text-xs text-red-500" role="alert">{errors.message}</p>}
        </div>
      </div>
      <button
        type="submit"
        disabled={sending}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#155eef] to-[#2563eb] px-7 py-3.5 text-sm font-bold tracking-widest text-white transition disabled:opacity-60 sm:w-auto"
      >
        <Send className="h-4 w-4" /> {sending ? "SENDING…" : "SEND MESSAGE"}
      </button>
      <p className="mt-4 text-xs text-[var(--ink-soft)]">We only use your details to respond. No newsletters, no sharing.</p>
    </form>
  );
}
