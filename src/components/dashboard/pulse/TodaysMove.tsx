import { todaysMove } from "@/lib/mock-dashboard";
import { ArrowRight } from "lucide-react";
import type { PaneKey } from "@/lib/mock-dashboard";

interface Props {
  onOpen: (p: PaneKey) => void;
}

export function TodaysMove({ onOpen }: Props) {
  return (
    <section className="surface-ink relative overflow-hidden rounded-[22px] p-6 md:p-7">
      <div className="absolute -right-12 -top-12 size-56 rounded-full bg-mint-500/15 blur-3xl" />
      <div className="relative flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-mint-500 text-mint-950">
            <span className="text-base font-bold">→</span>
          </div>
          <div>
            <div className="eyebrow mb-1 text-mint-100/70">Today's move</div>
            <div className="text-[20px] font-semibold tracking-tight md:text-[22px]">
              {todaysMove.verdict}
            </div>
            <p className="mt-1 max-w-xl text-[13px] leading-relaxed text-white/60">
              {todaysMove.why}
            </p>
          </div>
        </div>
        <button
          onClick={() => onOpen("studio")}
          className="inline-flex items-center gap-2 rounded-xl bg-mint-500 px-4 py-2.5 text-[13px] font-semibold text-mint-950 transition-transform hover:scale-[1.02]"
        >
          {todaysMove.cta} <ArrowRight className="size-3.5" />
        </button>
      </div>
    </section>
  );
}
