# 🎬 Bootstrap Existing Project - For Claude Code

> **For:** Claude Code adding framework to existing projects
> **Purpose:** Intelligently detect stack, find documentation, configure framework
> **Time:** 5-10 minutes with minimal user input

---

## 🎯 Your Mission

When a user chooses "Add framework to EXISTING project," you will:

1. **Auto-detect everything** (tech stack, structure, documentation)
2. **Ask only what you can't detect** (coding rules, preferences)
3. **Find existing documentation** (architecture, patterns, Claude.md files)
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

**IMPORTANT: Claude.md naming convention**
- The framework convention is **capitalized**: `Claude.md` (named after Claude AI)
- Some projects may have lowercase `Claude.md` - check both for compatibility
- Prefer `Claude.md` when creating new files

```bash
# Look for Claude-specific docs (IMPORTANT!) - check both capitalizations
ls ../frontend*/Claude.md ../frontend*/claude.md 2>/dev/null
ls ../backend*/Claude.md ../backend*/claude.md 2>/dev/null
ls ../Claude.md ../claude.md 2>/dev/null  # Root level

# Look for standard project documentation
find .. -maxdepth 2 -name "README.md" -o -name "ARCHITECTURE.md" -o -name "CONTRIBUTING.md" 2>/dev/null

# Look for docs/ or documentation/ folders
find .. -maxdepth 2 -type d -name "docs" -o -name "documentation" -o -name "doc" 2>/dev/null

# If docs folder found, get all .md files
if [ -d "../docs" ] || [ -d "../documentation" ]; then
  find ../docs ../documentation -name "*.md" 2>/dev/null | head -30
fi

# Look for API documentation
find .. -maxdepth 3 -name "API.md" -o -name "api.md" -o -name "api-docs.md" -o -name "openapi.yaml" -o -name "swagger.yaml" 2>/dev/null

# Look for coding standards indicators
find .. -maxdepth 2 -name "STANDARDS.md" -o -name "CONVENTIONS.md" -o -name ".eslintrc*" -o -name ".prettierrc*" 2>/dev/null
```

**Step 5: Analyze Documentation (if found)**

**Priority 1: Claude.md files (MOST IMPORTANT)**

If you found `Claude.md` files, **read them first**:
- `../frontend/Claude.md` → Frontend agent rules (highest priority for FE)
- `../backend/Claude.md` → Backend agent rules (highest priority for BE)
- `../claude.md` → General project rules (applies to both)

These files are specifically written for AI agents and contain the most important rules.

**Priority 2: Standard Project Documentation**

Read these to understand the project:
- `../ARCHITECTURE.md` → System design, how components connect
- `../CONTRIBUTING.md` → Coding standards, PR process, conventions
- `../README.md` → Project overview (check for setup, tech stack, architecture sections)

**Priority 3: docs/ folder - Smart Analysis Required**

If you found a `docs/` or `documentation/` folder with .md files:

**IMPORTANT: Intelligently filter which docs to read!**

**Read these types of files:**
- Architecture docs: `architecture.md`, `design.md`, `system-design.md`
- API docs: `api.md`, `endpoints.md`, `api-reference.md`
- Coding standards: `conventions.md`, `standards.md`, `style-guide.md`
- Component guides: `components.md`, `ui-guidelines.md`
- Database docs: `database.md`, `schema.md`, `data-model.md`

**SKIP these types of files (not relevant for AI agents):**
- User documentation: `user-guide.md`, `tutorial.md`, `getting-started.md`
- Marketing content: `features.md`, `roadmap.md` (unless it contains technical architecture)
- Meeting notes: `notes/*.md`, `meetings/*.md`
- Changelogs: `CHANGELOG.md`, `history.md`
- License/legal: `LICENSE.md`, `TERMS.md`
- Package READMEs: `node_modules/**/README.md`

**How to determine if a doc is relevant:**

Look at the file path and name:
```bash
../docs/architecture/system-design.md  ✅ READ (architecture)
../docs/api/endpoints.md               ✅ READ (API documentation)
../docs/components/button.md           ✅ READ (component specs)
../docs/user-guide/how-to-login.md     ❌ SKIP (user guide)
../docs/marketing/features.md          ❌ SKIP (marketing)
../docs/meetings/2024-01-15.md         ❌ SKIP (meeting notes)
```

**Quick smart analysis:**

