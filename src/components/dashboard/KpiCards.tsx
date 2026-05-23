import { kpis, type Kpi } from "@/lib/mock-dashboard";
import { TrendingUp, TrendingDown } from "lucide-react";

function fmtValue(k: Kpi) {
  if (k.format === "k") return k.value >= 1000 ? `${(k.value / 1000).toFixed(1)}k` : `${k.value}`;
  if (k.format === "pct") return `${k.value}%`;
  return `${k.value}`;
}

function Sparkline({ data, color }: { data: number[]; color: string }) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const w = 120;
  const h = 32;
  const pts = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - 2 - ((v - min) / (max - min || 1)) * (h - 4);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  return (
    <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className="mt-2">
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={pts}
      />
    </svg>
  );
}

export function KpiCards() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {kpis.map((k) => {
        const Trend = k.trend === "up" ? TrendingUp : TrendingDown;
        return (
          <div
            key={k.key}
            className="rounded-[20px] bg-card p-5 ring-1 ring-black/5 transition-shadow hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.12)]"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">{k.label}</span>
              <span className="text-base">{k.emoji}</span>
            </div>
            <div className="mt-2 text-[26px] font-bold tabular-nums tracking-tight">
              {fmtValue(k)}
            </div>
            <div
              className={`flex items-center gap-1 text-[11px] font-semibold ${
                k.trend === "up" ? "text-mint-600" : "text-coral"
              }`}
            >
              <Trend className="size-3" /> {k.delta}
            </div>
            <Sparkline data={k.spark} color={k.color} />
          </div>
        );
      })}
    </div>
  );
}
