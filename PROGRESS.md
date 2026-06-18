# Progress

A running log of what's been built, fixed, and shipped.

---

## v0.1.2 — Usability audit, broken links, and navigation fixes *(in progress)*

### Broken links
- **Lesson 02 next-link** was pointing to `/lessons/03-the-proposal/` (a URL that does not exist). Fixed to `/lessons/03-the-exploration/` with the correct label.

### Wrong lesson number references (5 fixes)
Lesson numbers shifted when "The Exploration" was inserted as lesson 03, pushing The Proposal from 03 to 04. Several body-copy references were never updated:
- Lesson 02 body: "In lesson 03 you'll write a proposal" → "In lesson 03 you'll use exploration mode"
- Lesson 04 body: "in lesson 04 each capability becomes its own spec file" → lesson 05
- Lesson 05 body: "In lesson 05 you'll write the design doc" → lesson 06
- Lesson 06 body: "In lesson 06 you'll break the design into tasks" → lesson 07
- Lesson 07 body: "lessons 03 through 05" → "lessons 04 through 06"

### Contact page
- FAQ claimed "11 lessons" in two places — corrected to 8
- Contact form had `action="#"` — submits to nowhere. Now intercepts submit with JS and opens a pre-filled `mailto:` with subject and body built from the form fields
- Form focus state used a hardcoded `background: #fff` — broken in dark mode. Now uses `var(--bg)`

### CSS bugs
- `--surface-1` and `--surface-2` were referenced in the exploration callout and lesson 03 chat bubbles but never defined in `site.css`. Both tokens now exist in light and dark theme.
- Sidebar subtitle had `line-height: 0rem` — fixed to `1.3`

### Navigation
- Header "Lessons" link went directly to lesson 01. Now points to `/#curriculum` so users land on the full lesson index
- Added `id="curriculum"` to the curriculum section on the home page so the anchor resolves
- Contact nav link now receives `.current` class when on `/contact/`
- Footer in `PageLayout` was missing the "BridgeSpec" brand name — added for consistency with `LessonLayout`
- Footer link renamed from "Start Learning" to "Start Lesson 01" to be more specific

### Sidebar lesson progress
- Sidebar now applies `class="done"` to lessons before the current one and `class="upcoming"` to lessons after it
- CSS updated so done lessons render at full opacity (`var(--ink-2)`) and upcoming lessons render at 50% opacity — giving users a clear read of where they are in the 8-lesson series

---

## v0.1.1 — Analytics, archive, misc fixes

- Added Vercel Analytics
- Archive workflow documented in lesson 08
- Misc copy and styling fixes

---

## v0.1.0 — Add The Exploration lesson, fix broken lesson links

- Added lesson 03: The Exploration — covers `/opsx:explore`, shows a real exploration conversation, explains what exploration mode is and isn't
- Renumbered The Proposal from lesson 03 → 04, The Spec from 04 → 05, and so on through lesson 08
- Fixed broken inter-lesson links introduced by the renumbering
- Added sidebar signup form (Buttondown embed)
- Subscribe button fixes

---

## v0.0.1 — Initial launch

- 8-lesson tutorial: The Chaos Tax, Install & Init, The Proposal, The Spec, The Design Doc, Tasks, Ship It
- Sidebar navigation with theme toggle (light / dark, Solarized)
- Mobile lesson nav bar with prev/next arrows
- Homepage with curriculum list, "who this is for" section, pull quote, and email signup band
- Contact page with form, FAQ, and sidebar info
- Buttondown newsletter integration
