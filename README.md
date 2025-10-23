# Agentic PM

> **AI agents that ship features autonomously**
>
> Powered by Claude Agent SDK • Build software 12x faster

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Framework](https://img.shields.io/badge/Framework-Claude%20Agent%20SDK-blue)](https://docs.claude.com/en/api/agent-sdk/overview)
[![Version](https://img.shields.io/badge/Version-2.0.0-green)](https://github.com/d3r3nic/agentic-pm)

---

## 🎯 What This Does

**Agentic PM** coordinates 4 AI agents to build software projects autonomously:

- **Manager AI** - Creates task files, spawns agents, tracks progress
- **FE Implementor** - Builds frontend features in parallel
- **BE Implementor** - Builds backend APIs in parallel
- **FE/BE Auditors** - Enforce quality and security standards

**You approve direction (1% effort). AI handles execution (99% effort).**

---

## ✨ Key Features

### 🚀 Autonomous Execution
- **Zero manual setup** - Agents defined programmatically
- **Parallel execution** - 5-8 agents work simultaneously (3-4x faster)
- **Week-long sessions** - Full context preserved across days
- **Custom PM tools** - ReadTaskFile, WriteAgentReport, UpdateNOW, etc.

### 📊 Enterprise-Grade Tracking
- **Automatic cost tracking** - Per task and weekly totals
- **Performance metrics** - Duration, tokens, efficiency
- **Complete audit trail** - Every decision and implementation logged
- **Session management** - Resume exactly where you left off

### 🔧 100% Reusable
- **Works with any tech stack** - React, Vue, Node, Python, Go, etc.
- **Self-onboarding** - Update 3 template files, you're ready
- **Template-based tasks** - Consistent structure across projects
- **Multi-project friendly** - Use same framework for all projects

---

## 🚀 Quick Start - ONE Command

**From nothing → working full-stack app in 5 minutes:**

### Step 1: Open Claude Code
```bash
mkdir my-awesome-project
cd my-awesome-project
claude
```

### Step 2: Paste This Prompt
```
Clone https://github.com/d3r3nic/agentic-pm.git to the current directory.

Then read setup/START.md and .ai-instructions/BOOTSTRAP-NEW-PROJECT.md
and follow all steps to set up a new full-stack project here.
Ask me questions and build everything.
```

**That's it!** Claude will:
1. ✅ Clone this repository
2. ✅ Ask you 4 questions (what to build, tech stack, first feature, git strategy)
3. ✅ Create frontend + backend boilerplate
4. ✅ Configure the framework for your project
5. ✅ Implement your first feature with AI agents

**Time:** 5-10 minutes from empty folder to working app with first feature implemented.

---

## 🎯 What You Get

After setup completes:

```
my-awesome-project/
├── frontend/                     ← YOUR app (React/Vue/Svelte + TypeScript)
│   └── src/components/
│       └── YourFirstFeature.tsx  ← ✅ AI built this!
├── backend/                      ← YOUR API (Express/Fastify/NestJS)
│   └── src/routes/
│       └── yourRoute.ts          ← ✅ AI built this!
├── agents/                       ← Agent system (configured)
│   ├── onboarding/               ← Your project rules
│   └── tasks/                    ← Completed tasks
├── sdk/                          ← SDK tools
└── docs/                         ← Project tracking
```

---

## 📚 Documentation

### **Getting Started**
- **[setup/START.md](setup/START.md)** - Auto-bootstrap guide
- **[setup/QUICKSTART-AI.md](setup/QUICKSTART-AI.md)** - Quick reference

### **For Users**
- **[docs/START-HERE.md](docs/START-HERE.md)** - Main navigation hub
- **[docs/guides/](docs/guides/)** - How-to guides
- **[docs/reference/](docs/reference/)** - Technical reference

### **For AI Agents**
- **[.ai-instructions/](ai-instructions/)** - AI reads these (not for users)
- **[agents/onboarding/](agents/onboarding/)** - Project-specific config

### **For Developers**
- **[.dev/](dev/)** - Framework development docs

---

## 💡 How It Works

### 1. **You Define High-Level Plan**
Fill out `docs/ROADMAP.md`:
```markdown
## Phase 1: User Management (Week 1-2)
**Backend:** User database, auth APIs, invitation system
**Frontend:** Login page, user list, invitation dialog
**Success:** Users can register, login, and invite others
```

### 2. **Manager AI Creates Tasks**
```bash
npm run manager "Start Week 1: User Management implementation"
```

Manager AI:
- Reads ROADMAP.md
- Creates 8 task files (5 frontend + 3 backend)
- Spawns all agents simultaneously

### 3. **Agents Execute in Parallel**
- `fe-implementor` × 5 (login page, user list, invitation dialog, state, tests)
- `be-implementor` × 3 (database schema, auth APIs, invitation APIs)

**Time:** 15-20 minutes (vs. 60+ minutes sequential)

### 4. **Progress Tracked Automatically**
Manager AI updates `docs/NOW.md`:
```markdown
## Week 1 Progress
- Tasks Completed: 8/8 ✅
- Total Cost: $1.24
- Average Duration: 11.5 minutes
```

---

## 🔧 Tech Stack Support

Works with **any** tech stack:

**Frontend:** React, Vue, Angular, Svelte, Next.js, Nuxt, SvelteKit, etc.
**Backend:** Node.js (Express, Fastify, NestJS), Python (FastAPI, Django), Go, etc.
**Database:** PostgreSQL, MySQL, MongoDB, Prisma, TypeORM, etc.

Just update 3 template files in `agents/onboarding/` with your project details!

---

## 📊 Architecture

```
User Request
     ↓
Manager AI (sdk/manager.ts)
     ├─→ Reads: NOW.md, ROADMAP.md, integration.md
     ├─→ Creates: Task files
     ├─→ Spawns: Agents (programmatic)
     ↓
┌────────────────────────────────┐
│  Parallel Agent Execution      │
│  (Isolated Contexts)           │
├────────────────────────────────┤
│  fe-implementor × 5            │ ─→ Write AGENT REPORTS
│  be-implementor × 3            │ ─→ Write AGENT REPORTS
│  fe-auditor × 1                │ ─→ Write AUDIT REPORTS
│  be-auditor × 1                │ ─→ Write AUDIT REPORTS
└────────────────────────────────┘
     ↓
Manager AI Aggregates Results
     ├─→ Updates: NOW.md
     ├─→ Tracks: Cost, duration, progress
     └─→ Reports: Summary to user
```

---

## 🌟 Real-World Example

**Project:** Healthcare platform MVP (7 weeks)

**Week 1 Results:**
- **Tasks:** 12 (5 FE + 3 BE + 4 audits)
- **Duration:** 2.3 hours (agent time)
- **Cost:** $1.24
- **Quality:** All tasks passed audit

**Without this framework:**
- **Time:** ~40 human hours
- **Cost:** Same
- **Improvement:** **17x time savings**, zero context loss, better quality

---

## 🤔 FAQ

### Q: How is this different from just using Claude Code?
**A:** This is Claude Code on steroids:
- Multiple agents working in parallel (not one at a time)
- Week-long context preservation (not lost between sessions)
- Custom PM tools (not just generic tools)
- Automatic progress tracking and cost monitoring

### Q: How much does it cost?
**A:** Typical costs:
- Simple task (button component): $0.03-0.05
- Complex task (full page with API integration): $0.10-0.20
- Full week of development (8-12 tasks): $1.00-2.00

SDK tracks costs automatically per task.

### Q: Can I use this for solo projects?
**A:** Absolutely! Even better for solo devs:
- No context loss when you return after days/weeks
- Parallel execution means features ship faster
- Audit trail helps you remember decisions

---

## 🤝 Contributing

This is an open framework! Contributions welcome:
- Add new custom tools
- Improve agent prompts
- Create example templates for specific tech stacks
- Share your success stories

Fork, modify, share!

---

## 📜 License

MIT License - Fork and use freely for any project.

---

## 🙏 Acknowledgments

Built with:
- [Claude Agent SDK](https://docs.claude.com/en/api/agent-sdk/overview) by Anthropic
- [Claude Code](https://github.com/anthropics/claude-code)
- Task-driven architecture principles

Inspired by: The need for AI agents that actually ship features end-to-end.

---

## 📞 Support

- **Issues:** [GitHub Issues](https://github.com/d3r3nic/agentic-pm/issues)
- **Discussions:** [GitHub Discussions](https://github.com/d3r3nic/agentic-pm/discussions)
- **Documentation:** See [docs/](docs/) for detailed guides

---

**Ready to build?** 🚀

```bash
git clone https://github.com/d3r3nic/agentic-pm.git
cd agentic-pm
cat setup/START.md  # Read setup guide
```

**Ship features 12x faster. Start now.**
