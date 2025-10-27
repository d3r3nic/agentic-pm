# Framework Developer Onboarding
# Understanding the Planning-First Philosophy

**Audience:** AI Developer implementing this framework
**Purpose:** Understand the critical importance of planning and how to treat the planning documents

---

## 🎯 Core Philosophy: Hours Planning, Minutes Developing

### The Fundamental Rule

```
Planning: 100% complete before ANY implementation
Development: Only starts after planning perfection
```

**Not 90/10. Not 80/20. It's 100% planning → Then development.**

### Why This Exists

**The Problem This Framework Solves:**

Traditional approach:
```
User: "Build feature X"
AI: "Ok!" → Starts coding immediately
Result: Wrong architecture, wrong entity level, missed edge cases
Outcome: Complete rework needed, wasted time, technical debt
```

**This Framework's Approach:**
```
User: "Build feature X"
PM AI: "Entering PLAN MODE..." → Hours of deep analysis
PM AI: "Here's complete master plan with architecture validated"
User: "Approved"
PM AI: "Here's your implementation prompt"
Developer: Pastes prompt → Builds in minutes (because plan is perfect)
Outcome: Correct from start, no rework, clean architecture
```

### The Time Investment

**Hours Planning:**
- Load context (13+ files)
- Ask deep questions (30+ questions)
- Analyze architecture (entity granularity, integration, edge cases)
- Present analysis (confirm understanding)
- Create master plan (complete documentation)
- Validate quality (30+ checklist items)
- Get approval (user confirms)

**Minutes Developing:**
- Implementation is straightforward
- Code flows naturally from perfect plan
- No architectural decisions during coding
- No "wait, should we...?" moments
- No rework needed

---

## 🚨 Critical Importance: Planning is EVERYTHING

### What You Must Understand

**The PM AI's ONLY job is planning.**

Not coding. Not helping. Not assisting. **PLANNING.**

**Why Planning is Non-Negotiable:**

1. **Architecture Failures are Expensive**
   - Wrong entity level (org vs facility) → Complete database redesign
   - Missed integration points → Features don't connect
   - Ignored edge cases → Production bugs
   - Cost: Weeks of rework + technical debt

2. **Good Plans → Effortless Implementation**
   - Correct architecture → Code writes itself
   - Clear schemas → Database migrations simple
   - Defined workflows → API endpoints obvious
   - Complete specs → Frontend components clear

3. **The Real Project is the Plan**
   - Implementation is just typing what's already designed
   - All decisions made in planning phase
   - Development is mechanical execution
   - Plan quality = project quality

### Real Example (From This Project)

**Bad Planning:**
```
Initial approach: "Invite users to organizations"
→ Built entire feature (2 weeks)
→ User: "Wait, organizations are just umbrellas, work happens at facilities"
→ Complete redesign needed (2+ weeks)
→ Total: 4 weeks + technical debt
```

**Good Planning (What Should Have Happened):**
```
PLAN MODE activated
PM AI asks: "Where does real work happen?"
User: "At facilities, not organizations"
PM AI: "Designing facility-level invitations..."
→ Master plan created (2 days)
→ Implementation (3 days)
→ Total: 5 days, correct architecture
```

**Savings: 3+ weeks, zero technical debt**

One deep question in planning saved 3 weeks of work.

---

## 📚 Documents Created & Their Purpose

### 1. MASTER-PLAN-PROTOCOL.ai.md (Universal Process)

**Location:** `.ai-instructions/MASTER-PLAN-PROTOCOL.ai.md`

**What It Is:**
- Universal 7-step protocol for creating master plans
- Works for ANY project (healthcare, e-commerce, SaaS, etc.)
- Detailed process from entering PLAN MODE to exit

**What It Contains:**
- 7-step PLAN MODE workflow
- 30+ deep questions to ask user
- Architectural analysis checklist
- Quality validation (30+ items)
- Universal principles (entity granularity, workflow separation, code reuse)

**When It's Used:**
- Every single time user requests a feature
- No exceptions, no shortcuts
- Mandatory before ANY implementation

**Critical Sections:**
- Step 3: Deep Understanding Questions (catches 90% of issues)
  - Entity granularity questions (where does work happen?)
  - Integration questions (how features connect?)
  - Edge case questions (race conditions, transactions, performance)
