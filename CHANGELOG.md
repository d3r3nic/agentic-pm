# Changelog

All notable changes to the Task-Driven PM Framework will be documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added
- UPDATE-CHECKER.md - Automated update detection for Claude Code
- CHANGELOG.md - This file for tracking changes

---

## [2.0.0] - 2025-10-23

### Added
- **Claude Agent SDK integration** - Programmatic agent spawning
- **Complete bootstrap from scratch** - Creates frontend + backend boilerplate
- **One-command setup** - Users just paste one prompt in Claude Code
- **SDK installation guide** - Comprehensive SDK-INSTALLATION.md
- **Git strategy options** - Single repo or separate repos
- **Framework update checker** - Claude can check for and apply updates
- **Comprehensive documentation**:
  - START.md - Auto-bootstrap guide
  - BOOTSTRAP-NEW-PROJECT.md - 600+ line implementation guide
  - SDK-INSTALLATION.md - SDK setup and troubleshooting
  - UPDATE-CHECKER.md - Framework update detection
  - AI-ASSISTANT-ONBOARDING.md - Guide for Claude Code
  - ONBOARDING-GUIDE.md - Manual setup guide

### Changed
- **BREAKING**: Framework now requires Claude Agent SDK
- **BREAKING**: New repository structure with guides at root level
- **BREAKING**: SDK tools in `sdk/` instead of root directory
- Simplified setup - clone repo first, then create project
- Updated .gitignore strategy (two-level: root + .pm/)

### Removed
- **BREAKING**: Custom MCP tools removed (use standard Read/Edit/Write)
- **BREAKING**: Removed `sdk/automation/manager-standalone.ts` (not needed for interactive mode)
- v1 manual agent setup (replaced with SDK)

### Fixed
- Path detection on different platforms
- npm install permissions issues
- Task file path resolution

### Migration Guide from v1.0 to v2.0

**If you have an existing v1.0 project:**

1. **Backup your current setup:**
   ```bash
   cp -r .pm .pm-v1-backup
   ```

2. **Clone v2.0 framework:**
   ```bash
   git clone https://github.com/d3r3nic/task-driven-pm-framework.git .pm-v2
   ```

3. **Migrate your configs:**
   ```bash
   # Copy your agent onboarding files
   cp .pm-v1-backup/agents/onboarding/fe-agent.md .pm-v2/.pm/agents/onboarding/
   cp .pm-v1-backup/agents/onboarding/be-agent.md .pm-v2/.pm/agents/onboarding/

   # Copy your task files
   cp -r .pm-v1-backup/agents/tasks/* .pm-v2/agents/tasks/
   ```

4. **Install SDK:**
   ```bash
   cd .pm-v2/.pm
   npm install
   ```

5. **Update paths in config.json:**
   ```bash
   npm run onboard
   # Confirm your frontend/ and backend/ paths
   ```

6. **Test SDK:**
   ```bash
   npm run spawn fe-implementor 2025-10-22 your-task-id
   ```

7. **Replace old .pm/ with new:**
   ```bash
   cd ../..
   rm -rf .pm
   mv .pm-v2 .pm
   ```

**Breaking changes:**
- Agent spawning now uses SDK: `npm run spawn` instead of Task tool
- Config structure changed: Added `config.json` for dynamic paths
- Templates renamed: `.template.md` suffix added
- MCP tools removed: Use standard Read/Edit/Write instead

---

## [1.0.0] - 2025-10-21

### Added
- Initial release
- Task-driven PM framework structure
- Manual agent coordination via Task tool
- Agent onboarding files (fe-agent.md, be-agent.md)
- Task templates (fe-task, be-task)
- NOW.md for project status
- integration.md for API tracking

### Features
- 4 agent types: fe-implementor, be-implementor, fe-auditor, be-auditor
- Task file structure with sections (INSTRUCTIONS, REPORT, CASE LOG, AUDIT)
- Manual agent spawning via Claude Code Task tool
- Session-based management

---

## Version Numbering

**Format:** MAJOR.MINOR.PATCH

- **MAJOR**: Breaking changes (requires migration)
- **MINOR**: New features (backwards compatible)
- **PATCH**: Bug fixes (backwards compatible)

**Current:** v2.0.0 (SDK-powered, breaking changes from v1.0)

---

## How to Read This Changelog

**Categories:**
- **Added**: New features
- **Changed**: Changes to existing features
- **Deprecated**: Features that will be removed soon
- **Removed**: Features removed in this version
- **Fixed**: Bug fixes
- **Security**: Security fixes
- **BREAKING**: Changes that require migration

**Icons:**
- ✨ New features
- 🐛 Bug fixes
- ⚠️  Breaking changes
- 📚 Documentation
- 🔧 Internal changes

---

## Upgrade Instructions

**To update to latest version:**

```bash
cd .pm
git fetch origin main
git log HEAD..origin/main  # See what's new
git pull origin main        # Update
npm install                 # Update dependencies
```

**Check for breaking changes:**
```bash
git log HEAD..origin/main --grep="BREAKING"
```

**Or ask Claude Code:**
```
Check for framework updates
```

Claude will show changelog and guide you through migration if needed.

---

## Links

- [GitHub Repository](https://github.com/d3r3nic/task-driven-pm-framework)
- [Report Issues](https://github.com/d3r3nic/task-driven-pm-framework/issues)
- [Documentation](.pm/)
