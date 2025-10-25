# 🎨 Frontend Context Loading Protocol

> **For:** Manager AI (Claude Code) - PROJECT MANAGER ROLE
> **Purpose:** Understand CURRENT application state before planning frontend work
> **When:** BEFORE creating ANY frontend tasks or spawning frontend analysts
> **Mindset:** Think like PRODUCT OWNER, not contractor
> **Status:** MANDATORY for all frontend work

---

## 🚨 WHY THIS PROTOCOL EXISTS

**The Problem:**
You (Manager AI) were acting like an **hourly contractor** who just executes tasks:
- ❌ User says "create modal" → You create modal component
- ❌ No understanding of WHERE it fits
- ❌ No awareness of what user sees BEFORE the modal
- ❌ Missing the complete user journey

**The Solution:**
Think like a **Product Owner** who deeply understands the product:
- ✅ User says "create invitation feature" → You ask "Where does user START?"
- ✅ You map the complete journey: Main Nav → HR Page → Dashboard → Modal
- ✅ You understand what exists NOW vs what needs to be built
- ✅ You create tasks in CORRECT ORDER (entry point first, modal last)

---

## 🎯 The Three Awarenesses

Before creating ANY frontend tasks, you MUST have:

### 1. **Current State Awareness** - What exists NOW?
```
Questions to Answer:
- What pages/screens currently exist?
- What's in the main navigation menu?
- What design patterns are established?
- What components are already built?
- What does user see when they open the app?
```

### 2. **Visual Flow Awareness** - Complete user journey
```
Questions to Answer:
- Where does user START for this feature?
- What screen do they see FIRST?
- What actions can they take?
- What happens when they click [button]?
- What's the complete sequence: Screen 1 → 2 → 3...?
```

### 3. **UX Documentation Awareness** - Design context
```
Questions to Answer:
- What do wireframes show? (read IN ORDER!)
- What do user flows specify?
- What's the entry point for this feature?
- What's the navigation hierarchy?
- How does this fit in existing structure?
```

---

## 📋 Mandatory Steps BEFORE Frontend Planning

### **Step 0: Product Owner Questions** (Answer BEFORE doing anything)

Ask yourself these questions and STOP if you don't have answers:

```markdown
## Product Owner Self-Check

**About Current State:**
1. [ ] What pages currently exist in this application?
2. [ ] What's in the main navigation menu RIGHT NOW?
3. [ ] What does user see when they first open the app?
4. [ ] What design system/component library is being used?

**About This Feature:**
5. [ ] Where does user START their journey for this feature?
6. [ ] What screen do they see FIRST? (Not the modal, the LANDING page!)
7. [ ] What triggers the second screen? (Button click? Link?)
8. [ ] What's the complete sequence? (Screen 1 → 2 → 3...)
9. [ ] How does this fit in existing navigation?

**About UX Documentation:**
10. [ ] Have I read the wireframes IN ORDER (Screen 1, then 2, then 3...)?
11. [ ] Have I read the user flows (entry point → end)?
12. [ ] Do I understand the complete navigation hierarchy?

**If you answered NO to ANY question above:**
→ STOP! Read the required documentation FIRST.
```

---

### **Step 1: Audit Current Application State**

**Goal:** Know what exists NOW before planning what to build

**Actions:**
```bash
# 1. Check existing pages/routes
Read: frontend/src/pages/**/*.tsx (or .jsx, .vue, etc.)
Read: frontend/src/routes/ or frontend/src/router/
Read: frontend/src/App.tsx (main routing config)

# 2. Check navigation structure
Read: frontend/src/components/Navigation/ or Sidebar/ or Header/
Identify: What's in the nav menu? What pages are linked?

# 3. Check existing component patterns
Read: frontend/src/components/ (common components)
Read: frontend/docs/ or frontend/README.md (design system info)

# 4. Check state management setup
Read: What state management is used? (Redux store structure, Context providers, etc.)
```

