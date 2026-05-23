import { Flame } from "lucide-react";
import { game, badges } from "@/lib/mock-dashboard";

export function Rewards() {
  const xpPct = (game.xp / game.xpMax) * 100;
  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-[24px] bg-card p-7 ring-1 ring-black/5">
          <div className="mb-1">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Your streak
            </span>
            <h3 className="text-lg font-semibold">Check in daily to keep it alive</h3>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <Flame className="size-14 text-coral" strokeWidth={2.2} />
            <div>
              <div className="text-4xl font-extrabold leading-none tabular-nums">
                {game.streak} days
              </div>
              <div className="text-xs text-muted-foreground">
                Personal best: {game.bestStreak} · next badge at 14
              </div>
            </div>
          </div>
          <div className="mt-5 h-3 overflow-hidden rounded-full bg-muted ring-1 ring-black/5">
            <div
              className="h-full bg-gradient-to-r from-amber to-coral"
              style={{ width: `${(game.streak / 14) * 100}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            2 more days → <b className="text-amber">"Two-Week Warrior"</b> badge
          </p>
        </div>

        <div className="rounded-[24px] bg-card p-7 ring-1 ring-black/5">
          <div className="mb-1">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Level progress
            </span>
            <h3 className="text-lg font-semibold">Earn XP — unlock perks</h3>
          </div>
          <div className="mt-4 text-center">
            <div className="text-xs font-bold uppercase tracking-widest text-amber">
              LEVEL {game.level}
            </div>
            <div className="text-base font-semibold">{game.levelName}</div>
          </div>
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-muted ring-1 ring-black/5">
            <div
              className="h-full bg-gradient-to-r from-amber to-coral"
              style={{ width: `${xpPct}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            {game.xp} / {game.xpMax} XP → Level {game.level + 1} unlocks a new dashboard theme 🎨
          </p>
        </div>
      </div>

      <div className="rounded-[24px] bg-card p-7 ring-1 ring-black/5">
        <div className="mb-1">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Badges
          </span>
          <h3 className="text-lg font-semibold">Identity rewards · bragging rights</h3>
        </div>
        <div className="mt-5 flex flex-wrap gap-4">
          {badges.map((b) => (
            <div key={b.name} className="w-20 text-center">
              <div
                className={`mx-auto grid size-16 place-items-center rounded-2xl text-2xl ring-1 ring-black/5 ${
                  b.earned
                    ? "bg-gradient-to-br from-amber to-coral shadow-[0_10px_24px_-10px] shadow-coral/50"
                    : "bg-muted opacity-40 grayscale"
                }`}
              >
                {b.emoji}
              </div>
              <span className="mt-2 block text-[11px] text-muted-foreground">{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
