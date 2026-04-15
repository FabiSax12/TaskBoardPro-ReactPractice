import React, { useCallback, useMemo, useReducer, useState } from "react"
import { TaskForm } from "./TaskForm"
import { TaskList } from "./TaskList"
import { type Task } from "../types/Task"
import { TASK_UI_TEXT } from "../constants/task-ui.constants"
import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"
import { taskReducer } from "../reducer/task.reducer"
import { TASK_ACTION_TYPES, type TaskAction } from "../reducer/task-action-types"
import { TaskFilters } from "./TaskFilters"
import { TASK_STATUS, type TaskStatus } from "../constants/task-filters.constants"

export function TaskBoard() {
    const SectionTag = HTML_TAGS.SECTION;
    const HeaderTag = HTML_TAGS.H2;


    const [taskText, setTaskText] = useState("")
    const [tasks, dispatch] = useReducer<Task[], [TaskAction]>(taskReducer, [])

    const [searchText, setSearchText] = useState("");
    const [statusFilter, setStatusFilter] = useState<TaskStatus>(TASK_STATUS.ALL);

    const handleTaskTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskText(event.target.value)
    }

    const handleAddTask = useCallback(() => {
        if (taskText.trim() === "") {
            return
        }

        const newTask = {
            id: Date.now(),
            title: taskText,
            completed: false,
        }

        dispatch({ type: TASK_ACTION_TYPES.ADD_TASK, payload: newTask })
        setTaskText("")
    }, [taskText]);

    const handleDeleteTask = useCallback((id: Task["id"]) => {
        dispatch({
            type: TASK_ACTION_TYPES.DELETE_TASK,
            payload: id,
        })
    }, [])

    const handleToggleCompletion = useCallback((id: Task["id"]) => {
        dispatch({
            type: TASK_ACTION_TYPES.TOGGLE_TASK_COMPLETION,
            payload: id,
        })
    }, [])

    const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    }

    const handleStatusFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setStatusFilter(e.target.value as TaskStatus);
    }

    const filteredTasks = useMemo(() => tasks.filter((task) => {
        const matchesSearchText = task.title.toLowerCase().includes(searchText.toLowerCase());
        const matchesStatusFilter =
            statusFilter === TASK_STATUS.ALL ||
            (statusFilter === TASK_STATUS.COMPLETED && task.completed) ||
            (statusFilter === TASK_STATUS.INCOMPLETE && !task.completed);
        return matchesSearchText && matchesStatusFilter;
    }), [tasks, searchText, statusFilter]);

    return (
        <SectionTag>
            <HeaderTag>{TASK_UI_TEXT.BOARD_TITLE}</HeaderTag>

            <TaskForm
                taskText={taskText}
                onTaskTextChange={handleTaskTextChange}
                onAddTask={handleAddTask}
            />

            <TaskFilters
                searchText={searchText}
                statusFilter={statusFilter}
                onSearchTextChange={handleSearchTextChange}
                onStatusFilterChange={handleStatusFilterChange}
            />

            <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} onToggleCompletion={handleToggleCompletion} />
        </SectionTag>
    )
}