# 🎬 Bootstrap New Project - For Claude Code

> **For:** Claude Code when helping users start from scratch
> **Purpose:** Create full-stack project + PM framework in one flow
> **Time:** 10-15 minutes with user Q&A

---

## 🎯 Your Mission

When a user says "Set up a new project with the Task-Driven PM Framework," you will:

1. **Ask about their project** (what they want to build)
2. **Create project boilerplate** (frontend + backend with working code)
3. **Install PM framework** (clone and configure .pm/)
4. **Configure agents** (for their specific stack)
5. **Create first task** (based on their first feature idea)
6. **Spawn agent** (to implement that feature)

---

## 📋 Step-by-Step Workflow

### **Phase 0: Verify Repository is Cloned**

Check if the framework repository is in the current directory:
```bash
ls -la | grep -E "(START.md|.pm)"
```

**If NOT found (repository not cloned):**
```bash
# Clone the framework to current directory
git clone https://github.com/d3r3nic/task-driven-pm-framework.git .
```

**Tell user:**
```
✅ Cloned Task-Driven PM Framework repository
📁 You now have all guides, templates, and SDK tools locally
```

**If found:**
```
✅ Repository already cloned - proceeding with setup
```

---

### **Phase 1: Discovery (Ask Questions)**

**Ask user:**
```
I'll help you set up a new project with AI-powered project management!

First, tell me about your project:

1. What are you building? (e.g., "A task management app", "E-commerce site")
2. Do you need:
   - Frontend only?
   - Backend only?
   - Full-stack (both)?

3. Tech preferences (or I can use good defaults):
   - Frontend: React, Vue, Svelte, Angular, or other?
   - Backend: Express, Fastify, NestJS, Python/FastAPI, or other?
   - Database: PostgreSQL, MySQL, MongoDB, or none yet?

4. What's ONE feature you want to build first?
   (e.g., "User login", "Product catalog", "Dashboard")
```

**Gather:**
- `projectName` (from description)
- `hasFrontend` (boolean)
- `hasBackend` (boolean)
- `frontendStack` (framework)
- `backendStack` (framework)
- `database` (type or "none")
- `firstFeature` (description)

---

### **Phase 2: Create Project Structure**

Based on user choices, create appropriate boilerplate:

#### **If Frontend: React + TypeScript**

```bash
# Create React app with Vite
npm create vite@latest frontend -- --template react-ts

cd frontend
npm install

# Add common dependencies
npm install react-router-dom axios zustand

# Create basic structure
mkdir -p src/components src/pages src/hooks src/utils
```

**Create `.env.example`:**
```
VITE_API_URL=http://localhost:3000
```

**Update `src/App.tsx` with basic routing:**
```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Welcome to {projectName}</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```

#### **If Frontend: Vue + TypeScript**

```bash
npm create vue@latest frontend
# Select: TypeScript, Router, Pinia

cd frontend
npm install
npm install axios
```

#### **If Frontend: Svelte + TypeScript**

```bash
npm create vite@latest frontend -- --template svelte-ts

cd frontend
npm install
npm install -D @sveltejs/adapter-auto
npm install axios
```

#### **If Backend: Express + TypeScript**

```bash
mkdir backend
cd backend
npm init -y

# Install dependencies
npm install express cors dotenv
npm install -D typescript @types/node @types/express @types/cors ts-node-dev

# Initialize TypeScript
npx tsc --init
```

**Create `tsconfig.json`:**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

**Create `src/index.ts`:**
```typescript
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
```

**Create `.env.example`:**
```
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
```

**Update `package.json` scripts:**
```json
{
  "scripts": {
    "dev": "ts-node-dev --respawn src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
  }
}
```

#### **If Backend: Fastify + TypeScript**

```bash
mkdir backend
cd backend
npm init -y

npm install fastify @fastify/cors dotenv
npm install -D typescript @types/node ts-node-dev
```

**Create `src/index.ts`:**
```typescript
import Fastify from 'fastify'
import cors from '@fastify/cors'
import dotenv from 'dotenv'

dotenv.config()

const fastify = Fastify({ logger: true })

fastify.register(cors)

fastify.get('/api/health', async () => {
  return { status: 'ok', message: 'Server is running' }
})

const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
```

#### **If Database: Add Prisma (PostgreSQL/MySQL)**

```bash
cd backend
npm install prisma @prisma/client
npx prisma init

# Create basic schema
cat > prisma/schema.prisma << 'EOF'
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"  // or "mysql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(uuid())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
EOF
```

---

### **Phase 3: Install PM Framework Dependencies**

**The repository is already cloned (Phase 0), so just install SDK dependencies:**

