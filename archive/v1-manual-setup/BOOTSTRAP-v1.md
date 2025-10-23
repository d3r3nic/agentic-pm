# Bootstrap: AI Project Management System Setup

> **For:** Humans setting up this system for a NEW project
> **Time:** 10-15 minutes one-time setup
> **Result:** Autonomous AI-managed project

---

## What This System Is

A **100% reusable, AI-first Project Management Framework** that:
- Coordinates multiple AI agents autonomously
- Self-manages via Manager AI (tracks progress, coordinates work, never loses context)
- Works for any software project (frontend + backend)
- Forkable and customizable

**Philosophy:** Manager AI coordinates, FE/BE agents execute, Owner approves direction.

---

## Prerequisites

✅ Claude Code CLI installed (`claude` command available)
✅ This `.pm/` folder copied to your project root
✅ 5-15 minutes for setup (depending on method)

---

## Recommended Project Structure

**For best results, organize your project like this:**

```
project-root/              # Your project root (run Manager AI here)
├── frontend/             # Your frontend code (or client/, app/, etc.)
├── backend/              # Your backend code (or server/, api/, etc.)
└── .pm/                  # Task-Driven PM Framework
```

**Why this structure:**
- ✅ Keeps framework separate from code
- ✅ Manager AI runs from root (sees both frontend + backend)
- ✅ Prevents confusion with other projects
- ✅ Clean separation of concerns

**If your folders have different names** (e.g., `client/` instead of `frontend/`), that's fine! The bootstrap agent will detect and configure automatically.

---

## Choose Your Setup Method

### 🤖 **Option A: Automated Setup (Recommended)** ⭐

Use the Bootstrap AI Agent to auto-configure everything!

**Time:** ~5 minutes
**Effort:** Answer questions, agent does the rest

