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
export type PaneKey =
  | "pulse"
  | "audience"
  | "content"
  | "sentiment"
  | "competitors"
  | "rewards";

export const profileData = {
  handle: "studio_mint",
  avatar: profile,
  followers: 48_200,
  posts: 312,
  plan: "Free plan",
  tagline: "Fresh insights for @studio_mint",
};

/* ---------- Gamification ---------- */
export const game = {
  streak: 12,
  bestStreak: 19,
  level: 7,
  levelName: "Engagement Wizard",
  xp: 680,
  xpMax: 1000,
};

/* ---------- KPIs ---------- */
export type Kpi = {
  key: string;
  label: string;
  emoji: string;
  value: number;
  format: "int" | "k" | "pct" | "score";
  delta: string;
  trend: "up" | "down";
  color: string;
  spark: number[];
};

export const kpis: Kpi[] = [
  {
    key: "mint",
    label: "Mint Score",
    emoji: "💎",
    value: 75,
    format: "score",
    delta: "+8 this week",
    trend: "up",
    color: "var(--mint-500)",
    spark: [62, 64, 64, 66, 68, 70, 72, 75],
  },
  {
    key: "reach",
    label: "Reach",
    emoji: "📡",
    value: 48200,
    format: "k",
    delta: "+22%",
    trend: "up",
    color: "var(--sky)",
    spark: [28, 31, 30, 34, 33, 38, 41, 48],
  },
  {
    key: "eng",
    label: "Engagement",
    emoji: "❤️",
    value: 6.4,
    format: "pct",
    delta: "+1.1pt",
    trend: "up",
    color: "var(--coral)",
    spark: [4.8, 4.9, 5.1, 5.2, 5.6, 5.8, 6.1, 6.4],
  },
  {
    key: "mood",
    label: "Audience mood",
    emoji: "🙂",
    value: 78,
    format: "pct",
    delta: "trending positive",
    trend: "up",
    color: "var(--violet)",
    spark: [62, 65, 64, 68, 71, 73, 76, 78],
  },
];

/* ---------- Today's insights (free shows 1, rest locked) ---------- */
export type Insight = {
  icon: string;
  tone: "mint" | "violet" | "coral";
  title: string;
  action: string;
  locked?: boolean;
};

export const insights: Insight[] = [
  {
    icon: "🎬",
    tone: "mint",
    title: "Your Reels earn 3.2× more saves than photos this month. Saves are the strongest growth signal right now.",
    action: "Post 2 more Reels this week (keeps your 🔥 streak too)",
  },
  {
    icon: "⏰",
    tone: "violet",
    title: "Your audience is most awake Thursday 7–9pm — but your last 3 posts went out at 1pm.",
    action: "Schedule Thursday 7pm · ~+640 reach",
    locked: true,
  },
  {
    icon: "💬",
    tone: "coral",
    title: 'Mentions of "tutorial" spiked +40% in your comments — your audience is asking to be taught.',
    action: "See full sentiment & ideas",
    locked: true,
  },
];

/* ---------- Daily quests ---------- */
export const quests = [
  { title: "Check today's insight", reward: 10, done: true },
  { title: "Post 1 Reel", reward: 30, done: false },
  { title: "Reply to 3 comments", reward: 15, done: false },
];

/* ---------- Audience & Mood ---------- */
export const moodDonut = { positive: 78, neutral: 15, negative: 7 };

// 7 days × 12 two-hour buckets, values 0..1
export function buildHeatmap(): number[][] {
  const days = 7;
  const slots = 12;
  const out: number[][] = [];
  for (let d = 0; d < days; d++) {
    const row: number[] = [];
    for (let h = 0; h < slots; h++) {
      let v = 0.1;
      if (h >= 8) v += (h - 7) * 0.11;
      if (h >= 9 && h <= 10) v += 0.15;
      if (d === 3 || d === 6) v += 0.22;
      if (h <= 2) v = 0.06;
      row.push(Math.min(1, v));
    }
    out.push(row);
  }
  return out;
}

export const heatLabels = {
  days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  hours: ["12a", "2a", "4a", "6a", "8a", "10a", "12p", "2p", "4p", "6p", "8p", "10p"],
};

export const followerGrowth = [
  { week: "W1", value: 46060 },
  { week: "W2", value: 46380 },
  { week: "W3", value: 46720 },
  { week: "W4", value: 47010 },
  { week: "W5", value: 47280 },
  { week: "W6", value: 47620 },
  { week: "W7", value: 47930 },
  { week: "W8", value: 48200 },
];

