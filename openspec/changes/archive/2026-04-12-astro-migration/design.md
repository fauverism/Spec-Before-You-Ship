## Context

The site is 13 static HTML files sharing a common chrome (sidebar, footer, mobile nav, `<head>`) via copy-paste. After the `lesson-css-consolidation` change, shared CSS is already extracted — the remaining duplication is HTML structure. The content of each lesson (prose, code blocks, callouts, hand-authored `<span class="t-*">` syntax highlighting) is unique and must be preserved exactly. There is one interactive component: a tab picker in lesson 02 (7 lines of vanilla JS).

## Goals / Non-Goals

**Goals:**
- Replace duplicated chrome with a single `LessonLayout.astro` layout
- Make sidebar nav data-driven so adding/renaming a lesson is a one-line edit
- Preserve all lesson content HTML verbatim — no content rewriting
- Preserve all existing CSS files and their class names unchanged
- Static output deployable to Vercel with no runtime server

**Non-Goals:**
- Converting lesson content to MDX or Markdown
- Adding React or any client-side framework
- Syntax highlighting via a library (Shiki, Prism) — hand-authored spans stay
- Adding new interactive features
- SEO or performance optimizations beyond what Astro provides by default

## Decisions

### D1: Astro with zero client JS

**Decision:** Use Astro's default island architecture — no `client:*` directives. The tab picker in lesson 02 is a small inline `<script>` tag that works fine as-is inside an Astro component.

**Alternatives considered:**
- React via `@astrojs/react` — unnecessary; no components need client hydration
- Vanilla JS in a shared util — tab picker is lesson-specific, keep it local

### D2: Lesson content as inline HTML in `.astro` files (not MDX)

**Decision:** Each lesson becomes a `src/pages/lessons/[slug].astro` file where the existing `<main>` content HTML is pasted verbatim inside `<LessonLayout>`. Astro treats raw HTML inside `<slot />` as valid.

**Alternatives considered:**
- MDX: requires rewriting all `<span class="t-*">` annotations as JSX, high migration cost
- Separate `.html` content files with frontmatter: non-standard, poor tooling

### D3: Lesson nav as a data file

**Decision:** Create `src/data/lessons.ts` exporting a typed array of `{ num, slug, title }` objects. `LessonLayout` and the sidebar both import this. Adding a lesson = one array push.

**Alternatives considered:**
- Filesystem-based routing with `getStaticPaths`: works but requires scanning filenames; order and title would need to be encoded in filenames or frontmatter
- Hardcoded in layout: same problem as now

### D4: CSS files in `public/`, referenced with root-relative paths

**Decision:** Move `assets/*.css` to `public/assets/`. In `.astro` files use `<link rel="stylesheet" href="/assets/lesson.css">` (root-relative, works with Astro's static output).

**Alternatives considered:**
- Import CSS in frontmatter (`import '../styles/lesson.css'`): Astro bundles and fingerprints the file, changing the URL — unnecessary for this simple case
- Keep relative `../assets/` paths: fragile with nested routes

### D5: Vercel static adapter

**Decision:** Use `@astrojs/vercel` with `output: 'static'`. This produces a `dist/` directory of pre-rendered HTML that Vercel serves as a static site — no serverless functions needed.

**Alternatives considered:**
- `@astrojs/node` adapter: overkill, adds server complexity
- No adapter (default static): also works for Vercel, but explicit adapter is clearer

## Risks / Trade-offs

- **Content fidelity** → Mitigation: lesson HTML is pasted verbatim; visual regression check on every lesson after migration before merging
- **URL breakage** → Mitigation: documented in proposal as acceptable for alpha; no redirects planned
- **Per-lesson `<style>` blocks** → Each lesson has a small `<style>` block for lesson-specific token colors and UI. These move into the `.astro` file's `<style is:global>` tag (Astro scopes `<style>` by default, which would break class-based selectors on content HTML — `is:global` disables scoping)
- **Lesson 02 tab picker script** → The `pickTool()` function uses `event.target` from an inline `onclick` attribute. This works fine in Astro's `<script>` but must be declared on `window` or kept inline. Keep as `<script is:inline>` to preserve exact behavior.

## Migration Plan

1. `npm create astro@latest` scaffold in project root (or manual setup)
2. Configure `astro.config.mjs`: static output, Vercel adapter, base path
3. Move `assets/*.css` → `public/assets/`; update all `<link>` hrefs to root-relative
4. Create `src/data/lessons.ts` with all 11 lesson entries
5. Build `src/layouts/LessonLayout.astro` (head, sidebar, mob-nav, footer)
6. Build `src/layouts/PageLayout.astro` for index and contact (head + footer, no lesson sidebar)
7. Migrate lessons 01–11 one at a time: create `.astro` file, paste `<main>` content, add frontmatter, verify in browser
8. Migrate `index.html` and `contact.html`
9. Delete old `lessons/*.html` files
10. Verify full build (`astro build`) and Vercel preview deploy

**Rollback:** The old HTML files live in git. If migration stalls, the branch can be abandoned and the static files remain on `main`.

## Open Questions

- None — scope is well-defined and bounded.
