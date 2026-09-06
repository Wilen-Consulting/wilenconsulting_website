import { Link, useRouterState } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { useContactModal } from "@/components/ContactModal";

export function SiteFooter() {
  const { open: openContact } = useContactModal();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onContactPage = pathname === "/contact";
  return (
    <footer className="border-t border-border bg-white text-foreground/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2 md:col-span-2 text-center sm:text-left">
          <Link to="/" className="inline-flex items-center gap-3">
            <img src={logo} alt="Wilen Consulting" className="h-10 w-auto" />
          </Link>
          <p className="mx-auto sm:mx-0 mt-4 max-w-sm text-sm">
            Save yourself time, money, and aggravation by automating processes, workflows, and communication.
          </p>
          <div className="mt-6 flex justify-center sm:justify-start">
            {onContactPage ? (
              <button
                type="button"
                onClick={() => openContact()}
                className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-95"
              >
                Contact Us
              </button>
            ) : (
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-95"
              >
                Contact Us
              </Link>
            )}
          </div>
        </div>
        <div className="text-center sm:text-left">
          <p className="font-display text-sm uppercase tracking-wider text-navy">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-navy">About</Link></li>
            <li><Link to="/services" className="hover:text-navy">Services</Link></li>
            <li><Link to="/industries" className="hover:text-navy">Top Industries</Link></li>
            <li><Link to="/case-studies" className="hover:text-navy">Case Studies</Link></li>
            <li><Link to="/testimonials" className="hover:text-navy">Testimonials</Link></li>
            <li><Link to="/referral-program" className="hover:text-navy">Referral Program</Link></li>
            <li><Link to="/contact" className="hover:text-navy">Contact</Link></li>
          </ul>
        </div>
        <div className="text-center sm:text-left">
          <p className="font-display text-sm uppercase tracking-wider text-navy">Contact</p>
          <ul className="mt-3 space-y-2 text-sm break-words">
            <li><a href="mailto:aviva@wilenconsulting.com" className="hover:text-navy">aviva@wilenconsulting.com</a></li>
            <li><a href="tel:469-431-0565" className="hover:text-navy">US: 469-431-0565</a></li>
            <li><a href="tel:+972533166906" className="hover:text-navy">Israel: 053-316-6906</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center text-xs sm:px-6 sm:text-left md:flex-row">
          <p>© {new Date().getFullYear()} Wilen Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
