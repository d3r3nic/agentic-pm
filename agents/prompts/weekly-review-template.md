# Weekly Review Template

> **Purpose:** Use this template to create weekly completion logs in `logs/weeks/`
>
> **Filename format:** `week-NN-phase-name.md` (e.g., `week-01-user-invitations.md`)

---

## Template Structure

```markdown
# Week [N]: [Phase Name]

**Date Completed:** [YYYY-MM-DD]
**Phase:** [Phase Name] (Week [N] of [Total])
**Status:** ✅ Complete / 🚧 In Progress / ⚠️ Blocked

---

## 🎯 Week Goal

[What was this week supposed to accomplish? 1-2 sentences]

---

## ✅ What Was Built

### Backend
**Deliverables:**
- ✅ [Deliverable 1] - [Brief description]
  - Impact: [Why this matters]

- ✅ [Deliverable 2] - [Brief description]
  - Impact: [Why this matters]

- ✅ [Deliverable 3] - [Brief description]
  - Impact: [Why this matters]

**APIs Implemented:**
- ✅ `[METHOD] /endpoint1` - [What it does]
- ✅ `[METHOD] /endpoint2` - [What it does]
- ✅ `[METHOD] /endpoint3` - [What it does]

**Database Changes:**
- [Schema changes made]
- [Migrations run]

---

### Frontend
**Deliverables:**
- ✅ [Deliverable 1] - [Brief description]
  - Impact: [Why this matters]

- ✅ [Deliverable 2] - [Brief description]
  - Impact: [Why this matters]

- ✅ [Deliverable 3] - [Brief description]
  - Impact: [Why this matters]

**Pages/Features Created:**
- ✅ `/path/to/page1` - [What it does]
- ✅ `/path/to/page2` - [What it does]
- ✅ Component: `[ComponentName]` - [Purpose]

**Patterns Established:**
- [New reusable pattern created, if any]
- [Factory/config pattern used]

---

### Integration
**How FE ↔ BE came together:**
- ✅ [Integration point 1]
  - Timeline: [When it happened - Mon-Thu mocks, Fri real APIs]
  - Outcome: [What works now]

- ✅ [Integration point 2]
  - Timeline: [When it happened]
  - Outcome: [What works now]

**End-to-End Flows Validated:**
- ✅ [User flow 1]: [Step 1 → Step 2 → Result]
- ✅ [User flow 2]: [Step 1 → Step 2 → Result]

---

## 🚧 Blockers Encountered & Resolved

### Blocker 1: [Brief Title]
**Issue:** [What was blocking progress]
**Impact:** [How it affected timeline/scope]
**Resolution:** [How it was resolved]
**Learning:** [What we learned]

### Blocker 2: [Brief Title]
**Issue:** [What was blocking progress]
**Impact:** [How it affected timeline/scope]
**Resolution:** [How it was resolved]
**Learning:** [What we learned]

---

## 📊 Metrics & Performance

**Lines of Code:**
- Backend: ~[N] LOC
- Frontend: ~[N] LOC

**API Endpoints:** [N] created
**Database Tables:** [N] added/modified
**Components:** [N] created

**Time Breakdown:**
- Planning/design: [N]%
- Implementation: [N]%
- Testing/integration: [N]%
- Debugging: [N]%

---

## 💡 Key Learnings

### What Worked Well ✅
1. [Something that went smoothly]
   - Why it worked: [Explanation]

2. [Another success]
   - Why it worked: [Explanation]

### What Could Improve ⚠️
1. [Something that was challenging]
   - Why it was hard: [Explanation]
   - How to improve: [Actionable suggestion]

2. [Another challenge]
   - Why it was hard: [Explanation]
   - How to improve: [Actionable suggestion]

### Patterns/Techniques Discovered 🔍
- [New pattern we established]
- [Technique that saved time]
- [Architectural decision that paid off]

---

## 🎓 Architecture & Design Decisions

**Decisions Made This Week:**
1. **[Decision Title]**
   - Context: [Why we faced this choice]
   - Options considered: [A, B, C]
   - Choice: [What we chose]
   - Rationale: [Why we chose it]
   - Impact: [How it affects future work]
   - See: `logs/decisions/[date]-[name].md` for full details

2. **[Decision Title]**
   - [Same structure as above]

---

## 🧪 Testing & Quality

**Test Coverage:**
- Backend: [Unit tests / Integration tests / E2E tests]
- Frontend: [Component tests / Integration tests / E2E tests]

**Quality Checks:**
- ✅ All code follows project standards
- ✅ No hardcoded values (FE using theme system)
- ✅ Backend using query builders and schemas
- ✅ Factory-first architecture followed (FE)
- ✅ Security measures in place (validation, auth)

**Bugs Found & Fixed:**
- [Bug 1]: [Description and fix]
- [Bug 2]: [Description and fix]

---

## 📸 Screenshots / Demos

[If applicable, add screenshots of UI or describe visual outcomes]

**Before:**
- [Description or screenshot]

**After:**
- [Description or screenshot]

---

## 📅 Next Week Preview

**Week [N+1] Focus:** [What's next]

**Planned Deliverables:**
- [ ] Backend: [Next major task]
- [ ] Frontend: [Next major task]
- [ ] Integration: [What needs to connect]

**Dependency on This Week:**
- [How next week builds on this week]
- [What from this week is prerequisite]

---

## 🔗 Related Documentation

- **Roadmap Status:** See `ROADMAP.md` - Week [N] marked complete
- **Current Status:** See `NOW.md` - Updated for Week [N+1]
- **API Contracts:** See `integration.md` - [Relevant section]
- **Decisions:** See `logs/decisions/[date]-*.md`

---

## 👥 Contributors

**Roles This Week:**
- **Manager AI:** [Coordination, prompting, tracking]
- **Frontend Agent:** [Implementation of X, Y, Z]
- **Backend Agent:** [Implementation of A, B, C]
- **Owner:** [Approvals, direction, key decisions]

---

## ✅ Success Criteria Review

**Original goals:**
- ✅ [Goal 1] - ACHIEVED
- ✅ [Goal 2] - ACHIEVED
- ⚠️ [Goal 3] - PARTIAL (reason: [X])
- ❌ [Goal 4] - NOT ACHIEVED (moved to next week)

**Overall:** [Met / Partially met / Not met]

---

**Completion Status:** [100% / X%]
**Ready for Next Week:** [Yes / No - blocker: X]

---

**Logged by:** [Manager AI / Owner name]
**Date Logged:** [YYYY-MM-DD]
```

---

## How to Use This Template

1. **Copy at end of each week** (Friday or after integration complete)
2. **Fill in all sections** honestly (wins and challenges)
3. **Save to** `logs/weeks/week-NN-phase-name.md`
4. **Link from** `NOW.md` and `ROADMAP.md`
5. **Use for** retrospectives and pattern identification

---

## Example

See actual weekly logs in `logs/weeks/` folder once project begins.

---

**Template Version:** 1.0
**Last Updated:** 2025-10-22
