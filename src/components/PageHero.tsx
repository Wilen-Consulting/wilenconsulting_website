import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div aria-hidden className="absolute inset-0 -z-10 tile-bg opacity-40" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight text-navy sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-foreground/70">{intro}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
