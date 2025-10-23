# 🔄 Framework Update Checker - For Claude Code

> **For:** Claude Code running in projects using this framework
> **Purpose:** Check for framework updates and help users upgrade safely
> **Trigger:** Periodically or when user asks "check for updates"

---

## 🎯 When to Check for Updates

**Automatic triggers:**
- When user opens Claude Code in the project (first message of session)
- Once per day (if session is long-running)
- When user explicitly asks: "check for framework updates"

**What to check:**
```bash
cd .pm
git fetch origin main --dry-run
```

If output shows new commits → Updates available!

---

## 📋 Update Check Workflow

### **Step 1: Detect Current Version**

```bash
cd .pm

# Check current commit
CURRENT_COMMIT=$(git rev-parse HEAD)
CURRENT_DATE=$(git log -1 --format=%cd --date=short)

# Check remote for updates
git fetch origin main

# Get latest commit on remote
LATEST_COMMIT=$(git rev-parse origin/main)
LATEST_DATE=$(git log origin/main -1 --format=%cd --date=short)
```

**If `$CURRENT_COMMIT == $LATEST_COMMIT`:**
```
✅ Framework is up to date (latest: $CURRENT_DATE)
```

**If different:**
```
🔔 Framework update available!

Current version: $CURRENT_DATE ($CURRENT_COMMIT)
Latest version:  $LATEST_DATE ($LATEST_COMMIT)

Would you like me to show what's new?
```

---

### **Step 2: Show Changelog**

```bash
# Show commits between current and latest
git log $CURRENT_COMMIT..origin/main --oneline --pretty=format:"%h - %s"
```

**Parse commit messages for categories:**

**Breaking Changes** (contains "BREAKING:", "breaking:", "!:")
```
⚠️  BREAKING CHANGES:
- abc1234 - BREAKING: Renamed config.json to .pm-config.json
- def5678 - feat!: New agent structure requires migration
```

**New Features** (contains "feat:", "feature:")
```
✨ NEW FEATURES:
- ghi9012 - feat: Add parallel task execution
- jkl3456 - feat: Support for Python backend agents
```

**Bug Fixes** (contains "fix:", "bugfix:")
```
🐛 BUG FIXES:
- mno7890 - fix: Agent spawn timeout issue
- pqr1234 - fix: Config path detection on Windows
```

**Documentation** (contains "docs:")
```
📚 DOCUMENTATION:
- stu5678 - docs: Update README with new examples
- vwx9012 - docs: Add troubleshooting guide
```

**Other Changes** (anything else)
```
🔧 OTHER CHANGES:
- yza3456 - chore: Update dependencies
- bcd7890 - refactor: Simplify spawn logic
```

---

### **Step 3: Ask User About Update**

**Present the changelog and ask:**

```
I found {X} updates to the Task-Driven PM Framework.

{Show categorized changelog above}

⚠️  Breaking Changes: {count}
✨ New Features: {count}
🐛 Bug Fixes: {count}
📚 Documentation: {count}
🔧 Other: {count}

Would you like to:
A) Update now (I'll guide you through any breaking changes)
B) Review changes first (show detailed diff)
C) Skip for now (remind me later)
D) Never ask again (disable update checks)

What's your choice? (A/B/C/D)
```

---

### **Step 4: Handle User Choice**

#### **Choice A: Update Now**

**If NO breaking changes:**
```bash
cd .pm

# Stash any local changes (if any)
git stash push -m "Auto-stash before framework update"

# Pull latest
git pull origin main

# Reinstall dependencies (in case package.json changed)
npm install

# Try to restore stash if any
git stash pop || echo "No stash to restore"
```

**Tell user:**
```
✅ Framework updated successfully!

Updated files:
{list changed files}

{If dependencies changed}
⚠️  Dependencies updated - ran npm install

{If stash was created}
ℹ️  Your local changes were preserved

Everything should work the same. Let me know if you see any issues!
```

**If BREAKING changes exist:**
```
⚠️  This update has {count} breaking change(s).

Let me check what needs migration:

{For each breaking change commit}
- Reading commit message for migration instructions...
- Checking if it affects your project...

{Show migration guide - see Phase 5 below}

Ready to proceed? (yes/no)
```

