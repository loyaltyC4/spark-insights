import { useState } from "react";
import type { TimeRange } from "@/lib/mock-dashboard";
import { profileData } from "@/lib/mock-dashboard";
import { TopBar } from "./TopBar";
import { ProfileHeader } from "./ProfileHeader";
import { SentimentVibe } from "./SentimentVibe";
import { Personas } from "./Personas";
import { EmotionalSpectrum } from "./EmotionalSpectrum";
import { CreativeCatalysts } from "./CreativeCatalysts";
import { TopPerformer } from "./TopPerformer";
import { VibeCloud } from "./VibeCloud";
import { TopCommenters } from "./TopCommenters";
import { InterestOverlap } from "./InterestOverlap";

export function Dashboard() {
  const [range, setRange] = useState<TimeRange>("7d");

  return (
    <div className="min-h-screen bg-background pb-24">
      <TopBar handle={profileData.handle} range={range} onRangeChange={setRange} />

      <main className="mx-auto max-w-7xl space-y-6 px-6 pt-8 animate-entrance">
        <ProfileHeader />

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4">
            <SentimentVibe range={range} />
          </div>
          <div className="col-span-12 lg:col-span-8">
            <Personas />
          </div>

          <div className="col-span-12">
            <EmotionalSpectrum range={range} />
          </div>

          <div className="col-span-12 lg:col-span-7">
            <CreativeCatalysts />
          </div>
          <div className="col-span-12 lg:col-span-5">
            <TopPerformer />
          </div>

          <div className="col-span-12">
            <VibeCloud />
          </div>

          <div className="col-span-12 lg:col-span-7">
            <TopCommenters />
          </div>
          <div className="col-span-12 lg:col-span-5">
            <InterestOverlap />
          </div>
        </div>
      </main>
    </div>
  );
}
