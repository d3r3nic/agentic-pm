#!/usr/bin/env node
/**
 * Simple Agent Spawner - With Session Persistence
 * Agents linger and can be resumed across multiple tasks
 */

import { query } from "@anthropic-ai/claude-agent-sdk";
import { agents } from "./agents.js";
import { getTaskFilePath, getProjectRoot } from "./config.js";
import * as fs from "fs";
import * as path from "path";

const [agentType, taskDate, taskId] = process.argv.slice(2);

if (!agentType || !taskDate || !taskId) {
  console.error("Usage: npx tsx sdk/spawn-agent-simple.ts <agent-type> <task-date> <task-id>");
  process.exit(1);
}

// Use dynamic path from config
const taskFilePath = getTaskFilePath(taskDate, taskId);
const projectRoot = getProjectRoot();

// ============================================================================
// Session Management - Keep agents alive across tasks
// ============================================================================

interface AgentSession {
  agentType: string;
  sessionId: string;
  lastTaskId: string;
  started: string;
  lastUsed: string;
  tasksCompleted: number;
}

const SESSIONS_DIR = path.join(projectRoot, ".pm");
const SESSIONS_FILE = path.join(SESSIONS_DIR, "agent-sessions.json");

function loadSessions(): Record<string, AgentSession> {
  if (fs.existsSync(SESSIONS_FILE)) {
    return JSON.parse(fs.readFileSync(SESSIONS_FILE, "utf-8"));
  }
  return {};
}

function saveSession(session: AgentSession): void {
  // Ensure .pm directory exists
  if (!fs.existsSync(SESSIONS_DIR)) {
    fs.mkdirSync(SESSIONS_DIR, { recursive: true });
  }

  const sessions = loadSessions();
  sessions[session.agentType] = session;
  fs.writeFileSync(SESSIONS_FILE, JSON.stringify(sessions, null, 2), "utf-8");
}

function getExistingSession(agentType: string): AgentSession | null {
  const sessions = loadSessions();
  return sessions[agentType] || null;
}

// ============================================================================
// Main Agent Spawning
// ============================================================================

console.log(`\n🤖 Spawning ${agentType} for task ${taskId}...`);
console.log(`📁 Task file: ${taskFilePath}`);
console.log(`📂 Project root: ${projectRoot}`);

// Check if agent already has a session
const existingSession = getExistingSession(agentType);
if (existingSession) {
  console.log(`\n♻️  Resuming existing ${agentType} session`);
  console.log(`   Session ID: ${existingSession.sessionId}`);
  console.log(`   Tasks completed: ${existingSession.tasksCompleted}`);
  console.log(`   Last used: ${existingSession.lastUsed}\n`);
} else {
  console.log(`\n✨ Starting new ${agentType} session\n`);
}

const agentPrompt = `
Read the task file at ${taskFilePath} using the Read tool.

Implement the task according to the AGENT INSTRUCTIONS section.

When done, write your results in the AGENT REPORT section using the Edit tool.

Include in your report:
- Status (✅ Complete or ❌ Failed)
- Files Created/Modified (with full paths)
- What Was Built (description)
- Issues (or "None")
- Performance Metrics (duration, cost, tokens if available)
`;

async function spawnAgent() {
  const result = query({
    prompt: agentPrompt,
    options: {
      model: "claude-3-5-sonnet-20241022",
      agents: { [agentType]: agents[agentType] },
      cwd: projectRoot,
      permissionMode: "acceptEdits",
      settingSources: [],
      resume: existingSession?.sessionId, // ⭐ Resume if exists!
    },
  });

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
            if (!existingSession) {
              console.log(`📝 Session ID captured: ${message.session_id}`);
            }
          }
          break;

        case "assistant":
          if (Array.isArray(message.message.content)) {
            for (const block of message.message.content) {
              if (block.type === "text") {
                console.log(`💬 Agent: ${block.text.substring(0, 150)}...`);
              } else if (block.type === "tool_use") {
                console.log(`🔧 Tool: ${block.name}`);
              }
            }
          }
          break;

        case "result":
          totalCost = message.total_cost_usd || 0;
          totalDuration = message.duration_ms || 0;

          console.log(`\n${"=".repeat(60)}`);
          console.log(`✅ Agent Complete`);
          console.log(`${"=".repeat(60)}`);
          console.log(`⏱️  Duration: ${(totalDuration / 1000).toFixed(2)}s`);
          console.log(`💰 Cost: $${totalCost.toFixed(4)}`);
          console.log(`${"=".repeat(60)}\n`);
          break;
      }
    }

    // Save session for next time (agent lingers!)
    if (capturedSessionId) {
      const session: AgentSession = {
        agentType,
        sessionId: capturedSessionId,
        lastTaskId: taskId,
        started: existingSession?.started || new Date().toISOString(),
        lastUsed: new Date().toISOString(),
        tasksCompleted: (existingSession?.tasksCompleted || 0) + 1,
      };

      saveSession(session);
      console.log(`💾 Session saved: ${agentType} ready for next task\n`);
      console.log(`   Session file: ${SESSIONS_FILE}`);
      console.log(`   Total tasks completed by this agent: ${session.tasksCompleted}\n`);
    }

    process.exit(0);
  } catch (error) {
    console.error(`\n❌ Error: ${(error as Error).message}\n`);
    console.error((error as Error).stack);
    process.exit(1);
  }
}

spawnAgent();
