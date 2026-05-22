import type { TimeRange } from "@/lib/mock-dashboard";
import { spectrumByRange } from "@/lib/mock-dashboard";

export function EmotionalSpectrum({ range }: { range: TimeRange }) {
  const data = spectrumByRange[range];
  const max = Math.max(...data.flatMap((d) => [d.joy, d.curiosity, d.concern]));

  return (
    <div className="rounded-[24px] bg-card p-7 ring-1 ring-black/5">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Spectrum
          </span>
          <h3 className="mt-1 text-lg font-semibold">Emotional rhythm</h3>
        </div>
        <div className="flex gap-4 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-mint-500" />
            Joy
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-rising" />
            Curious
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-muted-foreground/40" />
            Tense
          </span>
        </div>
      </div>

      <div className="flex h-48 items-end gap-3 md:gap-5">
        {data.map((d) => (
          <div key={d.label} className="flex flex-1 flex-col items-center gap-2">
            <div className="flex h-full w-full items-end justify-center gap-1">
              <Bar value={d.joy} max={max} className="bg-mint-500/80 hover:bg-mint-500" />
              <Bar value={d.curiosity} max={max} className="bg-rising/70 hover:bg-rising" />
              <Bar
                value={d.concern}
                max={max}
                className="bg-muted-foreground/30 hover:bg-muted-foreground/50"
              />
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              {d.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Bar({
  value,
  max,
  className,
}: {
  value: number;
  max: number;
  className: string;
}) {
  return (
    <div
      className={`w-full max-w-3 rounded-t-full transition-all duration-300 ${className}`}
      style={{ height: `${(value / max) * 100}%` }}
    />
  );
}
