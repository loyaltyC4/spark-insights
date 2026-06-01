import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "card" | "feature" | "ink" | "paper";
  eyebrow?: string;
  title?: string;
  meta?: React.ReactNode;
}

export function SurfaceCard({
  variant = "card",
  eyebrow,
  title,
  meta,
  className,
  children,
  ...rest
}: Props) {
  const surface =
    variant === "feature"
      ? "surface-feature"
      : variant === "ink"
        ? "surface-ink"
        : variant === "paper"
          ? "surface-paper border border-hairline"
          : "surface-card";

  return (
    <section
      className={cn("rounded-[22px] p-6 md:p-7", surface, className)}
      {...rest}
    >
      {(eyebrow || title || meta) && (
        <header className="mb-5 flex items-start justify-between gap-4">
          <div>
            {eyebrow && <div className="eyebrow mb-1.5">{eyebrow}</div>}
            {title && (
              <h3 className="text-[17px] font-semibold tracking-tight">{title}</h3>
            )}
          </div>
          {meta && <div className="shrink-0 text-xs text-muted-foreground">{meta}</div>}
        </header>
      )}
      {children}
    </section>
  );
}
