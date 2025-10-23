# BE Task [NNN]: [Feature Name]

**Date:** [YYYY-MM-DD]
**Phase:** [Week N - Phase Name]
**Agent:** be-implementor
**Status:** 🚧 In Progress

---

## 📋 AGENT INSTRUCTIONS

**Your onboarding:** Read `agents/onboarding/be-agent.md` first (every task)

**Read these docs:**
- [/backend/src/ENDPOINT_CREATION_GUIDE.md] - [Why: how to create endpoints]
- [/backend/src/SCHEMA_VALIDATION_GUIDE.md] - [Why: validation patterns]
- [/backend/src/services/db/queries/README.md] - [Why: query builder usage]
- [/backend/CLAUDE.md] - [Specific rules: query builders, schemas, auth, etc.]

**Task:**
[Brief description of what to build - 1-2 sentences]

**Database Changes:**
```prisma
[Paste Prisma schema changes needed, or "None" if no schema changes]
```

**Migration:**
```bash
npx prisma migrate dev --name [migration_name]
npm run db:generate:both
```

**API Endpoints:**
- `[METHOD] /path/:param` - [Description]
- `[METHOD] /path/:param` - [Description]

**API Contracts:**
See `docs/integration.template.md` section [X] for exact request/response formats

**Implementation:**
- Handlers: [/backend/src/functions/domain/action.ts]
- Services: [/backend/src/services/domain/Service.ts]
- Schemas: [/backend/src/schemas/domain.ts]
- Query builders: [Update or create in /backend/src/services/db/queries/]

**Requirements:**
- [Specific requirement 1]
- [Specific requirement 2]
- [Specific requirement 3]

**Rules (Critical for this task):**
- Use Prisma query builders (not custom includes)
- Use Zod schemas via validateRequest() (not manual parsing)
- Use requireAuth() for authentication
- Get facilityId from x-facility-id header (not body)
- Use SST link: for resource access
- File uploads via presigned URLs (not proxying)
- Test with Postman/curl before marking complete

**Testing:**
Test these scenarios:
- Happy path with valid data
- Validation errors with invalid data
- Auth errors with missing/invalid token
- Not found errors with invalid IDs
- [End-to-end flow if multi-endpoint]

**Dependencies:**
- [Task file if this depends on another task]
- [Any other prerequisites]

**Report here when done:**
- Files created/modified
- Database changes made
- What was built
- Testing results
- Issues encountered (or None)

---

## 🤖 AGENT REPORT

**Status:** [⏳ Pending / 🚧 In Progress / ✅ Complete / ⚠️ Blocked / ❌ Failed]
**Completed:** [YYYY-MM-DD HH:MM or leave empty]

**Files Created/Modified:**
- [Leave empty - agent fills this]

**What Was Built:**
[Leave empty - agent fills this with:
- API endpoints created
- Database changes made
- Services/schemas created
- Key decisions made]

**Testing:**
[Leave empty - agent fills this with:
- Postman/curl commands tested
- Test results (happy path, validation, auth, not found)
- End-to-end flow results]

**Issues:**
[Leave empty - agent fills this with "None" or list of issues]

---

## 📝 CASE LOG (Manager AI)

**Context:**
[Manager: Fill in why this task exists, how it fits into current phase]

**Dependencies:**
- Requires: [Task ID] - [Status emoji]
- Blocks: [FE Task ID - waiting for these APIs]
- Updates: [docs/integration.template.md - mark APIs as implemented]

**Integration Strategy:**
[Manager: How does this integrate with FE? When will FE wire up these APIs?]

**Decision Made:**
[Manager: Any architectural or implementation decision made for this task]

**Next Steps:**
1. [After task complete: call auditor, update integration.md, notify FE]
2. [What comes next in the sequence]

**Notes:**
[Manager: Any additional context, observations, or coordination notes]

---

## ✅ AUDIT REPORT

**Auditor:** [be-auditor or leave empty if not yet audited]
**Audit Date:** [YYYY-MM-DD HH:MM or leave empty]
**Status:** [⏳ Not Audited / ✅ PASS / ⚠️ WARNINGS / ❌ FAIL]

**Checked:**
[Leave empty - auditor fills this with:
- Prisma query builders used
- Zod schemas used
- requireAuth() used
- x-facility-id header (not body)
- SST link: used
- File handling correct
- Testing evidence
- Security (validation, auth, XSS, SQL injection)]

**Violations:**
[Leave empty - auditor fills this with violations or "None"]

**Security Concerns:**
[Leave empty - auditor fills this with security issues or "None"]

**Warnings:**
[Leave empty - auditor fills this with warnings or "None"]

**Recommendations:**
[Leave empty - auditor fills this with recommendations or "None - clean implementation"]

---

**File Purpose:** Complete task specification + agent workspace + audit trail
**Manager AI:** Copy this template → Fill AGENT INSTRUCTIONS + CASE LOG → Save to agents/tasks/YYYY-MM-DD/be-task-NNN.md
