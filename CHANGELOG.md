# Changelog

## v0.1.0 — 2026-04-20

### New Lesson: The Exploration

- Added new lesson 03: "The Exploration" — teaches OpenSpec's exploration mode as a thinking partner before writing proposals
- Lesson showcases actual conversation that led to its creation (announcement → new lesson idea)
- Includes second example (Postgres vs SQLite) showing exploration for technical decisions
- Added "What exploration is NOT" section to clear up misconceptions
- Added exit note at top: exploration is optional, you can leave anytime

### Lesson Flow Updates

- Renumbered all lessons: 03→04 (Proposal), 04→05 (Spec), 05→06 (Design Doc), 06→07 (Tasks), 07→08 (Ship It)
- Added exploration mode references in lessons 04, 05, 06 connecting back to lesson 03
- Updated homepage lesson list with correct URLs and 8 lessons (was 7)
- Fixed broken lesson links on homepage (old `/03-the-proposal/` etc. were 404ing)

### Newsletter

- Fixed sidebar subscribe form: added missing `<input type="hidden" name="embed" value="1">` for Buttondown

### OpenSpec

- Created change: `announce-launch` for launch announcement across newsletter, website, DM
- Created change: `website-tracking` (archived — decided tracking not needed for now)

### Comms

- Posted in the OpenSpec Discord along with stickers created

## v0.0.5 — 2026-04-16

### Newsletter signup

- Added inline submission feedback to the homepage newsletter form: submitting, success, and error states
- Submit button disabled while request is in flight to prevent duplicate submissions
- Status messages exposed via `aria-live="polite"` for screen reader announcements
- Wired homepage form to Buttondown (`fauverism`) with official embed code
- Updated lesson sidebar subscribe form to Buttondown official embed code

### Lesson URLs and SEO

- Renamed lesson pages 03–07 so URL slugs match their actual content titles (e.g. `/03-the-proposal/`, `/04-the-spec/`, `/05-the-design-doc/`, `/06-tasks/`, `/07-ship-it/`)
- Added per-lesson `<meta name="description">` tags via `LessonLayout`

### OpenSpec

- Archived change: `2026-04-16-add-newsletter-signup-confirmation`
- Spec added: `newsletter-signup-feedback`

---

## v0.0.3-alpha — 2026-04-14

### Astro Migration

- Migrated site from plain HTML files to Astro static site framework
- Created `src/layouts/LessonLayout.astro` (data-driven sidebar, prev/next nav, per-lesson CSS injection) and `src/layouts/PageLayout.astro`
- Migrated all 11 lesson pages to `src/pages/lessons/*.astro` and index/contact to `src/pages/`
- Added `src/data/lessons.ts` with typed lesson metadata array
- Moved shared stylesheets from `assets/` to `public/assets/`
- Deleted all old `lessons/*.html` flat files
- Added Vercel static adapter (`astro.config.mjs`)
- Updated `README.md` to reflect Astro dev/build commands

### Solarized Dark Theme

- Added Solarized Dark color token overrides under `html.dark` in `site.css`
- Added `--backdrop` CSS variable to replace hardcoded rgba values in `.site-header` and `.mob-nav`
- Added `html.dark` dialogue overrides in `lesson-01.css`
- Added inline theme init script to both layouts (reads `localStorage.theme`, falls back to `prefers-color-scheme`, applies `html.dark` before paint — no flash)
- Added dark/light toggle button to sidebar (lesson pages) and header nav (other pages)
- Toggle persists preference to `localStorage` and swaps moon/sun icon

### OpenSpec

- Archived change: `2026-04-12-astro-migration`
- Archived change: `2026-04-14-solarized-dark-theme`
- Specs added: `astro-site-structure`, `dark-theme`
- Spec updated: `shared-stylesheet`

---

## v0.0.1-alpha — 2026-03-29

Initial alpha release.

### Course Content
- 11 lessons covering spec-driven AI development, from motivation
  through full change lifecycle
- Index page with curriculum overview and lesson navigation
- Contact page

### Infrastructure
- Shared stylesheet (`assets/site.css`) consolidating design tokens,
  reset, header, and footer styles across all pages
- Version stamp (`v0.0.1-alpha`) in footer of every page
- Footer attribution: © 2026 BridgeSpec, Created by Robert Fauver

### OpenSpec Workflow
- `consolidate-css` change archived (2026-03-29)
- `add-version-stamps` change archived (2026-03-29)
- Specs: `shared-stylesheet`, `version-stamp`
