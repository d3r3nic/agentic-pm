# Fix: Template Strategy for Config Files

## Problem
- Both .md and .template.md files are tracked in git
- When users configure their .md files, pulling updates overwrites them
- Need separation: templates in git, configs gitignored

## Solution

### Step 1: Untrack configured files from git
```bash
cd .pm
git rm --cached agents/onboarding/fe-agent.md
git rm --cached agents/onboarding/be-agent.md
git rm --cached agents/onboarding/auditor-guidelines.md
git commit -m "Untrack user-configured onboarding files"
```

### Step 2: Verify .gitignore has them
Already in .gitignore:
```
agents/onboarding/fe-agent.md
agents/onboarding/be-agent.md
agents/onboarding/auditor-guidelines.md
```

### Step 3: Update templates with clear instructions
Templates (.template.md) should have:
- Clear [PLACEHOLDER] markers
- Instructions on what to replace
- Examples in comments

### Step 4: Onboarding creates .md from .template.md
When user runs `npm run onboard`, it should:
```bash
# Copy templates to working files
cp agents/onboarding/fe-agent.template.md agents/onboarding/fe-agent.md
cp agents/onboarding/be-agent.template.md agents/onboarding/be-agent.md
cp agents/onboarding/auditor-guidelines.template.md agents/onboarding/auditor-guidelines.md

# Then ask user to fill in project-specific details
```

## Result

**In git (framework repo):**
- ✅ agents/onboarding/fe-agent.template.md
- ✅ agents/onboarding/be-agent.template.md
- ✅ agents/onboarding/auditor-guidelines.template.md
- ✅ config.template.json

**Gitignored (user-specific):**
- ❌ agents/onboarding/fe-agent.md (copied from template, user edits)
- ❌ agents/onboarding/be-agent.md (copied from template, user edits)
- ❌ agents/onboarding/auditor-guidelines.md (copied from template, user edits)
- ❌ config.json (created by onboard script)

**On update:**
```bash
git pull origin main
# Only .template.md files update
# User's .md files are safe (gitignored)
# User can diff .template.md changes and merge if needed
```

## Migration for Existing Projects

For mmm-projectmanager/.pm/:
```bash
# 1. Backup your configured files
cp agents/onboarding/fe-agent.md agents/onboarding/fe-agent.md.backup
cp agents/onboarding/be-agent.md agents/onboarding/be-agent.md.backup

# 2. Untrack them
git rm --cached agents/onboarding/fe-agent.md
git rm --cached agents/onboarding/be-agent.md
git rm --cached agents/onboarding/auditor-guidelines.md

# 3. Commit
git commit -m "Untrack user configs - prepare for framework updates"

# 4. Now you can pull updates safely
git pull origin main
# Your .md files stay untouched (gitignored)
# .template.md files get updated

# 5. Review template changes
diff agents/onboarding/fe-agent.template.md agents/onboarding/fe-agent.md
# Merge any important changes manually
```
