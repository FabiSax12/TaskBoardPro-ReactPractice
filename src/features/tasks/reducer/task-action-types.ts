import type { Task } from "../types/Task";

export const TASK_ACTION_TYPES = {
    ADD_TASK: 'ADD_TASK',
    UPDATE_TASK: 'UPDATE_TASK',
    DELETE_TASK: 'DELETE_TASK',
    TOGGLE_TASK_COMPLETION: 'TOGGLE_TASK_COMPLETION',
} as const;

type TaskDeleteAction = {
    type: typeof TASK_ACTION_TYPES.DELETE_TASK;
    payload: Task["id"];
}

type TaskUpdateAction = {
    type: typeof TASK_ACTION_TYPES.UPDATE_TASK;
    payload: Task;
}

type TaskToggleCompletionAction = {
    type: typeof TASK_ACTION_TYPES.TOGGLE_TASK_COMPLETION;
    payload: Task["id"];
}

type TaskAddAction = {
    type: typeof TASK_ACTION_TYPES.ADD_TASK;
    payload: Task;
}

export type TaskAction = TaskAddAction | TaskUpdateAction | TaskDeleteAction | TaskToggleCompletionAction;