## Why

Lesson pages on mobile currently hide the sidebar entirely, leaving users with no way to navigate between lessons. The sidebar also contains a Companion box that references a skill file (`companion/SKILL.md`) that doesn't exist, which reads as broken.

## What Changes

- Remove the `.companion-box` from all 11 lesson pages
- Add a sticky mobile top bar to lesson pages with the current lesson indicator (`01 / 11`) and prev/next arrow links
- The top bar is CSS-only — no JavaScript required

## Capabilities

### New Capabilities
- `lesson-mobile-nav`: A sticky top bar on lesson pages (mobile only, ≤ 960px) showing lesson position and prev/next navigation links

### Modified Capabilities
<!-- None — removing the Companion box is a deletion with no spec-level behavior. -->

## Impact

- All 11 lesson HTML files in `lessons/` — remove `.companion-box`, add mobile nav bar markup and styles
- No changes to `assets/site.css` (styles will live per-page as they do now)
- No JS files touched
