# SDK Approach (Archived)

**Status:** ⚠️ ARCHIVED - No longer used
**Replaced by:** Claude Code's native agent system (`.claude/agents/*.md`)
**Date Archived:** 2025-10-24

---

## Why This Was Archived

The SDK approach required:
- Complex TypeScript code to spawn agents
- Manual process (`npx tsx sdk/spawn-agent-simple.ts`)
- Separate agent definitions in `sdk/agents.ts`
- Session management code
- Additional dependencies

**New approach uses:**
- Claude Code's built-in agent system
- Agent definitions in `.claude/agents/fe-implementor.md` and `.claude/agents/be-implementor.md`
- Manager AI spawns with simple `Task(subagent_type="fe-implementor", ...)` tool call
- No external code needed - just markdown files!

---

## What Was In This Folder

```
sdk/
├── agents.ts                   # Agent definitions (fe-implementor, be-implementor, etc.)
├── spawn-agent-simple.ts       # CLI to spawn single agent
├── spawn-multiple.ts           # Spawn multiple agents in parallel
├── spawn-agent.ts              # Core spawning logic
├── onboard-manual.ts           # Manual onboarding CLI
├── config.ts                   # Config loading
├── tools.ts                    # Custom tools for agents
└── types.ts                    # TypeScript types
```

---

## Migration Guide

**Old way (SDK):**
```bash
# User had to run manual command
npx tsx sdk/spawn-agent-simple.ts fe-implementor 2025-10-24 001
```

**New way (Native agents):**
```
Manager AI automatically spawns with:
Task(
  subagent_type="fe-implementor",
  description="Implement task 001",
  prompt="Read .pm/agents/tasks/2025-10-24/fe-task-001.md and implement"
)
```

**Old way (Agent definition in code):**
```typescript
// sdk/agents.ts
export const agents = {
  "fe-implementor": {
    description: "...",
    prompt: `${onboardingDoc}\n\n# Your Role: Frontend Implementor\n...`
  }
}
```

**New way (Agent definition in markdown):**
```markdown
<!-- .claude/agents/fe-implementor.md -->
# Frontend Implementor Agent

Your role: Frontend Implementor
...
```

---

## Benefits of New Approach

✅ **Simpler:** No TypeScript code, just markdown files
✅ **Faster:** No npm commands, Manager AI calls directly
✅ **Cleaner:** Agent prompts visible in `.claude/agents/`
✅ **Native:** Uses Claude Code's built-in agent system
✅ **Less code:** Removed ~500 lines of SDK code

---

## What To Do If You Need SDK Code

This folder contains all the original SDK code if you need it for reference.

**But we recommend:** Use the new `.claude/agents/` approach instead!

---

**Archived by:** Documentation reorganization (setup/usage separation)
**Last SDK version:** v2.0
