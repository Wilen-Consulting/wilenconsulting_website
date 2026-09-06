import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ContactButton } from "@/components/ContactModal";
import { caseStudies, type CaseStudy } from "@/lib/site-data";

function MetricCard({ label, value, tone }: { label: string; value: string; tone: "before" | "after" }) {
  return (
    <div className={`rounded-2xl border p-6 text-center ${tone === "after" ? "border-brand-green/40 bg-sky/40" : "border-border bg-white"}`}>
      <p className="text-xs font-semibold uppercase tracking-widest text-foreground/60">{label}</p>
      <p className={`mt-2 font-display text-5xl ${tone === "after" ? "text-brand-green" : "text-navy"}`}>{value}</p>
      <p className="mt-1 text-xs uppercase tracking-wider text-foreground/50">{tone === "after" ? "After" : "Before"}</p>
    </div>
  );
}

export function CaseStudyPage({ item }: { item: CaseStudy }) {
  const hasMetrics = item.before.metricValue && item.after.metricValue;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero
        eyebrow={`Case study · ${item.industry}`}
        title={
          <span className="flex flex-wrap items-center gap-4">
            {item.logo && (
              <img
                src={item.logo}
                alt={`${item.title} logo`}
                className="h-14 w-auto max-w-[120px] shrink-0 object-contain sm:h-16"
                loading="lazy"
                decoding="async"
              />
            )}
            <span>{item.title}</span>
          </span>
        }
        intro={item.intro}
      />

      {item.image && (
        <section className="bg-background">
          <div className="mx-auto max-w-5xl px-4 pt-10 sm:px-6">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
              <img
                src={item.image}
                alt={`${item.title} project`}
                className="w-full rounded-xl object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>
      )}

      <section className="bg-background">
        <div className="mx-auto max-w-6xl space-y-6 px-4 py-14 sm:px-6">
          {/* Row 1: Before + Solution side-by-side */}
          <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-foreground/10 font-display text-sm text-foreground/70">1</span>
              <p className="text-xs font-semibold uppercase tracking-widest text-foreground/60">Before</p>
            </div>
            <h2 className="mt-3 font-display text-2xl text-navy">Where they started</h2>
            <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-foreground/75">
              {item.before.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>

          {/* Step 2: Solution */}
          <div className="rounded-2xl border border-brand-blue/30 bg-sky/20 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-blue font-display text-sm text-white">2</span>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">Our Solution</p>
            </div>
            <h2 className="mt-3 font-display text-2xl text-navy">{item.solution.heading}</h2>
            <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-foreground/75">
              {item.solution.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
          </div>

          {/* Row 2: Benefits + After side-by-side */}
          <div className="grid gap-6 md:grid-cols-2">
          {/* Step 3: Benefits, compact scannable list */}
          <div className="rounded-2xl border border-border bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-green font-display text-sm text-white">3</span>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-green">What this does for the client</p>
            </div>
            <h3 className="mt-3 font-display text-2xl text-navy">{item.benefits.heading}</h3>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2 md:grid-cols-1">
              {item.benefits.items.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5 rounded-lg bg-secondary/40 p-3 text-[14px] leading-snug text-foreground/80">
                  <span aria-hidden className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-green text-[11px] text-white">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Step 4: After */}
          <div className="rounded-2xl border border-border bg-sky/30 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-navy font-display text-sm text-white">4</span>
              <p className="text-xs font-semibold uppercase tracking-widest text-navy">After</p>
            </div>
            <h2 className="mt-3 font-display text-2xl text-navy">The result</h2>
            <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-foreground/75">
              {item.after.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
          </div>

          {/* Metrics */}
          {hasMetrics && (
            <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
              <MetricCard tone="before" label={item.before.metricLabel!} value={item.before.metricValue!} />
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-white">→</div>
              <MetricCard tone="after" label={item.after.metricLabel!} value={item.after.metricValue!} />
            </div>
          )}

          <div className="rounded-2xl border border-border bg-white p-8 text-center shadow-sm sm:p-12">
            <p className="font-display text-2xl text-navy sm:text-3xl">Want results like these for your business?</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <ContactButton subject={`Case study: ${item.title}`}>Talk about your project</ContactButton>
              <Link
                to="/case-studies"
                className="rounded-full border border-navy/20 bg-white px-6 py-3 text-sm font-semibold text-navy hover:border-navy/60"
              >
                More case studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
