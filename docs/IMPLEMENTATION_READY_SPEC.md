# Implementation-Ready Specification

## Purpose

This document converts the Japanese Engine concept into an implementation-ready specification.

It is intentionally concrete: data models, module interfaces, workflows, acceptance criteria, and migration steps.

## Phase 1 Scope

Phase 1 should convert the current static Module 0 app into the first module of a scalable one-app architecture.

In scope:

- Extract hardcoded Module 0 content from `app.js`.
- Define stable content IDs.
- Introduce course registry.
- Introduce progress store abstraction.
- Record item-level practice attempts.
- Preserve current app UI and manuals.
- Add placeholder level metadata for future modules.

Out of scope:

- User accounts
- Cloud sync
- Payments
- Full N5 content
- Speech recognition
- AI tutoring
- Mobile app packaging

## Core IDs

Use stable IDs everywhere.

```ts
type CourseLevelId =
  | "engine-00"
  | "n5"
  | "n4"
  | "n3"
  | "professional"
  | "n2"
  | "n1";

type PracticeMode =
  | "vocabulary-recall"
  | "verb-transformation"
  | "sentence-transformation"
  | "pattern-substitution"
  | "conversation"
  | "listening"
  | "reading"
  | "writing"
  | "speaking";

type SkillId = string;
type UnitId = string;
type PracticeItemId = string;
type LearnerId = string;
```

ID naming examples:

```text
course: engine-00
unit: engine-00.unit.sentence
skill: engine-00.skill.sentence.a-wa-b-desu
practice item: engine-00.practice.sentence-transform.001
criterion: engine-00.criterion.verb-core-forms
```

## Data Models

### Localized Text

```ts
interface LocalizedText {
  ja?: string;
  kana?: string;
  zhTW?: string;
  en?: string;
  romaji?: string;
}
```

### Course Summary

```ts
interface CourseSummary {
  id: CourseLevelId;
  title: string;
  subtitle: string;
  sequence: number;
  status: "available" | "planned" | "locked";
  estimatedHours?: number;
}
```

### Course Package

```ts
interface CoursePackage {
  id: CourseLevelId;
  title: string;
  subtitle: string;
  version: string;
  sequence: number;
  status: "available" | "planned" | "locked";
  targetLearner: string;
  prerequisites: SkillId[];
  outcomes: SkillOutcome[];
  units: CourseUnit[];
  practiceItems: PracticeItem[];
  masteryCriteria: MasteryCriterion[];
  assessments: Assessment[];
}
```

### Skill Outcome

```ts
interface SkillOutcome {
  id: SkillId;
  title: string;
  description: string;
  category:
    | "sentence"
    | "verb"
    | "particle"
    | "question"
    | "description"
    | "time"
    | "action"
    | "connection"
    | "expression"
    | "conversation"
    | "vocabulary"
    | "kanji"
    | "listening"
    | "reading"
    | "writing"
    | "speaking";
  levelIntroduced: CourseLevelId;
}
```

### Course Unit

```ts
interface CourseUnit {
  id: UnitId;
  courseId: CourseLevelId;
  title: string;
  goal: string;
  description: string;
  sequence: number;
  targetSkills: SkillId[];
  objectiveTexts: LocalizedText[];
  requiredPracticeItemIds: PracticeItemId[];
  masteryCriterionIds: string[];
}
```

### Practice Item

```ts
interface PracticeItem {
  id: PracticeItemId;
  courseId: CourseLevelId;
  unitId: UnitId;
  mode: PracticeMode;
  prompt: LocalizedText;
  expectedAnswer?: LocalizedText;
  acceptedAnswers?: LocalizedText[];
  explanation?: LocalizedText;
  skillIds: SkillId[];
  difficulty: 1 | 2 | 3 | 4 | 5;
  estimatedSeconds: number;
  tags: string[];
}
```

### Mastery Criterion

```ts
interface MasteryCriterion {
  id: string;
  courseId: CourseLevelId;
  unitId?: UnitId;
  skillIds: SkillId[];
  title: string;
  description: string;
  measurement:
    | "self-check"
    | "attempt-accuracy"
    | "timed-response"
    | "portfolio-review"
    | "assessment-score";
  threshold: {
    minAccuracy?: number;
    minAttempts?: number;
    maxAverageSeconds?: number;
    requiredPortfolioEntries?: number;
    minScore?: number;
  };
}
```