1. **Read the first 50 lines** of each .md file in docs/
2. **Look for these indicators** that it's RELEVANT:
   - Contains code examples or snippets
   - Mentions "API", "endpoint", "component", "architecture", "database"
   - Has technical diagrams or schemas
   - Discusses coding patterns or conventions

3. **Skip if you see these indicators** that it's NOT RELEVANT:
   - Written in user-facing language ("How to...", "Getting Started")
   - Contains screenshots or UI walkthrough instructions
   - Marketing language ("Amazing features", "Best-in-class")
   - Meeting agendas or discussion notes

**Extract from relevant docs:**
- Architecture patterns (MVC, microservices, clean architecture, etc.)
- Folder structure conventions
- Naming conventions (camelCase, kebab-case, etc.)
- Code style preferences (functional vs OOP, etc.)
- Critical rules and constraints
- API design patterns (REST conventions, response formats)
- Component structure patterns
- Database access patterns

---

### **Phase 2: Present Findings & Minimal Questions**

**BEFORE presenting, extract project description intelligently:**

```bash
# Try to extract project description from multiple sources

# 1. Check package.json for name and description
cat ../package.json | grep -E '"name"|"description"' 2>/dev/null

# 2. Check README.md for About/Description section
cat ../README.md 2>/dev/null | head -100

# 3. Infer from dependencies (smart inference)
cat ../frontend*/package.json ../backend*/package.json 2>/dev/null | grep -E '"stripe"|"paypal"|"payment"'  # E-commerce?
cat ../frontend*/package.json ../backend*/package.json 2>/dev/null | grep -E '"healthcare"|"patient"|"medical"'  # Healthcare?
cat ../frontend*/package.json ../backend*/package.json 2>/dev/null | grep -E '"auth"|"passport"|"next-auth"'  # Auth platform?

# 4. Check docs/ for project description
cat ../docs/README.md ../docs/overview.md 2>/dev/null | head -50
```

**Intelligent inference examples:**

```javascript
// Dependencies analysis
Has Stripe/PayPal → "E-commerce or payment processing platform"
Has Firebase Auth → "User authentication platform"
Has Chart.js/D3 → "Analytics or data visualization platform"
Has Socket.io → "Real-time communication platform"
Has Prisma + PostgreSQL → "Database-driven application"

// File/folder analysis
Has /patients, /appointments → "Healthcare management system"
Has /products, /cart, /checkout → "E-commerce platform"
Has /tasks, /projects → "Project/task management tool"
Has /posts, /comments → "Social media or blogging platform"

// README.md extraction
Look for: "About", "Description", "Overview" sections
Extract: First paragraph or bullet points describing the project
```

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

[Priority 1: Claude.md files (AI-specific)]
- [✅/❌] frontend/Claude.md or Claude.md - Frontend agent rules
- [✅/❌] backend/Claude.md or Claude.md - Backend agent rules
- [✅/❌] claude.md or Claude.md (root) - General project rules

[Priority 2: Technical documentation]
- [✅/❌] docs/ folder with technical docs
  [If found, list RELEVANT docs you identified with their purpose:]
  - ../docs/architecture-overview.md (system architecture)
  - ../docs/api-patterns.md (API integration patterns)
  - ../backend/ENDPOINT_CREATION_GUIDE.md (backend patterns)
  - [etc. - only list technical docs that AI agents should read]

[Priority 3: Standard files (if relevant)]
- [✅/❌] README.md - Project overview
- [✅/❌] CONTRIBUTING.md - Coding standards
- [Only mention these if they contain useful architecture/pattern info]

