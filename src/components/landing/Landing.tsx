import { Link } from "@tanstack/react-router";
import { Sparkles, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlatformPicker } from "@/components/landing/PlatformPicker";
import { ScrollFeatureShowcase } from "@/components/landing/ScrollFeatureShowcase";
import heroDoodle from "@/assets/doodles/hero-scene.png";

const PLANS = [
  {
    name: "Free",
    price: "$0",
    sub: "Forever",
    features: [
      "1 social account",
      "7-day insights",
      "Sentiment & top posts",
      "Daily quests",
    ],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    sub: "per month",
    features: [
      "5 accounts, all platforms",
      "90-day insights + trends",
      "AI post ideas & captions",
      "Audience personas",
      "Streaks & badges",
    ],
    cta: "Go Pro",
    highlight: true,
  },
  {
    name: "Premium",
    price: "$99+",
    sub: "per month",
    features: [
      "Unlimited accounts",
      "Competitor benchmarks",
      "Weekly AI strategy memo",
      "Priority scrapers",
      "API & exports",
    ],
    cta: "Talk to us",
    highlight: false,
  },
];

export function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3 md:px-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-xl bg-mint-950 text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="text-base font-semibold tracking-tight">Activity Mint</span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#how" className="hover:text-foreground">How it works</a>
            <a href="#pricing" className="hover:text-foreground">Pricing</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              to="/dashboard"
              className="hidden text-sm font-medium text-muted-foreground hover:text-foreground sm:inline"
            >
              Sign in
            </Link>
            <Button asChild size="sm" className="rounded-full bg-mint-950 hover:bg-mint-950/90">
              <a href="#get-started">Get started</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="bg-mesh absolute inset-0 opacity-60" aria-hidden />
        <div className="relative mx-auto grid max-w-[1200px] gap-10 px-5 pb-16 pt-12 md:grid-cols-12 md:px-8 md:pb-24 md:pt-20">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              Powered by Lovable AI · live scrapers
            </div>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Your social media,{" "}
              <span className="relative inline-block">
                <span className="relative z-10">freshly minted</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded bg-mint-100 md:h-4"
                />
              </span>{" "}
              every morning.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Activity Mint turns Instagram, Facebook, Reddit and LinkedIn into a
              dashboard you'll actually want to open. Sentiment, personas, post
              ideas and gamified streaks — built on real scraped data, not
              vibes.
            </p>

            <div className="mt-8">
              <PlatformPicker />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber text-amber" />
                ))}
                <span className="ml-1 font-medium text-foreground">4.9</span>
                <span>from 1,200+ creators</span>
              </div>
              <div className="hidden h-3 w-px bg-border sm:block" />
              <span>No card · cancel anytime</span>
            </div>
          </div>

          <div className="relative md:col-span-5">
            <div className="animate-float">
              <img
                src={heroDoodle}
                alt="A friendly character holding a magnifying glass over a social feed"
                width={1024}
                height={960}
                className="mx-auto w-full max-w-[440px]"
              />
            </div>
            <div className="absolute -left-2 top-6 hidden rotate-[-8deg] rounded-2xl bg-sticky-yellow px-3 py-2 text-xs font-medium shadow-sm md:block">
              ✨ +312 new fans this week
            </div>
            <div className="absolute -right-2 bottom-10 hidden rotate-[6deg] rounded-2xl bg-sticky-green px-3 py-2 text-xs font-medium shadow-sm md:block">
              😍 92% joyful comments
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y bg-card/50">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-8 text-center md:grid-cols-4 md:px-8">
          {[
            ["12M+", "comments analyzed"],
            ["180k", "creators tracked"],
            ["4", "social platforms"],
            ["<30s", "to first insight"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="text-2xl font-semibold tracking-tight md:text-3xl">{n}</div>
              <div className="mt-1 text-xs text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-primary">
            Everything you need
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            One dashboard. Six superpowers.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Drawn by hand, powered by AI. Each tile is a tool your competitors
            haven't figured out yet.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="group relative overflow-hidden rounded-3xl border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_oklch(0.27_0.05_185/0.25)]"
            >
              <div className={`mb-4 grid h-40 place-items-center rounded-2xl ${f.bg}`}>
                <img
                  src={f.img}
                  alt=""
                  loading="lazy"
                  width={768}
                  height={768}
                  className="h-32 w-32 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className={`text-[11px] font-semibold uppercase tracking-widest ${f.chip}`}>
                {f.tag}
              </div>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-y bg-card/40">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-primary">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              From handle to insights in 3 sips of coffee.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Drop your @",
                b: "Pick Instagram, Facebook, Reddit or LinkedIn and paste your handle. That's it.",
              },
              {
                n: "02",
                t: "We scrape, AI thinks",
                b: "Live scrapers pull every post, comment and DM. Lovable AI scores sentiment and finds patterns.",
              },
              {
                n: "03",
                t: "Open. Act. Repeat.",
                b: "Get a fresh dashboard each morning with quests, post ideas and the one thing to do today.",
              },
            ].map((s) => (
              <div key={s.n} className="relative rounded-3xl border bg-card p-7">
                <div className="text-5xl font-semibold tracking-tight text-mint-100">{s.n}</div>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-primary">Pricing</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Start free. Upgrade when you're addicted.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={[
                "relative rounded-3xl border bg-card p-7",
                p.highlight
                  ? "border-mint-950 shadow-[0_30px_80px_-40px_oklch(0.27_0.05_185/0.5)] md:-translate-y-2"
                  : "",
              ].join(" ")}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-mint-950 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground">
                  Most loved
                </div>
              )}
              <div className="text-sm font-semibold tracking-tight">{p.name}</div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">{p.price}</span>
                <span className="text-sm text-muted-foreground">/ {p.sub}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={[
                  "mt-7 h-11 w-full rounded-2xl text-base font-semibold",
                  p.highlight
                    ? "bg-mint-950 text-primary-foreground hover:bg-mint-950/90"
                    : "bg-background text-foreground hover:bg-muted",
                ].join(" ")}
                variant={p.highlight ? "default" : "outline"}
              >
                <a href="#get-started">{p.cta}</a>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-[1100px] overflow-hidden rounded-[2rem] border bg-mint-950 px-6 py-14 text-center text-primary-foreground md:px-12 md:py-20">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Stop guessing. Start minting insights.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/70">
            Join 180,000+ creators who check Activity Mint before their inbox.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-2xl bg-primary px-6 text-base font-semibold text-mint-950 hover:bg-primary/90"
            >
              <a href="#get-started">Mint my dashboard</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-2xl border-primary-foreground/20 bg-transparent px-6 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link to="/dashboard">See the demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted-foreground md:flex-row md:px-8">
          <div className="flex items-center gap-2">
            <div className="grid h-6 w-6 place-items-center rounded-md bg-mint-950 text-primary-foreground">
              <Sparkles className="h-3 w-3" />
            </div>
            <span className="font-medium text-foreground">Activity Mint</span>
            <span className="ml-2">© {new Date().getFullYear()}</span>
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
