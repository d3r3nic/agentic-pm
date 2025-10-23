# Auditor Guidelines TEMPLATE

> **Purpose:** Quality standards and audit criteria for FE/BE auditors
> **Action Required:** ⚠️ UPDATE THIS FILE with YOUR project's quality standards
> **SDK Integration:** Both `fe-auditor` and `be-auditor` agents read this file
> **Frequency:** Read before every audit task

---

## ⚠️ CONFIGURATION REQUIRED

**Before running audits, define YOUR project's quality standards below.**

This file is loaded by the SDK (`sdk/agents.ts`) and injected into auditor agents' system prompts. Clear criteria here = consistent, actionable audits.

---

## Audit Philosophy

**Purpose:** Ensure quality, not block progress
**Tone:** Constructive feedback, actionable recommendations
**Focus:** Critical issues first, minor improvements second

---

## Frontend Audit Criteria

### 1. Architecture Compliance
**What to Check:**
- [ ] [Your architecture pattern - e.g., Factory-first, Component-based, etc.]
- [ ] [Your specific pattern - UPDATE THIS]

**Pass Criteria:**
- [Define what "good" looks like]

**Fail Criteria:**
- [Define what's unacceptable]

### 2. Code Quality
**What to Check:**
- [ ] TypeScript types complete and accurate
- [ ] No unused imports, variables, or functions
- [ ] Proper error handling
- [ ] Clean, readable code

**Pass Criteria:**
- All variables typed, no `any` types (unless necessary)
- Clean code, follows project conventions

**Fail Criteria:**
- TypeScript errors present
- Widespread use of `any` type

### 3. Performance
**What to Check:**
- [ ] [Your caching strategy - e.g., Network-First with RTK Query]
- [ ] No unnecessary re-renders
- [ ] Proper memoization where needed

**Pass Criteria:**
- [Define performance standards]

**Fail Criteria:**
- [Define what's too slow/inefficient]

### 4. Accessibility
**What to Check:**
- [ ] Proper ARIA labels
- [ ] Keyboard navigation works
- [ ] Semantic HTML used

**Pass Criteria:**
- Basic accessibility standards met

---

## Backend Audit Criteria

### 1. Security ⚠️ CRITICAL
**What to Check:**
- [ ] Input validation on all endpoints
- [ ] No SQL injection vulnerabilities
- [ ] Authentication/authorization correct
- [ ] Sensitive data handling secure
- [ ] CORS configured properly

**Pass Criteria:**
- All inputs validated
- No obvious security vulnerabilities
- Auth checks in place

**Fail Criteria:** (Auto-fail audit)
- SQL injection possible
- Auth bypass possible
- Sensitive data exposed

### 2. API Design Quality
**What to Check:**
- [ ] RESTful conventions followed
- [ ] Proper HTTP status codes
- [ ] Error responses structured consistently
- [ ] Documentation clear

**Pass Criteria:**
- Standard REST patterns used
- Errors return useful messages

**Fail Criteria:**
- Inconsistent API design
- Poor error messages

### 3. Database Patterns
**What to Check:**
- [ ] [Your ORM patterns - e.g., Prisma query builders used]
- [ ] Transactions used where needed
- [ ] No N+1 query problems
- [ ] Indexes on queried fields

**Pass Criteria:**
- [Define good database practices]

**Fail Criteria:**
- Obvious performance issues
- N+1 queries in critical paths

### 4. Code Quality
**What to Check:**
- [ ] TypeScript types complete
- [ ] Business logic separated from routes
- [ ] Proper error handling
- [ ] Tests cover critical paths

**Pass Criteria:**
- Clean separation of concerns
- Critical functionality tested

---

## Scoring System

### Score Interpretation
- **9-10/10:** ✅ Excellent - No issues
- **7-8/10:** ✅ Pass - Minor improvements suggested
- **5-6/10:** ⚠️ Warnings - Needs improvements before production
- **0-4/10:** ❌ Fail - Critical issues must be fixed

### Scoring Weights
**Frontend:**
- Architecture Compliance: 30%
- Code Quality: 30%
- Performance: 20%
- Accessibility: 20%

**Backend:**
- Security: 40% (most important!)
- API Design: 25%
- Database Patterns: 20%
- Code Quality: 15%

---

## Audit Report Format

**Template for all audits:**

```markdown
## ✅ AUDIT REPORT

**Auditor:** [fe-auditor / be-auditor]
**Audit Date:** [YYYY-MM-DD HH:MM]
**Status:** [✅ PASS / ⚠️ WARNINGS / ❌ FAIL]
**Score:** [X/10]

**Checked:**
- [x] [Rule 1]: [Result]
- [x] [Rule 2]: [Result]
- [x] [Rule 3]: [Result]

**Violations:**
[List critical issues or "None"]

**Warnings:**
[List non-critical issues or "None"]

**Recommendations:**
[List improvements or "None - clean implementation"]
```

---

## Special Cases

### When to Auto-Fail
- **Backend:** SQL injection possible, auth bypass, data exposure
- **Frontend:** TypeScript errors, security vulnerabilities
- **Both:** Breaks project's critical rules

### When to Pass with Warnings
- Minor style issues
- Missing non-critical documentation
- Performance could be better (but acceptable)

### When to Request Fixes
- Critical security issues (backend)
- Breaks architecture patterns (frontend)
- Poor code quality that impacts maintainability

---

## How Auditors Use This File

### Frontend Auditor Process
1. Read task file and agent report
2. Review files that were created/modified
3. Check against criteria in this file
4. Score based on weights above
5. Write audit report with specific findings
6. Use `WriteAuditReport` tool to save findings

### Backend Auditor Process
1. Read task file and agent report (including test results)
2. Review code for security issues first (40% weight)
3. Check API design, database patterns, code quality
4. Score based on weights above
5. Write audit report with security focus
6. Use `WriteAuditReport` tool to save findings

---

**Template Instructions:** This is a TEMPLATE. Update with YOUR project's actual:
- Quality standards
- Architecture patterns
- Security requirements
- Performance thresholds
- What constitutes pass/fail for YOUR project
