# Genesis: Task-Driven PM Framework

> **Created:** 2025-10-22
> **Purpose:** The philosophy and design of this reusable framework

---

## What This Is

A **100% reusable, AI-first, task-file-driven Project Management Framework** for coordinating multi-agent software development.

**Not:** A project management tool
**But:** A reusable framework you can fork for ANY software project

---

## The Problem It Solves

### Building complex software with AI agents creates challenges:

- **Context loss** between sessions
- **Manual coordination** of frontend/backend agents
- **Forgotten decisions** and architectural choices
- **Unclear progress** tracking
- **No handoff mechanism** when switching managers

### Traditional PM tools don't work because:

- Designed for humans, not AI agents
- Require manual updates
- Live outside codebase (context switching)
- Not version controlled
- Can't be forked/reused

---

## The Solution

### Task-File-Driven Multi-Agent System

**Key insight:** Put ALL instructions in task files, not agent prompts.

**Architecture:**
```
Owner (Human)
  ↓ Approves direction
Manager AI
  ├──> fe-implementor (reads task file + docs → implements)
  ├──> fe-auditor (reads task file + code → audits)
  ├──> be-implementor (reads task file + docs → implements)
  └──> be-auditor (reads task file + code → audits)
```

**How it works:**
1. Manager AI creates task file with instructions
2. Manager AI calls agent: "Read task file X and execute"
3. Agent reads task file, reads project docs, implements
4. Agent writes results back to same task file
5. Manager AI reads results, updates progress, creates next task

---

## Design Principles

### 1. Task-File-Driven
- All instructions in dated task files (`agents/tasks/YYYY-MM-DD/`)
- Agent prompts minimal and generic
- Complete flexibility, zero hardcoding

### 2. 100% Reusable
- Fork for ANY project
- Update onboarding docs (paths, rules)
- Agent prompts stay the same
- System adapts automatically

### 3. Self-Onboarding
- Manager AI reads `MANAGER-ONBOARDING.md` → ready
- Agents read `agents/onboarding/` → ready
- No manual explanation needed

### 4. Seamless Handoff
- New Manager AI reads `MANAGER-ONBOARDING.md`
- Reads `NOW.md` for current state
- Continues from where previous left off
- Zero context loss

### 5. AI-First Design
- Optimized for AI parsing, not human aesthetics
- Structured, efficient, machine-readable
- Non-human-readable is acceptable

---

## What's Included

### Core Framework
- `BOOTSTRAP.md` - Human setup guide (10 min)
- `MANAGER-ONBOARDING.md` - Manager AI operations (AI-optimized)
- `START-HERE.md` - Hub navigation

### Agent System
- `agents/prompts/` - Ready-to-paste agent prompts (4 types)
- `agents/onboarding/` - Project-specific config (TEMPLATE - you update)
- `agents/templates/` - Multi-section task file templates
- `agents/workflow/` - Manager AI operation guides
- `agents/tasks/YYYY-MM-DD/` - Task files (auto-created, dated)

### Project Tracking
- `NOW.md` - Current status (template)
- `ROADMAP.md` - Project plan (template)
- `integration.md` - API contracts (template)

### Historical Logs
- `logs/decisions/` - Architectural decisions
- `logs/weeks/` - Weekly summaries
- `logs/milestones/` - Major achievements

---

## How to Use

### For New Project

1. **Fork this repo** or copy root directory folder
2. **Configure:**
   - Update `agents/onboarding/fe-agent.md` (YOUR frontend paths, docs, rules)
   - Update `agents/onboarding/be-agent.md` (YOUR backend paths, docs, rules)
   - Update `ROADMAP.md` (YOUR project plan)
3. **Bootstrap:**
   - Read `BOOTSTRAP.md`
   - Create agents in Claude Code (paste prompts from `agents/prompts/`)
   - Give Manager AI the agent names
4. **Run:**
   - Manager AI reads `MANAGER-ONBOARDING.md`
   - Manager AI starts creating tasks
   - System self-manages

---

## Key Innovations

### Innovation 1: Multi-Section Task Files
Each task file contains:
- **AGENT INSTRUCTIONS** (Manager fills - what to build, docs to read, rules)
- **AGENT REPORT** (Agent fills - what was built, files modified, issues)
- **CASE LOG** (Manager fills - context, decisions, next steps)
- **AUDIT REPORT** (Auditor fills - compliance check)

One file = complete record of work.

### Innovation 2: Dated Organization
Tasks in folders: `YYYY-MM-DD/fe-task-001.md`
- Chronological
- Easy to find
- Scales infinitely

### Innovation 3: Self-Documenting
- Everything logs as it happens
- Task files = audit trail
- NOW.md = always current
- Replacement Manager AI onboards instantly

---

## Who This Is For

- **Solo developers** managing complex projects
- **Small teams** coordinating FE/BE work
- **AI-first development** with Claude Code agents
- **Anyone** who wants autonomous project management

---

## Benefits

**For any project using this framework:**
- Manager AI coordinates autonomously
- No context loss between sessions
- Complete audit trail
- Quality enforced via auditors
- 100% reusable (copy → configure → run)
- Works for any tech stack
- Forkable and improvable
- Shareable with community

---

## Philosophy

### "Management is a feature that needs design"

Just like code, project management should be:
- Designed intentionally
- Version controlled
- Reusable
- Self-documenting
- Improvable

This framework treats project management as infrastructure, not ad-hoc process.

---

## Evolution

This framework will evolve as it's used:
- Patterns will emerge in weekly logs
- Templates will improve based on usage
- New agent types may be added
- Community can contribute improvements

**It's designed to be forked and improved.**

---

## Get Started

1. Read `BOOTSTRAP.md` (10 min setup)
2. Configure for your project
3. Create agents
4. Let Manager AI coordinate

**The system runs itself from there.** 🚀

---

**Framework Version:** 1.0
**Created:** 2025-10-22
**License:** MIT
**GitHub:** [Will be filled after repo created]
