# 🎯 Manager AI Planning Protocol

> **For:** Manager AI when receiving new feature requests
> **Purpose:** Systematic planning that prevents overwhelming contexts and missed requirements
> **Status:** MANDATORY - Cannot skip steps

---

## 🚨 CRITICAL: When to Use This Protocol

**Use this protocol when:**
- Feature has extensive documentation (>10 pages)
- Feature spans multiple domains (FE + BE + Integration)
- Feature will require multiple context windows
- User provides documentation folder (e.g., `/tasks/feature-name/`)
- Project philosophy is "Enterprise-Grade" or "Production-Ready"

**Skip this protocol when:**
- Simple, single-domain feature (<5 pages docs)
- Quick bug fix or minor change
- User explicitly requests "fast implementation"
- Project philosophy is "MVP/Slop Mode"

---

## 📋 The 7-Step Planning Protocol

**IMPORTANT:** These steps are SEQUENTIAL. Complete each step before moving to the next.
Each step has a CHECKPOINT that must be satisfied before proceeding.

---

### **Step 1: Feature Intake & Scope Understanding**

**Goal:** Understand what the user wants at a high level

**Actions:**
1. User provides feature request + documentation
2. Read ONLY overview/summary documents first (not deep docs yet)
3. Identify feature domains (Frontend, Backend, Database, Integration, etc.)
4. Estimate complexity: SMALL / MEDIUM / LARGE / EXTRA-LARGE

**Complexity Guide:**
- SMALL: 1-3 tasks, single domain, <1 week
- MEDIUM: 4-8 tasks, 2 domains, 1-2 weeks
- LARGE: 9-20 tasks, 3+ domains, 2-4 weeks
- EXTRA-LARGE: 20+ tasks, multiple domains, 1-3 months

**Output:**
```markdown
# Feature Intake Report
Feature: [Name]
Complexity: [SMALL/MEDIUM/LARGE/EXTRA-LARGE]
Domains: [Frontend, Backend, Database, etc.]
Estimated Timeline: [X weeks]
Documentation Size: [X pages / X MB]

Summary: [2-3 sentence description of what user wants]
```

**Save to:** `.pm/planning/[feature-name]/01-intake.md`

**Checkpoint:**
- ✅ Feature name identified
- ✅ Complexity estimated
- ✅ Domains identified
- ✅ User confirms this understanding is correct

**Ask user:**
```
📥 Feature Intake Complete

Feature: [Name]
Complexity: [Level]
Domains: [List]
Estimated: [Timeline]

Is this understanding correct? Any clarifications needed?
```

---

### **Step 2: Context Budget Assessment**

**Goal:** Determine if feature fits in one context or needs phasing

**Actions:**
1. Check current context usage
2. Estimate tokens needed for full feature implementation
3. Calculate: Can fit in one context? Or needs multiple?
4. If multiple contexts needed → Plan phase boundaries

**Token Budget:**
- Total context: 200k tokens
- System + Tools: ~20k tokens
- Safe working space: 150k tokens usable
- Per-phase budget: 40-50k tokens (leaves room for tool outputs)

**Decision Matrix:**
```
IF documentation + implementation < 150k tokens:
   → Single-context implementation (proceed normally)

IF documentation + implementation > 150k tokens:
   → Multi-phase implementation (use this protocol)
```

**Output:**
```markdown
# Context Budget Assessment

Current Usage: [X]k tokens
Documentation Size: [X]k tokens (estimated)
Implementation Estimate: [X]k tokens

Decision: [SINGLE-CONTEXT / MULTI-PHASE]

If Multi-Phase:
- Estimated Phases: [X] phases
- Phase Boundaries: [Brief description of how to split]
```

**Save to:** `.pm/planning/[feature-name]/02-context-budget.md`

**Checkpoint:**
- ✅ Context budget calculated
- ✅ Decision made (single vs multi-phase)
- ✅ If multi-phase: phase boundaries identified

---

### **Step 3: Specialized Analysis (Delegate to Analysts)**

**Goal:** Deep understanding of each domain WITHOUT overwhelming main context

