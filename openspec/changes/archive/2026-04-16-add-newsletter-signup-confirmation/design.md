## Context

The homepage includes a newsletter form in `src/pages/index.astro`, but it currently has no runtime feedback state and no explicit success confirmation after submission. The design must provide clear post-submit feedback without introducing backend coupling, because the final email provider endpoint may vary.

## Goals / Non-Goals

**Goals:**
- Provide immediate inline feedback for newsletter submission outcomes (submitting, success, error).
- Keep the interaction accessible by announcing status updates to assistive technologies.
- Preserve the existing page layout and visual style while adding clear confirmation messaging.

**Non-Goals:**
- Defining or implementing a specific newsletter provider integration.
- Adding account creation, double-opt-in business logic, or CRM workflows.
- Introducing a reusable multi-page form framework beyond this homepage form.

## Decisions

### 1) Use an inline status region directly associated with the signup form
- **Decision:** Add a dedicated message region below the form that can render success and error text.
- **Rationale:** Inline feedback keeps context local to the action and avoids disruptive page transitions.
- **Alternatives considered:**
  - Toast notifications: less discoverable and easier to miss.
  - Redirect-to-thank-you page: heavier flow and less suitable for a simple homepage signup.

### 2) Model feedback with explicit form states
- **Decision:** Use four states: `idle`, `submitting`, `success`, `error`.
- **Rationale:** A small explicit state model prevents ambiguous UI behavior and supports deterministic messaging.
- **Alternatives considered:**
  - Success-only state: leaves failures unclear.
  - Implicit ad-hoc flags: harder to maintain and reason about.

### 3) Make status updates screen-reader friendly
- **Decision:** Use a live region (`aria-live=\"polite\"`) for non-blocking announcement of status changes.
- **Rationale:** Ensures blind and low-vision users receive equivalent feedback.
- **Alternatives considered:**
  - Visual-only text updates: inaccessible.
  - `aria-live=\"assertive\"`: overly interruptive for this non-critical interaction.

### 4) Disable repeated submissions while request is in flight
- **Decision:** Disable the submit button during `submitting`.
- **Rationale:** Prevents duplicate requests and clarifies that submission is processing.
- **Alternatives considered:**
  - Leave button active with no lock: risks duplicate subscriptions and confusing behavior.

## Risks / Trade-offs

- **[Provider-specific response behavior may differ]** → Mitigation: treat HTTP success as success, and show a generic retry message for non-success responses.
- **[Static-site constraints can limit server-side handling]** → Mitigation: keep confirmation UX provider-agnostic and client-side.
- **[Overly detailed error text can expose internals]** → Mitigation: use user-friendly generic error copy and avoid leaking backend details.

## Migration Plan

1. Add spec requirements for success/error/submitting feedback behavior.
2. Implement homepage form UI state handling and status messaging.
3. Validate manual flows for success and error scenarios.
4. Rollback strategy: remove state handling and status region if regressions are discovered.

## Open Questions

- Should success copy explicitly mention checking inbox for confirmation?
- Should success state clear the email input, or preserve it until user navigates away?
