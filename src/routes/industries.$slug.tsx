import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ContactButton } from "@/components/ContactModal";
import { industries } from "@/lib/site-data";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const item = industries.find((s) => s.slug === params.slug);
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
      : { meta: [{ title: "Industry not found" }, { name: "robots", content: "noindex" }] },
  component: IndustryDetail,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-4xl text-navy">Industry not found</h1>
        <Link to="/industries" className="mt-6 inline-flex rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white">
          Back to industries
        </Link>
      </div>
      <SiteFooter />
    </div>
  ),
});

function IndustryDetail() {
  const { item } = Route.useLoaderData();
  const others = industries.filter((i) => i.slug !== item.slug);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero eyebrow="Industry" title={item.title} intro={item.tagline} />

      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
          {/* Intro */}
          <div className="max-w-3xl">
            <p className="eyebrow">Why {item.title}</p>
            <h2 className="mt-2 font-display text-3xl text-navy sm:text-4xl">{item.tagline}</h2>
            <p className="mt-4 text-[17px] leading-relaxed text-foreground/75">{item.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ContactButton subject={`${item.title} industry`}>Book a consultation</ContactButton>
              <Link
                to="/industries"
                className="rounded-full border border-navy/20 bg-white px-6 py-3 text-sm font-semibold text-navy hover:border-navy/60"
              >
                All industries
              </Link>
            </div>
          </div>

          {/* Challenges + Approach */}
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
              <p className="eyebrow">Key challenges</p>
              <h3 className="mt-2 text-2xl">What we hear from teams like yours</h3>
              <ul className="mt-5 space-y-3">
                {item.keyChallenges.map((c: string, i: number) => (
                  <li key={i} className="flex gap-3 text-foreground/80">
                    <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-brand-green" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-sky/30 p-6 sm:p-8">
              <p className="eyebrow">Our approach</p>
              <h3 className="mt-2 text-2xl">How we work with you</h3>
              <ol className="mt-5 space-y-4">
                {item.ourApproach.map((a: string, i: number) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy font-display text-sm text-white">
                      {i + 1}
                    </span>
                    <span className="text-foreground/80">{a}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Features */}
          <div className="mt-16">
            <p className="eyebrow">What you get</p>
            <h3 className="mt-2 text-2xl sm:text-3xl">Built for {item.title.toLowerCase()}</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {item.features.map((f: { title: string; body: string }, i: number) => (
                <div key={i} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                  <p className="font-display text-lg text-navy">{f.title}</p>
                  <p className="mt-2 text-sm text-foreground/70">{f.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          {item.outcomes && (
            <div className="mt-16 rounded-2xl border border-border bg-secondary/40 p-8 sm:p-12">
              <p className="eyebrow">Outcomes</p>
              <h3 className="mt-2 text-2xl text-navy sm:text-3xl">What changes for your team</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {item.outcomes.map((o: string, i: number) => (
                  <div key={i} className="rounded-xl border border-border bg-white p-5 shadow-sm">
                    <p className="text-foreground/80">{o}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <ContactButton variant="primary" subject={`${item.title} industry`}>
                  Contact us
                </ContactButton>
              </div>
            </div>
          )}

          {/* Other industries */}
          <div className="mt-16">
            <h3 className="text-xl text-navy">Other industries we serve</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  to="/industries/$slug"
                  params={{ slug: o.slug }}
                  className="group relative rounded-lg border border-border bg-white p-4 text-sm hover:border-navy/40 hover:shadow-md"
                >
                  <span aria-hidden className="absolute left-0 top-0 h-full w-0.5 rounded-l-lg bg-navy/60 group-hover:bg-brand-blue" />
                  <p className="pl-2 font-semibold text-navy">{o.title}</p>
                  <p className="mt-1 pl-2 text-xs text-foreground/60">Learn more →</p>
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
