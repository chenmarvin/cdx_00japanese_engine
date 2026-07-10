# One App Modular Level Architecture

## Decision

Build one Japanese Mastery app with independent course modules.

Do not build six or seven disconnected apps. Do not build one unstructured app where all levels are hardcoded together.

Preferred architecture:

```text
Japanese Mastery App
├── App Shell
├── Core Learning Platform
├── Course Modules
│   ├── engine-00
│   ├── n5
│   ├── n4
│   ├── n3
│   ├── professional
│   ├── n2
│   └── n1
└── Shared Learner Progress
```

## Product Goals

The system should help Taiwanese learners build Japanese from an engine-first foundation into JLPT and professional usage.

The learning path is:

```text
00 Japanese Engine
-> N5
-> N4
-> N3
-> Professional Japanese
-> N2
-> N1
```

The app must support learners who follow the full path and learners who place into a later level but still need earlier weaknesses repaired.

## Core Principles

### 1. Content Is Not App Code

Course content must be data-driven.

The UI should not know that Sentence Engine is the first unit or that N5 has a specific grammar point. It should ask the course registry for available modules, units, lessons, practice items, and mastery criteria.

### 2. Modules Are Independent, Progress Is Shared

Each course module owns its content.

The core platform owns learner progress and review scheduling.

This allows N3 practice to trigger review from N5 particles or Module 0 verb transformation if the learner is weak there.

### 3. 00 Japanese Engine Is A Persistent Foundation

`engine-00` is not only the first course.

It is also the foundation engine reused by later levels:

- Sentence assembly
- Particle logic
- Verb transformation
- Question formation
- Time/action/connection patterns
- Immediate sentence production

Later modules should reference foundational skills from `engine-00` instead of redefining them.

### 4. Mastery Is Skill-Based, Not Page-Based

The app should not only track:

```text
N5 complete: 80%
```

It should track:

```text
particle.wa_vs_ga: 73%
verb.te_form.godan: 88%
sentence.production.basic_action: 61%
listening.slow_daily_conversation: 52%
kanji.recognition.n5: 69%
```

## Proposed Module Boundaries

### App Shell

Responsibilities:

- Layout
- Navigation
- Level selection
- Today / Learn / Practice / Progress tabs
- Help/manual access
- Theme and responsive behavior

Non-responsibilities:

- It does not own course content.
- It does not calculate mastery directly.
- It does not decide review scheduling.

### Course Registry

Responsibilities:

- List available course modules.
- Load a course package by ID.
- Validate package version compatibility.
- Expose module metadata.

Example interface:

```ts
type CourseLevelId =
  | "engine-00"
  | "n5"
  | "n4"
  | "n3"
  | "professional"
  | "n2"
  | "n1";

interface CourseRegistry {
  listCourses(): CourseSummary[];
  getCourse(id: CourseLevelId): CoursePackage;
  isCourseAvailable(id: CourseLevelId): boolean;
}
```

### Course Package

Responsibilities:

- Course metadata
- Units
- Lessons
- Vocabulary
- Kanji
- Grammar points
- Sentence patterns
- Practice items
- Assessment definitions
- Mastery criteria

Non-responsibilities:

- It does not store learner progress.
- It does not schedule reviews.
- It does not own account data.

### Practice Engine

Responsibilities:

- Render practice items.
- Validate responses when possible.
- Record attempts.
- Support practice modes:
  - Vocabulary recall
  - Verb transformation
  - Sentence transformation
  - Pattern substitution
  - Conversation
  - Listening
  - Reading
  - Writing
  - Speaking

### Progress Store

Responsibilities:

- Store learner attempts.
- Store mastery estimates.
- Store lesson completion.
- Store writing portfolio entries.
- Store review schedule state.

Current implementation uses `localStorage`. Future implementation should hide storage behind an interface so local-only and cloud-sync versions can share the same app logic.

### Review Scheduler

Responsibilities:

- Select due review items.
- Prioritize weak skills.
- Mix current-level and earlier-level items.
- Update next review date after attempts.

### Assessment Engine

Responsibilities:

- Placement test
- Unit checks
- Level readiness
- JLPT readiness estimates
- Skill-specific mastery gates

