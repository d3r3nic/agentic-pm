# Workflow: Creating Task Files

> **For:** Manager AI
> **When:** Feature needs implementation

---

## Process

1. **Copy template:**
   - FE task: `agents/templates/fe-task.template.md`
   - BE task: `agents/templates/be-task.template.md`

2. **Create dated folder (if doesn't exist):**
   ```bash
   mkdir -p agents/tasks/YYYY-MM-DD
   ```

3. **Save as:**
   `agents/tasks/YYYY-MM-DD/[fe|be]-task-NNN.md`
   - NNN = sequential number (001, 002, etc.)

4. **Fill AGENT INSTRUCTIONS:**
   - What to build (brief, clear)
   - Which docs to read (specific paths + why each doc)
   - Implementation details (files, patterns, requirements)
   - Rules critical for this task
   - Dependencies (other tasks, API contracts)

5. **Fill CASE LOG:**
   - Context (why this task exists)
   - Dependencies (what it needs, what it blocks)
   - Integration strategy (how it connects with other work)
   - Decisions made (architectural choices)
   - Next steps (what happens after completion)

6. **Leave empty:**
   - AGENT REPORT (agent fills)
   - AUDIT REPORT (auditor fills)

---

## Example Task File Name

`agents/tasks/2025-10-22/fe-task-001.md`
- Date: 2025-10-22
- Type: fe (frontend)
- Number: 001 (first task of the day)

---

## Documentation References

**In AGENT INSTRUCTIONS, reference:**
- Project docs: `/frontend-dashboard/docs/...` or `/backend/src/...`
- Rules: `/frontend-dashboard/CLAUDE.md` or `/backend/CLAUDE.md`
- API contracts: `docs/integration.template.md` section X
- Onboarding: `.pm/agents/onboarding/[fe|be]-agent.md` (agent reads automatically)

---

## Next Step

After creating task file → Call agent (see calling-agents.md)
