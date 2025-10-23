# Workflow: Calling Agents

> **For:** Manager AI
> **When:** Task file created and ready for agent execution

---

## Task Tool Syntax

```
Task(
  subagent_type: "[agent-name]",
  description: "[Brief task description]",
  prompt: "Read agents/tasks/YYYY-MM-DD/[fe|be]-task-NNN.md and execute. Write your results in the AGENT REPORT section of that file."
)
```

---

## Agent Names

Use exact names from bootstrap:
- `fe-implementor` - Frontend implementation
- `be-implementor` - Backend implementation
- `fe-auditor` - Frontend audit (optional)
- `be-auditor` - Backend audit (optional)

---

## Examples

**FE Implementation:**
```
Task(
  subagent_type: "fe-implementor",
  description: "Build RTK Query API slice",
  prompt: "Read agents/tasks/2025-10-22/fe-task-001.md and execute. Write your results in the AGENT REPORT section."
)
```

**BE Implementation:**
```
Task(
  subagent_type: "be-implementor",
  description: "Create user invitation endpoints",
  prompt: "Read agents/tasks/2025-10-22/be-task-001.md and execute. Write your results in the AGENT REPORT section."
)
```

**FE Audit:**
```
Task(
  subagent_type: "fe-auditor",
  description: "Audit RTK Query implementation",
  prompt: "Read agents/tasks/2025-10-22/fe-task-001.md and audit the implementation. The implementor has filled the AGENT REPORT section. Write your audit results in the AUDIT REPORT section."
)
```

---

## After Calling Agent

1. Agent executes (reads task + onboarding + docs, implements, writes AGENT REPORT)
2. You receive completion notification
3. Read AGENT REPORT from task file
4. Process results (see processing-results.md)

---

## Timing

**Implementors:** Call after task file created
**Auditors:** Call after implementor completes (AGENT REPORT filled)

---

## Next Step

After agent completes → Process results (see processing-results.md)
