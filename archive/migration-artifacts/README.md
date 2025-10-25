# Migration Artifacts (Archived)

**Status:** ⚠️ ARCHIVED - Historical reference only
**Purpose:** Documents from reorganization and migration phases
**Date Archived:** 2025-10-24

---

## What's In This Folder

These files documented various reorganizations and migrations during framework development:

### **FILE-MAPPING.md**
- **Purpose:** Mapped old file locations to new locations during reorganization
- **Date:** 2025-10-23
- **Context:** When we reorganized from nested `.pm/` structure to flat structure
- **Useful for:** Understanding old file paths if needed

### **PATH-UPDATES-COMPLETE.md**
- **Purpose:** Completion notice for automated path updates
- **Date:** 2025-10-23
- **Context:** After updating 33 files with new paths
- **Useful for:** Understanding what was changed during path migration

### **REORGANIZATION-COMPLETE.md**
- **Purpose:** Completion notice for folder structure reorganization
- **Date:** 2025-10-23
- **Context:** When we created clean folder structure (setup/, docs/, agents/, etc.)
- **Useful for:** Understanding the reorganization rationale

### **CHANGELOG.md**
- **Purpose:** Change log based on Keep a Changelog format
- **Date:** Last updated 2025-10-23
- **Context:** Documented v2.0.0 with SDK approach (now archived)
- **Status:** Outdated - references SDK approach which is now replaced
- **Useful for:** Historical reference of old SDK-based version

### **update-paths.sh**
- **Purpose:** Automated script to update path references during migration
- **Date:** 2025-10-23
- **Context:** One-time script to replace `.pm/` paths with new flat structure
- **Status:** Completed - all paths updated, no longer needed
- **Useful for:** Understanding how the migration was automated

---

## Why These Were Removed From Root

**Root directory should only have:**
- ✅ README.md - Main project readme (GitHub landing page)
- ✅ NAVIGATION.md - Documentation map for AI agents
- ✅ Claude.md - Framework rules for Manager AI
- ✅ LICENSE - License file
- ✅ .gitignore - Git ignore rules
- ✅ config.template.json - Configuration template
- ✅ package.json - npm configuration
- ✅ tsconfig.json - TypeScript configuration

**NOT temporary migration docs or completion notices.**

---

## Current Status

All reorganizations are complete. The framework now uses:
- Clean folder structure (setup/, .ai-instructions/, docs/, agents/, etc.)
- Native Claude Code agents (`.claude/agents/` instead of SDK)
- Proper separation of setup vs usage documentation

These archived files are kept for historical reference only.

---

**Archived by:** Root cleanup (remove obsolete migration docs)
**Date:** 2025-10-24
