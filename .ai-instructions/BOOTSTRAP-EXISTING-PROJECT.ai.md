# Bootstrap Guide - SDK-Powered Framework (v2.0)

**Last Updated:** 2025-10-22
**Framework Version:** 2.0.0 (Claude Agent SDK)

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- ANTHROPIC_API_KEY environment variable set
- Project with frontend and/or backend code

### 1. Copy Framework to Your Project

```bash
# Copy .pm folder to your project root
cp -r task-driven-pm-framework/.pm /path/to/your/project/

cd /path/to/your/project/.pm
```

### 2. Install Dependencies

```bash
npm install
```

This installs:
- `@anthropic-ai/claude-agent-sdk` - Core SDK
- `zod` - Schema validation
- TypeScript tooling

### 3. Configure Onboarding Files

**Update these template files with your project specifics:**

#### `agents/onboarding/fe-agent.md`
```markdown
# Frontend Agent Onboarding

## Project Location
Frontend code: `/path/to/your/frontend`

## Tech Stack
- React + TypeScript
- [Your state management]
- [Your UI library]
- [etc.]

## Documentation
- Main docs: `/path/to/docs/`
- API contracts: `docs/integration.template.md`

## Critical Rules
1. [Your project-specific rule 1]
2. [Your project-specific rule 2]
...
```

#### `agents/onboarding/be-agent.md`
```markdown
# Backend Agent Onboarding

## Project Location
Backend code: `/path/to/your/backend`

## Tech Stack
- [Your backend framework]
- [Your database]
- [etc.]

## Documentation
- Architecture docs: `/path/to/docs/`
- API specs: `docs/integration.template.md`

## Critical Rules
1. [Your project-specific rule 1]
2. [Security requirements]
...
```

#### `agents/onboarding/auditor-guidelines.md`
```markdown
# Auditor Guidelines

## What to Check
- [Project-specific quality criteria]
- [Security requirements]
- [Performance standards]

## Quality Thresholds
- Pass: [criteria]
- Warnings: [criteria]
- Fail: [criteria]
```

### 4. Set API Key

```bash
export ANTHROPIC_API_KEY="your-api-key-here"

# Or add to ~/.zshrc or ~/.bashrc:
echo 'export ANTHROPIC_API_KEY="your-api-key"' >> ~/.zshrc
source ~/.zshrc
```

### 5. Test the Setup

```bash
# Run Manager AI with test task
npm run manager "Implement fe-task-001 from 2025-10-22"
```

If successful, you'll see:
- Manager AI reading the task file
- Spawning fe-implementor agent
- Agent implementing the component
- Writing results to AGENT REPORT section
- Cost and duration metrics

### 6. Start Your First Week

```bash
# Update NOW.md and ROADMAP.md with your project plan
vim NOW.md
vim ROADMAP.md

# Create your first real task
# (copy template, fill AGENT INSTRUCTIONS)
cp agents/templates/fe-task-template.md agents/tasks/2025-10-22/fe-task-002.md
vim agents/tasks/2025-10-22/fe-task-002.md

# Run Manager AI
npm run manager "Implement Week 1 frontend tasks"
```

---

## 🎯 Usage Examples

### Implement Specific Task
```bash
npm run manager "Implement fe-task-003 from 2025-10-22"
```

### Implement Multiple Tasks
```bash
npm run manager "Implement all frontend tasks from 2025-10-22"
```

### Run Audits
```bash
npm run manager "Run fe-auditor on completed tasks from 2025-10-22"
```

### Weekly Planning
```bash
npm run manager "Read ROADMAP.md and create Week 2 task files"
```

### Resume Session
```bash
# Continue from where you left off with full context
npm run manager -- --resume "Continue Week 1 implementation"
```

---

## 📁 Project Structure

