# File Reorganization Mapping

## ONBOARDING FLOW (From README.md)

### Primary Entry Points:
1. **README.md** (line 89) → "read START.md and .ai-instructions/BOOTSTRAP-NEW-PROJECT.md"
2. **README.md** (line 201) → "read .ai-instructions/AI-ASSISTANT-ONBOARDING.md"

### Files Referenced in Onboarding:
- START.md ← CURRENT (new projects)
- .ai-instructions/BOOTSTRAP-NEW-PROJECT.md → docs/guides/BOOTSTRAP-NEW-PROJECT.md ← CURRENT
- .ai-instructions/AI-ASSISTANT-ONBOARDING.md → docs/guides/AI-ASSISTANT-ONBOARDING.md ← CURRENT
- QUICKSTART-AI.md ← CURRENT (user-facing)
- .pm/BOOTSTRAP.md → docs/BOOTSTRAP.md ← OLD? Or complementary?
- setup/QUICKSTART-AI.md → docs/guides/ONBOARDING-GUIDE.md ← Manual (old?)

---

## FILE CATEGORIZATION

### ✅ CURRENT FILES (Referenced in latest onboarding)

**Setup/Onboarding (One-time use):**
- START.md → setup/START.md
- QUICKSTART-AI.md → setup/QUICKSTART.md (renamed)
- docs/guides/BOOTSTRAP-NEW-PROJECT.md → .ai-instructions/BOOTSTRAP-NEW-PROJECT.md
- docs/guides/AI-ASSISTANT-ONBOARDING.md → .ai-instructions/AI-ASSISTANT-ONBOARDING.md

**Operational (Daily use):**
- docs/START-HERE.md → docs/START-HERE.md (stays)
- docs/guides/INTERACTIVE-MANAGER-GUIDE.md → docs/guides/interactive-manager.md
- docs/guides/ONBOARDING-GUIDE.md → ??? (manual - archive?)
- docs/MANAGER-ONBOARDING.md → .ai-instructions/MANAGER-ONBOARDING.md

**Templates (Stay in place, rename to .template.md):**
- docs/NOW.md → docs/NOW.template.md
- docs/ROADMAP.md → docs/ROADMAP.template.md (if has placeholders)
- integration.md → docs/integration.template.md
- agents/onboarding/fe-agent.template.md → (stays)
- agents/onboarding/be-agent.template.md → (stays)
- agents/onboarding/auditor-guidelines.template.md → (stays)
- agents/templates/fe-task-template.md → agents/tasks/templates/fe-task.template.md
- agents/templates/be-task-template.md → agents/tasks/templates/be-task.template.md

**Reference Docs:**
- docs/reference/*.md → (all stay)

### ❓ UNCLEAR - Need to determine:

**docs/BOOTSTRAP.md:**
- Similar to BOOTSTRAP-NEW-PROJECT.md
- But shorter (312 lines vs 819 lines)
- For "existing project" vs "new project"?
- **Decision:** Keep if complementary, delete if duplicate

**docs/guides/ONBOARDING-GUIDE.md:**
- Manual onboarding guide
- If onboarding is AI-automated now, this is OLD
- **Decision:** Archive or delete

**MULTI-PROJECT-WORKFLOW.md:**
- Template strategy explanation
- **Decision:** Move to docs/guides/ or .dev/decisions/?

**BRANCH-VS-CLONE-STRATEGY.md:**
- Decision document
- **Decision:** Move to .dev/decisions/

### ❌ OLD/DEPRECATED (Archive or delete)

**Migration docs:**
- STRUCTURE-CHANGE.md → .dev/migration/
- FLATTEN-MIGRATION.sh → .dev/migration/
- docs/MIGRATION-TO-SDK.md → .dev/migration/

**Development docs:**
- docs/PUBLIC-RELEASE-CHECKLIST.md → .dev/release/

---

## PROPOSED MOVES

### setup/
- START.md (from root)
- QUICKSTART.md (from QUICKSTART-AI.md - rename)
- README.md (create - explains setup folder)

### .ai-instructions/
- AI-ASSISTANT-ONBOARDING.md (from docs/guides/)
- BOOTSTRAP-NEW-PROJECT.md (from docs/guides/)
- MANAGER-ONBOARDING.md (from docs/)
- README.md (create - "Instructions for AI agents")

### docs/
**Root level:**
- START-HERE.md (stays)
- NOW.template.md (from NOW.md - rename)
- ROADMAP.template.md (from ROADMAP.md - rename if has placeholders)
- integration.template.md (from root integration.md - move & rename)
- README.md (update navigation)

**guides/:**
- interactive-manager.md (from INTERACTIVE-MANAGER-GUIDE.md - lowercase)
- multi-project-workflow.md (from root MULTI-PROJECT-WORKFLOW.md - lowercase)

**reference/:**
- All stay, lowercase filenames

### .dev/
**decisions/:**
- branch-vs-clone-strategy.md (from root BRANCH-VS-CLONE-STRATEGY.md)
- template-strategy.md (from docs/reference/FIX-TEMPLATE-STRATEGY.md)

**migration/:**
- structure-change.md (from root STRUCTURE-CHANGE.md)
- flatten-migration.sh (from root FLATTEN-MIGRATION.sh)
- migration-to-sdk.md (from docs/MIGRATION-TO-SDK.md)

**release/:**
- public-release-checklist.md (from docs/PUBLIC-RELEASE-CHECKLIST.md)

### archive/
- v1-manual-setup/ (already there)
- v1-agent-prompts/ (already there)
- ONBOARDING-GUIDE.md (if manual onboarding is old)
- docs/BOOTSTRAP.md (if duplicate of BOOTSTRAP-NEW-PROJECT.md)

---

## TEMPLATES - Rename to .template.md

**Project templates:**
- docs/NOW.md → docs/NOW.template.md
- docs/ROADMAP.md → docs/ROADMAP.template.md
- integration.md → docs/integration.template.md
- config.json → config.template.json (if exists)

**Agent templates:**
- agents/onboarding/*.template.md (already correct)
- agents/templates/*.md → agents/tasks/templates/*.template.md

**Prompt templates:**
- templates/prompt-fe-template.md → agents/prompts/fe.template.md
- templates/prompt-be-template.md → agents/prompts/be.template.md
- templates/weekly-review-template.md → agents/prompts/weekly-review.template.md

---

## PATH UPDATES NEEDED

All references to root directory need updating:
- README.md (many references)
- START.md (references .ai-instructions/BOOTSTRAP-NEW-PROJECT.md)
- All documentation files

---

## QUESTIONS TO ASK USER

1. **docs/BOOTSTRAP.md** - Is this complementary (existing project) or duplicate?
2. **docs/guides/ONBOARDING-GUIDE.md** - Manual onboarding (old) or still needed?
3. **docs/ROADMAP.md** - Does it have placeholders? Or is it actual framework roadmap?
4. **MULTI-PROJECT-WORKFLOW.md** - Operational guide or development decision?

---

## NEXT STEPS

1. Get user answers to questions above
2. Copy files to reorganized structure
3. Rename templates to .template.md
4. Update all path references
5. Verify completeness
6. Report to user for final move
