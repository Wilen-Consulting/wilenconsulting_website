import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ContactButton } from "@/components/ContactModal";
import { services, shared } from "@/lib/site-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const item = services.find((s) => s.slug === params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: `${loaderData.item.title} | Wilen Consulting` },
            { name: "description", content: loaderData.item.body },
          ],
        }
      : { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] },
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-4xl text-navy">Service not found</h1>
        <p className="mt-4 text-foreground/70">The page you're looking for doesn't exist.</p>
        <Link to="/services" className="mt-6 inline-flex rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white">
          Back to services
        </Link>
      </div>
      <SiteFooter />
    </div>
  ),
});

function ServiceDetail() {
  const { item } = Route.useLoaderData();
  const { content } = item;
  const others = services.filter((s) => s.slug !== item.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero eyebrow="Service" title={item.title} intro={item.body} />

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          {/* Icon card + intro */}
          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_2fr] md:items-center">
            <div className="flex items-center justify-center rounded-2xl bg-sky/30 p-10">
              <img src={item.heroImage ?? item.icon} alt="" className="max-h-56 w-auto object-contain" />
            </div>
            <div>
              <p className="eyebrow">A closer look</p>
              <h2 className="mt-2 text-3xl sm:text-4xl">{item.title}</h2>
              <p className="mt-4 text-foreground/75">{item.body}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ContactButton subject={item.title}>Book a consultation</ContactButton>
                <Link
                  to="/services"
                  className="rounded-full border border-navy/20 bg-white px-6 py-3 text-sm font-semibold text-navy hover:border-navy/60"
                >
                  All services
                </Link>
              </div>
            </div>
          </div>

          {/* Problem */}
          {content.problem && (
            <div className="mt-10 grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <p className="eyebrow">The Problem</p>
                <h3 className="mt-2 text-2xl sm:text-3xl">{content.problem.title ?? "The Problem"}</h3>
                <div className="mt-4 space-y-4 text-foreground/75">
                  {content.problem.paragraphs.map((p: string, i: number) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
              {content.problem.image && (
                <div className="flex items-center justify-center rounded-2xl bg-secondary p-8">
                  <img src={content.problem.image} alt="" className="max-h-64 w-auto object-contain" />
                </div>
              )}
            </div>
          )}

          {/* Solution */}
          {content.solution && (
            <div className="mt-10 grid gap-6 md:grid-cols-2 md:items-center">
              {content.solution.image && (
                <div className="order-2 flex items-center justify-center rounded-2xl bg-sand/60 p-8 md:order-1">
                  <img src={content.solution.image} alt="" className="max-h-64 w-auto object-contain" />
                </div>
              )}
              <div className={content.solution.image ? "order-1 md:order-2" : ""}>
                <p className="eyebrow">The Solution</p>
                <h3 className="mt-2 text-2xl sm:text-3xl">{content.solution.title ?? "The Solution"}</h3>
                <div className="mt-4 space-y-4 text-foreground/75">
                  {content.solution.paragraphs.map((p: string, i: number) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Results */}
          {content.results && (
            <div className="mt-10">
              <p className="eyebrow">The Results</p>
              <h3 className="mt-2 text-2xl sm:text-3xl">{content.results.title ?? "The Results"}</h3>

              {content.results.kind === "chart" && content.results.chartImage && (
                <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-white p-6">
                  <img src={content.results.chartImage} alt="Process chart" className="mx-auto w-full max-w-3xl" />
                </div>
              )}

              {content.results.kind === "steps" && content.results.steps && (
                <>
                  {content.results.caption && (
                    <p className="mt-4 text-foreground/70">{content.results.caption}</p>
                  )}
                  {content.results.chartImage && (
                    <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-white p-6">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-blue">Before</p>
                      <img src={content.results.chartImage} alt="Before" className="mx-auto w-full max-w-2xl opacity-80" />
                    </div>
                  )}
                  <div className="mt-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-green">After</p>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {content.results.steps.map((s: { icon: string; title: string; body: string }, i: number) => (
                        <div key={i} className="relative rounded-2xl border border-border bg-white p-5 shadow-sm">
                          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-sky/40">
                            <img src={s.icon} alt="" className="h-10 w-10 object-contain" />
                          </div>
                          <p className="font-display text-lg text-navy">{s.title}</p>
                          <p className="mt-2 text-sm text-foreground/70">{s.body}</p>
                          {i < content.results!.steps!.length - 1 && (
                            <img
                              src={shared.stepArrow}
                              alt=""
                              className="pointer-events-none absolute -right-3 top-10 hidden h-6 w-auto lg:block"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {content.results.kind === "table" && content.results.tables && (
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {content.results.tables.map((tbl: { rows: string[][] }, i: number) => (
                    <div key={i} className="overflow-hidden rounded-2xl border border-border bg-white">
                      {tbl.rows.map((row: string[], r: number) => (
                        <div
                          key={r}
                          className={`grid gap-2 px-5 py-4 ${
                            r === 0 ? "bg-secondary text-navy" : "border-t border-border"
                          }`}
                          style={{ gridTemplateColumns: `repeat(${row.length}, minmax(0,1fr))` }}
                        >
                          {row.map((cell: string, c: number) => (
                            <p key={c} className={r === 0 ? "font-display text-lg text-navy" : "text-sm text-foreground/80"}>
                              {cell}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* CTA */}
          <div className="mt-10 rounded-2xl border border-border bg-white p-8 text-center shadow-sm sm:p-12">
            <h3 className="text-2xl sm:text-3xl">Ready to talk about {item.title.toLowerCase()}?</h3>
            <p className="mx-auto mt-3 max-w-xl text-foreground/70">
              Tell us about your workflow. We'll show you what's possible.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <ContactButton subject={item.title}>Contact us</ContactButton>
              <Link
                to="/case-studies"
                className="rounded-full border border-navy/20 bg-white px-6 py-3 text-sm font-semibold text-navy hover:border-navy/60"
              >
                See case studies
              </Link>
            </div>
          </div>

          {/* Other services */}
          <div className="mt-10">
            <h3 className="text-xl text-navy">Explore other services</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  to="/services/$slug"
                  params={{ slug: o.slug }}
                  className="flex items-center gap-3 rounded-xl border border-border bg-white p-4 text-sm hover:border-brand-blue/40 hover:shadow-md"
                >
                  <img src={o.icon} alt="" className="h-10 w-10 shrink-0 object-contain" />
                  <p className="font-semibold text-navy">{o.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
