# SDK Advanced Features for PM Framework

**Date**: 2025-10-22
**Status**: Research Complete
**Source**: Official Anthropic Agent SDK Documentation

---

## Critical Discoveries

These SDK features dramatically enhance what our PM framework can do:

---

## 1. 🔥 Sessions: Long-Running Manager AI

### What It Enables
**Manager AI can maintain a persistent session across an entire week of tasks** instead of starting fresh each time.

### How It Works
```typescript
// Week 1: Start session
const week1Session = query({
  prompt: "Start Week 1: User Invitations implementation",
  options: { agents, mcpServers, ... }
});

// Capture session ID from first message
let sessionId: string;
for await (const message of week1Session) {
  if (message.type === "system") {
    sessionId = message.session_id;
    break;
  }
}

// Day 2: Resume same session with full context
const day2 = query({
  prompt: "Continue Week 1: Implement remaining frontend tasks",
  options: {
    resume: sessionId,  // ← Resumes with full context!
    agents,
    mcpServers,
    ...
  }
});
```

### Benefits for PM Framework
- **Zero Context Loss**: Manager remembers all decisions from Week 1 Day 1
- **Continuous Integration**: Knows what APIs are implemented, what's pending
- **Smart Coordination**: Doesn't duplicate work across days
- **Session Forking**: Can test risky changes without affecting main session

### Implementation Strategy
```
Week 1 Session (Monday-Friday)
├─> Day 1: Create session, implement 5 tasks
├─> Day 2: Resume session, continue with 3 tasks
├─> Day 3: Resume session, audits + fixes
├─> Day 4: Resume session, final implementation
└─> Day 5: Resume session, Week 1 review, plan Week 2

Week 2 Session (New session)
└─> Starts fresh but reads NOW.md for Week 1 summary
```

**File to Track Sessions**: `.pm/sessions.json`
```json
{
  "current_week": "Week 1",
  "session_id": "sess_abc123...",
  "started": "2025-10-22",
  "last_resumed": "2025-10-24",
  "tasks_completed": 12,
  "tasks_pending": 3
}
```

---

## 2. 🚀 Parallel Subagent Execution

### What It Enables
**Multiple agents work simultaneously with isolated contexts**

### Documentation Quote
> "Multiple subagents can run concurrently, dramatically speeding up complex workflows."

### Example: Week 1 Implementation
**OLD (Sequential - v1):**
```
fe-task-001 (10 min)
  → fe-task-002 (12 min)
    → fe-task-003 (8 min)
      → be-task-001 (15 min)
Total: 45 minutes
```

**NEW (Parallel - v2):**
```
Simultaneously:
  ├─> fe-task-001 (10 min)
  ├─> fe-task-002 (12 min)
  ├─> fe-task-003 (8 min)
  └─> be-task-001 (15 min)

Total: 15 minutes (longest task duration)
```

**3x faster implementation!**

### Implementation
```typescript
const managerPrompt = `
Read NOW.md. We're implementing Week 1: User Invitations.

Create these task files:
- fe-task-001: InviteUserDialog component
- fe-task-002: Invitation list view
- fe-task-003: Redux invitation slice
- be-task-001: Invitation database schema
- be-task-002: Send invitation API

Then spawn 5 agents in PARALLEL to implement all tasks simultaneously.
`;

const result = query({ prompt: managerPrompt, options: { agents, ... } });
// Manager spawns all 5 agents at once
// Each has isolated context
// All work in parallel
// Results aggregate back to Manager
```

### Context Isolation Benefits
Each agent's work doesn't pollute others:
- fe-task-001 reads 50 files → only relevant findings returned
- be-task-001 explores database → doesn't affect frontend agents
- No context overflow across agents

---

## 3. 💰 Cost Tracking Per Task

### What It Enables
**Track API costs for each task implementation**

### How It Works
```typescript
for await (const message of query({ prompt, options })) {
  if (message.type === "result") {
    const cost = message.total_cost_usd;
    const duration = message.duration_ms;
    const tokens = {
      input: message.input_tokens,
      output: message.output_tokens,
      cached: message.cache_read_input_tokens
    };

    // Write to task file AGENT REPORT
    await writeAgentReport(taskId, {
      status: "completed",
      cost_usd: cost,
      duration_ms: duration,
      tokens: tokens
    });
  }
}
```

### Integration with Task Files
**AGENT REPORT section enhancement:**
```markdown
## 🤖 AGENT REPORT

**Status**: ✅ Completed
**Files Created/Modified**:
- src/components/InviteUserDialog.tsx (new)
- src/redux/slices/invitationSlice.ts (new)

**What Was Built**: InviteUserDialog component with email validation...

**Performance Metrics**:
- Duration: 8,234 ms (8.2 seconds)
- Cost: $0.0342
- Tokens: 12,456 input, 3,234 output (5,678 cached)
```

### Week-Level Cost Tracking
**NOW.md enhancement:**
```markdown
## Week 1 Progress

**Tasks Completed**: 12/15
**Total Cost**: $1.24
**Average Task Cost**: $0.103
**Total Duration**: 2.3 hours (agent time)
```

---

## 4. ✅ TodoWrite Integration

### What It Enables
**Automatic progress tracking synced with task files**

### How SDK TodoWrite Works
The SDK automatically creates todos for multi-step workflows. We can:
1. Listen to TodoWrite tool invocations
2. Sync todo status with CASE LOG section
3. Provide real-time progress visibility

### Example Workflow
```typescript
// Agent working on fe-task-001
// SDK automatically creates todos:
TodoWrite({
  todos: [
    { content: "Create InviteUserDialog component", status: "in_progress", activeForm: "Creating component" },
    { content: "Add email validation logic", status: "pending", activeForm: "Adding validation" },
    { content: "Write unit tests", status: "pending", activeForm: "Writing tests" }
  ]
})

// We intercept this and update task file
```

