import { Sparkles } from "lucide-react";

interface Props {
  title: string;
  blurb: string;
}

export function ComingSoon({ title, blurb }: Props) {
  return (
    <section className="surface-feature rounded-[24px] p-12 text-center">
      <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-foreground text-background">
        <Sparkles className="size-6" />
      </div>
      <div className="eyebrow mt-5">In the lab</div>
      <h2 className="text-display mt-2 text-[32px] md:text-[40px]">{title}</h2>
      <p className="mx-auto mt-3 max-w-md text-[14px] leading-relaxed text-muted-foreground">
        {blurb}
      </p>
      <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-foreground px-4 py-2.5 text-[13px] font-semibold text-background">
        Notify me when it ships
      </button>
    </section>
  );
}
