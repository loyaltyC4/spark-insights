import persona1 from "@/assets/avatars/persona-1.jpg";
import persona2 from "@/assets/avatars/persona-2.jpg";
import persona3 from "@/assets/avatars/persona-3.jpg";
import commenter1 from "@/assets/avatars/commenter-1.jpg";
import commenter2 from "@/assets/avatars/commenter-2.jpg";
import commenter3 from "@/assets/avatars/commenter-3.jpg";
import commenter4 from "@/assets/avatars/commenter-4.jpg";
import profile from "@/assets/avatars/profile.jpg";
import topPost from "@/assets/posts/top-post.jpg";

export type TimeRange = "7d" | "30d" | "90d";

export const profileData = {
  handle: "studio_mint",
  avatar: profile,
  followers: 48_200,
  posts: 312,
  tagline: "Fresh insights for @studio_mint",
};

export const sentimentByRange: Record<
  TimeRange,
  { joy: number; curiosity: number; concern: number; dominant: string; rising: string }
> = {
  "7d": { joy: 64, curiosity: 22, concern: 14, dominant: "Euphoria", rising: "Curiosity" },
  "30d": { joy: 58, curiosity: 28, concern: 14, dominant: "Joy", rising: "Wonder" },
  "90d": { joy: 51, curiosity: 31, concern: 18, dominant: "Love", rising: "Nostalgia" },
};

export const spectrumByRange: Record<TimeRange, { label: string; joy: number; curiosity: number; concern: number }[]> = {
  "7d": [
    { label: "Mon", joy: 40, curiosity: 25, concern: 12 },
    { label: "Tue", joy: 60, curiosity: 30, concern: 18 },
    { label: "Wed", joy: 30, curiosity: 35, concern: 22 },
    { label: "Thu", joy: 80, curiosity: 28, concern: 10 },
    { label: "Fri", joy: 45, curiosity: 40, concern: 16 },
    { label: "Sat", joy: 95, curiosity: 32, concern: 8 },
    { label: "Sun", joy: 70, curiosity: 26, concern: 14 },
  ],
  "30d": [
    { label: "W1", joy: 50, curiosity: 30, concern: 15 },
    { label: "W2", joy: 65, curiosity: 28, concern: 18 },
    { label: "W3", joy: 72, curiosity: 35, concern: 12 },
    { label: "W4", joy: 58, curiosity: 40, concern: 20 },
  ],
  "90d": [
    { label: "M1", joy: 48, curiosity: 32, concern: 20 },
    { label: "M2", joy: 62, curiosity: 30, concern: 16 },
    { label: "M3", joy: 55, curiosity: 38, concern: 18 },
  ],
};

export const personas = [
  {
    name: "The Archivist",
    avatar: persona1,
    age: "24–32",
    city: "Berlin",
    interests: ["Modernist", "Typography", "Print"],
    loyalty: 85,
  },
  {
    name: "Minimalist Soul",
    avatar: persona2,
    age: "18–24",
    city: "New York",
    interests: ["Tactile", "Neutral", "Slow"],
    loyalty: 72,
  },
  {
    name: "The Curator",
    avatar: persona3,
    age: "30–45",
    city: "Tokyo",
    interests: ["Craft", "Home", "Ritual"],
    loyalty: 91,
  },
];

export const catalysts = [
  {
    body: "The evolution of a workspace is never finished. Show the mess before the magic.",
    tag: "Carousel · Engagement",
    color: "yellow" as const,
    rotate: "-rotate-2",
  },
  {
    body: "Highlight the tactile texture of your new materials using macro video clips.",
    tag: "Reel · Reach",
    color: "green" as const,
    rotate: "rotate-1",
  },
  {
    body: "If we launched a physical zine, linen or leather cover? Let the audience pick.",
    tag: "Story Poll · Feedback",
    color: "peach" as const,
    rotate: "-rotate-1",
  },
  {
    body: "A 3-frame 'before / process / final' for your last commission — saves trend up 4x.",
    tag: "Carousel · Saves",
    color: "yellow" as const,
    rotate: "rotate-2",
  },
];

export const topPerformer = {
  image: topPost,
  title: "The Concrete Studio",
  sentiment: 94,
  reason:
    "High visual contrast paired with a vulnerable caption drove 3x more saves than your average post.",
};

export const keywords = [
  { word: "authentic", weight: 1, trending: false },
  { word: "glowup", weight: 2, trending: true },
  { word: "overpriced", weight: 0, trending: false },
  { word: "sustainable", weight: 2, trending: false },
  { word: "drop", weight: 1, trending: true },
  { word: "FOMO", weight: 3, trending: true },
  { word: "minimal", weight: 2, trending: false },
  { word: "concrete", weight: 1, trending: false },
  { word: "behind-the-scenes", weight: 2, trending: true },
  { word: "ritual", weight: 1, trending: false },
  { word: "limited", weight: 1, trending: false },
  { word: "linen", weight: 0, trending: false },
];

export const commenters = [
  { handle: "design_junkie", count: 42, avatar: commenter1, rank: 1 },
  { handle: "style_lab", count: 38, avatar: commenter2, rank: 2 },
  { handle: "minimal_mark", count: 31, avatar: commenter3, rank: 3 },
  { handle: "creative_flow", count: 27, avatar: commenter4, rank: 4 },
];

export const overlap = {
  groups: [
    { name: "Design", color: "mint", items: ["typography", "grids"] },
    { name: "Craft", color: "yellow", items: ["ceramics", "wood"] },
    { name: "Home", color: "peach", items: ["interior", "ritual"] },
  ],
  shared: ["slow living", "natural materials"],
};
