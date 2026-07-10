# Communication Requirements

## Timestamped Conversation Record

All project-related requests and responses should include timestamps so the conversation can be reconstructed later.

Required format:

```text
[YYYY-MM-DD HH:mm:ss +08:00]
```

Use the user's active timezone unless the user specifies a different timezone.

Current project timezone:

```text
Asia/Taipei
```

## Usage

When recording or summarizing conversation history, preserve:

- User request timestamp
- Assistant response timestamp
- The action taken
- Any files changed
- Any blocked state or approval requirement

## Rationale

The Japanese Engine project is evolving through architecture decisions, documentation, and implementation steps. Timestamped communication makes it easier to audit when a requirement was introduced, when a design decision was made, and which implementation changes followed from it.
