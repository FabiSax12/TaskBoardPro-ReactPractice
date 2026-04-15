import { useState } from "react"
import { TaskForm } from "./TaskForm"
import { TaskList } from "./TaskList"
import { type Task } from "../types/Task"
import { TASK_UI_TEXT } from "../constants/task-ui.constants"

export function TaskBoard() {
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
        <section>
            <h2>{TASK_UI_TEXT.BOARD_TITLE}</h2>

            <TaskForm
                taskText={taskText}
                onTaskTextChange={handleTaskTextChange}
                onAddTask={handleAddTask}
            />

            <TaskList tasks={tasks} />
        </section>
    )
}