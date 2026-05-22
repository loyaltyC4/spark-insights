import type { TimeRange } from "@/lib/mock-dashboard";
import { sentimentByRange } from "@/lib/mock-dashboard";

export function SentimentVibe({ range }: { range: TimeRange }) {
  const s = sentimentByRange[range];
  return (
    <div className="flex h-full flex-col justify-between rounded-[24px] bg-card p-7 ring-1 ring-black/5">
      <div>
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Vibe Check
        </span>
        <h3 className="mt-1 text-lg font-semibold">Community Sentiment</h3>
      </div>

      <div className="mt-6 space-y-5">
        <div>
          <div className="mb-2 flex h-3 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full bg-mint-500" style={{ width: `${s.joy}%` }} />
            <div className="h-full bg-rising" style={{ width: `${s.curiosity}%` }} />
            <div className="h-full bg-muted-foreground/40" style={{ width: `${s.concern}%` }} />
          </div>
          <div className="flex justify-between text-[11px] font-medium text-muted-foreground tabular-nums">
            <span>
              <span className="mr-1 inline-block size-1.5 rounded-full bg-mint-500 align-middle" />
              {s.joy}% Joy
            </span>
            <span>
              <span className="mr-1 inline-block size-1.5 rounded-full bg-rising align-middle" />
              {s.curiosity}% Curiosity
            </span>
            <span>
              <span className="mr-1 inline-block size-1.5 rounded-full bg-muted-foreground/40 align-middle" />
              {s.concern}% Concern
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-mint-50 p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-mint-600">
              Dominant
            </p>
            <p className="text-lg font-semibold">{s.dominant}</p>
          </div>
          <div className="rounded-2xl bg-orange-50 p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-rising">
              Rising
            </p>
            <p className="text-lg font-semibold">{s.rising}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
