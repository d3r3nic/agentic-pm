# MASTER PLAN: [Feature Name]

**Created:** [YYYY-MM-DD]
**Status:** PLANNING
**Project Philosophy:** [Enterprise-Grade / Production-Ready / MVP]
**Complexity:** [SMALL / MEDIUM / LARGE / EXTRA-LARGE]

---

## 📋 Executive Summary

**Feature Description:**
[2-3 paragraphs describing what the feature does and why it's needed]

**Domains Involved:**
- [ ] Frontend
- [ ] Backend
- [ ] Database
- [ ] Integration
- [ ] Security
- [ ] Performance
- [ ] Other: [specify]

**Timeline Estimate:** [X] weeks
**Total Tasks:** [X] tasks ([Y] FE, [Z] BE, [W] Integration)
**Context Windows Needed:** [X] contexts

---

## 🏗️ Architecture Decisions

### Frontend Architecture

**Key Decisions:**
- [Decision 1]: [Rationale]
- [Decision 2]: [Rationale]

**Component Structure:**
```
[Show planned component hierarchy]
```

**State Management:**
- [How state will be managed - Redux, RTK Query, etc.]

**API Integration:**
- [How FE will call BE - RTK Query endpoints, etc.]

---

### Backend Architecture

**Key Decisions:**
- [Decision 1]: [Rationale]
- [Decision 2]: [Rationale]

**Database Changes:**
```prisma
[Show Prisma schema changes if applicable]
```

**API Endpoints:**
```
[List planned endpoints]
POST /api/[endpoint]
GET /api/[endpoint]
```

**Security Considerations:**
- [Auth requirements]
- [Validation requirements]
- [Permission requirements]

---

### Integration Architecture

**Key Decisions:**
- [Decision 1]: [Rationale]
- [Decision 2]: [Rationale]

**API Contracts:**
```json
[Show request/response contracts]
```

**Data Flow:**
```
[Describe how data flows through the system]
User → Frontend → API → Backend → Database
```

---

## 📅 Implementation Phases

### Phase 1: [Phase Name] (Week [X], Days [Y-Z])

**Purpose:** [What this phase accomplishes]

**Context Required:**
- Document: [specific doc] (~[X]k tokens)
- Document: [specific doc] (~[X]k tokens)
- Total: ~[X]k tokens (within budget)

**Dependencies:** None / [List dependencies]

**Tasks:**
- **[DOMAIN]-001:** [Task description]
  - Estimate: [X hours/days]
  - Owner: [FE/BE] Agent
  - Deliverable: [What's produced]

- **[DOMAIN]-002:** [Task description]
  - Estimate: [X hours/days]
  - Owner: [FE/BE] Agent
  - Deliverable: [What's produced]

**Phase Deliverable:**
[What's completed and ready after this phase]

**Checkpoint Criteria:**
- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [User Approval Required: Yes/No]

---

### Phase 2: [Phase Name] (Week [X], Days [Y-Z])

[Same structure as Phase 1]

---

### Phase 3: [Phase Name] (Week [X], Days [Y-Z])

[Same structure as Phase 1]

---

## 📝 Complete Task List

### Frontend Tasks (Total: [X])

| Task ID | Description | Estimate | Phase | Status | Notes |
|---------|-------------|----------|-------|--------|-------|
| FE-001 | [Description] | [Time] | 1 | NOT_STARTED | |
| FE-002 | [Description] | [Time] | 1 | NOT_STARTED | |
| FE-003 | [Description] | [Time] | 2 | NOT_STARTED | |

### Backend Tasks (Total: [X])

| Task ID | Description | Estimate | Phase | Status | Notes |
|---------|-------------|----------|-------|--------|-------|
| BE-001 | [Description] | [Time] | 1 | NOT_STARTED | |
| BE-002 | [Description] | [Time] | 1 | NOT_STARTED | |
| BE-003 | [Description] | [Time] | 2 | NOT_STARTED | |

### Integration Tasks (Total: [X])

| Task ID | Description | Estimate | Phase | Status | Notes |
|---------|-------------|----------|-------|--------|-------|
| INT-001 | [Description] | [Time] | 3 | NOT_STARTED | |
| INT-002 | [Description] | [Time] | 3 | NOT_STARTED | |

---

## 🧭 Context Management Strategy

### Context 1: Planning Phase (COMPLETE)
- **Purpose:** Create this master plan
- **Docs Used:** Analyst reports only (~20k tokens)
- **Output:** This document
- **Date:** [Date]

### Context 2: Phase 1 Implementation
- **Purpose:** [Brief description]
- **Docs Needed:**
  - [Specific doc 1] (~[X]k tokens)
  - [Specific doc 2] (~[X]k tokens)
- **Token Budget:** ~[X]k tokens
- **Tasks:** [DOMAIN]-001 through [DOMAIN]-00X
- **Status:** NOT_STARTED

### Context 3: Phase 2 Implementation
- **Purpose:** [Brief description]
- **Docs Needed:**
  - [Specific doc 1] (~[X]k tokens)
  - [Specific doc 2] (~[X]k tokens)
- **Token Budget:** ~[X]k tokens
- **Tasks:** [DOMAIN]-00X through [DOMAIN]-00X
- **Status:** NOT_STARTED

[Continue for all contexts]

---

## 📊 Progress Tracking

| Phase | Status | Start Date | End Date | Tasks Complete | Notes |
|-------|--------|------------|----------|----------------|-------|
| Phase 1 | NOT_STARTED | - | - | 0/[X] | |
| Phase 2 | NOT_STARTED | - | - | 0/[X] | |
| Phase 3 | NOT_STARTED | - | - | 0/[X] | |

**Overall Progress:** 0/[X] tasks ([0]%)

---

## ✅ Checkpoints & Decision Gates

### After Phase 1:
- [ ] [Checkpoint criterion 1]
- [ ] [Checkpoint criterion 2]
- [ ] [Checkpoint criterion 3]
- **User Approval Required:** [Yes/No]
- **Expected Date:** [Date]

### After Phase 2:
- [ ] [Checkpoint criterion 1]
- [ ] [Checkpoint criterion 2]
- [ ] [Checkpoint criterion 3]
- **User Approval Required:** [Yes/No]
- **Expected Date:** [Date]

### After Phase 3 (Final):
- [ ] [Checkpoint criterion 1]
- [ ] [Checkpoint criterion 2]
- [ ] [Checkpoint criterion 3]
- [ ] All E2E tests passing
- [ ] User acceptance complete
- **User Approval Required:** Yes
- **Expected Date:** [Date]

---

## ⚠️ Risk Assessment

### High Risks

**Risk 1:** [Description]
- **Impact:** [High/Medium/Low]
- **Probability:** [High/Medium/Low]
- **Mitigation:** [How to prevent/handle]
- **Contingency:** [What to do if it happens]

**Risk 2:** [Description]
- **Impact:** [High/Medium/Low]
- **Probability:** [High/Medium/Low]
- **Mitigation:** [How to prevent/handle]
- **Contingency:** [What to do if it happens]

### Medium Risks

**Risk 1:** [Description]
- **Impact:** [High/Medium/Low]
- **Probability:** [High/Medium/Low]
- **Mitigation:** [How to prevent/handle]

---

## 🔙 Rollback Strategy

**If Phase 1 fails:**
1. [Rollback step 1]
2. [Rollback step 2]

**If Phase 2 fails:**
1. [Rollback step 1]
2. [Rollback step 2]

**Complete Rollback (Feature Removal):**
1. [Step 1]
2. [Step 2]
3. [Step 3]

---

## 📚 Documentation Strategy

**During Implementation:**
- [ ] Code comments for complex logic
- [ ] Component usage examples
- [ ] API endpoint documentation

**After Completion:**
- [ ] Feature documentation (user-facing)
- [ ] Architecture documentation (developer)
- [ ] Maintenance guide
- [ ] Future enhancement ideas

**Location:** `.pm/completed/[feature-name]/`

---

## 🔄 Context Recovery Instructions

**If context resets during implementation:**

1. **Load this master plan:**
   ```bash
   cat .pm/planning/[feature-name]/MASTER-PLAN.md
   ```

2. **Check progress table above** - Find last completed phase

3. **Load context for next phase** - See "Context Management Strategy" section

4. **Resume from checkpoint** - Continue with next task in sequence

**Everything needed to resume is in this document!**

---

## 📈 Success Metrics

**Feature will be considered successful when:**
- [ ] All tasks completed
- [ ] All checkpoints passed
- [ ] User acceptance received
- [ ] E2E tests passing
- [ ] Performance acceptable ([specific metrics])
- [ ] Security validated
- [ ] Documentation complete

**Post-Launch Metrics:**
- [Metric 1]: [Target]
- [Metric 2]: [Target]

---

## 🚀 Next Steps

**Immediate:**
1. Get user approval for this plan
2. Start Phase 1 implementation
3. Create task files for Phase 1

**After Phase 1:**
1. Review Phase 1 deliverable
2. Get user approval
3. Start Phase 2

**After Completion:**
1. User acceptance testing
2. Create feature documentation
3. Update NOW.md
4. Archive planning artifacts

---

## 📝 Change Log

| Date | Change | Reason | By |
|------|--------|--------|-----|
| [Date] | Plan created | Initial planning | Manager AI |
| [Date] | [Change] | [Reason] | Manager AI / User |

---

**Manager AI:** Remember to update progress, status, and dates as implementation proceeds!

**User:** Review this plan and approve before implementation begins.

---

**Status Legend:**
- `PLANNING` - Plan being created
- `APPROVED` - User approved, ready to start
- `IN_PROGRESS` - Currently implementing
- `BLOCKED` - Waiting on something
- `COMPLETE` - All done!
