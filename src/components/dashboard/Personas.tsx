import { personas } from "@/lib/mock-dashboard";

export function Personas() {
  return (
    <div className="rounded-[24px] bg-card p-7 ring-1 ring-black/5">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Personas
          </span>
          <h3 className="mt-1 text-lg font-semibold">Your Inner Circle</h3>
        </div>
        <span className="text-xs text-muted-foreground">Top 3 of 12</span>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {personas.map((p) => (
          <div
            key={p.name}
            className="rounded-[20px] border border-black/5 bg-muted/40 p-4 transition-colors hover:bg-muted"
          >
            <img
              src={p.avatar}
              alt={p.name}
              width={48}
              height={48}
              loading="lazy"
              className="mb-3 size-12 rounded-full object-cover ring-1 ring-black/5"
            />
            <p className="font-semibold">{p.name}</p>
            <p className="mb-3 text-xs text-muted-foreground">
              Ages {p.age} · {p.city}
            </p>
            <div className="mb-3 flex flex-wrap gap-1">
              {p.interests.map((i) => (
                <span
                  key={i}
                  className="rounded-full bg-card px-2 py-0.5 text-[10px] font-medium ring-1 ring-black/5"
                >
                  {i}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-black/5">
                <div
                  className="h-full bg-mint-500"
                  style={{ width: `${p.loyalty}%` }}
                />
              </div>
              <span className="text-[10px] font-semibold tabular-nums text-mint-600">
                {p.loyalty}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
