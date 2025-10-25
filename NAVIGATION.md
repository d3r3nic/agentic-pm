# 🧭 NAVIGATION - Master Documentation Map

> **FOR AI AGENTS:** Read this FIRST to understand the entire documentation structure
> **Purpose:** Provides the complete mental model of how documentation connects
> **Updated:** 2025-10-23

---

## 🎯 The Big Picture

This framework has **TWO PHASES** with different documentation:

### **Phase 1: ONBOARDING (One-Time Setup)** ⏰
- **Goal:** Get framework installed and configured
- **Duration:** 5-10 minutes
- **Files:** `setup/` folder ONLY
- **User sees:** Setup questions, configuration
- **After:** User moves to Phase 2
- **Context:** Setup docs DON'T persist after initial setup (context efficient!)

### **Phase 2: OPERATIONAL (Daily Use)** ♻️
- **Goal:** Build features, manage project
- **Duration:** Ongoing (weeks/months)
- **Files:** `.ai-instructions/`, `docs/`, `agents/`
- **User sees:** Roadmap, tasks, progress tracking
- **Context:** These docs persist throughout development (always loaded)

---

## 📚 Complete File Structure

```
agentic-pm/
│
├── NAVIGATION.md                          ← YOU ARE HERE (AI reads this first)
├── README.md                              ← GitHub landing page (HUMAN)
│
├─── 📁 setup/ ─────────────────────────── ⏰ PHASE 1: ONE-TIME SETUP ONLY
│   ├── START.ai.md                        ← Main bootstrap entry (AI)
│   ├── NEW-PROJECT.ai.md                  ← Create new project (AI)
│   ├── EXISTING-PROJECT.ai.md             ← Add to existing (AI)
│   ├── AUTO-START.ai.md                   ← Auto-trigger detection (AI)
│   ├── ASSISTANT-ONBOARDING.ai.md         ← General onboarding (AI)
│   ├── POST-SETUP.md                      ← After-setup advice (AI)
│   ├── README.human.md                    ← Setup folder guide (HUMAN)
│   └── QUICKSTART.human.md                ← Quick reference (HUMAN)
│
├─── 📁 .ai-instructions/ ─────────────── ♻️ PHASE 2: PERSISTENT (ONGOING)
│   ├── README.ai.md                       ← What this folder is (AI)
│   ├── MANAGER-ONBOARDING.ai.md           ← Manager AI behavior (AI)
│   ├── WORK-INTAKE-PROTOCOL.ai.md         ← Universal request handling (AI)
│   ├── SYSTEMATIC-ANALYSIS-PROTOCOL.ai.md ← 8-step analysis (AI)
│   └── FRONTEND-CONTEXT-LOADING.ai.md     ← Frontend awareness (AI)
│
├─── 📁 docs/ ─────────────────────────── PHASE 2: OPERATIONAL
│   ├── START-HERE.human.md                ← Main hub after setup (HUMAN)
│   ├── NOW.template.md                    ← Project status (HUMAN)
│   ├── ROADMAP.template.md                ← Project plan (HUMAN)
│   ├── integration.template.md            ← API contracts (HUMAN)
│   ├── guides/                            ← How-to guides (HUMAN)
│   │   └── INTERACTIVE-MANAGER-GUIDE.md
│   └── reference/                         ← Technical reference (HUMAN)
│
├─── 📁 agents/ ───────────────────────── PHASE 2: AGENT CONFIG
│   ├── README.human.md                    ← Agent system explained (HUMAN)
│   ├── onboarding/                        ← Agent behavior (HUMAN configures)
│   │   ├── fe-agent.template.md
│   │   ├── be-agent.template.md
│   │   └── auditor-guidelines.template.md
│   └── tasks/                             ← Daily task files (AI + HUMAN)
│       └── YYYY-MM-DD/
│           ├── fe-task-NNN.md
│           └── be-task-NNN.md
│
├─── 📁 sdk/ ──────────────────────────── PHASE 2: SPAWNING AGENTS
│   ├── manager.ts                         ← Manager AI SDK
│   ├── spawn-agent-simple.ts              ← Spawn single agent
│   ├── spawn-multiple.ts                  ← Spawn parallel agents
│   └── onboard-manual.ts                  ← Manual CLI setup (alternative)
│
└─── 📁 logs/ ─────────────────────────── PHASE 2: HISTORY
    ├── 00-GENESIS.md                      ← Why this exists (HUMAN)
    ├── decisions/                         ← Architecture decisions (HUMAN)
    ├── weeks/                             ← Weekly logs (HUMAN)
    └── milestones/                        ← Achievements (HUMAN)
```

