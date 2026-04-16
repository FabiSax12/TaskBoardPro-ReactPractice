import { useCallback, useReducer } from "react"
import { TASK_ACTION_TYPES, type TaskAction } from "../reducer/task-action-types"
import { taskReducer } from "../reducer/task.reducer"
import type { Task } from "../types/Task"

export const useTasks = () => {
    const [tasks, dispatch] = useReducer<Task[], [TaskAction]>(taskReducer, [])

    const addTask = useCallback((title: string) => {
        const newTask: Task = {
            id: Date.now(),
            title,
            completed: false,
        }
        dispatch({ type: TASK_ACTION_TYPES.ADD_TASK, payload: newTask })
    }, [dispatch])

    const deleteTask = useCallback((id: Task["id"]) => {
        dispatch({ type: TASK_ACTION_TYPES.DELETE_TASK, payload: id })
    }, [dispatch])

    const toggleTask = useCallback((id: Task["id"]) => {
        dispatch({ type: TASK_ACTION_TYPES.TOGGLE_TASK_COMPLETION, payload: id })
    }, [dispatch])

    return {
        tasks,
        addTask,
        deleteTask,
        toggleTask,
    }
}
