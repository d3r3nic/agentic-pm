# GitHub Action Setup Instructions

## Automatic Sync to agentic-pm-mmm

The `sync-to-mmm.yml` workflow automatically pushes changes from `agentic-pm` to `agentic-pm-mmm` whenever you push to the `main` branch.

### Setup Required (One-Time)

**1. Create a Personal Access Token (PAT)**

Go to: https://github.com/settings/tokens

1. Click "Generate new token" → "Generate new token (classic)"
2. Name: `agentic-pm-mmm-sync`
3. Expiration: No expiration (or custom)
4. Scopes needed:
   - ✅ `repo` (Full control of private repositories)
   - ✅ `workflow` (Update GitHub Action workflows)

5. Click "Generate token"
6. **COPY THE TOKEN** (you won't see it again!)

**2. Add Token to agentic-pm Repository**

Go to: https://github.com/d3r3nic/agentic-pm/settings/secrets/actions

1. Click "New repository secret"
2. Name: `MMM_SYNC_TOKEN`
3. Value: [Paste your PAT from step 1]
4. Click "Add secret"

**3. Test the Workflow**

Push a commit to `agentic-pm` main branch:

```bash
cd /Users/d3r3nic/Development3/agentic-pm
git add .
git commit -m "Test auto-sync workflow"
git push
```

Then check:
- GitHub Actions: https://github.com/d3r3nic/agentic-pm/actions
- You should see "Sync to agentic-pm-mmm" workflow running
- After ~30 seconds, check https://github.com/d3r3nic/agentic-pm-mmm
- Your commit should appear there!

---

## How It Works

```
Developer pushes to agentic-pm
  ↓
GitHub Action triggers (on push to main)
  ↓
Action clones agentic-pm-mmm
  ↓
Action merges latest from agentic-pm
  ↓
Action pushes to agentic-pm-mmm
  ↓
✅ Both repos are in sync!
```

---

## Troubleshooting

### "Authentication failed"
- Check that `MMM_SYNC_TOKEN` secret exists
- Verify the PAT has `repo` and `workflow` scopes
- Make sure PAT hasn't expired

### "Merge conflict"
- If you've made changes directly to `agentic-pm-mmm`, conflicts may occur
- Recommended: Only push to `agentic-pm`, let automation sync to `-mmm`
- If conflicts occur, manually resolve in the GitHub Actions logs

### "Workflow not running"
- Check `.github/workflows/sync-to-mmm.yml` exists in main branch
- Verify you pushed to `main` branch (not a different branch)
- Check GitHub Actions are enabled for the repo

---

## Alternative: Manual Sync

If you need to manually sync (without waiting for a push):

```bash
cd /Users/d3r3nic/Development3/agentic-pm-mmm

# Pull latest from agentic-pm
git pull framework main

# Push to agentic-pm-mmm
git push origin main
```

---

## Disable Auto-Sync

To disable the automatic sync:

1. Go to: https://github.com/d3r3nic/agentic-pm/settings/actions
2. Click "Disable Actions"

OR

Delete the workflow file:
```bash
cd /Users/d3r3nic/Development3/agentic-pm
git rm .github/workflows/sync-to-mmm.yml
git commit -m "Disable auto-sync to mmm"
git push
```

---

**Last Updated:** 2025-10-24