---

## 🔀 User Journey Flow

### **Journey 1: Brand New User (Empty Folder)**

```
1. User on GitHub
   └─→ Reads: README.md
       └─→ Copies magic prompt

2. User in Claude Code (empty folder)
   └─→ Pastes prompt
       └─→ Claude reads: setup/START.ai.md
           └─→ Analyzes: Empty folder
           └─→ Asks user: "Create NEW project or add to EXISTING?"
               └─→ User chooses: A) New Project
                   └─→ Claude reads: setup/NEW-PROJECT.ai.md
                       └─→ Claude asks 4 questions conversationally
                       └─→ Claude creates:
                           - frontend/
                           - backend/
                           - config.json
                           - agents/onboarding/*.md
                       └─→ Claude spawns first agent
                           └─→ First feature implemented!

3. Setup Complete ✅
   └─→ Setup docs NEVER loaded again (context efficient!)
   └─→ Claude reads: .ai-instructions/MANAGER-ONBOARDING.ai.md
   └─→ User now in PHASE 2
       └─→ Main reference: docs/START-HERE.human.md
           └─→ Daily operations:
               - Update docs/NOW.md
               - Create agents/tasks/*.md
               - Spawn agents with sdk/
```

### **Journey 2: Existing Project**

```
1. User has frontend/ and backend/ already
   └─→ Pastes prompt in Claude Code
       └─→ Claude reads: setup/START.ai.md
           └─→ Analyzes: Existing code detected
           └─→ Asks user: "Create NEW project or add to EXISTING?"
               └─→ User chooses: B) Existing Project
                   └─→ Claude reads: setup/EXISTING-PROJECT.ai.md
                       └─→ Claude creates:
                       - config.json (with detected paths)
                       - agents/onboarding/*.md
                   └─→ Does NOT touch frontend/backend

2. Setup Complete ✅
   └─→ Setup docs NEVER loaded again (context efficient!)
   └─→ User moves to PHASE 2 (same as above)
```

---

## 🤖 AI Agent Decision Tree

### **When AI Reads NAVIGATION.md**

**Question 1: What phase are we in?**

```
Check: Does config.json exist?
├─→ NO  → PHASE 1 (Onboarding)
│         Read: setup/START.ai.md
│         Then: BOOTSTRAP-*.ai.md
│
└─→ YES → PHASE 2 (Operational)
          Read: docs/START-HERE.human.md
          Then: Spawn agents, create tasks
```

**Question 2: What is the user asking for?**

```
User request: "Set up framework"
└─→ PHASE 1: Read setup/START.ai.md
    └─→ Analyze folder
    └─→ ASK USER: "New project or existing project?"
    └─→ Based on answer: setup/NEW-PROJECT.ai.md or setup/EXISTING-PROJECT.ai.md

User request: "Create task for login feature"
└─→ PHASE 2: Read docs/guides/INTERACTIVE-MANAGER-GUIDE.md

User request: "Spawn agent for task"
└─→ PHASE 2: Run sdk/spawn-agent-simple.ts

User request: "What's the project status?"
└─→ PHASE 2: Read docs/NOW.md
```

---

## 📖 File Naming Convention

### **Suffix Guide:**

- **`.ai.md`** → AI agents read these (behavioral instructions)
- **`.human.md`** → Humans read these (guides, references)
- **`.template.md`** → Templates to copy and customize
- **No suffix** → Core files (README, NAVIGATION, root files)

### **Why This Matters:**

```
setup/START.ai.md
└─→ AI reads this to bootstrap project
└─→ Contains: Step-by-step automation instructions
└─→ Human should NOT read this (it's for AI behavior)

docs/START-HERE.human.md
└─→ Human reads this for daily navigation
└─→ Contains: Where to find things, what to do next
└─→ AI should NOT use this for onboarding
```

---

## 🔗 Cross-Reference Map

### **From Root README.md:**

```
README.md (GitHub landing)
├─→ Quick Start → setup/START.ai.md
├─→ Documentation → docs/START-HERE.human.md
├─→ For Developers → .dev/README.md
└─→ AI Instructions → .ai-instructions/README.ai.md
```

### **From setup/START.ai.md:**

