# Master Plan Creation Protocol (Universal)

**Purpose:** Universal protocol for creating complete, precise feature plans for ANY project.

**When to Use:** User requests a new feature, provides specs, or describes a problem needing a solution.

**Loaded:** ONLY during master plan creation (not during prompt generation or implementation)

---

## 🎯 PLAN MODE - 8 Step Protocol

### Overview

When user requests a feature:
1. Enter PLAN MODE (explicit state)
2. Load context (project + universal patterns)
3. Ask deep questions
3.5. **Deep Codebase Inspection** ⭐ (NEW - surgical precision)
4. Analyze architecture
5. Present analysis for confirmation
6. Create complete master plan
7. Update patterns document
8. Exit PLAN MODE

**Principle:** "Implement Once" - Thorough upfront > Quick but wrong
**NEW in v3.0:** Deep codebase inspection for surgical blueprints

---

### Step 1: Acknowledge & Enter Plan Mode

**Response Template:**
```
I'm entering PLAN MODE to design this feature properly.

Let me understand the requirements deeply before creating the master plan.

This will involve:
- Loading project context
- Asking detailed questions
- Analyzing architecture
- Confirming understanding
- Creating complete documentation

Estimated: 15-30 minutes for thorough planning.
```

**Mental State:**
- Slow down, be thorough
- Ask questions, don't assume
- Validate architecture, don't guess
- Present analysis before detailed work

---

### Step 2: Context Loading (MANDATORY)

**Read files in this order:**

#### A. Project Configuration & Status
```
1. config.json
   - Project philosophy (Enterprise/Production/MVP)
   - Project name and paths

2. .pm/NOW.md
   - Current project status
   - What's already built
   - What's in progress

3. .pm/ROADMAP.md (if exists)
   - Planned features
   - Upcoming work

4. .pm/PROJECT-PLANNING-PATTERNS.md ⭐ CRITICAL
   - Project-specific architectural patterns
   - Entity hierarchy and granularity rules
   - Known pitfalls and solutions
   - Lessons learned from previous features
```

#### B. Feature Context
```
5. .pm/features/README.md
   - Overview of existing features
   - Feature status

6. .pm/features/FEATURE-RELATIONSHIPS.md
   - How features connect
   - Integration patterns
   - Shared data models

7. Related feature planning docs
   - Any similar or connected features
   - Learn from their approaches
```

#### C. Backend Context
```
8. backend/Claude.md (or equivalent)
   - Backend development patterns
   - Code conventions
   - Tech stack specifics

9. Database schema file
   - Prisma schema, SQL DDL, or ORM models
   - Current entity relationships
   - Understand existing structure

10. Backend API structure
    - Scan handlers/routes/controllers folder
    - Understand existing endpoints
    - Look for reusable patterns
```

#### D. Frontend Context
```
11. frontend/Claude.md (or equivalent)
    - Frontend development patterns
    - Component architecture
    - State management approach

12. Frontend feature structure
    - Scan features/components folders
    - Understand existing components
    - Look for reusable patterns

13. Shared/common components (if exists)
    - What's already built and reusable
    - Patterns to follow
```

**Why This Matters:**
- Cannot design features without understanding what exists
- PROJECT-PLANNING-PATTERNS.md contains project-specific architectural rules
- Must check for reusable code (modify > rebuild)
- Need to follow existing patterns (consistency)

**Red Flag:** If you skip context loading, plan will be wrong!

---

### Step 2.5: Bootstrap Project Patterns (First Feature Only)

**Check PROJECT-PLANNING-PATTERNS.md status:**

If the file contains template placeholders like `[Fill in]` or `[Document here]`, this is the **first feature for this project**. Before diving into feature-specific questions, populate project basics.

**Detection:**
```typescript
// Pseudo-check
if (PROJECT-PLANNING-PATTERNS.md contains "[Fill in]" or "[Document here]") {
  // Empty template - first planning session
  runBootstrap();
} else {
  // Already populated - skip to Step 3
  continueNormally();
}
```

**IF PROJECT-PLANNING-PATTERNS.md is empty template, ask user:**

1. **Entity Hierarchy:**
   ```
   "What's your project's entity hierarchy?"

   Examples for context:
   - SaaS: Global → Organization → Team → Project → User
   - E-commerce: Global → Vendor → Store → Product → Customer
   - Healthcare: Global → Organization → Facility → User

   What's yours?
   ```

2. **Real vs Umbrella Entities:**
   ```
   "Which entities are 'real' (where work happens) vs 'umbrella' (just containers)?"

   Example: In healthcare, Facility is real (work happens there),
   Organization is umbrella (just groups facilities)
   ```

3. **Tech Stack (if not in config):**
   ```
   "What's your tech stack?"
   - Backend: [Framework, Database, ORM]
   - Frontend: [Framework, State management, UI library]
   ```

