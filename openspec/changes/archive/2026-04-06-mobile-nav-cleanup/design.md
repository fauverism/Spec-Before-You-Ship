## Context

Lesson pages use a two-column grid layout (`260px sidebar + 1fr content`). At `≤ 960px` the sidebar collapses to `display: none`, leaving mobile users with no lesson navigation. Each lesson page has inline `<style>` blocks and a `.next-lesson` component at the bottom — styles are per-page, not global.

The Companion box in the sidebar references `companion/SKILL.md`, a file that does not exist. It appears on all 11 lesson pages.

## Goals / Non-Goals

**Goals:**
- Mobile users can see which lesson they're on and navigate to adjacent lessons
- Companion box is removed from all 11 lesson pages
- No JavaScript added

**Non-Goals:**
- Full lesson list overlay / drawer on mobile (deferred)
- Changes to desktop layout
- Moving styles to `assets/site.css` (out of scope)

## Decisions

**Sticky top bar, not inline prev/next at top of content**
The lesson content area already has a breadcrumb at the top and a `.next-lesson` block at the bottom. Adding another prev/next inline would create visual clutter. A thin sticky bar stays out of the reading flow and is always accessible regardless of scroll position.

**CSS-only (no JS toggle)**
The bar is always visible on mobile — no open/close state needed. This keeps it zero-dependency and robust.

**Markup lives in each lesson file, not a shared include**
The site is static HTML with no templating layer. Each file is standalone. Each lesson page gets its own `<div class="mob-nav">` with hardcoded prev/next hrefs appropriate to that lesson.

**Lesson 01 hides the back arrow; Lesson 11 hides the forward arrow**
Pure CSS via `visibility: hidden` — the element still occupies space so the center indicator stays visually centered.

**Style block added to existing per-page `<style>` tag**
Consistent with how every other lesson-page style is handled today.

## Risks / Trade-offs

- **11 files to edit by hand** → Each lesson has unique prev/next links and lesson number. Risk of a copy-paste error. Mitigation: tasks list each file explicitly with the exact values.
- **Styles are duplicated across 11 files** → Accepted trade-off given the no-templating constraint. If the site ever moves to a build step, this is the first candidate for extraction.

## Migration Plan

Static HTML — no deployment complexity. Changes go live on next deploy. No rollback risk beyond reverting the commit.
