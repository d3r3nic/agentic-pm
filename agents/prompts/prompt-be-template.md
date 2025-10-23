# Backend Agent Prompt Template

> **Purpose:** Use this template to create clear, sequential prompts for Backend agents
>
> **Pattern:** Database → APIs → Testing, with approval gates

---

## Template Structure

```markdown
# [Feature Name] - Backend Implementation

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
- Frontend status: [Waiting for APIs / Building UI with mocks]
- Target integration: [Friday / Specific date]

---

## 📖 Required Reading (15-20 min)

Before starting, study these docs:

### Core Guides
- `/backend/src/ENDPOINT_CREATION_GUIDE.md`
- `/backend/src/SCHEMA_VALIDATION_GUIDE.md`
- `/backend/src/services/db/queries/README.md`

### Relevant Patterns
- [Link to similar endpoint implementation if applicable]
- [Link to specific security/validation pattern if needed]

**You're ready when you can answer:**
1. How do I create a new endpoint following the guide?
2. How do I validate requests using Zod schemas?
3. How do I query the database using query builders?

---

## 🗄️ STEP 1: Database Schema Changes

**Task:** Design and implement database changes needed for this feature

**Deliverables:**

### Schema Modifications
```prisma
// Add to prisma/schema.prisma

[Paste the actual schema changes needed]

// Example:
enum InvitationStatus {
  PENDING
  ACCEPTED
  EXPIRED
  REVOKED
}

model UserInvitation {
  id             String           @id @default(uuid()) @db.Uuid
  email          String           @db.Citext
  organizationId String           @db.Uuid
  // ... rest of fields
}
```

### Migration Steps
```bash
# 1. Run migration
npx prisma migrate dev --name [descriptive_migration_name]

# 2. Generate both clients (Mac + Linux for Lambda)
npm run db:generate:both
```

### Query Builder Updates
- [ ] Update existing query builder if modifying existing model
  - File: `/src/services/db/queries/[model-name].ts`
  - Add new relations/selects as needed

- [ ] Create new query builder if new model
  - File: `/src/services/db/queries/[new-model].ts`
  - Pattern: ONE FILE PER MODEL
  - Default query: No relations (minimal/fast)
  - Named queries: `withRelationName` for each relation

**Critical rules:**
- ✅ One file per model in query builders
- ✅ Update query builder when schema changes
- ✅ Always generate both Prisma clients (Mac + Linux)
- ❌ Don't write custom includes if query builder exists

**Success criteria:**
- Migration runs successfully
- Prisma clients generated (both platforms)
- Query builders updated/created
- Database changes verified

**⚠️ STOP HERE - Show migration SQL and schema changes, wait for approval**

---

## 🔐 STEP 2: Create Validation Schemas

**Task:** Define Zod schemas for request validation and sanitization

**Deliverables:**

### Create Schema File
```typescript
// /src/schemas/[domain].ts

import { z } from 'zod';
import { safeString, emailSchema } from './common';

export const [feature]RequestSchema = z.object({
  [field]: safeString().max(100),
  email: emailSchema,
  // ... other fields
});

export type [Feature]Request = z.infer<typeof [feature]RequestSchema>;
```

### Schema Guidelines
- Use `safeString()` for text fields (XSS protection)
- Use `emailSchema` for emails
- Use `phoneSchema` for phone numbers
- Set reasonable max lengths (prevent DoS)
- Document any special validation rules

**Critical rules:**
- ✅ ONE LINE validates entire request: `validateRequest(event.body, schema)`
- ✅ Automatic XSS protection, HTML escaping, length limits
- ✅ Returns ALL errors at once (better UX)
- ❌ Don't manually parse JSON or validate fields

**Success criteria:**
- Schema covers all request fields
- Validation includes security measures
- Types exported for use in handlers

**⚠️ STOP HERE - Show schemas, wait for approval**

---

## 🛣️ STEP 3: Define API Contracts

**Task:** Define exact request/response formats (for frontend coordination)

**Deliverables:**

### API Contract Document
Add to `integration.md`:

```markdown
### [Endpoint Number]. [Endpoint Name]

**Endpoint:** `[METHOD] /path/:param`
**Auth:** [Required (Role) / None (public)]

**Request:**
```json
{
  "field": "example value"
}
```

**Success Response ([status code]):**
```json
{
  "data": "example response"
}
```

**Error Responses:**
- `400` - [Error description]
- `401` - [Auth error]
- `404` - [Not found]
```

### Update Integration Status
In `integration.md`, add checkboxes:
- [ ] [METHOD] `/endpoint` - Not implemented

**Success criteria:**
- All endpoints documented in `integration.md`
- Request/response formats clear
- Error cases defined
- Frontend team can start mocking

**⚠️ STOP HERE - Share contracts with frontend, wait for approval**

---

## ⚙️ STEP 4: Implement API Endpoints

**Task:** Build the actual Lambda handlers following the endpoint creation guide

**For each endpoint:**

### Endpoint Structure
```typescript
// /src/functions/[domain]/[action].ts

import { requireAuth } from '../../utils/auth';
import { validateRequest } from '../../utils/schemaValidation';
import { [model]Queries } from '../../services/db/queries';
import { [feature]RequestSchema } from '../../schemas/[domain]';

