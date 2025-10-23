# Branch Strategy vs Clone Strategy Comparison

## Option 1: Branches (One Repo, Multiple Branches)

```
task-driven-pm-framework (repo)
├── main                    ← Core framework (you maintain)
├── project-a              ← Branch for Project A
├── project-b              ← Branch for Project B
└── project-c              ← Branch for Project C
```

### How It Works

**Setup:**
```bash
# Create branch for each project
git checkout -b project-a
# Customize config files
edit agents/onboarding/fe-agent.md
git add agents/onboarding/fe-agent.md
git commit -m "Project A: Configure agents"
git push origin project-a

# Create another
git checkout main
git checkout -b project-b
# ... customize
git push origin project-b
```

**Update from main:**
```bash
# Project A gets framework updates
git checkout project-a
git merge main
# Merge conflicts if templates changed!
# Must resolve manually
git push origin project-a
```

### ✅ Pros
- ✅ All projects in one repo (easy to see all)
- ✅ Can cherry-pick fixes between branches
- ✅ History shows all projects
- ✅ Easy to switch: `git checkout project-a`

### ❌ Cons
- ❌ **Merge conflicts every update** (fe-agent.md in both main and branch)
- ❌ Clutters main repo with project-specific branches
- ❌ Can't have different config structures per project
- ❌ All project configs visible to anyone with repo access
- ❌ `.gitignore` doesn't work (files tracked in branches)
- ❌ Projects can accidentally push to main
- ❌ Hard to manage permissions (all projects = same repo = same access)

---

## Option 2: Direct Clone (Recommended from MULTI-PROJECT-WORKFLOW.md)

```
task-driven-pm-framework/ (GitHub repo)
    ↓ clone
    ├── project-a/.pm/              ← Separate instance
    ├── project-b/.pm/              ← Separate instance
    └── project-c/.pm/              ← Separate instance
```

### How It Works

**Setup:**
```bash
cd project-a
git clone https://github.com/d3r3nic/task-driven-pm-framework.git .pm
cd .pm
git remote set-url --push origin no-push  # Prevent push
# Customize (gitignored files)
cp agents/onboarding/fe-agent.template.md agents/onboarding/fe-agent.md
edit agents/onboarding/fe-agent.md
# fe-agent.md is gitignored, never committed
```

**Update from main:**
```bash
cd project-a/.pm
git pull origin main
# ✅ No merge conflicts!
# Only .template.md files update
# Your fe-agent.md untouched (gitignored)
npm install  # If dependencies changed
```

### ✅ Pros
- ✅ **No merge conflicts** (.md files gitignored)
- ✅ Clean main repo (no project branches)
- ✅ Projects completely isolated
- ✅ Can't accidentally push to main (no-push remote)
- ✅ Different config structures per project
- ✅ Project configs stay private (not in framework repo)
- ✅ `.gitignore` works properly
- ✅ Easy to update: `git pull origin main`
- ✅ Each project can use different framework version

### ❌ Cons
- ❌ Not all in one repo (need to cd to each project)
- ❌ Can't see all projects at once
- ❌ Must update each project manually

---

## Option 3: Hybrid - Fork for Each Project

```
task-driven-pm-framework (main repo)
    ↓ fork
    ├── task-driven-pm-framework-project-a (fork)
    ├── task-driven-pm-framework-project-b (fork)
    └── task-driven-pm-framework-project-c (fork)
         ↓ sync from upstream
```

### How It Works

**Setup:**
```bash
# Fork on GitHub for each project
# project-a team works on their fork
git clone https://github.com/project-a/task-driven-pm-framework.git .pm
cd .pm
git remote add upstream https://github.com/d3r3nic/task-driven-pm-framework.git
# Customize and commit to their fork
```

**Update from main:**
```bash
cd .pm
git fetch upstream
git merge upstream/main
# Merge conflicts for config files
# Resolve and commit to their fork
git push origin main
```

### ✅ Pros
- ✅ Each project has own repo (permissions, privacy)
- ✅ Can PR improvements back to main
- ✅ History preserved
- ✅ GitHub collaboration features (issues, PRs)

### ❌ Cons
- ❌ **Merge conflicts** on every update (configs tracked)
- ❌ Management overhead (many repos)
- ❌ Still need gitignore strategy
- ❌ More complex than needed

---

## Recommendation: Option 2 (Direct Clone) + Submodule

**Why:** Combines best of all worlds

```
project-a/ (project repo)
├── frontend/
├── backend/
└── .pm/                    ← Git submodule
    ├── config.json         ← Gitignored (not in framework)
    ├── agents/onboarding/
    │   ├── fe-agent.md     ← Gitignored (not in framework)
    │   └── fe-agent.template.md  ← Updated from framework
    └── sdk/                ← Updated from framework
```

### Setup

```bash
cd project-a

# Add framework as submodule
git submodule add https://github.com/d3r3nic/task-driven-pm-framework.git .pm

# The submodule tracks framework's main branch
cd .pm
git checkout main

# Configure (files are gitignored in framework)
npm run onboard
# Creates config.json, copies templates to .md files

# Project-a's .gitignore
echo ".pm/config.json" >> ../.gitignore
echo ".pm/agents/onboarding/*.md" >> ../.gitignore
```

### Update Framework

