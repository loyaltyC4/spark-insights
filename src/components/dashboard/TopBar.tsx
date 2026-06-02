import { Plus, RefreshCw, ChevronDown } from "lucide-react";
import type { TimeRange } from "@/lib/mock-dashboard";
import { profileData } from "@/lib/mock-dashboard";

interface Props {
  handle: string;
  range: TimeRange;
  onRangeChange: (r: TimeRange) => void;
  onQuickCreate?: () => void;
}

const ranges: TimeRange[] = ["7d", "30d", "90d"];

export function TopBar({ handle, range, onRangeChange, onQuickCreate }: Props) {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-2.5 md:px-8">
        {/* Brand + workspace switcher */}
        <div className="flex items-center gap-3">
          <div className="grid size-8 place-items-center rounded-xl bg-mint-500 text-primary-foreground shadow-[0_4px_14px_-2px_color-mix(in_oklab,var(--mint-500)_50%,transparent)]">
            <span className="font-bold">M</span>
          </div>
          <button className="flex items-center gap-2.5 rounded-xl border border-hairline bg-card px-2.5 py-1.5 text-left transition-colors hover:bg-muted">
            <img
              src={profileData.avatar}
              alt={handle}
              className="size-7 rounded-lg object-cover"
            />
            <div className="min-w-0 leading-tight">
              <div className="flex items-center gap-1.5 text-[12px] font-semibold">
                @{handle}
                <span className="size-1.5 rounded-full bg-mint-500" title="Active" />
              </div>
              <div className="text-[10px] text-muted-foreground">
                {profileData.followers} followers · Brand DNA
              </div>
            </div>
            <ChevronDown className="ml-1 size-3.5 text-muted-foreground" />
          </button>
        </div>

        {/* Range + Sync + Quick create */}
        <div className="flex items-center gap-2">
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
          <button
            onClick={onQuickCreate}
            className="inline-flex items-center gap-1.5 rounded-lg bg-foreground px-3 py-1.5 text-[12px] font-semibold text-background transition-transform hover:scale-[1.02]"
          >
            <Plus className="size-3.5" /> Quick create
          </button>
        </div>
      </div>
    </header>
  );
}
