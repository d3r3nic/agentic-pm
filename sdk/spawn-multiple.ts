#!/usr/bin/env node
/**
 * Parallel Agent Spawner - For Interactive Use by Claude Code Manager AI
 *
 * Spawns MULTIPLE agents in parallel and aggregates results.
 * Called by Claude Code (Manager AI) for batch task execution.
 *
 * Usage:
 *   node sdk/spawn-multiple.ts <task-list-file>
 *
 * Task list file format (JSON):
 * [
 *   { "agentType": "fe-implementor", "taskDate": "2025-10-22", "taskId": "fe-task-001" },
 *   { "agentType": "fe-implementor", "taskDate": "2025-10-22", "taskId": "fe-task-002" }
 * ]
 */

import { query } from "@anthropic-ai/claude-agent-sdk";
import { agents } from "./agents.js";
import * as fs from "fs";

// Parse arguments
const taskListFile = process.argv[2];

if (!taskListFile) {
  console.error("Usage: node sdk/spawn-multiple.ts <task-list-file>");
  console.error("Example: node sdk/spawn-multiple.ts /tmp/tasks.json");
  process.exit(1);
}

// Read task list
let taskList;
try {
  const content = fs.readFileSync(taskListFile, "utf-8");
  taskList = JSON.parse(content);
} catch (error) {
  console.error(`Error reading task list: ${(error as Error).message}`);
  process.exit(1);
}

console.log(`\n🚀 Spawning ${taskList.length} agents in parallel...\n`);

// Spawn agent function
async function spawnAgent(task: any) {
  const { agentType, taskDate, taskId } = task;

  const agentPrompt = `
Read the task file at agents/tasks/${taskDate}/${taskId}.md using the Read tool.

Your task:
1. Read the task file
2. Read any documentation referenced in AGENT INSTRUCTIONS
3. Implement according to the instructions
4. Write your results in the AGENT REPORT section using the Edit tool

Work autonomously and report when done.
`;

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
      if (message.type === "result") {
        totalCost = message.total_cost_usd || 0;
        totalDuration = message.duration_ms || 0;
      }
    }

    return {
      taskId,
      agentType,
      success: true,
      cost: totalCost,
      duration: totalDuration,
    };
  } catch (error) {
    return {
      taskId,
      agentType,
      success: false,
      error: (error as Error).message,
    };
  }
}

// Spawn all agents in parallel
async function spawnAll() {
  const startTime = Date.now();

  console.log("⏳ Agents working in parallel...\n");

  const results = await Promise.all(taskList.map(spawnAgent));

  const endTime = Date.now();
  const totalDuration = (endTime - startTime) / 1000;

  // Aggregate results
  const successful = results.filter((r) => r.success);
  const failed = results.filter((r) => !r.success);
  const totalCost = successful.reduce((sum, r) => sum + r.cost, 0);

  console.log(`\n${"=".repeat(60)}`);
  console.log(`✅ Batch Complete: ${successful.length}/${taskList.length} successful`);
  console.log(`${"=".repeat(60)}`);
  console.log(`⏱️  Total Duration: ${totalDuration.toFixed(2)}s`);
  console.log(`💰 Total Cost: $${totalCost.toFixed(4)}`);
  console.log(`📊 Average Cost: $${(totalCost / successful.length).toFixed(4)} per task`);

  if (successful.length > 0) {
    console.log(`\n✅ Successful Tasks:`);
    successful.forEach((r) => {
      console.log(`   - ${r.taskId} (${(r.duration / 1000).toFixed(1)}s, $${r.cost.toFixed(4)})`);
    });
  }

  if (failed.length > 0) {
    console.log(`\n❌ Failed Tasks:`);
    failed.forEach((r) => {
      console.log(`   - ${r.taskId}: ${r.error}`);
    });
  }

  console.log(`${"=".repeat(60)}\n`);

  process.exit(failed.length > 0 ? 1 : 0);
}

spawnAll();
