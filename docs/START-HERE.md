# Project Management Hub

> **Welcome to the PM Hub** - Your central command center for orchestrating project development.

---

## 🆕 First Time Here?

### **Setting up for a NEW project?**
→ Read [`BOOTSTRAP.md`](BOOTSTRAP.md) - 10-minute setup guide

### **Forked this for a different project?**
→ Read [`BOOTSTRAP.md`](BOOTSTRAP.md) - Configure paths and create agents

---

## 🚀 Quick Navigation

### **Getting Started**
- **New Manager AI (replacement)?** → Read [`MANAGER-ONBOARDING.md`](MANAGER-ONBOARDING.md)
- **Want to understand the agent system?** → Read [`agents/README.md`](agents/README.md)

### **Current Status (Always Start Here!)**
- **📍 Where are we right now?** → [`NOW.md`](NOW.md)
- **🗺️ What's the full plan?** → [`ROADMAP.md`](ROADMAP.md)

### **Reference & Coordination**
- **🔗 What APIs exist? What's the contract?** → [`integration.md`](integration.md)
- **📋 How do I prompt agents?** → [`templates/`](templates/)

### **Historical Records**
- **📜 Why does this PM system exist?** → [`logs/00-GENESIS.md`](logs/00-GENESIS.md)
- **🤔 Why did we make decision X?** → [`logs/decisions/`](logs/decisions/)
- **🎉 What milestones have we hit?** → [`logs/milestones/`](logs/milestones/)

---

## 🎯 How This System Works

### **The 1000% Efficiency Model**

**You (Owner): 1% Effort**
- Approve direction at decision points
- Steer strategy when needed
- Review and confirm architectural choices

**Manager AI: 99% Orchestration**
- Maintain full FE ↔ BE mental model
- Create prompts for specialized agents
- Track progress in NOW.md
- Coordinate integration points
- Log decisions and milestones

**FE/BE Agents: Specialized Execution**
- Study onboarding once
- Receive clear, sequential tasks
- Build features following established patterns
- Report back to Manager AI

---

## 📚 Folder Structure

```
.pm/
├── START-HERE.md              ← You are here
├── NOW.md                     ← Current status (updated frequently)
├── ROADMAP.md                 ← 7-week plan with checkpoints
├── integration.md             ← API contracts & handoff points
│
├── onboarding/                ← Static guides (never grow)
│   ├── FE-AGENT.md
│   ├── BE-AGENT.md
│   └── MANAGER-AI.md
│
├── templates/                 ← Prompt templates
│   ├── prompt-fe-template.md
│   ├── prompt-be-template.md
│   └── weekly-review-template.md
│
└── logs/                      ← Historical records
    ├── 00-GENESIS.md          ← Why this system exists
    ├── decisions/             ← Architectural decisions
    │   └── YYYY-MM-DD-name.md
    ├── weeks/                 ← Weekly completion logs
    │   └── week-NN-name.md
    └── milestones/            ← Major achievements
        └── YYYY-MM-DD-name.md
```

---

## 🔄 Typical Workflow

1. **Check Status** → Read `NOW.md` (30 seconds to know where we are)
2. **Get Context** → Review current phase in `ROADMAP.md`
3. **Prompt Agents** → Use templates to create FE/BE tasks
4. **Track Progress** → Update `NOW.md` as work completes
5. **Log Outcomes** → Add to `logs/weeks/` when milestones hit
6. **Document Decisions** → Add to `logs/decisions/` when architectural choices made

---

## ⚡ Quick Commands

### See current status
```bash
cat /Users/d3r3nic/Development3/docs/NOW.template.md
```

### See full roadmap
```bash
cat /Users/d3r3nic/Development3/docs/ROADMAP.template.md
```

### Check what APIs exist
```bash
cat /Users/d3r3nic/Development3/docs/integration.template.md
```

### Review genesis (why this exists)
```bash
cat /Users/d3r3nic/Development3/logs/00-GENESIS.md
```

---

## 🎓 First Time Here?

**If you're a new agent:**
1. Read the appropriate onboarding guide (`onboarding/`)
2. Wait for Manager AI to assign your first task
3. Follow the prompt template pattern

**If you're the Manager AI:**
1. Read `onboarding/MANAGER-AI.md` to understand your role
2. Review `NOW.md` to see current status
3. Check `ROADMAP.md` for the plan
4. Use `templates/` to create agent prompts

**If you're the Owner:**
1. Read `NOW.md` to see what's happening
2. Review proposed approaches when Manager AI asks
3. Approve direction (Manager handles the rest)

---

## 📊 Success Metrics

This system is working when:
- ✅ Owner never feels overwhelmed
- ✅ No context is lost between sessions
- ✅ "Where are we?" takes 30 seconds to answer
- ✅ Agents are self-sufficient after onboarding
- ✅ Integration points are clear and tracked
- ✅ Decisions are documented and searchable

---

**Last Updated:** 2025-10-22

**Remember:** This is the meta-project - the system that manages building the actual project.
