# Agentic PM

> **Planning-first AI project management framework**
>
> Hours planning, minutes developing • Zero rework

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/Version-3.0.0-green)](https://github.com/d3r3nic/agentic-pm)

---

## 🎯 What This Does

**Agentic PM v3.0** enforces systematic planning before any implementation:

**Philosophy:** 100% planning → THEN implementation

### The Approach

1. **Manager AI enters PLAN MODE** (mandatory for every feature)
2. **Reads universal planning protocol** (7-step systematic analysis)
3. **Reads project patterns** (accumulated architectural knowledge)
4. **Creates complete master plan** (workflows, schemas, edge cases)
5. **Updates pattern knowledge base** (learns from each feature)
6. **Generates implementation prompts** (user pastes to terminals)
7. **Implementation flows naturally** (plan is perfect)

### Why v3.0?

**Before (v2.x):**
- Quick planning (30 min) → Long implementation (2-4 weeks) → Rework (1-2 weeks)
- Context lost when agents closed
- Architectural inconsistency

**After (v3.0):**
- Thorough planning (1-3 hours) → Fast implementation (2-5 days) → Zero rework
- Context preserved in persistent terminals
- Patterns compound over time

**Real savings:** 3+ weeks per feature, zero technical debt

---

## ✨ Key Features

### 🧠 Planning-First Architecture
- **Mandatory PLAN MODE** - Every feature goes through 7-step planning protocol
- **Quality gate** - 30+ checklist items before implementation allowed
- **Pattern learning** - PROJECT-PLANNING-PATTERNS.md grows smarter with each feature
- **Bootstrap support** - First feature populates entity hierarchy, subsequent features use patterns
- **Zero rework** - Catch architectural issues in planning, not in production

### 🎯 Universal Protocol
- **MASTER-PLAN-PROTOCOL.ai.md** - Works for ANY project (SaaS, E-commerce, Healthcare, etc.)
- **PROJECT-PLANNING-PATTERNS** - Project-specific knowledge base
- **7-step systematic process** - Context loading, deep questions, analysis, master plan
- **Continuous learning** - Each feature makes next feature easier

### 🔄 Manual Workflow (v3.0)
- **Persistent terminals** - Context preserved throughout entire feature
- **Copy-paste prompts** - Manager AI generates, user pastes to BE/FE terminals
- **Slash commands** - `/be-onboard`, `/fe-onboard` for context loading
- **User control** - Manual paste gives oversight and debugging capability
- **Clear separation** - BE work in BE terminal, FE work in FE terminal

### 📊 Pattern Accumulation
- **Architectural patterns** - Discovered and documented automatically
- **Known pitfalls** - Mistakes avoided and recorded
- **Decision log** - Why choices were made (reference for future)
- **Lessons learned** - From actual project history
- **Compounds over time** - Feature 10 is easier than Feature 1

### 🔧 100% Universal
- **Works with any tech stack** - React, Vue, Node, Python, Go, Rust, etc.
- **Self-configuring** - Bootstrap process captures project specifics
- **Template-based** - Consistent structure across all projects
- **Multi-project friendly** - Same protocol for different domains

---

## 🚀 Quick Start - TWO Simple Steps!

**Works with BOTH new AND existing projects!**

### For New Projects (Empty Folder)

**From nothing → working full-stack app in 5 minutes:**

```bash
# Step 1: Clone the framework
git clone https://github.com/d3r3nic/agentic-pm.git
cd agentic-pm

# Step 2: Open Claude Code and say:
claude
```

**Then just type:**
```
start
```

**That's it!** Claude will automatically:
1. ✅ Ask you 4 questions (what to build, tech stack, first feature, git strategy)
2. ✅ Create frontend + backend boilerplate
3. ✅ Configure the framework for your project
4. ✅ Implement your first feature with AI agents

**Time:** 5-10 minutes from empty folder to working app.

---

### For Existing Projects (You Already Have Code)

**Add AI superpowers to your existing codebase:**

```bash
cd your-existing-project  # Your project with frontend/ and backend/

# Clone framework
git clone https://github.com/d3r3nic/agentic-pm.git
cd agentic-pm

# Open Claude Code
claude
```

**Then just type:**
```
start
```

**That's it!** Claude will intelligently:
1. ✅ **Auto-detect your tech stack** (React? Vue? Express? FastAPI?)
2. ✅ **Find your documentation** (Claude.md, architecture docs, docs/ folder)
3. ✅ **Analyze your code structure** (components, routes, patterns)
4. ✅ **Infer your project purpose** (E-commerce? Healthcare? Analytics?)
5. ✅ **Extract coding conventions** (from docs, eslint, prettier)
6. ✅ **Synthesize architecture understanding** (reads multiple docs, builds mental model)
7. ✅ **Create backlog for missing docs** (gaps become tasks, not blockers!)
8. ✅ **Ask only what it can't detect** (2-3 questions max)

**What makes it intelligent:**
- 🧠 Reads `frontend/Claude.md` and `backend/Claude.md` if they exist
- 🧠 Analyzes dependencies to infer project type (Stripe → E-commerce)
- 🧠 Smart doc filtering (reads architecture, skips user guides)
- 🧠 **Infers architecture** from existing docs (no rigid ARCHITECTURE.md requirement)
- 🧠 **Logs missing docs as tasks** in `agents/backlog/documentation-tasks.md`
- 🧠 Presents findings and asks you to confirm
- 🧠 No redundant questions about things in package.json

**The Onboarding-as-Discovery approach:**
- 📋 Onboarding itself is the first PM task
- 📋 Analyzes project, identifies gaps, creates actionable backlog
- 📋 Missing Claude.md files? → Logged as tasks with effort estimates
- 📋 Incomplete architecture docs? → Logged as tasks for later
- 📋 **Nothing blocks progress** - you decide: "docs first" or "build first"

**Time:** 5 minutes from existing code to AI-ready framework + prioritized backlog.

---

## 🔄 Getting Framework Updates

After cloning the framework, set up dual remotes to pull future updates:

```bash
# 1. Change origin to YOUR project repo
git remote rename origin framework
git remote add origin git@github.com:YOUR-USERNAME/your-project.git

# 2. Verify setup
git remote -v
# framework → agentic-pm.git (pull updates from here)
# origin    → your-project.git (push your changes here)

# 3. Push to your repo
git push -u origin main
```

**When framework updates are released:**

```bash
# Pull framework improvements
git pull framework main

# Push to your project
git push origin main
```

**The `.template.md` system protects your work:**
- Framework updates: `NOW.template.md`, `fe-agent.template.md` (templates)
- Your configs: `NOW.md`, `fe-agent.md` (created from templates)
- Framework updates templates → Your files stay safe!

---

## 🎯 What You Get

### New Project Setup

```
my-awesome-project/
├── frontend/                     ← YOUR app (React/Vue/Svelte + TypeScript)
│   └── src/components/
│       └── YourFirstFeature.tsx  ← ✅ AI built this!
├── backend/                      ← YOUR API (Express/Fastify/NestJS)
│   └── src/routes/
│       └── yourRoute.ts          ← ✅ AI built this!
├── agentic-pm/                   ← Framework (configured for your stack)
│   ├── agents/onboarding/        ← Your project rules
│   ├── agents/tasks/             ← Completed tasks
│   ├── docs/                     ← Project tracking
│   └── sdk/                      ← SDK tools
└── .env                          ← API key configured
```

### Existing Project Setup

```
your-existing-project/
├── frontend-dashboard/           ← YOUR existing React app
│   ├── src/                      ← Unchanged (AI analyzed it!)
│   └── claude.md                 ← AI found and read this!
├── backend/                      ← YOUR existing Express API
│   ├── src/                      ← Unchanged (AI analyzed it!)
│   └── claude.md                 ← AI found and read this!
├── docs/                         ← AI read architecture docs!
│   └── architecture.md
├── agentic-pm/                   ← Framework (NEW - configured to YOUR codebase)
│   ├── agents/onboarding/
│   │   ├── fe-agent.md           ← Configured with YOUR React patterns
│   │   └── be-agent.md           ← Configured with YOUR Express patterns
│   ├── config.json               ← Points to YOUR frontend/ and backend/
│   └── docs/                     ← NOW.md, ROADMAP.md for YOUR project
└── .env                          ← ANTHROPIC_API_KEY added
```

---

## 📚 Documentation

### **🧭 Start Here**
- **[NAVIGATION.md](NAVIGATION.md)** - Master documentation map (AI reads this first!)

### **Getting Started (Phase 1: Onboarding)**
- **[setup/START.ai.md](setup/START.ai.md)** - Auto-bootstrap guide (for AI)
- **[setup/QUICKSTART.human.md](setup/QUICKSTART.human.md)** - Quick reference (for humans)
- **[setup/README.human.md](setup/README.human.md)** - Setup folder guide

### **Daily Operations (Phase 2: After Setup)**
- **[docs/START-HERE.human.md](docs/START-HERE.human.md)** - Main navigation hub
- **[docs/guides/](docs/guides/)** - How-to guides
- **[docs/reference/](docs/reference/)** - Technical reference

### **For AI Agents**
- **[.ai-instructions/README.ai.md](.ai-instructions/README.ai.md)** - What AI instructions are
- **[setup/NEW-PROJECT.ai.md](setup/NEW-PROJECT.ai.md)** - Create new projects (one-time setup)
- **[setup/EXISTING-PROJECT.ai.md](setup/EXISTING-PROJECT.ai.md)** - Add to existing projects (one-time setup)
- **[.ai-instructions/MANAGER-ONBOARDING.ai.md](.ai-instructions/MANAGER-ONBOARDING.ai.md)** - Manager AI behavior

### **For Developers**
- **[.dev/](.dev/)** - Framework development docs

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

## 🔮 Future Enhancements

Planned features and improvements are documented in the **[`.future/`](.future/)** folder:

- **[Usage Analytics](.future/USAGE-ANALYTICS.md)** - Optional anonymous telemetry to understand how people use the framework
- **[Community Features](.future/COMMUNITY-FEATURES.md)** - Showcase projects, GitHub Discussions, recognition program
- **[Distribution Strategy](.future/DISTRIBUTION-STRATEGY.md)** - Growth plan, marketing channels, launch strategy

These are detailed specifications ready for implementation when needed. Check them out to see what's coming!

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
cat NAVIGATION.md  # Read navigation guide
cat setup/START.ai.md  # Read setup guide
```

**Ship features 12x faster. Start now.**