### Practice Attempt

```ts
interface PracticeAttempt {
  id: string;
  learnerId: LearnerId;
  practiceItemId: PracticeItemId;
  courseId: CourseLevelId;
  unitId: UnitId;
  skillIds: SkillId[];
  mode: PracticeMode;
  startedAt: string;
  completedAt: string;
  response?: LocalizedText;
  result: "correct" | "incorrect" | "partial" | "self-marked-complete" | "skipped";
  responseSeconds?: number;
  confidence?: 1 | 2 | 3 | 4 | 5;
}
```

### Skill Mastery

```ts
interface SkillMastery {
  learnerId: LearnerId;
  skillId: SkillId;
  courseIdIntroduced: CourseLevelId;
  masteryScore: number;
  accuracy: number;
  attempts: number;
  lastPracticedAt?: string;
  nextReviewAt?: string;
  status: "new" | "learning" | "review" | "strong" | "weak";
}
```

### Writing Portfolio Entry

```ts
interface PortfolioEntry {
  id: string;
  learnerId: LearnerId;
  courseId: CourseLevelId;
  unitId: UnitId;
  sourcePatternId?: string;
  text: string;
  createdAt: string;
  selfRating?: 1 | 2 | 3 | 4 | 5;
  reviewedStatus: "draft" | "self-reviewed" | "teacher-reviewed";
}
```

## Module Interfaces

### Course Registry

```ts
interface CourseRegistry {
  listCourses(): CourseSummary[];
  getCourse(courseId: CourseLevelId): CoursePackage;
  getUnit(courseId: CourseLevelId, unitId: UnitId): CourseUnit;
  getPracticeItems(filter: PracticeItemFilter): PracticeItem[];
}
```

### Progress Store

```ts
interface ProgressStore {
  getLearnerId(): LearnerId;
  listAttempts(filter?: AttemptFilter): PracticeAttempt[];
  recordAttempt(attempt: PracticeAttempt): void;
  listSkillMastery(): SkillMastery[];
  updateSkillMastery(skillMastery: SkillMastery): void;
  listPortfolioEntries(filter?: PortfolioFilter): PortfolioEntry[];
  savePortfolioEntry(entry: PortfolioEntry): void;
}
```

### Practice Engine

```ts
interface PracticeEngine {
  startSession(input: PracticeSessionInput): PracticeSession;
  submitAttempt(input: SubmitAttemptInput): PracticeAttempt;
  completeSession(sessionId: string): PracticeSessionSummary;
}
```

### Review Scheduler

```ts
interface ReviewScheduler {
  getDueItems(input: DueReviewInput): PracticeItem[];
  updateSchedule(attempt: PracticeAttempt): void;
}
```

### Assessment Engine

```ts
interface AssessmentEngine {
  evaluateUnit(courseId: CourseLevelId, unitId: UnitId): UnitReadiness;
  evaluateCourse(courseId: CourseLevelId): CourseReadiness;
  evaluateSkill(skillId: SkillId): SkillMastery;
}
```

## Workflows

### Workflow 1: Load App

1. App initializes.
2. Course Registry loads course summaries.
3. Progress Store loads or creates local learner ID.
4. App selects current course. Default: `engine-00`.
5. App renders level navigation and current unit.
6. Progress summaries are calculated from stable IDs.

Acceptance criteria:

- App opens without network access.
- Module 0 appears as `engine-00`.
- Placeholder levels appear as planned or locked.
- No UI code depends on array index for progress identity.

### Workflow 2: Practice Item Attempt

1. Learner opens a practice loop.
2. Practice Engine displays a practice item.
3. Learner answers, self-marks, or skips.
4. Practice Engine creates `PracticeAttempt`.
5. Progress Store saves attempt.
6. Assessment Engine updates affected `SkillMastery`.
7. UI updates readiness and next items.

Acceptance criteria:

- Attempt includes course ID, unit ID, item ID, skill IDs, result, and timestamp.
- Multiple attempts can be recorded for the same item.
- Mastery increases after correct/self-marked attempts and weakens after incorrect/skipped attempts.

### Workflow 3: Complete Unit