/* ---------- Content lab ---------- */
export const bestPost = {
  image: topPost,
  title: "3 editing tricks I wish I knew sooner",
  meta: "Reel · 142k reach · 8,900 saves · 6.4% eng.",
  why: [
    { tone: "g", label: "✓ Posted Thu 7pm (peak)" },
    { tone: "g", label: "✓ Reel format (3.2× saves)" },
    { tone: "v", label: '✓ "How-to" hook' },
    { tone: "a", label: "✓ Strong first 2 sec" },
    { tone: "v", label: "✓ Saved > liked = high intent" },
  ] as { tone: "g" | "v" | "a"; label: string }[],
  takeaway:
    "Repeat the recipe: a how-to Reel, posted Thursday evening, with a 2-second hook. Your audience saves teaching content — make more of it.",
};

export const rankedPosts = [
  { n: 1, emoji: "🎬", title: "3 editing tricks…", meta: "Reel · Thu 7pm", score: 94 },
  { n: 2, emoji: "🎬", title: "My morning routine", meta: "Reel · Sun 8pm", score: 88 },
  { n: 3, emoji: "🖼️", title: "Behind the scenes", meta: "Carousel · Sat 6pm", score: 71 },
  { n: 4, emoji: "🖼️", title: "Quote of the day", meta: "Photo · Tue 1pm", score: 38 },
];

export const aiIdeas = [
  '"5 transitions in 60 seconds" — Reel, post Thu 7pm',
  '"Answering your editing questions" — tutorial Reel',
  'Carousel: "Before / after my 3 favourite edits"',
];

/* ---------- Sentiment ---------- */
export const sentimentQuotes = [
  { tone: "p", text: "This is the only account that actually teaches editing 🙌", note: "Positive · high intent" },
  { tone: "p", text: "Saved this immediately, thank you!", note: "Positive · save signal" },
  { tone: "u", text: "What app do you use for this?", note: "Neutral · question — answer it!" },
] as { tone: "p" | "n" | "u"; text: string; note: string }[];

export const sentimentThemes = [
  { emoji: "📈", title: '"tutorial / how-to"', meta: "requests to be taught", change: "+40%" },
  { emoji: "🛠️", title: '"what app/tool"', meta: "product questions", change: "+28%" },
  { emoji: "🔥", title: '"so helpful"', meta: "gratitude", change: "+12%" },
];

/* ---------- Competitors (locked) ---------- */
export const competitorPreview = {
  kpis: [
    { label: "You vs @rival", value: "+12%" },
    { label: "Their best format", value: "Reels" },
    { label: "Posting gap", value: "Tue/Fri" },
    { label: "Their mood", value: "71%" },
  ],
};

/* ---------- Rewards ---------- */
export const badges = [
  { emoji: "🔥", name: "Streak Starter", earned: true },
  { emoji: "🎬", name: "Reel Rookie", earned: true },
  { emoji: "💬", name: "Reply Hero", earned: true },
  { emoji: "📈", name: "+1k Reach", earned: true },
  { emoji: "⚔️", name: "2-Week Warrior", earned: false },
  { emoji: "👑", name: "Consistency King", earned: false },
  { emoji: "🧙", name: "Top 10%", earned: false },
];

/* ---------- Legacy (kept for sentiment + audience tiles) ---------- */
export const sentimentByRange: Record<
  TimeRange,
  { joy: number; curiosity: number; concern: number; dominant: string; rising: string }
> = {
  "7d": { joy: 64, curiosity: 22, concern: 14, dominant: "Euphoria", rising: "Curiosity" },
  "30d": { joy: 58, curiosity: 28, concern: 14, dominant: "Joy", rising: "Wonder" },
  "90d": { joy: 51, curiosity: 31, concern: 18, dominant: "Love", rising: "Nostalgia" },
};

export const spectrumByRange: Record<
  TimeRange,
  { label: string; joy: number; curiosity: number; concern: number }[]
> = {
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
    name: "Aria — The Creator",
    avatar: persona1,
    age: "22–30",
    city: "Berlin",
    interests: ["Reels", "Editing", "Aesthetic"],
    loyalty: 85,
    pitch: "Wants steady growth without burning out.",
  },
  {
    name: "Sam — Free-tool Fan",
    avatar: persona2,
    age: "18–24",
    city: "New York",
    interests: ["Stories", "Hashtags", "Snoop"],
    loyalty: 62,
    pitch: "Came for the free viewer, stays for the score.",
  },
  {
    name: "Maya — Marketer",
    avatar: persona3,
    age: "28–40",
    city: "London",
    interests: ["Reports", "Benchmark", "ROI"],
    loyalty: 91,
    pitch: "Runs 1–5 brands. Needs results fast.",
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

export const topPerformer = bestPost; // alias

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
