# Project Planning Patterns

**Project:** [Project Name]
**Last Updated:** [Date]
**Purpose:** Project-specific architectural patterns, entity relationships, and learned pitfalls.

**Used:** ONLY during master plan creation (not during prompt generation or implementation)

---

## 📐 Entity Hierarchy & Granularity

### Entity Levels

**Define your project's entity hierarchy:**

```
[Level 1: Top level - e.g., Global/Platform]
  └─ [Level 2: e.g., Company/Organization]
      └─ [Level 3: e.g., Department/Team/Facility]
          └─ [Level 4: e.g., Project/Resource]
              └─ [Level 5: User/Individual]
```

**Example for SaaS platform:**
```
Global (Platform)
  └─ Organization (Customer company)
      └─ Team (Sub-unit within company)
          └─ Project (Work unit)
              └─ User (Individual)
```

**Example for Healthcare:**
```
Global (Platform)
  └─ Organization (Healthcare company)
      └─ Facility (Physical location)
          └─ User (Nurse, admin, etc.)
```

**Example for E-commerce:**
```
Global (Platform)
  └─ Vendor (Seller)
      └─ Store (Sales channel)
          └─ Product (Item)
              └─ Customer (Buyer)
```

---

### Real vs Umbrella Entities

**Real Entities** (where actual work happens):

**[Entity Name]:**
- **Why Real:** [Description of why this is where work actually happens]
- **Examples:**
  - [Action 1] happens at this level (e.g., "Jobs are posted at facilities")
  - [Action 2] happens at this level (e.g., "Users work at facilities")
  - [Setting] is configured at this level (e.g., "Rates set per facility")
- **Implications:** Features should operate at this level, not parent level

**Umbrella Entities** (just containers/grouping):

**[Entity Name]:**
- **Why Umbrella:** [Description of why this is just a container]
- **Examples:**
  - No direct work happens here
  - Just groups child entities
  - Used for: [Reporting, billing, high-level management]
- **Implications:** Avoid designing features at this level unless truly global

---

### Granularity Rules

**Rule 1: Primary Work Unit**

[Entity X] is the primary work unit for this project.

**Reasoning:** [Why - e.g., "All actions happen at facility level, not organization level"]

**Applies To:**
- Invitations: To [Entity X] (not parent)
- Settings: Per-[Entity X] (not global)
- Permissions: At [Entity X] level
- Data scope: Filtered by [Entity X]

**Example:** "Invite user to Team" not "Invite user to Organization"

---

**Rule 2: Per-Entity Customization**

[Setting/Configuration Y] can differ across [Entity Z].

**Reasoning:** [Why - e.g., "Users can have different roles at different teams"]

**Examples:**
- User rates differ per [entity]
- User roles differ per [entity]
- Settings/configs differ per [entity]

**Implication:** Design for per-entity flexibility, not global settings

---

**Rule 3: [Add Project-Specific Rule]**

[Description of another granularity rule specific to your project]

**Reasoning:** [Why this rule exists]

**Example:** [Concrete example]

---

## 🎯 Architectural Patterns

### Pattern 1: [Pattern Name]

**When to Use:** [Situation/trigger for using this pattern]

**How it Works:**
[Description of the pattern]

**Implementation:**
```typescript
// Code example or pseudocode
```

**Example from Project:**
[Concrete example of where this is used]

**Why:**
[Reasoning - benefits, trade-offs]

**Related Patterns:**
- [Other pattern] - [Relationship]

---

### Pattern 2: [Pattern Name]

[Same structure as above]

**Example:**
```
Pattern: Factory Pattern for Extensibility
When to Use: Need to support 100+ types that can be added without changing core
How: Core calls factory.get(type) → factory returns handler → core uses it
Example: Notification system - infinite notification types without core changes
Why: Open/closed principle (open for extension, closed for modification)
```

---

## ⚠️ Known Pitfalls & Solutions

### Pitfall 1: [Pitfall Name]

**Mistake:** [What was done wrong]

**Why Wrong:** [Explanation of the problem]

**Correct Approach:** [How to do it right]

**How to Catch:** [Questions to ask to avoid this pitfall]

**Example:**
[Concrete example from project history, if available]

---

### Pitfall 2: [Pitfall Name]

[Same structure]

**Example:**
```
Pitfall: Operating at Wrong Entity Level
Mistake: Designed feature at organization level
Why Wrong: Organizations are umbrellas - no work happens there
Correct: Design at facility/team level (where work actually happens)
How to Catch: Ask "Where does real work happen?" - if answer is child entity, use that level
```

---

## 🔗 Integration Patterns

### Pattern 1: [Integration Name]

**How Features Integrate:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**When to Use:**
[Trigger/situation]

**Example:**
[Concrete example from project]

**Code Pattern:**
```typescript
// Example integration code
```

---

### Pattern 2: [Integration Name]

[Same structure]

**Example:**
```
Pattern: Notification System Integration
How:
1. Feature performs action
2. Feature calls notificationService.create({ userId, type, data })
3. Notification appears in user's activity center
4. Feature registers renderer: NotificationFactory.register(type, renderer)
When: Any user-facing action that needs visibility
```

---

