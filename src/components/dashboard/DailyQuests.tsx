import { Check } from "lucide-react";
import { quests, game } from "@/lib/mock-dashboard";

export function DailyQuests() {
  return (
    <div className="h-full rounded-[24px] bg-card p-7 ring-1 ring-black/5">
      <div className="mb-1">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Daily quests
        </span>
        <h3 className="text-lg font-semibold">Small wins → keep your 🔥</h3>
      </div>
      <p className="mb-5 text-xs text-muted-foreground">
        Complete all 3 to protect your {game.streak}-day streak.
      </p>

      <div className="space-y-2.5">
        {quests.map((q) => (
          <div
            key={q.title}
            className={`flex items-center gap-3 rounded-xl p-3 ring-1 ${
              q.done
                ? "bg-mint-50 ring-mint-500/20"
                : "bg-amber-soft ring-amber/30"
            }`}
          >
            <div
              className={`grid size-7 place-items-center rounded-lg ring-2 ${
                q.done
                  ? "bg-mint-500 text-primary-foreground ring-mint-500"
                  : "ring-amber bg-card text-amber"
              }`}
            >
              {q.done && <Check className="size-4" strokeWidth={3} />}
            </div>
            <span
              className={`flex-1 text-sm font-medium ${
                q.done ? "text-muted-foreground line-through" : ""
              }`}
            >
              {q.title}
            </span>
            <span className="text-xs font-bold text-amber">+{q.reward} XP</span>
          </div>
        ))}
      </div>
    </div>
  );
}
