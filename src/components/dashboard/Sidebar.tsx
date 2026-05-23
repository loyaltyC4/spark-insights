import { Home, Users, Clapperboard, MessageSquare, Telescope, Trophy, Lock, Sparkles } from "lucide-react";
import type { PaneKey } from "@/lib/mock-dashboard";
import { profileData } from "@/lib/mock-dashboard";

interface Props {
  active: PaneKey;
  onChange: (p: PaneKey) => void;
}

const items: { key: PaneKey; label: string; icon: typeof Home; pro?: boolean }[] = [
  { key: "pulse", label: "Pulse", icon: Home },
  { key: "audience", label: "Audience & Mood", icon: Users },
  { key: "content", label: "Content Lab", icon: Clapperboard },
  { key: "sentiment", label: "Sentiment", icon: MessageSquare },
  { key: "competitors", label: "Competitors", icon: Telescope, pro: true },
  { key: "rewards", label: "Rewards", icon: Trophy },
];

export function Sidebar({ active, onChange }: Props) {
  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-border/60 bg-card/40 p-4 lg:flex">
      <div className="mb-4 flex items-center gap-3 rounded-2xl bg-card p-3 ring-1 ring-black/5">
        <img
          src={profileData.avatar}
          alt={profileData.handle}
          className="size-10 rounded-xl object-cover ring-1 ring-mint-500/30"
        />
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold">@{profileData.handle}</div>
          <div className="text-[11px] text-muted-foreground">Creator · {profileData.plan}</div>
        </div>
      </div>

      <nav className="flex flex-col gap-1">
        {items.map((it) => {
          const Icon = it.icon;
          const isActive = active === it.key;
          return (
            <button
              key={it.key}
              onClick={() => onChange(it.key)}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-mint-50 text-mint-600 ring-1 ring-mint-500/30"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <Icon className="size-4" />
              <span className="flex-1 text-left">{it.label}</span>
              {it.pro && (
                <span className="flex items-center gap-1 rounded-md bg-amber-soft px-1.5 py-0.5 text-[10px] font-bold text-amber">
                  <Lock className="size-2.5" /> PRO
                </span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto rounded-2xl bg-gradient-to-br from-violet-soft to-mint-50 p-4 ring-1 ring-violet/20">
        <div className="mb-1 flex items-center gap-1.5 text-sm font-bold">
          <Sparkles className="size-4 text-violet" /> Go Mint Pro
        </div>
        <p className="mb-3 text-[12px] leading-snug text-muted-foreground">
          Unlimited history, competitor tracking, AI post ideas & full sentiment quotes.
        </p>
        <button className="w-full rounded-xl bg-mint-950 px-3 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
          Upgrade — $9/mo
        </button>
      </div>
    </aside>
  );
}
