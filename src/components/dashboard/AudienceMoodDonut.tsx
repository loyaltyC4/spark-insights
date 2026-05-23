import { moodDonut } from "@/lib/mock-dashboard";

export function AudienceMoodDonut() {
  const C = 2 * Math.PI * 48;
  const pos = (moodDonut.positive / 100) * C;
  const neu = (moodDonut.neutral / 100) * C;
  const neg = (moodDonut.negative / 100) * C;

  return (
    <div className="flex h-full flex-col rounded-[24px] bg-card p-7 ring-1 ring-black/5">
      <div className="mb-1">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Audience mood
        </span>
        <h3 className="text-lg font-semibold">How people feel</h3>
      </div>
      <p className="mb-4 text-xs text-muted-foreground">
        From your comments, mentions and DMs.
      </p>

      <div className="flex flex-1 items-center justify-center">
        <svg width="170" height="170" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="48" fill="none" stroke="var(--muted)" strokeWidth="14" />
          <circle
            cx="60"
            cy="60"
            r="48"
            fill="none"
            stroke="var(--pos)"
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray={`${pos} ${C - pos}`}
            transform="rotate(-90 60 60)"
          />
          <circle
            cx="60"
            cy="60"
            r="48"
            fill="none"
            stroke="var(--neu)"
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray={`${neu} ${C - neu}`}
            transform={`rotate(${-90 + (moodDonut.positive / 100) * 360} 60 60)`}
          />
          <circle
            cx="60"
            cy="60"
            r="48"
            fill="none"
            stroke="var(--neg)"
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray={`${neg} ${C - neg}`}
            transform={`rotate(${-90 + ((moodDonut.positive + moodDonut.neutral) / 100) * 360} 60 60)`}
          />
          <text x="60" y="58" textAnchor="middle" fontSize="22" fontWeight="800" fill="currentColor">
            {moodDonut.positive}%
          </text>
          <text x="60" y="74" textAnchor="middle" fontSize="8" fill="var(--muted-foreground)">
            POSITIVE 🙂
          </text>
        </svg>
      </div>

      <div className="mt-4 space-y-2 text-sm">
        <Row color="var(--pos)" label="Positive" value={`${moodDonut.positive}%`} />
        <Row color="var(--neu)" label="Neutral" value={`${moodDonut.neutral}%`} />
        <Row color="var(--neg)" label="Negative" value={`${moodDonut.negative}%`} />
      </div>
    </div>
  );
}

function Row({ color, label, value }: { color: string; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="size-2.5 rounded-sm" style={{ backgroundColor: color }} />
      <span className="text-muted-foreground">{label}</span>
      <b className="ml-auto tabular-nums">{value}</b>
    </div>
  );
}
