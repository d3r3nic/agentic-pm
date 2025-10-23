# Migration Plan: v1 → v2 (SDK-Powered)

**Date**: 2025-10-22
**Status**: Planning Phase
**Goal**: Transform task-driven PM framework from manual Claude Code agents to SDK-powered autonomous system

---

## Executive Summary

**What's Changing:**
- Manager AI: Claude Code conversation → Node.js/Python script using Agent SDK
- Subagents: Separate Claude Code agents → Programmatic `AgentDefinition` objects
- Coordination: Manual Task tool calls → SDK's built-in agent spawning
- Setup: Manual `/agents` creation → Automated SDK initialization

**What's Staying:**
- Task file structure (AGENT INSTRUCTIONS, AGENT REPORT, etc.)
- PM hub (NOW.md, ROADMAP.md, integration.md)
- Dated organization (tasks/YYYY-MM-DD/)
- Onboarding documentation
- Templates for task creation

**Result:** 10x faster execution, parallel agent processing, automatic context management, no manual setup

---

## Architecture Comparison

### v1 (Current - Manual Coordination)
```
User
 └─> Manager AI (Claude Code conversation)
      └─> Uses Task tool to call agents
           ├─> fe-implementor (manually created Claude Code agent)
           ├─> be-implementor (manually created Claude Code agent)
           ├─> fe-auditor (manually created Claude Code agent)
           └─> be-auditor (manually created Claude Code agent)
```

**Limitations:**
- Sequential execution (one agent at a time)
- Shared context space (can overflow)
- Manual agent creation required
- Limited parallelization

### v2 (SDK-Powered - Autonomous)
```
User
 └─> Manager AI (Node.js script with SDK)
      └─> query() with agents option
           ├─> fe-implementor (AgentDefinition in code, isolated context)
           ├─> be-implementor (AgentDefinition in code, isolated context)
           ├─> fe-auditor (AgentDefinition in code, isolated context)
           └─> be-auditor (AgentDefinition in code, isolated context)

      All agents run in PARALLEL with automatic context compaction
```

**Advantages:**
- Parallel execution (8 agents simultaneously)
- Isolated context windows (no overflow)
- Automatic agent initialization
- Standard Read/Edit/Write tools for task file operations
- Programmatic control and monitoring

---

## What Becomes Obsolete (Archive)

### 1. Manual Agent Creation
**Files to Archive:**
- `.pm/BOOTSTRAP.md` → Sections about `/agents` command
- `.pm/agents/prompts/bootstrap-agent.md` → Step 6 (Create Agents)

**Reason:** SDK creates agents programmatically via `AgentDefinition`

**Archive Location:** `.pm/archive/v1-manual-setup/`

### 2. Individual Agent Prompts (as Files)
**Files to Archive:**
- `.pm/agents/prompts/fe-implementor.md`
- `.pm/agents/prompts/be-implementor.md`
- `.pm/agents/prompts/fe-auditor.md`
- `.pm/agents/prompts/be-auditor.md`

**Reason:** Agent prompts become `prompt` fields in `AgentDefinition` objects

**Archive Location:** `.pm/archive/v1-agent-prompts/`

**Note:** Content is preserved and migrated to SDK agent definitions

### 3. Task Tool Coordination Pattern
**What Changes:**
```typescript
// OLD (v1)
Task(subagent_type="fe-implementor", prompt="Read task file and implement")

// NEW (v2)
query({
  prompt: "Implement Week 1 frontend tasks",
  options: {
    agents: {
      "fe-implementor": {
        description: "Implements frontend features via task files",
        tools: ["Read", "Write", "Edit", "Bash"],
        prompt: `${onboardingContent}\n\nRead task file and implement.`,
        model: "sonnet"
      }
    }
  }
})
```

**No file to archive:** Just a pattern change in Manager AI logic

---

## What Stays Valuable (Enhance)

### 1. Task File Structure ⭐ CRITICAL
**Files:** `agents/tasks/YYYY-MM-DD/[fe|be]-task-NNN.md`