**Actions:**
1. Spawn specialized analyst agents for each domain
2. Each analyst produces a SMALL report (<10k tokens)
3. Manager AI reads reports, not full documentation

**Analyst Types:**

**Frontend Analyst Agent:**
- **Template:** `agents/onboarding/frontend-analyst.template.md`
- Reads: Frontend docs + Component patterns + State management
- Analyzes: How feature fits in existing FE architecture
- Outputs: Frontend Implementation Strategy (~5-8k tokens)
- Saves to: `.pm/analysis/frontend-[feature-name]-analysis.md`

**Backend Analyst Agent:**
- **Template:** `agents/onboarding/backend-analyst.template.md`
- Reads: Backend docs + API patterns + Database patterns
- Analyzes: Database changes + API design + Security
- Outputs: Backend Implementation Strategy (~5-8k tokens)
- Saves to: `.pm/analysis/backend-[feature-name]-analysis.md`

**Integration Analyst Agent:**
- **Template:** `agents/onboarding/integration-analyst.template.md`
- Reads: Both FE/BE analyses + API contracts
- Analyzes: How pieces connect, dependencies, handoffs
- Outputs: Integration Plan (~5-8k tokens)
- Saves to: `.pm/analysis/integration-[feature-name]-plan.md`

**Optional Specialists:**
- Database Analyst: For complex schema changes
- Security Analyst: For auth/permission features
- Performance Analyst: For high-load features

**Spawn Command:**
```bash
# Spawn analysts in parallel
npx tsx sdk/spawn-analyst.ts frontend [feature-name] [docs-path]
npx tsx sdk/spawn-analyst.ts backend [feature-name] [docs-path]
npx tsx sdk/spawn-analyst.ts integration [feature-name] [docs-path]
```

**Each analyst creates:**
`.pm/planning/[feature-name]/analysis/[domain]-analysis.md`

**Checkpoint:**
- ✅ All analyst agents spawned
- ✅ All analysis reports received
- ✅ Reports are under 10k tokens each
- ✅ No contradictions between reports

**Tell user:**
```
🔍 Domain Analysis Complete

I've analyzed all domains:
- ✅ Frontend: [Brief summary from report]
- ✅ Backend: [Brief summary from report]
- ✅ Integration: [Brief summary from report]

Key findings: [1-2 sentences highlighting important decisions]

Moving to master plan creation...
```

---

### **Step 4: Master Plan Creation**

**Goal:** Create the single source of truth for this feature

**Actions:**
1. Read all analyst reports
2. Synthesize into cohesive master plan
3. Break into phases (if multi-context)
4. Define tasks for each phase
5. Specify context requirements for each phase
6. Define checkpoints between phases

