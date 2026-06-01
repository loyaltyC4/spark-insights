import {
  Wand2,
  FileText,
  Calendar,
  Activity,
  Users,
  MessageSquare,
  TrendingUp,
  LibraryBig,
  Telescope,
  Trophy,
  Lock,
  Sparkles,
} from "lucide-react";
import type { PaneKey } from "@/lib/mock-dashboard";
import { profileData } from "@/lib/mock-dashboard";

interface Props {
  active: PaneKey;
  onChange: (p: PaneKey) => void;
}

type Item = { key: PaneKey; label: string; icon: typeof Wand2; pro?: boolean; soon?: boolean };

const GROUPS: { title: string; items: Item[] }[] = [
  {
    title: "Create",
    items: [
      { key: "studio", label: "Studio", icon: Wand2 },
      { key: "scripts", label: "Script Lab", icon: FileText, soon: true },
      { key: "calendar", label: "Calendar", icon: Calendar, soon: true },
    ],
  },
  {
    title: "Understand",
    items: [
      { key: "pulse", label: "Pulse", icon: Activity },
      { key: "audience", label: "Audience", icon: Users },
      { key: "sentiment", label: "Sentiment", icon: MessageSquare },
    ],
  },
  {
    title: "Outperform",
    items: [
      { key: "trends", label: "Trends", icon: TrendingUp, soon: true },
      { key: "adlib", label: "Ad Library", icon: LibraryBig, pro: true },
      { key: "competitors", label: "Competitors", icon: Telescope, pro: true },
    ],
  },
  {
    title: "You",
    items: [{ key: "rewards", label: "Rewards", icon: Trophy }],
  },
];

export function Sidebar({ active, onChange }: Props) {
  return (
    <aside className="sticky top-[57px] hidden h-[calc(100vh-57px)] w-60 shrink-0 flex-col border-r border-hairline bg-background p-3 lg:flex">
      <div className="mb-4 flex items-center gap-2.5 rounded-xl border border-hairline bg-card p-2.5">
        <img
          src={profileData.avatar}
          alt={profileData.handle}
          className="size-9 rounded-lg object-cover"
        />
        <div className="min-w-0 flex-1">
          <div className="truncate text-[13px] font-semibold leading-tight">
            @{profileData.handle}
          </div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
            {profileData.plan}
          </div>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-5 overflow-y-auto">
        {GROUPS.map((g) => (
          <div key={g.title}>
            <div className="mb-1.5 px-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground/70">
              {g.title}
            </div>
            <div className="flex flex-col gap-0.5">
              {g.items.map((it) => {
                const Icon = it.icon;
                const isActive = active === it.key;
                return (
                  <button
                    key={it.key}
                    onClick={() => onChange(it.key)}
                    className={`group flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-[13px] font-medium transition-all ${
                      isActive
                        ? "bg-foreground text-background"
                        : "text-foreground/70 hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Icon className="size-3.5 shrink-0" />
                    <span className="flex-1 text-left">{it.label}</span>
                    {it.pro && (
                      <span className="flex items-center gap-0.5 rounded-md bg-amber-soft px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber">
                        <Lock className="size-2.5" /> Pro
                      </span>
                    )}
                    {it.soon && !isActive && (
                      <span className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground/70">
                        Soon
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="mt-4 rounded-xl border border-hairline bg-gradient-to-br from-mint-50 to-amber-soft/40 p-3">
        <div className="mb-1 flex items-center gap-1.5 text-[12px] font-bold">
          <Sparkles className="size-3.5 text-mint-600" /> Mint Pro
        </div>
        <p className="mb-2 text-[11px] leading-snug text-muted-foreground">
          Unlock Ad Library, Competitors and full Script Lab.
        </p>
        <button className="w-full rounded-lg bg-mint-950 px-2.5 py-1.5 text-[11px] font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
          Upgrade — $29/mo
        </button>
      </div>
    </aside>
  );
}
