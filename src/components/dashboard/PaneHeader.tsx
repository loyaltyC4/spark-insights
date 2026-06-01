import { Flame } from "lucide-react";
import { game } from "@/lib/mock-dashboard";

export function StreakPill() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-card px-2.5 py-1 text-[11px] font-semibold text-foreground/80">
      <Flame className="size-3 text-coral" /> {game.streak}d
      <span className="text-muted-foreground">·</span>
      <span className="text-mint-600">L{game.level}</span>
    </span>
  );
}
