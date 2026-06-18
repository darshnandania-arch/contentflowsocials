export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-gradient-hero">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center md:py-24">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        )}
        <h1 className="mt-3 text-balance text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}