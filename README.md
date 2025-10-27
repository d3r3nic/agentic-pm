# Agentic PM

> **Architect-First, Planning-First AI Framework**
>
> Deep inspection → Surgical blueprints → Effortless implementation

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/Version-3.0.0-green)](https://github.com/d3r3nic/agentic-pm)

---

## 🎯 What This Is

**Agentic PM v3.0** is an AI framework where Manager AI acts as a **Software Architect** who:

1. **Inspects your codebase deeply** (exact locations, reuse opportunities, conflicts)
2. **Creates surgical blueprints** (not generic tasks, but "inject at [exact path], reuse [specific abstraction]")
3. **Generates copy-paste prompts** (you paste to persistent terminals, context preserved)
4. **Learns from every feature** (patterns accumulate, future features get easier)

**NOT a coding assistant.** An architect who plans deeply, then creates blueprints so detailed that implementation is effortless.

---

## 🧠 The Philosophy

### Planning-First (100% Rule)

```
100% planning → THEN implementation

Not 90/10. Not 80/20.
It's 100% complete planning, THEN development starts.

"Hours planning, minutes developing"
```

### Why This Approach?

**The Problem with Quick Implementation:**
- ❌ Rush to code → wrong entity level (team vs department vs organization)
- ❌ Miss edge cases → production bugs
- ❌ Skip architecture → technical debt
- ❌ Lose context → start from scratch next time

**The Solution with Deep Planning:**
- ✅ Inspect codebase → map exact injection points
- ✅ Validate architecture → catch issues early (entity granularity, conflicts)
- ✅ Create surgical blueprints → reuse 50%+ existing code
- ✅ Accumulate patterns → each feature easier than last

**Real Impact:**
- 3+ weeks saved per feature
- Zero rework (correct from the start)
- Zero technical debt

---

## 🔍 What Makes This Different

### 1. **Architect Identity (Not Just PM)**

**Manager AI is a Software Architect:**
- 🔍 Inspects codebase like inspecting a building
- 📍 Maps exact injection points (not "create component" but "inject at [exact module path]")
- ⚠️ Detects conflicts early (naming collisions, state conflicts, circular dependencies)
- ♻️ Identifies reuse opportunities (target: 50%+ code reuse)
- 🔗 Finds integration hookpoints (exact methods to call, data flow patterns)

**Manager AI never writes code.** Creates blueprints. Developers execute.

### 2. **Deep Codebase Inspection (Step 3.5)**

**Before designing anything, PM inspects 4 layers:**

**Presentation Layer:**
- Component hierarchy mapping
- State container analysis
- Injection point identification
- Reuse opportunity detection
- Conflict detection

**Business Logic Layer:**
- Service pattern analysis
- Validation approach discovery
- Business rule location mapping

**Data Access Layer:**
- Query pattern analysis
- Schema conflict detection
- Optimization opportunities (parallel queries, batching, caching)

**Integration Layer:**
- API client analysis
- Event system mapping

**Output:** `CODEBASE-INSPECTION-REPORT.md` with:
- Exact module paths
- Reusable abstractions with locations
- Conflict warnings with specific code
- Optimization recommendations
- Cross-layer coordination requirements

### 3. **Surgical Blueprints (Not Generic Tasks)**

**Generic approach (v2.x):**
```
❌ "Create user list component"
❌ "Add API endpoint"
❌ "Update state management"
```

**Surgical approach (v3.0):**
```
✅ "Inject presentation component at src/features/users/UserList.tsx,
    reuse DataTable abstraction from shared/components/DataTable.tsx,
    integrate with Redux store at store/users/usersSlice.ts,
    call data access methods getUsersByFacility() + getFacilityRoles() in parallel (Promise.all),
    ⚠️ Conflict warning: existing UserGrid.tsx at src/pages/UserGrid.tsx has similar logic -
    consider merging or renaming to avoid confusion"
```

**The difference:**
- Generic = developer guesses where to inject
- Surgical = developer executes exact instructions

### 4. **Manual Workflow (Why No Agent Spawning)**

**v2.x Problems (Automatic Agent Spawning):**
- ❌ Context lost when agent closes
- ❌ No continuity between tasks
- ❌ Can't intervene if issues arise
- ❌ Repetitive context loading

**v3.0 Solution (Manual Copy-Paste):**
- ✅ Persistent terminals preserve context throughout entire feature
- ✅ User has full oversight and control
- ✅ Can debug and intervene anytime
- ✅ Clear separation (BE terminal, FE terminal)
- ✅ Reference previous work easily

**The Workflow:**
```
Manager AI: Generates prompts
  ↓
User: Copies backend prompt
  ↓
User: Pastes in persistent BE terminal
  ↓
BE Terminal: Loads context (/be-onboard), implements feature
  ↓
User: Copies frontend prompt
  ↓
User: Pastes in persistent FE terminal
  ↓
FE Terminal: Loads context (/fe-onboard), implements feature
  ↓
Manager AI: Tracks progress
```

**Slash Commands:**
- `/manager-onboard` - Manager AI onboarding (after context reset)
- `/be-onboard` - Backend developer context loading
- `/fe-onboard` - Frontend developer context loading

### 5. **Pattern Learning (Compounds Over Time)**

**PROJECT-PLANNING-PATTERNS.md grows with each feature:**

**First Feature:**
- Bootstrap: PM asks entity hierarchy questions
- Populates: Entity levels, real vs umbrella entities
- Documents: First patterns from this feature

**Second Feature:**
- PM reads existing patterns
- No repeat questions (already knows entity hierarchy)
- References: Patterns from Feature 1
- Adds: New patterns from Feature 2

**Tenth Feature:**
- PM has 10 features worth of patterns
- Planning is FAST (already knows architecture)
- Implementation is CONSISTENT (follows established patterns)
- Quality is HIGH (avoids documented pitfalls)

**Contains:**
- Entity hierarchy (which entities are real vs containers)
- Architectural patterns (factory-first, repository pattern, etc.)
- Known pitfalls (mistakes to avoid with reasons)
- Lessons learned (from actual project history)
- Decision log (why approach A chosen over B)

---

## ✨ Key Features

### 🏗️ 8-Step Planning Protocol

1. **Enter PLAN MODE** (explicit state, mandatory)
2. **Load context** (13+ files: config, patterns, schemas, docs)
3. **Ask deep questions** (30+ questions: entity granularity, edge cases, workflows)
4. **Deep codebase inspection** (4 layers, exact locations, reuse opportunities) ⭐ **NEW**
5. **Architectural analysis** (schema impact, state management, integration points)
6. **Present analysis** (user confirms understanding before detailed work)
7. **Create complete master plan** (workflows, schemas, APIs, edge cases, 30+ checklist)
8. **Update patterns** (document learnings for future features)

### 🎯 Quality Gate (Enforcement)

**Cannot generate implementation prompts without:**
- ✅ Master plan exists at `.pm/features/[feature]/planning/MASTER-PLAN.md`
- ✅ Master plan status: `READY FOR IMPLEMENTATION`
- ✅ Quality checklist: All 30+ items marked with ✅
- ✅ User approval documented in master plan

**If any fails:**
```
❌ CANNOT GENERATE IMPLEMENTATION PROMPTS

Missing requirements:
- [Specific items missing]

You must complete PLAN MODE first.
This gate ensures quality and prevents rework.
```

### 📊 Universal & Project-Specific

**Universal (Framework):**
- `MASTER-PLAN-PROTOCOL.ai.md` - Works for ANY project (SaaS, E-commerce, Healthcare)
- `MANAGER-ONBOARDING.ai.md` - Architect identity and responsibilities
- `Claude.md` - Planning-first mandate

**Project-Specific (Created per project):**
- `.pm/PROJECT-PLANNING-PATTERNS.md` - THIS project's architectural knowledge
- Bootstrap on first feature (entity hierarchy)
- Grows with each feature (patterns, pitfalls, lessons)

### 🔧 Works with ANY Tech Stack

- **Frontend:** React, Vue, Angular, Svelte, Next.js, Remix, etc.
- **Backend:** Node.js, Python, Go, Rust, Java, etc.
- **Database:** PostgreSQL, MySQL, MongoDB, Prisma, TypeORM, etc.

Bootstrap process captures YOUR project specifics. Protocol is universal.

---

## 🚀 Quick Start

### Setup (5 minutes)

```bash
# 1. Clone framework
git clone https://github.com/d3r3nic/agentic-pm.git
cd agentic-pm

# 2. Open in Claude Code
claude

# 3. Run setup (in Claude Code)
# Follow prompts to configure for your project
```

### First Feature (Your First Experience)

**You say:**
```
"Build user authentication system"
```

**Manager AI:**
```
I'm entering PLAN MODE to design this feature properly.

This will involve:
- Loading project context
- Asking detailed questions
- Deep codebase inspection
- Analyzing architecture
- Creating complete master plan

Estimated: 1-2 hours for thorough planning.
```

**Then PM asks 30+ questions:**
- Entity granularity: Where does work happen? (Global/Organization/Team/User?)
- Workflows: Walk me through login flow entry to completion
- Edge cases: What if email already exists? Password reset flow?
- Integration: How does this connect to existing user profile?

**Then PM inspects your codebase:**
- Scans components (finds reusable Form abstractions)
- Analyzes state (identifies Redux store structure)
- Checks database (finds existing User table, detects conflicts)
- Maps integration (identifies auth middleware locations)

**Then PM creates:**
- `.pm/features/user-auth/planning/MASTER-PLAN.md` (complete spec, 30+ checklist ✅)
- `.pm/features/user-auth/planning/CODEBASE-INSPECTION-REPORT.md` (exact locations)
- Updates `.pm/PROJECT-PLANNING-PATTERNS.md` (adds auth patterns)

**Then PM generates prompts:**
```
Master plan approved! Here are your implementation prompts:

📋 Backend Prompt (copy to BE terminal):

/be-onboard

Implement User Authentication backend.

**Context:**
Read complete master plan: .pm/features/user-auth/planning/MASTER-PLAN.md
Read inspection report: .pm/features/user-auth/planning/CODEBASE-INSPECTION-REPORT.md

**Tasks:**
1. Create auth middleware at src/middleware/auth.ts
2. Implement POST /api/auth/login endpoint at src/routes/auth.ts
3. Reuse validation schema from src/schemas/user.ts (extend with password field)
4. Integrate with existing User model at src/models/User.ts

**Deliverables:**
- Working login endpoint
- JWT token generation
- Auth middleware for protected routes

Report back when complete.

---

📋 Frontend Prompt (copy to FE terminal):

/fe-onboard

Implement User Authentication frontend.

**Context:**
Read master plan: .pm/features/user-auth/planning/MASTER-PLAN.md
Read inspection: .pm/features/user-auth/planning/CODEBASE-INSPECTION-REPORT.md

**Tasks:**
1. Inject LoginForm component at src/pages/LoginPage.tsx
2. Reuse FormInput from shared/components/FormInput.tsx
3. Integrate with Redux auth slice at store/auth/authSlice.ts
4. Call login API and handle success/error states

**Deliverables:**
- Working login page
- Form validation
- Success/error handling

Report back when complete.
```

**You do:**
1. Open two Claude Code terminals (BE + FE)
2. Paste backend prompt in BE terminal
3. Paste frontend prompt in FE terminal
4. Both implement (context preserved)
5. Report back: "Done"

**Result:**
- ✅ Feature implemented in 2-5 days (perfect plan)
- ✅ Zero rework (architecture validated upfront)
- ✅ 50%+ code reused (inspection found abstractions)
- ✅ Patterns documented (next feature easier)

---

## 📊 How It Works

### The Complete Flow

```
User: "Build feature X"
  ↓
Manager AI: Reads /manager-onboard
  ├─ Loads framework context (protocols, rules)
  ├─ Loads project context (status, patterns)
  └─ Announces readiness
  ↓
Manager AI: ENTERS PLAN MODE (mandatory)
  ├─ Step 1: Acknowledges planning phase
  ├─ Step 2: Loads 13+ context files
  ├─ Step 2.5: Bootstrap if first feature (entity hierarchy)
  ├─ Step 3: Asks 30+ deep questions
  ├─ Step 3.5: DEEP CODEBASE INSPECTION ⭐
  │   ├─ Presentation layer (components, state, injection points)
  │   ├─ Business logic (services, validation)
  │   ├─ Data access (queries, schema, optimization)
  │   ├─ Integration (APIs, events)
  │   └─ Creates: CODEBASE-INSPECTION-REPORT.md
  ├─ Step 4: Architectural analysis
  ├─ Step 5: Presents analysis → User confirms
  ├─ Step 6: Creates master plan
  ├─ Step 7: Updates PROJECT-PLANNING-PATTERNS.md
  └─ Step 8: EXITS PLAN MODE
  ↓
Manager AI: Checks Quality Gate
  ├─ Master plan exists? ✅
  ├─ Status: READY FOR IMPLEMENTATION? ✅
  ├─ Checklist complete (30+ items)? ✅
  └─ User approved? ✅
  ↓
Manager AI: Generates Implementation Prompts
  ├─ Backend prompt (/be-onboard + surgical instructions)
  └─ Frontend prompt (/fe-onboard + surgical instructions)
  ↓
User: Manual Execution
  ├─ Pastes BE prompt → BE terminal (persistent context)
  ├─ Pastes FE prompt → FE terminal (persistent context)
  └─ Reports back: "Done"
  ↓
Manager AI: Tracks Progress
  └─ Updates .pm/NOW.md
```

---

## 🎓 Key Concepts

### 1. **PLAN MODE** (Explicit State)

Planning is not just "thinking about it" - it's a formal mode with rules:
- Announced at entry ("Entering PLAN MODE...")
- Follows 8-step protocol (no skipping steps)
- Cannot exit until quality checklist complete
- Announced at exit ("PLAN MODE complete, ready for implementation")

### 2. **Quality Gate** (Enforcement)

Not a suggestion. A hard gate that blocks implementation:
- Master plan file must exist
- Quality checklist must be 100% complete (not 90%, ALL items)
- User approval must be documented
- If gate fails, implementation prompts are NOT generated

### 3. **Surgical Blueprints** (Not Generic Tasks)

The difference between "do this" and "inject exactly here, reuse exactly that":
- Generic: "Create list component" (developer guesses location, misses reuse)
- Surgical: "Inject at [path], reuse [abstraction from path], integrate [method]"

Result: Implementation is mechanical execution, not creative exploration.

### 4. **Pattern Accumulation** (Continuous Learning)

PROJECT-PLANNING-PATTERNS.md is the project's architectural memory:
- First feature: Empty → Bootstrap → Populate basics
- Each feature: Read patterns → Plan feature → Update patterns
- Tenth feature: Rich knowledge base, fast planning, consistent architecture

### 5. **Manual Workflow** (User Control)

Why no automatic agent spawning:
- Context preservation (persistent terminals vs closing agents)
- User oversight (manual paste gives control)
- Debugging capability (can intervene anytime)
- Clear separation (BE work in BE terminal, FE in FE terminal)

---

## 🤔 FAQ

### Q: How is this different from just asking Claude Code to build features?

**A:** Three fundamental differences:

1. **Planning Depth:** We spend 1-2 hours planning with codebase inspection. Direct prompts skip this.
2. **Surgical Precision:** We map exact locations and reuse opportunities. Direct prompts create new code.
3. **Pattern Learning:** We accumulate knowledge. Each feature makes next feature easier.

**Analogy:** This is the difference between asking an architect to design a building extension (deep analysis, structural plans, building codes) vs asking a contractor to "add a room" (might work, might collapse).

### Q: Why manual copy-paste instead of automatic agent spawning?

**A:** Four reasons:

1. **Context Preservation:** Persistent terminals keep context throughout entire feature. Agents close and lose context.
2. **User Control:** Manual paste lets you review before execution. Automatic gives no oversight.
3. **Debugging:** You can intervene if issues arise. Automatic agents fail silently.
4. **Separation:** BE terminal for BE work, FE terminal for FE work. Clear boundaries.

**Real scenario:** In v2.x, agent would close after 10 minutes. Next task started from scratch, asked same questions. In v3.0, terminal stays open for entire feature (days), references previous work easily.

### Q: Does planning really save time?

**A:** Real example from actual project:

**Without deep planning (v2.x):**
- Planning: 30 minutes (rushed)
- Implementation: 2 weeks
- Debugging: Discovered "feature should be at team level, not organization level"
- Rework: 2 weeks (rebuild entire feature)
- **Total: 4 weeks + technical debt**

**With deep planning (v3.0):**
- Planning: 2 hours (deep questions, codebase inspection, caught entity level issue)
- Implementation: 3 days (straightforward, plan was perfect)
- Rework: 0 days
- **Total: 5 days, zero technical debt**

**Savings: 3+ weeks per feature**

### Q: What's the learning curve?

**A:** For users: 10 minutes.

1. Say "Build feature X"
2. Answer PM's questions (trust the process, they're catching issues)
3. Copy-paste prompts to terminals
4. Report back when done

