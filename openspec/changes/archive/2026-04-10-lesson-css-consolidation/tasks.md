## 1. Create assets/lesson.css

Extract all shared lesson styles. Source from lessons/02-install-and-init.html (single-line format) and normalize to multiline. Include the `.callout p + p` rule that was only in lessons 07–11 — it belongs in the shared file.

- [x] 1.1 Create `assets/lesson.css` with shared layout rules: `.layout`, `.sidebar`, `.sidebar nav`, all `.sidebar nav a` variants, `.sidebar-label`, `.sidebar-title`
- [x] 1.2 Add to `assets/lesson.css`: breadcrumb (`.breadcrumb`, `.breadcrumb a`, `.breadcrumb a:hover`, `.breadcrumb .sep`, `.breadcrumb .current`), lesson header (`.lesson-num`, `h1`, `.subtitle`)
- [x] 1.3 Add to `assets/lesson.css`: lesson prose (`.lesson p`, `.lesson p strong`, `.lesson h2`, `.lesson h2:first-of-type`, `.lesson h3`), inline code (`.lesson code:not(.block)`)
- [x] 1.4 Add to `assets/lesson.css`: code block chrome (`.code-block`, `.code-header`, `.code-filename`, `.code-lang`, `pre`, `pre code`, all `.t-*` shell/syntax token classes)
- [x] 1.5 Add to `assets/lesson.css`: shell block (`.shell-block`, `.shell-block pre`), file tree (`.file-tree`, `.file-tree pre`, `.file-tree code`, `.ft-dir`, `.ft-new`, `.ft-dim`)
- [x] 1.6 Add to `assets/lesson.css`: callout (`.callout`, `.callout .callout-label`, `.callout p`, `.callout p + p`), warn (`.warn`, `.warn .warn-label`, `.warn p`)
- [x] 1.7 Add to `assets/lesson.css`: checkpoint (`.checkpoint`, `.checkpoint .checkpoint-label`, `.checkpoint ul`, `.checkpoint li`, `.checkpoint li::before`)
- [x] 1.8 Add to `assets/lesson.css`: next-lesson nav (`.next-lesson`, `.next-lesson .next-label`, `.next-lesson a`, `.next-lesson a:hover`, `.next-lesson a .arrow`)
- [x] 1.9 Add to `assets/lesson.css`: sidebar signup (`.sidebar-signup`, `.ss-label`, `.ss-text`, `.sidebar-signup form`, `input[type="email"]`, `input:focus`, `button`, `button:hover`)
- [x] 1.10 Add to `assets/lesson.css`: companion-box dead rules (`.companion-box`, `.companion-box .companion-label`, `.companion-box p`, `.companion-box .skill-file`) — keep for now, harmless
- [x] 1.11 Add to `assets/lesson.css`: responsive block (`@media (max-width: 960px)` — hide sidebar, stack layout, reduce main padding, resize h1)

## 2. Create assets/lesson-01.css

- [x] 2.1 Create `assets/lesson-01.css` with dialogue styles extracted from lesson 01's `<style>` block: `.dialogue`, `.dialogue-header`, `.dialogue pre`, `.dialogue code`, `.d-label`, `.d-you`, `.d-ai`, `.d-you-bad`, `.d-comment`

## 3. Update lesson 01 — lessons/01-the-chaos-tax.html

Lesson 01 requires the most surgery: multiline styles, dialogue block, and unique token classes.

- [x] 3.1 Add `<link rel="stylesheet" href="../assets/lesson.css">` and `<link rel="stylesheet" href="../assets/lesson-01.css">` after the existing `site.css` link
- [x] 3.2 Remove from `<style>`: all layout/sidebar/breadcrumb/lesson typography/code block/callout/warn/checkpoint/shell-block/sidebar-signup/next-lesson/responsive rules that are now in `lesson.css`
- [x] 3.3 Remove from `<style>`: dialogue block rules now in `lesson-01.css`
- [x] 3.4 Verify remaining `<style>` block contains only: syntax token color classes (`.t-keyword`, `.t-string`, etc.) and lesson-specific token classes (`.t-shell-cmd`, `.t-shell-out`, `.t-shell-prompt`)

## 4. Update lessons 02–11

For each file: add the `lesson.css` link, remove the shared rules from `<style>`. Each file's `<style>` block should shrink to only token colors and lesson-unique component styles.

- [x] 4.1 `lessons/02-install-and-init.html` — add `lesson.css` link; remove shared rules; keep tab/step UI component styles unique to this lesson
- [x] 4.2 `lessons/03-your-first-change.html` — add `lesson.css` link; remove shared rules; keep `.ag-*`, `.do-*` component styles
- [x] 4.3 `lessons/04-the-proposal.html` — add `lesson.css` link; remove shared rules; keep `.sa-*` component styles
- [x] 4.4 `lessons/05-the-specs-and-scenarios.html` — add `lesson.css` link; remove shared rules; keep `.s-pill`, scenario component styles
- [x] 4.5 `lessons/06-the-design-doc.html` — add `lesson.css` link; remove shared rules; keep lesson-specific component styles
- [x] 4.6 `lessons/07-tasks.html` — add `lesson.css` link; remove shared rules; keep `.spectrum-example` and task UI component styles
- [x] 4.7 `lessons/08-fast-forward.html` — add `lesson.css` link; remove shared rules; keep `.ct-*`, `.when-*` component styles
- [x] 4.8 `lessons/09-implement.html` — add `lesson.css` link; remove shared rules; keep `.pf-*`, `.df-*`, `.pb-*` component styles
- [x] 4.9 `lessons/10-mid-flight-edits.html` — add `lesson.css` link; remove shared rules; keep `.sf-*`, `.ct-*` component styles
- [x] 4.10 `lessons/11-final.html` — add `lesson.css` link; remove shared rules; keep lesson-specific component styles

## 5. Verify

- [x] 5.1 Open any lesson in a browser — confirm layout, sidebar, and content render correctly with no visible regressions
- [x] 5.2 Open lesson 01 — confirm dialogue block renders with `var(--surface)` background and `.d-you`/`.d-ai` colors intact
- [x] 5.3 Open a lesson with a callout block — confirm callout renders correctly and `.callout p + p` spacing applies where two paragraphs appear
- [x] 5.4 Resize to mobile (≤ 960px) on any lesson — confirm sidebar hides and layout stacks correctly
- [x] 5.5 Inspect `<style>` block on any lesson 02–11 — confirm it contains no rules present in `lesson.css`
