# Creating Claude Code Native Agent Files

> **For:** Setup scripts (NEW-PROJECT.ai.md and EXISTING-PROJECT.ai.md)
> **Purpose:** Instructions for creating `.claude/agents/` files during setup
> **Replaces:** SDK agent approach (archived in `archive/sdk-approach/`)

---

## 🎯 What To Create

During project setup, create these two files:
- `.claude/agents/fe-implementor.md`
- `.claude/agents/be-implementor.md`

These are Claude Code's native agent definition files.

---

## 📋 Creation Steps

### **Step 1: Create `.claude/agents/` directory**

```bash
mkdir -p .claude/agents
```

### **Step 2: Create fe-implementor.md**

Use the template at `templates/claude-agents/fe-implementor.template.md`

**Replace these placeholders:**
- `{{PROJECT_NAME}}` → User's project name
- `{{FRONTEND_PATH}}` → Path to frontend folder (e.g., `frontend` or `src`)
- `{{FRONTEND_FRAMEWORK}}` → React, Vue, etc.
- `{{STATE_MANAGEMENT}}` → Redux, Zustand, etc.
- `{{UI_LIBRARY}}` → Material-UI, Ant Design, etc.
- `{{BUILD_TOOL}}` → Vite, Webpack, etc.
- `{{ADDITIONAL_FRONTEND_DOCS}}` → Any extra documentation paths
- `{{GENERATION_DATE}}` → Current date/time

**Example bash command:**
```bash
# Read template
TEMPLATE=$(cat agentic-pm/templates/claude-agents/fe-implementor.template.md)

# Replace placeholders
CONTENT="${TEMPLATE//\{\{PROJECT_NAME\}\}/MyProject}"
CONTENT="${CONTENT//\{\{FRONTEND_PATH\}\}/frontend}"
CONTENT="${CONTENT//\{\{FRONTEND_FRAMEWORK\}\}/React + TypeScript + Vite}"
CONTENT="${CONTENT//\{\{STATE_MANAGEMENT\}\}/Redux Toolkit + RTK Query}"
CONTENT="${CONTENT//\{\{UI_LIBRARY\}\}/Material-UI (MUI)}"
CONTENT="${CONTENT//\{\{BUILD_TOOL\}\}/Vite}"
CONTENT="${CONTENT//\{\{ADDITIONAL_FRONTEND_DOCS\}\}/See frontend/docs/ for component patterns}"
CONTENT="${CONTENT//\{\{GENERATION_DATE\}\}/$(date '+%Y-%m-%d %H:%M:%S')}"

# Write to .claude/agents/
echo "$CONTENT" > .claude/agents/fe-implementor.md
```

### **Step 3: Create be-implementor.md**

Use the template at `templates/claude-agents/be-implementor.template.md`

**Replace these placeholders:**
- `{{PROJECT_NAME}}` → User's project name
- `{{BACKEND_PATH}}` → Path to backend folder
- `{{BACKEND_FRAMEWORK}}` → Express, Fastify, etc.
- `{{DATABASE}}` → PostgreSQL, MySQL, etc.
- `{{ORM}}` → Prisma, TypeORM, etc.
- `{{ADDITIONAL_TECH}}` → Redis, AWS, etc.
- `{{ADDITIONAL_BACKEND_DOCS}}` → Any extra documentation paths
- `{{GENERATION_DATE}}` → Current date/time

**Example bash command:**
```bash
# Read template
TEMPLATE=$(cat agentic-pm/templates/claude-agents/be-implementor.template.md)

# Replace placeholders
CONTENT="${TEMPLATE//\{\{PROJECT_NAME\}\}/MyProject}"
CONTENT="${CONTENT//\{\{BACKEND_PATH\}\}/backend}"
CONTENT="${CONTENT//\{\{BACKEND_FRAMEWORK\}\}/Express + TypeScript}"
CONTENT="${CONTENT//\{\{DATABASE\}\}/PostgreSQL}"
CONTENT="${CONTENT//\{\{ORM\}\}/Prisma}"
CONTENT="${CONTENT//\{\{ADDITIONAL_TECH\}\}/None}"
CONTENT="${CONTENT//\{\{ADDITIONAL_BACKEND_DOCS\}\}/See backend/prisma/schema.prisma for data models}"
CONTENT="${CONTENT//\{\{GENERATION_DATE\}\}/$(date '+%Y-%m-%d %H:%M:%S')}"

# Write to .claude/agents/
echo "$CONTENT" > .claude/agents/be-implementor.md
```

---

## ✅ Verification

After creating the files, verify:

```bash
ls -la .claude/agents/
# Should show:
# fe-implementor.md
# be-implementor.md
```

**Test that Manager AI can spawn agents:**
```
Manager AI can now use:
Task(subagent_type="fe-implementor", ...)
Task(subagent_type="be-implementor", ...)
```

---

## 🚫 What NOT To Do

**❌ Don't copy old SDK templates:**
- ~~`agents/onboarding/fe-agent.template.md`~~ (deprecated)
- ~~`agents/onboarding/be-agent.template.md`~~ (deprecated)

**❌ Don't create SDK files:**
- ~~`agents/onboarding/fe-agent.md`~~ (SDK approach, archived)
- ~~`agents/onboarding/be-agent.md`~~ (SDK approach, archived)

**✅ Only create:**
- `.claude/agents/fe-implementor.md` (Claude Code native)
- `.claude/agents/be-implementor.md` (Claude Code native)

---

## 📝 Tell the User

After creating agent files, tell the user:

```
✅ Agent system configured!

Created Claude Code native agents:
- .claude/agents/fe-implementor.md (Frontend implementation)
- .claude/agents/be-implementor.md (Backend implementation)

Manager AI can now spawn these agents with the Task tool:
Task(subagent_type="fe-implementor", ...)
Task(subagent_type="be-implementor", ...)

No SDK code needed - everything is in simple markdown files!
```

---

**Created:** 2025-10-24
**Purpose:** Replace SDK agent approach with Claude Code native agents
