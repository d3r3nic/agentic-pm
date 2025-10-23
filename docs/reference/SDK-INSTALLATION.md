# Claude Agent SDK Installation Guide

> **For:** Claude Code when setting up the framework
> **Purpose:** Ensure SDK is properly installed and working

---

## 📦 What Gets Installed

When you run `npm install` in the root directory folder, these packages are installed:

### **Core SDK**
```json
"@anthropic-ai/claude-agent-sdk": "latest"
```

**What it does:**
- Provides `query()` function to spawn AI agents programmatically
- Handles agent sessions and context management
- Manages parallel agent execution
- Tracks costs and performance metrics

### **Dependencies**
```json
"zod": "^3.22.4"              // Schema validation
"typescript": "^5.3.3"         // TypeScript compiler
"tsx": "^4.20.6"               // TypeScript execution
"@types/node": "^20.0.0"       // Node.js types
```

---

## ✅ Installation Steps

### **1. Navigate to framework**
```bash
cd .pm
```

### **2. Install dependencies**
```bash
npm install
```

**Expected output:**
```
added 45 packages in 8s
```

### **3. Verify SDK installation**
```bash
npm list @anthropic-ai/claude-agent-sdk
```

**Should show:**
```
task-driven-pm-framework@2.0.0 /path/to/.pm
└── @anthropic-ai/claude-agent-sdk@0.1.x
```

---

## 🧪 Test SDK Installation

### **Test 1: TypeScript Execution**
```bash
npx tsx --version
```

**Should show:** `4.x.x` or higher

### **Test 2: Import SDK**
```bash
node -e "import('@anthropic-ai/claude-agent-sdk').then(sdk => console.log('✅ SDK loaded:', Object.keys(sdk)))"
```

**Should show:** `✅ SDK loaded: [ 'query', 'tool', 'createSdkMcpServer', ... ]`

### **Test 3: Run Onboarding Script**
```bash
npm run onboard
```

**Should show:**
```
🚀 Task-Driven PM Framework - Onboarding

Detecting project structure...
✅ Found frontend at: /path/to/frontend
✅ Found backend at: /path/to/backend
...
```

---

## 🔧 Troubleshooting

### **Error: Cannot find module '@anthropic-ai/claude-agent-sdk'**

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### **Error: 'tsx' is not recognized**

**Solution:**
```bash
# Install tsx globally
npm install -g tsx

# Or use via npx (already in package.json scripts)
npx tsx sdk/onboard.ts
```

### **Error: Node version not supported**

**Solution:**
```bash
# Check Node version
node --version
# Should be 18.0.0 or higher

# If too old, upgrade Node.js from https://nodejs.org/
```

### **Error: Permission denied during npm install**

**Solution:**
```bash
# Don't use sudo! Fix npm permissions instead:
# https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally

# Or use a version manager like nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18
nvm use 18
```

---

## 📚 SDK Usage Examples

### **Spawn a Single Agent**
```bash
npm run spawn fe-implementor 2025-10-22 fe-task-001
```

**What happens:**
1. SDK reads `agents/tasks/2025-10-22/fe-task-001.md`
2. Loads `agents/onboarding/fe-agent.md` (agent configuration)
3. Spawns Claude agent with those instructions
4. Agent implements the task
5. Agent writes results to AGENT REPORT section
6. Shows cost and duration

### **Spawn Multiple Agents in Parallel**
```bash
npm run spawn:multiple tasks.json
```

**tasks.json:**
```json
[
  { "agentType": "fe-implementor", "taskDate": "2025-10-22", "taskId": "fe-task-001" },
  { "agentType": "be-implementor", "taskDate": "2025-10-22", "taskId": "be-task-001" }
]
```

**What happens:**
1. SDK spawns both agents simultaneously
2. Each runs in isolated context
3. 3-4x faster than sequential
4. Aggregated cost/duration report

### **Interactive Onboarding**
```bash
npm run onboard
```

**What happens:**
1. Detects your frontend/ and backend/ folders
2. Asks for confirmation
3. Creates `config.json` with paths
4. You can then spawn agents

---

## 🎯 What the SDK Does

**Without SDK (manual):**
```
You: "Create a login form"
Claude Code: *creates login form*
You: "Create login API"
Claude Code: *creates API*
You: "Create password reset"
Claude Code: *creates reset feature*
```
❌ Sequential, slow, manual coordination

**With SDK (automated):**
```bash
# You create 3 task files, then:
npm run spawn:multiple tasks.json
```

**SDK spawns 3 agents in parallel:**
- Agent 1: Login form (frontend)
- Agent 2: Login API (backend)
- Agent 3: Password reset (full-stack)

✅ Parallel, fast, automatic coordination
✅ Each agent reads its task file
✅ Each writes completion report
✅ You review results, not implementation

---

## 📖 SDK Documentation

**Official Docs:**
- https://docs.anthropic.com/en/api/agent-sdk/overview
- https://docs.anthropic.com/en/api/agent-sdk/quickstart

**Framework Guides:**
- `INTERACTIVE-MANAGER-GUIDE.md` - How you (Claude Code) use the SDK
- `sdk/spawn-agent-simple.ts` - Simple spawning script
- `sdk/agents.ts` - Agent definitions

---

## ✅ Installation Checklist

After running `npm install`, verify:

- [ ] `node_modules/@anthropic-ai/claude-agent-sdk/` exists
- [ ] `npx tsx --version` works
- [ ] `npm run onboard` runs without errors
- [ ] `config.json` created after onboarding
- [ ] `.env` file has `ANTHROPIC_API_KEY=sk-ant-...`
- [ ] `npm run spawn` shows usage instructions

**If all checked:** ✅ SDK is installed and ready to spawn agents!

---

## 🚀 Next Steps After Installation

1. **Create API key** (if not done):
   ```bash
   # Get key from: https://console.anthropic.com/
   echo "ANTHROPIC_API_KEY=sk-ant-api03-..." > .env
   ```

2. **Run onboarding** (if not done):
   ```bash
   npm run onboard
   ```

3. **Create first task** (or use template):
   ```bash
   mkdir -p agents/tasks/$(date +%Y-%m-%d)
   cp agents/templates/fe-task-template.md agents/tasks/$(date +%Y-%m-%d)/fe-task-001.md
   # Edit the task file with your requirements
   ```

4. **Spawn first agent**:
   ```bash
   npm run spawn fe-implementor $(date +%Y-%m-%d) fe-task-001
   ```

5. **Review results**:
   ```bash
   cat agents/tasks/$(date +%Y-%m-%d)/fe-task-001.md
   # Look for "## 🤖 AGENT REPORT" section
   ```

**You're ready to build with AI agents!** 🎉