- Step 5: Present Analysis (user confirms before detailed work)
- Quality Checklist (all 30+ items must be checked)

**Why It Exists:**
- Ensures consistent planning quality across all features
- Prevents skipping critical analysis steps
- Catches architectural issues before coding
- Works universally (not project-specific)

---

### 2. PROJECT-PLANNING-PATTERNS.md (Project Knowledge Base)

**Location:** `.pm/PROJECT-PLANNING-PATTERNS.md`

**What It Is:**
- Project-specific architectural knowledge
- Grows and learns with each feature
- Like Claude.md but for architecture/planning

**What It Contains:**
- Entity hierarchy (Global → Organization → Facility → User)
- Real vs umbrella entities (Facility is real, Org is umbrella)
- Granularity rules (facility-first for this project)
- Architectural patterns (factory pattern, workspace context)
- Known pitfalls (wrong entity level, two-step approval)
- Lessons learned (from actual project history)
- Architectural decisions (with reasoning)

**When It's Used:**
- During PLAN MODE (PM AI reads this before asking questions)
- After master plan creation (PM AI updates with learnings)
- NOT during prompt generation (too heavyweight)

**Critical Sections:**
- Entity Hierarchy & Granularity (most common source of errors)
- Known Pitfalls (don't repeat past mistakes)
- Lessons Learned (real examples from project)

**Why It Exists:**
- Each feature makes future features easier
- Mistakes documented → not repeated
- Architectural patterns captured
- Project knowledge compounds over time

**Continuous Learning:**
```
Feature 1: Discovers "Facility is real entity"
  → Documents in PROJECT-PLANNING-PATTERNS.md
Feature 2: PM AI reads pattern → Designs at facility level correctly
Feature 3: PM AI reads patterns → Follows established integration approach
...
Each feature benefits from all previous learnings
```

---

### 3. PROJECT-PLANNING-PATTERNS.template.md (Starter)

**Location:** `templates/PROJECT-PLANNING-PATTERNS.template.md`

**What It Is:**
- Empty template for new projects
- Copy to `.pm/PROJECT-PLANNING-PATTERNS.md` when starting project
- User (or PM AI) fills in project basics

**What It Contains:**
- Empty sections with guidance on what to document
- Examples of what each section should look like
- Structure for patterns, pitfalls, decisions, lessons

**When It's Used:**
- Once at project initialization
- Becomes PROJECT-PLANNING-PATTERNS.md for that project
- Grows as project develops

**Why It Exists:**
- Provides consistent structure across projects
- Guides what architectural knowledge to capture
- Framework-provided starting point

---

## 🔄 How Documents Work Together

### The Planning Workflow

```
User: "Build feature X"
  ↓
PM AI: "Entering PLAN MODE"
  ↓
PM AI reads MASTER-PLAN-PROTOCOL.ai.md
  └─ "Follow these 7 steps..."
  ↓
PM AI reads PROJECT-PLANNING-PATTERNS.md
  └─ "This project: Facility is real entity, Org is umbrella"
  └─ "Past pitfall: Don't invite at org level"
  └─ "Architectural pattern: Use factory for extensibility"
  ↓
PM AI: Step 1 - Load context (13+ files)
PM AI: Step 2 - Ask questions
  └─ "Where does work happen?" (references PROJECT-PLANNING-PATTERNS.md)
  └─ User: "At facilities"
  └─ PM AI: "Correct! Matches project pattern."
  ↓
PM AI: Step 3 - Analyze architecture
  └─ Validates against PROJECT-PLANNING-PATTERNS.md rules
  └─ Checks for known pitfalls
  └─ Follows established patterns
  ↓
PM AI: Step 4 - Present analysis
  └─ "Designing at facility level because..."
  └─ User: "Approved"
  ↓
PM AI: Step 5 - Create master plan
  └─ Complete documentation
  └─ Workflows, schemas, APIs
  ↓
PM AI: Step 6 - Update PROJECT-PLANNING-PATTERNS.md
  └─ Add: "New pattern: Multi-facility grant workflow"
  └─ Add: "Lesson: Always ask about per-entity customization"
  ↓
PM AI: Step 7 - Exit PLAN MODE
  └─ "Master plan complete and approved"
  └─ NOW generate implementation prompts
```

### The Learning Loop

```
Feature 1:
  Planning → Discovers "Facility is real entity"
  Updates → PROJECT-PLANNING-PATTERNS.md

Feature 2:
  Planning → Reads "Facility is real entity" pattern
  Designs → Correctly at facility level
  Updates → Adds "Integration with Feature 1" pattern

Feature 3:
  Planning → Reads both previous patterns
  Designs → Follows established approaches
  Updates → Adds new patterns discovered

...

Each feature:
- Benefits from all previous learnings
- Adds to the knowledge base
- Makes future features easier
```

---

## ⚠️ Critical Implementation Requirements

### 1. PLAN MODE is MANDATORY

**You MUST enforce this:**

```typescript
// Pseudo-code for enforcement
function handleFeatureRequest(userRequest: string) {
  // ❌ WRONG - Do NOT do this:
  // if (isSimple(userRequest)) return generatePrompt();

  // ✅ RIGHT - ALWAYS do this:
  enterPlanMode();
  followSevenStepProtocol();
  waitForUserApproval();
  onlyThenGeneratePrompt();
}
```

**No shortcuts for:**
- "Simple" features (they still need planning)
- "Urgent" features (rushing planning = slower overall)
- "Small changes" (assumptions compound)

**The Gate:**
```
BEFORE generating ANY implementation prompt:
IF master plan does NOT exist → BLOCK
IF quality checklist incomplete → BLOCK
IF user has NOT approved → BLOCK

Only proceed when planning is 100% complete.
```

### 2. Quality Checklist is 100% Required

**30+ items must ALL be checked before exiting PLAN MODE:**

```
Context Loaded:
✅ Read config.json
✅ Read NOW.md
✅ Read PROJECT-PLANNING-PATTERNS.md
✅ Read backend patterns
✅ Read frontend patterns
✅ Read database schema
✅ Read FEATURE-RELATIONSHIPS.md
✅ Read related features

Questions Asked:
✅ Asked about core functionality
✅ Asked about data entities
✅ Asked about granularity (CRITICAL!)
✅ Asked about integration points
✅ Asked about edge cases
✅ Clarified workflow vs UI/UX
✅ Confirmed entity hierarchy

Analysis Done:
✅ Reviewed schema for granularity
✅ Checked patterns for similar cases
✅ Identified code reuse (50%+ target)
✅ Validated against project patterns
✅ Considered edge cases
✅ Designed integration points

Documentation Complete:
✅ Intake document created
✅ Master plan created
✅ Refactoring strategy (if needed)
✅ Cross-references updated
✅ Prompts generated
✅ Timeline estimated
✅ PROJECT-PLANNING-PATTERNS.md updated

Plan Quality:
✅ Workflows focus on data flow
✅ All schemas documented
✅ Migrations provided
✅ Edge cases addressed
✅ Integration points clear
✅ Tasks granular and testable
✅ Can implement without guidance
✅ Entity granularity validated

IF ANY UNCHECKED → PLAN NOT READY → BLOCK
```

### 3. User Approval is Required

**PM AI presents analysis at Step 5:**
```
PM AI: "Here's my understanding... [analysis]"
PM AI: "Does this match your vision?"

User: "Yes" → Proceed to master plan
User: "No, actually..." → Fix understanding, re-present

PM AI: "Master plan complete: [links to docs]"
PM AI: "Ready for implementation?"

User: "Yes" → Generate prompts
User: "Wait..." → Revise master plan

NEVER start implementation without explicit approval!
```

### 4. PROJECT-PLANNING-PATTERNS.md Must Be Updated

**After EVERY feature, PM AI must update patterns:**

```markdown
## What to Add:

If new pattern emerged:
  → Add to "Architectural Patterns" section

If pitfall avoided:
  → Add to "Known Pitfalls" section

If architectural decision made:
  → Add to "Decision Log" section

If lesson learned:
  → Add to "Lessons Learned" section

This ensures next feature benefits from this feature's insights.
```

**Example update:**
```markdown
### Lesson 3: 2025-10-27 - Notification System

What: Designed notification system with factory pattern
Root Cause: Need to support 100+ notification types
Solution: Factory pattern allows infinite types without core changes
Prevention: Always ask "Will this scale to 100+ types?" → If yes, use factory
Pattern: See "Factory Pattern for Extensibility" section
```

---

## 🎓 What the PM AI Role Really Is

### The PM AI is NOT:

❌ A coding assistant
❌ A helper that writes code
❌ A pair programmer
❌ An implementation tool

### The PM AI IS:

✅ An expert planner
✅ An architect validator
✅ A requirements analyst
✅ A documentation creator
✅ A pattern recognizer
✅ A quality gatekeeper

### The Value Proposition

**Bad AI Approach:**
```
User: "Build X"
AI: "Here's some code..."
→ Fast to start
→ Wrong architecture
→ Wasted effort
→ Rework needed
→ Technical debt
```

**PM AI Approach:**
```
User: "Build X"
PM AI: "Let me plan this properly..."
PM AI: [Hours of analysis]
PM AI: "Here's complete validated plan"
User: Approves
PM AI: "Here's your prompt"
Developer: [Minutes of straightforward coding]
→ Slow to start
→ Correct architecture
→ Efficient execution
→ No rework
→ Clean code
```

**The promise:** Spend hours planning so development takes minutes.

---

## 🚀 Implementation Checklist for Framework Developer

### Phase 1: Add Universal Protocol

**Files to create:**
- [ ] `.ai-instructions/MASTER-PLAN-PROTOCOL.ai.md`
  - Copy from provided file
  - Add MANDATORY enforcement section (see below)
  - Add "Why This Matters" section (see below)

- [ ] `templates/PROJECT-PLANNING-PATTERNS.template.md`
  - Copy from provided template
  - This is for new projects to copy

**Files to update:**
- [ ] `CLAUDE.md`
  - Add: "Planning is 100% mandatory before ANY implementation"
  - Add: "Your role is expert planner, not coder"
  - Add: Section on entering PLAN MODE for ALL feature requests

- [ ] `.ai-instructions/MANAGER-ONBOARDING.ai.md`
  - Add: Reference to MASTER-PLAN-PROTOCOL.ai.md
  - Add: "Load PROJECT-PLANNING-PATTERNS.md during planning"
  - Add: "Update PROJECT-PLANNING-PATTERNS.md after planning"

### Phase 2: Add Enforcement

**In MASTER-PLAN-PROTOCOL.ai.md, add:**

```markdown
## 🚨 MANDATORY ENFORCEMENT

⚠️ THIS PROTOCOL IS 100% REQUIRED ⚠️

No implementation prompts without complete master plan.

### The Gate

BEFORE generating ANY implementation prompt, verify:

```
✅ PLAN MODE entered
✅ All context files loaded (13+)
✅ Deep questions asked (30+)
✅ Architecture analyzed
✅ Analysis presented to user
✅ User confirmed analysis
✅ Master plan created
✅ Quality checklist 100% complete (all 30+ items)
✅ User approved master plan
✅ PROJECT-PLANNING-PATTERNS.md updated

IF ANY ITEM UNCHECKED:
  → BLOCK prompt generation
  → Display which items are missing
  → Return to PLAN MODE
  → Complete missing items
  → Get approval
  → THEN proceed
```

### Why This Gate Exists

One missing checklist item = potential architectural failure.

Examples:
- Skip "entity granularity question" → Build at wrong level → Complete rework
- Skip "edge case analysis" → Race conditions in production
- Skip "code reuse check" → Rebuild existing code → Wasted time
- Skip "user approval" → Build wrong thing → User rejection

The gate ensures quality, not speed.

### Enforcement in Code

When PM AI tries to generate prompts:
1. Check if master plan file exists
2. Check if quality checklist is in file and 100% complete
3. Check if user approval is documented
4. If ANY missing → Block with clear error

```
❌ BLOCKED: Cannot generate implementation prompts

Missing requirements:
- [ ] Master plan not found at .pm/features/[feature]/planning/MASTER-PLAN.md
- [ ] Quality checklist incomplete (23/30 items checked)
- [ ] User approval not documented

You must complete PLAN MODE before implementation.

Would you like to:
1. Enter PLAN MODE now
2. Continue existing PLAN MODE session
```
```

### Phase 3: Add Philosophy Document

**Create this file (the one you're reading now):**
- [ ] `FRAMEWORK-DEVELOPER-ONBOARDING.md`
  - Explains the planning philosophy
  - Why it exists
  - How documents work together
  - Implementation requirements

**This file helps future developers understand WHY things are designed this way.**

### Phase 4: Test Implementation

**Test Case 1: Simple Feature**
```
Scenario: User requests "Add a new notification type"
Expected:
  1. PM AI enters PLAN MODE (not skips to prompt)
  2. PM AI loads context and patterns
  3. PM AI asks questions
  4. PM AI analyzes
  5. PM AI presents analysis
  6. User approves
  7. PM AI creates master plan
  8. PM AI updates patterns
  9. PM AI generates prompt
  10. User pastes prompt

Result: ✅ Planning took 90% of time, implementation was quick
```

**Test Case 2: Complex Feature**
```
Scenario: User requests "Build job assignment system"
Expected:
  1. PM AI enters PLAN MODE
  2. PM AI loads context (sees "Facility is real entity" pattern)
  3. PM AI asks "Jobs at facility level or org level?"
  4. PM AI validates against patterns
  5. PM AI designs at facility level (correct!)
  6. [Rest of protocol]

Result: ✅ PM AI used project patterns to make correct decisions
```

**Test Case 3: Enforcement**
```
Scenario: Try to skip planning
Action: Force PM AI to generate prompt without planning
Expected: ❌ BLOCKED with clear error message
Result: ✅ Gate prevents bad implementations
```

---

## 📊 Success Metrics

**How to know this is working correctly:**

### Metric 1: Planning Time vs Implementation Time

**Target:**
- Planning: 1-3 days
- Implementation: 3-5 days
- Rework: 0 days

**Red Flag:**
- Planning: 2 hours
- Implementation: 2 weeks
- Rework: 2 weeks (wrong architecture)

### Metric 2: Rework Rate

**Target:** <5% of features need architectural rework

**Red Flag:** >20% of features redesigned

### Metric 3: Quality Checklist Completion

**Target:** 100% of checklists complete before implementation

**Red Flag:** Skipped items, rushed planning

### Metric 4: Pattern Accumulation

**Target:** PROJECT-PLANNING-PATTERNS.md grows with each feature

**Red Flag:** Patterns file not updated, lessons not captured

### Metric 5: User Confidence

**Target:** User approves plans on first presentation

**Red Flag:** Multiple revisions, "wait, I meant..."

---

## 🎯 The Core Principle (Remember This)

```
┌─────────────────────────────────────────────┐
│                                              │
│   "Hours planning, minutes developing"      │
│                                              │
│   Not 90/10. Not 80/20.                     │
│   It's 100% planning → Then development.    │
│                                              │
│   The plan IS the project.                  │
│   Implementation is just typing.            │
│                                              │
└─────────────────────────────────────────────┘
```

**If you take away one thing from this document:**

The PM AI's ONLY job is to create perfect plans.

Not to help code. Not to assist. **To plan perfectly.**

Because when the plan is perfect, implementation takes minutes.

When the plan is wrong, implementation is impossible.

---

## 📞 Questions for Framework Developer

**After reading this, you should understand:**

1. ✅ Planning is 100% mandatory (no shortcuts)
2. ✅ PLAN MODE must be enforced (gate before prompts)
3. ✅ Quality checklist must be 100% complete
4. ✅ PROJECT-PLANNING-PATTERNS.md grows with project
5. ✅ PM AI is planner, not coder
6. ✅ "Hours planning, minutes developing"

**If anything is unclear:**

- Why is planning so critical? → See "Real Example" section
- How do documents work together? → See "The Planning Workflow" section
- What must be enforced? → See "Critical Implementation Requirements"
- How to test this works? → See "Test Implementation" section

**Remember:**

This framework exists because we learned the hard way:
- Bad planning = complete rework
- Good planning = smooth implementation
- There is no such thing as "too much planning"
- There is definitely such thing as "too little planning"

The PM AI's job is to be obsessive about planning quality.

That's the entire value proposition.

---

**Status:** Complete onboarding for framework developer
**Next:** Implement with these principles in mind
**Goal:** PM AI that creates perfect plans every time
