# 🎯 Universal Request Analysis System - START HERE

> **For:** Claude Code when user wants to work on ANYTHING
> **Purpose:** Systematically analyze ANY request (ideas, features, tasks, proposals, bugs, refactors)
> **Trigger:** User says what they want to work on - ALWAYS read this
> **Always Use:** This protocol for ALL work requests - no exceptions

---

## 🚨 UNIVERSAL APPROACH - NO KEYWORD DETECTION

**This is how you handle EVERYTHING the user wants to work on:**

User might say:
- "I want to build user authentication"
- "Add a dashboard feature"
- "I have an idea for notifications"
- "Here's a set of tasks"
- "I have a proposal/RFP"
- "Can you build [feature]?"
- "I need [functionality]"
- Provides documentation folder
- Describes any feature/idea/task

**Your response is ALWAYS THE SAME:**
Use the systematic analysis protocol (no exceptions, no keyword checking)

---

## 📋 The Universal Request Handling Flow

### **When User Wants to Work on Anything:**

**Examples of What Users Might Say:**
```
User: "I want to build user authentication"
User: "Add a dashboard with charts"
User: "I have an idea for real-time notifications"
User: "Here are some tasks I need done"
User: "Build a payment integration"
User: "I have documentation in /docs folder"
User: "Can you create [any feature]?"
```

**Step 1: Always Activate Systematic Analysis**
```
You say: "Great! I'll analyze this systematically using specialist agents.

Here's how this works:
- I'll spawn analyst agents to examine different aspects
- Frontend analyst: UI/UX requirements
- Backend analyst: API/database architecture
- Integration analyst: How pieces connect
- They'll produce focused analysis reports
- I'll synthesize into a phased implementation plan

This gives you:
- Thorough analysis (nothing missed)
- Clear implementation phases
- Checkpoints for your approval
- Context-proof plan (survives restarts)

Tell me:
1. What you want to build (your idea/feature/task)
2. Do you have any documentation? (optional - can be just your description)
3. Any timeline preferences? (optional)

I'll analyze and create a comprehensive plan."
```

**Step 2: Read the Analysis Protocol**
```
Read immediately: .ai-instructions/SYSTEMATIC-ANALYSIS-PROTOCOL.ai.md

This file contains the 7-step systematic process for:
- Understanding user's request
- Spawning analyst agents
- Creating implementation plans
- Managing context budgets
- Phased execution with checkpoints
```

**Step 3: Execute the 7 Steps**
```
The protocol will guide you through:
1. Request Intake & Scope Understanding
2. Context Budget Assessment
3. Specialized Analysis (spawn analysts)
4. Implementation Plan Creation
5. Phase Execution
6. Integration & Testing
7. Completion & Documentation
```

---

## 🎯 Key Principle: ALWAYS Use Analyst Agents for EVERYTHING

**For ANY user request (simple idea OR complex documentation):**

❌ **Don't do this:**
```
User: "Build a login feature"
Claude: *Thinks about requirements*
Claude: *Creates tasks directly*
Claude: *Implements*
```

❌ **Don't do this:**
```
User: "Here's a 5-page spec for login feature"
Claude: *Reads all 5 pages directly*
Claude: *Creates tasks*
Claude: *Implements*
```

✅ **ALWAYS do this instead:**
```
User: "Build a login feature" OR "Here's login spec"
  ↓
Claude: "I'll analyze this systematically with specialist agents"
  ↓
Claude spawns:
- Frontend Analyst: Analyzes UI/UX requirements → produces report
- Backend Analyst: Analyzes API/auth requirements → produces report
- Integration Analyst: Defines how they connect → produces plan
  ↓
Claude: *Reads analyst reports (not raw thoughts/docs)*
Claude: *Creates implementation plan*
Claude: *Executes in phases with checkpoints*
```

**Why ALWAYS use analysts (even for simple requests):**
- ✅ Consistent systematic approach (no ad-hoc thinking)
- ✅ Analysts catch requirements you might miss
- ✅ Creates persistent implementation plan (context-proof)
- ✅ User gets phased execution with approval checkpoints
- ✅ Same quality workflow for simple ideas AND complex docs
- ✅ Scales from "build login" to "1000-page RFP"

---

## 🔄 The Complete Flow (Example)

```
User: "I have an RFP for a healthcare system at /tasks folder"
  ↓
You recognize: Proposal handling trigger
  ↓
You activate: Proposal protocol
  ↓
You say: "I'll analyze this systematically using specialist agents"
  ↓
You read: RFP-ANALYSIS-PROTOCOL.ai.md
  ↓
Step 1: Feature Intake
  - You read: README.md, START-HERE.md (overview only)
  - You understand: Healthcare job assignment system
  - You confirm: "Is this correct?"
  ↓
Step 2: Context Budget
  - You assess: 28 files, ~300KB docs
  - You calculate: Multi-phase needed
  ↓
Step 3: Spawn Analysts (THE KEY STEP)
  - Frontend Analyst → Reads FE docs → Produces 7k report
  - Backend Analyst → Reads BE docs → Produces 8k report
  - Integration Analyst → Reads both → Produces 6k plan
  - Total for you to read: 21k tokens (not 100k!)
  ↓
Step 4: Master Plan
  - You read: 3 analyst reports
  - You synthesize: Phased implementation plan
  - You save: .pm/planning/healthcare-rfp/MASTER-PLAN.md
  - You present: "Here's the plan - review and approve?"
  ↓
Step 5: Phase Execution
  - User approves
  - You execute: Phase 1 (backend)
  - Checkpoint: User approves
  - You execute: Phase 2 (frontend)
  ↓
Step 6: Integration
  - You test: E2E flows
  ↓
Step 7: Completion
  - You document: Feature complete
  - You update: NOW.md
```

---

## 📁 Files You'll Reference

### **Primary Protocol:**
- **RFP-ANALYSIS-PROTOCOL.ai.md** - The 7-step process (read this every time)

### **Analyst Templates (they read these, not you):**
- `agents/onboarding/frontend-analyst.template.md` - Frontend analysis checklist
- `agents/onboarding/backend-analyst.template.md` - Backend analysis checklist
- `agents/onboarding/integration-analyst.template.md` - Integration planning checklist

### **Output Template:**
- `templates/MASTER-PLAN.template.md` - Format for implementation plan

---

## 🎓 Remember

1. **ALWAYS use this for proposals** - No "simple vs complex" decision
2. **ALWAYS spawn analysts** - They digest docs, you read reports
3. **ALWAYS create master plan** - Survives context resets
4. **ALWAYS get user approval** - At each phase checkpoint
5. **ALWAYS save to .pm/planning/** - Persistent documentation

---

## ⚡ Quick Reference

**User trigger phrases:**
- "I have a proposal/RFP"
- "Here's documentation/specs"
- "Analyze this and create a plan"
- "Build [feature] - here are the docs"

**Your response:**
- Activate proposal protocol
- Read RFP-ANALYSIS-PROTOCOL.ai.md
- Follow 7 steps
- Spawn analysts
- Create master plan
- Execute in phases

**Never:**
- ❌ Read all docs yourself
- ❌ Skip analyst agents
- ❌ Implement without master plan
- ❌ Skip user approval checkpoints

---

**Status:** Ready to handle proposals! When user mentions RFP/proposal/specs, start here.

---

**Last Updated:** 2025-10-24
**Version:** 1.0 (Universal - No Size Limits)
