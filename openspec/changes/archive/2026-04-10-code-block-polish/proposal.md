## Why

Several code block styles are visually heavy or inconsistent with the site's editorial tone now that Solarized Light is in place. Dialogue blocks apply full syntax token colors to `<pre>`/`<code>` content — which isn't needed for conversational examples. Shell blocks carry unnecessary margin and background chrome. Multiple elements use 12px type which reads too small at the 20px base size.

## What Changes

- Dialogue `<pre>`/`<code>`: remove token colors, use neutral grey background and dark text
- Dialogue code text size: reduce slightly for dense conversational examples
- `.shell-block`: remove margin, border, and background — inherit from `pre`
- All 12px font-size instances across lesson pages → 14px (except decorative 10–11px labels which are intentionally smaller)

## Capabilities

### New Capabilities
<!-- None -->

### Modified Capabilities
- `code-block-theme`: dialogue block styling and shell block chrome are part of the code block theme system

## Impact

- All 11 lesson HTML files — per-page `<style>` blocks updated
- No changes to `assets/site.css` (dialogue and shell styles live per-page)
- No content or structural changes