**Stays Exactly The Same:**
```markdown
## 📋 AGENT INSTRUCTIONS
**Read these docs:** [Manager fills]
**Task:** [Manager fills]

## 🤖 AGENT REPORT
**Status:** [Agent fills]
**Files Created/Modified:** [Agent fills]

## 📝 CASE LOG (Manager AI)
**Context:** [Manager fills]

## ✅ AUDIT REPORT
**Status:** [Auditor fills]
```

**Enhancement:** Use standard SDK tools:
- `ReadTaskFile(task_id)` → Returns task file content
- `WriteAgentReport(task_id, report)` → Writes to AGENT REPORT section
- `UpdateCaseLog(task_id, notes)` → Manager updates CASE LOG

### 2. Onboarding Documentation ⭐ CRITICAL
**Files:**
- `agents/onboarding/fe-agent.md`
- `agents/onboarding/be-agent.md`
- `agents/onboarding/auditor-guidelines.md`

**Stays The Same:** SDK agents read these for project-specific rules

**Enhancement:** Referenced in AgentDefinition `prompt`:
```typescript
const feOnboarding = fs.readFileSync('agents/onboarding/fe-agent.md', 'utf-8');
const agents = {
  "fe-implementor": {
    prompt: `${feOnboarding}\n\nYou are implementing a frontend task.`,
    // ...
  }
}
```

### 3. PM Hub Structure ⭐ NO CHANGES
**Files:**
- `docs/NOW.template.md` → Current project status
- `docs/ROADMAP.template.md` → Phase-by-phase plan
- `docs/integration.template.md` → API contracts
- `logs/` → Historical decisions

**Why No Changes:** This is the PROJECT MANAGEMENT layer, SDK is the EXECUTION layer

### 4. Templates ⭐ NO CHANGES
**Files:**
- `agents/templates/fe-task.template.md`
- `agents/templates/be-task.template.md`

**Why:** Manager still creates task files from these templates

### 5. Manager Onboarding ⭐ NEEDS UPDATE
**File:** `.ai-instructions/MANAGER-ONBOARDING.md`

**Changes Needed:**
- Update from "call Task tool" → "spawn agents via SDK"
- Add SDK initialization instructions
- Use standard Read/Edit/Write tools
- Update coordination patterns

---

## Migration Steps

### Phase 1: Preparation
**Goal:** Archive old, prepare environment

1. **Create Archive Folder**
   ```bash
   mkdir -p .pm/archive/v1-manual-setup
   mkdir -p .pm/archive/v1-agent-prompts
   ```

2. **Archive Obsolete Files**
   ```bash
   mv .pm/BOOTSTRAP.md .pm/archive/v1-manual-setup/BOOTSTRAP-v1.md
   mv .pm/agents/prompts/bootstrap-agent.md .pm/archive/v1-manual-setup/
   mv .pm/agents/prompts/fe-implementor.md .pm/archive/v1-agent-prompts/
   mv .pm/agents/prompts/be-implementor.md .pm/archive/v1-agent-prompts/
   mv .pm/agents/prompts/fe-auditor.md .pm/archive/v1-agent-prompts/
   mv .pm/agents/prompts/be-auditor.md .pm/archive/v1-agent-prompts/
   ```

3. **Install SDK**
   ```bash
   cd .pm
   npm init -y
   npm install @anthropic-ai/claude-agent-sdk zod
   ```

### Phase 2: Build SDK Infrastructure
**Goal:** Create Manager AI script and custom tools

4. **Create Package Structure**
   ```
   .pm/
   ├── package.json
   ├── sdk/
   │   ├── manager.ts          # Main Manager AI script
   │   ├── agents.ts           # Agent definitions
   │   ├── (removed)           # No custom tools needed
   │   └── types.ts            # TypeScript types
   └── (existing files...)
   ```

