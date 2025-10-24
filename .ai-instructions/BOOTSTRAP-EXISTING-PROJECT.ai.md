# 🎬 Bootstrap Existing Project - For Claude Code

> **For:** Claude Code adding framework to existing projects
> **Purpose:** Intelligently detect stack, find documentation, configure framework
> **Time:** 5-10 minutes with minimal user input

---

## 🎯 Your Mission

When a user chooses "Add framework to EXISTING project," you will:

1. **Auto-detect everything** (tech stack, structure, documentation)
2. **Ask only what you can't detect** (coding rules, preferences)
3. **Find existing documentation** (architecture, patterns, claude.md files)
4. **Configure framework intelligently** (use detected information)
5. **Suggest documentation creation** (if gaps found)
6. **Ask about tasks at the end** (not before setup!)

**Key Principle:** Be intelligent, not interrogative. Detect first, ask second.

---

## 📋 Step-by-Step Workflow

### **Phase 1: Intelligent Detection & Analysis**

**CRITICAL:** You are running inside `agentic-pm/` folder!
The actual project files are in the PARENT directory (`..`).
Always use `..` prefix or `cd ..` to check the real project structure.

**Step 1: Analyze Project Structure (in PARENT directory)**

```bash
# Check the PARENT directory (the actual project folder)
ls -la ..

# Look for frontend in parent directory
ls -la .. | grep -E "frontend|client|web|app|dashboard|ui"

# Look for backend in parent directory
ls -la .. | grep -E "backend|server|api|services"

# Look for monorepo structure in parent directory
ls -la .. | grep -E "packages|apps|libs"
```

**Step 2: Detect Tech Stack (Frontend)**

If frontend folder found in parent directory:

```bash
# Check package.json in PARENT directory
cat ../frontend*/package.json 2>/dev/null || cat ../client*/package.json 2>/dev/null

# Detect framework
grep -E "react|vue|svelte|angular|next|nuxt|gatsby" ../frontend*/package.json

# Detect TypeScript
ls ../frontend*/tsconfig.json 2>/dev/null

# Detect state management
grep -E "redux|zustand|pinia|mobx|jotai|recoil" ../frontend*/package.json

# Detect UI libraries
grep -E "mui|chakra|antd|tailwind|bootstrap|shadcn" ../frontend*/package.json
```

**Step 3: Detect Tech Stack (Backend)**

If backend folder found in parent directory:

```bash
# Check package.json or requirements.txt in PARENT directory
cat ../backend*/package.json 2>/dev/null || cat ../server*/package.json 2>/dev/null
cat ../backend*/requirements.txt 2>/dev/null

# Detect framework
grep -E "express|fastify|nest|koa|hapi" ../backend*/package.json  # Node.js
grep -E "fastapi|django|flask" ../backend*/requirements.txt        # Python

# Detect database
grep -E "prisma|typeorm|sequelize|mongoose|pg|mysql" ../backend*/package.json
grep -E "sqlalchemy|psycopg2|pymongo" ../backend*/requirements.txt

# Detect TypeScript
ls ../backend*/tsconfig.json 2>/dev/null
```

**Step 4: Search for Existing Documentation (in PARENT directory)**

```bash
# Look for project documentation in PARENT directory
find .. -name "README.md" -o -name "ARCHITECTURE.md" -o -name "CONTRIBUTING.md" -maxdepth 3

# Look for Claude-specific docs (IMPORTANT!) in PARENT directory
find .. -name "claude.md" -o -name ".claude.md" -o -name "CLAUDE.md" -maxdepth 3

# Specifically check for frontend/claude.md and backend/claude.md
ls ../frontend*/claude.md ../frontend*/.claude.md 2>/dev/null
ls ../backend*/claude.md ../backend*/.claude.md 2>/dev/null

# Look for API documentation
find .. -name "API.md" -o -name "api-docs.md" -o -name "openapi.yaml" -maxdepth 3

# Look for coding standards
find .. -name "STANDARDS.md" -o -name "CONVENTIONS.md" -o -name ".eslintrc*" -maxdepth 3

# Look for architecture docs
find .. -path "*/docs/*" -name "*.md" 2>/dev/null | head -20
```

