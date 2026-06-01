import { generatedPosts, type GeneratedPost } from "@/lib/mock-dashboard";
import { Calendar, RefreshCw, Trash2, Sparkles } from "lucide-react";

const statusMap = {
  fresh: { label: "Fresh", cls: "bg-mint-50 text-mint-600" },
  scheduled: { label: "Scheduled", cls: "bg-violet-soft text-violet" },
  draft: { label: "Draft", cls: "bg-muted text-foreground/60" },
};

export function PostPreviewGrid() {
  return (
    <div>
      <div className="mb-3 flex items-end justify-between">
        <div>
          <div className="eyebrow mb-1">Generated this session</div>
          <h3 className="text-[17px] font-semibold tracking-tight">
            4 posts ready to refine
          </h3>
        </div>
        <button className="text-[11px] font-semibold text-muted-foreground hover:text-foreground">
          Open full board →
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {generatedPosts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}

function PostCard({ post }: { post: GeneratedPost }) {
  const status = statusMap[post.status];
  return (
    <article className="group flex flex-col overflow-hidden rounded-[20px] border border-hairline bg-card transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-22px_rgba(0,0,0,0.22)]">
      {/* phone preview */}
      <div className="relative aspect-[4/5] overflow-hidden bg-mesh">
        <div className="absolute inset-3 flex flex-col rounded-2xl bg-foreground/90 p-4 text-white shadow-2xl">
          <div className="flex items-center justify-between text-[10px] font-medium uppercase tracking-wider text-white/60">
            <span>{post.format}</span>
            <span>{post.recipe}</span>
          </div>
          <div className="mt-3 font-serif text-[18px] leading-tight">{post.hook}</div>
          <div className="mt-auto space-y-1.5">
            {post.slides.slice(0, 3).map((s, i) => (
              <div
                key={i}
                className="flex items-baseline gap-2 border-t border-white/10 pt-1.5 text-[11px]"
              >
                <span className="font-mono text-white/40">{s.kicker}</span>
                <span className="text-white/80">{s.line}</span>
              </div>
            ))}
          </div>
        </div>
        <span
          className={`absolute right-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-semibold ${status.cls}`}
        >
          {status.label}
        </span>
      </div>

      {/* meta */}
      <div className="flex items-center justify-between border-t border-hairline px-4 py-3">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Mint Impact
            </span>
            <span className="text-[14px] font-bold text-mint-600 tabular-nums">{post.score}</span>
          </div>
          <div className="text-[10px] text-muted-foreground">Best at {post.bestAt}</div>
        </div>
        <div className="flex items-center gap-1 opacity-70 group-hover:opacity-100">
          <IconBtn title="Schedule"><Calendar className="size-3.5" /></IconBtn>
          <IconBtn title="Refine"><Sparkles className="size-3.5" /></IconBtn>
          <IconBtn title="Regenerate"><RefreshCw className="size-3.5" /></IconBtn>
          <IconBtn title="Discard"><Trash2 className="size-3.5" /></IconBtn>
        </div>
      </div>
    </article>
  );
}

function IconBtn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <button
      title={title}
      className="grid size-7 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      {children}
    </button>
  );
}