## 🗂️ Data Modeling Conventions

### Convention 1: [Convention Name]

**Rule:** [Description of the convention]

**Example:**
```typescript
// Schema or code example
```

**Why:** [Reasoning behind this convention]

**Applies To:**
- [Use case 1]
- [Use case 2]

---

### Convention 2: [Convention Name]

[Same structure]

**Example:**
```
Convention: Per-Entity Configuration
Rule: Settings that can differ across entities must be per-entity, not global
Example: User.baseRate stored in FacilityMember (not global User table)
Why: Allows flexibility - user can have $45/hr at Facility A, $50/hr at Facility B
```

---

## 🔄 Common Workflows

### Workflow Pattern 1: [Workflow Name]

**Applies To:** [Feature types where this pattern is used]

**Steps:**
1. [Step with details]
2. [Step with details]
3. [Step with details]

**Example:**
[Concrete example feature that uses this workflow]

**Variations:**
- [Variation A]: [When to use]
- [Variation B]: [When to use]

---

## 📈 Performance Patterns

### Performance Pattern 1: [Pattern Name]

**Issue:** [Performance concern]

**Solution:** [How to handle it]

**Implementation:**
```sql
-- Example: Database index
CREATE INDEX idx_name ON table(column);
```

**When to Apply:**
[Trigger/threshold]

**Example:**
[From project]

---

## 🛡️ Security Patterns

### Security Pattern 1: [Pattern Name]

**Threat:** [Security concern]

**Mitigation:** [How we handle it]

**Implementation:**
[Code pattern or approach]

**Applied In:**
- [Feature A]
- [Feature B]

**Example:**
```
Pattern: Authorization at Entity Level
Threat: Users accessing data from entities they don't belong to
Mitigation: Every query filters by user's entity memberships
Implementation:
  const userFacilities = await getUserFacilities(userId);
  const data = await query({ facilityId: { in: userFacilities } });
Applied: All feature endpoints check facility membership
```

---

## 📝 Lessons Learned

### Lesson 1: [Date] - [Feature Name]

**What Happened:** [Issue encountered]

**Root Cause:** [Why it happened]

**Solution:** [How it was fixed]

**Future Prevention:** [Pattern/rule added, question to ask]

**Pattern Added:** [Reference to section above where pattern was documented]

---

### Lesson 2: [Date] - [Feature Name]

[Same structure]

**Example:**
```
Lesson: 2025-10-24 - User Invitations
What: Initially designed org-level invitations, had to redesign for facility-level
Root Cause: Didn't ask "where does real work happen?" during planning
Solution: Redesigned as facility-level invitations with per-facility rates/roles
Prevention: Added Entity Granularity rule, ask granularity questions in PLAN MODE
Pattern: See "Entity Hierarchy & Granularity" section above
```

---

## 🎯 Decision Log

### Decision 1: [Date] - [Topic]

**Question:** [What needed to be decided]

**Options Considered:**
- **Option A:** [Description]
  - Pros: [Benefits]
  - Cons: [Drawbacks]
  - **Status:** ❌ Rejected
  - **Reason:** [Why not chosen]

- **Option B:** [Description]
  - Pros: [Benefits]
  - Cons: [Drawbacks]
  - **Status:** ✅ CHOSEN
  - **Reason:** [Why chosen]

**Impact:** [How this affects future features]

**Documented In:** [Reference to pattern or rule above]

---

## 🔍 Quick Reference

### Before Planning Any Feature, Ask:

**Granularity:**
- [ ] Where does the real work happen? (which entity level)
- [ ] Are we using the correct entity level?
- [ ] Can settings differ across entities?

**Integration:**
- [ ] What features does this depend on?
- [ ] What features will depend on this?
- [ ] Does this create notifications?

**Edge Cases:**
- [ ] What happens if two users do this simultaneously?
- [ ] What happens if it fails halfway?
- [ ] How does this scale to 10,000 users?

**Architecture:**
- [ ] Can we reuse existing code? (target 50%+)
- [ ] Does this follow existing patterns?
- [ ] Is workflow separate from UI/UX?

---

## 🔄 Continuous Updates

**This document evolves with the project!**

**After each feature:**
1. **Review:** What was learned?
2. **Update Patterns:** New patterns emerged?
3. **Add Pitfalls:** Issues encountered?
4. **Update Rules:** Granularity or conventions changed?
5. **Log Decisions:** Architectural choices made?

**Why:**
- Each feature makes future features easier
- Patterns compound over time
- Mistakes documented = avoided in future
- Knowledge base grows with project

**Update Frequency:**
- After master plan creation: Add new patterns/decisions
- After implementation: Add lessons learned/pitfalls
- Monthly: Review and consolidate

---

## 📊 Metrics

**Track to measure pattern effectiveness:**

**Code Reuse:**
- Target: 50%+ reuse per feature
- Current average: [X%]

**Rework:**
- Target: <10% of features need architectural rework
- Current: [X%]

**Planning Time:**
- Target: 1-2 days for master plan
- Current average: [X days]

**Implementation:**
- Target: Implement without user guidance
- Current: [Success rate]

---

**Status:** Living document - continuously updated
**Next Review:** [Date]
