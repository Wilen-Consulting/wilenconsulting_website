import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import { PageHero } from "@/components/PageHero";
import { industries } from "@/lib/site-data";

export const Route = createFileRoute("/industries/")({
  head: () => ({
    meta: [
      { title: "Top Industries | Wilen Consulting" },
      { name: "description", content: "Software and systems built for medical billing, retail/e-commerce, warehouse management, and ABA practices." },
    ],
  }),
  component: IndustriesIndex,
});

function IndustriesIndex() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero
        eyebrow="Who we serve"
        title={<>Industries we know <span className="text-brand-blue">inside and out.</span></>}
        intro="The same analytical approach, applied to the specifics of how your industry actually operates."
      />
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <div className="grid gap-6 sm:grid-cols-2">
            {industries.map((ind, i) => (
              <Link
                key={ind.slug}
                to="/industries/$slug"
                params={{ slug: ind.slug }}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-navy/40 hover:shadow-lg sm:p-8"
              >
                <span aria-hidden className="absolute left-0 top-0 h-full w-1 bg-navy transition group-hover:bg-brand-blue" />
                <div className="flex items-center gap-3">
                  <span className="font-display text-xs tracking-widest text-brand-blue">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-foreground/50">
                    Industry
                  </span>
                </div>
                <h3 className="mt-3 font-display text-2xl text-navy sm:text-3xl">{ind.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-foreground/75">{ind.body}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-brand-blue">
                  Read more <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-border bg-secondary/40 p-6 sm:p-8">
            <p className="text-[15px] leading-relaxed text-foreground/80">
              Every industry we work with runs on the same foundation:{" "}
              <span className="font-semibold text-navy">Custom Portals</span>,{" "}
              <span className="font-semibold text-navy">Integrations</span>, and{" "}
              <span className="font-semibold text-navy">Custom Solutions</span>{" "}
              built around how your business actually operates.
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-border bg-white p-6 text-center sm:p-8">
            <h3 className="font-display text-xl text-navy sm:text-2xl">Don't see your industry here?</h3>
            <p className="mt-3 text-foreground/75">
              Tell us how your business runs. If it can be systematized, we can probably help.
            </p>
          </div>
        </div>
      </section>
      <ContactSection compact />
      <SiteFooter />
    </div>
  );
}
