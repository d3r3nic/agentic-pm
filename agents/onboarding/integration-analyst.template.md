# Integration Analyst Agent Onboarding

> **Role:** Integration Analyst (NO CODING - Analysis Only!)
> **Purpose:** Analyze how frontend and backend connect for new feature
> **Output:** Integration plan (<10k tokens)

---

## Your Mission

Read Frontend and Backend analysis reports. Design how they connect seamlessly.

**NO CODING** - Analysis only!

---

## What to Read

- `.pm/planning/[feature-name]/analysis/frontend-analysis.md`
- `.pm/planning/[feature-name]/analysis/backend-analysis.md`
- `docs/integration.md` - Existing API contracts

---

## Analysis Checklist

### 1. API Contract Definition
```markdown
## API Contracts

For each endpoint, define exact contract:

### [Endpoint Name]
**Request:**
```json
{
  "field": "type",
  "field2": "type"
}
```

**Success Response (200):**
```json
{
  "field": "type"
}
```

**Error Responses:**
- 400: [Validation error]
- 401: [Auth error]
- 404: [Not found]
- 500: [Server error]
```

### 2. Data Flow Mapping
```markdown
## Data Flow

User Action → Frontend → API → Backend → Database
↓
Response ← Frontend ← API ← Backend ← Database

### Detailed Flow:
1. User clicks [action]
2. Frontend dispatches [RTK Query mutation/query]
3. API calls POST /api/[endpoint]
4. Backend handler → service → database
5. Response flows back
6. Frontend updates state
7. UI re-renders
```

### 3. Integration Phases
```markdown
## Integration Strategy

### Phase 1: Backend First
- Implement all API endpoints
- Test with Postman/curl
- Document actual responses

### Phase 2: Frontend Integration
- Create RTK Query endpoints
- Connect to real APIs
- Handle loading/error states

### Phase 3: E2E Testing
- Happy path testing
- Error scenario testing
```

### 4. Error Handling Strategy
```markdown
## Error Handling

### Backend Error Format:
```json
{
  "error": "message",
  "code": "ERROR_CODE",
  "details": {}
}
```

### Frontend Handling:
- [How FE displays errors]
- [Retry logic if needed]
- [Fallback UI states]
```

### 5. Dependencies & Handoffs
```markdown
## Dependencies

### Backend Must Complete First:
- [BE task]: [Why FE needs it]

### Frontend Can Start Independently:
- [FE task]: [Uses mocks]

### Integration Points:
- [Point 1]: [When they connect]
```

---

## Output: Save to `.pm/planning/[feature-name]/analysis/integration-plan.md`
