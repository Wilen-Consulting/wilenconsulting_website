import { createContext, useCallback, useContext, useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import { submitContactForm } from "@/lib/contact-endpoint";

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
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  const open = useCallback((s?: string) => {
    setSubject(s);
    setSent(false);
    setStatus("idle");
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
            className="absolute inset-0 bg-navy/20 backdrop-blur-[2px]"
            onClick={close}
          />
          <div className="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
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
                  onSubmit={async (e: FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const data = new FormData(form);
                    setStatus("loading");
                    try {
                      await submitContactForm({
                        name: String(data.get("name") || ""),
                        email: String(data.get("email") || ""),
                        company: String(data.get("company") || ""),
                        message: String(data.get("message") || ""),
                        source: subject ? `Contact modal (${subject})` : "Contact modal",
                      });
                      setStatus("idle");
                      setSent(true);
                    } catch (err) {
                      console.error(err);
                      setStatus("error");
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
                      defaultValue=""
                      className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition focus:border-brand-blue"
                      placeholder="Tell us what's going on. We'll figure out a fix."
                    />
                  </label>
                  {status === "error" && (
                    <p className="mt-4 rounded-md bg-red-50 px-3 py-2 text-center text-xs text-red-700">
                      Something went wrong sending your message. Please try again, or email us directly at aviva@wilenconsulting.com.
                    </p>
                  )}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                    <p className="text-xs text-muted-foreground">We reply within one business day.</p>
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-95 disabled:opacity-70"
                    >
                      {status === "loading" ? "Sending…" : "Send message"}
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