[Jump to Automated Setup](#automated-setup-recommended)

---

### 👤 **Option B: Manual Setup**

Configure the framework yourself step-by-step.

**Time:** ~15 minutes
**Effort:** Edit files manually, create agents

[Jump to Manual Setup](#manual-setup)

---

## Automated Setup (Recommended)

### Quick Start with Bootstrap Agent

1. **Create the Bootstrap Agent:**
   ```bash
   claude agent create
   # Name: bootstrap-agent
   # Description: Auto-configures Task-Driven PM Framework
   # Prompt: Copy entire contents of .pm/agents/prompts/bootstrap-agent.md
   ```

2. **Run Bootstrap:**
   ```bash
   claude
   # Say: "I'm using the bootstrap-agent to configure the Task-Driven PM Framework. Please configure it for my project."
   ```

3. **Answer Questions:**
   - Bootstrap agent will ask about your frontend/backend folders
   - It will scan your project structure
   - It will read existing docs (if any)
   - It will auto-update onboarding files

4. **Bootstrap Agent Creates Agents:**
   - Agent will guide you to open a new terminal tab
   - Walk you through `claude agent create` for each agent (4 agents)
   - Each agent includes "When is this called?" context
   - Agents: fe-implementor, be-implementor, fe-auditor, be-auditor

5. **Done!**
   - Framework configured for your project
   - All 4 agents created in Claude Code
   - Ready to start Manager AI

**That's it! The agent does all the work.** 🎉

[Skip to Verification](#verification)

---

## Manual Setup

### Step 1: Create AI Agents in Claude Code

You need to create 2-4 agents in Claude Code:

**Required (minimum):**
- `fe-implementor` - Builds frontend features
- `be-implementor` - Builds backend APIs

**Optional (recommended for quality):**
- `fe-auditor` - Reviews frontend for rule compliance
- `be-auditor` - Reviews backend for rule compliance

---

#### How to Create Agents

For each agent you want to create:

1. **Run:**
   ```bash
   claude agent create
   ```

2. **Choose:** Project-level agent (not global)

3. **Name:** Type exactly: `fe-implementor` (or `be-implementor`, `fe-auditor`, `be-auditor`)

4. **Description:** Brief description (e.g., "Frontend implementation agent")

5. **Paste prompt:** Copy entire contents from:
   - FE Implementor: `.pm/agents/prompts/fe-implementor.md`
   - BE Implementor: `.pm/agents/prompts/be-implementor.md`
   - FE Auditor: `.pm/agents/prompts/fe-auditor.md` (optional)
   - BE Auditor: `.pm/agents/prompts/be-auditor.md` (optional)

6. **Save**

**Repeat for all agents you want.**

---

### Step 2: Configure Project-Specific Paths

Edit these files to match YOUR project structure:

#### `.pm/agents/onboarding/fe-agent.md`

Find and update:
```markdown
**Frontend location:** `/frontend-dashboard/`  ← Change to YOUR frontend folder
**Tech stack:** React + TypeScript + ...       ← Update to YOUR stack

**Primary rules file:**
- `/frontend-dashboard/CLAUDE.md`              ← Update path to YOUR rules file

**Documentation locations:**
- `/frontend-dashboard/docs/...`               ← Update all doc paths
```

#### `.pm/agents/onboarding/be-agent.md`

Find and update:
```markdown
**Backend location:** `/backend/`              ← Change to YOUR backend folder
**Tech stack:** SST v3 + Node.js + ...        ← Update to YOUR stack

**Primary rules file:**
- `/backend/CLAUDE.md`                         ← Update path to YOUR rules file

**Documentation locations:**
- `/backend/src/...`                           ← Update all doc paths
```

#### `.pm/ROADMAP.md`

Replace with YOUR project plan:
- Delete healthcare-specific content
- Add your project phases
- Or use as template and adapt

#### `.pm/integration.md`

Replace with YOUR API contracts:
- Delete healthcare API examples
- Add your API contracts as you define them
- Or start empty and fill in as you go

---

### Step 3: Record Agent Names

When starting Manager AI for the first time, give it the agent names:

```
Manager AI, the agents are:
- fe-implementor
- be-implementor
[- fe-auditor] (if created)
[- be-auditor] (if created)

Use these names when calling the Task tool.
```

Manager AI will store these internally and use them for all future sessions.

---

### Step 4: Initialize Manager AI

Start Claude Code and say:

```
Read .pm/MANAGER-ONBOARDING.md and start managing this project.
```

Manager AI will:
1. Read its onboarding doc
2. Read NOW.md (current status)
3. Read ROADMAP.md (project plan)
4. Be ready to manage

**You're done! System is now autonomous.**

---

## What Happens Next

**Manager AI workflow:**
1. Creates task files (dated folders in `.pm/agents/tasks/YYYY-MM-DD/`)
2. Calls FE/BE agents using Task tool
3. Agents read task files + onboarding + docs
4. Agents implement features
5. Agents report results in task files
6. Manager AI updates progress in NOW.md
7. Manager AI logs decisions and weekly summaries
8. Cycle repeats

**Your involvement:**
- Approve high-level direction when asked
- Review progress in NOW.md (30 seconds to check status)
- That's it! System self-manages.

---

## File System After Bootstrap

```
your-project/
├── .pm/                                # PM system (portable)
│   ├── BOOTSTRAP.md                    # This file (for future forks)
│   ├── MANAGER-ONBOARDING.md          # Manager AI operations
│   ├── NOW.md                         # Current status (auto-updated)
│   ├── ROADMAP.md                     # Your project plan
│   ├── integration.md                 # Your API contracts
│   ├── agents/
│   │   ├── onboarding/                # Project-specific (YOU EDITED THESE)
│   │   ├── prompts/                   # Generic agent prompts
│   │   ├── templates/                 # Task file templates
│   │   ├── workflow/                  # Manager AI workflows
│   │   └── tasks/YYYY-MM-DD/          # Task files (auto-created)
│   └── logs/                          # Historical records
│
├── frontend/                          # Your frontend (path in fe-agent.md)
├── backend/                           # Your backend (path in be-agent.md)
└── ...
```

---

## Verification

Test that setup worked:

1. **Check agents created:**
   ```bash
   claude agent list
   ```
   Should show: `fe-implementor`, `be-implementor` (and auditors if created)

2. **Check paths updated:**
   - Open `.pm/agents/onboarding/fe-agent.md`
   - Verify "Frontend location" matches YOUR frontend folder
   - Open `.pm/agents/onboarding/be-agent.md`
   - Verify "Backend location" matches YOUR backend folder

3. **Start Manager AI:**
   ```bash
   claude
   ```
   Say: "Read .pm/MANAGER-ONBOARDING.md and confirm you're ready"

   Manager AI should respond with understanding of system.

---

## Customization for Different Projects

**For different tech stacks:**
- Edit `.pm/agents/onboarding/fe-agent.md` (update tech stack, docs paths)
- Edit `.pm/agents/onboarding/be-agent.md` (update tech stack, docs paths)
- Agent prompts stay the same (generic)

**For different workflows:**
- Edit `.pm/MANAGER-ONBOARDING.md` (change weekly workflow)
- Edit `.pm/agents/templates/` (change task file structure)

**For different project types:**
- Edit `.pm/ROADMAP.md` (your project phases)
- Edit `.pm/integration.md` (your API contracts)
- Core system adapts automatically

---

## Maintenance

**None required for core system!**

System is self-documenting and self-managing:
- Manager AI updates NOW.md
- Task files create audit trail
- Weekly logs capture progress
- Decisions logged as made

**Only update when:**
- Project structure changes (update onboarding docs)
- New rules added (update onboarding docs)
- Docs reorganized (update onboarding docs)

---

## Forking for New Projects

1. Copy entire `.pm/` folder to new project
2. Follow Steps 1-3 above (create agents, configure paths, record names)
3. Initialize Manager AI
4. Done!

**System is designed for infinite reuse.**

---

## Support & Documentation

**If Manager AI seems confused:**
- Check agent names are correct (Step 3)
- Check paths in onboarding docs (Step 2)
- Re-read MANAGER-ONBOARDING.md to Manager AI

**Understanding the system:**
- Read `.pm/logs/00-GENESIS.md` - Philosophy and design
- Read `.pm/agents/README.md` - Agent system overview
- Read `.pm/MANAGER-ONBOARDING.md` - How Manager AI operates

**Task file examples:**
- After first few tasks, review `.pm/agents/tasks/YYYY-MM-DD/`
- See how Manager AI fills them in
- Learn patterns for future projects

---

## What You Get

✅ **Autonomous project management** - Manager AI handles coordination
✅ **Multi-agent execution** - FE/BE work in parallel
✅ **Complete audit trail** - Task files = full history
✅ **No context loss** - System self-documents
✅ **Seamless handoff** - New Manager AI onboards from docs
✅ **Infinitely reusable** - Fork for any project

---

## Starting Your First Session

After bootstrap complete:

```bash
# In your project root
claude

# Say to Claude:
"Read .pm/MANAGER-ONBOARDING.md and start managing"

# Manager AI will ask what to work on, or you can say:
"Start with Week 1 from ROADMAP.md"
```

**System runs itself from here.** 🚀

---

## Quick Reference

| Action | Command |
|--------|---------|
| Create agent | `claude agent create` |
| List agents | `claude agent list` |
| Start Manager AI | `claude` then say "Read .pm/MANAGER-ONBOARDING.md" |
| Check status | Read `.pm/NOW.md` |
| View tasks | `ls .pm/agents/tasks/YYYY-MM-DD/` |

---

**Framework Version:** 1.0
**Last Updated:** 2025-10-22
**Bootstrap complete → System autonomous**
