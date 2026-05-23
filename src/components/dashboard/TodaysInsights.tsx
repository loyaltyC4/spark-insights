import { Lock } from "lucide-react";
import { insights } from "@/lib/mock-dashboard";

const toneMap = {
  mint: "bg-mint-50 ring-mint-500/20",
  violet: "bg-violet-soft ring-violet/20",
  coral: "bg-coral-soft ring-coral/20",
} as const;

const dotMap = {
  mint: "bg-mint-500",
  violet: "bg-violet",
  coral: "bg-coral",
} as const;

export function TodaysInsights() {
  return (
    <div className="h-full rounded-[24px] bg-card p-7 ring-1 ring-black/5">
      <div className="mb-2 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Today
          </span>
          <h3 className="text-lg font-semibold">Plain-English insights</h3>
        </div>
        <span className="text-[11px] text-muted-foreground">Ranked by impact</span>
      </div>
      <p className="mb-5 text-xs text-muted-foreground">
        Free shows 1 — the rest blur until you go Pro.
      </p>

      <div className="space-y-3">
        {insights.map((it, i) => (
          <div key={i} className="relative">
            <div
              className={`flex gap-3 rounded-2xl p-4 ring-1 ${toneMap[it.tone]} ${
                it.locked ? "select-none" : ""
              }`}
            >
              <div
                className={`grid size-9 shrink-0 place-items-center rounded-xl text-base ${dotMap[it.tone]} bg-opacity-20`}
                style={{ backgroundColor: "color-mix(in oklab, currentColor 12%, transparent)" }}
              >
                {it.icon}
              </div>
              <div className={it.locked ? "blur-[3px]" : ""}>
                <p className="text-sm leading-snug">{it.title}</p>
                <span className="mt-1 inline-block text-xs font-semibold text-mint-600">
                  → {it.action}
                </span>
              </div>
            </div>
            {it.locked && (
              <button className="absolute inset-0 grid place-items-center rounded-2xl bg-card/30 backdrop-blur-[1px] transition-colors hover:bg-card/40">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-mint-950 px-3 py-1.5 text-[11px] font-bold text-primary-foreground shadow-md">
                  <Lock className="size-3" /> Unlock with Pro
                </span>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
