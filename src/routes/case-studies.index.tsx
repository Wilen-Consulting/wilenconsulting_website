import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import { PageHero } from "@/components/PageHero";
import { caseStudies } from "@/lib/site-data";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Case Studies | Wilen Consulting" },
      { name: "description", content: "Real projects: how Wilen Consulting has automated workflows for businesses across industries." },
    ],
  }),
  component: CaseStudiesIndex,
});

function CaseStudiesIndex() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero
        eyebrow="Case studies"
        title={<>Real businesses. <span className="text-brand-blue">Real results.</span></>}
      />
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <div className="grid gap-5 sm:grid-cols-2">
            {caseStudies.map((c) => (
              <Link
                key={c.slug}
                to="/$slug"
                params={{ slug: c.slug }}
                className="group overflow-hidden rounded-2xl border border-border bg-white transition hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-xl"
              >
                {c.image ? (
                  <img src={c.image} alt={c.title} className="h-48 w-full object-cover" />
                ) : c.logo ? (
                  <div className="flex h-48 w-full items-center justify-center bg-sky/30 p-6">
                    <img src={c.logo} alt={c.title} className="max-h-32 w-auto object-contain" />
                  </div>
                ) : null}
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">{c.industry}</p>
                  <h3 className="mt-2 text-2xl">{c.title}</h3>
                  <p className="mt-3 text-sm text-foreground/70">{c.body}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-brand-blue">
                    Read the story <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ContactSection compact />
      <SiteFooter />
    </div>
  );
}
