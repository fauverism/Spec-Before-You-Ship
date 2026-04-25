## Why

The course is in early development and readers have no way to know which version of the content they're viewing. Adding a visible version stamp (starting at `v1.0.0`) establishes a versioning convention and signals what content version is published.

## What Changes

- A version stamp (`v1.0.0`) is added to every lesson page (all 13 HTML files in `/lessons/`)
- The stamp is visible but unobtrusive — does not compete with lesson content
- Version string is consistent across all pages

## Capabilities

### New Capabilities
- `version-stamp`: A visible version indicator displayed on each lesson page showing the current content version

### Modified Capabilities
<!-- None — no existing spec-level behavior is changing -->

## Impact

- All 13 HTML files in `lessons/` are modified (`index.html`, `contact.html`, `01` through `11`)
- No dependencies, build steps, or external systems affected
- Pure presentational change — no JavaScript, no server-side logic
