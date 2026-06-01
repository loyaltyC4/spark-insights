
# Activity Mint — Studio Dashboard Redesign

Goal: turn the current "numbers dashboard" into a Higgsfield-style **content studio** that feels editorial, premium, and actionable — cohesive with the landing page's Notion-doodle + mint aesthetic, but elevated for daily power-use.

## 1. Design language (cohesive with landing)

**Carry over from landing:**
- Mint/cream palette, oklch tokens already in `styles.css`
- Geist typography, generous tracking on eyebrows
- Hand-drawn doodle accents (sparingly — as personality, not chrome)

**New for studio (higher-end, less "AI-slop"):**
- **Editorial type scale**: serif display (Instrument Serif) for section H1s paired with Geist body — the magazine feel competitors don't have
- **Surface system**: 3 tiers — `paper` (cream base), `card` (white w/ 1px hairline + soft inset shadow), `feature` (gradient mesh w/ mint glow). No flat grey rectangles.
- **Micro-motion**: 250ms ease-out entrance per card, number count-up on KPIs, hover lift on actionables. Never bouncy.
- **Density**: airy on Pulse, dense on Studio (like Linear/Higgsfield).
- **No purple gamification spam** — streaks/XP demoted to a single status pill in topbar.

## 2. Information architecture (action-first, not metric-first)

Sidebar restructured into 3 verbs the user comes back for:

```text
CREATE          ← daily destination
  Studio        (Higgsfield-style canvas: pick format → generate carousel/post)
  Script Lab    (hooks, captions from brand voice)
  Calendar      (queue + best-time slots)

UNDERSTAND      ← the "why"
  Pulse         (snapshot: 4 KPIs + 1 hero insight + today's action)
  Audience      (personas, mood, active times)
  Sentiment     (themes, quotes, vibe cloud)

OUTPERFORM      ← competitive edge
  Trends        (rising formats, hooks, sounds)
  Ad Library    (competitor ads, locked = Pro)
  Competitors   (locked = Pro)
```

Demoted: Rewards moves to a slim drawer (not a top-level pane).

## 3. New flagship: **Studio** (the Higgsfield-equivalent)

The page that justifies daily return. Layout:

```text
┌─────────────────────────────────────────────────────────┐
│  STUDIO · @studio_mint                          [Brand] │
│                                                          │
│  What are we making today?                              │
│  ┌──────────────────────────────────────────────────┐  │
│  │ [+] Describe the post...                  [Gen→] │  │
│  │  Format: Carousel ▾   Goal: Saves ▾   Tone: ▾   │  │
│  └──────────────────────────────────────────────────┘  │
│                                                          │
│  Start from a winning recipe ↓                          │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐               │
│  │ How │ │ B/A │ │Hook │ │Story│ │ Ad  │  ← framework  │
│  │ -To │ │     │ │ +   │ │ arc │ │ rip │    cards w/   │
│  │     │ │     │ │Proof│ │     │ │     │    mini doodle│
│  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘               │
│                                                          │
│  Pulled from your audience right now:                   │
│  • "tutorial" mentions +40% → 3 idea cards             │
│  • Thursday 7pm is your peak → schedule slot           │
│  • Rival posted Reels 4× this week → counter-angle     │
└─────────────────────────────────────────────────────────┘
```

Below: **Generated posts grid** (carousel previews like Higgsfield's video grid), each with: thumbnail, predicted mint-impact score, "Schedule / Refine / Discard".

## 4. Pulse redesign (Understand, not Brag)

Replace the 4-tile metric wall with:

- **Headline card** (editorial hero): one sentence in serif — *"This week, your Reels are working. Saves are up 3.2× — your audience is asking to be taught."* + supporting sparkline.
- **3 KPI chips** (small, secondary): Mint Score · Reach · Engagement — clickable to drill in.
- **Today's move** (full-width action card): one specific thing to do today, with a "Do it in Studio →" CTA that deep-links into Studio prefilled.
- **Brand DNA strip** (from screenshot 2): voice / visual / audience / cadence — but redesigned as horizontal editorial bars, not the busy 6-row layout.

## 5. Component library additions

- `EditorialHeader` — serif H1 + eyebrow + meta row
- `InsightCard` — hero variant, supporting variant
- `RecipeCard` — framework picker (Higgsfield-style)
- `PostPreview` — carousel/reel thumbnail with score chip
- `BrandDNAStrip` — compact horizontal version
- `ActionBar` — sticky generate prompt
- `KpiChip` — small interactive metric (replaces big KpiCards)

## 6. Files

**New routes/panes** (in `Dashboard.tsx` switch):
- `src/components/dashboard/studio/Studio.tsx`
- `src/components/dashboard/studio/RecipePicker.tsx`
- `src/components/dashboard/studio/GenerateBar.tsx`
- `src/components/dashboard/studio/PostPreviewGrid.tsx`
- `src/components/dashboard/pulse/HeadlineInsight.tsx`
- `src/components/dashboard/pulse/KpiChips.tsx`
- `src/components/dashboard/pulse/TodaysMove.tsx`
- `src/components/dashboard/pulse/BrandDNAStrip.tsx`
- `src/components/dashboard/shared/EditorialHeader.tsx`
- `src/components/dashboard/shared/SurfaceCard.tsx`

**Edited:**
- `src/components/dashboard/Dashboard.tsx` — new IA (Create/Understand/Outperform groups)
- `src/components/dashboard/Sidebar.tsx` — grouped nav + demoted rewards
- `src/components/dashboard/PaneHeader.tsx` — editorial restyle
- `src/styles.css` — add serif font, surface tokens, mesh-gradient utility
- `src/lib/mock-dashboard.ts` — add recipes, generated posts, today's move

**Asset:**
- 5 small framework doodles for `RecipeCard` (`@/assets/doodles/recipe-*.png`)

## 7. Execution order (so you see progress fast)

1. Tokens + typography in `styles.css` (serif + surfaces) — 1 batch
2. Shared `EditorialHeader` + `SurfaceCard` + sidebar regroup
3. **Pulse redesign** (headline + chips + today's move + brand DNA strip)
4. **Studio pane** (the flagship — generate bar + recipes + post grid)
5. Polish: micro-motion, mesh gradients, mock data wiring

I'll ship in that order and stop after Studio for your review before touching Audience/Sentiment/Trends.

---

**Out of scope this round:** real AI generation, real scraping, payments. All Studio outputs are mocked previews — same approach Higgsfield uses for marketing screenshots.
