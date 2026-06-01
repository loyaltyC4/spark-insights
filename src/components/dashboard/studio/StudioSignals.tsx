import { studioSignals } from "@/lib/mock-dashboard";
import { ArrowRight } from "lucide-react";

interface Props {
  onUseRecipe: (id: string) => void;
}

export function StudioSignals({ onUseRecipe }: Props) {
  return (
    <section className="rounded-[22px] border border-hairline bg-paper/60 p-5">
      <div className="mb-3 flex items-baseline justify-between">
        <div>
          <div className="eyebrow mb-1">Pulled from your audience right now</div>
          <h3 className="text-[14px] font-semibold">Live signals</h3>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-mint-600">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-500 opacity-75" />
            <span className="relative inline-flex size-1.5 rounded-full bg-mint-500" />
          </span>
          Streaming
        </span>
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
        {studioSignals.map((s) => (
          <button
            key={s.label}
            onClick={() => onUseRecipe(s.recipe)}
            className="group flex items-start gap-3 rounded-xl border border-hairline bg-card p-3 text-left transition-all hover:border-foreground/30"
          >
            <span className="text-base leading-none">{s.icon}</span>
            <div className="min-w-0 flex-1">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
              <div className="mt-0.5 text-[13px] font-semibold leading-tight">{s.body}</div>
              <div className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-semibold text-mint-600 opacity-80 group-hover:opacity-100">
                {s.action} <ArrowRight className="size-3" />
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