#### **Choice B: Review Changes First**

```bash
# Show detailed diff
git diff $CURRENT_COMMIT..origin/main
```

**After showing diff:**
```
That's the full diff. Would you like to update now? (yes/no)
```

#### **Choice C: Skip For Now**

```
No problem! I'll remind you next time.

You can always check manually with:
```bash
cd .pm && git fetch origin main && git log HEAD..origin/main
```

Or ask me: "check for framework updates"
```

#### **Choice D: Never Ask**

**Create `.pm/.no-update-checks` file:**
```bash
echo "User opted out of automatic update checks on $(date)" > .pm/.no-update-checks
```

**Tell user:**
```
✅ Disabled automatic update checks.

You can still manually check anytime by asking me:
"check for framework updates"

To re-enable automatic checks:
```bash
rm .pm/.no-update-checks
```
```

---

## 🔧 Phase 5: Migration Guide for Breaking Changes

**When breaking changes detected, analyze commits:**

### **Common Breaking Changes & Migrations**

#### **1. Config File Rename/Restructure**

**Detect:**
```bash
git show origin/main:config.json 2>/dev/null
git show origin/main:.pm-config.json 2>/dev/null
```

**Migration:**
```bash
# If structure changed
cp config.json config.json.backup
# Update to new structure based on template
cp config.template.json config.json
# Migrate values from backup
```

**Tell user:**
```
⚠️  Config file structure changed

I'll migrate your settings:
1. Backup current config → config.json.backup
2. Create new config from template
3. Copy your values (paths, project name, etc.)
4. Verify everything works

Proceed? (yes/no)
```

#### **2. Agent Definition Changes**

**Detect:**
```bash
git diff $CURRENT_COMMIT..origin/main sdk/agents.ts
```

**If changed:**
```
⚠️  Agent definitions updated

Changes affect:
- {list what changed: tools, prompts, etc.}

Your custom agent configs (agents/onboarding/*.md) are safe.
Update won't touch them.

Continue? (yes/no)
```

#### **3. New Required Dependencies**

**Detect:**
```bash
git diff $CURRENT_COMMIT..origin/main package.json
```

**If dependencies added:**
```
⚠️  New dependencies required:

Added:
{list new packages}

I'll run npm install after update.
```

#### **4. Task File Template Changes**

**Detect:**
```bash
git diff $CURRENT_COMMIT..origin/main agents/templates/
```

**If changed:**
```
⚠️  Task templates updated

Your existing tasks won't be affected.
New tasks created will use the updated template.

{Show what changed in template}
```

#### **5. SDK Breaking Changes**

**Detect:**
```bash
git diff $CURRENT_COMMIT..origin/main sdk/
```

**If spawn scripts changed:**
```
⚠️  Agent spawning mechanism changed

Old way:
npm run spawn fe-implementor 2025-10-22 fe-task-001

New way:
{show new command}

Your existing task files are compatible.
Just the spawn command changed.
```

---

## 📊 Update Tracking

**After successful update, log it:**

```bash
cat >> .pm/UPDATE-LOG.md << EOF

## Update: $(date +%Y-%m-%d)

**From:** $CURRENT_COMMIT ($CURRENT_DATE)
**To:** $LATEST_COMMIT ($LATEST_DATE)

**Changes:**
$(git log $CURRENT_COMMIT..$LATEST_COMMIT --oneline)

**Migration steps taken:**
{list any migrations performed}

**Status:** ✅ Success
EOF
```

---

## 🚨 Rollback Procedure

**If update breaks something:**

```bash
cd .pm

# Rollback to previous commit
git reset --hard $CURRENT_COMMIT

# Restore dependencies
npm install

# Restore any stashed changes
git stash pop
```

**Tell user:**
```
✅ Rolled back to previous version ($CURRENT_DATE)

Please let me know what broke so I can report it:
https://github.com/d3r3nic/task-driven-pm-framework/issues
```

---

## 🔍 Check for Specific Update Types

### **Check for Security Updates**

