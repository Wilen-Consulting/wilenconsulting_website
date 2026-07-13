import { createFileRoute } from "@tanstack/react-router";
import { User } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import { PageHero } from "@/components/PageHero";
import { testimonials } from "@/lib/site-data";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials | Wilen Consulting" },
      { name: "description", content: "Kind words from real business owners who've worked with Wilen Consulting." },
    ],
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero
        eyebrow="What clients say"
        title={<>Real businesses. <span className="text-brand-blue">Real time saved.</span></>}
        intro="A few of the businesses that traded aggravation for efficiency, in their own words."
      />
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col justify-between rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
                <div>
                  <span className="font-display text-5xl leading-none text-brand-green">&ldquo;</span>
                  <blockquote className="-mt-3 font-display text-xl leading-tight text-navy sm:text-2xl">{t.quote}</blockquote>
                  <p className="mt-4 text-sm text-foreground/70">{t.body}</p>
                </div>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  {t.image ? (
                    <img src={t.image} alt="" className="h-12 w-12 rounded-full object-cover ring-1 ring-border" loading="lazy" decoding="async" />
                  ) : (
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-sky/50 text-navy ring-1 ring-border" aria-hidden>
                      <User className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-navy">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-14 rounded-3xl border border-border bg-sky/20 p-8 text-center md:p-12">
            <h3 className="text-2xl sm:text-3xl">Ready to become our next success story?</h3>
            <p className="mt-3 text-foreground/75">
              Tell us what's slowing your business down. We'll figure out the fix together.
            </p>
          </div>
        </div>
      </section>
      <ContactSection compact />
      <SiteFooter />
    </div>
  );
}
