import { useState } from "react";
import { GenerateBar } from "./GenerateBar";
import { RecipePicker } from "./RecipePicker";
import { StudioSignals } from "./StudioSignals";
import { PostPreviewGrid } from "./PostPreviewGrid";

export function Studio() {
  const [recipe, setRecipe] = useState("howto");
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="eyebrow mb-2">Studio</div>
            <h2 className="text-display text-[34px] md:text-[44px]">
              What are we making <span className="font-serif italic">today?</span>
            </h2>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <span className="rounded-full border border-hairline bg-card px-2.5 py-1 text-[11px] font-semibold text-foreground/70">
              Brand voice: <span className="text-foreground">Authoritative</span>
            </span>
            <span className="rounded-full border border-hairline bg-card px-2.5 py-1 text-[11px] font-semibold text-foreground/70">
              ✦ 88 identity
            </span>
          </div>
        </div>
        <GenerateBar recipeId={recipe} />
      </div>

      <RecipePicker selected={recipe} onSelect={setRecipe} />
      <StudioSignals onUseRecipe={setRecipe} />
      <PostPreviewGrid />
    </div>
  );
}
