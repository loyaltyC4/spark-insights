import { keywords } from "@/lib/mock-dashboard";

const sizeMap = ["text-sm", "text-base", "text-lg", "text-2xl"];

export function VibeCloud() {
  return (
    <div className="rounded-[24px] bg-card p-7 ring-1 ring-black/5">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Keywords
          </span>
          <h3 className="mt-1 text-lg font-semibold">Vibe Cloud</h3>
        </div>
        <span className="text-xs text-muted-foreground">
          <span className="mr-1 inline-block size-1.5 rounded-full bg-mint-500 align-middle" />
          Trending
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {keywords.map((k) => (
          <span
            key={k.word}
            className={`${sizeMap[k.weight]} cursor-default rounded-full px-3 py-1 font-semibold tracking-tight transition-all hover:-translate-y-0.5 ${
              k.trending
                ? "bg-mint-500 text-primary-foreground shadow-sm"
                : "bg-muted text-foreground/80 hover:bg-mint-50"
            }`}
          >
            {k.word}
          </span>
        ))}
      </div>
    </div>
  );
}
