// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // The prerender step spins up a temporary preview server; bind it to IPv4 loopback
  // so the build also works in environments without IPv6.
  vite: { preview: { host: "127.0.0.1" } },
  // No deploy target: this site is exported as static files, so the Nitro/Cloudflare
  // deploy plugin is disabled and TanStack Start builds to dist/ by itself.
  nitro: false,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Prerender every page to plain static HTML/CSS/JS (output: .output/public) so the
    // site can be uploaded to shared hosting (cPanel) with no Node server required.
    // Starts at "/" and follows every internal link, so every reachable page is written
    // as <path>/index.html.
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: true,
      failOnError: true,
    },
  },
});