```bash
cd .pm
npm audit

# Check SDK version
npm outdated @anthropic-ai/claude-agent-sdk
```

**If security issues:**
```
⚠️  Security vulnerabilities found:

{show npm audit output}

Recommend updating immediately.
Shall I update? (yes/no)
```

### **Check for SDK Updates**

```bash
npm show @anthropic-ai/claude-agent-sdk version
# Compare with installed version
```

**If SDK update available:**
```
🔔 Claude Agent SDK update available!

Current: 0.1.25
Latest:  0.1.30

Changelog: https://github.com/anthropics/claude-agent-sdk/releases

Update SDK? (yes/no)
```

---

## 📝 Update Notification Templates

### **First Session of Day**

```
👋 Good morning!

{If updates available}
🔔 {X} framework updates available since yesterday.
Quick summary:
- {count} new features
- {count} bug fixes
- {count breaking changes}

Check details? (yes/no)

{If no updates}
✅ Framework is up to date.
```

### **Weekly Summary**

```
📊 Weekly Framework Update Summary

This week's changes:
- {total} commits
- {features} new features
- {fixes} bug fixes
- {breaking} breaking changes

Last update check: {date}
Current version: {date}

Review updates? (yes/no)
```

---

## 🎯 Best Practices for Update Checks

### **DO:**
- ✅ Check on first message of each session
- ✅ Show clear categorized changelog
- ✅ Warn about breaking changes
- ✅ Offer to help with migration
- ✅ Log successful updates
- ✅ Provide rollback if needed

### **DON'T:**
- ❌ Auto-update without asking
- ❌ Update in middle of user's work
- ❌ Hide what changed
- ❌ Skip migration steps
- ❌ Update if user has uncommitted changes in .pm/

---

## 🔧 Advanced: Semantic Versioning Check

**If framework adopts semver tags:**

```bash
# Get current tag
CURRENT_TAG=$(git describe --tags --abbrev=0 2>/dev/null || echo "v0.0.0")

# Get latest tag
git fetch --tags
LATEST_TAG=$(git describe --tags --abbrev=0 origin/main 2>/dev/null || echo "v0.0.0")

# Parse versions
CURRENT_MAJOR=$(echo $CURRENT_TAG | cut -d. -f1 | sed 's/v//')
CURRENT_MINOR=$(echo $CURRENT_TAG | cut -d. -f2)

LATEST_MAJOR=$(echo $LATEST_TAG | cut -d. -f1 | sed 's/v//')
LATEST_MINOR=$(echo $LATEST_TAG | cut -d. -f2)
```

**If major version changed (e.g., v1.x → v2.x):**
```
⚠️  MAJOR VERSION UPDATE AVAILABLE

Current: $CURRENT_TAG
Latest:  $LATEST_TAG

Major version changes include breaking changes.
Recommend reviewing changelog before updating.

See: https://github.com/d3r3nic/task-driven-pm-framework/releases/$LATEST_TAG
```

**If minor version changed (e.g., v1.2 → v1.5):**
```
✨ NEW FEATURES AVAILABLE

Current: $CURRENT_TAG
Latest:  $LATEST_TAG

New features added (backwards compatible).
Safe to update anytime.
```

**If only patch (e.g., v1.2.3 → v1.2.8):**
```
🐛 BUG FIXES AVAILABLE

Current: $CURRENT_TAG
Latest:  $LATEST_TAG

Only bug fixes (no breaking changes).
Recommend updating.
```

---

## ✅ Implementation Checklist

To enable update checking, Claude Code should:

- [ ] Check `.pm/.no-update-checks` file (skip if exists)
- [ ] Run `git fetch origin main` in root directory
- [ ] Compare current vs latest commit
- [ ] If different, show categorized changelog
- [ ] Detect breaking changes (commit messages with "BREAKING")
- [ ] Ask user for update choice (A/B/C/D)
- [ ] Handle migration if breaking changes
- [ ] Run `npm install` after update
- [ ] Log update to `UPDATE-LOG.md`
- [ ] Verify framework still works after update

**This keeps the framework current while giving users full control!** 🚀