4. **Domain:**
   ```
   "What's your domain/industry?"
   (Helps understand terminology and common patterns)
   ```

**Then use Edit tool to populate PROJECT-PLANNING-PATTERNS.md:**

```typescript
Edit(
  file_path: ".pm/PROJECT-PLANNING-PATTERNS.md",
  old_string: "### Entity Levels\n[Document your hierarchy here]",
  new_string: `### Entity Levels

${userProvidedHierarchy}

Real Entity: ${realEntity} (where work happens)
Umbrella: ${umbrellaEntity} (just containers)`
)
```

**Announce to user:**
```
✅ Bootstrapped PROJECT-PLANNING-PATTERNS.md

Populated:
- Entity hierarchy: [hierarchy]
- Real entity: [entity]
- Tech stack: [stack]

This will guide all future feature planning!

Now continuing with [Feature Name] planning...
```

**IF PROJECT-PLANNING-PATTERNS.md is already populated:**

Skip bootstrap entirely. The patterns are already there - use them for planning.

---

### Step 3: Deep Understanding Questions

**Ask user these categories of questions:**

#### A. Core Functionality (The "What")
- "What problem does this feature solve?"
- "Walk me through the complete user flow (entry to completion)"
- "What triggers this feature?" (user action, cron job, API call, event, webhook)
- "Who are the actors?" (user roles, user types, systems, external services)
- "What's the expected outcome/deliverable?"

#### B. Data & Entities (The "Where")
- "What data does this feature create/read/update/delete?"
- "How does this data relate to existing entities?" (check schema!)
- "Are we creating new database tables or extending existing?"
- "What's the lifecycle of this data?" (created → active → archived → deleted)
- "Who owns this data?" (which entity/user/system)

#### C. Granularity & Scope (CRITICAL! ⭐)
**This prevents the most common mistakes!**

- "At what level does this operate?"
  - Global? Organization? Team? Facility? Project? User?
  - (Use actual entity names from PROJECT-PLANNING-PATTERNS.md)

- "Where does the real work happen?"
  - Which entity in the hierarchy is the "real" entity?
  - Which are just "umbrella" entities (containers)?
  - Reference PROJECT-PLANNING-PATTERNS.md entity hierarchy!

- "Can settings/data differ across [entity hierarchy]?"
  - Example: "Can a user have different roles at different facilities?"
  - Example: "Can rates differ per location?"
  - If YES: Design for per-entity customization!

- "Are we using the correct entity level for this feature?"
  - Validate against PROJECT-PLANNING-PATTERNS.md granularity rules
  - If unsure: **ASK USER!**

**Example Questions:**
- "Is this per-user or per-team?"
- "Do different facilities have different configurations?"
- "Can a user belong to multiple [entities] with different roles/settings?"
- "Which entity is the 'real' unit of work here?"

#### D. Integration Points (The "How")
- "Does this feature depend on other features?"
- "Will other features use/call this feature?"
- "Should this create notifications?" (check for notification system)
- "Does this affect global context/state?" (workspace, session, etc.)
- "Are there webhooks or external system integrations?"

#### E. Edge Cases & Scale (The "When Things Go Wrong")
- "What happens if user does X twice simultaneously?" (race conditions, locking)
- "What happens if this fails halfway through?" (transactions, rollback, consistency)
- "What if 10,000 users do this?" (performance, caching, pagination)
- "What prevents abuse?" (rate limiting, permissions, validation)
- "What are the failure modes?" (network, database, external API failures)
- "How do we handle retries?" (idempotency)

#### F. Workflow vs UI/UX (Separation of Concerns)
- "Focus on WORKFLOW first - what data flows where?"
- "Defer UI/UX details to implementation"
- "What are the main user entry points?" (pages, buttons, navigation)
- "What screens/views are involved?" (high-level only)

**Why Ask All These Questions:**
- Catch architectural issues early (org vs facility, global vs per-entity)
- Identify integration points before coding
- Handle edge cases upfront (not during debugging)
- Separate workflow design from UI design

---

### Step 3.5: Deep Codebase Inspection (CRITICAL! ⭐)

**Purpose:** Map EXACT implementation locations, conflicts, and reuse opportunities BEFORE architectural design.

**This is what separates generic planning from surgical blueprints!**

---

#### Why This Step Matters

**Without deep inspection:**
```
❌ "Create user list component"
❌ "Add API endpoint"
❌ "Update state management"
```

**With deep inspection:**
```
✅ "Inject presentation component at [exact module],
    reuse [specific existing abstraction] from [exact path],
    integrate with state container at [exact location],
    call data access methods [method1, method2] in parallel (Promise.all pattern),
    ⚠️ Conflict warning: existing [specific code] at [location] has similar logic - merge instead"
```

---

#### Inspection Techniques (Universal)

