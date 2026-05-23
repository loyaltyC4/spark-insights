import { useState } from "react";
import type { PaneKey, TimeRange } from "@/lib/mock-dashboard";
import { profileData } from "@/lib/mock-dashboard";
import { TopBar } from "./TopBar";
import { Sidebar } from "./Sidebar";
import { PaneHeader } from "./PaneHeader";
import { KpiCards } from "./KpiCards";
import { TodaysInsights } from "./TodaysInsights";
import { DailyQuests } from "./DailyQuests";
import { ActiveTimeHeatmap } from "./ActiveTimeHeatmap";
import { AudienceMoodDonut } from "./AudienceMoodDonut";
import { FollowerGrowth } from "./FollowerGrowth";
import { Personas } from "./Personas";
import { BestPostBreakdown } from "./BestPostBreakdown";
import { RankedPosts } from "./RankedPosts";
import { AIPostIdeasLocked } from "./AIPostIdeasLocked";
import { CreativeCatalysts } from "./CreativeCatalysts";
import { VibeCloud } from "./VibeCloud";
import {
  SentimentBreakdown,
  SentimentQuotes,
  SentimentThemes,
} from "./Sentiment";
import { TopCommenters } from "./TopCommenters";
import { InterestOverlap } from "./InterestOverlap";
import { CompetitorsLocked } from "./CompetitorsLocked";
import { Rewards } from "./Rewards";

const META: Record<PaneKey, { title: string; sub: string }> = {
  pulse: {
    title: "Pulse",
    sub: "Your daily snapshot — are we winning today?",
  },
  audience: {
    title: "Audience & Mood",
    sub: "How your followers feel and when they show up.",
  },
  content: {
    title: "Content Lab",
    sub: "What worked, why, and what to make next.",
  },
  sentiment: {
    title: "Sentiment",
    sub: "What people actually feel — beyond the like count.",
  },
  competitors: {
    title: "Competitors",
    sub: "Benchmark, learn, and find the gaps to own.",
  },
  rewards: {
    title: "Rewards",
    sub: "Streaks, levels and badges — your reason to come back.",
  },
};

export function Dashboard() {
  const [range, setRange] = useState<TimeRange>("7d");
  const [pane, setPane] = useState<PaneKey>("pulse");
  const meta = META[pane];

  return (
    <div className="min-h-screen bg-background">
      <TopBar handle={profileData.handle} range={range} onRangeChange={setRange} />
      <div className="mx-auto flex max-w-[1400px]">
        <Sidebar active={pane} onChange={setPane} />
        <main className="flex-1 px-5 pb-24 pt-8 md:px-8">
          <div key={pane} className="animate-entrance">
            <PaneHeader title={meta.title} subtitle={meta.sub} />

            {pane === "pulse" && (
              <div className="space-y-5">
                <KpiCards />
                <div className="grid gap-5 lg:grid-cols-3">
                  <div className="lg:col-span-2">
                    <TodaysInsights />
                  </div>
                  <DailyQuests />
                </div>
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

            {pane === "content" && (
              <div className="space-y-5">
                <BestPostBreakdown />
                <div className="grid gap-5 lg:grid-cols-2">
                  <RankedPosts />
                  <AIPostIdeasLocked />
                </div>
                <CreativeCatalysts />
                <VibeCloud />
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

            {pane === "competitors" && (
              <div className="space-y-5">
                <CompetitorsLocked />
              </div>
            )}

            {pane === "rewards" && <Rewards />}
          </div>
        </main>
      </div>
    </div>
  );
}
