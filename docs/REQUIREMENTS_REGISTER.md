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

## Requirement R-005: Pattern Generator Copies Components to Writing Pad

Raised: `[2026-07-11 +08:00]`

Requirement:

Whenever the Pattern Generator button is clicked, the selected language components, including subject, place/object, verb, and the generated sentence, should be copied into the floating text pad for exercise purposes.

Status: implemented

Product interpretation:

The Pattern Generator should act as both a sentence generator and an exercise starter. Each click should preserve the generated pattern in the floating writing pad so the learner can immediately write original sentences from the selected components.

Acceptance criteria:

- Clicking the Pattern Generator shuffle button updates the selected subject, place/object, and verb.
- The floating writing pad receives the selected subject, place/object, verb, and generated sentence.
- Existing writing pad content is preserved, and the new exercise is appended below it.
- The writing pad receives focus after the exercise text is inserted.

## Requirement R-006: Pattern Generator Must Avoid Invalid Component Combinations

Raised: `[2026-07-11 +08:00]`

Requirement:

The Pattern Generator should not produce invalid or unnatural combinations such as `エンジニアは日本語を行きます`.

Status: implemented

Product interpretation:

The generator should use pattern modes and component compatibility rules instead of randomly combining all subjects, places/objects, and verbs. Movement verbs should pair with destinations, object-action verbs should pair with valid objects, and location-action verbs should pair with locations.

Acceptance criteria:

- Movement mode produces sentences such as `Subject + Destinationに + 行きます`.
- Object Action mode produces sentences such as `Subject + Objectを + 勉強します / 話します / 飲みます` only where the object and verb are compatible.
- Location Action mode produces sentences such as `Subject + Locationで + 勉強します / 話します / 飲みます`.
- The UI exposes the active pattern mode so learners understand which sentence frame is being practiced.
- Pattern Generator exercise text copied to the floating writing pad includes the pattern mode.

## Requirement R-007: Export and Import Learner Progress

Raised: `[2026-07-11 +08:00]`

Requirement:

Learners who use the app on multiple Android devices, such as a phone and tablet, should be able to move progress between devices.

Status: implemented

Product interpretation:

Phase 1 should provide manual export/import of a JSON progress backup. This fits the current static app and Termux runtime without requiring accounts, servers, or cloud credentials.

Acceptance criteria:

- The app provides an Export control that downloads a JSON progress backup.
- The app provides an Import control that accepts a JSON progress backup.
- Imported completed units are merged with local completed units.
- Imported completed checklist items are merged with local completed checklist items.
- Imported writing pad text is preserved without blindly erasing existing local writing.
- Help content explains how export/import can be used between phone and tablet.

Future considerations:

- Add practice log entries to the export schema.
- Add conflict handling for newer and older progress records.
- Consider Syncthing, GitHub Gist, or cloud sync after the local backup format stabilizes.

## Requirement R-008: Keep Multilingual Help Content Synchronized

Raised: `[2026-07-11 +08:00]`

Requirement:

When user-facing app behavior changes, all active help/manual surfaces should be updated together so the user does not need to find omissions and request corrections.

Status: accepted

Product interpretation:

The project currently has English in-app Help and a Traditional Chinese manual. A feature is not complete if only one help surface explains the new behavior.

Acceptance criteria:

- New controls are documented in the English in-app Help when relevant.
- New controls are documented in `USER_MANUAL.zh-TW.html` when relevant.
- Changed workflows are reflected in both help surfaces.
- New requirements are captured in this register when they affect product behavior or workflow.
- The design guardrails document includes a documentation synchronization rule.

## Requirement R-009: Closable Writing Pad and Item Finish Markers

Raised: `[2026-07-14 +08:00]`

Requirement:

The floating writing pad should be closable and reopenable. Major exercise categories should expose finish markers so learners can mark individual items as exercised and finished, especially conjugation matrix items.

Status: implemented

Product interpretation:

The writing pad should stay available without permanently occupying screen space. Learners should be able to mark fine-grained practice items complete instead of only marking an entire unit complete.

Acceptance criteria:

- The floating writing pad has a visible Close control.
- A visible Writing pad control reopens the pad after it is closed.
- Objective items expose finish markers.
- Practice loop rows expose finish markers.
- Conjugation matrix rows expose finish markers.
- The current Pattern Generator scaffold exposes a finish marker.
- Finish markers visually distinguish incomplete and complete states.
- Finish marker state is saved in browser local progress.
- Finish marker state is included in progress export/import.
- English Help and Traditional Chinese manual explain the new behavior.

## Requirement R-010: Populate Unit Learning Items into Writing Pad

Raised: `[2026-07-14 +08:00]`

Requirement:

For each engine category, all new learning items should be populated into the floating writing pad ready for practice.

Status: implemented

Product interpretation:

When the learner selects an engine unit/category, the app should copy that unit's learning objectives into the writing pad as practice prompts. The learner should not need to manually retype the objective list before writing practice sentences.

Acceptance criteria:

- Selecting a unit appends that unit's learning objectives into the writing pad.
- Each objective includes a placeholder for the learner's own practice sentence.
- The same unit's learning item block is not duplicated if it is already in the writing pad.
- The writing pad receives focus after the learning items are inserted or found.
- English Help and Traditional Chinese manual explain the behavior.

## Requirement R-011: Copy Engine Components to Writing Pad on Category Actions

Raised: `[2026-07-14 +08:00]`

Requirement:

When the next button or selection button of each category engine is clicked, the applicable language components should be copied into the Writing pad. This should apply beyond the Pattern Generator.

Status: implemented

Product interpretation:

Engine interactions that reveal or change practice language components should also create writing-pad practice scaffolds, so learners can immediately write from the selected components.

Acceptance criteria:

- Selecting a unit copies that unit's learning objectives into the writing pad.
- Clicking a Practice Engine loop tab copies that loop's rows/components into the writing pad.
- Clicking the Verb Engine next button copies the selected verb, meaning, group, and conjugation forms into the writing pad.
- Changing Pattern Generator mode, subject, component, or verb copies the current pattern components and generated sentence into the writing pad.
- Pattern Generator shuffle continues to copy the generated pattern into the writing pad.
- Hidden writing pad reopens when content is copied into it.
- English Help and Traditional Chinese manual explain the behavior.

## Requirement R-012: Unit-Specific Bootloader Visual Examples

Raised: `[2026-07-14 +08:00]`

Requirement:

The Bootloader map visual examples should not remain the same across all engines. They should change according to the selected engine category so the examples are descriptive and relevant.

Status: implemented

Product interpretation:

The three visual example cards at the top of the overview panel should act as quick orientation cues for the active unit, not as fixed Sentence Engine examples.

Acceptance criteria:

- Each engine category defines three representative visual examples.
- Selecting a different engine category updates all three visual example cards.
- Sentence Engine still shows sentence-structure examples.
- Verb, Particle, Question, Description, Time, Action, Connection, Expression, and Conversation engines show examples aligned with their own learning focus.
- English Help and Traditional Chinese manual explain that the visual examples change by selected engine.
