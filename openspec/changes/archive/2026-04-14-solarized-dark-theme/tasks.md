## 1. CSS — site.css

- [x] 1.1 Add `--backdrop` CSS variable to `:root` with value `rgba(250, 249, 247, 0.95)`
- [x] 1.2 Replace hardcoded `rgba(250, 249, 247, 0.95)` in `.site-header` with `var(--backdrop)`
- [x] 1.3 Replace hardcoded `rgba(250, 249, 247, 0.97)` in `.mob-nav` with `var(--backdrop)`
- [x] 1.4 Add `html.dark` block to `site.css` with all Solarized Dark token overrides (--bg, --surface, --border, --border-strong, --ink, --ink-2, --ink-3, --accent, --accent-bg, --dark, --backdrop, --code-bg, --code-fg, --code-comment, --warn-bg, --warn-border)

## 2. CSS — lesson-01.css

- [x] 2.1 Add `html.dark .dialogue` override: border-color `#1d3d47`
- [x] 2.2 Add `html.dark .dialogue-header` override: background `#073642`, color `#586e75`

## 3. Theme init script

- [x] 3.1 Add inline theme init script to `<head>` in `LessonLayout.astro` — reads `localStorage.theme`, falls back to `prefers-color-scheme`, applies `html.dark` class before paint
- [x] 3.2 Add identical inline theme init script to `<head>` in `PageLayout.astro`

## 4. Toggle button — PageLayout

- [x] 4.1 Add toggle button markup to `.header-nav` in `PageLayout.astro` (last item, top-right)
- [x] 4.2 Add toggle CSS to `site.css` (`.theme-toggle` button styles — no border, no bg, cursor pointer, icon color matches `--ink-3`)
- [x] 4.3 Add toggle script to `PageLayout.astro` body-end — on click: toggle `html.dark`, save to `localStorage`, swap icon

## 5. Toggle button — LessonLayout

- [x] 5.1 Add toggle button markup to sidebar in `LessonLayout.astro` (below nav, above signup widget)
- [x] 5.2 Add toggle script to `LessonLayout.astro` body-end — same logic as PageLayout toggle

## 6. Verify

- [x] 6.1 Run `npm run build` — confirm zero errors
- [x] 6.2 Load site in browser, confirm light mode is default when system preference is light
- [x] 6.3 Toggle to dark — confirm Solarized Dark palette, no flash on reload
- [x] 6.4 Set system to dark, clear localStorage — confirm dark loads without flash
- [x] 6.5 Confirm code blocks, shell blocks, and file trees look correct in dark mode
- [x] 6.6 Confirm toggle icon is correct (moon in light, sun in dark) on all page types