**Use these tools systematically:**
- **Glob**: Find all modules matching patterns (`**/*.{component,handler,service}`)
- **Grep**: Search for specific patterns (`class.*Component`, `export.*function`)
- **Read**: Read candidate files to understand structure

---

### 3.5.1 Presentation Layer Inspection

**Objective:** Map component hierarchy, state management, and injection points

**1. Component Hierarchy Mapping**
```
Technique: Traverse module imports and composition patterns
Tools: Glob → Find all presentation components
       Read → Parse imports and composition

Output: Component tree showing parent-child relationships
```

**2. State Container Analysis**
```
Technique: Identify state management locations and patterns
Tools: Grep → Search for state declarations
       Read → Analyze state structure

Questions to Answer:
- Where is shared state defined?
- What state management pattern is used? (Redux, MobX, Context, Zustand, etc.)
- Are there existing state slices for similar features?
- Where are state update actions defined?

Output: State ownership map
```

**3. Injection Point Identification**
```
Technique: Find where new components will be composed

Questions to Answer:
- Which parent container will host this?
- What's the exact module path?
- What composition pattern is used? (props, slots, children, render props)
- What data flow pattern exists? (props down, events up)

Output: Exact module paths and integration points
```

**4. Reuse Opportunity Detection**
```
Technique: Find existing abstractions that can be reused

Tools: Grep → Search for similar component names
       Read → Analyze reusable components

Questions to Answer:
- Are there existing presentation components solving similar problems?
- Can we compose existing components instead of building new?
- What shared/common components exist?

Target: 50%+ code reuse
Output: List of reusable abstractions with exact paths
```

**5. Conflict Detection**
```
Technique: Identify naming collisions and overlapping logic

Questions to Answer:
- Does a component with this name already exist?
- Is there existing logic that overlaps with this feature?
- Will this create circular dependencies?

Output: Conflict warnings with exact locations
```

---

### 3.5.2 Business Logic Layer Inspection

**Objective:** Map services, use cases, and business rules

**1. Service Pattern Analysis**
```
Technique: Identify service layer organization

Tools: Glob → Find service modules
       Read → Understand service patterns

Questions to Answer:
- How are services organized? (by feature, by entity, by domain)
- What dependency injection pattern is used?
- Are there existing services handling similar logic?

Output: Service architecture map
```

**2. Validation Pattern Discovery**
```
Technique: Find validation approaches

Tools: Grep → Search for validation schemas
       Read → Understand validation patterns

Questions to Answer:
- What validation library is used? (Zod, Joi, Yup, class-validator)
- Where are schemas defined?
- Can existing schemas be extended?

Output: Validation pattern documentation
```

**3. Business Rule Location Mapping**
```
Technique: Identify where business logic resides

Questions to Answer:
- Are business rules in services or domain models?
- How is business logic tested?
- Can we reuse existing business logic?

Output: Logic layer architecture map
```

---

### 3.5.3 Data Access Layer Inspection

**Objective:** Map data retrieval patterns, query optimization opportunities, schema conflicts

**1. Query Pattern Analysis**
```
Technique: Analyze existing data fetching patterns

Tools: Grep → Search for database queries
       Read → Analyze query patterns

Questions to Answer:
- What ORM/query builder is used? (Prisma, TypeORM, Knex, Sequelize)
- What's the pattern for data fetching? (Repository, Active Record, Query Builder)
- Are there N+1 query antipatterns?

Output: Data access pattern documentation
```

**2. Schema Conflict Detection**
```
Technique: Identify database schema overlaps and conflicts

Tools: Read → Parse database schema file

Questions to Answer:
- Does a table/collection for this entity already exist?
- Will new fields conflict with existing schema?
- Are there foreign key relationships to consider?
- Do indexes exist for planned queries?

Output: Schema conflict warnings and required migrations
```

**3. Optimization Opportunity Detection**
```
Technique: Find parallel execution and batching opportunities

Questions to Answer:
- Can multiple queries run in parallel? (independent data sources)
- Are there batching opportunities? (N queries → 1 batch query)
- Where can caching be inserted?
- Can we use lazy loading for deferred data?

Output: Performance optimization recommendations
```

---

### 3.5.4 Integration Layer Inspection

**Objective:** Map external integrations, message queues, webhooks

**1. API Client Analysis**
```
Technique: Find existing API integrations

Tools: Grep → Search for HTTP clients, SDK usage
       Read → Understand integration patterns

Questions to Answer:
- What external services are integrated?
- What HTTP client library is used?
- Are there existing clients that can be extended?
- What error handling pattern is used?

Output: Integration pattern documentation
```

**2. Event System Mapping**
```
Technique: Identify event-driven integration points

Questions to Answer:
- Is there an event bus or message queue?
- What events are already defined?
- Can this feature emit/consume events?

Output: Event integration opportunities
```

---

### 3.5.5 Cross-Layer Dependency Analysis

