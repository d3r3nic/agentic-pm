#!/usr/bin/env node
/**
 * Agent Spawner - For Interactive Use by Claude Code Manager AI
 *
 * This script spawns a SINGLE agent and returns results.
 * Called by Claude Code (Manager AI) during interactive sessions.
 *
 * Usage:
 *   node sdk/spawn-agent.ts <agent-type> <task-date> <task-id>
 *
 * Example:
 *   node sdk/spawn-agent.ts fe-implementor 2025-10-22 fe-task-001
 */

import { query } from "@anthropic-ai/claude-agent-sdk";
import { agents } from "./agents.js";
import * as fs from "fs";

// Parse arguments
const [agentType, taskDate, taskId] = process.argv.slice(2);

if (!agentType || !taskDate || !taskId) {
  console.error("Usage: node sdk/spawn-agent.ts <agent-type> <task-date> <task-id>");
  console.error("Example: node sdk/spawn-agent.ts fe-implementor 2025-10-22 fe-task-001");
  process.exit(1);
}

// Validate agent type
if (!agents[agentType]) {
  console.error(`Unknown agent type: ${agentType}`);
  console.error(`Available agents: ${Object.keys(agents).join(", ")}`);
  process.exit(1);
}

// Check task file exists
const taskFilePath = `agents/tasks/${taskDate}/${taskId}.md`;
if (!fs.existsSync(taskFilePath)) {
  console.error(`Task file not found: ${taskFilePath}`);
  process.exit(1);
}

console.log(`\n🤖 Spawning ${agentType} for task ${taskId}...`);
console.log(`📁 Task file: ${taskFilePath}\n`);

// Construct agent prompt
const agentPrompt = `
Read the task file at agents/tasks/${taskDate}/${taskId}.md

Your task:
1. Read the task file using ReadTaskFile tool
2. Read any documentation referenced in AGENT INSTRUCTIONS
3. Implement according to the instructions
4. Write your results using WriteAgentReport tool

Work autonomously and report when done.
`;

// Spawn agent
async function spawnAgent() {
  const result = query({
    prompt: agentPrompt,
    options: {
      model: "claude-3-5-sonnet-20241022",
      agents: { [agentType]: agents[agentType] },
      permissionMode: "acceptEdits",
      settingSources: [],
    },
  });

  let totalCost = 0;
  let totalDuration = 0;

  try {
    for await (const message of result) {
      switch (message.type) {
        case "assistant":
          // Show agent's work
          if (Array.isArray(message.message.content)) {
            for (const block of message.message.content) {
              if (block.type === "text") {
                console.log(`💬 ${agentType}: ${block.text.substring(0, 200)}...`);
              } else if (block.type === "tool_use") {
                console.log(`🔧 Using tool: ${block.name}`);
              }
            }
          }
          break;

        case "result":
          totalCost = message.total_cost_usd || 0;
          totalDuration = message.duration_ms || 0;

          console.log(`\n${"=".repeat(60)}`);
          console.log(`✅ Agent Complete: ${agentType}`);
          console.log(`${"=".repeat(60)}`);
          console.log(`⏱️  Duration: ${(totalDuration / 1000).toFixed(2)}s`);
          console.log(`💰 Cost: $${totalCost.toFixed(4)}`);
          console.log(`📝 Check AGENT REPORT in: ${taskFilePath}`);
          console.log(`${"=".repeat(60)}\n`);
          break;
      }
    }

    // Return success
    process.exit(0);
  } catch (error) {
    console.error(`\n❌ Error: ${(error as Error).message}\n`);
    process.exit(1);
  }
}

spawnAgent();
