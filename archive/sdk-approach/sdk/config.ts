/**
 * Configuration Loader - Provides dynamic project paths
 *
 * This file is created during onboarding and contains project-specific paths.
 * All SDK scripts use this to avoid hardcoded paths.
 */

import * as fs from "fs";
import * as path from "path";

export interface ProjectConfig {
  projectRoot: string;
  frontendPath: string;
  backendPath: string;
  pmPath: string;
  createdAt: string;
  projectName: string;
}

/**
 * Load project configuration
 *
 * This reads config.json which is created during onboarding.
 * If config doesn't exist, throws an error with setup instructions.
 */
export function loadConfig(): ProjectConfig {
  const configPath = path.join(process.cwd(), "config.json");

  if (!fs.existsSync(configPath)) {
    throw new Error(
      `Configuration not found at ${configPath}\n\n` +
      `Please run onboarding first to create config.json with your project paths.`
    );
  }

  const configContent = fs.readFileSync(configPath, "utf-8");
  const config: ProjectConfig = JSON.parse(configContent);

  return config;
}

/**
 * Get task file path (dynamic based on config)
 */
export function getTaskFilePath(date: string, taskId: string): string {
  const config = loadConfig();
  return path.join(config.pmPath, `agents/tasks/${date}/${taskId}.md`);
}

/**
 * Get frontend path (for agents to write frontend code)
 */
export function getFrontendPath(): string {
  const config = loadConfig();
  return config.frontendPath;
}

/**
 * Get backend path (for agents to write backend code)
 */
export function getBackendPath(): string {
  const config = loadConfig();
  return config.backendPath;
}

/**
 * Get project root (for permissions)
 */
export function getProjectRoot(): string {
  const config = loadConfig();
  return config.projectRoot;
}
