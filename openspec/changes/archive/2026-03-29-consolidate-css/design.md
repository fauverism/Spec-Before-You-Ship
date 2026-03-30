## Context

The site is 13 standalone HTML files in `lessons/`. Each embeds a full `<style>` block. There is no build step, bundler, or templating engine — pages are served as static files. Investigation shows:

- **Lesson pages (02–11)**: ~200–220 lines of CSS each, nearly identical across all 10 files
- **index.html**: ~414 lines — shares the base but adds homepage-specific sections
- **contact.html**: ~406 lines — shares the base but adds contact-specific sections
- **01-the-chaos-tax.html**: ~554 lines — largest lesson, shares the base plus extra component types

Two CSS layers exist today, conflated in every file:

```
┌────────────────────────────────────────────────────┐
│  SHARED (same across all pages)                    │
│  ─────────────────────────────                     │
│  CSS reset, :root variables, html/body base        │
│  .site-header + nav                                │
│  .site-footer + links                              │
│  Google Fonts <link> in <head>                     │
├────────────────────────────────────────────────────┤
│  PAGE-SPECIFIC (unique to each page type)          │
│  ──────────────────────────────────────            │
│  Lessons: .layout, .sidebar, content components,  │
│           code tokens, .next-lesson nav            │
│  Index:   .intro, .curriculum, .signup-band        │
│  Contact: contact form styles                      │
└────────────────────────────────────────────────────┘
```

## Goals / Non-Goals

**Goals:**
- Extract shared CSS into `assets/site.css`, linked from every page
- Remove the duplicate shared CSS from all 13 `<style>` blocks
- Zero visual change to the rendered site

**Non-Goals:**
- Extracting page-specific CSS (lesson layout, index sections, contact form) — those stay inline for now
- Introducing a build step or CSS preprocessor
- Minification or optimization

## Decisions

**One shared file, not three**

Option considered: `site.css` (shared) + `lesson.css` (lesson layout) + page-specific files.

Rejected. The lesson layout CSS is ~150 lines shared by 11/13 pages. A `lesson.css` would be useful eventually, but it adds complexity now and the lesson pages already have inline `<style>` blocks that would need to stay anyway (for page-specific token definitions that vary slightly). One shared file is the minimal, correct first step. `lesson.css` is a natural follow-on.

**Keep page-specific styles inline**

Each page type has small unique sections (10–50 lines). Keeping these inline avoids creating per-page CSS files for content that only appears once. Inline styles with a clear comment (`/* Page-specific */`) are readable and maintainable.

**File location: `assets/site.css`**

The `assets/` directory already exists at the repo root. Using `../assets/site.css` as the relative path from `lessons/` is consistent with how images or other static assets would be referenced. No new directories needed.

**Link tag placement: inside `<head>`, replacing `<style>` block**

The `<link rel="stylesheet">` replaces the top of the existing `<style>` block. Any remaining page-specific styles stay in a `<style>` block below the link, or the `<style>` block is removed entirely if nothing remains.

## Risks / Trade-offs

- **Relative path dependency** → All pages are in `lessons/`, so `../assets/site.css` is consistent. If a page ever moves, the path breaks. Mitigation: document the convention; low risk for a static site.
- **Cache behavior** → One shared file means one cache entry. A version stamp change (from the parallel `add-version-stamps` change) would not invalidate `site.css`. Non-issue at current scale.
- **Merge with `add-version-stamps` change** → Both changes touch every HTML file. Apply `consolidate-css` first (structural), then `add-version-stamps` (additive) to avoid conflicts.
