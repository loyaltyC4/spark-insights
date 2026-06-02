import { useState } from "react";
import type { PaneKey, TimeRange } from "@/lib/mock-dashboard";
import { profileData } from "@/lib/mock-dashboard";
import { TopBar } from "./TopBar";
import { Sidebar } from "./Sidebar";
import { EditorialHeader } from "./shared/EditorialHeader";
import { ComingSoon } from "./ComingSoon";

// Pulse / Briefing
import { HeadlineInsight } from "./pulse/HeadlineInsight";
import { KpiChips } from "./pulse/KpiChips";
import { TodaysMove } from "./pulse/TodaysMove";
import { BrandDNAStrip } from "./pulse/BrandDNAStrip";
import { BestPostBreakdown } from "./BestPostBreakdown";
import { RankedPosts } from "./RankedPosts";

// Studio (Next Post)
import { Studio } from "./studio/Studio";

// Audience
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

// Content Lab extras
import { CreativeCatalysts } from "./CreativeCatalysts";

// Competitors / Amplify (locked previews)
import { CompetitorsLocked } from "./CompetitorsLocked";

type Meta = { eyebrow: string; title: string; lede?: string };

const META: Partial<Record<PaneKey, Meta>> = {
  briefing: {
    eyebrow: "Today",
    title: "Briefing",
    lede: "What happened in the last 24 hours, and the one move worth making today.",
  },
  pulse: {
    eyebrow: "Understand",
    title: "Pulse",
    lede: "KPIs with context — numbers that earned their place on the screen.",
  },
  audience: {
    eyebrow: "Understand",
    title: "Audience",
    lede: "Who shows up, when they're awake, and how they feel about your work.",
  },
  contentLab: {
    eyebrow: "Understand",
    title: "Content Lab",
    lede: "Decode what worked. Replicate it on purpose, not by accident.",
  },
  competitors: {
    eyebrow: "Understand",
    title: "Competitors",
    lede: "Benchmark, learn, and find the gaps to own.",
  },
  carousel: { eyebrow: "Create", title: "Carousel" },
  video: { eyebrow: "Create", title: "Video" },
  post: { eyebrow: "Create", title: "Post" },
  campaign: { eyebrow: "Create", title: "Campaign" },
  adIntel: { eyebrow: "Amplify", title: "Ad Intelligence" },
  scriptStudio: { eyebrow: "Amplify", title: "Script Studio" },
  automation: { eyebrow: "Amplify", title: "Automation" },
  settings: { eyebrow: "You", title: "Settings" },
};

const TOOL_BLURBS: Partial<Record<PaneKey, { title: string; blurb: string; group: string }>> = {
  tool_ig_story: { group: "Instagram", title: "Story Viewer", blurb: "View any public Instagram account's stories without leaving a trace." },
  tool_ig_post: { group: "Instagram", title: "Post Viewer", blurb: "Browse any public profile's grid in a clean, fast reader." },
  tool_ig_highlights: { group: "Instagram", title: "Highlights Viewer", blurb: "Open and download highlight reels from any public profile." },
  tool_ig_likes: { group: "Instagram", title: "Like Viewer", blurb: "See who liked a specific post — handy for spotting super-fans." },
  tool_ig_followers: { group: "Instagram", title: "Recent Followers", blurb: "Watch your latest followers roll in and segment by signal." },
  tool_ig_unfollow: { group: "Instagram", title: "Unfollower Tracker", blurb: "Know exactly who unfollowed and when." },
  tool_ig_comments: { group: "Instagram", title: "Comment Scraper", blurb: "Export full comment threads to CSV for analysis." },
  tool_ig_export: { group: "Instagram", title: "Follower Export", blurb: "Pull a clean list of followers for outreach or research." },
  tool_tiktok: { group: "Cross-platform", title: "TikTok Scraper", blurb: "Grab profile + post data from any public TikTok account." },
  tool_facebook: { group: "Cross-platform", title: "Facebook Posts", blurb: "Fetch public Facebook page posts and engagement." },
  tool_linkedin: { group: "Cross-platform", title: "LinkedIn Posts", blurb: "Read and export public LinkedIn post data." },
  tool_yt: { group: "Cross-platform", title: "YouTube Transcript", blurb: "Pull any video transcript — feed it straight into Script Studio." },
  tool_threads: { group: "Cross-platform", title: "Threads Downloader", blurb: "Download Threads posts for repurposing." },
  tool_hashtags: { group: "Utilities", title: "Hashtag Generator", blurb: "AI hashtag suggestions tuned to your niche and post." },
  tool_shadowban: { group: "Utilities", title: "Shadowban Checker", blurb: "Run a quick check to see if your account is being throttled." },
};

