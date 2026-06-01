import { useState } from "react";
import { Sparkles, ChevronDown, Paperclip } from "lucide-react";
import { recipes } from "@/lib/mock-dashboard";

interface Props {
  recipeId: string;
}

const GOALS = ["Saves", "Reach", "Shares", "Comments", "Profile visits"];
const FORMATS = ["Reel", "Carousel", "Photo", "Story"];
const TONES = ["Authoritative", "Playful", "Editorial", "Warm"];

export function GenerateBar({ recipeId }: Props) {
  const recipe = recipes.find((r) => r.id === recipeId) ?? recipes[0];
  const [prompt, setPrompt] = useState("");

  return (
    <div className="surface-card relative overflow-hidden rounded-[22px] p-1.5">
      <div className="rounded-[18px] border border-hairline bg-paper/60 p-4">
        <div className="flex items-start gap-3">
          <button className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg border border-hairline bg-card text-muted-foreground transition-colors hover:text-foreground">
            <Paperclip className="size-4" />
          </button>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={`Describe the ${recipe.format.toLowerCase()} you want — or leave blank to let ${recipe.name} write it…`}
            rows={2}
            className="flex-1 resize-none bg-transparent text-[14px] leading-relaxed text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
          />
          <button className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-foreground px-4 py-2.5 text-[13px] font-semibold text-background transition-transform hover:scale-[1.02]">
            <Sparkles className="size-3.5" /> Generate
          </button>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-hairline pt-3">
          <Chip label="Recipe" value={recipe.name} />
          <Chip label="Format" value={recipe.format} options={FORMATS} />
          <Chip label="Goal" value="Saves" options={GOALS} />
          <Chip label="Tone" value="Authoritative" options={TONES} />
          <Chip label="Length" value="30–60s" />
          <span className="ml-auto text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            ✦ Calibrated to @studio_mint
          </span>
        </div>
      </div>
    </div>
  );
}

function Chip({
  label,
  value,
  options,
}: {
  label: string;
  value: string;
  options?: string[];
}) {
  return (
    <button className="group inline-flex items-center gap-1.5 rounded-full border border-hairline bg-card px-2.5 py-1 text-[11px] transition-colors hover:border-foreground/30">
      <span className="font-semibold uppercase tracking-wider text-muted-foreground/70 text-[9px]">
        {label}
      </span>
      <span className="font-semibold text-foreground">{value}</span>
      {options && <ChevronDown className="size-3 text-muted-foreground" />}
    </button>
  );
}