### Integration with CASE LOG
**CASE LOG section enhancement:**
```markdown
## 📝 CASE LOG (Manager AI)

**Context**: Week 1, Day 1 - User invitation feature
**Dependencies**: None (first task)
**Next Steps**: be-task-001 (invitation API)

**Progress Tracking**:
- ✅ Create InviteUserDialog component
- ✅ Add email validation logic
- 🔄 Write unit tests (in progress)
```

---

## 5. 🔧 Custom Tools (Already Planned)

### Confirmed Capabilities
Our plan to create these custom tools is fully supported:

```typescript
// Task file operations
ReadTaskFile(date, taskId)      → Reads task file
WriteAgentReport(taskId, report) → Writes to AGENT REPORT section
UpdateCaseLog(taskId, progress)  → Updates CASE LOG with progress

// PM framework operations
UpdateNOW(updates)               → Updates NOW.md with weekly progress
CheckIntegration(endpoint)       → Verifies API implementation
CreateTaskFile(template, data)   → Creates new task from template
RunAudit(taskId)                 → Spawns auditor for completed task

// Project operations (future: could use external MCP servers)
QueryDatabase(schema)            → Checks PostgreSQL schema
CreateGitHubPR(branch, desc)     → Auto-creates PR
NotifySlack(message)             → Sends blocker notifications
```

---

## 6. 🛡️ Permissions & Safety

### Tool Restrictions Per Agent
```typescript
agents: {
  "fe-implementor": {
    tools: ["Read", "Write", "Edit", "Bash", "ReadTaskFile"],
    // Cannot access database, cannot push to GitHub
  },

  "be-implementor": {
    tools: ["Read", "Write", "Edit", "Bash", "QueryDatabase"],
    // Can access database via external tools if needed
  },

  "fe-auditor": {
    tools: ["Read", "Grep", "Glob"],  // READ-ONLY
    // Cannot modify code, only review
  }
}
```

### Permission Modes
```typescript
permissionMode: "acceptEdits"  // Auto-accept file edits
// or
permissionMode: "default"      // Ask user for destructive operations
```

---

## Enhanced Architecture Diagram

### v2 SDK-Powered with Advanced Features

```
User
 └─> Manager AI (Node.js + SDK)
      ├─> Session Management
      │    ├─> Week 1 Session (sess_abc123)
      │    │    ├─> Day 1-5 continuous context
      │    │    └─> Remembers all decisions
      │    └─> Week 2 Session (sess_def456)
      │
      ├─> Parallel Subagent Execution
      │    ├─> fe-implementor (isolated context) ──┐
      │    ├─> be-implementor (isolated context) ──┤
      │    ├─> fe-auditor (isolated context) ──────┤→ All run simultaneously
      │    └─> be-auditor (isolated context) ──────┘
      │
      ├─> Standard SDK Tools
      │    ├─> Read (task files)
      │    ├─> Edit (agent reports)
      │    ├─> Write (new files)
      │    └─> Bash (external commands)
      │
      ├─> Cost Tracking
      │    └─> Logs to AGENT REPORT per task
      │
      └─> TodoWrite Integration
           └─> Syncs with CASE LOG for progress tracking
```

---

## Updated Migration Plan Priorities

### High Priority Additions

1. **Session Management** ⭐⭐⭐
   - Implement week-long sessions
   - Create `.pm/sessions.json` tracker
   - Add resume/fork capabilities

2. **Parallel Execution** ⭐⭐⭐
   - Manager spawns multiple agents simultaneously
   - Test with 5+ concurrent tasks
   - Measure speedup vs sequential

3. **Cost Tracking** ⭐⭐
   - Add cost/duration to AGENT REPORT template
   - Create weekly cost summaries in NOW.md
   - Set budget alerts

4. **TodoWrite Integration** ⭐
   - Sync SDK todos with CASE LOG
   - Real-time progress display
   - Automatic status updates

### Implementation Order

**Phase 1**: Basic SDK migration (as planned)
- Custom tools
- Agent definitions
- Manager script

**Phase 2**: Session management
- Session creation/resumption
- `sessions.json` tracking
- Week-long context preservation

**Phase 3**: Parallel execution
- Multi-task spawning
- Context isolation testing
- Performance benchmarking

**Phase 4**: Monitoring & tracking
- Cost tracking per task
- TodoWrite integration
- Progress dashboards

---

## Expected Performance Improvements

### Before (v1 - Manual)
- **Week 1 Duration**: 5 days × 8 hours = 40 human hours
- **Context Loss**: High (new session per task)
- **Parallelization**: None (sequential tasks)
- **Cost Tracking**: Manual (if at all)

### After (v2 - SDK)
- **Week 1 Duration**: 5 days × 2 hours = 10 AI hours (4x faster)
- **Context Loss**: Zero (week-long session)
- **Parallelization**: 5-8 agents simultaneously (3x speedup)
- **Cost Tracking**: Automatic per task

**Total Improvement**: ~12x faster with better quality and full audit trail

---

## Questions for User

1. **Should we implement all 4 phases or start with Phase 1-2?**
   - Recommendation: Start with Phase 1-2, add 3-4 later

2. **Session duration: week-long or day-long?**
   - Recommendation: Week-long for maximum context preservation

3. **Cost budget alerts: what threshold?**
   - Recommendation: Alert if task >$0.50 or week >$5.00

4. **TodoWrite sync: real-time or on-completion?**
   - Recommendation: Real-time for better visibility

---

**Status**: ✅ Research complete, ready to enhance migration plan with these features
