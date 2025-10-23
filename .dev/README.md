# .dev - Framework Development Only

> **⚠️ NOT FOR FRAMEWORK USERS**
> **Purpose:** Internal documentation for framework development and maintenance
> **Audience:** Framework maintainers and contributors

---

## 🛠️ What This Folder Contains

This folder contains **meta-documentation** about the framework itself:
- Development decisions and rationale
- Migration guides between versions
- Release checklists and processes

**Users of the framework don't need anything in this folder.**

---

## 📁 Folder Structure

### **decisions/**
- **Purpose:** Architectural decisions and strategy comparisons
- **Files:** BRANCH-VS-CLONE-STRATEGY.md, MULTI-PROJECT-WORKFLOW.md, FIX-TEMPLATE-STRATEGY.md
- **Why:** Document why we chose specific approaches (for future reference)

### **migration/**
- **Purpose:** Version migration guides and scripts
- **Files:** STRUCTURE-CHANGE.md, FLATTEN-MIGRATION.sh, MIGRATION-TO-SDK.md
- **Why:** Help users migrate from old versions to new versions

### **release/**
- **Purpose:** Release process and checklists
- **Files:** PUBLIC-RELEASE-CHECKLIST.md
- **Why:** Ensure consistent, quality releases

---

## 🎯 When to Use This Folder

### **You're a Framework Maintainer:**
✅ Read this folder to understand:
- Why certain decisions were made
- How to migrate users between versions
- What to check before releasing

### **You're a Framework User:**
❌ You don't need this folder
- Use `setup/` for onboarding
- Use `docs/` for daily operations
- Use `.ai-instructions/` indirectly (AI reads them)

### **You're Contributing:**
✅ Read `decisions/` to understand:
- Design principles
- Why things work this way
- What not to break

---

## 📝 What's In Each Section

### **decisions/** - Design Rationale

**BRANCH-VS-CLONE-STRATEGY.md:**
- Compares different multi-project strategies
- Explains why we chose submodule approach
- Shows pros/cons of alternatives

**MULTI-PROJECT-WORKFLOW.md:**
- Explains template vs config file strategy
- Shows how updates work without overwriting user configs
- Documents gitignore strategy

**FIX-TEMPLATE-STRATEGY.md:**
- Technical details of template system
- How `.template.md` files work
- Why configs are gitignored

### **migration/** - Version Upgrades

**STRUCTURE-CHANGE.md:**
- Documents major structural changes
- Explains before/after folder layouts
- Provides migration instructions

**FLATTEN-MIGRATION.sh:**
- Script that flattened .pm/ wrapper
- Historical artifact of major refactor
- Reference for understanding structure evolution

**MIGRATION-TO-SDK.md:**
- Guide for migrating from v1.0 (manual) to v2.0 (SDK)
- Breaking changes and how to handle them
- Feature comparison

### **release/** - Publishing Process

**PUBLIC-RELEASE-CHECKLIST.md:**
- Pre-release verification steps
- Documentation updates needed
- Testing requirements
- Changelog generation

---

## 🔄 Updating This Folder

### **When to Add Files:**
- Made a significant architectural decision → Add to `decisions/`
- Created migration path for breaking change → Add to `migration/`
- Changed release process → Update `release/`

### **Naming Convention:**
- Use kebab-case: `my-decision-doc.md`
- Include date in filename if time-sensitive: `2025-10-23-structure-change.md`
- Be descriptive: `why-we-chose-submodules.md` not `decision-1.md`

---

## 🚫 What NOT to Put Here

- ❌ User-facing documentation (goes in `docs/`)
- ❌ Setup instructions (goes in `setup/`)
- ❌ AI instructions (goes in `.ai-instructions/`)
- ❌ Code (goes in `sdk/`, `agents/`, `scripts/`)
- ❌ Templates (stay in their logical locations)

**Only meta-documentation about the framework's development belongs here.**

---

## 📚 See Also

- **docs/reference/** - Technical reference for users
- **setup/** - User onboarding
- **.ai-instructions/** - AI agent instructions
- **archive/** - Deprecated old versions

---

**Last Updated:** 2025-10-23
