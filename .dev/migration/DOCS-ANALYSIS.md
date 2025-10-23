# Documentation Analysis & Questions

**Purpose:** Identify duplicates, determine what's old vs new, and reorganize structure

---

## 📊 FINDINGS - Duplicates & Overlaps

### 1. START.md vs docs/START-HERE.md

**START.md** (315 lines):
- For: Claude Code auto-bootstrap
- Purpose: User pastes magic command from README
- Creates: Full-stack project from scratch
- Has: Phase 1-6 workflow, user Q&A, git strategies
- References: `.ai-instructions/BOOTSTRAP-NEW-PROJECT.md` (old path!)
- Last Updated: Not specified

**docs/START-HERE.md** (163 lines):
- For: PM Hub navigation
- Purpose: Central command center overview
- Focus: Existing framework users
- Has: Quick links, folder structure, success metrics
- Last Updated: 2025-10-22

**❓ QUESTIONS:**
1. Are these complementary (different audiences) or duplicate (same purpose)?
   - START.md = For NEW projects (bootstrap from zero)
   - START-HERE.md = For EXISTING framework users (navigation)
2. Should START.md be in root or moved to docs/guides/?
3. The root directory references in START.md are outdated (we flattened). Update or delete?

---

### 2. docs/BOOTSTRAP.md vs docs/guides/BOOTSTRAP-NEW-PROJECT.md

**docs/BOOTSTRAP.md** (312 lines):
- For: SDK-Powered Framework v2.0
- Purpose: Install framework into EXISTING project
- Has: Prerequisites, copy .pm folder, configure onboarding
- Focus: "Project with frontend and/or backend code"
- References: root directory paths

**docs/guides/BOOTSTRAP-NEW-PROJECT.md** (819 lines):
- For: Claude Code creating NEW project from scratch
- Purpose: Full-stack setup + framework install
- Has: Phase 0-6, tech stack selection, boilerplate creation
- Focus: "Empty folder" → complete project
- Much more comprehensive

**❓ QUESTIONS:**
1. Are these the same feature or different use cases?
   - BOOTSTRAP.md = Add framework to existing project
   - BOOTSTRAP-NEW-PROJECT.md = Create project + add framework
2. Should BOOTSTRAP.md be moved to guides/ for consistency?
3. Both have outdated root directory paths - update or delete BOOTSTRAP.md?

---

### 3. QUICKSTART-AI.md vs docs/guides/AI-ASSISTANT-ONBOARDING.md

**QUICKSTART-AI.md** (224 lines):
- For: Users who want Claude to do everything
- Purpose: Magic prompt for full setup
- Has: The prompt, what Claude will ask, what happens
- User-facing guide

**docs/guides/AI-ASSISTANT-ONBOARDING.md** (381 lines):
- For: AI assistants (like Claude Code)
- Purpose: How AI should onboard users
- Has: Step-by-step workflow, conversation examples
- AI-facing instructions

**❓ QUESTIONS:**
1. These are COMPLEMENTARY (different audiences), not duplicates - correct?
   - QUICKSTART-AI.md = Instructions FOR users
   - AI-ASSISTANT-ONBOARDING.md = Instructions FOR AI
2. Should QUICKSTART-AI.md move to docs/guides/ with AI-ASSISTANT-ONBOARDING.md?

---

### 4. BRANCH-VS-CLONE-STRATEGY.md vs MULTI-PROJECT-WORKFLOW.md

**BRANCH-VS-CLONE-STRATEGY.md** (391 lines):
- Compares: Branches vs Clone vs Submodule
- Recommends: Submodule strategy
- Has: Detailed pros/cons, migration path
- Technical depth

**MULTI-PROJECT-WORKFLOW.md** (326 lines):
- Explains: Template vs config file strategy
- Focus: How updates work without overwriting
- Has: Setup for Option 1 and 2, feedback methods
- User-focused guide

**❓ QUESTIONS:**
1. These complement each other:
   - BRANCH-VS-CLONE = DECISION document (which strategy?)
   - MULTI-PROJECT = IMPLEMENTATION guide (how it works)
2. Should both move to docs/reference/?
3. Or merge into single comprehensive guide?

---

### 5. Template Documents - NOW.md, integration.md

**docs/NOW.md** (124 lines):
- Has: `[Your project name]` placeholders
- Purpose: Template for project status tracking
- Should be: `NOW.template.md`

**integration.md** (116 lines, root level):
- Has: `[Feature Name]`, `[METHOD]` placeholders
- Purpose: Template for API contracts
- Should be: `integration.template.md`

**❓ QUESTIONS:**
1. Should these move to templates/ folder?
2. Should they be renamed to .template.md?
3. Are there actual project versions (.md) that users create from these?

---

## 🗂️ PROPOSED STRUCTURE

Based on what I found, here's a cleaner organization:

