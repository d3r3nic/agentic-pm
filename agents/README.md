# Multi-Agent System Overview

> **Purpose:** High-level overview of the AI agent architecture
> **Audience:** Humans and Manager AI understanding the system

---

## System Architecture

```
Owner (Human)
    ↓ Approves direction
Manager AI
    ├──> calls fe-implementor → Builds frontend
    ├──> calls fe-auditor → Reviews frontend
    ├──> calls be-implementor → Builds backend
    └──> calls be-auditor → Reviews backend
```

---

## Agent Roles

| Agent | Type | Function | Input | Output |
|-------|------|----------|-------|--------|
| **Manager AI** | Coordinator | Creates tasks, calls agents, tracks progress | MANAGER-ONBOARDING.md, NOW.md, ROADMAP.md | Task files, updated status |
| **fe-implementor** | Builder | Implements frontend features | Task file + onboarding + docs | Code + AGENT REPORT |
| **be-implementor** | Builder | Implements backend APIs | Task file + onboarding + docs | Code + AGENT REPORT |
| **fe-auditor** | Reviewer | Checks FE rule compliance | Task file + code | AUDIT REPORT |
| **be-auditor** | Reviewer | Checks BE rule compliance | Task file + code | AUDIT REPORT |

---

## Task File Workflow

**1. Manager AI creates task:**
- Copies template from `templates/[fe|be]-task-template.md`
- Fills AGENT INSTRUCTIONS section (what to build, docs to read, rules)
- Fills CASE LOG section (context, dependencies, decisions)
- Saves to `tasks/YYYY-MM-DD/[fe|be]-task-NNN.md`

**2. Manager AI calls agent:**
```
Task(subagent_type="fe-implementor", prompt="Read agents/tasks/2025-10-22/fe-task-001.md and execute")
```

**3. Agent executes:**
- Reads task file
- Reads onboarding doc (project structure, docs, rules)
- Reads referenced docs
- Implements feature
- Fills AGENT REPORT section
- Reports completion

**4. Manager AI processes:**
- Reads AGENT REPORT
- Updates CASE LOG with outcomes
- Updates NOW.md with progress
- Optionally calls auditor
- Proceeds to next task

**5. Optional auditing:**
- Manager calls auditor with same task file
- Auditor checks code against rules
- Auditor fills AUDIT REPORT
- If violations: Manager creates fix task
- If clean: Manager marks complete

---

## Key Design Principles

**Task-file-driven:**
- All instructions in task files (not agent prompts)
- Agent prompts are minimal and generic
- Task files = single source of truth for each task

**Dated organization:**
- Tasks in folders by date (`tasks/YYYY-MM-DD/`)
- Easy to find, chronological order
- Scales indefinitely

**Multi-section tasks:**
- AGENT INSTRUCTIONS (Manager fills)
- AGENT REPORT (Agent fills)
- CASE LOG (Manager fills)
- AUDIT REPORT (Auditor fills)
- Complete record in one file

**Self-documenting:**
- Task files = audit trail
- NOW.md = current status
- Logs = historical decisions
- No context loss ever

**Onboarding-driven:**
- Agents onboard on every task (read onboarding doc)
- Ensures agents always have latest rules/docs
- Project-specific knowledge in onboarding docs

---

## File Locations

**Core docs:**
- `/BOOTSTRAP.md` - Human setup guide
- `/MANAGER-ONBOARDING.md` - Manager AI operations
- `/NOW.md` - Current status
- `/ROADMAP.md` - Project plan
- `/integration.md` - API contracts

**Agent system:**
- `/agents/onboarding/` - Project-specific agent onboarding
- `/agents/prompts/` - Generic ready-to-paste prompts
- `/agents/templates/` - Task file templates
- `/agents/workflow/` - Manager AI workflows
- `/agents/tasks/YYYY-MM-DD/` - Task files (dated)

**Historical:**
- `/logs/decisions/` - Architectural decisions
- `/logs/weeks/` - Weekly summaries
- `/logs/milestones/` - Major achievements

---

## Scalability

**Works for:**
- Any project size (small to enterprise)
- Any tech stack (customize onboarding docs)
- Any team structure (1 person to large team)
- Any timeline (weeks to years)

**Scales via:**
- Dated task folders (unlimited growth)
- Modular logs (organized by type)
- Static onboarding (never grows)
- Self-documenting system (no manual overhead)

---

## Reusability

**Fork for new project:**
1. Copy root directory folder
2. Update `agents/onboarding/` (paths, docs, rules)
3. Create agents in Claude Code
4. Initialize Manager AI
5. Done!

**Framework is 100% portable.**

---

**See:** BOOTSTRAP.md (setup), MANAGER-ONBOARDING.md (operations), workflow/ (detailed processes)
