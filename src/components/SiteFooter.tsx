import { Link } from "@tanstack/react-router";
import { ContactButton } from "@/components/ContactModal";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-white text-foreground/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="inline-flex items-center gap-3">
            <img src={logo} alt="Wilen Consulting" className="h-10 w-auto" />
          </Link>
          <p className="mt-4 max-w-sm text-sm">
            Save yourself time, money, and aggravation by automating processes, workflows, and communication.
          </p>
          <div className="mt-6">
            <ContactButton subject="Footer inquiry">Contact Us</ContactButton>
          </div>
        </div>
        <div>
          <p className="font-display text-sm uppercase tracking-wider text-navy">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-navy">About</Link></li>
            <li><Link to="/services" className="hover:text-navy">Services</Link></li>
            <li><Link to="/industries" className="hover:text-navy">Top Industries</Link></li>
            <li><Link to="/case-studies" className="hover:text-navy">Case Studies</Link></li>
            <li><Link to="/testimonials" className="hover:text-navy">Testimonials</Link></li>
            <li><Link to="/contact" className="hover:text-navy">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-display text-sm uppercase tracking-wider text-navy">Contact</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="mailto:aviva@wilenconsulting.com" className="hover:text-navy">aviva@wilenconsulting.com</a></li>
            <li><a href="tel:469-431-0565" className="hover:text-navy">US: 469-431-0565</a></li>
            <li><a href="tel:+972533166906" className="hover:text-navy">Israel: 053-316-6906</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs sm:px-6 md:flex-row">
          <p>© {new Date().getFullYear()} Wilen Consulting. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-navy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