## Recommended Folder Structure

Near-term static-app structure:

```text
/
├── index.html
├── styles.css
├── app.js
├── src/
│   ├── app-shell/
│   ├── core/
│   │   ├── course-registry.js
│   │   ├── progress-store.js
│   │   ├── practice-engine.js
│   │   ├── review-scheduler.js
│   │   └── assessment-engine.js
│   └── courses/
│       ├── engine-00/
│       │   ├── course.js
│       │   ├── units.js
│       │   ├── practice-items.js
│       │   └── mastery-criteria.js
│       ├── n5/
│       ├── n4/
│       ├── n3/
│       ├── professional/
│       ├── n2/
│       └── n1/
└── docs/
```

Future framework structure can preserve the same boundaries:

```text
src/
├── app/
├── core/
├── courses/
├── features/
├── shared/
└── tests/
```

## Level Module Contract

Every course module must expose:

```ts
interface CoursePackage {
  id: CourseLevelId;
  title: string;
  sequence: number;
  version: string;
  learnerProfile: LearnerProfileSpec;
  prerequisites: SkillId[];
  outcomes: SkillOutcome[];
  units: CourseUnit[];
  practiceItems: PracticeItem[];
  assessments: Assessment[];
  masteryCriteria: MasteryCriterion[];
}
```

Every unit must expose:

```ts
interface CourseUnit {
  id: string;
  courseId: CourseLevelId;
  title: string;
  goal: string;
  description: string;
  sequence: number;
  targetSkills: SkillId[];
  lessons: Lesson[];
  requiredPracticeItemIds: string[];
  masteryCriterionIds: string[];
}
```

Every practice item must expose:

```ts
interface PracticeItem {
  id: string;
  courseId: CourseLevelId;
  unitId: string;
  mode: PracticeMode;
  prompt: LocalizedText;
  expectedAnswer?: LocalizedText;
  acceptedAnswers?: LocalizedText[];
  explanation?: LocalizedText;
  skillIds: SkillId[];
  difficulty: 1 | 2 | 3 | 4 | 5;
  estimatedSeconds: number;
}
```

## Cross-Level Learning Workflow

### Today

Purpose: Daily guided study.

Inputs:

- Current course
- Due review items
- Weak skill estimates
- Learner available time

Output:

- Daily study queue

Workflow:

1. Learner opens app.
2. App loads learner profile and progress.
3. Review Scheduler selects due review items.
4. Course Registry selects next lesson or practice set.
5. Today screen shows new learning, review, and weak-point repair.
6. Learner completes attempts.
7. Progress Store records attempts.
8. Mastery estimates update.

### Learn

Purpose: Structured course progress.

Workflow:

1. Learner selects a level.
2. App displays units for that course.
3. Learner opens a unit.
4. App shows lesson content and target skills.
5. Learner completes required practice loops.
6. Unit completion is unlocked only when mastery criteria are met.

### Practice

Purpose: Cross-level skill strengthening.

Workflow:

1. Learner selects a practice mode or skill area.
2. App pulls matching practice items from all available modules.
3. Learner completes attempts.
4. Attempts update skill mastery.
5. Weak skills are added to future review.

### Progress

Purpose: Skill and level visibility.

Displays:

- Level completion
- Skill mastery
- Weak points
- Review load
- Writing portfolio
- JLPT readiness where applicable

## Acceptance Criteria

This architecture is implemented when:

- The app can list all course modules from a registry.
- Module 0 content is represented as a course package.
- N5 through N1 can be represented as empty or placeholder packages without changing app-shell code.
- Progress records use stable IDs, not array indexes.
- Practice attempts can be recorded at item level.
- Mastery can be computed by skill, unit, and level.
- A later level can reference skills introduced by `engine-00`.
- The app can generate a daily study queue from both new content and review items.

## Risks

- Overbuilding too early: avoid adding accounts, payments, or cloud sync before the course model is stable.
- Under-modeling progress: simple completion checkmarks are not enough for a serious learning system.
- Hardcoding content: adding N5 directly into `app.js` will create long-term maintenance problems.
- Vague mastery: every completion gate needs measurable criteria.
