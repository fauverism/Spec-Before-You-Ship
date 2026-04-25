## Context

The course site is 13 static HTML files in `lessons/`, each with its own inline `<style>` block. There is no build step, templating system, or shared CSS file. Every page is self-contained. The footer area is consistent across pages and is the natural home for a version stamp.

## Goals / Non-Goals

**Goals:**
- Add a `v1.0.0` version string visibly to all 13 lesson pages
- Keep the stamp visually subtle — informational, not decorative
- Be consistent in placement and styling across all pages

**Non-Goals:**
- Dynamic versioning (no JS, no build-time injection)
- A system for updating the version across files (that's a future concern)
- CSS consolidation (separate change)

## Decisions

**Where to place the stamp**

Footer of each page. The footer already exists on all pages with `© 2025 BridgeSpec` and nav links. The version stamp fits naturally there without disrupting lesson content.

Alternative considered: header badge. Rejected — headers are functional navigation areas; a version label there would feel out of place and clutter the reading experience.

**How to render it**

Inline HTML addition to the footer's existing structure — a `<span>` with a class like `footer-version`. Styled to match the existing muted footer text (`--ink-3` color variable, small monospace font to signal it's a technical identifier).

Alternative considered: separate visible banner at top of page. Rejected — too prominent for a version tag; it should be visible but not distracting.

**How to apply it across 13 files**

Manual edit to each file. Since there's no templating system and the footer HTML pattern is consistent, each file gets a direct addition. A future CSS consolidation change would be the right time to introduce shared templates.

## Risks / Trade-offs

- **13 manual edits** → Tedious but low-risk. The footer pattern is consistent across all files, making each edit predictable.
- **Version string hardcoded in every file** → Updating to `v0.0.2` means 13 more edits. Acceptable for now; if this becomes painful, a find-and-replace or templating solution can be introduced later.
- **Inline styles or class** → Using a class keeps the stamp styleable later; inline styles are a dead end. Use a class.
