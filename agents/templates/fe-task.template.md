# FE Task [NNN]: [Feature Name]

**Date:** [YYYY-MM-DD]
**Phase:** [Week N - Phase Name]
**Agent:** fe-implementor
**Status:** 🚧 In Progress

---

## 📋 AGENT INSTRUCTIONS

**Your onboarding:** Read `agents/onboarding/fe-agent.md` first (every task)

**Read these docs:**
- [/path/to/doc1.md] - [Why: architecture pattern needed]
- [/path/to/doc2.md] - [Why: specific feature implementation]
- [/frontend-dashboard/CLAUDE.md] - [Specific rules: factory-first, theme system, etc.]

**Task:**
[Brief description of what to build - 1-2 sentences]

**Implementation:**
- File: [path/to/main/file.tsx]
- Additional files: [list any other files needed]
- Pattern: [Factory / Component / Page / API integration / etc.]
- Config extraction: [If factory, describe config object location]

**Requirements:**
- [Specific requirement 1]
- [Specific requirement 2]
- [Specific requirement 3]

**Rules (Critical for this task):**
- Factory-first architecture (if reusable)
- No hardcoded values (extract to config)
- Use theme system (colors, spacing, shadows)
- Import from @/shared/ui/mui (not @mui/material)
- Use hierarchical Redux
- Use AppLoadingScreen / LoadingSpinner
- Clean code (no unused imports/vars/functions)

**Dependencies:**
- [Task file if this depends on another task]
- [API contract from docs/integration.template.md section X]
- [Any other prerequisites]

**Report here when done:**
- Files created/modified
- What was built
- Issues encountered (or None)

---

## 🤖 AGENT REPORT

**Status:** [⏳ Pending / 🚧 In Progress / ✅ Complete / ⚠️ Blocked / ❌ Failed]
**Completed:** [YYYY-MM-DD HH:MM or leave empty]

**Files Created/Modified:**
- [Leave empty - agent fills this]

**What Was Built:**
[Leave empty - agent fills this with implementation description]

**Issues:**
[Leave empty - agent fills this with "None" or list of issues]

---

## 📝 CASE LOG (Manager AI)

**Context:**
[Manager: Fill in why this task exists, how it fits into current phase]

**Dependencies:**
- Requires: [Task ID] - [Status emoji]
- Uses: [docs/integration.template.md section or other resource]
- Blocks: [Task ID] - [Brief description]

**Integration Strategy:**
[Manager: How does this integrate with other components/APIs?]

**Decision Made:**
[Manager: Any architectural or implementation decision made for this task]

**Next Steps:**
1. [After task complete, what's next]
2. [Call auditor? Move to next task? Update NOW.md?]

**Notes:**
[Manager: Any additional context, observations, or coordination notes]

---

## ✅ AUDIT REPORT

**Auditor:** [fe-auditor or leave empty if not yet audited]
**Audit Date:** [YYYY-MM-DD HH:MM or leave empty]
**Status:** [⏳ Not Audited / ✅ PASS / ⚠️ WARNINGS / ❌ FAIL]

**Checked:**
[Leave empty - auditor fills this with rule-by-rule check]

**Violations:**
[Leave empty - auditor fills this with violations or "None"]

**Warnings:**
[Leave empty - auditor fills this with warnings or "None"]

**Recommendations:**
[Leave empty - auditor fills this with recommendations or "None - clean implementation"]

---

**File Purpose:** Complete task specification + agent workspace + audit trail
**Manager AI:** Copy this template → Fill AGENT INSTRUCTIONS + CASE LOG → Save to agents/tasks/YYYY-MM-DD/fe-task-NNN.md
