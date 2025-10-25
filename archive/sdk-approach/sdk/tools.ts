/**
 * Custom MCP tools for Task-Driven PM Framework
 * These tools enable agents to interact with task files, reports, and PM hub
 */

import { tool, createSdkMcpServer } from "@anthropic-ai/claude-agent-sdk";
import { z } from "zod";
import * as fs from "fs";
import * as path from "path";

// ============================================================================
// Helper Functions
// ============================================================================

function getTaskFilePath(date: string, taskId: string): string {
  return path.join(process.cwd(), `agents/tasks/${date}/${taskId}.md`);
}

function readTaskFile(date: string, taskId: string): string {
  const filePath = getTaskFilePath(date, taskId);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Task file not found: ${filePath}`);
  }
  return fs.readFileSync(filePath, "utf-8");
}

function writeTaskFile(date: string, taskId: string, content: string): void {
  const filePath = getTaskFilePath(date, taskId);
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, content, "utf-8");
}

function updateTaskSection(
  content: string,
  sectionName: string,
  newSectionContent: string
): string {
  // Find the section header
  const sectionRegex = new RegExp(
    `(##\\s+${sectionName}[^\\n]*\\n)([\\s\\S]*?)(?=\\n##\\s+|$)`,
    "i"
  );

  const match = content.match(sectionRegex);
  if (!match) {
    // Section doesn't exist, append it
    return content + `\n\n## ${sectionName}\n${newSectionContent}\n`;
  }

  // Replace the section content
  return content.replace(sectionRegex, `$1${newSectionContent}\n`);
}

// ============================================================================
// Tool Definitions
// ============================================================================

/**
 * Reads a task file from .pm/agents/tasks/
 */
export const readTaskFileTool = tool(
  "ReadTaskFile",
  "Reads a task file from the PM framework task directory",
  {
    date: z.string().describe("Date folder in YYYY-MM-DD format"),
    taskId: z.string().describe("Task ID like fe-task-001 or be-task-001"),
  },
  async (args) => {
    try {
      const content = readTaskFile(args.date, args.taskId);
      return {
        content: [
          {
            type: "text" as const,
            text: `Task File: ${args.taskId} (${args.date})\n\n${content}`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text" as const,
            text: `Error reading task file: ${(error as Error).message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

/**
 * Writes to the AGENT REPORT section of a task file
 */
export const writeAgentReportTool = tool(
  "WriteAgentReport",
  "Writes the agent's report to the AGENT REPORT section of a task file",
  {
    date: z.string().describe("Date folder in YYYY-MM-DD format"),
    taskId: z.string().describe("Task ID like fe-task-001"),
    report: z.string().describe("Report content in markdown format"),
  },
  async (args) => {
    try {
      const content = readTaskFile(args.date, args.taskId);
      const updatedContent = updateTaskSection(
        content,
        "🤖 AGENT REPORT",
        args.report
      );
      writeTaskFile(args.date, args.taskId, updatedContent);

      return {
        content: [
          {
            type: "text" as const,
            text: `Successfully wrote agent report to ${args.taskId}`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text" as const,
            text: `Error writing agent report: ${(error as Error).message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

/**
 * Updates the CASE LOG section (used by Manager AI)
 */
export const updateCaseLogTool = tool(
  "UpdateCaseLog",
  "Updates the CASE LOG section of a task file (Manager AI use)",
  {
    date: z.string().describe("Date folder in YYYY-MM-DD format"),
    taskId: z.string().describe("Task ID"),
    caseLog: z.string().describe("Case log content in markdown"),
  },
  async (args) => {
    try {
      const content = readTaskFile(args.date, args.taskId);
      const updatedContent = updateTaskSection(
        content,
        "📝 CASE LOG \\(Manager AI\\)",
        args.caseLog
      );
      writeTaskFile(args.date, args.taskId, updatedContent);

      return {
        content: [
          {
            type: "text" as const,
            text: `Successfully updated case log for ${args.taskId}`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text" as const,
            text: `Error updating case log: ${(error as Error).message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

/**
 * Writes to the AUDIT REPORT section
 */
export const writeAuditReportTool = tool(
  "WriteAuditReport",
  "Writes audit findings to the AUDIT REPORT section (Auditor use)",
  {
    date: z.string().describe("Date folder in YYYY-MM-DD format"),
    taskId: z.string().describe("Task ID"),
    auditReport: z.string().describe("Audit report in markdown"),
  },
  async (args) => {
    try {
      const content = readTaskFile(args.date, args.taskId);
      const updatedContent = updateTaskSection(
        content,
        "✅ AUDIT REPORT",
        args.auditReport
      );
      writeTaskFile(args.date, args.taskId, updatedContent);

      return {
        content: [
          {
            type: "text" as const,
            text: `Successfully wrote audit report to ${args.taskId}`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text" as const,
            text: `Error writing audit report: ${(error as Error).message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

/**
 * Creates a new task file from template
 */
export const createTaskFileTool = tool(
  "CreateTaskFile",
  "Creates a new task file from template (Manager AI use)",
  {
    date: z.string().describe("Date folder in YYYY-MM-DD format"),
    taskId: z.string().describe("Task ID like fe-task-001"),
    type: z.enum(["fe", "be"]).describe("Frontend or backend task"),
    instructions: z.string().describe("Content for AGENT INSTRUCTIONS section"),
  },
  async (args) => {
    try {
      const templatePath = path.join(
        process.cwd(),
        `agents/templates/${args.type}-task-template.md`
      );

      if (!fs.existsSync(templatePath)) {
        throw new Error(`Template not found: ${templatePath}`);
      }

      let content = fs.readFileSync(templatePath, "utf-8");

      // Replace AGENT INSTRUCTIONS section
      content = updateTaskSection(
        content,
        "📋 AGENT INSTRUCTIONS",
        args.instructions
      );

      writeTaskFile(args.date, args.taskId, content);

      return {
        content: [
          {
            type: "text" as const,
            text: `Successfully created task file: ${args.taskId} at agents/tasks/${args.date}/${args.taskId}.md`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text" as const,
            text: `Error creating task file: ${(error as Error).message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

/**
 * Updates NOW.md with current progress
 */
export const updateNOWTool = tool(
  "UpdateNOW",
  "Updates NOW.md with current project status (Manager AI use)",
  {
    updates: z.string().describe("Updates to add to NOW.md"),
  },
  async (args) => {
    try {
      const nowPath = path.join(process.cwd(), "NOW.md");
      let content = fs.existsSync(nowPath)
        ? fs.readFileSync(nowPath, "utf-8")
        : "# NOW - Current Project Status\n\n";

      // Append updates with timestamp
      const timestamp = new Date().toISOString();
      content += `\n\n## Update: ${timestamp}\n${args.updates}\n`;

      fs.writeFileSync(nowPath, content, "utf-8");

      return {
        content: [
          {
            type: "text" as const,
            text: "Successfully updated NOW.md",
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text" as const,
            text: `Error updating NOW.md: ${(error as Error).message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

// ============================================================================
// Export MCP Server
// ============================================================================

export const pmToolsServer = createSdkMcpServer({
  name: "pm-framework-tools",
  version: "2.0.0",
  tools: [
    readTaskFileTool,
    writeAgentReportTool,
    updateCaseLogTool,
    writeAuditReportTool,
    createTaskFileTool,
    updateNOWTool,
  ],
});
