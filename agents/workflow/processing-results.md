# Workflow: Processing Agent Results

> **For:** Manager AI
> **When:** Agent completes and fills AGENT REPORT

---

## Process

### 1. Read AGENT REPORT

Open task file and read AGENT REPORT section:
- Status (Complete / Blocked / Failed)
- Files created/modified
- What was built
- Issues encountered

### 2. Update CASE LOG

In same task file, add to CASE LOG section:
- Outcome summary
- Any observations
- Decisions based on results
- Next actions

### 3. Update NOW.md

Based on task outcome:
- Move task from "In Progress" to completed
- Update progress counters
- Add new blockers if any
- Update integration points if APIs ready

### 4. Decide Next Action

**If Status = ✅ Complete:**
- Option A: Call auditor (if quality check needed)
- Option B: Mark task done, proceed to next task
- Option C: Update integration.md if BE APIs ready

**If Status = ⚠️ Blocked:**
- Assess blocker
- Can you create unblocking task?
- Or escalate to Owner?

**If Status = ❌ Failed:**
- Review failure reason
- Create fix task
- Or escalate to Owner

### 5. Call Auditor (Optional)

If quality check needed:
```
Task(
  subagent_type: "[fe|be]-auditor",
  description: "Audit [feature name]",
  prompt: "Read agents/tasks/YYYY-MM-DD/[fe|be]-task-NNN.md and audit. Implementor filled AGENT REPORT. Write audit in AUDIT REPORT section."
)
```

### 6. Process Audit Results

Read AUDIT REPORT section:
- Status (PASS / WARNINGS / FAIL)
- Violations found
- Recommendations

**If PASS:** Mark task complete
**If WARNINGS:** Decide if acceptable or needs fix
**If FAIL:** Create fix task for implementor

### 7. Update Integration Status

**If BE APIs completed:**
- Update `docs/integration.template.md`
- Mark endpoints as "✅ Implemented"
- Add any notes about usage

**If FE integration ready:**
- Note in NOW.md that APIs can be wired up
- Create integration task if Friday

### 8. Log Decision (if significant)

If architectural decision made during this task:
- Create: `logs/decisions/YYYY-MM-DD-decision-name.md`
- Document: Context, options, choice, rationale, consequences

---

## Update Frequency

- **NOW.md:** After EVERY task (keep current)
- **integration.md:** When BE APIs ready
- **ROADMAP.md:** Weekly checkoff
- **Decision log:** When significant decision made
- **Weekly log:** End of each week

---

## Next Steps After Processing

1. Check NOW.md for next priority task
2. Create new task file
3. Call agent
4. Repeat cycle

---

**Continuous cycle:** Create task → Call agent → Process results → Update NOW.md → Repeat
