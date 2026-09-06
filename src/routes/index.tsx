import { createFileRoute, Link } from "@tanstack/react-router";
import { User } from "lucide-react";


import aboutIllustration from "@/assets/about.svg";
import frustrationIcon from "@/assets/frustration.svg";
import reachGoalsIcon from "@/assets/reach-goals.svg";
import happyOfficeIcon from "@/assets/happy-office.svg";
import mondayIllustration from "@/assets/monday.svg";
import heroTiles from "@/assets/hero-shapes.svg";
import upIllustration from "@/assets/up.svg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import { ContactButton } from "@/components/ContactModal";
import { testimonials } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wilen Consulting | Automate your business backend" },
      { name: "description", content: "Wilen Consulting helps business owners automate processes, workflows, and communication." },
    ],
  }),
  component: Index,
});

const promise = [
  { title: "Professional", body: "You can feel confident leaning on our years of experience and education as we make a quick but accurate diagnosis of your business's needs." },
  { title: "Personal", body: "After assessing the state of your business, we'll design a plan of action that's tailor made to suit your business." },
  { title: "Practical", body: "With our trademark patience, skill, and knowledge, we'll hold your hand until you're comfortable using the efficiency-generating tools, or implementing the changes we've suggested." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 tile-bg opacity-60" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-16 pt-12 sm:px-6 md:pt-20 lg:grid-cols-12 lg:gap-8 lg:pb-24">
          <div className="lg:col-span-7">
            <span className="eyebrow animate-rise">Systems &amp; Automation Consulting</span>
            <h1 className="mt-4 font-display text-4xl leading-[0.98] tracking-tight text-navy animate-rise delay-100 sm:text-5xl md:text-6xl lg:text-7xl">
              Is the backend of your business{" "}
              <span className="text-brand-blue">dragging you down?</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-foreground/70 animate-rise delay-200 sm:text-lg">
              Save yourself time, money, and aggravation by automating processes, workflows, and communication.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 animate-rise delay-300 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <ContactButton subject="Grow my business">
                Yes! I want to grow my business!
                <span aria-hidden>→</span>
              </ContactButton>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:border-navy/60 sm:px-6 sm:py-3.5"
              >
                Meet Aviva
              </Link>
            </div>
          </div>

          {/* Hero visual — hidden on mobile */}
          <div className="relative hidden animate-drop delay-300 sm:block lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[180px] sm:max-w-sm md:max-w-md lg:max-w-xl">
              <img src={heroTiles} alt="Wilen Consulting brand tiles" className="h-auto w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="border-t border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow animate-rise">Sound familiar?</span>
            <h2 className="mt-3 text-3xl animate-rise delay-100 sm:text-4xl md:text-5xl">
              The frustration is real, <span className="text-brand-blue">and it's fixable.</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
            {[
              { icon: frustrationIcon, title: "Tired of haggling over petty details?", body: "Ready to abolish those error-induced headaches?" },
              { icon: reachGoalsIcon, title: "Wish you looked forward to Mondays?", body: "Do you wish you could wake up and look forward to a more productive day on the job?" },
              { icon: happyOfficeIcon, title: "A positive work atmosphere isn't luck.", body: "And a dynamic, thriving business doesn't create itself." },
            ].map((c, i) => {
              const delays = ["delay-100", "delay-200", "delay-300"];
              return (
                <article
                  key={c.title}
                  className={`group rounded-2xl border border-border bg-background p-5 transition hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-xl animate-rise ${delays[i]} sm:p-8`}
                >
                  <div className="flex items-center gap-4 md:block">
                    <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-secondary animate-drop ${delays[i]} md:mb-5 md:h-20 md:w-20`}>
                      <img src={c.icon} alt="" className="h-10 w-10 md:h-14 md:w-14" />
                    </div>
                    <h3 className="min-w-0 text-lg sm:text-xl md:text-2xl">{c.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-foreground/70">{c.body}</p>
                </article>
              );
            })}

          </div>
        </div>
      </section>

      {/* SCIENCE OF SUCCESS — lighter band */}
      <section className="relative overflow-hidden bg-sky/30">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24">
          <div className="text-center animate-rise md:text-left">
            <span className="eyebrow">The Wilen Promise</span>
            <h2 className="mt-3 text-3xl animate-rise delay-100 sm:text-4xl md:text-5xl">There's a science to success.</h2>
            <p className="mt-4 max-w-lg text-foreground/75 animate-rise delay-200 md:mx-0 mx-auto">
              Change is possible. It's within reach. Let's make Monday great again, together.
            </p>
            <div className="mt-8 flex justify-center animate-rise delay-300 md:justify-start">
              <ContactButton subject="Grow my business">
                Yes! I want to grow my business!
                <span aria-hidden>→</span>
              </ContactButton>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img src={mondayIllustration} alt="A brighter Monday" className="h-64 w-auto animate-drop delay-200 sm:h-72 md:h-96" />
          </div>
        </div>
      </section>

      {/* WILEN PROMISE */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
          <div className="animate-rise">
            <span className="eyebrow">The Wilen Promise</span>
            <h2 className="mt-3 text-3xl animate-rise delay-100 sm:text-4xl md:text-5xl">
              Professional. <span className="text-brand-blue">Personal.</span>{" "}
              <span className="text-brand-green">Practical.</span>
            </h2>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {promise.map((p, i) => {
              const delays = ["delay-100", "delay-200", "delay-300"];
              return (
                <li key={p.title} className={`relative rounded-2xl border border-border bg-white p-6 shadow-sm animate-rise ${delays[i]} sm:p-8`}>
                  <span className="absolute -top-4 left-6 rounded-full bg-navy px-3 py-1 font-display text-sm text-white">
                    0{i + 1}
                  </span>
                  <h3 className="text-2xl">{p.title}.</h3>
                  <p className="mt-3 text-sm text-foreground/70">{p.body}</p>
                </li>
              );
            })}
          </ol>
          <div className="mt-12 grid gap-4 rounded-3xl border border-border bg-sky/20 p-6 text-center animate-rise delay-200 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6 sm:p-6 sm:text-left md:p-8">
            <div>
              <p className="font-display text-2xl text-navy sm:text-2xl md:text-3xl">
                Off the 9-5 treadmill. <span className="text-brand-green">Onto the elevator of success!</span>
              </p>
              <div className="mt-4 flex justify-center sm:justify-start">
                <ContactButton subject="Grow my business">
                  Yes! I want to grow my business!
                  <span aria-hidden>→</span>
                </ContactButton>
              </div>
            </div>
            <img src={upIllustration} alt="" className="mx-auto h-28 w-auto animate-drop delay-200 sm:h-32 md:h-36" />

          </div>
        </div>
      </section>

      {/* MEDICAL BILLING TEASER */}
      <section className="border-t border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
          <div className="rounded-3xl border border-border bg-sky/20 p-8 animate-rise delay-100 md:p-12">
            <span className="eyebrow">Featured system</span>
            <h2 className="mt-3 text-3xl animate-rise delay-100 sm:text-4xl md:text-5xl">
              HIPAA Compliant <span className="text-brand-blue">Medical Billing System</span>
            </h2>
            <p className="mt-4 font-display text-xl text-navy/80 animate-rise delay-200">Stop chasing claims. Start closing them.</p>
            <p className="mt-3 max-w-2xl text-foreground/70 animate-rise delay-200">
              Our medical billing system automates claim submissions, payer negotiations, and HIPAA-compliant paperwork for medical practices.
            </p>
            <div className="mt-6 animate-rise delay-300">
              <Link
                to="/$slug"
                params={{ slug: "medical-billing" }}
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue"
              >
                See our medical billing system <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MEET THE FOUNDER preview */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 md:grid-cols-5 md:items-center md:py-24">
          <div className="animate-rise md:col-span-2">
            <div className="mx-auto flex w-full max-w-[180px] items-center justify-center sm:max-w-[220px] md:max-w-xs">
              <img src={aboutIllustration} alt="Meet the founder" className="h-auto w-full" />
            </div>
          </div>

          <div className="animate-rise delay-200 md:col-span-3">
            <span className="eyebrow">Meet the founder</span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">
              Aviva Wilen <span className="block text-brand-blue">BSME, Software and Systems Consultant</span>
            </h2>
            <p className="mt-4 font-display text-xl text-navy/80">Tech whiz. Engineering expert. Solution finder.</p>
            <p className="mt-4 text-foreground/75">
              My broad-picture mindset, technical expertise, and software knowledge will turn your business into a self-running machine. I've seen the frustration and not-so-blissful ignorance from backstage. And I'm determined to help as many business owners as I can raise their bottom line by cutting through the unnecessary clutter. Because my brain is uniquely wired and trained to oil the wheels of your business, so that you won't even feel the bumps in the road.
            </p>
            <div className="mt-6">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-display text-lg text-navy underline decoration-brand-green decoration-4 underline-offset-4 hover:decoration-brand-blue"
              >
                More about Aviva →
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* TESTIMONIALS preview */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
          <div className="animate-rise">
            <span className="eyebrow">What clients say</span>
            <h2 className="mt-3 text-3xl animate-rise delay-100 sm:text-4xl md:text-5xl">Kind words from real business owners.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.slice(0, 2).map((t, i) => {
              const delays = ["delay-100", "delay-200"];
              return (
                <figure key={t.name} className={`flex flex-col justify-between rounded-2xl border border-border bg-background p-6 animate-rise ${delays[i]} sm:p-8`}>
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
              );
            })}
          </div>
          <div className="mt-8 text-center animate-rise delay-200">
            <Link to="/testimonials" className="inline-flex items-center gap-2 font-display text-lg text-navy underline decoration-brand-green decoration-4 underline-offset-4 hover:decoration-brand-blue">
              More fabulous reviews →
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </div>
  );
}
