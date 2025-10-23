#!/usr/bin/env node
/**
 * Manager AI - SDK-Powered Project Management Agent
 *
 * Usage:
 *   npm run manager "Start Week 1 implementation"
 *   npm run manager "Implement fe-task-001 from 2025-10-22"
 *   npm run manager "Run audits for completed tasks"
 */

import { query } from "@anthropic-ai/claude-agent-sdk";
import { agents, getAgentConfig } from "./agents.js";
import { pmToolsServer } from "./tools.js";
import * as fs from "fs";
import * as path from "path";

// ============================================================================
// Configuration
// ============================================================================

const MANAGER_ONBOARDING_PATH = path.join(process.cwd(), "MANAGER-ONBOARDING.md");

// Load Manager AI onboarding documentation
function loadManagerOnboarding(): string {
  if (fs.existsSync(MANAGER_ONBOARDING_PATH)) {
    return fs.readFileSync(MANAGER_ONBOARDING_PATH, "utf-8");
  }
  return `# Manager AI Onboarding (Template - Update with project specifics)

You are Manager AI in a task-driven PM framework. Your role:
1. Read NOW.md to understand current project status
2. Create task files from templates
3. Spawn subagents to implement tasks
4. Update progress in NOW.md and task files
5. Coordinate audits after implementation

Work autonomously based on user requests.`;
}

// ============================================================================
// Session Management
// ============================================================================

interface SessionData {
  currentWeek?: string;
  sessionId?: string;
  started: string;
  lastResumed: string;
  tasksCompleted: number;
  tasksPending: number;
}

const SESSION_FILE = path.join(process.cwd(), "sessions.json");

function loadSession(): SessionData | null {
  if (fs.existsSync(SESSION_FILE)) {
    return JSON.parse(fs.readFileSync(SESSION_FILE, "utf-8"));
  }
  return null;
}

function saveSession(data: SessionData): void {
  fs.writeFileSync(SESSION_FILE, JSON.stringify(data, null, 2), "utf-8");
}

// ============================================================================
// Main Manager AI Function
// ============================================================================

async function runManager(userPrompt: string, resume: boolean = false) {
  const managerOnboarding = loadManagerOnboarding();
  const agentConfig = getAgentConfig();

  // Check for existing session
  let sessionData = loadSession();
  let sessionId: string | undefined;

  if (resume && sessionData?.sessionId) {
    console.log(`\n🔄 Resuming session: ${sessionData.sessionId}`);
    console.log(`   Started: ${sessionData.started}`);
    console.log(`   Tasks completed: ${sessionData.tasksCompleted}\n`);
    sessionId = sessionData.sessionId;
  } else {
    console.log(`\n🚀 Starting new Manager AI session\n`);
  }

  // Construct full prompt with onboarding
  const fullPrompt = `${managerOnboarding}

---

# User Request

${userPrompt}

---

# Instructions

1. Read NOW.md to understand current project status
2. Determine what needs to be done based on user request
3. Create task files if needed (use CreateTaskFile tool)
4. Spawn appropriate subagents to implement tasks:
   - fe-implementor for frontend tasks
   - be-implementor for backend tasks
   - fe-auditor for frontend code review
   - be-auditor for backend code review
5. Update NOW.md with progress (use UpdateNOW tool)
6. Report completion to user with summary

Work autonomously and coordinate all agents.`;

  // Configure SDK query
  const options = {
    model: "claude-3-5-sonnet-20241022" as const,
    agents,
    mcpServers: {
      "pm-tools": {
        type: "sdk" as const,
        name: "pm-framework-tools",
        instance: pmToolsServer,
      },
    },
    ...agentConfig,
    permissionMode: "acceptEdits" as const, // Auto-accept file edits for automation
    resume: sessionId, // Resume session if available
  };

  // Execute Manager AI
  const result = query({
    prompt: fullPrompt,
    options,
  });

  // Process messages
  let totalCost = 0;
  let totalDuration = 0;
  let capturedSessionId: string | undefined;

  try {
    for await (const message of result) {
      switch (message.type) {
        case "system":
          // Capture session ID for persistence
          if (message.session_id) {
            capturedSessionId = message.session_id;
            console.log(`📝 Session ID: ${message.session_id}`);
          }
          break;

        case "assistant":
          // Display Manager AI's thoughts and actions
          if (Array.isArray(message.message.content)) {
            for (const block of message.message.content) {
              if (block.type === "text") {
                console.log(`\n💬 Manager AI: ${block.text}\n`);
              } else if (block.type === "tool_use") {
                console.log(`🔧 Using tool: ${block.name}`);
              }
            }
          }
          break;

        case "result":
          // Final results and metrics
          totalCost = message.total_cost_usd || 0;
          totalDuration = message.duration_ms || 0;

          console.log(`\n${"=".repeat(60)}`);
          console.log(`✅ Manager AI Session Complete`);
          console.log(`${"=".repeat(60)}`);
          console.log(`⏱️  Duration: ${(totalDuration / 1000).toFixed(2)}s`);
          console.log(`💰 Cost: $${totalCost.toFixed(4)}`);
          console.log(`${"=".repeat(60)}\n`);
          break;

        case "compact_boundary":
          console.log(`\n📦 Context compaction occurred (automatic optimization)\n`);
          break;
      }
    }

    // Save session data
    if (capturedSessionId) {
      const newSessionData: SessionData = {
        currentWeek: sessionData?.currentWeek || "Unknown",
        sessionId: capturedSessionId,
        started: sessionData?.started || new Date().toISOString(),
        lastResumed: new Date().toISOString(),
        tasksCompleted: (sessionData?.tasksCompleted || 0) + 1,
        tasksPending: sessionData?.tasksPending || 0,
      };
      saveSession(newSessionData);
      console.log(`💾 Session saved: ${SESSION_FILE}\n`);
    }
  } catch (error) {
    console.error(`\n❌ Error: ${(error as Error).message}\n`);
    process.exit(1);
  }
}

// ============================================================================
// CLI Interface
// ============================================================================

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log(`
╔══════════════════════════════════════════════════════════════════╗
║  Manager AI - Task-Driven PM Framework (SDK v2.0)                ║
╚══════════════════════════════════════════════════════════════════╝

Usage:
  npm run manager "<your request>"
  npm run manager -- --resume "<your request>"

Examples:
  npm run manager "Start Week 1: User Invitations implementation"
  npm run manager "Implement fe-task-001 and fe-task-002"
  npm run manager "Run audits for all completed tasks"
  npm run manager -- --resume "Continue Week 1 implementation"

Environment:
  ANTHROPIC_API_KEY must be set

Documentation:
  See MANAGER-ONBOARDING.md for Manager AI protocol
  See README.md for framework overview
`);
  process.exit(0);
}

// Check for API key
if (!process.env.ANTHROPIC_API_KEY) {
  console.error(`\n❌ Error: ANTHROPIC_API_KEY environment variable not set\n`);
  console.log(`Set it with: export ANTHROPIC_API_KEY="your-api-key"\n`);
  process.exit(1);
}

// Parse arguments
const resumeFlag = args.includes("--resume");
const userPrompt = args.filter((arg) => arg !== "--resume").join(" ");

// Run Manager AI
runManager(userPrompt, resumeFlag);
