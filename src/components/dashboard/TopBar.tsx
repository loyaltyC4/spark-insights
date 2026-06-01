import { RefreshCw, Sparkles, Search } from "lucide-react";
import type { TimeRange } from "@/lib/mock-dashboard";
import { StreakPill } from "./PaneHeader";

interface Props {
  handle: string;
  range: TimeRange;
  onRangeChange: (r: TimeRange) => void;
}

const ranges: TimeRange[] = ["7d", "30d", "90d"];

export function TopBar({ handle, range, onRangeChange }: Props) {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-3 md:px-8">
        <div className="flex items-center gap-3">
          <div className="grid size-8 place-items-center rounded-xl bg-mint-500 text-primary-foreground shadow-[0_4px_14px_-2px_color-mix(in_oklab,var(--mint-500)_50%,transparent)]">
            <span className="font-bold">M</span>
          </div>
          <div className="leading-tight">
            <div className="text-[13px] font-semibold tracking-tight">Activity Mint</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Studio</div>
          </div>
          <span className="ml-2 hidden items-center gap-1.5 rounded-full border border-hairline bg-card px-2.5 py-1 text-[11px] font-medium text-muted-foreground sm:inline-flex">
            <span className="size-1.5 rounded-full bg-mint-500" />
            @{handle}
          </span>
        </div>

        <div className="hidden flex-1 justify-center md:flex">
          <div className="flex w-full max-w-md items-center gap-2 rounded-xl border border-hairline bg-card px-3 py-1.5 text-xs text-muted-foreground">
            <Search className="size-3.5" />
            <span className="flex-1 text-left">Search posts, hooks, audiences…</span>
            <kbd className="rounded-md border border-hairline bg-muted px-1.5 py-0.5 text-[10px] font-mono">⌘K</kbd>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <StreakPill />
          <div className="hidden gap-1 rounded-lg border border-hairline bg-card p-0.5 sm:flex">
            {ranges.map((r) => (
              <button
                key={r}
                onClick={() => onRangeChange(r)}
                className={`rounded-md px-2.5 py-1 text-[11px] font-semibold transition-colors ${
                  range === r
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
          <button className="hidden items-center gap-1.5 rounded-lg border border-hairline bg-card px-2.5 py-1.5 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground md:inline-flex">
            <RefreshCw className="size-3" /> Sync
          </button>
          <button className="inline-flex items-center gap-1.5 rounded-lg bg-mint-950 px-3 py-1.5 text-[11px] font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
            <Sparkles className="size-3" /> Upgrade
          </button>
        </div>
      </div>
    </header>
  );
}