**Master Plan Structure:**
```markdown
# MASTER PLAN: [Feature Name]
# Created: [Date]
# Status: PLANNING → APPROVED → IN_PROGRESS → COMPLETE
# Project Philosophy: [Enterprise/Production/MVP]

## Executive Summary
[2-3 paragraphs: What, Why, How]

## Architecture Decisions
[Key decisions from analyst reports]

### Frontend Decisions:
- [Decision 1]
- [Decision 2]

### Backend Decisions:
- [Decision 1]
- [Decision 2]

### Integration Decisions:
- [Decision 1]
- [Decision 2]

## Implementation Phases

### Phase 1: [Name] (Week X, Days Y-Z)
**Purpose:** [What this phase accomplishes]
**Context Required:** [Specific docs needed - keep under 40k tokens]
**Dependencies:** None / [Phase X]

**Tasks:**
- [DOMAIN]-001: [Task description]
- [DOMAIN]-002: [Task description]

**Deliverable:** [What's ready after this phase]
**Checkpoint:** [How to verify phase success]

---

### Phase 2: [Name]
[Same structure]

---

## Task Breakdown

### Frontend Tasks (Total: X)
- FE-001: [Description] - Estimate: [time] - Phase: [X]
- FE-002: [Description] - Estimate: [time] - Phase: [X]

### Backend Tasks (Total: X)
- BE-001: [Description] - Estimate: [time] - Phase: [X]
- BE-002: [Description] - Estimate: [time] - Phase: [X]

### Integration Tasks (Total: X)
- INT-001: [Description] - Estimate: [time] - Phase: [X]

## Context Management Strategy

### Context 1: Planning (Current - Complete)
- Purpose: Create this master plan
- Docs Used: Analyst reports only
- Output: This document

### Context 2: Phase 1 Implementation
- Purpose: [Phase 1 goal]
- Docs Needed: [Specific small docs]
- Token Budget: [X]k
- Tasks: [List]

### Context 3: Phase 2 Implementation
[Same structure]

## Progress Tracking

| Phase | Status | Start Date | End Date | Tasks Complete |
|-------|--------|------------|----------|----------------|
| Phase 1 | NOT_STARTED | - | - | 0/X |
| Phase 2 | NOT_STARTED | - | - | 0/X |

## Checkpoints & Gates

### After Phase 1:
- [ ] [Checkpoint 1]
- [ ] [Checkpoint 2]
- **User Approval Required:** Yes/No

### After Phase 2:
[Same structure]

## Risk Assessment

**High Risks:**
- [Risk 1]: [Mitigation]
- [Risk 2]: [Mitigation]

**Medium Risks:**
- [Risk 1]: [Mitigation]

## Rollback Strategy

If something goes wrong:
1. [Step 1]
2. [Step 2]

---

**Next Steps:**
1. Get user approval for this plan
2. Start Phase 1 implementation
3. Report progress at each checkpoint
```

**Save to:** `.pm/planning/[feature-name]/MASTER-PLAN.md`

**Checkpoint:**
- ✅ Master plan created
- ✅ All phases defined
- ✅ Context budgets for each phase calculated
- ✅ Tasks identified and estimated
- ✅ Dependencies mapped

**Ask user:**
```
📋 Master Plan Ready

I've created a comprehensive implementation plan:

Phases: [X] phases
Total Tasks: [X] tasks ([Y] FE, [Z] BE, [W] Integration)
Timeline: [X] weeks
Checkpoints: [X] user approval points

Key Decisions:
- [Decision 1]
- [Decision 2]

Full plan saved to: .pm/planning/[feature-name]/MASTER-PLAN.md

Please review the plan. Should I proceed with implementation?
(Yes / Suggest changes / Show me the full plan)
```

---

### **Step 5: Phase Execution**

**Goal:** Implement one phase at a time, staying within context budget

**Actions for EACH phase:**

**5.1: Load Phase Context**
```markdown
🎯 Starting Phase [X]: [Phase Name]

Loading context for this phase:
- ✅ Master plan (loaded)
- ✅ Phase-specific analysis (loaded)
- ✅ Required documentation (loaded)

Total context: [X]k / 150k tokens (safe)

Tasks in this phase: [List]
```

**5.2: Create Task Files**
For each task in the phase:
```bash
# Create task file
.pm/tasks/[DATE]/[domain]-task-[number].md

# Task file contains:
- Task description (from master plan)
- Specific requirements
- Context docs to read
- Implementation checklist
- Test requirements
```

**5.3: Spawn Implementation Agents**
```bash
# Spawn agents for tasks
npx tsx sdk/spawn-agent-simple.ts fe-implementor [DATE] [task-number]
npx tsx sdk/spawn-agent-simple.ts be-implementor [DATE] [task-number]
```

**5.4: Monitor Progress**
- Track task completion
- Update progress in master plan
- Note any issues or blockers

**5.5: Phase Checkpoint**
When all tasks in phase complete:
```markdown
✅ Phase [X] Complete!

Completed:
- ✅ Task 1: [Name]
- ✅ Task 2: [Name]

Deliverable: [What was built]

Checkpoint Review:
- [ ] [Checkpoint 1]
- [ ] [Checkpoint 2]

Please review before I continue to Phase [X+1].
```

**5.6: User Gate**
Wait for user approval before next phase

**Checkpoint:**
- ✅ All tasks in phase completed
- ✅ Phase deliverable achieved
- ✅ Checkpoint items verified
- ✅ User approved to continue

