import { kpis, type Kpi } from "@/lib/mock-dashboard";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

function fmt(k: Kpi) {
  if (k.format === "k") return k.value >= 1000 ? `${(k.value / 1000).toFixed(1)}k` : `${k.value}`;
  if (k.format === "pct") return `${k.value}%`;
  return `${k.value}`;
}

function Spark({ data, color }: { data: number[]; color: string }) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const w = 80;
  const h = 22;
  const pts = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - 1 - ((v - min) / (max - min || 1)) * (h - 2);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="opacity-90">
      <polyline fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" points={pts} />
    </svg>
  );
}

export function KpiChips() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {kpis.map((k) => {
        const Arrow = k.trend === "up" ? ArrowUpRight : ArrowDownRight;
        return (
          <button
            key={k.key}
            className="group flex items-center justify-between rounded-xl border border-hairline bg-card px-4 py-3 text-left transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-18px_rgba(0,0,0,0.18)]"
          >
            <div className="min-w-0">
              <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {k.label}
              </div>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-[22px] font-semibold tracking-tight tabular-nums">
                  {fmt(k)}
                </span>
                <span
                  className={`inline-flex items-center text-[10px] font-semibold ${
                    k.trend === "up" ? "text-mint-600" : "text-coral"
                  }`}
                >
                  <Arrow className="size-3" /> {k.delta.split(" ")[0]}
                </span>
              </div>
            </div>
            <Spark data={k.spark} color={k.color} />
          </button>
        );
      })}
    </div>
  );
}
