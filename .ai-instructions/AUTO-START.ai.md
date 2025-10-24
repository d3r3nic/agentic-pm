# 🚀 Auto-Start Bootstrap Prompt

> **For:** Claude Code when user says "start", "let's start", "begin", or framework is freshly cloned
> **Purpose:** Automatic activation of framework setup
> **This file contains:** The full bootstrap prompt (so user doesn't have to type it)

---

## 🎯 Full Bootstrap Prompt

When user triggers this (by saying "start" or any variant), execute this prompt:

```
Read NAVIGATION.md to understand the documentation structure.

Then read setup/START.ai.md and .ai-instructions/BOOTSTRAP-NEW-PROJECT.ai.md (or BOOTSTRAP-EXISTING-PROJECT.ai.md based on user choice) and follow all steps to set up the project.

Ask questions conversationally and build everything systematically.
```

---

## 🚨 Trigger Detection

**Auto-activate when user says ANY of:**
- "start"
- "let's start"
- "begin"
- "setup"
- "initialize"
- "onboard"
- "bootstrap"
- "get started"
- "set up the framework"

**Also auto-activate when:**
- Framework folder is freshly cloned (no config.json exists)
- User is in agentic-pm directory for the first time
- User runs this in an empty project folder with agentic-pm submodule

---

## 📋 The Auto-Start Flow

```
User: "start" (or any trigger phrase)
  ↓
Claude detects: This is a start request
  ↓
Claude reads: NAVIGATION.md (understand structure)
  ↓
Claude reads: setup/START.ai.md (entry point)
  ↓
Claude asks: "New project or existing project?"
  ↓
User chooses: A or B
  ↓
Claude reads: Appropriate BOOTSTRAP file
  ↓
Claude executes: Full setup conversationally
  ↓
Claude completes: Project ready, asks "What would you like to work on?"
```

---

## 💡 User Experience

**Before (verbose):**
```
User must type:
"read NAVIGATION.md to understand the documentation structure.
Then read setup/START.ai.md and .ai-instructions/BOOTSTRAP-NEW-PROJECT.ai.md
and follow all steps to set up a new full-stack project here.
Ask me questions and build everything."
```

**After (simple):**
```
User just types:
"start"
```

Claude automatically executes the full bootstrap prompt!

---

## 🔧 Implementation

**In MANAGER-ONBOARDING.ai.md or setup/START.ai.md, add:**

```markdown
## 🚨 Start Trigger Detection

IF user says:
  - "start"
  - "let's start"
  - "begin"
  - "setup"
  - [any variant]

THEN:
  1. Read: .ai-instructions/AUTO-START.ai.md
  2. Execute the full bootstrap prompt
  3. Read: NAVIGATION.md
  4. Read: setup/START.ai.md
  5. Proceed with onboarding flow
```

---

**Status:** Ready for auto-activation!

---

**Last Updated:** 2025-10-24
**Version:** 1.0 (Auto-Start System)