**Step 5: Analyze Documentation (if found)**

If you found documentation files, **read them** to extract:
- Architecture patterns (MVC, clean architecture, etc.)
- Folder structure conventions
- Naming conventions
- Code style preferences
- Critical rules and constraints

**Special attention to (all in PARENT directory):**
- `../frontend/claude.md` or `../frontend/.claude.md` → Frontend agent rules
- `../backend/claude.md` or `../backend/.claude.md` → Backend agent rules
- `../ARCHITECTURE.md` → Overall system design
- `../CONTRIBUTING.md` → Coding standards

---

### **Phase 2: Present Findings & Minimal Questions**

**Tell user what you found:**

```
✅ I've analyzed your project! Here's what I detected:

📁 Project Structure:
- Frontend: [path] ([framework] + [TypeScript/JavaScript])
- Backend: [path] ([framework] + [TypeScript/JavaScript/Python])

🔧 Tech Stack Detected:
Frontend:
- Framework: [React/Vue/Svelte/etc.]
- Language: [TypeScript/JavaScript]
- State Management: [Redux/Zustand/Pinia/detected or "Not detected"]
- UI Library: [MUI/Chakra/Tailwind/detected or "None detected"]

Backend:
- Framework: [Express/Fastify/NestJS/FastAPI/etc.]
- Language: [TypeScript/JavaScript/Python]
- Database: [PostgreSQL/MySQL/MongoDB/detected or "Not detected"]
- ORM: [Prisma/TypeORM/Sequelize/detected or "Not detected"]

📚 Documentation Found:
- [✅/❌] Architecture documentation
- [✅/❌] Frontend coding standards (claude.md)
- [✅/❌] Backend coding standards (claude.md)
- [✅/❌] API documentation

[If documentation found:]
I found the following documentation:
- ../frontend/claude.md (I'll use this for frontend agent rules)
- ../ARCHITECTURE.md (I'll use this for system understanding)
- [list other relevant docs]

[If no documentation found:]
⚠️ I didn't find any architecture documentation or coding standards.

I recommend creating (in your project root):
1. frontend/claude.md - Frontend coding rules for AI agents
2. backend/claude.md - Backend coding rules for AI agents
3. ARCHITECTURE.md - Overall system architecture

Would you like me to help create these after setup? (Yes/No)
```

**Ask ONLY what you couldn't detect:**

```
I need clarification on a few things I couldn't auto-detect:

[Only ask if NOT found in documentation:]

1. Coding Standards & Patterns:
   - Are there specific patterns agents must follow?
     (e.g., "Use functional components only", "Repository pattern for DB")
   - Any rules agents should NEVER break?
     (e.g., "Always validate with Zod", "No console.logs in production")

2. Project Description:
   - What is this project about? (Brief description for context)

[Always ask:]

3. API Key Setup:
   - I see [✅ .env exists / ❌ no .env file]
   - I'll add ANTHROPIC_API_KEY to [existing .env / create new .env]
   - Your API key: (paste sk-ant-api03-...)

That's it! I have everything else.
```

**Note:** If you found `../frontend/claude.md` and `../backend/claude.md` with coding rules, **skip question 1 entirely!**

---

### **Phase 3: Install Framework**

**Tell user:**
```
✅ Got it! Installing framework now...
```

**Step 1: Install framework in project root**

```bash
# Install dependencies
npm install

# Or if framework is being cloned
# (depends on setup - might already be in current directory)
```

**Step 2: Create config.json**

```bash
cat > config.json << EOF
{
  "projectRoot": "$(pwd | sed 's|/agentic-pm||')",
  "frontendPath": "$(pwd | sed 's|/agentic-pm||')/[detected-frontend-folder]",
  "backendPath": "$(pwd | sed 's|/agentic-pm||')/[detected-backend-folder]",
  "pmPath": "$(pwd)",
  "createdAt": "$(date +%Y-%m-%d)",
  "projectName": "[from user description]"
}
EOF
```

