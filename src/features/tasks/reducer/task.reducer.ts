import type { Task } from "../types/Task";
import { TASK_ACTION_TYPES, type TaskAction } from "./task-action-types";

export function taskReducer(state: Task[], action: TaskAction): Task[] {

    switch (action.type) {
        case TASK_ACTION_TYPES.ADD_TASK:
            return [...state, action.payload]

        case TASK_ACTION_TYPES.UPDATE_TASK:
            return state.map(task =>
                task.id === action.payload.id ? { ...task, ...action.payload } : task
            )
        case TASK_ACTION_TYPES.DELETE_TASK:
            return state.filter(task => task.id !== action.payload)

        case TASK_ACTION_TYPES.TOGGLE_TASK_COMPLETION:
            return state.map(task =>
                task.id === action.payload ? { ...task, completed: !task.completed } : task
            )
        default:
            return state
    }
}