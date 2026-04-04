## Context

The site is 13 static HTML files sharing a single `assets/site.css`. CSS custom properties define the font stack (`--sans`, `--serif`, `--mono`) and base size is set on `html { font-size: 16px }`. All sizing throughout the site uses `rem`, so changing the base size scales everything proportionally. Google Fonts are loaded via `<link>` tags in each HTML file's `<head>`.

## Goals / Non-Goals

**Goals:**
- Replace the font stack with Source Sans Pro + Source Serif 4 + Google Sans Code
- Raise the base font size from 16px to 20px
- Expand content column widths and padding to match the larger scale
- Produce a more editorial, design-considered aesthetic

**Non-Goals:**
- Changing any content, copy, or page structure
- Redesigning layout (grid, sidebar, header/footer structure stays the same)
- Changing colors or spacing unrelated to the type scale

## Decisions

**Font stack**

| Role | Before | After |
|------|--------|-------|
| Sans | Geist | Source Sans Pro |
| Serif | Instrument Serif | Source Serif 4 |
| Mono | JetBrains Mono | Google Sans Code |

Source Sans Pro and Source Serif 4 were designed as companion typefaces (both from Adobe/Paul D. Hunt). They share proportions and weight matching, making the pairing cohesive. Google Sans Code provides a geometric, refined monospace that feels less "terminal" than JetBrains Mono.

Source Serif 4 has a variable `opsz` axis (8–60). Use `font-variation-settings: "opsz" 40` for display-size headings to get the more refined optical cut.

**Base size: 16px → 20px**

All existing rem values scale proportionally. No individual size values need to change — the cascade handles it. The only explicit size adjustments needed are for elements where the proportional scale produces an undesirable result (e.g., the hero heading is already clamp-capped and won't need adjustment).

**Layout expansion**

| Element | Before | After |
|---------|--------|-------|
| Index `.col` max-width | 740px | 860px |
| Lesson `.main` max-width | 720px | 800px |
| Lesson `.main` padding | 4rem 3.5rem 6rem | 4rem 4.5rem 6rem |
| Sidebar width | 240px | 260px |
| Layout max-width | 1100px | 1200px |

**Google Fonts URL**

All three fonts are loaded in a single `<link>` tag. The existing font `<link>` tags in every HTML file need to be replaced with the new stack. Since `assets/site.css` does not currently import fonts (they're loaded via HTML), the HTML files are the only place to update the font URL.

Google Sans Code availability via the CSS API should be verified during implementation. If unavailable, fallback to `DM Mono` from Google Fonts (same geometric spirit, confirmed available).

## Risks / Trade-offs

- **Google Sans Code API availability** → If the font isn't available via the standard Google Fonts CSS API, substitute DM Mono. Visual difference is minor.
- **20px base on small screens** → The responsive breakpoints (640px, 700px, 800px) may need review. At 20px base, `1.5rem` of padding = 30px — verify nothing feels cramped on mobile.
- **Source Serif 4 opsz axis** → Requires `font-variation-settings` on heading elements. Simple CSS addition, but must be applied to `h1` on lesson pages and the `.intro-heading` on index.