---

### **Step 6: Integration & Testing**

**Goal:** Connect all phases into working feature

**Actions:**
1. Load integration plan (from analyst)
2. Connect frontend to backend
3. End-to-end testing
4. Performance testing
5. Security review (if enterprise-grade)

**Integration Tasks:**
```markdown
INT-001: Connect FE to BE APIs
INT-002: E2E happy path testing
INT-003: Error scenario testing
INT-004: Performance testing
INT-005: Security review (if needed)
```

**Checkpoint:**
- ✅ Frontend + Backend integrated
- ✅ E2E tests passing
- ✅ Error handling working
- ✅ Performance acceptable
- ✅ Security validated

**Tell user:**
```
🔗 Integration Complete

All components connected and tested:
- ✅ Frontend → Backend APIs working
- ✅ End-to-end flows tested
- ✅ Error scenarios handled
- ✅ Performance validated

Feature is ready for user acceptance testing!
```

---

### **Step 7: Completion & Documentation**

**Goal:** Finalize feature and create handoff documentation

**Actions:**
1. Update master plan status to COMPLETE
2. Create feature documentation
3. Update project NOW.md
4. Archive planning artifacts
5. Create handoff document for future maintenance

**Feature Documentation:**
```markdown
# Feature: [Name]
# Status: COMPLETE
# Completed: [Date]

## What Was Built
[Description]

## Architecture
[Key components created]

## How to Use
[User-facing documentation]

## How to Maintain
[Developer documentation]

## Future Enhancements
[Ideas for future work]
```

**Save to:** `.pm/completed/[feature-name]/FEATURE-DOCS.md`

**Update NOW.md:**
```markdown
## Recent Completions
- ✅ [Feature Name] - Completed [Date]
  - [Brief description]
  - Impact: [What changed]
```

**Checkpoint:**
- ✅ Master plan marked complete
- ✅ Feature documentation created
- ✅ NOW.md updated
- ✅ Planning artifacts archived

**Tell user:**
```
🎉 Feature Complete: [Name]

Implementation finished:
- Total time: [X] weeks
- Tasks completed: [X] tasks
- Phases: [X] phases

Documentation:
- Feature docs: .pm/completed/[name]/FEATURE-DOCS.md
- Master plan: .pm/planning/[name]/MASTER-PLAN.md

What's next? (New feature / Refinements / Celebrate! 🎉)
```

---

## 🔄 Context Recovery Protocol

**If context resets during implementation:**

**Step 1: Identify where we are**
```bash
# Read the master plan
cat .pm/planning/[feature-name]/MASTER-PLAN.md

# Check progress table
# Find: Last completed phase
```

**Step 2: Resume from last checkpoint**
```markdown
🔄 Context Recovered

I see we're implementing: [Feature Name]

Progress:
- ✅ Phase 1: Complete
- ✅ Phase 2: Complete
- ⏸️  Phase 3: Task 2 of 5 (in progress)

Resuming from Phase 3, Task 3...
```

**Step 3: Load minimal context for current phase**
```markdown
Loading context for Phase 3:
- ✅ Master plan excerpt (Phase 3 only)
- ✅ Phase 3 requirements
- ✅ Completed work summary

Total: [X]k tokens (lean and focused)

Continuing implementation...
```

**Zero information loss!**

---

## 📊 Success Metrics

**This protocol succeeds when:**
- ✅ No context window overflow
- ✅ No missed requirements
- ✅ Seamless integration across phases
- ✅ User approval at each checkpoint
- ✅ Feature complete and documented
- ✅ Future maintainability ensured

---

## 🚫 Common Mistakes to Avoid

**❌ DON'T:**
- Skip steps in the protocol
- Try to load all documentation at once
- Start coding before master plan approval
- Continue to next phase without checkpoint approval
- Forget to update master plan progress

**✅ DO:**
- Follow steps sequentially
- Use analyst agents for deep dives
- Get user approval at checkpoints
- Keep context lean (40-50k per phase)
- Update progress continuously

---

**Last Updated:** 2025-10-23
**Version:** 1.0 (Initial Release)
