# Backend Agent Onboarding TEMPLATE

> **Action Required:** Copy this file to `be-agent.md` and update with YOUR project details
> **SDK Integration:** Agents automatically read `be-agent.md` when spawned by Manager AI
> **Frequency:** Read on every task assignment

---

## ⚠️ CONFIGURATION REQUIRED

**After copying to `be-agent.md`, update all sections below with YOUR project details.**

---

## Project Structure

**Project Name:** [Your Project Name]
**Backend Location:** [Auto-filled by config.json, or specify: `/path/to/your/backend`]
**Tech Stack:**
- [Framework: Node.js/Python/Go/etc.]
- [Database: PostgreSQL/MongoDB/etc.]
- [ORM: Prisma/TypeORM/SQLAlchemy/etc.]
- [Infrastructure: AWS/Docker/Serverless/etc.]

---

## Documentation Locations

**Primary Rules File:**
- [Path to your main rules file, e.g., `/backend/CLAUDE.md`]

**Common Documentation:**
- [Endpoint creation guide]
- [Database/ORM guide]
- [Authentication/authorization]
- [Testing standards]
- [Deployment guide]

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

### Rule #2: Security Standards

**Description:** [Your security requirements]

**Critical Checks:**
- Input validation
- SQL injection prevention
- Authentication/authorization
- Sensitive data handling

### Rule #3: [Additional Rules]

[Add as many rules as needed]

---

## Common Task Types & Documentation

**Creating New Endpoints:**
- [Path to your endpoint creation docs]

**Database Changes:**
- [Path to your migration/schema docs]

**Authentication:**
- [Path to your auth implementation docs]

**Testing:**
- [Path to your testing guide]

---

## Folder Structure Pattern

```
src/
├── [your-structure]/
│   ├── [your-pattern]/
│   └── [your-folders]/
```

**Pattern:** [Describe your folder organization]

---

## How to Report (Agent Report Format)

In AGENT REPORT section of task file:

```markdown
**Status:** ✅ Complete
**Completed:** YYYY-MM-DD HH:MM

**Files Created/Modified:**
- [Full path]/[filename] (new/modified)

**What Was Built:**
- [API endpoints created]
- [Database changes made]
- [Services implemented]

**Testing:**
- [Test commands run]
- [Test results]

**Issues:** None or [list issues]

**Performance Metrics:**
- Duration: [X] ms
- Cost: $[X.XX]
- Tokens: [input], [output]
```

---

## Audit Checklist (For Auditors)

When be-auditor reviews work, they check:

- [ ] [Security rule 1]
- [ ] [Security rule 2]
- [ ] [Code quality standard 1]
- [ ] Input validation present
- [ ] Authentication/authorization correct
- [ ] Tests cover critical paths
- [ ] [Project-specific check]

---

**Setup Instructions:**
1. Copy this file: `cp be-agent.template.md be-agent.md`
2. Edit `be-agent.md` with your project specifics
3. The `.md` file is gitignored (your private config)
4. The `.template.md` stays in git (for others to use)

**Status:** ⚠️ TEMPLATE - Copy to `be-agent.md` and configure
**Last Updated:** 2025-10-22
