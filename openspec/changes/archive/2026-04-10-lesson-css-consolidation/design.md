## Context

The site is static HTML with no build step or templating layer. Each of the 11 lesson pages has an inline `<style>` block that ranges from ~180 to ~513 lines. Approximately 200 of those lines are identical across every file: the two-column layout grid, sticky sidebar, breadcrumb, lesson typography, code block chrome, callout, warn, checkpoint, shell block, sidebar signup form, next-lesson nav, and responsive breakpoints.

`assets/site.css` (~181 lines) already handles global chrome — header, footer, CSS custom properties, mob-nav bar. Lesson layout is distinct from global chrome and belongs in its own file.

Lesson 01 is a structural outlier: its `<style>` block is 513 lines (vs. ~180 for others), formatted multiline rather than single-line, and contains dialogue block styles (`.dialogue`, `.d-*`) that appear only on that page.

## Goals / Non-Goals

**Goals:**
- Create `assets/lesson.css` with all styles shared across lesson pages
- Create `assets/lesson-01.css` with lesson 01's dialogue block styles
- All 11 lesson pages link `lesson.css`; lesson 01 additionally links `lesson-01.css`
- Per-page `<style>` blocks contain only lesson-specific token colors and unique component styles
- No visual changes — purely extracting existing rules

**Non-Goals:**
- Changing any CSS values (this is extraction, not redesign)
- Adding a build step, bundler, or CSS preprocessor
- Consolidating lesson-specific component styles (e.g., `.sa-label`, `.spectrum-example`) — those stay per-page
- Touching `assets/site.css`
- Extracting index.html or contact.html styles (those pages have their own distinct style patterns)

## Decisions

**Two files, not one**
Putting lesson 01's dialogue styles in `lesson.css` would load them on every page needlessly. A separate `lesson-01.css` keeps the shared file clean and makes the per-page dependency explicit. If future lessons add dialogue blocks, they can link `lesson-01.css` too — or the file can be renamed to `lesson-dialogue.css`.

**`assets/lesson.css`, not an extension of `site.css`**
`site.css` handles global chrome (header, footer, variables). Lesson layout (sidebar grid, breadcrumb, content max-width) is a separate concern. Mixing them would make `site.css` hard to reason about if the site ever gains non-lesson pages (the index and contact pages already don't use lesson layout).

**Normalize `.callout p + p` into `lesson.css`**
Lessons 07–11 have `.callout p + p { margin-top: 0.5rem !important; }` while 01–06 don't. The shared stylesheet is the right place to standardize this so all lessons behave consistently. No visual regression on 01–06 since the rule only fires when two `<p>` elements appear consecutively inside a callout.

**Keep per-page `<style>` blocks for token colors**
Token classes (`.t-keyword`, `.t-string`, `.d-you`, lesson-specific `.pf-cmd`, etc.) vary per lesson and are few enough that per-page inline style is appropriate. No shared file for these.

**Multiline formatting for extracted CSS**
Lesson 02–11 used single-line CSS rules in their per-page blocks. The extracted `lesson.css` will use multiline format (consistent with `site.css` and lesson 01) for readability and diffability.

## Risks / Trade-offs

- **Link order matters** → `lesson.css` must be linked after `site.css` and before any per-page `<style>` block. Wrong order could cause specificity surprises. Mitigation: tasks specify exact link placement.
- **Lesson 01's style block is multiline; others are single-line** → Extraction from lesson 01 requires more surgical edits than the other 10. Mitigation: lesson 01 is tasked separately and reviewed carefully.
- **Orphaned CSS rules from companion-box** → Dead `.companion-box` CSS still present in some per-page blocks will be removed during extraction as a side effect. No regression risk since the elements don't exist in the DOM.
- **11 files to edit** → Same risk as previous changes. Mitigation: tasks list each file explicitly.

## Migration Plan

Static HTML — no deployment steps beyond file additions and HTML edits. No rollback complexity; reverting means removing the `<link>` tags and restoring the extracted rules to each `<style>` block (covered by git).