export const handler = async (event) => {
  try {
    // 1. Authentication
    const claims = requireAuth(event);
    const userId = claims.sub;

    // 2. Facility context (if needed)
    const facilityId = event.headers['x-facility-id'];
    if (!facilityId) throw new ValidationError('x-facility-id required');

    // 3. Validation
    const data = validateRequest(event.body, [feature]RequestSchema);

    // 4. Authorization (in service layer)
    const result = await [service].action(userId, facilityId, data);

    // 5. Response
    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  } catch (error) {
    // Error handling
  }
};
```

### Service Layer
```typescript
// /src/services/[domain]/[feature]Service.ts

export class [Feature]Service {
  async action(userId: string, facilityId: string, data: [Type]) {
    // Business logic here
    // Use Prisma query builders
    // Authorization checks
    // Return data
  }
}
```

**Deliverables for this step:**
- [ ] Endpoint [1]: [Brief description]
  - Handler: `/src/functions/[path]/[file].ts`
  - Service: `/src/services/[path]/[file].ts`
  - Route in `sst.config.ts`

- [ ] Endpoint [2]: [Brief description]
  - Handler: `/src/functions/[path]/[file].ts`
  - Service: `/src/services/[path]/[file].ts`
  - Route in `sst.config.ts`

[... repeat for all endpoints ...]

**Critical rules:**
- ✅ Use `requireAuth()` for authentication
- ✅ Use `validateRequest()` for validation
- ✅ Use Prisma query builders (not custom includes)
- ✅ Get facilityId from `x-facility-id` header (not body)
- ✅ Use SST `link:` for resource access
- ❌ Don't proxy files through Lambda (use presigned URLs)

**Success criteria:**
- All endpoints implemented
- Business logic in service layer
- Handlers thin (just auth/validation/response)
- TypeScript types throughout

**⚠️ STOP HERE - Wait for approval before testing**

---

## 🧪 STEP 5: Testing with Postman/curl

**Task:** Test all endpoints to ensure they work correctly

**Deliverables:**

### Postman Collection (or curl scripts)
```bash
# Endpoint 1: [Name]
curl -X [METHOD] http://localhost:3000/api/[path] \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer [token]" \
  -d '{"field":"value"}'

# Endpoint 2: [Name]
curl -X [METHOD] http://localhost:3000/api/[path] \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer [token]" \
  -d '{"field":"value"}'

[... all endpoints ...]
```

### Test Cases
- [ ] **Happy path:** All endpoints with valid data
  - Expected: Success responses match contracts

- [ ] **Validation errors:** Invalid data
  - Expected: 400 errors with helpful messages

- [ ] **Auth errors:** Missing/invalid token
  - Expected: 401 errors

- [ ] **Not found:** Invalid IDs
  - Expected: 404 errors

- [ ] **End-to-end flow:** Complete user journey
  - Example for invitations: Send → Validate → Accept → List → Approve
  - Expected: Full flow works, data persists correctly

**Success criteria:**
- All endpoints respond correctly
- Validation catches invalid data
- Auth works properly
- Error messages helpful
- End-to-end flow completes

**⚠️ STOP HERE - Share test results, wait for approval**

---

## 🔄 STEP 6: Update Integration Status

**Task:** Mark APIs as ready in integration tracking

**Deliverables:**
- [ ] Update `integration.md`
  - Mark endpoints as "✅ Implemented"
  - Add any notes about usage

- [ ] Update `NOW.md`
  - Mark backend tasks as complete
  - Note APIs ready for frontend integration

- [ ] Notify frontend team (via Manager AI)
  - APIs ready for integration
  - Base URL for testing
  - Any special considerations

**Success criteria:**
- Documentation updated
- Frontend team notified
- Ready for Friday integration

---

## ✅ Final Checklist

Before marking this feature complete:

### Code Quality
- [ ] No unused imports, variables, or functions
- [ ] No commented-out code
- [ ] Handlers are thin (business logic in services)
- [ ] Clean, readable code

### Compliance
- [ ] Using Prisma query builders (not custom includes)
- [ ] Using Zod schemas for validation
- [ ] Using `requireAuth()` for auth
- [ ] Using `x-facility-id` header for facility context
- [ ] Using SST `link:` for resources
- [ ] Migrations run successfully
- [ ] Both Prisma clients generated

### Testing
- [ ] All endpoints tested with Postman/curl
- [ ] Happy paths work
- [ ] Error cases handled
- [ ] End-to-end flow validated

### Documentation
- [ ] API contracts in `integration.md`
- [ ] Comments explain WHY, not WHAT
- [ ] Non-obvious business rules documented

### Security
- [ ] Input validation comprehensive
- [ ] XSS protection via schemas
- [ ] Authorization checks in place
- [ ] No sensitive data in logs

---

## 🔗 Reference Links

- **API Contracts:** `integration.md` section [X]
- **Frontend Status:** `NOW.md` → Integration Points
- **Similar Endpoint:** `[Link to existing similar implementation]`

---

**Last Updated:** [Date]

**Remember:** Database first, contracts shared, APIs implemented, thoroughly tested!
```

---

## How to Use This Template

1. **Copy this template** for each new BE feature
2. **Fill in the brackets** `[like this]` with actual content
3. **Adjust steps** if feature is simpler/more complex
4. **Always include approval gates** (⚠️ STOP HERE)
5. **Link to actual implementation guides**
6. **Share API contracts early** (so FE can start mocking)

---

## Example Usage

See `logs/weeks/` for examples of prompts created using this template.

---

**Template Version:** 1.0
**Last Updated:** 2025-10-22