For PM AI: Zero learning curve (protocols are self-contained).

### Q: Can I use this for solo projects?

**A:** Especially good for solo projects:
- No context loss when you return after weeks
- Patterns document your own decisions (your future self thanks you)
- Surgical blueprints mean you're not re-exploring codebase each time

---

## 📚 Documentation

- **[FRAMEWORK-DEVELOPER-ONBOARDING.md](FRAMEWORK-DEVELOPER-ONBOARDING.md)** - Philosophy and principles
- **[CHANGELOG.md](CHANGELOG.md)** - Version history and breaking changes
- **[.ai-instructions/MASTER-PLAN-PROTOCOL.ai.md](.ai-instructions/MASTER-PLAN-PROTOCOL.ai.md)** - Universal 8-step planning process
- **[.ai-instructions/MANAGER-ONBOARDING.ai.md](.ai-instructions/MANAGER-ONBOARDING.ai.md)** - Architect identity and responsibilities

---

## 🤝 Contributing

Framework improvements welcome:
- Enhanced inspection techniques
- New architectural patterns
- Real project case studies

Fork, improve, share!

---

## 📜 License

MIT License - Use freely for any project.

---

## 🙏 Acknowledgments

Built on:
- [Claude Code](https://github.com/anthropics/claude-code) by Anthropic
- Planning-first software engineering principles
- Deep architectural analysis patterns

Inspired by: The need for AI that thinks before it codes.

---

## 📞 Support

- **Issues:** [GitHub Issues](https://github.com/d3r3nic/agentic-pm/issues)
- **Discussions:** [GitHub Discussions](https://github.com/d3r3nic/agentic-pm/discussions)

---

**Ready to build with architectural rigor?** 🏗️

```bash
git clone https://github.com/d3r3nic/agentic-pm.git
cd agentic-pm
# Follow setup instructions
```

**Hours planning, minutes developing. Zero rework.**