[If Claude.md files found:]
🎯 Excellent! I found Claude.md files with AI agent rules:
- ../frontend/Claude.md ✅ (I'll use this for frontend agent configuration)
- ../backend/Claude.md ✅ (I'll use this for backend agent configuration)

These contain your coding standards and patterns. I'll reference them in agent onboarding files.

[If SOME documentation found but NO claude.md:]
📝 I found project documentation:
- ../ARCHITECTURE.md (system design)
- ../docs/api/endpoints.md (API documentation)
- [list other relevant docs]

I'll use these to understand your project, but I recommend creating Claude.md files
for clearer AI agent instructions:
1. frontend/Claude.md - Frontend coding rules specifically for AI
2. backend/Claude.md - Backend coding rules specifically for AI

Would you like me to help create these after setup? (Yes/No)

[If NO claude.md but HAS other technical docs:]
📝 I found project documentation:
- ../docs/architecture-overview.md (architecture)
- ../backend/ENDPOINT_CREATION_GUIDE.md (patterns)
- [list other relevant docs]

This is excellent documentation! However, for optimal AI agent performance, I recommend
creating Claude.md files that consolidate the key rules AI agents need to know:

1. **frontend/Claude.md** (optional but recommended)
   - Consolidates frontend rules from your docs/ folder
   - Quick reference for AI agents building frontend features

2. **backend/Claude.md** (optional but recommended)
   - Consolidates backend patterns from your guides
   - Quick reference for AI agents building APIs

These are OPTIONAL - your existing docs are great! Claude.md files just make it faster
for AI agents to find the critical rules without reading multiple documentation files.

Would you like me to help create these after setup? (Yes/No/Skip - your docs are enough)

[If NO documentation at all:]
⚠️ I didn't find any documentation (no claude.md, architecture docs, or docs/ folder).

For best AI agent performance, I strongly recommend creating:
1. **frontend/Claude.md** - Frontend coding rules for AI agents
   (Component patterns, state management, styling conventions)
2. **backend/Claude.md** - Backend coding rules for AI agents
   (API patterns, error handling, database access)

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

2. Project Description & Confirmation:

   [If you extracted a CLEAR description from README or docs:]

   Based on your documentation:
   Project: [Extracted name from package.json or README]
   Description: [Extracted from README.md]
   Purpose: [Clear purpose from docs]

   This looks clear from your documentation - I'll use this understanding.
   (If you want to add or correct anything, let me know!)

   [If description is UNCLEAR or missing:]

   I tried to infer from your setup:
   Project: [Extracted name or "Unknown"]
   Stack: [Tech detected: React + Express + PostgreSQL]
   Likely Purpose: [Infer from dependencies and structure]

   Example intelligent inference:
   - If has Stripe dependency → "E-commerce or payment processing platform"
   - If has patient/doctor in docs → "Healthcare platform"
   - If has task/todo in docs → "Task management application"
   - If has auth + user management → "User platform with authentication"

   Can you confirm or provide a brief description?
   (e.g., "Healthcare platform for managing patient appointments")

[Always ask:]

3. API Key Setup:

   [If .env exists:]
   I see you have a .env file. I'll add ANTHROPIC_API_KEY to it.

   You have two options:
   A) You manually add it to ../.env after setup
   B) Give it to me now and I'll add it (I promise I won't steal it... 😏)

      (Just kidding! Seriously though, pasting API keys in chat logs is like
      leaving your house key under the doormat - except the whole internet
      can see your doormat. So maybe option A is safer? Your call! 😄)

   Choose A or B: (If B, paste your key: sk-ant-api03-...)

   [If .env doesn't exist:]
   I don't see a .env file. I'll create one for you!

   You have two options:
   A) I create ../.env now, you add ANTHROPIC_API_KEY=your-key-here later
   B) Give me your API key now and I'll add it for you

      (Full disclosure: Pasting API keys in chat is about as secure as
      tweeting your bank password. I mean, I'm trustworthy... but are
      you SURE this chat log won't end up in a screenshot? 😅)

   Choose A or B: (If B, paste your key: sk-ant-api03-...)

That's it! I have everything else.
```

**Note:** If you found `../frontend/Claude.md` and `../backend/Claude.md` with coding rules, **skip question 1 entirely!**

---

### **Phase 3: Install Framework**

**IMPORTANT: Narrate what you're doing so user understands!**

**Tell user:**
```
✅ Perfect! Let me set up the framework now.

I'll do this in 5 steps:
1. 📦 Install dependencies (framework tools)
2. 📁 Configure paths (so agents know where your code is)
3. 📝 Create agent instructions (frontend, backend, auditor)
4. 🔒 Set up API key (for spawning agents)
5. 📋 Analyze documentation gaps (optional improvements)

This will take about 30 seconds...
```

**Step 1: Install framework dependencies**

**Tell user BEFORE installing:**
```
📦 Installing framework dependencies...
```

```bash
# Install dependencies
npm install
```

**Tell user AFTER installing:**
```
✅ Dependencies installed (Agent SDK, Zod validation, TypeScript tools)
```

**Step 2: Create config.json**

**Tell user BEFORE creating:**
```
📁 Configuring project paths...
   (This tells agents where your frontend and backend code lives)
```

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

**Tell user AFTER creating:**
```
✅ Paths configured (agents will use these to navigate your codebase)
```

**Step 3: Configure Agent Onboarding Files**

**Tell user BEFORE creating:**
```
📝 Creating agent instructions based on your project...

Frontend Agent:
- Detected: [React 18.2 + TypeScript + Redux Toolkit + Material-UI]
- Using rules from: [../frontend/Claude.md or detected patterns]
- Adding security rules from: [detected documentation]

Backend Agent:
- Detected: [Express + TypeScript + Prisma + PostgreSQL]
- Using rules from: [../backend/Claude.md or detected patterns]
- Adding validation rules from: [detected Zod usage]

Auditor:
- Configuring quality checks based on your stack
- Adding security validation rules
```

**For `agents/onboarding/fe-agent.md`:**

Create by combining:
- **Auto-detected info:** Framework, TypeScript, libraries
- **Documentation found:** If `../frontend/Claude.md` exists, reference or include it
- **User-provided rules:** From question 1 (if asked)
- **Security rules:** Extract from documentation (e.g., "Always validate inputs", "Use MUI theming")

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
- **Coding Standards:** See `../frontend/Claude.md` for detailed rules
- **API Integration:** See `../docs/API.md` for backend contracts

[If ../frontend/Claude.md exists:]
**IMPORTANT:** Read `../frontend/Claude.md` for complete frontend coding rules.
The rules below supplement those guidelines.

## Critical Rules (From Documentation & User)
[Combine rules from:]
1. ../frontend/Claude.md (if exists)
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
- **Coding Standards:** See `../backend/Claude.md`
- **Database Schema:** See `../backend/prisma/schema.prisma` [or equivalent]

[If ../backend/Claude.md exists:]
**IMPORTANT:** Read `../backend/Claude.md` for complete backend coding rules.

## Critical Rules
[Combine from ../backend/Claude.md + user input]

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

**Based on user's choice from Question 3:**

**If user chose A (manual):**
```bash
# Create .env with placeholder
if [ -f "../.env" ]; then
  # Add placeholder to existing .env
  if ! grep -q "ANTHROPIC_API_KEY" ../.env; then
    echo "\n# Add your Anthropic API key here" >> ../.env
    echo "ANTHROPIC_API_KEY=your-api-key-here" >> ../.env
  fi
else
  # Create new .env with placeholder
  cat > ../.env << 'EOF'
# Anthropic API Key
# Get your key from: https://console.anthropic.com/
ANTHROPIC_API_KEY=your-api-key-here
EOF
fi
```

**Tell user:**
```
✅ Created ../.env file with placeholder

⚠️ IMPORTANT: Add your API key to ../.env:
   Replace "your-api-key-here" with your actual key (sk-ant-api03-...)

   Don't have an API key? Get one at: https://console.anthropic.com/
```

**If user chose B (gave you the key):**
```bash
# Add real API key
if [ -f "../.env" ]; then
  # Add to existing .env
  if ! grep -q "ANTHROPIC_API_KEY" ../.env; then
    echo "\nANTHROPIC_API_KEY=[actual-key-from-user]" >> ../.env
  else
    # Replace existing key
    sed -i '' 's/ANTHROPIC_API_KEY=.*/ANTHROPIC_API_KEY=[actual-key-from-user]/' ../.env
  fi
else
  # Create new .env with real key
  cat > ../.env << 'EOF'
ANTHROPIC_API_KEY=[actual-key-from-user]
EOF
fi
```

**Tell user:**
```
✅ Added your API key to ../.env

🔒 Security reminder: Make sure ../.env is in your .gitignore!
   (It should be, but double-check to avoid committing secrets)
```

**Then show final summary:**
```
✅ Framework installed and configured!

Configuration:
- ✅ config.json created with detected paths
- ✅ Frontend agent configured ([framework] + [language])
- ✅ Backend agent configured ([framework] + [language])
- ✅ API key [added to / placeholder in] .env
[If documentation found:]
- ✅ Agent rules linked to your existing documentation
[If documentation missing:]
- ⚠️ No coding standards documentation found
```

---

### **Phase 4: Analyze Documentation Gaps & Create Tasks**

**IMPORTANT: Don't stop onboarding to create docs! Log gaps as TASKS instead.**

**Step 1: Analyze what documentation exists**

From Phase 1, you already know:
- ✅/❌ Frontend Claude.md exists?
- ✅/❌ Backend Claude.md exists?
- ✅/❌ Architecture documentation exists (any form)?
- ✅/❌ API documentation exists?

**Step 2: Infer architecture understanding**

[If architecture docs found in ANY form:]
Read them and synthesize understanding:
- How does frontend authenticate with backend?
- What's the API structure?
- How do they deploy?
- What's the data flow?

Create mental model from documentation. You DON'T need a file called "ARCHITECTURE.md"
if the information exists across multiple docs!

[If NO architecture docs found:]
Note: "Architecture understanding incomplete - will need clarification during implementation"

**Step 3: Create task backlog for missing documentation**

```bash
# Create initial backlog folder
mkdir -p agents/backlog

# Create backlog.md for documentation tasks
cat > agents/backlog/documentation-tasks.md << 'EOF'
# Documentation Backlog

**Created during onboarding:** [date]
**Priority:** Medium (recommended before starting feature development)

---

## Missing Documentation Tasks

[Based on what you found missing:]

[If no frontend/Claude.md:]
### Task: Create Frontend Claude.md
**File:** frontend/Claude.md
**Purpose:** Consolidate frontend coding standards for AI agents
**Content needed:**
- Component structure patterns (detected: [framework])
- State management rules (detected: [state library or none])
- Styling conventions (detected: [UI library])
- Testing requirements
- Critical "never break" rules

**Why:** Helps AI agents build consistent frontend features
**Estimated effort:** 1-2 hours
**Can be done by:** Project lead or senior frontend developer

---

[If no backend/Claude.md:]
### Task: Create Backend Claude.md
**File:** backend/Claude.md
**Purpose:** Consolidate backend coding standards for AI agents
**Content needed:**
- API endpoint patterns (detected: [framework])
- Error handling conventions
- Database access patterns (detected: [ORM])
- Validation rules
- Security requirements

**Why:** Helps AI agents build consistent backend features
**Estimated effort:** 1-2 hours
**Can be done by:** Project lead or senior backend developer

---

[If architecture docs incomplete:]
### Task: Document System Integration
**File:** (Flexible - could be added to existing docs or new file)
**Purpose:** Clarify how frontend and backend integrate
**Content needed:**
- Authentication flow (detected: [auth system])
- API Gateway/endpoint structure
- Deployment strategy
- Data flow diagram

**Why:** Helps AI agents understand the full system
**Estimated effort:** 2-3 hours
**Can be done by:** Tech lead or architect

---

## Existing Documentation (Good!)

[List what WAS found:]
- ✅ [path/to/doc.md] - [purpose]
- ✅ [path/to/guide.md] - [purpose]

These provide good foundation! The tasks above would complement them.

EOF
```

**Tell user:**
```
✅ Framework installed and configured!

📋 Documentation Analysis:

[If found good docs:]
Found Documentation:
- ✅ [list what was found]

[If missing some docs:]
Missing Documentation (logged as tasks):
- 📝 frontend/Claude.md - Created task in agents/backlog/documentation-tasks.md
- 📝 backend/Claude.md - Created task in agents/backlog/documentation-tasks.md
- 📝 [other gaps] - Logged in backlog

[IMPORTANT message:]
⚠️ I've logged missing documentation as TASKS in the backlog.

You have two options:
A) Complete these documentation tasks first (recommended)
   - Ensures AI agents have clear guidelines
   - Prevents inconsistent code generation

