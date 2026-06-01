import { useState } from "react";
import type { PaneKey, TimeRange } from "@/lib/mock-dashboard";
import { profileData } from "@/lib/mock-dashboard";
import { TopBar } from "./TopBar";
import { Sidebar } from "./Sidebar";
import { EditorialHeader } from "./shared/EditorialHeader";
import { ComingSoon } from "./ComingSoon";

// Pulse (redesigned)
import { HeadlineInsight } from "./pulse/HeadlineInsight";
import { KpiChips } from "./pulse/KpiChips";
import { TodaysMove } from "./pulse/TodaysMove";
import { BrandDNAStrip } from "./pulse/BrandDNAStrip";
import { BestPostBreakdown } from "./BestPostBreakdown";

// Studio
import { Studio } from "./studio/Studio";

// Existing
import { ActiveTimeHeatmap } from "./ActiveTimeHeatmap";
import { AudienceMoodDonut } from "./AudienceMoodDonut";
import { FollowerGrowth } from "./FollowerGrowth";
import { Personas } from "./Personas";
import { TopCommenters } from "./TopCommenters";
import { InterestOverlap } from "./InterestOverlap";
import {
  SentimentBreakdown,
  SentimentQuotes,
  SentimentThemes,
} from "./Sentiment";
import { VibeCloud } from "./VibeCloud";
import { CompetitorsLocked } from "./CompetitorsLocked";
import { Rewards } from "./Rewards";

const META: Record<PaneKey, { eyebrow: string; title: string; lede?: string }> = {
  studio: {
    eyebrow: "Create",
    title: "Studio",
    lede: "Pick a recipe, drop a topic. Mint drafts carousels and Reels calibrated to your brand voice and your audience's signals.",
  },
  scripts: { eyebrow: "Create", title: "Script Lab" },
  calendar: { eyebrow: "Create", title: "Calendar" },
  pulse: {
    eyebrow: "Understand",
    title: "Pulse",
    lede: "The one read-out that tells you what's working — and what to do about it today.",
  },
  audience: {
    eyebrow: "Understand",
    title: "Audience",
    lede: "Who shows up, when they're awake, and how they feel about your work.",
  },
  content: { eyebrow: "Understand", title: "Content" },
  sentiment: {
    eyebrow: "Understand",
    title: "Sentiment",
    lede: "What people actually feel — beyond the like count.",
  },
  trends: { eyebrow: "Outperform", title: "Trends" },
  adlib: { eyebrow: "Outperform", title: "Ad Library" },
  competitors: {
    eyebrow: "Outperform",
    title: "Competitors",
    lede: "Benchmark, learn, and find the gaps to own.",
  },
  rewards: {
    eyebrow: "You",
    title: "Rewards",
    lede: "Streaks, levels and badges — your reason to come back.",
  },
};

export function Dashboard() {
  const [range, setRange] = useState<TimeRange>("7d");
  const [pane, setPane] = useState<PaneKey>("pulse");
  const meta = META[pane];

  // Studio gets its own header inside the component
  const showHeader = pane !== "studio";

  return (
    <div className="min-h-screen bg-background">
      <TopBar handle={profileData.handle} range={range} onRangeChange={setRange} />
      <div className="mx-auto flex max-w-[1400px]">
        <Sidebar active={pane} onChange={setPane} />
        <main className="flex-1 px-5 pb-24 pt-8 md:px-8">
          <div key={pane} className="animate-rise">
            {showHeader && (
              <EditorialHeader
                eyebrow={meta.eyebrow}
                title={meta.title}
                lede={meta.lede}
              />
            )}

            {pane === "studio" && <Studio />}

            {pane === "pulse" && (
              <div className="space-y-6">
                <HeadlineInsight />
                <KpiChips />
                <TodaysMove onOpen={setPane} />
                <BrandDNAStrip />
                <BestPostBreakdown />
              </div>
            )}

            {pane === "audience" && (
              <div className="space-y-5">
                <div className="grid gap-5 lg:grid-cols-3">
                  <div className="lg:col-span-2">
                    <ActiveTimeHeatmap />
                  </div>
                  <AudienceMoodDonut />
                </div>
                <FollowerGrowth />
                <Personas />
                <div className="grid gap-5 lg:grid-cols-5">
                  <div className="lg:col-span-3">
                    <TopCommenters />
                  </div>
                  <div className="lg:col-span-2">
                    <InterestOverlap />
                  </div>
                </div>
              </div>
            )}

            {pane === "sentiment" && (
              <div className="space-y-5">
                <SentimentBreakdown />
                <div className="grid gap-5 lg:grid-cols-2">
                  <SentimentQuotes />
                  <SentimentThemes />
                </div>
                <VibeCloud />
              </div>
            )}

            {pane === "competitors" && <CompetitorsLocked />}
            {pane === "rewards" && <Rewards />}

            {pane === "scripts" && (
              <ComingSoon
                title="Script Lab"
                blurb="Beat-by-beat scripts in your voice — Hormozi, Brunson, TikTok-native and Gary Vee frameworks, calibrated to your last 30 posts."
              />
            )}
            {pane === "calendar" && (
              <ComingSoon
                title="Calendar"
                blurb="A weekly board with peak-time slots, drag-to-schedule and one-click queue from Studio."
              />
            )}
            {pane === "trends" && (
              <ComingSoon
                title="Trends"
                blurb="Rising hooks, sounds and formats in your niche — refreshed every 4 hours from live scraping."
              />
            )}
            {pane === "adlib" && (
              <ComingSoon
                title="Ad Library"
                blurb="Reverse-engineer the ads your rivals are paying to run. Filter by hook, format and offer."
              />
            )}
            {pane === "content" && (
              <ComingSoon
                title="Content"
                blurb="Deep post analytics live inside Pulse and Studio now."
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
