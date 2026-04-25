## Why

Every time a lesson is added or renamed, the sidebar nav must be updated in all 13 HTML files by hand. The site has no templating layer — shared chrome (sidebar, footer, mobile nav, head) is copy-pasted across every page. Astro provides a build step with layouts and components, eliminating that duplication without changing the content or shipping unnecessary JavaScript.

## What Changes

- **BREAKING** Replace the flat `lessons/` HTML file structure with an Astro project (`src/pages/`, `src/layouts/`, `src/components/`)
- Replace copy-pasted sidebar, footer, mobile nav, and `<head>` with a single `LessonLayout.astro` component
- Make the sidebar nav data-driven from a `lessons` array — adding a lesson requires one array edit
- Move `assets/` CSS files to `public/` so they are served unchanged
- Convert all 11 lesson pages and `index.html` / `contact.html` to `.astro` files; lesson content HTML moves verbatim into `<slot />`
- **BREAKING** URL paths change from `/lessons/02-install-and-init.html` to clean paths `/lessons/02-install-and-init/`
- Add Vercel adapter for static output (`output: 'static'`)

## Capabilities

### New Capabilities

- `astro-site-structure`: Astro project layout — `src/pages/`, `src/layouts/`, `src/components/`, `public/`; lesson nav driven by a central data file; static output via Vercel adapter

### Modified Capabilities

- `shared-stylesheet`: CSS files move from `assets/` to `public/assets/`; `<link>` href paths remain `../assets/` relative (Astro resolves these correctly in static output)

## Impact

- **Dependencies added**: `astro`, `@astrojs/vercel` (or `@astrojs/node` for static), `node` ≥ 20
- **Files removed**: all `lessons/*.html` files (replaced by `.astro` equivalents)
- **Files moved**: `assets/*.css` → `public/assets/*.css`
- **Deployment**: Vercel continues to work; `vercel.json` may need `framework: "astro"` if not auto-detected
- **Links**: any external links to `/lessons/*.html` URLs will 404 — no redirects planned (acceptable breakage)
