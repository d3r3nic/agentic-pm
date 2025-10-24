# 🚀 START - Auto-Bootstrap Guide for Claude Code

> **For:** Claude Code when user pastes the magic command from README
> **Purpose:** Automatically bootstrap full-stack project from scratch
> **Trigger:** User runs `claude "Clone https://github.com/d3r3nic/task-driven-pm-framework..."`
> **Or:** User types "start" in empty folder

---

## 🎯 What Just Happened

The user pasted the command from the README.

**Expected state:**
- This repository should be cloned to their current directory
- If not cloned yet, clone it now: `git clone https://github.com/d3r3nic/task-driven-pm-framework.git .`

**Their goal:**
1. **Use this framework** (they want all the guides, templates, and SDK tools)
2. **Set up a complete full-stack project** in their current directory
3. **Configure the PM Framework** for their specific project
4. **Build their first feature with AI agents**

They want **zero manual work** - you do everything.

**Important:** They want the framework cloned so they can:
- Reference guides locally
- See the SDK code
- Use templates
- Understand the structure

---

## 📋 Your Checklist

Follow these steps in order. **Read `.ai-instructions/BOOTSTRAP-NEW-PROJECT.ai.md` for detailed implementation.**

### **Phase 1: Detect Context**

Check what's in the current folder:
```bash
ls -la
```

**If empty or near-empty:**
- ✅ Proceed with full bootstrap (new project from scratch)
- Read and follow `.ai-instructions/BOOTSTRAP-NEW-PROJECT.ai.md`

**If existing code detected (frontend/, backend/, src/, etc.):**
- ✅ Proceed with framework installation only
- Read and follow `.ai-instructions/BOOTSTRAP-EXISTING-PROJECT.ai.md`
- Skip project creation, just add agentic-pm/

---

## 🎬 Full Bootstrap Flow (Empty Folder)

### **Step 1: Greet & Discover**

**Say to user:**
```
🚀 I'll set up a complete full-stack project with AI-powered project management!

Let me ask you a few quick questions (takes 2 minutes):

1. What are you building?
   (e.g., "A task management app", "E-commerce site", "Portfolio")

2. Tech stack preferences:
   - Frontend: React, Vue, Svelte, Next.js, or other?
   - Backend: Express, Fastify, NestJS, or other?
   - Database: PostgreSQL, MySQL, MongoDB, or none yet?

   (Just say "defaults" and I'll use React + Express + PostgreSQL)

3. What's ONE feature you want me to build first?
   (e.g., "User login", "Product catalog", "Dashboard")

4. Git setup:
   - A: Single repo (everything together)
   - B: Separate repos (frontend, backend, .pm independent)
```

**Gather:**
- Project description/name
- Frontend framework (default: React + TypeScript + Vite)
- Backend framework (default: Express + TypeScript)
- Database choice (default: PostgreSQL with Prisma)
- First feature description
- Git strategy (default: Single repo if unclear)

---

### **Step 2: Create Project Structure**

**Tell user:**
```
✅ Got it! I'm now creating:
- {Frontend framework} frontend with TypeScript
- {Backend framework} backend with TypeScript
- {Database} with Prisma ORM
- Task-Driven PM Framework
- Your first feature: {feature description}

This will take about 3-5 minutes. I'll update you as I go...
```

**Then execute (following BOOTSTRAP-NEW-PROJECT.md):**

1. Create frontend boilerplate
2. Create backend boilerplate
3. Set up database (Prisma schema)
4. Clone and install PM Framework
5. Configure git strategy
6. Configure agent onboarding files
7. Create first task(s)
8. Spawn agent to implement first feature

**Update user after each major step:**
- "✅ Frontend created (React + TypeScript + Vite)"
- "✅ Backend created (Express + TypeScript)"
- "✅ Database schema configured (Prisma + PostgreSQL)"
- "✅ PM Framework installed and configured"
- "✅ Git initialized (single repo strategy)"
- "🤖 Spawning agent to build: {feature}..."
- "✅ Feature complete! Agent report written."

---

### **Step 3: Final Summary**

**When everything is done, tell user:**

