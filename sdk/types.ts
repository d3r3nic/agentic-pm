/**
 * TypeScript type definitions for Task-Driven PM Framework
 */

export interface TaskFileMetadata {
  date: string;        // YYYY-MM-DD
  taskId: string;      // fe-task-001, be-task-001, etc.
  fullPath: string;    // .pm/agents/tasks/2025-10-22/fe-task-001.md
}

export interface AgentReport {
  status: "pending" | "in_progress" | "completed" | "failed";
  filesCreated?: string[];
  filesModified?: string[];
  whatWasBuilt?: string;
  errors?: string[];
  performanceMetrics?: PerformanceMetrics;
}

export interface PerformanceMetrics {
  durationMs: number;
  costUsd: number;
  tokens: {
    input: number;
    output: number;
    cached?: number;
  };
}

export interface CaseLog {
  context: string;
  dependencies?: string[];
  nextSteps?: string[];
  progressTracking?: ProgressItem[];
}

export interface ProgressItem {
  task: string;
  status: "completed" | "in_progress" | "pending";
}

export interface AuditReport {
  status: "passed" | "failed" | "warnings";
  violations?: string[];
  recommendations?: string[];
  score?: number;
}

export interface SessionMetadata {
  currentWeek: string;
  sessionId: string;
  started: string;       // ISO date
  lastResumed: string;   // ISO date
  tasksCompleted: number;
  tasksPending: number;
}

export interface WeeklySummary {
  week: string;
  tasksCompleted: number;
  totalCost: number;
  averageTaskCost: number;
  totalDuration: number;  // in hours
  status: "in_progress" | "completed";
}
