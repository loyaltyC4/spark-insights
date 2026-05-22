import { createFileRoute } from "@tanstack/react-router";
import { Dashboard } from "@/components/dashboard/Dashboard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Activity Mint — Fresh Instagram insights" },
      {
        name: "description",
        content:
          "AI-powered Instagram sentiment, audience personas, and creative post ideas. Track your @handle and see what your community actually feels.",
      },
      { property: "og:title", content: "Activity Mint — Fresh Instagram insights" },
      {
        property: "og:description",
        content:
          "AI-powered Instagram sentiment, audience personas, and creative post ideas.",
      },
    ],
  }),
  component: Dashboard,
});