**Objective:** Understand how layers communicate and identify coordination points

**1. Dependency Flow Mapping**
```
Technique: Trace data flow from presentation → logic → data → integration

Output: Complete dependency graph showing:
- What presentation layer depends on from logic layer
- What logic layer depends on from data layer
- What data layer depends on from integration layer
```

**2. Cross-Layer Coordination Points**
```
When presentation needs data:
→ Identify exact data access methods required
→ Create data layer task if methods don't exist
→ Document dependency in both layer blueprints

When logic needs external data:
→ Identify integration layer requirements
→ Create integration task if client doesn't exist
→ Document API contracts
```

---

### 3.5.6 Inspection Output (Deliverable)

**Create: CODEBASE-INSPECTION-REPORT.md**

**Location:** `.pm/features/[feature-name]/planning/CODEBASE-INSPECTION-REPORT.md`

**Structure:**
```markdown
# Codebase Inspection Report
# [Feature Name]

## Presentation Layer

**Existing Component Hierarchy:**
[Component tree]

**State Management:**
- Pattern: [Redux/MobX/Context/etc.]
- Location: [Exact paths]
- Existing slices: [List]

**Injection Points:**
- Parent container: [Exact module path]
- Integration pattern: [Composition/props/slots]

**Reusable Components:**
- [Component A]: [Path] - [What it does]
- [Component B]: [Path] - [What it does]

**Conflicts Detected:**
⚠️ [Warning 1]: [Description + location]

## Business Logic Layer

**Service Organization:**
[Pattern description]

**Validation Approach:**
- Library: [Zod/Joi/etc.]
- Schema location: [Path]
- Reusable: [Yes/No - which schemas]

## Data Access Layer

**Query Patterns:**
- ORM: [Prisma/TypeORM/etc.]
- Pattern: [Repository/ActiveRecord/etc.]

**Schema Analysis:**
- Existing tables: [List]
- Conflicts: [Any conflicts detected]
- Required migrations: [List]

**Optimization Opportunities:**
- Parallel queries: [Query1 + Query2 can run together]
- Batching: [N queries → 1 batch]
- Caching: [Cache insertion points]

## Integration Layer

**Existing Clients:**
- [Service A]: [Path] - [Reusable: Yes/No]

**Event System:**
- [Events available for integration]

## Cross-Layer Coordination

**Presentation → Logic:**
[Required services/methods]

**Logic → Data:**
[Required repository methods]

**Data → Integration:**
[Required external API calls]

## Summary

**Reuse Percentage:** X% (target 50%+)
**Conflicts Detected:** X warnings
**New Code Required:** Y modules
**Optimization Opportunities:** Z identified
```

---

### Step 4: Architectural Analysis

**After deep codebase inspection, now analyze architecture:**

#### A. Schema Impact Analysis

**Process:**
1. Review current database schema
2. Identify all entities involved in this feature
3. Check for existing patterns (similar tables/relationships)
4. **CRITICAL: Validate entity granularity**
   - Read PROJECT-PLANNING-PATTERNS.md entity hierarchy section
   - Confirm: "Are we using the right entity level?"
   - Ask: "Is this a 'real' entity or 'umbrella' entity?"
   - Validate against project granularity rules

**Pattern Recognition Checklist:**
```
[ ] Identified all entities involved
[ ] Checked entity hierarchy (parent → children)
[ ] Determined correct granularity level
[ ] Reviewed PROJECT-PLANNING-PATTERNS.md for similar cases
[ ] Confirmed architectural decisions match project patterns
[ ] If unsure: Asked user for clarification
```

**Common Pitfall:**
```
❌ Using umbrella entity (e.g., "invite to organization")
✅ Using real work entity (e.g., "invite to facility")

How to catch: Ask "Where does work actually happen?"
Check: PROJECT-PLANNING-PATTERNS.md for entity rules
```

#### B. Code Reuse Analysis

**Process:**
1. Scan existing handlers/routes/controllers
2. Scan existing components/features
3. Identify: Can we modify existing vs create new?
4. Identify: What patterns can we follow?
5. **Target: 50%+ code reuse** (modify/extend > rebuild from scratch)

**Questions to Answer:**
- "Do we have similar endpoints/handlers?"
- "Can we extend existing functions?"
- "Are there reusable components?"
- "What existing patterns should we follow?"

**Document:**
- What code to modify
- What code to keep as-is
- What code to create new
- Reasoning for each decision

#### C. Integration Design

**Process:**
1. Check FEATURE-RELATIONSHIPS.md for connections
2. Identify: How does this connect to existing features?
3. Identify: What new integration points are created?
4. Design: Data flow between features
5. Design: Notification types (if notification system exists)

**Document:**
- Dependencies (what this feature needs)
- Provides (what this feature offers others)
- Notification types created
- Shared data models
- Cross-references

