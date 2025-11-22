import Image from "next/image";
import Link from "next/link";
import Hero3D from "./components/Hero3D";
import medicineImg from "@/images/medicine.jpeg";
import financeImg from "@/images/finance.jpeg";
import logisticsImg from "@/images/logistics.jpeg";
import BetaModal from "./components/BetaModal";

function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border-soft)] bg-[var(--surface-1)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--surface-1)]/95 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="#" className="flex items-center gap-2 text-[var(--foreground)]">
          <div className="size-8 rounded bg-gradient-to-br from-brand-400 to-accent-500" />
          <span className="text-lg font-semibold tracking-tight">QuantumLeap</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-[var(--muted)] md:flex">
          <a href="#industries" className="transition-colors hover:text-[var(--foreground)]">Industries</a>
          <a href="#how" className="transition-colors hover:text-[var(--foreground)]">How it works</a>
          <a href="#faq" className="transition-colors hover:text-[var(--foreground)]">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#beta" className="hidden rounded-full border border-[var(--border-soft)] px-4 py-2 text-sm text-[var(--foreground)] hover:bg-[var(--surface-2)]/40 md:inline-block">Join Beta</a>
          <a href="mailto:hello@quantumleap.ai?subject=Request%20a%20Consultation" className="rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-4 py-2 text-sm font-medium text-white hover:opacity-90">Request a Consultation</a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none hero-glow absolute inset-0">
        <div className="absolute -left-40 -top-20 h-[36rem] w-[36rem] rounded-full bg-brand-300 blur-[140px] animate-float-slow" />
        <div className="absolute -right-20 top-40 h-[28rem] w-[28rem] rounded-full bg-accent-500/30 blur-[160px] animate-float-slow" />
      </div>
      <div className="container relative">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 py-24 md:grid-cols-2 md:py-28">
          <div>
            <h1 className="display text-4xl font-extrabold leading-tight tracking-tight text-[var(--foreground)] md:text-6xl animate-fade-up" style={{ animationDelay: "40ms" }}>
              Smarter decisions, beautifully delivered
          </h1>
            <p className="mt-5 max-w-xl text-lg text-[var(--muted)] animate-fade-up" style={{ animationDelay: "120ms" }}>
              QuantumLeap helps modern teams forecast, plan, and optimize with less guesswork. Clear answers. Faster progress.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <a href="mailto:hello@quantumleap.ai?subject=Request%20a%20Consultation" className="rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-3 text-sm font-medium text-white hover:opacity-90 animate-fade-up" style={{ animationDelay: "180ms" }}>
                Request a Consultation
              </a>
              <a href="#beta" className="rounded-full border border-[var(--border-soft)] px-6 py-3 text-sm text-[var(--foreground)] hover:bg-[var(--surface-2)]/40 animate-fade-up" style={{ animationDelay: "220ms" }}>
                Join Our Beta Program
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-[var(--muted)] animate-fade-up" style={{ animationDelay: "260ms" }}>
              <div className="text-sm">Trusted for R&D by teams in</div>
              <div className="flex items-center gap-4">
                <span className="text-xs tracking-wide">Medicine</span>
                <span className="text-xs tracking-wide">Finance</span>
                <span className="text-xs tracking-wide">Logistics</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="animate-fade-up" style={{ animationDelay: "140ms" }}>
              <Hero3D />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  const items = [
    { value: "50–200×", label: "faster scenario search" },
    { value: "35%", label: "lower compute cost" },
    { value: "99.95%", label: "availability SLA" },
    { value: "< 3 wks", label: "to first production result" },
  ];
  return (
    <section className="container py-10">
      <div className="grid grid-cols-2 gap-6 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-1)] p-6 shadow-[0_10px_40px_-12px_rgba(2,6,23,0.12)] md:grid-cols-4">
        {items.map((m, i) => (
          <div key={m.label} className="text-center animate-fade-up" style={{ animationDelay: `${80 + i * 80}ms` }}>
            <div className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-2xl font-semibold text-transparent md:text-3xl">
              {m.value}
            </div>
            <div className="mt-1 text-xs text-[var(--muted)]">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Industries() {
  const data = [
    {
      title: "Medicine",
      desc: "Drug discovery and patient triage with quantum-enhanced search.",
      points: ["Molecular docking", "Adaptive trial design", "Personalized care"],
				img: medicineImg,
    },
    {
      title: "Finance",
      desc: "Portfolio optimization, risk hedging, and fraud detection.",
      points: ["Monte Carlo speedups", "Risk parity", "Anomaly scoring"],
				img: financeImg,
    },
    {
      title: "Logistics",
      desc: "Routing, packing, and capacity planning at global scale.",
      points: ["VRP at speed", "Inventory forecasting", "Network resilience"],
				img: logisticsImg,
    },
  ];
  return (
    <section id="industries" className="container py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="display text-3xl font-semibold text-[var(--foreground)] md:text-4xl animate-fade-up">Built for outcomes</h2>
        <p className="mt-3 text-[var(--muted)] animate-fade-up" style={{ animationDelay: "80ms" }}>
          Start with a use-case, not infrastructure. Deploy workflows via simple APIs.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {data.map((card, i) => (
          <div key={card.title} className="group overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-1)] shadow-[0_10px_40px_-12px_rgba(2,6,23,0.12)] animate-fade-up" style={{ animationDelay: `${80 + i * 100}ms` }}>
            <div className="relative h-40">
            <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
            <div className="p-5">
              <div className="text-lg font-semibold text-[var(--foreground)]">{card.title}</div>
              <p className="mt-1 text-sm text-[var(--muted)]">{card.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                {card.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-gradient-to-r from-brand-500 to-amber-400" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: "Connect",
      desc: "Securely link data sources and objectives via the dashboard or API.",
    },
    {
      title: "Compose",
      desc: "Assemble quantum-classical pipelines with prebuilt templates.",
    },
    {
      title: "Deploy",
      desc: "Ship to production with autoscaling, monitoring, and SLA-backed uptime.",
    },
  ];
  return (
    <section id="how" className="container py-20">
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <div key={s.title} className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-1)] p-6 shadow-[0_10px_40px_-12px_rgba(2,6,23,0.12)] animate-fade-up" style={{ animationDelay: `${80 + i * 100}ms` }}>
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-brand-500 text-sm font-semibold text-white">
                {i + 1}
              </div>
              <div className="text-lg font-semibold text-[var(--foreground)]">{s.title}</div>
            </div>
            <p className="mt-3 text-sm text-[var(--muted)]">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote:
        "We cut scenario analysis from hours to minutes while improving accuracy. This changes how we invest.",
      author: "Head of Quant, Global AM",
    },
    {
      quote:
        "QuantumLeap helped shortlist drug candidates 12× faster. The API integration was straightforward.",
      author: "VP Research, Biotech",
    },
    {
      quote: "Routing optimizations saved 8% in last-mile costs across four regions.",
      author: "COO, Logistics SaaS",
    },
  ];
  return (
    <section className="container py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="display text-3xl font-semibold text-[var(--foreground)] md:text-4xl animate-fade-up">Proven impact</h2>
        <p className="mt-3 text-[var(--muted)] animate-fade-up" style={{ animationDelay: "80ms" }}>Outcomes that move KPIs, not just benchmarks.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((t, i) => (
          <div key={t.author} className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-1)] p-6 shadow-[0_10px_40px_-12px_rgba(2,6,23,0.12)] animate-fade-up" style={{ animationDelay: `${80 + i * 100}ms` }}>
            <p className="text-sm text-[var(--foreground)]">{t.quote}</p>
            <div className="mt-4 text-xs text-[var(--muted)]">{t.author}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Do I need quantum hardware?",
      a: "No. QuantumLeap runs managed backends optimized for your workload with hybrid solvers.",
    },
    {
      q: "How do you price?",
      a: "Usage-based with committed discounts. Contact sales for enterprise plans.",
    },
    {
      q: "Data security?",
      a: "SOC 2 Type II controls, regional data residency, and per-tenant isolation.",
    },
    {
      q: "Time to value?",
      a: "Most teams ship a pilot in under three weeks using templates.",
    },
  ];
  return (
    <section id="faq" className="container py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="display text-3xl font-semibold text-[var(--foreground)] md:text-4xl animate-fade-up">FAQ</h2>
        <p className="mt-3 text-[var(--muted)] animate-fade-up" style={{ animationDelay: "80ms" }}>Straight answers to common questions.</p>
      </div>
      <div className="mx-auto mt-10 max-w-3xl space-y-4">
        {faqs.map((f, i) => (
          <details key={f.q} className="group rounded-xl border border-[var(--border-soft)] bg-[var(--surface-1)] p-5 animate-fade-up" style={{ animationDelay: `${80 + i * 70}ms` }}>
            <summary className="cursor-pointer list-none text-left text-[var(--foreground)]">
              <div className="flex items-center justify-between">
                <span className="text-base font-medium">{f.q}</span>
                <span className="text-[var(--muted)] transition-transform group-open:rotate-45">+</span>
              </div>
            </summary>
            <p className="mt-3 text-sm text-[var(--muted)]">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="cta" className="container pb-24">
      <div className="overflow-hidden rounded-3xl border border-[var(--border-soft)] bg-gradient-to-r from-[var(--brand-100)] to-[var(--brand-50)] p-8 md:p-12">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="animate-fade-up">
            <h3 className="display text-2xl font-semibold text-[var(--foreground)] md:text-3xl">Be early. Lead boldly.</h3>
            <p className="mt-2 text-[var(--muted)]">
              Partner with our team to pilot Quantum AI in weeks, not quarters.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 sm:flex-row md:justify-end animate-fade-up" style={{ animationDelay: "100ms" }}>
            <a href="mailto:hello@quantumleap.ai?subject=Request%20a%20Consultation" className="rounded-full bg-brand-600 px-6 py-3 text-sm font-medium text-white hover:opacity-90">
              Request a Consultation
            </a>
            <a href="#beta" className="rounded-full border border-[var(--border-soft)] px-6 py-3 text-sm text-[var(--foreground)] hover:bg-[var(--surface-2)]/40">
              Join Our Beta Program
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--border-soft)] py-10 bg-[var(--surface-1)]">
      <div className="container flex flex-col items-center justify-between gap-6 text-sm text-[var(--muted)] md:flex-row">
        <div className="flex items-center gap-2 text-[var(--foreground)]/85">
          <div className="size-6 rounded bg-gradient-to-br from-brand-500 to-amber-400" />
          <span>QuantumLeap</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#industries" className="hover:text-[var(--foreground)]">Industries</a>
          <a href="#how" className="hover:text-[var(--foreground)]">How it works</a>
          <a href="#faq" className="hover:text-[var(--foreground)]">FAQ</a>
        </div>
        <div>© {new Date().getFullYear()} QuantumLeap</div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="font-sans">
      <BetaModal />
      <Nav />
      <Hero />
      <Metrics />
      <Industries />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
