import { Lock } from "lucide-react";
import { aiIdeas } from "@/lib/mock-dashboard";

export function AIPostIdeasLocked() {
  return (
    <div className="relative h-full overflow-hidden rounded-[24px] bg-mint-950 p-7 text-primary-foreground">
      <div className="relative z-10">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-mint-100/70">
          AI · Pro
        </span>
        <h3 className="text-lg font-semibold">✨ AI post ideas</h3>
        <p className="mb-4 text-xs text-mint-100/60">
          Tailored to what your audience saves & asks for.
        </p>

        <div className="space-y-2 blur-[3px] opacity-70 select-none">
          {aiIdeas.map((idea, i) => (
            <div
              key={i}
              className="flex gap-3 rounded-xl bg-white/10 p-3 ring-1 ring-white/10"
            >
              <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-violet text-xs font-bold">
                {i + 1}
              </span>
              <p className="text-sm">{idea}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 z-20 grid place-items-center bg-mint-950/40 backdrop-blur-sm p-6">
        <div className="max-w-xs text-center">
          <div className="mx-auto mb-3 grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-amber to-coral shadow-lg">
            <Lock className="size-5" />
          </div>
          <p className="text-base font-bold">Unlock AI post ideas</p>
          <p className="mt-1 text-xs text-mint-100/70">
            10 personalized, ready-to-post ideas every week — built from your own best content.
          </p>
          <button className="mt-4 rounded-xl bg-gradient-to-r from-mint-500 to-mint-600 px-4 py-2 text-xs font-bold text-mint-950 shadow-md transition-transform hover:scale-105">
            Go Pro — $9/mo
          </button>
        </div>
      </div>
      <div className="pointer-events-none absolute -bottom-16 -right-16 size-64 rounded-full bg-violet/30 blur-3xl" />
    </div>
  );
}
