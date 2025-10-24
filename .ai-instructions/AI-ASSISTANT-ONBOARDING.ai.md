# AI Assistant Onboarding Guide

> **For:** AI assistants (like Claude Code) helping users onboard this framework
> **Purpose:** Step-by-step guide to configure framework for user's project
> **Time:** 10-15 minutes of user Q&A

---

## 🎯 Your Role

You're helping a user configure the Task-Driven PM Framework for **their project**. Your job:

1. Ask questions to gather project info
2. Run onboarding scripts
3. Update configuration files
4. Verify setup is complete
5. Explain next steps

**Be interactive - don't assume anything!**

---

## 📋 Onboarding Checklist

### **Step 1: Verify Prerequisites**

**Ask user:**
```
I'll help you set up the Task-Driven PM Framework. First, let me verify:

1. Do you have Node.js 18+ installed? (Run: node --version)
2. Do you have an Anthropic API key?
3. What's your project structure? Do you have:
   - Frontend folder? (React/Vue/etc.)
   - Backend folder? (Node/Python/etc.)
   - Or both?
```

**If missing Node.js:**
- Guide to https://nodejs.org/

**If missing API key:**
- Guide to https://console.anthropic.com/

---

### **Step 2: Install Dependencies**

```bash
cd .pm
npm install
```

**Verify success:**
- Should see "added 65 packages"
- No errors

---

### **Step 3: Run Interactive Onboarding**

```bash
npm run onboard
```

**Script will:**
1. Auto-detect project folders
2. Ask user to confirm paths
3. Ask for project name
4. Create `config.json`

**Your job:**
- Explain what the script is doing
- Help if auto-detection fails
- Verify `config.json` was created

**Check:**
```bash
cat config.json
```

Should contain actual paths (not placeholders).

---

### **Step 4: Configure Frontend Agent**

**Ask user:**
```
Now I need to configure the frontend agent with your project details.

1. What frontend framework do you use? (React/Vue/Angular/etc.)
2. State management? (Redux/Vuex/Pinia/etc.)
3. UI library? (Material-UI/Ant Design/Tailwind/etc.)
4. Do you have a CLAUDE.md or README with coding rules?
5. What are your 2-3 most important coding rules?
```

**Then:**
```bash
# Copy template
cp agents/onboarding/fe-agent.template.md agents/onboarding/fe-agent.md

# Use Edit tool to update fe-agent.md with:
# - Tech stack from answers
# - Path to their documentation
# - Their critical rules
```

**Update these sections:**
- Project Structure → actual tech stack
- Documentation Locations → actual file paths
- Critical Rules → their top 2-3 rules (with examples)

---

### **Step 5: Configure Backend Agent** (if applicable)

**Ask user:**
```
For the backend configuration:

1. What backend framework? (Node.js/Python/Go/etc.)
2. Database? (PostgreSQL/MongoDB/etc.)
3. ORM or query builder? (Prisma/TypeORM/SQLAlchemy/etc.)
4. What are your top security/coding rules?
```

**Then:**
```bash
cp agents/onboarding/be-agent.template.md agents/onboarding/be-agent.md

# Edit be-agent.md with their info
```

---

### **Step 6: Configure Auditor Guidelines**

**Ask user:**
```
What quality standards should auditors check?

1. Code quality: What score out of 10 is acceptable? (e.g., 7+)
2. Security: Any specific requirements? (auth, input validation, etc.)
3. Performance: Any thresholds? (response time, bundle size, etc.)
4. What's an auto-fail? (e.g., security vulnerabilities, broken tests)
```

**Then:**
```bash
cp agents/onboarding/auditor-guidelines.template.md agents/onboarding/auditor-guidelines.md

# Edit with their standards
```

---

### **Step 7: Set API Key**

```bash
# Option 1: Environment variable
export ANTHROPIC_API_KEY="sk-ant-api03-..."

# Option 2: .env file (recommended)
echo 'ANTHROPIC_API_KEY=sk-ant-api03-...' > .env
```

**Verify:**
```bash
# Should show "sk-ant-api03-..."
echo $ANTHROPIC_API_KEY
```

---

### **Step 8: Test the Setup**

