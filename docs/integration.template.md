# API Integration & Contracts

> **Purpose:** Single source of truth for FE ↔ BE contracts
> **For:** Frontend (what to mock), Backend (what to implement), Manager AI (coordination)
> **Manager AI:** References this when creating FE/BE task files to ensure alignment

---

## 🎯 Integration Strategy

### Parallel Development Pattern
1. **Backend:** Defines API contract, shares with FE
2. **Frontend:** Mocks API responses, builds UI
3. **Integration:** Wire up real APIs (typically end of phase)
4. **Testing:** End-to-end validation

### Cache Strategy
- **Frontend uses Network-First caching** (automatic)
- No manual cache invalidation in most cases
- Data always fresh when online

---

## Phase 1: [Feature Name] API Contracts

**Status:** 🔲 Not Implemented

### 1. [Endpoint Name]

**Endpoint:** `[METHOD] /path/:param`
**Auth:** [Required (Role) / None (public)]

**Request:**
```json
{
  "field": "example value",
  "field2": "example value"
}
```

**Success Response ([status code]):**
```json
{
  "id": "uuid",
  "field": "value",
  "createdAt": "2025-10-22T12:00:00Z"
}
```

**Error Responses:**
- `400` - [Validation error description]
- `401` - [Auth error description]
- `404` - [Not found description]

---

### 2. [Another Endpoint]

[Same structure as above]

---

## 📝 Frontend Mocking Example

**For Frontend developers:** Use these mock responses while BE builds APIs

```typescript
// src/api/mocks/example.ts

export const mockData = {
  id: "uuid-example",
  field: "mock value",
  createdAt: "2025-10-22T12:00:00Z"
};

// In your component (toggle for dev):
const useMockAPI = true; // Set to false when BE ready

const fetchData = async () => {
  if (useMockAPI) {
    return mockData;
  }
  return await api.get('/actual/endpoint');
};
```

---

## 🧪 Backend Testing Example

**For Backend developers:** Test with Postman/curl

```bash
# Example endpoint test
curl -X POST http://localhost:3000/api/endpoint \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN" \
  -d '{"field":"value"}'
```

---

## 📊 API Implementation Status

### Phase 1: [Feature Name]
- [ ] [METHOD] `/endpoint1` - Not implemented
- [ ] [METHOD] `/endpoint2` - Not implemented
- [ ] [METHOD] `/endpoint3` - Not implemented

### Phase 2: [Feature Name]
- Will be added when Phase 2 begins

---

**Template Instructions:** Add your actual API contracts here. Manager AI updates status as APIs are implemented.
