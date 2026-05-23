import { rankedPosts } from "@/lib/mock-dashboard";

export function RankedPosts() {
  return (
    <div className="h-full rounded-[24px] bg-card p-7 ring-1 ring-black/5">
      <div className="mb-1">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Your posts, ranked
        </span>
        <h3 className="text-lg font-semibold">By Mint Impact Score</h3>
      </div>
      <p className="mb-4 text-xs text-muted-foreground">Reach × intent (saves & shares).</p>

      <div className="space-y-2">
        {rankedPosts.map((p) => (
          <div
            key={p.n}
            className="flex items-center gap-3 rounded-xl bg-muted/50 p-3 ring-1 ring-black/5 transition-colors hover:bg-muted"
          >
            <span className="grid size-6 place-items-center rounded-md bg-card text-[11px] font-bold ring-1 ring-black/5">
              {p.n}
            </span>
            <span className="text-xl">{p.emoji}</span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{p.title}</p>
              <p className="text-[11px] text-muted-foreground">{p.meta}</p>
            </div>
            <span className="text-sm font-bold text-mint-600 tabular-nums">{p.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
