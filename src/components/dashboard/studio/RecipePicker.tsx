import { useState } from "react";
import { recipes, type Recipe } from "@/lib/mock-dashboard";

interface Props {
  selected: string;
  onSelect: (id: string) => void;
}

const accentMap: Record<Recipe["accent"], string> = {
  mint: "from-mint-50 to-card",
  amber: "from-amber-soft to-card",
  violet: "from-violet-soft to-card",
  coral: "from-coral-soft to-card",
  sky: "from-sky-soft to-card",
};

const dotMap: Record<Recipe["accent"], string> = {
  mint: "bg-mint-500",
  amber: "bg-amber",
  violet: "bg-violet",
  coral: "bg-coral",
  sky: "bg-sky",
};

export function RecipePicker({ selected, onSelect }: Props) {
  const [hover, setHover] = useState<string | null>(null);
  return (
    <div>
      <div className="mb-3 flex items-end justify-between">
        <div>
          <div className="eyebrow mb-1">Start from a winning recipe</div>
          <h3 className="text-[17px] font-semibold tracking-tight">
            Frameworks tuned to <span className="font-serif italic">your</span> audience
          </h3>
        </div>
        <button className="text-[11px] font-semibold text-muted-foreground hover:text-foreground">
          View all →
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
        {recipes.map((r) => {
          const isActive = selected === r.id;
          const isHover = hover === r.id;
          return (
            <button
              key={r.id}
              onClick={() => onSelect(r.id)}
              onMouseEnter={() => setHover(r.id)}
              onMouseLeave={() => setHover(null)}
              className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br p-4 text-left transition-all ${
                accentMap[r.accent]
              } ${
                isActive
                  ? "border-foreground shadow-[0_12px_32px_-16px_rgba(0,0,0,0.22)]"
                  : "border-hairline hover:-translate-y-0.5 hover:border-foreground/30"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`size-1.5 rounded-full ${dotMap[r.accent]}`} />
                <span className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {r.format}
                </span>
              </div>
              <div className="mt-3 font-serif text-[22px] leading-none">{r.name}</div>
              <div className="mt-4 flex flex-wrap gap-1">
                {r.beats.map((b) => (
                  <span
                    key={b}
                    className="rounded-md border border-hairline bg-card/70 px-1.5 py-0.5 text-[10px] font-medium text-foreground/70"
                  >
                    {b}
                  </span>
                ))}
              </div>
              <div className="mt-4 border-t border-hairline pt-3">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Best for
                </div>
                <div className="text-[11px] font-semibold">{r.bestFor}</div>
              </div>
              <div
                className={`mt-2 flex items-center gap-1 text-[10px] font-semibold text-mint-600 transition-opacity ${
                  isHover || isActive ? "opacity-100" : "opacity-0"
                }`}
              >
                ✦ {r.signal}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
