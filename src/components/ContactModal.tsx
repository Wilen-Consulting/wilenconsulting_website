import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { submitContactForm } from "@/lib/contact-form";

type Ctx = { open: (subject?: string) => void; close: () => void };

const ContactModalContext = createContext<Ctx | null>(null);

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) throw new Error("useContactModal must be used within ContactModalProvider");
  return ctx;
}

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [subject, setSubject] = useState<string | undefined>(undefined);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const open = useCallback((s?: string) => {
    setSubject(s);
    setSent(false);
    setError(null);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, close]);

  const value = useMemo(() => ({ open, close }), [open, close]);

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          <button
            type="button"
            aria-label="Close contact form"
            className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
            onClick={close}
          />
          <div className="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-border px-6 py-4 sm:px-8">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-blue">Contact us</p>
                <h2 id="contact-modal-title" className="mt-1 font-display text-2xl text-navy sm:text-3xl">
                  Let's talk about your business.
                </h2>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="rounded-full p-2 text-navy/60 transition hover:bg-secondary hover:text-navy"
              >
                ✕
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-6 sm:px-8">
              {sent ? (
                <div className="py-8 text-center">
                  <p className="font-display text-2xl text-navy">Thank you!</p>
                  <p className="mt-2 text-sm text-foreground/70">
                    We got your message and will be in touch within one business day.
                  </p>
                  <button
                    onClick={close}
                    className="mt-6 inline-flex rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-brand-blue"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setError(null);
                    setSending(true);
                    const data = new FormData(e.currentTarget);
                    try {
                      await submitContactForm({
                        name: String(data.get("name") ?? ""),
                        email: String(data.get("email") ?? ""),
                        company: String(data.get("company") ?? ""),
                        message: String(data.get("message") ?? ""),
                        subject,
                      });
                      setSent(true);
                    } catch (err) {
                      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
                    } finally {
                      setSending(false);
                    }
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">Name</span>
                      <input
                        name="name"
                        required
                        className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition focus:border-brand-blue"
                        placeholder="Your name"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">Email</span>
                      <input
                        name="email"
                        required
                        type="email"
                        className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition focus:border-brand-blue"
                        placeholder="you@company.com"
                      />
                    </label>
                  </div>
                  <label className="mt-4 block">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">Company (optional)</span>
                    <input
                      name="company"
                      className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition focus:border-brand-blue"
                      placeholder="Company name"
                    />
                  </label>
                  <label className="mt-4 block">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      What's the problem you're trying to solve?
                    </span>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      defaultValue={subject ? `I'm interested in: ${subject}\n\n` : ""}
                      className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition focus:border-brand-blue"
                      placeholder="Tell us a little about the workflow that's causing pain."
                    />
                  </label>
                  {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                    <p className="text-xs text-muted-foreground">We reply within one business day.</p>
                    <button
                      type="submit"
                      disabled={sending}
                      className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-95 disabled:opacity-70"
                    >
                      {sending ? "Sending…" : "Send message"}
                      <span aria-hidden>→</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </ContactModalContext.Provider>
  );
}

/** Convenience button that opens the contact modal with an optional subject label. */
export function ContactButton({
  children,
  subject,
  className,
  variant = "primary",
}: {
  children: ReactNode;
  subject?: string;
  className?: string;
  variant?: "primary" | "navy" | "outline";
}) {
  const { open } = useContactModal();
  const base = "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition";
  const styles: Record<string, string> = {
    primary: "bg-brand-green text-white shadow-md shadow-brand-green/25 hover:brightness-95",
    navy: "bg-navy text-white hover:bg-brand-blue",
    outline: "border border-navy/20 bg-white text-navy hover:border-navy/60",
  };
  return (
    <button type="button" onClick={() => open(subject)} className={`${base} ${styles[variant]} ${className ?? ""}`}>
      {children}
    </button>
  );
}
