## Why

Every HTML file in the site embeds its own full `<style>` block, meaning shared styles (reset, variables, header, footer, typography) are duplicated across all 13 pages. Any visual change requires editing every file individually, which is error-prone and unsustainable as the course grows.

## What Changes

- A shared `assets/site.css` file is extracted containing all styles common to every page
- Each HTML file's `<style>` block is replaced with a `<link>` to `site.css`, retaining only page-specific styles inline (if any)
- The `assets/` directory gains its first file, establishing the pattern for future shared assets

## Capabilities

### New Capabilities
- `shared-stylesheet`: A single external CSS file (`assets/site.css`) that provides the shared visual foundation for all pages in the site

### Modified Capabilities
<!-- None — no spec-level behavior changes. This is a structural refactor; the rendered output is identical. -->

## Impact

- All 13 HTML files in `lessons/` are modified
- New file created: `assets/site.css`
- No visual changes to the rendered site
- No JavaScript, no build step, no external dependencies introduced
