export function ContactSection({ compact = false }: { compact?: boolean }) {
  return (
    <section id="contact" className="bg-sand">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-5 lg:gap-12">
        <div className="lg:col-span-2">
          <span className="eyebrow">Contact us</span>
          <h2 className="mt-3 text-3xl text-navy sm:text-4xl md:text-5xl">
            {compact ? "Ready when you are." : "Let's talk about your business."}
          </h2>
          <p className="mt-4 max-w-md text-foreground/70">
            Tell us what's slowing you down. We'll get back to you within a business day.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
              <a href="mailto:aviva@wilenconsulting.com" className="mt-1 block font-display text-xl text-navy hover:text-brand-blue">
                aviva@wilenconsulting.com
              </a>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">US</p>
                <a href="tel:469-431-0565" className="mt-1 block font-display text-lg text-navy">469-431-0565</a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Israel</p>
                <a href="tel:+972533166906" className="mt-1 block font-display text-lg text-navy">053-316-6906</a>
              </div>
            </div>
          </div>
        </div>

        <form
          className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8 lg:col-span-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Name</span>
              <input
                className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition focus:border-brand-blue"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Email</span>
              <input
                type="email"
                className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition focus:border-brand-blue"
                placeholder="you@company.com"
              />
            </label>
          </div>
          <label className="mt-5 block">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              What's the problem you're trying to solve?
            </span>
            <textarea
              rows={5}
              className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition focus:border-brand-blue"
              placeholder="Tell us a little about the workflow that's causing pain."
            />
          </label>
          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-95"
          >
            Send message
            <span aria-hidden>→</span>
          </button>
        </form>
      </div>
    </section>
  );
}
