"use client";

import { useEffect, useState } from "react";

type BetaForm = {
  name: string;
  email: string;
  company: string;
  useCase: string;
  message: string;
};

export default function BetaModal() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<BetaForm>({
    name: "",
    email: "",
    company: "",
    useCase: "Medicine",
    message: "",
  });

  useEffect(() => {
    const parseHash = () => {
      if (typeof window === "undefined") return;
      setOpen(window.location.hash === "#beta");
    };
    parseHash();
    const onHash = () => parseHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  function close() {
    setOpen(false);
    if (typeof window !== "undefined" && window.location.hash === "#beta") {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      const res = await fetch("/api/beta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSuccess("Thanks! We’ll reach out within 24–48 hours.");
      setForm({ name: "", email: "", company: "", useCase: "Medicine", message: "" });
      setTimeout(() => close(), 1200);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Join Beta"
        className="relative w-full max-w-lg rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-1)] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]"
      >
        <div className="flex items-center justify-between border-b border-[var(--border-soft)] px-6 py-4">
          <h3 className="text-lg font-semibold text-[var(--foreground)]">Join Our Beta Program</h3>
          <button
            onClick={close}
            className="rounded-full border border-[var(--border-soft)] px-3 py-1 text-sm text-[var(--foreground)] hover:bg-[var(--surface-2)]/40"
          >
            Close
          </button>
        </div>
        <form onSubmit={onSubmit} className="space-y-4 p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <label className="text-sm text-[var(--muted)]">
              Name
              <input
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="mt-1 w-full rounded-lg border border-[var(--border-soft)] bg-[var(--surface-1)] px-3 py-2 text-[var(--foreground)] placeholder-[var(--muted)]/70 outline-none focus:ring-2 focus:ring-brand-600/40"
                placeholder="Your name"
              />
            </label>
            <label className="text-sm text-[var(--muted)]">
              Email
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="mt-1 w-full rounded-lg border border-[var(--border-soft)] bg-[var(--surface-1)] px-3 py-2 text-[var(--foreground)] placeholder-[var(--muted)]/70 outline-none focus:ring-2 focus:ring-brand-600/40"
                placeholder="you@company.com"
              />
            </label>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <label className="text-sm text-[var(--muted)]">
              Company
              <input
                value={form.company}
                onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                className="mt-1 w-full rounded-lg border border-[var(--border-soft)] bg-[var(--surface-1)] px-3 py-2 text-[var(--foreground)] placeholder-[var(--muted)]/70 outline-none focus:ring-2 focus:ring-brand-600/40"
                placeholder="Company Inc."
              />
            </label>
            <label className="text-sm text-[var(--muted)]">
              Use case
              <select
                value={form.useCase}
                onChange={(e) => setForm((f) => ({ ...f, useCase: e.target.value }))}
                className="mt-1 w-full rounded-lg border border-[var(--border-soft)] bg-[var(--surface-1)] px-3 py-2 text-[var(--foreground)] outline-none focus:ring-2 focus:ring-brand-600/40"
              >
                <option>Medicine</option>
                <option>Finance</option>
                <option>Logistics</option>
                <option>Other</option>
              </select>
            </label>
          </div>
          <label className="text-sm text-[var(--muted)] block">
            Message
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="mt-1 w-full rounded-lg border border-[var(--border-soft)] bg-[var(--surface-1)] px-3 py-2 text-[var(--foreground)] placeholder-[var(--muted)]/70 outline-none focus:ring-2 focus:ring-brand-600/40"
              placeholder="Share your objective or constraints..."
            />
          </label>
          {success && <div className="text-sm text-emerald-400">{success}</div>}
          {error && <div className="text-sm text-amber-400">{error}</div>}
          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={close}
              className="rounded-full border border-[var(--border-soft)] px-4 py-2 text-sm text-[var(--foreground)] hover:bg-[var(--surface-2)]/40"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-5 py-2 text-sm font-medium text-white hover:opacity-90 disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Request Access"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

