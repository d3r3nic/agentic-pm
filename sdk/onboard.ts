#!/usr/bin/env node
/**
 * Onboarding Script - Creates config.json with project paths
 *
 * Usage:
 *   npx tsx sdk/onboard.ts
 *
 * This script:
 * 1. Detects project root, frontend, and backend folders
 * 2. Asks user to confirm or customize paths
 * 3. Creates config.json with the paths
 * 4. Framework is then ready to use
 */

import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(prompt: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function detectPaths() {
  // Detect .pm folder location
  const pmPath = process.cwd();

  // Detect project root (parent of .pm)
  const projectRoot = path.dirname(pmPath);

  // Try to detect frontend and backend folders
  const projectContents = fs.readdirSync(projectRoot);

  const frontendCandidates = projectContents.filter(
    (name) =>
      name.toLowerCase().includes("frontend") ||
      name.toLowerCase().includes("client") ||
      name.toLowerCase().includes("web") ||
      name.toLowerCase().includes("dashboard")
  );

  const backendCandidates = projectContents.filter(
    (name) =>
      name.toLowerCase().includes("backend") ||
      name.toLowerCase().includes("server") ||
      name.toLowerCase().includes("api")
  );

  const frontendPath = frontendCandidates.length > 0
    ? path.join(projectRoot, frontendCandidates[0])
    : "";

  const backendPath = backendCandidates.length > 0
    ? path.join(projectRoot, backendCandidates[0])
    : "";

  return {
    pmPath,
    projectRoot,
    frontendPath,
    backendPath,
  };
}

async function main() {
  console.log("\n╔══════════════════════════════════════════════════════════════════╗");
  console.log("║  Task-Driven PM Framework - Onboarding                          ║");
  console.log("╚══════════════════════════════════════════════════════════════════╝\n");

  // Detect paths
  const detected = await detectPaths();

  console.log("📁 Detected paths:\n");
  console.log(`   Project Root: ${detected.projectRoot}`);
  console.log(`   Frontend:     ${detected.frontendPath || "(not found)"}`);
  console.log(`   Backend:      ${detected.backendPath || "(not found)"}`);
  console.log(`   PM Framework: ${detected.pmPath}\n`);

  // Ask user to confirm or customize
  const confirm = await question("Are these paths correct? (y/n): ");

  let finalPaths = detected;

  if (confirm.toLowerCase() !== "y") {
    console.log("\nLet's customize the paths:\n");

    const projectRoot = await question(
      `Project root [${detected.projectRoot}]: `
    );
    const frontendPath = await question(
      `Frontend path [${detected.frontendPath}]: `
    );
    const backendPath = await question(`Backend path [${detected.backendPath}]: `);

    finalPaths = {
      pmPath: detected.pmPath,
      projectRoot: projectRoot || detected.projectRoot,
      frontendPath: frontendPath || detected.frontendPath,
      backendPath: backendPath || detected.backendPath,
    };
  }

  // Ask for project name
  const projectName = await question("\nProject name: ");

  // Create config.json
  const config = {
    projectRoot: finalPaths.projectRoot,
    frontendPath: finalPaths.frontendPath,
    backendPath: finalPaths.backendPath,
    pmPath: finalPaths.pmPath,
    createdAt: new Date().toISOString().split("T")[0],
    projectName: projectName || "Unnamed Project",
  };

  const configPath = path.join(finalPaths.pmPath, "config.json");
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2), "utf-8");

  console.log("\n✅ Configuration created successfully!");
  console.log(`📄 Config file: ${configPath}\n`);

  console.log("Configuration:");
  console.log(JSON.stringify(config, null, 2));

  console.log("\n🎯 Next steps:");
  console.log("   1. Update agents/onboarding/*.md with your project details");
  console.log("   2. Update NOW.md and ROADMAP.md");
  console.log("   3. Set ANTHROPIC_API_KEY environment variable");
  console.log("   4. Start using: npx tsx sdk/spawn-agent-simple.ts\n");

  rl.close();
}

main();
