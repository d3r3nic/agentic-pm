# Structure Change - Flattened Repository

**Date:** 2025-10-23
**Version:** 2.1.0
**Status:** ✅ Complete

---

## 🎯 What Changed

### Before (Nested Structure)
```
task-driven-pm-framework/
├── README.md                           ← Root docs
├── START.md                            ← Root docs
├── CHANGELOG.md                        ← Root docs
└── .pm/                                ← Nested framework folder
    ├── package.json                    ← Actual framework
    ├── sdk/
    ├── agents/
    └── BOOTSTRAP-NEW-PROJECT.md        ← Docs scattered
```

**Problems:**
- ❌ Confusing nested root directory folder
- ❌ Documentation split between root and root directory
- ❌ Submodule clones created `.pm/.pm/` nesting
- ❌ Hidden folder (dot prefix) not obvious

### After (Flat Structure)
```
task-driven-pm-framework/
├── README.md                           ← Quick start
├── START.md                            ← Auto-bootstrap guide
├── CHANGELOG.md                        ← Version history
├── package.json                        ← SDK dependencies
├── sdk/                                ← Agent spawning tools
├── agents/                             ← Templates & onboarding
├── config.template.json                ← Config template
└── docs/                               ← ALL documentation
    ├── README.md                       ← Docs index
    ├── guides/                         ← User guides
    │   ├── ONBOARDING-GUIDE.md
    │   ├── AI-ASSISTANT-ONBOARDING.md
    │   ├── BOOTSTRAP-NEW-PROJECT.md
    │   └── INTERACTIVE-MANAGER-GUIDE.md
    └── reference/                      ← Technical docs
        ├── SDK-INSTALLATION.md
        ├── SDK-ENHANCEMENTS.md
        ├── UPDATE-CHECKER.md
        └── FIX-TEMPLATE-STRATEGY.md
```

**Benefits:**
- ✅ Clean, flat structure
- ✅ All docs in `docs/` folder
- ✅ Submodule works perfectly (no nesting)
- ✅ Standard framework layout
- ✅ Easy to navigate

---

## 📦 Usage in Projects

### Old Way (Before Flatten)
```bash
cd my-project
git submodule add https://github.com/d3r3nic/task-driven-pm-framework.git .pm
ls .pm/
# .pm/.pm/package.json  ← Confusing nested structure!
```

### New Way (After Flatten)
```bash
cd my-project
git submodule add https://github.com/d3r3nic/task-driven-pm-framework.git .pm
ls .pm/
# package.json          ← Clean, framework files at root!
# sdk/
# agents/
# docs/
```

---

## 🔄 Migration for Existing Projects

### If You Have Existing Submodule

```bash
cd my-project/.pm

# Pull latest (flattened structure)
git pull origin main

# Structure is now flat!
ls
# package.json, sdk/, agents/, docs/ (no more nested .pm/)

# Reinstall dependencies (paths might have changed)
npm install

# Run onboard if config broke
npm run onboard
```

### If You Need to Reset

```bash
cd my-project

# Remove old submodule
git submodule deinit .pm
git rm .pm
rm -rf .git/modules/.pm

# Add fresh submodule
git submodule add https://github.com/d3r3nic/task-driven-pm-framework.git .pm
cd .pm
npm install
npm run onboard
```

---

## 📚 Documentation Updates

All documentation moved to `docs/` folder:

**Before:**
- Root: `README.md`, `START.md`, `CHANGELOG.md`
- root directory: `BOOTSTRAP-NEW-PROJECT.md`, `SDK-INSTALLATION.md`, etc.
- Split across two locations

**After:**
- Root: `README.md`, `START.md`, `CHANGELOG.md` (entry points only)
- `docs/`: ALL other documentation
- `docs/guides/`: User-facing guides
- `docs/reference/`: Technical reference
- `docs/README.md`: Complete index

---

## ✅ What Still Works

**Everything!** This is a structure change only:

- ✅ `npm install` - Works
- ✅ `npm run onboard` - Works
- ✅ `npm run spawn` - Works
- ✅ SDK tools (`sdk/*.ts`) - Same location relative to package.json
- ✅ Agent templates - Same location
- ✅ Submodule updates - Cleaner than before
- ✅ All guides and docs - Just moved to `docs/`

---

## 🎉 Benefits

1. **Cleaner structure** - No confusing root directory wrapper
2. **Standard layout** - Matches other frameworks (Next.js, Vite, etc.)
3. **Better docs** - All in one place (`docs/`)
4. **Easier submodules** - No nesting issues
5. **More discoverable** - Framework files visible at root
6. **Flexible naming** - Users can pick their own folder name

---

## 🔍 Quick Reference

### Find Documentation

**Old way:**
- `README.md` or `.ai-instructions/BOOTSTRAP-NEW-PROJECT.md`? 🤷

**New way:**
- `docs/README.md` - Start here for all docs!

### Run Framework Commands

**Still the same:**
```bash
cd .pm  # (or whatever you named the submodule)
npm install
npm run onboard
npm run spawn fe-implementor 2025-10-22 fe-task-001
```

### Update Framework

**Still the same:**
```bash
cd .pm
git pull origin main
npm install
```

---

## 📊 Impact Summary

| Aspect | Before | After |
|--------|---------|-------|
| Structure | Nested (root directory) | Flat |
| Doc location | Split | `docs/` |
| Submodule | Complex | ✅ Clean |
| Navigation | Confusing | ✅ Clear |
| Standards | Non-standard | ✅ Standard |

---

## 🆘 Issues?

**Submodule won't update:**
```bash
cd my-project
git submodule update --remote .pm
cd .pm
git checkout main
git pull origin main
```

**Paths broke after update:**
```bash
cd .pm
npm run onboard
# Recreates config.json with correct paths
```

**Need help:**
- See `docs/README.md` for full documentation index
- Check `docs/guides/ONBOARDING-GUIDE.md` for setup help
- GitHub issues: https://github.com/d3r3nic/task-driven-pm-framework/issues

---

**This change makes the framework cleaner, easier to use, and ready for growth!** 🚀
