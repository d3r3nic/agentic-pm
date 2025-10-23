# 🤖 AI-Assisted Quickstart - Let Claude Code Set Everything Up

> **For:** Users who want Claude Code to handle the entire setup (1-100)
> **Time:** 5 minutes of answering questions
> **Result:** Fully configured framework ready to spawn agents

---

## 🎯 Overview

Instead of manually following setup steps, **open Claude Code in your project and paste this prompt**. Claude will handle everything from copying files to configuring agents.

---

## 📋 Prerequisites

Before starting, you need:

1. **Claude Code** installed and running
2. **Your project** with frontend and/or backend folders
3. **Anthropic API key** (get from https://console.anthropic.com/)
4. **Node.js 18+** installed

---

## 🚀 The Magic Prompt

Open Claude Code in your project root and paste this:

```
I want to set up the Task-Driven PM Framework for my project. Please:

1. Clone https://github.com/d3r3nic/task-driven-pm-framework.git into a temp folder
2. Copy the framework to my project root
3. Copy .gitignore.example to my project root as .gitignore
4. Navigate to .pm/ and run npm install
5. Run npm run onboard and help me answer the questions
6. Configure the agent onboarding files by asking me about:
   - My frontend stack (framework, state management, UI library)
   - My backend stack (language, database, API style)
   - My project's coding standards
7. Create a .env file with my Anthropic API key
8. Verify everything is configured correctly
9. Show me how to spawn my first agent

Ask me questions as you go. Don't assume anything about my project.
```

---

## 💬 What Claude Will Ask You

Claude Code will interactively gather this information:

### **Project Structure Questions**
- "Where is your frontend code?" (e.g., `frontend/`, `client/`, `web/`)
- "Where is your backend code?" (e.g., `backend/`, `server/`, `api/`)
- "What's your project name?"

### **Frontend Configuration**
- "What framework? (React/Vue/Angular/Svelte/etc.)"
- "State management? (Redux/Zustand/Pinia/etc.)"
- "UI library? (Material-UI/Chakra/Tailwind/etc.)"
- "Component patterns? (hooks, factory functions, etc.)"
- "Key coding rules?" (2-3 most important)

### **Backend Configuration**
- "What language/runtime? (Node.js/Python/Go/etc.)"
- "Framework? (Express/Fastify/Django/etc.)"
- "Database? (PostgreSQL/MySQL/MongoDB/etc.)"
- "API style? (REST/GraphQL/tRPC/etc.)"
- "Key coding rules?" (2-3 most important)

### **Security**
- "What's your Anthropic API key?" (paste `sk-ant-api03-...`)

---

## ✅ What Claude Will Do Automatically

Claude Code handles 100% of setup:

1. ✅ **Downloads framework** - Clones repo to temp location
2. ✅ **Copies files** - Moves root directory to your project
3. ✅ **Sets up gitignore** - Configures two-level strategy
4. ✅ **Installs dependencies** - Runs `npm install` in root directory
5. ✅ **Runs onboarding** - Executes `npm run onboard` script
6. ✅ **Creates config.json** - With your actual project paths
7. ✅ **Configures agents** - Updates 3 onboarding files:
   - `agents/onboarding/fe-agent.md` (your frontend stack)
   - `agents/onboarding/be-agent.md` (your backend stack)
   - `agents/onboarding/auditor-guidelines.md` (your quality standards)
8. ✅ **Creates .env** - With your API key
9. ✅ **Verifies setup** - Checks all files are correct
10. ✅ **Shows next steps** - How to spawn first agent

---

## 🎬 After Setup Complete

Claude will show you how to spawn your first test agent:

```bash
# Test the framework
npx tsx sdk/spawn-agent-simple.ts fe-implementor 2025-10-22 test-task-001
```

Then you're ready to use the framework!

---

## 🔄 Alternative: Paste Step-by-Step

If the magic prompt doesn't work, break it into smaller chunks:

### **Phase 1: Installation**
```
Clone https://github.com/d3r3nic/task-driven-pm-framework.git to a temp folder,
then copy the framework to my project root. Also copy .gitignore.example
as .gitignore to my project root.
```

### **Phase 2: Dependencies**
```
Navigate to .pm/ and run npm install
```

### **Phase 3: Configuration**
```
Run npm run onboard in the framework and help me answer the questions about
my project structure.
```

### **Phase 4: Agent Setup**
```
Now configure the agent onboarding files. Ask me about my frontend stack,
backend stack, and coding standards. Update the 3 files in agents/onboarding/
```

### **Phase 5: API Key**
```
Create a .env file in .pm/ with ANTHROPIC_API_KEY=<my-key>
```

### **Phase 6: Verification**
```
Verify the setup is complete by checking:
1. config.json exists and has my paths
2. .env has my API key
3. All 3 agent onboarding files are configured
4. .gitignore excludes frontend/ and backend/
```

---

## 🆘 If Something Goes Wrong

**Claude can't find your project folders?**
- Tell Claude the exact paths: "My frontend is in `./dashboard` and backend is in `./api`"

**API key not working?**
- Verify it starts with `sk-ant-api03-`
- Check you copied the entire key (they're long)

**npm install fails?**
- Make sure Node.js 18+ is installed: `node --version`

**Still stuck?**
- Follow the manual guide in `setup/QUICKSTART-AI.md`
- Or check AI-ASSISTANT-ONBOARDING.md for Claude Code's detailed workflow

---

## 📚 What Gets Created

After setup, your project will look like:

```
your-project/
├── .gitignore                    ← Excludes frontend/backend from git
├── frontend/                     ← Your existing code (not committed)
├── backend/                      ← Your existing code (not committed)
└── .pm/                          ← Framework (committed to git)
    ├── .env                      ← Your API key (gitignored)
    ├── config.json               ← Your paths (gitignored)
    ├── agents/
    │   ├── onboarding/
    │   │   ├── fe-agent.md       ← YOUR frontend config (gitignored)
    │   │   ├── be-agent.md       ← YOUR backend config (gitignored)
    │   │   ├── auditor-guidelines.md  ← YOUR standards (gitignored)
    │   │   ├── fe-agent.template.md   ← Template (committed)
    │   │   ├── be-agent.template.md   ← Template (committed)
    │   │   └── auditor-guidelines.template.md  ← Template (committed)
    │   └── tasks/                ← Task files created during work
    ├── sdk/                      ← Framework code (committed)
    └── package.json              ← Dependencies (committed)
```

---

## 🎯 Next Steps After Setup

1. **Test spawn an agent** - Claude will show you the command
2. **Read NOW.md** - Understand the 7-week plan structure
3. **Create your first task** - Or ask Claude to create one
4. **Start building!** 🚀

---

## 💡 Pro Tips

- **Let Claude ask questions** - Don't provide everything upfront
- **Be specific** - "We use React with TypeScript and Zustand" vs "React"
- **Mention coding rules** - If you have a CLAUDE.md, tell Claude to read it
- **Test incrementally** - Spawn one agent first before running batch tasks

---

## 🤝 Getting Help

- **During setup:** Ask Claude Code to explain any step
- **After setup:** Check `docs/guides/INTERACTIVE-MANAGER-GUIDE.md` for usage
- **Issues:** https://github.com/d3r3nic/task-driven-pm-framework/issues
