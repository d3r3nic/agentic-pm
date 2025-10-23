# Frontend Agent Prompt Template

> **Purpose:** Use this template to create clear, sequential prompts for Frontend agents
>
> **Pattern:** Start small (wireframes) → structure → implementation, with approval gates

---

## Template Structure

```markdown
# [Feature Name] - Frontend Implementation

**Phase:** [Week X-Y: Phase Name]
**Module:** [HR / Jobs / Notifications / etc.]
**Status:** Starting

---

## 📚 Context

**What we're building:**
[1-2 sentence description of the feature and its goal]

**Why we're building it:**
[Business context - how does this fit into the 7-week plan?]

**Integration points:**
- Backend APIs: [Ready / Not ready (use mocks)]
- API contracts: See `integration.md` section [X]

---

## 📖 Required Reading (15-20 min)

Before starting, study these docs:

### Architecture & Patterns
- `/frontend-dashboard/docs/01-fundamentals/architecture-overview.md`
- `/frontend-dashboard/docs/02-structure/folder-structure.md`
- [Link to specific pattern docs relevant to this feature]

### Related Examples
- [Link to existing similar feature if applicable]
- [Link to factory pattern to follow if applicable]

**You're ready when you can answer:**
1. [Key question 1 about architecture]
2. [Key question 2 about patterns]
3. [Key question 3 about this specific feature]

---

## 🎯 STEP 1: Design Wireframes

**Task:** Create wireframes for all screens in this feature

**Deliverables:**
- [ ] [Screen 1 name] - [Brief description]
  - Show: [What data/actions]
  - User flow: [How user gets here]

- [ ] [Screen 2 name] - [Brief description]
  - Show: [What data/actions]
  - User flow: [How user gets here]

- [ ] [Screen 3 name] - [Brief description]
  - Show: [What data/actions]
  - User flow: [How user gets here]

**Design considerations:**
- Mobile responsive (xs, md breakpoints)
- Follow existing app patterns (see [link to similar screens])
- Use Material-UI components via `@/shared/ui/mui`

**Success criteria:**
- All screens wireframed (low-fidelity OK)
- User flows clear
- No hardcoded values (colors, spacing, etc.)

**⚠️ STOP HERE - Wait for approval before proceeding to Step 2**

---

## 🏗️ STEP 2: Create Page Shells

**Task:** Set up folder structure, routing, and empty page components

**Deliverables:**
- [ ] Folder structure created
  ```
  src/features/[module-name]/
  ├── features/
  │   └── [feature-name]/
  │       ├── components/
  │       ├── [FeaturePage].tsx
  │       └── index.ts
  ```

- [ ] Routes added to AppShell
  ```tsx
  <Route path="/[module]/[feature]" element={<FeaturePage />} />
  ```

- [ ] Navigation items added (if applicable)
  - Top nav or sidebar entry
  - Correct permissions/role visibility

- [ ] Empty page components created
  - Imports from `@/shared/ui/mui`
  - Uses `AppLoadingScreen` for loading states
  - Basic layout structure (no hardcoded dimensions)

**Critical rules:**
- ✅ UI-hierarchical structure (code mirrors UI)
- ✅ Import from `@/shared/ui/mui` only
- ✅ Use theme system for all styling
- ❌ No hardcoded colors, spacing, shadows

**Success criteria:**
- Pages load without errors
- Navigation works
- Correct folder structure
- Clean, empty starting point

**⚠️ STOP HERE - Wait for approval before proceeding to Step 3**

---

## ⚙️ STEP 3: State Management Setup

**Task:** Create Redux slice and API endpoints (using mocks or real APIs)

**Deliverables:**
- [ ] Create Redux slice
  ```
  src/features/[module-name]/features/[feature-name]/
  └── store/
      ├── [feature]Slice.ts
      └── registerSlices.ts
  ```

- [ ] Create API endpoints (RTK Query)
  ```
  src/features/[module-name]/features/[feature-name]/
  └── api/
      └── [feature]Api.ts
  ```

- [ ] Define types/interfaces
  ```typescript
  // Based on API contracts in integration.md
  ```

**API Integration:**
- Backend ready? Wire up real endpoints
- Backend not ready? Use mocked responses from `integration.md`

**Critical rules:**
- ✅ Hierarchical Redux (parent registers child slices)
- ✅ Network-First caching (automatic in RTK Query)
- ✅ Error handling via centralized system
- ❌ Don't manually invalidate tags unless user stays on same page

**Success criteria:**
- Redux slice registered in parent
- API endpoints defined (mocked or real)
- TypeScript types match API contracts
- No console errors

**⚠️ STOP HERE - Wait for approval before proceeding to Step 4**

---

## 🎨 STEP 4: Build UI Components

**Task:** Implement the actual UI based on wireframes

**Deliverables:**
- [ ] [Component 1 name]
  - Functionality: [What it does]
  - Props: [What it accepts]
  - Follows pattern: [Link to similar component or factory]

- [ ] [Component 2 name]
  - Functionality: [What it does]
  - Props: [What it accepts]
  - Follows pattern: [Link to similar component or factory]

**Is this reusable?** (Factory-first check)
- If YES or MAYBE: Design as config-driven factory
- If TRULY NO: Proceed, but challenge assumption first

**Configuration extraction:**
- Extract all hardcoded values to config object
- Use theme system for colors, spacing, shadows
- Document breakpoint choices with comments

**Success criteria:**
- UI matches wireframes
- All styling uses theme system
- No hardcoded magic numbers
- Responsive (mobile + desktop)
- Loading states use `AppLoadingScreen`/`LoadingSpinner`

**⚠️ STOP HERE - Wait for approval before proceeding to Step 5**

---

## 🔌 STEP 5: Integration & Testing

**Task:** Wire up real APIs (if using mocks) and test end-to-end

**Deliverables:**
- [ ] Switch from mocks to real APIs
  - Update `[feature]Api.ts` to use real endpoints
  - Remove mock data imports

- [ ] End-to-end testing
  - [ ] [User flow 1]: [Expected outcome]
  - [ ] [User flow 2]: [Expected outcome]
  - [ ] [User flow 3]: [Expected outcome]

- [ ] Error handling
  - [ ] API errors display properly
  - [ ] Loading states show correctly
  - [ ] Empty states handled

**Success criteria:**
- All user flows work end-to-end
- No console errors
- Errors handled gracefully
- Loading states smooth
- Data refreshes correctly (Network-First automatic)

---

## ✅ Final Checklist

Before marking this feature complete:

### Code Quality
- [ ] No unused imports, variables, or functions
- [ ] No commented-out code
- [ ] All hardcoded values extracted to config
- [ ] Clean, readable code

### Compliance
- [ ] Factory-first architecture followed (if reusable)
- [ ] Imports from `@/shared/ui/mui` only
- [ ] Theme system used exclusively
- [ ] Hierarchical Redux pattern
- [ ] Loading components from shared library
- [ ] UI structure mirrors hierarchy

### Testing
- [ ] All user flows tested
- [ ] Mobile responsive verified
- [ ] Error states handled
- [ ] Loading states implemented

### Documentation
- [ ] Comments explain WHY, not WHAT
- [ ] Config objects documented
- [ ] Non-obvious constraints noted

---

## 🔗 Reference Links

- **API Contracts:** `integration.md` section [X]
- **Wireframes:** `[Link to wireframes if separate file]`
- **Similar Pattern:** `[Link to existing similar feature]`
- **Backend Status:** `NOW.md` → Integration Points

---

**Last Updated:** [Date]

**Remember:** Start small, get approval at each step, build incrementally!
```

---

## How to Use This Template

1. **Copy this template** for each new FE feature
2. **Fill in the brackets** `[like this]` with actual content
3. **Adjust steps** if feature is simpler/more complex
4. **Add/remove sections** as needed
5. **Always include approval gates** (⚠️ STOP HERE)
6. **Link to actual docs** in Required Reading section

---

## Example Usage

See `logs/weeks/` for examples of prompts created using this template.

---

**Template Version:** 1.0
**Last Updated:** 2025-10-22
