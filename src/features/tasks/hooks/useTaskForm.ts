import { useCallback, useState } from "react"

export const useTaskForm = (onAddTask: (title: string) => void) => {
    const [taskText, setTaskText] = useState("")

    const handleTaskTextChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskText(event.target.value)
    }, [])

    const handleAddTask = useCallback(() => {
        if (!taskText.trim()) return
        onAddTask(taskText)
        setTaskText("")
    }, [taskText, onAddTask])

    return {
        taskText,
        handleTaskTextChange,
        handleAddTask,
    }
}
