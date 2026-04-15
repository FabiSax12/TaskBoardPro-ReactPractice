import { HTML_TAGS } from "../../../shared/constants/html-tags.constants";
import { TASK_UI_TEXT } from "../constants/task-ui.constants";
import type { Task } from "../types/Task";

interface Props {
    task: Task;
    onToggleCompletion: (id: Task["id"]) => void;
    onDeleteTask: (id: Task["id"]) => void
}

export const TaskCard = ({ onDeleteTask, onToggleCompletion, task }: Props) => {
    const ListItemTag = HTML_TAGS.LI;
    const ButtonTag = HTML_TAGS.BUTTON;

    return (
        <ListItemTag key={task.id}>
            {task.title}

            <ButtonTag onClick={() => onToggleCompletion(task.id as Task["id"])}>
                {task.completed ? TASK_UI_TEXT.TASK_STATE_COMPLETE : TASK_UI_TEXT.TASK_STATE_INCOMPLETE}
            </ButtonTag>

            <ButtonTag onClick={() => onDeleteTask(task.id)}>
                {TASK_UI_TEXT.DELETE_BUTTON}
            </ButtonTag>
        </ListItemTag>
    )

}