#### D. Edge Case Analysis

**Checklist to address:**
```
[ ] Race Conditions
    - Where can concurrent access cause issues?
    - Solution: Locking, transactions, optimistic locking

[ ] Transactions
    - Which operations must be atomic?
    - Solution: Database transactions, rollback strategy

[ ] Permissions
    - Who can perform each action?
    - Solution: Authorization checks, RBAC integration

[ ] Data Validation
    - What inputs need validation?
    - Solution: Schema validation (Zod, Joi, etc.)

[ ] Error Handling
    - What failure modes exist?
    - Solution: Try-catch, error responses, logging

[ ] Performance
    - Where might performance degrade?
    - Solution: Indexes, caching, pagination, N+1 prevention

[ ] Security
    - What attacks are possible?
    - Solution: XSS prevention, SQL injection prevention, CSRF tokens
```

---

### Step 5: Present Analysis & Confirm Direction

**Before creating detailed master plan, present this summary:**

```markdown
## Feature Analysis Summary

**What I Understand:**
[Core functionality in 2-3 sentences]

**Complete User Flow:**
[Entry Point] → [Step 1] → [Step 2] → [Step 3] → [Completion]

**Data Entities Involved:**
- [Entity A]: [Role in this feature]
- [Entity B]: [Role in this feature]
- [Entity C]: [Role in this feature]

**Architectural Decisions:**

Decision 1: [Key architectural decision]
Reasoning: [Why this approach, reference PROJECT-PLANNING-PATTERNS.md if applicable]

Decision 2: [Another key decision]
Reasoning: [Why this approach]

**Entity Granularity Analysis:**
Operating at [Entity X] level because:
- [Reason 1: e.g., "Work happens at facility level, not org level"]
- [Reason 2: e.g., "Settings can differ per facility"]
- Reference: PROJECT-PLANNING-PATTERNS.md section [X]

**Integration Points:**
- Depends on: [Feature A] - [How it depends]
- Provides to: [Feature B] - [What it provides]
- Notifications: Creates [X], [Y], [Z] notification types
- Shared models: [List shared data models]

**Code Reuse Strategy:**
- Modify existing: [List handlers/components to modify]
- Keep as-is: [List code that doesn't change]
- Create new: [List new code needed]
- Reuse percentage: ~X%

**Potential Issues Identified:**
1. Issue: [Description]
   Impact: [What could go wrong]
   Solution: [Proposed approach]

2. Issue: [Description]
   Solution: [Proposed approach]

**Edge Cases Addressed:**
- Race conditions: [Where they exist, how we handle]
- Transactions: [Which operations need atomicity]
- Permissions: [Authorization approach]
- Performance: [Optimization strategy]

**Estimated Scope:**
- Database: [X tables new, Y tables modified]
- Backend: [Z endpoints, W services]
- Frontend: [A components, B pages]
- Timeline: [C weeks]

**Questions Before Proceeding:**
[Any remaining ambiguities - list specific questions for user]

---

Does this match your vision? Any corrections needed?
```

**WAIT FOR USER CONFIRMATION!**

**DO NOT proceed to master plan without user approval of this analysis!**

**Why:**
- Catches misunderstandings early (before detailed work)
- User can correct architectural decisions now (not after implementation)
- Confirms entity granularity is correct
- Validates integration approach

---

### Step 6: Create Complete Master Plan

**ONLY after user confirms Step 5, create these documents:**

#### A. Feature Intake Document

**File:** `.pm/features/[feature-name]/planning/01-intake.md`

**Structure:**
```markdown
# Feature Intake Report
# [Feature Name]

**Created:** [Date]
**Status:** PLANNING
**Priority:** HIGH/MEDIUM/LOW
**Complexity:** [SIMPLE/MEDIUM/COMPLEX]

## Executive Summary
[2-3 paragraph overview]

## Problem Statement
[What problem does this solve?]

## User Journeys

### Journey 1: [Name] (Happy Path)
**Actors:** [Who is involved]
**Flow:**
1. [Step with details]
2. [Step with details]
...
**Result:** [Outcome]

### Journey 2-7: [More journeys]
[5-7 detailed user journeys covering main flows and edge cases]

## Success Criteria
When complete:
- ✅ [Measurable criterion 1]
- ✅ [Measurable criterion 2]
...

## Scope

### In Scope
✅ [What we're building]

### Out of Scope
❌ [What we're NOT building]

## Dependencies
- Depends on: [Feature X]
- Blocks: [Feature Y]

## Cross-References
- Related: [Feature Z]
```

#### B. Master Plan Document

**File:** `.pm/features/[feature-name]/planning/MASTER-PLAN.md`

