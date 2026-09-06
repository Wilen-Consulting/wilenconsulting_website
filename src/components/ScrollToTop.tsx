import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-5 right-5 z-50
        grid h-11 w-11 place-items-center
        rounded-full bg-navy text-white shadow-lg
        transition-all duration-300 ease-out
        hover:bg-brand-blue hover:shadow-xl
        focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2
        sm:bottom-8 sm:right-8 sm:h-12 sm:w-12
        ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"}
      `}
    >
      <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
    </button>
  );
}
