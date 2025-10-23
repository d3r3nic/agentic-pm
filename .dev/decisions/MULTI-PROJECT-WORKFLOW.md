# Multi-Project Workflow Guide

> **For:** Managing multiple projects using this framework
> **Goal:** Projects can pull updates but not push accidentally

---

## 🎯 The Strategy

**Template files (.template.md)** → Committed to framework repo, updated with framework
**Config files (.md, .json, .env)** → Gitignored, user-specific, never overwritten

---

## 📁 What's in Git vs What's Gitignored

### ✅ Committed to Framework Repo (Updates)

**Templates:**
- `agents/onboarding/fe-agent.template.md`
- `agents/onboarding/be-agent.template.md`
- `agents/onboarding/auditor-guidelines.template.md`
- `config.template.json`

**Framework code:**
- `sdk/*.ts` (all SDK tools)
- `agents/templates/*.md` (task templates)

**Documentation:**
- `START.md`, `README.md`, `BOOTSTRAP-NEW-PROJECT.md`, etc.

**When you update these:** All projects get the updates on `git pull`

---

### ❌ Gitignored (User-Specific, Never Overwritten)

**User configs:**
- `agents/onboarding/fe-agent.md` (copied from template, edited by user)
- `agents/onboarding/be-agent.md` (copied from template, edited by user)
- `agents/onboarding/auditor-guidelines.md` (copied from template, edited by user)
- `config.json` (created by onboard script)
- `.env` (user's API key)

**Project data:**
- `agents/tasks/**/*.md` (all task files)
- `node_modules/`
- `*.log`

**When you update framework:** These files are NOT touched

---

## 🔄 How Updates Work

### Scenario: You Fix Task Templates

```bash
# You (in framework repo)
cd task-driven-pm-framework/.pm
edit agents/templates/be-task-template.md  # Add Dependencies section
git add .
git commit -m "fix: Add Dependencies section to task template"
git push origin main
```

**What happens in projects:**

```bash
# Project A
cd project-a/.pm
git pull origin main
# ✅ agents/templates/be-task-template.md updated
# ❌ agents/onboarding/be-agent.md NOT touched (gitignored)
# ❌ config.json NOT touched (gitignored)
# ❌ agents/tasks/* NOT touched (gitignored)
```

**User can review changes:**
```bash
# See what changed in templates
git diff HEAD~1 agents/templates/be-task-template.md

# Apply to their configured files if needed
# (manual merge)
```

---

## 🚀 Recommended Setup for Multiple Projects

### Option 1: Direct Clone (Simplest)

**Setup each project:**
```bash
cd my-project
git clone https://github.com/d3r3nic/task-driven-pm-framework.git .pm
cd .pm
git remote rename origin upstream
git remote set-url --push upstream no-push  # Prevent accidental push
```

**Pull updates:**
```bash
cd .pm
git pull upstream main
npm install  # If package.json changed
```

**Can't push (protected):**
```bash
git push
# fatal: 'no-push' does not appear to be a git repository
```

---

### Option 2: Git Submodule (Cleaner)

**Setup each project:**
```bash
cd my-project
git submodule add https://github.com/d3r3nic/task-driven-pm-framework.git .pm
cd .pm
git checkout main
```

**Pull updates:**
```bash
git submodule update --remote .pm
cd .pm
npm install
cd ..
git add .pm
git commit -m "Update framework"
```

**Benefits:**
- Each project tracks which framework version it uses
- Can pin to specific version
- Can't accidentally push to framework

---

## 💬 How to Send Feedback

### Method 1: Create Feedback File Locally

```bash
cd .pm
cat > FEEDBACK-$(date +%Y-%m-%d).md << 'EOF'
# Framework Feedback

**Date:** 2025-10-23
**Project:** My Project Name
**Issue:** Task templates missing dependency section

## Problem
[Describe issue]

## Impact
[Describe impact]

## Suggested Fix
[Describe solution]
EOF

# Send via email, Slack, or create GitHub issue
```

### Method 2: Temporary Push for PR

```bash
cd .pm
# Temporarily allow push
git remote set-url --push upstream git@github.com:d3r3nic/task-driven-pm-framework.git

# Create branch
git checkout -b feedback/project-a-templates

# Add feedback
git add FEEDBACK-2025-10-23.md
git commit -m "feedback: Task templates need dependency section"
git push upstream feedback/project-a-templates

# Create PR on GitHub

# Revert to no-push
git remote set-url --push upstream no-push
git checkout main
```

### Method 3: GitHub Issues (Recommended)

Just create an issue at:
https://github.com/d3r3nic/task-driven-pm-framework/issues

---

## 🔧 Migration: Existing Project

If your project already has root directory with tracked config files:

```bash
cd my-project/.pm

# 1. Backup configured files
cp agents/onboarding/fe-agent.md agents/onboarding/fe-agent.md.backup
cp agents/onboarding/be-agent.md agents/onboarding/be-agent.md.backup
cp config.json config.json.backup

# 2. Untrack them (remove from git, keep files)
git rm --cached agents/onboarding/fe-agent.md
git rm --cached agents/onboarding/be-agent.md
git rm --cached agents/onboarding/auditor-guidelines.md
git rm --cached config.json

# 3. Commit
git commit -m "Untrack user configs - prepare for framework updates"

# 4. Pull updates (safe now!)
git pull origin main

# 5. Verify your configs are untouched
diff agents/onboarding/fe-agent.md agents/onboarding/fe-agent.md.backup
# Should show: "Files are identical"

# 6. Check what updated
git log HEAD~1..HEAD
# Shows framework updates

# 7. Review template changes
diff agents/onboarding/fe-agent.template.md agents/onboarding/fe-agent.md
# Manually merge important changes if needed
```

---

## 📊 Summary

| File Type | In Git? | Updated on Pull? | User Edits? |
|-----------|---------|------------------|-------------|
| `*.template.md` | ✅ Yes | ✅ Yes | ❌ No (read-only reference) |
| `fe-agent.md` etc | ❌ No | ❌ No | ✅ Yes (user's config) |
| `config.json` | ❌ No | ❌ No | ✅ Yes (user's paths) |
| `.env` | ❌ No | ❌ No | ✅ Yes (user's secrets) |
| `agents/tasks/*` | ❌ No | ❌ No | ✅ Yes (user's tasks) |
| `sdk/*.ts` | ✅ Yes | ✅ Yes | ❌ No (framework code) |
| Documentation | ✅ Yes | ✅ Yes | ❌ No (framework docs) |

---

## ✅ Benefits

**For you (framework maintainer):**
- ✅ Push updates to all projects easily
- ✅ Projects can't accidentally push back
- ✅ Feedback comes through issues/PRs
- ✅ Templates show latest best practices

**For projects:**
- ✅ Get framework updates without losing configs
- ✅ Can review template changes before applying
- ✅ Can't accidentally break main framework
- ✅ Can opt-in to updates (manual git pull)

---

## 🆘 Common Issues

### "git pull overwrote my configs!"

**Fix:**
```bash
# Your configs should be gitignored
# Check:
git status --ignored | grep "agents/onboarding"

# Should show:
# ?? agents/onboarding/fe-agent.md (gitignored)

# If tracked (bad):
git rm --cached agents/onboarding/fe-agent.md
git commit -m "Untrack user config"
```

### "I want to contribute a fix back to framework"

**Do:**
```bash
# Method 1: Fork on GitHub and PR
# Method 2: Create feedback file and send to maintainer
# Method 3: Create GitHub issue

# Method 4: Temporary push (if you have access)
git remote set-url --push upstream git@github.com:d3r3nic/task-driven-pm-framework.git
git checkout -b fix/my-improvement
# make changes
git push upstream fix/my-improvement
# create PR
git checkout main
git remote set-url --push upstream no-push
```

### "How do I know if templates changed?"

**Check:**
```bash
cd .pm
git pull origin main

# See what changed
git log -p HEAD~1..HEAD -- agents/onboarding/*.template.md

# Diff your config vs updated template
diff agents/onboarding/fe-agent.template.md agents/onboarding/fe-agent.md
```

---

## 📚 See Also

- [UPDATE-CHECKER.md](.pm/UPDATE-CHECKER.md) - How Claude checks for updates
- [FIX-TEMPLATE-STRATEGY.md](.pm/FIX-TEMPLATE-STRATEGY.md) - Technical details
- [CHANGELOG.md](CHANGELOG.md) - What changed in each version