**Structure:**
```markdown
# MASTER PLAN
# [Feature Name]

**Created:** [Date]
**Status:** READY FOR IMPLEMENTATION
**Timeline:** X weeks
**Focus:** Workflows and functionality (UI/UX decided during implementation)

## Database Schema

### [Table/Model Name] (NEW/MODIFIED)

```prisma
// Or SQL DDL, or ORM model
model ExampleTable {
  // Complete schema
}
```

**Migration Steps:**
```sql
-- If modifying existing tables
ALTER TABLE ...
```

[Repeat for all tables]

## Core Workflows

### Workflow 1: [Name]

**Trigger:** [What initiates this]

**Endpoint/Function:** [API endpoint or function name]

**Input:**
```typescript
{
  field1: string,
  field2: number,
  // Complete schema with validation rules
}
```

**Process:**
1. [Step with data transformation]
2. [Step with business logic]
3. [Step with integration]
...

**Output:**
```typescript
{
  success: boolean,
  data: {
    // Complete response schema
  }
}
```

**Integration Points:**
- Calls: [Feature X endpoint]
- Creates: [Notification type Y]
- Updates: [Entity Z]

**Error Handling:**
- Case 1: [Error scenario] → [Response]
- Case 2: [Error scenario] → [Response]

**Edge Cases:**
- [Edge case 1]: [How handled]
- [Edge case 2]: [How handled]

[Repeat for 10+ workflows]

## API Endpoints (for backend features)

### 1. Endpoint Name

**Method:** POST/GET/PUT/DELETE
**Path:** /api/v1/[path]
**Auth:** Required/Optional

**Request:**
```typescript
{
  // Complete request schema with types
}
```

**Response:**
```typescript
{
  // Complete response schema
}
```

**Business Logic:**
1. [Step]
2. [Step]
...

**Permissions:**
- Requires: [Role/permission]
- Checks: [Authorization logic]

[Repeat for all endpoints]

## Functional Requirements (for frontend features)

### Component 1: [Name]

**Purpose:** [What it does]

**Data:**
- Displays: [Data types]
- Manages: [State]
- Source: [API endpoint or state]

**Actions:**
- [Action 1]: [What happens]
- [Action 2]: [What happens]

**State Management:**
- [How state is managed - Redux, Context, local]

**Integration:**
- Calls: [API endpoints]
- Emits: [Events]
- Listens: [Events]

**NOT Specified (UI/UX):**
- Exact layout (decided during implementation)
- Colors/styling (decided during implementation)
- Positioning (decided during implementation)

[Repeat for all components]

## Implementation Tasks

**Database (X tasks):**
- [ ] DB-001: [Clear, testable, independent task]
- [ ] DB-002: [Clear, testable, independent task]

**Backend (Y tasks):**
- [ ] BE-001: [Clear, testable, independent task]
- [ ] BE-002: [Clear, testable, independent task]

**Frontend (Z tasks):**
- [ ] FE-001: [Clear, testable, independent task]
- [ ] FE-002: [Clear, testable, independent task]

**Integration (W tasks):**
- [ ] INT-001: [Clear, testable, independent task]

**Total:** N tasks, estimated X weeks

## Copy-Paste Prompts

### Backend Prompt
```
/be-onboard

[Feature context]
Read: .pm/features/[feature]/planning/MASTER-PLAN.md

Tasks:
1. [Task BE-001]
2. [Task BE-002]
...

Follow backend/Claude.md patterns.
Report back when complete.
```

### Frontend Prompt
```
/fe-onboard

[Feature context]
Read: .pm/features/[feature]/planning/MASTER-PLAN.md

Tasks:
1. [Task FE-001]
2. [Task FE-002]
...

Follow frontend/Claude.md patterns.
Report back when complete.
```

## Edge Cases Addressed

**Race Conditions:**
- [Where]: [Solution - locking, transactions, etc.]

**Transactions:**
- [Operation]: [Why atomic, rollback strategy]

**Permissions:**
- [Check 1]: [Authorization logic]

**Performance:**
- [Concern]: [Optimization - indexes, caching, pagination]

**Security:**
- [Threat]: [Mitigation]

## Testing Strategy

**Unit Tests:**
- [What to test in isolation]

**Integration Tests:**
- [Scenario 1: API flow]
- [Scenario 2: Feature interaction]

**E2E Tests:**
- [User flow 1]
- [User flow 2]

## Acceptance Criteria

When complete:
- ✅ [Specific, measurable criterion]
- ✅ [Specific, measurable criterion]
...
```

#### C. Code Refactoring Strategy (if modifying existing)

**File:** `.pm/features/[feature-name]/planning/CODE-REFACTORING-STRATEGY.md`