```bash
# Navigate to .pm folder
cd .pm

# Install Claude Agent SDK and dependencies
npm install
```

**This installs:**
- `@anthropic-ai/claude-agent-sdk` - Core SDK for spawning agents
- `zod` - Schema validation
- `typescript` - TypeScript compiler
- `tsx` - TypeScript execution

**Tell user:**
```
✅ Installed Claude Agent SDK and dependencies
📦 You can now spawn AI agents to implement features!
```

**Verify installation:**
```bash
# Check SDK is installed
npm list @anthropic-ai/claude-agent-sdk
# Should show: @anthropic-ai/claude-agent-sdk@latest
```

**Now configure gitignore strategy - ASK USER:**

```
How do you want to manage your git repositories?

Option A: Single Repo (Everything Together)
- One git repository for frontend/, backend/, and .pm/
- All code tracked together
- Simpler for small teams

Option B: Separate Repos (Recommended for Teams)
- frontend/ → separate git repo
- backend/ → separate git repo
- .pm/ → separate git repo (just the PM framework)
- Better for independent deployment

Which do you prefer? (A or B)
```

**If Option A (Single Repo):**
```bash
# From project root
cd ..

# Create .gitignore that tracks everything
cat > .gitignore << 'EOF'
# Environment variables
.env
.env.local

# Dependencies
node_modules/

# Build outputs
dist/
build/
.next/

# IDE
.vscode/
.idea/
*.swp

# OS
.DS_Store
Thumbs.db

# PM Framework specific
.pm/config.json
agents/onboarding/fe-agent.md
agents/onboarding/be-agent.md
agents/onboarding/auditor-guidelines.md
EOF

# Initialize git
git init
git add .
git commit -m "Initial commit: Full-stack project with AI PM"
```

**If Option B (Separate Repos):**
```bash
# From project root
cd ..

# Create ROOT .gitignore that EXCLUDES frontend/backend
cat > .gitignore << 'EOF'
# Exclude app code (tracked in separate repos)
frontend/
backend/

# Keep .pm/ tracked
# (PM-specific ignores are in .pm/.gitignore)

# Environment
.env
.env.local

# OS
.DS_Store
Thumbs.db
EOF

# Initialize PM repo
git init
git add .
git commit -m "Initial commit: Task-Driven PM Framework"

# Initialize frontend repo
cd frontend
git init
git add .
git commit -m "Initial commit: Frontend app"

# Initialize backend repo
cd ../backend
git init
git add .
git commit -m "Initial commit: Backend API"

cd ..
```

**Tell user:**
```
✅ Git configured!

{If Option A:}
Your repository includes:
- frontend/ (tracked)
- backend/ (tracked)
- .pm/ (tracked)

To push to GitHub:
```bash
git remote add origin https://github.com/yourusername/your-project.git
git push -u origin main
```

{If Option B:}
You have 3 separate repositories:
1. PM Framework (.pm/)
2. Frontend (frontend/)
3. Backend (backend/)

To push each to GitHub:
```bash
# PM Framework
git remote add origin https://github.com/yourusername/your-project-pm.git
git push -u origin main

# Frontend
cd frontend
git remote add origin https://github.com/yourusername/your-project-frontend.git
git push -u origin main

# Backend
cd ../backend
git remote add origin https://github.com/yourusername/your-project-backend.git
git push -u origin main
```
```

---

### **Phase 4: Configure PM Framework**

#### **4.1: Create config.json**

**IMPORTANT:** You (Claude) create config.json directly. Do NOT run `npm run onboard`.

**Detect paths:**
```typescript
// From project root, detect:
const projectRoot = path.dirname(process.cwd()); // Parent of agentic-pm/
const frontendPath = projectRoot + '/frontend';  // if exists
const backendPath = projectRoot + '/backend';    // if exists
```

**Create config.json:**
```bash
cat > config.json << 'EOF'
{
  "projectRoot": "{detected projectRoot}",
  "frontendPath": "{detected frontendPath or empty string}",
  "backendPath": "{detected backendPath or empty string}",
  "pmPath": "{current directory - the agentic-pm folder}",
  "createdAt": "{today's date YYYY-MM-DD}",
  "projectName": "{projectName from user}"
}
EOF
```

**Example config.json:**
```json
{
  "projectRoot": "/Users/username/my-awesome-project",
  "frontendPath": "/Users/username/my-awesome-project/frontend",
  "backendPath": "/Users/username/my-awesome-project/backend",
  "pmPath": "/Users/username/my-awesome-project/agentic-pm",
  "createdAt": "2025-10-23",
  "projectName": "My Awesome Project"
}
```

**Tell user:**
```
✅ Created config.json with detected paths
```

