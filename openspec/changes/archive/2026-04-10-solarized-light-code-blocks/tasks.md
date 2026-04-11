## 1. Update CSS custom properties in site.css

- [x] 1.1 Update `--code-bg` to `#fdf6e3`
- [x] 1.2 Update `--code-fg` to `#657b83`
- [x] 1.3 Update `--code-comment` to `#93a1a1`
- [x] 1.4 Update `--code-keyword` to `#859900`
- [x] 1.5 Update `--code-string` to `#2aa198`
- [x] 1.6 Update `--code-type` to `#268bd2`
- [x] 1.7 Update `--code-number` to `#cb4b16`
- [x] 1.8 Update `--code-prop` to `#268bd2`
- [x] 1.9 Update `--code-fn` to `#268bd2`
- [x] 1.10 Update `--code-op` to `#657b83`

## 2. Update hardcoded colors in all 11 lesson pages

For each lesson file, update the per-page `<style>` block:
- `.code-block` border: `#2a2830` → `#eee8d5`
- `.code-header` background: `#22202a` → `#eee8d5`
- `.code-filename` color: `#807d88` → `#93a1a1`
- `.code-lang` color: `#504d5a` → `#93a1a1`
- `.dialogue` border: `#2a2830` → `#eee8d5`
- `.dialogue-header` background: `#22202a` → `#eee8d5`
- `.dialogue-header` color: `#807d88` → `#93a1a1`
- `.t-dim` color: `#504d5a` → `#93a1a1`
- `.t-shell-out` color: `#6a9f6a` → `#859900`
- `.d-label` color: `#807d88` → `#93a1a1`
- `.d-you` color: `#89ddff` → `#268bd2`
- `.d-ai` color: `#c3e88d` → `#2aa198`
- `.d-you-bad` color: `#f78c6c` → `#cb4b16`
- `.d-comment` color: `#504d5a` → `#93a1a1`

- [x] 2.1 `lessons/01-the-chaos-tax.html`
- [x] 2.2 `lessons/02-install-and-init.html`
- [x] 2.3 `lessons/03-your-first-change.html`
- [x] 2.4 `lessons/04-the-proposal.html`
- [x] 2.5 `lessons/05-the-specs-and-scenarios.html`
- [x] 2.6 `lessons/06-the-design-doc.html`
- [x] 2.7 `lessons/07-tasks.html`
- [x] 2.8 `lessons/08-fast-forward.html`
- [x] 2.9 `lessons/09-implement.html`
- [x] 2.10 `lessons/10-mid-flight-edits.html`
- [x] 2.11 `lessons/11-final.html`

## 3. Verify

- [x] 3.1 Open lesson 01 — confirm code block background is warm cream, not dark
- [x] 3.2 Confirm syntax token colors: comment is muted gray, keyword is green, string is teal, number is orange
- [x] 3.3 Confirm `.code-header` and `.dialogue-header` chrome shows base2 (`#eee8d5`) background
- [x] 3.4 Open a lesson with a shell block — confirm `.t-shell-out` text is Solarized green (`#859900`)
- [x] 3.5 Open a lesson with a dialogue block — confirm `.d-you` is blue, `.d-ai` is cyan, `.d-you-bad` is orange