1. Learner practices required items.
2. Assessment Engine evaluates unit mastery criteria.
3. If criteria pass, unit status becomes complete.
4. If criteria fail, UI shows which skills or criteria remain incomplete.

Acceptance criteria:

- Unit completion is calculated from mastery criteria, not only a button click.
- Self-check criteria may still exist, but must be tied to stable criterion IDs.
- Unit status survives browser refresh.

### Workflow 4: Cross-Level Review

1. Learner is studying N3.
2. Review Scheduler detects weak `engine-00` or N5 skills.
3. Today queue includes earlier-level review items.
4. Attempts update shared mastery.

Acceptance criteria:

- Later levels can reference earlier skills.
- Review queue can mix items from multiple course modules.
- Progress screen identifies the origin level of each weak skill.

## Module 0 Extraction Plan

### Step 1: Assign Stable IDs

Convert current `units` array into unit objects with IDs:

```text
engine-00.unit.sentence
engine-00.unit.verb
engine-00.unit.particle
engine-00.unit.question
engine-00.unit.description
engine-00.unit.time
engine-00.unit.action
engine-00.unit.connection
engine-00.unit.expression
engine-00.unit.conversation
```

### Step 2: Extract Course File

Create:

```text
src/courses/engine-00/course.js
```

It should export:

```js
export const engine00Course = {
  id: "engine-00",
  title: "00 Japanese Engine",
  subtitle: "Bootloader-style Japanese foundation for Taiwanese learners",
  version: "0.1.0",
  sequence: 0,
  status: "available",
  units: [],
  practiceItems: [],
  masteryCriteria: []
};
```

### Step 3: Add Registry

Create:

```text
src/core/course-registry.js
```

It should export:

```js
import { engine00Course } from "../courses/engine-00/course.js";

export const courseRegistry = {
  listCourses() {
    return [
      summarize(engine00Course),
      { id: "n5", title: "N5", sequence: 1, status: "planned" },
      { id: "n4", title: "N4", sequence: 2, status: "planned" },
      { id: "n3", title: "N3", sequence: 3, status: "planned" },
      { id: "professional", title: "Professional Japanese", sequence: 4, status: "planned" },
      { id: "n2", title: "N2", sequence: 5, status: "planned" },
      { id: "n1", title: "N1", sequence: 6, status: "planned" }
    ];
  },
  getCourse(courseId) {
    if (courseId === "engine-00") return engine00Course;
    throw new Error(`Course not available: ${courseId}`);
  }
};
```

### Step 4: Replace Index-Based Progress

Current:

```js
completeUnits: new Set(JSON.parse(localStorage.getItem("je-complete-units") || "[]"))
```

Target:

```js
completedUnitIds: new Set(JSON.parse(localStorage.getItem("jm.completedUnitIds") || "[]"))
```

Practice attempts:

```js
const attempts = JSON.parse(localStorage.getItem("jm.practiceAttempts") || "[]");
```

### Step 5: Preserve Backward Compatibility

On first run after migration:

1. Read old `je-complete-units`.
2. Map array indexes to new unit IDs.
3. Save `jm.completedUnitIds`.
4. Keep old keys untouched for rollback.

## Readiness Calculation

Phase 1 readiness may use a simple weighted model:

```text
unit completion: 35%
practice item attempts: 35%
mastery criteria: 20%
portfolio entries: 10%
```

Future readiness should be mastery-based:

```text
courseReadiness =
  weighted average of required skill mastery
  + required assessment performance
  + portfolio completion where relevant
```

## QA Checklist

Manual QA for Phase 1:

- App opens from `index.html`.
- App opens from local static server.
- All ten Module 0 units render.
- Each unit has stable ID in data.
- Practice loops render from course package data.
- Verb matrix still works.
- Pattern generator still works.
- Writing area still accepts text.
- Attempts are stored with stable item IDs.
- Refresh preserves progress.
- Reset clears new progress keys.
- Existing old progress keys do not crash the app.
- Placeholder levels appear but do not break navigation.
- Traditional Chinese manual still opens.

## Phase 1 Definition Of Done

Phase 1 is done when:

- Module 0 is loaded from `src/courses/engine-00/course.js`.
- A course registry exists.
- App shell can list all target levels.
- Progress uses stable IDs.
- Practice attempts are recorded.
- Readiness is calculated from structured progress.
- Documentation explains how N5 can be added without editing core app logic.
