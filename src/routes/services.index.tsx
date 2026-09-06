import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import { PageHero } from "@/components/PageHero";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | Wilen Consulting" },
      { name: "description", content: "Custom portals, integrations, process management, and workflow improvements to propel your business forward." },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero
        eyebrow="What we do"
        title={<>What will propel your business <span className="text-brand-blue">forward?</span></>}
        intro="First, you'll need a consultation. Leave it up to an analytical, engineering mindset to identify your needs and walk you through the solution."
      />
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow">Custom Software</span>
            <h2 className="mt-3 text-2xl sm:text-3xl">Built around how you actually work.</h2>
            <p className="mt-3 text-foreground/70">
              We build software that fits your business instead of forcing your business to fit the software.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/$slug"
                params={{ slug: s.slug }}
                className="group flex flex-col rounded-2xl border border-border bg-white p-6 transition hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-secondary">
                    <img src={s.icon} alt="" className="h-9 w-9 object-contain" />
                  </div>
                  <h3 className="text-xl leading-tight sm:text-2xl">{s.title}</h3>
                </div>
                <p className="mt-4 text-sm text-foreground/70">{s.body}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-brand-blue">
                  Learn more <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-14 rounded-3xl border border-border bg-sky/20 p-8 text-center md:p-12">
            <h3 className="text-2xl sm:text-3xl">Not sure which service you need?</h3>
            <p className="mt-3 text-foreground/75">
              That's exactly what the consultation is for. Tell us what's going on. We'll figure out the fix.
            </p>
          </div>
        </div>
      </section>
      <ContactSection compact />
      <SiteFooter />
    </div>
  );
}
