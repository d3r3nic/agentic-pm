# Setup - One-Time Onboarding

> **Purpose:** First-time setup instructions for users
> **When to use:** Only when initially installing the framework
> **After setup:** You won't need these files again

---

## 📁 Files in This Folder

### **START.ai.md**
- **For:** AI (Claude Code) starting new projects
- **Purpose:** Master guide that Claude Code reads to bootstrap everything
- **Flow:** Clone framework → create boilerplate → configure → build first feature

### **QUICKSTART.human.md**
- **For:** Humans who want a quick reference
- **Purpose:** Quick setup guide for manual setup
- **Time:** 10-15 minutes to understand and configure

---

## 🎯 Which File Should I Use?

### **New Project (Empty Folder)**
Use: **START.ai.md**
- Claude Code will read this and create your entire project
- Asks 4 questions, then builds frontend + backend + framework
- Automated by AI!

### **Existing Project**
Use: **AI instructions** (not in this folder)
- See `.ai-instructions/BOOTSTRAP-EXISTING-PROJECT.ai.md`
- Adds framework to your existing code without touching your app

### **Want Manual Control?**
Use: **QUICKSTART.human.md**
- Read the guide yourself
- Run `npm run onboard:manual` for CLI setup
- More control, more work

---

## ✅ After Setup Complete

Once your framework is configured:
- ✅ You don't need this folder anymore
- ✅ Main docs are in `docs/` for daily operations
- ✅ AI instructions are in `.ai-instructions/` for agent behavior

**This folder only contains one-time setup guides.**

---

## 🔄 Next Steps After Setup

1. Read `docs/START-HERE.human.md` - Main navigation hub
2. Update `docs/NOW.template.md` → `docs/NOW.md` with your project status
3. Update `docs/ROADMAP.template.md` → `docs/ROADMAP.md` with your plan
4. Start building!

---

**Last Updated:** 2025-10-23
