import { useEffect, useRef, useState } from "react";
import brainDoodle from "@/assets/doodles/sentiment-brain.png";
import personasDoodle from "@/assets/doodles/personas.png";
import ideasDoodle from "@/assets/doodles/ideas-bulb.png";
import rocketDoodle from "@/assets/doodles/rocket-growth.png";
import phoneDoodle from "@/assets/doodles/phone-hearts.png";
import trophyDoodle from "@/assets/doodles/trophy-streak.png";

type Feature = {
  tag: string;
  title: string;
  body: string;
  img: string;
  bg: string;
  chip: string;
  sticky?: { text: string; tone: string; rotate: string; pos: string };
};

const FEATURES: Feature[] = [
  {
    tag: "Sentiment AI",
    title: "Decode every comment, DM and mention",
    body: "Joy, curiosity, hype or concern — Lovable AI scores every interaction so you stop guessing how a post landed.",
    img: brainDoodle,
    bg: "bg-violet-soft",
    chip: "text-violet",
    sticky: { text: "😍 92% joyful today", tone: "bg-sticky-green", rotate: "-rotate-3", pos: "-left-3 top-6" },
  },
  {
    tag: "Audience personas",
    title: "Meet the humans behind your numbers",
    body: "We cluster your followers into living personas — the night-owl creator, the weekend shopper, the loyal super-fan.",
    img: personasDoodle,
    bg: "bg-coral-soft",
    chip: "text-coral",
    sticky: { text: "👥 4 new personas", tone: "bg-sticky-peach", rotate: "rotate-2", pos: "-right-3 top-10" },
  },
  {
    tag: "Content Lab",
    title: "Post ideas that actually convert",
    body: "AI mines what worked for you and your niche, then hands you hooks, captions and best post times — ready to shoot.",
    img: ideasDoodle,
    bg: "bg-amber-soft",
    chip: "text-amber",
    sticky: { text: "💡 12 ideas queued", tone: "bg-sticky-yellow", rotate: "-rotate-2", pos: "-left-2 bottom-10" },
  },
  {
    tag: "Growth tracking",
    title: "See growth as a story, not a chart",
    body: "Streaks, milestones and weekly recaps that make your progress feel earned — not just plotted on a graph.",
    img: rocketDoodle,
    bg: "bg-sky-soft",
    chip: "text-sky",
    sticky: { text: "🚀 +312 this week", tone: "bg-sticky-green", rotate: "rotate-3", pos: "-right-2 bottom-8" },
  },
  {
    tag: "Live scraping",
    title: "Real data, every refresh",
    body: "Built on enterprise scrapers — stories, highlights, posts, comments and hashtags pulled fresh, never cached stale.",
    img: phoneDoodle,
    bg: "bg-accent",
    chip: "text-primary",
    sticky: { text: "⚡ live · 2s ago", tone: "bg-sticky-yellow", rotate: "-rotate-2", pos: "-left-3 top-8" },
  },
  {
    tag: "Gamified",
    title: "Make analytics a daily ritual",
    body: "Quests, levels and badges turn checking insights from a chore into the most satisfying minute of your morning.",
    img: trophyDoodle,
    bg: "bg-sticky-green",
    chip: "text-mint-600",
    sticky: { text: "🏆 7-day streak", tone: "bg-sticky-peach", rotate: "rotate-2", pos: "-right-3 bottom-12" },
  },
];

export function ScrollFeatureShowcase() {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(i);
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const current = FEATURES[active];

  return (
    <section
      id="features"
      className="relative border-y bg-card/30"
      aria-label="Feature showcase"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-primary">
            Everything you need
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            One dashboard. Six superpowers.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Scroll to meet each one — drawn by hand, powered by AI.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-12 md:gap-12">
          {/* Sticky illustration */}
          <div className="md:col-span-5">
            <div className="sticky top-24">
              <div
                className={[
                  "relative grid aspect-square w-full place-items-center overflow-hidden rounded-[2rem] border transition-colors duration-700",
                  current.bg,
                ].join(" ")}
              >
                {FEATURES.map((f, i) => (
                  <img
                    key={f.tag}
                    src={f.img}
                    alt={f.title}
                    width={768}
                    height={768}
                    className={[
                      "absolute inset-0 m-auto h-[70%] w-[70%] object-contain transition-all duration-700 ease-out",
                      i === active
                        ? "scale-100 opacity-100 blur-0"
                        : "scale-95 opacity-0 blur-sm",
                    ].join(" ")}
                  />
                ))}

                {current.sticky && (
                  <div
                    key={current.tag}
                    className={[
                      "absolute z-10 animate-fade-in rounded-2xl px-3 py-2 text-xs font-medium shadow-md",
                      current.sticky.tone,
                      current.sticky.rotate,
                      current.sticky.pos,
                    ].join(" ")}
                  >
                    {current.sticky.text}
                  </div>
                )}

                {/* progress dots */}
                <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                  {FEATURES.map((_, i) => (
                    <span
                      key={i}
                      className={[
                        "h-1.5 rounded-full transition-all duration-500",
                        i === active ? "w-6 bg-mint-950" : "w-1.5 bg-mint-950/20",
                      ].join(" ")}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling feature list */}
          <div className="md:col-span-7">
            <ol className="space-y-24 md:space-y-40">
              {FEATURES.map((f, i) => (
                <li
                  key={f.tag}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  className="min-h-[40vh]"
                >
                  <div
                    className={[
                      "transition-all duration-500",
                      i === active ? "opacity-100" : "opacity-40",
                    ].join(" ")}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-muted-foreground">
                        0{i + 1} / 0{FEATURES.length}
                      </span>
                      <span className={`text-[11px] font-semibold uppercase tracking-widest ${f.chip}`}>
                        {f.tag}
                      </span>
                    </div>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
                      {f.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
                      {f.body}
                    </p>
                    {/* mobile preview */}
                    <div className={`mt-6 grid h-44 place-items-center rounded-2xl md:hidden ${f.bg}`}>
                      <img src={f.img} alt="" className="h-32 w-32 object-contain" />
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
