import { RefreshCw, Sparkles } from "lucide-react";
import type { TimeRange } from "@/lib/mock-dashboard";

interface Props {
  handle: string;
  range: TimeRange;
  onRangeChange: (r: TimeRange) => void;
}

const ranges: TimeRange[] = ["7d", "30d", "90d"];

export function TopBar({ handle, range, onRangeChange }: Props) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="grid size-8 place-items-center rounded-xl bg-mint-500 text-primary-foreground shadow-[0_4px_14px_-2px_color-mix(in_oklab,var(--mint-500)_50%,transparent)]">
            <span className="font-bold">M</span>
          </div>
          <span className="text-base font-semibold tracking-tight">Activity Mint</span>
          <span className="ml-2 hidden items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground sm:inline-flex">
            <span className="size-1.5 rounded-full bg-mint-500" />
            @{handle}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex gap-1 rounded-lg bg-muted p-1">
            {ranges.map((r) => (
              <button
                key={r}
                onClick={() => onRangeChange(r)}
                className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                  range === r
                    ? "bg-card text-foreground shadow-sm ring-1 ring-black/5"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
          <button className="hidden items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-flex">
            <RefreshCw className="size-3.5" />
            Refresh
          </button>
          <button className="inline-flex items-center gap-1.5 rounded-lg bg-mint-950 px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105">
            <Sparkles className="size-3.5" />
            Upgrade
          </button>
        </div>
      </div>
    </header>
  );
}