```
your-project/
├── frontend/                 # Your frontend code
├── backend/                  # Your backend code
└── .pm/                      # PM Framework (SDK v2.0)
    ├── package.json          # SDK dependencies
    ├── tsconfig.json         # TypeScript config
    ├── sdk/                  # SDK infrastructure
    │   ├── manager.ts        # Manager AI entry point
    │   ├── agents.ts         # Agent definitions
    │   ├── (no custom tools needed)
    │   └── types.ts          # TypeScript types
    ├── agents/
    │   ├── onboarding/       # Project-specific config
    │   │   ├── fe-agent.md   # Frontend agent config
    │   │   ├── be-agent.md   # Backend agent config
    │   │   └── auditor-guidelines.md
    │   ├── tasks/            # All task files (dated)
    │   │   └── YYYY-MM-DD/
    │   │       ├── fe-task-001.md
    │   │       ├── be-task-001.md
    │   │       └── ...
    │   └── templates/        # Task templates
    │       ├── fe-task-template.md
    │       └── be-task-template.md
    ├── NOW.md                # Current project status
    ├── ROADMAP.md            # Project plan
    ├── integration.md        # API contracts
    ├── logs/                 # Historical records
    │   ├── decisions/
    │   ├── weeks/
    │   └── milestones/
    ├── sessions.json         # Session persistence
    └── archive/              # Archived v1 files
        ├── v1-manual-setup/
        └── v1-agent-prompts/
```

---

## 🔧 Advanced Features

### Session Management

**Week-Long Sessions:**
```bash
# Monday: Start Week 1
npm run manager "Start Week 1: User Invitations"
# Session ID saved to sessions.json

# Tuesday-Friday: Resume with full context
npm run manager -- --resume "Continue Week 1 implementation"
```

**Session Forking** (coming soon):
Test risky changes without affecting main session.

### Cost Tracking

Manager AI automatically tracks costs per task:
- Shown in AGENT REPORT section
- Aggregated in NOW.md
- Saved in sessions.json

### Parallel Execution

Manager AI spawns multiple agents simultaneously:
```bash
# Implements 5 tasks in parallel (3x faster)
npm run manager "Implement all Week 1 frontend tasks"
```

### Custom Tools

Agents have access to custom PM framework tools:
- `ReadTaskFile(date, taskId)` - Read task files
- `WriteAgentReport(taskId, report)` - Write reports
- `CreateTaskFile(date, taskId, instructions)` - Create tasks
- `UpdateNOW(updates)` - Update NOW.md
- `WriteAuditReport(taskId, findings)` - Write audits

---

## 🆘 Troubleshooting

### "ANTHROPIC_API_KEY not set"
```bash
export ANTHROPIC_API_KEY="your-key"
```

### "Task file not found"
Check the date folder and task ID:
```bash
ls agents/tasks/2025-10-22/
# Make sure fe-task-001.md exists
```

### "Cannot find module '@anthropic-ai/claude-agent-sdk'"
```bash
cd .pm
npm install
```

### Agent doesn't follow project rules
Update the onboarding files:
```bash
vim agents/onboarding/fe-agent.md
# Add specific rules and examples
```

---

## 📚 Next Steps

1. ✅ Framework installed and tested
2. 📝 Update onboarding files with your project specifics
3. 🗺️ Fill out ROADMAP.md with your project plan
4. 📋 Create Week 1 task files
5. 🚀 Run Manager AI: `npm run manager "Start Week 1"`
6. 📊 Review results in task files and NOW.md
7. 🔁 Iterate and improve

---

## 🆚 v1 vs v2 Comparison

| Feature | v1 (Manual) | v2 (SDK) |
|---------|-------------|----------|
| **Agent Setup** | Manual `/agents` command | Programmatic (no setup) |
| **Coordination** | Task tool (sequential) | SDK parallel execution |
| **Context** | Shared (can overflow) | Isolated per agent |
| **Sessions** | None | Week-long with full context |
| **Cost Tracking** | Manual | Automatic per task |
| **Speed** | 1x | 3-4x faster (parallel) |

---

**You're ready to go!** 🎉

Run your first task: `npm run manager "Start implementation"`
