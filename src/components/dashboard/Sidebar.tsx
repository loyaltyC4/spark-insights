import { useState } from "react";
import {
  Activity,
  Users,
  FlaskConical,
  Telescope,
  Sparkles,
  LayoutGrid,
  Video,
  Image as ImageIcon,
  Megaphone,
  LibraryBig,
  FileText,
  Workflow,
  Settings as SettingsIcon,
  ChevronDown,
  ChevronRight,
  Wrench,
  Lock,
  Newspaper,
  Eye,
  Heart,
  UserPlus,
  UserMinus,
  MessageSquare,
  Download,
  Music2,
  Facebook,
  Linkedin,
  Youtube,
  AtSign,
  Hash,
  ShieldAlert,
} from "lucide-react";
import type { PaneKey } from "@/lib/mock-dashboard";

interface Props {
  active: PaneKey;
  onChange: (p: PaneKey) => void;
}

type NavItem = {
  key: PaneKey;
  label: string;
  icon: typeof Activity;
  pro?: boolean;
  soon?: boolean;
  ai?: boolean;
};

const ENTRY: NavItem = { key: "briefing", label: "Briefing", icon: Newspaper };

const GROUPS: { title: string; items: NavItem[] }[] = [
  {
    title: "Understand",
    items: [
      { key: "pulse", label: "Pulse", icon: Activity },
      { key: "audience", label: "Audience", icon: Users },
      { key: "contentLab", label: "Content Lab", icon: FlaskConical },
      { key: "competitors", label: "Competitors", icon: Telescope },
    ],
  },
  {
    title: "Create",
    items: [
      { key: "nextPost", label: "Next Post", icon: Sparkles, ai: true },
      { key: "carousel", label: "Carousel", icon: LayoutGrid },
      { key: "video", label: "Video", icon: Video },
      { key: "post", label: "Post", icon: ImageIcon },
      { key: "campaign", label: "Campaign", icon: Megaphone },
    ],
  },
  {
    title: "Amplify",
    items: [
      { key: "adIntel", label: "Ad Intelligence", icon: LibraryBig, pro: true },
      { key: "scriptStudio", label: "Script Studio", icon: FileText, pro: true },
      { key: "automation", label: "Automation", icon: Workflow, soon: true },
    ],
  },
];

const FREE_TOOLS: { title: string; items: NavItem[] }[] = [
  {
    title: "Instagram",
    items: [
      { key: "tool_ig_story", label: "Story Viewer", icon: Eye },
      { key: "tool_ig_post", label: "Post Viewer", icon: Newspaper },
      { key: "tool_ig_highlights", label: "Highlights", icon: Sparkles },
      { key: "tool_ig_likes", label: "Like Viewer", icon: Heart },
      { key: "tool_ig_followers", label: "Recent Followers", icon: UserPlus },
      { key: "tool_ig_unfollow", label: "Unfollower Tracker", icon: UserMinus },
      { key: "tool_ig_comments", label: "Comment Scraper", icon: MessageSquare },
      { key: "tool_ig_export", label: "Follower Export", icon: Download },
    ],
  },
  {
    title: "Cross-platform",
    items: [
      { key: "tool_tiktok", label: "TikTok Scraper", icon: Music2 },
      { key: "tool_facebook", label: "Facebook Posts", icon: Facebook },
      { key: "tool_linkedin", label: "LinkedIn Posts", icon: Linkedin },
      { key: "tool_yt", label: "YouTube Transcript", icon: Youtube },
      { key: "tool_threads", label: "Threads Downloader", icon: AtSign },
    ],
  },
  {
    title: "Utilities",
    items: [
      { key: "tool_hashtags", label: "Hashtag Generator", icon: Hash },
      { key: "tool_shadowban", label: "Shadowban Checker", icon: ShieldAlert },
    ],
  },
];

function NavButton({
  item,
  active,
  onChange,
}: {
  item: NavItem;
  active: PaneKey;
  onChange: (p: PaneKey) => void;
}) {
  const Icon = item.icon;
  const isActive = active === item.key;
  return (
    <button
      onClick={() => onChange(item.key)}
      className={`group flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-[12px] font-medium transition-all ${
        isActive
          ? "bg-foreground text-background"
          : "text-foreground/70 hover:bg-muted hover:text-foreground"
      }`}
    >
      <Icon className="size-3.5 shrink-0" />
      <span className="flex-1 text-left">{item.label}</span>
      {item.ai && (
        <span className="rounded-md bg-mint-500 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary-foreground">
          AI
        </span>
      )}
      {item.pro && (
        <span className="flex items-center gap-0.5 rounded-md bg-amber-soft px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber">
          <Lock className="size-2.5" /> Pro
        </span>
      )}
      {item.soon && !isActive && (
        <span className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground/70">
          Soon
        </span>
      )}
    </button>
  );
}

export function Sidebar({ active, onChange }: Props) {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

  return (
    <aside className="sticky top-[57px] hidden h-[calc(100vh-57px)] w-[220px] shrink-0 flex-col border-r border-hairline bg-background p-3 lg:flex">
      <nav className="flex flex-1 flex-col gap-4 overflow-y-auto pr-1">
        {/* Entry */}
        <div className="flex flex-col gap-0.5">
          <NavButton item={ENTRY} active={active} onChange={onChange} />
        </div>

        {GROUPS.map((g) => (
          <div key={g.title}>
            <div className="mb-1.5 px-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground/70">
              {g.title}
            </div>
            <div className="flex flex-col gap-0.5">
              {g.items.map((it) => (
                <NavButton key={it.key} item={it} active={active} onChange={onChange} />
              ))}
            </div>
          </div>
        ))}

        {/* Free Tools — collapsible */}
        <div>
          <button
            onClick={() => setToolsOpen((v) => !v)}
            className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-[12px] font-medium text-foreground/70 hover:bg-muted hover:text-foreground"
          >
            {toolsOpen ? (
              <ChevronDown className="size-3.5" />
            ) : (
              <ChevronRight className="size-3.5" />
            )}
            <Wrench className="size-3.5" />
            <span className="flex-1 text-left">Free Tools</span>
            <span className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground/70">
              15
            </span>
          </button>

          {toolsOpen && (
            <div className="mt-1 space-y-1 border-l border-hairline pl-2">
              {FREE_TOOLS.map((sub) => {
                const open = openGroups[sub.title] ?? false;
                return (
                  <div key={sub.title}>
                    <button
                      onClick={() =>
                        setOpenGroups((s) => ({ ...s, [sub.title]: !open }))
                      }
                      className="flex w-full items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-medium text-foreground/70 hover:text-foreground"
                    >
                      {open ? (
                        <ChevronDown className="size-3" />
                      ) : (
                        <ChevronRight className="size-3" />
                      )}
                      <span className="flex-1 text-left">{sub.title}</span>
                      <span className="text-[9px] text-muted-foreground/70">
                        {sub.items.length}
                      </span>
                    </button>
                    {open && (
                      <div className="ml-2 mt-0.5 flex flex-col gap-0.5">
                        {sub.items.map((it) => (
                          <NavButton
                            key={it.key}
                            item={it}
                            active={active}
                            onChange={onChange}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      <div className="mt-3 border-t border-hairline pt-3">
        <NavButton
          item={{ key: "settings", label: "Settings", icon: SettingsIcon }}
          active={active}
          onChange={onChange}
        />
      </div>
    </aside>
  );
}
