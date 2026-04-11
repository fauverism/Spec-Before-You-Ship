## Context

All lesson page styles are inline `<style>` blocks — no shared lesson stylesheet exists yet. Dialogue blocks use the same Solarized token colors as code blocks (`var(--code-comment)`, `.d-you`, `.d-ai`, etc.), which is visually heavy for conversational exchange examples. Shell blocks have margin, border, and `var(--code-bg)` background that make them render identically to code blocks — but semantically they're terminal output, not highlighted code.

The 12px instances in lesson pages fall into two categories:
- **Body text at 12px**: `.lesson h3`, `.sidebar-signup .ss-text`, `.sidebar-signup input`, `.checkpoint li::before` — all should become 14px
- **Intentionally tiny labels at 10–11px**: `.code-filename`, `.code-lang`, `.sidebar-label`, `.eyebrow` etc. — leave untouched

## Goals / Non-Goals

**Goals:**
- Dialogue `pre`/`code` renders with neutral grey background (`var(--surface)`) and dark text (`var(--ink)`) — no token colors
- Dialogue code text size reduced to 12px (from 12.5px) to aid density without needing token coloring
- `.shell-block` loses border, background, and outer margin — `pre` inside it inherits base `pre` styles
- All 12px body text instances bumped to 14px across all 11 lesson files

**Non-Goals:**
- Changing 10px or 11px intentional caption/label sizes
- Changing syntax token colors inside `.code-block` (non-dialogue) — those are correct Solarized
- Touching `assets/site.css`

## Decisions

**Dialogue code: `var(--surface)` background, `var(--ink)` text**
Dialogue blocks show human-readable conversation snippets, not syntax-highlighted source code. The Solarized token colors add visual noise. `var(--surface)` (#f2f0eb) is one step darker than the page — enough to define the block without the full code-block treatment.

**Dialogue code font-size: 12px**
Currently 12.5px. The dialogue blocks are dense with line-height 2 — slightly smaller text aids readability without needing color differentiation. 12px is the floor; below that it's too small at 20px base.

**Shell block: strip all chrome**
Shell blocks currently look identical to code blocks but without a header. Removing `border`, `background`, and `margin` from `.shell-block` makes terminal commands feel inline — lighter, less formally framed. The `pre` inside still has `padding` from the base `pre` rule.

**12px → 14px rule: body text instances only**
Any rule where 12px is used for readable body text, labels on interactive elements, or list content gets bumped. Purely decorative tiny caps (10–11px) are excluded.

## Risks / Trade-offs

- **11 files to edit** → Same pattern repeated. Mitigation: uniform search-and-replace per rule class.
- **Dialogue code at 12px is below the 20px base rhythm** → Intentional — dialogue is a secondary text treatment, not body prose.