**Example:**
```json
{
  "projectRoot": "/Users/username/my-awesome-project",
  "frontendPath": "/Users/username/my-awesome-project/frontend-dashboard",
  "backendPath": "/Users/username/my-awesome-project/backend",
  "pmPath": "/Users/username/my-awesome-project/agentic-pm",
  "createdAt": "2025-10-23",
  "projectName": "Healthcare Platform"
}
```

**Step 3: Configure Agent Onboarding Files**

**For `agents/onboarding/fe-agent.md`:**

Create by combining:
- **Auto-detected info:** Framework, TypeScript, libraries
- **Documentation found:** If `../frontend/claude.md` exists, reference or include it
- **User-provided rules:** From question 1 (if asked)

```markdown
# Frontend Agent Onboarding

## Project Location
**Frontend:** [detected-path]

## Tech Stack (Auto-Detected)
- **Framework:** [React 18.2 / Vue 3 / Svelte 4 / etc.]
- **Language:** [TypeScript 5.x / JavaScript ES2022]
- **State Management:** [Redux Toolkit / Zustand / Pinia / None]
- **UI Library:** [Material-UI / Chakra UI / Tailwind / shadcn/ui]
- **Build Tool:** [Vite / Webpack / Next.js / etc.]
- **Key Dependencies:** [list from package.json]

## Project Documentation References
[If found, create links to parent directory:]
- **Architecture:** See `../ARCHITECTURE.md` for system design
- **Coding Standards:** See `../frontend/claude.md` for detailed rules
- **API Integration:** See `../docs/API.md` for backend contracts

[If ../frontend/claude.md exists:]
**IMPORTANT:** Read `../frontend/claude.md` for complete frontend coding rules.
The rules below supplement those guidelines.

## Critical Rules (From Documentation & User)
[Combine rules from:]
1. ../frontend/claude.md (if exists)
2. User-provided rules
3. Auto-detected patterns (from code analysis)

Examples based on detected stack:
- [If TypeScript:] Use strict TypeScript mode, no `any` types
- [If Redux:] Use Redux Toolkit, no direct state mutation
- [If React:] Functional components with hooks only
- [User rules from question 1]

## File Structure (Auto-Detected)
```
frontend/
├── src/
│   ├── components/  [detected]
│   ├── pages/       [detected]
│   ├── hooks/       [detected]
│   ├── store/       [detected if Redux/Zustand]
│   └── utils/       [detected]
```

## Build Commands
- **Dev:** [detected from package.json scripts]
- **Build:** [detected from package.json scripts]
- **Test:** [detected from package.json scripts]
```

**For `agents/onboarding/be-agent.md`:**

Similar approach - combine auto-detected + documentation + user rules:

```markdown
# Backend Agent Onboarding

## Project Location
**Backend:** [detected-path]

## Tech Stack (Auto-Detected)
- **Framework:** [Express 4.x / Fastify / NestJS / FastAPI]
- **Language:** [TypeScript 5.x / JavaScript / Python 3.11]
- **Database:** [PostgreSQL / MySQL / MongoDB]
- **ORM:** [Prisma / TypeORM / Sequelize / SQLAlchemy]
- **Key Dependencies:** [list from package.json/requirements.txt]

## Project Documentation References
[If found in parent directory:]
- **Architecture:** See `../ARCHITECTURE.md`
- **Coding Standards:** See `../backend/claude.md`
- **Database Schema:** See `../backend/prisma/schema.prisma` [or equivalent]

[If ../backend/claude.md exists:]
**IMPORTANT:** Read `../backend/claude.md` for complete backend coding rules.

## Critical Rules
[Combine from ../backend/claude.md + user input]

## File Structure (Auto-Detected)
```
backend/
├── src/
│   ├── routes/      [detected]
│   ├── controllers/ [detected]
│   ├── services/    [detected]
│   ├── models/      [detected]
│   └── utils/       [detected]
```

## Build Commands
- **Dev:** [detected]
- **Build:** [detected]
- **Test:** [detected]
```

