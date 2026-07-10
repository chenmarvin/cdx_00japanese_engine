# Roadmap And Issue Backlog

Repository: `chenmarvin/cdx_00japanese_engine`

Purpose: convert the current Module 0 static app into the first module of a one-app modular Japanese learning platform.

## Current Milestone: Foundation Refactor

Goal:

Make the existing `00 Japanese Engine` app data-driven without changing the basic user experience.

Why:

The current app works, but course content and UI logic are coupled inside `app.js`. Before adding N5 or other levels, Module 0 should become a structured course package.

## Backlog

### Issue 1: Add Design Depth Guardrails

Type: documentation

Problem:

The project needs a permanent rule that design work must be detailed enough to implement.

Scope:

- Add `docs/DESIGN_DEPTH_GUARDRAILS.md`.
- Require data models, workflows, interfaces, and acceptance criteria for non-trivial design work.

Acceptance criteria:

- The document exists in `docs/`.
- It states that high-level design alone is not enough.
- It defines a checklist for implementation-ready design.

### Issue 2: Add Current Status And Gap Analysis

Type: documentation

Problem:

The repo does not currently state what is implemented versus what remains architectural work.

Scope:

- Add `docs/CURRENT_STATUS_AND_GAP_ANALYSIS.md`.
- Document current files, current capabilities, and gaps against the one-app modular architecture.

Acceptance criteria:

- Current static-app capabilities are listed.
- Gaps are grouped by product scope, content architecture, progress, review, assessment, data model, interfaces, persistence, roadmap, and QA.
- Next milestone is clearly defined.

### Issue 3: Add One App Modular Level Architecture

Type: architecture

Problem:

The app needs an architecture decision before adding N5 through N1.

Scope:

- Add `docs/ONE_APP_MODULAR_LEVEL_ARCHITECTURE.md`.
- Define app shell, core platform, course registry, course packages, practice engine, progress store, review scheduler, and assessment engine.

Acceptance criteria:

- The document defines the target levels: `engine-00`, `n5`, `n4`, `n3`, `professional`, `n2`, `n1`.
- The document explains why `engine-00` is a persistent foundation module.
- The document includes module contracts and acceptance criteria.

### Issue 4: Add Implementation-Ready Specification

Type: specification

Problem:

Developers need concrete data models and interfaces before refactoring the app.

Scope:

- Add `docs/IMPLEMENTATION_READY_SPEC.md`.
- Define IDs, data models, interfaces, workflows, readiness calculation, migration plan, and QA checklist.

Acceptance criteria:

- Course package, unit, practice item, attempt, mastery, and portfolio models are defined.
- Course Registry, Progress Store, Practice Engine, Review Scheduler, and Assessment Engine interfaces are defined.
- Module 0 extraction plan is specific enough to implement.

### Issue 5: Extract Module 0 Course Data

Type: refactor

Problem:

Module 0 course content is hardcoded in `app.js`.

Scope:

- Create `src/courses/engine-00/course.js`.
- Move units, loops, verbs, criteria, readings, subjects, objects, and sentence verbs into structured exports.
- Assign stable IDs.

Acceptance criteria:

- `app.js` no longer directly owns course content arrays.
- All Module 0 units have stable IDs.
- All practice items have stable IDs.
- UI output remains visually and behaviorally equivalent.

### Issue 6: Add Course Registry

Type: feature

Problem:

The app cannot yet represent multiple levels.

Scope:

- Create `src/core/course-registry.js`.
- Register `engine-00` as available.
- Register `n5`, `n4`, `n3`, `professional`, `n2`, and `n1` as planned placeholders.

Acceptance criteria:

- App can list all target levels from registry data.
- App can load `engine-00` by ID.
- Placeholder levels do not require UI code changes.

### Issue 7: Replace Index-Based Progress With Stable IDs

Type: refactor

Problem:

Current progress is stored using unit and criteria array indexes. This is fragile.

Scope:

- Replace old keys with namespaced keys:
  - `jm.completedUnitIds`
  - `jm.completedCriterionIds`
  - `jm.practiceAttempts`
  - `jm.portfolioEntries`
- Add one-time migration from old `je-*` keys.

Acceptance criteria:

- Existing local progress can be migrated.
- Progress survives content reordering.
- Reset clears new progress keys.
- Old keys do not crash the app.

### Issue 8: Record Practice Attempts

Type: feature

Problem:

The app currently marks unit practice complete but does not store attempt history.

Scope:

- Add `PracticeAttempt` records.
- Record item ID, mode, result, timestamp, confidence, and response time when available.

Acceptance criteria:

- Completing a practice item creates an attempt record.
- Attempts can be listed from local storage.
- Readiness can use attempt count and result.

### Issue 9: Introduce Skill Mastery

Type: feature

Problem:

The app tracks completion, not actual skill strength.

Scope:

- Define skill IDs for Module 0.
- Map each practice item to one or more skills.
- Calculate simple mastery score from attempts.

Acceptance criteria:

- Each Module 0 unit has target skills.
- Practice attempts update skill mastery.
- Progress screen or readiness calculation can identify weak skills.

### Issue 10: Add Manual QA Checklist

Type: quality

Problem:

No visible tests or QA checklist exist.

Scope:

- Add `docs/QA_CHECKLIST.md`.
- Cover app load, responsive layout, unit switching, practice loops, verb matrix, pattern generator, writing box, progress, reset, and manuals.

Acceptance criteria:

- Checklist can be run manually before each release.
- Checklist includes desktop and mobile viewport checks.
- Checklist includes browser refresh and local progress checks.

## Suggested Phase Order

### Phase 1: Documentation And Architecture

- Issue 1
- Issue 2
- Issue 3
- Issue 4

### Phase 2: Safe Refactor

- Issue 5
- Issue 6
- Issue 7
- Issue 10

### Phase 3: Learning Intelligence

- Issue 8
- Issue 9

### Phase 4: N5 Readiness

After Phase 3, create an empty `n5` package and add the first N5 unit using the same package schema.

## Release Gate For Adding N5

Do not add full N5 content until:

- Module 0 is a course package.
- Course registry exists.
- Progress uses stable IDs.
- Practice attempts are recorded.
- Module 0 has skill IDs.
- At least one QA checklist run is completed.

This keeps N5 from becoming a second hardcoded layer inside the current prototype.
