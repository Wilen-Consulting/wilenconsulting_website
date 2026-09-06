import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ServicePage } from "@/components/pages/ServicePage";
import { IndustryPage } from "@/components/pages/IndustryPage";
import { CaseStudyPage } from "@/components/pages/CaseStudyPage";
import {
  services,
  industries,
  caseStudies,
  type Service,
  type IndustryDetail,
  type CaseStudy,
} from "@/lib/site-data";

// Services, industries, and case studies all live at top-level URLs
// (/custom-portals, /medical-billing, /for-tech-electric) instead of being
// nested under /services, /industries, /case-studies. The hub pages
// (services.index, industries.index, case-studies.index) still exist.
// Slugs must be unique across the three lists.

type Entry =
  | { kind: "service"; item: Service }
  | { kind: "industry"; item: IndustryDetail }
  | { kind: "caseStudy"; item: CaseStudy };

function findEntry(slug: string): Entry | undefined {
  const service = services.find((s) => s.slug === slug);
  if (service) return { kind: "service", item: service };
  const industry = industries.find((i) => i.slug === slug);
  if (industry) return { kind: "industry", item: industry };
  const caseStudy = caseStudies.find((c) => c.slug === slug);
  if (caseStudy) return { kind: "caseStudy", item: caseStudy };
  return undefined;
}

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    const entry = findEntry(params.slug);
    if (!entry) throw notFound();
    return entry;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Page not found" }, { name: "robots", content: "noindex" }] };
    }
    switch (loaderData.kind) {
      case "service":
        return {
          meta: [
            { title: `${loaderData.item.title} | Wilen Consulting` },
            { name: "description", content: loaderData.item.body },
          ],
        };
      case "industry":
        return {
          meta: [
            { title: `${loaderData.item.title} | Wilen Consulting` },
            { name: "description", content: loaderData.item.body },
          ],
        };
      case "caseStudy":
        return {
          meta: [
            { title: `${loaderData.item.title} | Case Study` },
            { name: "description", content: loaderData.item.summary },
          ],
        };
    }
  },
  component: SlugPage,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-4xl text-navy">Page not found</h1>
        <p className="mt-4 text-foreground/70">The page you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white">
          Back to home
        </Link>
      </div>
      <SiteFooter />
    </div>
  ),
});

function SlugPage() {
  const entry = Route.useLoaderData();
  switch (entry.kind) {
    case "service":
      return <ServicePage item={entry.item} />;
    case "industry":
      return <IndustryPage item={entry.item} />;
    case "caseStudy":
      return <CaseStudyPage item={entry.item} />;
  }
}
