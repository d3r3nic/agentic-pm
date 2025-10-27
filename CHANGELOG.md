# Changelog

All notable changes to the Agentic PM framework will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [3.0.0] - 2025-10-26

### Breaking Changes

**Planning Now Mandatory:**
- ALL feature requests must go through PLAN MODE
- Master plan required before implementation
- Quality gate enforces complete planning (30+ checklist items)
- No shortcuts for "simple" or "urgent" features

**Manual Workflow:**
- Removed automatic agent spawning
- Manager AI generates copy-paste prompts instead
- User pastes to persistent BE/FE terminals
- Context preserved throughout feature
- New slash commands: `/be-onboard`, `/fe-onboard`

### Added

**Planning Protocol:**
- `MASTER-PLAN-PROTOCOL.ai.md` - Universal 7-step planning process
- `PROJECT-PLANNING-PATTERNS.md` - Project-specific pattern learning (created per project)
- `PROJECT-PLANNING-PATTERNS.template.md` - Empty starter template
- Quality gate with 30+ checklist items
- Automatic pattern accumulation after each feature
- Bootstrap process for first feature (populates entity hierarchy)

**Manual Workflow:**
- `.claude/commands/be-onboard.md` - Backend context loading slash command
- `.claude/commands/fe-onboard.md` - Frontend context loading slash command
- Copy-paste prompt format for implementation
- Persistent terminal workflow for context preservation

**Documentation:**
- `FRAMEWORK-DEVELOPER-ONBOARDING.md` - Philosophy and "Hours planning, minutes developing"
- Comprehensive planning-first mandate in `Claude.md`

### Changed

- `Claude.md` - Added planning-first mandate, quality gate, and manual workflow sections
- `MANAGER-ONBOARDING.ai.md` - Integrated planning protocol, pattern bootstrap, and prompt generation
- `setup/NEW-PROJECT.ai.md` - Now copies PROJECT-PLANNING-PATTERNS.template.md during setup
- `setup/EXISTING-PROJECT.ai.md` - Now creates planning knowledge base for existing projects
- Agent spawning workflow deprecated in favor of manual prompts

### Deprecated

- Automatic agent spawning via Task tool (use manual prompts instead)
- Agent templates in `templates/claude-agents/` (moved to `archive/v3-deprecated-agents/`)

### Removed

- Task tool usage for automatic agent spawning
- Direct agent execution without planning phase

### Migration

**For Existing Projects:**
- No manual migration needed
- On next feature request, PROJECT-PLANNING-PATTERNS.md will be auto-created
- First feature will ask entity hierarchy questions (one-time bootstrap)
- Subsequent features will use accumulated patterns

**For Users:**
- Planning now takes longer (1-3 hours for thoroughness)
- Implementation takes shorter (minutes, because plan is perfect)
- Copy-paste prompts instead of automatic spawning
- Open two terminals: BE and FE for persistent context

**Result:**
- Better plans = zero rework
- Consistent architecture across features
- Patterns accumulate over time
- Each feature makes next feature easier

### Philosophy

**v3.0 Core Principle:**
```
100% planning → THEN implementation

Not 90/10. Not 80/20.
It's 100% complete planning, THEN development starts.

"Hours planning, minutes developing"
```

**Why This Change:**
- Real project example: Proper planning saved 3+ weeks of rework
- Catching issues in planning is 100x cheaper than in implementation
- Pattern learning ensures architectural consistency
- Quality gate prevents rushing to code

---

## [Unreleased] - Future Improvements

### Planned for v3.1

**Testing Infrastructure:**
- Automated test suite for planning protocol
- Test scenarios for gate enforcement
- Pattern accumulation validation tests
- Bootstrap process verification
- Integration tests for manual workflow

**Documentation:**
- Video walkthroughs of planning process
- Real project case studies
- Pattern library examples

---

## [2.x] - Previous Versions

See git history for v2.x changes (automatic agent spawning approach).

---

**Note:** Version 3.0.0 represents a fundamental shift in framework philosophy. Planning is now the primary focus, with implementation being a straightforward execution of perfect plans.