```
task-driven-pm-framework/
├── README.md                           ← Main entry (keep)
├── CHANGELOG.md                        ← Version history (keep)
├── LICENSE                             ← License (keep)
│
├── docs/
│   ├── README.md                       ← Navigation index
│   │
│   ├── getting-started/                ← NEW: User onboarding
│   │   ├── QUICKSTART-AI.md            ← FROM root
│   │   ├── BOOTSTRAP-EXISTING-PROJECT.md   ← FROM docs/BOOTSTRAP.md (renamed)
│   │   └── BOOTSTRAP-NEW-PROJECT.md    ← FROM docs/guides/
│   │
│   ├── guides/                         ← Implementation guides
│   │   ├── AI-ASSISTANT-ONBOARDING.md  ← Current
│   │   ├── INTERACTIVE-MANAGER-GUIDE.md ← Current
│   │   ├── ONBOARDING-GUIDE.md         ← Current
│   │   └── MULTI-PROJECT-WORKFLOW.md   ← FROM root
│   │
│   ├── reference/                      ← Technical docs
│   │   ├── SDK-INSTALLATION.md         ← Current
│   │   ├── SDK-ENHANCEMENTS.md         ← Current
│   │   ├── UPDATE-CHECKER.md           ← Current
│   │   ├── FIX-TEMPLATE-STRATEGY.md    ← Current
│   │   └── BRANCH-VS-CLONE-STRATEGY.md ← FROM root
│   │
│   ├── project-management/             ← NEW: PM-specific docs
│   │   ├── START-HERE.md               ← FROM docs/ (PM Hub nav)
│   │   ├── MANAGER-ONBOARDING.md       ← FROM docs/
│   │   ├── ROADMAP.md                  ← FROM docs/
│   │   └── MIGRATION-TO-SDK.md         ← FROM docs/
│   │
│   └── meta/                           ← NEW: Framework development
│       ├── PUBLIC-RELEASE-CHECKLIST.md ← FROM docs/
│       ├── STRUCTURE-CHANGE.md         ← FROM root
│       └── FLATTEN-MIGRATION.sh        ← FROM root (archive?)
│
├── templates/                          ← All template files
│   ├── project-templates/              ← NEW: Project-level templates
│   │   ├── NOW.template.md             ← FROM docs/NOW.md (renamed)
│   │   └── integration.template.md     ← FROM root integration.md (renamed)
│   │
│   ├── task-templates/                 ← Task templates
│   │   ├── fe-task-template.md         ← FROM agents/templates/
│   │   ├── be-task-template.md         ← FROM agents/templates/
│   │   └── weekly-review-template.md   ← FROM templates/
│   │
│   └── prompt-templates/               ← Prompt templates
│       ├── prompt-fe-template.md       ← FROM templates/
│       └── prompt-be-template.md       ← FROM templates/
│
├── agents/
│   ├── README.md
│   ├── onboarding/                     ← Agent configs
│   │   ├── *.template.md               ← Templates (tracked)
│   │   └── *.md                        ← User configs (gitignored)
│   ├── tasks/                          ← Task files (gitignored)
│   └── workflow/                       ← SDK workflow docs
│
├── sdk/                                ← SDK code
├── scripts/                            ← Build/utility scripts
├── logs/                               ← Historical records
├── archive/                            ← Old versions
└── config.template.json                ← Config template
```

---

## 📝 QUESTIONS FOR YOU

### DELETE or UPDATE?

**These have outdated root directory references (post-flatten):**
1. START.md - Delete or update all root directory → current paths?
2. docs/BOOTSTRAP.md - Delete or update?
3. FLATTEN-MIGRATION.sh - Delete or move to archive/?
4. STRUCTURE-CHANGE.md - Delete or move to docs/meta/?

### TEMPLATES - Are these correct?

**Which files are TEMPLATES (users copy and customize)?**
1. docs/NOW.md → NOW.template.md?
2. integration.md → integration.template.md?
3. Any others I missed?

**Which files are EXAMPLES (reference only)?**
- Same question - are NOW.md and integration.md examples or templates?

### MERGE or SEPARATE?

1. **BRANCH-VS-CLONE** + **MULTI-PROJECT-WORKFLOW**:
   - Merge into one comprehensive guide?
   - Keep separate (decision vs implementation)?

2. **BOOTSTRAP** + **BOOTSTRAP-NEW-PROJECT**:
   - Keep separate (existing project vs new project)?
   - Merge with clear sections?

### WHAT'S MISSING?

Looking at the framework, what documentation do you WISH existed but doesn't?
- Troubleshooting guide?
- Architecture overview?
- Development guide for contributing?
- Something else?

---

## 🎯 NEXT STEPS (After Your Answers)

1. **Rename templates** → Add .template.md suffix
2. **Move files** → New structure
3. **Update references** → Fix all cross-links
4. **Update .gitignore** → Ensure templates tracked, configs ignored
5. **Delete obsolete** → Remove old duplicates
6. **Update navigation** → Fix README.md and docs/README.md

---

## ⏸️ WAITING FOR YOUR INPUT

**Please answer the questions above so I can:**
1. Know which files are old vs new vs complementary
2. Understand which docs are templates vs guides
3. Make the right decisions about merging/moving/deleting
4. Design the final structure correctly

Take your time reviewing the questions! 🙏