B) Start building features now, document later
   - AI will work but may need more guidance during tasks
   - You can create Claude.md files anytime

The backlog is ready for the PM agent to schedule!
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

### **2. Respect Existing Documentation (Priority Order)**

**Priority 1: claude.md (highest priority)**
- ✅ `frontend/Claude.md` exists → use it for FE agent rules, don't override
- ✅ `backend/Claude.md` exists → use it for BE agent rules, don't override
- ✅ Root `Claude.md` exists → use for general rules
- ❌ NEVER override or ignore Claude.md files

**Priority 2: Standard project docs**
- ✅ `ARCHITECTURE.md` exists → reference it, extract patterns
- ✅ `CONTRIBUTING.md` exists → extract coding conventions
- ✅ `README.md` exists → check for architecture/setup sections

**Priority 3: docs/ folder**
- ✅ Smart analysis: Read technical docs, skip user guides
- ✅ Extract from architecture, API, component docs
- ❌ Don't read user guides, marketing, meeting notes

**General Rules:**
- ❌ Don't create redundant documentation
- ❌ Don't ask questions answered in claude.md
- ✅ Reference existing docs in agent onboarding files

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

### **Example 2: Found frontend/Claude.md**

```bash
$ cat frontend/Claude.md

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
**IMPORTANT:** Read `/frontend/Claude.md` for complete coding rules.

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
