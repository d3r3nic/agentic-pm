# AI Instructions - Backend for Claude Code

> **⚠️ FOR AI AGENTS ONLY**
> **Purpose:** Instructions that AI agents (Claude Code) read to understand how to operate
> **Not for users:** Users don't need to read these files

---

## 🤖 What This Folder Contains

These files are **system prompts** and **behavioral instructions** for AI agents.

Think of this as the "backend" of the framework - users interact with the frontend (setup/, docs/), but AI agents read these instructions to know what to do.

---

## 📁 Files in This Folder

### **AI-ASSISTANT-ONBOARDING.ai.md**
- **For:** Claude Code when helping users set up the framework
- **Purpose:** General onboarding instructions and helper behaviors
- **Contains:** Question flow, configuration steps, verification checks
- **When used:** Referenced by other bootstrap files for common patterns

### **BOOTSTRAP-NEW-PROJECT.ai.md**
- **For:** Claude Code creating new projects from scratch
- **Purpose:** How to create frontend + backend + framework in one flow
- **Contains:** Boilerplate creation, tech stack options, first feature implementation
- **When used:** User wants new project in empty folder

### **BOOTSTRAP-EXISTING-PROJECT.ai.md**
- **For:** Claude Code adding framework to existing projects
- **Purpose:** How to install framework without disrupting existing code
- **Contains:** Detection logic, path configuration, integration steps
- **When used:** User has existing frontend/backend and wants to add framework

### **MANAGER-ONBOARDING.ai.md**
- **For:** Manager AI agent (coordinates other agents)
- **Purpose:** How Manager AI should behave, create tasks, track progress
- **Contains:** Task creation protocol, agent spawning, progress tracking
- **When used:** Every time Manager AI runs (`npm run manager`)

---

## 🎯 How This Works

```
User → Pastes prompt in Claude Code
        ↓
Claude Code → Reads .ai-instructions/*.md
        ↓
Claude Code → Follows instructions exactly
        ↓
Result → Framework configured automatically
```

---

## 🔒 Users Don't Touch These

These files are:
- ✅ Read by AI agents automatically
- ✅ Tracked in git (framework updates)
- ❌ NOT edited by users
- ❌ NOT configuration files

**Users configure the framework through:**
- `agents/onboarding/*.md` - Agent behavior for their project
- `docs/*.template.md` - Project-specific templates
- Not these AI instruction files

---

## 🔄 When These Get Updated

Framework maintainers update these files to:
- Improve onboarding flow
- Add new features to AI behavior
- Fix issues in agent instructions
- Enhance user experience

Users pull updates via `git pull` and AI agents automatically use the new instructions.

---

## 📚 See Also

- **NAVIGATION.md** - Master documentation map
- **setup/README.human.md** - User-facing onboarding docs
- **docs/START-HERE.human.md** - Operational framework docs
- **agents/onboarding/*.md** - User configuration files

---

**Last Updated:** 2025-10-23
