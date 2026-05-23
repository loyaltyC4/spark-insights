import { Lock } from "lucide-react";
import { competitorPreview } from "@/lib/mock-dashboard";

export function CompetitorsLocked() {
  return (
    <div className="relative overflow-hidden rounded-[24px] bg-card p-7 ring-1 ring-black/5">
      <div className="mb-1">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Competitor tracking
        </span>
        <h3 className="text-lg font-semibold">🔭 Benchmark, learn, find the gaps</h3>
      </div>
      <p className="mb-6 text-xs text-muted-foreground">
        See their best posts, posting times, mood — and the gaps you can win.
      </p>

      <div className="grid gap-3 blur-[3px] opacity-70 select-none sm:grid-cols-4">
        {competitorPreview.kpis.map((k) => (
          <div key={k.label} className="rounded-2xl bg-muted/50 p-4 ring-1 ring-black/5">
            <div className="text-[11px] text-muted-foreground">{k.label}</div>
            <div className="mt-1 text-xl font-bold tabular-nums">{k.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-2 blur-[3px] opacity-70 select-none">
        <div className="flex items-center gap-3 rounded-xl bg-muted/50 p-3">
          <span className="text-xl">🎬</span>
          <p className="flex-1 text-sm font-semibold">Their top post</p>
          <span className="text-sm font-bold text-mint-600">96</span>
        </div>
        <div className="flex items-center gap-3 rounded-xl bg-muted/50 p-3">
          <span className="text-xl">🎬</span>
          <p className="flex-1 text-sm font-semibold">Second</p>
          <span className="text-sm font-bold text-mint-600">90</span>
        </div>
      </div>

      <div className="absolute inset-0 grid place-items-center bg-card/50 backdrop-blur-[2px] p-6">
        <div className="max-w-sm rounded-3xl bg-card p-6 text-center shadow-xl ring-1 ring-black/10">
          <div className="mx-auto mb-3 grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-amber to-coral text-primary-foreground shadow-md">
            <Lock className="size-5" />
          </div>
          <p className="text-base font-bold">Track up to 10 competitors</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Their best posts, posting times, audience mood and the content gaps you can own — refreshed
            daily.
          </p>
          <button className="mt-4 rounded-xl bg-mint-950 px-4 py-2 text-xs font-bold text-primary-foreground transition-transform hover:scale-105">
            Go Pro — $9/mo
          </button>
        </div>
      </div>
    </div>
  );
}
