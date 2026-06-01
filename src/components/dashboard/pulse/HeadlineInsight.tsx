import { headlineInsight } from "@/lib/mock-dashboard";
import { ArrowUpRight } from "lucide-react";

export function HeadlineInsight() {
  return (
    <section className="surface-feature relative overflow-hidden rounded-[28px] p-8 md:p-12">
      <div className="absolute inset-0 paper-grid opacity-[0.35] [mask-image:radial-gradient(80%_60%_at_50%_40%,black,transparent)]" />
      <div className="relative">
        <div className="eyebrow mb-5">{headlineInsight.eyebrow}</div>
        <h2 className="text-display max-w-3xl text-[40px] leading-[1.05] md:text-[58px]">
          {headlineInsight.headline}{" "}
          <span className="text-muted-foreground/70">{headlineInsight.body}</span>
        </h2>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-hairline pt-5">
          {headlineInsight.proof.map((p) => (
            <div key={p.label} className="flex items-baseline gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {p.label}
              </span>
              <span className="text-[15px] font-semibold text-foreground">{p.value}</span>
            </div>
          ))}
          <button className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-foreground px-3.5 py-1.5 text-[12px] font-semibold text-background transition-transform hover:scale-[1.02]">
            Read the full read-out
            <ArrowUpRight className="size-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
