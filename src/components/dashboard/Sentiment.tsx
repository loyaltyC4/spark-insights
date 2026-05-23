import { Lock } from "lucide-react";
import { moodDonut, sentimentQuotes, sentimentThemes } from "@/lib/mock-dashboard";

const toneBar = {
  p: "border-l-pos",
  n: "border-l-neg",
  u: "border-l-neu",
} as const;

export function SentimentBreakdown() {
  return (
    <div className="rounded-[24px] bg-card p-7 ring-1 ring-black/5">
      <div className="mb-1">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Sentiment breakdown
        </span>
        <h3 className="text-lg font-semibold">What people actually feel</h3>
      </div>
      <p className="mb-4 text-xs text-muted-foreground">Not just how many liked.</p>

      <div className="flex h-3.5 overflow-hidden rounded-full ring-1 ring-black/5">
        <div className="h-full bg-pos" style={{ width: `${moodDonut.positive}%` }} />
        <div className="h-full bg-neu" style={{ width: `${moodDonut.neutral}%` }} />
        <div className="h-full bg-neg" style={{ width: `${moodDonut.negative}%` }} />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-sm bg-pos" /> Positive {moodDonut.positive}%
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-sm bg-neu" /> Neutral {moodDonut.neutral}%
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-sm bg-neg" /> Negative {moodDonut.negative}%
        </span>
      </div>
    </div>
  );
}

export function SentimentQuotes() {
  return (
    <div className="h-full rounded-[24px] bg-card p-7 ring-1 ring-black/5">
      <div className="mb-1">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          What they're saying
        </span>
        <h3 className="text-lg font-semibold">Real quotes from your audience</h3>
      </div>
      <p className="mb-4 text-xs text-muted-foreground">Free shows 3 · Pro shows every mention.</p>

      <div className="space-y-2.5">
        {sentimentQuotes.map((q, i) => (
          <div
            key={i}
            className={`rounded-xl border-l-[3px] bg-muted/40 p-3 ${toneBar[q.tone]}`}
          >
            <p className="text-sm">"{q.text}"</p>
            <p className="mt-1 text-[11px] text-muted-foreground">{q.note}</p>
          </div>
        ))}

        <div className="relative overflow-hidden rounded-xl">
          <div className="rounded-xl border-l-[3px] border-l-neg bg-muted/40 p-3 blur-[3px] select-none">
            <p className="text-sm">"Wish the audio was louder"</p>
            <p className="mt-1 text-[11px] text-muted-foreground">Negative</p>
          </div>
          <div className="absolute inset-0 grid place-items-center bg-card/50 backdrop-blur-[1px]">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-mint-950 px-3 py-1.5 text-[11px] font-bold text-primary-foreground">
              <Lock className="size-3" /> +214 more mentions · Pro
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SentimentThemes() {
  return (
    <div className="h-full rounded-[24px] bg-card p-7 ring-1 ring-black/5">
      <div className="mb-1">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Theme tracker
        </span>
        <h3 className="text-lg font-semibold">Topics rising in your comments</h3>
      </div>
      <p className="mb-4 text-xs text-muted-foreground">Spot the questions before everyone else.</p>

      <div className="space-y-2">
        {sentimentThemes.map((t) => (
          <div
            key={t.title}
            className="flex items-center gap-3 rounded-xl bg-muted/50 p-3 ring-1 ring-black/5"
          >
            <span className="text-xl">{t.emoji}</span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold">{t.title}</p>
              <p className="text-[11px] text-muted-foreground">{t.meta}</p>
            </div>
            <span className="text-sm font-bold text-mint-600">{t.change}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-3 rounded-2xl bg-mint-50 p-4 ring-1 ring-mint-500/20">
        <span className="text-lg">💡</span>
        <p className="text-sm">
          People keep asking <b>which tools you use</b>. A "my editing setup" post could convert
          curiosity into saves.
        </p>
      </div>
    </div>
  );
}
