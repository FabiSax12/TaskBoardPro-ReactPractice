import { TASK_UI_TEXT } from "../constants/task-ui.constants"

interface Props {
    taskText: string
    onTaskTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onAddTask: () => void
}

export function TaskForm({ taskText, onTaskTextChange, onAddTask }: Props) {
    return (
        <section>
            <h3>{TASK_UI_TEXT.FORM_TITLE}</h3>

            <input
                type="text"
                value={taskText}
                onChange={onTaskTextChange}
                placeholder={TASK_UI_TEXT.INPUT_PLACEHOLDER}
            />

            <button onClick={onAddTask}>{TASK_UI_TEXT.ADD_BUTTON}</button>
        </section>
    )
}