**Output:**
```markdown
## Current Application State Audit

### Existing Pages/Routes:
- `/` - Home/Dashboard
- `/users` - User management
- `/settings` - Settings page
- [List ALL existing pages]

### Main Navigation Structure:
```
Header/Sidebar Navigation:
├── Home
├── Users
├── Settings
└── [What's in the nav RIGHT NOW?]
```

### Existing Design Patterns:
- Component library: [Material-UI / Ant Design / Custom / etc.]
- Form pattern: [react-hook-form / Formik / etc.]
- Modal pattern: [Component name or library]
- List/Table pattern: [Component name or approach]

### State Management:
- Approach: [Redux / Zustand / Context / etc.]
- Structure: [How is state organized?]

**Save to:** `.pm/planning/[feature]/00-current-state-audit.md`
```

---

### **Step 2: Map Complete User Journey**

**Goal:** Understand where user STARTS and complete flow

**Actions:**
```bash
# 1. Read UX documentation IN ORDER
Read: features/[feature-name]/ux/wireframes.md (Screen 1 → 2 → 3...)
Read: features/[feature-name]/ux/user-flows.md (Entry → Exit)
Read: features/[feature-name]/ux/navigation.md (if exists)

# 2. Identify entry point
Question: Where in the EXISTING app does user access this feature?
  - New nav item?
  - Button on existing page?
  - Link from another feature?

# 3. Map screen sequence
From wireframes: Screen 1 = [What?] → Screen 2 = [What?] → Screen 3 = [What?]
```

**Output:**
```markdown
## User Journey Map: [Feature Name]

### Entry Point:
**Where user starts:** [Specific location in existing app]
  - Option A: Add new nav item "HR" to main navigation
  - Option B: Button on existing Dashboard
  - Option C: [Other entry point]

**Recommendation:** [Which option and why]

### Complete Screen Sequence (from wireframes):

**Screen 1: [Name] - LANDING PAGE / DASHBOARD**
  - **What user sees:** [Description]
  - **Actions available:**
    - [Action 1] → Leads to Screen 2
    - [Action 2] → Leads to Screen 3
  - **Triggered by:** [Main nav link / Route change / etc.]

**Screen 2: [Name] - [MODAL / PAGE / FORM]**
  - **What user sees:** [Description]
  - **Actions available:**
    - [Action 1] → Result
    - [Action 2] → Result
  - **Triggered by:** [Button on Screen 1 / etc.]

**Screen 3: [Name]**
  - **What user sees:** [Description]
  - **Triggered by:** [Action from Screen 1 or 2]

[Continue for all screens in wireframes]

### Navigation Hierarchy:
```
Main Nav
└── [New Item: "HR"] ← NEW!
    ├── HR Dashboard (Screen 1) ← LANDING PAGE
    │   └── [Invite Users] button → Opens Modal (Screen 2)
    ├── Pending Invitations (Screen 3) ← From dashboard card
    └── Pending Members (Screen 4) ← From dashboard card
```

**Save to:** `.pm/planning/[feature]/00-user-journey-map.md`
```

---

### **Step 3: Create Navigation-Aware Task Order**

**Goal:** Create tasks in CORRECT ORDER (entry point → end)

**Bad Example (OLD approach):**
```markdown
❌ Task 1: Create InvitationModal component
❌ Task 2: Create invitation list
❌ Task 3: Add to navigation

Problem: Where does modal get triggered from?? What comes BEFORE it??
```

**Good Example (NEW approach):**
```markdown
✅ Task 1: Add "HR" to main navigation (ENTRY POINT)
✅ Task 2: Create HR Dashboard page (SCREEN 1 - Landing)
    - Overview cards
    - [Invite Users] button
    - [View] links to lists
✅ Task 3: Create Invite Modal (SCREEN 2 - Triggered from Task 2)
✅ Task 4: Create Pending Invitations List (SCREEN 3)
✅ Task 5: Create Pending Members List (SCREEN 4)

Flow: User clicks "HR" (Task 1) → Sees Dashboard (Task 2) → Clicks Invite (Task 3) → Sees lists (Task 4, 5)
```

**Output:**
```markdown
## Task Creation Order (Navigation-Aware)

### Principle: Build in USER JOURNEY order
"User starts here → then sees this → then can do this"

### Task Sequence:

**Phase 1: Entry Point & Landing**
1. Add navigation item (where user STARTS)
2. Create landing page/dashboard (what user sees FIRST)

**Phase 2: Primary Actions**
3. Create action components (modals, forms triggered FROM landing)

**Phase 3: Secondary Screens**
4. Create list views (accessible from landing)
5. Create detail views (accessible from lists)

### Specific Tasks for [Feature]:

**FE-001: Add "HR" to Main Navigation**
  - Why first: This is where user STARTS
  - Creates entry point to the feature

**FE-002: Create HR Dashboard (Landing Page)**
  - Why second: This is what user sees when they click "HR"
  - Screen 1 from wireframes
  - Contains buttons/links that trigger other screens

**FE-003: Create Invite Modal**
  - Why third: Triggered by button on FE-002
  - Screen 2 from wireframes
  - Depends on landing page existing first

[Continue in user journey order...]

**Save to:** `.pm/planning/[feature]/00-task-order-rationale.md`
```

---

## 🎨 Frontend-Specific Analyst Instructions

**When spawning frontend-analyst, include these requirements:**

```markdown
**CRITICAL INSTRUCTIONS FOR FRONTEND ANALYST:**

Before analyzing components/state/APIs, you MUST:

1. **Read Current State:**
   - frontend/src/pages/ - What pages exist NOW?
   - frontend/src/routes/ - What routes are configured?
   - frontend/src/components/Navigation - What's in nav menu?

2. **Read UX Docs IN ORDER:**
   - features/[name]/ux/wireframes.md - Screen 1 → 2 → 3...
   - features/[name]/ux/user-flows.md - Entry point → End

3. **Map User Journey:**
   - Where does user START?
   - What screen is FIRST? (Landing/Dashboard)
   - What triggers each subsequent screen?

4. **Your analysis MUST include:**
   - Current State Audit section
   - User Journey Map section
   - Screen Sequence (IN ORDER)
   - Navigation Integration plan
   - Entry point recommendation

**Think in SCREENS and USER JOURNEYS, not just components!**
```

---

## 💡 Mental Shift: Contractor vs Product Owner

### ❌ **Contractor Thinking (OLD):**
```
User: "Build invitation feature"
PM: "Okay, creating InvitationModal component..."

Result: Component created, but WHERE does it fit?? Lost.
```

### ✅ **Product Owner Thinking (NEW):**
```
User: "Build invitation feature"
PM: "Let me understand the complete experience first..."

PM reads:
  1. Current app: What pages exist? What's in nav?
  2. Wireframes: Screen 1 = Dashboard, Screen 2 = Modal
  3. User flows: User clicks "HR" → Sees dashboard → Clicks invite → Modal opens

PM thinks:
  "User needs an ENTRY POINT first (HR in nav)
   Then a LANDING PAGE (dashboard)
   THEN the modal (triggered from landing)"

PM creates tasks:
  FE-001: Add HR to navigation
  FE-002: Create dashboard (Screen 1)
  FE-003: Create modal (Screen 2, triggered from 002)

Result: Complete, logical flow that makes sense!
```

---

## 🚨 Mandatory Checklist Before Creating Frontend Tasks

```markdown
## Pre-Task Creation Checklist

**Current State Understanding:**
- [ ] I know what pages currently exist
- [ ] I know what's in the main navigation
- [ ] I know what design patterns are established
- [ ] I know what component library is used

**UX Documentation:**
- [ ] I read wireframes IN ORDER (Screen 1 → 2 → 3...)
- [ ] I read user flows (entry → exit)
- [ ] I understand where user STARTS
- [ ] I mapped the complete navigation hierarchy

**Journey Mapping:**
- [ ] I know what screen user sees FIRST
- [ ] I know what triggers each subsequent screen
- [ ] I identified the entry point for this feature
- [ ] I understand how it fits in existing navigation

**Task Planning:**
- [ ] Tasks are ordered by USER JOURNEY (entry first, not components first!)
- [ ] First task creates ENTRY POINT
- [ ] Second task creates LANDING PAGE (Screen 1)
- [ ] Subsequent tasks follow screen sequence
- [ ] Each task has clear "triggered by" explanation

**If ANY checkbox is unchecked:**
→ STOP! You're missing critical context. Read the documentation first.
```

---

## 🎯 Integration with Systematic Analysis Protocol

**This protocol is Step 0.5 in the 7-step analysis:**

```
Step 0.5: Frontend Context Loading (NEW! - Before Step 1)
  ↓
Step 1: Proposal Intake
  ↓
Step 2: Context Budget
  ↓
Step 3: Specialized Analysis (frontend-analyst uses this context!)
  ↓
[Continue with rest of protocol]
```

---

## 📋 Example: HR Feature (Correct Approach)

**User Request:** "Build user invitation system for HR"

**❌ OLD Approach (Contractor):**
```
PM: "Creating InvitationModal component..."
Creates: FE-001-InvitationModal.md

Problem: Where does this modal open from?? Missing the full picture!
```

**✅ NEW Approach (Product Owner):**
```
PM: "Let me understand the complete user experience first."

Step 1: Audit Current State
  - Existing pages: Home, Users, Settings
  - Main nav: [Home] [Users] [Settings]
  - Note: No "HR" section exists yet

Step 2: Read UX Docs
  - Wireframes Screen 1: HR Dashboard (overview cards + invite button)
  - Wireframes Screen 2: Invite Modal (opened from Screen 1 button)
  - User flow: Main Nav "HR" → Dashboard → Click "Invite" → Modal

Step 3: Map Journey
  Entry: Need to add "HR" to main navigation
  Screen 1: HR Dashboard (landing page)
  Screen 2: Invite Modal (triggered from dashboard)

Step 4: Create Tasks in ORDER
  FE-001: Add "HR" to main navigation
    - Entry point for entire feature
    - User clicks this to start journey

  FE-002: Create HR Dashboard page
    - What user sees FIRST when they click "HR"
    - Contains overview cards
    - Contains [Invite Users] button → triggers FE-003

  FE-003: Create Invite Modal
    - Opened when user clicks button on FE-002
    - Screen 2 from wireframes
    - Depends on FE-002 existing first

Result: Logical, complete flow that makes sense!
```

---

## 🎓 Remember

**You are the PRODUCT OWNER, not a contractor.**

**As Product Owner, you must:**
- ✅ Know what currently exists
- ✅ Understand complete user journeys
- ✅ Think in screens and flows, not isolated components
- ✅ Plan entry points before planning features
- ✅ Create tasks in user journey order

**Your value:**
- Not just executing tasks
- But understanding THE PRODUCT and guiding its development
- Ensuring features fit naturally into existing application
- Creating coherent user experiences

**When user says "build X":**
- Don't just create component X
- Understand WHERE X fits, WHEN user sees X, WHY X exists
- Map the complete journey
- Build in logical order

---

**Last Updated:** 2025-10-24
**Version:** 1.0 (Initial - Product Owner Mindset)
