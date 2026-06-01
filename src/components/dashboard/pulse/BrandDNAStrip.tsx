import { brandDNA } from "@/lib/mock-dashboard";

export function BrandDNAStrip() {
  return (
    <section className="rounded-[22px] border border-hairline bg-card p-6 md:p-7">
      <header className="mb-5 flex items-end justify-between">
        <div>
          <div className="eyebrow mb-1">Brand DNA</div>
          <h3 className="text-[17px] font-semibold tracking-tight">
            Identity extracted from your last 30 posts
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <div className="grid size-12 place-items-center rounded-full border border-mint-500/40 bg-mint-50">
            <span className="text-[15px] font-bold text-mint-600 tabular-nums">
              {brandDNA.confidence}
            </span>
          </div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
            Confidence<br />score
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {brandDNA.axes.map((a) => (
          <div key={a.label} className="rounded-xl border border-hairline bg-paper/60 p-4">
            <div className="flex items-baseline justify-between">
              <div className="eyebrow">{a.label}</div>
              <span className="text-[11px] font-semibold tabular-nums text-muted-foreground">
                {a.pct}%
              </span>
            </div>
            <div className="mt-1.5 flex items-baseline gap-2">
              <span className="font-serif text-[22px] leading-none">{a.value}</span>
            </div>
            <p className="mt-1 text-[12px] text-muted-foreground">{a.detail}</p>
            <div className="mt-3 h-1 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-foreground/80"
                style={{ width: `${a.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
