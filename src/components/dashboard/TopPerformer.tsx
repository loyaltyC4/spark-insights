import { topPerformer } from "@/lib/mock-dashboard";

export function TopPerformer() {
  return (
    <div className="flex h-full flex-col rounded-[24px] bg-card p-7 ring-1 ring-black/5">
      <div className="mb-6">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Top Performer
        </span>
        <h3 className="mt-1 text-lg font-semibold">Why it worked</h3>
      </div>

      <div className="flex flex-1 gap-4">
        <img
          src={topPerformer.image}
          alt={topPerformer.title}
          width={128}
          height={128}
          loading="lazy"
          className="size-28 shrink-0 rounded-2xl object-cover ring-1 ring-black/5"
        />
        <div className="flex flex-1 flex-col">
          <p className="mb-2 font-semibold leading-tight">{topPerformer.title}</p>
          <div className="mb-3 flex items-center gap-2">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full bg-mint-500"
                style={{ width: `${topPerformer.sentiment}%` }}
              />
            </div>
            <span className="text-xs font-semibold tabular-nums">
              {topPerformer.sentiment}%
            </span>
          </div>
          <p className="text-xs leading-relaxed text-muted-foreground">
            <span className="font-semibold text-mint-600">Why it worked: </span>
            {topPerformer.reason}
          </p>
        </div>
      </div>
    </div>
  );
}