```bash
cd project-a/.pm
git pull origin main
# ✅ Only framework files update
# ✅ config.json stays (not tracked in framework)
# ✅ fe-agent.md stays (not tracked in framework)

cd ..
git add .pm
git commit -m "Updated framework to latest"
```

### ✅ Pros of This Approach
- ✅ **Zero merge conflicts** (configs gitignored in framework)
- ✅ Framework repo stays clean (no project branches)
- ✅ Each project controls framework version (submodule pin)
- ✅ Simple updates: `git submodule update --remote`
- ✅ Can't accidentally push to framework (submodule protection)
- ✅ Project configs stay private
- ✅ All benefits of Option 2 + version pinning

---

## Comparison Table

| Feature | Branches | Direct Clone | Submodule |
|---------|----------|--------------|-----------|
| **Merge conflicts** | ❌ Every update | ✅ Never | ✅ Never |
| **Clean main repo** | ❌ Cluttered | ✅ Yes | ✅ Yes |
| **Can't push accidentally** | ❌ No | ✅ Yes (no-push) | ✅ Yes (submodule) |
| **Private configs** | ❌ In repo | ✅ Yes | ✅ Yes |
| **Version pinning** | ⚠️  Manual | ⚠️  Manual | ✅ Automatic |
| **Easy updates** | ❌ Merge conflicts | ✅ git pull | ✅ git pull |
| **Gitignore works** | ❌ No | ✅ Yes | ✅ Yes |
| **See all projects** | ✅ In one repo | ❌ Separate | ❌ Separate |
| **Permissions** | ❌ All same | ⚠️  Manual | ✅ Per project |

---

## Real-World Example

### Current Setup (Branch Strategy) ❌

```bash
# Framework repo has project branches
git branch
# * main
#   project-mmm
#   project-news-monitor
#   project-dashboard

# Update main with fix
git checkout main
edit agents/templates/be-task-template.md
git commit -m "fix: Add dependencies section"
git push

# Update project-mmm
git checkout project-mmm
git merge main
# CONFLICT: agents/onboarding/be-agent.md
# Merge conflicts because project customized this file!
# Must manually resolve
git add agents/onboarding/be-agent.md
git commit -m "Merge main - fix conflicts"
git push

# Repeat for EVERY project branch ❌
git checkout project-news-monitor
git merge main
# More conflicts...

# This gets tedious quickly!
```

### Recommended Setup (Submodule) ✅

```bash
# Framework repo (clean)
cd task-driven-pm-framework
edit agents/templates/be-task-template.md
git commit -m "fix: Add dependencies section"
git push

# Project MMM updates (no conflicts!)
cd ~/mmm-projectmanager
git submodule update --remote .pm
cd .pm
npm install  # If needed
cd ..
git add .pm
git commit -m "Updated framework - got dependency fixes"

# Done! No merge conflicts, configs untouched ✅
```

---

## Migration Path

### If You Already Have Branches

```bash
# For each project branch:

# 1. Extract project configs
git checkout project-a
mkdir /tmp/project-a-configs
cp agents/onboarding/*.md /tmp/project-a-configs/
cp config.json /tmp/project-a-configs/ 2>/dev/null

# 2. Delete the branch
git checkout main
git branch -D project-a
git push origin --delete project-a

# 3. Set up as submodule in actual project
cd ~/projects/project-a
git submodule add https://github.com/d3r3nic/task-driven-pm-framework.git .pm
cd .pm

# 4. Restore configs
cp /tmp/project-a-configs/*.md agents/onboarding/
cp /tmp/project-a-configs/config.json .

# 5. Add to parent gitignore
cd ..
echo ".pm/config.json" >> .gitignore
echo ".pm/agents/onboarding/*.md" >> .gitignore
echo "agents/tasks/" >> .gitignore
```

---

## Final Recommendation

**Use Submodule Strategy (Option 2 Enhanced)**

**Why:**
1. ✅ **No merge conflicts** - configs gitignored in framework
2. ✅ **Clean framework repo** - no project clutter
3. ✅ **Version control** - each project pins framework version
4. ✅ **Simple updates** - `git submodule update --remote`
5. ✅ **Scales well** - works for 2 or 200 projects

**Setup script for new project:**
```bash
#!/bin/bash
# add-framework.sh
PROJECT_NAME=$1

# Add framework as submodule
git submodule add https://github.com/d3r3nic/task-driven-pm-framework.git .pm

# Setup
cd .pm
npm install
npm run onboard

# Protect configs in parent repo
cd ..
cat >> .gitignore << EOF
# PM Framework - user configs
.pm/config.json
.pm/.env
agents/onboarding/fe-agent.md
agents/onboarding/be-agent.md
agents/onboarding/auditor-guidelines.md
agents/tasks/
EOF

echo "✅ Framework added as submodule!"
echo "To update: git submodule update --remote .pm"
```

---

## Summary

**Don't use branches** - leads to merge conflicts on every update.

**Do use submodules** - clean, conflict-free, scalable.

**The flow:**
1. You update main framework
2. Projects run `git submodule update --remote .pm`
3. Their configs stay safe (gitignored)
4. No conflicts, ever

**Your workflow:**
- Main repo: Pure framework (no project stuff)
- Each project: Submodule points to main
- Updates: One command, no conflicts
- Feedback: GitHub issues or PRs
