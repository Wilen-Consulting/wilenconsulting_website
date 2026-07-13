import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Client Login | Wilen Consulting" },
      { name: "description", content: "Sign in to your Wilen Consulting client portal." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div aria-hidden className="absolute inset-0 -z-10 tile-bg opacity-40" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-sky/60 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-brand-green/15 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-6 py-12">
        <Link to="/" className="mb-8 flex items-center gap-3 rounded-xl bg-white px-5 py-3 shadow-md ring-1 ring-border">
          <img src={logo} alt="Wilen Consulting" className="h-9 w-auto" />
        </Link>

        <div className="w-full rounded-2xl border border-border bg-white p-8 shadow-xl">
          <div className="mb-6 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-blue">Client Portal</p>
            <h1 className="mt-1 font-display text-3xl text-navy">Welcome back</h1>
            <p className="mt-1 text-sm text-foreground/60">Sign in to access your projects and reports.</p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStatus("loading");
              setTimeout(() => setStatus("error"), 900);
            }}
            className="space-y-4"
          >
            <label className="block">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Email</span>
              <input
                type="email"
                required
                className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 outline-none transition focus:border-brand-blue"
                placeholder="you@company.com"
              />
            </label>
            <label className="block">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Password</span>
                <button type="button" className="text-xs font-medium text-brand-blue hover:underline">
                  Forgot?
                </button>
              </div>
              <input
                type="password"
                required
                className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 outline-none transition focus:border-brand-blue"
                placeholder="••••••••"
              />
            </label>

            <label className="flex items-center gap-2 text-sm text-foreground/70">
              <input type="checkbox" className="h-4 w-4 rounded border-input text-brand-blue" />
              Keep me signed in
            </label>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue disabled:opacity-70"
            >
              {status === "loading" ? "Signing in…" : "Sign In"}
            </button>

            {status === "error" && (
              <p className="rounded-md bg-red-50 px-3 py-2 text-center text-xs text-red-700">
                Client portal is coming soon. Please contact your account manager for access.
              </p>
            )}
          </form>

          <div className="mt-6 border-t border-border pt-5 text-center text-sm text-foreground/60">
            Don't have an account?{" "}
            <Link to="/" className="font-medium text-brand-blue hover:underline">
              Return to site
            </Link>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-foreground/60">
          © {new Date().getFullYear()} Wilen Consulting · Secure client access
        </p>
      </div>
    </div>
  );
}