**Create a simple test task:**
```bash
# Create task folder
mkdir -p agents/tasks/$(date +%Y-%m-%d)

# Copy template
cp agents/templates/fe-task-template.md agents/tasks/$(date +%Y-%m-%d)/fe-task-001.md
```

**Edit test task with:**
- Simple component to build
- Minimal requirements
- No dependencies

**Then spawn agent:**
```bash
npm run spawn fe-implementor $(date +%Y-%m-%d) fe-task-001
```

**Success looks like:**
- Agent reads task file ✅
- Agent implements ✅
- Agent writes AGENT REPORT ✅
- Cost: ~$0.05-0.15

---

## ✅ Verification Checklist

After onboarding, verify these files exist and are configured:

```bash
# Check config
cat config.json
# Should have actual paths, not placeholders

# Check onboarding files
ls agents/onboarding/
# Should see: fe-agent.md, be-agent.md, auditor-guidelines.md (configured versions)

# Check API key
echo $ANTHROPIC_API_KEY
# Should show key

# Verify gitignore working
git status
# Should NOT show config.json or agents/onboarding/*.md files
```

---

## 🔍 Common Issues & Solutions

### **Issue: "npm run onboard not detecting folders"**

**Solution:** Manually guide user:
```
The script couldn't auto-detect your folders. Let's specify them manually:

When prompted:
- Project root: /path/to/your/project
- Frontend: /path/to/your/project/[your-frontend-folder-name]
- Backend: /path/to/your/project/[your-backend-folder-name]
```

### **Issue: "Agent can't read task file"**

**Cause:** Wrong paths in config.json

**Solution:**
```bash
rm config.json
npm run onboard
# Re-run with correct paths
```

### **Issue: "Permission denied when agent writes files"**

**Cause:** Agent doesn't have access to project root

**Solution:** Verify `config.json` has correct `projectRoot` path

---

## 💡 Tips for AI Assistants

### **Be Conversational**
```
❌ "Configure fe-agent.md with your tech stack."
✅ "I'll help configure the frontend agent. First, what framework do you use - React, Vue, or something else?"
```

### **Explain Why**
```
❌ "Copy this template."
✅ "I'm copying the template file. This creates a project-specific version that won't be committed to git, so your private config stays local."
```

### **Verify Each Step**
```
After each step: "✅ Config created! Let me verify it looks correct..."
[Read and show relevant parts to user]
```

### **Provide Context**
```
"Now I'm configuring the frontend agent. This file tells agents:
- What tech stack you use
- Where your docs are
- What coding rules to follow

Agents read this on EVERY task, so accurate info here = better code."
```

---

## 📚 Next Steps After Onboarding

**Tell the user:**
```
✅ Onboarding complete! Your framework is configured.

Next steps:
1. Update ROADMAP.md with your project plan
2. Update NOW.md with current status (optional)
3. Create your first task file
4. Start implementing!

Want me to help you create Week 1 tasks from your ROADMAP?
```

---

## 🎓 Example Full Session

**User:** "I want to set up this framework for my project"

**You:**
```
Great! I'll help you set up the Task-Driven PM Framework.

First, let me check: Do you have Node.js 18+ installed?
```

**User:** "Yes, 20.5"

**You:**
```
Perfect. Do you have an Anthropic API key?
```

**User:** "Yes"

**You:**
```
Excellent. Tell me about your project:
1. Frontend framework?
2. Backend framework?
3. Project name?
```

**User:** "React + TypeScript, Node.js with Prisma, it's a SaaS app"

**You:**
```
Got it! React + TS frontend, Node + Prisma backend, SaaS app.

Let me install dependencies and run onboarding...

[Run: npm install]
✅ Dependencies installed

[Run: npm run onboard]
📁 Detected:
   Frontend: /Users/you/saas-app/frontend
   Backend: /Users/you/saas-app/backend

These paths look right?
```

**User:** "Yes"

**You:**
```
[Onboarding completes]
✅ Config created!

Now I'll configure the frontend agent. What are your top coding rules?
For example: "Always use TypeScript", "No inline styles", etc.
```

[Continue through all steps...]

```
✅ All done! Framework configured for your SaaS app.

Want to test it? I can create a simple task and spawn an agent to verify everything works.
```

---

**Last Updated:** 2025-10-22
