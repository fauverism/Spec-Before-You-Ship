## Context

The site uses CSS custom properties defined in `:root` for all colors, code token colors, and semantic UI colors. All layout components reference these variables — no hardcoded colors exist in lesson pages. Two exceptions exist in `site.css`: the sticky header and mobile nav use hardcoded `rgba(250, 249, 247, ...)` for their backdrop. One exception exists in `lesson-01.css`: the dialogue block header uses hardcoded `#eee8d5`.

The code syntax theme is already Solarized Light (`--code-bg: #fdf6e3`, `--code-fg: #657b83`). Solarized Dark uses the same accent colors (keyword green, string cyan, type blue, etc.) with a flipped background/foreground — making the dark theme a near-mechanical token swap.

## Goals / Non-Goals

**Goals:**
- Full Solarized Dark theme applied via `html.dark` class
- Theme init script runs before first paint — no flash of wrong theme
- System preference (`prefers-color-scheme: dark`) is the default
- User override persisted to `localStorage`
- Sun/moon toggle in top-right of every page
- All CSS custom properties respond correctly in dark mode

**Non-Goals:**
- Per-lesson custom color overrides (lesson-specific `<style is:global>` blocks use only the token variables — they will inherit dark mode automatically)
- Animated theme transition (no cross-fade between themes)
- High-contrast or other accessibility themes

## Decisions

**`html.dark` class, not `@media (prefers-color-scheme: dark)`**
Using a CSS media query for dark mode creates two sources of truth — the media query and the JS toggle. When a user overrides their system preference via the toggle, the media query still fires. Using `html.dark` exclusively means JS owns all theme state. The init script reads system preference and applies the class; the media query is never used in CSS.

**Theme init script inline in `<head>`, not deferred**
A deferred or body script runs after paint. Users with dark system preference would see a flash of Solarized Light before the class is applied. The script must be synchronous and in `<head>`. It is duplicated across both layout files — acceptable given its size (4 lines).

```js
const saved = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (saved === 'dark' || (!saved && prefersDark)) {
  document.documentElement.classList.add('dark');
}
```

**`--backdrop` CSS variable for sticky header backgrounds**
Two hardcoded `rgba(250, 249, 247, 0.95)` values exist in `site.css` for `.site-header` and `.mob-nav`. These cannot respond to `html.dark` overrides as raw values. Replacing them with `--backdrop` (defined in `:root` for light, overridden in `html.dark`) makes them theme-aware with no structural changes.

**Toggle button placement**
- `PageLayout`: appended inside `.header-nav` as the last `<li>`
- `LessonLayout`: appended in `.sidebar`, below the nav links, above the signup widget
Both render a `<button>` with SVG sun (light mode active) or moon (dark mode active) icon. The icon swaps on click and on init.

**Solarized Dark token mapping**
```
--bg:           #002b36  (base03)
--surface:      #073642  (base02)
--border:       #1d3d47
--border-strong:#586e75  (base01)
--ink:          #fdf6e3  (base3)
--ink-2:        #eee8d5  (base2)
--ink-3:        #93a1a1  (base1)
--accent:       #cb4b16  (Solarized orange)
--accent-bg:    #1a1208
--dark:         #001f29
--backdrop:     rgba(0, 43, 54, 0.95)
--code-bg:      #002b36  (base03)
--code-fg:      #839496  (base0)
--code-comment: #586e75  (base01)
--warn-bg:      #1a1700
--warn-border:  #4a3d00
```
Code accent tokens (keyword, string, type, number, prop, fn, op) are identical in Solarized Light and Dark — no changes needed.

## Risks / Trade-offs

- **localStorage unavailable** (private browsing in some browsers) → `try/catch` around localStorage access; fall back to system preference silently
- **SSR/static rendering** — Astro generates static HTML with no `html.dark` class. The init script applies the class client-side before first paint. This is correct for a static site — no server can know the user's preference.
- **Two layout files to keep in sync** — The toggle button markup and init script are duplicated across `LessonLayout.astro` and `PageLayout.astro`. If the toggle logic changes, both must be updated. Acceptable for a two-layout site; would warrant a shared component at larger scale.
