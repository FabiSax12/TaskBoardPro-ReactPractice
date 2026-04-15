export const TASK_STATUS = {
    ALL: "all",
    PENDING: "pending",
    COMPLETED: "completed",
} as const;

export type TaskStatus = typeof TASK_STATUS[keyof typeof TASK_STATUS];