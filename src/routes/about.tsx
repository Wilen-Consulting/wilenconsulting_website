import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ContactButton } from "@/components/ContactModal";
import aboutIllustration from "@/assets/about.svg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Aviva Wilen | Wilen Consulting" },
      { name: "description", content: "Meet Aviva Wilen, the engineer and consultant helping business owners raise their bottom line by cutting through the clutter." },
    ],
  }),
  component: About,
});

const principles = [
  {
    title: "See the whole picture, from start to finish.",
    body: "What systems are involved? Which people are involved? Is there existing software that can speed up the process?",
  },
  {
    title: "Pick out inefficiencies in the system.",
    body: "Is time being wasted due to a problem in workflow, communication, or software optimization? Are errors being made unnecessarily?",
  },
  {
    title: "Develop the most effective solution.",
    body: "Because I'm a software pro, I can find and teach you how to implement the right tool that will scale your business.",
  },
];

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero
        eyebrow="About"
        title={<>I wasn't born a business consultant.</>}
        intro="The field found me, through the back door."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
          <div className="mb-10 flex items-center justify-center">
            <img src={aboutIllustration} alt="" className="h-32 w-32 object-contain sm:h-36 sm:w-36" />
          </div>

          {/* Lead */}
          <p className="text-center font-display text-2xl leading-snug text-navy sm:text-3xl">
            My degree was in engineering, where I specialized in mechanical design | HVAC and automotive.
          </p>
          <p className="mt-4 text-center text-lg text-foreground/70">
            Learning and practicing engineering broadened my vision to:
          </p>

          {/* Three principle cards */}
          <div className="mt-10 space-y-4">
            {principles.map((p, i) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy font-display text-sm text-white">
                    0{i + 1}
                  </span>
                  <div>
                    <h2 className="font-display text-xl leading-tight text-navy sm:text-2xl">{p.title}</h2>
                    <p className="mt-2 text-base leading-relaxed text-foreground/75">{p.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Story */}
          <div className="mt-14 space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              What followed is that I began to notice how my co-workers, clients, and acquaintances were dealing with unnecessary aggravation due to inefficiency.
            </p>
            <p>
              So I gave them a piece of my mind. And heart. In the form of practical, hands-on advice.
            </p>
            <p className="rounded-xl border-l-4 border-brand-green bg-sky/20 p-5 font-display text-xl text-navy sm:text-2xl">
              "Thank you for saving me so much time and money!"
            </p>
            <p>
              The feedback rushed in from grateful business owners, over and over again.
            </p>
            <p>
              What started out as a side job became my new passion | and full-time career.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-2xl border border-border bg-sky/20 p-6 text-center sm:p-8">
            <p className="font-display text-2xl text-navy sm:text-3xl">Want to join my happy clients?</p>
            <div className="mt-5 flex justify-center">
              <ContactButton subject="About Aviva">
                Start a conversation <span aria-hidden>→</span>
              </ContactButton>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
