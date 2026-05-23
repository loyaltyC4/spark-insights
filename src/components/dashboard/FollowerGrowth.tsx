import { followerGrowth } from "@/lib/mock-dashboard";

export function FollowerGrowth() {
  const values = followerGrowth.map((d) => d.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const w = 600;
  const h = 140;

  const points = followerGrowth.map((d, i) => {
    const x = 10 + (i / (followerGrowth.length - 1)) * (w - 20);
    const y = h - 16 - ((d.value - min) / (max - min)) * (h - 32);
    return { x, y, ...d };
  });
  const linePath = points.map((p) => `${p.x},${p.y}`).join(" ");
  const areaPath = `${points[0].x},${h - 6} ${linePath} ${points[points.length - 1].x},${h - 6}`;

  const net = values[values.length - 1] - values[0];

  return (
    <div className="rounded-[24px] bg-card p-7 ring-1 ring-black/5">
      <div className="mb-1 flex items-end justify-between">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Follower growth
          </span>
          <h3 className="text-lg font-semibold">Last 8 weeks</h3>
        </div>
        <span className="text-sm font-bold text-mint-600">+{net.toLocaleString()} net</span>
      </div>
      <p className="mb-4 text-xs text-muted-foreground">
        Free shows 8 weeks · Pro shows all-time.
      </p>

      <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
        <defs>
          <linearGradient id="fg-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--mint-500)" stopOpacity="0.3" />
            <stop offset="1" stopColor="var(--mint-500)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon fill="url(#fg-area)" points={areaPath} />
        <polyline
          fill="none"
          stroke="var(--mint-500)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={linePath}
        />
        <circle cx={points[points.length - 1].x} cy={points[points.length - 1].y} r="5" fill="var(--mint-500)" />
      </svg>

      <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
        {followerGrowth.map((d) => (
          <span key={d.week}>{d.week}</span>
        ))}
      </div>
    </div>
  );
}
