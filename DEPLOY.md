# Wilen Consulting website: build and upload

This is the source for wilenconsulting.com (TanStack Start, exported from Lovable project "Wilen Ascent" and maintained here since Sept 2026). The live site is plain static files on Bluehost (cPanel File Manager, public_html). There is no Node server on the host.

## URL structure

Every service, industry, and case study page lives at a top level URL:

- Services: /custom-portals, /integrations, /custom-solutions, /software-support, /process-management, /workflow-improvements, /financial-services, /human-resources, /data-management
- Industries: /medical-billing, /apparel, /warehouse-management, /aba
- Case studies: /for-tech-electric, /property-management, /dental-wholesalers, /environmental-controls
- Hub pages stay at /services, /industries, /case-studies

All three groups are served by one route file, src/routes/$slug.tsx, which looks the slug up in src/lib/site-data.ts and renders the matching page component from src/components/pages/. Slugs must be unique across the three lists. The header dropdowns in src/components/SiteHeader.tsx link to /<slug> and highlight the group whose item is open.

Old nested URLs (/industries/medical-billing and so on) are redirected with 301 rules in the .htaccess at the root of public_html.

## Build

Requires Bun (or Node 22 with npm).

1. bun install
2. bun run build

Output is dist/client. Every page is prerendered to <path>/index.html by crawling links from /. The build config is vite.config.ts (nitro disabled, TanStack prerender enabled, preview server bound to 127.0.0.1).

## Upload (cPanel File Manager)

1. Zip the contents of dist/client (not the folder itself), plus the .htaccess.
2. Do NOT include services/index.html. The copy on the server is a separate hand edited landing page (Aug 2026) and must be left alone.
3. Upload the zip to public_html, right click it, Extract, and confirm overwrite.
4. Delete the zip from public_html afterwards.

Old hashed files in public_html/assets can stay; they are harmless and are still referenced by a few older pages (amazon, privacy-policy, security-compliance, 404 of the July build).

## Contact form

Submissions go to the Google Apps Script endpoint in src/lib/contact-endpoint.ts, which emails aviva@wilenconsulting.com and logs to the "Wilen Consulting - Contact Form Submissions" sheet.
