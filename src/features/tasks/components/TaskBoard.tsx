import { useState } from "react"
import { TaskForm } from "./TaskForm"
import { TaskList } from "./TaskList"
import { type Task } from "../types/Task"
import { TASK_UI_TEXT } from "../constants/task-ui.constants"
import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"

export function TaskBoard() {
    const SectionTag = HTML_TAGS.SECTION;
    const HeaderTag = HTML_TAGS.H2;


    const [taskText, setTaskText] = useState("")
    const [tasks, setTasks] = useState<Task[]>([])

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

        setTasks([...tasks, newTask])
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