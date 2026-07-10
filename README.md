# Japanese Engine

Japanese Engine is a compact study app for Module 0 / JE-001, a bootloader-style Japanese curriculum for Taiwanese learners.

The app includes:

- 10 curriculum units from Sentence Engine through Conversation Engine
- Five rotating practice loops
- Verb conjugation matrix
- Sentence pattern generator
- Writing portfolio area
- Completion checklist with local progress tracking

Open `index.html` directly in a browser, or serve the folder with any static web server.

## Architecture Direction

The current app is Module 0 of a larger one-app modular Japanese learning system.

Early architecture files live under:

- `src/courses/engine-00/` for the 00 Japanese Engine course package
- `src/core/` for shared platform services such as the course registry
- `docs/` for design guardrails, implementation specs, roadmap, and communication requirements
