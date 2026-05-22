import { overlap } from "@/lib/mock-dashboard";

const ringMap = {
  mint: "bg-mint-500/20 ring-mint-500/40 text-mint-600",
  yellow: "bg-sticky-yellow ring-rising/30 text-rising",
  peach: "bg-sticky-peach ring-orange-500/30 text-orange-700",
} as const;

export function InterestOverlap() {
  return (
    <div className="flex h-full flex-col rounded-[24px] bg-card p-7 ring-1 ring-black/5">
      <div className="mb-6">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Overlap
        </span>
        <h3 className="mt-1 text-lg font-semibold">Interest crossover</h3>
      </div>

      <div className="relative mx-auto my-2 h-44 w-full max-w-sm">
        {overlap.groups.map((g, i) => {
          const positions = [
            "left-0 top-0",
            "right-0 top-0",
            "left-1/2 bottom-0 -translate-x-1/2",
          ];
          return (
            <div
              key={g.name}
              className={`absolute size-28 rounded-full ring-2 ${
                ringMap[g.color as keyof typeof ringMap]
              } ${positions[i]} grid place-items-center`}
            >
              <span className="text-xs font-bold uppercase tracking-wider">
                {g.name}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-2">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-mint-600">
          Shared by all
        </p>
        <div className="flex flex-wrap gap-1.5">
          {overlap.shared.map((s) => (
            <span
              key={s}
              className="rounded-full bg-mint-50 px-3 py-1 text-xs font-medium text-mint-600 ring-1 ring-mint-500/20"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
