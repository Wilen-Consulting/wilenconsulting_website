import { createFileRoute } from "@tanstack/react-router";
import { DollarSign, Lightbulb, Handshake } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/referral-program")({
  head: () => ({
    meta: [
      { title: "Referral Program | Wilen Consulting" },
      { name: "description", content: "Refer a friend to Wilen Consulting. You get a free service hour, they get a free consultation." },
      { property: "og:title", content: "Referral Program | Wilen Consulting" },
      { property: "og:description", content: "Refer a friend to Wilen Consulting. You get a free service hour, they get a free consultation." },
    ],
  }),
  component: ReferralProgram,
});

const MAILTO_SUBJECT = "Great Resource For You";
const MAILTO_BODY = `Hi [NAME]

I hope you and your business are doing well.
My business is doing well and so am I, especially since I've revamped and reorganized my processes thanks to the wonderful services of Wilen Consulting.

Since then, I enjoy my Mondays, instead of dreading them. Aviva Wilen has seen the frustration and not so blissful ignorance from backstage, and she knows how to raise your bottom line (and mood!) by fixing mistakes you didn't even realize you were making. Her broad picture mindset, technical experience, and software knowledge have turned my business into a self running machine. I promise, she'll have you smacking your forehead in a "should have done this ages ago" moment!

Attached is an overview of Wilen Consulting's amazing services.

They told me that whoever I refer to Wilen Consulting will get a free consultation, so that makes you eligible. Don't hesitate to call Aviva, this can be a real game changer for your business!
https://drive.google.com/file/d/1E44t8ETWSEVeYYvJ14Lp1P0znPVTHptx/view`;

const MAILTO_HREF = `mailto:?subject=${encodeURIComponent(MAILTO_SUBJECT)}&body=${encodeURIComponent(MAILTO_BODY)}`;

const cards = [
  {
    icon: DollarSign,
    label: "You Receive",
    detail: "A free service hour of consulting/credit",
    accent: "text-brand-green",
    border: "border-brand-green/30",
  },
  {
    icon: Lightbulb,
    label: "They Receive",
    detail: "A free consultation",
    accent: "text-brand-blue",
    border: "border-brand-blue/30",
  },
  {
    icon: Handshake,
    label: "We Receive",
    detail: "A referred client, our favorite kind!",
    accent: "text-navy",
    border: "border-navy/20",
  },
];

function StaircaseDivider() {
  return (
    <div aria-hidden className="mx-auto flex max-w-7xl items-end justify-center gap-1.5 px-4 py-10 sm:gap-2 sm:px-6">
      {[
        { h: "h-4", c: "bg-sky" },
        { h: "h-6", c: "bg-brand-blue/70" },
        { h: "h-8", c: "bg-brand-blue" },
        { h: "h-10", c: "bg-navy" },
        { h: "h-12", c: "bg-brand-green" },
      ].map((s, i) => (
        <span key={i} className={`w-8 sm:w-12 rounded-t-md ${s.h} ${s.c}`} />
      ))}
    </div>
  );
}

function ReferralProgram() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero
        eyebrow="Referral Program"
        title="Referrals are the best compliments!"
        intro="If you saved time and money through our services, why not share with a friend and let them save as well? It's triple rewarding."
      >
        <a
          href="#the-program"
          className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-95"
        >
          Find out how it works
          <span aria-hidden>↓</span>
        </a>
      </PageHero>

      <StaircaseDivider />

      <section id="the-program" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
          <div className="text-center">
            <span className="eyebrow">How it works</span>
            <h2 className="mt-3 font-display text-3xl text-navy sm:text-4xl md:text-5xl">Our Referral Program</h2>
            <p className="mx-auto mt-4 max-w-2xl text-foreground/70">
              Everyone wins. Here's what each side gets when you send a friend our way.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map(({ icon: Icon, label, detail, accent, border }) => (
              <div
                key={label}
                className={`rounded-2xl border-2 bg-white p-8 text-center shadow-sm transition hover:shadow-md ${border}`}
              >
                <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary ${accent}`}>
                  <Icon size={28} strokeWidth={2} />
                </div>
                <p className="mt-5 font-display text-xl text-navy">{label}</p>
                <p className="mt-2 text-sm text-foreground/70">{detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href={MAILTO_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-blue"
            >
              Refer a Friend Now!
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
