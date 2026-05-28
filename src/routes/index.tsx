import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/landing/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Activity Mint — AI social insights you'll actually open" },
      {
        name: "description",
        content:
          "Track Instagram, Facebook, Reddit and LinkedIn in one playful, gamified dashboard. Sentiment, personas, AI post ideas — built on live scrapers.",
      },
      { property: "og:title", content: "Activity Mint — Freshly minted social insights" },
      {
        property: "og:description",
        content:
          "The social dashboard creators actually open every morning. Sentiment, personas, AI post ideas, streaks.",
      },
    ],
  }),
  component: Landing,
});
