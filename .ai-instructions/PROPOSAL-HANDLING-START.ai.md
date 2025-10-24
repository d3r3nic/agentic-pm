# 🎯 Proposal & RFP Handling System - START HERE

> **For:** Claude Code when user mentions proposals, RFPs, or feature specifications
> **Purpose:** Systematically analyze ANY proposal (small or large) using specialist agents
> **Trigger:** User says they have a proposal, RFP, spec, or documentation to analyze
> **Always Use:** This protocol for ALL proposals - no size limitations

---

## 🚨 AUTOMATIC TRIGGER

**If user says ANY of these, read this file immediately:**
- ✅ "I have a proposal/RFP"
- ✅ "Here's a feature specification"
- ✅ "Can you analyze this documentation?"
- ✅ "I need to plan implementation for [feature]"
- ✅ "Read these docs and create a plan"
- ✅ Provides a folder with documentation
- ✅ Provides files with specs/requirements

**Size doesn't matter:** Use this protocol for 1-page specs AND 1000-page RFPs

---

## 📋 The Universal Proposal Handling Flow

### **When User Has a Proposal:**

**Step 1: Recognize the Pattern**
```
User: "I have an RFP for a healthcare job assignment system"
User: "Here's documentation for user invitations feature"
User: "Can you analyze this 200-page proposal?"
User: "I have specs in /docs/proposal folder"
```

**Step 2: Activate Protocol**
```
You say: "Great! I'll use the RFP Analysis Protocol to digest this systematically.

This protocol uses specialist analyst agents to:
- Analyze frontend requirements
- Analyze backend architecture
- Define integration contracts
- Create phased implementation plan

This works for proposals of ANY size (1 page to 1000+ pages).

Please provide:
1. Path to documentation (folder or files)
2. What this proposal is for (1 sentence)
3. Any timeline constraints

I'll analyze it and create a comprehensive plan."
```

**Step 3: Read the Protocol**
```
Read immediately: .ai-instructions/RFP-ANALYSIS-PROTOCOL.ai.md

This file contains the 7-step systematic process for:
- Spawning analyst agents
- Creating master plans
- Managing context budgets
- Phased execution
```

**Step 4: Execute the 7 Steps**
```
The protocol will guide you through:
1. Feature Intake & Scope Understanding
2. Context Budget Assessment
3. Specialized Analysis (spawn analysts)
4. Master Plan Creation
5. Phase Execution
6. Integration & Testing
7. Completion & Documentation
```

---

## 🎯 Key Principle: ALWAYS Use Analyst Agents

**For ANY proposal (even 1-page specs):**

❌ **Don't do this:**
```
User: "Here's a 5-page spec for login feature"
Claude: *Reads all 5 pages directly*
Claude: *Creates tasks*
Claude: *Implements*
```

✅ **Do this instead:**
```
User: "Here's a 5-page spec for login feature"
Claude: *Activates proposal protocol*
Claude: *Spawns analyst agents*
Frontend Analyst: Analyzes UI/UX requirements → 2k report
Backend Analyst: Analyzes API/auth requirements → 2k report
Integration Analyst: Defines contracts → 1k report
Claude: *Reads 5k total (not raw docs)*
Claude: *Creates master plan*
Claude: *Executes in phases*
```

**Why this matters:**
- ✅ Consistent systematic approach
- ✅ Analysts catch details you might miss
- ✅ Creates persistent master plan (context-proof)
- ✅ User gets phased execution with checkpoints
- ✅ Works the same for 1-page or 1000-page proposals

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
