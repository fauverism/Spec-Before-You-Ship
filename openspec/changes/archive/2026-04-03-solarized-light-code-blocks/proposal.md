## Why

The current code block theme (a custom near-black dark palette) creates a high-contrast dark-island effect that clashes with the site's warm editorial tone. Replacing it with Solarized Light brings the code blocks into harmony with the page's cream palette while applying a rigorous, well-known color system designed specifically for readability.

## What Changes

- `assets/site.css`: Update all `--code-*` CSS custom properties to Solarized Light values
- All 11 lesson HTML files: Update hardcoded colors in `.code-block`, `.code-header`, `.dialogue`, `.dialogue-header`, and `.d-*` token classes to Solarized Light values
- All block types affected: dialogue blocks, code blocks, shell blocks, file tree blocks

## Capabilities

### New Capabilities
- `code-block-theme`: The color system applied to all `<pre>`/`<code>` blocks across lesson pages — background, foreground, and syntax token colors

### Modified Capabilities
<!-- None — site-typography spec covers font variables only, not color tokens -->

## Impact

- `assets/site.css` — 8–10 token variable values updated
- `lessons/01` through `lessons/11` — hardcoded dark hex values in per-page `<style>` blocks updated
- No structural, font, or layout changes
