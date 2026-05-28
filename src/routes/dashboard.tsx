import { createFileRoute } from "@tanstack/react-router";
import { Dashboard } from "@/components/dashboard/Dashboard";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Activity Mint — Dashboard" },
      {
        name: "description",
        content:
          "Your AI-powered social dashboard: sentiment, audience personas, content lab, and creative ideas.",
      },
    ],
  }),
  component: Dashboard,
});
