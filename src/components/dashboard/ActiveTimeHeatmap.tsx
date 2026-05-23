import { buildHeatmap, heatLabels } from "@/lib/mock-dashboard";

const grid = buildHeatmap();

export function ActiveTimeHeatmap() {
  return (
    <div className="rounded-[24px] bg-card p-7 ring-1 ring-black/5">
      <div className="mb-1">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          When your audience is awake
        </span>
        <h3 className="text-lg font-semibold">Post into the bright zones</h3>
      </div>
      <p className="mb-5 text-xs text-muted-foreground">
        Darker mint = more followers active. Best: Thursday & Sunday, 7–9pm.
      </p>

      <div className="grid gap-1" style={{ gridTemplateColumns: "auto repeat(12, 1fr)" }}>
        <div />
        {heatLabels.hours.map((h) => (
          <div key={h} className="text-center text-[9px] text-muted-foreground">
            {h}
          </div>
        ))}
        {heatLabels.days.map((d, di) => (
          <div key={d} className="contents">
            <div className="flex items-center pr-1 text-[10px] font-medium text-muted-foreground">
              {d}
            </div>
            {grid[di].map((v, hi) => (
              <div
                key={hi}
                className="aspect-square rounded-[5px] transition-transform hover:scale-110"
                style={{
                  backgroundColor: `color-mix(in oklab, var(--mint-500) ${Math.round(v * 100)}%, var(--muted))`,
                }}
                title={`${d} ${heatLabels.hours[hi]} · ${Math.round(v * 100)}%`}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="mt-5 flex gap-3 rounded-2xl bg-mint-50 p-4 ring-1 ring-mint-500/20">
        <span className="text-lg">⏰</span>
        <p className="text-sm">
          <b>Best window:</b> Thursday & Sunday, 7–9pm. Worst: weekday mornings.
        </p>
      </div>
    </div>
  );
}
