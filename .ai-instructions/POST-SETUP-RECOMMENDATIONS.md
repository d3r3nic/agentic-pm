# Post-Setup Recommendations

> **Purpose:** After onboarding completes, intelligently suggest missing documentation
> **When:** End of BOOTSTRAP-EXISTING-PROJECT Phase 4
> **How:** Analyze detected stack + existing docs, suggest specific improvements

---

## Intelligent Recommendations Based on Stack

### Analyze What's Missing

**Step 1: Check what documentation gaps exist**

From your detection in Phase 1, you know:
- ✅/❌ Frontend Claude.md
- ✅/❌ Backend Claude.md
- ✅/❌ Security documentation
- ✅/❌ API conventions
- ✅/❌ Deployment/DevOps docs
- ✅/❌ Testing patterns

**Step 2: Make SPECIFIC recommendations based on detected stack**

Not generic "create security docs" but:
"I see you use Amplify Auth + AWS Lambda.
 Consider documenting: token refresh patterns, Lambda auth middleware patterns"

---

## Recommendation Templates by Stack

### Frontend Security (if detected: React/Vue/Svelte)

**If missing `frontend/security-patterns.md`:**

```
📋 Recommended Documentation: Frontend Security

File: frontend/security-patterns.md
Why: You're using [React + Amplify Auth]. Document how agents should:
- Handle authentication tokens securely
- Implement token refresh logic
- Sanitize user inputs
- Prevent XSS attacks in [detected: Material-UI components]
- Manage sensitive data in Redux state

Detected patterns that should be documented:
- [If found Amplify]: Token storage and refresh patterns
- [If found Redux]: How to handle auth state
- [If found MUI]: XSS prevention in user-generated content

Estimated effort: 1-2 hours
Priority: High (security critical)
```

### Backend Security (if detected: Express/Fastify/NestJS)

**If missing `backend/security-patterns.md`:**

```
📋 Recommended Documentation: Backend Security

File: backend/security-patterns.md
Why: You're using [Express + Prisma + PostgreSQL]. Document:
- Input validation patterns (detected: Zod - document your schema patterns)
- SQL injection prevention (Prisma handles this, but document query patterns)
- Authentication middleware (detected: AWS Amplify - document token verification)
- Rate limiting and DDoS protection
- Sensitive data handling (PII, PHI if healthcare)

Detected patterns that should be documented:
- [If found Zod]: Standard validation schemas
- [If found Prisma]: Safe query patterns
- [If found Express middleware]: Auth flow and error handling

Estimated effort: 2-3 hours
Priority: High (security critical)
```

### API Conventions (if incomplete)

**If has some API docs but incomplete:**

```
📋 Recommended Documentation: API Conventions

File: backend/api-conventions.md (or add to existing docs)
Why: I found [ENDPOINT_CREATION_GUIDE.md] but it's missing:
- Error response formats (what does a 400 look like?)
- Validation error structures (how are Zod errors formatted?)
- Success response patterns (consistent { data, meta } format?)
- Pagination standards (limit/offset? cursor-based?)
- Filtering and sorting conventions

Detected from your code:
- [If found Zod]: You use Zod validation
- [If found error handlers]: You have error handling middleware
- Document: Standard error response format

Estimated effort: 1 hour
Priority: Medium (improves consistency)
```

### DevOps/Deployment (if detected: SST, Serverless, Docker)

**If missing deployment docs:**

```
📋 Recommended Documentation: Deployment Process

File: devops/deployment.md
Why: Detected [SST v3 + AWS Lambda]. Document:
- How to deploy (sst deploy command? CI/CD?)
- Environment variables setup (how to configure for prod?)
- Database migrations (Prisma migrate in Lambda?)
- Rollback procedures (if deploy fails?)
- Monitoring and logs (CloudWatch? Sentry?)

Detected infrastructure:
- [If found SST]: SST deployment commands
- [If found Prisma]: Migration strategy
- [If found AWS]: AWS service configuration

This is especially important for AI agents to understand
deployment impact when making infrastructure changes.

Estimated effort: 1-2 hours
Priority: Medium (aids agent understanding)
```

