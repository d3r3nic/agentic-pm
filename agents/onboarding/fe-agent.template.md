# Frontend Agent Onboarding TEMPLATE

> **Action Required:** Copy this file to `fe-agent.md` and update with YOUR project details
> **SDK Integration:** Agents automatically read `fe-agent.md` when spawned by Manager AI
> **Frequency:** Read on every task assignment

---

## ⚠️ CONFIGURATION REQUIRED

**After copying to `fe-agent.md`, update all sections below with YOUR project details.**

---

## Project Structure

**Project Name:** [Your Project Name]
**Frontend Location:** [Auto-filled by config.json, or specify: `/path/to/your/frontend`]
**Tech Stack:**
- [Framework: React/Vue/Angular/etc.]
- [State Management: Redux/Vuex/etc.]
- [UI Library: Material-UI/Ant Design/etc.]
- [Build Tool: Vite/Webpack/etc.]

---

## Documentation Locations

**Primary Rules File:**
- [Path to your main rules file, e.g., `/frontend/CLAUDE.md`]

**Architecture Documentation:**
- [Path to architecture docs]
- [Path to folder structure docs]
- [Path to state management docs]
- [Path to API integration docs]

**Implementation Guides:**
- [Path to feature templates]
- [Path to component guidelines]

---

## Critical Rules (MUST FOLLOW)

### Rule #1: [Your Most Important Rule]

**Description:** [What the rule is]

**Why:** [Why it matters]

**Pattern:**
```[language]
// ❌ BAD
[bad example]

// ✅ GOOD
[good example]
```

### Rule #2: [Your Second Rule]

**Description:** [What the rule is]

**Pattern:**
- ✅ [Do this]
- ❌ [Don't do this]

### Rule #3: [Additional Rules]

[Add as many rules as your project needs]

---

## Common Feature Types & Documentation

**Building Forms:**
- [Path to your form documentation]

**Building Tables/Lists:**
- [Path to your table/list documentation]

**API Integration:**
- [Path to your API integration docs]

**File Operations:**
- [Path to file handling docs, if applicable]

---

## Folder Structure Pattern

```
src/
├── [your-structure]/
│   ├── [your-pattern]/
│   └── [your-folders]/
```

**Pattern:** [Describe your folder organization strategy]

---

## How to Report (Agent Report Format)

In AGENT REPORT section of task file:

```markdown
**Status:** ✅ Complete
**Completed:** YYYY-MM-DD HH:MM

**Files Created/Modified:**
- [Full path]/[filename] (new/modified)

**What Was Built:**
- [Description of implementation]

**Issues:** None or [list issues]

**Performance Metrics:**
- Duration: [X] ms
- Cost: $[X.XX]
- Tokens: [input], [output]
```

---

## Audit Checklist (For Auditors)

When fe-auditor reviews work, they check:

- [ ] [Rule 1 compliance]
- [ ] [Rule 2 compliance]
- [ ] [Code quality standard 1]
- [ ] [Code quality standard 2]
- [ ] TypeScript types complete (no `any`)
- [ ] Clean code (no unused imports/vars)
- [ ] [Project-specific check]

---

**Setup Instructions:**
1. Copy this file: `cp fe-agent.template.md fe-agent.md`
2. Edit `fe-agent.md` with your project specifics
3. The `.md` file is gitignored (your private config)
4. The `.template.md` stays in git (for others to use)

**Status:** ⚠️ TEMPLATE - Copy to `fe-agent.md` and configure
**Last Updated:** 2025-10-22