**Structure:**
```markdown
# Code Refactoring Strategy

## Current State Audit

**Existing handlers/components:**
[List what exists, line counts, purpose]

## Refactoring Plan

### Modify Existing (X files)
- **File:** [path/to/file.ts]
  - **Current:** [What it does now]
  - **Change:** [What to modify]
  - **Why:** [Reasoning]

### Keep As-Is (Y files)
- **File:** [path/to/file.ts]
  - **Why:** [No changes needed]

### Create New (Z files)
- **File:** [path/to/new-file.ts]
  - **Purpose:** [What it will do]
  - **Why New:** [Why not modifying existing]

## Migration Strategy

[If database changes]
- Step 1: [Migration step]
- Step 2: [Data backfill if needed]
- Rollback: [How to undo]

## Backward Compatibility

[If API changes]
- Breaking changes: [List]
- Mitigation: [Versioning strategy]
```

#### D. Update Cross-References

**Update:** `.pm/features/FEATURE-RELATIONSHIPS.md`

**Add section for this feature:**
```markdown
### [Feature Name]

**Depends On:**
- [Feature X]: [How it depends]

**Provides To:**
- [Feature Y]: [What it provides]

**Creates Notifications:**
- [Type 1]: [When triggered]
- [Type 2]: [When triggered]

**Shared Data Models:**
- [Model]: [Used by this and Feature Z]
```

#### E. Update Project Planning Patterns (CRITICAL!)

**Update:** `.pm/PROJECT-PLANNING-PATTERNS.md`

**Add to appropriate sections:**

**If new pattern emerged:**
```markdown
### Pattern X: [Name]
[Description based on this feature]
```

**If pitfall avoided:**
```markdown
### Pitfall X: [Name]
Avoided in: [This feature]
How: [What we did correctly]
```

**If architectural decision made:**
```markdown
### Decision: [Date] - [This Feature]
Question: [What was decided]
Chosen: [Approach] because [reasoning]
```

---

### Step 7: Exit Plan Mode

**After presenting complete master plan:**

```
PLAN MODE complete!

I've created:
✅ Feature intake document (01-intake.md)
✅ Complete master plan (MASTER-PLAN.md)
✅ Code refactoring strategy [if applicable]
✅ Cross-reference documentation
✅ Updated project planning patterns
✅ Copy-paste implementation prompts

This master plan is ready for implementation.

Would you like to:
1. Review the plan first
2. Request changes
3. Approve and start implementation

[Links to all created documents]
```

**DO NOT start implementation without user approval!**

**Why:**
- User should review before committing to coding
- Changes are cheaper now than after implementation starts
- Confirms everyone aligned on approach

---

## Quality Checklist

**Before presenting ANY master plan, verify ALL items:**

### Context Loaded ✅
- [ ] Read config.json (project philosophy)
- [ ] Read NOW.md (current status)
- [ ] Read PROJECT-PLANNING-PATTERNS.md ⭐ (architectural rules)
- [ ] Read backend patterns doc (Claude.md or equivalent)
- [ ] Read frontend patterns doc (Claude.md or equivalent)
- [ ] Read database schema
- [ ] Read FEATURE-RELATIONSHIPS.md
- [ ] Read related feature planning docs

### Questions Asked ✅
- [ ] Asked about core functionality (what problem solved)
- [ ] Asked about data entities (what data involved)
- [ ] Asked about granularity level ⭐ (CRITICAL - where does work happen)
- [ ] Asked about integration points (dependencies, provides)
- [ ] Asked about edge cases (race, transactions, performance, security)
- [ ] Clarified workflow separate from UI/UX
- [ ] Confirmed entity hierarchy understanding

### Analysis Done ✅
- [ ] Reviewed schema for granularity correctness
- [ ] Checked PROJECT-PLANNING-PATTERNS.md for similar patterns
- [ ] Identified code reuse opportunities (target 50%+)
- [ ] Validated architectural decisions against project patterns
- [ ] Considered ALL edge cases (race, transactions, permissions, performance, security)
- [ ] Designed integration points
- [ ] Created cross-reference documentation

### Documentation Complete ✅
- [ ] Intake document created (user journeys, success criteria)
- [ ] Master plan created (schemas, workflows, APIs, tasks)
- [ ] Refactoring strategy created (if modifying existing code)
- [ ] Cross-references updated (FEATURE-RELATIONSHIPS.md)
- [ ] Copy-paste prompts generated (BE/FE)
- [ ] Timeline estimated
- [ ] PROJECT-PLANNING-PATTERNS.md updated with learnings

### Plan Quality ✅
- [ ] Workflows focus on data flow (not UI details)
- [ ] All API/function schemas documented with types
- [ ] Database migrations provided
- [ ] Edge cases addressed
- [ ] Integration points clear
- [ ] Tasks are granular and testable
- [ ] Can implement without user guidance
- [ ] Entity granularity validated against project patterns ⭐

**IF ANY CHECKBOX UNCHECKED → PLAN IS NOT READY!**

**Go back and complete missing items before presenting plan.**

---

## Universal Principles