### Testing Patterns (if minimal tests detected)

**If tests exist but no testing docs:**

```
📋 Recommended Documentation: Testing Patterns

File: frontend/testing-patterns.md and/or backend/testing-patterns.md
Why: I see some tests but no documented testing approach.
Document for agents:
- What needs tests? (all components? critical paths only?)
- Testing libraries (detected: [Jest? Vitest? React Testing Library?])
- Mocking patterns (API mocks? Database mocks?)
- Coverage requirements (80%? critical paths only?)
- Test file naming and location conventions

Detected:
- [If found test files]: You have [N] test files
- [If found testing libs]: Using [Jest/Vitest/etc]
- Missing: Consistent testing approach for agents to follow

Estimated effort: 1 hour
Priority: Low-Medium (quality improvement)
```

---

## Present Recommendations to User

**After creating backlog in Phase 4, add:**

```
📋 Additional Recommendations (Based on Your Stack)

I analyzed your [React + TypeScript + Express + Prisma] stack and found
opportunities to improve agent performance:

[If missing frontend security docs:]
1. Frontend Security Patterns (High Priority)
   - Document: Auth token handling, input sanitization, XSS prevention
   - Why: You use Amplify Auth - agents need token refresh patterns
   - File: frontend/security-patterns.md
   - Effort: 1-2 hours

[If missing backend security docs:]
2. Backend Security Patterns (High Priority)
   - Document: Validation schemas, auth middleware, sensitive data handling
   - Why: You use Zod + Prisma - agents need standard patterns
   - File: backend/security-patterns.md
   - Effort: 2-3 hours

[If missing API conventions:]
3. API Response Conventions (Medium Priority)
   - Document: Error formats, validation error structures, pagination
   - Why: Ensures consistent API design across features
   - File: backend/api-conventions.md (or add to existing)
   - Effort: 1 hour

[If missing deployment docs:]
4. Deployment Process (Medium Priority)
   - Document: How to deploy, migrations, rollback procedures
   - Why: Detected SST - agents should understand deployment impact
   - File: devops/deployment.md
   - Effort: 1-2 hours

These are OPTIONAL but highly recommended for:
✅ Better code quality
✅ Consistent security practices
✅ Faster agent onboarding
✅ Reduced back-and-forth during tasks

Would you like me to:
A) Add these to documentation backlog (agents/backlog/documentation-tasks.md)
B) Skip for now (you can create them later)
C) Start building features immediately

Your choice!
```

---

## Future: Hardcoded Blueprints

**Future Enhancement** (log as TODO for framework development):

Create `.dev/blueprints/` with:

```
.dev/blueprints/
├── frontend-security-react.md (React-specific security patterns)
├── frontend-security-vue.md (Vue-specific security patterns)
├── backend-security-express.md (Express-specific security)
├── backend-security-fastapi.md (FastAPI-specific security)
├── api-conventions-rest.md (REST API standards)
├── api-conventions-graphql.md (GraphQL standards)
├── testing-patterns-frontend.md (Frontend testing best practices)
├── testing-patterns-backend.md (Backend testing best practices)
├── devops-aws-sst.md (SST deployment patterns)
├── devops-docker.md (Docker deployment patterns)
└── ...
```

**How AI would use them:**

```
User has React + Express
↓
AI: "I have security blueprints for React and Express!
     Would you like me to:
     1. Create tasks to adapt these blueprints for your project
     2. Show you the blueprints so you can customize them
     3. Skip for now"
```

This gives users a HEAD START on documentation with proven patterns.

---

## Implementation Priority

**Phase 1 (Now):** Progress narration + Basic recommendations
**Phase 2 (Soon):** Intelligent stack-specific recommendations
**Phase 3 (Future):** Hardcoded blueprints library

The goal: Make every recommendation ACTIONABLE and SPECIFIC to their stack!
