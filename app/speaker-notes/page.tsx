"use client";
export default function SpeakerNotes() {
  return (
    <main className="container mx-auto max-w-3xl py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="display text-3xl font-semibold text-[var(--foreground)]">QuantumLeap Speaker Notes</h1>
        <button
          onClick={() => window.print()}
          className="rounded-full border border-[var(--border-soft)] px-4 py-2 text-sm text-[var(--foreground)] hover:bg-[var(--surface-2)]/40"
        >
          Print to PDF
        </button>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--foreground)]">5‑Minute Presentation</h2>
        <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-1)] p-5">
          <p className="text-sm text-[var(--muted)]"><span className="font-semibold text-[var(--foreground)]">00:00–00:20</span> Opening</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
            <li>We’re QuantumLeap. Quantum AI as a Service to forecast, optimize, and ship decisions faster.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-1)] p-5">
          <p className="text-sm text-[var(--muted)]"><span className="font-semibold text-[var(--foreground)]">00:20–01:10</span> Problem and outcome</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
            <li>Classical search/optimization hits limits across portfolios, molecules, and routes.</li>
            <li>QuantumLeap compresses the search space to reach better candidates sooner.</li>
            <li>Target outcomes: 50–200× faster scenario search, 35% lower compute, 99.95% SLA.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-1)] p-5">
          <p className="text-sm text-[var(--muted)]"><span className="font-semibold text-[var(--foreground)]">01:10–02:30</span> Walkthrough (site)</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
            <li>Hero: One-line value, two CTAs.</li>
            <li>Industries: Medicine, Finance, Logistics with quant-ready use cases.</li>
            <li>How it Works: Connect, Compose, Deploy.</li>
            <li>Testimonials and FAQ: address outcomes and objections.</li>
            <li>Final CTA: Request Consultation or Join Beta.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-1)] p-5">
          <p className="text-sm text-[var(--muted)]"><span className="font-semibold text-[var(--foreground)]">02:30–03:30</span> Under the hood</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
            <li>Managed hybrid solvers: quantum-inspired + quantum backends where beneficial.</li>
            <li>Vertical templates: docking, CVaR optimization, VRP heuristics with quantum kernels.</li>
            <li>API‑first, observability, regional data residency, tenant isolation.</li>
            <li>No lock‑in: data stays with you; classical fallbacks always available.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-1)] p-5">
          <p className="text-sm text-[var(--muted)]"><span className="font-semibold text-[var(--foreground)]">03:30–04:15</span> Why now</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
            <li>Hybrid delivers value today by improving exploration for hard search problems.</li>
            <li>We target time‑to‑insight and candidate quality improvements, not hype.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-1)] p-5">
          <p className="text-sm text-[var(--muted)]"><span className="font-semibold text-[var(--foreground)]">04:15–04:45</span> Model and fit</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
            <li>Usage‑based pricing; committed tiers; enterprise SLAs.</li>
            <li>Pilot: 2–3 weeks to first result with templates.</li>
            <li>Security: SOC 2 Type II, residency, isolation.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-1)] p-5">
          <p className="text-sm text-[var(--muted)]"><span className="font-semibold text-[var(--foreground)]">04:45–05:00</span> Close</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
            <li>Own outcomes in medicine, finance, or logistics? Let’s start a pilot.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-[var(--foreground)]">Cross‑Questioning Cheatsheet</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-1)] p-5">
            <p className="text-sm font-semibold text-[var(--foreground)]">What’s actually quantum?</p>
            <p className="mt-2 text-sm text-[var(--muted)]">Hybrid pipelines combine classical heuristics with quantum kernels for search/optimization; classical fallback is always available.</p>
          </div>
          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-1)] p-5">
            <p className="text-sm font-semibold text-[var(--foreground)]">Why not just classical?</p>
            <p className="mt-2 text-sm text-[var(--muted)]">For large combinatorial spaces, hybrid exploration reaches high‑quality candidates faster than classical alone.</p>
          </div>
          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-1)] p-5">
            <p className="text-sm font-semibold text-[var(--foreground)]">Do I need hardware?</p>
            <p className="mt-2 text-sm text-[var(--muted)]">No. We manage backends; you consume an API. Force classical only if preferred.</p>
          </div>
          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-1)] p-5">
            <p className="text-sm font-semibold text-[var(--foreground)]">Guaranteed speedups?</p>
            <p className="mt-2 text-sm text-[var(--muted)]">We pre‑qualify; when the problem fits, we typically see 50–200× scenario exploration speedups.</p>
          </div>
          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-1)] p-5">
            <p className="text-sm font-semibold text-[var(--foreground)]">Security and residency?</p>
            <p className="mt-2 text-sm text-[var(--muted)]">SOC 2 Type II, per‑tenant isolation, regional data residency, private networking, CMK support.</p>
          </div>
          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-1)] p-5">
            <p className="text-sm font-semibold text-[var(--foreground)]">Pricing?</p>
            <p className="mt-2 text-sm text-[var(--muted)]">Usage‑based with committed tiers; fixed‑fee pilots to de‑risk.</p>
          </div>
          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-1)] p-5">
            <p className="text-sm font-semibold text-[var(--foreground)]">Lock‑in?</p>
            <p className="mt-2 text-sm text-[var(--muted)]">Pipelines exportable, data in your storage, classical fallback ensures continuity.</p>
          </div>
          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-1)] p-5">
            <p className="text-sm font-semibold text-[var(--foreground)]">Time to value?</p>
            <p className="mt-2 text-sm text-[var(--muted)]">2–3 weeks to first production result via templates.</p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-[var(--foreground)]">30‑Second Backup Demo</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
          <li>Hero → Industries card → How it Works → FAQ → Final CTA.</li>
          <li>Reiterate pilot timeline and CTAs.</li>
        </ul>
      </section>
    </main>
  );
}


