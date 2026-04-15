export const TASK_STATUS = {
    ALL: "all",
    INCOMPLETE: "incomplete",
    COMPLETED: "completed",
} as const;

export type TaskStatus = typeof TASK_STATUS[keyof typeof TASK_STATUS];