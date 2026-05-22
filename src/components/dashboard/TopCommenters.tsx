import { commenters } from "@/lib/mock-dashboard";

const rankColor = ["text-mint-600", "text-rising", "text-foreground/60", "text-foreground/40"];

export function TopCommenters() {
  return (
    <div className="rounded-[24px] bg-card p-7 ring-1 ring-black/5">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            The High Council
          </span>
          <h3 className="mt-1 text-lg font-semibold">Top Commenters</h3>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          Loyalty
        </span>
      </div>

      <ul className="space-y-3">
        {commenters.map((c, i) => (
          <li
            key={c.handle}
            className="flex items-center gap-3 rounded-2xl border border-black/5 bg-muted/40 p-3 transition-colors hover:bg-muted"
          >
            <span className={`w-5 text-center text-xs font-bold tabular-nums ${rankColor[i]}`}>
              #{c.rank}
            </span>
            <img
              src={c.avatar}
              alt={c.handle}
              width={40}
              height={40}
              loading="lazy"
              className="size-10 rounded-full object-cover ring-1 ring-black/5"
            />
            <div className="flex-1">
              <p className="text-sm font-semibold">@{c.handle}</p>
              <p className="text-[11px] text-muted-foreground">
                {c.count} comments · 100% positive
              </p>
            </div>
            <div className="h-1 w-16 overflow-hidden rounded-full bg-black/5">
              <div
                className="h-full bg-mint-500"
                style={{ width: `${(c.count / 42) * 100}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
