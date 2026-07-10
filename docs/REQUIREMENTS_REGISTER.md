# Requirements Register

This register tracks explicit project requirements raised with the `Requirement:` prefix.

## Requirement R-001: Timestamped Conversation Record

Raised: `[2026-07-10 +08:00]`

Requirement:

Project-related requests and responses should include timestamps so the conversation can be reconstructed later.

Status: accepted

Implemented in:

- `docs/COMMUNICATION_REQUIREMENTS.md`
- `docs/DESIGN_DEPTH_GUARDRAILS.md`

Acceptance criteria:

- Project communication documents define the timestamp format.
- Assistant responses include timestamps.
- Future conversation summaries preserve request and response timestamps.

## Requirement R-002: Traditional Chinese Default Replies

Raised: `[2026-07-10 +08:00]`

Requirement:

Assistant should reply in Traditional Chinese by default. The user will usually write in English unless Chinese is needed for clarification.

Status: accepted

Acceptance criteria:

- Assistant replies in Traditional Chinese unless the user asks otherwise.
- Technical identifiers, filenames, code, and command examples may remain in English.

## Requirement R-003: Explicit Requirement Prefix

Raised: `[2026-07-10 +08:00]`

Requirement:

The user will use `Requirement:` as a prefix to explicitly raise project requirements, even when similar requirements may be implied by regular conversation.

Status: accepted

Acceptance criteria:

- Requirements raised with the prefix are captured in this register.
- Requirements are linked to backlog or documentation updates where appropriate.

## Requirement R-004: Android Termux Support

Raised: `[2026-07-10 +08:00]`

Requirement:

The app should support Android phones and tablets that use Termux to run the app.

Status: accepted

Product interpretation:

The app should remain usable as a static web app that can be served locally from Termux and opened in an Android browser. This is not yet a requirement to build a native Android app.

Initial target environment:

- Android phone or tablet
- Termux installed
- A simple local static server, such as Python `http.server`
- Android browser opening `http://127.0.0.1:8000/`

Acceptance criteria:

- The app can be run from a cloned repository in Termux.
- The app can be served locally without a build step.
- The README includes Termux run instructions.
- The QA checklist includes Android phone and tablet checks.
- Responsive layout remains usable on phone and tablet screen widths.
- Local browser progress works on Android browser storage.

Open questions:

- Which Android browsers should be officially tested first: Chrome, Firefox, Samsung Internet, or another browser?
- Should the app later support offline installation as a PWA?
- Should Termux setup include a helper script, or are manual commands sufficient for Phase 1?
