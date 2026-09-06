import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { services, industries, caseStudies } from "@/lib/site-data";
import { useContactModal } from "@/components/ContactModal";

type NavGroup = { label: string; to: string; items?: { label: string; to: string }[] };

const groups: NavGroup[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Services",
    to: "/services",
    items: services.map((s) => ({ label: s.title, to: `/${s.slug}` })),
  },
  {
    label: "Top Industries",
    to: "/industries",
    items: industries.map((i) => ({ label: i.title, to: `/${i.slug}` })),
  },
  {
    label: "Case Studies",
    to: "/case-studies",
    items: caseStudies.map((c) => ({ label: c.title, to: `/${c.slug}` })),
  },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Referral Program", to: "/referral-program" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const { open: openContact } = useContactModal();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onContactPage = pathname === "/contact";
  // Service, industry, and case study pages live at top-level URLs (e.g. /medical-billing),
  // so the router can't tell they belong to a menu group. Highlight the group label when the
  // current page is one of its dropdown items.
  const isGroupActive = (g: NavGroup) =>
    g.items?.some((it) => it.to === pathname || it.to === pathname.replace(/\/$/, "")) ?? false;

  
  

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <img src={logo} alt="Wilen Consulting" className="h-9 w-auto sm:h-10" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {groups.map((g) => (
            <div key={g.label} className="group relative">
              <Link
                to={g.to}
                className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition hover:bg-secondary hover:text-navy ${
                  isGroupActive(g) ? "text-navy" : "text-foreground/80"
                }`}
                activeProps={{ className: "text-navy" }}
                activeOptions={g.to === "/" ? { exact: true } : undefined}
              >
                {g.label}
                {g.items && <span aria-hidden className="text-[10px] opacity-60">▾</span>}
              </Link>
              {g.items && (
                <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="min-w-[240px] overflow-hidden rounded-xl border border-border bg-white p-2 shadow-xl">
                    {g.items.map((it) => (
                      <li key={it.to}>
                        <Link
                          to={it.to}
                          className="block rounded-md px-3 py-2 text-sm text-foreground/80 transition hover:bg-secondary hover:text-navy"
                        >
                          {it.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <Link
            to="/login"
            className="inline-flex items-center gap-1.5 rounded-full border border-navy/20 px-4 py-2 text-sm font-medium text-navy transition hover:border-navy/60"
          >
            Client Login
          </Link>
          {onContactPage ? (
            <button
              type="button"
              onClick={() => openContact()}
              className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-brand-blue"
            >
              Contact Us
            </button>
          ) : (
            <Link
              to="/contact"
              className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-brand-blue"
            >
              Contact Us
            </Link>
          )}
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border text-navy lg:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
            {groups.map((g) => (
              <div key={g.label} className="border-b border-border/60 py-1 last:border-b-0">
                <div className="flex items-center justify-between">
                  <Link
                    to={g.to}
                    onClick={() => setMenuOpen(false)}
                    className="flex-1 rounded-md px-2 py-2 text-sm font-medium text-foreground/90 hover:bg-secondary"
                  >
                    {g.label}
                  </Link>
                  {g.items && (
                    <button
                      onClick={() => setOpenGroup(openGroup === g.label ? null : g.label)}
                      aria-label={`Toggle ${g.label} menu`}
                      className="shrink-0 rounded-md px-3 py-2 text-navy/60"
                    >
                      {openGroup === g.label ? "−" : "+"}
                    </button>
                  )}
                </div>
                {g.items && openGroup === g.label && (
                  <ul className="mb-2 ml-3 border-l border-border pl-3">
                    {g.items.map((it) => (
                      <li key={it.to}>
                        <Link
                          to={it.to}
                          onClick={() => setMenuOpen(false)}
                          className="block rounded-md px-2 py-1.5 text-sm text-foreground/70 hover:bg-secondary hover:text-navy"
                        >
                          {it.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            {onContactPage ? (
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  openContact();
                }}
                className="mt-3 rounded-full bg-navy px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
              >
                Contact Us
              </button>
            ) : (
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 rounded-full bg-navy px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
              >
                Contact Us
              </Link>
            )}
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="rounded-full border border-navy/20 px-4 py-2.5 text-center text-sm font-medium text-navy"
            >
              Client Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
