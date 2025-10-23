# 🚀 Onboarding Guide - Task-Driven PM Framework

> **For:** New users setting up the framework for their project
> **Time:** 15-20 minutes
> **Result:** Fully configured AI-powered project management system

---

## 📋 Prerequisites

Before starting, ensure you have:

- ✅ **Node.js 18+** installed (`node --version`)
- ✅ **Your project** with frontend and/or backend code
- ✅ **Anthropic API key** (get one at https://console.anthropic.com/)
- ✅ **Project folder structure** like this:
  ```
  your-project/
  ├── frontend/    (or client, web, dashboard, etc.)
  ├── backend/     (or server, api, etc.)
  └── .pm/         (this framework - you'll add it here)
  ```

---

## 🎯 Quick Start (5 Steps)

### **Step 1: Copy Framework to Your Project**

```bash
# Clone or download the framework
git clone https://github.com/d3r3nic/task-driven-pm-framework.git

# Copy .pm folder to your project root
cp -r task-driven-pm-framework/.pm /path/to/your-project/

# IMPORTANT: Set up gitignore at project root
cp task-driven-pm-framework/.gitignore.example /path/to/your-project/.gitignore

# Navigate to .pm folder
cd /path/to/your-project/.pm
```

**Verify structure:**
```
your-project/
├── .gitignore          ← Root gitignore (keeps frontend/backend out)
├── frontend/           ← Your existing frontend code
├── backend/            ← Your existing backend code
└── .pm/                ← Framework (tracked in git)
    ├── .gitignore      ← PM-specific gitignore (config.json, etc.)
    ├── package.json
    ├── sdk/
    ├── agents/
    └── ...
```

**Two-level gitignore strategy:**
- **Root `.gitignore`**: Excludes `frontend/` and `backend/` folders (tracked separately)
- **`.pm/.gitignore`**: Excludes `config.json`, `.env`, user-specific configs

---

### **Step 2: Install Dependencies**

```bash
npm install
```

This installs:
- Claude Agent SDK
- TypeScript
- Zod (for validation)

**Expected output:**
```
added 65 packages in 3s
```

---

### **Step 3: Run Interactive Onboarding**

```bash
npm run onboard
```

**What this does:**
1. Auto-detects your frontend/backend folders
2. Asks you to confirm or customize paths
3. Asks for your project name
4. Creates `config.json` with your project paths

**Example interaction:**
```
╔══════════════════════════════════════════════════════════════════╗
║  Task-Driven PM Framework - Onboarding                          ║
╚══════════════════════════════════════════════════════════════════╝

📁 Detected paths:

   Project Root: /Users/you/my-saas-app
   Frontend:     /Users/you/my-saas-app/frontend
   Backend:      /Users/you/my-saas-app/backend
   PM Framework: /Users/you/my-saas-app/.pm

Are these paths correct? (y/n): y

Project name: My SaaS App

✅ Configuration created successfully!
```

**What gets created:**
- `config.json` - Your project paths (gitignored, won't be committed)

---

### **Step 4: Configure Onboarding Files**

Update **3 template files** with your project specifics:

#### **A) Frontend Agent Configuration**

```bash
# Copy template
cp agents/onboarding/fe-agent.template.md agents/onboarding/fe-agent.md

# Edit with your project details
vim agents/onboarding/fe-agent.md
```

**What to update:**
- Project name
- Tech stack (React/Vue/Angular, state management, etc.)
- Documentation locations (where are your project docs?)
- Critical rules (coding standards, architecture patterns)
- Folder structure

**Example:**
```markdown
## Project Structure

**Project Name:** My SaaS App
**Frontend Location:** /Users/you/my-saas-app/frontend
**Tech Stack:**
- React 18 + TypeScript
- Redux Toolkit
- Material-UI

## Critical Rules

### Rule #1: Use Redux Toolkit
- All state management via RTK
- No useState for global state
...
```

#### **B) Backend Agent Configuration**

```bash
# Copy template
cp agents/onboarding/be-agent.template.md agents/onboarding/be-agent.md

# Edit with your project details
vim agents/onboarding/be-agent.md
```

**What to update:**
- Backend framework (Node.js/Python/Go, etc.)
- Database (PostgreSQL/MongoDB/etc.)
- API patterns (REST/GraphQL)
- Security rules
- Testing requirements

#### **C) Auditor Guidelines**

```bash
# Copy template
cp agents/onboarding/auditor-guidelines.template.md agents/onboarding/auditor-guidelines.md

# Edit with your quality standards
vim agents/onboarding/auditor-guidelines.md
```

**What to update:**
- Code quality standards
- Security requirements
- Performance thresholds
- What constitutes pass/fail

---

### **Step 5: Set API Key**

```bash
# Set environment variable
export ANTHROPIC_API_KEY="sk-ant-api03-..."

# Or add to your shell profile
echo 'export ANTHROPIC_API_KEY="sk-ant-api03-..."' >> ~/.zshrc
source ~/.zshrc
```

**Alternative: Use .env file**
```bash
echo 'ANTHROPIC_API_KEY=sk-ant-api03-...' > .env
```

---

## ✅ **Onboarding Complete!**

Verify everything works:

```bash
# Check configuration
cat config.json

# Check onboarding files exist
ls agents/onboarding/
# Should show: fe-agent.md, be-agent.md, auditor-guidelines.md
```

---

## 🎓 **Next Steps: Your First Week**

### **1. Define Your Project Plan**

Edit `ROADMAP.md`:
```bash
vim ROADMAP.md
```

**Fill in:**
- Project name and goal
- Tech stack
- Phase 1 deliverables (Week 1-2)
- Phase 2 deliverables (Week 3-4)
- etc.

**Example:**
```markdown
## Phase 1: User Authentication (Week 1-2)

**Backend:**
- User registration API
- Login API
- JWT authentication

**Frontend:**
- Login page
- Registration form
- Protected routes

**Success Criteria:**
✅ Users can register and login
✅ Protected pages require authentication
```

### **2. Update Project Status**

Edit `NOW.md`:
```bash
vim NOW.md
```

**Update:**
- Current phase
- What you're working on this week
- Blockers (if any)

### **3. Define API Contracts** (if applicable)

Edit `integration.md`:
```bash
vim integration.md
```

**Add your APIs:**
```markdown
## Week 1: Authentication APIs

### 1. User Registration
**Endpoint:** `POST /api/auth/register`
**Request:**
{
  "email": "user@example.com",
  "password": "secure123"
}
**Response (201):**
{
  "userId": "uuid",
  "token": "jwt-token"
}
```

---

## 🚀 **Start Using the Framework**

### **Example: Implement Week 1 Feature**

**With AI Assistant (Claude Code):**

1. Open Claude Code in your project
2. Say: "I want to implement Week 1: User Authentication"
3. AI (Manager) will:
   - Read your ROADMAP.md
   - Create task files (fe-task-001, be-task-001, etc.)
   - Ask for your approval
   - Spawn agents to implement everything in parallel
   - Show you results

**Manual spawning (without AI Manager):**

```bash
# Create a task file manually
cp agents/templates/fe-task-template.md agents/tasks/2025-10-22/fe-task-001.md

# Edit it with what to build
vim agents/tasks/2025-10-22/fe-task-001.md

# Spawn agent to implement
npm run spawn fe-implementor 2025-10-22 fe-task-001

# Agent implements and writes results to task file
cat agents/tasks/2025-10-22/fe-task-001.md
# Check the AGENT REPORT section for results
```

---

## 📁 **What Files Should You Customize?**

### **✅ Always Customize (Core Setup):**
| File | Purpose | When |
|------|---------|------|
| `config.json` | Project paths | Auto-created by `npm run onboard` |
| `agents/onboarding/fe-agent.md` | Frontend rules | Copy from template, fill in |
| `agents/onboarding/be-agent.md` | Backend rules | Copy from template, fill in |
| `agents/onboarding/auditor-guidelines.md` | Quality standards | Copy from template, fill in |
| `ROADMAP.md` | Your project plan | Edit with your phases |
| `NOW.md` | Current status | Update weekly |

### **✅ Optional (Enhanced Setup):**
| File | Purpose |
|------|---------|
| `integration.md` | API contracts |
| `logs/00-GENESIS.md` | Why this project exists |
| `MANAGER-ONBOARDING.md` | Customize Manager AI behavior |

### **❌ Never Edit (Framework Files):**
| File/Folder | Reason |
|-------------|--------|
| `sdk/*` | Framework code |
| `agents/templates/*` | Task templates (use, don't edit) |
| `package.json` | Dependencies |

---

## 🔒 **Security Checklist**

Before committing to git:

```bash
# Verify ROOT gitignore excludes your app code
cat ../.gitignore
# Should exclude: frontend/, backend/

# Verify PM gitignore excludes sensitive configs
cat .gitignore
# Should exclude: config.json, .env, sessions.json, agents/onboarding/*.md (non-templates)
```

**What's safe to commit:**
- ✅ `config.template.json` (has placeholders)
- ✅ `agents/onboarding/*.template.md` (templates)
- ✅ Framework code (`sdk/`, `agents/templates/`)
- ✅ `ROADMAP.md`, `NOW.md` (if generic)

**What NEVER to commit:**
- ❌ `config.json` (has your actual paths)
- ❌ `.env` (has API key)
- ❌ `agents/onboarding/*.md` (configured with your project)

---

## ❓ **Troubleshooting**

### "npm run onboard not detecting my folders"

**Problem:** Frontend/backend folder names don't match common patterns

**Solution:** Manually specify paths when prompted:
```
Are these paths correct? (y/n): n

Project root: /Users/you/project
Frontend path: /Users/you/project/web-app
Backend path: /Users/you/project/api-server
```

### "Agent can't find task file"

**Problem:** Paths in config.json are wrong

**Solution:** Re-run onboarding:
```bash
rm config.json
npm run onboard
```

### "Permission denied when agent tries to write files"

**Problem:** Agent doesn't have write permissions

**Solution:** Check `cwd` is set to project root in spawn scripts (should be automatic after `npm run onboard`)

---

## 📚 **Additional Resources**

- **Main README:** Overview and features
- **INTERACTIVE-MANAGER-GUIDE.md:** How to work with AI Manager
- **AI-ASSISTANT-ONBOARDING.md:** Guide for AI assistants helping with setup
- **SDK-ENHANCEMENTS.md:** Advanced SDK features

---

## 🎉 **You're Ready!**

Framework is now configured for **your project**.

**Start building:**
```bash
# Open Claude Code in your project
cd /path/to/your-project

# Say to Claude:
"I want to implement Week 1 from my ROADMAP"
```

Or spawn agents manually:
```bash
npm run spawn fe-implementor 2025-10-22 fe-task-001
```

---

**Need help?** Open an issue at: https://github.com/d3r3nic/task-driven-pm-framework/issues

**Last Updated:** 2025-10-22
