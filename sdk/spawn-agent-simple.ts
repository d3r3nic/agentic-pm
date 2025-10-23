#!/usr/bin/env node
/**
 * Simple Agent Spawner - Interactive Mode (for Claude Code Manager)
 * Uses standard Read/Edit/Write tools (no MCP needed)
 */

import { query } from "@anthropic-ai/claude-agent-sdk";
import { agents } from "./agents.js";
import { getTaskFilePath, getProjectRoot } from "./config.js";

const [agentType, taskDate, taskId] = process.argv.slice(2);

if (!agentType || !taskDate || !taskId) {
  console.error("Usage: npx tsx sdk/spawn-agent-simple.ts <agent-type> <task-date> <task-id>");
  process.exit(1);
}

// Use dynamic path from config
const taskFilePath = getTaskFilePath(taskDate, taskId);
const projectRoot = getProjectRoot();

console.log(`\n🤖 Spawning ${agentType} for task ${taskId}...`);
console.log(`📁 Task file: ${taskFilePath}`);
console.log(`📂 Project root: ${projectRoot}\n`);

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
      cwd: projectRoot, // ⭐ Set working directory to project root
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

    process.exit(0);
  } catch (error) {
    console.error(`\n❌ Error: ${(error as Error).message}\n`);
    console.error((error as Error).stack);
    process.exit(1);
  }
}

spawnAgent();
