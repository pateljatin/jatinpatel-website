---
name: Session Workflow Preferences
description: User wants docs folder, session-indexed memory, and context clearing between sessions
type: feedback
---

User prefers structured session management:
- Create a `docs/` folder in the project for project documentation
- Use indexed memory files (00, 01, etc.) for session tracking
- Clear context at end of each session
- Check memory at start of each session to pick up where we left off

**Why:** Jatin works across multiple sessions and wants continuity without context bloat.
**How to apply:** At session start, read MEMORY.md and relevant memory files. At session end, update memory with decisions made and work completed. Keep docs/ folder current with project-level documentation.