```
setup/START.ai.md (AI bootstrap entry)
├─→ New Project → setup/NEW-PROJECT.ai.md
├─→ Existing Project → setup/EXISTING-PROJECT.ai.md
└─→ After Setup → .ai-instructions/MANAGER-ONBOARDING.ai.md
                 └─→ Then: docs/START-HERE.human.md
```

### **From docs/START-HERE.human.md:**

```
docs/START-HERE.human.md (Operational hub)
├─→ Current Status → docs/NOW.md
├─→ Project Plan → docs/ROADMAP.md
├─→ API Contracts → docs/integration.md
├─→ Use Manager AI → docs/guides/INTERACTIVE-MANAGER-GUIDE.md
├─→ Agent Config → agents/onboarding/*.md
└─→ Spawn Agents → sdk/spawn-agent-simple.ts
```

---

## ⚡ Quick AI Cheat Sheet

### **"User wants to set up framework"**
→ Read: `setup/START.ai.md`

### **"User wants to understand framework"**
→ Read: `docs/START-HERE.human.md`

### **"User wants to create new project"**
→ Read: `setup/NEW-PROJECT.ai.md`

### **"User wants to add framework to existing project"**
→ Read: `setup/EXISTING-PROJECT.ai.md`

### **"User wants to create a task"**
→ Read: `docs/guides/INTERACTIVE-MANAGER-GUIDE.md`
→ Create: `agents/tasks/YYYY-MM-DD/task-NNN.md`

### **"User wants to spawn an agent"**
→ Run: `npx tsx sdk/spawn-agent-simple.ts [agent-type] [date] [task-id]`

### **"User wants project status"**
→ Read: `docs/NOW.md`

### **"User wants roadmap"**
→ Read: `docs/ROADMAP.md`

---

## 🚨 Common AI Mistakes to Avoid

### **❌ WRONG: Assuming new/existing without asking user**
```
User: "Set up framework"
AI: *sees empty folder*
AI: *automatically starts creating new project*  ← WRONG, didn't ask!
```

**✅ CORRECT:**
```
User: "Set up framework"
AI: *analyzes folder*
AI: "I see an empty folder. Do you want to:"
    "A) Create NEW project, or"
    "B) Add to EXISTING project?"
User: "A"
AI: *proceeds with BOOTSTRAP-NEW-PROJECT.ai.md*
```

---

### **❌ WRONG: Reading operational docs during onboarding**
```
User: "Set up framework"
AI reads: docs/START-HERE.human.md  ← WRONG PHASE
```

**✅ CORRECT:**
```
User: "Set up framework"
AI reads: setup/START.ai.md
AI asks: "New or existing project?"
AI reads: BOOTSTRAP-*.ai.md based on answer
```

---

### **❌ WRONG: Running manual CLI during automated setup**
```
Claude: "Now run: npm run onboard"  ← CONFLICTS with Claude flow
```

**✅ CORRECT:**
```
Claude: "Let me create config.json for you..."
Claude creates file directly with detected paths
```

---

### **❌ WRONG: Suggesting Phase 1 docs after setup complete**
```
User: "I'm ready to build features"
AI: "Read setup/START.ai.md"  ← WRONG, they're past onboarding
```

**✅ CORRECT:**
```
User: "I'm ready to build features"
AI: "Great! Check docs/NOW.md for current status, then create tasks"
```

---

## 🎓 Remember: Two Phases, Separate Doc Sets

```
PHASE 1 (Onboarding) ⏰         PHASE 2 (Operational) ♻️
──────────────────────         ───────────────────────
setup/                    →    .ai-instructions/
(Setup ONLY)              →    (Ongoing usage)
                          →    docs/
                          →    agents/
One-time                  →    Daily use
5-10 minutes              →    Weeks/months
Context: Discarded        →    Context: Persistent
AI-driven automation      →    Human + AI collaboration
```

**Key Insight:** Setup docs in `setup/` are NEVER loaded after initial setup!
This keeps context clean and efficient during ongoing development.

---

## 📊 Success Criteria

**AI understands navigation when:**
- ✅ Knows which phase user is in
- ✅ Reads correct docs for that phase
- ✅ Never mixes Phase 1 and Phase 2 docs
- ✅ Uses .ai.md for behavior, .human.md for reference
- ✅ **ALWAYS asks user: "New project or existing project?"** (never assumes!)
- ✅ Creates config.json conversationally (not npm run onboard)
- ✅ Guides user from Phase 1 → Phase 2 smoothly

---

**Last Updated:** 2025-10-24
**Version:** 3.0 (Setup/Usage Separation)
