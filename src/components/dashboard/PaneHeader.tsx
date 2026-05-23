import { Flame } from "lucide-react";
import { game } from "@/lib/mock-dashboard";

interface Props {
  title: string;
  subtitle: string;
}

export function PaneHeader({ title, subtitle }: Props) {
  const xpPct = Math.round((game.xp / game.xpMax) * 100);
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-coral-soft px-3 py-1.5 text-xs font-bold text-coral ring-1 ring-coral/20">
          <Flame className="size-3.5" /> {game.streak}-day streak
        </span>
        <div className="text-right">
          <div className="text-[11px] font-bold uppercase tracking-wider text-amber">
            LVL {game.level} · {game.levelName}
          </div>
          <div className="mt-1 h-2 w-40 overflow-hidden rounded-full bg-muted ring-1 ring-black/5">
            <div
              className="h-full bg-gradient-to-r from-amber to-coral"
              style={{ width: `${xpPct}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