**For `agents/onboarding/auditor-guidelines.md`:**

Use template but reference project documentation if found.

**Step 4: Setup Environment**

```bash
# Check if .env exists
if [ -f "../.env" ]; then
  echo "✅ Found .env file"
  # Add ANTHROPIC_API_KEY if not present
  if ! grep -q "ANTHROPIC_API_KEY" ../.env; then
    echo "\nANTHROPIC_API_KEY=[user-provided-key]" >> ../.env
  fi
else
  echo "Creating .env file..."
  cat > ../.env << EOF
ANTHROPIC_API_KEY=[user-provided-key]
EOF
fi
```

**Tell user:**
```
✅ Framework installed and configured!

Configuration:
- ✅ config.json created with detected paths
- ✅ Frontend agent configured ([framework] + [language])
- ✅ Backend agent configured ([framework] + [language])
- ✅ API key added to .env
[If documentation found:]
- ✅ Agent rules linked to your existing documentation
[If documentation missing:]
- ⚠️ No coding standards documentation found
```

---

### **Phase 4: Suggest Documentation Creation (If Needed)**

**If no architecture/coding docs were found:**

```
📝 Recommendation: Create Documentation for AI Agents

I noticed you don't have architecture or coding standards documentation.
For best AI agent performance, I recommend creating:

1. **ARCHITECTURE.md** (Root level)
   - Overall system design
   - How frontend ↔ backend communicate
   - Key design decisions
   - Data flow diagrams

2. **frontend/claude.md** (Frontend folder)
   - React/Vue/Svelte patterns to follow
   - Component structure conventions
   - State management rules
   - Styling approach (CSS modules, Tailwind, etc.)
   - Testing requirements

3. **backend/claude.md** (Backend folder)
   - API endpoint conventions
   - Error handling patterns
   - Database access patterns
   - Security requirements
   - Testing requirements

Would you like me to help create these now, or skip for later? (Create now / Skip)

[If user says "Create now":]
I'll create template documentation files that you can customize.
[Use Write tool to create the files with intelligent templates based on detected stack]

[If user says "Skip":]
No problem! You can create them later. Agents will still work, but might need
more guidance on your specific coding patterns.
```

---

### **Phase 5: Final Check & Task Discussion**

**Tell user:**

```
✨ Setup Complete! Framework is ready to use.

Your project structure:
[Show detected structure with framework integrated]

Next Steps:
```

**NOW ask about tasks (not before):**

```
🎯 Ready to build features with AI agents!

Do you have any tasks or features you'd like to work on?

A) Yes, I have specific tasks in mind
   - Tell me what features you want to build
   - I'll help create task files and spawn agents

B) Not right now, just exploring
   - That's fine! Check docs/START-HERE.human.md when ready
   - Your framework is fully configured

C) Show me how this works first
   - I can create a demo task and walk you through the process

Which option? (A / B / C)
```

**Based on answer:**

**If A (Has tasks):**
```
Great! What features do you want to work on?

You can tell me:
- Single feature: "Add user profile editing"
- Multiple features: "Add profile editing, password reset, and 2FA"
- Reference existing plan: "Check our roadmap in docs/roadmap.md"

What would you like to build?
```

Then create task files and offer to spawn agents.

**If B (Not now):**
```
Perfect! Your framework is ready when you need it.

📚 Resources:
- docs/START-HERE.human.md - Main navigation
- docs/NOW.md - Track project status
- docs/ROADMAP.md - Plan your features
- docs/integration.md - API contracts

When ready to build:
1. Create task files in agents/tasks/YYYY-MM-DD/
2. Or just tell me what to build and I'll create the tasks
3. Spawn agents: `npx tsx sdk/spawn-agent-simple.ts`

Happy building! 🚀
```