```
✨ ALL DONE! Here's your project:

📁 Project Structure:
{project-name}/
├── .gitignore              ← Configured for {git strategy}
├── frontend/               ← {Framework} app (ready to run)
│   ├── package.json
│   ├── src/
│   │   ├── App.tsx
│   │   ├── components/
│   │   │   └── {FirstFeatureComponent}.tsx  ← ✅ AI built this!
│   │   └── ...
│   └── ...
├── backend/                ← {Framework} API (ready to run)
│   ├── package.json
│   ├── src/
│   │   ├── index.ts
│   │   ├── routes/
│   │   │   └── {firstFeatureRoute}.ts  ← ✅ AI built this!
│   │   └── ...
│   ├── prisma/
│   │   └── schema.prisma   ← ✅ Database schema
│   └── ...
└── .pm/                    ← AI PM Framework (configured)
    ├── .env                ← Your API key
    ├── config.json         ← Auto-configured paths
    ├── agents/
    │   ├── onboarding/     ← Configured for your stack
    │   └── tasks/
    │       └── {date}/
    │           ├── fe-task-001.md  ← ✅ Completed by AI
    │           └── be-task-001.md  ← ✅ Completed by AI
    └── sdk/                ← Ready to spawn more agents

🎯 First Feature: {feature description}
Status: ✅ COMPLETE

Files AI Created:
- frontend/src/components/{Component}.tsx
- backend/src/routes/{route}.ts
- backend/prisma/schema.prisma
- agents/tasks/{date}/fe-task-001.md
- agents/tasks/{date}/be-task-001.md

📝 Check the AGENT REPORT sections in task files for implementation details.

---

🚀 To run your app:

Terminal 1 (Backend):
```bash
cd backend
npm run dev
# Server runs on http://localhost:3000
```

Terminal 2 (Frontend):
```bash
cd frontend
npm run dev
# App runs on http://localhost:5173
```

Terminal 3 (Database - first time only):
```bash
cd backend
npx prisma migrate dev --name init
npx prisma generate
```

---

🎯 Next Steps:

**Build more features:**
Just tell me what you want:
- "Create a task for user profile page"
- "Add password reset functionality"
- "Build a dashboard with charts"

I'll create the task file and spawn an agent to implement it!

**Or use the SDK yourself:**
```bash
cd .pm
npx tsx sdk/spawn-agent-simple.ts fe-implementor {date} {task-id}
```

**Check project roadmap:**
- See NOW.md for current status
- See integration.md for API documentation
- Read INTERACTIVE-MANAGER-GUIDE.md for framework usage

---

Happy building! 🎉
```

---

## 🔄 Existing Project Flow (Folder Has Code)

If you detect existing code, **don't create new boilerplate**. Instead:

**Say to user:**
```
I see you already have code here! I'll just install and configure
the Task-Driven PM Framework for your existing project.

Let me ask a few questions about your setup...
```

Then follow `.ai-instructions/BOOTSTRAP-EXISTING-PROJECT.ai.md` instead of BOOTSTRAP-NEW-PROJECT.ai.md.

---

## 🎯 Key Behaviors

### **Be Conversational**
- Use friendly language
- Show progress as you work
- Celebrate when done!

### **Ask, Don't Assume**
- Always ask about preferences
- Offer defaults if user is unsure
- Clarify ambiguous requests

### **Show Your Work**
- Update user after each major step
- Show what files you created
- Explain what the agent built

### **Handle Errors Gracefully**
- If npm install fails → check Node version, try again
- If agent spawn fails → check API key, paths
- If unclear → ask user for clarification

---

## 🆘 Common Issues

**User says "start" but folder isn't empty:**
- Ask: "I see some files here. Do you want me to (A) add PM framework to this project, or (B) create a new project in a subfolder?"

**No API key:**
- Detect missing ANTHROPIC_API_KEY
- Ask user for it: "I need your Anthropic API key. Get one at https://console.anthropic.com/"
- Create .env file with their key

**User unsure about tech stack:**
- Say: "No problem! I'll use proven defaults: React + Express + PostgreSQL. Sound good?"
- Proceed with defaults if they agree

**Node.js not installed or wrong version:**
- Detect with `node --version`
- Tell user: "You need Node.js 18+. Install from https://nodejs.org/"

---

## 💡 Pro Tips

1. **Keep it simple** - Don't overwhelm with options
2. **Use defaults** - Most users want React + Express
3. **Show progress** - Update user every 30-60 seconds
4. **Test the spawn** - Actually run the agent so user sees immediate value
5. **Celebrate success** - Make the completion message exciting!

---

## 🎁 Remember

The user said **"start"** because they want:
- **Zero manual work**
- **Quick results** (< 10 minutes)
- **Working code** (not just scaffolding)
- **AI to handle everything**

Deliver on that promise! 🚀
