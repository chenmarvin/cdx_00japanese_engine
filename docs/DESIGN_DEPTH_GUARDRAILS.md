# Design Depth Guardrails

This project has one explicit product-design constraint from the owner:

> Do not stop at high-level learning-app ideas. Every design proposal must drill down far enough to be implementable, testable, and maintainable.

This document preserves that concern as a standing rule for future work on Japanese Engine and the broader Japanese Mastery platform.

## Required Detail Level

Every non-trivial design document must include these sections before it is considered complete:

1. Problem statement
2. Target learner and learning context
3. Scope and non-scope
4. User workflows
5. Data model
6. Content model
7. Component or module interfaces
8. Progress and assessment logic
9. Acceptance criteria
10. Risks, edge cases, and open questions
11. Timestamped request/response context when the design came from conversation

If a design only explains the idea but not how it is represented in data, how screens consume it, how progress is calculated, and how completion is tested, it is not deep enough.

## Implementation-Ready Checklist

A feature is ready for implementation only when the following questions can be answered from the documentation:

- What user action starts the workflow?
- What state changes when the user completes the workflow?
- What data is read, created, updated, or deleted?
- Which module owns the data?
- Which interface exposes the capability to the UI?
- What validation rules apply?
- How is success measured?
- What does the user see when something is incomplete, invalid, or already mastered?
- What must be covered by tests or manual QA?

## Product Architecture Rule

The preferred product architecture is:

```text
One App Shell
+ Shared Learning Platform
+ Independent Course Modules
+ Cross-Level Progress Model
```

The app should eventually contain:

- 00 Japanese Engine
- N5
- N4
- N3
- Professional Japanese
- N2
- N1

Each level must be an independent content module, but progress, review, analytics, placement, and learner identity must be shared across the whole product.

## Definition Of Done For Design Work

A design task is done only when it produces at least one of the following:

- A data schema that can be implemented
- A module interface that can be coded
- A workflow with states and transitions
- Acceptance criteria that can be verified
- A migration or rollout plan
- A test or QA checklist

Architecture notes without these details should be treated as drafts, not final designs.

## Conversation Timestamp Rule

Project conversation records should preserve timestamps for both user requests and assistant responses.

Default timestamp format:

```text
[YYYY-MM-DD HH:mm:ss +08:00]
```

Use `Asia/Taipei` unless the user specifies another timezone.