5. ~~**Create Custom MCP Tools**~~ (Not needed - use standard tools)
   ```typescript
   import { tool, createSdkMcpServer } from "@anthropic-ai/claude-agent-sdk";
   import { z } from "zod";
   import fs from "fs";

   const readTaskFileTool = tool(
     "ReadTaskFile",
     "Reads a task file from agents/tasks/",
     z.object({
       date: z.string().describe("Date folder YYYY-MM-DD"),
       taskId: z.string().describe("Task ID like fe-task-001")
     }),
     async (args) => {
       const path = `agents/tasks/${args.date}/${args.taskId}.md`;
       const content = fs.readFileSync(path, 'utf-8');
       return { content: [{ type: "text", text: content }] };
     }
   );

   const writeAgentReportTool = tool(
     "WriteAgentReport",
     "Writes to AGENT REPORT section of task file",
     z.object({
       date: z.string(),
       taskId: z.string(),
       report: z.string().describe("Report content in markdown")
     }),
     async (args) => {
       // Implementation: Parse file, find AGENT REPORT section, replace
       // ...
       return { content: [{ type: "text", text: "Report written successfully" }] };
     }
   );

   export const pmTools = createSdkMcpServer({
     name: "pm-framework-tools",
     tools: [readTaskFileTool, writeAgentReportTool]
   });
   ```

6. **Define Agents** (`sdk/agents.ts`)
   ```typescript
   import fs from "fs";
   import { AgentDefinition } from "@anthropic-ai/claude-agent-sdk";

   const feOnboarding = fs.readFileSync('agents/onboarding/fe-agent.md', 'utf-8');
   const beOnboarding = fs.readFileSync('agents/onboarding/be-agent.md', 'utf-8');
   const auditorGuidelines = fs.readFileSync('agents/onboarding/auditor-guidelines.md', 'utf-8');

   export const agents: Record<string, AgentDefinition> = {
     "fe-implementor": {
       description: "Implements frontend features by reading task files",
       tools: ["Read", "Write", "Edit", "Glob", "Grep", "Bash", "ReadTaskFile", "WriteAgentReport"],
       prompt: `${feOnboarding}

   You are a Frontend Implementor agent. Your task:
   1. Read the task file using ReadTaskFile tool
   2. Read documentation referenced in task file
   3. Implement according to instructions
   4. Write results using WriteAgentReport tool`,
       model: "sonnet"
     },

     "be-implementor": {
       description: "Implements backend features by reading task files",
       tools: ["Read", "Write", "Edit", "Glob", "Grep", "Bash", "ReadTaskFile", "WriteAgentReport"],
       prompt: `${beOnboarding}

   You are a Backend Implementor agent. Your task:
   1. Read the task file using ReadTaskFile tool
   2. Implement database changes, APIs, etc.
   3. Test using Postman or curl
   4. Write results using WriteAgentReport tool`,
       model: "sonnet"
     },

     "fe-auditor": {
       description: "Audits frontend code quality and adherence to guidelines",
       tools: ["Read", "Grep", "Bash", "ReadTaskFile"],
       prompt: `${auditorGuidelines}

   You are a Frontend Auditor. Review completed work for:
   - Factory-first architecture
   - RTK Query caching patterns
   - Component quality
   Write findings to AUDIT REPORT section.`,
       model: "sonnet"
     },

     "be-auditor": {
       description: "Audits backend security and code quality",
       tools: ["Read", "Grep", "Bash", "ReadTaskFile"],
       prompt: `${auditorGuidelines}

   You are a Backend Auditor. Review for:
   - Security vulnerabilities
   - Prisma query patterns
   - API design quality
   Write findings to AUDIT REPORT section.`,
       model: "sonnet"
     }
   };
   ```

7. **Create Manager AI Script** (`sdk/manager.ts`)
   ```typescript
   import { query } from "@anthropic-ai/claude-agent-sdk";
   import { agents } from "./agents";
   import { pmTools } from "./tools";
   import fs from "fs";

   const managerOnboarding = fs.readFileSync('.ai-instructions/MANAGER-ONBOARDING.md', 'utf-8');

   async function runManager(userPrompt: string) {
     const result = query({
       prompt: `${managerOnboarding}

   User request: ${userPrompt}`,
       options: {
         model: "claude-3-5-sonnet",
         agents,
         mcpServers: {
           "pm-tools": {
             type: "sdk",
             name: "pm-framework-tools",
             instance: pmTools
           }
         },
         allowedTools: [
           "Read", "Write", "Edit", "Glob", "Grep", "Bash",
           "ReadTaskFile", "WriteAgentReport", "Task"
         ],
         permissionMode: "acceptEdits",
         settingSources: []  // Don't auto-load filesystem settings
       }
     });

     for await (const message of result) {
       switch (message.type) {
         case "assistant":
           console.log("Manager:", message.message.content);
           break;
         case "result":
           console.log(`\nCompleted in ${message.duration_ms}ms`);
           console.log(`Cost: $${message.total_cost_usd}`);
           break;
       }
     }
   }

   // CLI interface
   const userPrompt = process.argv.slice(2).join(" ");
   runManager(userPrompt);
   ```

