## 1. Update dialogue and shell-block styles in all 11 lesson pages

For each lesson file, update the per-page `<style>` block:
- `.dialogue pre`: change `background` to `var(--surface)` (remove `background: transparent` or set explicitly)
- `.dialogue code`: change `color` to `var(--ink)`, `font-size` to `12px`
- `.shell-block`: remove `margin`, `border`, and `background` — keep only `border-radius` and `overflow` if present, or strip entirely
- `12px` → `14px` for: `.lesson h3`, `.companion-box p` (dead but harmless), `.checkpoint li::before`, `.sidebar-signup .ss-text`, `.sidebar-signup input[type="email"]`, and any other body-text 12px instances
- Leave `10px` and `11px` values untouched (decorative labels)

- [x] 1.1 `lessons/01-the-chaos-tax.html`
- [x] 1.2 `lessons/02-install-and-init.html`
- [x] 1.3 `lessons/03-your-first-change.html`
- [x] 1.4 `lessons/04-the-proposal.html`
- [x] 1.5 `lessons/05-the-specs-and-scenarios.html`
- [x] 1.6 `lessons/06-the-design-doc.html`
- [x] 1.7 `lessons/07-tasks.html`
- [x] 1.8 `lessons/08-fast-forward.html`
- [x] 1.9 `lessons/09-implement.html`
- [x] 1.10 `lessons/10-mid-flight-edits.html`
- [x] 1.11 `lessons/11-final.html`

## 2. Verify

- [x] 2.1 Open lesson 01 — confirm dialogue block shows neutral grey background, dark text, no token colors on default text
- [x] 2.2 Confirm `.d-you`, `.d-ai`, `.d-you-bad` spans still render their assigned colors
- [x] 2.3 Open a lesson with a shell block — confirm it has no border or background chrome
- [x] 2.4 Confirm `.lesson h3` text is visibly larger (14px vs old 12px)
