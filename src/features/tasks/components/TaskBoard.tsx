import React, { useReducer, useState } from "react"
import { TaskForm } from "./TaskForm"
import { TaskList } from "./TaskList"
import { type Task } from "../types/Task"
import { TASK_UI_TEXT } from "../constants/task-ui.constants"
import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"
import { taskReducer } from "../reducer/task.reducer"
import { TASK_ACTION_TYPES, type TaskAction } from "../reducer/task-action-types"

export function TaskBoard() {
    const SectionTag = HTML_TAGS.SECTION;
    const HeaderTag = HTML_TAGS.H2;


    const [taskText, setTaskText] = useState("")
    const [tasks, dispatch] = useReducer<Task[], [TaskAction]>(taskReducer, [])

    const handleTaskTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskText(event.target.value)
    }

    const handleAddTask = () => {
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
    }

    return (
        <SectionTag>
            <HeaderTag>{TASK_UI_TEXT.BOARD_TITLE}</HeaderTag>

            <TaskForm
                taskText={taskText}
                onTaskTextChange={handleTaskTextChange}
                onAddTask={handleAddTask}
            />

            <TaskList tasks={tasks} />
        </SectionTag>
    )
}