**If C (Demo):**
```
Great! Let me show you how this works.

I'll create a sample task to demonstrate the workflow.
Then I can spawn an agent to implement it, and you'll see how it all works.

What kind of demo task would be helpful?
- "Add a simple button component" (frontend demo)
- "Create a health-check API endpoint" (backend demo)
- "Full-stack: Add a notes feature" (both)

Choose one, or tell me a different demo idea.
```

---

## 🎯 Key Principles

### **1. Detect First, Ask Later**
- ✅ Use ls, grep, cat to find information
- ✅ Read package.json, tsconfig.json, etc.
- ✅ Search for documentation files
- ❌ Don't ask what you can detect

### **2. Respect Existing Documentation**
- ✅ If `frontend/claude.md` exists → use it, don't override
- ✅ If `ARCHITECTURE.md` exists → reference it
- ✅ If `.eslintrc` exists → note it in agent files
- ❌ Don't create redundant documentation

### **3. Be Intelligent About Stack**
```
Detected React + TypeScript + Redux Toolkit?
→ Auto-configure: "Use RTK best practices, typed hooks, no direct mutations"

Detected FastAPI + SQLAlchemy + PostgreSQL?
→ Auto-configure: "Use async endpoints, Pydantic models, connection pooling"

Not just "You have React" - be SPECIFIC with detected versions and patterns.
```

### **4. Ask About Tasks at the END**
- ❌ Don't ask "What feature first?" before setup
- ✅ Complete setup, THEN ask about tasks
- ✅ Give user option to explore first

### **5. Suggest, Don't Mandate**
- ✅ "I recommend creating ARCHITECTURE.md" with reasons
- ✅ "Would you like me to help create it?"
- ❌ "You must create this file now"

---

## 🔍 Detection Examples

### **Example 1: React + TypeScript + Redux + MUI**

```bash
# Detected from package.json
{
  "dependencies": {
    "react": "^18.2.0",
    "@reduxjs/toolkit": "^1.9.5",
    "@mui/material": "^5.14.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}
```

**Auto-configure agent onboarding:**
```markdown
## Tech Stack (Auto-Detected)
- Framework: React 18.2 (Hooks-based)
- Language: TypeScript 5.0
- State Management: Redux Toolkit 1.9
- UI Library: Material-UI 5.14
- Build: Vite (detected in scripts)

## Critical Rules (Auto-Inferred from Stack)
- Use TypeScript strict mode (detected in tsconfig.json)
- Use Redux Toolkit patterns (createSlice, createAsyncThunk)
- Use typed hooks (useAppDispatch, useAppSelector)
- Use MUI theming system, not inline styles
- Functional components only (React 18 best practice)
```

### **Example 2: Found frontend/claude.md**

```bash
$ cat frontend/claude.md

# Frontend Coding Standards

## Component Structure
- All components in src/components/
- One component per file
- Use named exports

## State Management
- Global state: Redux Toolkit only
- Local state: useState for simple cases
- Form state: React Hook Form + Zod validation

## Styling
- Use Tailwind utility classes
- No inline styles
- Component-specific styles in .module.css only when necessary

## Testing
- Every component must have a test
- Use React Testing Library
- Aim for 80% coverage
```

**Action:** Reference this in agent onboarding:
```markdown
## Coding Standards
**IMPORTANT:** Read `/frontend/claude.md` for complete coding rules.

Key highlights from documentation:
- Component structure: One component per file, named exports
- State: Redux Toolkit (global), useState (local), React Hook Form (forms)
- Styling: Tailwind utilities preferred
- Testing: Required for all components, 80% coverage target
```

---

## 📊 Success Criteria

**Setup is successful when:**
- ✅ Tech stack detected correctly (frontend + backend)
- ✅ Existing documentation found and referenced
- ✅ config.json created with correct paths
- ✅ Agent onboarding files created with detected info
- ✅ API key added to .env
- ✅ User asked ONLY what couldn't be detected
- ✅ Documentation suggestions made (if needed)
- ✅ Tasks discussed at the END (not beginning)

---

**Last Updated:** 2025-10-23
**Version:** 2.0 (Intelligent Auto-Detection)