#### **4.2: Configure Frontend Agent**

**Ask user:**
```
Now configuring the frontend agent. What are your coding standards?

1. Component style? (Functional components with hooks, factory functions, etc.)
2. State management pattern? (How you organize Zustand/Pinia stores)
3. Styling approach? (Tailwind utility classes, CSS modules, styled-components?)
4. Any specific rules? (e.g., "Always use TypeScript strict mode")
```

**Update `agents/onboarding/fe-agent.md`:**
```bash
cp agents/onboarding/fe-agent.template.md agents/onboarding/fe-agent.md
```

**Then edit with user's answers:**
- Tech stack section → Add their frontend framework details
- Coding standards → Add their specific rules
- Component patterns → Add their preferences

#### **4.3: Configure Backend Agent**

**Ask user:**
```
Backend configuration:

1. API structure? (RESTful with Express Router, controller/service pattern, etc.)
2. Error handling style? (Middleware, try-catch, error classes?)
3. Database patterns? (Repository pattern, raw queries, ORM usage?)
4. Any specific rules? (e.g., "Always validate with Zod")
```

**Update `agents/onboarding/be-agent.md`:**
```bash
cp agents/onboarding/be-agent.template.md agents/onboarding/be-agent.md
```

**Edit with user's answers.**

#### **4.4: Configure Auditors**

```bash
cp agents/onboarding/auditor-guidelines.template.md agents/onboarding/auditor-guidelines.md
```

