import { bestPost } from "@/lib/mock-dashboard";

const toneMap = {
  g: "bg-mint-50 text-mint-600 ring-mint-500/30",
  v: "bg-violet-soft text-violet ring-violet/30",
  a: "bg-amber-soft text-amber ring-amber/40",
} as const;

export function BestPostBreakdown() {
  return (
    <div className="rounded-[24px] bg-card p-7 ring-1 ring-black/5">
      <div className="mb-5">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Best post this month
        </span>
        <h3 className="mt-1 text-lg font-semibold">
          🏆 Why it worked — so you can repeat the recipe
        </h3>
      </div>

      <div className="flex flex-col gap-5 sm:flex-row">
        <img
          src={bestPost.image}
          alt={bestPost.title}
          width={140}
          height={140}
          loading="lazy"
          className="size-32 shrink-0 rounded-2xl object-cover ring-1 ring-black/5 sm:size-36"
        />
        <div className="flex-1">
          <p className="font-semibold leading-tight">{bestPost.title}</p>
          <p className="mt-1 text-xs text-muted-foreground">{bestPost.meta}</p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {bestPost.why.map((w) => (
              <span
                key={w.label}
                className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold ring-1 ${toneMap[w.tone]}`}
              >
                {w.label}
              </span>
            ))}
          </div>

          <div className="mt-4 flex gap-3 rounded-2xl bg-mint-50 p-4 ring-1 ring-mint-500/20">
            <span className="text-lg">💡</span>
            <p className="text-sm leading-relaxed">
              <b>Repeat the recipe:</b> {bestPost.takeaway.replace(/^Repeat the recipe:\s*/, "")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
