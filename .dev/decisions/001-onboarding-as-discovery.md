# Decision 001: Onboarding as Discovery - Gaps Become Tasks

**Date:** 2025-10-23
**Status:** ✅ Implemented
**Impact:** High - Paradigm shift in how onboarding works

---

## Context

Initially, the framework's onboarding process would **stop and ask users** to create documentation (Claude.md, ARCHITECTURE.md) before proceeding. This created friction:

- ❌ Onboarding blocked until docs were created
- ❌ Forced users to make immediate decisions
- ❌ "Create docs now or never" pressure
- ❌ Didn't follow proper project management workflow

**The Problem:**
"Why should missing documentation block me from starting work?"

---

## Decision

**Onboarding is now a Discovery Task that creates a Backlog.**

### Paradigm Shift

```
OLD: Requirements = Blockers
"You need Claude.md files! Create them now or setup fails!"

NEW: Gaps = Tasks in Backlog
"I logged missing docs as tasks. Ready to build! (Or do docs first - your choice)"
```

### How It Works Now

**1. Onboarding Completes Regardless**
- Always finishes successfully
- Never blocks on missing documentation
- Configures framework with what it found

**2. Missing Docs → Backlog Tasks**
- Creates `agents/backlog/documentation-tasks.md`
- Each gap becomes a task with:
  - Purpose
  - Content needed (based on detected stack)
  - Estimated effort
  - Who can do it
  - Why it matters

**3. User Controls Priority**
```
You have two options:
A) Complete documentation tasks first (recommended)
   - Ensures AI has clear guidelines
   - Prevents inconsistent code generation

B) Start building features now, document later
   - AI will work but may need more guidance
   - You can create Claude.md anytime
```

**4. PM Agent Schedules Everything**
- Documentation tasks in backlog
- Feature tasks from user
- PM decides order based on user input

---

## Architecture Understanding

### Old Approach (Rigid)
```
Look for file named "ARCHITECTURE.md"
├─→ Found? ✅ Read it
└─→ Not found? ❌ "Missing ARCHITECTURE.md - create it!"
```

### New Approach (Intelligent)
```
Search for architecture information in ANY form
├─→ docs/architecture-overview.md? ✅ Read
├─→ backend/ENDPOINT_CREATION_GUIDE.md? ✅ Read
├─→ docs/api-patterns.md? ✅ Read
└─→ Synthesize understanding from multiple sources

Result: Mental model of architecture, not rigid file requirement
```

**Philosophy:** "Understand the architecture, don't demand a specific filename"

---

## Claude.md Naming Convention

**Decision:** Use `Claude.md` (capitalized)

**Reasoning:**
- Named after Claude AI (proper noun = capitalize)
- Consistent with user's global `.claude/Claude.md`
- More professional and clear

**Backward Compatibility:**
- Still checks both `Claude.md` and `claude.md`
- Uses whichever exists
- Prefers `Claude.md` when creating new files

---

## Example Backlog Created

```markdown
# Documentation Backlog

**Created during onboarding:** 2025-10-23
**Priority:** Medium (recommended before feature development)

## Missing Documentation Tasks

### Task: Create Frontend Claude.md
**File:** frontend/Claude.md
**Purpose:** Consolidate frontend coding standards for AI agents
**Content needed:**
- Component structure patterns (detected: React + TypeScript)
- State management rules (detected: Redux Toolkit)
- Styling conventions (detected: Material-UI)
- Testing requirements
- Critical "never break" rules

**Why:** Helps AI agents build consistent frontend features
**Estimated effort:** 1-2 hours
**Can be done by:** Project lead or senior frontend developer

---

### Task: Create Backend Claude.md
**File:** backend/Claude.md
**Purpose:** Consolidate backend coding standards for AI agents
**Content needed:**
- API endpoint patterns (detected: Express + TypeScript)
- Error handling conventions
- Database access patterns (detected: Prisma + PostgreSQL)
- Validation rules (detected: Zod)
- Security requirements

**Why:** Helps AI agents build consistent backend features
**Estimated effort:** 1-2 hours
**Can be done by:** Project lead or senior backend developer

---

## Existing Documentation (Good!)
- ✅ docs/architecture-overview.md - System architecture
- ✅ backend/ENDPOINT_CREATION_GUIDE.md - API patterns
- ✅ docs/api-patterns.md - Frontend API integration

These provide good foundation! The tasks above would complement them.
```

---

## Benefits

### For Users
✅ **No friction** - Onboarding always completes
✅ **Control** - User decides docs vs features priority
✅ **Transparency** - Gaps clearly identified with estimates
✅ **Flexibility** - Build now, document later (or vice versa)

### For Project Management
✅ **Proper workflow** - Everything is a task
✅ **Trackable** - Documentation work has estimates
✅ **Prioritizable** - PM can schedule based on value
✅ **Accountable** - Tasks assigned and tracked

### For AI Agents
✅ **Context-aware** - AI knows what docs exist
✅ **Adaptive** - Works with or without Claude.md
✅ **Helpful** - Creates templates based on detected stack
✅ **Not demanding** - Suggests, doesn't block

---

## The Meta Concept

**Onboarding IS the first PM task!**

```
Onboarding = Initial Discovery Sprint
│
├─→ Understand existing codebase ✅
├─→ Identify tech stack ✅
├─→ Find documentation ✅
├─→ Identify gaps 📝
├─→ Create actionable backlog 📋
└─→ Hand off to PM agent for scheduling

Result: Project is READY + Work is IDENTIFIED + Nothing is BLOCKED
```

This mirrors how a real PM joins a project:
1. Discover what exists
2. Identify what's missing
3. Create backlog
4. Prioritize and execute

---

## Trade-offs

### Pros
✅ More flexible onboarding
✅ Better user experience
✅ Proper PM workflow
✅ Documentation becomes first-class work
✅ Nothing blocks progress

### Cons
⚠️ Users might skip documentation forever (but they have that choice)
⚠️ More complex onboarding logic (but worth it)

### Mitigation
- Recommend docs first with clear reasoning
- Make documentation tasks easy to complete
- Show effort estimates (1-2 hours each)
- Explain benefits clearly

---

## Implementation

**Files Changed:**
- `.ai-instructions/BOOTSTRAP-EXISTING-PROJECT.ai.md` - Complete rewrite of Phase 4
- `README.md` - Updated to explain the approach

**New Behavior:**
1. Phase 1-3: Detect, analyze, configure (same as before)
2. Phase 4: **NEW** - Create backlog for gaps instead of asking to create docs
3. Phase 5: Offer options (docs first vs build first)

**Backward Compatibility:**
- Still checks for `claude.md` (lowercase) for existing projects
- No breaking changes to existing setups

---

## Future Enhancements

Potential improvements:
- [ ] Auto-generate Claude.md templates based on detected patterns
- [ ] Estimate project complexity and suggest timeline
- [ ] Create initial `docs/NOW.md` with project state snapshot
- [ ] Suggest task order based on dependencies

---

## Conclusion

This decision transforms onboarding from a **setup wizard** into a **discovery process** that:
- Analyzes the project intelligently
- Identifies gaps without judgment
- Creates actionable work items
- Lets users control priorities
- Follows proper PM methodology

**Philosophy:** "Log it, don't block it."

Every gap is an opportunity for improvement, tracked as a task in the backlog.

---

**Decision Made By:** User feedback + Claude Code
**Implemented By:** Claude Code
**Status:** ✅ Live in production