**Set basic quality standards (use defaults if user doesn't specify):**
- TypeScript strict mode
- No console.logs in production
- Proper error handling
- Input validation

#### **4.5: Create .env**

**Ask user:**
```
What's your Anthropic API key? (starts with sk-ant-api03-...)
You can get one at https://console.anthropic.com/
```

**Create `.env`:**
```bash
echo "ANTHROPIC_API_KEY={user_key}" > .env
```

---

### **Phase 5: Create First Task**

Based on `firstFeature` from user, create a task file:

```bash
# Create today's folder
mkdir -p agents/tasks/$(date +%Y-%m-%d)

# Determine task type (fe or be based on feature)
# If feature is UI-related → fe-task-001
# If feature is API-related → be-task-001
# If full-stack → create both
```

**Example: User wants "User Login" (full-stack)**

**Create `agents/tasks/{date}/fe-task-001.md`:**
```markdown
# FE Task 001: User Login Form

**Date:** {date}
**Phase:** Week 1
**Agent:** fe-implementor
**Status:** 🚧 Pending

---

## 📋 AGENT INSTRUCTIONS

**Your onboarding:** Read `agents/onboarding/fe-agent.md` first

**Task:**
Create a user login form component with email/password fields.

**Implementation:**
- File: `frontend/src/components/LoginForm.tsx`
- Use React Hook Form for validation
- Connect to backend API at `/api/auth/login`
- Store token in localStorage on success
- Redirect to `/dashboard` after login

**Requirements:**
- Email and password validation
- Loading state during submission
- Error message display
- TypeScript types

**Dependencies:**
- None (first task)

**Report here when done.**

---

## 🤖 AGENT REPORT

(Agent fills this)

---

## 📝 CASE LOG (Manager AI)

**Context:** First feature implementation

---

## ✅ AUDIT REPORT

(Auditor fills this)
```

**Create `agents/tasks/{date}/be-task-001.md`:**
```markdown
# BE Task 001: User Authentication API

**Date:** {date}
**Phase:** Week 1
**Agent:** be-implementor
**Status:** 🚧 Pending

---

## 📋 AGENT INSTRUCTIONS

**Your onboarding:** Read `agents/onboarding/be-agent.md` first

**Task:**
Create user authentication endpoint with JWT tokens.

**Implementation:**
- Endpoint: `POST /api/auth/login`
- Validate email/password against database
- Return JWT token on success
- Hash passwords with bcrypt

**Requirements:**
- Input validation (email format, password length)
- Error handling (401 for invalid credentials)
- JWT token generation
- TypeScript types

**Dependencies:**
- Database schema created (User model)

**Report here when done.**

---

## 🤖 AGENT REPORT

(Agent fills this)

---

## 📝 CASE LOG (Manager AI)

**Context:** First backend feature

---

## ✅ AUDIT REPORT

(Auditor fills this)
```

---

### **Phase 6: Spawn First Agent**

**Tell user:**
```
Everything is set up! Let me spawn the first agent to implement {firstFeature}.

I'll start with the {fe/be} implementation.
```

**Run:**
```bash
npx tsx sdk/spawn-agent-simple.ts {fe/be}-implementor {date} {fe/be}-task-001
```

**Monitor the agent's progress and show user the results.**

---

## ✅ Final Verification

After agent completes, verify:

```bash
# Check task report was written
cat agents/tasks/{date}/{task-id}.md | grep "AGENT REPORT"

# Verify files were created
ls -la ../{frontend/backend}/src/

# Show user what was built
cat ../{path-to-implemented-file}
```

---

## 🎁 Handoff to User

**Tell user:**
```
✅ Setup complete! Here's what you have:

**Project Structure:**
- Frontend: {frontend framework} → ../frontend/
- Backend: {backend framework} → ../backend/
- PM Framework: Configured → .pm/

**First Feature: {firstFeature}**
- Task file: agents/tasks/{date}/{task-id}.md
- Implementation: {list files created}
- Status: ✅ Complete (check AGENT REPORT for details)

**Next Steps:**

1. Test your feature:
   ```bash
   # Start backend
   cd backend
   npm run dev

   # Start frontend (new terminal)
   cd frontend
   npm run dev
   ```

2. Create more tasks:
   - Copy task templates from agents/templates/
   - Or ask me "Create a task for {feature}"

3. Spawn agents to implement:
   ```bash
   npx tsx sdk/spawn-agent-simple.ts fe-implementor {date} {task-id}
   ```

4. Read NOW.md for project roadmap structure

Happy building! 🚀
```

---

## 🔧 Stack-Specific Variations

### **Frontend-Only Project**
- Skip backend setup
- Create only `fe-task-*.md` files
- Focus on component/page implementation

### **Backend-Only Project**
- Skip frontend setup
- Create only `be-task-*.md` files
- Focus on API endpoints

### **Monorepo Projects**
- Adjust paths in `config.json`
- May have `packages/frontend`, `packages/backend`

### **Different Frameworks**

**Next.js:**
```bash
npx create-next-app@latest frontend --typescript --tailwind --app
```

**NestJS:**
```bash
npm i -g @nestjs/cli
nest new backend
```

**Python/FastAPI:**
```bash
mkdir backend
cd backend
python -m venv venv
source venv/bin/activate
pip install fastapi uvicorn sqlalchemy pydantic
```

---

## 💡 Pro Tips

1. **Ask clarifying questions** - Don't assume tech stack
2. **Use good defaults** - If user says "I don't know", suggest React + Express
3. **Create working boilerplate** - Not just empty folders
4. **Configure properly** - Agent onboarding files must match their stack
5. **Test the spawn** - Actually run the first agent to verify setup
6. **Show the results** - Display the generated code so user sees value immediately

---

## 🆘 Common Issues

**"npm create vite failed"**
- Check Node version: `node --version` (needs 18+)
- Try: `npm install -g create-vite`

**"Agent can't find files"**
- Verify `config.json` has correct paths
- Check `cwd` is set to project root in spawn scripts

**"No API key"**
- Verify `.env` was created
- Check key starts with `sk-ant-api03-`

**"Task template not found"**
- Create task manually following examples above
- Or copy from `agents/templates/` if they exist

---

## 🎯 AFTER SETUP COMPLETES

**IMPORTANT:** Once setup is complete, YOU (Claude Code) should read:

```
agentic-pm/.ai-instructions/MANAGER-ONBOARDING.ai.md
```

**This file teaches you:**
- How to coordinate spawned agents
- **How to handle proposals/RFPs/specs (ANY size)**
- When to use the RFP Analysis Protocol
- How to use analyst agents for systematic analysis
- How to create task files
- How to track progress in NOW.md
- How to manage the project going forward

**Tell the user:**
```
✅ Setup complete! Your new project is ready.

I've read the Manager AI onboarding documentation. I'm ready to help you build anything.

**How This Works:**
For ANY request you make (simple idea, complex proposal, feature, task, etc.),
I'll use a systematic approach:

1. I'll spawn specialist analyst agents to examine:
   - Frontend requirements
   - Backend architecture
   - How they integrate

2. They'll produce focused analysis reports

3. I'll synthesize into a phased implementation plan

4. You approve the plan

5. I execute with checkpoints for your approval

This gives you:
- Thorough analysis (nothing missed)
- Clear phased execution
- Approval checkpoints
- Context-proof plans (survives restarts)

**What would you like to build first?**

Just tell me what you want to create - any idea, feature, or functionality.
I'll handle the systematic analysis and implementation.
```

Then wait for their request and follow the protocols in MANAGER-ONBOARDING.ai.md.

**For ANY user request:**
- Immediately read: WORK-INTAKE-PROTOCOL.ai.md
- Follow the Systematic Analysis Protocol

---

**Last Updated:** 2025-10-24
**Version:** 3.0 (Manager AI Integration)
