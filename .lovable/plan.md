# Plan: Activity Mint Dashboard (v1, dashboard-only)

Focus this build on the **dashboard surface only** — no landing hero, no pricing section yet. The dashboard becomes the home route (`/`) so it's the first thing previewed. Mocked data only; AI generation and real scraper wiring come in later passes.

## Layout map

Single-page dashboard, sticky top bar + bento grid below.

```text
┌───────────────────────────────────────────────────────────────┐
│  ActivityMint  @handle  •  [7d|30d|90d]  •  Refresh  Upgrade │  Top bar
├───────────────────────────────────────────────────────────────┤
│  Profile header: avatar, @handle, followers, "Fresh insights" │  Hero strip
├──────────────────────┬────────────────────────────────────────┤
│  Sentiment Vibe      │  Audience Personas (3 cards)           │
│  (dominant + bars)   │                                        │
├──────────────────────┼────────────────────────────────────────┤
│  Emotional Spectrum (sparkline + 4 emotion pills, wide)       │
├──────────────────────┬────────────────────────────────────────┤
│  Creative Catalysts  │  Top Performer (post + "why it worked")│
│  (sticky-note ideas) │                                        │
├──────────────────────┼────────────────────────────────────────┤
│  Keyword/Hashtag Vibe Cloud (wide)                            │
├──────────────────────┬────────────────────────────────────────┤
│  Top Commenters      │  Interest Overlap (chip venn)          │
│  (leaderboard)       │                                        │
└──────────────────────┴────────────────────────────────────────┘
```

## What ships in v1

1. **Top bar** — logo mark, handle pill, timeline toggle (7d/30d/90d), Refresh button, Upgrade chip.
2. **Profile header** — avatar, @handle, follower/post count, "Fresh insights for @…" tagline.
3. **Sentiment Vibe card** — stacked bar (joy / curiosity / concern %), Dominant + Rising emotion tiles.
4. **Audience Personas (3)** — avatar, persona name, age range + city, interest chips, loyalty bar.
5. **Emotional Spectrum** — 7-day bar chart with 3 emotion colors, hover lift, day labels.
6. **Creative Catalysts** — 3–4 sticky-note style AI post ideas (rotated cards, hover-to-straighten), each with "Best for: Engagement/Reach/Feedback".
7. **Top Performer** — thumbnail + caption + sentiment bar + AI "why it worked" annotation.
8. **Vibe Cloud** — keyword/hashtag chips at varied sizes/weights (one accent color for trending).
9. **Top Commenters** — 4-column leaderboard, avatar + handle + comment count + rank color.
10. **Interest Overlap** — simple chip-venn (3 overlapping circles with shared interest chips).

Everything reads from a single mock data file so we can swap to real scraper data later without UI changes.

## Design tokens (Minted Bento direction)

Copy verbatim into `src/styles.css` (oklch equivalents of the prototype hexes):

- `--background` ≈ zinc-50 (#fafafa)
- `--foreground` ≈ zinc-950 (#09090b)
- `--primary` ≈ mint-500 (#14b8a6) / `--primary-foreground` white
- `--accent` ≈ mint-50 (#f0fdfa)
- `--card` white, `--muted` zinc-100, `--ring` mint-500/30
- Custom: `--mint-950` (#042f2e) for dark catalyst panel, `--sticky-yellow` (#fef9c3), `--sticky-green` (#dcfce7), gradient mesh background var
- Font: Geist via Google Fonts, loaded in `__root.tsx` head
- Radii: cards `rounded-[24px]`, pills `rounded-full`, pricing/big surfaces `rounded-[32px]`

## Technical structure

- New route: replace placeholder `src/routes/index.tsx` → renders `<Dashboard />`.
- `src/components/dashboard/` folder with one file per bento tile (TopBar, ProfileHeader, SentimentVibe, PersonaCard, EmotionalSpectrum, CreativeCatalysts, TopPerformer, VibeCloud, TopCommenters, InterestOverlap) + `Dashboard.tsx` composer.
- `src/lib/mock-dashboard.ts` — typed mock data (handle, personas, sentiment buckets, posts, commenters, keywords).
- Timeline toggle = local `useState` filtering the same mock dataset (different numbers per range).
- `src/styles.css` extended with tokens + gradient-mesh keyframes + float animation.
- Persona/commenter/post avatars: generate 6–8 small portrait images via image gen, save under `src/assets/avatars/`, import as ES6.
- Top-performer post thumbnail: 1 generated image under `src/assets/posts/`.
- `__root.tsx` head: update title/description to "Activity Mint — Fresh Instagram insights" and add Geist font preconnect + link tag.

## Out of scope for this pass

- Landing hero with @handle input, pricing tiers, footer marketing (next pass).
- Lovable Cloud / auth / DB persistence.
- Real scraper integration and real Lovable AI calls.
- Multi-account switching, search.

Once you approve, I'll build straight through the file list above.