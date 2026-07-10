# Current Status And Gap Analysis

Repository inspected: `chenmarvin/cdx_00japanese_engine`

Inspection date: 2026-07-10

## Current Repository State

The repository currently contains a working static web app for `Module 0 / JE-001`, named Japanese Engine.

Observed files:

- `README.md`
- `index.html`
- `app.js`
- `styles.css`
- `USER_MANUAL.md`
- `USER_MANUAL.zh-TW.md`

Observed GitHub planning state:

- Open issues: none visible
- Recent pull requests: none visible
- Branches: `main`

## Implemented Capabilities

The current app implements:

- A single app shell for Module 0
- Ten Japanese Engine units
- Five rotating practice loops
- A verb conjugation matrix
- A sentence pattern generator
- A writing text area
- A portfolio checklist
- Browser-local progress tracking through `localStorage`
- English and Traditional Chinese user manuals

The implemented ten units are:

1. Sentence Engine
2. Verb Engine
3. Particle Engine
4. Question Engine
5. Description Engine
6. Time Engine
7. Action Engine
8. Connection Engine
9. Expression Engine
10. Conversation Engine

## Current Technical Shape

The app is a static HTML/CSS/JavaScript application.

Current data is embedded directly inside `app.js`:

- Unit definitions
- Practice-loop rows
- Verb inventory
- Reading map
- Sentence-builder options
- Portfolio checklist items

Current progress state is stored as:

- `je-complete-units`
- `je-complete-criteria`

The current readiness calculation is:

```js
completeUnits / units.length * 70
+ completeCriteria / criteria.length * 30
```

This is useful for a prototype, but it is not yet a true learning mastery model.

## Gaps Against Agreed Architecture

Target architecture:

```text
One App
One User Account
One Progress System
One Review Engine
Multiple Course Modules
Optional Downloadable Content Packs
```

Current gap summary:

| Area | Current State | Gap |
| --- | --- | --- |
| Product scope | Module 0 only | No N5, N4, N3, Professional, N2, N1 module model |
| Content architecture | Hardcoded in `app.js` | Needs external course package schema |
| Progress | Unit/checklist completion only | Needs skill-level, item-level, and cross-level mastery |
| Review | Manual practice loops | No spaced repetition or adaptive review scheduler |
| Assessment | Checklist self-marking | No scored attempts, placement, mastery gates, or JLPT readiness |
| Data model | Informal arrays and sets | Needs typed entities and stable IDs |
| Interfaces | DOM functions only | Needs module/service interfaces |
| Persistence | Browser-local only | Needs storage abstraction for local now, sync later |
| Roadmap | README and manuals | Needs technical roadmap with acceptance criteria |
| QA | No visible tests | Needs manual QA checklist and future automated tests |

## Important Design Implication

The existing app is a good Module 0 prototype and should not be discarded.

It should become the first content module inside a broader platform:

```text
Japanese Mastery App
├── Core Platform
│   ├── Course Registry
│   ├── Learner Profile
│   ├── Progress Store
│   ├── Practice Engine
│   ├── Review Scheduler
│   ├── Assessment Engine
│   └── Analytics
└── Course Modules
    ├── engine-00
    ├── n5
    ├── n4
    ├── n3
    ├── professional
    ├── n2
    └── n1
```

The next engineering step is not to add N5 directly into `app.js`. The next step is to extract the existing Module 0 content into a structured course package and introduce a core platform layer that can load any level.

## Recommended Immediate Next Steps

1. Add design-depth guardrails to the repo.
2. Add the modular architecture specification.
3. Add a course package schema for Module 0 and future JLPT levels.
4. Refactor `app.js` so content data is loaded from a separate `courses/engine-00` module.
5. Replace completion-only progress with item-level practice attempts.
6. Add a roadmap and issue backlog.
7. Add basic smoke tests or manual QA checklist for the static app.

## Acceptance Criteria For The Next Milestone

The next milestone is complete when:

- Module 0 content is no longer hardcoded in the UI controller.
- Each unit, loop, verb, sentence pattern, and checklist item has a stable ID.
- Progress records point to stable content IDs instead of array indexes.
- The app can load `engine-00` from a course registry.
- A placeholder registry entry exists for `n5`, `n4`, `n3`, `professional`, `n2`, and `n1`.
- Documentation defines how future levels plug into the same platform.
