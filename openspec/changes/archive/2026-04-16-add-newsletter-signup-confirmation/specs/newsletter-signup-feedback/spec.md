## ADDED Requirements

### Requirement: Signup success confirmation
The homepage newsletter form MUST display a visible inline confirmation message after a successful subscription submission.

#### Scenario: Successful submission shows confirmation
- **WHEN** a user submits a valid email and the submission succeeds
- **THEN** the page shows an inline success message associated with the signup form
- **AND** the success message confirms that the signup request was received

### Requirement: Submission in-progress feedback
The homepage newsletter form MUST provide an in-progress submitting state while a signup request is being sent.

#### Scenario: Submitting state prevents duplicate submission
- **WHEN** a user submits the form and the request is still in flight
- **THEN** the submit button is disabled
- **AND** the UI indicates that submission is in progress

### Requirement: Failure feedback with retry guidance
The homepage newsletter form MUST display a visible inline error message when submission fails.

#### Scenario: Failed submission shows recoverable error
- **WHEN** a user submits the form and the request fails
- **THEN** the page shows an inline error message associated with the signup form
- **AND** the message instructs the user to try again

### Requirement: Accessible status announcements
Status updates for newsletter signup submission MUST be announced to assistive technologies.

#### Scenario: Screen reader receives status updates
- **WHEN** the signup form state changes to submitting, success, or error
- **THEN** the corresponding status message is exposed via a live region so assistive technologies can announce it
