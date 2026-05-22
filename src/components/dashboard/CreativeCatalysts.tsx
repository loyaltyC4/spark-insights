import { catalysts } from "@/lib/mock-dashboard";

const bgMap = {
  yellow: "bg-sticky-yellow",
  green: "bg-sticky-green",
  peach: "bg-sticky-peach",
} as const;

export function CreativeCatalysts() {
  return (
    <div className="relative h-full overflow-hidden rounded-[24px] bg-mint-950 p-7 text-primary-foreground">
      <div className="relative z-10">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-mint-100/70">
          AI · Fresh ideas
        </span>
        <h3 className="mt-1 mb-6 text-lg font-semibold">Creative Catalysts</h3>

        <div className="grid gap-4 sm:grid-cols-2">
          {catalysts.map((c, i) => (
            <div
              key={i}
              className={`${bgMap[c.color]} ${c.rotate} rounded-md p-5 text-foreground shadow-xl transition-transform duration-300 hover:rotate-0 hover:scale-[1.02]`}
            >
              <p className="mb-4 font-medium leading-snug">"{c.body}"</p>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/50">
                  {c.tag}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/40">
                  #{i + 42}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute -bottom-16 -right-16 size-64 rounded-full bg-mint-500/20 blur-3xl" />
    </div>
  );
}
