import { TASK_UI_TEXT } from "../constants/task-ui.constants"
import type { Task } from "../types/Task"

interface Props {
    tasks: Task[]
}

export function TaskList({ tasks }: Props) {
    return (
        <section>
            <h3>{TASK_UI_TEXT.TASK_LIST_TITLE}</h3>

            {tasks.length === 0 ? (
                <p>{TASK_UI_TEXT.TASK_LIST_EMPTY}</p>
            ) : (
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>{task.title}</li>
                    ))}
                </ul>
            )}
        </section>
    )
}