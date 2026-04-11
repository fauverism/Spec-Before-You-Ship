## Why

Every lesson page carries ~200 lines of duplicated inline CSS — layout, sidebar, breadcrumb, callout, checkpoint, shell block, and sidebar signup styles are copied verbatim across all 11 files. Any style fix must be applied 11 times. Extracting these shared styles into a dedicated stylesheet eliminates the duplication, makes future changes single-edit, and reduces per-file noise so lesson-specific styles are easier to find.

## What Changes

- Create `assets/lesson.css` containing all styles shared across lesson pages: layout grid, sidebar, breadcrumb, lesson typography, code block chrome, callout, warn, checkpoint, shell block, sidebar signup form, next-lesson nav, and responsive breakpoints
- Create `assets/lesson-01.css` containing lesson 01's unique styles: dialogue block styles (`.dialogue`, `.dialogue pre`, `.dialogue code`, `.d-*` token classes, `.dialogue-header`)
- Update all 11 lesson HTML files to link `lesson.css` (and lesson 01 to additionally link `lesson-01.css`)
- Remove the extracted rules from each per-page `<style>` block, leaving only lesson-specific token color classes and unique per-lesson component styles
- Standardize the `.callout p + p` rule (present in lessons 07–11 but absent from 01–06) into `lesson.css` so all lessons benefit from it

## Capabilities

### New Capabilities
<!-- None — this is a refactor. No new user-facing behavior is introduced. -->

### Modified Capabilities
- `shared-stylesheet`: `lesson.css` is a new shared stylesheet alongside `site.css`; the capability spec should reflect that lesson pages now require two shared stylesheets

## Impact

- All 11 lesson HTML files in `lessons/` — add `<link>` tags, remove extracted CSS from `<style>` blocks
- New files: `assets/lesson.css`, `assets/lesson-01.css`
- No changes to `assets/site.css`
- No content, markup structure, or visual changes — purely a CSS extraction refactor
