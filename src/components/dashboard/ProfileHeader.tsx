import { profileData } from "@/lib/mock-dashboard";

function fmt(n: number) {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : n.toString();
}

export function ProfileHeader() {
  return (
    <section className="relative overflow-hidden rounded-[28px] bg-mesh px-6 py-8 ring-1 ring-black/5 md:px-10 md:py-10">
      <div className="relative z-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-5">
          <img
            src={profileData.avatar}
            alt={`@${profileData.handle}`}
            width={64}
            height={64}
            className="size-16 rounded-2xl object-cover ring-2 ring-mint-500/40"
          />
          <div>
            <div className="mb-1 inline-flex items-center gap-2 rounded-full border border-mint-500/20 bg-mint-500/10 px-2.5 py-0.5">
              <span className="size-1.5 rounded-full bg-mint-500" />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-mint-600">
                Live · Fresh data
              </span>
            </div>
            <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {profileData.tagline}
            </h1>
          </div>
        </div>

        <div className="flex gap-3">
          <Stat label="Followers" value={fmt(profileData.followers)} />
          <Stat label="Posts" value={fmt(profileData.posts)} />
          <Stat label="Vibe Score" value="92" accent />
        </div>
      </div>

      <div className="pointer-events-none absolute -right-20 top-1/2 size-72 -translate-y-1/2 rounded-full bg-mint-500/15 blur-3xl animate-float" />
    </section>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div
      className={`rounded-2xl border px-4 py-3 ${
        accent ? "border-mint-500/30 bg-card" : "border-black/5 bg-card/80"
      }`}
    >
      <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
      <div
        className={`tabular-nums text-xl font-semibold ${accent ? "text-mint-600" : "text-foreground"}`}
      >
        {value}
      </div>
    </div>
  );
}
