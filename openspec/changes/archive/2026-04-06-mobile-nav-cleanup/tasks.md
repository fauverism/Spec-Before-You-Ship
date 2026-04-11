## 1. Add mobile nav CSS to site.css or shared style

- [x] 1.1 Add `.mob-nav` CSS block to `assets/site.css` — sticky bar, hidden on desktop (`display: none` at > 960px), visible on mobile with flex layout for back arrow / lesson counter / forward arrow

## 2. Remove Companion box and add mobile nav markup — lesson pages

- [x] 2.1 `lessons/01-the-chaos-tax.html` — remove `.companion-box`, add `<div class="mob-nav">` with no back arrow (hidden), counter `01 / 11`, next link to `02-install-and-init.html`
- [x] 2.2 `lessons/02-install-and-init.html` — remove `.companion-box`, add mob-nav: prev `01-the-chaos-tax.html`, counter `02 / 11`, next `03-your-first-change.html`
- [x] 2.3 `lessons/03-your-first-change.html` — remove `.companion-box`, add mob-nav: prev `02-install-and-init.html`, counter `03 / 11`, next `04-the-proposal.html`
- [x] 2.4 `lessons/04-the-proposal.html` — remove `.companion-box`, add mob-nav: prev `03-your-first-change.html`, counter `04 / 11`, next `05-the-specs-and-scenarios.html`
- [x] 2.5 `lessons/05-the-specs-and-scenarios.html` — remove `.companion-box`, add mob-nav: prev `04-the-proposal.html`, counter `05 / 11`, next `06-the-design-doc.html`
- [x] 2.6 `lessons/06-the-design-doc.html` — remove `.companion-box`, add mob-nav: prev `05-the-specs-and-scenarios.html`, counter `06 / 11`, next `07-tasks.html`
- [x] 2.7 `lessons/07-tasks.html` — remove `.companion-box`, add mob-nav: prev `06-the-design-doc.html`, counter `07 / 11`, next `08-fast-forward.html`
- [x] 2.8 `lessons/08-fast-forward.html` — remove `.companion-box`, add mob-nav: prev `07-tasks.html`, counter `08 / 11`, next `09-implement.html`
- [x] 2.9 `lessons/09-implement.html` — remove `.companion-box`, add mob-nav: prev `08-fast-forward.html`, counter `09 / 11`, next `10-mid-flight-edits.html`
- [x] 2.10 `lessons/10-mid-flight-edits.html` — remove `.companion-box`, add mob-nav: prev `09-implement.html`, counter `10 / 11`, next `11-final.html`
- [x] 2.11 `lessons/11-final.html` — remove `.companion-box`, add mob-nav: prev `10-mid-flight-edits.html`, counter `11 / 11`, no forward arrow (hidden)

## 3. Verify

- [x] 3.1 Open a middle lesson at mobile width (375px) — confirm mob-nav shows with correct lesson number, both arrows tap correctly
- [x] 3.2 Open lesson 01 at mobile width — confirm back arrow is not visible
- [x] 3.3 Open lesson 11 at mobile width — confirm forward arrow is not visible
- [x] 3.4 Open any lesson at desktop width — confirm mob-nav is not visible
- [x] 3.5 Inspect DOM on any lesson — confirm no `.companion-box` element present
