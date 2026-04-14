## Why

The site currently has no dark mode. Developers reading tutorial content at night or in low-light environments are working against a bright Solarized Light background. A Solarized Dark theme is the natural complement — same palette family, zero visual discontinuity, and a better reading experience without changing the site's character.

## What Changes

- Add `html.dark` CSS overrides in `site.css` mapping all design tokens to Solarized Dark values
- Add a sun/moon toggle button to the top-right corner of both `LessonLayout.astro` and `PageLayout.astro`
- Add an inline `<script>` in `<head>` of both layouts that applies the correct theme class before first paint (prevents flash)
- Persist user preference to `localStorage`; fall back to `prefers-color-scheme` system preference
- Replace two hardcoded `rgba(250, 249, 247, ...)` backdrop values in `site.css` with a CSS variable so sticky headers respond to theme
- Add dark-mode overrides for `lesson-01.css` dialogue block header (`#eee8d5` hardcode)

## Capabilities

### New Capabilities
- `dark-theme`: Solarized Dark color palette applied via `html.dark` class, toggled by a sun/moon button, defaulting to system preference and persisted in localStorage

### Modified Capabilities

## Impact

- `public/assets/site.css` — new CSS custom property `--backdrop`, new `html.dark` token overrides
- `public/assets/lesson-01.css` — dark override for `.dialogue` border and `.dialogue-header` background
- `src/layouts/LessonLayout.astro` — theme init script in `<head>`, toggle button in sidebar
- `src/layouts/PageLayout.astro` — theme init script in `<head>`, toggle button in site header
- No lesson page files touched
- No new dependencies