### Phase 3: Update Documentation
**Goal:** Reflect SDK changes in all docs

8. **Update MANAGER-ONBOARDING.md**
   - Remove Task tool coordination
   - Add SDK spawning patterns
   - Add custom tool usage

9. **Create New BOOTSTRAP.md**
   - Installation: `cd .pm && npm install`
   - Usage: `node sdk/manager.ts "Implement Week 1 frontend tasks"`

10. **Update README.md**
    - Add SDK setup section
    - Update quick start guide
    - Add example commands

### Phase 4: Testing
**Goal:** Verify SDK implementation works

11. **Create Sample Task File**
    ```bash
    mkdir -p agents/tasks/2025-10-22
    cp agents/templates/fe-task.template.md \
       agents/tasks/2025-10-22/fe-task-001.md
    ```

    Fill AGENT INSTRUCTIONS with test task

12. **Run Manager AI**
    ```bash
    cd .pm
    export ANTHROPIC_API_KEY="your-key"
    node sdk/manager.ts "Implement fe-task-001 from 2025-10-22"
    ```

13. **Verify Results**
    - Check AGENT REPORT section was filled
    - Check files were created/modified
    - Check Manager updated CASE LOG

### Phase 5: Production Deployment
**Goal:** Make framework production-ready

14. **Add Error Handling**
    - Retry logic for failed agents
    - Validation for task files
    - Logging for debugging

15. **Add Monitoring**
    - Track agent execution times
    - Monitor API costs
    - Log all agent actions

16. **Create CLI Wrapper**
    ```bash
    # .pm/manager
    #!/usr/bin/env node
    require('./sdk/manager.ts');
    ```

    Make executable: `chmod +x .pm/manager`

    Use: `.pm/manager "Start Week 1"`

---

## Success Criteria

### Must Have
- ✅ Manager AI runs as Node.js script using SDK
- ✅ All 4 agents defined programmatically
- ✅ Standard Read/Edit/Write tools for task file operations
- ✅ Parallel agent execution working
- ✅ Task files still source of truth
- ✅ Onboarding docs still read by agents

### Nice to Have
- 🎯 CLI wrapper for easy Manager invocation
- 🎯 Cost tracking per task
- 🎯 Automatic NOW.md updates
- 🎯 GitHub PR creation on task completion
- 🎯 Slack notifications for blockers

---

## Timeline

**Week 1**: Archive obsolete files, install SDK, create infrastructure
**Week 2**: Build custom tools, define agents, create Manager script
**Week 3**: Update documentation, test with sample tasks
**Week 4**: Production hardening, monitoring, deployment

---

## Rollback Plan

If SDK migration fails:
1. Restore files from `.pm/archive/v1-*`
2. Use manual Claude Code agents as before
3. Document issues encountered
4. Re-evaluate SDK approach

---

## Questions to Answer

1. **Should Manager AI itself be an SDK agent or a script that spawns agents?**
   - Option A: Manager is an SDK agent (using `query()`)
   - Option B: Manager is a script that orchestrates SDK agents
   - **Recommendation**: Option A - Manager is an SDK agent for consistency

2. **Where should API keys be stored?**
   - Environment variables (`.env` file)
   - Encrypted config file
   - System keychain
   - **Recommendation**: `.env` file, gitignored

3. **Should we support both v1 (manual) and v2 (SDK) simultaneously?**
   - **Recommendation**: No, clean cutover after testing

4. **How to handle existing in-progress tasks from v1?**
   - **Recommendation**: Complete them in v1, start v2 fresh

---

## Next Steps

1. User reviews and approves this plan
2. Start Phase 1: Archive and prepare
3. ~~Prototype custom MCP tools~~ (Not needed)
4. Test with single agent before full migration
5. Iterate based on findings

---

**Status**: ✅ Plan complete, awaiting approval to proceed