### Principle 1: "Implement Once"
```
Thorough upfront planning > Quick but wrong plans

Why:
- Fixing architecture during coding = expensive
- Rework wastes time and creates bugs
- Complete plans = smooth implementation
- "Measure twice, cut once"
```

### Principle 2: Entity Granularity (Most Common Mistake!)
```
Always ask: "Where does the real work happen?"

Entity Hierarchy Example:
Global → Company → Organization → Department → Team → Project → User

Real Entity = where actions/data are scoped
Umbrella Entity = just containers/grouping

⚠️ CRITICAL: Design at real entity level, not umbrella level!

How to Identify:
1. Ask: "Where do users actually work?"
2. Ask: "Where are settings configured?"
3. Ask: "Where do reports aggregate from?"
4. Check: PROJECT-PLANNING-PATTERNS.md entity hierarchy
5. If unsure: ASK USER!
```

### Principle 3: Workflow vs UI/UX Separation
```
Master Plan MUST focus on:
✅ Data flows (input → transformation → output)
✅ State transitions (created → active → archived)
✅ API contracts (request/response schemas)
✅ Business logic (validation, calculations, rules)

Master Plan DEFERS to implementation:
⏸️ Exact layouts (component positioning)
⏸️ Colors and styling (theme decisions)
⏸️ Button placements (UI polish)
⏸️ Animation details (UX enhancements)

Why:
- Workflow = what must happen (architecture)
- UI/UX = how it looks (presentation)
- Architecture first, presentation later
- Prevents mixing concerns
```

### Principle 4: Code Reuse
```
Target: 50%+ reuse

Hierarchy:
1. Modify existing (best - extends proven code)
2. Extend patterns (good - consistent with codebase)
3. Create new (okay - if truly needed)
4. Rebuild existing (bad - waste of time)

How:
1. Scan existing code first
2. Ask: "Can I modify this instead?"
3. Follow existing patterns
4. Only create new if no alternative
```

### Principle 5: Ask, Don't Assume
```
When uncertain → Ask user

Common uncertainties:
- Entity granularity (org vs team vs user level)
- Integration approach (how features connect)
- Edge case handling (what to do when...)
- Scope boundaries (in vs out of scope)

Better to ask 10 questions than make 1 wrong assumption!
```

---

## Integration with Manager Workflow

### When This Protocol Is Used

**✅ USE during:**
- Master plan creation for new features
- Major feature redesigns
- Complex architectural decisions

**❌ DON'T USE during:**
- Prompt generation (use master plan instead)
- Progress tracking (use NOW.md)
- Bug fixes (too heavyweight)
- Small changes (overkill)
- Implementation (plan already exists)

### Entry Points

**User says:**
- "Build [feature]"
- "Add [functionality]"
- "Create [system]"
- "Implement [specs]"
- Provides documentation/RFP/requirements

**Manager AI:**
1. Recognizes feature request
2. Activates MASTER-PLAN-PROTOCOL.ai.md
3. Enters PLAN MODE
4. Follows 7-step process

### Exit Point

**After user approves master plan:**
1. Exit PLAN MODE
2. Switch to implementation mode
3. Generate copy-paste prompts (from master plan)
4. User pastes prompts to BE/FE terminals
5. Track progress in NOW.md

---

## Common Pitfalls to Avoid

### Pitfall 1: Skipping Context Loading
```
❌ Jump straight to questions
✅ Read all context files first

Why: Questions are better when you understand the project
```

### Pitfall 2: Assuming Entity Granularity
```
❌ Assume top-level entity is correct (e.g., organization)
✅ Ask "Where does work happen?" and validate

Why: Most common architectural mistake
```

### Pitfall 3: Not Presenting Analysis
```
❌ Go straight from questions to master plan
✅ Present analysis, get user confirmation first

Why: Catches misunderstandings before detailed work
```

### Pitfall 4: Mixing Workflow and UI
```
❌ "User clicks blue button on left sidebar..."
✅ "User triggers action via navigation..."

Why: Workflow is architecture, UI is presentation
```

### Pitfall 5: Shallow Edge Case Analysis
```
❌ "We'll handle errors"
✅ "Race condition at line X → solution: transaction with lock"

Why: Specific solutions prevent bugs
```

---

## Success Criteria

**This protocol is successful when:**

✅ Plans are complete (can implement without user guidance)
✅ Plans are correct (no architectural rework needed)
✅ Entity granularity is validated (using correct level)
✅ Edge cases are addressed (specific solutions)
✅ Code reuse is maximized (50%+ target)
✅ Integration is clear (documented connections)
✅ Workflow is separate from UI/UX (proper separation)
✅ PROJECT-PLANNING-PATTERNS.md is updated (learning captured)

**Result:** "Implement Once" - thorough plan → smooth implementation

---

**Last Updated:** [Date]
**Version:** 1.0 (Universal)
**Works With:** Any project (web app, API, mobile, etc.)
