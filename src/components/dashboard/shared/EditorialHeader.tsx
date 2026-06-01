interface Props {
  eyebrow: string;
  title: string;
  lede?: string;
  right?: React.ReactNode;
}

export function EditorialHeader({ eyebrow, title, lede, right }: Props) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-6 border-b border-hairline pb-6">
      <div className="max-w-2xl">
        <div className="eyebrow mb-3">{eyebrow}</div>
        <h1 className="text-display text-[44px] md:text-[56px]">{title}</h1>
        {lede && (
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{lede}</p>
        )}
      </div>
      {right && <div className="flex items-center gap-2">{right}</div>}
    </div>
  );
}