export function Dashboard() {
  const [range, setRange] = useState<TimeRange>("7d");
  const [pane, setPane] = useState<PaneKey>("briefing");

  const meta = META[pane];
  const tool = TOOL_BLURBS[pane];
  // nextPost (Studio) renders its own header
  const showHeader = pane !== "nextPost" && !!meta && !tool;

  return (
    <div className="min-h-screen bg-background">
      <TopBar handle={profileData.handle} range={range} onRangeChange={setRange} onQuickCreate={() => setPane("nextPost")} />
      <div className="mx-auto flex max-w-[1400px]">
        <Sidebar active={pane} onChange={setPane} />
        <main className="flex-1 px-5 pb-24 pt-8 md:px-8">
          <div key={pane} className="animate-rise">
            {showHeader && meta && (
              <EditorialHeader
                eyebrow={meta.eyebrow}
                title={meta.title}
                lede={meta.lede}
              />
            )}

            {pane === "nextPost" && <Studio />}

            {pane === "briefing" && (
              <div className="space-y-6">
                <HeadlineInsight />
                <KpiChips />
                <TodaysMove onOpen={(p) => setPane(p === "studio" ? "nextPost" : p)} />
                <BrandDNAStrip />
                <BestPostBreakdown />
              </div>
            )}

            {pane === "pulse" && (
              <div className="space-y-5">
                <KpiChips />
                <FollowerGrowth />
                <div className="grid gap-5 lg:grid-cols-3">
                  <div className="lg:col-span-2">
                    <ActiveTimeHeatmap />
                  </div>
                  <AudienceMoodDonut />
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
                <Personas />
                <div className="grid gap-5 lg:grid-cols-5">
                  <div className="lg:col-span-3">
                    <TopCommenters />
                  </div>
                  <div className="lg:col-span-2">
                    <InterestOverlap />
                  </div>
                </div>
                <SentimentBreakdown />
                <div className="grid gap-5 lg:grid-cols-2">
                  <SentimentQuotes />
                  <SentimentThemes />
                </div>
                <VibeCloud />
              </div>
            )}

            {pane === "contentLab" && (
              <div className="space-y-5">
                <BestPostBreakdown />
                <div className="grid gap-5 lg:grid-cols-2">
                  <RankedPosts />
                  <CreativeCatalysts />
                </div>
              </div>
            )}

            {pane === "competitors" && <CompetitorsLocked />}

            {/* Create — placeholders */}
            {pane === "carousel" && (
              <ComingSoon
                title="Carousel Studio"
                blurb="Three-panel editor: Claude on the left, live slide preview in the center, drag-to-reorder filmstrip at the bottom. Brand DNA auto-injected."
              />
            )}
            {pane === "video" && (
              <ComingSoon
                title="Video Lab"
                blurb="UGC factory, product video ads, and YouTube→Reels clipping — Hunyuan, Kling and Seedance under one roof."
              />
            )}
            {pane === "post" && (
              <ComingSoon
                title="Post Generator"
                blurb="One brief in, one calibrated image post out — Nano-Banana 2 visuals, caption, hook and hashtags."
              />
            )}
            {pane === "campaign" && (
              <ComingSoon
                title="Campaign Builder"
                blurb="Multi-channel launches: hero image, social cuts and a short video, all sized and styled to your brand."
              />
            )}

            {/* Amplify */}
            {pane === "adIntel" && (
              <ComingSoon
                title="Ad Intelligence"
                blurb="Live Meta Ad Library search with longevity and scaling signals — clone the ads that are quietly minting money."
              />
            )}
            {pane === "scriptStudio" && (
              <ComingSoon
                title="Script Studio"
                blurb="Log-odds lexicon from your own winners, blueprint mapper and AI scripts written in your voice."
              />
            )}
            {pane === "automation" && (
              <ComingSoon
                title="Automation"
                blurb="A node-based workflow canvas — 'when trending topic detected → draft carousel → schedule for peak time'."
              />
            )}

            {pane === "settings" && (
              <ComingSoon
                title="Settings"
                blurb="Account, Brand DNA, connected handles, billing and developer keys — all in one place."
              />
            )}

            {/* Free tools — single generic page per tool */}
            {tool && (
              <>
                <EditorialHeader eyebrow={`Free tool · ${tool.group}`} title={tool.title} lede={tool.blurb} />
                <ComingSoon title={tool.title} blurb="One-click utility — drop a handle or URL, get the data. Free forever." />
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
