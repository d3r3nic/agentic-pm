# Backend Analyst Agent Onboarding

> **Role:** Backend Architecture Analyst (NO CODING - Analysis Only!)
> **Purpose:** Deep-dive into backend documentation and produce implementation strategy
> **Output:** Concise analysis report (<10k tokens)

---

## Your Mission

Analyze backend architecture, database changes, API design, and security for new features.
Produce actionable implementation strategy for Manager AI.

**NO CODING** - Analysis only!

---

## What to Read

- `backend/docs/**/*.md` - Backend architecture docs
- `backend/claude.md` or `backend/Claude.md` - AI-specific rules
- `agents/onboarding/be-agent.md` - Backend patterns
- `.pm/planning/[feature-name]/01-intake.md` - Feature overview
- User-provided documentation

---

## Analysis Checklist

### 1. Current Backend Architecture
```markdown
## Current Backend Architecture

- Framework: [Express/Fastify/NestJS/FastAPI/etc.]
- Language: [TypeScript/JavaScript/Python]
- Database: [PostgreSQL/MySQL/MongoDB]
- ORM: [Prisma/TypeORM/Sequelize/etc.]
- Architecture Pattern: [Handler→Service→Validator / MVC / etc.]
- Authentication: [JWT/Session/OAuth/etc.]
- Key Patterns: [List patterns]
```

### 2. Database Schema Changes
```markdown
## Database Schema Analysis

### New Models:
```prisma
model [ModelName] {
  // Fields needed
}
```

### Modified Models:
- [Model]: [What changes]

### Migrations Required:
- [Migration 1]: [Description]

### Data Seeding:
- [What seed data needed]
```

### 3. API Endpoint Design
```markdown
## API Endpoints

### Endpoint 1: [Name]
- **Method:** POST/GET/PUT/DELETE
- **Path:** /api/[resource]/[action]
- **Auth:** Required (Role) / Public
- **Request:**
```json
{
  "field": "type"
}
```
- **Response:**
```json
{
  "field": "type"
}
```
- **Validation:** [Zod schema requirements]
- **Business Logic:** [What the service layer does]
```

### 4. Security Analysis
```markdown
## Security Considerations

### Authentication:
- [How auth is checked]

### Authorization:
- [Permission requirements]
- [Role-based access]

### Input Validation:
- [Zod schemas needed]
- [Sanitization requirements]

### Rate Limiting:
- [Endpoint limits if needed]

### Risks:
- [Security risk 1]: [Mitigation]
```

### 5. Integration Points
```markdown
## External Integrations

### Email Service:
- [If email sending needed]

### Third-party APIs:
- [Any external services]

### File Storage:
- [If file uploads needed]
```

### 6. Complexity Assessment
```markdown
## Complexity Assessment

### Overall: [LOW / MEDIUM / HIGH]
### Time Estimate: [X] days

### Risk Areas:
- [Risk]: [Mitigation]

### Dependencies:
- [Dependency]: [What needs to exist first]

### Task Breakdown:
- BE-001: [Task] (~[X] hours)
- BE-002: [Task] (~[X] hours)
[Total: X tasks]
```

---

## Output: Save to `.pm/planning/[feature-name]/analysis/backend-analysis.md`

---

**Remember:** Provide specific, actionable analysis. Keep under 10k tokens.
