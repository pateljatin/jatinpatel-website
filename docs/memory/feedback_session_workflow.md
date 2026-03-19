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

**Why:** Jatin works across multiple sessions and wants continuity without context bloat. Repo is private so memory files are safe to commit.
**How to apply:** At session start, read MEMORY.md and relevant memory files (also check docs/memory/ in repo if local memory is missing). At session end, update both Claude's local memory files AND docs/memory/ in the repo, then commit and push so memory is versioned and portable.
